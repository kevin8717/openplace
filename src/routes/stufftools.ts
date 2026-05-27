import { App } from "@tinyhttp/app";
import { authMiddleware } from "../middleware/auth.js";
import { createCanvas } from "@napi-rs/canvas";
import multer from "multer";

import { validateSeason, validateTileCoordinates } from "../validators/common.js";

import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { prisma } from "../config/database.js";
import { UserService } from "../services/user.js";
import { PixelService } from "../services/pixel.js";

import { CoordinateTransformer } from "../utils/coordinate.js";
import { AuthenticatedRequest } from "../types/index.js";

import { COLOR_PALETTE } from "../utils/colors.js";



const userService = new UserService(prisma);
const pixelService = new PixelService(prisma);

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
					paintedBy: true
				},
				orderBy: [
					{ y: "asc" },
					{ x: "asc" }
				]
			});

			// 创建Uint32Array来存储用户ID，初始化为0
			const userIds = new Uint32Array(width * height);

			// 填充存在的像素数据
			for (const pixel of pixels) {
				const index = (pixel.y - minY) * width + (pixel.x - minX);
				userIds[index] = pixel.paintedBy;
			}

			// 返回 arraybuffer 格式的用户ID列表
			const buffer = Buffer.from(userIds.buffer);
			return res.send(buffer);

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

			// 验证请求体
			const { colors, coords, fp } = req.body as { colors?: number[]; coords?: number[]; fp?: string };

			if (!Array.isArray(colors) || !Array.isArray(coords) || typeof fp !== "string") {
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
			// 验证用户权限
			const userRow = await userService.getUserProfile(req.user!.id)
				.catch(() => null);
			if (!userRow || (userRow.role !== "admin")) {
				return res.status(HTTP_STATUS.FORBIDDEN)
					.json(createErrorResponse("Access denied. Admin privileges required.", HTTP_STATUS.FORBIDDEN));
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

			if (width <= 0 || height <= 0 || width > 5000 || height > 5000) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid bitmap dimensions (max 5000x5000)", HTTP_STATUS.BAD_REQUEST));
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

}