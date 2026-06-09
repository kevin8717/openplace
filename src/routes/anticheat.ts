import { App, Response } from "@tinyhttp/app";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest } from "../types/index.js";

export const adminMiddleware = async (req: AuthenticatedRequest, res: Response, next?: any) => {
	try {
		const { prisma } = await import("../config/database.js");
		const user = await prisma.user.findUnique({
			where: { id: req.user!.id }
		});
		if (!user || user.role !== "admin") {
			return res.status(403).json({ error: "Forbidden", status: 403 });
		}
		return next?.();
	} catch (error) {
		console.error("Error fetching user:", error);
		return res.status(500).json({ error: "Internal Server Error", status: 500 });
	}
};

export default function (app: App) {

	// GET /staff/dashboard/anticheat/stats?from=&to=
	app.get("/staff/dashboard/anticheat/stats", authMiddleware, adminMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		try {
			return res.json({
				challengeTimeline: [],
				challengeTimelineByCategory: [],
				signalBreakdown: [],
				isolatedSignals: [],
				triggeredByTier: [],
				usersWithChallenges: 0
			});
		} catch (error) {
			console.error("Anticheat stats error:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// GET /staff/dashboard/anticheat/signals?from=&to=
	app.get("/staff/dashboard/anticheat/signals", authMiddleware, adminMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		try {
			return res.json({
				timeline: [],
				topSignals: [],
				paintRequests: { total: 0, automated: 0, uniquePainters: 0 }
			});
		} catch (error) {
			console.error("Anticheat signals error:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// GET /staff/dashboard/anticheat/user/:userId?from=&to=
	app.get("/staff/dashboard/anticheat/user/:userId", authMiddleware, adminMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		try {
			return res.json({
				recentSignals: [],
				signalSummary: [],
				signalTimeline: [],
				challenges: []
			});
		} catch (error) {
			console.error("Anticheat user journey error:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});
}
