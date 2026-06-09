import "../chunks/Bzak7iHL.js";
import { o as pr } from "../chunks/DMoMXVXI.js";
import {
	k as dr,
	p as ir,
	e as y,
	g as Z,
	q as ut,
	f as _t,
	a as j,
	b as lr,
	j as ur,
	$ as _r,
	i as a,
	h as v,
	d as t,
	r,
	s as o,
	t as O,
	v as vr,
	l as k,
	u as vt,
	c as T,
} from "../chunks/Dbe4PVAU.js";
import { s as n } from "../chunks/C_mo-lyU.js";
import { i as Be } from "../chunks/Icl9dwnj.js";
import { e as fr } from "../chunks/sR4NyGSS.js";
import { h as br } from "../chunks/ClbV77Km.js";
import { r as ft, s as mr } from "../chunks/B7_gUtXa.js";
import { b as bt } from "../chunks/C1Rrr0ww.js";
import { g as gr } from "../chunks/C6d2kgDd.js";
import { a as xr, u as mt, t as hr } from "../chunks/DU-2YUMG.js";
import { P as gt } from "../chunks/JKnWQwH6.js";
import { R as yr } from "../chunks/DX1r3K5G.js";
import { S as jr } from "../chunks/xlnJ43Nf.js";
import { P as kr } from "../chunks/BFlSXuix.js";
import { C as Rr } from "../chunks/GDUid2r-.js";
import { R as wr } from "../chunks/CbUCGNiK.js";
import { g as A } from "../chunks/BhCkpOlh.js";
import { a as xt } from "../chunks/og9Js_3x.js";
import { a as Ar } from "../chunks/CD0Nhe1Q.js";
import { a as Ir, r as $r } from "../chunks/DIPg6T2F.js";
import { b as zr } from "../chunks/CwftxlTm.js";
import { b as Cr, e as Tr } from "../chunks/Ch38BS2u.js";
import { e as Sr } from "../chunks/kMrz8wtr.js";
import { e as Dr } from "../chunks/SpO575Nf.js";
import { l as Lr } from "../chunks/Cp-hTSeP.js";
import { n as Mr } from "../chunks/Bvwls8qX.js";
import { r as Or } from "../chunks/DBS6HGbD.js";
import { r as Er } from "../chunks/C5ukCcxH.js";
import { s as Ur } from "../chunks/DIbtzbsw.js";
import { t as Pr } from "../chunks/mOmV0vnx.js";
import { t as Fr } from "../chunks/B6k04QXL.js";
import { u as Yr } from "../chunks/CyhDw_yt.js";
const qr = () => "Appeals closed today",
	Nr = () => "Apelos encerrados hoje",
	Br = () => "上诉于今日截止",
	Gr = () => "Einsprüche heute geschlossen",
	Vr = () => "Apelaciones cerraron hoy",
	Zr = () => "Les appels sont clos aujourd'hui",
	Hr = () => "I ricorsi sono stati chiusi oggi",
	Kr = () => "異議申し立ては本日締め切られました",
	Wr = () => "Odwołania zakończone dzisiaj",
	Jr = () => "Апелляции закрыты сегодня",
	Qr = () => "Апеляції закриті сьогодні",
	Xr = () => "Thời gian kháng cáo đã kết thúc hôm nay",
	ea = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? qr()
			: e === "pt"
				? Nr()
				: e === "ch"
					? Br()
					: e === "de"
						? Gr()
						: e === "es"
							? Vr()
							: e === "fr"
								? Zr()
								: e === "it"
									? Hr()
									: e === "jp"
										? Kr()
										: e === "pl"
											? Wr()
											: e === "ru"
												? Jr()
												: e === "uk"
													? Qr()
													: Xr();
	},
	ta = () => "Appeals closed yesterday",
	ra = () => "Apelos encerrados ontem",
	aa = () => "上诉已于昨日结束",
	sa = () => "Die Einspruchsfrist endete gestern",
	oa = () => "Las apelaciones se cerraron ayer",
	na = () => "Les recours ont été clôturés hier",
	ca = () => "I ricorsi si sono chiusi ieri",
	pa = () => "異議申し立ては昨日締め切られました",
	da = () => "Odwołania zamknięte wczoraj",
	ia = () => "Апелляции закрылись вчера",
	la = () => "Апеляції закрилися вчора",
	ua = () => "Thời gian kháng cáo đã kết thúc hôm qua",
	_a = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? ta()
			: e === "pt"
				? ra()
				: e === "ch"
					? aa()
					: e === "de"
						? sa()
						: e === "es"
							? oa()
							: e === "fr"
								? na()
								: e === "it"
									? ca()
									: e === "jp"
										? pa()
										: e === "pl"
											? da()
											: e === "ru"
												? ia()
												: e === "uk"
													? la()
													: ua();
	},
	va = () => "Appeals created today",
	fa = () => "Apelos criados hoje",
	ba = () => "今天创建的申诉",
	ma = () => "Heute erstellte Einsprüche",
	ga = () => "Apelaciones creadas hoy",
	xa = () => "Appels créés aujourd'hui",
	ha = () => "Ricorsi creati oggi",
	ya = () => "本日作成された異議申し立て",
	ja = () => "Odwołania utworzone dzisiaj",
	ka = () => "Обращения, созданные сегодня",
	Ra = () => "Звернення, створені сьогодні",
	wa = () => "Các khiếu nại được tạo hôm nay",
	Aa = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? va()
			: e === "pt"
				? fa()
				: e === "ch"
					? ba()
					: e === "de"
						? ma()
						: e === "es"
							? ga()
							: e === "fr"
								? xa()
								: e === "it"
									? ha()
									: e === "jp"
										? ya()
										: e === "pl"
											? ja()
											: e === "ru"
												? ka()
												: e === "uk"
													? Ra()
													: wa();
	},
	Ia = () => "Appeals created yesterday",
	$a = () => "Apelos criados ontem",
	za = () => "昨天创建的申诉",
	Ca = () => "Gestern erstellte Einsprüche",
	Ta = () => "Apelaciones creadas ayer",
	Sa = () => "Appels créés hier",
	Da = () => "Ricorsi creati ieri",
	La = () => "昨日作成された申し立て",
	Ma = () => "Odwołania utworzone wczoraj",
	Oa = () => "Обращения, созданные вчера",
	Ea = () => "Звернення, створені вчора",
	Ua = () => "Các khiếu nại được tạo hôm qua",
	Pa = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? Ia()
			: e === "pt"
				? $a()
				: e === "ch"
					? za()
					: e === "de"
						? Ca()
						: e === "es"
							? Ta()
							: e === "fr"
								? Sa()
								: e === "it"
									? Da()
									: e === "jp"
										? La()
										: e === "pl"
											? Ma()
											: e === "ru"
												? Oa()
												: e === "uk"
													? Ea()
													: Ua();
	},
	Fa = () => "Approve average",
	Ya = () => "Média de aprovados",
	qa = () => "批准平均值",
	Na = () => "Durchschnitt genehmigen",
	Ba = () => "Aprobar promedio",
	Ga = () => "Approuver la moyenne",
	Va = () => "Approva media",
	Za = () => "平均を承認",
	Ha = () => "Zatwierdź średnią",
	Ka = () => "Утвердить среднее",
	Wa = () => "Затвердити середнє",
	Ja = () => "Duyệt trung bình",
	Qa = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? Fa()
			: e === "pt"
				? Ya()
				: e === "ch"
					? qa()
					: e === "de"
						? Na()
						: e === "es"
							? Ba()
							: e === "fr"
								? Ga()
								: e === "it"
									? Va()
									: e === "jp"
										? Za()
										: e === "pl"
											? Ha()
											: e === "ru"
												? Ka()
												: e === "uk"
													? Wa()
													: Ja();
	},
	Xa = () => "Approve rate",
	es = () => "Taxa de aprovação",
	ts = () => "批准率",
	rs = () => "Rate genehmigen",
	as = () => "Aprobar tarifa",
	ss = () => "Approuver le taux",
	os = () => "Approva tasso",
	ns = () => "承認率",
	cs = () => "Zatwierdź stawkę",
	ps = () => "Утвердить ставку",
	ds = () => "Затвердити ставку",
	is = () => "Tỷ lệ phê duyệt",
	ls = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? Xa()
			: e === "pt"
				? es()
				: e === "ch"
					? ts()
					: e === "de"
						? rs()
						: e === "es"
							? as()
							: e === "fr"
								? ss()
								: e === "it"
									? os()
									: e === "jp"
										? ns()
										: e === "pl"
											? cs()
											: e === "ru"
												? ps()
												: e === "uk"
													? ds()
													: is();
	},
	us = () => "Approve rate average",
	_s = () => "Média da taxa de aprovação",
	vs = () => "平均批准率",
	fs = () => "Durchschnittliche Genehmigungsrate",
	bs = () => "Tasa de aprobación promedio",
	ms = () => "Taux d'approbation moyen",
	gs = () => "Tasso medio di approvazione",
	xs = () => "承認率平均",
	hs = () => "Średni wskaźnik akceptacji",
	ys = () => "Средний процент одобрения",
	js = () => "Середній показник схвалення",
	ks = () => "Tỷ lệ phê duyệt trung bình",
	Rs = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? us()
			: e === "pt"
				? _s()
				: e === "ch"
					? vs()
					: e === "de"
						? fs()
						: e === "es"
							? bs()
							: e === "fr"
								? ms()
								: e === "it"
									? gs()
									: e === "jp"
										? xs()
										: e === "pl"
											? hs()
											: e === "ru"
												? ys()
												: e === "uk"
													? js()
													: ks();
	},
	ws = () => "Reject average",
	As = () => "Média de rejeitados",
	Is = () => "拒绝平庸",
	$s = () => "Durchschnitt ablehnen",
	zs = () => "Rechaza lo promedio",
	Cs = () => "Rejeter la moyenne",
	Ts = () => "Rifiuta la media",
	Ss = () => "凡庸を拒否する",
	Ds = () => "Odrzuć przeciętność",
	Ls = () => "Отвергнуть посредственность",
	Ms = () => "Відкинь посередність",
	Os = () => "Từ chối sự tầm thường",
	Es = (x = {}, l = {}) => {
		const e = l.locale ?? A();
		return e === "en"
			? ws()
			: e === "pt"
				? As()
				: e === "ch"
					? Is()
					: e === "de"
						? $s()
						: e === "es"
							? zs()
							: e === "fr"
								? Cs()
								: e === "it"
									? Ts()
									: e === "jp"
										? Ss()
										: e === "pl"
											? Ds()
											: e === "ru"
												? Ls()
												: e === "uk"
													? Ms()
													: Os();
	};
