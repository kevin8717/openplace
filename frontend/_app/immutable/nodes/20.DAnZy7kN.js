import "../chunks/Bzak7iHL.js";
import { o as lt } from "../chunks/DMoMXVXI.js";
import {
	k as vt,
	p as dt,
	f as O,
	t as k,
	a as m,
	b as ft,
	j as pt,
	c as g,
	d as r,
	h as q,
	i as n,
	$ as kt,
	r as t,
	s as a,
	e as G,
	u as T,
	aJ as re,
	bq as mt,
	l as er,
} from "../chunks/Dbe4PVAU.js";
import { s as o } from "../chunks/C_mo-lyU.js";
import { i as R } from "../chunks/Icl9dwnj.js";
import { h as gt } from "../chunks/ClbV77Km.js";
import { s as F, a as te } from "../chunks/B7_gUtXa.js";
import { b as ht } from "../chunks/C1Rrr0ww.js";
import { g as wt } from "../chunks/C6d2kgDd.js";
import { p as rr } from "../chunks/DzNOOKXC.js";
import {
	u as tr,
	a as nr,
	t as Be,
	c as ir,
	k as bt,
	d as xt,
} from "../chunks/DU-2YUMG.js";
import { C as jt } from "../chunks/DlX_V98Q.js";
import { P as yt } from "../chunks/JKnWQwH6.js";
import { R as $t } from "../chunks/D93kC7yH.js";
import { S as ne } from "../chunks/xlnJ43Nf.js";
import { g as f } from "../chunks/BhCkpOlh.js";
import { b as zt } from "../chunks/C-dU7195.js";
import { t as Rt } from "../chunks/CqMJ2HFU.js";
import { r as _r } from "../chunks/DyQ9pPD3.js";
const Nt = (i) => `Correction #${i.id}`,
	Dt = (i) => `Correção #${i.id}`,
	Ct = (i) => `更正 #${i.id}`,
	St = (i) => `Korrektur #${i.id}`,
	It = (i) => `Corrección #${i.id}`,
	qt = (i) => `Correction #${i.id}`,
	At = (i) => `Correzione #${i.id}`,
	Ut = (i) => `修正 #${i.id}`,
	Lt = (i) => `Poprawka #${i.id}`,
	Pt = (i) => `Исправление #${i.id}`,
	Bt = (i) => `Виправлення #${i.id}`,
	Tt = (i) => `Sửa #${i.id}`,
	sr = (i, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Nt(i)
			: e === "pt"
				? Dt(i)
				: e === "ch"
					? Ct(i)
					: e === "de"
						? St(i)
						: e === "es"
							? It(i)
							: e === "fr"
								? qt(i)
								: e === "it"
									? At(i)
									: e === "jp"
										? Ut(i)
										: e === "pl"
											? Lt(i)
											: e === "ru"
												? Pt(i)
												: e === "uk"
													? Bt(i)
													: Tt(i);
	},
	Gt = () => "Reported user",
	Zt = () => "Usuário reportado",
	Mt = () => "被举报用户",
	Et = () => "Gemeldeter Nutzer",
	Kt = () => "Usuario reportado",
	Jt = () => "Utilisateur signalé",
	Ot = () => "Utente segnalato",
	Ft = () => "報告されたユーザー",
	Ht = () => "Zgłoszony użytkownik",
	Vt = () => "Пользователь",
	Wt = () => "Користувач",
	Qt = () => "Người bị báo cáo",
	ar = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Gt()
			: e === "pt"
				? Zt()
				: e === "ch"
					? Mt()
					: e === "de"
						? Et()
						: e === "es"
							? Kt()
							: e === "fr"
								? Jt()
								: e === "it"
									? Ot()
									: e === "jp"
										? Ft()
										: e === "pl"
											? Ht()
											: e === "ru"
												? Vt()
												: e === "uk"
													? Wt()
													: Qt();
	},
	Xt = () => "Ticket ID",
	Yt = () => "ID do ticket",
	en = () => "工单 ID",
	rn = () => "Ticket-ID",
	tn = () => "ID del ticket",
	nn = () => "ID du ticket",
	_n = () => "ID ticket",
	sn = () => "チケットID",
	an = () => "ID zgłoszenia",
	on = () => "ID тикета",
	cn = () => "ID тікета",
	un = () => "ID ticket",
	or = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Xt()
			: e === "pt"
				? Yt()
				: e === "ch"
					? en()
					: e === "de"
						? rn()
						: e === "es"
							? tn()
							: e === "fr"
								? nn()
								: e === "it"
									? _n()
									: e === "jp"
										? sn()
										: e === "pl"
											? an()
											: e === "ru"
												? on()
												: e === "uk"
													? cn()
													: un();
	},
	ln = () => "Previous action",
	vn = () => "Ação anterior",
	dn = () => "原处置",
	fn = () => "Vorherige Aktion",
	pn = () => "Acción anterior",
	kn = () => "Action précédente",
	mn = () => "Azione precedente",
	gn = () => "以前の処置",
	hn = () => "Poprzednia akcja",
	wn = () => "Прежнее действие",
	bn = () => "Попередня дія",
	xn = () => "Hành động trước",
	Te = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? ln()
			: e === "pt"
				? vn()
				: e === "ch"
					? dn()
					: e === "de"
						? fn()
						: e === "es"
							? pn()
							: e === "fr"
								? kn()
								: e === "it"
									? mn()
									: e === "jp"
										? gn()
										: e === "pl"
											? hn()
											: e === "ru"
												? wn()
												: e === "uk"
													? bn()
													: xn();
	},
	jn = () => "New action",
	yn = () => "Nova ação",
	$n = () => "新处置",
	zn = () => "Neue Aktion",
	Rn = () => "Nueva acción",
	Nn = () => "Nouvelle action",
	Dn = () => "Nuova azione",
	Cn = () => "新しい処置",
	Sn = () => "Nowa akcja",
	In = () => "Новое действие",
	qn = () => "Нова дія",
	An = () => "Hành động mới",
	Ge = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? jn()
			: e === "pt"
				? yn()
				: e === "ch"
					? $n()
					: e === "de"
						? zn()
						: e === "es"
							? Rn()
							: e === "fr"
								? Nn()
								: e === "it"
									? Dn()
									: e === "jp"
										? Cn()
										: e === "pl"
											? Sn()
											: e === "ru"
												? In()
												: e === "uk"
													? qn()
													: An();
	},
	Un = () => "Requested by",
	Ln = () => "Solicitada por",
	Pn = () => "申请人",
	Bn = () => "Beantragt von",
	Tn = () => "Solicitada por",
	Gn = () => "Demandée par",
	Zn = () => "Richiesto da",
	Mn = () => "申請者",
	En = () => "Zgłoszone przez",
	Kn = () => "Запросил",
	Jn = () => "Подав",
	On = () => "Người yêu cầu",
	cr = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Un()
			: e === "pt"
				? Ln()
				: e === "ch"
					? Pn()
					: e === "de"
						? Bn()
						: e === "es"
							? Tn()
							: e === "fr"
								? Gn()
								: e === "it"
									? Zn()
									: e === "jp"
										? Mn()
										: e === "pl"
											? En()
											: e === "ru"
												? Kn()
												: e === "uk"
													? Jn()
													: On();
	},
	Fn = () => "Requested at",
	Hn = () => "Solicitada em",
	Vn = () => "申请时间",
	Wn = () => "Beantragt am",
	Qn = () => "Solicitada el",
	Xn = () => "Demandée le",
	Yn = () => "Richiesto il",
	ei = () => "申請日時",
	ri = () => "Zgłoszone",
	ti = () => "Создано",
	ni = () => "Подано",
	ii = () => "Thời gian yêu cầu",
	ur = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Fn()
			: e === "pt"
				? Hn()
				: e === "ch"
					? Vn()
					: e === "de"
						? Wn()
						: e === "es"
							? Qn()
							: e === "fr"
								? Xn()
								: e === "it"
									? Yn()
									: e === "jp"
										? ei()
										: e === "pl"
											? ri()
											: e === "ru"
												? ti()
												: e === "uk"
													? ni()
													: ii();
	},
	_i = () => "Reviewed by",
	si = () => "Revisada por",
	ai = () => "审核人",
	oi = () => "Geprüft von",
	ci = () => "Revisada por",
	ui = () => "Examinée par",
	li = () => "Revisionato da",
	vi = () => "レビュー担当者",
	di = () => "Zweryfikowane przez",
	fi = () => "Рассмотрел",
	pi = () => "Перевірив",
	ki = () => "Người duyệt",
	mi = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? _i()
			: e === "pt"
				? si()
				: e === "ch"
					? ai()
					: e === "de"
						? oi()
						: e === "es"
							? ci()
							: e === "fr"
								? ui()
								: e === "it"
									? li()
									: e === "jp"
										? vi()
										: e === "pl"
											? di()
											: e === "ru"
												? fi()
												: e === "uk"
													? pi()
													: ki();
	},
	gi = () => "Reviewed at",
	hi = () => "Revisada em",
	wi = () => "审核时间",
	bi = () => "Geprüft am",
	xi = () => "Revisada el",
	ji = () => "Examinée le",
	yi = () => "Revisionato il",
	$i = () => "レビュー日時",
	zi = () => "Zweryfikowane",
	Ri = () => "Рассмотрено",
	Ni = () => "Перевірено",
	Di = () => "Thời gian duyệt",
	Ci = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? gi()
			: e === "pt"
				? hi()
				: e === "ch"
					? wi()
					: e === "de"
						? bi()
						: e === "es"
							? xi()
							: e === "fr"
								? ji()
								: e === "it"
									? yi()
									: e === "jp"
										? $i()
										: e === "pl"
											? zi()
											: e === "ru"
												? Ri()
												: e === "uk"
													? Ni()
													: Di();
	},
	Si = () => "Justification",
	Ii = () => "Justificativa",
	qi = () => "理由",
	Ai = () => "Begründung",
	Ui = () => "Justificación",
	Li = () => "Justification",
	Pi = () => "Motivazione",
	Bi = () => "理由",
	Ti = () => "Uzasadnienie",
	Gi = () => "Обоснование",
	Zi = () => "Обґрунтування",
	Mi = () => "Lý do",
	lr = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Si()
			: e === "pt"
				? Ii()
				: e === "ch"
					? qi()
					: e === "de"
						? Ai()
						: e === "es"
							? Ui()
							: e === "fr"
								? Li()
								: e === "it"
									? Pi()
									: e === "jp"
										? Bi()
										: e === "pl"
											? Ti()
											: e === "ru"
												? Gi()
												: e === "uk"
													? Zi()
													: Mi();
	},
	Ei = () => "Reviewer notes",
	Ki = () => "Notas do revisor",
	Ji = () => "审核备注",
	Oi = () => "Anmerkungen des Prüfers",
	Fi = () => "Notas del revisor",
	Hi = () => "Notes de l'examinateur",
	Vi = () => "Note del revisore",
	Wi = () => "レビューメモ",
	Qi = () => "Uwagi weryfikującego",
	Xi = () => "Комментарии",
	Yi = () => "Коментарі",
	e_ = () => "Ghi chú của người duyệt",
	r_ = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Ei()
			: e === "pt"
				? Ki()
				: e === "ch"
					? Ji()
					: e === "de"
						? Oi()
						: e === "es"
							? Fi()
							: e === "fr"
								? Hi()
								: e === "it"
									? Vi()
									: e === "jp"
										? Wi()
										: e === "pl"
											? Qi()
											: e === "ru"
												? Xi()
												: e === "uk"
													? Yi()
													: e_();
	},
	t_ = () => "Review this correction",
	n_ = () => "Revisar esta correção",
	i_ = () => "审核此更正请求",
	__ = () => "Diese Korrektur prüfen",
	s_ = () => "Revisar esta corrección",
	a_ = () => "Examiner cette correction",
	o_ = () => "Revisiona questa correzione",
	c_ = () => "このリクエストをレビュー",
	u_ = () => "Zweryfikuj prośbę o poprawkę",
	l_ = () => "Рассмотреть запрос",
	v_ = () => "Перевірити запит",
	d_ = () => "Duyệt yêu cầu sửa",
	f_ = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? t_()
			: e === "pt"
				? n_()
				: e === "ch"
					? i_()
					: e === "de"
						? __()
						: e === "es"
							? s_()
							: e === "fr"
								? a_()
								: e === "it"
									? o_()
									: e === "jp"
										? c_()
										: e === "pl"
											? u_()
											: e === "ru"
												? l_()
												: e === "uk"
													? v_()
													: d_();
	},
	p_ = () => "Notes (optional)",
	k_ = () => "Notas (opcional)",
	m_ = () => "备注（可选）",
	g_ = () => "Anmerkungen (optional)",
	h_ = () => "Notas (opcional)",
	w_ = () => "Notes (optionnel)",
	b_ = () => "Note (opzionali)",
	x_ = () => "メモ（任意）",
	j_ = () => "Uwagi (opcjonalne)",
	y_ = () => "Комментарии (необязательно)",
	$_ = () => "Коментарі (необов’язково)",
	z_ = () => "Ghi chú (tuỳ chọn)",
	R_ = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? p_()
			: e === "pt"
				? k_()
				: e === "ch"
					? m_()
					: e === "de"
						? g_()
						: e === "es"
							? h_()
							: e === "fr"
								? w_()
								: e === "it"
									? b_()
									: e === "jp"
										? x_()
										: e === "pl"
											? j_()
											: e === "ru"
												? y_()
												: e === "uk"
													? $_()
													: z_();
	},
	N_ = () => "Approve",
	D_ = () => "Aprovar",
	C_ = () => "批准",
	S_ = () => "Genehmigen",
	I_ = () => "Aprobar",
	q_ = () => "Approuver",
	A_ = () => "Approva",
	U_ = () => "承認",
	L_ = () => "Zatwierdź",
	P_ = () => "Одобрить",
	B_ = () => "Схвалити",
	T_ = () => "Duyệt",
	Ze = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? N_()
			: e === "pt"
				? D_()
				: e === "ch"
					? C_()
					: e === "de"
						? S_()
						: e === "es"
							? I_()
							: e === "fr"
								? q_()
								: e === "it"
									? A_()
									: e === "jp"
										? U_()
										: e === "pl"
											? L_()
											: e === "ru"
												? P_()
												: e === "uk"
													? B_()
													: T_();
	},
	G_ = () => "Deny",
	Z_ = () => "Negar",
	M_ = () => "拒绝",
	E_ = () => "Ablehnen",
	K_ = () => "Denegar",
	J_ = () => "Refuser",
	O_ = () => "Rifiuta",
	F_ = () => "拒否",
	H_ = () => "Odrzuć",
	V_ = () => "Отклонить",
	W_ = () => "Відхилити",
	Q_ = () => "Từ chối",
	Me = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? G_()
			: e === "pt"
				? Z_()
				: e === "ch"
					? M_()
					: e === "de"
						? E_()
						: e === "es"
							? K_()
							: e === "fr"
								? J_()
								: e === "it"
									? O_()
									: e === "jp"
										? F_()
										: e === "pl"
											? H_()
											: e === "ru"
												? V_()
												: e === "uk"
													? W_()
													: Q_();
	},
	X_ = () =>
		"Approving will apply the new action to the reported user. Continue?",
	Y_ = () => "Aprovar aplicará a nova ação ao usuário reportado. Continuar?",
	es = () => "批准后将对被举报用户应用新处置。是否继续？",
	rs = () => "Bei Genehmigung wird die neue Aktion angewendet. Fortfahren?",
	ts = () =>
		"Aprobar aplicará la nueva acción al usuario reportado. ¿Continuar?",
	ns = () =>
		"Approuver appliquera la nouvelle action à l'utilisateur signalé. Continuer ?",
	is = () => "L'approvazione applicherà la nuova azione. Continuare?",
	_s = () => "承認すると新しい処置が適用されます。続行しますか？",
	ss = () => "Zatwierdzenie zastosuje nową akcję do użytkownika. Kontynuować?",
	as = () => "Одобрение применит новое действие к пользователю. Продолжить?",
	os = () => "Схвалення застосує нову дію до користувача. Продовжити?",
	cs = () => "Việc duyệt sẽ áp dụng hành động mới cho người dùng. Tiếp tục?",
	us = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? X_()
			: e === "pt"
				? Y_()
				: e === "ch"
					? es()
					: e === "de"
						? rs()
						: e === "es"
							? ts()
							: e === "fr"
								? ns()
								: e === "it"
									? is()
									: e === "jp"
										? _s()
										: e === "pl"
											? ss()
											: e === "ru"
												? as()
												: e === "uk"
													? os()
													: cs();
	},
	ls = () => "Deny this correction request? This cannot be undone.",
	vs = () => "Negar esta solicitação de correção? Não pode ser desfeito.",
	ds = () => "拒绝此更正请求？此操作无法撤销。",
	fs = () =>
		"Diese Korrekturanfrage ablehnen? Das kann nicht rückgängig gemacht werden.",
	ps = () => "¿Denegar esta solicitud de corrección? No se puede deshacer.",
	ks = () =>
		"Refuser cette demande de correction ? Cette action est irréversible.",
	ms = () =>
		"Rifiutare questa richiesta di correzione? Non può essere annullato.",
	gs = () => "このリクエストを拒否しますか？元に戻せません。",
	hs = () => "Odrzucić tę prośbę o poprawkę? Nie można cofnąć.",
	ws = () => "Отклонить этот запрос? Это нельзя отменить.",
	bs = () => "Відхилити цей запит? Дію не можна скасувати.",
	xs = () => "Từ chối yêu cầu sửa này? Hành động không thể hoàn tác.",
	js = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? ls()
			: e === "pt"
				? vs()
				: e === "ch"
					? ds()
					: e === "de"
						? fs()
						: e === "es"
							? ps()
							: e === "fr"
								? ks()
								: e === "it"
									? ms()
									: e === "jp"
										? gs()
										: e === "pl"
											? hs()
											: e === "ru"
												? ws()
												: e === "uk"
													? bs()
													: xs();
	},
	ys = () => "Correction approved.",
	$s = () => "Correção aprovada.",
	zs = () => "更正已批准。",
	Rs = () => "Korrektur genehmigt.",
	Ns = () => "Corrección aprobada.",
	Ds = () => "Correction approuvée.",
	Cs = () => "Correzione approvata.",
	Ss = () => "リクエストを承認しました。",
	Is = () => "Poprawka zatwierdzona.",
	qs = () => "Запрос одобрен.",
	As = () => "Запит схвалено.",
	Us = () => "Đã duyệt yêu cầu sửa.",
	Ls = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? ys()
			: e === "pt"
				? $s()
				: e === "ch"
					? zs()
					: e === "de"
						? Rs()
						: e === "es"
							? Ns()
							: e === "fr"
								? Ds()
								: e === "it"
									? Cs()
									: e === "jp"
										? Ss()
										: e === "pl"
											? Is()
											: e === "ru"
												? qs()
												: e === "uk"
													? As()
													: Us();
	},
	Ps = () => "Correction denied.",
	Bs = () => "Correção negada.",
	Ts = () => "更正已拒绝。",
	Gs = () => "Korrektur abgelehnt.",
	Zs = () => "Corrección denegada.",
	Ms = () => "Correction refusée.",
	Es = () => "Correzione rifiutata.",
	Ks = () => "リクエストを拒否しました。",
	Js = () => "Poprawka odrzucona.",
	Os = () => "Запрос отклонён.",
	Fs = () => "Запит відхилено.",
	Hs = () => "Đã từ chối yêu cầu sửa.",
	Vs = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Ps()
			: e === "pt"
				? Bs()
				: e === "ch"
					? Ts()
					: e === "de"
						? Gs()
						: e === "es"
							? Zs()
							: e === "fr"
								? Ms()
								: e === "it"
									? Es()
									: e === "jp"
										? Ks()
										: e === "pl"
											? Js()
											: e === "ru"
												? Os()
												: e === "uk"
													? Fs()
													: Hs();
	},
	Ws = () => "Decision comparison",
	Qs = () => "Comparação de decisões",
	Xs = () => "处理对比",
	Ys = () => "Entscheidungsvergleich",
	ea = () => "Comparación de decisiones",
	ra = () => "Comparaison des décisions",
	ta = () => "Confronto delle decisioni",
	na = () => "判断の比較",
	ia = () => "Porównanie decyzji",
	_a = () => "Сравнение решений",
	sa = () => "Порівняння рішень",
	aa = () => "So sánh quyết định",
	vr = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Ws()
			: e === "pt"
				? Qs()
				: e === "ch"
					? Xs()
					: e === "de"
						? Ys()
						: e === "es"
							? ea()
							: e === "fr"
								? ra()
								: e === "it"
									? ta()
									: e === "jp"
										? na()
										: e === "pl"
											? ia()
											: e === "ru"
												? _a()
												: e === "uk"
													? sa()
													: aa();
	},
	oa = () => "Report",
	ca = () => "Denúncia",
	ua = () => "举报",
	la = () => "Meldung",
	va = () => "Reporte",
	da = () => "Signalement",
	fa = () => "Segnalazione",
	pa = () => "報告",
	ka = () => "Zgłoszenie",
	ma = () => "Жалоба",
	ga = () => "Скарга",
	ha = () => "Báo cáo",
	dr = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? oa()
			: e === "pt"
				? ca()
				: e === "ch"
					? ua()
					: e === "de"
						? la()
						: e === "es"
							? va()
							: e === "fr"
								? da()
								: e === "it"
									? fa()
									: e === "jp"
										? pa()
										: e === "pl"
											? ka()
											: e === "ru"
												? ma()
												: e === "uk"
													? ga()
													: ha();
	},
	wa = () => "No report linked",
	ba = () => "Nenhuma denúncia vinculada",
	xa = () => "未关联举报",
	ja = () => "Keine Meldung verknüpft",
	ya = () => "Sin reporte vinculado",
	$a = () => "Aucun signalement lié",
	za = () => "Nessuna segnalazione collegata",
	Ra = () => "関連する報告なし",
	Na = () => "Brak powiązanego zgłoszenia",
	Da = () => "Жалоба не привязана",
	Ca = () => "Скаргу не прив'язано",
	Sa = () => "Không có báo cáo liên kết",
	Ia = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? wa()
			: e === "pt"
				? ba()
				: e === "ch"
					? xa()
					: e === "de"
						? ja()
						: e === "es"
							? ya()
							: e === "fr"
								? $a()
								: e === "it"
									? za()
									: e === "jp"
										? Ra()
										: e === "pl"
											? Na()
											: e === "ru"
												? Da()
												: e === "uk"
													? Ca()
													: Sa();
	},
	qa = () => "Reported by",
	Aa = () => "Denunciado por",
	Ua = () => "举报人",
	La = () => "Gemeldet von",
	Pa = () => "Reportado por",
	Ba = () => "Signalé par",
	Ta = () => "Segnalato da",
	Ga = () => "報告者",
	Za = () => "Zgłoszone przez",
	Ma = () => "Кто пожаловался",
	Ea = () => "Хто поскаржився",
	Ka = () => "Người báo cáo",
	Ja = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? qa()
			: e === "pt"
				? Aa()
				: e === "ch"
					? Ua()
					: e === "de"
						? La()
						: e === "es"
							? Pa()
							: e === "fr"
								? Ba()
								: e === "it"
									? Ta()
									: e === "jp"
										? Ga()
										: e === "pl"
											? Za()
											: e === "ru"
												? Ma()
												: e === "uk"
													? Ea()
													: Ka();
	},
	Oa = () => "Reason",
	Fa = () => "Motivo",
	Ha = () => "原因",
	Va = () => "Grund",
	Wa = () => "Motivo",
	Qa = () => "Motif",
	Xa = () => "Motivo",
	Ya = () => "理由",
	eo = () => "Powód",
	ro = () => "Причина",
	to = () => "Причина",
	no = () => "Lý do",
	io = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Oa()
			: e === "pt"
				? Fa()
				: e === "ch"
					? Ha()
					: e === "de"
						? Va()
						: e === "es"
							? Wa()
							: e === "fr"
								? Qa()
								: e === "it"
									? Xa()
									: e === "jp"
										? Ya()
										: e === "pl"
											? eo()
											: e === "ru"
												? ro()
												: e === "uk"
													? to()
													: no();
	},
	_o = () => "Reported at",
	so = () => "Denunciado em",
	ao = () => "举报时间",
	oo = () => "Gemeldet am",
	co = () => "Reportado el",
	uo = () => "Signalé le",
	lo = () => "Segnalato il",
	vo = () => "報告日時",
	fo = () => "Zgłoszono",
	po = () => "Когда пожаловались",
	ko = () => "Коли поскаржилися",
	mo = () => "Thời điểm báo cáo",
	go = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? _o()
			: e === "pt"
				? so()
				: e === "ch"
					? ao()
					: e === "de"
						? oo()
						: e === "es"
							? co()
							: e === "fr"
								? uo()
								: e === "it"
									? lo()
									: e === "jp"
										? vo()
										: e === "pl"
											? fo()
											: e === "ru"
												? po()
												: e === "uk"
													? ko()
													: mo();
	},
	ho = () => "Notes",
	wo = () => "Notas",
	bo = () => "备注",
	xo = () => "Notizen",
	jo = () => "Notas",
	yo = () => "Notes",
	$o = () => "Note",
	zo = () => "メモ",
	Ro = () => "Notatki",
	No = () => "Заметки",
	Do = () => "Нотатки",
	Co = () => "Ghi chú",
	So = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? ho()
			: e === "pt"
				? wo()
				: e === "ch"
					? bo()
					: e === "de"
						? xo()
						: e === "es"
							? jo()
							: e === "fr"
								? yo()
								: e === "it"
									? $o()
									: e === "jp"
										? zo()
										: e === "pl"
											? Ro()
											: e === "ru"
												? No()
												: e === "uk"
													? Do()
													: Co();
	},
	Io = () => "Location",
	qo = () => "Localização",
	Ao = () => "位置",
	Uo = () => "Standort",
	Lo = () => "Ubicación",
	Po = () => "Emplacement",
	Bo = () => "Posizione",
	To = () => "場所",
	Go = () => "Lokalizacja",
	Zo = () => "Местоположение",
	Mo = () => "Розташування",
	Eo = () => "Vị trí",
	Ko = (i = {}, _ = {}) => {
		const e = _.locale ?? f();
		return e === "en"
			? Io()
			: e === "pt"
				? qo()
				: e === "ch"
					? Ao()
					: e === "de"
						? Uo()
						: e === "es"
							? Lo()
							: e === "fr"
								? Po()
								: e === "it"
									? Bo()
									: e === "jp"
										? To()
										: e === "pl"
											? Go()
											: e === "ru"
												? Zo()
												: e === "uk"
													? Mo()
													: Eo();
	};
