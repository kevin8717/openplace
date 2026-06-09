import "../chunks/Bzak7iHL.js";
import { o as Le } from "../chunks/DMoMXVXI.js";
import {
	k as Me,
	p as Se,
	e as x,
	g as D,
	I as je,
	i as r,
	h as b,
	t as w,
	v as Ce,
	l as f,
	a as k,
	b as De,
	j as Te,
	s as i,
	c as R,
	d as t,
	$ as Ue,
	r as e,
	q as Ae,
	f as Ee,
} from "../chunks/Dbe4PVAU.js";
import { s as l } from "../chunks/C_mo-lyU.js";
import { i as Oe } from "../chunks/Icl9dwnj.js";
import { e as qe } from "../chunks/sR4NyGSS.js";
import { h as ze } from "../chunks/ClbV77Km.js";
import { s as Be, r as Vt, a as Pe } from "../chunks/B7_gUtXa.js";
import { b as Kt } from "../chunks/C1Rrr0ww.js";
import { g as Ne } from "../chunks/C6d2kgDd.js";
import { T as Fe, a as Ve } from "../chunks/DU-2YUMG.js";
import { R as Ke } from "../chunks/DX1r3K5G.js";
import { P as We } from "../chunks/BFlSXuix.js";
import { S as Ge } from "../chunks/xlnJ43Nf.js";
import { R as He } from "../chunks/CbUCGNiK.js";
import { g as Je } from "../chunks/BhCkpOlh.js";
import { a as Qe } from "../chunks/CD0Nhe1Q.js";
import { b as Xe } from "../chunks/CtsjoaOH.js";
import { b as Ye, i as Ze, t as tr, s as er } from "../chunks/Bbg0KEAn.js";
import { b as rr, e as ar } from "../chunks/Ch38BS2u.js";
import { e as sr } from "../chunks/kMrz8wtr.js";
import { e as or } from "../chunks/SpO575Nf.js";
import { i as nr } from "../chunks/DbF8UOi7.js";
import { l as ir } from "../chunks/BRekz1nD.js";
import { l as lr } from "../chunks/Cp-hTSeP.js";
import { n as cr } from "../chunks/Bvwls8qX.js";
import { r as dr } from "../chunks/DBS6HGbD.js";
import { r as ur } from "../chunks/C5ukCcxH.js";
import { s as vr } from "../chunks/DIbtzbsw.js";
import { t as mr } from "../chunks/OvJd4Dh6.js";
import { t as br } from "../chunks/BJMWNMzA.js";
import { t as _r } from "../chunks/mOmV0vnx.js";
import { t as pr } from "../chunks/B6k04QXL.js";
const fr = () => "Team metrics",
	xr = () => "Métricas do time",
	gr = () => "团队指标",
	hr = () => "Team-Metriken",
	kr = () => "Métricas del equipo",
	$r = () => "Métriques de l’équipe",
	yr = () => "Metriche del team",
	wr = () => "チームの指標",
	Rr = () => "Metryki zespołu",
	Ir = () => "Метрики команды",
	Lr = () => "Показники команди",
	Mr = () => "Chỉ số đội ngũ",
	Sr = (wt = {}, z = {}) => {
		const u = z.locale ?? Je();
		return u === "en"
			? fr()
			: u === "pt"
				? xr()
				: u === "ch"
					? gr()
					: u === "de"
						? hr()
						: u === "es"
							? kr()
							: u === "fr"
								? $r()
								: u === "it"
									? yr()
									: u === "jp"
										? wr()
										: u === "pl"
											? Rr()
											: u === "ru"
												? Ir()
												: u === "uk"
													? Lr()
													: Mr();
	};