var Us = T(
		'<tr><td colspan="6"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>',
	),
	Ps = T('<tr><td colspan="6" class="text-error"> </td></tr>'),
	Fs = T('<tr><td colspan="6" class="text-base-content/70"> </td></tr>'),
	Ys = T('<span class="flex items-center gap-2"><!> </span>'),
	qs = T('<button class="btn btn-xs"><!></button>'),
	Ns = T(
		'<tr class="hover"><td><div class="flex items-center gap-2"><!> <!></div></td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>',
	),
	Bs = T(
		'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold"> </h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm"> </span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm"> </span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs" type="button"> </button></th><th><button class="btn btn-ghost btn-xs" type="button"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs" type="button"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs" type="button"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs" type="button"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs" type="button"> </button></th></tr></thead><tbody><!></tbody></table></div></section>',
	);
function wo(x, l) {
	ir(l, !0);
	function e(s) {
		const c = s.getTime() - s.getTimezoneOffset() * 6e4;
		return new Date(c).toISOString().slice(0, 16);
	}
	const H = new Date();
	let K = y(Z(e(new Date(H.getFullYear(), H.getMonth(), 1)))),
		W = y(
			Z(e(new Date(H.getFullYear(), H.getMonth() + 1, 0, 23, 59, 59, 999))),
		);
	function J(s) {
		const c = new Date(s);
		return isNaN(c.getTime()) ? null : c.toISOString();
	}
	let S = y(!1),
		Q = y(null),
		f = y(Z([])),
		E = y(
			Z({
				appealsClosedToday: 0,
				appealsClosedYesterday: 0,
				appealsCreatedToday: 0,
				appealsCreatedYesterday: 0,
			}),
		),
		D = y(Z({ total: 0, approved: 0, rejected: 0, approveRate: 0 })),
		h = y("total"),
		g = y("desc");
	function Ge() {
		const s = a(g) === "asc" ? 1 : -1;
		(a(f).sort((c, d) => {
			switch (a(h)) {
				case "staff":
					return c.username.localeCompare(d.username) * s;
				case "role":
					return c.role.localeCompare(d.role) * s;
				case "approveRate":
					return (c.approveRate - d.approveRate) * s;
				case "approved":
					return (c.approved - d.approved) * s;
				case "rejected":
					return (c.rejected - d.rejected) * s;
				case "total":
				default:
					return (c.total - d.total) * s;
			}
		}),
			v(f, a(f), !0));
	}
	function L(s) {
		(a(h) === s
			? v(g, a(g) === "asc" ? "desc" : "asc", !0)
			: (v(h, s, !0), v(g, s === "staff" || s === "role" ? "asc" : "desc", !0)),
			Ge());
	}
	function ht(s) {
		return `${(s * 100).toFixed(1)}%`;
	}
	function yt(s) {
		const c = s;
		for (let d = 0; d < c.length; d += 1) {
			const p = c[d];
			p.approveRate = p.total === 0 ? 0 : p.approved / p.total;
		}
		return c;
	}
	function jt(s) {
		const c = [
				"staff_id",
				"role",
				"approve_rate",
				"approved",
				"rejected",
				"total",
			].join(","),
			d = s.map((p) =>
				[
					p.staffId,
					p.role,
					`${(p.approveRate * 100).toFixed(2)}%`,
					p.approved,
					p.rejected,
					p.total,
				].join(","),
			);
		return [c, ...d].join(`
`);
	}
	async function se() {
		try {
			(v(S, !0), v(Q, null));
			const s = J(a(K)),
				c = J(a(W));
			if (!s || !c) throw new Error("Datas inválidas");
			const d = await xr.getBanAppealStats(s, c);
			(v(f, yt(d.items), !0), v(E, d.globals, !0), Ge());
			const p = a(f).length;
			if (p === 0)
				v(D, { total: 0, approved: 0, rejected: 0, approveRate: 0 }, !0);
			else {
				let R = 0,
					M = 0,
					U = 0,
					X = 0;
				for (let I = 0; I < p; I += 1) {
					const w = a(f)[I];
					((R += w.total),
						(M += w.approved),
						(U += w.rejected),
						(X += w.approveRate));
				}
				v(
					D,
					{
						total: Math.round((R / p) * 100) / 100,
						approved: Math.round((M / p) * 100) / 100,
						rejected: Math.round((U / p) * 100) / 100,
						approveRate: Math.round((X / p) * 1e3) / 10,
					},
					!0,
				);
			}
		} catch (s) {
			if (
				(s == null ? void 0 : s.status) === 403 ||
				(s == null ? void 0 : s.status) === 401
			) {
				gr("/404");
				return;
			}
			(v(Q, (s == null ? void 0 : s.message) ?? Sr(), !0), v(f, [], !0));
		} finally {
			v(S, !1);
		}
	}
	function kt(s) {
		(s.preventDefault(), se());
	}
	function Rt() {
		const s = jt(a(f)),
			c = new Blob([s], { type: "text/csv;charset=utf-8;" }),
			d = URL.createObjectURL(c),
			p = document.createElement("a"),
			R = J(a(K)) ?? "start",
			M = J(a(W)) ?? "end";
		((p.href = d),
			(p.download = `ban_appeals_${R}_${M}.csv`),
			p.click(),
			URL.revokeObjectURL(d));
	}
	function wt(s) {
		var c;
		(navigator.clipboard.writeText(String(s)),
			hr.success(((c = Yr) == null ? void 0 : c()) ?? "User ID copied"));
	}
	pr(se);
	var Ve = ut();
	br("1s6w1qo", (s) => {
		ur(
			(c) => {
				_r.title = `Wplace - ${c ?? ""}`;
			},
			[() => xt()],
		);
	});
	var At = _t(Ve);
	{
		var It = (s) => {
				var c = Bs(),
					d = t(c),
					p = t(d),
					R = t(p),
					M = t(R, !0);
				r(R);
				var U = o(R, 2),
					X = t(U, !0);
				(r(U), r(p));
				var I = o(p, 2),
					w = t(I),
					oe = t(w),
					zt = t(oe, !0);
				r(oe);
				var Ze = o(oe, 2);
				(ft(Ze), r(w));
				var ne = o(w, 2),
					ce = t(ne),
					Ct = t(ce, !0);
				r(ce);
				var He = o(ce, 2);
				(ft(He), r(ne));
				var Ke = o(ne, 2),
					ee = t(Ke),
					Tt = t(ee, !0);
				r(ee);
				var P = o(ee, 2),
					St = t(P, !0);
				r(P);
				var F = o(P, 2),
					Dt = t(F);
				(wr(Dt, { class: "size-4" }), r(F), r(Ke), r(I), r(d));
				var pe = o(d, 2),
					de = t(pe),
					ie = t(de),
					Lt = t(ie, !0);
				r(ie);
				var We = o(ie, 2),
					Mt = t(We, !0);
				(r(We), r(de));
				var le = o(de, 2),
					ue = t(le),
					Ot = t(ue, !0);
				r(ue);
				var Je = o(ue, 2),
					Et = t(Je, !0);
				(r(Je), r(le));
				var _e = o(le, 2),
					ve = t(_e),
					Ut = t(ve, !0);
				r(ve);
				var Qe = o(ve, 2),
					Pt = t(Qe, !0);
				(r(Qe), r(_e));
				var Xe = o(_e, 2),
					fe = t(Xe),
					Ft = t(fe, !0);
				r(fe);
				var et = o(fe, 2),
					Yt = t(et, !0);
				(r(et), r(Xe), r(pe));
				var be = o(pe, 2),
					me = t(be),
					ge = t(me),
					qt = t(ge, !0);
				r(ge);
				var tt = o(ge, 2),
					Nt = t(tt, !0);
				(r(tt), r(me));
				var xe = o(me, 2),
					he = t(xe),
					Bt = t(he, !0);
				r(he);
				var rt = o(he, 2),
					Gt = t(rt, !0);
				(r(rt), r(xe));
				var ye = o(xe, 2),
					je = t(ye),
					Vt = t(je, !0);
				r(je);
				var at = o(je, 2),
					Zt = t(at, !0);
				(r(at), r(ye));
				var st = o(ye, 2),
					ke = t(st),
					Ht = t(ke, !0);
				r(ke);
				var ot = o(ke, 2),
					Kt = t(ot, !0);
				(r(ot), r(st), r(be));
				var nt = o(be, 2),
					ct = t(nt),
					Re = t(ct),
					pt = t(Re),
					we = t(pt),
					Ae = t(we),
					Wt = t(Ae);
				(r(Ae), r(we));
				var Ie = o(we),
					$e = t(Ie),
					Jt = t($e);
				(r($e), r(Ie));
				var ze = o(Ie),
					Ce = t(ze),
					Qt = t(Ce);
				(r(Ce), r(ze));
				var Te = o(ze),
					Se = t(Te),
					Xt = t(Se);
				(r(Se), r(Te));
				var De = o(Te),
					Le = t(De),
					er = t(Le);
				(r(Le), r(De));
				var dt = o(De),
					Me = t(dt),
					tr = t(Me);
				(r(Me), r(dt), r(pt), r(Re));
				var it = o(Re),
					rr = t(it);
				{
					var ar = (i) => {
							var _ = Us(),
								b = t(_),
								m = t(b),
								u = o(t(m), 2),
								$ = t(u, !0);
							(r(u),
								r(m),
								r(b),
								r(_),
								O((z) => n($, z), [() => Lr()]),
								j(i, _));
						},
						sr = (i) => {
							var _ = Ps(),
								b = t(_),
								m = t(b, !0);
							(r(b), r(_), O(() => n(m, a(Q))), j(i, _));
						},
						or = (i) => {
							var _ = Fs(),
								b = t(_),
								m = t(b, !0);
							(r(b), r(_), O((u) => n(m, u), [() => Mr()]), j(i, _));
						},
						nr = (i) => {
							var _ = ut(),
								b = _t(_);
							(fr(
								b,
								17,
								() => a(f),
								(m) => m.staffId,
								(m, u) => {
									var $ = Ns(),
										z = t($),
										te = t(z),
										re = t(te);
									jr(re, {
										get userId() {
											return a(u).staffId;
										},
										linkClass: "link hover:text-primary",
										children: (C, G) => {
											var V = Ys(),
												lt = t(V);
											kr(lt, {
												class: "size-8 sm:size-10",
												get userId() {
													return a(u).staffId;
												},
												pictureUrl: void 0,
											});
											var cr = o(lt);
											(r(V),
												O(() =>
													n(
														cr,
														` ${a(u).username ?? ""} #${a(u).staffId ?? ""}`,
													),
												),
												j(C, V));
										},
										$$slots: { default: !0 },
									});
									var Oe = o(re, 2);
									{
										var Ee = (C) => {
												var G = qs(),
													V = t(G);
												(Rr(V, { class: "size-4" }),
													r(G),
													k("click", G, () => wt(a(u).staffId)),
													j(C, G));
											},
											Ue = vt(() => mt.hasPermission(gt.dashboard.users.info));
										Be(Oe, (C) => {
											a(Ue) && C(Ee);
										});
									}
									(r(te), r(z));
									var Y = o(z),
										Pe = t(Y, !0);
									r(Y);
									var q = o(Y),
										Fe = t(q, !0);
									r(q);
									var N = o(q),
										Ye = t(N, !0);
									r(N);
									var B = o(N),
										qe = t(B, !0);
									r(B);
									var ae = o(B),
										Ne = t(ae, !0);
									(r(ae),
										r($),
										O(
											(C) => {
												(n(Pe, yr[a(u).role]),
													n(Fe, C),
													n(Ye, a(u).approved),
													n(qe, a(u).rejected),
													n(Ne, a(u).total));
											},
											[() => ht(a(u).approveRate)],
										),
										j(m, $));
								},
							),
								j(i, _));
						};
					Be(rr, (i) => {
						a(S) && a(f).length === 0
							? i(ar)
							: a(Q)
								? i(sr, 1)
								: a(f).length === 0
									? i(or, 2)
									: i(nr, !1);
					});
				}
				(r(it),
					r(ct),
					r(nt),
					r(c),
					O(
						(
							i,
							_,
							b,
							m,
							u,
							$,
							z,
							te,
							re,
							Oe,
							Ee,
							Ue,
							Y,
							Pe,
							q,
							Fe,
							N,
							Ye,
							B,
							qe,
							ae,
							Ne,
						) => {
							(n(M, i),
								n(X, _),
								n(zt, b),
								n(Ct, m),
								(ee.disabled = a(S)),
								n(Tt, u),
								(P.disabled = a(S) || a(f).length === 0),
								n(St, $),
								mr(F, "title", z),
								(F.disabled = a(S)),
								n(Lt, te),
								n(Mt, a(E).appealsCreatedToday),
								n(Ot, re),
								n(Et, a(E).appealsClosedToday),
								n(Ut, Oe),
								n(Pt, a(E).appealsCreatedYesterday),
								n(Ft, Ee),
								n(Yt, a(E).appealsClosedYesterday),
								n(qt, Ue),
								n(Nt, a(D).total),
								n(Bt, Y),
								n(Gt, a(D).approved),
								n(Vt, Pe),
								n(Zt, a(D).rejected),
								n(Ht, q),
								n(Kt, Fe),
								n(
									Wt,
									`${N ?? ""}
								${a(h) === "staff" ? (a(g) === "asc" ? "▲" : "▼") : ""}`,
								),
								n(
									Jt,
									`${Ye ?? ""}${a(h) === "role" ? (a(g) === "asc" ? "▲" : "▼") : ""}`,
								),
								n(
									Qt,
									`${B ?? ""}
								${a(h) === "approveRate" ? (a(g) === "asc" ? "▲" : "▼") : ""}`,
								),
								n(
									Xt,
									`${qe ?? ""}${a(h) === "approved" ? (a(g) === "asc" ? "▲" : "▼") : ""}`,
								),
								n(
									er,
									`${ae ?? ""}${a(h) === "rejected" ? (a(g) === "asc" ? "▲" : "▼") : ""}`,
								),
								n(
									tr,
									`${Ne ?? ""}${a(h) === "total" ? (a(g) === "asc" ? "▲" : "▼") : ""}`,
								));
						},
						[
							() => xt(),
							() => zr(),
							() => Cr(),
							() => Tr(),
							() => Ar(),
							() => Dr(),
							() => Or(),
							() => Aa(),
							() => ea(),
							() => Pa(),
							() => _a(),
							() => Fr(),
							() => Qa(),
							() => Es(),
							() => Rs(),
							() => `${a(D).approveRate.toFixed(1)}%`,
							() => Ur(),
							() => Er(),
							() => ls(),
							() => Ir(),
							() => $r(),
							() => Pr(),
						],
					),
					vr("submit", I, kt),
					bt(
						Ze,
						() => a(K),
						(i) => v(K, i),
					),
					bt(
						He,
						() => a(W),
						(i) => v(W, i),
					),
					k("click", P, Rt),
					k("click", F, se),
					k("click", Ae, () => L("staff")),
					k("click", $e, () => L("role")),
					k("click", Ce, () => L("approveRate")),
					k("click", Se, () => L("approved")),
					k("click", Le, () => L("rejected")),
					k("click", Me, () => L("total")),
					j(s, c));
			},
			$t = vt(() => mt.hasPermission(gt.dashboard.banAppeals.see));
		Be(At, (s) => {
			a($t) && s(It);
		});
	}
	(j(x, Ve), lr());
}
dr(["click"]);
export { wo as component };
