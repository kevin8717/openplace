import "../chunks/Bzak7iHL.js";
import { o as g } from "../chunks/DMoMXVXI.js";
import {
	p as k,
	e as P,
	g as y,
	f as S,
	a as i,
	b as A,
	c as m,
	h as I,
	i as a,
	s as M,
	d as w,
	r as l,
	t as E,
	u as N,
} from "../chunks/Dbe4PVAU.js";
import { s as O } from "../chunks/C_mo-lyU.js";
import { i as R } from "../chunks/Icl9dwnj.js";
import { e as W, i as j } from "../chunks/sR4NyGSS.js";
import { s as q } from "../chunks/2Od2egA-.js";
import { c as z, s as B, a as C } from "../chunks/B7_gUtXa.js";
import { p as D } from "../chunks/DzNOOKXC.js";
import { u as F } from "../chunks/DU-2YUMG.js";
import { P as G } from "../chunks/JKnWQwH6.js";
import "../chunks/BhCkpOlh.js";
import { t as H } from "../chunks/CW0X7odH.js";
var J = m('<a data-sveltekit-prefetch=""> </a>'),
	K = m(
		'<div class="tabs tabs-border mb-4 flex items-center gap-2 overflow-auto"></div>',
	),
	L = m("<!> <!>", 1);
function ot(d, p) {
	k(p, !0);
	const f = N(() => D.url.pathname);
	let s = P(y([]));
	function u(t) {
		return a(f) === t || a(f).startsWith(t + "/");
	}
	g(() => {
		const t = [];
		(F.hasAnyPermission(G.dashboard.kpi) &&
			t.push({ label: H(), href: "/dashboard/kpi/tickets" }),
			I(s, t, !0));
	});
	var n = L(),
		c = S(n);
	{
		var h = (t) => {
			var e = K();
			(W(
				e,
				21,
				() => a(s),
				j,
				(b, o) => {
					var r = J(),
						_ = w(r, !0);
					(l(r),
						E(
							(x) => {
								(B(r, "href", a(o).href), C(r, 1, x), O(_, a(o).label));
							},
							[
								() =>
									z({
										tab: !0,
										"font-semibold": !0,
										"tab-active": u(a(o).href),
									}),
							],
						),
						i(b, r));
				},
			),
				l(e),
				i(t, e));
		};
		R(c, (t) => {
			a(s).length > 0 && t(h);
		});
	}
	var v = M(c, 2);
	(q(v, () => p.children), i(d, n), A());
}
export { ot as component };
