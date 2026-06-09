import { g as t } from "./BhCkpOlh.js";
const u = () => "Next page",
	p = () => "Próxima página",
	a = () => "下一页",
	i = () => "Nächste Seite",
	s = () => "Página siguiente",
	o = () => "Page suivante",
	_ = () => "Prossima pagina",
	g = () => "次のページ",
	c = () => "Następna strona",
	f = () => "Следующая страница",
	l = () => "Наступна сторінка",
	v = () => "Trang kế tiếp",
	I = (n = {}, r = {}) => {
		const e = r.locale ?? t();
		return e === "en"
			? u()
			: e === "pt"
				? p()
				: e === "ch"
					? a()
					: e === "de"
						? i()
						: e === "es"
							? s()
							: e === "fr"
								? o()
								: e === "it"
									? _()
									: e === "jp"
										? g()
										: e === "pl"
											? c()
											: e === "ru"
												? f()
												: e === "uk"
													? l()
													: v();
	},
	x = () => "Page",
	P = () => "Página",
	d = () => "页面",
	h = () => "Seite",
	k = () => "Página",
	j = () => "Page",
	m = () => "Pagina",
	S = () => "ページ",
	N = () => "Strona",
	T = () => "Страница",
	z = () => "Сторінка",
	L = () => "Trang",
	J = (n = {}, r = {}) => {
		const e = r.locale ?? t();
		return e === "en"
			? x()
			: e === "pt"
				? P()
				: e === "ch"
					? d()
					: e === "de"
						? h()
						: e === "es"
							? k()
							: e === "fr"
								? j()
								: e === "it"
									? m()
									: e === "jp"
										? S()
										: e === "pl"
											? N()
											: e === "ru"
												? T()
												: e === "uk"
													? z()
													: L();
	},
	V = () => "Previous page",
	b = () => "Página anterior",
	q = () => "上一页",
	w = () => "Vorherige Seite",
	y = () => "Página anterior",
	A = () => "Page précédente",
	B = () => "Pagina precedente",
	C = () => "前のページ",
	D = () => "Poprzednia strona",
	E = () => "Предыдущая страница",
	F = () => "Попередня сторінка",
	G = () => "Trang trước",
	K = (n = {}, r = {}) => {
		const e = r.locale ?? t();
		return e === "en"
			? V()
			: e === "pt"
				? b()
				: e === "ch"
					? q()
					: e === "de"
						? w()
						: e === "es"
							? y()
							: e === "fr"
								? A()
								: e === "it"
									? B()
									: e === "jp"
										? C()
										: e === "pl"
											? D()
											: e === "ru"
												? E()
												: e === "uk"
													? F()
													: G();
	};
export { J as a, I as n, K as p };
