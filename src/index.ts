import dotenv from "dotenv";
dotenv.config();

// 设置 Node.js 进程时区为东八区，使 new Date() 与 MariaDB 的 NOW() 一致
// 避免 paintedAt > lastUpdatedAt 等跨系统时间比较因时区偏差出错
process.env.TZ = "Asia/Shanghai";

import { App, Handler, Response } from "@tinyhttp/app";
import { cookieParser } from "@tinyhttp/cookie-parser";
import fs from "fs/promises";
import { ServerResponse } from "http";
import { createErrorResponse } from "./utils/response.js";
import { json } from "milliparsec";
import sirv from "sirv";
import admin from "./routes/admin.js";
import permission from "./routes/permission.js";
import alliance from "./routes/alliance.js";
import auth from "./routes/auth.js";
import autocomplete from "./routes/autocomplete.js";
import challenge from "./routes/challenge.js";
import checkrobots from "./routes/checkrobots.js";
import discord from "./routes/discord.js";
import favoriteLocation from "./routes/favorite-location.js";
import health from "./routes/health.js";
import leaderboard from "./routes/leaderboard.js";
import me from "./routes/me.js";
import moderator from "./routes/moderator.js";
import notification from "./routes/notification.js";
import payment from "./routes/payment.js";
import pixel from "./routes/pixel.js";
import reportUser from "./routes/report-user.js";
import store from "./routes/store.js";
import stufftools from "./routes/stufftools.js";
import anticheat from "./routes/anticheat.js";
import appeal from "./routes/appeal.js";
import auditLog from "./routes/audit-log.js";
import reversals from "./routes/reversals.js";
import { leaderboardService } from "./services/leaderboard.js";
import { discordBot } from "./discord/bot.js";

const isDev = process.env["NODE_ENV"] !== "production";

const noMatchPage = await fs.readFile("./frontend/404.html", "utf8");

const app = new App({
	settings: {
		networkExtensions: true,
		xPoweredBy: false
	},

	noMatchHandler: async (_req, res) => {
		return res.status(404)
			.set("Content-Type", "text/html")
			.send(noMatchPage);
	},

	onError: async (err, _req, res) => {
		console.error(`[${new Date().toISOString()}] Unhandled error:`, err?.stack || err?.message || err);
		try {
			res.status(500)
				.json(createErrorResponse("Internal Server Error", 500));
		} catch {
			// res may already be closed
		}
	}
});

// Fix IP address handling early to prevent @tinyhttp errors
app.use((req, _res, next) => {
	// Ensure req.ip is always a valid IP address
	let ip = req.get("cf-connecting-ip") as string ??
	         req.get("x-forwarded-for") as string ??
	         req.connection?.remoteAddress ??
	         req.ip ??
	         "127.0.0.1";

	// Clean up IP address (remove port, handle multiple IPs)
	if (ip && ip.includes(",")) {
		ip = ip.split(",")[0]?.trim() ?? "";
	}
	if (ip && ip.includes(":")) {
		const parts = ip.split(":");
		ip = parts.length > 2
			? parts.join(":") // IPv6
			: parts[0] ?? ""; // IPv4 with port
	}

	// Validate IP format
	if (!ip || ip.length < 7 || (!ip.includes(".") && !ip.includes(":"))) {
		ip = "127.0.0.1";
	}

	req.ip = ip;
	next?.();
});

app.use(cookieParser());

const jsonMiddleware = json({
	payloadLimit: 50 * 1024 * 1024 // 50 MB
});

app.use((_req, res, next) => {
	res.set("cache-control", "private, must-revalidate");
	next?.();
});

app.use((req, res, next) => {
	// 如果是 GET 或 HEAD 请求，根本不需要解析 body，直接放行
	if (["GET", "HEAD"].includes(req.method ?? "")) {
		return next?.();
	}

	const contentType = req.get("content-type")?.split(";").at(0) ?? "";

	switch (contentType) {
	case "multipart/form-data":
		return next?.();

	case "application/json":
	case "text/plain":
	case "": // 👈 🚀 新增：如果前端完全没传 Content-Type，也尝试用 JSON 解析器捞一把
		try {
			return jsonMiddleware(req, res, next);
		} catch (error) {
			console.warn(`[${new Date().toISOString()}] JSON parsing error:`, error);
			return res.status(400).json({ error: "Invalid JSON format" });
		}
	
	default:
		// 如果是其它的类型（比如 urlencoded），但你想防患于未然，可以在这里为 req.body 挂个空对象
		req.body = req.body ?? {};
		return next?.();
	}
});

// Logging
app.use((req, _res, next) => {
	// Log suspicious requests
	if (req.body && typeof req.body === "string" && req.body.length > 0) {
		console.warn(`[${new Date()
			.toISOString()}] Suspicious request body from ${req.ip} to ${req.method} ${req.path}:`, req.body.slice(0, 100));
	}
	return next?.();
});

