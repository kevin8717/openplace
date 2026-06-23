import { App, Response } from "@tinyhttp/app";
import { prisma } from "../config/database.js";
import { authMiddleware } from "../middleware/auth.js";
import { AuthenticatedRequest, UserRole } from "../types/index.js";
import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { AuditService, AuditAction } from "../services/audit.js";

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

const auditService = new AuditService(prisma);

export default function (app: App) {
	// GET /staff/tickets/reversals/last-resolved
	// 返回最近解决且没有待处理 reversal 的 ticket
	app.get("/staff/tickets/reversals/last-resolved", authMiddleware, moderatorMiddleware, async (_req: AuthenticatedRequest, res: Response) => {
		try {
			// 找 resolution 不为 null 的最新 ticket
			const ticket = await prisma.ticket.findFirst({
				where: {
					resolution: { not: null }
				},
				orderBy: { updatedAt: "desc" }
			});

			if (!ticket) {
				return res.status(200).json({ ticket: null });
			}

			// 检查该 ticket 是否有 pending 的 reversal
			const pendingReversal = await prisma.ticketReversal.findFirst({
				where: {
					ticketId: ticket.id,
					status: "pending"
				}
			});

			return res.status(200).json({
				ticket: pendingReversal ? null : { id: ticket.id }
			});
		} catch (error) {
			console.error("Error fetching last resolved ticket:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// GET /staff/tickets/reversals/ticket-info?ticketId=X
	// 返回 ticket 详情（含 reports）
	app.get("/staff/tickets/reversals/ticket-info", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const ticketId = req.query["ticketId"] as string ?? "";
			if (!ticketId) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const ticket = await prisma.ticket.findUnique({
				where: { id: ticketId },
				include: {
					reports: {
						select: {
							id: true,
							reason: true,
							createdAt: true
						},
						orderBy: { createdAt: "desc" }
					},
					reportedUser: {
						select: {
							id: true,
							name: true,
							nickname: true,
							role: true
						}
					}
				}
			});

			if (!ticket) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("Ticket not found", HTTP_STATUS.NOT_FOUND));
			}

			return res.status(200).json({
				ticket: {
					id: ticket.id,
					status: ticket.resolution,
					reports: ticket.reports.map(r => ({
						id: r.id,
						reason: r.reason,
						assignedReason: r.reason,
						createdAt: r.createdAt
					})),
					reportedUser: {
						id: ticket.reportedUser.id,
						name: ticket.reportedUser.nickname || ticket.reportedUser.name,
						role: ticket.reportedUser.role
					}
				}
			});
		} catch (error) {
			console.error("Error fetching ticket info:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// POST /staff/tickets/reversals
	// 创建 reversal 请求
	// body: { ticketId, newStatus, newReason, selectedReportId, justification }
	app.post("/staff/tickets/reversals", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const { ticketId, newStatus, selectedReportId, justification } = req.body ?? {};

			if (!ticketId || typeof ticketId !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			if (!justification || typeof justification !== "string" || justification.trim().length < 10) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Justification must be at least 10 characters", HTTP_STATUS.BAD_REQUEST));
			}

			if (!newStatus || typeof newStatus !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("newStatus is required", HTTP_STATUS.BAD_REQUEST));
			}

			// 检查 ticket 是否存在
			const ticket = await prisma.ticket.findUnique({
				where: { id: ticketId }
			});

			if (!ticket) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("Ticket not found", HTTP_STATUS.NOT_FOUND));
			}

			// 检查是否已有 pending 的 reversal
			const existingPending = await prisma.ticketReversal.findFirst({
				where: {
					ticketId,
					status: "pending"
				}
			});

			if (existingPending) {
				return res.status(409)
					.json({ error: "reversal_already_pending", status: 409 });
			}

			const reversal = await prisma.ticketReversal.create({
				data: {
					ticketId,
					requesterUserId: req.user!.id,
					previousReason: ticket.resolution,
					// newStatus 是前端期望的 ticket 新 resolution (ban/timeout/ignore)
					newReason: newStatus,
					selectedReportId: selectedReportId || null,
					justification: justification.trim()
				}
			});

			return res.status(200).json({ reversal });
		} catch (error) {
			console.error("Error creating ticket reversal:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// GET /staff/tickets/reversals?status=&page=&pageSize=
	app.get("/staff/tickets/reversals", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const status = req.query["status"] as string | undefined;
			const page = Math.max(1, Number.parseInt(req.query["page"] as string ?? "1"));
			const pageSize = Math.min(100, Math.max(1, Number.parseInt(req.query["pageSize"] as string ?? "50")));
			const skip = (page - 1) * pageSize;

			const where: any = {};
			if (status && ["pending", "approved", "denied"].includes(status)) {
				where.status = status;
			}

			const [reversals, total] = await Promise.all([
				prisma.ticketReversal.findMany({
					where,
					orderBy: { createdAt: "desc" },
					skip,
					take: pageSize,
					include: {
						requester: {
							select: { id: true, name: true, nickname: true }
						},
						reviewer: {
							select: { id: true, name: true, nickname: true }
						},
						ticket: {
							select: {
								id: true,
								resolution: true,
								reportedUserId: true,
								reportedUser: {
									select: { id: true, name: true, nickname: true, role: true }
								}
							}
						}
					}
				}),
				prisma.ticketReversal.count({ where })
			]);

			return res.status(200).json({
				reversals: reversals.map(r => ({
					id: r.id,
					ticketId: r.ticketId,
					status: r.status,
					previousReason: r.previousReason,
					newReason: r.newReason,
					justification: r.justification,
					reviewNotes: r.reviewNotes,
					reportedUserId: r.ticket.reportedUserId,
					reportedUserName: r.ticket.reportedUser.nickname || r.ticket.reportedUser.name,
					reportedUserRole: r.ticket.reportedUser.role,
					requesterUserId: r.requesterUserId,
					requesterName: r.requester.nickname || r.requester.name,
					reviewerUserId: r.reviewerUserId,
					reviewerName: r.reviewer ? (r.reviewer.nickname || r.reviewer.name) : null,
					reviewedAt: r.reviewedAt,
					createdAt: r.createdAt,
					updatedAt: r.updatedAt
				})),
				total,
				page,
				pageSize
			});
		} catch (error) {
			console.error("Error listing ticket reversals:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// GET /staff/tickets/reversals/:id
	app.get("/staff/tickets/reversals/:id", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const id = Number.parseInt(req.params["id"] as string ?? "");
			if (!Number.isInteger(id) || id <= 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const reversal = await prisma.ticketReversal.findUnique({
				where: { id },
				include: {
					requester: {
						select: { id: true, name: true, nickname: true }
					},
					reviewer: {
						select: { id: true, name: true, nickname: true }
					},
					ticket: {
						select: {
							id: true,
							resolution: true,
							reportedUserId: true,
							reportedUser: {
								select: { id: true, name: true, nickname: true, role: true }
							}
						}
					}
				}
			});

			if (!reversal) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("Reversal not found", HTTP_STATUS.NOT_FOUND));
			}

			return res.status(200).json({
				reversal: {
					id: reversal.id,
					ticketId: reversal.ticketId,
					status: reversal.status,
					previousReason: reversal.previousReason,
					newReason: reversal.newReason,
					justification: reversal.justification,
					reviewNotes: reversal.reviewNotes,
					selectedReportId: reversal.selectedReportId,
					reportedUserId: reversal.ticket.reportedUserId,
					reportedUserName: reversal.ticket.reportedUser.nickname || reversal.ticket.reportedUser.name,
					reportedUserRole: reversal.ticket.reportedUser.role,
					requesterUserId: reversal.requesterUserId,
					requesterName: reversal.requester.nickname || reversal.requester.name,
					reviewerUserId: reversal.reviewerUserId,
					reviewerName: reversal.reviewer ? (reversal.reviewer.nickname || reversal.reviewer.name) : null,
					reviewedAt: reversal.reviewedAt,
					createdAt: reversal.createdAt,
					updatedAt: reversal.updatedAt
				}
			});
		} catch (error) {
			console.error("Error fetching ticket reversal:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	// POST /staff/tickets/reversals/:id/review
	// body: { decision: "approve" | "deny", notes }
	app.post("/staff/tickets/reversals/:id/review", authMiddleware, moderatorMiddleware, async (req: AuthenticatedRequest, res: Response) => {
		try {
			const id = Number.parseInt(req.params["id"] as string ?? "");
			if (!Number.isInteger(id) || id <= 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const { decision, notes } = req.body ?? {};

			if (!decision || !["approve", "deny"].includes(decision)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Decision must be 'approve' or 'deny'", HTTP_STATUS.BAD_REQUEST));
			}

			const reversal = await prisma.ticketReversal.findUnique({
				where: { id },
				include: {
					ticket: {
						include: {
							reports: {
								select: { reason: true },
								orderBy: { createdAt: "asc" },
								take: 1
							},
							reportedUser: {
								select: { id: true, name: true, nickname: true }
							}
						}
					}
				}
			});

			if (!reversal) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("Reversal not found", HTTP_STATUS.NOT_FOUND));
			}

			if (reversal.status !== "pending") {
				return res.status(409)
					.json({ error: "Reversal already reviewed", status: 409 });
			}

			// 不允许审核自己发起的 reversal
			if (reversal.requesterUserId === req.user!.id) {
				return res.status(HTTP_STATUS.FORBIDDEN)
					.json({ error: "Cannot review your own reversal request", status: 403 });
			}

			const newStatus = decision === "approve" ? "approved" : "denied";

			// 如果批准 reversal，更新 ticket 的 resolution
			if (decision === "approve" && reversal.newReason) {
				await prisma.ticket.update({
					where: { id: reversal.ticketId },
					data: {
						resolution: reversal.newReason,
						moderatorUserId: req.user!.id
					}
				});

				// 根据新的 resolution 执行对应操作
				if (reversal.newReason === "ban") {
					await prisma.user.update({
						where: { id: reversal.ticket.reportedUserId },
						data: {
							banned: true,
							suspensionReason: reversal.ticket.reports?.[0]?.reason ?? "other"
						}
					});
				}
			}

			// 如果 reversal 被拒绝且原处罚是 ban，确保用户仍被 ban
			if (decision === "deny" && reversal.ticket.resolution === "ban") {
				await prisma.user.update({
					where: { id: reversal.ticket.reportedUserId },
					data: { banned: true }
				});
			}

			const now = new Date();
			await prisma.ticketReversal.update({
				where: { id },
				data: {
					status: newStatus,
					reviewerUserId: req.user!.id,
					reviewNotes: notes || null,
					reviewedAt: now
				}
			});

			await auditService.log({
				action: decision === "approve" ? AuditAction.AcceptAppeal : AuditAction.DenyAppeal,
				actorUserId: req.user!.id,
				targetUserId: reversal.ticket.reportedUserId,
				details: `Ticket reversal ${decision === "approve" ? "approved" : "denied"} for ticket ${reversal.ticketId}${notes ? `: ${notes}` : ""}`,
				ipAddress: req.ip
			});

			return res.status(200).json({ success: true });
		} catch (error) {
			console.error("Error reviewing ticket reversal:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});
}
