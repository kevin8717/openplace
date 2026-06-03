import dotenv from "dotenv";
dotenv.config();

export const SMTP_HOST = process.env["SMTP_HOST"] ?? "smtp.qq.com";
export const SMTP_PORT = Number.parseInt(process.env["SMTP_PORT"] ?? "") || 465;
export const SMTP_USER = process.env["SMTP_USER"] ?? "";
export const SMTP_PASS = process.env["SMTP_PASS"] ?? "";
export const EMAIL_FROM = process.env["EMAIL_FROM"] ?? SMTP_USER;
export const EMAIL_TO = process.env["EMAIL_TO"] ?? "seviyz@qq.com";

if (!SMTP_USER || !SMTP_PASS) {
	console.warn("SMTP_USER or SMTP_PASS not configured — email sending will be disabled");
}
