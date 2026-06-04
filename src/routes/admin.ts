import { App, NextFunction, Response } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest, UserRole } from "../types/index.js";
import { Prisma } from "@prisma/client";
import fs from "fs/promises";
import { UserService } from "../services/user.js";
import { AuditService, AuditAction } from "../services/audit.js";


const REPORT_REASONS = [
	{ key: "doxxing", label: "Doxxing" },
	{ key: "inappropriate_content", label: "Inappropriate Content" },
	{ key: "hate_speech", label: "Hate Speech" },
	{ key: "bot", label: "Bot" },
	{ key: "other", label: "Other" },
	{ key: "griefing", label: "Griefing" }
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

const auditService = new AuditService(prisma);
const userService = new UserService(prisma);


// TODO: Split this up further. Just ignoring so I can actually read this file without zigzags for now
// eslint-disable-next-line max-lines-per-function
export default function (app: App) {
	app.get("/staff/dashboard/users/info", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const idStr = req.query["id"] as string ?? "";
			const id = Number.parseInt(idStr);
			if (!Number.isInteger(id) || id <= 0 || id > Number.MAX_SAFE_INTEGER) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}
			const user = await prisma.user.findUnique({
				where: { id }
			});
			if (!user) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			const alliance = user.allianceId
				? await prisma.alliance.findFirst({
					where: { id: user.allianceId }
				})
				: null;

			const reportedTimes = await prisma.ticket.count({
				where: { reportedUserId: id }
			});

			const timeoutsCount = await prisma.ticket.count({
				where: { reportedUserId: id, resolution: "timeout" }
			});

			const sameIPOr: any[] = [];
			if (user.lastIP) sameIPOr.push({ lastIP: user.lastIP });
			if (user.registrationIP) sameIPOr.push({ registrationIP: user.registrationIP });

			let sameIPAccounts = 0;
			let associatedAccountIds: number[] = [];
			if (sameIPOr.length > 0) {
				const sameIpUsers = await prisma.user.findMany({
					where: {
						id: { not: id },
						OR: sameIPOr
					},
					select: { id: true }
				});
				sameIPAccounts = sameIpUsers.length;
				associatedAccountIds = sameIpUsers.map(u => u.id);
			}

			return res.status(200)
				.json({
					userId: user.id,
					id: user.id,
					name: user.nickname || user.name,
					droplets: user.droplets,
					picture: user.picture,
					role: user.role,
					timeout_until: user.timeoutUntil,

					associated_accounts_number: associatedAccountIds.length,
					associated_accounts: associatedAccountIds,
					last_pixel_latitude: user.lastPixelLatitude,
					last_pixel_longitude: user.lastPixelLongitude,
					timeout_reason: user.suspensionReason ?? null,
					reported_times: reportedTimes,
					timeouts_count: timeoutsCount,
					email: user.email,
					same_ip_accounts: sameIPAccounts,
					alliance_id: user.allianceId,
					alliance_name: alliance?.name,
					pixels_painted: user.pixelsPainted,
					phone_validated: !user.needsPhoneVerification,
					discord: user.discord
				});
		} catch (error) {
			console.error("Error fetching users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/users/notes", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const id = Number.parseInt(req.query["userId"] as string ?? "") || 0;
			if (Number.isNaN(id) || id <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}
			const user = await prisma.user.findUnique({
				where: { id }
			});
			if (!user) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			const notes = await prisma.userNote.findMany({
				where: { reportedUserId: id },
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

	app.post("/staff/dashboard/users/notes", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const id = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			const note = req.body["note"];
			if (Number.isNaN(id) || id <= 0 || typeof note !== "string") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const user = await prisma.user.findUnique({
				where: { id }
			});
			if (!user) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			await prisma.userNote.create({
				data: {
					userId: req.user!.id,
					reportedUserId: id,
					content: note
				}
			});

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error fetching notes:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/users/purchases", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const id = Number.parseInt(req.query["userId"] as string ?? "") || 0;
			if (Number.isNaN(id) || id <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}
			const user = await prisma.user.findUnique({
				where: { id }
			});
			if (!user) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			// TODO
			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error fetching purchases:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/users/set-user-droplets", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			const droplets = Number.parseInt(req.body["droplets"] as string ?? "") || 0;
			if (Number.isNaN(userId) || userId <= 0 || Number.isNaN(droplets)) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const user = await prisma.user.findUnique({
				where: { id: userId }
			});
			if (!user) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			const newDroplets = user.droplets + droplets;

			await prisma.user.update({
				where: { id: userId },
				data: { droplets: newDroplets }
			});

			await auditService.log({
				action: AuditAction.ManualChangeDroplets,
				actorUserId: req.user!.id,
				targetUserId: userId,
				details: `Delta: ${droplets} (${user.droplets} → ${newDroplets})`,
				ipAddress: req.ip
			});

			return res.status(200)
				.json({ success: true });
		} catch (error) {
			console.error("Error setting user droplets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});



	app.get(["/staff/dashboard/kpi/tickets", "/staff/dashboard/kpi/closed-tickets", "/staff/dashboard/kpi/closed-reports"], authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id }
			});
			if (!user || user.role === UserRole.User) {
				return res.status(403)
					.json({ error: "Forbidden", status: 403 });
			}

			const isModBreakdown = req.path !== "/staff/dashboard/kpi/tickets";
			const startStr = req.query["start"] as string;
			const endStr = req.query["end"] as string;

			// ── Mod breakdown (closed-tickets / closed-reports) ──
			if (isModBreakdown && startStr && endStr) {
				const start = new Date(startStr);
				const end = new Date(endStr);

				const mods = await prisma.user.findMany({
					where: { role: { in: ["moderator"] } },
					select: { id: true, name: true, nickname: true, role: true }
				});

				const modStats = await Promise.all(mods.map(async (mod) => {
					const [total, ban, ignored, timeout] = await Promise.all([
						prisma.ticket.count({
							where: {
								updatedAt: { gte: start, lte: end },
								moderatorUserId: mod.id,
								resolution: { not: null }
							}
						}),
						prisma.ticket.count({
							where: {
								updatedAt: { gte: start, lte: end },
								moderatorUserId: mod.id,
								resolution: "ban"
							}
						}),
						prisma.ticket.count({
							where: {
								updatedAt: { gte: start, lte: end },
								moderatorUserId: mod.id,
								resolution: "ignore"
							}
						}),
						prisma.ticket.count({
							where: {
								updatedAt: { gte: start, lte: end },
								moderatorUserId: mod.id,
								resolution: "timeout"
							}
						})
					]);

					if (total === 0) return null;

					return {
						user: {
							id: mod.id,
							name: mod.nickname || mod.name,
							role: mod.role
						},
						total,
						ban,
						ignored,
						timeout,
						suspensionRate: (ban + timeout) / total
					};
				}));

				return res.json({ items: modStats.filter(Boolean) });
			}

			// ── KPI tickets chart ──
			const start = new Date(startStr);
			const end = new Date(endStr);
			const compare = req.query["compare"] === "1";
			const userId = req.query["userId"] ? Number(req.query["userId"]) : null;
			const reason = req.query["reason"] as string | null;
			const punishment = req.query["punishment"] as string | null;
			const granularity = req.query["granularity"] as string ?? "day";

			// Build ticket where filter
			const ticketFilter: any = { createdAt: { gte: start, lte: end } };
			if (userId) ticketFilter.reportedUserId = userId;
			if (punishment) ticketFilter.resolution = punishment;

			// For reason filter, we need to check via reports
			const reasonFilter = reason ? { reports: { some: { reason } } } : {};

			// ── Current period stats ──
			const currentStats = await getPeriodStats(ticketFilter, reasonFilter);

			// ── Previous period stats (for comparison) ──
			const duration = end.getTime() - start.getTime();
			const prevEnd = new Date(start.getTime());
			const prevStart = new Date(prevEnd.getTime() - duration);

			let previousStats = null;
			let prevStartUtc = null;
			let prevEndUtc = null;

			if (compare) {
				const prevFilter = { ...ticketFilter, createdAt: { gte: prevStart, lte: prevEnd } };
				previousStats = await getPeriodStats(prevFilter, reasonFilter);
				prevStartUtc = prevStart.toISOString();
				prevEndUtc = prevEnd.toISOString();
			}

			// ── Series data (time-bucketed) ──
			const series = await buildSeries(start, end, granularity, reasonFilter);

			return res.status(200).json({
				current: currentStats,
				previous: previousStats,
				series,
				prevStartUtc,
				prevEndUtc
			});
		} catch (error) {
			console.error("Error fetching KPI tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// Helper: count tickets by resolution for a given period
	async function getPeriodStats(baseFilter: any, reasonFilter: any) {
		const where = { ...baseFilter, ...reasonFilter };
		const allTicketIds = (
			await prisma.ticket.findMany({
				where,
				select: { id: true, createdAt: true, resolution: true, updatedAt: true }
			})
		).map(t => t);

		const idFilter = { id: { in: allTicketIds.map(t => t.id) } };

		const [openCount, bannedCount, timeoutCount, ignoredCount] = await Promise.all([
			prisma.ticket.count({ where: { ...idFilter, resolution: null } }),
			prisma.ticket.count({ where: { ...idFilter, resolution: "ban" } }),
			prisma.ticket.count({ where: { ...idFilter, resolution: "timeout" } }),
			prisma.ticket.count({ where: { ...idFilter, resolution: "ignore" } })
		]);

		const solvedCount = bannedCount + timeoutCount + ignoredCount;
		const totalCount = openCount + solvedCount;

		// Compute solve times for resolved tickets
		const resolvedTickets = allTicketIds.filter(t => t.resolution !== null);
		let avgMs = 0;
		let medianMs = 0;
		let p95Ms = 0;
		if (resolvedTickets.length > 0) {
			const solveTimes = resolvedTickets
				.map(t => t.updatedAt.getTime() - t.createdAt.getTime())
				.sort((a, b) => a - b);
			avgMs = Math.round(solveTimes.reduce((a, b) => a + b, 0) / solveTimes.length);
			medianMs = solveTimes[Math.floor(solveTimes.length / 2)] ?? 0;
			p95Ms = solveTimes[Math.floor(solveTimes.length * 0.95)] ?? solveTimes[solveTimes.length - 1] ?? 0;
		}

		// Backlog aging: count open tickets by age
		const now = new Date();
		const openTickets = allTicketIds.filter(t => t.resolution === null);
		let openGt1h = 0;
		let openGt24h = 0;
		let openGt7d = 0;
		for (const t of openTickets) {
			const ageMs = now.getTime() - t.createdAt.getTime();
			if (ageMs > 7 * 86400000) openGt7d++;
			if (ageMs > 86400000) openGt24h++;
			if (ageMs > 3600000) openGt1h++;
		}

		// Rate percentages
		const solvedRatePct = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0;
		const ignoredRatePct = totalCount > 0 ? (ignoredCount / totalCount) * 100 : 0;
		const timeoutRatePct = totalCount > 0 ? (timeoutCount / totalCount) * 100 : 0;
		const banRatePct = totalCount > 0 ? (bannedCount / totalCount) * 100 : 0;

		return {
			openCount,
			solvedCount,
			totalCount,
			ignoredCount,
			timeoutCount,
			banCount: bannedCount,
			overturnedCount: 0,
			duplicatesCount: 0,
			solvedRatePct,
			ignoredRatePct,
			timeoutRatePct,
			banRatePct,
			overturnedRatePct: 0,
			duplicatesRatePct: 0,
			timeToSolve: {
				avgMs,
				medianMs,
				p95Ms
			},
			backlogAging: {
				openGt1h,
				openGt24h,
				openGt7d
			}
		};
	}

	// Helper: build time-bucketed series
	async function buildSeries(start: Date, end: Date, granularity: string, reasonFilter: any) {
		const bucketMs = granularity === "hour" ? 3600000
			: granularity === "day" ? 86400000
			: 2592000000; // month

		const series: any[] = [];
		let bucketStart = new Date(start.getTime());

		while (bucketStart < end) {
			const bucketEnd = new Date(Math.min(bucketStart.getTime() + bucketMs, end.getTime()));

			const allTicketIds = (
				await prisma.ticket.findMany({
					where: {
						createdAt: { gte: bucketStart, lte: bucketEnd },
						...reasonFilter
					},
					select: { id: true }
				})
			).map(t => t.id);

			const idFilter = { id: { in: allTicketIds } };

			const [openCount, bannedCount, timeoutCount, ignoredCount] = await Promise.all([
				prisma.ticket.count({ where: { ...idFilter, resolution: null } }),
				prisma.ticket.count({ where: { ...idFilter, resolution: "ban" } }),
				prisma.ticket.count({ where: { ...idFilter, resolution: "timeout" } }),
				prisma.ticket.count({ where: { ...idFilter, resolution: "ignore" } })
			]);

			const solvedCount = bannedCount + timeoutCount + ignoredCount;
			const totalCount = openCount + solvedCount;

			series.push({
				bucketUtc: bucketStart.toISOString(),
				openCount,
				solvedCount,
				totalCount,
				ignoredCount,
				timeoutCount,
				banCount: bannedCount,
				overturnedCount: 0,
				duplicatesCount: 0
			});

			bucketStart = bucketEnd;
		}

		return series;
	}

	app.get("/staff/dashboard/summary/open-tickets-count", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id }
			});
			if (!user || user.role === UserRole.User) {
				return res.status(403)
					.json({ error: "Forbidden", status: 403 });
			}

			const count = await prisma.ticket.count({
				where: { resolution: null }
			});
			return res.status(200)
				.json({ tickets: count });
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/severe-open-tickets-count", authMiddleware, adminMiddleware, async (_req: AuthenticatedRequest, res) => {
		try {
			// severe column removed in favor of Report model
			return res.status(200)
				.json({ tickets: 0 });
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/assign-new-tickets", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: { id: req.user!.id }
			});
			if (!user || user.role === UserRole.User) {
				return res.status(403)
					.json({ error: "Forbidden", status: 403 });
			}

			// TODO
			return res.json({
				newTicketsIds: []
			});
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/summary/count-all-tickets", authMiddleware, adminMiddleware, async (_req, res) => {
		try {
			const results = await prisma.report.groupBy({
				by: ["reason"],
				where: {
					ticket: { resolution: null }
				},
				_count: {
					reason: true
				}
			});

			const reasons = new Map<string, number>(REPORT_REASONS.map(item => [item.key, 0]));
			for (const item of results) {
				reasons.set(item.reason, item._count.reason);
			}

			const totalCount = [...reasons.values()].reduce((a, b) => a + b, 0);

			return res.status(200)
				.json({
					...Object.fromEntries(reasons),
					total_open_tickets: totalCount
				});
		} catch (error) {
			console.error("Error counting open tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/summary/count-all-reports", authMiddleware, adminMiddleware, async (_req, res) => {
		try {
			const results = await prisma.report.groupBy({
				by: ["reason"],
				_count: {
					reason: true
				}
			});

			const reasons = new Map<string, number>(REPORT_REASONS.map(item => [item.key, 0]));
			for (const item of results) {
				reasons.set(item.reason, item._count.reason);
			}

			const totalCount = [...reasons.values()].reduce((a, b) => a + b, 0);

			return res.status(200)
				.json({
					...Object.fromEntries(reasons),
					total_open_reports: totalCount
				});
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/alliances/search", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const query = req.query["q"] as string ?? "";
			const queryId = Number.parseInt(query) || 0;

			let where: Prisma.AllianceWhereInput = {
				name: {
					contains: query
				}
			};

			if (!Number.isNaN(queryId) && queryId !== 0) {
				where = {
					id: queryId
				};
			}

			const results = await prisma.alliance.findMany({
				where,
				take: 20,
				orderBy: { createdAt: "desc" },
				select: {
					id: true,
					name: true,
					pixelsPainted: true
				}
			});

			return res.status(200)
				.json(results);
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get(["/staff/dashboard/alliances/:id", "/staff/dashboard/alliances/:id/full"], authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const id = Number.parseInt(req.params["id"] as string ?? "");
			if (Number.isNaN(id) || id <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const isFull = req.path.endsWith("/full");
			const alliance = await prisma.alliance.findUnique({
				where: { id },
				select: {
					id: true,
					name: true,
					description: isFull,
					hqLatitude: isFull,
					hqLongitude: isFull,
					pixelsPainted: true,
					members: isFull,
					bannedUsers: isFull,
					createdAt: isFull,
					updatedAt: isFull
				}
			});
			if (!alliance) {
				return res.status(404)
					.json({ error: "Alliance not found", status: 404 });
			}

			const owner = alliance.members?.[0];

			const result = {
				...alliance,
				membersCount: alliance.members?.length || 0,
				ownerId: owner?.id,
				ownerName: owner?.nickname || owner?.name
			};

			return res.status(200)
				.json(result);
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/alliances/:id/members/:userId/role", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const allianceId = Number.parseInt(req.params["id"] as string ?? "");
			const userId = Number.parseInt(req.params["userId"] as string ?? "");
			const role = req.body["role"] as string | undefined;

			if (Number.isNaN(allianceId) || allianceId <= 0 || Number.isNaN(userId) || userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			if (!role || typeof role !== "string" || !["owner", "admin", "member"].includes(role)) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const alliance = await prisma.alliance.findUnique({
				where: { id: allianceId }
			});
			if (!alliance) {
				return res.status(404)
					.json({ error: "Alliance not found", status: 404 });
			}

			const member = await prisma.user.findFirst({
				where: { id: userId, allianceId }
			});
			if (!member) {
				return res.status(400)
					.json({ error: "user_not_in_alliance", status: 400 });
			}

			await prisma.user.update({
				where: { id: userId },
				data: { allianceRole: role }
			});

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error setting alliance member role:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/remove-ban", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			if (Number.isNaN(userId) || userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			await userService.ban(userId, false, null);
			await auditService.log({
				action: AuditAction.ManualRemoveBan,
				actorUserId: req.user!.id,
				targetUserId: userId,
				details: null,
				ipAddress: req.ip
			});
			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error removing ban:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/moderator/remove-timeout", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			if (Number.isNaN(userId) || userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			await userService.timeout(userId, false);
			await auditService.log({
				action: AuditAction.RemoveTimeout,
				actorUserId: req.user!.id,
				targetUserId: userId,
				ipAddress: req.ip
			});
			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error removing timeout:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/remove-timeout", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			if (Number.isNaN(userId) || userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			await userService.timeout(userId, false);
			await auditService.log({
				action: AuditAction.RemoveTimeout,
				actorUserId: req.user!.id,
				targetUserId: userId,
				ipAddress: req.ip
			});
			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error removing timeout:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/users/remove-ban", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			await userService.ban(userId, false, null);
			await auditService.log({
				action: AuditAction.ManualRemoveBan,
				actorUserId: req.user!.id,
				targetUserId: userId,
				ipAddress: req.ip
			});
			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error removing ban:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/users/remove-timeout", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			await userService.timeout(userId, false);
			await auditService.log({
				action: AuditAction.RemoveTimeout,
				actorUserId: req.user!.id,
				targetUserId: userId,
				ipAddress: req.ip
			});
			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error removing timeout:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/users/rename", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const userId = Number.parseInt(req.body["userId"] as string ?? "") || 0;
			const newName = req.body["newName"] as string | undefined;
			const oldName = req.body["oldName"] as string | undefined;

			if (userId <= 0 || !newName || typeof newName !== "string") {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			if (!newName || newName.length < 3 || newName.length > 16 || !/^[\w-]{3,16}$/i.test(newName)) {
				return res.status(400)
					.json({ error: "invalid_name", status: 400 });
			}

			// Update both name and nickname
			await prisma.user.update({
				where: { id: userId },
				data: {
					nickname: newName
				}
			});

			await auditService.log({
				action: AuditAction.ChangeUsername,
				actorUserId: req.user!.id,
				targetUserId: userId,
				details: `${oldName ?? "?"} → ${newName}`,
				ipAddress: req.ip
			});

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error renaming user:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/dashboard/summary", authMiddleware, adminMiddleware, async (_req, res) => {
		const html = await fs.readFile("./frontend/admin.html", "utf8");
		return res
			.setHeader("Content-Type", "text/html")
			.send(html);
	});

	// Registration code management
	// eslint-disable-next-line max-lines-per-function
	app.post("/staff/registration-codes", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { code, maxUses } = req.body;

			if (!code || typeof code !== "string") {
				return res.status(400)
					.json({ error: "Code is required", status: 400 });
			}

			if (code.length < 4 || code.length > 64) {
				return res.status(400)
					.json({ error: "Code must be between 4 and 64 characters", status: 400 });
			}

			const existing = await prisma.registrationCode.findUnique({
				where: { code }
			});

			if (existing) {
				return res.status(400)
					.json({ error: "Registration code already exists", status: 400 });
			}

			const newCode = await prisma.registrationCode.create({
				data: {
					code,
					maxUses: Math.max(1, Number.parseInt(maxUses) || 1),
					createdById: req.user!.id
				}
			});

			return res.status(201)
				.json({
					id: newCode.id,
					code: newCode.code,
					maxUses: newCode.maxUses,
					useCount: newCode.useCount,
					createdAt: newCode.createdAt
				});
		} catch (error) {
			console.error("Error creating registration code:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/registration-codes", authMiddleware, adminMiddleware, async (_req, res) => {
		try {
			const codes = await prisma.registrationCode.findMany({
				orderBy: { createdAt: "desc" },
				select: {
					id: true,
					code: true,
					maxUses: true,
					useCount: true,
					createdAt: true,
					createdById: true
				}
			});

			return res.json({ codes });
		} catch (error) {
			console.error("Error listing registration codes:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.delete("/staff/registration-codes/:id", authMiddleware, adminMiddleware, async (req, res) => {
		try {
			const id = Number.parseInt(req.params["id"] ?? "");

			if (!Number.isInteger(id) || id <= 0) {
				return res.status(400)
					.json({ error: "Invalid ID", status: 400 });
			}

			const existing = await prisma.registrationCode.findUnique({
				where: { id }
			});

			if (!existing) {
				return res.status(404)
					.json({ error: "Registration code not found", status: 404 });
			}

			await prisma.registrationCode.delete({
				where: { id }
			});

			return res.json({ success: true });
		} catch (error) {
			console.error("Error deleting registration code:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});
}
