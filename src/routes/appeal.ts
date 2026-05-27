import { App, Response } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest, UserRole } from "../types/index.js";
import { AuditService, AuditAction } from "../services/audit.js";

const auditService = new AuditService(prisma);

const moderatorMiddleware = async (req: AuthenticatedRequest, res: Response, next?: any) => {
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
	// ── Submit an appeal (by banned user) ──
	app.post("/report/appeal", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { message } = req.body ?? {};
			if (typeof message !== "string" || message.length < 5) {
				return res.status(400)
					.json({ error: "Message must be at least 5 characters", status: 400 });
			}

			const userId = req.user!.id;

			// Check if user already has a pending appeal
			const existingPending = await prisma.appeal.findFirst({
				where: {
					userId,
					status: "pending"
				}
			});
			if (existingPending) {
				return res.status(208)
					.json({ error: "You already have a pending appeal", status: 208 });
			}

			// Find the latest ticket that resulted in a ban/timeout for this user
			const latestTicket = await prisma.ticket.findFirst({
				where: {
					reportedUserId: userId,
					resolution: { not: null }
				},
				orderBy: { updatedAt: "desc" }
			});

			await prisma.appeal.create({
				data: {
					userId,
					ticketId: latestTicket?.id ?? null,
					message
				}
			});

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error submitting appeal:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Get open appeals (for moderators) ──
	app.get("/staff/appeals/get", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			const appeals = await prisma.appeal.findMany({
				where: { status: "pending" },
				orderBy: { createdAt: "desc" },
				include: {
					user: {
						select: {
							id: true,
							name: true,
							nickname: true,
							picture: true,
							role: true,
							pixelsPainted: true,
							allianceId: true,
							suspensionReason: true,
							timeoutUntil: true,
							lastPixelLatitude: true,
							lastPixelLongitude: true,
							lastPixelPaintedAt: true
						}
					}
				}
			});

			const userIds = appeals.map(a => a.user.id);

			// Batch query stats for all appeal users
			const [reportedCounts, timeoutCounts] = await Promise.all([
				prisma.ticket.groupBy({
					by: ["reportedUserId"],
					_count: { id: true },
					where: { reportedUserId: { in: userIds } }
				}),
				prisma.ticket.groupBy({
					by: ["reportedUserId"],
					_count: { id: true },
					where: { reportedUserId: { in: userIds }, resolution: "timeout" }
				})
			]);

			const reportedCountMap = new Map(reportedCounts.map(r => [r.reportedUserId, r._count.id]));
			const timeoutCountMap = new Map(timeoutCounts.map(t => [t.reportedUserId, t._count.id]));

			// Fetch alliance names
			const allianceIds = [...new Set(appeals.map(a => a.user.allianceId).filter((id): id is number => id != null))];
			const alliances = allianceIds.length > 0
				? await prisma.alliance.findMany({
					where: { id: { in: allianceIds } },
					select: { id: true, name: true }
				})
				: [];
			const allianceMap = new Map(alliances.map(a => [a.id, a.name]));

			const formatted = appeals.map(a => {
				const userAllianceId = a.user.allianceId;
				return {
					id: a.id,
					notes: a.message,
					createdAt: a.createdAt,
					user: {
						id: a.user.id,
						name: a.user.nickname || a.user.name,
						picture: a.user.picture,
						role: a.user.role,
						pixelsPainted: a.user.pixelsPainted,
						reportedCount: reportedCountMap.get(a.user.id) ?? 0,
						timeoutCount: timeoutCountMap.get(a.user.id) ?? 0,
						allianceId: userAllianceId ?? null,
						allianceName: userAllianceId ? (allianceMap.get(userAllianceId) ?? null) : null,
						lastTimeoutReason: a.user.suspensionReason,
						timeoutUntil: a.user.timeoutUntil,
						lastLatitude: a.user.lastPixelLatitude,
						lastLongitude: a.user.lastPixelLongitude
					}
				};
			});

			return res.status(200)
				.json(formatted);
		} catch (error) {
			console.error("Error fetching appeals:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Handle an appeal (approve/reject) ──
	app.post("/staff/appeals/:id/handle", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const appealId = req.params["id"] as string;
			const { approved } = req.body ?? {};

			if (typeof approved !== "boolean") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const appeal = await prisma.appeal.findUnique({
				where: { id: appealId },
				include: { ticket: true }
			});

			if (!appeal) {
				return res.status(404)
					.json({ error: "Appeal not found", status: 404 });
			}

			if (appeal.status !== "pending") {
				return res.status(400)
					.json({ error: "Appeal already handled", status: 400 });
			}

			if (approved) {
				// Unban/un-timeout the user
				await prisma.user.update({
					where: { id: appeal.userId },
					data: {
						banned: false,
						suspensionReason: null,
						timeoutUntil: new Date()
					}
				});
			}

			await prisma.appeal.update({
				where: { id: appealId },
				data: {
					status: approved ? "accepted" : "rejected",
					handledById: req.user!.id,
					resolution: approved ? "Approved" : "Denied"
				}
			});

			await auditService.log({
				action: approved ? AuditAction.AcceptAppeal : AuditAction.DenyAppeal,
				actorUserId: req.user!.id,
				targetUserId: appeal.userId,
				details: `Appeal ${appealId}: ${appeal.message?.slice(0, 100)}`,
				ipAddress: req.ip
			});

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error handling appeal:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Get user's tickets in context of an appeal (reuses /staff/dashboard/users/tickets format) ──
	app.get("/staff/appeals/tickets", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const userId = Number.parseInt(req.query["userId"] as string) || 0;
			const page = Number.parseInt(req.query["page"] as string) || 0;
			const pageSize = Number.parseInt(req.query["pageSize"] as string) || 20;

			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const tickets = await prisma.ticket.findMany({
				where: { reportedUserId: userId },
				orderBy: { createdAt: "desc" },
				skip: page * pageSize,
				take: pageSize,
				include: {
					reports: {
						include: {
							user: { select: { id: true, name: true, nickname: true, picture: true } }
						}
					},
					reportedUser: {
						select: { id: true, name: true, nickname: true, picture: true, role: true }
					},
					moderatorUser: { select: { id: true, name: true, nickname: true, picture: true } }
				}
			});

			const formatted = tickets.map(ticket => ({
				id: ticket.id,
				status: ticket.resolution ?? "open",
				createdAt: ticket.createdAt,
				assignedUser: ticket.moderatorUser ? {
					id: ticket.moderatorUser.id,
					name: ticket.moderatorUser.nickname || ticket.moderatorUser.name,
					picture: ticket.moderatorUser.picture
				} : { id: 0, name: "—", picture: null },
				reportedUser: ticket.reportedUser ? {
					id: ticket.reportedUser.id,
					name: ticket.reportedUser.nickname || ticket.reportedUser.name,
					picture: ticket.reportedUser.picture,
					role: ticket.reportedUser.role
				} : null,
				reports: ticket.reports.map(r => ({
					id: r.id,
					createdAt: r.createdAt,
					reason: r.reason,
					reportedBy: r.user.id,
					reportedByName: r.user.nickname || r.user.name,
					reportedByPicture: r.user.picture,
					reportedLatitude: String(r.latitude),
					reportedLongitude: String(r.longitude),
					zoom: r.zoom,
					imageUrl: r.image
						? `data:image/jpeg;base64,${Buffer.from(r.image).toString("base64")}`
						: "",
					notes: r.notes
				}))
			}));

			return res.status(200)
				.json({ tickets: formatted, status: 200 });
		} catch (error) {
			console.error("Error fetching appeal tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Count open appeals ──
	app.get("/staff/appeals/open_count", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			const count = await prisma.appeal.count({
				where: { status: "pending" }
			});
			return res.status(200)
				.json({ appeals: count });
		} catch (error) {
			console.error("Error counting appeals:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Assign new appeals (stub - auto-loads pending) ──
	app.post("/staff/appeals/assign", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			// Frontend calls this to check for new appeals; we can return count
			const count = await prisma.appeal.count({
				where: { status: "pending" }
			});
			return res.status(200)
				.json({ newAppealsIds: [], count });
		} catch (error) {
			console.error("Error assigning appeals:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Translate appeal text (stub) ──
	app.post("/staff/appeals/translate", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const { text } = req.body ?? {};
			if (typeof text !== "string") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}
			// TODO: implement actual translation
			return res.json({ translation: text });
		} catch (error) {
			console.error("Error translating text:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Get notes for a user in appeals context ──
	app.get("/staff/appeals/notes", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const userId = Number.parseInt(req.query["userId"] as string ?? "") || 0;
			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const notes = await prisma.userNote.findMany({
				where: { reportedUserId: userId },
				include: { user: true },
				orderBy: { createdAt: "desc" }
			});

			return res.status(200)
				.json({
					notes: notes.map(note => ({
						id: note.id,
						author: {
							role: note.user.role,
							id: note.user.id,
							name: note.user.nickname || note.user.name
						},
						note: note.content,
						createdAt: note.createdAt
					}))
				});
		} catch (error) {
			console.error("Error fetching notes:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Add a note for a user in appeals context ──
	app.post("/staff/appeals/notes", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			const note = req.body["note"];
			if (userId <= 0 || typeof note !== "string") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			await prisma.userNote.create({
				data: {
					userId: req.user!.id,
					reportedUserId: userId,
					content: note
				}
			});

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error adding note:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ── Get user's last appeal date (for cooldown check) ──
	app.get("/me/last-appeal", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const lastAppeal = await prisma.appeal.findFirst({
				where: { userId: req.user!.id },
				orderBy: { createdAt: "desc" },
				select: { createdAt: true }
			});

			return res.status(200)
				.json(lastAppeal ? { appealDate: lastAppeal.createdAt } : {});
		} catch (error) {
			console.error("Error fetching last appeal:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});
}
