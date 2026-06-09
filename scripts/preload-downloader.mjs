/**
 * 预加载文件下载脚本
 *
 * 从 service-worker.js 提取的预加载文件列表，批量下载所有静态资源。
 * 支持 Cookie / 自定义请求头 以绕过 Cloudflare 等防护。
 *
 * 用法:
 *   node scripts/preload-downloader.mjs <base-url> [output-dir] [选项]
 *
 * 选项:
 *   -c, --cookie <file>     Cookie 文件路径（支持 Netscape 格式或纯文本格式）
 *   -H, --header <k:v>      自定义请求头，可重复使用
 *   -u, --user-agent <str>  自定义 User-Agent
 *   --referer <url>         自定义 Referer
 *
 * 示例:
 *   node scripts/preload-downloader.mjs https://backend.wplace.live ./preloaded-assets -c ./cookies.txt
 *   node scripts/preload-downloader.mjs https://backend.wplace.live ./preloaded-assets -c ./cookies.txt -H "Origin: https://wplace.live" --referer https://wplace.live/
 *   node scripts/preload-downloader.mjs https://backend.wplace.live ./preloaded-assets -c ./cookies.txt -u "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
 */

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { get as httpsGet } from "node:https";
import { request as httpRequest } from "node:http";

// ============================================================
// 从 frontend/service-worker.js 提取的预加载文件列表
// ============================================================

/** 根据 location.pathname 计算基础路径前缀 */
function getBasePrefix(basePath) {
	const parts = basePath.split("/").filter(Boolean);
	// service-worker.js 的代码: location.pathname.split("/").slice(0, -1).join("/")
	// 如果路径末尾有文件名，去掉最后一段
	if (basePath.endsWith("/")) return basePath.slice(0, -1);
	if (path.extname(basePath)) return path.dirname(basePath);
	return basePath;
}

