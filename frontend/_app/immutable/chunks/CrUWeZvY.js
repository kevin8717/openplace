import { g as n } from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import { a as i, w as u } from "./Dbe4PVAU.js";
import { d as s } from "./B7_gUtXa.js";
import { r as c } from "./K9AHFDoV.js";
const _ = (t) => `Copy user ID: #${t.userId}`,
	p = (t) => `Copiar ID do usuário: #${t.userId}`,
	l = (t) => `复制用户 ID：#${t.userId}`,
	a = (t) => `Benutzer-ID kopieren: #${t.userId}`,
	f = (t) => `Copiar ID del usuario: #${t.userId}`,
	d = (t) => `Copier l’ID de l’utilisateur : #${t.userId}`,
	g = (t) => `Copia ID utente: #${t.userId}`,
	y = (t) => `ユーザーIDをコピー: #${t.userId}`,
	h = (t) => `Kopiuj ID użytkownika: #${t.userId}`,
	k = (t) => `Скопировать ID пользователя: #${t.userId}`,
	x = (t) => `Скопіювати ID користувача: #${t.userId}`,
	b = (t) => `Sao chép ID người dùng: #${t.userId}`,
	vt = (t, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? _(t)
			: r === "pt"
				? p(t)
				: r === "ch"
					? l(t)
					: r === "de"
						? a(t)
						: r === "es"
							? f(t)
							: r === "fr"
								? d(t)
								: r === "it"
									? g(t)
									: r === "jp"
										? y(t)
										: r === "pl"
											? h(t)
											: r === "ru"
												? k(t)
												: r === "uk"
													? x(t)
													: b(t);
	},
	m = () => "No pending reports",
	j = () => "Sem denúncias pendentes",
	I = () => "没有待处理举报",
	C = () => "Keine offenen Meldungen",
	z = () => "No hay reportes pendientes",
	T = () => "Aucun signalement en attente",
	v = () => "Nessuna segnalazione in sospeso",
	w = () => "保留中の通報はありません。",
	$ = () => "Brak oczekujących zgłoszeń",
	D = () => "Нет ожидающих репортов",
	F = () => "Немає скарг у черзі",
	S = () => "Không có báo cáo đang chờ xử lý",
	wt = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? m()
			: r === "pt"
				? j()
				: r === "ch"
					? I()
					: r === "de"
						? C()
						: r === "es"
							? z()
							: r === "fr"
								? T()
								: r === "it"
									? v()
									: r === "jp"
										? w()
										: r === "pl"
											? $()
											: r === "ru"
												? D()
												: r === "uk"
													? F()
													: S();
	},
	M = () => "Report",
	P = () => "Denúncia",
	Z = () => "举报",
	R = () => "Meldung",
	B = () => "Reporte",
	K = () => "Signalement",
	L = () => "Segnalazione",
	N = () => "通報",
	A = () => "Zgłoszenie",
	G = () => "Жалоба",
	H = () => "Скарга",
	O = () => "Báo cáo",
	$t = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? M()
			: r === "pt"
				? P()
				: r === "ch"
					? Z()
					: r === "de"
						? R()
						: r === "es"
							? B()
							: r === "fr"
								? K()
								: r === "it"
									? L()
									: r === "jp"
										? N()
										: r === "pl"
											? A()
											: r === "ru"
												? G()
												: r === "uk"
													? H()
													: O();
	},
	q = () => "Reported by",
	E = () => "Denunciado por",
	J = () => "举报者",
	Q = () => "Gemeldet von",
	U = () => "Reportado por",
	V = () => "Signalé par",
	W = () => "Segnalato da",
	X = () => "通報者",
	Y = () => "Zgłoszono przez",
	rr = () => "Пожаловался",
	tr = () => "Ким поскаржено",
	er = () => "Được báo cáo bởi",
	Dt = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? q()
			: r === "pt"
				? E()
				: r === "ch"
					? J()
					: r === "de"
						? Q()
						: r === "es"
							? U()
							: r === "fr"
								? V()
								: r === "it"
									? W()
									: r === "jp"
										? X()
										: r === "pl"
											? Y()
											: r === "ru"
												? rr()
												: r === "uk"
													? tr()
													: er();
	},
	nr = () => "Reported pixel",
	or = () => "Pixel denunciado",
	ir = () => "被举报像素",
	ur = () => "Gemeldeter Pixel",
	sr = () => "Píxel reportado",
	cr = () => "Pixel signalé",
	_r = () => "Pixel segnalato",
	pr = () => "通報されたピクセル",
	lr = () => "Zgłoszony piksel",
	ar = () => "Пиксель, на который пожаловались",
	fr = () => "Піксель, на який поскаржились",
	dr = () => "Pixel bị báo cáo",
	Ft = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? nr()
			: r === "pt"
				? or()
				: r === "ch"
					? ir()
					: r === "de"
						? ur()
						: r === "es"
							? sr()
							: r === "fr"
								? cr()
								: r === "it"
									? _r()
									: r === "jp"
										? pr()
										: r === "pl"
											? lr()
											: r === "ru"
												? ar()
												: r === "uk"
													? fr()
													: dr();
	},
	gr = () => "Show original",
	yr = () => "Mostrar original",
	hr = () => "显示原图",
	kr = () => "Original anzeigen",
	xr = () => "Mostrar original",
	br = () => "Afficher l’original",
	mr = () => "Mostra originale",
	jr = () => "元の絵を表示",
	Ir = () => "Pokaż oryginał",
	Cr = () => "Показать оригинал",
	zr = () => "Показати оригінал",
	Tr = () => "Hiển thị bản gốc",
	St = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? gr()
			: r === "pt"
				? yr()
				: r === "ch"
					? hr()
					: r === "de"
						? kr()
						: r === "es"
							? xr()
							: r === "fr"
								? br()
								: r === "it"
									? mr()
									: r === "jp"
										? jr()
										: r === "pl"
											? Ir()
											: r === "ru"
												? Cr()
												: r === "uk"
													? zr()
													: Tr();
	},
	vr = () => "Ticket",
	wr = () => "Ticket",
	$r = () => "工单",
	Dr = () => "Ticket",
	Fr = () => "Ticket",
	Sr = () => "Ticket",
	Mr = () => "Ticket",
	Pr = () => "チケット",
	Zr = () => "Ticket",
	Rr = () => "Тикет",
	Br = () => "Тікет",
	Kr = () => "Phiếu",
	Mt = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? vr()
			: r === "pt"
				? wr()
				: r === "ch"
					? $r()
					: r === "de"
						? Dr()
						: r === "es"
							? Fr()
							: r === "fr"
								? Sr()
								: r === "it"
									? Mr()
									: r === "jp"
										? Pr()
										: r === "pl"
											? Zr()
											: r === "ru"
												? Rr()
												: r === "uk"
													? Br()
													: Kr();
	},
	Lr = () => "Timeouts",
	Nr = () => "Suspensões",
	Ar = () => "禁言记录",
	Gr = () => "Timeouts",
	Hr = () => "Suspensiones",
	Or = () => "Suspensions",
	qr = () => "Sospensioni",
	Er = () => "タイムアウト",
	Jr = () => "Zawieszenia",
	Qr = () => "Тайм-ауты",
	Ur = () => "Тайм-аути",
	Vr = () => "Lần tạm khóa",
	Pt = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? Lr()
			: r === "pt"
				? Nr()
				: r === "ch"
					? Ar()
					: r === "de"
						? Gr()
						: r === "es"
							? Hr()
							: r === "fr"
								? Or()
								: r === "it"
									? qr()
									: r === "jp"
										? Er()
										: r === "pl"
											? Jr()
											: r === "ru"
												? Qr()
												: r === "uk"
													? Ur()
													: Vr();
	},
	Wr = () => "Translate",
	Xr = () => "Traduzir",
	Yr = () => "翻译",
	rt = () => "Übersetzen",
	tt = () => "Traducir",
	et = () => "Traduire",
	nt = () => "Traduci",
	ot = () => "翻訳",
	it = () => "Przetłumacz",
	ut = () => "Перевести",
	st = () => "Перекласти",
	ct = () => "Dịch",
	Zt = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? Wr()
			: r === "pt"
				? Xr()
				: r === "ch"
					? Yr()
					: r === "de"
						? rt()
						: r === "es"
							? tt()
							: r === "fr"
								? et()
								: r === "it"
									? nt()
									: r === "jp"
										? ot()
										: r === "pl"
											? it()
											: r === "ru"
												? ut()
												: r === "uk"
													? st()
													: ct();
	},
	_t = () => "Translating...",
	pt = () => "Traduzindo...",
	lt = () => "正在翻译...",
	at = () => "Übersetze...",
	ft = () => "Traduciendo...",
	dt = () => "Traduction...",
	gt = () => "Traduzione in corso...",
	yt = () => "翻訳中...",
	ht = () => "Tłumaczenie...",
	kt = () => "Перевод...",
	xt = () => "Переклад...",
	bt = () => "Đang dịch...",
	Rt = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? _t()
			: r === "pt"
				? pt()
				: r === "ch"
					? lt()
					: r === "de"
						? at()
						: r === "es"
							? ft()
							: r === "fr"
								? dt()
								: r === "it"
									? gt()
									: r === "jp"
										? yt()
										: r === "pl"
											? ht()
											: r === "ru"
												? kt()
												: r === "uk"
													? xt()
													: bt();
	};
