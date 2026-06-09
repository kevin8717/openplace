import { g as a } from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import "./B7vrJrEX.js";
import {
	p as g,
	q as v,
	f as y,
	a as _,
	b,
	d,
	r as c,
	t as k,
	at as j,
	L as w,
	c as x,
} from "./Dbe4PVAU.js";
import { s as A } from "./C_mo-lyU.js";
import { i as S } from "./Icl9dwnj.js";
import { a as N } from "./B7_gUtXa.js";
import { i as T } from "./BVnIq1Qc.js";
import { p as z } from "./K9AHFDoV.js";
import { b as B } from "./DaX0l6qk.js";
import { i as L } from "./DbF8UOi7.js";
import { o as q, a as C } from "./DrImJxxA.js";
const D = () => "Add a note",
	P = () => "Adicionar uma nota...",
	Z = () => "添加备注",
	E = () => "Notiz hinzufügen",
	F = () => "Añade una nota",
	G = () => "Ajouter une note",
	H = () => "Aggiungi una nota...",
	I = () => "メモを追加",
	J = () => "Dodaj notatkę",
	K = () => "Добавить заметку",
	M = () => "Додати примітку",
	O = () => "Thêm ghi chú",
	Bt = (n = {}, e = {}) => {
		const t = e.locale ?? a();
		return t === "en"
			? D()
			: t === "pt"
				? P()
				: t === "ch"
					? Z()
					: t === "de"
						? E()
						: t === "es"
							? F()
							: t === "fr"
								? G()
								: t === "it"
									? H()
									: t === "jp"
										? I()
										: t === "pl"
											? J()
											: t === "ru"
												? K()
												: t === "uk"
													? M()
													: O();
	},
	Q = () => "No notes yet",
	R = () => "Sem notas ainda",
	U = () => "暂无备注",
	V = () => "Noch keine Notizen",
	W = () => "Aún no hay notas",
	X = () => "Pas encore de notes",
	Y = () => "Nessuna nota",
	$ = () => "まだメモはありません。",
	tt = () => "Brak notatek",
	et = () => "Пока нет заметок",
	rt = () => "Ще немає приміток",
	nt = () => "Chưa có ghi chú nào",
	Lt = (n = {}, e = {}) => {
		const t = e.locale ?? a();
		return t === "en"
			? Q()
			: t === "pt"
				? R()
				: t === "ch"
					? U()
					: t === "de"
						? V()
						: t === "es"
							? W()
							: t === "fr"
								? X()
								: t === "it"
									? Y()
									: t === "jp"
										? $()
										: t === "pl"
											? tt()
											: t === "ru"
												? et()
												: t === "uk"
													? rt()
													: nt();
	},
	ot = () => "Timeouted",
	st = () => "Suspenso",
	at = () => "已禁言",
	ut = () => "Timeout",
	it = () => "Suspendido",
	_t = () => "Suspendu",
	dt = () => "Sospeso",
	ct = () => "タイムアウト中",
	lt = () => "Zawieszony",
	pt = () => "В тайм-ауте",
	ft = () => "З тайм-аутом",
	mt = () => "Đã bị tạm khóa",
	ht = (n = {}, e = {}) => {
		const t = e.locale ?? a();
		return t === "en"
			? ot()
			: t === "pt"
				? st()
				: t === "ch"
					? at()
					: t === "de"
						? ut()
						: t === "es"
							? it()
							: t === "fr"
								? _t()
								: t === "it"
									? dt()
									: t === "jp"
										? ct()
										: t === "pl"
											? lt()
											: t === "ru"
												? pt()
												: t === "uk"
													? ft()
													: mt();
	};
var gt = x(
	'<div class="relative flex w-3 items-center justify-center overflow-visible"><span> </span></div>',
);
function qt(n, e) {
	g(e, !1);
	let t = z(e, "status", 8);
	function l(r) {
		return r === "open"
			? q()
			: r === "ignore"
				? L()
				: r === "overturned"
					? C()
					: r === "timeout"
						? ht()
						: B();
	}
	T();
	var u = v(),
		p = y(u);
	{
		var f = (r) => {
			var o = gt(),
				s = d(o);
			let i;
			var m = d(s, !0);
			(c(s),
				c(o),
				k(
					(h) => {
						((i = N(
							s,
							1,
							"badge badge-xs absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-semibold",
							null,
							i,
							{
								"badge-ghost": t() === "open" || t() === "ignore",
								"badge-dashed": t() === "overturned",
								"badge-warning": t() === "timeout",
								"badge-error": t() === "ban",
							},
						)),
							A(m, h));
					},
					[() => (j(t()), w(() => l(t())))],
				),
				_(r, o));
		};
		S(p, (r) => {
			t() && r(f);
		});
	}
	(_(n, u), b());
}
export { qt as T, Bt as a, Lt as n, ht as t };
