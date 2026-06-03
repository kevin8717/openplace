import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM, EMAIL_TO } from "../config/email.js";

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
	if (transporter) return transporter;

	if (!SMTP_USER || !SMTP_PASS) {
		console.warn("[Email] SMTP not configured, skipping email send");
		return null;
	}

	transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: SMTP_PORT,
		secure: SMTP_PORT === 465,
		auth: {
			user: SMTP_USER,
			pass: SMTP_PASS
		}
	});

	return transporter;
}

export async function sendEmail(subject: string, text: string, html?: string): Promise<void> {
	const t = getTransporter();
	if (!t) {
		console.log(`[Email] [${subject}] ${text}`);
		return;
	}

	try {
		await t.sendMail({
			from: EMAIL_FROM,
			to: EMAIL_TO,
			subject,
			text,
			html: html ?? text
		});
		console.log(`[Email] Sent: ${subject}`);
	} catch (error) {
		console.error("[Email] Failed to send email:", error);
	}
}