// ---- na: 不可变构建资源 (JS/CSS/字体/WASM/图片) ----
const na = [
	"/_app/immutable/entry/app.CNYAqyaS.js",
	"/_app/immutable/nodes/0.DIa6pPiN.js",
	"/_app/immutable/assets/0.CKJ6djnr.css",
	"/_app/immutable/assets/flags.a2kmUSbF.webp",
	"/_app/immutable/assets/flags@2x.gR6KPp3x.webp",
	"/_app/immutable/assets/Geist-cyrillic.CHSlOQsW.woff2",
	"/_app/immutable/assets/Geist-latin-ext.DMtmJ5ZE.woff2",
	"/_app/immutable/assets/Geist-latin.Dg_dQHbK.woff2",
	"/_app/immutable/assets/GeistMono-cyrillic.BZdD_g9V.woff2",
	"/_app/immutable/assets/GeistMono-latin-ext.b6lpi8_2.woff2",
	"/_app/immutable/assets/GeistMono-latin.Cjtb1TV-.woff2",
	"/_app/immutable/assets/PixelifySans-cyrillic.CPPz0Qvd.woff2",
	"/_app/immutable/assets/PixelifySans-latin.vdc2vUDH.woff2",
	"/_app/immutable/assets/NotoColorEmoji-flags.ClvgErYz.woff2",
	"/_app/immutable/nodes/1.BNMZ1App.js",
	"/_app/immutable/nodes/10.DvEhzwo_.js",
	"/_app/immutable/nodes/11.BDX-2k2C.js",
	"/_app/immutable/nodes/12.CYh0uttE.js",
	"/_app/immutable/assets/12.C8fZg4d2.css",
	"/_app/immutable/nodes/13.Cq8KZlJa.js",
	"/_app/immutable/nodes/14.CxkiEdd0.js",
	"/_app/immutable/assets/14.CjkSf_dE.css",
	"/_app/immutable/nodes/15.CUo5djkK.js",
	"/_app/immutable/nodes/16.BIKuwdqH.js",
	"/_app/immutable/nodes/17.iXeaYom8.js",
	"/_app/immutable/nodes/18.CFxop01b.js",
	"/_app/immutable/nodes/19.fYuSqr9D.js",
	"/_app/immutable/nodes/2.B7W5ocNk.js",
	"/_app/immutable/nodes/20.DAnZy7kN.js",
	"/_app/immutable/nodes/21.C_wmGyUx.js",
	"/_app/immutable/nodes/22.Tkn2lVCB.js",
	"/_app/immutable/nodes/23.D5nRNFqN.js",
	"/_app/immutable/nodes/24.Cy2TuCjn.js",
	"/_app/immutable/nodes/25.eorDuDRf.js",
	"/_app/immutable/nodes/26.DTLFxTsx.js",
	"/_app/immutable/nodes/27.V9xAA90E.js",
	"/_app/immutable/nodes/28.DKJR7oea.js",
	"/_app/immutable/nodes/29.D-Oil6YE.js",
	"/_app/immutable/assets/29.aY13Cjc7.css",
	"/_app/immutable/nodes/3.t-C1QGPV.js",
	"/_app/immutable/nodes/30.Aj9-ve-5.js",
	"/_app/immutable/nodes/31.CjCFsXxt.js",
	"/_app/immutable/nodes/32.BaM7dV7i.js",
	"/_app/immutable/nodes/33.CrGpdHjx.js",
	"/_app/immutable/nodes/34.CTzxC_t6.js",
	"/_app/immutable/nodes/35.jghFrgpY.js",
	"/_app/immutable/nodes/36.D8ML3dGg.js",
	"/_app/immutable/nodes/4.Uv6NPuwN.js",
	"/_app/immutable/nodes/5.DBl3Zv-y.js",
	"/_app/immutable/assets/5.DdouWVGS.css",
	"/_app/immutable/assets/squoosh_png_bg.BsfxGNEB.wasm",
	"/_app/immutable/nodes/6.4QmA5JbP.js",
	"/_app/immutable/nodes/7.B9M9c55x.js",
	"/_app/immutable/nodes/8.DQGIUbhE.js",
	"/_app/immutable/nodes/9.qY48VnnM.js",
	"/_app/immutable/chunks/-AhnqyAZ.js",
	"/_app/immutable/chunks/2Od2egA-.js",
	"/_app/immutable/chunks/5hzFOZ02.js",
	"/_app/immutable/chunks/B-TDV2C3.js",
	"/_app/immutable/chunks/B0JoJohi.js",
	"/_app/immutable/chunks/B1IGqgUU.js",
	"/_app/immutable/chunks/B23NG5RV.js",
	"/_app/immutable/chunks/B6k04QXL.js",
	"/_app/immutable/chunks/B7_gUtXa.js",
	"/_app/immutable/chunks/B7vrJrEX.js",
	"/_app/immutable/chunks/BAR6D20Q.js",
	"/_app/immutable/chunks/BFlSXuix.js",
	"/_app/immutable/chunks/BI5KFv7B.js",
	"/_app/immutable/chunks/BJMWNMzA.js",
	"/_app/immutable/chunks/BKBS1EOp.js",
	"/_app/immutable/chunks/BKLQopM3.js",
	"/_app/immutable/chunks/BKUInVTD.js",
	"/_app/immutable/chunks/BRekz1nD.js",
	"/_app/immutable/chunks/BTQgEZ2f.js",
	"/_app/immutable/chunks/BUvYSFTd.js",
	"/_app/immutable/chunks/BVnIq1Qc.js",
	"/_app/immutable/chunks/BVz9wMiQ.js",
	"/_app/immutable/chunks/BZcJYfQJ.js",
	"/_app/immutable/chunks/B_Oz03f8.js",
	"/_app/immutable/chunks/BbJIVHXi.js",
	"/_app/immutable/chunks/Bbg0KEAn.js",
	"/_app/immutable/chunks/BdBvrK65.js",
	"/_app/immutable/chunks/BdCqcZGB.js",
	"/_app/immutable/chunks/BhCkpOlh.js",
	"/_app/immutable/chunks/Bskxkpxm.js",
	"/_app/immutable/chunks/BvTqCSUg.js",
	"/_app/immutable/chunks/Bvwls8qX.js",
	"/_app/immutable/chunks/BxXtB1-F.js",
	"/_app/immutable/chunks/ByH6mgv9.js",
	"/_app/immutable/chunks/Bzak7iHL.js",
	"/_app/immutable/chunks/C-cxnuKD.js",
	"/_app/immutable/chunks/C-dU7195.js",
	"/_app/immutable/chunks/C1Rrr0ww.js",
	"/_app/immutable/chunks/C4Z8R_7N.js",
	"/_app/immutable/chunks/C5ukCcxH.js",
	"/_app/immutable/chunks/C6d2kgDd.js",
	"/_app/immutable/chunks/C9bY2KxP.js",
	"/_app/immutable/chunks/CD0Nhe1Q.js",
	"/_app/immutable/chunks/CEOl-OEM.js",
	"/_app/immutable/chunks/CFl7M2B7.js",
	"/_app/immutable/chunks/CKCBxNBJ.js",
	"/_app/immutable/chunks/CLEdZXaK.js",
	"/_app/immutable/chunks/CPcsbTWB.js",
	"/_app/immutable/chunks/CQTJJLB2.js",
	"/_app/immutable/assets/PatchNote.thqmqUms.css",
	"/_app/immutable/chunks/CT-mvjFm.js",
	"/_app/immutable/chunks/CTKAXTri.js",
	"/_app/immutable/chunks/CW0X7odH.js",
	"/_app/immutable/chunks/C_mo-lyU.js",
	"/_app/immutable/chunks/CbUCGNiK.js",
	"/_app/immutable/chunks/CbfqdBEM.js",
	"/_app/immutable/chunks/CgYJp4GH.js",
	"/_app/immutable/chunks/Ch38BS2u.js",
	"/_app/immutable/chunks/CiRk4_t8.js",
	"/_app/immutable/assets/ProfileAvatarWithLevel.2kDYVt-Y.css",
	"/_app/immutable/chunks/ClbV77Km.js",
	"/_app/immutable/chunks/Cme64dX3.js",
	"/_app/immutable/chunks/CoUk6ftS.js",
	"/_app/immutable/assets/Confetti.DAd1JYRv.css",
	"/_app/immutable/chunks/Cp-hTSeP.js",
	"/_app/immutable/chunks/CqMJ2HFU.js",
	"/_app/immutable/chunks/CqqDbOqG.js",
	"/_app/immutable/chunks/Cqr318Ee.js",
	"/_app/immutable/chunks/CrUWeZvY.js",
	"/_app/immutable/chunks/CsIr9lN0.js",
	"/_app/immutable/chunks/Cskb-8mx.js",
	"/_app/immutable/chunks/CtsjoaOH.js",
	"/_app/immutable/chunks/CvERtPUr.js",
	"/_app/immutable/chunks/CwftxlTm.js",
	"/_app/immutable/chunks/CyhDw_yt.js",
	"/_app/immutable/chunks/Czaeq32u.js",
	"/_app/immutable/chunks/D-3tY2dH.js",
	"/_app/immutable/assets/notification.CPyrWqU1.mp3",
	"/_app/immutable/chunks/D4oMlC_L.js",
	"/_app/immutable/chunks/D6_ahSxh.js",
	"/_app/immutable/chunks/D93kC7yH.js",
	"/_app/immutable/chunks/DBS6HGbD.js",
	"/_app/immutable/chunks/DEsezbwr.js",
	"/_app/immutable/assets/PatchNotesHistory.DshEs1En.css",
	"/_app/immutable/chunks/DIPg6T2F.js",
	"/_app/immutable/chunks/DIbtzbsw.js",
	"/_app/immutable/chunks/DKgxZV0V.js",
	"/_app/immutable/chunks/DKkygPh8.js",
	"/_app/immutable/chunks/DLrplejM.js",
	"/_app/immutable/chunks/DMoMXVXI.js",
	"/_app/immutable/chunks/DNTW03EA.js",
	"/_app/immutable/chunks/DPEu3dBb.js",
	"/_app/immutable/chunks/DU-2YUMG.js",
	"/_app/immutable/assets/pawtect_wasm_bg.Ckfht_86.wasm",
	"/_app/immutable/chunks/DX1r3K5G.js",
	"/_app/immutable/chunks/DXMrnaZG.js",
	"/_app/immutable/chunks/DYsZ-0Yb.js",
	"/_app/immutable/chunks/D_v-WRXI.js",
	"/_app/immutable/chunks/DaX0l6qk.js",
	"/_app/immutable/chunks/DbEN2Ffr.js",
	"/_app/immutable/chunks/DbF8UOi7.js",
	"/_app/immutable/chunks/Dbe4PVAU.js",
	"/_app/immutable/chunks/DgrZ_rdn.js",
	"/_app/immutable/assets/griefing1.mrf_QTk2.png",
	"/_app/immutable/assets/griefing2.HP5n4LVA.png",
	"/_app/immutable/assets/pgriefing1.Cxw7Oxbm.png",
	"/_app/immutable/assets/pgriefing2.cEou4X11.png",
	"/_app/immutable/assets/borde1.2HTtxzDt.png",
	"/_app/immutable/assets/borde2.CN89IOz0.png",
	"/_app/immutable/assets/borde4.D9VfQfkE.png",
	"/_app/immutable/assets/borde5.DkmTTj5N.png",
	"/_app/immutable/assets/borde6.CtRHeorl.png",
	"/_app/immutable/assets/mapclean1.CXzD9GTn.png",
	"/_app/immutable/assets/mapclean2.B1--Lv8s.png",
	"/_app/immutable/assets/mapclean3.zxc4kxhZ.png",
	"/_app/immutable/assets/ngriefing1.CQEoQ-5k.png",
	"/_app/immutable/assets/ngriefing2.CA1282Nq.png",
	"/_app/immutable/assets/ngriefing3.l-WuAkT6.png",
	"/_app/immutable/assets/Dialog.DNSr87Ge.css",
	"/_app/immutable/chunks/DlX_V98Q.js",
	"/_app/immutable/chunks/Dp1pzeXC.js",
	"/_app/immutable/chunks/DrImJxxA.js",
	"/_app/immutable/chunks/DyQ9pPD3.js",
	"/_app/immutable/chunks/DzNOOKXC.js",
	"/_app/immutable/chunks/GDUid2r-.js",
	"/_app/immutable/chunks/IWxsS1m0.js",
	"/_app/immutable/chunks/Icl9dwnj.js",
	"/_app/immutable/chunks/JKnWQwH6.js",
	"/_app/immutable/chunks/K9AHFDoV.js",
	"/_app/immutable/chunks/L80GiOtt.js",
	"/_app/immutable/chunks/MHTwTb88.js",
	"/_app/immutable/chunks/NTgY2kck.js",
	"/_app/immutable/chunks/NZukRHw1.js",
	"/_app/immutable/chunks/OvJd4Dh6.js",
	"/_app/immutable/chunks/RamoUxFG.js",
	"/_app/immutable/chunks/SpO575Nf.js",
	"/_app/immutable/chunks/U_H6LM6d.js",
	"/_app/immutable/chunks/WCizg6Ng.js",
	"/_app/immutable/chunks/WmcBTg9_.js",
	"/_app/immutable/chunks/XS4kEunf.js",
	"/_app/immutable/chunks/a6V0AsO7.js",
	"/_app/immutable/chunks/jEDRT1k8.js",
	"/_app/immutable/chunks/kMrz8wtr.js",
	"/_app/immutable/chunks/lSLusnBY.js",
	"/_app/immutable/chunks/mOmV0vnx.js",
	"/_app/immutable/chunks/og9Js_3x.js",
	"/_app/immutable/chunks/p2ZQY-1m.js",
	"/_app/immutable/chunks/rtlrM2iK.js",
	"/_app/immutable/chunks/ryCN0oNh.js",
	"/_app/immutable/chunks/sR4NyGSS.js",
	"/_app/immutable/chunks/srjLMDSD.js",
	"/_app/immutable/chunks/xlnJ43Nf.js",
	"/_app/immutable/chunks/yJuVUJnc.js",
	"/_app/immutable/chunks/yew7vgrr.js",
	"/_app/immutable/entry/start.D8VXZ2Y4.js",
	"/_app/immutable/chunks/3P6Si2Fo.js",
];

