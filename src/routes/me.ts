import { App } from "@tinyhttp/app";
import multer from "multer";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/auth.js";
import { JWT_SECRET } from "../config/auth.js";
import { handleServiceError } from "../middleware/errorHandler.js";
import { UserService } from "../services/user.js";
import { AuthToken } from "../services/auth.js";
import { validateUpdateUser } from "../validators/user.js";
import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { prisma } from "../config/database.js";
import { AuthenticatedRequest, UserRole } from "../types/index.js";
import { sendEmailTo } from "../services/email.js";

// 邮箱验证中间件：接受 verifyToken（无 cookie 时的临时凭证）
const emailVerifyAuth = async (req: AuthenticatedRequest, res: any, next: any) => {
	try {
		const token = req.headers["x-verify-token"] as string;
		if (!token) {
			// 退回到普通 authMiddleware
			return authMiddleware(req, res, next);
		}
		const decoded = jwt.verify(token, JWT_SECRET!) as any;
		if (decoded.scope !== "email-verify") {
			return res.status(401).json({ error: "Invalid token scope" });
		}
		req.user = { id: decoded.userId, sessionId: "" };
		next?.();
	} catch {
		return res.status(401).json({ error: "Invalid or expired verify token" });
	}
};

	// 邮箱验证码存储（生产环境应改用 Redis）
const emailVerificationCodes = new Map<number, { email: string; code: string; expiresAt: number }>();
// 每日发送计数：key = `userId:YYYY-MM-DD`
const dailySendCount = new Map<string, number>();

function getDailyKey(userId: number): string {
	const today = new Date().toISOString().slice(0, 10);
	return `${userId}:${today}`;
}

// Security validation functions
function validateImageContent(buffer: Buffer, mimeType: string): boolean {
	// Check magic bytes (file signatures)
	const magicBytes = {
		"image/jpeg": [0xFF, 0xD8, 0xFF],
		"image/png": [0x89, 0x50, 0x4E, 0x47],
		"image/gif": [0x47, 0x49, 0x46],
		"image/webp": [0x52, 0x49, 0x46, 0x46] // RIFF header
	}; // patch malicious payload upload

	const expectedBytes = magicBytes[mimeType as keyof typeof magicBytes];
	if (!expectedBytes) return false;

	// Check if buffer starts with expected magic bytes
	for (const [i, expectedByte] of expectedBytes.entries()) {
		if (buffer[i] !== expectedByte) {
			return false;
		}
	}

	// Additional WebP validation (RIFF...WEBP)
	if (mimeType === "image/webp") {
		const webpSignature = buffer.toString("ascii", 8, 12);
		if (webpSignature !== "WEBP") {
			return false;
		}
	}

	return true;
}

function isValidBase64(str: string): boolean {
	// Check if string contains only valid base64 characters
	const base64Regex = /^[\d+/A-Za-z]*={0,2}$/;
	if (!base64Regex.test(str)) {
		return false;
	}

	// Check if length is valid (multiple of 4 after padding)
	const paddedLength = str.length + (4 - str.length % 4) % 4;
	if (paddedLength % 4 !== 0) {
		return false;
	}

	return true;
}

const userService = new UserService(prisma);

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 2 * 1024 * 1024 // 2 MB - consistent limit
	},
	fileFilter: (_req, file, cb) => {
		// Validate MIME type (primary validation)
		const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

		if (!allowedMimeTypes.includes(file.mimetype)) {
			cb(new Error("Only image files (JPG, PNG, GIF, WebP) are allowed"));
			return;
		}

		// Validate file extension (secondary validation - optional for blob files)
		const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
		const lastDotIndex = file.originalname.lastIndexOf(".");

		// If file has extension, validate it
		if (lastDotIndex !== -1) {
			const fileExtension = file.originalname.toLowerCase()
				.slice(Math.max(0, lastDotIndex));
			if (!allowedExtensions.includes(fileExtension)) {
				cb(new Error("Invalid file extension"));
				return;
			}
		}
		cb(null, true);
	}
});

