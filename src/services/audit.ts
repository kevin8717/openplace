import { PrismaClient } from "@prisma/client";

/**
 * Audit log action types - matching frontend expectations
 */
export enum AuditAction {
	// Automatic system actions
	Timeout = "TIMEOUT",
	Ban = "BAN",
	RemoveTimeout = "REMOVE_TIMEOUT",
	RemoveBan = "REMOVE_BAN",

	// Manual staff actions
	ManualTimeout = "MANUAL_TIMEOUT",
	ManualBan = "MANUAL_BAN",
	ManualChangeDroplets = "MANUAL_CHANGE_DROPLETS",
	ManualRemoveBan = "MANUAL_REMOVE_BAN",
	DeleteAllSessions = "DELETE_ALL_SESSIONS",
	PermissionsUpdate = "PERMISSIONS_UPDATE",
	ChangeUsername = "CHANGE_USERNAME",

	// System batch actions
	BanWave = "BAN_WAVE",

	// Appeal handling
	AcceptAppeal = "ACCEPT_APPEAL",
	DenyAppeal = "DENY_APPEAL",
}

export class AuditService {
	constructor(private prisma: PrismaClient) {}

	async log(params: {
		action: AuditAction | string;
		actorUserId: number;
		targetUserId?: number | null | undefined;
		details?: string | null | undefined;
		ipAddress?: string | null | undefined;
	}) {
		const data: any = {
			action: params.action,
			actorUserId: params.actorUserId
		};
		if (params.targetUserId !== undefined) {
			data.targetUserId = params.targetUserId;
		}
		if (params.details !== undefined) {
			data.details = params.details;
		} else {
			data.details = "";
		}
		if (params.ipAddress !== undefined) {
			data.ipAddress = params.ipAddress;
		}
		await this.prisma.auditLog.create({ data });
	}
}
