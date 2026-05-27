import "../chunks/Cz-os3rt.js";
import { o as Gn, a as Kn } from "../chunks/B__H0ny_.js";
import {
	o as Jn,
	p as Qn,
	e as b,
	g as J,
	j as e,
	v as ea,
	h as ta,
	a as Jt,
	b as S,
	c as na,
	f as X,
	B as aa,
	i as a,
	$ as sa,
	d as r,
	s as i,
	r as o,
	n as We,
	t as re,
	w as la,
	u as oa,
} from "../chunks/C_uavZQJ.js";
import { s as Y } from "../chunks/DMUmq8Bg.js";
import { i as O } from "../chunks/ChKIMXcl.js";
import { e as Qt, i as ra } from "../chunks/BlcvAwpm.js";
import { h as ia } from "../chunks/a0sn6oCU.js";
import {
	r as q,
	s as ie,
	e as en,
	b as tn,
	a as nn,
} from "../chunks/CiokZgy7.js";
import { b as _e, a as ca } from "../chunks/DfigqzjD.js";
import { b as da } from "../chunks/BBg_GkUx.js";
import { g as ua } from "../chunks/t2OUuDdW.js";
import {
	C as fa,
	u as Oe,
	f as an,
	P as va,
	t as L,
	a as Mt,
} from "../chunks/Crl10T8F.js";
import { P as sn } from "../chunks/BTC_NzsW.js";
(function () {
	try {
		var A =
			typeof window < "u"
				? window
				: typeof global < "u"
					? global
					: typeof globalThis < "u"
						? globalThis
						: typeof self < "u"
							? self
							: {};
		A.SENTRY_RELEASE = { id: "448b4ed83dade10ecee1f50ce15a9606b232dc90" };
	} catch {}
})();
try {
	(function () {
		var A =
				typeof window < "u"
					? window
					: typeof global < "u"
						? global
						: typeof globalThis < "u"
							? globalThis
							: typeof self < "u"
								? self
								: {},
			xe = new A.Error().stack;
		xe &&
			((A._sentryDebugIds = A._sentryDebugIds || {}),
			(A._sentryDebugIds[xe] = "4d097879-3804-4a98-851e-ba22d51e56f4"),
			(A._sentryDebugIdIdentifier =
				"sentry-dbid-4d097879-3804-4a98-851e-ba22d51e56f4"));
	})();
} catch {}
var pa = X(
		'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;display=swap"/>',
	),
	ba = X('<div class="alert alert-error mb-4"><span> </span></div>'),
	ma = X("<option></option>"),
	ga = X('<span class="loading loading-spinner loading-xs"></span>'),
	ha = X(
		'<div class="mt-4"><div class="mb-2"><input type="range" class="range range-primary w-full"/> <div class="text-base-content/60 mt-1 flex justify-between text-xs"><span> </span> <span class="text-primary font-mono"> </span> <span> </span></div></div> <div class="flex items-center justify-center gap-1"><button class="btn btn-sm btn-ghost" title="Início"><span class="material-symbols-outlined">first_page</span></button> <button class="btn btn-sm btn-ghost" title="Evento anterior"><span class="material-symbols-outlined">chevron_backward</span></button> <button class="btn btn-sm btn-primary"><span class="material-symbols-outlined"> </span></button> <button class="btn btn-sm btn-ghost" title="Próximo evento"><span class="material-symbols-outlined">chevron_right</span></button> <button class="btn btn-sm btn-ghost" title="Fim"><span class="material-symbols-outlined">last_page</span></button> <select class="select select-bordered select-sm ml-2"><option>0.5x</option><option>1x</option><option>2x</option><option>5x</option><option>10x</option></select></div> <div class="text-base-content/60 mt-4 flex justify-center gap-4 text-sm"><span> </span> <span> </span></div></div>',
	),
	_a = X('<span class="loading loading-spinner loading-xs"></span>'),
	xa = X('<span class="material-symbols-outlined text-sm">add</span>'),
	ya = X('<button class="btn btn-xs btn-outline"><!> More</button>'),
	wa = X(
		'<button class="btn btn-xs btn-ghost" title="Limpar destaques"><span class="material-symbols-outlined text-sm">flare</span> <span class="text-xs"> </span></button>',
	),
	Ia = X(
		'<div class="text-base-content/60 py-8 text-center">No events loaded. Configure filters and click "Fetch Events".</div>',
	),
	ka = X(
		'<button class="badge badge-outline badge-sm hover:badge-primary cursor-pointer" title="Click to copy"> </button>',
	),
	Ta = X('<span class="text-base-content/30">—</span>'),
	Sa = X(
		'<tr><td class="px-1"><button class="btn btn-xs btn-ghost" title="Ir para este evento"><span class="material-symbols-outlined text-sm">history</span></button></td><td class="px-1"><button title="Destacar este evento"><span class="material-symbols-outlined text-sm">flare</span></button></td><td class="font-mono text-xs"> </td><td><button class="badge badge-sm hover:badge-primary cursor-pointer" title="Click to copy"> </button></td><td><!></td><td> </td></tr>',
	),
	Ma = X(
		'<div class="smooth-scroll min-h-0 flex-1 overflow-y-auto"><table class="table-zebra table-sm table"><thead class="bg-base-200 sticky top-0 z-10"><tr><th class="w-8"></th><th class="w-8"></th><th>Time</th><th>User</th><th>Alliance</th><th>Pixels</th></tr></thead><tbody></tbody></table></div>',
	),
	Ea = X(
		`<div class="bg-base-300 flex min-h-screen items-center justify-center p-4"><div class="mx-auto w-full max-w-7xl"><h1 class="mb-4 shrink-0 text-center text-2xl font-bold">Wayback Machine</h1> <!> <div class="bg-base-200 mb-4 shrink-0 rounded-lg px-4 py-3"><div class="flex flex-wrap items-end gap-3"><div class="flex items-end gap-2"><div class="form-control"><label class="label py-0.5" for="season"><span class="label-text text-xs">Season</span></label> <select id="season" class="select select-bordered select-sm w-20"></select></div> <div class="form-control"><label class="label py-0.5" for="tileX"><span class="label-text text-xs">Tile X</span></label> <input id="tileX" type="number" class="input input-bordered input-sm w-20"/></div> <div class="form-control"><label class="label py-0.5" for="tileY"><span class="label-text text-xs">Tile Y</span></label> <input id="tileY" type="number" class="input input-bordered input-sm w-20"/></div> <button class="btn btn-sm btn-square btn-ghost" title="Paste tile from URL"><span class="material-symbols-outlined text-base">content_paste</span></button></div> <div class="bg-base-content/10 h-8 w-px"></div> <div class="flex items-end gap-2"><div class="form-control"><label class="label py-0.5" for="userId"><span class="label-text text-xs">User</span></label> <input id="userId" type="number" class="input input-bordered input-sm w-24" placeholder="—"/></div> <div class="form-control"><label class="label py-0.5" for="allianceId"><span class="label-text text-xs">Alliance</span></label> <input id="allianceId" type="number" class="input input-bordered input-sm w-24" placeholder="—"/></div> <div class="form-control"><label class="label py-0.5" for="limit"><span class="label-text text-xs">Limit</span></label> <input id="limit" type="number" class="input input-bordered input-sm w-20"/></div></div> <div class="bg-base-content/10 h-8 w-px"></div> <div class="flex items-end gap-2"><div class="form-control"><label class="label py-0.5" for="fromTs"><span class="label-text text-xs">From</span></label> <input id="fromTs" type="datetime-local" class="input input-bordered input-sm"/></div> <div class="form-control"><label class="label py-0.5" for="toTs"><span class="label-text text-xs">To</span></label> <input id="toTs" type="datetime-local" class="input input-bordered input-sm"/></div></div> <button class="btn btn-primary btn-sm"><!> Fetch</button></div></div> <div class="grid gap-6 lg:grid-cols-2"><div class="bg-base-200 flex flex-col justify-between rounded-lg p-4"><div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold">画布预览</h2> <div class="flex items-center gap-3"><label class="flex cursor-pointer items-center gap-1"><input type="checkbox" class="checkbox checkbox-xs"/> <span class="text-xs">Base</span></label> <span class="text-base-content/60 text-xs"> </span> <button class="btn btn-xs btn-ghost">Reset</button></div></div> <div class="flex justify-center"><canvas class="border-base-content/20 cursor-grab rounded border active:cursor-grabbing"></canvas></div> <p class="text-base-content/50 mt-2 text-center text-xs">滚动缩放，拖动移动，单击突出显示。</p> <!></div> <div class="bg-base-200 flex max-h-[70vh] flex-col rounded-lg p-4"><div class="mb-4 flex shrink-0 items-center justify-between"><div class="flex items-center gap-2"><h2 class="text-lg font-semibold">Events</h2> <span class="badge badge-neutral badge-sm"> </span> <!></div> <!></div> <!></div></div></div></div> <style>.smooth-scroll {
			scroll-behavior: smooth;
		}</style>`,
		1,
	);
