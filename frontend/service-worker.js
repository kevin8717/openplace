const sa = "/files",
	a = location.pathname.split("/").slice(0, -1).join("/"),
	na = [
		a + "/_app/immutable/entry/app.CNYAqyaS.js",
		a + "/_app/immutable/nodes/0.DIa6pPiN.js",
		a + "/_app/immutable/assets/0.CKJ6djnr.css",
		a + "/_app/immutable/assets/flags.a2kmUSbF.webp",
		a + "/_app/immutable/assets/flags@2x.gR6KPp3x.webp",
		a + "/_app/immutable/assets/Geist-cyrillic.CHSlOQsW.woff2",
		a + "/_app/immutable/assets/Geist-latin-ext.DMtmJ5ZE.woff2",
		a + "/_app/immutable/assets/Geist-latin.Dg_dQHbK.woff2",
		a + "/_app/immutable/assets/GeistMono-cyrillic.BZdD_g9V.woff2",
		a + "/_app/immutable/assets/GeistMono-latin-ext.b6lpi8_2.woff2",
		a + "/_app/immutable/assets/GeistMono-latin.Cjtb1TV-.woff2",
		a + "/_app/immutable/assets/PixelifySans-cyrillic.CPPz0Qvd.woff2",
		a + "/_app/immutable/assets/PixelifySans-latin.vdc2vUDH.woff2",
		a + "/_app/immutable/assets/NotoColorEmoji-flags.ClvgErYz.woff2",
		a + "/_app/immutable/nodes/1.BNMZ1App.js",
		a + "/_app/immutable/nodes/10.DvEhzwo_.js",
		a + "/_app/immutable/nodes/11.BDX-2k2C.js",
		a + "/_app/immutable/nodes/12.CYh0uttE.js",
		a + "/_app/immutable/assets/12.C8fZg4d2.css",
		a + "/_app/immutable/nodes/13.Cq8KZlJa.js",
		a + "/_app/immutable/nodes/14.CxkiEdd0.js",
		a + "/_app/immutable/assets/14.CjkSf_dE.css",
		a + "/_app/immutable/nodes/15.CUo5djkK.js",
		a + "/_app/immutable/nodes/16.BIKuwdqH.js",
		a + "/_app/immutable/nodes/17.iXeaYom8.js",
		a + "/_app/immutable/nodes/18.CFxop01b.js",
		a + "/_app/immutable/nodes/19.fYuSqr9D.js",
		a + "/_app/immutable/nodes/2.B7W5ocNk.js",
		a + "/_app/immutable/nodes/20.DAnZy7kN.js",
		a + "/_app/immutable/nodes/21.C_wmGyUx.js",
		a + "/_app/immutable/nodes/22.Tkn2lVCB.js",
		a + "/_app/immutable/nodes/23.D5nRNFqN.js",
		a + "/_app/immutable/nodes/24.Cy2TuCjn.js",
		a + "/_app/immutable/nodes/25.eorDuDRf.js",
		a + "/_app/immutable/nodes/26.DTLFxTsx.js",
		a + "/_app/immutable/nodes/27.V9xAA90E.js",
		a + "/_app/immutable/nodes/28.DKJR7oea.js",
		a + "/_app/immutable/nodes/29.D-Oil6YE.js",
		a + "/_app/immutable/assets/29.aY13Cjc7.css",
		a + "/_app/immutable/nodes/3.t-C1QGPV.js",
		a + "/_app/immutable/nodes/30.Aj9-ve-5.js",
		a + "/_app/immutable/nodes/31.CjCFsXxt.js",
		a + "/_app/immutable/nodes/32.BaM7dV7i.js",
		a + "/_app/immutable/nodes/33.CrGpdHjx.js",
		a + "/_app/immutable/nodes/34.CTzxC_t6.js",
		a + "/_app/immutable/nodes/35.jghFrgpY.js",
		a + "/_app/immutable/nodes/36.D8ML3dGg.js",
		a + "/_app/immutable/nodes/4.Uv6NPuwN.js",
		a + "/_app/immutable/nodes/5.DBl3Zv-y.js",
		a + "/_app/immutable/assets/5.DdouWVGS.css",
		a + "/_app/immutable/assets/squoosh_png_bg.BsfxGNEB.wasm",
		a + "/_app/immutable/nodes/6.4QmA5JbP.js",
		a + "/_app/immutable/nodes/7.B9M9c55x.js",
		a + "/_app/immutable/nodes/8.DQGIUbhE.js",
		a + "/_app/immutable/nodes/9.qY48VnnM.js",
		a + "/_app/immutable/chunks/-AhnqyAZ.js",
		a + "/_app/immutable/chunks/2Od2egA-.js",
		a + "/_app/immutable/chunks/5hzFOZ02.js",
		a + "/_app/immutable/chunks/B-TDV2C3.js",
		a + "/_app/immutable/chunks/B0JoJohi.js",
		a + "/_app/immutable/chunks/B1IGqgUU.js",
		a + "/_app/immutable/chunks/B23NG5RV.js",
		a + "/_app/immutable/chunks/B6k04QXL.js",
		a + "/_app/immutable/chunks/B7_gUtXa.js",
		a + "/_app/immutable/chunks/B7vrJrEX.js",
		a + "/_app/immutable/chunks/BAR6D20Q.js",
		a + "/_app/immutable/chunks/BFlSXuix.js",
		a + "/_app/immutable/chunks/BI5KFv7B.js",
		a + "/_app/immutable/chunks/BJMWNMzA.js",
		a + "/_app/immutable/chunks/BKBS1EOp.js",
		a + "/_app/immutable/chunks/BKLQopM3.js",
		a + "/_app/immutable/chunks/BKUInVTD.js",
		a + "/_app/immutable/chunks/BRekz1nD.js",
		a + "/_app/immutable/chunks/BTQgEZ2f.js",
		a + "/_app/immutable/chunks/BUvYSFTd.js",
		a + "/_app/immutable/chunks/BVnIq1Qc.js",
		a + "/_app/immutable/chunks/BVz9wMiQ.js",
		a + "/_app/immutable/chunks/BZcJYfQJ.js",
		a + "/_app/immutable/chunks/B_Oz03f8.js",
		a + "/_app/immutable/chunks/BbJIVHXi.js",
		a + "/_app/immutable/chunks/Bbg0KEAn.js",
		a + "/_app/immutable/chunks/BdBvrK65.js",
		a + "/_app/immutable/chunks/BdCqcZGB.js",
		a + "/_app/immutable/chunks/BhCkpOlh.js",
		a + "/_app/immutable/chunks/Bskxkpxm.js",
		a + "/_app/immutable/chunks/BvTqCSUg.js",
		a + "/_app/immutable/chunks/Bvwls8qX.js",
		a + "/_app/immutable/chunks/BxXtB1-F.js",
		a + "/_app/immutable/chunks/ByH6mgv9.js",
		a + "/_app/immutable/chunks/Bzak7iHL.js",
		a + "/_app/immutable/chunks/C-cxnuKD.js",
		a + "/_app/immutable/chunks/C-dU7195.js",
		a + "/_app/immutable/chunks/C1Rrr0ww.js",
		a + "/_app/immutable/chunks/C4Z8R_7N.js",
		a + "/_app/immutable/chunks/C5ukCcxH.js",
		a + "/_app/immutable/chunks/C6d2kgDd.js",
		a + "/_app/immutable/chunks/C9bY2KxP.js",
		a + "/_app/immutable/chunks/CD0Nhe1Q.js",
		a + "/_app/immutable/chunks/CEOl-OEM.js",
		a + "/_app/immutable/chunks/CFl7M2B7.js",
		a + "/_app/immutable/chunks/CKCBxNBJ.js",
		a + "/_app/immutable/chunks/CLEdZXaK.js",
		a + "/_app/immutable/chunks/CPcsbTWB.js",
		a + "/_app/immutable/chunks/CQTJJLB2.js",
		a + "/_app/immutable/assets/PatchNote.thqmqUms.css",
		a + "/_app/immutable/chunks/CT-mvjFm.js",
		a + "/_app/immutable/chunks/CTKAXTri.js",
		a + "/_app/immutable/chunks/CW0X7odH.js",
		a + "/_app/immutable/chunks/C_mo-lyU.js",
		a + "/_app/immutable/chunks/CbUCGNiK.js",
		a + "/_app/immutable/chunks/CbfqdBEM.js",
		a + "/_app/immutable/chunks/CgYJp4GH.js",
		a + "/_app/immutable/chunks/Ch38BS2u.js",
		a + "/_app/immutable/chunks/CiRk4_t8.js",
		a + "/_app/immutable/assets/ProfileAvatarWithLevel.2kDYVt-Y.css",
		a + "/_app/immutable/chunks/ClbV77Km.js",
		a + "/_app/immutable/chunks/Cme64dX3.js",
		a + "/_app/immutable/chunks/CoUk6ftS.js",
		a + "/_app/immutable/assets/Confetti.DAd1JYRv.css",
		a + "/_app/immutable/chunks/Cp-hTSeP.js",
		a + "/_app/immutable/chunks/CqMJ2HFU.js",
		a + "/_app/immutable/chunks/CqqDbOqG.js",
		a + "/_app/immutable/chunks/Cqr318Ee.js",
		a + "/_app/immutable/chunks/CrUWeZvY.js",
		a + "/_app/immutable/chunks/CsIr9lN0.js",
		a + "/_app/immutable/chunks/Cskb-8mx.js",
		a + "/_app/immutable/chunks/CtsjoaOH.js",
		a + "/_app/immutable/chunks/CvERtPUr.js",
		a + "/_app/immutable/chunks/CwftxlTm.js",
		a + "/_app/immutable/chunks/CyhDw_yt.js",
		a + "/_app/immutable/chunks/Czaeq32u.js",
		a + "/_app/immutable/chunks/D-3tY2dH.js",
		a + "/_app/immutable/assets/notification.CPyrWqU1.mp3",
		a + "/_app/immutable/chunks/D4oMlC_L.js",
		a + "/_app/immutable/chunks/D6_ahSxh.js",
		a + "/_app/immutable/chunks/D93kC7yH.js",
		a + "/_app/immutable/chunks/DBS6HGbD.js",
		a + "/_app/immutable/chunks/DEsezbwr.js",
		a + "/_app/immutable/assets/PatchNotesHistory.DshEs1En.css",
		a + "/_app/immutable/chunks/DIPg6T2F.js",
		a + "/_app/immutable/chunks/DIbtzbsw.js",
		a + "/_app/immutable/chunks/DKgxZV0V.js",
		a + "/_app/immutable/chunks/DKkygPh8.js",
		a + "/_app/immutable/chunks/DLrplejM.js",
		a + "/_app/immutable/chunks/DMoMXVXI.js",
		a + "/_app/immutable/chunks/DNTW03EA.js",
		a + "/_app/immutable/chunks/DPEu3dBb.js",
		a + "/_app/immutable/chunks/DU-2YUMG.js",
		a + "/_app/immutable/assets/pawtect_wasm_bg.Ckfht_86.wasm",
		a + "/_app/immutable/chunks/DX1r3K5G.js",
		a + "/_app/immutable/chunks/DXMrnaZG.js",
		a + "/_app/immutable/chunks/DYsZ-0Yb.js",
		a + "/_app/immutable/chunks/D_v-WRXI.js",
		a + "/_app/immutable/chunks/DaX0l6qk.js",
		a + "/_app/immutable/chunks/DbEN2Ffr.js",
		a + "/_app/immutable/chunks/DbF8UOi7.js",
		a + "/_app/immutable/chunks/Dbe4PVAU.js",
		a + "/_app/immutable/chunks/DgrZ_rdn.js",
		a + "/_app/immutable/assets/griefing1.mrf_QTk2.png",
		a + "/_app/immutable/assets/griefing2.HP5n4LVA.png",
		a + "/_app/immutable/assets/pgriefing1.Cxw7Oxbm.png",
		a + "/_app/immutable/assets/pgriefing2.cEou4X11.png",
		a + "/_app/immutable/assets/borde1.2HTtxzDt.png",
		a + "/_app/immutable/assets/borde2.CN89IOz0.png",
		a + "/_app/immutable/assets/borde4.D9VfQfkE.png",
		a + "/_app/immutable/assets/borde5.DkmTTj5N.png",
		a + "/_app/immutable/assets/borde6.CtRHeorl.png",
		a + "/_app/immutable/assets/mapclean1.CXzD9GTn.png",
		a + "/_app/immutable/assets/mapclean2.B1--Lv8s.png",
		a + "/_app/immutable/assets/mapclean3.zxc4kxhZ.png",
		a + "/_app/immutable/assets/ngriefing1.CQEoQ-5k.png",
		a + "/_app/immutable/assets/ngriefing2.CA1282Nq.png",
		a + "/_app/immutable/assets/ngriefing3.l-WuAkT6.png",
		a + "/_app/immutable/assets/Dialog.DNSr87Ge.css",
		a + "/_app/immutable/chunks/DlX_V98Q.js",
		a + "/_app/immutable/chunks/Dp1pzeXC.js",
		a + "/_app/immutable/chunks/DrImJxxA.js",
		a + "/_app/immutable/chunks/DyQ9pPD3.js",
		a + "/_app/immutable/chunks/DzNOOKXC.js",
		a + "/_app/immutable/chunks/GDUid2r-.js",
		a + "/_app/immutable/chunks/IWxsS1m0.js",
		a + "/_app/immutable/chunks/Icl9dwnj.js",
		a + "/_app/immutable/chunks/JKnWQwH6.js",
		a + "/_app/immutable/chunks/K9AHFDoV.js",
		a + "/_app/immutable/chunks/L80GiOtt.js",
		a + "/_app/immutable/chunks/MHTwTb88.js",
		a + "/_app/immutable/chunks/NTgY2kck.js",
		a + "/_app/immutable/chunks/NZukRHw1.js",
		a + "/_app/immutable/chunks/OvJd4Dh6.js",
		a + "/_app/immutable/chunks/RamoUxFG.js",
		a + "/_app/immutable/chunks/SpO575Nf.js",
		a + "/_app/immutable/chunks/U_H6LM6d.js",
		a + "/_app/immutable/chunks/WCizg6Ng.js",
		a + "/_app/immutable/chunks/WmcBTg9_.js",
		a + "/_app/immutable/chunks/XS4kEunf.js",
		a + "/_app/immutable/chunks/a6V0AsO7.js",
		a + "/_app/immutable/chunks/jEDRT1k8.js",
		a + "/_app/immutable/chunks/kMrz8wtr.js",
		a + "/_app/immutable/chunks/lSLusnBY.js",
		a + "/_app/immutable/chunks/mOmV0vnx.js",
		a + "/_app/immutable/chunks/og9Js_3x.js",
		a + "/_app/immutable/chunks/p2ZQY-1m.js",
		a + "/_app/immutable/chunks/rtlrM2iK.js",
		a + "/_app/immutable/chunks/ryCN0oNh.js",
		a + "/_app/immutable/chunks/sR4NyGSS.js",
		a + "/_app/immutable/chunks/srjLMDSD.js",
		a + "/_app/immutable/chunks/xlnJ43Nf.js",
		a + "/_app/immutable/chunks/yJuVUJnc.js",
		a + "/_app/immutable/chunks/yew7vgrr.js",
		a + "/_app/immutable/entry/start.D8VXZ2Y4.js",
		a + "/_app/immutable/chunks/3P6Si2Fo.js",
	],
	ta = [
		a + "/.well-known/assetlinks.json",
		a + "/.well-known/security.txt",
		a + "/favicon.ico",
		a + "/img/10k.png",
		a + "/img/1k.png",
		a + "/img/2_presents.png",
		a + "/img/5k.png",
		a + "/img/Paint_Charges.png",
		a + "/img/apple-touch-icon.png",
		a + "/img/auto_recharge.png",
		a + "/img/badges/question_mark.png",
		a + "/img/coal.png",
		a + "/img/events/badge-1/announcement-image-en.png",
		a + "/img/events/badge-1/announcement-image-pt.png",
		a + "/img/events/badge-1/reference-image.png",
		a + "/img/events/r-wplaced/announcement-image.jpeg",
		a + "/img/events/r-wplaced/r-wplaced-logo.png",
		a + "/img/favicon-96x96.png",
		a + "/img/flag.png",
		a + "/img/frame.png",
		a + "/img/frames/2025_christmas_border.png",
		a + "/img/frames/2025_halloween_border.png",
		a + "/img/frames/frame_ace_flag.png",
		a + "/img/frames/frame_bisex_flag.png",
		a + "/img/frames/frame_black_hole.png",
		a + "/img/frames/frame_brazil.png",
		a + "/img/frames/frame_cat_ears.png",
		a + "/img/frames/frame_cool_glasses.png",
		a + "/img/frames/frame_frog.png",
		a + "/img/frames/frame_headset.png",
		a + "/img/frames/frame_homo_flag.png",
		a + "/img/frames/frame_leaves.png",
		a + "/img/frames/frame_lesbian_flag.png",
		a + "/img/frames/frame_lgbt_flag.png",
		a + "/img/frames/frame_lightbulb.png",
		a + "/img/frames/frame_moon.png",
		a + "/img/frames/frame_moustache.png",
		a + "/img/frames/frame_red_ribbon.png",
		a + "/img/frames/frame_resistance.png",
		a + "/img/frames/frame_sakura.png",
		a + "/img/frames/frame_scarf_&_glasses.png",
		a + "/img/frames/frame_straw_hat.png",
		a + "/img/frames/frame_sun.png",
		a + "/img/frames/frame_trans_flag.png",
		a + "/img/frames/old_2025_christmas_border.png",
		a + "/img/frames/old_2025_halloween_border.png",
		a + "/img/frames/patch_1_2_0/frame_100k.png",
		a + "/img/frames/patch_1_2_0/frame_1m.png",
		a + "/img/frames/patch_1_2_0/frame_500k.png",
		a + "/img/frames/patch_1_2_0/frame_astronaut.png",
		a + "/img/frames/patch_1_2_0/frame_cap_and_spheres.png",
		a + "/img/frames/patch_1_2_0/frame_cool_hoodie.png",
		a + "/img/frames/patch_1_2_0/frame_diamond_helmett.png",
		a + "/img/frames/patch_1_2_0/frame_dragon.png",
		a + "/img/frames/patch_1_2_0/frame_elf_cap.png",
		a + "/img/frames/patch_1_2_0/frame_empty_hero.png",
		a + "/img/frames/patch_1_2_0/frame_flying_berry.png",
		a + "/img/frames/patch_1_2_0/frame_hair_with_flower.png",
		a + "/img/frames/patch_1_2_0/frame_horse.png",
		a + "/img/frames/patch_1_2_0/frame_loom_choir.png",
		a + "/img/frames/patch_1_2_0/frame_party_bunny.png",
		a + "/img/frames/patch_1_2_0/frame_scout_hat.png",
		a + "/img/horse/horse.png",
		a + "/img/logo-512x512.png",
		a + "/img/logo.png",
		a + "/img/logo.svg",
		a + "/img/og-image-mobile.png",
		a + "/img/og-image.png",
		a + "/img/pwa-country-leaderboard-mobile.png",
		a + "/img/pwa-kiev-mobile.png",
		a + "/img/pwa-paint-heart-mobile.png",
		a + "/img/pwa-void-mobile.png",
		a + "/img/web-app-manifest-192x192.png",
		a + "/img/web-app-manifest-512x512.png",
		a + "/site.webmanifest",
	],
	ia = "1780623880080";
