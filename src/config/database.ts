import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 确保 DATABASE_URL 包含 connection_limit 参数，防止连接池过小导致 P2024 错误
function ensureConnectionLimit(url: string): string {
	let result = url;
	if (!result.includes("connection_limit=")) {
		const separator = result.includes("?") ? "&" : "?";
		result = `${result}${separator}connection_limit=10`;
	}
	// 告诉 mysql2 驱动 MySQL 服务器存储 DATETIME 的时区（来自 show variables like '%time_zone%'）
	// 默认 MySQL 是 SYSTEM 时区，常见为 +08:00（东八区）
	// 设置正确后驱动在读写 DATETIME 时会自动转换 UTC，使 paintedAt > lastUpdatedAt 等比较正常工作
	if (!result.includes("timezone=")) {
		const separator = result.includes("?") ? "&" : "?";
		result = `${result}${separator}timezone=%2B08%3A00`;
	}
	return result;
}

const databaseUrl = ensureConnectionLimit(process.env["DATABASE_URL"] ?? "");

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		datasourceUrl: databaseUrl,
		log: [
			// { level: "query", emit: "event" },
			{ level: "error", emit: "stdout" },
			{ level: "info", emit: "stdout" },
			{ level: "warn", emit: "stdout" },
		],
	});