// Strip /api prefix from paths for frontend2
app.use((req, _res, next) => {
	if (req.path.startsWith("/api")) {
		req.url = req.url.slice(4);
	}
	return next?.();
});

// CORS — 完美允许所有源跨域访问（兼容 Cookie 凭证）
app.use((req, res, next) => {
	// 动态获取当前请求的源 (Origin)
	const origin = req.headers["origin"] as string | undefined;

	if (origin) {
		// 动态将当前请求的源设置为允许的源，实现“允许所有源”的效果
		res.setHeader("Access-Control-Allow-Origin", origin);
	} else {
		// 如果请求没有带 origin（比如移动端原生 App 或普通浏览器直接内页访问），可以兜底写 * // 但由于下面开启了 Credentials，绝大多数浏览器环境只要有跨域，都会带上 origin
		res.setHeader("Access-Control-Allow-Origin", "*");
	}

	// 允许携带 Cookie/凭证
	res.setHeader("Access-Control-Allow-Credentials", "true");
	
	// 允许的常规 HTTP 方法
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
	
	// 允许的前端自定义 Header 头（确保把你前端用到的所有自定义头都写在这里）
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Cookie, X-Requested-With");
	
	// 预检请求（OPTIONS）的缓存时间，单位为秒（86400秒 = 24小时）
	res.setHeader("Access-Control-Max-Age", "86400");

	// 拦截并立即响应浏览器的 OPTIONS 预检请求，防止其向下漂移到业务路由
	if (req.method === "OPTIONS") {
		res.statusCode = 204;
		res.end("");
		return;
	}

	// 🔴 极其重要：放行正常的 GET/POST 等请求，让其进入后续的业务路由
	next?.();
});


admin(app);
permission(app);
alliance(app);
auth(app);
autocomplete(app);
challenge(app);
checkrobots(app);
discord(app);
favoriteLocation(app);
health(app);
leaderboard(app);
me(app);
moderator(app);
notification(app);
payment(app);
pixel(app);
stufftools(app);
reportUser(app);
anticheat(app);
appeal(app);
auditLog(app);
reversals(app);
store(app);

// Proxy new frontend paths
const FRONTEND_HOST = process.env["FRONTEND_HOST"] ?? "localhost";
const FRONTEND_PORT = process.env["FRONTEND_PORT"] ?? "3001";

const frontendProxy: Handler = async (req, res, _next) => {
	try {
		const method = req.method ?? "GET";
		const res2 = await fetch(`http://${FRONTEND_HOST}:${FRONTEND_PORT}${req.url}`, {
			method,
			headers: req.headers as Record<string, string>,
			...(["GET", "HEAD"].includes(method)
				? {}
				: {
						body: JSON.stringify(req.body)
					})
		});
		res.status(res2.status);
		for (const [key, value] of res2.headers.entries()) {
			res.set(key, value);
		}
		return res.send(Buffer.from(await res2.arrayBuffer()));
	} catch (error) {
		console.error("Frontend proxy error:", error);
		return res.status(502)
			.send("Bad Gateway");
	}
};

app.get("/login", frontendProxy);
app.get("/login/*", frontendProxy);
app.get("/beta", frontendProxy);
app.get("/admin/*", frontendProxy);
app.get("/flags/*", frontendProxy);
app.get("/_nuxt/*", frontendProxy);



app.use(sirv("./frontend", {
	dev: isDev,
	setHeaders: (res: ServerResponse, _pathname, _stats) => {
		if (!isDev) {
			(res as Response).set("cache-control", `public, maxage=${5 * 60}, s-maxage=${5 * 60}, stale-while-revalidate=${5 * 60}, stale-if-error=${5 * 60}`);
		}
	}
}));



const port = Number(process.env["BACKEND_PORT"]) || 3000;

app.listen(port, async () => {
	console.log(`Server running on port ${port}`);

	console.log("Starting global leaderboard warmup scheduler (every 1 minute)");
	leaderboardService.warmupGlobalLeaderboards()
		.catch(error => {
			console.error("Initial warmup failed:", error);
		});

	setInterval(async () => {
		try {
			await leaderboardService.warmupGlobalLeaderboards();
			// const timestamp = new Date()
			// 	.toISOString();
			// console.log(`[${timestamp}] Global leaderboards warmup completed`);
		} catch (error) {
			const timestamp = new Date()
				.toISOString();
			console.error(`[${timestamp}] Leaderboard warmup error:`, error);
		}
	}, 1 * 60 * 1000);

	await discordBot.start();
});

async function shutdown() {
	await discordBot.stop();
	// eslint-disable-next-line unicorn/no-process-exit
	process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);