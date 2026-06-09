import "../chunks/Bzak7iHL.js";
import { o as sa } from "../chunks/DMoMXVXI.js";
import {
	k as na,
	p as ia,
	e as Y,
	g as je,
	q as _r,
	f as Ce,
	a as d,
	b as oa,
	j as la,
	h as b,
	$ as da,
	i as e,
	d as a,
	r as t,
	s,
	t as f,
	l as se,
	u as x,
	c as g,
	n as Er,
	bp as me,
} from "../chunks/Dbe4PVAU.js";
import { s as o } from "../chunks/C_mo-lyU.js";
import { i as h } from "../chunks/Icl9dwnj.js";
import { k as ua } from "../chunks/ryCN0oNh.js";
import { e as Ke } from "../chunks/sR4NyGSS.js";
import { h as ca } from "../chunks/ClbV77Km.js";
import { a as be, c as Le, r as pa, s as Ue } from "../chunks/B7_gUtXa.js";
import { b as va } from "../chunks/C1Rrr0ww.js";
import { p as Fr } from "../chunks/DzNOOKXC.js";
import {
	a as ee,
	u as Pe,
	t as W,
	T as Kr,
	s as _a,
	d as fa,
} from "../chunks/DU-2YUMG.js";
import { P as Re } from "../chunks/JKnWQwH6.js";
import { P as Ve } from "../chunks/BFlSXuix.js";
import { R as Se } from "../chunks/D93kC7yH.js";
import { L as Vr, p as ga, S as ma, d as ba } from "../chunks/C-cxnuKD.js";
import { S as Ie } from "../chunks/xlnJ43Nf.js";
import { T as xa, t as ha, a as ya, n as $a } from "../chunks/yJuVUJnc.js";
import { C as wa } from "../chunks/GDUid2r-.js";
import {
	c as ka,
	t as ja,
	a as Ua,
	s as Aa,
	b as Ta,
	r as za,
	d as Ca,
	e as La,
	M as Pa,
	f as Ra,
	n as Sa,
} from "../chunks/CrUWeZvY.js";
import { R as Ia } from "../chunks/CbUCGNiK.js";
import { g as re } from "../chunks/BhCkpOlh.js";
import { a as Na } from "../chunks/CLEdZXaK.js";
import { a as Gr } from "../chunks/og9Js_3x.js";
import { b as Da } from "../chunks/DaX0l6qk.js";
import { n as Ba, d as Oa } from "../chunks/Cqr318Ee.js";
import { r as Ma } from "../chunks/CKCBxNBJ.js";
import { r as Ea } from "../chunks/WmcBTg9_.js";
import { u as Fa } from "../chunks/CyhDw_yt.js";
import { g as q, a as Wr } from "../chunks/DLrplejM.js";
const Ka = () => "Appeal",
	Va = () => "Apelo",
	Ga = () => "申诉",
	Wa = () => "Einspruch",
	qa = () => "Apelación",
	Za = () => "Recours",
	Ha = () => "Ricorso",
	Ja = () => "異議申立て",
	Qa = () => "Odwołanie",
	Xa = () => "Апелляция",
	Ya = () => "Апеляція",
	es = () => "Kháng cáo",
	qr = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? Ka()
			: r === "pt"
				? Va()
				: r === "ch"
					? Ga()
					: r === "de"
						? Wa()
						: r === "es"
							? qa()
							: r === "fr"
								? Za()
								: r === "it"
									? Ha()
									: r === "jp"
										? Ja()
										: r === "pl"
											? Qa()
											: r === "ru"
												? Xa()
												: r === "uk"
													? Ya()
													: es();
	},
	rs = () => "Approve",
	ts = () => "Aprovar",
	as = () => "批准",
	ss = () => "Genehmigen",
	ns = () => "Aprobar",
	is = () => "Approuver",
	os = () => "Approva",
	ls = () => "承認",
	ds = () => "Zatwierdź",
	us = () => "Одобрить",
	cs = () => "Схвалити",
	ps = () => "Chấp thuận",
	vs = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? rs()
			: r === "pt"
				? ts()
				: r === "ch"
					? as()
					: r === "de"
						? ss()
						: r === "es"
							? ns()
							: r === "fr"
								? is()
								: r === "it"
									? os()
									: r === "jp"
										? ls()
										: r === "pl"
											? ds()
											: r === "ru"
												? us()
												: r === "uk"
													? cs()
													: ps();
	},
	_s = () => "No appeal selected",
	fs = () => "Nenhum appeal selecionado",
	gs = () => "未选择申诉",
	ms = () => "Kein Einspruch ausgewählt",
	bs = () => "Ninguna apelación seleccionada",
	xs = () => "Aucun recours sélectionné",
	hs = () => "Nessun ricorso selezionato",
	ys = () => "選択された異議申立てはありません。",
	$s = () => "Nie wybrano odwołania",
	ws = () => "Апелляция не выбрана",
	ks = () => "Апеляцію не вибрано",
	js = () => "Chưa chọn kháng cáo nào",
	Us = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? _s()
			: r === "pt"
				? fs()
				: r === "ch"
					? gs()
					: r === "de"
						? ms()
						: r === "es"
							? bs()
							: r === "fr"
								? xs()
								: r === "it"
									? hs()
									: r === "jp"
										? ys()
										: r === "pl"
											? $s()
											: r === "ru"
												? ws()
												: r === "uk"
													? ks()
													: js();
	},
	As = () => "No pending appeals",
	Ts = () => "Sem apelos pendentes",
	zs = () => "没有待处理申诉",
	Cs = () => "Keine offenen Einsprüche",
	Ls = () => "No hay apelaciones pendientes",
	Ps = () => "Aucun recours en attente",
	Rs = () => "Nessun ricorso in sospeso",
	Ss = () => "保留中の異議申立てはありません。",
	Is = () => "Brak oczekujących odwołań",
	Ns = () => "Нет ожидающих апелляций",
	Ds = () => "Немає апеляцій у черзі",
	Bs = () => "Không có kháng cáo đang chờ xử lý",
	Os = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? As()
			: r === "pt"
				? Ts()
				: r === "ch"
					? zs()
					: r === "de"
						? Cs()
						: r === "es"
							? Ls()
							: r === "fr"
								? Ps()
								: r === "it"
									? Rs()
									: r === "jp"
										? Ss()
										: r === "pl"
											? Is()
											: r === "ru"
												? Ns()
												: r === "uk"
													? Ds()
													: Bs();
	},
	Ms = () => "Open appeals",
	Es = () => "Apelos abertos",
	Fs = () => "待处理申诉",
	Ks = () => "Offene Einsprüche",
	Vs = () => "Apelaciones abiertas",
	Gs = () => "Recours ouverts",
	Ws = () => "Ricorsi aperti",
	qs = () => "未処理の異議申立て",
	Zs = () => "Otwarte odwołania",
	Hs = () => "Открытые апелляции",
	Js = () => "Відкриті апеляції",
	Qs = () => "Kháng cáo đang mở",
	Xs = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? Ms()
			: r === "pt"
				? Es()
				: r === "ch"
					? Fs()
					: r === "de"
						? Ks()
						: r === "es"
							? Vs()
							: r === "fr"
								? Gs()
								: r === "it"
									? Ws()
									: r === "jp"
										? qs()
										: r === "pl"
											? Zs()
											: r === "ru"
												? Hs()
												: r === "uk"
													? Js()
													: Qs();
	},
	Ys = () => "Received tickets",
	en = () => "Tickets recebidos",
	rn = () => "收到的工单",
	tn = () => "Erhaltene Tickets",
	an = () => "Tickets recibidos",
	sn = () => "Tickets reçus",
	nn = () => "Ticket ricevuti",
	on = () => "受信したチケット",
	ln = () => "Odebrane tickety",
	dn = () => "Полученные тикеты",
	un = () => "Отримані тікети",
	cn = () => "Phiếu nhận được",
	pn = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? Ys()
			: r === "pt"
				? en()
				: r === "ch"
					? rn()
					: r === "de"
						? tn()
						: r === "es"
							? an()
							: r === "fr"
								? sn()
								: r === "it"
									? nn()
									: r === "jp"
										? on()
										: r === "pl"
											? ln()
											: r === "ru"
												? dn()
												: r === "uk"
													? un()
													: cn();
	},
	vn = () => "Reject",
	_n = () => "Rejeitar",
	fn = () => "驳回",
	gn = () => "Ablehnen",
	mn = () => "Rechazar",
	bn = () => "Rejeter",
	xn = () => "Rifiuta",
	hn = () => "却下",
	yn = () => "Odrzuć",
	$n = () => "Отклонить",
	wn = () => "Відхилити",
	kn = () => "Từ chối",
	jn = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? vn()
			: r === "pt"
				? _n()
				: r === "ch"
					? fn()
					: r === "de"
						? gn()
						: r === "es"
							? mn()
							: r === "fr"
								? bn()
								: r === "it"
									? xn()
									: r === "jp"
										? hn()
										: r === "pl"
											? yn()
											: r === "ru"
												? $n()
												: r === "uk"
													? wn()
													: kn();
	},
	Un = () => "Threated by",
	An = () => "Tratado por",
	Tn = () => "处理人",
	zn = () => "Bearbeitet von",
	Cn = () => "Tratado por",
	Ln = () => "Traité par",
	Pn = () => "Gestito da",
	Rn = () => "対応担当者",
	Sn = () => "Obsłużone przez",
	In = () => "Обработано",
	Nn = () => "Оброблено",
	Dn = () => "Được xử lý bởi",
	Bn = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? Un()
			: r === "pt"
				? An()
				: r === "ch"
					? Tn()
					: r === "de"
						? zn()
						: r === "es"
							? Cn()
							: r === "fr"
								? Ln()
								: r === "it"
									? Pn()
									: r === "jp"
										? Rn()
										: r === "pl"
											? Sn()
											: r === "ru"
												? In()
												: r === "uk"
													? Nn()
													: Dn();
	},
	On = () => "User message",
	Mn = () => "Mensagem do usuário",
	En = () => "用户消息",
	Fn = () => "Benutzernachricht",
	Kn = () => "Mensaje del usuario",
	Vn = () => "Message de l’utilisateur",
	Gn = () => "Messaggio dell'utente",
	Wn = () => "ユーザーからのメッセージ",
	qn = () => "Wiadomość użytkownika",
	Zn = () => "Сообщение пользователя",
	Hn = () => "Повідомлення користувача",
	Jn = () => "Tin nhắn của người dùng",
	Qn = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? On()
			: r === "pt"
				? Mn()
				: r === "ch"
					? En()
					: r === "de"
						? Fn()
						: r === "es"
							? Kn()
							: r === "fr"
								? Vn()
								: r === "it"
									? Gn()
									: r === "jp"
										? Wn()
										: r === "pl"
											? qn()
											: r === "ru"
												? Zn()
												: r === "uk"
													? Hn()
													: Jn();
	},
	Xn = () => "Visit last painted pixel",
	Yn = () => "Visite o último pixel pintado",
	ei = () => "前往最后绘制的像素",
	ri = () => "Letzten gemalten Pixel besuchen",
	ti = () => "Visitar el último píxel pintado",
	ai = () => "Visiter le dernier pixel peint",
	si = () => "Visita l'ultimo pixel dipinto",
	ni = () => "最後に塗られたピクセルへ移動",
	ii = () => "Odwiedź ostatni pomalowany piksel",
	oi = () => "Перейти к последнему нарисованному пикселю",
	li = () => "Перейти до останнього намальованого пікселя",
	di = () => "Đến pixel cuối cùng đã tô",
	ui = (Z = {}, z = {}) => {
		const r = z.locale ?? re();
		return r === "en"
			? Xn()
			: r === "pt"
				? Yn()
				: r === "ch"
					? ei()
					: r === "de"
						? ri()
						: r === "es"
							? ti()
							: r === "fr"
								? ai()
								: r === "it"
									? si()
									: r === "jp"
										? ni()
										: r === "pl"
											? ii()
											: r === "ru"
												? oi()
												: r === "uk"
													? li()
													: di();
	};
