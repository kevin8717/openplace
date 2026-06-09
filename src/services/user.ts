import { Prisma, PrismaClient } from "@prisma/client";
import { calculateChargeRecharge } from "../utils/charges.js";
import { englishDataset, englishRecommendedTransformers, RegExpMatcher } from "obscenity";
import { BanReason } from "../types/index.js";
import { AuthService } from "./auth.js";
import { ValidationError } from "../utils/error.js";

export const COOLDOWN_MS = Number.parseInt(process.env["COOLDOWN_MS"] ?? "") || 30_000;
export const ACTIVE_COOLDOWN_MS = Number.parseInt(process.env["ACTIVE_COOLDOWN_MS"] ?? "") || 15_000;
export const BOOSTER_COOLDOWN_MS = Number.parseInt(process.env["BOOSTER_COOLDOWN_MS"] ?? "") || 10_000;
export const SPECIAL_COOLDOWN_MS = Number.parseInt(process.env["SPECIAL_COOLDOWN_MS"] ?? "") || 5000;
export const COOLDOWN_OVERRIDE_FOR_SPECIAL = (process.env["COOLDOWN_OVERRIDE_FOR_SPECIAL"] ?? "false") === "true";

export interface UpdateUserInput {
	nickname?: string;
	showLastPixel?: boolean;
	discord?: string;
}

const usernameRegex = /^[\w-]{3,16}$/i;

const usernameMatcher = new RegExpMatcher({
	...englishDataset.build(),
	...englishRecommendedTransformers
});

export class UserService {
	private readonly authService: AuthService;

	constructor(private prisma: PrismaClient) {
		this.authService = new AuthService(prisma, this);
	}

	static isValidUsername(username: string): boolean {
		return usernameRegex.test(username);
	}

	static isAcceptableUsername(username: string): boolean {
		return !usernameMatcher.hasMatch(username);
	}

