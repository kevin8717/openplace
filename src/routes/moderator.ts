import { App, NextFunction, Response } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest, BanReason, TicketResolution, UserRole } from "../types/index.js";
import fs from "fs/promises";
import { validatePixelInfo } from "../validators/pixel.js";
import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { PixelService } from "../services/pixel.js";
import { TicketService } from "../services/ticket.js";
import { UserService } from "../services/user.js";
import { AuditService, AuditAction } from "../services/audit.js";

const moderatorMiddleware = async (req: AuthenticatedRequest, res: Response, next?: NextFunction) => {
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

const pixelService = new PixelService(prisma);
const ticketService = new TicketService(prisma);
const userService = new UserService(prisma);
const auditService = new AuditService(prisma);


// TODO: Split this up further. Just ignoring so I can actually read this file without zigzags for now
// eslint-disable-next-line max-lines-per-function
export default function (app: App) {
	app.get("/moderator/tickets", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const page = Number.parseInt(req.query["page"] as string) || 1;
			const limit = Number.parseInt(req.query["limit"] as string) || 20;

			// Validate pagination parameters
			if (!Number.isInteger(page) || page < 1 || page > 10_000) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}
			if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const offset = (page - 1) * limit;

			const tickets = await prisma.ticket.findMany({
				where: {
					resolution: null
				},
				orderBy: {
					createdAt: "desc"
				},
				skip: offset,
				take: limit,
				include: {
					reports: {
						include: {
							user: {
								select: {
									id: true,
									name: true,
									nickname: true,
									picture: true
								}
							}
						}
					},
					user: {
						select: {
							id: true,
							name: true,
							nickname: true,
							discord: true,
							country: true,
							banned: true,
							role: true,
							picture: true
						}
					},
					reportedUser: {
						select: {
							id: true,
							name: true,
							nickname: true,
							discord: true,
							country: true,
							banned: true,
							role: true,
							picture: true,
							lastIP: true,
							registrationIP: true
						}
					}
				}
			});

			const userIds = [...new Set([
				...tickets.map(t => t.user.id),
				...tickets.map(t => t.reportedUser.id)
			])];

			const [reportedCounts, timeoutCounts, pixelsCounts, authorReportedCounts, authorPixelsCounts, sameIpData] = await Promise.all([
				prisma.ticket.groupBy({
					by: ["reportedUserId"],
					_count: { id: true },
					where: { reportedUserId: { in: userIds } }
				}),
				prisma.ticket.groupBy({
					by: ["reportedUserId"],
					_count: { id: true },
					where: { reportedUserId: { in: userIds }, resolution: "timeout" }
				}),
				prisma.pixel.groupBy({
					by: ["paintedBy"],
					_count: { _all: true },
					where: { paintedBy: { in: userIds } }
				}),
				prisma.ticket.groupBy({
					by: ["userId"],
					_count: { id: true },
					where: { userId: { in: userIds } }
				}),
				prisma.pixel.groupBy({
					by: ["paintedBy"],
					_count: { _all: true },
					where: { paintedBy: { in: userIds } }
				}),
				prisma.user.findMany({
					where: { id: { in: userIds } },
					select: { id: true, lastIP: true, registrationIP: true }
				})
			]);

			const reportedCountMap = new Map(reportedCounts.map(r => [r.reportedUserId, r._count.id]));
			const timeoutCountMap = new Map(timeoutCounts.map(t => [t.reportedUserId, t._count.id]));
			const pixelsCountMap = new Map(pixelsCounts.map(p => [p.paintedBy, p._count._all]));
			const authorReportedCountMap = new Map(authorReportedCounts.map(a => [a.userId, a._count.id]));
			const authorPixelsCountMap = new Map(authorPixelsCounts.map(a => [a.paintedBy, a._count._all]));

			const sameIpCountMap = new Map<number, number>();
			const allIps = new Set<string>();
			const userIpMap = new Map<number, string[]>();

			for (const user of sameIpData) {
				const ips: string[] = [];
				if (user.lastIP) {
					ips.push(user.lastIP);
					allIps.add(user.lastIP);
				}
				if (user.registrationIP) {
					ips.push(user.registrationIP);
					allIps.add(user.registrationIP);
				}
				userIpMap.set(user.id, ips);
			}

			if (allIps.size > 0) {
				const sameIpUsers = await prisma.user.findMany({
					where: {
						id: { notIn: userIds },
						OR: [
							{ lastIP: { in: [...allIps] } },
							{ registrationIP: { in: [...allIps] } }
						]
					},
					select: { id: true, lastIP: true, registrationIP: true }
				});

				for (const user of sameIpData) {
					const userIps = userIpMap.get(user.id) ?? [];
					const count = sameIpUsers.filter(otherUser =>
						userIps.includes(otherUser.lastIP || "") ||
						userIps.includes(otherUser.registrationIP || "")
					).length;
					sameIpCountMap.set(user.id, count);
				}
			} else {
				for (const user of sameIpData) {
					sameIpCountMap.set(user.id, 0);
				}
			}


			const formattedTickets = tickets.map((ticket) => {
				const reportedUser = ticket.reportedUser;
				const author = ticket.user;

				const reportedCount = reportedCountMap.get(reportedUser.id) ?? 0;
				const timeoutCount = timeoutCountMap.get(reportedUser.id) ?? 0;
				const pixelsPainted = pixelsCountMap.get(reportedUser.id) ?? 0;
				const authorReportedCount = authorReportedCountMap.get(author.id) ?? 0;
				const authorPixelsPainted = authorPixelsCountMap.get(author.id) ?? 0;

				const sameIpAccounts = sameIpCountMap.get(reportedUser.id) ?? 0;

				return {
					id: ticket.id,
					author: author
						? {
								userId: author.id,
								name: author.nickname || author.name,
								discord: author.discord,
								country: author.country,
								banned: author.banned,
								role: author.role,
								reportedCount: authorReportedCount,
								pixelsPainted: authorPixelsPainted
							}
						: null,
					reportedUser: reportedUser
						? {
								userId: reportedUser.id,
								id: reportedUser.id,
								name: reportedUser.nickname || reportedUser.name,
								discord: reportedUser.discord,
								country: reportedUser.country,
								banned: reportedUser.banned,
								role: reportedUser.role,
								picture: reportedUser.picture,
								reportedCount,
								timeoutCount,
								pixelsPainted,
								lastTimeoutReason: null
							}
						: null,
					createdAt: ticket.createdAt,
					reports: ticket.reports.map(r => ({
						id: r.id,
						reportedLatitude: r.latitude,
						reportedLongitude: r.longitude,
						zoom: r.zoom,
						reason: r.reason,
						notes: r.notes,
						imageUrl: r.image
							? `data:image/jpeg;base64,${Buffer.from(r.image)
								.toString("base64")}`
							: "",
						createdAt: r.createdAt,
						userId: reportedUser.id,
						reportedByName: r.user.nickname || r.user.name,
						reportedByPicture: r.user.picture,
						reportedBy: r.user.id,
						reportedCount,
						timeoutCount,
						lastTimeoutReason: null,
						sameIpAccounts,
						pixelsPainted,
						allianceId: 0,
						allianceName: "fdgdg"
					}))
				};
			});

			const totalCount = await prisma.ticket.count({ where: { resolution: null } });

			return res.status(200)
				.json({
					tickets: formattedTickets,
					pagination: {
						page,
						limit,
						total: totalCount,
						totalPages: Math.ceil(totalCount / limit)
					},
					status: 200
				});
		} catch (error) {
			console.error("Error fetching moderator tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/moderator/users", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const idArr = req.body.userIds as number[];
			const ids = idArr.filter(item => !Number.isNaN(item) && item > 0);

			const users = await prisma.user.findMany({
				where: { id: { in: ids } },
				select: {
					id: true,
					name: true,
					nickname: true,
					discord: true,
					country: true,
					banned: true,
					role: true,
					picture: true
				}
			});

			return res.json({
				users: users.map(user => ({
					userId: user.id,
					id: user.id,
					name: user.nickname || user.name,
					banned: user.banned,
					picture: user.picture
				}))
			});
		} catch (error) {
			console.error("Error fetching users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/moderator/users/tickets", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const userId = Number.parseInt(req.query["userId"] as string ?? "") || 0;
			if (Number.isNaN(userId) || userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const reportedUser = await prisma.user.findUnique({
				where: { id: userId },
				select: {
					id: true,
					name: true,
					nickname: true,
					discord: true,
					country: true,
					banned: true
				}
			});
			if (!reportedUser) {
				return res.status(404)
					.json({ error: "User not found", status: 404 });
			}

			const tickets = await prisma.ticket.findMany({
				where: { reportedUserId: userId },
				include: {
					reports: true,
					user: {
						select: {
							id: true,
							name: true,
							nickname: true,
							discord: true,
							country: true,
							banned: true
						}
					}
				}
			});

			const formattedTickets = tickets.map(ticket => {
				return {
					id: userId,
					author: ticket.user
						? {
								id: ticket.user.id,
								name: ticket.user.nickname || ticket.user.name,
								discord: ticket.user.discord || "",
								country: ticket.user.country,
								banned: ticket.user.banned
							}
						: null,
					reportedUser: reportedUser
						? {
								id: reportedUser.id,
								name: reportedUser.nickname || reportedUser.name,
								discord: reportedUser.discord || "",
								country: reportedUser.country,
								banned: reportedUser.banned
							}
						: null,
					createdAt: ticket.createdAt,
					reports: ticket.reports.map(r => ({
						id: r.id,
						latitude: r.latitude,
						longitude: r.longitude,
						zoom: r.zoom,
						reason: r.reason,
						notes: r.notes,
						image: r.image
							? Buffer.from(r.image)
								.toString("base64")
							: "",
						createdAt: r.createdAt
					}))
				};
			});

			return res.status(200)
				.json({ tickets: formattedTickets, status: 200 });
		} catch (error) {
			console.error("Error fetching moderator tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/moderator/open-tickets-count", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
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

	app.post("/moderator/severe-open-tickets-count", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			// severe column removed in favor of Report model. Always return 0.
			return res.status(200)
				.json({ tickets: 0 });
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/moderator/assign-new-tickets", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
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

	app.post("/moderator/set-ticket-status", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { ticketId, status, selectedReportId, assignedReason } = req.body ?? {};
			if (typeof ticketId !== "string" || ticketId.length === 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			let resolution: TicketResolution | null = null;
			switch (status) {
			case "ignore":
				resolution = TicketResolution.Ignore;
				break;
			case "timeout":
				resolution = TicketResolution.Timeout;
				break;
			case "ban":
				resolution = TicketResolution.Ban;
				break;
			}

			if (!resolution) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid status", HTTP_STATUS.BAD_REQUEST));
			}

			if (assignedReason && resolution === TicketResolution.Ban) {
				const reportId = selectedReportId ?? (
					await prisma.report.findFirst({
						where: { ticketId },
						orderBy: { createdAt: "asc" }
					})
				)?.id;
				if (reportId) {
					await prisma.report.update({
						where: { id: reportId },
						data: { reason: assignedReason }
					});
				}
			}

			await ticketService.resolve(ticketId, req.user!.id, resolution);

			// Audit log
			const modTicket = await prisma.ticket.findUnique({
				where: { id: ticketId },
				select: { reportedUserId: true }
			});
			const modAuditAction = resolution === TicketResolution.Ban ? AuditAction.Ban
				: resolution === TicketResolution.Timeout ? AuditAction.Timeout
				: null;
			if (modAuditAction && modTicket) {
				await auditService.log({
					action: modAuditAction,
					actorUserId: req.user!.id,
					targetUserId: modTicket.reportedUserId,
					details: `Ticket ${ticketId} (moderator): ${assignedReason ?? status}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error setting ticket status:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/moderator/count-my-tickets", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			// TODO
			return res.json(0);
		} catch (error) {
			console.error("Error assigning new tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// Reason key mapping: BanReason values (hyphens) → frontend keys (underscores)
	const REASON_KEY_MAP: Record<string, string> = {
		"doxxing": "doxxing",
		"inappropriate-content": "inappropriate_content",
		"hate-speech": "hate_speech",
		"bot": "bot",
		"other": "other",
		"griefing": "griefing",
		"multi-accounting": "multi_accounting"
	};

	const FRONTEND_REASON_KEYS = ["doxxing", "inappropriate_content", "hate_speech", "bot", "other", "griefing"];

	// ─── /staff/tickets/* routes (old Svelte frontend compatibility) ───

	app.get("/staff/tickets/get", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			const tickets = await prisma.ticket.findMany({
				where: { resolution: null },
				orderBy: { createdAt: "desc" },
				include: {
					reports: {
						include: {
							user: { select: { id: true, name: true, nickname: true, picture: true } }
						}
					},
					reportedUser: {
						select: {
							id: true,
							name: true,
							nickname: true,
							picture: true,
							role: true,
							allianceId: true,
							lastIP: true,
							registrationIP: true
						}
					},
					moderatorUser: { select: { id: true, name: true, nickname: true, picture: true } }
				}
			});

			// Collect all reported user IDs for batch stats
			const userIds = [...new Set(tickets.map(t => t.reportedUserId))];

			// Fetch batch stats
			const [
				reportedCounts,
				timeoutCounts,
				pixelsCounts,
				sameIpData
			] = await Promise.all([
				prisma.ticket.groupBy({
					by: ["reportedUserId"],
					_count: { id: true },
					where: { reportedUserId: { in: userIds } }
				}),
				prisma.ticket.groupBy({
					by: ["reportedUserId"],
					_count: { id: true },
					where: { reportedUserId: { in: userIds }, resolution: "timeout" }
				}),
				prisma.pixel.groupBy({
					by: ["paintedBy"],
					_count: { _all: true },
					where: { paintedBy: { in: userIds } }
				}),
				prisma.user.findMany({
					where: { id: { in: userIds } },
					select: { id: true, lastIP: true, registrationIP: true, lastPixelLatitude: true, lastPixelLongitude: true, lastPixelPaintedAt: true }
				})
			]);

			const reportedCountMap = new Map(reportedCounts.map(r => [r.reportedUserId, r._count.id]));
			const timeoutCountMap = new Map(timeoutCounts.map(t => [t.reportedUserId, t._count.id]));
			const pixelsCountMap = new Map(pixelsCounts.map(p => [p.paintedBy, p._count._all]));

			// Same IP calculation
			const allIps = new Set<string>();
			const userIpMap = new Map<number, string[]>();
			for (const u of sameIpData) {
				const ips: string[] = [];
				if (u.lastIP) { ips.push(u.lastIP); allIps.add(u.lastIP); }
				if (u.registrationIP) { ips.push(u.registrationIP); allIps.add(u.registrationIP); }
				userIpMap.set(u.id, ips);
			}

			const sameIpUsers = allIps.size > 0
				? await prisma.user.findMany({
					where: {
						id: { notIn: userIds },
						OR: [
							{ lastIP: { in: [...allIps] } },
							{ registrationIP: { in: [...allIps] } }
						]
					},
					select: { id: true, lastIP: true, registrationIP: true }
				})
				: [];

			const sameIpCountMap = new Map<number, number>();
			for (const u of sameIpData) {
				const userIps = userIpMap.get(u.id) ?? [];
				const count = sameIpUsers.filter(other =>
					userIps.some(ip => ip === other.lastIP || ip === other.registrationIP)
				).length;
				sameIpCountMap.set(u.id, count);
			}

			// Fetch alliance names
			const allianceIds = [...new Set(tickets.map(t => t.reportedUser?.allianceId).filter((id): id is number => id != null))];
			const alliances = allianceIds.length > 0
				? await prisma.alliance.findMany({
					where: { id: { in: allianceIds } },
					select: { id: true, name: true }
				})
				: [];
			const allianceMap = new Map(alliances.map(a => [a.id, a.name]));

			const formatted = tickets.map(ticket => {
				const reportedUser = ticket.reportedUser;
				const reportedUserId = reportedUser!.id;
				const reportedCount = reportedCountMap.get(reportedUserId) ?? 0;
				const timeoutCount = timeoutCountMap.get(reportedUserId) ?? 0;
				const pixelsPainted = pixelsCountMap.get(reportedUserId) ?? 0;
				const sameIpAccounts = sameIpCountMap.get(reportedUserId) ?? 0;

				// Last pixel coords from User table (auto-saved on paint)
				const reportedUserData = sameIpData.find(u => u.id === reportedUserId);

				return {
					id: ticket.id,
					status: ticket.resolution ?? "open",
					createdAt: ticket.createdAt,
					assignedUser: ticket.moderatorUser ? {
						id: ticket.moderatorUser.id,
						name: ticket.moderatorUser.nickname || ticket.moderatorUser.name,
						picture: ticket.moderatorUser.picture
					} : {
						id: 0,
						name: "—",
						picture: null
					},
					reportedUser: reportedUser ? {
						id: reportedUser.id,
						name: reportedUser.nickname || reportedUser.name,
						picture: reportedUser.picture,
						role: reportedUser.role,
						allianceId: reportedUser.allianceId ?? null,
						allianceName: reportedUser.allianceId ? (allianceMap.get(reportedUser.allianceId) ?? null) : null,
						reportedCount,
						timeoutCount,
						pixelsPainted,
						sameIpAccounts,
						lastPixelLatitude: reportedUserData?.lastPixelLatitude ?? null,
						lastPixelLongitude: reportedUserData?.lastPixelLongitude ?? null,
						lastPixelPaintedAt: reportedUserData?.lastPixelPaintedAt ?? null
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
						notes: r.notes,
						reportedCount,
						timeoutCount,
						sameIpAccounts,
						pixelsPainted,
						lastTimeoutReason: null
					}))
				};
			});

			return res.status(200)
				.json({ tickets: formatted, status: 200 });
		} catch (error) {
			console.error("Error fetching staff tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/tickets/set-status", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { ticketId, status, selectedReportId, assignedReason } = req.body ?? {};
			if (typeof ticketId !== "string" || ticketId.length === 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			let resolution: TicketResolution | null = null;
			switch (status) {
			case "ignore":
				resolution = TicketResolution.Ignore;
				break;
			case "timeout":
				resolution = TicketResolution.Timeout;
				break;
			case "ban":
				resolution = TicketResolution.Ban;
				break;
			}

			if (!resolution) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid status", HTTP_STATUS.BAD_REQUEST));
			}

			if (assignedReason && resolution === TicketResolution.Ban) {
				const reportId = selectedReportId ?? (
					await prisma.report.findFirst({
						where: { ticketId },
						orderBy: { createdAt: "asc" }
					})
				)?.id;
				if (reportId) {
					await prisma.report.update({
						where: { id: reportId },
						data: { reason: assignedReason }
					});
				}
			}

			await ticketService.resolve(ticketId, req.user!.id, resolution);

			// Audit log
			const ticket = await prisma.ticket.findUnique({
				where: { id: ticketId },
				select: { reportedUserId: true }
			});
			const auditAction = resolution === TicketResolution.Ban ? AuditAction.Ban
				: resolution === TicketResolution.Timeout ? AuditAction.Timeout
				: null;
			if (auditAction && ticket) {
				await auditService.log({
					action: auditAction,
					actorUserId: req.user!.id,
					targetUserId: ticket.reportedUserId,
					details: `Ticket ${ticketId}: ${assignedReason ?? status}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error setting ticket status:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/tickets/open_count", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			const count = await prisma.ticket.count({ where: { resolution: null } });
			return res.status(200)
				.json({ tickets: count });
		} catch (error) {
			console.error("Error fetching open tickets count:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/tickets/closed-today", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const today = new Date();
			today.setHours(0, 0, 0, 0);

			const moderatorWhere = {
				moderatorUserId: req.user!.id,
				resolution: { not: null } as any,
				updatedAt: { gte: today }
			};
			const totalWhere = {
				resolution: { not: null } as any,
				updatedAt: { gte: today }
			};

			const [closedTotal, ignored, timeouts, bans,
				rclosedTotal, rignored, rtimeouts, rbans] = await Promise.all([
				prisma.ticket.count({ where: moderatorWhere }),
				prisma.ticket.count({ where: { ...moderatorWhere, resolution: TicketResolution.Ignore } }),
				prisma.ticket.count({ where: { ...moderatorWhere, resolution: TicketResolution.Timeout } }),
				prisma.ticket.count({ where: { ...moderatorWhere, resolution: TicketResolution.Ban } }),
				prisma.ticket.count({ where: totalWhere }),
				prisma.ticket.count({ where: { ...totalWhere, resolution: TicketResolution.Ignore } }),
				prisma.ticket.count({ where: { ...totalWhere, resolution: TicketResolution.Timeout } }),
				prisma.ticket.count({ where: { ...totalWhere, resolution: TicketResolution.Ban } })
			]);

			return res.status(200)
				.json({ closedTotal, ignored, timeouts, bans, rclosedTotal, rignored, rtimeouts, rbans });
		} catch (error) {
			console.error("Error counting closed tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/tickets/assign", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			// TODO: implement ticket assignment logic
			return res.json({ newTicketsIds: [] });
		} catch (error) {
			console.error("Error assigning tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/tickets/translate", authMiddleware, moderatorMiddleware, async (req, res) => {
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

	// ─── /staff/dashboard/* routes ───

	app.get("/staff/dashboard/users/tickets", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const userId = Number.parseInt(req.query["userId"] as string) || 0;
			const kind = req.query["kind"] as string ?? "";
			const page = Number.parseInt(req.query["page"] as string) || 0;
			const pageSize = Number.parseInt(req.query["pageSize"] as string) || 20;

			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const where: any = {};
			if (kind === "sent") {
				where.userId = userId;
			} else if (kind === "against") {
				where.reportedUserId = userId;
			} else if (kind === "handled") {
				where.moderatorUserId = userId;
			}

			const tickets = await prisma.ticket.findMany({
				where,
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
						select: {
							id: true,
							name: true,
							nickname: true,
							picture: true,
							role: true,
							allianceId: true
						}
					},
					moderatorUser: { select: { id: true, name: true, nickname: true, picture: true } }
				}
			});

			// Fetch alliance names for reported users who have alliances
			const allianceIds = [...new Set(tickets.map(t => t.reportedUser?.allianceId).filter((id): id is number => id != null))];
			const alliances = allianceIds.length > 0
				? await prisma.alliance.findMany({
					where: { id: { in: allianceIds } },
					select: { id: true, name: true }
				})
				: [];
			const allianceMap = new Map(alliances.map(a => [a.id, a.name]));

			const formatted = tickets.map(ticket => {
				const reportedUser = ticket.reportedUser;
				return {
					id: ticket.id,
					status: ticket.resolution ?? "open",
					createdAt: ticket.createdAt,
					assignedUser: ticket.moderatorUser ? {
						id: ticket.moderatorUser.id,
						name: ticket.moderatorUser.nickname || ticket.moderatorUser.name,
						picture: ticket.moderatorUser.picture
					} : {
						id: 0,
						name: "—",
						picture: null
					},
					reportedUser: reportedUser ? {
						id: reportedUser.id,
						name: reportedUser.nickname || reportedUser.name,
						picture: reportedUser.picture,
						role: reportedUser.role,
						allianceId: reportedUser.allianceId ?? null,
						allianceName: reportedUser.allianceId ? (allianceMap.get(reportedUser.allianceId) ?? null) : null
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
				};
			});

			return res.status(200)
				.json({ tickets: formatted, status: 200 });
		} catch (error) {
			console.error("Error fetching user tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/users/tickets/stats", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const userId = Number.parseInt(req.query["id"] as string) || 0;
			if (userId <= 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const [closedTotal, ignored, timeouts, bans,
				rclosedTotal, rignored, rtimeouts, rbans] = await Promise.all([
				prisma.ticket.count({ where: { resolution: { not: null } } }),
				prisma.ticket.count({ where: { resolution: TicketResolution.Ignore } }),
				prisma.ticket.count({ where: { resolution: TicketResolution.Timeout } }),
				prisma.ticket.count({ where: { resolution: TicketResolution.Ban } }),
				prisma.ticket.count({ where: { reportedUserId: userId, resolution: { not: null } } }),
				prisma.ticket.count({ where: { reportedUserId: userId, resolution: TicketResolution.Ignore } }),
				prisma.ticket.count({ where: { reportedUserId: userId, resolution: TicketResolution.Timeout } }),
				prisma.ticket.count({ where: { reportedUserId: userId, resolution: TicketResolution.Ban } })
			]);

			return res.status(200)
				.json({ closedTotal, ignored, timeouts, bans, rclosedTotal, rignored, rtimeouts, rbans });
		} catch (error) {
			console.error("Error fetching ticket stats:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/users/ban", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
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

			const noteContent = notes ? `Ban: ${reason} - ${notes}` : `Ban: ${reason}`;

			for (const id of validIds) {
				await userService.ban(id, true, reason as BanReason);
				await prisma.userNote.create({
					data: {
						userId: req.user!.id,
						reportedUserId: id,
						content: noteContent
					}
				});
				await auditService.log({
					action: AuditAction.ManualBan,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `${reason}: ${notes ?? ""}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error banning users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/users/timeout", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
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

			const noteContent = notes ? `Timeout (3d): ${reason} - ${notes}` : `Timeout (3d): ${reason}`;

			for (const id of validIds) {
				await userService.timeout(id, true, reason);
				await prisma.userNote.create({
					data: {
						userId: req.user!.id,
						reportedUserId: id,
						content: noteContent
					}
				});
				await auditService.log({
					action: AuditAction.ManualTimeout,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `${reason}: ${notes ?? ""}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error timing out users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/summary/counters/tickets", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			// Get all open tickets with their first report's reason
			const openTickets = await prisma.ticket.findMany({
				where: { resolution: null },
				select: { id: true },
				orderBy: { createdAt: "desc" }
			});

			const ticketIds = openTickets.map(t => t.id);

			// Get the first report for each open ticket
			const firstReports = ticketIds.length > 0
				? await prisma.report.groupBy({
					by: ["ticketId", "reason"],
					where: {
						ticketId: { in: ticketIds }
					},
					_count: { id: true }
				})
				: [];

			// Build a map: for each ticket, get the reason (prefer first report)
			// Since groupBy returns all reasons for a ticket, take the first one
			const ticketReasonMap = new Map<string, string>();
			for (const report of firstReports) {
				if (!ticketReasonMap.has(report.ticketId)) {
					ticketReasonMap.set(report.ticketId, report.reason);
				}
			}

			const counts = new Map<string, number>(FRONTEND_REASON_KEYS.map(k => [k, 0]));
			for (const reason of ticketReasonMap.values()) {
				const key = REASON_KEY_MAP[reason] ?? reason;
				if (counts.has(key)) {
					counts.set(key, (counts.get(key) ?? 0) + 1);
				}
			}

			const countObj: Record<string, number> = {};
			for (const [k, v] of counts) {
				countObj[k] = v;
			}

			return res.status(200)
				.json({
					...countObj,
					total_open_tickets: ticketIds.length
				});
		} catch (error) {
			console.error("Error fetching ticket summary:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/summary/counters/reports", authMiddleware, moderatorMiddleware, async (_req, res) => {
		try {
			// Only count reports belonging to open (unresolved) tickets
			const reportCounts = await prisma.report.groupBy({
				by: ["reason"],
				where: {
					ticket: { resolution: null }
				},
				_count: { id: true }
			});

			const counts = new Map<string, number>(FRONTEND_REASON_KEYS.map(k => [k, 0]));
			let total = 0;
			for (const item of reportCounts) {
				const key = REASON_KEY_MAP[item.reason] ?? item.reason;
				if (counts.has(key)) {
					counts.set(key, (counts.get(key) ?? 0) + item._count.id);
				}
				total += item._count.id ?? 0;
			}

			const countObj: Record<string, number> = {};
			for (const [k, v] of counts) {
				countObj[k] = v;
			}

			return res.status(200)
				.json({
					...countObj,
					total_open_reports: total
				});
		} catch (error) {
			console.error("Error fetching reports summary:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/users/ban", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
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

			const noteContent = notes ? `Ban: ${reason} - ${notes}` : `Ban: ${reason}`;

			for (const id of validIds) {
				await userService.ban(id, true, reason as BanReason);
				await prisma.userNote.create({
					data: {
						userId: req.user!.id,
						reportedUserId: id,
						content: noteContent
					}
				});
				await auditService.log({
					action: AuditAction.ManualBan,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `${reason}: ${notes ?? ""}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error banning users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/users/unban", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { userIds, notes } = req.body ?? {};
			if (!Array.isArray(userIds) || userIds.length === 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const validIds = userIds.filter((id: unknown) => typeof id === "number" && id > 0);
			if (validIds.length === 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const noteContent = notes ? `Unban: ${notes}` : "Unban";

			for (const id of validIds) {
				await prisma.user.update({
					where: { id },
					data: {
						banned: false,
						suspensionReason: null,
						timeoutUntil: new Date()
					}
				});
				await prisma.userNote.create({
					data: {
						userId: req.user!.id,
						reportedUserId: id,
						content: noteContent
					}
				});
				await auditService.log({
					action: AuditAction.RemoveBan,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: notes ?? null,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error unbanning users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/users/increment-droplet", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { userIds, delta, notes } = req.body ?? {};
			if (!Array.isArray(userIds) || userIds.length === 0 || typeof delta !== "number" || delta === 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const validIds = userIds.filter((id: unknown) => typeof id === "number" && id > 0);
			if (validIds.length === 0) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const action = delta > 0 ? "Add" : "Remove";
			const noteContent = notes ? `${action} droplets: ${Math.abs(delta)} - ${notes}` : `${action} droplets: ${Math.abs(delta)}`;

			await prisma.user.updateMany({
				where: { id: { in: validIds } },
				data: {
					droplets: { increment: delta }
				}
			});

			for (const id of validIds) {
				await prisma.userNote.create({
					data: {
						userId: req.user!.id,
						reportedUserId: id,
						content: noteContent
					}
				});
				await auditService.log({
					action: AuditAction.ManualChangeDroplets,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `Delta: ${delta} - ${notes ?? ""}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error incrementing droplets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.post("/staff/dashboard/summary/users/timeout", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res) => {
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

			const timeoutUntil = new Date();
			timeoutUntil.setDate(timeoutUntil.getDate() + 3);

			const noteContent = notes ? `Timeout (3d): ${reason} - ${notes}` : `Timeout (3d): ${reason}`;

			await prisma.user.updateMany({
				where: { id: { in: validIds } },
				data: {
					timeoutUntil,
					suspensionReason: reason
				}
			});

			for (const id of validIds) {
				await prisma.userNote.create({
					data: {
						userId: req.user!.id,
						reportedUserId: id,
						content: noteContent
					}
				});
				await auditService.log({
					action: AuditAction.ManualTimeout,
					actorUserId: req.user!.id,
					targetUserId: id,
					details: `${reason}: ${notes ?? ""}`,
					ipAddress: req.ip
				});
			}

			return res.status(200)
				.json({});
		} catch (error) {
			console.error("Error timing out users:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/team/closed-tickets", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const start = new Date(req.query["start"] as string);
			const end = new Date(req.query["end"] as string);

			const items = await prisma.ticket.groupBy({
				by: ["moderatorUserId", "resolution"],
				where: {
					moderatorUserId: { not: null },
					resolution: { not: null },
					updatedAt: { gte: start, lte: end }
				},
				_count: { id: true },
			});

			// Aggregate by moderator
			const modTotals = new Map<number, { total: number; ban: number; timeout: number; ignore: number }>();
			for (const item of items) {
				if (item.moderatorUserId === null) continue;
				if (!modTotals.has(item.moderatorUserId)) {
					modTotals.set(item.moderatorUserId, { total: 0, ban: 0, timeout: 0, ignore: 0 });
				}
				const entry = modTotals.get(item.moderatorUserId)!;
				entry.total += item._count.id;
				if (item.resolution === "ban") entry.ban += item._count.id;
				else if (item.resolution === "timeout") entry.timeout += item._count.id;
				else if (item.resolution === "ignore") entry.ignore += item._count.id;
			}

			const modIds = [...modTotals.keys()];
			const users = modIds.length > 0
				? await prisma.user.findMany({
					where: { id: { in: modIds } },
					select: { id: true, name: true, nickname: true, role: true, picture: true, allianceId: true }
				})
				: [];
			const userMap = new Map(users.map(u => [u.id, u]));

			const enriched = [...modTotals.entries()].map(([modId, stats]) => {
				const user = userMap.get(modId);
				return {
					user: {
						id: modId,
						name: user?.nickname || user?.name || `Moderator #${modId}`,
						role: user?.role || "moderator",
						picture: user?.picture || null,
						allianceId: user?.allianceId ?? null
					},
					total: stats.total,
					ban: stats.ban,
					ignored: stats.ignore,
					timeout: stats.timeout,
					suspensionRate: stats.total > 0 ? (stats.ban + stats.timeout) / stats.total : 0
				};
			});

			return res.json({ items: enriched });
		} catch (error) {
			console.error("Error fetching team closed tickets:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/team/closed-reports", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const start = new Date(req.query["start"] as string);
			const end = new Date(req.query["end"] as string);

			const items = await prisma.ticket.groupBy({
				by: ["moderatorUserId", "resolution"],
				where: {
					moderatorUserId: { not: null },
					resolution: { not: null },
					updatedAt: { gte: start, lte: end }
				},
				_count: { id: true },
			});

			const modTotals = new Map<number, { total: number; ban: number; timeout: number; ignore: number }>();
			for (const item of items) {
				if (item.moderatorUserId === null) continue;
				if (!modTotals.has(item.moderatorUserId)) {
					modTotals.set(item.moderatorUserId, { total: 0, ban: 0, timeout: 0, ignore: 0 });
				}
				const entry = modTotals.get(item.moderatorUserId)!;
				entry.total += item._count.id;
				if (item.resolution === "ban") entry.ban += item._count.id;
				else if (item.resolution === "timeout") entry.timeout += item._count.id;
				else if (item.resolution === "ignore") entry.ignore += item._count.id;
			}

			const modIds = [...modTotals.keys()];
			const users = modIds.length > 0
				? await prisma.user.findMany({
					where: { id: { in: modIds } },
					select: { id: true, name: true, nickname: true, role: true, picture: true, allianceId: true }
				})
				: [];
			const userMap = new Map(users.map(u => [u.id, u]));

			const enriched = [...modTotals.entries()].map(([modId, stats]) => {
				const user = userMap.get(modId);
				return {
					user: {
						id: modId,
						name: user?.nickname || user?.name || `Moderator #${modId}`,
						role: user?.role || "moderator",
						picture: user?.picture || null,
						allianceId: user?.allianceId ?? null
					},
					total: stats.total,
					ban: stats.ban,
					ignored: stats.ignore,
					timeout: stats.timeout,
					suspensionRate: stats.total > 0 ? (stats.ban + stats.timeout) / stats.total : 0
				};
			});

			return res.json({ items: enriched });
		} catch (error) {
			console.error("Error fetching team closed reports:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/staff/dashboard/ban-appeals/see", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const start = req.query["start"] as string;
			const end = req.query["end"] as string;

			const dateFilter: any = {};
			if (start && end) {
				dateFilter.updatedAt = {
					gte: new Date(start),
					lte: new Date(end)
				};
			}

			// Get all moderators who have handled ban appeals (tickets with resolution="ban")
			const appealStats = await prisma.ticket.groupBy({
				by: ["moderatorUserId", "resolution"],
				where: {
					moderatorUserId: { not: null },
					resolution: { in: ["ban", "ignore"] },
					...dateFilter
				},
				_count: { id: true }
			});

			// Group by moderator
			const modStatsMap = new Map<number, { approved: number; rejected: number; total: number }>();
			for (const stat of appealStats) {
				if (stat.moderatorUserId === null) continue;
				if (!modStatsMap.has(stat.moderatorUserId)) {
					modStatsMap.set(stat.moderatorUserId, { approved: 0, rejected: 0, total: 0 });
				}
				const entry = modStatsMap.get(stat.moderatorUserId)!;
				if (stat.resolution === "ban") {
					entry.approved += stat._count.id;
				} else {
					entry.rejected += stat._count.id;
				}
				entry.total += stat._count.id;
			}

			// Get moderator usernames and roles
			const modIds = [...modStatsMap.keys()].filter(id => id > 0);
			const modUsers = modIds.length > 0
				? await prisma.user.findMany({
					where: { id: { in: modIds } },
					select: { id: true, name: true, nickname: true, role: true, picture: true }
				})
				: [];
			const userMap = new Map(modUsers.map(u => [u.id, u]));

			const items = [...modStatsMap.entries()].map(([modId, stats]) => {
				const user = userMap.get(modId);
				return {
					staffId: modId,
					username: user?.nickname || user?.name || `Moderator #${modId}`,
					role: user?.role || "moderator",
					approved: stats.approved,
					rejected: stats.rejected,
					total: stats.total,
					approveRate: stats.total > 0 ? Math.round((stats.approved / stats.total) * 1000) / 10 : 0
				};
			});

			// Compute globals
			const totalAppeals = items.reduce((sum, i) => sum + i.total, 0);
			const totalApproved = items.reduce((sum, i) => sum + i.approved, 0);
			const totalRejected = items.reduce((sum, i) => sum + i.rejected, 0);
			const itemCount = items.length;

			const globals = itemCount > 0
				? {
					total: Math.round((totalAppeals / itemCount) * 100) / 100,
					approved: Math.round((totalApproved / itemCount) * 100) / 100,
					rejected: Math.round((totalRejected / itemCount) * 100) / 100,
					approveRate: Math.round(
						items.reduce((s, i) => s + i.approveRate, 0) / itemCount * 10
					) / 10
				}
				: { total: 0, approved: 0, rejected: 0, approveRate: 0 };

			return res.status(200)
				.json({ items, globals });
		} catch (error) {
			console.error("Error fetching ban appeal stats:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/moderation", authMiddleware, moderatorMiddleware, async (_req, res) => {
		const html = await fs.readFile("./frontend/moderation.html", "utf8");
		return res
			.setHeader("Content-Type", "text/html")
			.send(html);
	});

	app.get("/moderator/:season/pixel/:tileX/:tileY", async (req, res) => {
		// Temporary redirect to the non-moderator route
		const redirectUrl = req.originalUrl.replace(/^\/moderator/, "");
		return res.redirect(redirectUrl);
	});

	app.get("/moderator/pixel-area/:season/:tileX/:tileY", authMiddleware, moderatorMiddleware, async (req, res) => {
		try {
			const x0 = Number.parseInt(req.query["x0"] as string);
			const y0 = Number.parseInt(req.query["y0"] as string);
			const x1 = Number.parseInt(req.query["x1"] as string);
			const y1 = Number.parseInt(req.query["y1"] as string);
			const season = req.params["season"] as string;
			const tileX = Number.parseInt(req.params["tileX"] as string);
			const tileY = Number.parseInt(req.params["tileY"] as string);

			if (y1 < y0 || x1 < x0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const validationError = validatePixelInfo({ season, tileX, tileY, x: x0, y: y0 }) ??
				validatePixelInfo({ season, tileX, tileY, x: x1, y: y1 });
			if (validationError) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(validationError, HTTP_STATUS.BAD_REQUEST));
			}

			const result = await pixelService.getPixelInfo({ season: 0, tileX, tileY, x0, y0, x1, y1 });
			const paintedBy = result.paintedBy ?? [];

			const buffer = new ArrayBuffer(paintedBy.length * 4);
			const view = new DataView(buffer);
			for (const [i, item] of paintedBy.entries()) {
				view.setUint32(i * 4, item.id, true);
			}

			return res.status(HTTP_STATUS.OK)
				.setHeader("Content-Type", "application/octet-stream")
				.send(Buffer.from(buffer));
		} catch (error) {
			console.error("Error getting pixel info:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});
}
