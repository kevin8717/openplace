import "../chunks/Bzak7iHL.js";
import { o as I } from "../chunks/DMoMXVXI.js";
import {
	p as M,
	e as W,
	g as j,
	a as p,
	b as A,
	j as E,
	c as n,
	h as u,
	i as r,
	$ as N,
	d as o,
	r as s,
	s as O,
	t as R,
	u as q,
} from "../chunks/Dbe4PVAU.js";
import { s as B } from "../chunks/C_mo-lyU.js";
import { k as C } from "../chunks/ryCN0oNh.js";
import { e as D, i as F } from "../chunks/sR4NyGSS.js";
import { s as G } from "../chunks/2Od2egA-.js";
import { t as x } from "../chunks/B1IGqgUU.js";
import { h as H } from "../chunks/ClbV77Km.js";
import { c as J, s as K, a as L } from "../chunks/B7_gUtXa.js";
import "../chunks/BhCkpOlh.js";
import { l as f } from "../chunks/BRekz1nD.js";
import { r as Q } from "../chunks/WmcBTg9_.js";
import { t as T } from "../chunks/OvJd4Dh6.js";
import { t as U } from "../chunks/CW0X7odH.js";
import { p as _ } from "../chunks/DzNOOKXC.js";
import { f as k } from "../chunks/BI5KFv7B.js";
import { u as g } from "../chunks/DU-2YUMG.js";
import { P as y } from "../chunks/JKnWQwH6.js";
var V = n('<a data-sveltekit-prefetch=""> </a>'),
	X = n("<div><!></div>"),
	Y = n(
		'<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow z-0"><header class="bg-base-100 border-base-300 sticky top-0 z-30 border-b"><nav class="mx-auto max-w-7xl px-4"><div class="tabs tabs-border flex items-center gap-2 overflow-auto"></div></nav></header> <main class="mx-auto max-w-7xl px-4 py-4"><!></main></div>',
	);
function xa($, l) {
	M(l, !0);
	const b = q(() => _.url.pathname);
	let i = W(j([]));
	I(() => {
		(g.hasPermission(y.dashboard.team.tickets) &&
			u(
				i,
				[
					...r(i),
					{
						label: `${f()} (${U()})`,
						href: "/dashboard/team/leaderboard-tickets",
						key: f(),
					},
				],
				!0,
			),
			g.hasPermission(y.dashboard.team.reports) &&
				u(
					i,
					[
						...r(i),
						{
							label: `${f()} (${Q()})`,
							href: "/dashboard/team/leaderboard-reports",
							key: "leaderboard-reports",
						},
					],
					!0,
				));
	});
	function P(e) {
		return r(b) === e || r(b).startsWith(e + "/");
	}
	var m = Y();
	H("vvnu7m", (e) => {
		E(
			(a) => {
				N.title = `Wplace - ${a ?? ""}`;
			},
			[() => T()],
		);
	});
	var d = o(m),
		v = o(d),
		c = o(v);
	(D(
		c,
		21,
		() => r(i),
		F,
		(e, a) => {
			var t = V(),
				S = o(t, !0);
			(s(t),
				R(
					(z) => {
						(K(t, "href", r(a).href), L(t, 1, z), B(S, r(a).label));
					},
					[
						() =>
							J({ tab: !0, "font-semibold": !0, "tab-active": P(r(a).href) }),
					],
				),
				p(e, t));
		},
	),
		s(c),
		s(v),
		s(d));
	var h = O(d, 2),
		w = o(h);
	(C(
		w,
		() => _.url.pathname,
		(e) => {
			var a = X(),
				t = o(a);
			(G(t, () => l.children),
				s(a),
				x(
					1,
					a,
					() => k,
					() => ({ duration: 120 }),
				),
				x(
					2,
					a,
					() => k,
					() => ({ duration: 80 }),
				),
				p(e, a));
		},
	),
		s(h),
		s(m),
		p($, m),
		A());
}
export { xa as component };
