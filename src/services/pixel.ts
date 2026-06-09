import { Prisma, PrismaClient } from "@prisma/client";
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
import { checkColorUnlocked, COLOR_PALETTE } from "../utils/colors.js";
import { calculateChargeRecharge } from "../utils/charges.js";
import { Region, RegionService } from "./region.js";
import { LEVEL_BASE_PIXEL, LEVEL_EXPONENT, LEVEL_UP_DROPLETS_REWARD, LEVEL_UP_MAX_CHARGES_REWARD, PAINTED_DROPLETS_REWARD } from "../config/pixel.js";
import { AuthService } from "./auth.js";
import { UserRole } from "../types/index.js";
import { UserService } from "./user.js";
import { leaderboardService } from "./leaderboard.js";
import { WplaceBitMap } from "../utils/bitmap.js";
import { tilePixelToLatLon } from "../utils/coordinate.js";

export interface PaintPixelsInput {
	tileX: number;
	tileY: number;
	colors: number[];
	coords: number[];
}

export interface PaintPixelsResult {
	painted: number;
}

export interface AdminAutoPaintInput {
	fingerprint: string;
	season: number;
	px0: number;
	py0: number;
	width: number;
	height: number;
	pixels: number;
	userId: number;
	bitmap: Buffer;
}

export interface AdminAutoPaintResult {
	painted: number;
	processedPixels: number;
	stats: {
		userId: number;
		season: number;
		tilesAffected: Set<string>;
		timestamp: Date;
	};
}

export interface RandomTileResult {
	pixel: { x: number; y: number };
	tile: { x: number; y: number };
}

export type PixelInfoParams = {
	season: number;
	tileX: number;
	tileY: number;
} & ({
	x0: number;
	y0: number;
	x1: number;
	y1: number;
} | {
	x: number;
	y: number;
});

export interface PixelInfoResult {
	paintedBy?: {
		id: number;
		name?: string;
		allianceId?: number;
		allianceName?: string;
		equippedFlag?: number;
		picture?: string | null;
		discord?: string | null;
		discordUserId?: string | null;
		verified?: boolean;
		paintedAt?: Date;
	}[];
	region: Region;
}

function calculateLevel(pixelsPainted: number): number {
	return Math.pow(pixelsPainted / LEVEL_BASE_PIXEL, LEVEL_EXPONENT) + 1;
}

const BAN_ON_BANNED_IP = process.env["BAN_ON_BANNED_IP"] === "1";

export class PixelService {
	public readonly emptyTile: Buffer;
	private readonly regionService: RegionService;
	private readonly authService: AuthService;
	private readonly userService: UserService;
	private readonly regionCache = new Map<string, { region: Region; timestamp: number }>();
	private readonly CACHE_TTL = 60_000; // 1 minute
	private readonly REGION_CACHE_MAX = 10_000; // 最多缓存 1 万条

	constructor(private prisma: PrismaClient) {
		this.regionService = new RegionService(prisma);
		this.authService = new AuthService(prisma);
		this.userService = new UserService(prisma);

		const canvas = createCanvas(1000, 1000);
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, 1000, 1000);
		this.emptyTile = canvas.toBuffer("image/png");

		// Clean up cache every 10 minutes
		setInterval(() => {
			this.cleanupCache();
		}, 2 * 60 * 1000);

