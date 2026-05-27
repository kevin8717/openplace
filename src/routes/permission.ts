import { App, NextFunction, Response } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest, UserRole } from "../types/index.js";

const ALL_PERMISSIONS = [
	"staff.dashboard.summary.counters.tickets",
	"staff.dashboard.summary.counters.reports",
	"staff.dashboard.summary.events.status",
	"staff.dashboard.summary.events.start",
	"staff.dashboard.summary.events.stop",
	"staff.dashboard.summary.events.anchors",
	"staff.dashboard.summary.users.ban",
	"staff.dashboard.summary.users.timeout",
	"staff.dashboard.summary.users.unban",
	"staff.dashboard.summary.users.increment_droplets",
	"staff.dashboard.team.tickets",
	"staff.dashboard.team.reports",
	"staff.dashboard.users.info",
	"staff.dashboard.users.rename",
	"staff.dashboard.users.notes_get",
	"staff.dashboard.users.notes_set",
	"staff.dashboard.users.purchases",
	"staff.dashboard.users.tickets_history",
	"staff.dashboard.users.tickets_stats",
	"staff.dashboard.users.timeout",
	"staff.dashboard.users.remove_timeout",
	"staff.dashboard.users.ban",
	"staff.dashboard.users.remove_ban",
	"staff.dashboard.users.personal_information",
	"staff.dashboard.users.disconnect",
	"staff.dashboard.users.set_droplets",
	"staff.dashboard.permissions.get",
	"staff.dashboard.permissions.set",
	"staff.dashboard.alliances.search",
	"staff.dashboard.alliances.details",
	"staff.dashboard.alliances.members",
	"staff.dashboard.alliances.rename",
	"staff.dashboard.alliances.leader",
	"staff.dashboard.alliances.ban_all",
	"staff.dashboard.alliances.role",
	"staff.dashboard.alliances.remove_member",
	"staff.dashboard.audit_logs.see",
	"staff.dashboard.ban_waves.see",
	"staff.dashboard.ban_waves.execute",
	"staff.dashboard.ban_appeals.see",
	"staff.dashboard.kpi.tickets",
	"staff.dashboard.store_manager.frames",
	"staff.dashboard.store_manager.fonts",
	"staff.dashboard.store_manager.styles",
	"staff.dashboard.store_manager.badges",
	"staff.tickets.assign",
	"staff.tickets.closed_today",
	"staff.tickets.open_count",
	"staff.tickets.translate",
	"staff.tickets.set_status",
	"staff.tickets.ignore_all",
	"staff.appeals.assign",
	"staff.appeals.open_count",
	"staff.appeals.tickets_history",
	"staff.appeals.notes_get",
	"staff.appeals.notes_set",
	"staff.appeals.translate",
	"staff.appeals.solve",
	"staff.tools.select_area.timeout",
	"staff.tools.select_area.ban",
	"staff.tools.select_area.clear",
	"staff.tools.select_area.info",
	"staff.tools.select_pixel.timeout",
	"staff.tools.select_pixel.ban",
	"staff.tools.select_pixel.see_role",
	"staff.tools.select_pixel.see_punishment",
	"staff.tools.select_pixel.archive",
	"staff.tools.auto_painter.paint",
	"staff.tools.wayback.wayback",
	"staff.ui.theme.dark_mode",
	"staff.ui.toggle_pixel_art",
	"staff.cosmetics.view_cosmetics",
	"staff.cosmetics.manage_cosmetics",
	"staff.cosmetics.assign_cosmetics"
];

export const adminMiddleware = async (req: AuthenticatedRequest, res: Response, next?: NextFunction) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.user!.id }
		});
		if (!user || user.role !== UserRole.Admin) {
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
	app.get("/staff/dashboard/permissions/get", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const userId = Number.parseInt(req.query["userId"] as string) || 0;
			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const targetUser = await prisma.user.findUnique({
				where: { id: userId },
				select: { id: true, name: true, nickname: true, role: true }
			});

			if (!targetUser) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			const userPermRows = await prisma.userPermission.findMany({
				where: { userId },
				select: { permission: true }
			});

			const permissions = userPermRows.map(row => row.permission);

			return res.status(200)
				.json({
					userId: targetUser.id,
					user: {
						id: targetUser.id,
						name: targetUser.nickname || targetUser.name,
						role: targetUser.role
					},
					permissions,
					available: ALL_PERMISSIONS
				});
		} catch (error) {
			console.error("Error fetching user permissions:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/permissions/set", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const { userId, permissions } = req.body ?? {};
			if (typeof userId !== "number" || userId <= 0 || !Array.isArray(permissions)) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const targetUser = await prisma.user.findUnique({
				where: { id: userId },
				select: { id: true }
			});

			if (!targetUser) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			// Replace all permissions for the user
			await prisma.$transaction(async (tx) => {
				await tx.userPermission.deleteMany({ where: { userId } });

				if (permissions.length > 0) {
					await tx.userPermission.createMany({
						data: permissions.map((permission: string) => ({
							userId,
							permission
						}))
					});
				}
			});

			// Return the updated permissions
			const updatedRows = await prisma.userPermission.findMany({
				where: { userId },
				select: { permission: true }
			});

			return res.status(200)
				.json({
					userId,
					permissions: updatedRows.map(row => row.permission)
				});
		} catch (error) {
			console.error("Error setting user permissions:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});
}