var jr = R(
		'<tr><td colspan="9"><div class="text-base-content/80 flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div></td></tr>',
	),
	Cr = R('<tr><td colspan="9" class="text-error"> </td></tr>'),
	Dr = R('<tr><td colspan="9" class="text-base-content/70"> </td></tr>'),
	Tr = R('<div class="flex items-center gap-2"><!> </div>'),
	Ur = R(
		'<tr class="hover"><td><!></td><td> </td><td> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td><td class="text-center"> </td></tr>',
	),
	Ar = R(
		'<section class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><div class="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-xl font-semibold"> </h2> <p class="text-base-content/80 mt-1"> </p></div> <form class="grid grid-cols-1 gap-2 sm:auto-cols-max sm:grid-flow-col sm:items-end"><label class="form-control"><span class="label-text text-sm"> </span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm"> </span> <input type="datetime-local" class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm"><!></button></div></form></div> <div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div> <div class="rounded-box bg-base-100 border-base-300 border p-3"><div class="text-base-content/70 text-xs"> </div> <div class="text-xl font-bold"> </div></div></div> <div class="overflow-x-auto"><table class="table"><thead><tr><th><button class="btn btn-ghost btn-xs"> </button></th><th><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th></tr></thead><tbody><!></tbody></table></div></section>',
	);