// ---- ta: 静态资源 (图片/图标/配置文件) ----
const ta = [
	"/.well-known/assetlinks.json",
	"/.well-known/security.txt",
	"/favicon.ico",
	"/img/10k.png",
	"/img/1k.png",
	"/img/2_presents.png",
	"/img/5k.png",
	"/img/Paint_Charges.png",
	"/img/apple-touch-icon.png",
	"/img/auto_recharge.png",
	"/img/badges/question_mark.png",
	"/img/coal.png",
	"/img/events/badge-1/announcement-image-en.png",
	"/img/events/badge-1/announcement-image-pt.png",
	"/img/events/badge-1/reference-image.png",
	"/img/events/r-wplaced/announcement-image.jpeg",
	"/img/events/r-wplaced/r-wplaced-logo.png",
	"/img/favicon-96x96.png",
	"/img/flag.png",
	"/img/frame.png",
	"/img/frames/2025_christmas_border.png",
	"/img/frames/2025_halloween_border.png",
	"/img/frames/frame_ace_flag.png",
	"/img/frames/frame_bisex_flag.png",
	"/img/frames/frame_black_hole.png",
	"/img/frames/frame_brazil.png",
	"/img/frames/frame_cat_ears.png",
	"/img/frames/frame_cool_glasses.png",
	"/img/frames/frame_frog.png",
	"/img/frames/frame_headset.png",
	"/img/frames/frame_homo_flag.png",
	"/img/frames/frame_leaves.png",
	"/img/frames/frame_lesbian_flag.png",
	"/img/frames/frame_lgbt_flag.png",
	"/img/frames/frame_lightbulb.png",
	"/img/frames/frame_moon.png",
	"/img/frames/frame_moustache.png",
	"/img/frames/frame_red_ribbon.png",
	"/img/frames/frame_resistance.png",
	"/img/frames/frame_sakura.png",
	"/img/frames/frame_scarf_&_glasses.png",
	"/img/frames/frame_straw_hat.png",
	"/img/frames/frame_sun.png",
	"/img/frames/frame_trans_flag.png",
	"/img/frames/old_2025_christmas_border.png",
	"/img/frames/old_2025_halloween_border.png",
	"/img/frames/patch_1_2_0/frame_100k.png",
	"/img/frames/patch_1_2_0/frame_1m.png",
	"/img/frames/patch_1_2_0/frame_500k.png",
	"/img/frames/patch_1_2_0/frame_astronaut.png",
	"/img/frames/patch_1_2_0/frame_cap_and_spheres.png",
	"/img/frames/patch_1_2_0/frame_cool_hoodie.png",
	"/img/frames/patch_1_2_0/frame_diamond_helmett.png",
	"/img/frames/patch_1_2_0/frame_dragon.png",
	"/img/frames/patch_1_2_0/frame_elf_cap.png",
	"/img/frames/patch_1_2_0/frame_empty_hero.png",
	"/img/frames/patch_1_2_0/frame_flying_berry.png",
	"/img/frames/patch_1_2_0/frame_hair_with_flower.png",
	"/img/frames/patch_1_2_0/frame_horse.png",
	"/img/frames/patch_1_2_0/frame_loom_choir.png",
	"/img/frames/patch_1_2_0/frame_party_bunny.png",
	"/img/frames/patch_1_2_0/frame_scout_hat.png",
	"/img/horse/horse.png",
	"/img/logo-512x512.png",
	"/img/logo.png",
	"/img/logo.svg",
	"/img/og-image-mobile.png",
	"/img/og-image.png",
	"/img/pwa-country-leaderboard-mobile.png",
	"/img/pwa-kiev-mobile.png",
	"/img/pwa-paint-heart-mobile.png",
	"/img/pwa-void-mobile.png",
	"/img/web-app-manifest-192x192.png",
	"/img/web-app-manifest-512x512.png",
	"/site.webmanifest",
];

