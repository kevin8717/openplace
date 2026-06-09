import { g as t } from "./BhCkpOlh.js";
const i = () => "Alliance ID copied",
	c = () => "ID da aliança copiado",
	o = () => "已复制联盟 ID",
	s = () => "Allianz-ID kopiert",
	u = () => "ID de la alianza copiado",
	a = () => "ID d’alliance copié",
	l = () => "ID dell'alleanza copiato",
	_ = () => "アライアンスIDをコピーしました。",
	d = () => "ID sojuszu skopiowane",
	p = () => "ID альянса скопирован",
	f = () => "ID альянсу скопійовано",
	I = () => "Đã sao chép ID liên minh",
	Sr = (e = {}, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? i()
			: r === "pt"
				? c()
				: r === "ch"
					? o()
					: r === "de"
						? s()
						: r === "es"
							? u()
							: r === "fr"
								? a()
								: r === "it"
									? l()
									: r === "jp"
										? _()
										: r === "pl"
											? d()
											: r === "ru"
												? p()
												: r === "uk"
													? f()
													: I();
	},
	m = () => "Bans",
	k = () => "Banimentos",
	g = () => "封禁记录",
	h = () => "Banns",
	D = () => "Bans",
	b = () => "Bannissements",
	j = () => "Ban",
	y = () => "BAN一覧",
	z = () => "Bany",
	$ = () => "Баны",
	B = () => "Бани",
	T = () => "Lệnh cấm",
	Zr = (e = {}, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? m()
			: r === "pt"
				? k()
				: r === "ch"
					? g()
					: r === "de"
						? h()
						: r === "es"
							? D()
							: r === "fr"
								? b()
								: r === "it"
									? j()
									: r === "jp"
										? y()
										: r === "pl"
											? z()
											: r === "ru"
												? $()
												: r === "uk"
													? B()
													: T();
	},
	v = () => "Closed tickets",
	C = () => "Tickets fechados",
	A = () => "已关闭工单",
	L = () => "Geschlossene Tickets",
	N = () => "Tickets cerrados",
	w = () => "Tickets clôturés",
	H = () => "Ticket chiusi",
	S = () => "クローズされたチケット",
	Z = () => "Zamknięte tickety",
	q = () => "Закрытые тикеты",
	x = () => "Закриті тікети",
	G = () => "Phiếu đã đóng",
	qr = (e = {}, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? v()
			: r === "pt"
				? C()
				: r === "ch"
					? A()
					: r === "de"
						? L()
						: r === "es"
							? N()
							: r === "fr"
								? w()
								: r === "it"
									? H()
									: r === "jp"
										? S()
										: r === "pl"
											? Z()
											: r === "ru"
												? q()
												: r === "uk"
													? x()
													: G();
	},
	K = (e) => `Copy alliance ID: #${e.allianceId}`,
	M = (e) => `Copiar ID da aliança: #${e.allianceId}`,
	O = (e) => `复制联盟 ID：#${e.allianceId}`,
	P = (e) => `Allianz-ID kopieren: #${e.allianceId}`,
	Q = (e) => `Copiar ID de la alianza: #${e.allianceId}`,
	V = (e) => `Copier l’ID de l’alliance : #${e.allianceId}`,
	E = (e) => `Copia ID dell'alleanza: #${e.allianceId}`,
	F = (e) => `アライアンスIDをコピー: #${e.allianceId}`,
	J = (e) => `Kopiuj ID sojuszu: #${e.allianceId}`,
	R = (e) => `Скопировать ID альянса: #${e.allianceId}`,
	U = (e) => `Скопіювати ID альянсу: #${e.allianceId}`,
	W = (e) => `Sao chép ID liên minh: #${e.allianceId}`,
	xr = (e, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? K(e)
			: r === "pt"
				? M(e)
				: r === "ch"
					? O(e)
					: r === "de"
						? P(e)
						: r === "es"
							? Q(e)
							: r === "fr"
								? V(e)
								: r === "it"
									? E(e)
									: r === "jp"
										? F(e)
										: r === "pl"
											? J(e)
											: r === "ru"
												? R(e)
												: r === "uk"
													? U(e)
													: W(e);
	},
	X = () => "Ignores",
	Y = () => "Ignorados",
	rr = () => "忽略次数",
	er = () => "Ignoriert",
	nr = () => "Ignorados",
	tr = () => "Ignorés",
	ir = () => "Ignorati",
	cr = () => "無視件数",
	or = () => "Ignorowane",
	sr = () => "Игнорирования",
	ur = () => "Ігнори",
	ar = () => "Bỏ qua",
	Gr = (e = {}, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? X()
			: r === "pt"
				? Y()
				: r === "ch"
					? rr()
					: r === "de"
						? er()
						: r === "es"
							? nr()
							: r === "fr"
								? tr()
								: r === "it"
									? ir()
									: r === "jp"
										? cr()
										: r === "pl"
											? or()
											: r === "ru"
												? sr()
												: r === "uk"
													? ur()
													: ar();
	},
	lr = () => "Time",
	_r = () => "Tempo",
	dr = () => "时间",
	pr = () => "Zeit",
	fr = () => "Hora",
	Ir = () => "Heure",
	mr = () => "Ora",
	kr = () => "時間",
	gr = () => "Czas",
	hr = () => "Время",
	Dr = () => "Час",
	br = () => "Thời gian",
	Kr = (e = {}, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? lr()
			: r === "pt"
				? _r()
				: r === "ch"
					? dr()
					: r === "de"
						? pr()
						: r === "es"
							? fr()
							: r === "fr"
								? Ir()
								: r === "it"
									? mr()
									: r === "jp"
										? kr()
										: r === "pl"
											? gr()
											: r === "ru"
												? hr()
												: r === "uk"
													? Dr()
													: br();
	},
	jr = () => "Times reported",
	yr = () => "Quantidade de denuncias",
	zr = () => "被举报次数",
	$r = () => "Anzahl der Meldungen",
	Br = () => "Veces reportado",
	Tr = () => "Nombre de signalements",
	vr = () => "Numero di segnalazioni",
	Cr = () => "通報された回数",
	Ar = () => "Liczba zgłoszeń",
	Lr = () => "Количество жалоб",
	Nr = () => "Кількість скарг",
	wr = () => "Số lần bị báo cáo",
	Mr = (e = {}, n = {}) => {
		const r = n.locale ?? t();
		return r === "en"
			? jr()
			: r === "pt"
				? yr()
				: r === "ch"
					? zr()
					: r === "de"
						? $r()
						: r === "es"
							? Br()
							: r === "fr"
								? Tr()
								: r === "it"
									? vr()
									: r === "jp"
										? Cr()
										: r === "pl"
											? Ar()
											: r === "ru"
												? Lr()
												: r === "uk"
													? Nr()
													: wr();
	};
export { Mr as a, Zr as b, qr as c, xr as d, Sr as e, Gr as i, Kr as t };