let c;
const J =
	typeof TextDecoder < "u"
		? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
		: {
				decode: () => {
					throw Error("TextDecoder not available");
				},
			};
typeof TextDecoder < "u" && J.decode();
let C = null;
function R() {
	return (
		(C === null || C.byteLength === 0) && (C = new Uint8Array(c.memory.buffer)),
		C
	);
}
function ma(e, s) {
	return ((e = e >>> 0), J.decode(R().subarray(e, e + s)));
}
let D = null;
function oa() {
	return (
		(D === null || D.byteLength === 0) &&
			(D = new Uint8ClampedArray(c.memory.buffer)),
		D
	);
}
function la(e, s) {
	return ((e = e >>> 0), oa().subarray(e / 1, e / 1 + s));
}
const _ = new Array(128).fill(void 0);
_.push(void 0, null, !0, !1);
let M = _.length;
function ra(e) {
	M === _.length && _.push(_.length + 1);
	const s = M;
	return ((M = _[s]), (_[s] = e), s);
}
let U = 0;
function Y(e, s) {
	const n = s(e.length * 1, 1) >>> 0;
	return (R().set(e, n / 1), (U = e.length), n);
}
let S = null;
function W() {
	return (
		(S === null || S.byteLength === 0) && (S = new Int32Array(c.memory.buffer)),
		S
	);
}
function da(e, s) {
	return ((e = e >>> 0), R().subarray(e / 1, e / 1 + s));
}
function ca(e, s, n) {
	try {
		const r = c.__wbindgen_add_to_stack_pointer(-16),
			w = Y(e, c.__wbindgen_malloc),
			l = U;
		c.encode(r, w, l, s, n);
		var i = W()[r / 4 + 0],
			o = W()[r / 4 + 1],
			p = da(i, o).slice();
		return (c.__wbindgen_free(i, o * 1, 1), p);
	} finally {
		c.__wbindgen_add_to_stack_pointer(16);
	}
}
function pa(e) {
	return _[e];
}
function fa(e) {
	e < 132 || ((_[e] = M), (M = e));
}
function ga(e) {
	const s = pa(e);
	return (fa(e), s);
}
function ua(e) {
	const s = Y(e, c.__wbindgen_malloc),
		n = U,
		i = c.decode(s, n);
	return ga(i);
}
async function ba(e, s) {
	if (typeof Response == "function" && e instanceof Response) {
		if (typeof WebAssembly.instantiateStreaming == "function")
			try {
				return await WebAssembly.instantiateStreaming(e, s);
			} catch (i) {
				if (e.headers.get("Content-Type") != "application/wasm")
					console.warn(
						"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
						i,
					);
				else throw i;
			}
		const n = await e.arrayBuffer();
		return await WebAssembly.instantiate(n, s);
	} else {
		const n = await WebAssembly.instantiate(e, s);
		return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
	}
}
function _a() {
	const e = {};
	return (
		(e.wbg = {}),
		(e.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function (
			s,
			n,
			i,
			o,
		) {
			var p = la(s, n).slice();
			c.__wbindgen_free(s, n * 1, 1);
			const r = new ImageData(p, i >>> 0, o >>> 0);
			return ra(r);
		}),
		(e.wbg.__wbindgen_throw = function (s, n) {
			throw new Error(ma(s, n));
		}),
		e
	);
}
function ha(e, s) {
	return (
		(c = e.exports),
		(K.__wbindgen_wasm_module = s),
		(S = null),
		(C = null),
		(D = null),
		c
	);
}
async function K(e) {
	if (c !== void 0) return c;
	const s = _a();
	(typeof e == "string" ||
		(typeof Request == "function" && e instanceof Request) ||
		(typeof URL == "function" && e instanceof URL)) &&
		(e = fetch(e));
	const { instance: n, module: i } = await ba(await e, s);
	return ha(n, i);
}
const ka = globalThis.ServiceWorkerGlobalScope !== void 0,
	ja =
		ka &&
		typeof self < "u" &&
		globalThis.caches &&
		globalThis.caches.default !== void 0,
	wa =
		typeof process == "object" &&
		process.release &&
		process.release.name === "node";