function za(A, xe) {
	Qn(xe, !0);
	let Le = b(!1),
		ce = b(!1),
		ye = b(null),
		f = b(J([])),
		qe = b(J([])),
		de = b(0),
		De = b(null),
		He = b(!0),
		Q = b(null),
		j = b(!1),
		we = b(J(fa)),
		H = b(void 0),
		Z = b(void 0),
		$e = b(void 0),
		Fe = b(void 0),
		ee = b(100);
	const Et = Date.now();
	let C = b(Et - 720 * 60 * 60 * 1e3),
		N = b(J(Et)),
		x = b(J(e(C))),
		ue = b(!1),
		Ze = b(1),
		te = null,
		Ve = 0,
		z = b(void 0),
		d = null;
	const k = 512;
	let Ae = null,
		fe = null,
		Ge = -1,
		Rt = 0,
		Xt = 0,
		B = b(1),
		M = b(0),
		E = b(0),
		Ke = b(!1),
		Je = 0,
		Qe = 0,
		et = !1,
		tt = !1,
		D = b(J(new Set()));
	const Pt = new Map();
	function Be(n) {
		let t = Pt.get(n);
		if (!t) {
			const s = an.colors[n];
			if (s) {
				const u = s.rgb.length >= 4 ? s.rgb[3] === 0 : n === 0;
				t = { r: s.rgb[0], g: s.rgb[1], b: s.rgb[2], transparent: u };
			} else t = { r: 0, g: 0, b: 0, transparent: !0 };
			Pt.set(n, t);
		}
		return t;
	}
	function nt(n) {
		let t = 0,
			s = e(f).length - 1,
			u = -1;
		for (; t <= s; ) {
			const l = (t + s) >>> 1;
			e(f)[l].ts <= n ? ((u = l), (t = l + 1)) : (s = l - 1);
		}
		return u;
	}
	function at(n) {
		let t = 0,
			s = e(f).length - 1,
			u = -1;
		for (; t <= s; ) {
			const l = (t + s) >>> 1;
			e(f)[l].ts > n ? ((u = l), (s = l - 1)) : (t = l + 1);
		}
		return u;
	}
	(Gn(async () => {
		(Oe.data || (await Oe.refresh()),
			Oe.hasPermission(sn.tools.wayback.wayback) || ua("/404"),
			e(z) &&
				((d = e(z).getContext("2d", { alpha: !1 })),
				d && ((d.fillStyle = "#1a1a2e"), d.fillRect(0, 0, k, k))),
			e(z) && Mn(),
			typeof OffscreenCanvas < "u" &&
				((Ae = new OffscreenCanvas(k, k)),
				(fe = Ae.getContext("2d", { alpha: !1 }))));
	}),
		Kn(() => {
			(ke(), te && cancelAnimationFrame(te), Nt());
		}));
	async function ln() {
		if (e(H) === void 0 || e(Z) === void 0) {
			L.error("Tile X and Y are required");
			return;
		}
		(a(Le, !0), a(ye, null), a(ue, !1), ke());
		try {
			(a(f, [], !0),
				a(qe, [], !0),
				a(de, 0),
				a(Q, null),
				a(j, !1),
				(Ge = -1),
				e(Ie).clear(),
				lt.clear(),
				a(D, new Set(), !0));
			const t = 7 * 24 * 60 * 60 * 1e3,
				s = Math.max(0, e(C) - t),
				u = Mt.getWaybackEvents({
					season: e(we),
					fromTs: e(C),
					toTs: e(N),
					tileX: e(H),
					tileY: e(Z),
					userId: Ne(e($e)),
					allianceId: Ne(e(Fe)),
					limit: e(ee),
				}),
				[l, p] = await Promise.all([
					(async () => {
						try {
							const v = await Mt.getWaybackReconstructImage({
									season: e(we),
									fromTs: s,
									toTs: e(C),
									tileX: e(H),
									tileY: e(Z),
								}),
								m = URL.createObjectURL(v);
							return await new Promise((h) => {
								const _ = new Image();
								((_.onload = () => {
									(URL.revokeObjectURL(m), h(_));
								}),
									(_.onerror = (P) => {
										(console.error("Failed to load reconstruct image:", P),
											URL.revokeObjectURL(m),
											h(null));
									}),
									(_.src = m));
							});
						} catch (v) {
							return (console.error("Error fetching reconstruct:", v), null);
						}
					})(),
					u,
				]);
			(a(De, l, !0),
				a(f, p.events ?? [], !0),
				a(qe, e(f), !0),
				a(de, e(f).length, !0),
				a(x, e(C), !0),
				e(f).length > 0 ? a(Q, e(f)[e(f).length - 1].ts, !0) : a(Q, null),
				a(j, e(f).length === e(ee)),
				a(Yt, e(C), !0),
				a(ne, -1),
				console.log("Reconstruct base loaded:", !!l),
				console.log("First event:", e(f)[0]),
				console.log("Hit limit page:", e(j), "lastLoadedTs:", e(Q)),
				l
					? L.success(`Loaded ${e(de)} events (page 1)`)
					: L.info("基础重构未加载，仅显示事件。"),
				T());
		} catch (n) {
			(a(ye, n.message, !0), L.error(e(ye)));
		} finally {
			a(Le, !1);
		}
	}
	async function st() {
		if (
			!e(ce) &&
			!(e(H) === void 0 || e(Z) === void 0) &&
			!(!e(j) || e(Q) === null)
		) {
			a(ce, !0);
			try {
				const n = e(Q) + 1,
					s =
						(
							await Mt.getWaybackEvents({
								season: e(we),
								fromTs: n,
								toTs: e(N),
								tileX: e(H),
								tileY: e(Z),
								userId: Ne(e($e)),
								allianceId: Ne(e(Fe)),
								limit: e(ee),
							})
						).events ?? [];
				if (s.length === 0) {
					(a(j, !1), L.info("No more events in this range."));
					return;
				}
				(a(f, [...e(f), ...s], !0),
					a(qe, e(f), !0),
					a(de, e(f).length, !0),
					a(Q, e(f)[e(f).length - 1].ts, !0),
					a(j, s.length === e(ee)),
					console.log("Loaded more events:", s.length, "total:", e(de)),
					L.success(`Loaded +${s.length} events (total ${e(de)})`),
					T());
			} catch (n) {
				L.error(n.message);
			} finally {
				a(ce, !1);
			}
		}
	}
	let Ie = b(J(new Map())),
		lt = J(new Map()),
		Yt = b(-1),
		ne = b(-1);
	const U = va;
	function on(n, t) {
		return t * U + n;
	}
	function rn() {
		if (e(f).length === 0) return;
		const n = nt(e(x));
		n < e(ne) && (a(Ie, new Map(lt), !0), a(ne, -1));
		const t = e(ne) + 1;
		for (let s = t; s <= n; s++) {
			const u = e(f)[s];
			for (let l = 0; l < u.pixelsX.length; l++) {
				const p = on(u.pixelsX[l], u.pixelsY[l]);
				e(Ie).set(p, u.colors[l]);
			}
		}
		(a(ne, n, !0), a(Yt, e(x), !0));
	}
	function T() {
		((tt = !0),
			et ||
				((et = !0),
				requestAnimationFrame(() => {
					((et = !1), tt && ((tt = !1), Lt()));
				})));
	}
	let ot = null;
	function Ct(n) {
		if (!ot) {
			const t = document.createElement("canvas");
			((t.width = 2), (t.height = 2));
			const s = t.getContext("2d");
			s &&
				((s.fillStyle = "#808080"),
				s.fillRect(0, 0, 1, 1),
				s.fillRect(1, 1, 1, 1),
				(s.fillStyle = "#404040"),
				s.fillRect(1, 0, 1, 1),
				s.fillRect(0, 1, 1, 1),
				(ot = n.createPattern(t, "repeat")));
		}
		return ot;
	}
	function Lt() {
		if (!d) return;
		(rn(), (d.fillStyle = "#1a1a2e"), d.fillRect(0, 0, k, k));
		const t = (k / U) * e(B);
		if (e(He) && e(De)) {
			d.imageSmoothingEnabled = !1;
			const l = U * t;
			fe && Ae
				? ((Ge !== e(B) || Rt !== e(M) || Xt !== e(E)) &&
						((fe.fillStyle = "#1a1a2e"),
						fe.fillRect(0, 0, k, k),
						(fe.imageSmoothingEnabled = !1),
						fe.drawImage(e(De), e(M), e(E), l, l),
						(Ge = e(B)),
						(Rt = e(M)),
						(Xt = e(E))),
					d.drawImage(Ae, 0, 0))
				: d.drawImage(e(De), e(M), e(E), l, l);
		}
		const s = new Map(),
			u = [];
		for (const [l, p] of e(Ie)) {
			const v = l % U,
				m = Math.floor(l / U);
			if (Be(p).transparent) u.push({ x: v, y: m });
			else {
				let _ = s.get(p);
				(_ || ((_ = []), s.set(p, _)), _.push({ x: v, y: m }));
			}
		}
		if (u.length > 0) {
			const l = Ct(d);
			if (l) {
				(d.save(), (d.fillStyle = l));
				for (const { x: p, y: v } of u) {
					const m = p * t + e(M),
						h = v * t + e(E);
					(d.save(),
						d.translate(m, h),
						d.scale(t / 2, t / 2),
						d.fillRect(0, 0, 2, 2),
						d.restore());
				}
				d.restore();
			}
		}
		for (const [l, p] of s) {
			const v = Be(l);
			d.fillStyle = `rgb(${v.r},${v.g},${v.b})`;
			for (const { x: m, y: h } of p) {
				const _ = m * t + e(M),
					P = h * t + e(E);
				d.fillRect(_, P, t, t);
			}
		}
		if (e(D).size > 0) {
			((d.fillStyle = "rgba(0, 0, 0, 0.6)"), d.fillRect(0, 0, k, k));
			const l = new Map(),
				p = [];
			for (const v of e(D))
				if (v >= 0 && v < e(f).length && v <= e(ne)) {
					const m = e(f)[v];
					for (let h = 0; h < m.pixelsX.length; h++) {
						const _ = m.pixelsX[h],
							P = m.pixelsY[h],
							W = m.colors[h];
						if (Be(W).transparent) p.push({ x: _, y: P });
						else {
							let V = l.get(W);
							(V || ((V = []), l.set(W, V)), V.push({ x: _, y: P }));
						}
					}
				}
			if (p.length > 0) {
				const v = Ct(d);
				if (v) {
					(d.save(), (d.fillStyle = v));
					for (const { x: m, y: h } of p) {
						const _ = m * t + e(M),
							P = h * t + e(E);
						(d.save(),
							d.translate(_, P),
							d.scale(t / 2, t / 2),
							d.fillRect(0, 0, 2, 2),
							d.restore());
					}
					d.restore();
				}
			}
			for (const [v, m] of l) {
				const h = Be(v);
				d.fillStyle = `rgb(${h.r},${h.g},${h.b})`;
				for (const { x: _, y: P } of m) {
					const W = _ * t + e(M),
						Se = P * t + e(E);
					d.fillRect(W, Se, t, t);
				}
			}
		}
		if (t >= 4) {
			((d.strokeStyle = "rgba(255,255,255,0.1)"),
				(d.lineWidth = 0.5),
				d.beginPath());
			for (let l = 0; l <= U; l++) {
				const p = l * t + e(M),
					v = l * t + e(E);
				(p >= 0 && p <= k && (d.moveTo(p, 0), d.lineTo(p, k)),
					v >= 0 && v <= k && (d.moveTo(0, v), d.lineTo(k, v)));
			}
			d.stroke();
		}
	}
	function cn(n) {
		var m;
		n.preventDefault();
		const t = (m = e(z)) == null ? void 0 : m.getBoundingClientRect();
		if (!t) return;
		const s = n.clientX - t.left,
			u = n.clientY - t.top,
			l = e(B),
			p = n.deltaY > 0 ? 0.9 : 1.1;
		a(B, Math.max(0.5, Math.min(20, e(B) * p)), !0);
		const v = e(B) / l;
		(a(M, s - (s - e(M)) * v), a(E, u - (u - e(E)) * v), T());
	}
	let Dt = 0;
	const dn = 16;
	function $t() {
		(a(Ke, !1), (je = !1));
	}
	let je = !1,
		Ft = 0,
		At = 0;
	function un(n) {
		(a(Ke, !0),
			(Je = n.clientX),
			(Qe = n.clientY),
			(Ft = n.clientX),
			(At = n.clientY),
			(je = !1));
	}
	function fn(n) {
		if (!e(Ke)) return;
		const t = performance.now();
		if (t - Dt < dn) return;
		Dt = t;
		const s = n.clientX - Je,
			u = n.clientY - Qe;
		((Math.abs(n.clientX - Ft) > 3 || Math.abs(n.clientY - At) > 3) &&
			(je = !0),
			a(M, e(M) + s),
			a(E, e(E) + u),
			(Je = n.clientX),
			(Qe = n.clientY),
			T());
	}
	function vn(n, t) {
		const s = nt(e(x));
		for (let u = s; u >= 0; u--) {
			const l = e(f)[u];
			for (let p = 0; p < l.pixelsX.length; p++)
				if (l.pixelsX[p] === n && l.pixelsY[p] === t) return u;
		}
		return null;
	}
	function pn(n) {
		var _;
		if (je) return;
		const t = (_ = e(z)) == null ? void 0 : _.getBoundingClientRect();
		if (!t) return;
		const s = n.clientX - t.left,
			u = n.clientY - t.top,
			p = (k / U) * e(B),
			v = Math.floor((s - e(M)) / p),
			m = Math.floor((u - e(E)) / p);
		if (v < 0 || v >= U || m < 0 || m >= U) return;
		const h = vn(v, m);
		h !== null && (jt(h), bn(h));
	}
	function bn(n) {
		const t = document.getElementById(`event-row-${n}`);
		t && t.scrollIntoView({ behavior: "smooth", block: "center" });
	}
	function mn() {
		(a(B, 1), a(M, 0), a(E, 0), T());
	}
	function gn() {
		e(ue) ? ke() : hn();
	}
	function hn() {
		if (e(f).length === 0) return;
		(a(ue, !0), (Ve = performance.now()));
		function n(t) {
			if (!e(ue)) return;
			const s = t - Ve,
				u = 100 / e(Ze);
			if (s >= u) {
				Ve = t;
				const l = at(e(x));
				if (l >= 0 && l < e(f).length)
					(a(x, e(f)[l].ts, !0),
						e(f).length - l - 1 < 10 && e(j) && !e(ce) && st(),
						T());
				else if (e(j)) {
					st().then(() => {
						const p = at(e(x));
						p >= 0 ? (a(x, e(f)[p].ts, !0), T()) : ke();
					});
					return;
				} else {
					ke();
					return;
				}
			}
			te = requestAnimationFrame(n);
		}
		te = requestAnimationFrame(n);
	}
	function ke() {
		(a(ue, !1), te && (cancelAnimationFrame(te), (te = null)));
	}
	function _n() {
		(a(x, e(C), !0), a(Ie, new Map(lt), !0), a(ne, -1), T());
	}
	function xn() {
		(a(x, e(N), !0), T());
	}
	function yn() {
		const n = nt(e(x) - 1);
		n >= 0 && (a(x, e(f)[n].ts, !0), T());
	}
	function wn() {
		const n = at(e(x));
		n >= 0 && n < e(f).length && (a(x, e(f)[n].ts, !0), T());
	}
	function rt(n) {
		return new Date(n).toLocaleString();
	}
	function In(n) {
		const t = Math.floor(n / 1e3),
			s = Math.floor(t / 60),
			u = Math.floor(s / 60);
		return u > 0 ? `${u}h ${s % 60}m` : s > 0 ? `${s}m ${t % 60}s` : `${t}s`;
	}
	function Bt(n) {
		const t = new Date(n),
			s = t.getFullYear(),
			u = String(t.getMonth() + 1).padStart(2, "0"),
			l = String(t.getDate()).padStart(2, "0"),
			p = String(t.getHours()).padStart(2, "0"),
			v = String(t.getMinutes()).padStart(2, "0");
		return `${s}-${u}-${l}T${p}:${v}`;
	}
	let kn = oa(() => {
		if (e(f).length === 0) return [];
		const n = [];
		for (let t = e(f).length - 1; t >= 0; t--)
			n.push({ event: e(f)[t], idx: t });
		return n;
	});
	async function Tn() {
		try {
			const t = (await navigator.clipboard.readText()).match(
				/\/s\d+\/pixel\/(\d+)\/(\d+)/,
			);
			if (t) {
				const s = parseInt(t[1]),
					u = parseInt(t[2]);
				(a(H, s, !0), a(Z, u, !0), L.success(`Pasted Tile X=${s}, Y=${u}`));
			} else L.error("No valid tile URL found in clipboard");
		} catch {
			L.error("Could not read clipboard");
		}
	}
	function jt(n) {
		const t = new Set(e(D));
		(t.has(n) ? t.delete(n) : t.add(n), a(D, t, !0), T());
	}
	function Sn() {
		e(D).size > 0 && (a(D, new Set(), !0), T());
	}
	ea(() => {
		d && e(f).length > 0 && e(x) >= 0 && T();
	});
	let Te = null;
	function Mn() {
		e(z) &&
			(Nt(),
			(Te = new AbortController()),
			e(z).addEventListener("wheel", cn, { passive: !1, signal: Te.signal }));
	}
	function Nt() {
		Te && (Te.abort(), (Te = null));
	}
	function Ne(n) {
		if (n == null) return;
		if (typeof n == "number")
			return !Number.isFinite(n) || Number.isNaN(n) || n <= 0
				? void 0
				: Math.trunc(n);
		const t = Number(n);
		if (!(!Number.isFinite(t) || Number.isNaN(t) || t <= 0))
			return Math.trunc(t);
	}
	var zt = ta();
	ia("1q3tff3", (n) => {
		var t = pa();
		(aa(() => {
			sa.title = "Wayback Machine";
		}),
			S(n, t));
	});
	var En = Jt(zt);
	{
		var Rn = (n) => {
			var t = Ea(),
				s = Jt(t),
				u = r(s),
				l = i(r(u), 2);
			{
				var p = (c) => {
					var g = ba(),
						w = r(g),
						y = r(w, !0);
					(o(w), o(g), re(() => Y(y, e(ye))), S(c, g));
				};
				O(l, (c) => {
					e(ye) && c(p);
				});
			}
			var v = i(l, 2),
				m = r(v),
				h = r(m),
				_ = r(h),
				P = i(r(_), 2);
			(Qt(
				P,
				21,
				() => an.seasons,
				ra,
				(c, g, w) => {
					var y = ma();
					((y.textContent = w), (y.value = y.__value = w), S(c, y));
				},
			),
				o(P),
				o(_));
			var W = i(_, 2),
				Se = i(r(W), 2);
			(q(Se), o(W));
			var V = i(W, 2),
				Ut = i(r(V), 2);
			(q(Ut), o(V));
			var Xn = i(V, 2);
			((Xn.__click = Tn), o(h));
			var it = i(h, 4),
				ct = r(it),
				Wt = i(r(ct), 2);
			(q(Wt), o(ct));
			var dt = i(ct, 2),
				Ot = i(r(dt), 2);
			(q(Ot), o(dt));
			var qt = i(dt, 2),
				ut = i(r(qt), 2);
			(q(ut), ie(ut, "max", 100), o(qt), o(it));
			var ft = i(it, 4),
				vt = r(ft),
				pt = i(r(vt), 2);
			(q(pt),
				(pt.__change = (c) => {
					a(C, new Date(c.currentTarget.value).getTime(), !0);
				}),
				o(vt));
			var Ht = i(vt, 2),
				bt = i(r(Ht), 2);
			(q(bt),
				(bt.__change = (c) => {
					a(N, new Date(c.currentTarget.value).getTime(), !0);
				}),
				o(Ht),
				o(ft));
			var ze = i(ft, 2);
			ze.__click = ln;
			var Pn = r(ze);
			{
				var Yn = (c) => {
					var g = ga();
					S(c, g);
				};
				O(Pn, (c) => {
					e(Le) && c(Yn);
				});
			}
			(We(), o(ze), o(m), o(v));
			var Zt = i(v, 2),
				mt = r(Zt),
				gt = r(mt),
				Vt = i(r(gt), 2),
				ht = r(Vt),
				_t = r(ht);
			(q(_t), (_t.__change = () => Lt()), We(2), o(ht));
			var xt = i(ht, 2),
				Cn = r(xt);
			o(xt);
			var Ln = i(xt, 2);
			((Ln.__click = mn), o(Vt), o(gt));
			var yt = i(gt, 2),
				G = r(yt);
			(ie(G, "width", k),
				ie(G, "height", k),
				(G.__mousedown = un),
				(G.__mousemove = fn),
				(G.__mouseup = $t),
				(G.__click = pn),
				da(
					G,
					(c) => a(z, c),
					() => e(z),
				),
				o(yt));
			var Dn = i(yt, 4);
			{
				var $n = (c) => {
					var g = ha(),
						w = r(g),
						y = r(w);
					(q(y), (y.__input = () => T()));
					var ae = i(y, 2),
						R = r(ae),
						I = r(R, !0);
					o(R);
					var K = i(R, 2),
						se = r(K, !0);
					o(K);
					var ve = i(K, 2),
						Tt = r(ve, !0);
					(o(ve), o(ae), o(w));
					var le = i(w, 2),
						Me = r(le);
					Me.__click = _n;
					var pe = i(Me, 2);
					pe.__click = yn;
					var be = i(pe, 2);
					be.__click = gn;
					var me = r(be),
						Ee = r(me, !0);
					(o(me), o(be));
					var Ue = i(be, 2);
					Ue.__click = wn;
					var ge = i(Ue, 2);
					ge.__click = xn;
					var Re = i(ge, 2),
						Xe = r(Re);
					Xe.value = Xe.__value = 0.5;
					var Pe = i(Xe);
					Pe.value = Pe.__value = 1;
					var he = i(Pe);
					he.value = he.__value = 2;
					var Ye = i(he);
					Ye.value = Ye.__value = 5;
					var $ = i(Ye);
					(($.value = $.__value = 10), o(Re), o(le));
					var F = i(le, 2),
						oe = r(F),
						St = r(oe);
					o(oe);
					var Kt = i(oe, 2),
						On = r(Kt);
					(o(Kt),
						o(F),
						o(g),
						re(
							(Ce, qn, Hn, Zn, Vn) => {
								(ie(y, "min", e(C)),
									ie(y, "max", e(N)),
									ie(y, "step", Ce),
									Y(I, qn),
									Y(se, Hn),
									Y(Tt, Zn),
									Y(Ee, e(ue) ? "pause" : "play_arrow"),
									Y(St, `Events loaded: ${e(f).length ?? ""}`),
									Y(On, `Duration: ${Vn ?? ""}`));
							},
							[
								() => Math.max(1, Math.floor((e(N) - e(C)) / 1e3)),
								() => rt(e(C)),
								() => rt(e(x)),
								() => rt(e(N)),
								() => In(e(N) - e(C)),
							],
						),
						_e(
							y,
							() => e(x),
							(Ce) => a(x, Ce),
						),
						tn(
							Re,
							() => e(Ze),
							(Ce) => a(Ze, Ce),
						),
						S(c, g));
				};
				O(Dn, (c) => {
					e(f).length > 0 && c($n);
				});
			}
			o(mt);
			var Gt = i(mt, 2),
				wt = r(Gt),
				It = r(wt),
				kt = i(r(It), 2),
				Fn = r(kt, !0);
			o(kt);
			var An = i(kt, 2);
			{
				var Bn = (c) => {
					var g = ya();
					g.__click = st;
					var w = r(g);
					{
						var y = (R) => {
								var I = _a();
								S(R, I);
							},
							ae = (R) => {
								var I = xa();
								S(R, I);
							};
						O(w, (R) => {
							e(ce) ? R(y) : R(ae, !1);
						});
					}
					(We(), o(g), re(() => (g.disabled = e(ce))), S(c, g));
				};
				O(An, (c) => {
					e(j) && c(Bn);
				});
			}
			o(It);
			var jn = i(It, 2);
			{
				var Nn = (c) => {
					var g = wa();
					g.__click = Sn;
					var w = i(r(g), 2),
						y = r(w);
					(o(w), o(g), re(() => Y(y, `Clear (${e(D).size ?? ""})`)), S(c, g));
				};
				O(jn, (c) => {
					e(D).size > 0 && c(Nn);
				});
			}
			o(wt);
			var zn = i(wt, 2);
			{
				var Un = (c) => {
						var g = Ia();
						S(c, g);
					},
					Wn = (c) => {
						var g = Ma(),
							w = r(g),
							y = i(r(w));
						(Qt(
							y,
							21,
							() => e(kn),
							({ event: ae, idx: R }) => R,
							(ae, R) => {
								let I = () => e(R).event,
									K = () => e(R).idx;
								var se = Sa(),
									ve = r(se),
									Tt = r(ve);
								((Tt.__click = () => {
									(a(x, I().ts, !0), T());
								}),
									o(ve));
								var le = i(ve),
									Me = r(le);
								((Me.__click = () => jt(K())), o(le));
								var pe = i(le),
									be = r(pe);
								o(pe);
								var me = i(pe),
									Ee = r(me);
								Ee.__click = () => {
									(navigator.clipboard.writeText(I().userId.toString()),
										L.success(`User ID ${I().userId} copied`));
								};
								var Ue = r(Ee, !0);
								(o(Ee), o(me));
								var ge = i(me),
									Re = r(ge);
								{
									var Xe = ($) => {
											var F = ka();
											F.__click = () => {
												(navigator.clipboard.writeText(
													I().allianceId.toString(),
												),
													L.success(`Alliance ID ${I().allianceId} copied`));
											};
											var oe = r(F, !0);
											(o(F), re(() => Y(oe, I().allianceId)), S($, F));
										},
										Pe = ($) => {
											var F = Ta();
											S($, F);
										};
									O(Re, ($) => {
										I().allianceId > 0 ? $(Xe) : $(Pe, !1);
									});
								}
								o(ge);
								var he = i(ge),
									Ye = r(he, !0);
								(o(he),
									o(se),
									re(
										($, F, oe, St) => {
											(ie(se, "id", `event-row-${K() ?? ""}`),
												nn(
													se,
													1,
													`${I().ts === e(x) ? "bg-primary/20" : ""} ${$ ?? ""} ${I().ts > e(x) ? "opacity-40" : ""}`,
												),
												nn(Me, 1, `btn btn-xs ${F ?? ""}`),
												Y(
													be,
													`${oe ?? ""}
												${St ?? ""}`,
												),
												Y(Ue, I().userId),
												Y(Ye, I().pixelsCount));
										},
										[
											() => (e(D).has(K()) ? "bg-warning/20" : ""),
											() => (e(D).has(K()) ? "btn-warning" : "btn-ghost"),
											() => new Date(I().ts).toLocaleDateString(),
											() => new Date(I().ts).toLocaleTimeString(),
										],
									),
									S(ae, se));
							},
						),
							o(y),
							o(w),
							o(g),
							S(c, g));
					};
				O(zn, (c) => {
					e(f).length === 0 ? c(Un) : c(Wn, !1);
				});
			}
			(o(Gt),
				o(Zt),
				o(u),
				o(s),
				We(2),
				re(
					(c, g, w) => {
						(en(pt, c),
							en(bt, g),
							(ze.disabled = e(Le) || e(ee) > 100),
							Y(Cn, `Zoom: ${w ?? ""}x`),
							Y(Fn, e(f).length));
					},
					[() => Bt(e(C)), () => Bt(e(N)), () => e(B).toFixed(1)],
				),
				tn(
					P,
					() => e(we),
					(c) => a(we, c),
				),
				_e(
					Se,
					() => e(H),
					(c) => a(H, c),
				),
				_e(
					Ut,
					() => e(Z),
					(c) => a(Z, c),
				),
				_e(
					Wt,
					() => e($e),
					(c) => a($e, c),
				),
				_e(
					Ot,
					() => e(Fe),
					(c) => a(Fe, c),
				),
				_e(
					ut,
					() => e(ee),
					(c) => a(ee, c),
				),
				ca(
					_t,
					() => e(He),
					(c) => a(He, c),
				),
				la("mouseleave", G, $t),
				S(n, t));
		};
		O(En, (n) => {
			Oe.hasPermission(sn.tools.wayback.wayback) && n(Rn);
		});
	}
	(S(A, zt), na());
}
Jn(["click", "change", "mousedown", "mousemove", "mouseup", "input"]);
export { za as component };