	async getUserProfile(userId: number) {
		// Use transaction with row lock to prevent race conditions with concurrent pixel painting
		const [user, extraRaw] = await this.prisma.$transaction(async (tx) => {
			const rows = await tx.$queryRaw<{
				id: number; name: string; registrationIP: string | null; lastIP: string | null;
				discord: string | null; discordUserId: string | null; nickname: string | null;
				country: string; email: string | null; passwordHash: string;
				banned: boolean; verified: boolean; suspensionReason: string | null;
				timeoutUntil: Date; isCustomer: boolean;
				role: string; pixelsPainted: number; droplets: number;
				maxCharges: number; currentCharges: number; chargesCooldownMs: number;
				chargesLastUpdatedAt: Date; extraColorsBitmap: number;
				flagsBitmap: Buffer | null; equippedFlag: number; showLastPixel: boolean;
				maxFavoriteLocations: number; equippedBadges: string | null;
				equippedFrameId: number; equippedFontId: number; equippedStyleId: number;
				ownedFrames: string; ownedFonts: string; ownedStyles: string;
				picture: string | null; level: number; allianceId: number | null;
				allianceRole: string; allianceJoinedAt: Date | null;
				lastPixelLatitude: number | null; lastPixelLongitude: number | null;
				lastPixelPaintedAt: Date | null;
				createdAt: Date; updatedAt: Date;
				freeFlag: boolean; hotspotsOptOut: boolean; showDiscord: boolean; rulesRead: boolean;
			}[]>(
				Prisma.sql`SELECT * FROM User WHERE id = ${userId} LIMIT 1 FOR UPDATE`
			);
			const userRow = rows[0];
			if (!userRow) throw new Error("User not found");

			const updatedCharges = calculateChargeRecharge(
				userRow.currentCharges,
				userRow.maxCharges,
				userRow.chargesLastUpdatedAt,
				userRow.chargesCooldownMs
			);

			if (updatedCharges !== userRow.currentCharges) {
				await tx.user.update({
					where: { id: userId },
					data: {
						currentCharges: updatedCharges,
						chargesLastUpdatedAt: new Date()
					}
				});
				userRow.currentCharges = updatedCharges;
			}

			const prismaUser = await tx.user.findUnique({
				where: { id: userId },
				include: {
					alliance: true,
					favoriteLocations: true,
					permissions: true
				}
			});

			return [prismaUser, userRow] as const;
		}, {
			isolationLevel: "ReadCommitted",
			timeout: 30_000
		});

		if (!user) throw new Error("User not found");

		const flagsBitmap = Buffer.from(user.flagsBitmap ?? [0])
			.toString("base64");

		// 查找装备的边框和装扮信息
		let equippedFrameUrl = "";
		if (user.equippedFrameId > 0) {
			const frame = await this.prisma.frame.findUnique({ where: { id: user.equippedFrameId } });
			if (frame) {
				equippedFrameUrl = frame.imageUrl;
			}
		}

		// 构建 equippedNameCosmetic
		let equippedNameCosmetic: { fontId: number; styleId: number; resolved: { text: string } } | null = null;
		if (user.equippedFontId > 0 || user.equippedStyleId > 0) {
			const [font, style] = await Promise.all([
				user.equippedFontId > 0 ? this.prisma.fontCosmetic.findUnique({ where: { id: user.equippedFontId } }) : null,
				user.equippedStyleId > 0 ? this.prisma.styleCosmetic.findUnique({ where: { id: user.equippedStyleId } }) : null
			]);
			equippedNameCosmetic = {
				fontId: user.equippedFontId,
				styleId: user.equippedStyleId,
				resolved: {
					text: [font?.config, style?.config].filter(Boolean).join("")
				}
			};
		}

		// 转换 equippedBadges: [1,2,3] → [null, { id, imageUrl, name, rarity }, null]
		const rawBadges: number[] = user.equippedBadges
			? JSON.parse(user.equippedBadges)
			: [0, 0, 0];
		const badgeIds = rawBadges.filter(id => id > 0);
		const badges = badgeIds.length > 0
			? await this.prisma.badge.findMany({ where: { id: { in: badgeIds } } })
			: [];
		const badgeMap = new Map(badges.map(b => [b.id, b]));
		const equippedBadges = rawBadges.map(id =>
			id > 0
				? { id, imageUrl: badgeMap.get(id)?.imageUrl ?? "", name: badgeMap.get(id)?.name ?? "", rarity: badgeMap.get(id)?.rarity ?? "" }
				: null
		);

		const userPermissions = user.permissions.map(p => p.permission);
	
		return {
			id: user.id,
			name: user.nickname || user.name,
			discord: user.discord ?? "",
			discordId: user.discordUserId,
			country: user.country,
			timeoutUntil: user.timeoutUntil.toISOString(),
			charges: {
				cooldownMs: user.chargesCooldownMs,
				count: user.currentCharges,
				max: user.maxCharges
			},
			droplets: user.droplets,
			...userPermissions.length > 0 ? { permissions: userPermissions } : {},
			equippedFlag: user.equippedFlag,
			extraColorsBitmap: user.extraColorsBitmap,
			favoriteLocations: user.favoriteLocations.map(loc => ({
				id: loc.id,
				name: loc.name,
				latitude: loc.latitude,
				longitude: loc.longitude
			})),
			flagsBitmap,
			role: user.role,
			isCustomer: user.isCustomer,
			level: user.level,
			picture: user.picture ?? "",
			pixelsPainted: user.pixelsPainted,
			showLastPixel: user.showLastPixel,
			allianceId: user.allianceId ?? 0,
			allianceName: user.alliance?.name ?? "",
			allianceRole: user.allianceRole,
			equippedBadges,
			equippedFrameId: user.equippedFrameId,
			equippedFrameUrl,
			equippedNameCosmetic,
			maxFavoriteLocations: user.maxFavoriteLocations,
			freeFlag: extraRaw.freeFlag,
			hotspotsOptOut: extraRaw.hotspotsOptOut,
			showDiscord: extraRaw.showDiscord,
			rulesRead: extraRaw.rulesRead
		};
	}

	private sanitizeInput(str: string): string {
		return str.replaceAll(/["&'<>]/g, (char) => {
			const escapeMap: Record<string, string> = {
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				"\"": "&quot;",
				"&": "&amp;"
			};
			return escapeMap[char] || char;
		})
			.trim();
	}

