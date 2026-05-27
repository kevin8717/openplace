import { PrismaClient } from "@prisma/client";
import { BanReason, TicketResolution } from "../types";
import { UserService } from "./user";
import { NotificationService } from "./notification";


interface ReportUserInput {
	reportingUserId: number;
	reportedUserId: number;
	latitude: number;
	longitude: number;
	zoom: number;
	reason: BanReason;
	notes: string;
	imageBase64?: string;
}

export class TicketService {
	private readonly userService: UserService;
	private readonly notificationService: NotificationService;

	constructor(private prisma: PrismaClient) {
		this.userService = new UserService(this.prisma);
		this.notificationService = new NotificationService(this.prisma);
	}

	async reportUser(input: ReportUserInput): Promise<{ ticketId: string }> {
		// Find an existing open ticket for the same reported user
		let ticket = await this.prisma.ticket.findFirst({
			where: {
				reportedUserId: input.reportedUserId,
				resolution: null
			}
		});

		// If none exists, create a new ticket
		if (!ticket) {
			ticket = await this.prisma.ticket.create({
				data: {
					userId: input.reportingUserId,
					reportedUserId: input.reportedUserId
				}
			});
		}

		// Create a report entry inside the ticket
		const imageBuffer = input.imageBase64
			? Buffer.from(input.imageBase64, "base64")
			: null;

		await this.prisma.report.create({
			data: {
				ticketId: ticket.id,
				userId: input.reportingUserId,
				reason: input.reason,
				notes: input.notes,
				image: imageBuffer,
				latitude: input.latitude,
				longitude: input.longitude,
				zoom: input.zoom
			}
		});

		return { ticketId: ticket.id };
	}

	async resolve(ticketId: string, moderatorUser: number, resolution: TicketResolution) {
		const ticket = await this.prisma.ticket.update({
			where: { id: ticketId },
			data: {
				resolution,
				moderatorUserId: moderatorUser
			}
		});

		switch (resolution) {
		case TicketResolution.Ignore:
			break;

		case TicketResolution.Timeout:
			await this.userService.timeout(ticket.reportedUserId, true);
			break;

		case TicketResolution.Ban: {
			// Get the first report's reason as the ban reason
			const firstReport = await this.prisma.report.findFirst({
				where: { ticketId: ticket.id },
				orderBy: { createdAt: "asc" }
			});
			await this.prisma.user.update({
				where: { id: ticket.reportedUserId },
				data: {
					banned: true,
					suspensionReason: (firstReport?.reason ?? "other") as BanReason
				}
			});
			break;
		}
		}

		if (resolution !== TicketResolution.Ignore && ticket.userId !== moderatorUser) {
			await this.notificationService.create(
				ticket.userId,
				"report",
				"Update on your report",
				"Thank you for reporting a violation of the rules. The moderators have reviewed your report and taken appropriate action."
			);
		}
	}
}