// ============================================================
// 下载逻辑（支持 Cloudflare 绕过）
// ============================================================

const allFiles = [...new Set([...na, ...ta])];

// ---- 解析命令行参数 ----
function parseArgs(args) {
	const opts = {
		cookieFile: null,
		headers: {},
		outputDir: "./downloaded-assets",
	};

	let i = 0;
	// 前两个位置参数: base-url [output-dir]
	if (i < args.length && !args[i].startsWith("-")) {
		opts.baseUrl = args[i++];
	}
	if (i < args.length && !args[i].startsWith("-")) {
		opts.outputDir = path.resolve(args[i++]);
	}

	while (i < args.length) {
		const arg = args[i];
		switch (arg) {
			case "-c":
			case "--cookie":
				opts.cookieFile = args[++i];
				break;
			case "-H":
			case "--header": {
				const kv = args[++i];
				const idx = kv.indexOf(":");
				if (idx > 0) {
					opts.headers[kv.slice(0, idx).trim()] = kv.slice(idx + 1).trim();
				}
				break;
			}
			case "-u":
			case "--user-agent":
				opts.headers["User-Agent"] = args[++i];
				break;
			case "--referer":
				opts.headers["Referer"] = args[++i];
				break;
			default:
				if (arg.startsWith("--")) {
					// 跳过未知选项
					i++;
				}
		}
		i++;
	}
	return opts;
}