var mt = u(
	'<svg><g fill-rule="nonzero"><g transform="translate(3.0, 29.0)" fill="#000000"><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="10.5" ry="5.25002273"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="10.5" ry="5.25002273"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="9.5" ry="4.77275007"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="8.5" ry="4.29549936"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="7.5" ry="3.81822308"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="6.5" ry="3.34094679"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="5.5" ry="2.86367051"></ellipse><ellipse opacity="0.04" cx="10.5" cy="5.80029008" rx="4.5" ry="2.38636864"></ellipse></g><g fill="#0069ff"><path d="M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"></path></g><g opacity="0.25" fill="#000000"><path d="M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"></path></g><g transform="translate(6.0, 7.0)" fill="#FFFFFF"></g><g transform="translate(8.0, 8.0)"><circle fill="#000000" opacity="0.25" cx="5.5" cy="5.5" r="5.4999962"></circle><circle fill="#FFFFFF" cx="5.5" cy="5.5" r="5.4999962"></circle></g></g></svg>',
);
function Bt(t, e) {
	let r = c(e, ["$$slots", "$$events", "$$legacy"]);
	var o = mt();
	(s(o, () => ({ display: "block", viewBox: "0 0 27 41", ...r })), i(t, o));
}
export {
	Bt as M,
	Rt as a,
	Zt as b,
	vt as c,
	Dt as d,
	Ft as e,
	Mt as f,
	wt as n,
	$t as r,
	St as s,
	Pt as t,
};