		// 后台异步瓦片重建：每 500ms 处理一次脏瓦片队列
		setInterval(() => {
			this.processDirtyTiles().catch(err => {
				console.error("[PixelService] Error processing dirty tiles:", err);
			});
		}, 500);
	}

	private cleanupCache(): void {
		const now = Date.now();
		for (const [key, value] of this.regionCache.entries()) {
			if (now - value.timestamp > this.CACHE_TTL) {
				this.regionCache.delete(key);
			}
		}
		// 清理 tile 缓存中过期的条目
		for (const [key, value] of this.tileCache.entries()) {
			if (now - value.cachedAt > this.TILE_CACHE_TTL) {
				this.tileCache.delete(key);
			}
		}
		// 堆超过 400MB 时主动 GC
		const mem = process.memoryUsage();
		if (global.gc && mem.heapUsed > 400 * 1024 * 1024) {
			global.gc();
		}
	}

	async getRandomTile(): Promise<RandomTileResult> {
		const total = await this.prisma.pixel.count();
		if (total === 0) {
			console.log("Table is empty");
			return {
				pixel: { x: 500, y: 500 },
				tile: { x: 1024, y: 1024 }
			};
		}

		const skip = Math.floor(Math.random() * total);
		const row = await this.prisma.pixel.findFirst({
			skip,
			take: 1
		});

		if (!row) {
			return {
				pixel: { x: 500, y: 500 },
				tile: { x: 1024, y: 1024 }
			};
		}

		return {
			pixel: { x: row.x, y: row.y },
			tile: { x: row.tileX, y: row.tileY }
		};
	}

	async getPixelInfo(params: PixelInfoParams): Promise<PixelInfoResult> {
		const { season, tileX, tileY } = params;
		const paintedBy: PixelInfoResult["paintedBy"] = [];
		let x = 0;
		let y = 0;

		if ("x" in params) {
			x = params.x;
			y = params.y;

			const pixel = await this.prisma.pixel.findUnique({
				where: {
					season_tileX_tileY_x_y: { season, tileX, tileY, x, y }
				}
			});

			if (pixel && pixel.paintedBy) {
				const userRec = await this.prisma.user.findUnique({
					where: { id: pixel.paintedBy },
					include: { alliance: true }
				});
				if (userRec?.banned) {
					paintedBy.push({
						id: -1,
						name: "Suspended Account",
						paintedAt: pixel.paintedAt
					});
				} else if (userRec) {
					paintedBy.push({
						id: userRec.id,
						name: userRec.nickname || userRec.name,
						allianceId: userRec.allianceId || 0,
						allianceName: userRec.alliance?.name || "",
						equippedFlag: userRec.equippedFlag,
						picture: userRec.picture,
						discord: userRec.discord,
						discordUserId: userRec.discordUserId,
						verified: userRec.verified,
						paintedAt: pixel.paintedAt
					});
				} else {
					paintedBy.push({
						id: pixel.paintedBy,
						paintedAt: pixel.paintedAt
					});
				}
			} else {
				paintedBy.push({
					id: 0
				});
			}
		} else {
			const { x0, y0, x1, y1 } = params;
			x = x0;
			y = y0;

			const items: { season: number; tileX: number; tileY: number; x: number; y: number; }[] = [];
			for (let y = y0; y <= y1; y++) {
				for (let x = x0; x <= x1; x++) {
					items.push({ season, tileX, tileY, x, y });
				}
			}

			const pixels = [];
			for (let i = 0; i < items.length; i += 1000) {
				const slice = items.slice(i, i + 1000);
				pixels.push(...await this.prisma.pixel.findMany({
					where: {
						OR: slice
					},
					take: slice.length
				}));
			}

			// 收集唯一的 paintedBy 用户 ID
			const userIds = [...new Set(pixels.map(p => p.paintedBy).filter((id): id is number => id !== null))];
			const users: Map<number, { id: number; nickname: string | null; name: string; banned: boolean; allianceId: number | null; alliance?: { name: string } | null; equippedFlag: number; picture: string; discord: string | null; discordUserId: string | null }> = new Map();
			if (userIds.length > 0) {
				const userRows = await this.prisma.user.findMany({
					where: { id: { in: userIds } },
					include: { alliance: true }
				});
				for (const u of userRows) {
					users.set(u.id, u as any);
				}
			}

			const pixelMap = new Map(pixels.map(item => [`${item.x},${item.y}`, item]));

			for (let y = y0; y <= y1; y++) {
				for (let x = x0; x <= x1; x++) {
					const pixel = pixelMap.get(`${x},${y}`);
					if (pixel && pixel.paintedBy) {
						const u = users.get(pixel.paintedBy);
						if (u?.banned) {
							paintedBy.push({
								id: -1,
								name: "Suspended Account",
								paintedAt: pixel.paintedAt
							});
						} else if (u) {
							paintedBy.push({
								id: u.id,
								name: u.nickname || u.name,
								allianceId: u.allianceId || 0,
								allianceName: u.alliance?.name || "",
								equippedFlag: u.equippedFlag,
								picture: u.picture,
								discord: u.discord,
								discordUserId: u.discordUserId
							});
						} else {
							paintedBy.push({
								id: pixel.paintedBy,
								paintedAt: pixel.paintedAt
							});
						}
					} else {
						paintedBy.push({
							id: 0
						});
					}
				}
			}
		}

		return {
			region: await this.regionService.getRegionForCoordinates([tileX, tileY], [x, y]),
			paintedBy
		};
	}

	// 瓦片图像内存缓存：key = "season,tileX,tileY"
	private readonly tileCache = new Map<string, { buffer: Buffer; updatedAt: Date; cachedAt: number }>();
	private readonly TILE_CACHE_TTL = 10_000; // 10 秒
	private readonly TILE_CACHE_MAX = 100;   // 最多缓存 100 个瓦片

	// ── 后台异步瓦片重建队列 ──
	private readonly dirtyTiles = new Set<string>();
	private isProcessingDirtyTiles = false;

	/**
	 * 标记瓦片为"脏"（需要重建图像），然后立即返回。
	 * 实际重建由后台定时器 processDirtyTiles 执行。
	 */
	private markTileDirty(tileX: number, tileY: number, season = 0): void {
		const key = `${season},${tileX},${tileY}`;
		this.dirtyTiles.add(key);
	}

	/**
	 * 后台处理脏瓦片队列，逐个重建瓦片图像。
	 * 通过 isProcessingDirtyTiles 防止并发执行。
	 */
	private async processDirtyTiles(): Promise<void> {
		if (this.isProcessingDirtyTiles) return;
		if (this.dirtyTiles.size === 0) return;

		this.isProcessingDirtyTiles = true;
		const tiles = [...this.dirtyTiles];
		this.dirtyTiles.clear();
		// console.log(`[PixelService] Processing ${tiles.length} dirty tiles: [${tiles.join(", ")}]`);

		for (const key of tiles) {
			const [seasonStr, tileXStr, tileYStr] = key.split(",");
			const season = Number(seasonStr);
			const tileX = Number(tileXStr);
			const tileY = Number(tileYStr);
			try {
				await this.updatePixelTileFull(tileX, tileY, season);
				// console.log(`[PixelService] Rebuilt tile ${key} successfully`);
			} catch (error) {
				console.error(`[PixelService] Failed to rebuild tile ${key}, will retry later:`, error);
				// 重建失败，重新加入队列以便下次重试
				this.dirtyTiles.add(key);
			}
		}

		this.isProcessingDirtyTiles = false;
	}

	async getTileImage(tileX: number, tileY: number, season = 0): Promise<{ buffer: Buffer; updatedAt: Date }> {
		const cacheKey = `${season},${tileX},${tileY}`;

		// 内存缓存命中（快路径）— 同时更新 LRU 顺序
		const cached = this.tileCache.get(cacheKey);
		if (cached && Date.now() - cached.cachedAt < this.TILE_CACHE_TTL) {
			// 移到末尾表示最近使用（Map 迭代顺序 = 插入顺序）
			this.tileCache.delete(cacheKey);
			this.tileCache.set(cacheKey, cached);
			// console.log(`[TileCache] HIT ${cacheKey} (${cached.buffer.length} bytes, cachedAt ${new Date(cached.cachedAt).toISOString()})`);
			return { buffer: cached.buffer, updatedAt: cached.updatedAt };
		}

		// 查询数据库，使用 $queryRaw + NULLIF 防止零值日期报错
		const rows = await this.prisma.$queryRaw<{ imageData: Buffer | null; updatedAt: Date | null }[]>(
			Prisma.sql`SELECT imageData, NULLIF(updatedAt, '0000-00-00 00:00:00') AS updatedAt FROM Tile WHERE season = ${season} AND x = ${tileX} AND y = ${tileY} LIMIT 1`
		);
		const row = rows[0];

		if (!row || !row.imageData) {
			if (!row) {
				return { buffer: this.emptyTile, updatedAt: new Date() };
			}
			// imageData 为 null，重新生成
			const result = await this.updatePixelTile(tileX, tileY, season);
			this.setTileCache(cacheKey, result.buffer, result.updatedAt);
			return result;
		}

		// row.imageData 来自 MySQL BLOB，已经是 Buffer，避免 Buffer.from() 不必要拷贝
		const buffer = Buffer.isBuffer(row.imageData) ? row.imageData : Buffer.from(row.imageData);
		const updatedAt = row.updatedAt instanceof Date && !isNaN(row.updatedAt.getTime()) ? row.updatedAt : new Date();
		this.setTileCache(cacheKey, buffer, updatedAt);
		// console.log(`[TileCache] DB ${cacheKey} (${buffer.length} bytes, updatedAt ${updatedAt.toISOString()})`);
		return { buffer, updatedAt };
	}

	private setTileCache(key: string, buffer: Buffer, updatedAt: Date): void {
		// 淘汰最旧条目（Map 的第一个 key 即最早插入的）
		if (this.tileCache.size >= this.TILE_CACHE_MAX) {
			const oldestKey = this.tileCache.keys().next();
			if (!oldestKey.done && oldestKey.value !== undefined) {
				this.tileCache.delete(oldestKey.value);
			}
		}
		this.tileCache.set(key, { buffer, updatedAt, cachedAt: Date.now() });
	}

	async updatePixelTile(tileX: number, tileY: number, season = 0): Promise<{ buffer: Buffer; updatedAt: Date }> {
		// 尝试增量更新：若 Tile 已有图像，只查询变更的像素
		const existingRow = await this.prisma.$queryRaw<{ imageData: Buffer | null; updatedAt: Date | null }[]>(
			Prisma.sql`SELECT imageData, NULLIF(updatedAt, '0000-00-00 00:00:00') AS updatedAt FROM Tile WHERE season = ${season} AND x = ${tileX} AND y = ${tileY} LIMIT 1`
		);
		const existing = existingRow[0];

		if (existing?.imageData && existing?.updatedAt) {
			return await this.updatePixelTileIncremental(tileX, tileY, season, existing.imageData, existing.updatedAt);
		}

		// console.log(`[PixelService] FULL rebuild ${season},${tileX},${tileY} starting (imageData=${!!existing?.imageData}, updatedAt=${!!existing?.updatedAt})`);

		// 全量重建：分块查询像素，避免 100 万行对象一次性塞爆堆内存
		const canvas = createCanvas(1000, 1000);
		const ctx = canvas.getContext("2d");
		const imageData = ctx.createImageData(1000, 1000);
		const data = imageData.data;

		const CHUNK = 100_000;
		let totalPixelsFound = 0;
		let offset = 0;
		while (true) {
			const chunk = await this.prisma.$queryRaw<{ x: number; y: number; colorId: number }[]>(
				Prisma.sql`SELECT x, y, colorId FROM Pixel WHERE tileX = ${tileX} AND tileY = ${tileY} AND season = ${season} LIMIT ${CHUNK} OFFSET ${offset}`
			);
			if (chunk.length === 0) break;

			for (const pixel of chunk) {
				const color = COLOR_PALETTE[pixel.colorId];
				if (!color) continue;
				if (pixel.colorId === 0) continue; // colorId=0 即擦除，buffer 初始全透明，跳过即保持透明
				const [r, g, b] = color.rgb;
				const index = (pixel.y * 1000 + pixel.x) * 4;
				data[index + 0] = r;
				data[index + 1] = g;
				data[index + 2] = b;
				data[index + 3] = 255;
				totalPixelsFound++;
			}

			offset += chunk.length;
		}

		// console.log(`[PixelService] Full rebuild: ${totalPixelsFound} pixels drawn on canvas`);

		ctx.putImageData(imageData, 0, 0);

		const buffer = await this.quantize(canvas.toBuffer("image/png"));
		// 使用原子 INSERT ... ON DUPLICATE KEY UPDATE 替代 Prisma upsert
		// 避免 MySQL 1020 "Record has changed since last read" 错误
		await this.prisma.$executeRaw`
			INSERT INTO Tile (season, x, y, imageData, updatedAt)
			VALUES (${season}, ${tileX}, ${tileY}, ${buffer}, NOW())
			ON DUPLICATE KEY UPDATE
				imageData = VALUES(imageData),
				updatedAt = NOW()
		`;
		const [updatedRow] = await this.prisma.$queryRaw<{ updatedAt: Date }[]>`
			SELECT updatedAt FROM Tile WHERE season = ${season} AND x = ${tileX} AND y = ${tileY} LIMIT 1
		`;
		const updatedAt = updatedRow?.updatedAt ?? new Date();

		// 更新缓存
		this.setTileCache(`${season},${tileX},${tileY}`, buffer, updatedAt);

		return { buffer, updatedAt };
	}

	/**
	 * 增量更新瓦片图像：解码已有 PNG → 只查询变更像素 → 修改 RGBA 缓冲区 → 重新量化。
	 * 避免全量查询 100 万行像素对象导致 OOM。
	 */
	private async updatePixelTileIncremental(
		tileX: number, tileY: number, season: number,
		existingImageData: Buffer, lastUpdatedAt: Date
	): Promise<{ buffer: Buffer; updatedAt: Date }> {
		// 解码已有图像为原始 RGBA
		const { data: rgba } = await sharp(existingImageData)
			.raw()
			.toBuffer({ resolveWithObject: true })
			.catch(() => ({ data: null as any }));

		if (!rgba || rgba.length !== 4_000_000) {
			// 解码失败，回退到全量重建
			return await this.updatePixelTileFull(tileX, tileY, season);
		}

		// 只查询自上次重建后变更的像素
		const newPixels = await this.prisma.pixel.findMany({
			where: {
				tileX, tileY, season,
				paintedAt: { gt: lastUpdatedAt }
			},
			select: { x: true, y: true, colorId: true }
		});

		for (const pixel of newPixels) {
			const color = COLOR_PALETTE[pixel.colorId];
			if (!color) continue;
			const [r, g, b] = color.rgb;
			const index = (pixel.y * 1000 + pixel.x) * 4;
			if (pixel.colorId === 0) {
				// colorId=0 即擦除（透明）。增量路径的 rgba 来自解码已有 PNG，
				// 旧颜色还在 buffer 中，必须显式清除，不能跳过
				rgba[index + 0] = 0;
				rgba[index + 1] = 0;
				rgba[index + 2] = 0;
				rgba[index + 3] = 0;
			} else {
				rgba[index + 0] = r;
				rgba[index + 1] = g;
				rgba[index + 2] = b;
				rgba[index + 3] = 255;
			}
		}

		const buffer = await this.quantize(Buffer.from(rgba), { width: 1000, height: 1000, channels: 4 });
		// 使用原子 INSERT ... ON DUPLICATE KEY UPDATE 替代 Prisma upsert
		await this.prisma.$executeRaw`
			INSERT INTO Tile (season, x, y, imageData, updatedAt)
			VALUES (${season}, ${tileX}, ${tileY}, ${buffer}, NOW())
			ON DUPLICATE KEY UPDATE
				imageData = VALUES(imageData),
				updatedAt = NOW()
		`;
		const [updatedRow] = await this.prisma.$queryRaw<{ updatedAt: Date }[]>`
			SELECT updatedAt FROM Tile WHERE season = ${season} AND x = ${tileX} AND y = ${tileY} LIMIT 1
		`;
		const updatedAt = updatedRow?.updatedAt ?? new Date();

		this.setTileCache(`${season},${tileX},${tileY}`, buffer, updatedAt);
		return { buffer, updatedAt };
	}

	/**
	 * 全量重建瓦片图像（无已有图像时使用）。
	 * 分块查询像素（每次 100K），峰值内存约为 Canvas + ImageData + 一个分块 ≈ 14MB。
	 */
	private async updatePixelTileFull(tileX: number, tileY: number, season: number): Promise<{ buffer: Buffer; updatedAt: Date }> {
		// console.log(`[PixelService] updatePixelTileFull ${season},${tileX},${tileY} starting`);

		// 直接构建 raw RGBA buffer（4MB），跳过 canvas（createImageData + 渲染 + 双次编码）
		// 初始化为全透明（0,0,0,0），colorId 0（Transparent）和未绘制区域保持透明
		const TILE_SIZE = 1000;
		const rgba = new Uint8Array(TILE_SIZE * TILE_SIZE * 4);

		const CHUNK = 100_000;
		let totalPixelsFound = 0;
		let offset = 0;
		while (true) {
			const chunk = await this.prisma.$queryRaw<{ x: number; y: number; colorId: number }[]>(
				Prisma.sql`SELECT x, y, colorId FROM Pixel WHERE tileX = ${tileX} AND tileY = ${tileY} AND season = ${season} LIMIT ${CHUNK} OFFSET ${offset}`
			);
			if (chunk.length === 0) break;

			for (const pixel of chunk) {
				const color = COLOR_PALETTE[pixel.colorId];
				if (!color) continue;
				if (pixel.colorId === 0) continue; // colorId=0 即擦除，buffer 初始全透明，跳过即保持透明
				const [r, g, b] = color.rgb;
				const index = (pixel.y * TILE_SIZE + pixel.x) * 4;
				rgba[index + 0] = r;
				rgba[index + 1] = g;
				rgba[index + 2] = b;
				rgba[index + 3] = 255; // 不透明
				totalPixelsFound++;
			}

			offset += chunk.length;
		}

		// console.log(`[PixelService] updatePixelTileFull: ${totalPixelsFound} pixels drawn (${offset} total rows)`);

		// 使用 this.quantize()（colors:256, effort:4）替代内联 sharp 量化。
		// 内联量化 colors:64 会使 libvips 重新计算调色板，不保证精确保留原始 RGB 值，
		// 导致瓦片中颜色偏移（如 #aaaaaa → #2fabcf）。
		const buffer = await this.quantize(Buffer.from(rgba.buffer), { width: TILE_SIZE, height: TILE_SIZE, channels: 4 });
		// 使用原子 INSERT ... ON DUPLICATE KEY UPDATE 替代 Prisma upsert
		await this.prisma.$executeRaw`
			INSERT INTO Tile (season, x, y, imageData, updatedAt)
			VALUES (${season}, ${tileX}, ${tileY}, ${buffer}, NOW())
			ON DUPLICATE KEY UPDATE
				imageData = VALUES(imageData),
				updatedAt = NOW()
		`;
		const [updatedRow] = await this.prisma.$queryRaw<{ updatedAt: Date }[]>`
			SELECT updatedAt FROM Tile WHERE season = ${season} AND x = ${tileX} AND y = ${tileY} LIMIT 1
		`;
		const updatedAt = updatedRow?.updatedAt ?? new Date();

		this.setTileCache(`${season},${tileX},${tileY}`, buffer, updatedAt);
		return { buffer, updatedAt };
	}

	async drawPixelsToTile(_pixels: { x: number; y: number; colorId: number }[], tileX: number, tileY: number, season = 0): Promise<void> {
		// Pixel 表是数据源，Tile 图像是派生缓存。
		// 每次全量重建，避免增量更新的竞态问题。
		await this.updatePixelTile(tileX, tileY, season);
	}

	/**
	 * 强制全量重建瓦片图像：清 DB 缓存 + 清内存缓存 + 全量重建
	 * 适用于 deleteMany 等无法被增量路径感知的变更
	 */
	async forceRebuildTile(tileX: number, tileY: number, season = 0): Promise<void> {
		await this.prisma.$executeRaw`
			UPDATE Tile SET imageData = NULL
			WHERE season = ${season} AND x = ${tileX} AND y = ${tileY}
		`;
		this.tileCache.delete(`${season},${tileX},${tileY}`);
		await this.updatePixelTileFull(tileX, tileY, season);
	}

	private async quantize(buffer: Buffer, raw?: { width: number; height: number; channels: 1 | 2 | 3 | 4 }): Promise<Buffer> {
		const pipeline = raw ? sharp(buffer, { raw }) : sharp(buffer);
		return await pipeline
			.png({
				palette: true,
				quality: 100,
				colors: 256,
				dither: 0,
				compressionLevel: 8,
				// More effort seems to have no effect on file size, but does impact speed
				// Lower effort causes subtle color shifting in the palette
				effort: 4
			})
			.toBuffer();
	}

	async paintPixels(account: { userId: number; ip: string; country?: string; }, input: PaintPixelsInput, season = 0): Promise<PaintPixelsResult> {
		const { userId } = account;
		const { tileX, tileY, colors, coords } = input;

		if (!colors || !coords || !Array.isArray(colors) || !Array.isArray(coords)) {
			throw new Error("Bad Request");
		}

		if (colors.length * 2 !== coords.length) {
			throw new Error("Bad Request");
		}

		const user = await this.prisma.user.findUnique({
			where: { id: userId }
		});

		if (!user) {
			throw new Error("refresh");
		}

		if (user.banned) {
			throw new Error("banned");
		}

		if (user.timeoutUntil > new Date()) {
			throw new Error("timeout");
		}

		const ban = await this.authService.getBan(account);
		if (ban) {
			if (BAN_ON_BANNED_IP) {
				await this.userService.ban(userId, true, ban.reason);
			}

			throw new Error("banned");
		}

		for (const colorId of colors) {
			if (!checkColorUnlocked(colorId, user.extraColorsBitmap)) {
				throw new Error("attempted to paint with a colour that was not purchased.");
			}
		}

		const isClearingPixels = user.role === UserRole.Admin && colors.every(id => id === 0);

		// ── Batch processing: split pixels into small batches to limit peak memory ──
		// 10,000/批是经过验证的内存和安全平衡点。<3K 会导致过多批次 → 大量变量晋升老生代
		const PAINT_BATCH_SIZE = 10_000;
		const pixelCount = colors.length;
		const flagsBitmap = user.flagsBitmap
			? WplaceBitMap.fromBase64(Buffer.from(user.flagsBitmap).toString("base64"))
			: new WplaceBitMap();

		let totalPainted = 0;
		let totalChargeCost = 0;
		const regionStatsMap = new Map<string, { regionCityId?: number | null; regionCountryId?: number | null; count: number }>();

		await this.prisma.$executeRaw(Prisma.sql`INSERT IGNORE INTO Tile (season, x, y) VALUES (${season}, ${tileX}, ${tileY})`);
		const paintedAt = new Date();

		for (let batchStart = 0; batchStart < pixelCount; batchStart += PAINT_BATCH_SIZE) {
			const batchEnd = Math.min(batchStart + PAINT_BATCH_SIZE, pixelCount);
			const batchSize = batchEnd - batchStart;

			// Build TypedArrays for this batch only
			const batchX = new Int16Array(batchSize);
			const batchY = new Int16Array(batchSize);
			const batchColorId = new Uint8Array(batchSize);
			let batchValidCount = 0;

			for (let i = batchStart; i < batchEnd; i++) {
				const x = coords[i * 2];
				const y = coords[i * 2 + 1];
				const colorId = colors[i] ?? 0;
				if (x === undefined || y === undefined || x < 0 || x >= 1000 || y < 0 || y >= 1000) continue;
				const idx = batchValidCount;
				batchX[idx] = x;
				batchY[idx] = y;
				batchColorId[idx] = colorId;
				batchValidCount++;
			}

			if (batchValidCount === 0) continue;

			let batchRegionStats: Array<{ regionCityId?: number | null; regionCountryId?: number | null; count: number }> = [];

			// 用嵌套块限制 TypedArrays 作用域，确保 gc() 之前引用已清除
			{
				const bx = batchX.subarray(0, batchValidCount);
				const by = batchY.subarray(0, batchValidCount);
				const bColor = batchColorId.subarray(0, batchValidCount);
				const bCityId = new Int32Array(batchValidCount);
				const bCountryId = new Int32Array(batchValidCount);

				// Region lookups for this batch
				const regionBatchSize = 200;
				const uniqueCoords = new Map<string, number>();
				for (let i = 0; i < batchValidCount; i++) {
					const key = `${tileX},${tileY},${bx[i]},${by[i]}`;
					if (!uniqueCoords.has(key)) uniqueCoords.set(key, i);
				}
				const coordKeys = [...uniqueCoords.keys()];
				for (let i = 0; i < coordKeys.length; i += regionBatchSize) {
					const slice = coordKeys.slice(i, i + regionBatchSize);
					const results = await Promise.all(slice.map(async (key) => {
						const cached = this.regionCache.get(key);
						if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) return { key, region: cached.region };
						const [txS, tyS, xS, yS] = key.split(",");
						const region = await this.regionService.getRegionForCoordinates(
							[Number.parseInt(txS!), Number.parseInt(tyS!)],
							[Number.parseInt(xS!), Number.parseInt(yS!)]
						);
						if (this.regionCache.size >= this.REGION_CACHE_MAX) {
							const oldestKey = this.regionCache.keys().next().value;
							if (oldestKey !== undefined) this.regionCache.delete(oldestKey);
						}
						this.regionCache.set(key, { region, timestamp: Date.now() });
						return { key, region };
					}));
					for (const r of results) {
						const idx = uniqueCoords.get(r.key);
						if (idx !== undefined) { bCityId[idx] = r.region?.cityId ?? 0; bCountryId[idx] = r.region?.countryId ?? 0; }
					}
				}
				uniqueCoords.clear();

				// Charge cost & region stats for this batch
				batchRegionStats = [];
				for (let i = 0; i < batchValidCount; i++) {
					const countryId = bCountryId[i] ?? 0;
					totalChargeCost += (countryId > 0 && flagsBitmap.get(countryId)) ? 0.9 : 1;

					const rCity = bCityId[i] || null;
					const rCountry = bCountryId[i] || null;
					const existing = batchRegionStats.find(s => s.regionCityId === rCity && s.regionCountryId === rCountry);
					if (existing) existing.count++;
					else batchRegionStats.push({ regionCityId: rCity, regionCountryId: rCountry, count: 1 });
				}

				// SQL inserts for this batch
				const dbBatchSize = 500;
				for (let i = 0; i < batchValidCount; i += dbBatchSize) {
					const end = Math.min(i + dbBatchSize, batchValidCount);
					if (isClearingPixels) {
						const values = [];
						for (let j = i; j < end; j++) values.push(Prisma.sql`(${season}, ${tileX}, ${tileY}, ${bx[j]}, ${by[j]})`);
						await this.prisma.$executeRaw`DELETE FROM Pixel WHERE (season, tileX, tileY, x, y) IN (${Prisma.join(values)})`;
					} else {
						const pixelValues = [];
						const historyValues = [];
						for (let j = i; j < end; j++) {
							pixelValues.push(Prisma.sql`(${season}, ${tileX}, ${tileY}, ${bx[j]}, ${by[j]}, ${bColor[j]}, ${userId}, ${paintedAt}, ${bCityId[j] || null}, ${bCountryId[j] || null})`);
							historyValues.push(Prisma.sql`(${season}, ${tileX}, ${tileY}, ${bx[j]}, ${by[j]}, ${bColor[j]}, ${userId}, ${paintedAt})`);
						}
						await this.prisma.$executeRaw`
							INSERT INTO Pixel (season, tileX, tileY, x, y, colorId, paintedBy, paintedAt, regionCityId, regionCountryId)
							VALUES ${Prisma.join(pixelValues)}
							ON DUPLICATE KEY UPDATE
								colorId = VALUE(colorId), paintedBy = VALUE(paintedBy), paintedAt = VALUE(paintedAt),
								regionCityId = VALUE(regionCityId), regionCountryId = VALUE(regionCountryId)
						`;
						// 记录像素变更历史 — 纯追加，用于 reverse/timestamps
						await this.prisma.$executeRaw`
							INSERT INTO PixelHistory (season, tileX, tileY, x, y, colorId, paintedBy, paintedAt)
							VALUES ${Prisma.join(historyValues)}
						`;
					}
					if (end < batchValidCount) await new Promise(r => setTimeout(r, 10));
				}
			}
			// 嵌套块结束 → bx/by/bColor/bCityId/bCountryId/uniqueCoords/coordKeys 全部出作用域
			// V8 现在可以回收这些 ~100KB TypedArrays

			totalPainted += batchValidCount;
			// 直接合并到 regionStatsMap 而非中间数组
			for (const s of batchRegionStats) {
				const key = `${s.regionCityId ?? "null"}-${s.regionCountryId ?? "null"}`;
				const existing = regionStatsMap.get(key);
				if (existing) existing.count += s.count;
				else regionStatsMap.set(key, { ...s });
			}
			(batchRegionStats as any) = null;
			
			await new Promise(r => setTimeout(r, 10));
		}

		if (totalPainted === 0) return { painted: 0 };
		const painted = totalPainted;

		if (!isClearingPixels) {
			const paintedRewards = {
				droplets: painted * PAINTED_DROPLETS_REWARD
			};

			// Retry logic for handling race conditions and deadlocks
			let retries = 5;
			while (retries > 0) {
				try {
					await this.prisma.$transaction(async (tx) => {
						// Lock user first, then alliance to prevent deadlock
						const rows = await tx.$queryRaw<{ id: number; currentCharges: number; maxCharges: number; pixelsPainted: number; level: number; droplets: number; chargesLastUpdatedAt: Date; chargesCooldownMs: number; extraColorsBitmap: number }[]>(
							Prisma.sql`SELECT id, currentCharges, maxCharges, pixelsPainted, level, droplets, chargesLastUpdatedAt, chargesCooldownMs, extraColorsBitmap FROM User WHERE id = ${userId} LIMIT 1 FOR UPDATE`
						);
						const u = rows[0];
						if (!u) return;

						const currentCharges = calculateChargeRecharge(
							u.currentCharges,
							u.maxCharges,
							u.chargesLastUpdatedAt || new Date(),
							u.chargesCooldownMs
						);

						if (currentCharges < totalChargeCost) {
							throw new Error("attempted to paint more pixels than there was charges.");
						}

						const newCharges = Math.max(0, currentCharges - totalChargeCost);
						const newPixelsPainted = u.pixelsPainted + painted;
						const newLevel = calculateLevel(newPixelsPainted);

						const levelUpRewards = {
							droplets: Math.floor(newLevel) !== Math.floor(u.level) ? LEVEL_UP_DROPLETS_REWARD : 0,
							maxCharges: LEVEL_UP_MAX_CHARGES_REWARD * (Math.floor(newLevel) - Math.floor(u.level))
						};

						// Update user first
						// Compute last pixel coordinates from the batch
						let lastPixelLat: number | null = null;
						let lastPixelLon: number | null = null;
						if (coords.length >= 2) {
							const lx = coords[coords.length - 2]!;
							const ly = coords[coords.length - 1]!;
							try {
								[lastPixelLat, lastPixelLon] = tilePixelToLatLon(tileX, tileY, lx, ly);
							} catch {
								// ignore conversion errors
							}
						}

						await tx.user.update({
							where: { id: userId },
							data: {
								currentCharges: newCharges,
								pixelsPainted: newPixelsPainted,
								level: newLevel,
								droplets: u.droplets + levelUpRewards.droplets + paintedRewards.droplets,
								maxCharges: u.maxCharges + levelUpRewards.maxCharges,
								chargesLastUpdatedAt: new Date(),
								lastPixelLatitude: lastPixelLat,
								lastPixelLongitude: lastPixelLon,
								lastPixelPaintedAt: new Date()
							}
						});

						// Then update alliance if user has one
						// 不加 FOR UPDATE：alliance.pixelsPainted 是近似计数器，
						// 多个同联盟用户同时画时用原子 increment 避免锁等待
						if (user.allianceId) {
							await tx.alliance.update({
								where: { id: user.allianceId },
								data: { pixelsPainted: { increment: painted } }
							});
						}
					}, {
						timeout: 10_000, // 10 second timeout
						isolationLevel: "ReadCommitted" // Use read committed to reduce lock contention
					});
					break; // Success, exit retry loop
				} catch (error: any) {
					retries--;

					// Check if it's a retryable error (race condition, deadlock, timeout)
					const isRetryableError = (
						error.message?.includes("Record has changed since last read") ||
						error.message?.includes("deadlock") ||
						error.message?.includes("timeout") ||
						error.code === "P2034" ||
						error.code === "P2024"
					);

					if (isRetryableError && retries > 0) {
						// Exponential backoff with jitter
						const baseDelay = 100 * Math.pow(2, 5 - retries);
						const jitter = Math.random() * 50;
						const delay = Math.min(baseDelay + jitter, 1000);

						console.warn(`[PixelService] Retryable error on attempt ${6 - retries}/5: ${error.message}. Retrying in ${delay}ms`);
						await new Promise(resolve => setTimeout(resolve, delay));
						continue;
					}

					// If it's not a retryable error or no retries left, throw the error
					console.error(`[PixelService] Non-retryable error or max retries exceeded:`, error);
					throw error;
				}
			}
		}

		// 异步后台重建瓦片图像，不阻塞画像素请求
		// updatePixelTile 全量查询瓦片中所有像素 + createCanvas + sharp 量化，
		// 同步执行会在画完大量像素后叠加内存峰值导致 OOM
		this.markTileDirty(tileX, tileY, season);

		// 大批量绘制后尝试回收内存
		if (painted > 1000) {
			setImmediate(() => this.maybeCleanupMemory());
		}
		
		if (painted > 0) {
			let retries = 5;
			while (retries > 0) {
				try {
					await this.updateRegionStatsFromMap(userId, user.allianceId, regionStatsMap);
					break;
				} catch (error) {
					retries--;
					if (retries > 0) {
						console.warn(`[PixelService] Error updating region stats, retrying... (${3 - retries}/3):`, error);
						await new Promise(resolve => setTimeout(resolve, 100 * (3 - retries)));
						continue;
					}
					console.error("[PixelService] Failed to update region stats after retries:", error);
				}
			}

			setImmediate(async () => {
				try {
					await this.invalidateRelevantLeaderboardsFromMap(regionStatsMap);
				} catch (error) {
					console.error("Error invalidating leaderboards:", error);
				}
			});
		}

		return { painted };
	}

	/**
	 * 内存回收：超过阈值时清理缓存并触发 GC
	 */
	private async maybeCleanupMemory(force = false): Promise<void> {
		const mem = process.memoryUsage();
		const HEAP_LIMIT = 600 * 1024 * 1024; // 600MB
		if (!force && mem.heapUsed < HEAP_LIMIT) return;

		// 清理过期 region 缓存
		const now = Date.now();
		for (const [key, value] of this.regionCache) {
			if (now - value.timestamp > this.CACHE_TTL) {
				this.regionCache.delete(key);
			}
		}

		// 清理过期瓦片缓存
		for (const [key, value] of this.tileCache) {
			if (now - value.cachedAt > this.TILE_CACHE_TTL) {
				this.tileCache.delete(key);
			}
		}

		if (global.gc && mem.heapUsed > HEAP_LIMIT) {
			global.gc();
		}
	}


	private async updateRegionStatsFromMap(
		userId: number,
		allianceId: number | null | undefined,
		regionStatsMap: Map<string, { regionCityId?: number | null; regionCountryId?: number | null; count: number }>
	): Promise<void> {
		const today = new Date();
		const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

		await this.prisma.$transaction(async (tx) => {
			for (const stats of regionStatsMap.values()) {
				const updatedRowsStats = await tx.$executeRaw`
					UPDATE UserRegionStats
					SET pixelsPainted = pixelsPainted + ${stats.count}, lastPaintedAt = NOW()
					WHERE userId = ${userId}
					AND regionCityId <=> ${stats.regionCityId}
					AND regionCountryId <=> ${stats.regionCountryId}
					AND allianceId <=> ${allianceId}
					AND timePeriod = ${todayDate}
				` as unknown as number;

				if (!updatedRowsStats || updatedRowsStats === 0) {
					await tx.$executeRaw`
						INSERT INTO UserRegionStats (userId, regionCityId, regionCountryId, allianceId, timePeriod, pixelsPainted, lastPaintedAt)
						VALUES (${userId}, ${stats.regionCityId}, ${stats.regionCountryId}, ${allianceId}, ${todayDate}, ${stats.count}, NOW())
						ON DUPLICATE KEY UPDATE
							pixelsPainted = pixelsPainted + ${stats.count},
							lastPaintedAt = NOW()
					`;
				}

				const updatedRowsDaily = await tx.$executeRaw`
					UPDATE UserRegionStatsDaily
					SET pixelsPainted = pixelsPainted + ${stats.count}, lastPaintedAt = NOW()
					WHERE userId = ${userId}
					AND regionCityId <=> ${stats.regionCityId}
					AND regionCountryId <=> ${stats.regionCountryId}
					AND allianceId <=> ${allianceId}
					AND date = ${todayDate}
				` as unknown as number;

				if (!updatedRowsDaily || updatedRowsDaily === 0) {
					await tx.$executeRaw`
						INSERT INTO UserRegionStatsDaily (userId, regionCityId, regionCountryId, allianceId, date, pixelsPainted, lastPaintedAt)
						VALUES (${userId}, ${stats.regionCityId}, ${stats.regionCountryId}, ${allianceId}, ${todayDate}, ${stats.count}, NOW())
						ON DUPLICATE KEY UPDATE
							pixelsPainted = pixelsPainted + ${stats.count},
							lastPaintedAt = NOW()
					`;
				}
			}
		}, {
			timeout: 10_000,
			isolationLevel: "ReadCommitted"
		});
	}

	private async invalidateRelevantLeaderboardsFromMap(
		regionStatsMap: Map<string, { regionCityId?: number | null; regionCountryId?: number | null; count: number }>
	): Promise<void> {
		const modes: ("today" | "week" | "month" | "all-time")[] = ["today", "week", "month", "all-time"];
		const uniqueCityIds = new Set<number>();
		for (const stats of regionStatsMap.values()) {
			if (stats.regionCityId) uniqueCityIds.add(stats.regionCityId);
		}
		const invalidations: Promise<void>[] = [];
		for (const cityId of uniqueCityIds) {
			for (const mode of modes) {
				invalidations.push(
					leaderboardService.invalidateLeaderboard("regionPlayers", mode, cityId),
					leaderboardService.invalidateLeaderboard("regionAlliances", mode, cityId)
				);
			}
		}
		await Promise.all(invalidations);
	}



	async updateUserRegionStatsForAllianceChange(userId: number, oldAllianceId: number | null, newAllianceId: number | null): Promise<void> {
		try {
			// Get user's existing region stats
			const existingStats = await this.prisma.userRegionStats.findMany({
				where: { userId }
			});

			// Update all existing stats with new alliance
			for (const stat of existingStats) {
				// Update existing record with new alliance
				await this.prisma.$executeRaw`
					UPDATE UserRegionStats
					SET allianceId = ${newAllianceId}
					WHERE userId = ${stat.userId}
					AND regionCityId <=> ${stat.regionCityId}
					AND regionCountryId <=> ${stat.regionCountryId}
					AND allianceId <=> ${oldAllianceId}
					AND timePeriod = ${stat.timePeriod}
				`;

				// And update table for the same day
				const dateString = `${stat.timePeriod.toISOString()
					.split("T")[0]} 00:00:00`;
				await this.prisma.$executeRaw`
					UPDATE UserRegionStatsDaily
					SET allianceId = ${newAllianceId}
					WHERE userId = ${stat.userId}
					AND regionCityId <=> ${stat.regionCityId}
					AND regionCountryId <=> ${stat.regionCountryId}
					AND allianceId <=> ${oldAllianceId}
					AND date = ${dateString}
				`;
			}
		} catch (error) {
			console.error("Error updating user region stats for alliance change:", error);
		}
	}

	/**
	 * 管理员自动绘制 - 将上传的 PNG 位图按坐标偏移绘制到对应的瓦片上
	 * 使用 sharp 解码（避免 canvas 内存开销），逐 tile 处理（峰值内存仅为一个 tile 的像素）
	 */
	async adminAutoPaint(input: AdminAutoPaintInput): Promise<AdminAutoPaintResult> {
		const { season, px0, py0, width, height, userId, bitmap } = input;

		// 使用 sharp 解码 PNG 为原始 RGBA Buffer，避免 createCanvas 的 ~4x 内存开销
		const { data } = await sharp(bitmap)
			.ensureAlpha()
			.raw()
			.toBuffer({ resolveWithObject: true });

		const TILE_SIZE = 1000;
		const paintedAt = new Date();
		const tilesAffected = new Set<string>();
		let totalPainted = 0;
		let processedPixels = 0;

		// 预计算位图跨越的 tile 范围
		const minTileX = Math.floor(px0 / TILE_SIZE);
		const maxTileX = Math.floor((px0 + width - 1) / TILE_SIZE);
		const minTileY = Math.floor(py0 / TILE_SIZE);
		const maxTileY = Math.floor((py0 + height - 1) / TILE_SIZE);

		// 逐 tile 处理，每个 tile 处理完后立即释放内存
		for (let tileX = minTileX; tileX <= maxTileX; tileX++) {
			for (let tileY = minTileY; tileY <= maxTileY; tileY++) {
				// 计算当前 tile 在位图内的像素范围
				const tilePx0 = Math.max(0, tileX * TILE_SIZE - px0);
				const tilePy0 = Math.max(0, tileY * TILE_SIZE - py0);
				const tilePx1 = Math.min(width, (tileX + 1) * TILE_SIZE - px0);
				const tilePy1 = Math.min(height, (tileY + 1) * TILE_SIZE - py0);

				if (tilePx0 >= tilePx1 || tilePy0 >= tilePy1) continue;

				const tileW = tilePx1 - tilePx0;
				const tileH = tilePy1 - tilePy0;
				const maxCount = tileW * tileH;

				// 使用 TypedArrays 代替对象数组，内存降低 ~90%
				const xs = new Int16Array(maxCount);
				const ys = new Int16Array(maxCount);
				const colorIds = new Uint8Array(maxCount);
				let count = 0;

				for (let ly = tilePy0; ly < tilePy1; ly++) {
					for (let lx = tilePx0; lx < tilePx1; lx++) {
						const idx = (ly * width + lx) * 4;
						if (data[idx + 3]! < 128) continue; // 跳过透明

						const colorKey = `${data[idx]!},${data[idx + 1]!},${data[idx + 2]!}`;
						const colorId = rgbToColorIdMap.get(colorKey);
						if (colorId === undefined) continue;

						xs[count] = px0 + lx - tileX * TILE_SIZE;
						ys[count] = py0 + ly - tileY * TILE_SIZE;
						colorIds[count] = colorId;
						count++;
						processedPixels++;
					}
				}

				if (count === 0) continue;

				tilesAffected.add(`${tileX},${tileY}`);

				// 确保 Tile 行存在
				await this.prisma.$executeRaw(Prisma.sql`INSERT IGNORE INTO Tile (season, x, y) VALUES (${season}, ${tileX}, ${tileY})`);

				// 分批写入像素
				const DB_BATCH = 500;
				for (let i = 0; i < count; i += DB_BATCH) {
					const end = Math.min(i + DB_BATCH, count);
					const pixelValues: Prisma.Sql[] = [];
					const historyValues: Prisma.Sql[] = [];
					for (let j = i; j < end; j++) {
						pixelValues.push(Prisma.sql`(${season}, ${tileX}, ${tileY}, ${xs[j]}, ${ys[j]}, ${colorIds[j]}, ${userId}, ${paintedAt})`);
						historyValues.push(Prisma.sql`(${season}, ${tileX}, ${tileY}, ${xs[j]}, ${ys[j]}, ${colorIds[j]}, ${userId}, ${paintedAt})`);
					}
					await this.prisma.$executeRaw`
						INSERT INTO Pixel (season, tileX, tileY, x, y, colorId, paintedBy, paintedAt)
						VALUES ${Prisma.join(pixelValues)}
						ON DUPLICATE KEY UPDATE
							colorId = VALUES(colorId),
							paintedBy = VALUES(paintedBy),
							paintedAt = VALUES(paintedAt)
					`;
					// 记录像素变更历史
					await this.prisma.$executeRaw`
						INSERT INTO PixelHistory (season, tileX, tileY, x, y, colorId, paintedBy, paintedAt)
						VALUES ${Prisma.join(historyValues)}
					`;
				}

				// 异步强制全量重建：清除已缓存的瓦片图像，下次后台重建时走全量路径
				await this.prisma.$executeRaw`
					UPDATE Tile SET imageData = NULL
					WHERE season = ${season} AND x = ${tileX} AND y = ${tileY}
				`;
				// 同时清除内存缓存，使 getTileImage 下一次请求能查到 NULL 并触发同步全量重建
				this.tileCache.delete(`${season},${tileX},${tileY}`);
				this.markTileDirty(tileX, tileY, season);
				totalPainted += count;

				// TypedArrays 出作用域后即可 GC
			}
		}

		return {
			painted: totalPainted,
			processedPixels,
			stats: {
				userId,
				season,
				tilesAffected,
				timestamp: paintedAt
			}
		};
	}
}

/** 模块级单例：RGB 三元组 -> colorId 映射，避免每次调用重复构建 */
const rgbToColorIdMap = buildRgbToColorIdMap();

function buildRgbToColorIdMap(): Map<string, number> {
	const map = new Map<string, number>();
	for (const [idStr, color] of Object.entries(COLOR_PALETTE)) {
		const id = Number(idStr);
		// 透明像素已被 alpha 检查过滤 (data[idx+3] < 128)，所以这里包含所有颜色
		map.set(`${color.rgb[0]},${color.rgb[1]},${color.rgb[2]}`, id);
	}
	return map;
}


