declare module "nodemailer" {
	interface SendMailOptions {
		from?: string;
		to?: string;
		subject?: string;
		text?: string;
		html?: string;
	}
	interface Transporter {
		sendMail(options: SendMailOptions): Promise<unknown>;
	}
	interface TransportConfig {
		host?: string;
		port?: number;
		secure?: boolean;
		auth?: { user: string; pass: string };
	}
	export function createTransport(config: TransportConfig): Transporter;
	export type { Transporter, SendMailOptions };
}
