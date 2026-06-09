import { App } from "@tinyhttp/app";
import { authMiddleware } from "../middleware/auth.js";
import { createCanvas } from "@napi-rs/canvas";
import multer from "multer";

import { validateSeason, validateTileCoordinates } from "../validators/common.js";

import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { Prisma } from "@prisma/client";
import { prisma } from "../config/database.js";
import { UserService } from "../services/user.js";
import { PixelService } from "../services/pixel.js";

import { CoordinateTransformer } from "../utils/coordinate.js";
import { AuthenticatedRequest } from "../types/index.js";

import { COLOR_PALETTE } from "../utils/colors.js";



const userService = new UserService(prisma);
const pixelService = new PixelService(prisma);

/** 检查用户是否拥有指定权限 */
async function hasPermission(userId: number, permission: string): Promise<boolean> {
	const row = await prisma.userPermission.findUnique({
		where: { userId_permission: { userId, permission } }
	});
	return row !== null;
}

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 10 * 1024 * 1024 // 10 MB limit for auto-painter bitmaps
	},
	fileFilter: (_req, file, cb) => {
		if (file.mimetype === "image/png") {
			cb(null, true);
		} else {
			cb(new Error("Only PNG images are allowed"));
		}
	}
});

const useMulterSingle = (field: string) => (req: any, res: any, next?: any) => (upload.single(field) as any)(req as any, res as any, next as any);



