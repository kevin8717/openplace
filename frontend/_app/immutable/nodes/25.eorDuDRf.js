import { a as h, V as S, p as c, P as V } from "../chunks/CQTJJLB2.js";
import "../chunks/Bzak7iHL.js";
import "../chunks/B7vrJrEX.js";
import {
	p as z,
	t as b,
	a as f,
	b as M,
	c as u,
	d as a,
	r as e,
	s as _,
} from "../chunks/Dbe4PVAU.js";
import { s as m } from "../chunks/C_mo-lyU.js";
import { i as T } from "../chunks/Icl9dwnj.js";
import { i as $ } from "../chunks/BVnIq1Qc.js";
import { p as q } from "../chunks/DzNOOKXC.js";
import "../chunks/BhCkpOlh.js";
const A = async () => h.map((s) => ({ version: s.version })),
	Q = Object.freeze(
		Object.defineProperty({ __proto__: null, entries: A }, Symbol.toStringTag, {
			value: "Module",
		}),
	);
var B = u(
		'<div class="card border-base-content/10 border bg-base-100 shadow-sm"><div class="card-body items-center text-center"><p class="text-base-content/60"> </p> <a href="/patch-notes" class="btn btn-primary btn-sm mt-2"> </a></div></div>',
	),
	C = u(
		'<div class="mx-auto max-w-3xl px-4 py-8"><a href="/patch-notes" class="btn btn-ghost btn-sm mb-6 gap-1"> </a> <!></div>',
	);
function R(s, x) {
	z(x, !1);
	const r = h.find((t) => t.version === q.params.version),
		v = r ? { version: r.version, title: r.title, html: S(r.markdown) } : null;
	$();
	var o = C(),
		n = a(o),
		g = a(n);
	e(n);
	var y = _(n, 2);
	{
		var N = (t) => {
				V(t, {
					get patchNote() {
						return v;
					},
					latest: !0,
				});
			},
			w = (t) => {
				var i = B(),
					l = a(i),
					p = a(l),
					P = a(p);
				e(p);
				var d = _(p, 2),
					j = a(d, !0);
				(e(d),
					e(l),
					e(i),
					b(
						(k, O) => {
							(m(P, `${k ?? ""} not found.`), m(j, O));
						},
						[() => c(), () => c()],
					),
					f(t, i));
			};
		T(y, (t) => {
			v ? t(N) : t(w, !1);
		});
	}
	(e(o), b((t) => m(g, `← ${t ?? ""}`), [() => c()]), f(s, o), M());
}
export { R as component, Q as universal };
