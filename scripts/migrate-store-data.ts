/**
 * 将 store.ts 中的硬编码 storeFrames 和 storeNames 数据迁移到数据库
 *
 * 运行: npx tsx scripts/migrate-store-data.ts
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const storeFrames = [
  { "id": 42, "name": "Headset", "imageUrl": "/img/frames/headset_bb3d8df8.png", "description": "To listen you better", "rarity": "common", "value": 10000, "createdAt": "2026-02-02T15:01:16.454806Z" },
  { "id": 41, "name": "Cool Glasses", "imageUrl": "/img/frames/cool_glasses_3158b349.png", "description": "Very cool is'nt?", "rarity": "common", "value": 20000, "createdAt": "2026-02-02T15:00:06.24087Z" },
  { "id": 13, "name": "Red Ribbons", "imageUrl": "/img/uploads/frame_red_ribbon_1a1005ef.png", "description": "Ribbons", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 14, "name": "Black Hole", "imageUrl": "/img/uploads/frame_black_hole_b5ac9e22.png", "description": "Black Hole", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 15, "name": "LGBT Pride", "imageUrl": "/img/uploads/frame_lgbt_flag_daf659e5.png", "description": "LGBT", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 16, "name": "Lesbian Pride", "imageUrl": "/img/uploads/frame_lesbian_flag_595723a7.png", "description": "Lesbian", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 17, "name": "Gay Pride", "imageUrl": "/img/uploads/frame_homo_flag_ba2208c2.png", "description": "Gay", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 18, "name": "Brazil", "imageUrl": "/img/uploads/frame_brazil_93910623.png", "description": "Brazil Mentioned", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 19, "name": "Sun", "imageUrl": "/img/uploads/frame_sun_ab9d7498.png", "description": "I m thirsty", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 20, "name": "Moon", "imageUrl": "/img/uploads/frame_moon_d5b8d301.png", "description": "Over the moon-tastic", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 21, "name": "Resistance", "imageUrl": "/img/uploads/frame_resistance_57751d88.png", "description": "The power!", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 30, "name": "Bissexual Pride", "imageUrl": "/img/uploads/frame_bisex_flag_a2245b52.png", "description": "Bissexual", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 31, "name": "Trans Pride", "imageUrl": "/img/uploads/frame_trans_flag_3d0feafb.png", "description": "Trans", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 32, "name": "Asexual Pride", "imageUrl": "/img/uploads/frame_ace_flag_91e55e48.png", "description": "Ace", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 33, "name": "Froggy", "imageUrl": "/img/uploads/frame_frog_d6d5f5f3.png", "description": "Frog", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 34, "name": "Sakura Flowers", "imageUrl": "/img/uploads/frame_sakura_d2dcd851.png", "description": "Blossom season", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 35, "name": "Straw hat", "imageUrl": "/img/uploads/frame_straw_hat_f6bc1771.png", "description": "Well... You know.", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 36, "name": "Cat ears", "imageUrl": "/img/uploads/frame_cat_ears_3291f2f9.png", "description": "Cute and furry cat ears", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 37, "name": "Light Bulb", "imageUrl": "/img/uploads/frame_lightbulb_0f403295.png", "description": "Bulb", "rarity": "legendary", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 38, "name": "Scarf & Glasses", "imageUrl": "/img/frames/scarf_&_glasses_bfba3146.png", "description": "It's really cold", "rarity": "common", "value": 25000, "createdAt": "2026-02-02T14:53:28.185644Z" },
  { "id": 39, "name": "Leaves", "imageUrl": "/img/frames/leaves_49b7c973.png", "description": "Be-leave", "rarity": "common", "value": 25000, "createdAt": "2026-02-02T14:55:10.837063Z" },
  { "id": 40, "name": "Moustache", "imageUrl": "/img/frames/moustache_2a246828.png", "description": "Very classic", "rarity": "common", "value": 25000, "createdAt": "2026-02-02T14:58:15.604502Z" }
];

const storeFonts = [
  { "id": 1000, "name": "Default", "config": "font-family: sans-serif;", "value": 0, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 3, "name": "Pacifico", "config": "font-family: Pacifico, cursive;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 4, "name": "UnifrakturMaguntia", "config": "font-family: UnifrakturMaguntia, serif;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 5, "name": "VT323", "config": "font-family: VT323, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 6, "name": "Permanent Marker", "config": "font-family: Permanent Marker, cursive;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 7, "name": "Luckiest Guy", "config": "font-family: Luckiest Guy, cursive;", "value": 25000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 8, "name": "Comic Neue", "config": "font-family: Comic Neue, cursive;", "value": 10000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 9, "name": "Young Serif", "config": "font-family: Young Serif, serif;", "value": 15000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 10, "name": "Bangers", "config": "font-family: Bangers, cursive;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 11, "name": "Redacted Script", "config": "font-family: Redacted Script, cursive;", "value": 40000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 12, "name": "Alfa Slab One", "config": "font-family: Alfa Slab One, serif;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" }
];

const storeStyles = [
  { "id": 1001, "name": "Default", "config": "color: #000000;", "value": 0, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 22, "name": "Shine bronze", "config": "color: transparent;background-image: url(\"/img/uploads/shine_bronze_7e17cb26.webp\");background-repeat: repeat;background-size: cover;background-position: center;-webkit-background-clip: text;background-clip: text;filter: drop-shadow(0.7px 0.7px 0.2px rgba(255, 158, 0, 1));", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 23, "name": "Aurora", "config": "background-image:linear-gradient(90deg,#00ffa3,#00c3ff,#ffff1c);-webkit-background-clip:text;background-clip:text;color:transparent;", "value": 15000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 24, "name": "Neon flow", "config": "background-image:linear-gradient(90deg,#ff00cc,#3333ff,#00ffcc);background-size:200% 200%;animation:gradient-flow 1.6s ease infinite;-webkit-background-clip:text;background-clip:text;color:transparent;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 25, "name": "Neon Green", "config": "color: #00ff88; text-shadow: 0 0 15px #00ff88, 0 0 30px #00ff88, 0 0 45px #00ff88;", "value": 15000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 26, "name": "Rainbow", "config": "color: transparent; background: linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff); -webkit-background-clip: text; background-clip: text;", "value": 15000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 27, "name": "Animated Rainbow", "config": "color: transparent; background: linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff); -webkit-background-clip: text; background-clip: text; background-size: 200% 100%; animation: textScrollAnimation 4s linear infinite normal;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 28, "name": "RGB", "config": "color: #00ff88; animation: textRainbowAnimation 5s linear infinite normal;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" },
  { "id": 29, "name": "LED", "config": "color: #c0c0c0; animation: textRainbowAnimation 3s linear infinite normal; text-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 30px #ff6b6b;", "value": 20000, "createdAt": "2026-01-23T14:46:53.88Z" }
];

const storeBadges = [
  { "id": 1, "name": "Pioneers", "description": "Awarded for being among the first 100.000 users to join Wplace!", "howToEarn": "Be one of the first 100.000 users to sign up on Wplace.", "rarity": "legendary", "reward": "This badge!", "imageUrl": "/img/uploads/badge_pioneers_eb6231d7.png", "type": "HONOR", "secret": false, "createdAt": "2026-01-29T04:33:11.203719Z" },
  { "id": 2, "name": "Blood Sweat and Pixels", "description": "You look at your pixel-stained hands. You are filled with determination.", "howToEarn": "Paint 1 million of pixels in Wplace.", "rarity": "rare", "reward": "5.000 droplets", "imageUrl": "/img/uploads/badge_blood_c10c4f11.png", "type": "ACHIEVEMENT", "secret": false, "createdAt": "2026-01-29T04:33:11.203719Z" },
  { "id": 3, "name": "Big Buckets", "description": "Work it harder, make it better, Do it faster, makes the bucket larger", "howToEarn": "Have 1000 or more max paints charges", "rarity": "rare", "reward": "5.000 droplets", "imageUrl": "/img/uploads/badge_big_bucket_f857a4fb.png", "type": "ACHIEVEMENT", "secret": false, "createdAt": "2026-01-29T04:33:11.203719Z" },
  { "id": 4, "name": "Secret Badge", "description": "Secret badge", "howToEarn": "Secret badge", "rarity": "common", "reward": "Secret badge", "imageUrl": "/img/badges/question_mark.png", "type": "", "secret": true, "createdAt": "2026-01-29T04:33:11.203719Z" }
];

async function main() {
	console.log("Migrating frames...");
	for (const f of storeFrames) {
		await prisma.frame.upsert({
			where: { id: f.id },
			update: { name: f.name, imageUrl: f.imageUrl, description: f.description, rarity: f.rarity, value: f.value },
			create: { id: f.id, name: f.name, imageUrl: f.imageUrl, description: f.description, rarity: f.rarity, value: f.value, purchasable: true, createdAt: new Date(f.createdAt) }
		});
	}
	console.log(`  ✓ ${storeFrames.length} frames`);

	console.log("Migrating fonts...");
	for (const f of storeFonts) {
		await prisma.fontCosmetic.upsert({
			where: { id: f.id },
			update: { name: f.name, config: f.config, value: f.value },
			create: { id: f.id, name: f.name, config: f.config, value: f.value, purchasable: f.value > 0, createdAt: new Date(f.createdAt) }
		});
	}
	console.log(`  ✓ ${storeFonts.length} fonts`);

	console.log("Migrating styles...");
	for (const s of storeStyles) {
		await prisma.styleCosmetic.upsert({
			where: { id: s.id },
			update: { name: s.name, config: s.config, value: s.value },
			create: { id: s.id, name: s.name, config: s.config, value: s.value, purchasable: s.value > 0, createdAt: new Date(s.createdAt) }
		});
	}
	console.log(`  ✓ ${storeStyles.length} styles`);

	console.log("Migrating badges...");
	for (const b of storeBadges) {
		await prisma.badge.upsert({
			where: { id: b.id },
			update: { name: b.name, description: b.description, howToEarn: b.howToEarn, rarity: b.rarity, reward: b.reward, imageUrl: b.imageUrl, type: b.type, secret: b.secret },
			create: { id: b.id, name: b.name, description: b.description, howToEarn: b.howToEarn, rarity: b.rarity, reward: b.reward, imageUrl: b.imageUrl, type: b.type, secret: b.secret, createdAt: new Date(b.createdAt) }
		});
	}
	console.log(`  ✓ ${storeBadges.length} badges`);

	console.log("Done!");
}

main()
	.catch(console.error)
	.finally(() => prisma.$disconnect());