var Jo = g('<span class="loading loading-spinner mx-auto"></span>'),
	Oo = g("<span> </span>"),
	Fo = g('<span class="text-base-content/70 ml-2"> </span>'),
	Ho = g('<span class="text-base-content/70 ml-2"> </span>'),
	Vo = g("<span> </span>"),
	Wo = g("<span> </span>"),
	Qo = g('<dt class="font-semibold"> </dt> <dd><!></dd>', 1),
	Xo = g('<dt class="font-semibold"> </dt> <dd> </dd>', 1),
	Yo = g(
		'<div class="mt-4"><h3 class="font-semibold"> </h3> <p class="bg-base-200 mt-1 rounded-xl p-3 text-sm whitespace-pre-line"> </p></div>',
	),
	ec = g('<span class="text-base-content/70 text-sm"> </span>'),
	rc = g("<span> </span>"),
	tc = g(
		'<div class="mt-2"><span class="text-base-content/60 text-sm"> </span> <p class="mt-1 text-sm whitespace-pre-line"> </p></div>',
	),
	nc = g(
		'<a class="mt-3 block w-fit" target="_blank" rel="noopener noreferrer"><img class="border-base-300 max-h-48 cursor-zoom-in rounded-lg border object-contain"/></a>',
	),
	ic = g(
		'<dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm"><dt class="text-base-content/60"> </dt> <dd><!></dd> <dt class="text-base-content/60"> </dt> <dd> </dd> <dt class="text-base-content/60"> </dt> <dd> </dd> <dt class="text-base-content/60"> </dt> <dd><a class="link" target="_blank" rel="noopener noreferrer"> </a></dd></dl> <!> <!>',
		1,
	),
	_c = g('<p class="text-base-content/60 text-sm"> </p>'),
	sc = g(
		'<div class="flex flex-col gap-3"><div class="flex flex-wrap items-center gap-2"><span class="font-semibold"> </span> <span> </span> <!></div> <div class="bg-base-200 rounded-xl p-4"><h4 class="mb-2 text-sm font-semibold"> </h4> <!></div></div>',
	),
	ac = g(
		'<div class="bg-base-100 rounded-2xl p-6 shadow"><h3 class="text-lg font-semibold"> </h3> <label class="mt-3 block"><span class="text-sm font-semibold"> </span> <textarea class="textarea textarea-bordered mt-1 w-full" rows="3" maxlength="1024"></textarea></label> <div class="mt-3 flex justify-end gap-2"><button class="btn btn-error"> </button> <button class="btn btn-success"> </button></div></div>',
	),
	oc = g('<div class="alert alert-warning"> </div>'),
	cc = g(
		'<header class="flex items-center justify-between gap-3"><h2 class="text-xl font-semibold"> </h2> <span> </span></header> <div class="bg-base-100 rounded-2xl p-6 shadow"><dl class="grid grid-cols-2 gap-x-6 gap-y-3 text-sm"><dt class="font-semibold"> </dt> <dd class="flex items-center gap-2"><!> <!></dd> <dt class="font-semibold"> </dt> <dd class="font-mono text-xs"> </dd> <dt class="font-semibold"> </dt> <dd><span> </span> <!></dd> <dt class="font-semibold"> </dt> <dd><span> </span> <!></dd> <dt class="font-semibold"> </dt> <dd><!></dd> <dt class="font-semibold"> </dt> <dd> </dd> <!> <!></dl> <div class="mt-4"><h3 class="font-semibold"> </h3> <p class="bg-base-200 mt-1 rounded-xl p-3 text-sm whitespace-pre-line"> </p></div> <!></div> <section class="bg-base-100 rounded-2xl p-6 shadow"><h3 class="font-semibold"> </h3> <div class="mt-3 grid gap-6 md:grid-cols-2"><!> <!></div></section> <!>',
		1,
	),
	uc = g(
		'<section class="flex flex-col gap-4"><a class="link text-sm"> </a> <!></section> <!>',
		1,
	);
