import "../chunks/Bzak7iHL.js";
import { o as B } from "../chunks/DMoMXVXI.js";
import {
	p as C,
	e as D,
	g as F,
	q as G,
	f as H,
	a as h,
	b as J,
	h as r,
	i as e,
	j as Q,
	$ as U,
	d as i,
	s as c,
	r as t,
	t as j,
	c as u,
	u as V,
} from "../chunks/Dbe4PVAU.js";
import { s as M } from "../chunks/C_mo-lyU.js";
import { i as X } from "../chunks/Icl9dwnj.js";
import { k as Y } from "../chunks/ryCN0oNh.js";
import { e as Z, i as aa } from "../chunks/sR4NyGSS.js";
import { s as ea } from "../chunks/2Od2egA-.js";
import { t as $ } from "../chunks/B1IGqgUU.js";
import { h as sa } from "../chunks/ClbV77Km.js";
import { c as ra, s as ta, a as oa } from "../chunks/B7_gUtXa.js";
import { g as ia } from "../chunks/C6d2kgDd.js";
import { p as I } from "../chunks/DzNOOKXC.js";
import { P as o } from "../chunks/JKnWQwH6.js";
import { u as s } from "../chunks/DU-2YUMG.js";
import { L as ma } from "../chunks/Cskb-8mx.js";
import "../chunks/BhCkpOlh.js";
import { a as la } from "../chunks/BdCqcZGB.js";
import { a as na } from "../chunks/og9Js_3x.js";
import { a as da } from "../chunks/U_H6LM6d.js";
import { d as L } from "../chunks/CTKAXTri.js";
import { p as fa } from "../chunks/BxXtB1-F.js";
import { s as ha } from "../chunks/ByH6mgv9.js";
import { s as pa } from "../chunks/CT-mvjFm.js";
import { t as ba } from "../chunks/OvJd4Dh6.js";
import { u as ca } from "../chunks/CsIr9lN0.js";
import { t as ua } from "../chunks/CqMJ2HFU.js";
import { f as O } from "../chunks/BI5KFv7B.js";
const va = !0,
	ya = !1,
	Va = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, prerender: ya, ssr: va },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	);
var xa = u('<a data-sveltekit-prefetch=""> </a>'),
	_a = u('<div class="flex min-h-0 flex-1 flex-col"><!></div>'),
	ga = u(
		'<div class="bg-base-200 flex min-h-screen flex-col"><header class="bg-base-100 border-base-300 sticky top-0 z-20 border-b"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><a class="flex items-center gap-2" href="/"><!> <span class="text-base-content/80 text-lg font-semibold"> </span></a></div> <nav class="mx-auto max-w-7xl px-4"><div class="tabs tabs-border flex items-center gap-2 overflow-auto"></div></nav></header> <main class="flex min-h-0 flex-1"><div class="mx-auto flex min-h-0 max-w-7xl flex-1 flex-col px-4 py-4"><!></div></main></div>',
	);
function Xa(z, v) {
	C(v, !0);
	const y = V(() => I.url.pathname);
	let a = D(F([]));
	function R(l) {
		return e(y) === l || e(y).startsWith(l + "/");
	}
	B(async () => {
		(s.data || (await s.refresh()),
			s.hasAnyPermission(o.dashboard.summary) &&
				r(
					a,
					[
						...e(a),
						{ label: pa(), href: "/dashboard/summary", key: "dashboard" },
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.team) &&
				r(
					a,
					[
						...e(a),
						{
							label: ba(),
							href: "/dashboard/team/leaderboard-tickets",
							key: "mods",
						},
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.banAppeals) &&
				r(
					a,
					[
						...e(a),
						{ label: na(), href: "/dashboard/ban-appeals", key: "ban-appeals" },
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.kpi) &&
				r(
					a,
					[
						...e(a),
						{ label: "KPI", href: "/dashboard/kpi/tickets", key: "kpi" },
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.users) &&
				r(
					a,
					[...e(a), { label: ca(), href: "/dashboard/users", key: "users" }],
					!0,
				),
			s.hasAnyPermission(o.dashboard.permissions) &&
				r(
					a,
					[
						...e(a),
						{ label: fa(), href: "/dashboard/permissions", key: "permissions" },
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.alliances) &&
				r(
					a,
					[
						...e(a),
						{ label: la(), href: "/dashboard/alliances", key: "alliances" },
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.auditLogs) &&
				r(
					a,
					[
						...e(a),
						{ label: da(), href: "/dashboard/audit-logs", key: "audit-logs" },
					],
					!0,
				),
			s.hasPermission(o.tickets.revertReview) &&
				r(
					a,
					[
						...e(a),
						{
							label: ua(),
							href: "/dashboard/ticket-reversals",
							key: "ticket-reversals",
						},
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.storeManager) &&
				r(
					a,
					[
						...e(a),
						{
							label: ha(),
							href: "/dashboard/store-manager",
							key: "store-manager",
						},
					],
					!0,
				),
			s.hasAnyPermission(o.dashboard.anticheat) &&
				r(
					a,
					[
						...e(a),
						{
							label: "Anticheat",
							href: "/dashboard/anticheat",
							key: "anticheat",
						},
					],
					!0,
				),
			e(a).length === 0 && ia("/404"));
	});
	var x = G();
	sa("2agd5u", (l) => {
		Q(
			(d) => {
				U.title = `Wplace - ${d ?? ""}`;
			},
			[() => L()],
		);
	});
	var W = H(x);
	{
		var q = (l) => {
			var d = ga(),
				p = i(d),
				b = i(p),
				_ = i(b),
				g = i(_);
			ma(g, { class: "h-7 w-auto" });
			var k = c(g, 2),
				E = i(k, !0);
			(t(k), t(_), t(b));
			var P = c(b, 2),
				A = i(P);
			(Z(
				A,
				21,
				() => e(a),
				aa,
				(f, m) => {
					var n = xa(),
						N = i(n, !0);
					(t(n),
						j(
							(T) => {
								(ta(n, "href", e(m).href), oa(n, 1, T), M(N, e(m).label));
							},
							[
								() =>
									ra({
										tab: !0,
										"font-semibold": !0,
										"tab-active": R(e(m).href),
									}),
							],
						),
						h(f, n));
				},
			),
				t(A),
				t(P),
				t(p));
			var w = c(p, 2),
				S = i(w),
				K = i(S);
			(Y(
				K,
				() => I.url.pathname,
				(f) => {
					var m = _a(),
						n = i(m);
					(ea(n, () => v.children),
						t(m),
						$(
							1,
							m,
							() => O,
							() => ({ duration: 120 }),
						),
						$(
							2,
							m,
							() => O,
							() => ({ duration: 80 }),
						),
						h(f, m));
				},
			),
				t(S),
				t(w),
				t(d),
				j((f) => M(E, f), [() => L()]),
				h(l, d));
		};
		X(W, (l) => {
			e(a).length > 0 && l(q);
		});
	}
	(h(z, x), J());
}
export { Xa as component, Va as universal };
