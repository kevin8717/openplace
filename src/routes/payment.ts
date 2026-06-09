import { App, Response } from "@tinyhttp/app";
import { authMiddleware } from "../middleware/auth.js";
import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.js";
import { AuthenticatedRequest } from "../types/index.js";

// 前端 droplet 商品配置（与 BVrGTOqX.js 一致）
const DROPLET_PRODUCTS: Record<string, { droplets: number; bonus: number }> = {
	"droplets_5":   { droplets: 25000, bonus: 0 },
	"droplets_15":  { droplets: 75000, bonus: 3750 },
	"droplets_30":  { droplets: 150000, bonus: 15000 },
	"droplets_50":  { droplets: 250000, bonus: 37500 },
	"droplets_75":  { droplets: 375000, bonus: 75000 },
	"droplets_100": { droplets: 500000, bonus: 125000 },
};

// 内存模拟支付会话存储（仅开发测试用，重启后丢失）
const mockSessions = new Map<string, {
	userId: number;
	lookupKey: string;
	product: { droplets: number; bonus: number };
	paid: boolean;
	createdAt: Date;
}>();

export default function (app: App) {

	// 前端 <CiRk4_t8.js> 调用 je.createEmbeddedCheckout(lookupKey) ：
	//   POST /payment/create-checkout-session
	//   JSON body: { lookup_key: "droplets_5" }
	//   期望 JSON 响应: { clientSecret, sessionId }
	//
	// 模拟 Stripe Embedded Checkout Session 创建
	app.post("/payment/create-checkout-session", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const { lookup_key: lookupKey } = req.body ?? {};
			if (!lookupKey || typeof lookupKey !== "string") {
				return res.status(400).json({ error: "Missing or invalid lookup_key" });
			}

			const product = DROPLET_PRODUCTS[lookupKey];
			if (!product) {
				return res.status(400).json({ error: "Unknown product", lookupKey });
			}

			// 生成模拟的 Stripe session
			const sessionId = `cs_live_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
			const clientSecret = `${sessionId}_secret_${Math.random().toString(36).slice(2, 16)}`;

			mockSessions.set(sessionId, {
				userId: req.user!.id,
				lookupKey,
				product,
				paid: false,
				createdAt: new Date(),
			});

			return res.json({ clientSecret, sessionId });
		} catch (error) {
			console.error("Payment create-checkout-session error:", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	});

	// 模拟支付确认端点（由 mock.html 调用）
	// 正常逻辑中这是第三方支付回调处理的地方
	app.post("/payment/mock/confirm", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const { session_id } = req.body ?? {};
			if (!session_id || !mockSessions.has(session_id)) {
				return res.status(400).json({ error: "Invalid or missing session_id" });
			}

			const session = mockSessions.get(session_id)!;

			if (session.paid) {
				// 幂等：防止重复处理
				const total = session.product.droplets + session.product.bonus;
				return res.json({ redirect: `/payment/success?droplets=${total}&session_id=${session_id}` });
			}

			// 标记已支付（先于数据库操作，防止并发重复处理）
			session.paid = true;

			// 执行支付逻辑
			await processPayment(session);

			const total = session.product.droplets + session.product.bonus;
			return res.json({ redirect: `/payment/success?droplets=${total}&session_id=${session_id}` });
		} catch (error) {
			console.error("Mock payment confirm error:", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	});

	// 模拟执行支付（添加 droplets 到用户账户）
	async function processPayment(session: NonNullable<typeof mockSessions extends Map<string, infer V> ? V : never>): Promise<void> {
		let retries = 3;
		while (retries > 0) {
			try {
				await prisma.$transaction(async (tx) => {
					const rows = await tx.$queryRaw<{ id: number }[]>(
						Prisma.sql`SELECT id FROM User WHERE id = ${session.userId} FOR UPDATE`
					);
					if (rows.length === 0) return;

					await tx.user.update({
						where: { id: session.userId },
						data: { droplets: { increment: session.product.droplets + session.product.bonus } }
					});
					await tx.userNote.create({
						data: {
							userId: session.userId,
							reportedUserId: session.userId,
							content: `Payment (simulated): ${session.lookupKey} — +${session.product.droplets + session.product.bonus} droplets`
						}
					});
				}, { isolationLevel: "ReadCommitted" });
				return;
			} catch (error: any) {
				retries--;
				if (retries > 0 && (
					error.message?.includes("Record has changed since last read") ||
					error.code === "P2034"
				)) {
					await new Promise(r => setTimeout(r, 100));
					continue;
				}
				throw error;
			}
		}
	}

	// 前端 Stripe Embedded Checkout 支付完成后调用：
	//   POST /payment/refresh-session/:sessionId
	//   模拟确认支付并添加 droplets
	app.post("/payment/refresh-session/:sessionId", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const { sessionId } = req.params;

			if (!sessionId) {
				return res.status(400).json({ error: "Missing session_id" });
			}

			const session = mockSessions.get(sessionId);
			if (!session) {
				return res.status(200).json({ ok: true, note: "session not found, may have expired" });
			}

			if (!session.paid) {
				session.paid = true;
				await processPayment(session);
			}

			return res.status(200).json({
				ok: true,
				paid: true,
				lookupKey: session.lookupKey,
			});
		} catch (error) {
			console.error("Refresh session error:", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	});
}
