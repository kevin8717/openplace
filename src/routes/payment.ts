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

// HTML 表单以 application/x-www-form-urlencoded 提交，需要手动解析 body
function parseUrlencodedBody(req: any): Promise<Record<string, string>> {
	return new Promise((resolve, reject) => {
		let body = "";
		req.on("data", (chunk: Buffer) => { body += chunk.toString(); });
		req.on("end", () => {
			const params: Record<string, string> = {};
			for (const [key, val] of new URLSearchParams(body)) {
				params[key] = val;
			}
			resolve(params);
		});
		req.on("error", reject);
	});
}

export default function (app: App) {
	// 前端使用 <form action="/payment/create-checkout-session"> 提交，
	// 携带 hidden input: lookup_key (e.g. "droplets_5")
	// 正常流程：创建 Checkout Session → 跳转第三方支付 → 支付成功回调
	// 当前模拟：创建 mock session → 跳转模拟支付页面
	app.post("/payment/create-checkout-session", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const formData = await parseUrlencodedBody(req);
			const lookupKey = formData["lookup_key"] ?? "";
			const product = DROPLET_PRODUCTS[lookupKey];

			if (!product) {
				return res.redirect(`/?payment=error&reason=unknown_product`);
			}

			// 创建模拟 session
			const sessionId = `mock_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
			mockSessions.set(sessionId, {
				userId: req.user!.id,
				lookupKey,
				product,
				paid: false,
				createdAt: new Date(),
			});

			const total = product.droplets + product.bonus;

			// 跳转到模拟支付页面
			return res.redirect(`/payment/mock.html?session_id=${sessionId}&lookup_key=${lookupKey}&droplets=${total}`);
		} catch (error) {
			console.error("Payment error:", error);
			return res.redirect("/?payment=error");
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

			// 执行支付逻辑：添加 droplets 并记录
			// 使用 SELECT FOR UPDATE 锁定用户行 + 重试机制处理并发冲突
			let retries = 3;
			while (retries > 0) {
				try {
					await prisma.$transaction(async (tx) => {
						// 锁定用户行防止并发更新冲突
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
								content: `Payment (mock): ${session.lookupKey} — +${session.product.droplets + session.product.bonus} droplets`
							}
						});
					}, {
						isolationLevel: "ReadCommitted"
					});
					break; // 成功，退出重试循环
				} catch (error: any) {
					retries--;
					if (retries > 0 && (
						error.message?.includes("Record has changed since last read") ||
						error.code === "P2034"
					)) {
						await new Promise(r => setTimeout(r, 100));
						continue;
					}
					throw error; // 非重试错误或重试用完，向上抛
				}
			}

			const total = session.product.droplets + session.product.bonus;
			return res.json({ redirect: `/payment/success?droplets=${total}&session_id=${session_id}` });
		} catch (error) {
			console.error("Mock payment confirm error:", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	});

	// 前端 /payment/success 页面加载时，如果 URL 包含 session_id 参数则调用此端点
	// 用于确认 Checkout Session 已支付并刷新用户数据
	app.post("/payment/refresh-session/:sessionId", authMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const { sessionId } = req.params;

			if (!sessionId) {
				return res.status(400).json({ error: "Missing session_id" });
			}

			// 检查模拟 session 状态
			const session = mockSessions.get(sessionId);
			if (!session) {
				// session 不存在或已过期，但可能已通过其他方式处理过
				// 返回 200 让前端继续
				return res.status(200).json({ ok: true, note: "session not found, may have expired" });
			}

			return res.status(200).json({
				ok: true,
				paid: session.paid,
				lookupKey: session.lookupKey,
			});
		} catch (error) {
			console.error("Refresh session error:", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	});
}
