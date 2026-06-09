import "../chunks/Bzak7iHL.js";
import { o as Ne } from "../chunks/DMoMXVXI.js";
import {
	k as Ue,
	p as Ie,
	e as M,
	g as Pe,
	t as O,
	l as se,
	i as c,
	a as G,
	b as Ve,
	j as Ze,
	d as t,
	s as a,
	h as w,
	c as F,
	$ as Be,
	r,
	n as Ce,
} from "../chunks/Dbe4PVAU.js";
import { s as u } from "../chunks/C_mo-lyU.js";
import { i as De } from "../chunks/Icl9dwnj.js";
import { e as Te } from "../chunks/sR4NyGSS.js";
import { h as Ee } from "../chunks/ClbV77Km.js";
import { f as Ke, a as L, s as Me } from "../chunks/B7_gUtXa.js";
import { g as Oe } from "../chunks/C6d2kgDd.js";
import { a as Ge, t as Le, c as Fe, u as We } from "../chunks/DU-2YUMG.js";
import { P as Xe } from "../chunks/JKnWQwH6.js";
import { R as He } from "../chunks/CbUCGNiK.js";
import { g as o } from "../chunks/BhCkpOlh.js";
import { a as Je } from "../chunks/IWxsS1m0.js";
import { t as ne } from "../chunks/CqMJ2HFU.js";
import { r as ae } from "../chunks/DyQ9pPD3.js";
const Qe = () => "View",
	Ye = () => "Ver",
	et = () => "查看",
	tt = () => "Ansehen",
	rt = () => "Ver",
	st = () => "Voir",
	nt = () => "Visualizza",
	at = () => "表示",
	_t = () => "Zobacz",
	ct = () => "Открыть",
	ut = () => "Відкрити",
	it = () => "Xem",
	ot = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? Qe()
			: e === "pt"
				? Ye()
				: e === "ch"
					? et()
					: e === "de"
						? tt()
						: e === "es"
							? rt()
							: e === "fr"
								? st()
								: e === "it"
									? nt()
									: e === "jp"
										? at()
										: e === "pl"
											? _t()
											: e === "ru"
												? ct()
												: e === "uk"
													? ut()
													: it();
	},
	lt = () => "Pending",
	vt = () => "Pendente",
	dt = () => "待审核",
	pt = () => "Ausstehend",
	ft = () => "Pendiente",
	kt = () => "En attente",
	ht = () => "In sospeso",
	gt = () => "保留中",
	mt = () => "Oczekuje",
	bt = () => "В ожидании",
	xt = () => "Очікує",
	yt = () => "Đang chờ",
	wt = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? lt()
			: e === "pt"
				? vt()
				: e === "ch"
					? dt()
					: e === "de"
						? pt()
						: e === "es"
							? ft()
							: e === "fr"
								? kt()
								: e === "it"
									? ht()
									: e === "jp"
										? gt()
										: e === "pl"
											? mt()
											: e === "ru"
												? bt()
												: e === "uk"
													? xt()
													: yt();
	},
	jt = () => "Approved",
	St = () => "Aprovada",
	qt = () => "已批准",
	zt = () => "Genehmigt",
	$t = () => "Aprobada",
	Rt = () => "Approuvée",
	At = () => "Approvato",
	Nt = () => "承認済み",
	Ut = () => "Zatwierdzone",
	It = () => "Одобрено",
	Pt = () => "Схвалено",
	Vt = () => "Đã duyệt",
	Zt = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? jt()
			: e === "pt"
				? St()
				: e === "ch"
					? qt()
					: e === "de"
						? zt()
						: e === "es"
							? $t()
							: e === "fr"
								? Rt()
								: e === "it"
									? At()
									: e === "jp"
										? Nt()
										: e === "pl"
											? Ut()
											: e === "ru"
												? It()
												: e === "uk"
													? Pt()
													: Vt();
	},
	Bt = () => "Denied",
	Ct = () => "Negada",
	Dt = () => "已拒绝",
	Tt = () => "Abgelehnt",
	Et = () => "Denegada",
	Kt = () => "Refusée",
	Mt = () => "Rifiutato",
	Ot = () => "拒否",
	Gt = () => "Odrzucone",
	Lt = () => "Отклонено",
	Ft = () => "Відхилено",
	Wt = () => "Từ chối",
	Xt = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? Bt()
			: e === "pt"
				? Ct()
				: e === "ch"
					? Dt()
					: e === "de"
						? Tt()
						: e === "es"
							? Et()
							: e === "fr"
								? Kt()
								: e === "it"
									? Mt()
									: e === "jp"
										? Ot()
										: e === "pl"
											? Gt()
											: e === "ru"
												? Lt()
												: e === "uk"
													? Ft()
													: Wt();
	},
	Ht = () => "Reported user",
	Jt = () => "Usuário reportado",
	Qt = () => "被举报用户",
	Yt = () => "Gemeldeter Nutzer",
	er = () => "Usuario reportado",
	tr = () => "Utilisateur signalé",
	rr = () => "Utente segnalato",
	sr = () => "報告されたユーザー",
	nr = () => "Zgłoszony użytkownik",
	ar = () => "Пользователь",
	_r = () => "Користувач",
	cr = () => "Người bị báo cáo",
	ur = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? Ht()
			: e === "pt"
				? Jt()
				: e === "ch"
					? Qt()
					: e === "de"
						? Yt()
						: e === "es"
							? er()
							: e === "fr"
								? tr()
								: e === "it"
									? rr()
									: e === "jp"
										? sr()
										: e === "pl"
											? nr()
											: e === "ru"
												? ar()
												: e === "uk"
													? _r()
													: cr();
	},
	ir = () => "Change",
	or = () => "Mudança",
	lr = () => "变更",
	vr = () => "Änderung",
	dr = () => "Cambio",
	pr = () => "Changement",
	fr = () => "Variazione",
	kr = () => "変更",
	hr = () => "Zmiana",
	gr = () => "Изменение",
	mr = () => "Зміна",
	br = () => "Thay đổi",
	xr = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? ir()
			: e === "pt"
				? or()
				: e === "ch"
					? lr()
					: e === "de"
						? vr()
						: e === "es"
							? dr()
							: e === "fr"
								? pr()
								: e === "it"
									? fr()
									: e === "jp"
										? kr()
										: e === "pl"
											? hr()
											: e === "ru"
												? gr()
												: e === "uk"
													? mr()
													: br();
	},
	yr = () => "Requested by",
	wr = () => "Solicitada por",
	jr = () => "申请人",
	Sr = () => "Beantragt von",
	qr = () => "Solicitada por",
	zr = () => "Demandée par",
	$r = () => "Richiesto da",
	Rr = () => "申請者",
	Ar = () => "Zgłoszone przez",
	Nr = () => "Запросил",
	Ur = () => "Подав",
	Ir = () => "Người yêu cầu",
	Pr = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? yr()
			: e === "pt"
				? wr()
				: e === "ch"
					? jr()
					: e === "de"
						? Sr()
						: e === "es"
							? qr()
							: e === "fr"
								? zr()
								: e === "it"
									? $r()
									: e === "jp"
										? Rr()
										: e === "pl"
											? Ar()
											: e === "ru"
												? Nr()
												: e === "uk"
													? Ur()
													: Ir();
	},
	Vr = () => "Status",
	Zr = () => "Status",
	Br = () => "状态",
	Cr = () => "Status",
	Dr = () => "Estado",
	Tr = () => "Statut",
	Er = () => "Stato",
	Kr = () => "ステータス",
	Mr = () => "Status",
	Or = () => "Статус",
	Gr = () => "Статус",
	Lr = () => "Trạng thái",
	Fr = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? Vr()
			: e === "pt"
				? Zr()
				: e === "ch"
					? Br()
					: e === "de"
						? Cr()
						: e === "es"
							? Dr()
							: e === "fr"
								? Tr()
								: e === "it"
									? Er()
									: e === "jp"
										? Kr()
										: e === "pl"
											? Mr()
											: e === "ru"
												? Or()
												: e === "uk"
													? Gr()
													: Lr();
	},
	Wr = () => "Requested at",
	Xr = () => "Solicitada em",
	Hr = () => "申请时间",
	Jr = () => "Beantragt am",
	Qr = () => "Solicitada el",
	Yr = () => "Demandée le",
	es = () => "Richiesto il",
	ts = () => "申請日時",
	rs = () => "Zgłoszone",
	ss = () => "Создано",
	ns = () => "Подано",
	as = () => "Thời gian yêu cầu",
	_s = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? Wr()
			: e === "pt"
				? Xr()
				: e === "ch"
					? Hr()
					: e === "de"
						? Jr()
						: e === "es"
							? Qr()
							: e === "fr"
								? Yr()
								: e === "it"
									? es()
									: e === "jp"
										? ts()
										: e === "pl"
											? rs()
											: e === "ru"
												? ss()
												: e === "uk"
													? ns()
													: as();
	},
	cs = () => "No correction requests.",
	us = () => "Sem solicitações de correção.",
	is = () => "没有更正请求。",
	os = () => "Keine Korrektur-Anfragen.",
	ls = () => "No hay solicitudes de corrección.",
	vs = () => "Aucune demande de correction.",
	ds = () => "Nessuna richiesta di correzione.",
	ps = () => "修正リクエストはありません。",
	fs = () => "Brak próśb o poprawkę.",
	ks = () => "Нет запросов.",
	hs = () => "Немає запитів на виправлення.",
	gs = () => "Không có yêu cầu sửa.",
	ms = (i = {}, s = {}) => {
		const e = s.locale ?? o();
		return e === "en"
			? cs()
			: e === "pt"
				? us()
				: e === "ch"
					? is()
					: e === "de"
						? os()
						: e === "es"
							? ls()
							: e === "fr"
								? vs()
								: e === "it"
									? ds()
									: e === "jp"
										? ps()
										: e === "pl"
											? fs()
											: e === "ru"
												? ks()
												: e === "uk"
													? hs()
													: gs();
	};