(ja || wa) &&
	(globalThis.ImageData ||
		(globalThis.ImageData = class {
			constructor(s, n, i) {
				((this.data = s), (this.width = n), (this.height = i));
			}
		}),
	typeof self < "u" &&
		self.location === void 0 &&
		(self.location = { href: "" }));
let E;
async function ya(e) {
	return (E || (E = K(e)), E);
}
async function Ca(e) {
	await ya();
	const s = await ua(new Uint8Array(e));
	if (!s) throw new Error("Encoding error.");
	return s;
}
let N;
async function Z(e) {
	return (N || (N = K(e)), N);
}
async function z(e) {
	await Z();
	const s = await ca(e.data, e.width, e.height);
	if (!s) throw new Error("Encoding error.");
	return s.buffer;
}
const Da =
	"" +
	new URL("_app/immutable/assets/squoosh_png_bg.BsfxGNEB.wasm", location.href)
		.pathname;
function q({ pixel: e, season: s, tile: n }) {
	return `t=(${n[0]},${n[1]});p=(${e[0]},${e[1]});s=${s}`;
}
const Sa = [{ tileSize: 1e3, zoom: 11 }],
	Ma = 4,
	Ba = 6e3,
	Ta = [
		{ name: "Transparent", rgb: [0, 0, 0] },
		{ name: "Black", rgb: [0, 0, 0] },
		{ name: "Dark Gray", rgb: [60, 60, 60] },
		{ name: "Gray", rgb: [120, 120, 120] },
		{ name: "Light Gray", rgb: [210, 210, 210] },
		{ name: "White", rgb: [255, 255, 255] },
		{ name: "Deep Red", rgb: [96, 0, 24] },
		{ name: "Red", rgb: [237, 28, 36] },
		{ name: "Orange", rgb: [255, 127, 39] },
		{ name: "Gold", rgb: [246, 170, 9] },
		{ name: "Yellow", rgb: [249, 221, 59] },
		{ name: "Light Yellow", rgb: [255, 250, 188] },
		{ name: "Dark Green", rgb: [14, 185, 104] },
		{ name: "Green", rgb: [19, 230, 123] },
		{ name: "Light Green", rgb: [135, 255, 94] },
		{ name: "Dark Teal", rgb: [12, 129, 110] },
		{ name: "Teal", rgb: [16, 174, 166] },
		{ name: "Light Teal", rgb: [19, 225, 190] },
		{ name: "Dark Blue", rgb: [40, 80, 158] },
		{ name: "Blue", rgb: [64, 147, 228] },
		{ name: "Cyan", rgb: [96, 247, 242] },
		{ name: "Indigo", rgb: [107, 80, 246] },
		{ name: "Light Indigo", rgb: [153, 177, 251] },
		{ name: "Dark Purple", rgb: [120, 12, 153] },
		{ name: "Purple", rgb: [170, 56, 185] },
		{ name: "Light Purple", rgb: [224, 159, 249] },
		{ name: "Dark Pink", rgb: [203, 0, 122] },
		{ name: "Pink", rgb: [236, 31, 128] },
		{ name: "Light Pink", rgb: [243, 141, 169] },
		{ name: "Dark Brown", rgb: [104, 70, 52] },
		{ name: "Brown", rgb: [149, 104, 42] },
		{ name: "Beige", rgb: [248, 178, 119] },
		{ name: "Medium Gray", rgb: [170, 170, 170] },
		{ name: "Dark Red", rgb: [165, 14, 30] },
		{ name: "Light Red", rgb: [250, 128, 114] },
		{ name: "Dark Orange", rgb: [228, 92, 26] },
		{ name: "Light Tan", rgb: [214, 181, 148] },
		{ name: "Dark Goldenrod", rgb: [156, 132, 49] },
		{ name: "Goldenrod", rgb: [197, 173, 49] },
		{ name: "Light Goldenrod", rgb: [232, 212, 95] },
		{ name: "Dark Olive", rgb: [74, 107, 58] },
		{ name: "Olive", rgb: [90, 148, 74] },
		{ name: "Light Olive", rgb: [132, 197, 115] },
		{ name: "Dark Cyan", rgb: [15, 121, 159] },
		{ name: "Light Cyan", rgb: [187, 250, 242] },
		{ name: "Light Blue", rgb: [125, 199, 255] },
		{ name: "Dark Indigo", rgb: [77, 49, 184] },
		{ name: "Dark Slate Blue", rgb: [74, 66, 132] },
		{ name: "Slate Blue", rgb: [122, 113, 196] },
		{ name: "Light Slate Blue", rgb: [181, 174, 241] },
		{ name: "Light Brown", rgb: [219, 164, 99] },
		{ name: "Dark Beige", rgb: [209, 128, 81] },
		{ name: "Light Beige", rgb: [255, 197, 165] },
		{ name: "Dark Peach", rgb: [155, 82, 73] },
		{ name: "Peach", rgb: [209, 128, 120] },
		{ name: "Light Peach", rgb: [250, 182, 164] },
		{ name: "Dark Tan", rgb: [123, 99, 82] },
		{ name: "Tan", rgb: [156, 132, 107] },
		{ name: "Dark Slate", rgb: [51, 57, 65] },
		{ name: "Slate", rgb: [109, 117, 141] },
		{ name: "Light Slate", rgb: [179, 185, 209] },
		{ name: "Dark Stone", rgb: [109, 100, 63] },
		{ name: "Stone", rgb: [148, 140, 107] },
		{ name: "Light Stone", rgb: [205, 197, 158] },
	],
	Aa = { needsPhoneVerification: "needs_phone_verification" },
	Pa = {
		Droplet: {},
		"Max. Charge": {},
		"Paint Charge": {},
		Color: {},
		Flag: {},
		"Profile Picture": {},
		FRAME: {},
		"Custom Name Font": {},
		"Custom Name Style": {},
	},
	Ga = {
		10: {
			name: "25,000 Droplets",
			price: 500,
			isDollar: !0,
			lookupKey: "droplets_5",
			items: [{ name: "Droplet", amount: 25e3 }],
		},
		20: {
			name: "78,750 Droplets",
			price: 1500,
			isDollar: !0,
			lookupKey: "droplets_15",
			items: [{ name: "Droplet", amount: 78750 }],
		},
		30: {
			name: "165,000 Droplets",
			price: 3e3,
			isDollar: !0,
			lookupKey: "droplets_30",
			items: [{ name: "Droplet", amount: 165e3 }],
		},
		40: {
			name: "287,500 Droplets",
			price: 5e3,
			isDollar: !0,
			lookupKey: "droplets_50",
			items: [{ name: "Droplet", amount: 287500 }],
		},
		50: {
			name: "450,000 Droplets",
			price: 7500,
			isDollar: !0,
			lookupKey: "droplets_75",
			items: [{ name: "Droplet", amount: 45e4 }],
		},
		60: {
			name: "625,000 Droplets",
			price: 1e4,
			isDollar: !0,
			lookupKey: "droplets_100",
			items: [{ name: "Droplet", amount: 625e3 }],
		},
		70: {
			name: "+5 Max. Charges",
			price: 500,
			isDollar: !1,
			items: [{ name: "Max. Charge", amount: 5 }],
		},
		80: {
			name: "+30 Paint Charges",
			price: 500,
			isDollar: !1,
			items: [{ name: "Paint Charge", amount: 30 }],
		},
		100: {
			name: "Unlock Color",
			price: 2e3,
			isDollar: !1,
			items: [{ name: "Color", amount: 1 }],
		},
		110: {
			name: "Flag",
			price: 2e4,
			isDollar: !1,
			items: [{ name: "Flag", amount: 1 }],
		},
		120: {
			name: "Profile Picture",
			price: 2e4,
			isDollar: !1,
			items: [{ name: "Profile Picture", amount: 1 }],
		},
		130: { name: "FRAME", isDollar: !1, items: [{ name: "FRAME", amount: 1 }] },
		140: {
			name: "Custom Name Font",
			isDollar: !1,
			items: [{ name: "Custom Name Font", amount: 1 }],
		},
		150: {
			name: "Custom Name Style",
			isDollar: !1,
			items: [{ name: "Custom Name Style", amount: 1 }],
		},
	},
	Ia = JSON.parse(
		`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇹🇼"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`,
	),
	va = {
		dashboard: {
			summary: {
				counters: {
					tickets: "staff.dashboard.summary.counters.tickets",
					reports: "staff.dashboard.summary.counters.reports",
				},
				events: {
					status: "staff.dashboard.summary.events.status",
					start: "staff.dashboard.summary.events.start",
					stop: "staff.dashboard.summary.events.stop",
					anchors: "staff.dashboard.summary.events.anchors",
				},
				users: {
					ban: "staff.dashboard.summary.users.ban",
					timeout: "staff.dashboard.summary.users.timeout",
					unban: "staff.dashboard.summary.users.unban",
					incrementDroplets: "staff.dashboard.summary.users.increment_droplets",
				},
			},
			team: {
				tickets: "staff.dashboard.team.tickets",
				reports: "staff.dashboard.team.reports",
			},
			users: {
				info: "staff.dashboard.users.info",
				rename: "staff.dashboard.users.rename",
				notesGet: "staff.dashboard.users.notes_get",
				notesSet: "staff.dashboard.users.notes_set",
				purchases: "staff.dashboard.users.purchases",
				ticketsHistory: "staff.dashboard.users.tickets_history",
				ticketsStats: "staff.dashboard.users.tickets_stats",
				appealsHistory: "staff.dashboard.users.appeals_history",
				timeout: "staff.dashboard.users.timeout",
				removeTimeout: "staff.dashboard.users.remove_timeout",
				ban: "staff.dashboard.users.ban",
				removeBan: "staff.dashboard.users.remove_ban",
				personalInformation: "staff.dashboard.users.personal_information",
				editEmail: "staff.dashboard.users.edit_email",
				disconnect: "staff.dashboard.users.disconnect",
				setDroplets: "staff.dashboard.users.set_droplets",
				phoneVerification: "staff.dashboard.users.phone_verification",
				removePicture: "staff.dashboard.users.remove_picture",
			},
			permissions: {
				get: "staff.dashboard.permissions.get",
				set: "staff.dashboard.permissions.set",
			},
			alliances: {
				search: "staff.dashboard.alliances.search",
				details: "staff.dashboard.alliances.details",
				members: "staff.dashboard.alliances.members",
				rename: "staff.dashboard.alliances.rename",
				leader: "staff.dashboard.alliances.leader",
				banAll: "staff.dashboard.alliances.ban_all",
				role: "staff.dashboard.alliances.role",
				removeMember: "staff.dashboard.alliances.remove_member",
			},
			auditLogs: { see: "staff.dashboard.audit_logs.see" },
			banAppeals: { see: "staff.dashboard.ban_appeals.see" },
			kpi: { tickets: "staff.dashboard.kpi.tickets" },
			storeManager: {
				frames: "staff.dashboard.store_manager.frames",
				fonts: "staff.dashboard.store_manager.fonts",
				styles: "staff.dashboard.store_manager.styles",
				badges: "staff.dashboard.store_manager.badges",
			},
			anticheat: { see: "staff.dashboard.anticheat.see" },
		},
		tickets: {
			assign: "staff.tickets.assign",
			closedToday: "staff.tickets.closed_today",
			openCount: "staff.tickets.open_count",
			translate: "staff.tickets.translate",
			setStatus: "staff.tickets.set_status",
			ignoreAll: "staff.tickets.ignore_all",
			revert: "staff.tickets.revert",
			revertReview: "staff.tickets.revert_review",
		},
		appeals: {
			assign: "staff.appeals.assign",
			openCount: "staff.appeals.open_count",
			ticketsHistory: "staff.appeals.tickets_history",
			notes_get: "staff.appeals.notes_get",
			notes_set: "staff.appeals.notes_set",
			translate: "staff.appeals.translate",
			solve: "staff.appeals.solve",
		},
		tools: {
			selectArea: {
				timeout: "staff.tools.select_area.timeout",
				ban: "staff.tools.select_area.ban",
				clear: "staff.tools.select_area.clear",
				info: "staff.tools.select_area.info",
				phoneVerification: "staff.tools.select_area.phone_verification",
				reverse: "staff.tools.select_area.reverse",
				timelapse: "staff.tools.select_area.timelapse",
			},
			selectPixel: {
				timeout: "staff.tools.select_pixel.timeout",
				ban: "staff.tools.select_pixel.ban",
				seeRole: "staff.tools.select_pixel.see_role",
				seePunishment: "staff.tools.select_pixel.see_punishment",
			},
			autoPainter: {
				paint: "staff.tools.auto_painter.paint",
				transparent: "staff.tools.auto_painter.transparent",
				noCharges: "staff.tools.auto_painter.no_charges",
				asUser: "staff.tools.auto_painter.as_user",
				noSizeLimit: "staff.tools.auto_painter.no_size_limit",
			},
			wayback: "staff.tools.wayback",
		},
		ui: {
			themeDarkMode: "staff.ui.theme.dark_mode",
			tooglePixelArt: "staff.ui.toggle_pixel_art",
		},
		cosmetics: {
			viewCosmetics: "staff.cosmetics.view_cosmetics",
			manageCosmetics: "staff.cosmetics.manage_cosmetics",
			assignCosmetics: "staff.cosmetics.assign_cosmetics",
		},
	},
	Ea = { tools: { wayback: { limit: 1e4 } } },
	P = {
		seasons: Sa,
		regionSize: Ma,
		refreshIntervalMs: Ba,
		colors: Ta,
		errors: Aa,
		items: Pa,
		products: Ga,
		countries: Ia,
		permissions: va,
		settings: Ea,
	},
	T = P,
	X = P.seasons.length - 1;
