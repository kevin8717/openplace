import { App } from "@tinyhttp/app";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { WplaceBitMap } from "../utils/bitmap.js";
import { authMiddleware } from "../middleware/auth.js";
import { adminMiddleware } from "./admin.js";
import { prisma } from "../config/database.js";
import { calculateChargeRecharge } from "../utils/charges.js";
import { AuthenticatedRequest } from "../types/index.js";
import { createErrorResponse, HTTP_STATUS } from "../utils/response.js";
import { handleServiceError } from "../middleware/errorHandler.js";
import { Prisma } from "@prisma/client";

const UPLOAD_DIR = path.resolve("frontend/img/store");

const STORE_ITEMS = {
	70: { name: "+5 Max. Charges", price: 500, type: "charges" },
	80: { name: "+30 Paint Charges", price: 500, type: "paint" },
	100: { name: "Unlock Paid Colors", price: 2000, type: "color" },
	110: { name: "Unlock Flag", price: 20_000, type: "flag" }
};


export default function (app: App) {
	app.post("/purchase", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { product } = req.body;

			if (!product || !product.id) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			// Validate product.id is a valid number
			const productId = Number(product.id);
			if (!Number.isInteger(productId) || productId <= 0) {
				console.warn(`[${new Date()
					.toISOString()}] Invalid product ID from ${req.ip}:`, product.id);
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const item = STORE_ITEMS[productId as keyof typeof STORE_ITEMS];
			if (!item) {
				console.warn(`[${new Date()
					.toISOString()}] Unknown product ID from ${req.ip}:`, productId);
				return res.status(400)
					.json({ error: "Invalid item", status: 400 });
			}

			// 用事务+行锁防止并发购买时 Error 1020
			await prisma.$transaction(async (tx) => {
				const rows = await tx.$queryRaw<{
					id: number; droplets: number; maxCharges: number; currentCharges: number;
					chargesLastUpdatedAt: Date; chargesCooldownMs: number;
					extraColorsBitmap: number; flagsBitmap: Buffer | null;
				}[]>(
					Prisma.sql`SELECT id, droplets, maxCharges, currentCharges, chargesLastUpdatedAt, chargesCooldownMs, extraColorsBitmap, flagsBitmap FROM User WHERE id = ${req.user!.id} LIMIT 1 FOR UPDATE`
				);
				const userRow = rows[0];
				if (!userRow) {
					throw new Error("User not found");
				}

				const amount = product.amount ?? 1;

				// Strict validation for amount
				if (typeof amount !== "number" ||
					!Number.isFinite(amount) ||
					!Number.isInteger(amount) ||
					amount < 1) {
					console.warn(`[${new Date()
						.toISOString()}] Invalid purchase amount from ${req.ip}:`, amount);
					throw new Error("Bad Request");
				}

				const totalCost = item.price * amount;

				if (userRow.droplets < totalCost) {
					throw new Error("Forbidden");
				}

				const updateData: Record<string, unknown> = {
					["droplets"]: userRow.droplets - totalCost
				};

				switch (item.type) {
				case "charges":
					updateData["maxCharges"] = userRow["maxCharges"] + (5 * amount);
					break;

				case "paint": {
					const currentCharges = calculateChargeRecharge(
						userRow["currentCharges"],
						userRow["maxCharges"],
						userRow["chargesLastUpdatedAt"] || new Date(),
						userRow["chargesCooldownMs"]
					);
					updateData["currentCharges"] = currentCharges + (30 * amount);
					updateData["chargesLastUpdatedAt"] = new Date();
					break;
				}

				case "color":
					if (product.variant) {
						const variant = Number(product.variant);
						if (!Number.isInteger(variant) || variant < 32 || variant > 63) {
							throw new Error("Bad Request");
						}
						const mask = 1 << (variant - 32);
						updateData["extraColorsBitmap"] = userRow["extraColorsBitmap"] | mask;
					}
					break;

				case "flag":
					if (product.variant) {
						const variant = Number(product.variant);
						if (!Number.isInteger(variant) || variant < 1 || variant > 251) {
							throw new Error("Bad Request");
						}
						const flagsBitmap = userRow["flagsBitmap"]
							? WplaceBitMap.fromBase64(Buffer.from(userRow["flagsBitmap"])
								.toString("base64"))
							: new WplaceBitMap();
						flagsBitmap.set(variant, true);
						updateData["flagsBitmap"] = Buffer.from(flagsBitmap.toBase64(), "base64");
					}
					break;
				}

				await tx.user.update({
					where: { id: req.user!.id },
					data: updateData as any
				});
			}, {
				isolationLevel: "ReadCommitted",
				timeout: 15_000
			});

			return res.json({ success: true });
		} catch (error) {
			console.error("Error purchasing item:", error);
			return res.status(403)
				.json({ error: "Forbidden", status: 403 });
		}
	});

	app.post("/flag/equip/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const flagId = Number.parseInt(req.params["id"] as string);

			if (Number.isNaN(flagId) || flagId < 0 || flagId > 251) {
				return res.status(400)
					.json({ error: "Bad Request", status: 400 });
			}

			const user = await prisma.user.findUnique({
				where: { id: req.user!.id }
			});

			if (!user) {
				return res.status(401)
					.json({ error: "Unauthorized", status: 401 });
			}

			// Handle unequip (flagId = 0)
			// idk why first flag frontend only set flagId = 0
			if (flagId === 0) {
				if (user.equippedFlag && user.equippedFlag > 0) {
					await prisma.user.update({
						where: { id: req.user!.id },
						data: { equippedFlag: 0 }
					});
					return res.json({ success: true });
				} else {
					return res.status(403)
						.json({ error: "Forbidden", status: 403 });
				}
			}

			// Handle equip (flagId > 0)
			const flagsBitmap = user.flagsBitmap
				? WplaceBitMap.fromBase64(Buffer.from(user.flagsBitmap)
					.toString("base64"))
				: new WplaceBitMap();

			if (!flagsBitmap.get(flagId)) {
				return res.status(403)
					.json({ error: "Forbidden", status: 403 });
			}

			// Equip the flag
			await prisma.user.update({
				where: { id: req.user!.id },
				data: { equippedFlag: flagId }
			});

			return res.json({ success: true });
		} catch (error) {
			console.error("Error equipping flag:", error);
			return res.status(500)
				.json({ error: "Internal Server Error", status: 500 });
		}
	});

	app.get("/store/frames", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { ownedFrames: true } });
			const ownedFrames: number[] = user ? JSON.parse(user.ownedFrames) : [];
			const frames = await prisma.frame.findMany({
				orderBy: { createdAt: "desc" }
			});
			return res.json(frames.map(f => ({
				id: f.id,
				name: f.name,
				imageUrl: f.imageUrl,
				description: f.description,
				rarity: f.rarity,
				value: f.value,
				owned: ownedFrames.includes(f.id),
				createdAt: f.createdAt.toISOString()
			})));
		} catch (error) {
			return res.status(403)
				.json({ error: "Forbidden", status: 403 });
		}
	});

	app.get("/store/name", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { ownedFonts: true, ownedStyles: true } });
			const ownedFonts: number[] = user ? JSON.parse(user.ownedFonts) : [];
			const ownedStyles: number[] = user ? JSON.parse(user.ownedStyles) : [];
			const [fonts, styles] = await Promise.all([
				prisma.fontCosmetic.findMany({ orderBy: { createdAt: "desc" } }),
				prisma.styleCosmetic.findMany({ orderBy: { createdAt: "desc" } })
			]);
			return res.json({
				fonts: fonts.map(f => ({
					id: f.id,
					name: f.name,
					price: f.value,
					owned: ownedFonts.includes(f.id),
					text: f.config
				})),
				styles: styles.map(s => ({
					id: s.id,
					name: s.name,
					price: s.value,
					owned: ownedStyles.includes(s.id),
					text: s.config
				}))
			});
		} catch (error) {
			return res.status(403)
				.json({ error: "Forbidden", status: 403 });
		}
	});

	// POST /store/frames/buy/:id — 购买边框
	app.post("/store/frames/buy/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const frameId = Number.parseInt(req.params["id"] as string);
			if (Number.isNaN(frameId)) {
				return res.status(404).json({ error: "Not Found", status: 404 });
			}

			const frame = await prisma.frame.findUnique({ where: { id: frameId } });
			if (!frame) {
				return res.status(404).json({ error: "Not Found", status: 404 });
			}

			const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
			if (!user) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const ownedFrames: number[] = JSON.parse(user.ownedFrames);
			if (ownedFrames.includes(frameId)) {
				return res.status(409).json({ error: "Already owned", status: 409 });
			}

			if (user.droplets < frame.value) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			ownedFrames.push(frameId);
			await prisma.user.update({
				where: { id: req.user!.id },
				data: { droplets: user.droplets - frame.value, ownedFrames: JSON.stringify(ownedFrames) }
			});

			return res.status(200).json({});
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error", status: 500 });
		}
	});

	// POST /store/name/buy/:id — 购买字体或样式
	app.post("/store/name/buy/:id", authMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const cosmeticId = Number.parseInt(req.params["id"] as string);
			if (Number.isNaN(cosmeticId)) {
				return res.status(400).json({ error: "Bad Request", status: 400 });
			}

			const font = await prisma.fontCosmetic.findUnique({ where: { id: cosmeticId } });
			const style = font ? null : await prisma.styleCosmetic.findUnique({ where: { id: cosmeticId } });

			if (!font && !style) {
				return res.status(400).json({ error: "Bad Request", status: 400 });
			}

			const item = font ?? style!;
			if (!item.purchasable) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
			if (!user) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			if (user.droplets < item.value) {
				return res.status(403).json({ error: "Forbidden", status: 403 });
			}

			if (font) {
				const ownedFonts: number[] = JSON.parse(user.ownedFonts);
				if (ownedFonts.includes(cosmeticId)) {
					return res.status(409).json({ error: "Already owned", status: 409 });
				}
				ownedFonts.push(cosmeticId);
				await prisma.user.update({
					where: { id: req.user!.id },
					data: { droplets: user.droplets - item.value, ownedFonts: JSON.stringify(ownedFonts) }
				});
			} else {
				const ownedStyles: number[] = JSON.parse(user.ownedStyles);
				if (ownedStyles.includes(cosmeticId)) {
					return res.status(409).json({ error: "Already owned", status: 409 });
				}
				ownedStyles.push(cosmeticId);
				await prisma.user.update({
					where: { id: req.user!.id },
					data: { droplets: user.droplets - item.value, ownedStyles: JSON.stringify(ownedStyles) }
				});
			}

			return res.status(200).json({});
		} catch (error) {
			return res.status(500).json({ error: "Internal Server Error", status: 500 });
		}
	});

	// ─── Staff 商店管理 ──────────────────────────────────────

	// 确保上传目录存在
	fs.mkdir(UPLOAD_DIR, { recursive: true }).catch(() => {});

	const storeImageUpload = multer({
		storage: multer.diskStorage({
			destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
			filename: (_req, file, cb) => {
				const ext = path.extname(file.originalname) || ".png";
				const name = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`;
				cb(null, name);
			}
		}),
		limits: { fileSize: 10 * 1024 * 1024, files: 1 },
		fileFilter: (_req, file, cb) => {
			file.mimetype.startsWith("image/") ? cb(null, true) : cb(new Error("Only image files are allowed"));
		}
	});

	const useStoreImage = (field: string) => (req: any, res: any, next?: any) =>
		(storeImageUpload.single(field) as any)(req as any, res as any, next as any);

	// POST /staff/store-manager/frames — 创建新 Frame
	app.post("/staff/store-manager/frames", authMiddleware, adminMiddleware, useStoreImage("image"), async (req: AuthenticatedRequest, res) => {
		try {
			const { name, description, value, rarity, purchasable } = req.body ?? {};
			const file = (req as any).file;
			if (!name || !description || value === undefined || !rarity || purchasable === undefined || !file) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required fields", HTTP_STATUS.BAD_REQUEST));
			}
			const imageUrl = `/img/store/${file.filename}`;
			await prisma.frame.create({
				data: { name, description, imageUrl, rarity, value: Number.parseInt(value), purchasable: purchasable === "true" || purchasable === true }
			});
			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /staff/store-manager/fonts — 创建新字体
	app.post("/staff/store-manager/fonts", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { name, config, value, purchasable, rarity } = req.body ?? {};
			if (!name || !config || value === undefined) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required fields", HTTP_STATUS.BAD_REQUEST));
			}
			await prisma.fontCosmetic.create({
				data: { name, config, value, purchasable: purchasable ?? value > 0, rarity: rarity ?? "common" }
			});
			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /staff/store-manager/styles — 创建新样式
	app.post("/staff/store-manager/styles", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { name, config, value, rarity, purchasable } = req.body ?? {};
			if (!name || !config || value === undefined) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required fields", HTTP_STATUS.BAD_REQUEST));
			}
			await prisma.styleCosmetic.create({
				data: { name, config, value, rarity: rarity ?? "common", purchasable: purchasable ?? value > 0 }
			});
			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /staff/dashboard/store-manager/badges — 创建新徽章
	app.post("/staff/dashboard/store-manager/badges", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const { name, description, howToEarn, rarity, reward, imageUrl, type, secret } = req.body ?? {};
			if (!name) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Missing required fields", HTTP_STATUS.BAD_REQUEST));
			}
			await prisma.badge.create({
				data: { name, description: description ?? "", howToEarn: howToEarn ?? "", rarity: rarity ?? "common", reward: reward ?? "", imageUrl: imageUrl ?? "", type: type ?? "", secret: secret ?? false }
			});
			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// GET /staff/store-manager/images — 获取已上传图片列表
	app.get("/staff/store-manager/images", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const page = Math.max(1, Number.parseInt(req.query["page"] as string) || 1);
			const pageSize = Math.min(100, Math.max(1, Number.parseInt(req.query["pageSize"] as string) || 12));
			const [items, total] = await Promise.all([
				prisma.r2Image.findMany({ orderBy: { createdAt: "desc" }, skip: (page - 1) * pageSize, take: pageSize }),
				prisma.r2Image.count()
			]);
			return res.json({ items, total, hasNext: (page * pageSize) < total });
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// POST /staff/store-manager/images — 上传图片
	app.post("/staff/store-manager/images", authMiddleware, adminMiddleware, useStoreImage("image"), async (req: AuthenticatedRequest, res) => {
		try {
			const name = req.body?.name || "untitled";
			const file = (req as any).file;
			if (!file) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Image file is required", HTTP_STATUS.BAD_REQUEST));
			}
			const publicUrl = `/img/store/${file.filename}`;
			const r2Image = await prisma.r2Image.create({
				data: { name, objectKey: file.filename, publicUrl, contentType: file.mimetype, sizeBytes: file.size }
			});
			return res.json(r2Image);
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});

	// DELETE /staff/store-manager/images/:id — 删除图片
	app.delete("/staff/store-manager/images/:id", authMiddleware, adminMiddleware, async (req: AuthenticatedRequest, res) => {
		try {
			const id = Number.parseInt(req.params["id"] as string);
			if (Number.isNaN(id)) {
				return res.status(HTTP_STATUS.BAD_REQUEST)
					.json(createErrorResponse("Invalid image ID", HTTP_STATUS.BAD_REQUEST));
			}

			const image = await prisma.r2Image.findUnique({ where: { id } });
			if (!image) {
				return res.status(HTTP_STATUS.NOT_FOUND)
					.json(createErrorResponse("Image not found", HTTP_STATUS.NOT_FOUND));
			}

			await prisma.r2Image.delete({ where: { id } });

			// 删除本地文件
			const filePath = path.join(UPLOAD_DIR, image.objectKey);
			fs.unlink(filePath).catch(() => {});

			return res.status(200).json({});
		} catch (error) {
			return handleServiceError(error as Error, res);
		}
	});
}

