import "../chunks/Bzak7iHL.js";
import "../chunks/B7vrJrEX.js";
import {
	k as g,
	p as x,
	t as b,
	l as k,
	a as $,
	b as j,
	j as z,
	c as I,
	d as t,
	s as e,
	$ as L,
	r,
} from "../chunks/Dbe4PVAU.js";
import { s as p } from "../chunks/C_mo-lyU.js";
import { h as W } from "../chunks/ClbV77Km.js";
import { i as w } from "../chunks/BVnIq1Qc.js";
import { L as K } from "../chunks/Cskb-8mx.js";
import { R as N } from "../chunks/CbUCGNiK.js";
import { W as R } from "../chunks/CqqDbOqG.js";
import { g as S } from "../chunks/BhCkpOlh.js";
import { r as y } from "../chunks/DBS6HGbD.js";
const A = () => "No internet connection",
	B = () => "Sem conexão na internet",
	O = () => "无网络连接",
	T = () => "Keine Internetverbindung",
	q = () => "Sin conexión a internet",
	C = () => "Aucune connexion Internet",
	D = () => "Nessuna connessione a internet",
	E = () => "インターネット接続がありません。",
	F = () => "Brak połączenia z internetem",
	G = () => "Нет подключения к интернету",
	H = () => "Немає інтернет-зʼєднання",
	J = () => "Không có kết nối internet",
	m = (_ = {}, o = {}) => {
		const n = o.locale ?? S();
		return n === "en"
			? A()
			: n === "pt"
				? B()
				: n === "ch"
					? O()
					: n === "de"
						? T()
						: n === "es"
							? q()
							: n === "fr"
								? C()
								: n === "it"
									? D()
									: n === "jp"
										? E()
										: n === "pl"
											? F()
											: n === "ru"
												? G()
												: n === "uk"
													? H()
													: J();
	};
var M = I(
	'<div class="relative flex h-full flex-col items-center justify-center gap-2"><a href="/"><!></a> <!> <p class="text-lg"> </p> <button class="btn btn-lg mt-4"><!> </button></div>',
);
function on(_, o) {
	(x(o, !1), w());
	var n = M();
	W("swcdds", (l) => {
		z(
			(a) => {
				L.title = `Wplace - ${a ?? ""}`;
			},
			[() => m()],
		);
	});
	var i = t(n),
		d = t(i);
	(K(d, {
		class: "absolute left-1/2 top-10 -translate-x-1/2",
		size: "lg",
		hasText: !0,
	}),
		r(i));
	var u = e(i, 2);
	R(u, { class: "text-base-content/80 w-40" });
	var c = e(u, 2),
		v = t(c, !0);
	r(c);
	var s = e(c, 2),
		f = t(s);
	N(f, { class: "size-5" });
	var h = e(f);
	(r(s),
		r(n),
		b(
			(l, a) => {
				(p(v, l), p(h, ` ${a ?? ""}`));
			},
			[() => m(), () => y()],
		),
		k("click", s, () => {
			location.reload();
		}),
		$(_, n),
		j());
}
g(["click"]);
export { on as component };