var ci = g('<span class="text-base-content/80 mt-0.5 text-sm"> </span>'),
	pi = g(
		'<div class="flex items-center justify-center py-10"><span class="loading loading-spinner loading-md"></span></div>',
	),
	vi = g("<span> </span>"),
	_i = g(
		'<button><!> <div class="flex flex-col text-start"><div><!> <!></div> <div class="text-base-content/80 text-xs font-medium"> </div></div></button>',
	),
	fi = g('<div class="text-base-content/70 mt-4 text-center"> </div>'),
	gi = g("<span> </span>"),
	mi = g(
		'<div class="badge badge-error badge-outline mt-1 block w-full"><div class="flex justify-center gap-2"><b> </b> </div></div>',
	),
	bi = g(
		'<div class="badge badge-warning badge-outline mt-1 block w-full"><div class="flex justify-center gap-2"><div><b> </b> </div> <div> </div></div></div>',
	),
	xi = g("<span> </span>"),
	hi = g(
		'<div class="rounded-box border-base-300 border p-3"><div class="flex justify-between text-sm"><span class="font-medium"><!> <span class="badge badge-xs"> </span></span> <span class="text-base-content/80"> </span></div> <div class="mt-1 wrap-break-word whitespace-pre-wrap"> </div></div>',
	),
	yi = g('<div class="text-base-content/70 text-sm"> </div>'),
	$i = g(
		'<div class="rounded-box bg-base-100 border-base-300 mt-4 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3></div> <div class="mb-3 flex gap-2"><input class="input input-bordered input-sm w-full"/> <button class="btn btn-primary btn-sm"> </button></div> <div class="flex max-h-[34svh] flex-col gap-3 overflow-y-auto"><!> <!></div></div>',
	),
	wi = g(
		'<div class="flex items-center justify-center py-6"><span class="loading loading-spinner loading-md"></span></div>',
	),
	ki = g("<div> </div>"),
	ji = g('<div class="absolute right-3 bottom-3"><!></div>'),
	Ui = g(
		'<button><!> <!> <div><div><!></div> <div class="flex items-center gap-2"><span class="text-base-content/80 text-xs font-medium"> </span></div></div> <!></button>',
	),
	Ai = g("<span> </span>"),
	Ti = g(
		'<div><span class="font-semibold"> </span> <a target="_blank"><!> <span class="link">Link</span></a></div>',
	),
	zi = g(
		'<div><h5 class="font-semibold"> </h5> <p class="text-base-content/80 text-sm whitespace-pre-wrap"> </p></div>',
	),
	Ci = g(
		'<img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Report location"/>',
	),
	Li = g(
		'<div class="grid grid-cols-1 items-center gap-2"><a class="relative h-max rounded-md" title="Report location" target="_blank"><!> <!></a></div>',
	),
	Pi = g(
		'<div class="mt-2"><img class="border-base-content/20 mx-auto max-h-[70vh] w-max border" alt="Reported location"/></div>',
	),
	Ri = g(
		'<div class="flex flex-col gap-3"><h5 class="text-primary text-base font-semibold"> </h5> <div class="flex gap-3"><!> <div><div class="flex flex-col text-sm"><div class="flex gap-1 text-base"><span class="font-semibold"> </span> <span> </span> <!></div> <div class="text-base"><span class="font-semibold"> </span> <span> </span></div> <div><span class="font-semibold"> </span> </div> <!></div></div></div> <!> <!></div>',
	),
	Si = g(
		'<header class="bg-base-100 sticky top-0 z-10 px-8 py-6"><h4 class="flex items-center gap-2 text-lg font-semibold"> <div>|</div> <div> </div> <!> <!></h4></header> <section class="mt-4 flex flex-col gap-4 px-8 pb-10"></section>',
		1,
	),
	Ii = g('<span class="loading loading-spinner loading-md"></span>'),
	Ni = g(
		'<div class="text-base-content/70 flex h-full items-center justify-center"><!></div>',
	),
	Di = g(
		'<header class="mb-3 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3> <div class="flex gap-2"><button class="btn btn-outline btn-sm"><!> </button> <button class="btn btn-primary btn-sm"> </button> <button class="btn btn-error btn-sm"> </button></div></header> <div class="grid gap-4 md:grid-cols-[auto_1fr]"><div class="rounded-box border-base-300 flex min-w-max items-center border px-7 py-3"><div class="flex items-center gap-3"><!> <div class="w-full"><div class="flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="text-base-content/80 my-2 flex flex-wrap gap-2 text-sm"><div><b> </b> </div> <div>•</div> <div><b> </b> </div> <div>•</div> <div><b> </b> </div></div> <!> <!> <button class="btn btn-sm mt-2 w-full self-end"><!> </button></div></div></div> <div class="rounded-box border-base-300 min-w-0 border px-7 py-3"><h4 class="mb-2 text-base font-semibold"> </h4> <div class="text-base-content/80 text-sm wrap-break-word whitespace-pre-wrap"><p class=" max-h-[20svh] overflow-y-auto wrap-break-word"><!></p> <button class="btn btn-primary btn-xs mt-1"><!></button></div></div></div> <!> <div class="rounded-box bg-base-100 border-base-300 mt-4 border p-4 shadow"><div class="mb-2 flex items-center justify-between"><h3 class="text-lg font-semibold"> </h3></div> <div class="bg-base-200 rounded-box mt-3 grid h-[86svh] grid-cols-1 gap-4 overflow-hidden p-4 md:grid-cols-[320px_1fr]"><section class="flex h-full min-h-0 flex-col gap-3 overflow-y-auto p-1"><!> <!></section> <section class="rounded-box bg-base-100 overflow-y-auto wrap-break-word shadow"><!></section></div></div>',
		1,
	),
	Bi = g('<span class="loading loading-spinner loading-md"></span>'),
	Oi = g(
		'<div class="text-base-content/70 flex h-full items-center justify-center"><!></div>',
	),
	Mi = g(
		'<div class="bg-base-200 grid h-full grid-cols-[320px_1fr] gap-4 p-4"><section class="flex flex-col gap-3 overflow-auto px-1 pb-1"><div class="mb-3 flex items-center justify-between"><h2 class="text-xl font-semibold"> </h2> <!> <button class="btn btn-circle btn-sm"><!></button></div> <!> <!> <!></section> <section class="rounded-box bg-base-100 overflow-auto px-7 py-4 shadow"><!></section></div>',
	);