function Cc(i, _) {
	dt(_, !0);
	const e = T(() => Number(rr.params.id));
	let ie = G(!0),
		H = G(!1),
		s = G(null),
		_e = G(""),
		se = G(!1),
		A = G("approve");
	lt(() => {
		if (!tr.hasPermission(yt.tickets.revertReview)) {
			wt(_r("/404"));
			return;
		}
		Ee();
	});
	async function Ee() {
		try {
			(q(ie, !0), q(s, await nr.getTicketReversal(n(e)), !0));
		} catch (d) {
			Be.error(d instanceof Error ? d.message : ir());
		} finally {
			q(ie, !1);
		}
	}
	function Ke(d) {
		(q(A, d, !0), q(se, !0));
	}
	async function fr() {
		if (!n(s)) return !1;
		try {
			return (
				q(H, !0),
				await nr.reviewTicketReversal(n(s).id, n(A), n(_e).trim()),
				Be.success(n(A) === "approve" ? Ls() : Vs()),
				await Ee(),
				!1
			);
		} catch (d) {
			return (Be.error(d instanceof Error ? d.message : ir()), !0);
		} finally {
			q(H, !1);
		}
	}
	function V(d) {
		return d ? (xt[d] ?? d) : "—";
	}
	function Je(d) {
		switch (d) {
			case "pending":
				return "badge-warning";
			case "approved":
				return "badge-success";
			case "denied":
				return "badge-error";
		}
	}
	function Z(d) {
		switch (d) {
			case "ban":
				return "badge-error";
			case "timeout":
				return "badge-warning";
			case "ignore":
				return "badge-neutral";
			default:
				return "badge-ghost";
		}
	}
	var Oe = uc();
	gt("1b6y7uk", (d) => {
		pt(
			(C) => {
				kt.title = `Wplace - ${C ?? ""}`;
			},
			[() => Rt()],
		);
	});
	var ae = O(Oe),
		W = r(ae),
		pr = r(W);
	t(W);
	var kr = a(W, 2);
	{
		var mr = (d) => {
				var C = Jo();
				m(d, C);
			},
			gr = (d) => {
				var C = cc(),
					M = O(C),
					E = r(M),
					oe = r(E, !0);
				t(E);
				var ce = a(E, 2),
					wr = r(ce, !0);
				(t(ce), t(M));
				var ue = a(M, 2),
					le = r(ue),
					ve = r(le),
					br = r(ve, !0);
				t(ve);
				var de = a(ve, 2),
					Fe = r(de);
				ne(Fe, {
					get userId() {
						return n(s).reportedUserId;
					},
					mode: "inline",
					children: (c, u) => {
						var l = Oo(),
							p = r(l);
						(t(l),
							k(() =>
								o(
									p,
									`${n(s).reportedUserName ?? ""} #${n(s).reportedUserId ?? ""}`,
								),
							),
							m(c, l));
					},
					$$slots: { default: !0 },
				});
				var xr = a(Fe, 2);
				{
					var jr = (c) => {
						$t(c, {
							get role() {
								return n(s).reportedUserRole;
							},
						});
					};
					R(xr, (c) => {
						n(s).reportedUserRole && n(s).reportedUserRole !== "user" && c(jr);
					});
				}
				t(de);
				var fe = a(de, 2),
					yr = r(fe, !0);
				t(fe);
				var pe = a(fe, 2),
					$r = r(pe, !0);
				t(pe);
				var ke = a(pe, 2),
					zr = r(ke, !0);
				t(ke);
				var me = a(ke, 2),
					Q = r(me),
					Rr = r(Q, !0);
				t(Q);
				var Nr = a(Q, 2);
				{
					var Dr = (c) => {
						var u = Fo(),
							l = r(u, !0);
						(t(u), k((p) => o(l, p), [() => V(n(s).previousReason)]), m(c, u));
					};
					R(Nr, (c) => {
						n(s).previousReason && c(Dr);
					});
				}
				t(me);
				var ge = a(me, 2),
					Cr = r(ge, !0);
				t(ge);
				var he = a(ge, 2),
					X = r(he),
					Sr = r(X, !0);
				t(X);
				var Ir = a(X, 2);
				{
					var qr = (c) => {
						var u = Ho(),
							l = r(u, !0);
						(t(u), k((p) => o(l, p), [() => V(n(s).newReason)]), m(c, u));
					};
					R(Ir, (c) => {
						n(s).newReason && c(qr);
					});
				}
				t(he);
				var we = a(he, 2),
					Ar = r(we, !0);
				t(we);
				var be = a(we, 2),
					Ur = r(be);
				(ne(Ur, {
					get userId() {
						return n(s).requesterUserId;
					},
					mode: "inline",
					children: (c, u) => {
						var l = Vo(),
							p = r(l);
						(t(l),
							k(() =>
								o(
									p,
									`${n(s).requesterName ?? ""} #${n(s).requesterUserId ?? ""}`,
								),
							),
							m(c, l));
					},
					$$slots: { default: !0 },
				}),
					t(be));
				var xe = a(be, 2),
					Lr = r(xe, !0);
				t(xe);
				var je = a(xe, 2),
					Pr = r(je, !0);
				t(je);
				var He = a(je, 2);
				{
					var Br = (c) => {
						var u = Qo(),
							l = O(u),
							p = r(l, !0);
						t(l);
						var h = a(l, 2),
							v = r(h);
						(ne(v, {
							get userId() {
								return n(s).reviewerUserId;
							},
							mode: "inline",
							children: (w, x) => {
								var b = Wo(),
									j = r(b);
								(t(b),
									k(() =>
										o(
											j,
											`${n(s).reviewerName ?? ""} #${n(s).reviewerUserId ?? ""}`,
										),
									),
									m(w, b));
							},
							$$slots: { default: !0 },
						}),
							t(h),
							k((w) => o(p, w), [() => mi()]),
							m(c, u));
					};
					R(He, (c) => {
						n(s).reviewerUserId && c(Br);
					});
				}
				var Tr = a(He, 2);
				{
					var Gr = (c) => {
						var u = Xo(),
							l = O(u),
							p = r(l, !0);
						t(l);
						var h = a(l, 2),
							v = r(h, !0);
						(t(h),
							k(
								(w, x) => {
									(o(p, w), o(v, x));
								},
								[
									() => Ci(),
									() =>
										new Date(n(s).reviewedAt).toLocaleString(
											navigator.language,
										),
								],
							),
							m(c, u));
					};
					R(Tr, (c) => {
						n(s).reviewedAt && c(Gr);
					});
				}
				t(le);
				var ye = a(le, 2),
					$e = r(ye),
					Zr = r($e, !0);
				t($e);
				var Ve = a($e, 2),
					Mr = r(Ve, !0);
				(t(Ve), t(ye));
				var Er = a(ye, 2);
				{
					var Kr = (c) => {
						var u = Yo(),
							l = r(u),
							p = r(l, !0);
						t(l);
						var h = a(l, 2),
							v = r(h, !0);
						(t(h),
							t(u),
							k(
								(w) => {
									(o(p, w), o(v, n(s).reviewNotes));
								},
								[() => r_()],
							),
							m(c, u));
					};
					R(Er, (c) => {
						n(s).reviewNotes && c(Kr);
					});
				}
				t(ue);
				var ze = a(ue, 2);
				{
					const c = (u, l = re, p = re, h = re, v = re) => {
						var w = sc(),
							x = r(w),
							b = r(x),
							j = r(b, !0);
						t(b);
						var S = a(b, 2),
							I = r(S, !0);
						t(S);
						var K = a(S, 2);
						{
							var U = (y) => {
								var $ = ec(),
									L = r($, !0);
								(t($), k((P) => o(L, P), [() => V(h())]), m(y, $));
							};
							R(K, (y) => {
								h() && y(U);
							});
						}
						t(x);
						var Y = a(x, 2),
							J = r(Y),
							Ne = r(J, !0);
						t(J);
						var Wr = a(J, 2);
						{
							var Qr = (y) => {
									var $ = ic(),
										L = O($),
										P = r(L),
										Yr = r(P, !0);
									t(P);
									var De = a(P, 2),
										et = r(De);
									(ne(et, {
										get userId() {
											return v().reportedBy;
										},
										mode: "inline",
										children: (N, D) => {
											var z = rc(),
												B = r(z);
											(t(z),
												k(() =>
													o(
														B,
														`${v().reportedByName ?? ""} #${v().reportedBy ?? ""}`,
													),
												),
												m(N, z));
										},
										$$slots: { default: !0 },
									}),
										t(De));
									var Ce = a(De, 2),
										rt = r(Ce, !0);
									t(Ce);
									var Se = a(Ce, 2),
										tt = r(Se, !0);
									t(Se);
									var Ie = a(Se, 2),
										nt = r(Ie, !0);
									t(Ie);
									var qe = a(Ie, 2),
										it = r(qe, !0);
									t(qe);
									var Ae = a(qe, 2),
										_t = r(Ae, !0);
									t(Ae);
									var Xe = a(Ae, 2),
										Ue = r(Xe),
										st = r(Ue);
									(t(Ue), t(Xe), t(L));
									var Ye = a(L, 2);
									{
										var at = (N) => {
											var D = tc(),
												z = r(D),
												B = r(z, !0);
											t(z);
											var ee = a(z, 2),
												Le = r(ee, !0);
											(t(ee),
												t(D),
												k(
													(Pe) => {
														(o(B, Pe), o(Le, v().notes));
													},
													[() => So()],
												),
												m(N, D));
										};
										R(Ye, (N) => {
											v().notes && N(at);
										});
									}
									var ot = a(Ye, 2);
									{
										var ct = (N) => {
											var D = nc(),
												z = r(D);
											(t(D),
												k(
													(B) => {
														(F(D, "href", v().imageUrl),
															F(z, "src", v().imageUrl),
															F(z, "alt", B));
													},
													[() => dr()],
												),
												m(N, D));
										};
										R(ot, (N) => {
											v().imageUrl && N(ct);
										});
									}
									(k(
										(N, D, z, B, ee, Le, Pe, ut) => {
											(o(Yr, N),
												o(rt, D),
												o(tt, z),
												o(nt, B),
												o(it, ee),
												o(_t, Le),
												F(
													Ue,
													"href",
													`${rr.url.origin}/?lat=${v().reportedLatitude}&lng=${v().reportedLongitude}&select=true${v().zoom ? `&zoom=${v().zoom}` : ""}`,
												),
												o(st, `${Pe ?? ""}, ${ut ?? ""}`));
										},
										[
											() => Ja(),
											() => io(),
											() => V(v().reason),
											() => go(),
											() =>
												new Date(v().createdAt).toLocaleString(
													navigator.language,
												),
											() => Ko(),
											() => v().reportedLatitude.toFixed(5),
											() => v().reportedLongitude.toFixed(5),
										],
									),
										m(y, $));
								},
								Xr = (y) => {
									var $ = _c(),
										L = r($, !0);
									(t($), k((P) => o(L, P), [() => Ia()]), m(y, $));
								};
							R(Wr, (y) => {
								v() ? y(Qr) : y(Xr, !1);
							});
						}
						(t(Y),
							t(w),
							k(
								(y, $) => {
									(o(j, l()), te(S, 1, y), o(I, p()), o(Ne, $));
								},
								[() => `badge ${Z(p())}`, () => dr()],
							),
							m(u, w));
					};
					var Re = r(ze),
						Jr = r(Re, !0);
					t(Re);
					var We = a(Re, 2),
						Qe = r(We);
					{
						let u = T(() => Te());
						c(
							Qe,
							() => n(u),
							() => n(s).previousStatus,
							() => n(s).previousReason,
							() => n(s).previousReport,
						);
					}
					var Or = a(Qe, 2);
					{
						let u = T(() => Ge());
						c(
							Or,
							() => n(u),
							() => n(s).newStatus,
							() => n(s).newReason,
							() => n(s).selectedReport,
						);
					}
					(t(We),
						t(ze),
						k(
							(u, l, p, h, v, w, x, b, j, S, I, K, U) => o(Jr, U),
							[
								() => sr({ id: n(s).id }),
								() => `badge ${Je(n(s).status)}`,
								() => ar(),
								() => or(),
								() => Te(),
								() => `badge ${Z(n(s).previousStatus)}`,
								() => Ge(),
								() => `badge ${Z(n(s).newStatus)}`,
								() => cr(),
								() => ur(),
								() =>
									new Date(n(s).createdAt).toLocaleString(navigator.language),
								() => lr(),
								() => vr(),
							],
						));
				}
				var Fr = a(ze, 2);
				{
					var Hr = (c) => {
							var u = ac(),
								l = r(u),
								p = r(l, !0);
							t(l);
							var h = a(l, 2),
								v = r(h),
								w = r(v, !0);
							t(v);
							var x = a(v, 2);
							(mt(x), t(h));
							var b = a(h, 2),
								j = r(b),
								S = r(j, !0);
							t(j);
							var I = a(j, 2),
								K = r(I, !0);
							(t(I),
								t(b),
								t(u),
								k(
									(U, Y, J, Ne) => {
										(o(p, U),
											o(w, Y),
											(j.disabled = n(H)),
											o(S, J),
											(I.disabled = n(H)),
											o(K, Ne));
									},
									[() => f_(), () => R_(), () => Me(), () => Ze()],
								),
								ht(
									x,
									() => n(_e),
									(U) => q(_e, U),
								),
								er("click", j, () => Ke("deny")),
								er("click", I, () => Ke("approve")),
								m(c, u));
						},
						Vr = (c) => {
							var u = oc(),
								l = r(u, !0);
							(t(u), k((p) => o(l, p), [() => bt()]), m(c, u));
						};
					R(Fr, (c) => {
						var u;
						n(s).status === "pending" &&
						n(s).requesterUserId !== ((u = tr.data) == null ? void 0 : u.id)
							? c(Hr)
							: n(s).status === "pending" && c(Vr, 1);
					});
				}
				(k(
					(c, u, l, p, h, v, w, x, b, j, S, I, K) => {
						(o(oe, c),
							te(ce, 1, u),
							o(wr, n(s).status),
							o(br, l),
							o(yr, p),
							o($r, n(s).ticketId),
							o(zr, h),
							te(Q, 1, v),
							o(Rr, n(s).previousStatus),
							o(Cr, w),
							te(X, 1, x),
							o(Sr, n(s).newStatus),
							o(Ar, b),
							o(Lr, j),
							o(Pr, S),
							o(Zr, I),
							o(Mr, n(s).justification));
					},
					[
						() => sr({ id: n(s).id }),
						() => `badge ${Je(n(s).status)}`,
						() => ar(),
						() => or(),
						() => Te(),
						() => `badge ${Z(n(s).previousStatus)}`,
						() => Ge(),
						() => `badge ${Z(n(s).newStatus)}`,
						() => cr(),
						() => ur(),
						() => new Date(n(s).createdAt).toLocaleString(navigator.language),
						() => lr(),
						() => vr(),
					],
				),
					m(d, C));
			};
		R(kr, (d) => {
			n(ie) ? d(mr) : n(s) && d(gr, 1);
		});
	}
	t(ae);
	var hr = a(ae, 2);
	{
		let d = T(() => (n(A) === "deny" ? "warning" : "confirmation")),
			C = T(() => (n(A) === "approve" ? Ze() : Me())),
			M = T(() => (n(A) === "approve" ? us() : js())),
			E = T(() => (n(A) === "approve" ? Ze() : Me()));
		jt(hr, {
			get type() {
				return n(d);
			},
			get title() {
				return n(C);
			},
			get description() {
				return n(M);
			},
			get buttonText() {
				return n(E);
			},
			onConfirm: fr,
			get open() {
				return n(se);
			},
			set open(oe) {
				q(se, oe, !0);
			},
		});
	}
	(k(
		(d, C) => {
			(F(W, "href", d), o(pr, `← ${C ?? ""}`));
		},
		[() => _r("/dashboard/ticket-reversals"), () => zt()],
	),
		m(i, Oe),
		ft());
}
vt(["click"]);
export { Cc as component };