P.seasons[X].zoom;
P.seasons[X].tileSize;
const F = `cache-${ia}`,
	Na = new Set([...na, ...ta]),
	k = self,
	A = new Map();
let j = [];
k.addEventListener("install", (e) => {
	async function s() {
		var n, i, o;
		try {
			if (
				(o =
					(i =
						(n = k == null ? void 0 : k.navigator) == null
							? void 0
							: n.userAgent) == null
						? void 0
						: i.toLowerCase()) == null
					? void 0
					: o.includes("firefox")
			)
				return;
			await (await caches.open(F)).addAll([...Na]);
		} catch (p) {
			console.error("Service worker installation failed:", p);
		}
	}
	e.waitUntil(s());
});
k.addEventListener("activate", (e) => {
	async function s() {
		for (const n of await caches.keys()) n !== F && (await caches.delete(n));
	}
	e.waitUntil(s());
});
let L;
k.addEventListener("fetch", (e) => {
	if (e.request.method !== "GET") return;
    



    
	L || (L = Z(Da));
	async function s() {
		const i = new URL(e.request.url);
		try {
			return await n(i);
		} catch (o) {
			const r = await (await caches.open(F)).match(e.request);
			if (r) return r;
			throw o;
		}
	}
	async function n(i) {
		var r, w;
		const o =
			e.request.url.startsWith(sa) &&
			i.pathname.match(/^.*\/s(\d+).*\/tiles\/(\d+)\/(\d+).png$/);
		if (o) {
			const l = A.get(e.clientId);
			if (l || j.length) {
				const y = parseInt(o[1]),
					b = parseInt(o[2]),
					G = parseInt(o[3]),
					H = Date.now(),
					Q = 1.9 * T.refreshIntervalMs;
				j = j.filter((t) => H - t.time.getTime() < Q);
				const $ = j
						.filter(
							({ data: t }) =>
								b === t.tile[0] && G === t.tile[1] && t.season === y,
						)
						.map(({ data: t }) => ({ ...t })),
					aa =
						((r = l == null ? void 0 : l.data) == null
							? void 0
							: r.filter(
									(t) => b === t.tile[0] && G === t.tile[1] && t.season === y,
								)) ?? [],
					O = $.concat(aa);
				if (O.length || l) {
					await L;
					let t, I;
					const B = La(b, G, y),
						g = await ((w = l == null ? void 0 : l.cachedTiles) == null
							? void 0
							: w.get(B)),
						V = g && H - g.time.getTime() < T.refreshIntervalMs;
					if (V) ((t = structuredClone(g.png)), (I = g.init));
					else {
						let f = g;
						if (l)
							if (g === void 0) {
								l.cachedTiles.set(B, u());
								const d = await l.cachedTiles.get(B);
								d && (f = d);
							} else
								!V &&
									!g.refreshing &&
									((g.refreshing = !0),
									setTimeout(async () => {
										try {
											const d = await u();
											l.cachedTiles.set(B, new Promise((h) => h(d)));
											const m = await k.clients.get(
												e == null ? void 0 : e.clientId,
											);
											m == null || m.postMessage({ type: "refreshPixelArt" });
										} catch {
											g.refreshing = !1;
										}
									}));
						(f || (f = await u()), (t = structuredClone(f.png)), (I = f.init));
						async function u() {
							try {
								const d = await fetch(e == null ? void 0 : e.request);
								if (d && d.status !== 404) {
									const m = await d.blob();
									return {
										png: await Ca(await m.arrayBuffer()),
										init: {
											headers: d.headers,
											status: d.status,
											statusText: d.statusText,
										},
										time: new Date(),
										refreshing: !1,
									};
								} else {
									console.warn("painting 404 tile");
									const m = T.seasons[y].tileSize;
									return {
										png: x(m, m),
										init: {
											headers: { "Content-Type": "image/png" },
											status: 200,
										},
										time: new Date(),
										refreshing: !1,
									};
								}
							} catch (d) {
								if (
									(console.error(
										"Error while fetching in servicer worker: ",
										d,
									),
									g)
								)
									return g;
								{
									const m = T.seasons[y].tileSize;
									return {
										png: x(m, m),
										init: {
											headers: { "Content-Type": "image/png" },
											status: 200,
										},
										time: new Date(),
										refreshing: !1,
									};
								}
							}
						}
					}
					const v = new Map();
					for (const f of O) {
						const [u, d] = f.pixel,
							m = (u + d * t.width) << 2,
							h = f.color;
						(v.get(m) ||
							v.set(m, [
								t.data[m],
								t.data[m + 1],
								t.data[m + 2],
								t.data[m + 3],
							]),
							(t.data[m] = h.r),
							(t.data[m + 1] = h.g),
							(t.data[m + 2] = h.b),
							(t.data[m + 3] = h.a));
					}
					const ea = await z(t);
					for (const [f, u] of v.entries())
						((t.data[f] = u[0]),
							(t.data[f + 1] = u[1]),
							(t.data[f + 2] = u[2]),
							(t.data[f + 3] = u[3]));
					return new Response(ea, I);
				}
			}
		}
		const p = await fetch(e == null ? void 0 : e.request);
		if (o && p.status === 404) {
			const l = await z(x(1, 1));
			return new Response(l, {
				headers: { "Content-Type": "image/png" },
				status: 200,
			});
		}
		return p;
	}
	e.respondWith(s());
});
k.addEventListener("message", (e) => {
	var i, o, p;
	const s = e.data;
	let n;
	try {
		const r = ((i = e.source) == null ? void 0 : i.id) ?? "none";
		switch (s == null ? void 0 : s.type) {
			case "previewPixels":
				const w = s.data,
					l = A.get(r);
				l ? (l.data = w) : A.set(r, { data: w, cachedTiles: new Map() });
				break;
			case "clearPixelPreview":
				A.delete(r);
				break;
			case "paintPixels":
				j = j.concat(s.data.map((b) => ({ data: b, time: new Date() })));
				break;
			case "unpaintPixels":
				const y = new Set(s.data.map((b) => q(b)));
				j = j.filter(({ data: b }) => !y.has(q(b)));
				break;
			case "refreshPixelArt":
				n = "refreshPixelArt";
				break;
		}
	} finally {
		n
			? (o = e.source) == null || o.postMessage({ id: s.id, type: n })
			: (p = e.source) == null || p.postMessage({ id: s.id });
	}
});
function La(e, s, n) {
	return `t=(${e},${s});s=${n}`;
}
function x(e, s) {
	return {
		data: new Uint8ClampedArray(e * s * 4),
		width: e,
		height: s,
		colorSpace: "srgb",
	};
}
