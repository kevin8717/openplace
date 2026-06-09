import "../chunks/Bzak7iHL.js";
import { o as S } from "../chunks/DMoMXVXI.js";
import {
	a as p,
	w as W,
	p as A,
	b as E,
	j as F,
	c as v,
	d as a,
	h as H,
	$ as J,
	r as t,
	s,
	i as b,
	e as K,
	f as O,
	t as k,
	u as Q,
} from "../chunks/Dbe4PVAU.js";
import { s as m } from "../chunks/C_mo-lyU.js";
import { i as C } from "../chunks/Icl9dwnj.js";
import { h as R } from "../chunks/ClbV77Km.js";
import { p as U } from "../chunks/DzNOOKXC.js";
import { u as V } from "../chunks/DU-2YUMG.js";
import { L as X } from "../chunks/Cskb-8mx.js";
import { d as Y } from "../chunks/B7_gUtXa.js";
import { r as aa } from "../chunks/K9AHFDoV.js";
import "../chunks/BhCkpOlh.js";
import { g as ta } from "../chunks/DbEN2Ffr.js";
import { p as z, t as ra } from "../chunks/DKgxZV0V.js";
import { C as ea } from "../chunks/CvERtPUr.js";
var sa = W(
	'<svg><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path></svg>',
);
function oa(n, f) {
	let d = aa(f, ["$$slots", "$$events", "$$legacy"]);
	var o = sa();
	(Y(o, () => ({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		fill: "currentColor",
		...d,
	})),
		p(n, o));
}
var ia = v('<p class="text-primary text-2xl font-bold"> </p>'),
	la = v(
		'<div class="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2"><!></div> <div class="card border-base-content/10 w-full max-w-xl border shadow-sm"><div class="card-body gap-3"><!> <h2 class="text-4xl font-medium sm:text-5xl"> </h2> <!> <p class="text-lg"> </p> <a class="btn btn-primary btn-lg mt-2 w-max" href="/" data-sveltekit-reload=""> </a></div></div>',
		1,
	),
	pa = v('<span class="loading loading-spinner loading-lg"></span>'),
	da = v(
		'<div class="relative flex h-full flex-col items-center justify-center px-4"><div class="absolute top-8 hidden sm:block"><!></div> <!></div>',
	);
function qa(n, f) {
	A(f, !0);
	let d = K(!1),
		o = Q(() => Number(U.url.searchParams.get("droplets")) || 0);
	S(async () => {
		(await V.refresh(), H(d, !0));
	});
	var c = da();
	R("bj7zax", (r) => {
		F(
			(e) => {
				J.title = `Wplace - ${e ?? ""}`;
			},
			[() => z()],
		);
	});
	var _ = a(c),
		j = a(_);
	(X(j, { size: "lg", hasText: !0 }), t(_));
	var L = s(_, 2);
	{
		var D = (r) => {
				var e = la(),
					u = O(e),
					B = a(u);
				(ea(B, {
					amount: 300,
					size: 12,
					duration: 3e3,
					delay: [0, 4e3],
					x: [-8, 8],
					y: [0, 0.2],
					fallDistance: "100vh",
				}),
					t(u));
				var y = s(u, 2),
					$ = a(y),
					w = a($);
				oa(w, { class: "size-16 text-emerald-500" });
				var x = s(w, 2),
					G = a(x);
				t(x);
				var T = s(x, 2);
				{
					var I = (i) => {
						var l = ia(),
							h = a(l);
						(t(l),
							k(
								(P) => m(h, `+${P ?? ""} Droplets`),
								[() => b(o).toLocaleString()],
							),
							p(i, l));
					};
					C(T, (i) => {
						b(o) > 0 && i(I);
					});
				}
				var g = s(T, 2),
					M = a(g, !0);
				t(g);
				var q = s(g, 2),
					N = a(q, !0);
				(t(q),
					t($),
					t(y),
					k(
						(i, l, h) => {
							(m(G, `${i ?? ""}!`), m(M, l), m(N, h));
						},
						[() => z(), () => ra(), () => ta()],
					),
					p(r, e));
			},
			Z = (r) => {
				var e = pa();
				p(r, e);
			};
		C(L, (r) => {
			b(d) ? r(D) : r(Z, !1);
		});
	}
	(t(c), p(n, c), E());
}
export { qa as component };