/** 从文件中读取 Cookie（支持 Netscape / 纯文本格式） */
function loadCookies(filePath) {
	if (!filePath || !fs.existsSync(filePath)) return "";
	const raw = fs.readFileSync(filePath, "utf-8");
	const lines = raw.split(/\r?\n/);
	const cookies = [];

	for (const line of lines) {
		const trimmed = line.trim();
		// 跳过注释和空行
		if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("//")) continue;

		// Netscape cookie 格式:
		// .domain.com	TRUE	/	FALSE	1735689600	name	value
		const netscape = trimmed.split("\t");
		if (netscape.length >= 7) {
			const name = netscape[5]?.trim();
			const value = netscape[6]?.trim();
			if (name) cookies.push(`${name}=${value}`);
			continue;
		}

		// 纯文本格式: name=value 或 name=value; name2=value2
		const parts = trimmed.split(";");
		for (const part of parts) {
			const eq = part.trim().indexOf("=");
			if (eq > 0) {
				cookies.push(part.trim());
			}
		}
	}

	return [...new Set(cookies)].join("; ");
}

/** 默认请求头 — 模拟 Chrome 浏览器 */
function getDefaultHeaders(baseUrl) {
	const urlObj = new URL(baseUrl);
	const origin = urlObj.origin;
	return {
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
		Accept:
			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
		"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
		"Accept-Encoding": "gzip, deflate",
		Referer: `${origin}/`,
		Origin: origin,
		"Sec-Fetch-Dest": "document",
		"Sec-Fetch-Mode": "navigate",
		"Sec-Fetch-Site": "none",
		"Sec-Fetch-User": "?1",
		"Upgrade-Insecure-Requests": "1",
		"Cache-Control": "no-cache",
		Pragma: "no-cache",
		"sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": '"Windows"',
	};
}