	async updateUser(userId: number, input: UpdateUserInput) {
		const { nickname, showLastPixel, discord } = input;

		if (nickname && nickname.length > 16) {
			throw new Error("The nickname has more than 16 characters");
		}

		const updateData: {
			nickname?: string;
			showLastPixel?: boolean;
			discord?: string | null;
		} = {};

		if (nickname !== undefined) {
			const sanitized = this.sanitizeInput(nickname);
			if (sanitized.length === 0) {
				throw new Error("The nickname cannot be empty");
			}
			updateData.nickname = sanitized;
		}
		if (showLastPixel !== undefined) {
			updateData.showLastPixel = showLastPixel;
		}
		if (discord !== undefined) {
			// Check if Discord account is linked - prevent editing if linked
			const user = await this.prisma.user.findUnique({
				where: { id: userId },
				select: {
					discord: true,
					discordUserId: true
				}
			});

			if (user?.discordUserId && discord !== user?.discord) {
				throw new Error("Can’t change Discord username while account is linked.");
			}

			const sanitized = this.sanitizeInput(discord);
			updateData.discord = sanitized.length > 0 ? sanitized : null;
		}

		await this.prisma.user.update({
			where: { id: userId },
			data: updateData
		});

		return { success: true };
	}


	async deleteAccount(userId: number) {
		const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { id: true, name: true } });
		if (!user) {
			throw new Error("User not found");
		}
		await this.prisma.$transaction([
			// this.prisma.pixel.deleteMany({ where: { user: { id: userId } } }), // kinda sus
			// this.prisma.userFingerprint.deleteMany({ where: { userId } }), // xD
			// this.prisma.userRegionStats.deleteMany({ where: { userId } }),
			// this.prisma.userRegionStatsDaily.deleteMany({ where: { userId } }),
			this.prisma.profilePicture.deleteMany({ where: { userId } }),
			this.prisma.session.deleteMany({ where: { userId } }),
			this.prisma.user.update({
				where: { id: userId },
				data: {
					nickname: "Deleted Account",
					role: "deleted"
				}
			})
		]);
		return { success: true };
	}

	async getUserName(userId: number) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
			select: { name: true, nickname: true }
		});

		return (user?.nickname || user?.name) ?? null;
	}

	async getNickname(userId: number) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
			select: { nickname: true }
		});

		return user?.nickname ?? null;
	}

	async setLastIP(userId: number, ip: string) {
		let retries = 3;
		while (retries > 0) {
			try {
				await this.prisma.$transaction(async (tx) => {
					await tx.$queryRaw`SELECT id FROM User WHERE id = ${userId} LIMIT 1 FOR UPDATE`;
					await tx.user.update({ where: { id: userId }, data: { lastIP: ip } });
				}, {
					timeout: 5000,
					isolationLevel: "ReadCommitted"
				});
				break;
			} catch (error: unknown) {
				const error2 = error as { message?: string; code?: string; };
				retries--;
				const isRetryableError = (
					error2.message?.includes("deadlock") ||
					error2.message?.includes("timeout") ||
					error2.code === "P2034" ||
					error2.code === "P2024"
				);

				if (isRetryableError && retries > 0) {
					const delay = 100 * Math.pow(2, 3 - retries) + Math.random() * 50;
					await new Promise(resolve => setTimeout(resolve, delay));
					continue;
				}
				throw error;
			}
		}
	}

	async ban(userId: number, state: boolean, reason: BanReason | null, isRecursive = true) {
		const timeoutUntil = new Date();
		if (state) {
			// Set timeout 10 years in the future so frontend recognizes it as a ban
			timeoutUntil.setFullYear(timeoutUntil.getFullYear() + 10);
		}

		await this.prisma.user.update({
			where: { id: userId },
			data: {
				banned: state,
				suspensionReason: state ? reason : null,
				timeoutUntil
			}
		});

		if (!isRecursive) {
			await this.authService.banUser(userId, state, reason);
		}
	}

	async timeout(userId: number, state: boolean, reason?: string | null) {
		const timeoutUntil = new Date();

		if (state) {
			// 3 day timeout
			timeoutUntil.setDate(timeoutUntil.getDate() + 3);
		}

		await this.prisma.user.update({
			where: { id: userId },
			data: {
				timeoutUntil,
				suspensionReason: state ? (reason ?? "timeout") : null
			}
		});
	}

	async updateProfilePicture(userId: number, pictureUrl: string) {
		if (!pictureUrl || typeof pictureUrl !== "string") {
			throw new ValidationError("Invalid picture URL");
		}

		// Validate URL length (prevent extremely long URLs)
		if (pictureUrl.length > 100_000) { // ~100KB limit for data URL
			throw new ValidationError("Picture URL too long");
		}

		// Validate URL format - support both HTTP URLs and data URLs
		try {
			// Check if it's a data URL
			if (pictureUrl.startsWith("data:")) {
				// Validate data URL format: data:[<mediatype>][;base64],<data>
				if (!pictureUrl.includes(",") || pictureUrl.length < 10) {
					throw new ValidationError("Invalid data URL format");
				}

				// Check if data URL is complete (not truncated)
				const parts = pictureUrl.split(",");
				if (parts.length !== 2) {
					throw new ValidationError("Invalid data URL format - missing data part");
				}

				// Validate MIME type in data URL
				const header = parts[0];
				if (!header) {
					throw new ValidationError("Invalid data URL format - missing header");
				}
				const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
				const hasValidMimeType = allowedMimeTypes.some(mimeType => header.includes(mimeType));
				if (!hasValidMimeType) {
					throw new ValidationError("Invalid image type in data URL");
				}

				// Check if base64 data is valid
				const base64Data = parts[1];
				if (!base64Data || base64Data.length === 0) {
					throw new ValidationError("Invalid data URL format - empty data");
				}

				// Validate base64 content
				const base64Regex = /^[\d+/A-Za-z]*={0,2}$/;
				if (!base64Regex.test(base64Data)) {
					throw new ValidationError("Invalid base64 data in URL");
				}
			} else {
				// Validate HTTP/HTTPS URL
				const url = new URL(pictureUrl);
				if (!["http:", "https:"].includes(url.protocol)) {
					throw new ValidationError("Only HTTP/HTTPS URLs are allowed");
				}

				// Basic domain validation (optional - can be enhanced)
				if (url.hostname.includes("localhost") || url.hostname.includes("127.0.0.1")) {
					throw new ValidationError("Local URLs are not allowed");
				}
			}
		} catch (error) {
			if (error instanceof ValidationError) {
				throw error;
			}
			throw new ValidationError("Invalid URL format");
		}

		// Use transaction to ensure atomicity
		const result = await this.prisma.$transaction(async (tx) => {
			// Create profile picture
			const profilePicture = await tx.profilePicture.create({
				data: {
					userId,
					url: pictureUrl
				}
			});
			// -20k bitcoin
			await tx.user.update({
				where: { id: userId },
				data: {
					picture: pictureUrl,
					droplets: {
						decrement: 20_000
					}
				}
			});

			return { success: true, pictureId: profilePicture.id };
		});

		return result;
	}

	async changeProfilePicture(userId: number, pictureId: number | null) {
		if (pictureId === null) {
			// Set empty profile picture
			await this.prisma.user.update({
				where: { id: userId },
				data: {
					picture: null
				}
			});
			return { success: true };
		}

		const profilePicture = await this.prisma.profilePicture.findFirst({
			where: {
				id: pictureId,
				userId
			}
		});

		if (!profilePicture) {
			throw new ValidationError("Profile picture not found or access denied");
		}

		await this.prisma.user.update({
			where: { id: userId },
			data: {
				picture: profilePicture.url
			}
		});

		return { success: true };
	}

	async getProfilePictures(userId: number) {
		const pictures = await this.prisma.profilePicture.findMany({
			where: { userId },
			orderBy: { id: "desc" },
			select: {
				id: true,
				url: true
			}
		});

		return pictures;
	}

	async logoutFromAllDevices(userId: number) {
		await this.prisma.session.deleteMany({
			where: { userId }
		});

		return { success: true };
	}
}
