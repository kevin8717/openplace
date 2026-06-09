import "../chunks/Bzak7iHL.js";
import { o as Le } from "../chunks/DMoMXVXI.js";
import {
	k as Se,
	p as je,
	e as x,
	g as z,
	I as Ce,
	i as r,
	h as m,
	t as w,
	v as De,
	l as f,
	a as $,
	b as ze,
	j as Me,
	s as i,
	c as R,
	d as t,
	$ as Ue,
	r as e,
	q as Ae,
	f as Ne,
} from "../chunks/Dbe4PVAU.js";
import { s as l } from "../chunks/C_mo-lyU.js";
import { i as Ee } from "../chunks/Icl9dwnj.js";
import { e as Oe } from "../chunks/sR4NyGSS.js";
import { h as Te } from "../chunks/ClbV77Km.js";
import { s as Be, r as Kt, a as Pe } from "../chunks/B7_gUtXa.js";
import { b as Qt } from "../chunks/C1Rrr0ww.js";
import { g as Fe } from "../chunks/C6d2kgDd.js";
import { T as Ve, a as qe } from "../chunks/DU-2YUMG.js";
import "../chunks/JKnWQwH6.js";
import { R as Ke } from "../chunks/DX1r3K5G.js";
import { S as Qe } from "../chunks/xlnJ43Nf.js";
import { P as We } from "../chunks/BFlSXuix.js";
import { R as Ge } from "../chunks/CbUCGNiK.js";
import { g as He } from "../chunks/BhCkpOlh.js";
import { a as Je } from "../chunks/CD0Nhe1Q.js";
import { b as Xe, i as Ye, t as Ze, s as tr } from "../chunks/Bbg0KEAn.js";
import { b as er, e as rr } from "../chunks/Ch38BS2u.js";
import { e as ar } from "../chunks/kMrz8wtr.js";
import { e as sr } from "../chunks/SpO575Nf.js";
import { i as or } from "../chunks/DbF8UOi7.js";
import { l as nr } from "../chunks/BRekz1nD.js";
import { l as ir } from "../chunks/Cp-hTSeP.js";
import { n as lr } from "../chunks/Bvwls8qX.js";
import { r as dr } from "../chunks/DBS6HGbD.js";
import { r as cr } from "../chunks/WmcBTg9_.js";
import { r as ur } from "../chunks/C5ukCcxH.js";
import { s as vr } from "../chunks/DIbtzbsw.js";
import { t as br } from "../chunks/OvJd4Dh6.js";
import { t as mr } from "../chunks/BJMWNMzA.js";
import { t as _r } from "../chunks/p2ZQY-1m.js";
import { t as pr } from "../chunks/mOmV0vnx.js";
import { t as fr } from "../chunks/B6k04QXL.js";
const xr = () => "Number of reports treated",
	gr = () => "Quantidade de reportes tratados",
	hr = () => "已处理举报数量",
	$r = () => "Anzahl bearbeiteter Meldungen",
	kr = () => "Cantidad de reportes tratados",
	yr = () => "Nombre de signalements traités",
	wr = () => "Numero di segnalazioni gestite",
	Rr = () => "対応した通報の数",
	Ir = () => "Liczba obsłużonych zgłoszeń",
	Lr = () => "Количество обработанных репортов",
	Sr = () => "Кількість оброблених скарг",
	jr = () => "Số lượng báo cáo đã xử lý",
	Cr = (Rt = {}, T = {}) => {
		const u = T.locale ?? He();
		return u === "en"
			? xr()
			: u === "pt"
				? gr()
				: u === "ch"
					? hr()
					: u === "de"
						? $r()
						: u === "es"
							? kr()
							: u === "fr"
								? yr()
								: u === "it"
									? wr()
									: u === "jp"
										? Rr()
										: u === "pl"
											? Ir()
											: u === "ru"
												? Lr()
												: u === "uk"
													? Sr()
													: jr();
	};
var Dr = R(
		'<tr><td colspan="9"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>',
	),
	zr = R('<tr><td colspan="9" class="text-error"> </td></tr>'),
	Mr = R('<tr><td colspan="9" class="text-base-content/70"> </td></tr>'),
	Ur = R('<div class="flex items-center gap-2"><!> </div>'),
	Ar = R(
		'<tr class="hover"><td><!></td><td> </td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>',
	),
	Nr = R(
		'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold"> </h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm"> </span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm"> </span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs"> </button></th><th><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th></tr></thead><tbody><!></tbody></table></div></section>',
	);