function bo(Z, z) {
	ia(z, !0);
	let r = Y(!1),
		xe = Y(!1),
		F = Y(je([])),
		l = Y(void 0),
		Zr = je({ received: 0 }),
		de = Y(je([])),
		Ne = Y(!1),
		fr = Y(0),
		De = Y(je([])),
		Ae = Y(""),
		ne = Y(void 0);
	const Hr = 20;
	sa(() => {
		mr();
	});
	async function gr() {
		try {
			(b(r, !0),
				b(F, await ee.getOpenAppeals(), !0),
				!e(l) && e(F).length > 0 && Ge(e(F)[0]));
		} catch (c) {
			W.error((c == null ? void 0 : c.message) ?? "Falha ao carregar appeals");
		} finally {
			b(r, !1);
		}
	}
	async function Jr(c = 1) {
		if (!(e(F).length >= c))
			try {
				(b(xe, !0), await ee.assignAppeals(), await gr());
			} catch (p) {
				W.error(
					(p == null ? void 0 : p.message) ?? "Falha ao buscar novos appeals",
				);
			} finally {
				b(xe, !1);
			}
	}
	async function Ge(c) {
		(b(l, c, !0), b(ne, void 0), await br(c.user.id));
	}
	async function mr() {
		(await ee.assignAppeals(),
			await gr(),
			Pe.hasPermission(Re.appeals.openCount) && (await et()));
	}
	async function br(c) {
		var p;
		try {
			b(Ne, !0);
			const k = Zr.received,
				te = await ee.getUserTickets(
					{
						userId: c,
						kind: "against",
						page: k,
						pageSize: Hr,
						appealId: (p = e(l)) == null ? void 0 : p.id,
					},
					"appeals",
				);
			(Pe.hasPermission(Re.appeals.notes_get) &&
				b(De, await ee.getUserNotes(c, "appeals").then((M) => M.notes), !0),
				b(de, k === 0 ? te : [...e(de), ...te], !0),
				e(de).length > 0 && b(ne, e(de)[0], !0));
		} catch (k) {
			(W.error(
				(k == null ? void 0 : k.message) ??
					"Falha ao carregar tickets do usuário",
			),
				b(de, [], !0));
		} finally {
			b(Ne, !1);
		}
	}
	async function xr(c, p) {
		try {
			(b(xe, !0),
				await ee.postSolveAppeal(c, p),
				b(
					F,
					e(F).filter((k) => k.id !== c),
					!0,
				),
				e(F)[0]
					? await Ge(e(F)[0])
					: (b(l, void 0), b(de, [], !0), b(ne, void 0)),
				e(F).length === 0 ? await Jr(1) : e(l) && (await br(e(l).user.id)),
				p ? W.success("Appeal aprovado") : W.success("Appeal rejeitado"));
		} catch (k) {
			W.error((k == null ? void 0 : k.message) ?? "Falha ao aprovar appeal");
		} finally {
			b(xe, !1);
		}
	}
	function Qr(c) {
		var p;
		(navigator.clipboard.writeText(String(c)),
			W.success(((p = Fa) == null ? void 0 : p()) ?? "User ID copied"));
	}
	async function Xr() {
		var p, k, te;
		if (!((p = e(l)) != null && p.user.id)) return;
		const c = e(Ae).trim();
		if (c)
			try {
				(b(r, !0),
					await ee.addUserNote(
						(k = e(l)) == null ? void 0 : k.user.id,
						c,
						"appeals",
					),
					b(Ae, ""),
					W.success("Nota adicionada"));
				try {
					const M = await ee.getUserNotes(
						(te = e(l)) == null ? void 0 : te.user.id,
						"appeals",
					);
					b(De, M.notes, !0);
				} catch (M) {
					console.error("Erro ao recarregar notas", M);
				}
			} catch (M) {
				W.error((M == null ? void 0 : M.message) ?? "Falha ao adicionar nota");
			} finally {
				b(r, !1);
			}
	}
	let We = je({}),
		ue = je({});
	async function Yr(c, p) {
		if (ue[p]) {
			ue[p] = !1;
			return;
		}
		if (We[p]) {
			ue[p] = !0;
			return;
		}
		try {
			ue[p] = !0;
			const k = await ee.getModerationTranslate(c, "appeals");
			We[p] = k;
		} catch (k) {
			(W.error(k.message), (ue[p] = !1));
		}
	}
	async function et() {
		try {
			b(fr, await ee.getPendingAppealsCount(), !0);
		} catch (c) {
			W.error(c.message);
		} finally {
			b(r, !1);
		}
	}
	function rt(c) {
		if (c.user.lastLatitude == null || c.user.lastLongitude == null) {
			W.error("Sem registro de último pixel");
			return;
		}
		const p = `${Fr.url.origin}/?lat=${c.user.lastLatitude}&lng=${c.user.lastLongitude}&select=true`;
		window.open(p, "_blank");
	}
	var hr = _r();
	ca("cmzjsn", (c) => {
		la(
			(p) => {
				da.title = `Wplace - ${p ?? ""}`;
			},
			[() => Gr()],
		);
	});
	var tt = Ce(hr);
	{
		var at = (c) => {
				var p = Mi(),
					k = a(p),
					te = a(k),
					M = a(te),
					nt = a(M, !0);
				t(M);
				var yr = s(M, 2);
				{
					var it = ($) => {
							var v = ci(),
								H = a(v);
							(t(v),
								f((S) => o(H, `${S ?? ""}: ${e(fr) ?? ""}`), [() => Xs()]),
								d($, v));
						},
						ot = x(() => Pe.hasPermission(Re.appeals.openCount));
					h(yr, ($) => {
						e(ot) && $(it);
					});
				}
				var Be = s(yr, 2),
					lt = a(Be);
				(Ia(lt, { class: "size-4" }), t(Be), t(te));
				var $r = s(te, 2);
				{
					var dt = ($) => {
						var v = pi();
						d($, v);
					};
					h($r, ($) => {
						e(r) && e(F).length === 0 && $(dt);
					});
				}
				var wr = s($r, 2);
				Ke(
					wr,
					17,
					() => e(F),
					($) => $.id,
					($, v) => {
						const H = x(() => {
							var B;
							return ((B = e(l)) == null ? void 0 : B.id) === e(v).id;
						});
						var S = _i(),
							he = a(S);
						{
							let B = x(() => e(v).user.picture ?? void 0);
							Ve(he, {
								class: "size-12",
								get userId() {
									return e(v).user.id;
								},
								get pictureUrl() {
									return e(B);
								},
							});
						}
						var K = s(he, 2),
							D = a(K),
							ce = a(D);
						{
							let B = x(() => q(e(v).user.id)),
								ve = x(() => q(e(v).user.id));
							Ie(ce, {
								get userId() {
									return e(v).user.id;
								},
								mode: "inline",
								get linkClass() {
									return e(B);
								},
								get textClass() {
									return e(ve);
								},
								children: (Te, Ze) => {
									var $e = vi(),
										Me = a($e);
									(t($e),
										f(() =>
											o(Me, `${e(v).user.name ?? ""} #${e(v).user.id ?? ""}`),
										),
										d(Te, $e));
								},
								$$slots: { default: !0 },
							});
						}
						var qe = s(ce, 2);
						{
							var pe = (B) => {
								Se(B, {
									get role() {
										return e(v).user.role;
									},
								});
							};
							h(qe, (B) => {
								e(v).user.role !== "user" && B(pe);
							});
						}
						t(D);
						var Oe = s(D, 2),
							ye = a(Oe, !0);
						(t(Oe),
							t(K),
							t(S),
							f(
								(B, ve) => {
									(be(
										S,
										1,
										Le({
											"bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-4 shadow":
												!0,
											"bg-primary/10 ring-2": e(H),
										}),
									),
										be(D, 1, `text-base font-semibold ${B ?? ""} flex gap-1.5`),
										o(ye, ve));
								},
								[
									() => q(e(v).user.id),
									() =>
										new Date(e(v).createdAt).toLocaleString(navigator.language),
								],
							),
							se("click", S, () => Ge(e(v))),
							d($, S));
					},
				);
				var ut = s(wr, 2);
				{
					var ct = ($) => {
						var v = fi(),
							H = a(v, !0);
						(t(v), f((S) => o(H, S), [() => Os()]), d($, v));
					};
					h(ut, ($) => {
						!e(r) && e(F).length === 0 && $(ct);
					});
				}
				t(k);
				var kr = s(k, 2),
					pt = a(kr);
				{
					var vt = ($) => {
							var v = Di(),
								H = Ce(v),
								S = a(H),
								he = a(S);
							t(S);
							var K = s(S, 2),
								D = a(K),
								ce = a(D);
							wa(ce, { class: "size-4" });
							var qe = s(ce);
							t(D);
							var pe = s(D, 2),
								Oe = a(pe, !0);
							t(pe);
							var ye = s(pe, 2),
								B = a(ye, !0);
							(t(ye), t(K), t(H));
							var ve = s(H, 2),
								Te = a(ve),
								Ze = a(Te),
								$e = a(Ze);
							{
								let n = x(() => e(l).user.picture ?? void 0);
								Ve($e, {
									class: "size-14",
									get userId() {
										return e(l).user.id;
									},
									get pictureUrl() {
										return e(n);
									},
								});
							}
							var Me = s($e, 2),
								He = a(Me),
								jr = a(He);
							Ie(jr, {
								get userId() {
									return e(l).user.id;
								},
								children: (n, i) => {
									var _ = gi(),
										j = a(_);
									(t(_),
										f(() =>
											o(j, `${e(l).user.name ?? ""} #${e(l).user.id ?? ""}`),
										),
										d(n, _));
								},
								$$slots: { default: !0 },
							});
							var Ur = s(jr, 2);
							{
								var ft = (n) => {
									{
										let i = x(() => Wr(e(l).user.allianceId)),
											_ = x(() => q(e(l).user.allianceId)),
											j = x(() => Wr(e(l).user.allianceId)),
											m = x(() => q(e(l).user.allianceId));
										ma(n, {
											get allianceId() {
												return e(l).user.allianceId;
											},
											get linkClass() {
												return `badge badge-sm border-0 ${e(i) ?? ""} ${e(_) ?? ""}`;
											},
											get textClass() {
												return `badge badge-sm border-0 ${e(j) ?? ""} ${e(m) ?? ""}`;
											},
											children: (y, U) => {
												Er();
												var C = me();
												(f(() => o(C, e(l).user.allianceName)), d(y, C));
											},
											$$slots: { default: !0 },
										});
									}
								};
								h(Ur, (n) => {
									e(l).user.allianceId && n(ft);
								});
							}
							var gt = s(Ur, 2);
							{
								var mt = (n) => {
									Se(n, {
										get role() {
											return e(l).user.role;
										},
									});
								};
								h(gt, (n) => {
									e(l).user.role !== "user" && n(mt);
								});
							}
							t(He);
							var Je = s(He, 2),
								Qe = a(Je),
								Xe = a(Qe),
								bt = a(Xe);
							t(Xe);
							var xt = s(Xe);
							t(Qe);
							var Ye = s(Qe, 4),
								er = a(Ye),
								ht = a(er);
							t(er);
							var yt = s(er);
							t(Ye);
							var Ar = s(Ye, 4),
								rr = a(Ar),
								$t = a(rr);
							t(rr);
							var wt = s(rr);
							(t(Ar), t(Je));
							var Tr = s(Je, 2);
							{
								var kt = (n) => {
										var i = mi(),
											_ = a(i),
											j = a(_),
											m = a(j);
										t(j);
										var y = s(j);
										(t(_),
											t(i),
											f(
												(U) => {
													(o(m, `${U ?? ""}:`),
														o(y, ` ${e(l).user.lastTimeoutReason ?? ""}`));
												},
												[() => Da()],
											),
											d(n, i));
									},
									jt = x(
										() =>
											new Date(e(l).user.timeoutUntil).getTime() >=
											Date.now() + 365 * Kr.day,
									);
								h(Tr, (n) => {
									e(jt) && n(kt);
								});
							}
							var zr = s(Tr, 2);
							{
								var Ut = (n) => {
										var i = bi(),
											_ = a(i),
											j = a(_),
											m = a(j),
											y = a(m);
										t(m);
										var U = s(m);
										t(j);
										var C = s(j, 2),
											O = a(C);
										(t(C),
											t(_),
											t(i),
											f(
												(E, J) => {
													(o(y, `${E ?? ""}:`),
														o(U, ` ${e(l).user.lastTimeoutReason ?? ""}`),
														o(O, `(${J ?? ""})`));
												},
												[
													() => ha(),
													() =>
														new Date(e(l).user.timeoutUntil).toLocaleString(
															navigator.language,
														),
												],
											),
											d(n, i));
									},
									At = x(
										() =>
											new Date(e(l).user.timeoutUntil).getTime() >=
												Date.now() &&
											new Date(e(l).user.timeoutUntil).getTime() <
												Date.now() + 365 * Kr.day,
									);
								h(zr, (n) => {
									e(At) && n(Ut);
								});
							}
							var tr = s(zr, 2),
								Cr = a(tr);
							Vr(Cr, { class: "size-4" });
							var Tt = s(Cr);
							(t(tr), t(Me), t(Ze), t(Te));
							var Lr = s(Te, 2),
								ar = a(Lr),
								zt = a(ar);
							t(ar);
							var Pr = s(ar, 2),
								sr = a(Pr),
								Ct = a(sr);
							{
								var Lt = (n) => {
										var i = me();
										(f((_) => o(i, _), [() => We[e(l).id] ?? Ua()]), d(n, i));
									},
									Pt = (n) => {
										var i = me();
										(f(() => o(i, e(l).notes)), d(n, i));
									};
								h(Ct, (n) => {
									ue[e(l).id] ? n(Lt) : n(Pt, !1);
								});
							}
							t(sr);
							var nr = s(sr, 2),
								Rt = a(nr);
							{
								var St = (n) => {
										var i = me();
										(f((_) => o(i, _), [() => Aa()]), d(n, i));
									},
									It = (n) => {
										var i = me();
										(f((_) => o(i, _), [() => Ta()]), d(n, i));
									};
								h(Rt, (n) => {
									ue[e(l).id] ? n(St) : n(It, !1);
								});
							}
							(t(nr), t(Pr), t(Lr), t(ve));
							var Rr = s(ve, 2);
							{
								var Nt = (n) => {
										var i = $i(),
											_ = a(i),
											j = a(_),
											m = a(j, !0);
										(t(j), t(_));
										var y = s(_, 2),
											U = a(y);
										pa(U);
										var C = s(U, 2),
											O = a(C, !0);
										(t(C), t(y));
										var E = s(y, 2),
											J = a(E);
										Ke(
											J,
											17,
											() => e(De),
											(R) => `${R.author.id}-${R.createdAt}`,
											(R, L) => {
												var A = hi(),
													u = a(A),
													V = a(u),
													ae = a(V);
												Ie(ae, {
													get userId() {
														return e(L).author.id;
													},
													children: (ke, lr) => {
														var _e = xi(),
															ze = a(_e);
														(t(_e),
															f(() =>
																o(
																	ze,
																	`${e(L).author.name ?? ""} #${e(L).author.id ?? ""}`,
																),
															),
															d(ke, _e));
													},
													$$slots: { default: !0 },
												});
												var w = s(ae, 2),
													I = a(w, !0);
												(t(w), t(V));
												var G = s(V, 2),
													Ee = a(G, !0);
												(t(G), t(u));
												var Q = s(u, 2),
													we = a(Q, !0);
												(t(Q),
													t(A),
													f(
														(ke) => {
															(o(I, e(L).author.role),
																o(Ee, ke),
																o(we, e(L).note));
														},
														[
															() =>
																new Date(e(L).createdAt).toLocaleString(
																	navigator.language,
																),
														],
													),
													d(R, A));
											},
										);
										var ie = s(J, 2);
										{
											var oe = (R) => {
												var L = yi(),
													A = a(L, !0);
												(t(L), f((u) => o(A, u), [() => $a()]), d(R, L));
											};
											h(ie, (R) => {
												e(De).length === 0 && R(oe);
											});
										}
										(t(E),
											t(i),
											f(
												(R, L, A, u) => {
													(o(m, R),
														Ue(U, "placeholder", L),
														(C.disabled = A),
														o(O, u));
												},
												[
													() => Ba(),
													() => ya(),
													() => !e(Ae).trim(),
													() => Na(),
												],
											),
											va(
												U,
												() => e(Ae),
												(R) => b(Ae, R),
											),
											se("click", C, () => Xr()),
											d(n, i));
									},
									Dt = x(() => Pe.hasPermission(Re.appeals.notes_get));
								h(Rr, (n) => {
									e(Dt) && n(Nt);
								});
							}
							var Sr = s(Rr, 2),
								ir = a(Sr),
								Ir = a(ir),
								Bt = a(Ir, !0);
							(t(Ir), t(ir));
							var Nr = s(ir, 2),
								or = a(Nr),
								Dr = a(or);
							{
								var Ot = (n) => {
									var i = wi();
									d(n, i);
								};
								h(Dr, (n) => {
									e(Ne) && n(Ot);
								});
							}
							var Mt = s(Dr, 2);
							(Ke(
								Mt,
								17,
								() => e(de),
								(n) => n.id,
								(n, i) => {
									var _ = _r(),
										j = Ce(_);
									{
										var m = (y) => {
											const U = x(() => new Date(e(i).createdAt)),
												C = x(() => {
													var w;
													return (
														((w = e(ne)) == null ? void 0 : w.id) === e(i).id
													);
												});
											var O = Ui(),
												E = a(O);
											xa(E, {
												get status() {
													return e(i).status;
												},
											});
											var J = s(E, 2);
											{
												let w = x(() => e(i).reportedUser.picture ?? void 0);
												Ve(J, {
													class: "size-12",
													get userId() {
														return e(i).reportedUser.id;
													},
													get pictureUrl() {
														return e(w);
													},
												});
											}
											var ie = s(J, 2),
												oe = a(ie),
												R = a(oe);
											{
												let w = x(() => q(e(i).reportedUser.id)),
													I = x(() => q(e(i).reportedUser.id));
												Ie(R, {
													get userId() {
														return e(i).reportedUser.id;
													},
													mode: "inline",
													get linkClass() {
														return e(w);
													},
													get textClass() {
														return e(I);
													},
													children: (G, Ee) => {
														var Q = ki(),
															we = a(Q);
														(t(Q),
															f(() =>
																o(
																	we,
																	`${e(i).reportedUser.name ?? ""} #${e(i).reportedUser.id ?? ""}`,
																),
															),
															d(G, Q));
													},
													$$slots: { default: !0 },
												});
											}
											t(oe);
											var L = s(oe, 2),
												A = a(L),
												u = a(A, !0);
											(t(A), t(L), t(ie));
											var V = s(ie, 2);
											{
												var ae = (w) => {
													var I = ji(),
														G = a(I);
													(Se(G, {
														get role() {
															return e(i).reportedUser.role;
														},
													}),
														t(I),
														d(w, I));
												};
												h(V, (w) => {
													e(i).reportedUser.role !== "user" && w(ae);
												});
											}
											(t(O),
												f(
													(w, I) => {
														(be(
															O,
															1,
															Le({
																"bg-base-100 ring-primary relative flex gap-2 rounded-2xl p-3 shadow":
																	!0,
																"bg-primary/10 ring-2": e(C),
															}),
														),
															be(
																oe,
																1,
																`flex items-center gap-2 text-base font-semibold
													${w ?? ""}`,
															),
															o(u, I));
													},
													[
														() => q(e(i).reportedUser.id),
														() => e(U).toLocaleString(navigator.language),
													],
												),
												se("click", O, () => {
													b(ne, e(i), !0);
												}),
												d(y, O));
										};
										h(j, (y) => {
											e(i).status != "ignore" && y(m);
										});
									}
									d(n, _);
								},
							),
								t(or));
							var Br = s(or, 2),
								Et = a(Br);
							{
								var Ft = (n) => {
										var i = _r(),
											_ = Ce(i);
										(ua(
											_,
											() => e(ne).id,
											(j) => {
												const m = x(() => e(ne));
												var y = Si(),
													U = Ce(y),
													C = a(U),
													O = a(C),
													E = s(O, 3),
													J = a(E);
												t(E);
												var ie = s(E, 2);
												{
													let A = x(() => q(e(m).assignedUser.id)),
														u = x(() => q(e(m).assignedUser.id));
													Ie(ie, {
														get userId() {
															return e(m).assignedUser.id;
														},
														mode: "inline",
														get linkClass() {
															return e(A);
														},
														get textClass() {
															return e(u);
														},
														children: (V, ae) => {
															var w = Ai(),
																I = a(w);
															(t(w),
																f(
																	(G) => {
																		(be(w, 1, G),
																			o(
																				I,
																				`${e(m).assignedUser.name ?? ""} #${e(m).assignedUser.id ?? ""}`,
																			));
																	},
																	[() => Le(q(e(m).assignedUser.id))],
																),
																d(V, w));
														},
														$$slots: { default: !0 },
													});
												}
												var oe = s(ie, 2);
												{
													var R = (A) => {
														Se(A, {
															get role() {
																return e(m).reportedUser.role;
															},
															big: !0,
														});
													};
													h(oe, (A) => {
														e(m).reportedUser.role !== "user" && A(R);
													});
												}
												(t(C), t(U));
												var L = s(U, 2);
												(Ke(
													L,
													21,
													() => e(m).reports,
													(A) => A.id,
													(A, u) => {
														const V = x(
																() =>
																	e(u).reportedLatitude != null &&
																	e(u).reportedLongitude != null,
															),
															ae = x(() => e(u).assignedReason ?? e(u).reason),
															w = x(() =>
																e(V)
																	? `${Fr.url.origin}/?lat=${e(u).reportedLatitude}&lng=${e(u).reportedLongitude}&select=true${e(u).zoom ? `&zoom=${e(u).zoom}` : ""}`
																	: null,
															);
														var I = Ri(),
															G = a(I),
															Ee = a(G);
														t(G);
														var Q = s(G, 2),
															we = a(Q);
														{
															let T = x(() => e(u).reportedByPicture ?? void 0);
															Ve(we, {
																class: "size-14",
																get userId() {
																	return e(u).reportedBy;
																},
																get pictureUrl() {
																	return e(T);
																},
															});
														}
														var ke = s(we, 2),
															lr = a(ke),
															_e = a(lr),
															ze = a(_e),
															Vt = a(ze);
														t(ze);
														var Fe = s(ze, 2),
															Gt = a(Fe);
														t(Fe);
														var Wt = s(Fe, 2);
														{
															var qt = (T) => {
																Se(T, {
																	get role() {
																		return e(m).reportedUser.role;
																	},
																	big: !0,
																});
															};
															h(Wt, (T) => {
																e(m).reportedUser.role !== "user" && T(qt);
															});
														}
														t(_e);
														var dr = s(_e, 2),
															ur = a(dr),
															Zt = a(ur);
														t(ur);
														var cr = s(ur, 2),
															Ht = a(cr, !0);
														(t(cr), t(dr));
														var pr = s(dr, 2),
															vr = a(pr),
															Jt = a(vr);
														t(vr);
														var Qt = s(vr);
														t(pr);
														var Xt = s(pr, 2);
														{
															var Yt = (T) => {
																var P = Ti(),
																	N = a(P),
																	le = a(N);
																t(N);
																var X = s(N, 2),
																	fe = a(X);
																(Vr(fe, { class: "inline size-4" }),
																	Er(2),
																	t(X),
																	t(P),
																	f(
																		(ge) => {
																			(o(le, `${ge ?? ""}:`),
																				Ue(X, "href", e(w)));
																		},
																		[() => La()],
																	),
																	d(T, P));
															};
															h(Xt, (T) => {
																e(V) && T(Yt);
															});
														}
														(t(lr), t(ke), t(Q));
														var Or = s(Q, 2);
														{
															var ea = (T) => {
																var P = zi(),
																	N = a(P),
																	le = a(N, !0);
																t(N);
																var X = s(N, 2),
																	fe = a(X, !0);
																(t(X),
																	t(P),
																	f(
																		(ge) => {
																			(o(le, ge), o(fe, e(u).notes));
																		},
																		[() => ba()],
																	),
																	d(T, P));
															};
															h(Or, (T) => {
																e(u).notes && T(ea);
															});
														}
														var ra = s(Or, 2);
														{
															var ta = (T) => {
																	var P = Li(),
																		N = a(P),
																		le = a(N);
																	{
																		var X = (ge) => {
																			var Mr = Ci();
																			(f(() => Ue(Mr, "src", e(u).imageUrl)),
																				d(ge, Mr));
																		};
																		h(le, (ge) => {
																			e(u).imageUrl && ge(X);
																		});
																	}
																	var fe = s(le, 2);
																	(Pa(fe, {
																		class:
																			"absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-[87%]",
																	}),
																		t(N),
																		t(P),
																		f(() => Ue(N, "href", e(w))),
																		d(T, P));
																},
																aa = (T) => {
																	var P = Pi(),
																		N = a(P);
																	(t(P),
																		f(() => Ue(N, "src", e(u).imageUrl)),
																		d(T, P));
																};
															h(ra, (T) => {
																e(w) ? T(ta) : e(u).imageUrl && T(aa, 1);
															});
														}
														(t(I),
															f(
																(T, P, N, le, X, fe) => {
																	(o(Ee, `${T ?? ""} #${e(u).id ?? ""}`),
																		o(Vt, `${P ?? ""}:`),
																		be(Fe, 1, N),
																		o(
																			Gt,
																			`${e(u).reportedByName ?? ""} #${e(u).reportedBy ?? ""}`,
																		),
																		o(Zt, `${le ?? ""}:`),
																		be(cr, 1, Le(_a[e(ae)])),
																		o(Ht, fa[e(ae)] ?? e(ae)),
																		o(Jt, `${X ?? ""}:`),
																		o(Qt, ` ${fe ?? ""}`));
																},
																[
																	() => za(),
																	() => Ca(),
																	() => Le(q(e(u).reportedBy)),
																	() => Ma(),
																	() => Oa(),
																	() =>
																		new Date(e(u).createdAt).toLocaleString(
																			navigator.language,
																		),
																],
															),
															d(A, I));
													},
												),
													t(L),
													f(
														(A, u, V) => {
															(Ue(C, "title", e(m).id),
																o(O, `${A ?? ""}: ${u ?? ""} `),
																o(J, `${V ?? ""}:`));
														},
														[
															() => Ra(),
															() => e(m).id.split("-").at(-1),
															() => Bn(),
														],
													),
													d(j, y));
											},
										),
											d(n, i));
									},
									Kt = (n) => {
										var i = Ni(),
											_ = a(i);
										{
											var j = (y) => {
													var U = Ii();
													d(y, U);
												},
												m = (y) => {
													var U = me();
													(f((C) => o(U, C), [() => Sa()]), d(y, U));
												};
											h(_, (y) => {
												e(Ne) ? y(j) : y(m, !1);
											});
										}
										(t(i), d(n, i));
									};
								h(Et, (n) => {
									e(ne) ? n(Ft) : n(Kt, !1);
								});
							}
							(t(Br),
								t(Nr),
								t(Sr),
								f(
									(n, i, _, j, m, y, U, C, O, E, J) => {
										(o(he, `${n ?? ""} #${e(l).id ?? ""}`),
											o(qe, ` ${i ?? ""}`),
											(pe.disabled = e(xe)),
											o(Oe, _),
											(ye.disabled = e(xe)),
											o(B, j),
											o(bt, `${m ?? ""}:`),
											o(xt, ` ${e(l).user.pixelsPainted ?? 0 ?? ""}`),
											o(ht, `${y ?? ""}:`),
											o(yt, ` ${e(l).user.reportedCount ?? 0 ?? ""}`),
											o($t, `${U ?? ""}:`),
											o(wt, ` ${e(l).user.timeoutCount ?? 0 ?? ""}`),
											o(Tt, ` ${C ?? ""}`),
											o(zt, `${O ?? ""} (${E ?? ""})`),
											o(Bt, J));
									},
									[
										() => qr(),
										() => ka({ userId: e(l).user.id }),
										() => vs(),
										() => jn(),
										() => ga(),
										() => Ea(),
										() => ja(),
										() => ui(),
										() => Qn(),
										() => qr(),
										() => pn(),
									],
								),
								se("click", D, () => Qr(e(l).user.id)),
								se("click", pe, () => {
									var n;
									return xr((n = e(l)) == null ? void 0 : n.id, !0);
								}),
								se("click", ye, () => {
									var n;
									return xr((n = e(l)) == null ? void 0 : n.id, !1);
								}),
								se("click", tr, () => rt(e(l))),
								se("click", nr, () => {
									var n, i;
									return Yr(
										(n = e(l)) == null ? void 0 : n.notes,
										(i = e(l)) == null ? void 0 : i.id,
									);
								}),
								d($, v));
						},
						_t = ($) => {
							var v = Oi(),
								H = a(v);
							{
								var S = (K) => {
										var D = Bi();
										d(K, D);
									},
									he = (K) => {
										var D = me();
										(f((ce) => o(D, ce), [() => Us()]), d(K, D));
									};
								h(H, (K) => {
									e(r) ? K(S) : K(he, !1);
								});
							}
							(t(v), d($, v));
						};
					h(pt, ($) => {
						e(l) ? $(vt) : $(_t, !1);
					});
				}
				(t(kr),
					t(p),
					f(
						($) => {
							(o(nt, $), (Be.disabled = e(r)));
						},
						[() => Gr()],
					),
					se("click", Be, mr),
					d(c, p));
			},
			st = x(() => Pe.hasAnyPermission(Re.appeals));
		h(tt, (c) => {
			e(st) && c(at);
		});
	}
	(d(Z, hr), oa());
}
na(["click"]);
export { bo as component };
