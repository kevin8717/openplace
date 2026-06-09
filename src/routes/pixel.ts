import { App } from "@tinyhttp/app";
import { authMiddleware } from "../middleware/auth.js";
import { handleServiceError } from "../middleware/errorHandler.js";
import { PixelService } from "../services/pixel.js";
import { validateSeason, validateTileCoordinates } from "../validators/common.js";
import { validatePaintPixels, validatePixelInfo } from "../validators/pixel.js";
import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { prisma } from "../config/database.js";
import { UserService } from "../services/user.js";
import { AuthenticatedRequest } from "../types/index.js";
import { rateLimiter } from "../services/rate-limiter.js";



const PAINT_RATE_LIMIT_ATTEMPTS = Number.parseInt(process.env["PAINT_RATE_LIMIT_ATTEMPTS"] ?? "") || 60;
const PAINT_RATE_LIMIT_MS = Number.parseInt(process.env["PAINT_RATE_LIMIT_MS"] ?? "") || 10_000;

const pixelService = new PixelService(prisma);
const userService = new UserService(prisma);

export default function (app: App) {
	app.get("/:season/tile/random", async (req, res) => {
		try {
			// TODO: validation
			const season = req.params["season"] as string;
			if (!validateSeason(season)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const result = await pixelService.getRandomTile();
			return res.json(result);
		} catch (error) {
			console.error("Error getting random tile:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});



	app.get("/:season/pixel/:tileX/:tileY", async (req, res) => {
		try {
			// TODO: validation
			const season = req.params["season"] as string;
			const tileX = Number.parseInt(req.params["tileX"] as string);
			const tileY = Number.parseInt(req.params["tileY"] as string);
			const x = Number.parseInt(req.query["x"] as string);
			const y = Number.parseInt(req.query["y"] as string);

			const validationError = validatePixelInfo({ season, tileX, tileY, x, y });
			if (validationError) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(validationError, HTTP_STATUS.BAD_REQUEST));
			}

			const result = await pixelService.getPixelInfo({ season: 0, tileX, tileY, x, y });
			return res.json({
				region: result.region,
				paintedBy: result.paintedBy?.[0]
			});
		} catch (error) {
			console.error("Error getting pixel info:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});




	
	app.get("/files/:season/tiles/:tileX/:tileY.png" , async (req, res) => {
		try {
			const season = req.params["season"] as string;
			const tileX = Number.parseInt(req.params["tileX"] as string);
			const tileY = Number.parseInt(req.params["tileY"] as string);

			if (!validateSeason(season)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			if (!validateTileCoordinates(tileX, tileY)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const { buffer, updatedAt } = await pixelService.getTileImage(tileX, tileY, 0);

			if (updatedAt) {
				const lastModified = updatedAt.toUTCString();
				res.setHeader("Last-Modified", lastModified);

				const ifModifiedSince = req.get("if-modified-since") as string;
				if (ifModifiedSince) {
					const ifModifiedSinceDate = new Date(ifModifiedSince);
					if (Math.floor(updatedAt.getTime() / 1000) <= Math.floor(ifModifiedSinceDate.getTime() / 1000)) {
						return res.status(304)
							.send("");
					}
				}
			}

			res.setHeader("Content-Type", "image/png");
			res.setHeader("Cache-Control", "private, must-revalidate");
			res.setHeader("Pragma", "no-cache");
			res.setHeader("Expires", "0");
			return res.send(buffer);
		} catch (error) {
			console.error("Error generating tile image:", error);
			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
				.json(createErrorResponse("Internal Server Error", HTTP_STATUS.INTERNAL_SERVER_ERROR));
		}
	});

	app.post("/:season/pixel/:tileX/:tileY", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const rateLimit = rateLimiter.checkRateLimit(req.ip!, PAINT_RATE_LIMIT_ATTEMPTS, PAINT_RATE_LIMIT_MS);
			if (!rateLimit.allowed) {
				return res.status(429)
					.json({ error: "Too many requests. Please slow down." });
			}

			const season = req.params["season"] as string;
			const tileX = Number.parseInt(req.params["tileX"] as string);
			const tileY = Number.parseInt(req.params["tileY"] as string);
			const { colors, coords } = req.body;

			// Add pixel count limit to prevent memory issues
			const MAX_PIXELS_PER_REQUEST = 500_000;
			if (!colors || colors.length > MAX_PIXELS_PER_REQUEST) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(`Too many pixels. Maximum ${MAX_PIXELS_PER_REQUEST} per request.`, HTTP_STATUS.BAD_REQUEST));
			}

			const validationError = validatePaintPixels({ season, tileX, tileY, colors, coords });
			if (validationError) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(validationError, HTTP_STATUS.BAD_REQUEST));
			}

			const userRow = await prisma.user.findUnique({
				where: { id: req.user!.id },
				select: { id: true, name: true, banned: true, timeoutUntil: true }
			}).catch(() => null);
			if (userRow) {
				if (userRow.banned) {
					const date = new Date();
					console.log(`[${date.toISOString()}] [${req.ip}] ${userRow.name}#${userRow.id} attempted to paint ${colors.length} pixels at tile (${tileX}, ${tileY}) while banned.`);
					return res.status(403)
						.json({ error: "banned" });
				}

				if (new Date(userRow.timeoutUntil) > new Date()) {
					const date = new Date();
					console.log(`[${date.toISOString()}] [${req.ip}] ${userRow.name}#${userRow.id} attempted to paint ${colors.length} pixels at tile (${tileX}, ${tileY}) while timed out.`);
					const timeoutDate = new Date(userRow.timeoutUntil);
					return res.status(403)
						.json({ error: "timeout", durationMs: timeoutDate.getTime() - Date.now() });
				}
			}

			const account = {
				userId: req.user!.id,
				ip: req.ip!,
				country: req.get("cf-ipcountry") as string ?? null
			};
			const memBefore = process.memoryUsage();
			const result = await pixelService.paintPixels(account, { tileX, tileY, colors, coords }, 0);
			const memAfter = process.memoryUsage();

			const name = await userService.getUserName(req.user!.id) ?? `user:${req.user!.id}`;
			const date = new Date();
			const heapUsedMb = ((memAfter.heapUsed - memBefore.heapUsed) / 1024 / 1024).toFixed(2);
			const heapTotalMb = (memAfter.heapTotal / 1024 / 1024).toFixed(1);
			const rssMb = (memAfter.rss / 1024 / 1024).toFixed(1);
			console.log(`[${date.toISOString()}] [${req.ip}] ${name}#${req.user!.id} painted ${colors.length} pixels at tile (${tileX}, ${tileY}) [heap: +${heapUsedMb}MB / total: ${heapTotalMb}MB / rss: ${rssMb}MB]`);



			if (req.ip) {
				await userService.setLastIP(req.user!.id, req.ip);
			}

			return res.json(result);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// 新版 paint 接口 — 支持多 tile 批量绘制
	// POST /paint
	// Body: { season: 0, tiles: [{ x, y, pixels: { x[], y[], colors[] } }] }
	app.post("/paint", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const rateLimit = rateLimiter.checkRateLimit(req.ip!, PAINT_RATE_LIMIT_ATTEMPTS, PAINT_RATE_LIMIT_MS);
			if (!rateLimit.allowed) {
				return res.status(429)
					.json({ error: "Too many requests. Please slow down." });
			}

			const { season, tiles } = req.body as {
				season: number;
				tiles: Array<{
					x: number;
					y: number;
					pixels: { x: number[]; y: number[]; colors: number[] };
				}>;
			};

			if (!tiles || !Array.isArray(tiles) || tiles.length === 0) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Bad Request", HTTP_STATUS.BAD_REQUEST));
			}

			const seasonNum = season ?? 0;

			// 限制单次请求像素数量，防止 OOM
			const MAX_PIXELS_PER_REQUEST = 250_000;
			let totalPixelCount = 0;
			for (const tile of tiles) {
				if (tile.pixels?.colors) totalPixelCount += tile.pixels.colors.length;
			}
			if (totalPixelCount > MAX_PIXELS_PER_REQUEST) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse(`Too many pixels. Maximum ${MAX_PIXELS_PER_REQUEST} per request.`, HTTP_STATUS.BAD_REQUEST));
			}

			// 检查用户状态（封禁/超时/需要验证）
			const userRow = await prisma.user.findUnique({
				where: { id: req.user!.id },
				select: { id: true, name: true, banned: true, timeoutUntil: true }
			}).catch(() => null);

			if (userRow) {
				if (userRow.banned) {
					return res.status(403).json({ error: "banned" });
				}
				if (new Date(userRow.timeoutUntil) > new Date()) {
					const timeoutDate = new Date(userRow.timeoutUntil);
					return res.status(403).json({
						error: "timeout",
						durationMs: timeoutDate.getTime() - Date.now()
					});
				}
			}

			// 检查是否需要弹出挑战
			const userChallenge = await prisma.userChallenge.findUnique({
				where: { userId: req.user!.id }
			}).catch(() => null);
			if (userChallenge?.needsChallenge && userChallenge.challengeTier) {
				return res.status(403).json({
					error: "challenge-required",
					tier: userChallenge.challengeTier
				});
			}

			const account = {
				userId: req.user!.id,
				ip: req.ip!,
				country: req.get("cf-ipcountry") as string ?? null
			};

			let totalPainted = 0;

			for (const tile of tiles) {
				const { x: tileX, y: tileY, pixels } = tile;

				if (!pixels || !pixels.x || !pixels.y || !pixels.colors) {
					continue;
				}

				const { x: xs, y: ys, colors } = pixels;
				const count = xs.length;

				if (count === 0 || count !== ys.length || count !== colors.length) {
					continue;
				}

				// 转换为 PaintPixelsInput 格式：coords 为扁平化 [x1, y1, x2, y2, ...]
				const coords: number[] = [];
				for (let i = 0; i < count; i++) {
					coords.push(xs[i]!, ys[i]!);
				}

				const memBefore = process.memoryUsage();
				const result = await pixelService.paintPixels(account, { tileX, tileY, colors, coords }, seasonNum);
				const memAfter = process.memoryUsage();
				totalPainted += result.painted;

				const heapUsedMb = ((memAfter.heapUsed - memBefore.heapUsed) / 1024 / 1024).toFixed(2);
				const heapTotalMb = (memAfter.heapTotal / 1024 / 1024).toFixed(1);
				const rssMb = (memAfter.rss / 1024 / 1024).toFixed(1);



				const name = await userService.getUserName(req.user!.id) ?? `user:${req.user!.id}`;
				const date = new Date();
				console.log(`[${date.toISOString()}] [${req.ip}] ${name}#${req.user!.id} painted ${count} pixels at tile (${tileX}, ${tileY}) s${seasonNum} [heap: +${heapUsedMb}MB / total: ${heapTotalMb}MB / rss: ${rssMb}MB]`);
			}

			if (req.ip) {
				await userService.setLastIP(req.user!.id, req.ip);
			}

			return res.json({ painted: totalPainted });
		} catch (error) {
			const err = error as Error & { status?: number };
			// paintPixels 抛出的特定错误
			if (err.message === "banned") {
				return res.status(403).json({ error: "banned" });
			}
			if (err.message === "timeout") {
				return res.status(403).json({ error: "timeout" });
			}
			if (err.message === "refresh") {
				return res.status(403).json({ error: "refresh" });
			}
			if (err.message?.includes("colour that was not purchased")) {
				return res.status(403).json({ error: "color-not-owned" });
			}
			return handleServiceError(err, res);
		}
	});
}