var bs = F(
		'<tr><td> </td><td> </td><td><span> </span> <span class="mx-1">→</span> <span> </span></td><td> </td><td><span> </span></td><td> </td><td><a class="btn btn-sm"> </a></td></tr>',
	),
	xs = F('<tr><td colspan="7" class="text-center opacity-70"> </td></tr>'),
	ys = F(
		'<section class="flex flex-col gap-4"><header class="flex items-center justify-between gap-3"><h2 class="text-xl font-semibold"> </h2> <div class="flex items-center gap-2"><select class="select select-bordered select-sm"><option> </option><option> </option><option> </option><option> </option></select> <button class="btn btn-circle btn-sm"><!></button></div></header> <div class="bg-base-100 overflow-x-auto rounded-2xl shadow"><table class="table-zebra table"><thead><tr><th>#</th><th> </th><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody><!><!></tbody></table></div></section>',
	);
function Ds(i, s) {
	Ie(s, !0);
	let e = M(!1),
		j = M("pending"),
		S = M(Pe([]));
	Ne(() => {
		if (!We.hasPermission(Xe.tickets.revertReview)) {
			Oe(ae("/404"));
			return;
		}
		q();
	});
	async function q() {
		try {
			(w(e, !0),
				w(
					S,
					await Ge.listTicketReversals({
						status: c(j) || void 0,
						pageSize: 50,
					}),
					!0,
				));
		} catch (_) {
			Le.error(_ instanceof Error ? _.message : Fe());
		} finally {
			w(e, !1);
		}
	}
	function _e(_) {
		switch (_) {
			case "pending":
				return "badge-warning";
			case "approved":
				return "badge-success";
			case "denied":
				return "badge-error";
		}
	}
	function W(_) {
		switch (_) {
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
	var z = ys();
	Ee("14tjfck", (_) => {
		Ze(
			(n) => {
				Be.title = `Wplace - ${n ?? ""}`;
			},
			[() => ne()],
		);
	});
	var $ = t(z),
		R = t($),
		ce = t(R, !0);
	r(R);
	var X = a(R, 2),
		p = t(X),
		f = t(p),
		ue = t(f, !0);
	(r(f), (f.value = f.__value = "pending"));
	var k = a(f),
		ie = t(k, !0);
	(r(k), (k.value = k.__value = "approved"));
	var h = a(k),
		oe = t(h, !0);
	(r(h), (h.value = h.__value = "denied"));
	var x = a(h),
		le = t(x, !0);
	(r(x), (x.value = x.__value = ""), r(p));
	var y = a(p, 2),
		ve = t(y);
	(He(ve, { class: "size-4" }), r(y), r(X), r($));
	var H = a($, 2),
		J = t(H),
		A = t(J),
		Q = t(A),
		N = a(t(Q)),
		de = t(N, !0);
	r(N);
	var U = a(N),
		pe = t(U, !0);
	r(U);
	var I = a(U),
		fe = t(I, !0);
	r(I);
	var P = a(I),
		ke = t(P, !0);
	r(P);
	var Y = a(P),
		he = t(Y, !0);
	(r(Y), Ce(), r(Q), r(A));
	var ee = a(A),
		te = t(ee);
	Te(
		te,
		17,
		() => c(S),
		(_) => _.id,
		(_, n) => {
			var l = bs(),
				v = t(l),
				g = t(v, !0);
			r(v);
			var m = a(v),
				V = t(m);
			r(m);
			var b = a(m),
				d = t(b),
				Z = t(d, !0);
			r(d);
			var B = a(d, 4),
				be = t(B, !0);
			(r(B), r(b));
			var C = a(b),
				xe = t(C);
			r(C);
			var D = a(C),
				T = t(D),
				ye = t(T, !0);
			(r(T), r(D));
			var E = a(D),
				we = t(E, !0);
			r(E);
			var re = a(E),
				K = t(re),
				je = t(K, !0);
			(r(K),
				r(re),
				r(l),
				O(
					(Se, qe, ze, $e, Re, Ae) => {
						(u(g, c(n).id),
							u(
								V,
								`${c(n).reportedUserName ?? ""} #${c(n).reportedUserId ?? ""}`,
							),
							L(d, 1, Se),
							u(Z, c(n).previousStatus),
							L(B, 1, qe),
							u(be, c(n).newStatus),
							u(
								xe,
								`${c(n).requesterName ?? ""} #${c(n).requesterUserId ?? ""}`,
							),
							L(T, 1, ze),
							u(ye, c(n).status),
							u(we, $e),
							Me(K, "href", Re),
							u(je, Ae));
					},
					[
						() => `badge badge-sm ${W(c(n).previousStatus)}`,
						() => `badge badge-sm ${W(c(n).newStatus)}`,
						() => `badge ${_e(c(n).status)}`,
						() => new Date(c(n).createdAt).toLocaleString(navigator.language),
						() => ae(`/dashboard/ticket-reversals/${c(n).id}`),
						() => ot(),
					],
				),
				G(_, l));
		},
	);
	var ge = a(te);
	{
		var me = (_) => {
			var n = xs(),
				l = t(n),
				v = t(l, !0);
			(r(l), r(n), O((g) => u(v, g), [() => ms()]), G(_, n));
		};
		De(ge, (_) => {
			!c(e) && c(S).length === 0 && _(me);
		});
	}
	(r(ee),
		r(J),
		r(H),
		r(z),
		O(
			(_, n, l, v, g, m, V, b, d, Z) => {
				(u(ce, _),
					u(ue, n),
					u(ie, l),
					u(oe, v),
					u(le, g),
					(y.disabled = c(e)),
					u(de, m),
					u(pe, V),
					u(fe, b),
					u(ke, d),
					u(he, Z));
			},
			[
				() => ne(),
				() => wt(),
				() => Zt(),
				() => Xt(),
				() => Je(),
				() => ur(),
				() => xr(),
				() => Pr(),
				() => Fr(),
				() => _s(),
			],
		),
		se("change", p, q),
		Ke(
			p,
			() => c(j),
			(_) => w(j, _),
		),
		se("click", y, q),
		G(i, z),
		Ve());
}
Ue(["change", "click"]);
export { Ds as component };