function fetchUrl(url, cookieStr, customHeaders) {
	return new Promise((resolve, reject) => {
		const urlObj = new URL(url);
		const isHttps = url.startsWith("https");
		const proto = isHttps ? httpsGet : httpRequest;

		// 合并请求头
		const headers = { ...getDefaultHeaders(url), ...customHeaders };
		if (cookieStr) {
			headers.Cookie = cookieStr;
		}

		const options = {
			hostname: urlObj.hostname,
			port: urlObj.port || (isHttps ? 443 : 80),
			path: urlObj.pathname + urlObj.search,
			method: "GET",
			headers,
			timeout: 30000,
			// 忽略 SSL 证书错误（部分 CDN 自签名）
			rejectUnauthorized: false,
		};

		const req = proto(options, (res) => {
			// 处理重定向
			if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
				const redirectUrl = new URL(res.headers.location, url).href;
				return fetchUrl(redirectUrl, cookieStr, customHeaders)
					.then(resolve)
					.catch(reject);
			}

			// Cloudflare 检测到爬虫时返回 403 / 503
			if (res.statusCode === 403 || res.statusCode === 503) {
				reject(new Error(`HTTP ${res.statusCode} — 被 Cloudflare 拦截，请检查 Cookie 有效性`));
				return;
			}
			if (res.statusCode !== 200) {
				reject(new Error(`HTTP ${res.statusCode}`));
				return;
			}

			const chunks = [];
			res.on("data", (chunk) => chunks.push(chunk));
			res.on("end", () => {
				const raw = Buffer.concat(chunks);
				const encoding = res.headers["content-encoding"];

				if (encoding === "gzip") {
					zlib.gunzip(raw, (err, decompressed) => {
						if (err) reject(err);
						else resolve(decompressed);
					});
				} else if (encoding === "deflate") {
					zlib.inflate(raw, (err, decompressed) => {
						if (err) reject(err);
						else resolve(decompressed);
					});
				} else {
					resolve(raw);
				}
			});
		});

		req.on("error", reject);
		req.on("timeout", () => {
			req.destroy();
			reject(new Error("Timeout (30s)"));
		});
	});
}