export default function (app: App) {

	/**
	 * GET /staff/tools/select-area/:season/:tileX/:tileY
	 * 获取指定瓦片中矩形区域内的像素所有者ID
	 *
	 * 查询参数:
	 *   - x0, y0: 矩形起点（像素坐标）
	 *   - x1, y1: 矩形终点（像素坐标）
	 *
	 * 返回: 二进制缓冲区，包含按顺序排列的32位无符号整数用户IDs
	 */
	app.get("/staff/tools/select-area/:season/:tileX/:tileY", authMiddleware, async (req, res) => {
		try {



			// 验证路由参数
			const seasonParam = req.params["season"] as string;
			const tileX = Number.parseInt(req.params["tileX"] as string);
			const tileY = Number.parseInt(req.params["tileY"] as string);

			if (!validateSeason(seasonParam)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid season parameter", HTTP_STATUS.BAD_REQUEST));
			}

			if (!validateTileCoordinates(tileX, tileY)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid tile coordinates", HTTP_STATUS.BAD_REQUEST));
			}

			// 解析 season 为数字（可能包含 's' 前缀）
			let season = 0;
			if (seasonParam.startsWith('s')) {
				season = parseInt(seasonParam.substring(1));
			} else {
				season = parseInt(seasonParam);
			}
			if (isNaN(season)) {
				season = 0;
			}

			// 解析查询参数
			const x0Str = req.query["x0"] as string | undefined;
			const y0Str = req.query["y0"] as string | undefined;
			const x1Str = req.query["x1"] as string | undefined;
			const y1Str = req.query["y1"] as string | undefined;

			if (!x0Str || !y0Str || !x1Str || !y1Str) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing query parameters: x0, y0, x1, y1 are required", HTTP_STATUS.BAD_REQUEST));
			}

			const x0 = Number.parseInt(x0Str);
			const y0 = Number.parseInt(y0Str);
			const x1 = Number.parseInt(x1Str);
			const y1 = Number.parseInt(y1Str);

			// 验证查询参数
			if (isNaN(x0) || isNaN(y0) || isNaN(x1) || isNaN(y1)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid query parameters: x0, y0, x1, y1 must be valid integers", HTTP_STATUS.BAD_REQUEST));
			}

			// 确保正确的坐标顺序
			const minX = Math.min(x0, x1);
			const maxX = Math.max(x0, x1);
			const minY = Math.min(y0, y1);
			const maxY = Math.max(y0, y1);

			// 检查区域大小限制，避免内存溢出和性能问题
			const width = maxX - minX + 1;
			const height = maxY - minY + 1;
			const maxPixels = 1000000; // 最大允许像素数，约1000x1000
			if (width <= 0 || height <= 0 || width * height > maxPixels) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(`Invalid area size. Maximum allowed: ${maxPixels} pixels (${Math.floor(Math.sqrt(maxPixels))}x${Math.floor(Math.sqrt(maxPixels))})`, HTTP_STATUS.BAD_REQUEST));
			}

			// 从数据库查询该区域的所有像素
			const pixels = await prisma.pixel.findMany({
				where: {
					season,
					tileX,
					tileY,
					x: { gte: minX, lte: maxX },
					y: { gte: minY, lte: maxY }
				},
				select: {
					x: true,
					y: true,
					paintedBy: true,
					colorId: true
				},
				orderBy: [
					{ y: "asc" },
					{ x: "asc" }
				]
			});

			// 前端期望: 每个像素 5 bytes = Uint32LE(userId) + Uint8(colorId)
			// 无数据像素用 userId=0, colorId=0 填充
			const buf = Buffer.alloc(width * height * 5);
			for (const pixel of pixels) {
				const index = ((pixel.y - minY) * width + (pixel.x - minX)) * 5;
				buf.writeUInt32LE(pixel.paintedBy, index);
				buf[index + 4] = pixel.colorId;
			}

			return res.send(buf);

		} catch (error) {
			console.error("Error generating tile image:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});



	/**
	 * POST /staff/tools/select-area/users
	 * 根据用户IDs获取用户详细信息
	 *
	 * 请求体:
	 *   - userIds: number[] - 用户ID列表
	 *   - season?: number - 可选，限制查询的季度
	 *   - tileX?: number - 可选，限制查询的瓦片X
	 *   - tileY?: number - 可选，限制查询的瓦片Y
	 *   - x0?: number - 可选，限制像素X范围起点
	 *   - y0?: number - 可选，限制像素Y范围起点
	 *   - x1?: number - 可选，限制像素X范围终点
	 *   - y1?: number - 可选，限制像素Y范围终点
	 *
	 * 返回: 用户信息对象数组，包含绘画的像素坐标汇总
	 */
	app.post("/staff/tools/select-area/users", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {


			// 验证用户权限
			const userRow = await userService.getUserProfile(req.user!.id)
				.catch(() => null);
			if (!userRow || (userRow.role !== "admin" && userRow.role !== "moderator")) {
				return res.status(HTTP_STATUS.FORBIDDEN)
					.json(createErrorResponse("Access denied. Staff privileges required.", HTTP_STATUS.FORBIDDEN));
			}

			const { userIds, season: bodySeason, tileX: bodyTileX, tileY: bodyTileY, x0, y0, x1, y1 } = req.body as {
				userIds: number[];
				season?: number;
				tileX?: number;
				tileY?: number;
				x0?: number;
				y0?: number;
				x1?: number;
				y1?: number;
			};

			if (!Array.isArray(userIds) || userIds.some(id => typeof id !== "number")) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid userIds format", HTTP_STATUS.BAD_REQUEST));
			}

			// 去重并过滤ID 0（无所有者的像素）
			const uniqueUserIds = [...new Set(userIds)].filter(id => id !== 0);

			if (uniqueUserIds.length === 0) {
				return res.json({ users: [] });
			}

			// 从数据库获取用户信息
			const users = await prisma.user.findMany({
				where: {
					id: { in: uniqueUserIds }
				},
				select: {
					id: true,
					name: true,
					nickname: true,
					banned: true,
					allianceId: true,
					role: true,
					picture: true,
					discordUserId: true,
					verified: true
				}
			});

			// 创建用户映射
			const userMap = new Map(users.map(u => [u.id, u]));

			// 构建 pixel 查询的区域约束（如果提供了边界参数）
			// 防止查询整表导致的 OOM 崩溃
			const pixelWhere: any = {
				paintedBy: { in: uniqueUserIds }
			};
			if (bodySeason !== undefined) pixelWhere.season = bodySeason;
			if (bodyTileX !== undefined) pixelWhere.tileX = bodyTileX;
			if (bodyTileY !== undefined) pixelWhere.tileY = bodyTileY;
			if (x0 !== undefined && x1 !== undefined) {
				const pxMin = Math.min(x0, x1);
				const pxMax = Math.max(x0, x1);
				pixelWhere.x = { gte: pxMin, lte: pxMax };
			}
			if (y0 !== undefined && y1 !== undefined) {
				const pyMin = Math.min(y0, y1);
				const pyMax = Math.max(y0, y1);
				pixelWhere.y = { gte: pyMin, lte: pyMax };
			}

            // 从pixel表中查询这些用户在指定区域内的像素坐标
            const pixels = await prisma.pixel.findMany({
                where: pixelWhere,
                select: {
                    paintedBy: true,
                    tileX: true,
                    tileY: true,
                    x: true,
                    y: true,
                    paintedAt: true
                },
                orderBy: [
                    { paintedBy: 'asc' },
                    { paintedAt: 'desc' }
                ],
                take: 5000 // 安全上限，防止意外全表扫描
            });

            // 按用户ID分组像素
            const pixelsByUser = new Map<number, typeof pixels>();
            for (const pixel of pixels) {
                const userId = pixel.paintedBy;
                if (!pixelsByUser.has(userId)) {
                    pixelsByUser.set(userId, []);
                }
                pixelsByUser.get(userId)!.push(pixel);
            }

            // 为每个用户聚合其绘画的像素坐标
			const TILE_SIZE = 1000;
			const ZOOM_LEVEL = 11;
			const coordinateTransformer = new CoordinateTransformer(TILE_SIZE);
			const result = uniqueUserIds.map(userId => {
				const user = userMap.get(userId);
				const userPixels = pixelsByUser.get(userId) || [];
				
				// 初始化 painted 对象
				const painted = {
					latitudes: [] as number[], 
					longitudes: [] as number[],
					tileXs: [] as number[],
					tileYs: [] as number[],
					pixelXs: [] as number[],
					pixelYs: [] as number[],
					globalPx: [] as number[],
					globalPy: [] as number[],
					minLat: Infinity,
					maxLat: -Infinity,
					minLon: Infinity,
					maxLon: -Infinity
				};
				
				// 填充像素数据
				for (const pixel of userPixels) {
					const globalPx = pixel.tileX * TILE_SIZE + pixel.x;
					const globalPy = pixel.tileY * TILE_SIZE + pixel.y;
					
					// 计算纬度/经度（使用C9类算法）
					const [latitude, longitude] = coordinateTransformer.tilePixelToLatLon(
						pixel.tileX, pixel.tileY, pixel.x, pixel.y, ZOOM_LEVEL
					);
					
					painted.tileXs.push(pixel.tileX);
					painted.tileYs.push(pixel.tileY);
					painted.pixelXs.push(pixel.x);
					painted.pixelYs.push(pixel.y);
					painted.globalPx.push(globalPx);
					painted.globalPy.push(globalPy);
					// painted.latitudes.push(latitude);
					// painted.longitudes.push(longitude);
					
					// 更新最小/最大值
					painted.minLat = Math.min(painted.minLat, latitude);
					painted.maxLat = Math.max(painted.maxLat, latitude);
					painted.minLon = Math.min(painted.minLon, longitude);
					painted.maxLon = Math.max(painted.maxLon, longitude);
				}
				
				return {
					id: userId,
					name: user?.nickname || user?.name || "Unknown",
					deleted: user?.banned ?? false,
					picture: user?.picture || "",
					discordUserId: user?.discordUserId || 0,
					verified: user?.verified ?? false,
					role: user?.role || "user",
					allianceId: user?.allianceId || 0,
					painted
				};
			});

			return res.json({ users: result });
		} catch (error) {
			console.error("Error processing user IDs:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});



	/**
	 * POST /staff/tools/select-area/clear/:season/pixel/:tileX/:tileY
	 * 清除指定区域的像素(将对应的像素填充为透明),同步更新瓦片数据
	 * 
	 * 请求体:
	 * {
	 *   "colors": [0, 0, 0, ...],  // 颜色数组(清除操作中通常为0)
	 *   "coords": [x, y, x, y, ...],  // 像素坐标(展平的x,y对)
	 *   "fp": "fingerprint"  // 工作证明指纹
	 * }
	 */
	app.post("/staff/tools/select-area/clear/:season/pixel/:tileX/:tileY", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			// 验证路由参数
			const tileX = Number.parseInt(req.params["tileX"] as string);
			const tileY = Number.parseInt(req.params["tileY"] as string);



			if (!validateTileCoordinates(tileX, tileY)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid tile coordinates", HTTP_STATUS.BAD_REQUEST));
			}

			// 验证请求体（前端用 csid 作为 fingerprint 字段名）
			const body = req.body as Record<string, unknown>;
			const colors = body["colors"] as number[] | undefined;
			const coords = body["coords"] as number[] | undefined;
			const csid = body["csid"] as string | undefined;

			if (!Array.isArray(colors) || !Array.isArray(coords) || typeof csid !== "string") {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid request body", HTTP_STATUS.BAD_REQUEST));
			}

			// validate coords is even number (pairs of x, y)
			if (coords.length % 2 !== 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid coordinates: must be pairs of x,y", HTTP_STATUS.BAD_REQUEST));
			}

			// colors and coords should be related: each pair of coords should have a color
			if (colors.length !== coords.length / 2) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Mismatch between colors and coordinates", HTTP_STATUS.BAD_REQUEST));
			}

			// Extract x, y pairs from the flattened coords array
			const pixelCoords: Array<{ x: number; y: number }> = [];
			for (let i = 0; i < coords.length; i += 2) {
				pixelCoords.push({
					x: coords[i]!,
					y: coords[i + 1]!
				});
			}

			// Delete pixels from database
			//分批处理，每批1000个像素坐标，以避免数据库查询过大
			const BATCH_SIZE = 1000;
			for (let i = 0; i < pixelCoords.length; i += BATCH_SIZE) {
				const batch = pixelCoords.slice(i, i + BATCH_SIZE);
				await prisma.pixel.deleteMany({
					where: {
						season: 0,
						tileX,
						tileY,
					OR: batch.map(pc => ({
						x: pc.x,
						y: pc.y
					}))
				}});
				
			}

			
			// 强制全量重建瓦片（清 DB 缓存 + 清内存缓存 + 全量重建）
			await pixelService.forceRebuildTile(tileX, tileY, 0);

			return res.status(HTTP_STATUS.OK).json({
				success: true
			});

		} catch (error) {
			console.error("Error clearing select area pixels:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});



	/**获取绘画事件 */
	app.get("/staff/tools/wayback/:season/", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			// // 验证用户权限
			// const userRow = await userService.getUserProfile(req.user!.id)
			// 	.catch(() => null);
			// if (!userRow || (userRow.role !== "admin")) {
			// 	return res.status(HTTP_STATUS.FORBIDDEN)
			// 		.json(createErrorResponse("Access denied. Staff privileges required.", HTTP_STATUS.FORBIDDEN));
			// }

			const from_ts = req.query["from_ts"] as string | undefined;
			const to_ts = req.query["to_ts"] as string | undefined;
			const tile_x = req.query["tile_x"] as string | undefined;
			const tile_y = req.query["tile_y"] as string | undefined;
			const user_id = req.query["user_id"] as string | undefined;
			const alliance_id = req.query["alliance_id"] as string | undefined;
			const limit = req.query["limit"] as string | undefined;
			console.log("Received wayback events request with params:", { from_ts, to_ts, tile_x, tile_y, user_id, alliance_id, limit });

			// 参数验证
			if (!from_ts || !to_ts) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required parameters: from_ts, to_ts", HTTP_STATUS.BAD_REQUEST));
			}

			const fromTs = parseInt(from_ts);
			const toTs = parseInt(to_ts);
			if (isNaN(fromTs) || isNaN(toTs) || fromTs >= toTs) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid timestamp parameters", HTTP_STATUS.BAD_REQUEST));
			}

			// 构建查询条件
			const where: any = {
				paintedAt: {
					gte: new Date(fromTs),
					lte: new Date(toTs)
				}
			};

			// 添加瓦片过滤条件（如果提供）
			if (tile_x !== undefined && tile_y !== undefined) {
				const tileX = parseInt(tile_x);
				const tileY = parseInt(tile_y);
				if (!isNaN(tileX) && !isNaN(tileY)) {
					where.tileX = tileX;
					where.tileY = tileY;
				}
			}

			// 添加用户过滤条件（如果提供）
			if (user_id !== undefined) {
				const userId = parseInt(user_id);
				if (!isNaN(userId)) {
					where.paintedBy = userId;
				}
			}

			// 添加联盟过滤条件（如果提供）
			if (alliance_id !== undefined) {
				const allianceId = parseInt(alliance_id);
				if (!isNaN(allianceId)) {
					where.user = {
						allianceId: allianceId
					};
				}
			}

			// 查询像素事件
			const pixels = await prisma.pixel.findMany({
				where,
				select: {
					paintedBy: true,
					tileX: true,
					tileY: true,
					x: true,
					y: true,
					colorId: true,
					paintedAt: true
				},
				orderBy: {
					paintedAt: 'asc'
				},
				take: limit ? Math.min(parseInt(limit), 100000) : 100000 // 默认限制100000条
			});

			// 按时间戳和用户ID分组事件（聚合同一时间的提交）
			const eventMap = new Map<string, {
				ts: number;
				userId: number;
				allianceId: number;
				pixelsCount: number;
				pixelsX: number[];
				pixelsY: number[];
				colors: number[];
			}>();

			for (const pixel of pixels) {
				const ts = pixel.paintedAt.getTime();
				const userId = pixel.paintedBy;
				const key = `${ts}_${userId}`; // 按时间戳和用户分组
				
				if (!eventMap.has(key)) {
					eventMap.set(key, {
						ts,
						userId,
						allianceId: 0, // 稍后填充
						pixelsCount: 0,
						pixelsX: [],
						pixelsY: [],
						colors: []
					});
				}
				
				const event = eventMap.get(key)!;
				event.pixelsCount++;
				event.pixelsX.push(pixel.x);
				event.pixelsY.push(pixel.y);
				event.colors.push(pixel.colorId);
			}

			// 将事件映射转换为数组
			const events = Array.from(eventMap.values());

			// 获取用户联盟信息
			const userIds = [...new Set(pixels.map(p => p.paintedBy))];
			const users = await prisma.user.findMany({
				where: {
					id: { in: userIds }
				},
				select: {
					id: true,
					allianceId: true
				}
			});

			const userAllianceMap = new Map(users.map(u => [u.id, u.allianceId || 0]));

			// 更新事件中的联盟ID
			for (const event of events) {
				event.allianceId = userAllianceMap.get(event.userId) || 0;
			}

			return res.json({ events });

		} catch (error) {
			console.error("Error fetching wayback events:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});

	/**获取瓦片图案 */
	app.get("/staff/tools/wayback/:season/reconstruct", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			// 验证用户权限
			const userRow = await userService.getUserProfile(req.user!.id)
				.catch(() => null);
			if (!userRow || (userRow.role !== "admin")) {
				return res.status(HTTP_STATUS.FORBIDDEN)
					.json(createErrorResponse("Access denied. Staff privileges required.", HTTP_STATUS.FORBIDDEN));
			}

			const seasonParam = req.params["season"] as string;
			const from_ts = req.query["from_ts"] as string | undefined;
			const to_ts = req.query["to_ts"] as string | undefined;
			const tile_x = req.query["tile_x"] as string | undefined;
			const tile_y = req.query["tile_y"] as string | undefined;

			console.log("Received wayback reconstruct request with params:", { season: seasonParam, from_ts, to_ts, tile_x, tile_y });

			// 参数验证
			if (!from_ts || !to_ts || !tile_x || !tile_y) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required parameters: from_ts, to_ts, tile_x, tile_y", HTTP_STATUS.BAD_REQUEST));
			}

			// 解析season参数（可能包含's'前缀）
			let season = 0;
			if (seasonParam.startsWith('s')) {
				season = parseInt(seasonParam.substring(1));
			} else {
				season = parseInt(seasonParam);
			}
			if (isNaN(season)) {
				season = 0;
			}

			const fromTs = parseInt(from_ts);
			const toTs = parseInt(to_ts);
			const tileX = parseInt(tile_x);
			const tileY = parseInt(tile_y);

			if (isNaN(fromTs) || isNaN(toTs) || isNaN(tileX) || isNaN(tileY) || fromTs >= toTs) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid parameters", HTTP_STATUS.BAD_REQUEST));
			}

			// 查询在时间范围内该瓦片的所有像素变化
			const pixels = await prisma.pixel.findMany({
				where: {
					season: season,
					tileX,
					tileY,
					paintedAt: {
						gte: new Date(fromTs),
						lte: new Date(toTs)
					}
				},
				select: {
					x: true,
					y: true,
					colorId: true,
					paintedAt: true
				},
				orderBy: {
					paintedAt: 'asc'
				}
			});

			// 创建像素颜色映射，保留每个位置的最新颜色
			const pixelMap = new Map<string, number>(); // key: "x,y", value: colorId
			for (const pixel of pixels) {
				const key = `${pixel.x},${pixel.y}`;
				pixelMap.set(key, pixel.colorId);
			}

			// 如果没有像素数据，返回空白图像
			if (pixelMap.size === 0) {
				const blankCanvas = createCanvas(1000, 1000);
				const blankCtx = blankCanvas.getContext('2d');
				blankCtx.fillStyle = '#1a1a2e';
				blankCtx.fillRect(0, 0, 1000, 1000);
				const buffer = blankCanvas.toBuffer('image/png');
				res.setHeader('Content-Type', 'image/png');
				return res.send(buffer);
			}

			// 创建canvas并绘制像素
			const canvas = createCanvas(1000, 1000);
			const ctx = canvas.getContext('2d');
			const imageData = ctx.createImageData(1000, 1000);

			// 填充背景色（深蓝色）
			for (let i = 0; i < imageData.data.length; i += 4) {
				imageData.data[i] = 26;     // R
				imageData.data[i + 1] = 26; // G
				imageData.data[i + 2] = 46; // B
				imageData.data[i + 3] = 255; // A
			}

			// 绘制像素
			for (const [key, colorId] of pixelMap) {
				const [xStr = "0", yStr = "0"] = key.split(',');
				const x = parseInt(xStr);
				const y = parseInt(yStr);
				
				const color = COLOR_PALETTE[colorId];
				if (!color || colorId === 0) continue;

				const [r, g, b] = color.rgb;
				const index = (y * 1000 + x) * 4;
				imageData.data[index + 0] = r;
				imageData.data[index + 1] = g;
				imageData.data[index + 2] = b;
				imageData.data[index + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
			const buffer = canvas.toBuffer('image/png');
			
			res.setHeader('Content-Type', 'image/png');
			res.setHeader('Cache-Control', 'no-store');
			return res.send(buffer);

		} catch (error) {
			console.error("Error generating tile image:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});




	/**
	 * POST /staff/tools/auto-painter/paint
	 * 管理员自动绘制 - 上传 PNG 位图，按坐标偏移批量绘制像素
	 *
	 * 请求体 (multipart/form-data):
	 *   - fingerprint: string - 工作证明指纹
	 *   - season: number - 季度
	 *   - px0: number - 起始 X 坐标（全局）
	 *   - py0: number - 起始 Y 坐标（全局）
	 *   - width: number - 位图宽度
	 *   - height: number - 位图高度
	 *   - pixels: number - 像素数量
	 *   - bitmap: File - PNG 位图文件
	 *   - userId: number - 要归属的用户 ID
	 */
	app.post("/staff/tools/auto-painter/paint", authMiddleware, useMulterSingle("bitmap"), async (req: AuthenticatedRequest, res) => {
		try {
			// ── 权限校验 ──
			const uid = req.user!.id;

			// 基础权限：必须拥有 paint
			if (!await hasPermission(uid, "staff.tools.auto_painter.paint")) {
				return res.status(HTTP_STATUS.FORBIDDEN)
					.json(createErrorResponse("Missing permission: staff.tools.auto_painter.paint", HTTP_STATUS.FORBIDDEN));
			}

			if (!req.file) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing bitmap file", HTTP_STATUS.BAD_REQUEST));
			}

			const fingerprint = req.body["fingerprint"] as string;
			const seasonStr = req.body["season"] as string;
			const px0Str = req.body["px0"] as string;
			const py0Str = req.body["py0"] as string;
			const widthStr = req.body["width"] as string;
			const heightStr = req.body["height"] as string;
			const pixelsStr = req.body["pixels"] as string;
			const userIdStr = req.body["userId"] as string;

			if (!fingerprint || !seasonStr || !px0Str || !py0Str || !widthStr || !heightStr || !pixelsStr || !userIdStr) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required fields", HTTP_STATUS.BAD_REQUEST));
			}

			const season = Number.parseInt(seasonStr);
			const px0 = Number.parseInt(px0Str);
			const py0 = Number.parseInt(py0Str);
			const width = Number.parseInt(widthStr);
			const height = Number.parseInt(heightStr);
			const _pixels = Number.parseInt(pixelsStr);
			const targetUserId = Number.parseInt(userIdStr);

			if (isNaN(season) || isNaN(px0) || isNaN(py0) || isNaN(width) || isNaN(height) || isNaN(targetUserId)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid numeric parameters", HTTP_STATUS.BAD_REQUEST));
			}

			// as_user：以其他用户身份绘制
			if (targetUserId !== uid && !await hasPermission(uid, "staff.tools.auto_painter.as_user")) {
				return res.status(HTTP_STATUS.FORBIDDEN)
					.json(createErrorResponse("Missing permission: staff.tools.auto_painter.as_user", HTTP_STATUS.FORBIDDEN));
			}

			// no_size_limit：取消尺寸限制
			const SIZE_LIMIT = 5000;
			const needsSizeLimit = width > SIZE_LIMIT || height > SIZE_LIMIT;
			if (needsSizeLimit && !await hasPermission(uid, "staff.tools.auto_painter.no_size_limit")) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(`Bitmap dimensions exceed limit (max ${SIZE_LIMIT}x${SIZE_LIMIT}). Requires staff.tools.auto_painter.no_size_limit`, HTTP_STATUS.BAD_REQUEST));
			}

			// 调用 pixelService 执行自动绘制
			const result = await pixelService.adminAutoPaint({
				fingerprint,
				season,
				px0,
				py0,
				width,
				height,
				pixels: _pixels,
				userId: targetUserId,
				bitmap: req.file.buffer!
			});

			return res.json({
				success: true,
				painted: result.painted,
				processedPixels: result.processedPixels,
				tilesAffected: [...result.stats.tilesAffected],
				timestamp: result.stats.timestamp.toISOString()
			});

		} catch (error) {
			console.error("Error in auto-painter:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});

	// ── Reverse / 还原系统 ──
	//
	// ── Reverse (Select-Area) ──
	//
	// 工具流程：
	//   1. 版主选择区域 → 前端生成二进制选区描述符（tile 坐标 + pixel mask）
	//   2. POST reverse/session → 解码选区描述符，存储到内存 → 返回 sessionId
	//   3. POST reverse/timestamps → 从 PixelHistory 查该区域历史 paintedAt 时间轴
	//   4. POST reverse/preview → 查 PixelHistory 在指定时刻的像素快照
	//   5. POST reverse/apply → 将指定时刻的状态写回 Pixel 表（恢复）
	//
	// 依赖：PixelHistory 表在 paintPixels/adminAutoPaint 中同步写入
	//
	// 二进制选区描述符格式（匹配前端 sl() 函数）：
	//   [0]: version (uint8) = 1
	//   [1-2]: season (uint16 LE)
	//   [3-6]: tiles1 count (uint32 LE) — 选区 tile 数
	//   每个 tile: tileX(4B) tileY(4B) minPixelX(2B) minPixelY(2B)
	//              width(2B) height(2B) pixelCount(4B) mask(pixelCount B)
	//   [之后]: tiles2 count (uint32 LE) — 视口 tile 数（结构与上面相同）
	//
	interface ReverseTileInfo {
		tileX: number;
		tileY: number;
		minPixelX: number;
		minPixelY: number;
		width: number;
		height: number;
		pixelCount: number;
		mask: Buffer;
	}

	interface ReverseSession {
		createdAt: Date;
		season: number;
		tiles: ReverseTileInfo[];
		rawData: Buffer;
	}

	const reverseSessions = new Map<string, ReverseSession>();

	/** 解码二进制选区描述符 */
function decodeReverseArea(data: Buffer): { season: number; tiles: ReverseTileInfo[] } | null {
	try {
		const len = data.length;
		if (len < 7) return null;

		let off = 0;
		const version = data[off]!; off++;
		if (version !== 1) return null;

		const season = data.readUInt16LE(off); off += 2;
		const tiles1Count = data.readUInt32LE(off); off += 4;

		if (tiles1Count === 0) return null;

		const tiles: ReverseTileInfo[] = [];
		for (let i = 0; i < tiles1Count; i++) {
			if (off + 20 > len) return null;
			const tileX = data.readInt32LE(off); off += 4;
			const tileY = data.readInt32LE(off); off += 4;
			const minPixelX = data.readUInt16LE(off); off += 2;
			const minPixelY = data.readUInt16LE(off); off += 2;
			const width = data.readUInt16LE(off); off += 2;
			const height = data.readUInt16LE(off); off += 2;
			const pixelCount = data.readUInt32LE(off); off += 4;
			// mask 是按位压缩的位图：ceil(width * height / 8) 字节
			const maskByteLen = Math.ceil((width * height) / 8);
			if (off + maskByteLen > len) return null;
			const mask = Buffer.from(data.subarray(off, off + maskByteLen));
			off += maskByteLen;
			tiles.push({ tileX, tileY, minPixelX, minPixelY, width, height, pixelCount, mask });
		}
		return { season, tiles };
	} catch (e) {
		console.error("[decodeReverseArea] error:", e);
		return null;
	}
}

	app.post("/staff/tools/select-area/reverse/session", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			if (!await hasPermission(req.user!.id, "staff.tools.select_area.reverse")) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			// 用 data/end 事件收集 body（比 for await...of 更可靠）
			const rawData = await new Promise<Buffer>((resolve, reject) => {
				const chunks: Buffer[] = [];
				req.on("data", (chunk: Buffer) => chunks.push(chunk));
				req.on("end", () => resolve(Buffer.concat(chunks)));
				req.on("error", reject);
			});

			if (rawData.length === 0) {
				return res.status(400).json({ error: "Empty data" });
			}
			if (rawData.length > 10 * 1024 * 1024) {
				return res.status(400).json({ error: "Data too large (max 10MB)" });
			}

			console.log(`[reverse/session] received ${rawData.length} bytes, first 4 hex: ${rawData.subarray(0, 4).toString("hex")}`);

			const decoded = decodeReverseArea(rawData);
			console.log(`[reverse/session] decoded tiles=${decoded?.tiles.length ?? 0}, season=${decoded?.season}`);
			if (!decoded || decoded.tiles.length === 0) {
				return res.status(400).json({ error: "Invalid area data format" });
			}

			// 计算选区总尺寸
			const tileSize = 1000;
			let minGX = Infinity, minGY = Infinity, maxGX = -Infinity, maxGY = -Infinity;
			for (const tile of decoded.tiles) {
				const x0 = tile.tileX * tileSize + tile.minPixelX;
				const y0 = tile.tileY * tileSize + tile.minPixelY;
				const x1 = x0 + tile.width - 1;
				const y1 = y0 + tile.height - 1;
				if (x0 < minGX) minGX = x0;
				if (y0 < minGY) minGY = y0;
				if (x1 > maxGX) maxGX = x1;
				if (y1 > maxGY) maxGY = y1;
			}
			const areaWidth = maxGX - minGX + 1;
			const areaHeight = maxGY - minGY + 1;

			const sessionId = `rev_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
			reverseSessions.set(sessionId, {
				createdAt: new Date(),
				season: decoded.season,
				tiles: decoded.tiles,
				rawData,
			});

			return res.json({ sessionId, width: areaWidth, height: areaHeight });
		} catch (error) {
			console.error("Error creating reverse session:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// POST /staff/tools/select-area/reverse/timestamps
	// body: { sessionId, mode, beforeDepth?, beforeTimestamp? }
	// 从 PixelHistory 查询该区域所有 paintedAt 时间轴
	// 注意：PixelHistory.x/y 是瓦片内局部坐标（0-999）
	app.post("/staff/tools/select-area/reverse/timestamps", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			if (!await hasPermission(req.user!.id, "staff.tools.select_area.reverse")) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const { sessionId, mode = "depth", beforeDepth, beforeTimestamp } = req.body ?? {};
			const session = reverseSessions.get(sessionId);
			if (!session) {
				return res.status(404).json({ error: "Session not found" });
			}
			if (session.tiles.length === 0) {
				return res.json({ timestamps: [], hasMore: false });
			}

			// 构建 WHERE — x/y 是瓦片内局部坐标，直接用 minPixelX/Y 和 width/height
			const areaConds: string[] = [];
			const params: number[] = [session.season];
			for (const tile of session.tiles) {
				const x0 = tile.minPixelX, y0 = tile.minPixelY;
				const x1 = x0 + tile.width - 1, y1 = y0 + tile.height - 1;
				areaConds.push(`(tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?)`);
				params.push(tile.tileX, tile.tileY, x0, x1, y0, y1);
			}
			const whereClause = `season = ? AND (${areaConds.join(" OR ")})`;

			// ── 分页 ──
			// "depth" 模式: beforeDepth = 上一页最后一条的 depth 值
			//   累计偏移 = beforeDepth + 1（跳过最后一条避免重复）
			// "historical" 模式: beforeTimestamp = 上一页最后一条的 ts
			//   用 paintedAt < ? 自然排除已返回的行
			let limitOffset = "";
			let realDepthOffset = 0;
			if (mode === "depth" && typeof beforeDepth === "number" && beforeDepth >= 0) {
				realDepthOffset = beforeDepth + 1;
				limitOffset = `OFFSET ${realDepthOffset}`;
			}
			let timeFilter = "";
			const timeParams: any[] = [];
			if (mode === "historical" && beforeTimestamp) {
				timeFilter = "AND paintedAt < ?";
				timeParams.push(new Date(beforeTimestamp));
			}

			const limit = 51;
			const rows = await prisma.$queryRawUnsafe<Array<{ paintedAt: Date; cnt: bigint; eventCnt: bigint }>>(
				`SELECT paintedAt, CAST(COUNT(*) AS SIGNED) as cnt,
				        CAST(COUNT(DISTINCT paintedBy) AS SIGNED) as eventCnt
				 FROM PixelHistory WHERE ${whereClause} ${timeFilter}
				 GROUP BY paintedAt ORDER BY paintedAt DESC LIMIT ${limit} ${limitOffset}`,
				...params, ...timeParams
			);

			const hasMore = rows.length === limit;
			const timestamps = rows.slice(0, 50).map((r, i) => ({
				ts: r.paintedAt.getTime(),
				depth: realDepthOffset + i,
				pixelCount: Number(r.cnt),
				eventCount: Number(r.eventCnt),
			}));

			return res.json({ timestamps, hasMore });
		} catch (error) {
			console.error("Error in reverse timestamps:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// POST /staff/tools/select-area/reverse/preview
	// body: { sessionId, mode ("depth"|"historical"), snapshotDepth?, timestamp? }
	// 查询指定时刻的像素快照（默认当前状态）
	// 注意：Pixel/PixelHistory.x/y 是瓦片内局部坐标（0-999）
	app.post("/staff/tools/select-area/reverse/preview", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			if (!await hasPermission(req.user!.id, "staff.tools.select_area.reverse")) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const { sessionId, mode = "depth", snapshotDepth, timestamp } = req.body ?? {};
			const session = reverseSessions.get(sessionId);
			if (!session) {
				return res.status(404).json({ error: "Session not found" });
			}
			if (session.tiles.length === 0) {
				return res.json({ pixels: [], totalPixels: 0 });
			}

			// 确定目标时刻
			let targetTime: Date | null = null;
			if (mode === "historical" && timestamp) {
				targetTime = new Date(timestamp);
			} else if (mode === "depth" && typeof snapshotDepth === "number") {
				// 按 depth（累计偏移量）查找对应的 paintedAt
				const areaConds: string[] = [];
				const tParams: number[] = [session.season];
				for (const tile of session.tiles) {
					const x0 = tile.minPixelX, y0 = tile.minPixelY;
					const x1 = x0 + tile.width - 1, y1 = y0 + tile.height - 1;
					areaConds.push(`(tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?)`);
					tParams.push(tile.tileX, tile.tileY, x0, x1, y0, y1);
				}
				const tWhere = `season = ? AND (${areaConds.join(" OR ")})`;
				const tsRows = await prisma.$queryRawUnsafe<Array<{ paintedAt: Date }>>(
					`SELECT paintedAt FROM PixelHistory WHERE ${tWhere} GROUP BY paintedAt ORDER BY paintedAt DESC LIMIT 1 OFFSET ${snapshotDepth}`,
					...tParams
				);
				if (tsRows.length > 0) targetTime = tsRows[0]!.paintedAt;
			}

			const results: Array<{ tileX: number; tileY: number; pixelX: number; pixelY: number; color: number }> = [];
			const TILE_LIMIT = 100000;

			for (const tile of session.tiles) {
				const x0 = tile.minPixelX, y0 = tile.minPixelY;
				const x1 = x0 + tile.width - 1, y1 = y0 + tile.height - 1;

				// 查询像素状态
				const pixelMap = new Map<string, number>(); // key="localX,localY" → colorId

				if (targetTime) {
					const rows = await prisma.$queryRawUnsafe<Array<{ x: number; y: number; colorId: number }>>(
						`SELECT ph.x, ph.y, ph.colorId
						 FROM PixelHistory ph
						 INNER JOIN (
						   SELECT tileX, tileY, x, y, MAX(paintedAt) as maxPaintedAt
						   FROM PixelHistory
						   WHERE tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?
						     AND paintedAt <= ?
						   GROUP BY tileX, tileY, x, y
						 ) latest ON ph.tileX = latest.tileX AND ph.tileY = latest.tileY
						   AND ph.x = latest.x AND ph.y = latest.y
						   AND ph.paintedAt = latest.maxPaintedAt
						 LIMIT ${TILE_LIMIT}`,
						tile.tileX, tile.tileY, x0, x1, y0, y1, targetTime
					);
					for (const r of rows) pixelMap.set(`${r.x},${r.y}`, r.colorId);
				} else {
					const rows = await prisma.$queryRawUnsafe<Array<{ x: number; y: number; colorId: number }>>(
						`SELECT x, y, colorId FROM Pixel
						 WHERE season = ? AND tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?
						 LIMIT ${TILE_LIMIT}`,
						session.season, tile.tileX, tile.tileY, x0, x1, y0, y1
					);
					for (const r of rows) pixelMap.set(`${r.x},${r.y}`, r.colorId);
				}

				// 按 mask 过滤并按前端格式输出
				const tileW = tile.width;
				const totalPx = tileW * tile.height;
				for (let px = 0; px < totalPx && results.length < TILE_LIMIT; px++) {
					const byteIdx = px >> 3;
					const bitIdx = px & 7;
					if (!((tile.mask[byteIdx]! >> bitIdx) & 1)) continue;
					const lx = px % tileW;
					const ly = Math.floor(px / tileW);
					const localX = tile.minPixelX + lx;
					const localY = tile.minPixelY + ly;
					results.push({
						tileX: tile.tileX,
						tileY: tile.tileY,
						pixelX: localX,
						pixelY: localY,
						color: pixelMap.get(`${localX},${localY}`) ?? 0,
					});
				}
				if (results.length >= TILE_LIMIT) break;
			}

			return res.json({ pixels: results });
		} catch (error) {
			console.error("Error in reverse preview:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// POST /staff/tools/select-area/reverse/timelapse
	// body: { sessionId, paceMode, fps, durationSeconds, maxFrameCount, beforeTimestamp }
	//
	// 生成画布选区的时间轴帧数据，前端解析后合成视频
	//
	// 二进制响应格式（匹配前端 go() 解析函数）：
	//   [0]: version (uint8) = 1
	//   [1-4]: frameCount (uint32 LE)
	//   每个 frame:
	//     [timestampLo (uint32 LE)] — 低32位
	//     [timestampHi (int32 LE)]  — 高32位（合起来 ts = hi*2^32 + lo, ms since epoch）
	//     [changeCount (uint32 LE)] — 本帧变更像素数
	//     每个像素变更: tileX(int32 LE)+tileY(int32 LE)+x(uint16 LE)+y(uint16 LE)+colorId(uint8) = 13B
	//
	// 注意：PixelHistory.x/y 是瓦片内局部坐标（0-999）
	//
	app.post("/staff/tools/select-area/reverse/timelapse", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			if (!await hasPermission(req.user!.id, "staff.tools.select_area.timelapse") &&
				!await hasPermission(req.user!.id, "staff.tools.select_area.reverse")) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const { sessionId, maxFrameCount = 200, beforeTimestamp = 0 } = req.body ?? {};
			const session = reverseSessions.get(sessionId);
			if (!session) {
				return res.status(404).json({ error: "Session not found" });
			}
			if (session.tiles.length === 0) {
				return res.status(400).json({ error: "timelapse_too_many_events" });
			}

			// 构建选区 WHERE — 局部坐标
			const areaConds: string[] = [];
			const params: number[] = [session.season];
			for (const tile of session.tiles) {
				const x0 = tile.minPixelX, y0 = tile.minPixelY;
				const x1 = x0 + tile.width - 1, y1 = y0 + tile.height - 1;
				areaConds.push(`(tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?)`);
				params.push(tile.tileX, tile.tileY, x0, x1, y0, y1);
			}
			const whereClause = `season = ? AND (${areaConds.join(" OR ")})`;

			// 时间过滤
			let timeFilter = "";
			const timeParams: any[] = [];
			if (beforeTimestamp > 0) {
				timeFilter = "AND paintedAt <= ?";
				timeParams.push(new Date(beforeTimestamp));
			}

			const frameLimit = Math.min(Math.max(maxFrameCount, 1), 500);

			// 查询所有 distinct paintedAt（事件模式 = 每个 paintedAt 一帧）
			const timestamps = await prisma.$queryRawUnsafe<Array<{ paintedAt: Date }>>(
				`SELECT paintedAt FROM PixelHistory WHERE ${whereClause} ${timeFilter} GROUP BY paintedAt ORDER BY paintedAt ASC LIMIT ${frameLimit + 1}`,
				...params, ...timeParams
			);

			console.log(`[reverse/timelapse] found ${timestamps.length} distinct timestamps in area`);
			if (timestamps.length === 0) {
				return res.status(400).json({ error: "timelapse_too_many_events" });
			}

			// 如果事件数超过 frameLimit，返回 too_many
			if (timestamps.length > frameLimit) {
				return res.status(400).json({ error: "timelapse_too_many_events" });
			}

			// 预计算缓冲区大小
			// 先一次性查询所有像素变更并按 paintedAt 分组
			const allPixelRows = await prisma.$queryRawUnsafe<Array<{
				tileX: number; tileY: number; x: number; y: number;
				colorId: number; paintedAt: Date;
			}>>(
				`SELECT tileX, tileY, x, y, colorId, paintedAt FROM PixelHistory WHERE ${whereClause} ${timeFilter} ORDER BY paintedAt ASC`,
				...params, ...timeParams
			);

			// 按 paintedAt 分组
			const framePixelMap = new Map<number, Array<{ tileX: number; tileY: number; x: number; y: number; colorId: number }>>();
			for (const row of allPixelRows) {
				const ts = row.paintedAt.getTime();
				if (!framePixelMap.has(ts)) framePixelMap.set(ts, []);
				framePixelMap.get(ts)!.push({ tileX: row.tileX, tileY: row.tileY, x: row.x, y: row.y, colorId: row.colorId });
			}

			// 按时间戳排序构建帧列表
			const sortedTimestamps = [...framePixelMap.keys()].sort((a, b) => a - b).slice(0, frameLimit);

			// 限总像素数，防止 OOM
			const MAX_TOTAL_PIXELS = 2_000_000;
			let totalPixelCount = 0;
			for (const ts of sortedTimestamps) {
				totalPixelCount += framePixelMap.get(ts)?.length ?? 0;
			}
			if (totalPixelCount > MAX_TOTAL_PIXELS) {
				return res.status(400).json({ error: "timelapse_too_many_events" });
			}

			// 编码二进制
			const headerSize = 5; // version(1) + frameCount(4)
			let bufSize = headerSize;
			for (const ts of sortedTimestamps) {
				const pixels = framePixelMap.get(ts)!;
				bufSize += 8 + 4 + pixels.length * 13; // timestamp(8) + changeCount(4) + pixels*13
			}

			const buf = Buffer.alloc(bufSize);
			let offset = 0;
			buf[offset] = 1; offset += 1; // version
			buf.writeUInt32LE(sortedTimestamps.length, offset); offset += 4;

			for (const ts of sortedTimestamps) {
				const pixels = framePixelMap.get(ts)!;
				// 64-bit timestamp: split into low/high 32-bit
				const tsLow = ts >>> 0;
				const tsHigh = Math.floor(ts / 0x100000000);
				buf.writeUInt32LE(tsLow, offset); offset += 4;
				buf.writeInt32LE(tsHigh, offset); offset += 4;
				buf.writeUInt32LE(pixels.length, offset); offset += 4;
				for (const p of pixels) {
					buf.writeInt32LE(p.tileX, offset); offset += 4;
					buf.writeInt32LE(p.tileY, offset); offset += 4;
					buf.writeUInt16LE(p.x, offset); offset += 2;
					buf.writeUInt16LE(p.y, offset); offset += 2;
					buf[offset] = p.colorId; offset += 1;
				}
			}

			res.setHeader("Content-Type", "application/octet-stream");
			return res.send(buf);
		} catch (error) {
			console.error("Error in reverse timelapse:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// POST /staff/tools/select-area/reverse/apply
	// body: { sessionId, mode, snapshotDepth?, timestamp? }
	// 将指定时刻的像素快照写回 Pixel 表（恢复）
	// 返回: { painted: number }
	app.post("/staff/tools/select-area/reverse/apply", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			if (!await hasPermission(req.user!.id, "staff.tools.select_area.reverse")) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const { sessionId, mode = "depth", snapshotDepth, timestamp } = req.body ?? {};
			const session = reverseSessions.get(sessionId);
			if (!session) {
				return res.status(404).json({ error: "Session not found" });
			}
			if (session.tiles.length === 0) {
				return res.json({ painted: 0 });
			}

			// 确定目标时刻
			let targetTime: Date | null = null;
			if (mode === "historical" && timestamp) {
				targetTime = new Date(timestamp);
			} else if (mode === "depth" && typeof snapshotDepth === "number") {
				const areaConds: string[] = [];
				const tParams: number[] = [session.season];
				for (const tile of session.tiles) {
					const x0 = tile.minPixelX, y0 = tile.minPixelY;
					const x1 = x0 + tile.width - 1, y1 = y0 + tile.height - 1;
					areaConds.push(`(tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?)`);
					tParams.push(tile.tileX, tile.tileY, x0, x1, y0, y1);
				}
				const tWhere = `season = ? AND (${areaConds.join(" OR ")})`;
				const tsRows = await prisma.$queryRawUnsafe<Array<{ paintedAt: Date }>>(
					`SELECT paintedAt FROM PixelHistory WHERE ${tWhere} GROUP BY paintedAt ORDER BY paintedAt DESC LIMIT 1 OFFSET ${snapshotDepth}`,
					...tParams
				);
				if (tsRows.length > 0) targetTime = tsRows[0]!.paintedAt;
			}

			const paintedAt = new Date();
			const TILE_LIMIT = 1000000;
			let totalPainted = 0;

			for (const tile of session.tiles) {
				const x0 = tile.minPixelX, y0 = tile.minPixelY;
				const x1 = x0 + tile.width - 1, y1 = y0 + tile.height - 1;

				// 查询该时刻的像素状态（含原始绘画人）
				const dbRows = targetTime
					? await prisma.$queryRawUnsafe<Array<{ x: number; y: number; colorId: number; paintedBy: number }>>(
							`SELECT ph.x, ph.y, ph.colorId, ph.paintedBy
							 FROM PixelHistory ph
							 INNER JOIN (
							   SELECT tileX, tileY, x, y, MAX(paintedAt) as maxPaintedAt
							   FROM PixelHistory
							   WHERE tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?
							     AND paintedAt <= ?
							   GROUP BY tileX, tileY, x, y
							 ) latest ON ph.tileX = latest.tileX AND ph.tileY = latest.tileY
							   AND ph.x = latest.x AND ph.y = latest.y
							   AND ph.paintedAt = latest.maxPaintedAt
							 LIMIT ${TILE_LIMIT}`,
							tile.tileX, tile.tileY, x0, x1, y0, y1, targetTime
						)
					: await prisma.$queryRawUnsafe<Array<{ x: number; y: number; colorId: number; paintedBy: number }>>(
							`SELECT x, y, colorId, paintedBy FROM Pixel
							 WHERE season = ? AND tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?
							 LIMIT ${TILE_LIMIT}`,
							session.season, tile.tileX, tile.tileY, x0, x1, y0, y1
						);

				// key="x,y" → { colorId, paintedBy } at targetTime
				const snapshotMap = new Map<string, { colorId: number; paintedBy: number }>();
				for (const r of dbRows) snapshotMap.set(`${r.x},${r.y}`, { colorId: r.colorId, paintedBy: r.paintedBy });

				// 查询该 tile 中哪些位置有 PixelHistory 记录（不管时间）
				const anyHistory = new Set<string>();
				if (targetTime) {
					const histRows = await prisma.$queryRawUnsafe<Array<{ x: number; y: number }>>(
						`SELECT DISTINCT x, y FROM PixelHistory
						 WHERE tileX = ? AND tileY = ? AND x >= ? AND x <= ? AND y >= ? AND y <= ?
						 LIMIT 500000`,
						tile.tileX, tile.tileY, x0, x1, y0, y1
					);
					for (const r of histRows) anyHistory.add(`${r.x},${r.y}`);
				}

				const pixelValues: any[] = [];
				const deleteKeys: string[] = [];  // 需要删除的位置（目标时刻之后才画的）
				const historyValues: any[] = [];
				const tileW = tile.width;
				const totalPx = tileW * tile.height;

				for (let px = 0; px < totalPx; px++) {
					const byteIdx = px >> 3;
					const bitIdx = px & 7;
					if (!((tile.mask[byteIdx]! >> bitIdx) & 1)) continue;
					const lx = px % tileW;
					const ly = Math.floor(px / tileW);
					const localX = tile.minPixelX + lx;
					const localY = tile.minPixelY + ly;
					const key = `${localX},${localY}`;

					if (snapshotMap.has(key)) {
						// 该位置在目标时刻有数据 → 恢复颜色 + 原始绘画人
						const rec = snapshotMap.get(key)!;
						pixelValues.push(Prisma.sql`(${session.season}, ${tile.tileX}, ${tile.tileY}, ${localX}, ${localY}, ${rec.colorId}, ${rec.paintedBy}, ${paintedAt})`);
						historyValues.push(Prisma.sql`(${session.season}, ${tile.tileX}, ${tile.tileY}, ${localX}, ${localY}, ${rec.colorId}, ${rec.paintedBy}, ${paintedAt})`);
					} else if (anyHistory.has(key) && targetTime) {
						// 该位置有 PixelHistory 记录但都在目标时刻之后 → 当时还不存在 → DELETE 掉
						deleteKeys.push(`(${session.season},${tile.tileX},${tile.tileY},${localX},${localY})`);
					}
					// 从未在 PixelHistory 出现的旧数据 → 不动
				}

				// 执行 DELETE 清除（批量）
				if (deleteKeys.length > 0) {
					const DB_BATCH = 500;
					for (let i = 0; i < deleteKeys.length; i += DB_BATCH) {
						const batch = deleteKeys.slice(i, i + DB_BATCH);
						await prisma.$executeRawUnsafe(
							`DELETE FROM Pixel WHERE (season, tileX, tileY, x, y) IN (${batch.join(",")})`
						);
					}
				}

				if (pixelValues.length === 0) continue;

				// 确保 Tile 行存在
				await prisma.$executeRaw(Prisma.sql`INSERT IGNORE INTO Tile (season, x, y) VALUES (${session.season}, ${tile.tileX}, ${tile.tileY})`);

				// 分批写入 Pixel 表
				const DB_BATCH = 500;
				for (let i = 0; i < pixelValues.length; i += DB_BATCH) {
					const batch = pixelValues.slice(i, i + DB_BATCH);
					await prisma.$executeRaw`
						INSERT INTO Pixel (season, tileX, tileY, x, y, colorId, paintedBy, paintedAt)
						VALUES ${Prisma.join(batch)}
						ON DUPLICATE KEY UPDATE
							colorId = VALUES(colorId), paintedBy = VALUES(paintedBy), paintedAt = VALUES(paintedAt)
					`;
				}

				// 写入 PixelHistory
				for (let i = 0; i < historyValues.length; i += DB_BATCH) {
					const batch = historyValues.slice(i, i + DB_BATCH);
					await prisma.$executeRaw`
						INSERT INTO PixelHistory (season, tileX, tileY, x, y, colorId, paintedBy, paintedAt)
						VALUES ${Prisma.join(batch)}
					`;
				}

				totalPainted += pixelValues.length;
			}

			// 清除受影响瓦片的缓存，强制重建
			const seenTiles = new Set<string>();
			for (const tile of session.tiles) {
				const key = `${tile.tileX},${tile.tileY}`;
				if (seenTiles.has(key)) continue;
				seenTiles.add(key);
				await pixelService.forceRebuildTile(tile.tileX, tile.tileY, session.season)
					.catch(e => console.error(`Failed to rebuild tile ${key}:`, e));
			}

			return res.json({ painted: totalPainted });
		} catch (error) {
			console.error("Error in reverse apply:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// ── Phone Verification ──
	// POST /staff/tools/select-area/phone-verification
	// body: { userIds: number[], notes?: string }
	app.post("/staff/tools/select-area/phone-verification", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			if (!await hasPermission(req.user!.id, "staff.tools.select_area.phone_verification")) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const { userIds, notes } = req.body ?? {};
			if (!Array.isArray(userIds) || userIds.length === 0) {
				return res.status(400).json({ error: "Invalid or empty userIds" });
			}

			// 设置挑战标记，下次绘画时触发
			for (const uid of userIds) {
				await prisma.userChallenge.upsert({
					where: { userId: uid },
					create: { userId: uid, needsChallenge: true, challengeTier: 4 },
					update: { needsChallenge: true, challengeTier: 4 }
				});
			}

			// 记录操作日志
			await prisma.userNote.createMany({
				data: userIds.map((uid: number) => ({
					userId: uid,
					reportedUserId: uid,
					content: `Phone verification required by staff #${req.user!.id}${notes ? `: ${notes}` : ""}`
				}))
			});

			return res.json({ success: true, affected: userIds.length });
		} catch (error) {
			console.error("Error in phone verification:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});
}