function ga(Rt, T) {
	je(T, !0);
	let u = x(!1),
		M = x(null),
		g = x(z([]));
	z({});
	function It(a) {
		return a.toISOString().slice(0, 16);
	}
	const Lt = new Date(),
		Wt = new Date(Lt.getTime() - 7 * Ve.day);
	let U = x(z(It(Wt))),
		A = x(z(It(Lt)));
	function N(a) {
		const o = new Date(a);
		return isNaN(o.getTime()) ? null : o.toISOString();
	}
	let _ = x("total"),
		b = x("desc");
	function h(a) {
		r(_) === a
			? m(b, r(b) === "asc" ? "desc" : "asc", !0)
			: (m(_, a, !0), m(b, a === "mod" ? "asc" : "desc", !0));
	}
	function St(a) {
		const o = [...a];
		return (
			o.sort((n, d) => {
				let s, c;
				switch (r(_)) {
					case "mod": {
						const v = n.user.name,
							p = d.user.name;
						return r(b) === "asc" ? v.localeCompare(p) : p.localeCompare(v);
					}
					case "role": {
						const v = n.user.role,
							p = d.user.role;
						return r(b) === "asc" ? v.localeCompare(p) : p.localeCompare(v);
					}
					case "total":
						((s = n.total), (c = d.total));
						break;
					case "ban":
						((s = n.ban), (c = d.ban));
						break;
					case "ignored":
						((s = n.ignored), (c = d.ignored));
						break;
					case "timeout":
						((s = n.timeout), (c = d.timeout));
						break;
					case "suspensionRate":
						((s = n.suspensionRate ?? 0), (c = d.suspensionRate ?? 0));
						break;
					default:
						((s = 0), (c = 0));
				}
				return r(b) === "asc" ? s - c : c - s;
			}),
			o
		);
	}
	function Gt(a, o = 1) {
		return `${((a ?? 0) * 100).toFixed(o)}%`;
	}
	async function B() {
		try {
			(m(u, !0), m(M, null));
			const a = N(r(U)),
				o = N(r(A));
			if (!a || !o) throw new Error("Datas inválidas");
			const n = await qe.getClosedReportsByMod(a, o);
			m(g, n ?? [], !0);
		} catch (a) {
			(a.status === 403 || a.status === 401
				? Fe("/404")
				: m(M, (a == null ? void 0 : a.message) ?? ar(), !0),
				m(g, [], !0));
		} finally {
			m(u, !1);
		}
	}
	Le(B);
	function Ht(a) {
		(a.preventDefault(), B());
	}
	let k = x(z({ total: 0, ban: 0, ignored: 0, timeout: 0 }));
	Ce(() => {
		const a = r(g);
		if (!a || a.length === 0) {
			m(k, { total: 0, ban: 0, ignored: 0, timeout: 0 }, !0);
			return;
		}
		const o = a.length,
			n = a.reduce(
				(s, c) => (
					(s.total += c.total),
					(s.ban += c.ban),
					(s.ignored += c.ignored),
					(s.timeout += c.timeout),
					s
				),
				{ total: 0, ban: 0, ignored: 0, timeout: 0 },
			),
			d = (s) => Math.round(s * 100) / 100;
		m(
			k,
			{
				total: d(n.total / o),
				ban: d(n.ban / o),
				ignored: d(n.ignored / o),
				timeout: d(n.timeout / o),
			},
			!0,
		);
	});
	function Jt(a, o) {
		const n = [
				"assigned_mod_id",
				"name",
				"alliance_id",
				"role",
				"total_reports_closed",
				"ban",
				"ignored",
				"timeout",
				"suspension_rate",
			].join(","),
			d = a.map((s) =>
				[
					s.user.id,
					s.user.name,
					s.user.allianceId,
					s.user.role,
					s.total,
					s.ban,
					s.ignored,
					s.timeout,
					(s.suspensionRate ?? 0).toFixed(4),
				].join(","),
			);
		return [n, ...d].join(`
`);
	}
	function Xt() {
		const a = St(r(g)),
			o = Jt(a),
			n = new Blob([o], { type: "text/csv;charset=utf-8;" }),
			d = URL.createObjectURL(n),
			s = document.createElement("a"),
			c = N(r(U)) ?? "start",
			v = N(r(A)) ?? "end";
		((s.href = d),
			(s.download = `reports_leaderboard_${c}_${v}.csv`),
			s.click(),
			URL.revokeObjectURL(d));
	}
	var P = Nr();
	Te("11cd9rv", (a) => {
		Me(
			(o) => {
				Ue.title = `Wplace - ${o ?? ""}`;
			},
			[() => br()],
		);
	});
	var F = t(P),
		V = t(F),
		q = t(V),
		Yt = t(q);
	e(q);
	var jt = i(q, 2),
		Zt = t(jt, !0);
	(e(jt), e(V));
	var K = i(V, 2),
		Q = t(K),
		W = t(Q),
		te = t(W, !0);
	e(W);
	var Ct = i(W, 2);
	(Kt(Ct), e(Q));
	var G = i(Q, 2),
		H = t(G),
		ee = t(H, !0);
	e(H);
	var Dt = i(H, 2);
	(Kt(Dt), e(G));
	var zt = i(G, 2),
		E = t(zt),
		re = t(E, !0);
	e(E);
	var I = i(E, 2),
		ae = t(I, !0);
	e(I);
	var L = i(I, 2),
		se = t(L);
	(Ge(se, { class: "size-4" }), e(L), e(zt), e(K), e(F));
	var J = i(F, 2),
		X = t(J),
		Y = t(X),
		oe = t(Y, !0);
	e(Y);
	var Mt = i(Y, 2),
		ne = t(Mt, !0);
	(e(Mt), e(X));
	var Z = i(X, 2),
		tt = t(Z),
		ie = t(tt, !0);
	e(tt);
	var Ut = i(tt, 2),
		le = t(Ut, !0);
	(e(Ut), e(Z));
	var et = i(Z, 2),
		rt = t(et),
		de = t(rt, !0);
	e(rt);
	var At = i(rt, 2),
		ce = t(At, !0);
	(e(At), e(et));
	var Nt = i(et, 2),
		at = t(Nt),
		ue = t(at, !0);
	e(at);
	var Et = i(at, 2),
		ve = t(Et, !0);
	(e(Et), e(Nt), e(J));
	var Ot = i(J, 2),
		Tt = t(Ot),
		st = t(Tt),
		Bt = t(st),
		ot = t(Bt),
		nt = t(ot),
		be = t(nt);
	(e(nt), e(ot));
	var it = i(ot),
		lt = t(it),
		me = t(lt);
	(e(lt), e(it));
	var dt = i(it),
		ct = t(dt),
		_e = t(ct);
	(e(ct), e(dt));
	var ut = i(dt),
		vt = t(ut),
		pe = t(vt);
	(e(vt), e(ut));
	var bt = i(ut),
		mt = t(bt),
		fe = t(mt);
	(e(mt), e(bt));
	var _t = i(bt),
		pt = t(_t),
		xe = t(pt);
	(e(pt), e(_t));
	var Pt = i(_t),
		ft = t(Pt),
		ge = t(ft);
	(e(ft), e(Pt), e(Bt), e(st));
	var Ft = i(st),
		he = t(Ft);
	{
		var $e = (a) => {
				var o = Dr(),
					n = t(o),
					d = t(n),
					s = i(t(d), 2),
					c = t(s, !0);
				(e(s), e(d), e(n), e(o), w((v) => l(c, v), [() => ir()]), $(a, o));
			},
			ke = (a) => {
				var o = zr(),
					n = t(o),
					d = t(n, !0);
				(e(n), e(o), w(() => l(d, r(M))), $(a, o));
			},
			ye = (a) => {
				var o = Mr(),
					n = t(o),
					d = t(n, !0);
				(e(n), e(o), w((s) => l(d, s), [() => lr()]), $(a, o));
			},
			we = (a) => {
				var o = Ae(),
					n = Ne(o);
				(Oe(
					n,
					17,
					() => St(r(g)),
					(d) => d.user.id,
					(d, s) => {
						var c = Ar(),
							v = t(c),
							p = t(v);
						(Qe(p, {
							get userId() {
								return r(s).user.id;
							},
							linkClass: "link hover:text-primary",
							children: (yt, Er) => {
								var wt = Ur(),
									qt = t(wt);
								We(qt, {
									class: "size-8 sm:size-10",
									get userId() {
										return r(s).user.id;
									},
									get pictureUrl() {
										return r(s).user.picture;
									},
								});
								var Ie = i(qt);
								(e(wt),
									w(() =>
										l(Ie, ` ${r(s).user.name ?? ""} #${r(s).user.id ?? ""}`),
									),
									$(yt, wt));
							},
							$$slots: { default: !0 },
						}),
							e(v));
						var S = i(v),
							xt = t(S, !0);
						e(S);
						var y = i(S);
						let O;
						var gt = t(y, !0);
						e(y);
						var j = i(y),
							ht = t(j, !0);
						e(j);
						var C = i(j),
							$t = t(C, !0);
						e(C);
						var D = i(C),
							kt = t(D, !0);
						e(D);
						var Vt = i(D),
							Re = t(Vt, !0);
						(e(Vt),
							e(c),
							w(
								(yt) => {
									(l(xt, Ke[r(s).user.role]),
										(O = Pe(y, 1, "text-error text-center", null, O, {
											"text-error":
												r(s).suspensionRate > 0.7 && r(s).total > 50,
										})),
										l(gt, yt),
										l(ht, r(s).ignored),
										l($t, r(s).timeout),
										l(kt, r(s).ban),
										l(Re, r(s).total));
								},
								[() => Gt(r(s).suspensionRate, 1)],
							),
							$(d, c));
					},
				),
					$(a, o));
			};
		Ee(he, (a) => {
			r(u) ? a($e) : r(M) ? a(ke, 1) : r(g).length === 0 ? a(ye, 2) : a(we, !1);
		});
	}
	(e(Ft),
		e(Tt),
		e(Ot),
		e(P),
		w(
			(a, o, n, d, s, c, v, p, S, xt, y, O, gt, j, ht, C, $t, D, kt) => {
				(l(Yt, `${a ?? ""} (${o ?? ""})`),
					l(Zt, n),
					l(te, d),
					l(ee, s),
					(E.disabled = r(u)),
					l(re, c),
					(I.disabled = r(u) || r(g).length === 0),
					l(ae, v),
					Be(L, "title", p),
					(L.disabled = r(u)),
					l(oe, S),
					l(ne, r(k).total),
					l(ie, xt),
					l(le, r(k).ban),
					l(de, y),
					l(ce, r(k).ignored),
					l(ue, O),
					l(ve, r(k).timeout),
					l(
						be,
						`${gt ?? ""}
							${r(_) === "mod" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						me,
						`${j ?? ""}
							${r(_) === "role" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						_e,
						`${ht ?? ""}
							${r(_) === "suspensionRate" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						pe,
						`${C ?? ""}
							${r(_) === "ignored" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						fe,
						`${$t ?? ""}
							${r(_) === "timeout" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						xe,
						`${D ?? ""}
							${r(_) === "ban" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						ge,
						`${kt ?? ""}
							${r(_) === "total" ? (r(b) === "asc" ? "▲" : "▼") : ""}`,
					));
			},
			[
				() => nr(),
				() => cr(),
				() => Cr(),
				() => er(),
				() => rr(),
				() => Je(),
				() => sr(),
				() => dr(),
				() => fr(),
				() => Xe(),
				() => Ye(),
				() => Ze(),
				() => vr(),
				() => ur(),
				() => tr(),
				() => or(),
				() => mr(),
				() => _r(),
				() => pr(),
			],
		),
		De("submit", K, Ht),
		Qt(
			Ct,
			() => r(U),
			(a) => m(U, a),
		),
		Qt(
			Dt,
			() => r(A),
			(a) => m(A, a),
		),
		f("click", I, Xt),
		f("click", L, B),
		f("click", nt, () => h("mod")),
		f("click", lt, () => h("role")),
		f("click", ct, () => h("suspensionRate")),
		f("click", vt, () => h("ignored")),
		f("click", mt, () => h("timeout")),
		f("click", pt, () => h("ban")),
		f("click", ft, () => h("total")),
		$(Rt, P),
		ze());
}
Se(["click"]);
export { ga as component };