async function downloadFile(baseUrl, filePath, outputDir, cookieStr, customHeaders) {
	const url = `${baseUrl.replace(/\/+$/, "")}${filePath}`;
	const outPath = path.join(outputDir, filePath.replace(/^\//, ""));
	const outDir = path.dirname(outPath);

	fs.mkdirSync(outDir, { recursive: true });

	try {
		const data = await fetchUrl(url, cookieStr, customHeaders);
		fs.writeFileSync(outPath, data);
		return { success: true, size: data.length };
	} catch (err) {
		return { success: false, error: err.message };
	}
}

async function main() {
	const opts = parseArgs(process.argv.slice(2));

	if (!opts.baseUrl) {
		console.error("用法: node scripts/preload-downloader.mjs <base-url> [output-dir] [选项]");
		console.error("");
		console.error("选项:");
		console.error("  -c, --cookie <file>     Cookie 文件路径");
		console.error("  -H, --header <k:v>      自定义请求头");
		console.error("  -u, --user-agent <str>  自定义 User-Agent");
		console.error("  --referer <url>         自定义 Referer");
		console.error("");
		console.error("示例:");
		console.error("  node scripts/preload-downloader.mjs https://backend.wplace.live ./preloaded-assets -c ./cookies.txt");
		console.error("  node scripts/preload-downloader.mjs https://backend.wplace.live -c ./cookies.txt -H \"Origin: https://wplace.live\"");
		process.exit(1);
	}

	// 加载 Cookie
	const cookieStr = opts.cookieFile ? loadCookies(opts.cookieFile) : "";
	const hasCookie = !!cookieStr;

	console.log("=".repeat(62));
	console.log("  Openplace 预加载文件下载器");
	console.log("=".repeat(62));
	console.log(`  源地址:      ${opts.baseUrl}`);
	console.log(`  输出目录:    ${opts.outputDir}`);
	console.log(`  文件总数:    ${allFiles.length}`);
	console.log(`    ├ na (构建资源): ${na.length}`);
	console.log(`    └ ta (静态资源): ${ta.length}`);
	console.log(`  Cookie:      ${hasCookie ? "✔ 已加载" : "✘ 未提供（可能被 Cloudflare 拦截）"}`);
	if (hasCookie) {
		const preview = cookieStr.length > 60 ? cookieStr.slice(0, 60) + "..." : cookieStr;
		console.log(`               ${preview}`);
	}
	const extraHeaders = Object.keys(opts.headers);
	if (extraHeaders.length > 0) {
		console.log(`  自定义请求头: ${extraHeaders.length} 个`);
		for (const k of extraHeaders) {
			console.log(`    ${k}: ${opts.headers[k]}`);
		}
	}
	console.log("=".repeat(62));
	console.log("");

	fs.mkdirSync(opts.outputDir, { recursive: true });

	let successCount = 0;
	let failCount = 0;
	const errors = [];

	for (let i = 0; i < allFiles.length; i++) {
		const filePath = allFiles[i];
		const progress = `[${i + 1}/${allFiles.length}]`;
		process.stdout.write(`${progress} ${filePath} ... `);

		const result = await downloadFile(
			opts.baseUrl,
			filePath,
			opts.outputDir,
			cookieStr,
			opts.headers,
		);

		if (result.success) {
			const sizeKb = (result.size / 1024).toFixed(1);
			process.stdout.write(`\x1b[32m✔ ${sizeKb}KB\x1b[0m\n`);
			successCount++;
		} else {
			process.stdout.write(`\x1b[31m✘ ${result.error}\x1b[0m\n`);
			failCount++;
			errors.push({ file: filePath, error: result.error });
		}
	}

	console.log("");
	console.log("=".repeat(62));
	console.log(`  下载完成!`);
	console.log(`  成功: ${successCount}  /  失败: ${failCount}`);
	if (errors.length > 0) {
		console.log("");
		console.log("  失败列表:");
		for (const { file, error } of errors) {
			console.log(`    ✘ ${file}  →  ${error}`);
		}
	}
	console.log("=".repeat(62));
}

main().catch(console.error);