const useMulterSingle = (field: string) => (req: any, res: any, next?: any) => (upload.single(field) as any)(req as any, res as any, next as any);

export default function (app: App) {
	app.get("/me", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const result = await userService.getUserProfile(req.user!.id);
			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.post("/me/update", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { name, showLastPixel, discord } = req.body;

			if (name !== undefined && typeof name !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid name type", HTTP_STATUS.BAD_REQUEST));
			}

			if (showLastPixel !== undefined && typeof showLastPixel !== "boolean") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid showLastPixel type", HTTP_STATUS.BAD_REQUEST));
			}

			if (discord !== undefined && typeof discord !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid discord type", HTTP_STATUS.BAD_REQUEST));
			}

			const validationError = validateUpdateUser({
				nickname: name,
				showLastPixel,
				discord
			});
			if (validationError) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(validationError, HTTP_STATUS.BAD_REQUEST));
			}

			const result = await userService.updateUser(req.user!.id, {
				nickname: name,
				showLastPixel,
				discord
			});
			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.get("/me/profile-pictures", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const result = await userService.getProfilePictures(req.user!.id);
			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.post("/me/profile-picture", authMiddleware, useMulterSingle("image"), async (req: AuthenticatedRequest, res) => {
		try {
			// Check user droplets before processing
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id },
				select: { droplets: true }
			});

			if (!user) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("User not found", HTTP_STATUS.NOT_FOUND));
			}

			if (user.droplets < 20_000) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("You do not have enough droplets.", HTTP_STATUS.FORBIDDEN));
			}

			// Handle file upload
			if ((req as any).file) {
				const file = (req as any).file;

				// Additional file size check (redundant but safe)
				if (file.size > 2 * 1024 * 1024) {
					return res.status(HTTP_STATUS.BAD_REQUEST)
						.json(createErrorResponse("Image file too large (max 2MB)", HTTP_STATUS.BAD_REQUEST));
				}

				// Validate file content - check magic bytes
				const buffer = file.buffer;
				const isValidImage = validateImageContent(buffer, file.mimetype);
				if (!isValidImage) {
					return res.status(HTTP_STATUS.BAD_REQUEST)
						.json(createErrorResponse("Invalid image file content", HTTP_STATUS.BAD_REQUEST));
				}

				// Convert file to base64
				const base64 = buffer.toString("base64");
				const mimeType = file.mimetype;

				// Validate base64 content
				if (!base64 || base64.length === 0 || !isValidBase64(base64)) {
					return res.status(HTTP_STATUS.BAD_REQUEST)
						.json(createErrorResponse("Invalid file data", HTTP_STATUS.BAD_REQUEST));
				}

				// Ensure base64 is properly padded
				const paddedBase64 = base64 + "=".repeat((4 - base64.length % 4) % 4);
				const pictureUrl = `data:${mimeType};base64,${paddedBase64}`;

				const result = await userService.updateProfilePicture(req.user!.id, pictureUrl);

				return res.json({
					...result,
					pictureUrl
				});
			} else {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Image file is required", HTTP_STATUS.BAD_REQUEST));
			}
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.get("/me/profile-pictures", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const pictures = await userService.getProfilePictures(req.user!.id);
			return res.json(pictures);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.post("/me/profile-picture/change", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { pictureId } = req.body ?? {};

			// If no pictureId provided (empty payload {}), set empty profile picture
			if (pictureId === undefined || pictureId === null) {
				const result = await userService.changeProfilePicture(req.user!.id, null);
				return res.json(result);
			}

			// Validate pictureId if provided
			if (typeof pictureId !== "number" || pictureId <= 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid picture ID", HTTP_STATUS.BAD_REQUEST));
			}

			const result = await userService.changeProfilePicture(req.user!.id, pictureId);
			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.delete("/me/sessions", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const result = await userService.logoutFromAllDevices(req.user!.id);
			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.delete("/me", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { confirmText } = req.body ?? {};
			const currentNickname = await userService.getNickname(req.user!.id);
			if (!currentNickname || confirmText !== currentNickname) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid confirm text", HTTP_STATUS.BAD_REQUEST));
			}
			const result = await userService.deleteAccount(req.user!.id);
			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.get("/me/badges", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id },
				select: { equippedBadges: true }
			});
			const equippedIds: number[] = user?.equippedBadges
				? JSON.parse(user.equippedBadges).filter((id: number) => id > 0)
				: [];

			const badges = await prisma.badge.findMany({
				orderBy: { createdAt: "desc" }
			});
			return res.json(badges.map(b => ({
				id: b.id,
				name: b.name,
				description: b.description,
				howToEarn: b.howToEarn,
				rarity: b.rarity,
				reward: b.reward,
				imageUrl: b.imageUrl,
				type: b.type,
				earnedAt: null as string | null,
				earned: equippedIds.includes(b.id),
				secret: b.secret
			})));
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/badges/equip — 装备徽章到三个槽位
	// 前端 postEquipUserBadge() 发送: { slotIndex0, slotIndex1, slotIndex2 }
	app.post("/me/badges/equip", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { slotIndex0, slotIndex1, slotIndex2 } = req.body ?? {};

			if (
				typeof slotIndex0 !== "number" ||
				typeof slotIndex1 !== "number" ||
				typeof slotIndex2 !== "number" ||
				!Number.isInteger(slotIndex0) ||
				!Number.isInteger(slotIndex1) ||
				!Number.isInteger(slotIndex2) ||
				slotIndex0 < 0 ||
				slotIndex1 < 0 ||
				slotIndex2 < 0
			) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid slot values", HTTP_STATUS.BAD_REQUEST));
			}

			await prisma.user.update({
				where: { id: req.user!.id },
				data: {
					equippedBadges: JSON.stringify([slotIndex0, slotIndex1, slotIndex2])
				}
			});

			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// GET /me/frames — 获取用户拥有的边框
	app.get("/me/frames", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { ownedFrames: true } });
			if (!user) {
				return res.status(401).json({ error: "Unauthorized", status: 401 });
			}
			const ownedIds: number[] = JSON.parse(user.ownedFrames);
			const frames = await prisma.frame.findMany({
				where: { id: { in: ownedIds } },
				orderBy: { createdAt: "desc" }
			});
			return res.json(frames.map(f => ({
				id: f.id,
				name: f.name,
				imageUrl: f.imageUrl,
				description: f.description,
				rarity: f.rarity,
				value: f.value,
				owned: true,
				createdAt: f.createdAt.toISOString()
			})));
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/frames/equip/:id — 装备边框
	app.post("/me/frames/equip/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const frameId = Number.parseInt(req.params["id"] as string);
			if (Number.isNaN(frameId) || frameId < 0) {
				return res.status(400).json({ error: "Bad Request", status: 400 });
			}

			await prisma.user.update({
				where: { id: req.user!.id },
				data: { equippedFrameId: frameId }
			});

			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// GET /me/cosmetics/name — 获取用户拥有的字体和样式
	app.get("/me/cosmetics/name", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { ownedFonts: true, ownedStyles: true } });
			if (!user) {
				return res.status(401).json({ error: "Unauthorized", status: 401 });
			}
			const fontIds: number[] = JSON.parse(user.ownedFonts);
			const styleIds: number[] = JSON.parse(user.ownedStyles);

			const [fonts, styles] = await Promise.all([
				prisma.fontCosmetic.findMany({ where: { id: { in: fontIds } } }),
				prisma.styleCosmetic.findMany({ where: { id: { in: styleIds } } })
			]);

			return res.json({
				fonts: fonts.map(f => ({ id: f.id, name: f.name, price: f.value, owned: true, text: f.config })),
				styles: styles.map(s => ({ id: s.id, name: s.name, price: s.value, owned: true, text: s.config }))
			});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/cosmetic/equip — 装备框/字体/样式（前端发送 { frameId, fontId, styleId }）
	app.post("/me/cosmetic/equip", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { frameId, fontId, styleId } = req.body ?? {};
			const updateData: any = {};
			if (frameId !== undefined) updateData.equippedFrameId = Number(frameId);
			if (fontId !== undefined) updateData.equippedFontId = Number(fontId);
			if (styleId !== undefined) updateData.equippedStyleId = Number(styleId);

			if (Object.keys(updateData).length === 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("No valid fields to update", HTTP_STATUS.BAD_REQUEST));
			}

			await prisma.user.update({
				where: { id: req.user!.id },
				data: updateData
			});

			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// GET /me/email — 获取用户邮箱
	app.get("/me/email", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id },
				select: { email: true }
			});
			if (!user) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("User not found", HTTP_STATUS.NOT_FOUND));
			}
			return res.json({ email: user.email ?? "" });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/email — 设置/更新邮箱
	app.post("/me/email", emailVerifyAuth, async (req: AuthenticatedRequest, res) => {
		try {
			const { email } = req.body;
			if (!email || typeof email !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Email is required", HTTP_STATUS.BAD_REQUEST));
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid email format", HTTP_STATUS.BAD_REQUEST));
			}

			const existing = await prisma.user.findUnique({
				where: { email }
			});
			if (existing && existing.id !== req.user!.id) {
				return res.status(409)
					.json(createErrorResponse("Email already in use", 409));
			}

			await prisma.user.update({
				where: { id: req.user!.id },
				data: { email }
			});

			return res.json({ success: true });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/email/send-code — 发送邮箱验证码
	app.post("/me/email/send-code", emailVerifyAuth, async (req: AuthenticatedRequest, res) => {
		try {
			const { email } = req.body;
			if (!email || typeof email !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Email is required", HTTP_STATUS.BAD_REQUEST));
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid email format", HTTP_STATUS.BAD_REQUEST));
			}

			// 每日最多发送 3 次
			const dailyKey = getDailyKey(req.user!.id);
			const todayCount = dailySendCount.get(dailyKey) ?? 0;
			if (todayCount >= 3) {
				return res.status(HTTP_STATUS.TOO_MANY_REQUESTS)
					.json(createErrorResponse("今日验证码发送次数已达上限（3次）", HTTP_STATUS.TOO_MANY_REQUESTS));
			}

			// 检查冷却时间（60 秒内不能重复发送）
			const existingCode = emailVerificationCodes.get(req.user!.id);
			if (existingCode && existingCode.expiresAt > Date.now() + 4 * 60 * 1000) {
				return res.status(HTTP_STATUS.TOO_MANY_REQUESTS)
					.json(createErrorResponse("Please wait before requesting a new code", HTTP_STATUS.TOO_MANY_REQUESTS));
			}

			// 生成 6 位验证码
			const code = Math.floor(100000 + Math.random() * 900000).toString();
			emailVerificationCodes.set(req.user!.id, {
				email,
				code,
				expiresAt: Date.now() + 5 * 60 * 1000 // 5 分钟有效
			});

			// 累计发送次数
			dailySendCount.set(dailyKey, todayCount + 1);

			// 发送验证码
			await sendEmailTo(
				email,
				"邮箱验证码 - openplace",
				`您的验证码是：${code}\n验证码有效期为 5 分钟。\n如果不是您本人操作，请忽略此邮件。`,
				`<p>您的验证码是：<b style="font-size: 24px">${code}</b></p><p>验证码有效期为 5 分钟。</p><p>如果不是您本人操作，请忽略此邮件。</p>`
			);

			return res.json({ success: true, message: "验证码已发送" });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/email/verify — 验证邮箱验证码
	app.post("/me/email/verify", emailVerifyAuth, async (req: AuthenticatedRequest, res) => {
		try {
			const { email, code } = req.body;
			if (!email || !code) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Email and code are required", HTTP_STATUS.BAD_REQUEST));
			}

			const record = emailVerificationCodes.get(req.user!.id);
			if (!record) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("No verification code requested", HTTP_STATUS.BAD_REQUEST));
			}

			if (record.email !== email) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Email mismatch", HTTP_STATUS.BAD_REQUEST));
			}

			if (Date.now() > record.expiresAt) {
				emailVerificationCodes.delete(req.user!.id);
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Verification code expired", HTTP_STATUS.BAD_REQUEST));
			}

			if (record.code !== code) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid verification code", HTTP_STATUS.BAD_REQUEST));
			}

			// 验证通过，更新邮箱
			await prisma.user.update({
				where: { id: req.user!.id },
				data: { email }
			});
			emailVerificationCodes.delete(req.user!.id);

			// 创建正式 session 并下发登录 cookie
			const session = await prisma.session.create({
				data: {
					userId: req.user!.id,
					expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
				}
			});
			const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { role: true } });
			const authToken: AuthToken = {
				userId: req.user!.id,
				sessionId: session.id,
				role: (user?.role as UserRole) ?? "user",
				iss: "openplace",
				exp: Math.floor(session.expiresAt.getTime() / 1000),
				iat: Math.floor(Date.now() / 1000)
			};
			const token = jwt.sign(authToken, JWT_SECRET!);
			res.setHeader("Set-Cookie", [
				`j=${token}; HttpOnly; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Lax`
			]);

			return res.json({ success: true });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// GET /me/pixels-painted-today — 获取今日绘制像素数
	app.get("/me/pixels-painted-today", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			const result = await prisma.pixel.count({
				where: {
					paintedBy: req.user!.id,
					paintedAt: { gte: today }
				}
			});
			return res.json({ paintedToday: result });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// GET /me/suspension — 获取用户封禁/暂停详情
	app.get("/me/suspension", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id },
				select: { banned: true, suspensionReason: true, timeoutUntil: true }
			});
			if (!user) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("User not found", HTTP_STATUS.NOT_FOUND));
			}

			const now = new Date();
			const isTimedOut = user.timeoutUntil > now;

			if (!user.banned && !isTimedOut) {
				return res.json({ active: false });
			}

			return res.json({
				active: true,
				kind: user.banned ? "ban" : "timeout",
				reason: user.suspensionReason ?? "",
				timeoutUntil: isTimedOut ? user.timeoutUntil.toISOString() : null
			});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /me/rules/read — 标记规则已读
	app.post("/me/rules/read", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			await prisma.user.update({
				where: { id: req.user!.id },
				data: { rulesRead: true }
			});
			return res.status(200).json({ success: true });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// 简易电话验证：生成验证码（开发模式用固定码 "123456"）
	const verificationCodes = new Map<number, { phone: string; code: string; expiresAt: number }>();

	app.post("/me/send-verification-code", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { phone } = req.body ?? {};
			if (!phone || typeof phone !== "string" || phone.length < 5) {
				return res.status(400).json({ error: "Invalid phone number" });
			}

			// 生成 6 位验证码
			const code = String(Math.floor(100000 + Math.random() * 900000));
			verificationCodes.set(req.user!.id, {
				phone,
				code,
				expiresAt: Date.now() + 5 * 60 * 1000 // 5 分钟有效
			});

			console.log(`[PhoneVerify] User ${req.user!.id}: code=${code} (would send SMS to ${phone})`);

			return res.json({ success: true, message: "Code sent" });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	app.post("/me/verify-phone", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { code } = req.body ?? {};
			const stored = verificationCodes.get(req.user!.id);

			if (!stored) {
				return res.status(400).json({ error: "No code sent. Please request a code first." });
			}

			if (Date.now() > stored.expiresAt) {
				verificationCodes.delete(req.user!.id);
				return res.status(400).json({ error: "Code expired. Please request a new code." });
			}

			if (stored.code !== code) {
				return res.status(400).json({ error: "Invalid code" });
			}

			await prisma.userChallenge.upsert({
				where: { userId: req.user!.id },
				create: { userId: req.user!.id, needsChallenge: false, challengeTier: null, phoneVerified: true, verifiedAt: new Date() },
				update: { needsChallenge: false, challengeTier: null, phoneVerified: true, verifiedAt: new Date() }
			});

			verificationCodes.delete(req.user!.id);
			console.log(`[PhoneVerify] User ${req.user!.id} verified successfully`);

			return res.json({ success: true, message: "Phone verified" });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});
}
