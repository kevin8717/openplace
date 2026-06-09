import { App, Response } from "@tinyhttp/app";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest } from "../types/index.js";
import { prisma } from "../config/database.js";
import crypto from "crypto";

export default function (app: App) {
	// 原 WAF 回跳
	app.get("/challenge", async (req, res) => {
		let returnTo = req.query["r"] as string ?? "/";
		if (!returnTo.startsWith("/")) {
			returnTo = "/";
		}
		return res.redirect(returnTo);
	});

	// ── 假反作弊挑战系统 ──
	// 所有验证都直接通过，用于开发和测试

	// POST /anticheat/challenge/verify — 统一验证入口（永远通过）
	app.post("/anticheat/challenge/verify", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		await prisma.userChallenge.upsert({
			where: { userId: req.user!.id },
			create: { userId: req.user!.id, needsChallenge: false, challengeTier: null, phoneVerified: true, verifiedAt: new Date() },
			update: { needsChallenge: false, challengeTier: null, phoneVerified: true, verifiedAt: new Date() }
		}).catch(() => {});
		return res.status(200).json({ success: true });
	});

	// GET /anticheat/otp/cooldown — 冷却时间（返回 0）
	app.get("/anticheat/otp/cooldown", authMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		return res.json({ cooldownMs: 0 });
	});

	// POST /anticheat/otp/send — 发送 OTP（假发送，任何号码都成功）
	app.post("/anticheat/otp/send", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		const { phone } = req.body as { phone?: string };
		if (!phone) {
			return res.status(400).json({ error: "Phone number required" });
		}

		// 计算电话哈希（SHA-256）
		const phoneHash = crypto.createHash("sha256").update(phone).digest("hex");

		// 检查是否已绑定到其他账号
		const existing = await prisma.userChallenge.findFirst({
			where: { phoneHash, userId: { not: req.user!.id } }
		});
		if (existing) {
			return res.status(409).json({ error: "Phone already used" });
		}

		await prisma.userChallenge.upsert({
			where: { userId: req.user!.id },
			create: { userId: req.user!.id, phoneHash, needsChallenge: true, challengeTier: 4 },
			update: { phoneHash, needsChallenge: true, challengeTier: 4 }
		});

		// 假发送，直接返回成功
		return res.json({
			channel: "sms",
			phone: phone.replace(/\d(?=\d{4})/g, "*"),
			cooldownMs: 0
		});
	});

	// POST /anticheat/captcha/session — captcha session（假验证）
	app.post("/anticheat/captcha/session", authMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		const fakeSessionId = crypto.randomUUID();
		return res.json({ sessionId: fakeSessionId });
	});

	// GET /anticheat/pow/challenge — PoW 题（difficulty=0，前端 Worker 立即找到 nonce）
	app.get("/anticheat/pow/challenge", authMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		return res.json({
			challengeId: crypto.randomUUID(),
			prefix: crypto.randomBytes(8).toString("hex"),
			difficulty: 0
		});
	});
}
