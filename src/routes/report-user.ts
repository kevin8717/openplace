import { App, Response } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { TicketService } from "../services/ticket.js";
import { UserService } from "../services/user.js";
import { AuditService, AuditAction } from "../services/audit.js";
import { AuthenticatedRequest, BanReason, TicketResolution } from "../types/index.js";
import { authMiddleware } from "../middleware/auth.js";
import { adminMiddleware } from "./admin.js";
import { PixelService } from "../services/pixel.js";
import { RegionService } from "../services/region.js";
import multer from "multer";

const ticketService = new TicketService(prisma);
const userService = new UserService(prisma);
const auditService = new AuditService(prisma);
const pixelService = new PixelService(prisma);

async function makeTicket(req: AuthenticatedRequest, res: Response): Promise<{ ticketId: string } | undefined> {
	const reportedUserId = Number.parseInt(req.body.reportedUserId ?? -1);
	const latitude = Number.parseFloat(req.body.latitude ?? -1);
	const longitude = Number.parseFloat(req.body.longitude ?? -1);
	const zoom = Number.parseFloat(req.body.zoom ?? -1);
	const reason = req.body.reason;
	const notes = req.body.notes;

	// 如果前端没有上传图片，自动从本地瓦片服务截取坐标位置的截图
	let imageBase64: string | undefined;
	if (req.file?.buffer) {
		imageBase64 = req.file.buffer.toString("base64");
	} else if (req.body.imageBase64) {
		imageBase64 = req.body.imageBase64;
	} else if (!Number.isNaN(latitude) && !Number.isNaN(longitude)) {
		try {
			const [tileX, tileY] = RegionService.coordinatesToTile(latitude, longitude);
			const { buffer } = await pixelService.getTileImage(tileX, tileY, 0);
			imageBase64 = buffer.toString("base64");
		} catch (error) {
			console.error("Error fetching tile image for report:", error);
		}
	}

	if (!reportedUserId || !latitude || !longitude || !zoom || !reason) {
		res.status(400)
			.json({ error: "Parameters missing", status: 400 });
		return;
	}

	// negative user ids can correlate to the suspended account user or a system account. so we are going to block those requests.
	// if (reportedUserId < 0) {
	// 	res.status(400)
	// 		.json({ error: "You cannot report a user id with a negative integer.", status: 400 });
	// 	return;
	// }

	if (!notes || notes.length < 5) {
		res.status(400)
			.json({ error: "Note must be at least 5 characters", status: 400 });
		return;
	}

	// if (!imageBase64) {
	// 	res.status(400)
	// 		.json({ error: "Image is required", status: 400 });
	// 	return;
	// }

	if (Number.isNaN(latitude) || Number.isNaN(longitude) || Number.isNaN(zoom)) {
		res.status(400)
			.json({ error: "Invalid coordinates", status: 400 });
		return;
	}

	if (!Object.values(BanReason)
		.includes(reason)) {
		res.status(400)
			.json({ error: "Invalid ban reason", status: 400 });
		return;
	}

	return await ticketService.reportUser({
		reportingUserId: req.user!.id,
		reportedUserId,
		latitude,
		longitude,
		zoom,
		reason: reason as BanReason,
		notes,
		...(imageBase64 ? { imageBase64 } : {})
	});
}