function pa(wt, z) {
	Se(z, !0);
	let u = x(!1),
		T = x(null),
		g = x(D([]));
	D({});
	function Rt(a) {
		return a.toISOString().slice(0, 16);
	}
	const It = new Date(),
		Wt = new Date(It.getTime() - 7 * Fe.day);
	let U = x(D(Rt(Wt))),
		A = x(D(Rt(It)));
	function E(a) {
		const o = new Date(a);
		return isNaN(o.getTime()) ? null : o.toISOString();
	}
	let _ = x("total"),
		m = x("desc");
	function h(a) {
		r(_) === a
			? b(m, r(m) === "asc" ? "desc" : "asc", !0)
			: (b(_, a, !0), b(m, a === "staff" ? "asc" : "desc", !0));
	}
	function Lt(a) {
		const o = [...a];
		return (
			o.sort((n, c) => {
				let s, d;
				switch (r(_)) {
					case "staff": {
						const v = n.user.name,
							p = c.user.name;
						return r(m) === "asc" ? v.localeCompare(p) : p.localeCompare(v);
					}
					case "role": {
						const v = n.user.role,
							p = c.user.role;
						return r(m) === "asc" ? v.localeCompare(p) : p.localeCompare(v);
					}
					case "total":
						((s = n.total), (d = c.total));
						break;
					case "ban":
						((s = n.ban), (d = c.ban));
						break;
					case "ignored":
						((s = n.ignored), (d = c.ignored));
						break;
					case "timeout":
						((s = n.timeout), (d = c.timeout));
						break;
					case "suspensionRate":
						((s = n.suspensionRate), (d = c.suspensionRate));
						break;
					default:
						((s = 0), (d = 0));
				}
				return r(m) === "asc" ? s - d : d - s;
			}),
			o
		);
	}
	function Gt(a, o = 1) {
		return `${(a * 100).toFixed(o)}%`;
	}
	async function B() {
		try {
			(b(u, !0), b(T, null));
			const a = E(r(U)),
				o = E(r(A));
			if (!a || !o) throw new Error("Datas inválidas");
			const n = await Ve.getClosedTicketsByMod(a, o);
			b(g, n ?? [], !0);
		} catch (a) {
			(a.status === 403 || a.status === 401
				? Ne("/404")
				: b(T, (a == null ? void 0 : a.message) ?? sr(), !0),
				b(g, [], !0));
		} finally {
			b(u, !1);
		}
	}
	Le(B);
	function Ht(a) {
		(a.preventDefault(), B());
	}
	let $ = x(D({ total: 0, ban: 0, ignored: 0, timeout: 0 }));
	je(() => {
		const a = r(g);
		if (!a || a.length === 0) {
			b($, { total: 0, ban: 0, ignored: 0, timeout: 0 }, !0);
			return;
		}
		const o = a.length,
			n = a.reduce(
				(s, d) => (
					(s.total += d.total),
					(s.ban += d.ban),
					(s.ignored += d.ignored),
					(s.timeout += d.timeout),
					s
				),
				{ total: 0, ban: 0, ignored: 0, timeout: 0 },
			),
			c = (s) => Math.round(s * 100) / 100;
		b(
			$,
			{
				total: c(n.total / o),
				ban: c(n.ban / o),
				ignored: c(n.ignored / o),
				timeout: c(n.timeout / o),
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
				"total",
				"ban",
				"ignored",
				"timeout",
			].join(","),
			c = a.map((s) =>
				[
					s.user.id,
					s.user.name,
					s.user.allianceId,
					s.user.role,
					s.total,
					s.ban,
					s.ignored,
					s.timeout,
				].join(","),
			);
		return [n, ...c].join(`
`);
	}
	function Qt() {
		const a = Lt(r(g)),
			o = Jt(a),
			n = new Blob([o], { type: "text/csv;charset=utf-8;" }),
			c = URL.createObjectURL(n),
			s = document.createElement("a"),
			d = E(r(U)) ?? "start",
			v = E(r(A)) ?? "end";
		((s.href = c),
			(s.download = `mods_leaderboard_${d}_${v}.csv`),
			s.click(),
			URL.revokeObjectURL(c));
	}
	var P = Ar();
	ze("tb1b4t", (a) => {
		Te(
			(o) => {
				Ue.title = `Wplace - ${o ?? ""}`;
			},
			[() => mr()],
		);
	});
	var N = t(P),
		F = t(N),
		V = t(F),
		Xt = t(V, !0);
	e(V);
	var Mt = i(V, 2),
		Yt = t(Mt, !0);
	(e(Mt), e(F));
	var K = i(F, 2),
		W = t(K),
		G = t(W),
		Zt = t(G, !0);
	e(G);
	var St = i(G, 2);
	(Vt(St), e(W));
	var H = i(W, 2),
		J = t(H),
		te = t(J, !0);
	e(J);
	var jt = i(J, 2);
	(Vt(jt), e(H));
	var Ct = i(H, 2),
		O = t(Ct),
		ee = t(O, !0);
	e(O);
	var I = i(O, 2),
		re = t(I, !0);
	e(I);
	var L = i(I, 2),
		ae = t(L);
	(He(ae, { class: "size-4" }), e(L), e(Ct), e(K), e(N));
	var Q = i(N, 2),
		X = t(Q),
		Y = t(X),
		se = t(Y, !0);
	e(Y);
	var Dt = i(Y, 2),
		oe = t(Dt, !0);
	(e(Dt), e(X));
	var Z = i(X, 2),
		tt = t(Z),
		ne = t(tt, !0);
	e(tt);
	var Tt = i(tt, 2),
		ie = t(Tt, !0);
	(e(Tt), e(Z));
	var et = i(Z, 2),
		rt = t(et),
		le = t(rt, !0);
	e(rt);
	var Ut = i(rt, 2),
		ce = t(Ut, !0);
	(e(Ut), e(et));
	var At = i(et, 2),
		at = t(At),
		de = t(at, !0);
	e(at);
	var Et = i(at, 2),
		ue = t(Et, !0);
	(e(Et), e(At), e(Q));
	var Ot = i(Q, 2),
		qt = t(Ot),
		st = t(qt),
		zt = t(st),
		ot = t(zt),
		nt = t(ot),
		ve = t(nt);
	(e(nt), e(ot));
	var it = i(ot),
		lt = t(it),
		me = t(lt);
	(e(lt), e(it));
	var ct = i(it),
		dt = t(ct),
		be = t(dt);
	(e(dt), e(ct));
	var ut = i(ct),
		vt = t(ut),
		_e = t(vt);
	(e(vt), e(ut));
	var mt = i(ut),
		bt = t(mt),
		pe = t(bt);
	(e(bt), e(mt));
	var _t = i(mt),
		pt = t(_t),
		fe = t(pt);
	(e(pt), e(_t));
	var Bt = i(_t),
		ft = t(Bt),
		xe = t(ft);
	(e(ft), e(Bt), e(zt), e(st));
	var Pt = i(st),
		ge = t(Pt);
	{
		var he = (a) => {
				var o = jr(),
					n = t(o),
					c = t(n),
					s = i(t(c), 2),
					d = t(s, !0);
				(e(s), e(c), e(n), e(o), w((v) => l(d, v), [() => lr()]), k(a, o));
			},
			ke = (a) => {
				var o = Cr(),
					n = t(o),
					c = t(n, !0);
				(e(n), e(o), w(() => l(c, r(T))), k(a, o));
			},
			$e = (a) => {
				var o = Dr(),
					n = t(o),
					c = t(n, !0);
				(e(n), e(o), w((s) => l(c, s), [() => cr()]), k(a, o));
			},
			ye = (a) => {
				var o = Ae(),
					n = Ee(o);
				(qe(
					n,
					17,
					() => Lt(r(g)),
					(c) => c.user.id,
					(c, s) => {
						var d = Ur(),
							v = t(d),
							p = t(v);
						(Ge(p, {
							get userId() {
								return r(s).user.id;
							},
							linkClass: "link hover:text-primary",
							children: ($t, Er) => {
								var yt = Tr(),
									Ft = t(yt);
								We(Ft, {
									class: "size-8 sm:size-10",
									get userId() {
										return r(s).user.id;
									},
									get pictureUrl() {
										return r(s).user.picture;
									},
								});
								var Ie = i(Ft);
								(e(yt),
									w(() =>
										l(Ie, ` ${r(s).user.name ?? ""} #${r(s).user.id ?? ""}`),
									),
									k($t, yt));
							},
							$$slots: { default: !0 },
						}),
							e(v));
						var M = i(v),
							xt = t(M, !0);
						e(M);
						var y = i(M);
						let q;
						var gt = t(y, !0);
						e(y);
						var S = i(y),
							ht = t(S, !0);
						e(S);
						var j = i(S),
							kt = t(j, !0);
						e(j);
						var C = i(j),
							we = t(C, !0);
						e(C);
						var Nt = i(C),
							Re = t(Nt, !0);
						(e(Nt),
							e(d),
							w(
								($t) => {
									(l(xt, Ke[r(s).user.role]),
										(q = Pe(y, 1, "text-error text-center", null, q, {
											"text-error":
												r(s).suspensionRate > 0.7 && r(s).total > 50,
										})),
										l(gt, $t),
										l(ht, r(s).ignored),
										l(kt, r(s).timeout),
										l(we, r(s).ban),
										l(Re, r(s).total));
								},
								[() => Gt(r(s).suspensionRate, 1)],
							),
							k(c, d));
					},
				),
					k(a, o));
			};
		Oe(ge, (a) => {
			r(u) ? a(he) : r(T) ? a(ke, 1) : r(g).length === 0 ? a($e, 2) : a(ye, !1);
		});
	}
	(e(Pt),
		e(qt),
		e(Ot),
		e(P),
		w(
			(a, o, n, c, s, d, v, p, M, xt, y, q, gt, S, ht, j, kt, C) => {
				(l(Xt, a),
					l(Yt, o),
					l(Zt, n),
					l(te, c),
					(O.disabled = r(u)),
					l(ee, s),
					(I.disabled = r(u) || r(g).length === 0),
					l(re, d),
					Be(L, "title", v),
					(L.disabled = r(u)),
					l(se, p),
					l(oe, r($).total),
					l(ne, M),
					l(ie, r($).ban),
					l(le, xt),
					l(ce, r($).ignored),
					l(de, y),
					l(ue, r($).timeout),
					l(
						ve,
						`${q ?? ""}
							${r(_) === "staff" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						me,
						`${gt ?? ""}
							${r(_) === "role" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						be,
						`${S ?? ""}
							${r(_) === "suspensionRate" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						_e,
						`${ht ?? ""}
							${r(_) === "ignored" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						pe,
						`${j ?? ""}
							${r(_) === "timeout" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						fe,
						`${kt ?? ""}
							${r(_) === "ban" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					),
					l(
						xe,
						`${C ?? ""}
							${r(_) === "total" ? (r(m) === "asc" ? "▲" : "▼") : ""}`,
					));
			},
			[
				() => ir(),
				() => Sr(),
				() => rr(),
				() => ar(),
				() => Qe(),
				() => or(),
				() => dr(),
				() => pr(),
				() => Ye(),
				() => Ze(),
				() => tr(),
				() => vr(),
				() => ur(),
				() => er(),
				() => nr(),
				() => br(),
				() => Xe(),
				() => _r(),
			],
		),
		Ce("submit", K, Ht),
		Kt(
			St,
			() => r(U),
			(a) => b(U, a),
		),
		Kt(
			jt,
			() => r(A),
			(a) => b(A, a),
		),
		f("click", I, Qt),
		f("click", L, B),
		f("click", nt, () => h("staff")),
		f("click", lt, () => h("role")),
		f("click", dt, () => h("suspensionRate")),
		f("click", vt, () => h("ignored")),
		f("click", bt, () => h("timeout")),
		f("click", pt, () => h("ban")),
		f("click", ft, () => h("total")),
		k(wt, P),
		De());
}
Me(["click"]);
export { pa as component };
