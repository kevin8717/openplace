import { App } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest, UserRole } from "../types/index.js";

const adminOrModMiddleware = async (req: AuthenticatedRequest, res: any, next?: any) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.user!.id }
		});
		if (!user || user.role === UserRole.User) {
			return res.status(403)
				.json({ error: "Forbidden", status: 403 });
		}
		return next?.();
	} catch (error) {
		console.error("Error fetching user:", error);
		return res.status(500)
			.json({ error: "Internal Server Error", status: 500 });
	}
};

export default function (app: App) {
	app.get("/staff/dashboard/audit-logs/see", authMiddleware, adminOrModMiddleware, async (req, res) => {
		try {
			const actorUserId = req.query["actorUserId"] ? Number.parseInt(req.query["actorUserId"] as string) : undefined;
			const targetUserId = req.query["targetUserId"] ? Number.parseInt(req.query["targetUserId"] as string) : undefined;
			const action = req.query["action"] as string | undefined;
			const sortKey = (req.query["sortKey"] as string) ?? "id";
			const sortDir = (req.query["sortDir"] as string) ?? "desc";
			const limit = Number.parseInt(req.query["limit"] as string) || 20;
			const offset = Number.parseInt(req.query["offset"] as string) || 0;

			// Map frontend sort keys to DB column names
			const sortKeyMap: Record<string, string> = {
				"id": "id",
				"created_at": "createdAt",
				"action": "action",
				"actor_user_id": "actorUserId",
				"target_user_id": "targetUserId",
				"notes": "details"
			};

			const dbSortKey = sortKeyMap[sortKey] ?? "id";
			const dbSortDir = sortDir === "asc" ? "asc" : "desc";

			// Build where clause
			const where: any = {};
			if (actorUserId !== undefined && !Number.isNaN(actorUserId)) {
				where.actorUserId = actorUserId;
			}
			if (targetUserId !== undefined && !Number.isNaN(targetUserId)) {
				where.targetUserId = targetUserId;
			}
			if (action) {
				where.action = action;
			}

			// Fetch audit logs with pagination
			const logs = await prisma.auditLog.findMany({
				where,
				take: limit,
				skip: offset
			});

			// Sort in-memory since Prisma doesn't support dynamic sort keys well
			logs.sort((a, b) => {
				let aVal: any, bVal: any;
				switch (dbSortKey) {
				case "createdAt":
					aVal = a.createdAt.getTime();
					bVal = b.createdAt.getTime();
					break;
				case "action":
					aVal = a.action;
					bVal = b.action;
					break;
				case "actorUserId":
					aVal = a.actorUserId;
					bVal = b.actorUserId;
					break;
				case "targetUserId":
					aVal = a.targetUserId ?? 0;
					bVal = b.targetUserId ?? 0;
					break;
				case "details":
					aVal = a.details ?? "";
					bVal = b.details ?? "";
					break;
				default:
					aVal = a.id;
					bVal = b.id;
				}
				if (dbSortDir === "asc") {
					return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
				}
				return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
			});

			// Transform to frontend format:
			// - details → notes
			// - targetUserId (Int?) → targetUserId (number[])
			// Also include actorUser and targetUsers for user info
			const actorIds = [...new Set(logs.map(l => l.actorUserId))];
			const targetIds = [...new Set(logs.map(l => l.targetUserId).filter((id): id is number => id !== null))];
			const allUserIds = [...new Set([...actorIds, ...targetIds])];

			const users = allUserIds.length > 0
				? await prisma.user.findMany({
					where: { id: { in: allUserIds } },
					select: { id: true, name: true, nickname: true, picture: true }
				})
				: [];
			const userMap = new Map(users.map(u => [u.id, { name: u.nickname || u.name, picture: u.picture }]));

			const formatted = logs.map(log => ({
				id: log.id,
				createdAt: log.createdAt,
				action: log.action,
				actorUserId: log.actorUserId,
				actorUser: userMap.get(log.actorUserId) ?? null,
				targetUserId: log.targetUserId !== null ? [log.targetUserId] : [],
				targetUsers: log.targetUserId !== null
					? [userMap.get(log.targetUserId) ?? { name: `#${log.targetUserId}`, picture: null }]
					: [],
				notes: log.details ?? null,
				ipAddress: log.ipAddress ?? null
			}));

			// If total exceeds limit, return all items and let frontend slice
			// This matches the frontend's expectation
			return res.status(200)
				.json(formatted);
		} catch (error) {
			console.error("Error fetching audit logs:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});
}