export default function (app: App) {
	const imageUpload = multer({
		storage: multer.memoryStorage(),
		limits: {
			fileSize: 10 * 1024 * 1024, // 10MB
			files: 1
		},
		fileFilter: (_req, file, cb) => {
			// Chỉ cho phép image files
			if (file.mimetype.startsWith("image/")) {
				cb(null, true);
			} else {
				cb(new Error("Only image files are allowed"));
			}
		}
	});

	const useMulterSingle = (field: string) => (req: any, res: any, next?: any) => (imageUpload.single(field) as any)(req as any, res as any, next as any);

	app.post("/report-user", authMiddleware, useMulterSingle("image"), async (req: AuthenticatedRequest, res) => {
		try {
			const ticket = await makeTicket(req, res);
			if (!ticket) {
				return;
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error reporting user:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// POST /report/user/name — 举报不当用户名
	app.post("/report/user/name", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { userId } = req.body ?? {};
			if (!userId || typeof userId !== "number") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			// Verify reported user exists
			const reportedUser = await prisma.user.findUnique({ where: { id: userId } });
			if (!reportedUser) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			// Find existing open ticket for this user, or create a new one
			let ticket = await prisma.ticket.findFirst({
				where: {
					reportedUserId: userId,
					resolution: null
				}
			});

			if (!ticket) {
				ticket = await prisma.ticket.create({
					data: {
						userId: req.user!.id,
						reportedUserId: userId
					}
				});
			}

			// Add a report entry
			await prisma.report.create({
				data: {
					ticketId: ticket.id,
					userId: req.user!.id,
					reason: "inappropriate-content",
					notes: `Inappropriate username: ${reportedUser.nickname || reportedUser.name}`,
					latitude: 0,
					longitude: 0,
					zoom: 0
				}
			});

			return res.status(200).json({});
		} catch (error) {
			console.error("Error reporting user name:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// POST /report/alliance/name — 举报不当公会名
	app.post("/report/alliance/name", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { allianceId } = req.body ?? {};
			if (!allianceId || typeof allianceId !== "number") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			// Verify alliance exists
			const alliance = await prisma.alliance.findUnique({ where: { id: allianceId } });
			if (!alliance) {
				return res.status(404)
					.json({ error: "Alliance not found", status: 404 });
			}

			// Find a member of this alliance to use as the reportedUserId
			const member = await prisma.user.findFirst({
				where: { allianceId, role: "user" },
				orderBy: { id: "asc" }
			});

			const reportedUserId = member?.id ?? 0;

			// Find existing open ticket for this alliance member, or create a new one
			let ticket = await prisma.ticket.findFirst({
				where: {
					reportedUserId,
					resolution: null
				}
			});

			if (!ticket) {
				ticket = await prisma.ticket.create({
					data: {
						userId: req.user!.id,
						reportedUserId
					}
				});
			}

			// Add a report entry
			await prisma.report.create({
				data: {
					ticketId: ticket.id,
					userId: req.user!.id,
					reason: "inappropriate-content",
					notes: `Inappropriate alliance name: ${alliance.name} (allianceId: ${allianceId})`,
					latitude: 0,
					longitude: 0,
					zoom: 0
				}
			});

			return res.status(200).json({ success: true });
		} catch (error) {
			console.error("Error reporting alliance name:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// 直接封禁用户，不是创建ticket。这个接口是给select-pixel和select-area工具用的，管理员可以直接选中一个用户进行封禁，而不需要创建ticket再去处理。
	// 前端通过 postUsersSuspend 发送 JSON，字段名是 userIds（数组）
	app.post(["/staff/tools/select-pixel/ban", "/staff/tools/select-area/ban"], authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { userIds, reason, notes } = req.body ?? {};
			if (!Array.isArray(userIds) || userIds.length === 0 || typeof reason !== "string") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const validIds = userIds.filter((id: unknown) => typeof id === "number" && id > 0);
			if (validIds.length === 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			if (!Object.values(BanReason).includes(reason as BanReason)) {
				return res.status(400)
					.json({ error: "Invalid ban reason", status: 400 });
			}

			if (!notes || notes.length < 5) {
				return res.status(400)
					.json({ error: "Note must be at least 5 characters", status: 400 });
			}

			for (const id of validIds) {
				await userService.ban(id, true, reason as BanReason);
				await auditService.log({
					action: AuditAction.ManualBan,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `Via select-pixel/select-area tool - ${reason}: ${notes}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error banning user via select tool:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// 直接禁言用户，不是创建ticket。供select-pixel和select-area工具使用。
	app.post(["/staff/tools/select-pixel/timeout", "/staff/tools/select-area/timeout"], authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { userIds, reason, notes } = req.body ?? {};
			if (!Array.isArray(userIds) || userIds.length === 0 || typeof reason !== "string") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const validIds = userIds.filter((id: unknown) => typeof id === "number" && id > 0);
			if (validIds.length === 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			if (!notes || notes.length < 5) {
				return res.status(400)
					.json({ error: "Note must be at least 5 characters", status: 400 });
			}

			for (const id of validIds) {
				await userService.timeout(id, true, reason);
				await auditService.log({
					action: AuditAction.ManualTimeout,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `Via select-pixel/select-area tool - ${reason}: ${notes}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error timing out user via select tool:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/moderator/timeout-user", authMiddleware, adminMiddleware, useMulterSingle("image"), async (req: AuthenticatedRequest, res) => {
		try {
			const ticket = await makeTicket(req, res);
			if (!ticket) {
				return;
			}

			await ticketService.resolve(ticket.ticketId, req.user!.id, TicketResolution.Timeout);

			const createdTicket = await prisma.ticket.findUnique({
				where: { id: ticket.ticketId },
				select: { reportedUserId: true }
			});
			if (createdTicket) {
				await auditService.log({
					action: AuditAction.Timeout,
					actorUserId: req.user!.id,
					targetUserId: createdTicket.reportedUserId,
					details: "Via moderator timeout-user tool",
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error reporting user:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});
}
