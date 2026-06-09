import { g as n } from "./BhCkpOlh.js";
const o = () => "Color",
	u = () => "Cor",
	c = () => "颜色",
	i = () => "Farbe",
	s = () => "Color",
	f = () => "Couleur",
	l = () => "Colore",
	p = () => "色",
	_ = () => "Kolor",
	a = () => "Цвет",
	d = () => "Колір",
	h = () => "Màu sắc",
	N = (e = {}, t = {}) => {
		const r = t.locale ?? n();
		return r === "en"
			? o()
			: r === "pt"
				? u()
				: r === "ch"
					? c()
					: r === "de"
						? i()
						: r === "es"
							? s()
							: r === "fr"
								? f()
								: r === "it"
									? l()
									: r === "jp"
										? p()
										: r === "pl"
											? _()
											: r === "ru"
												? a()
												: r === "uk"
													? d()
													: h();
	},
	j = () => "or",
	k = () => "ou",
	C = () => "或",
	P = () => "oder",
	v = () => "o",
	b = () => "ou",
	g = () => "o",
	m = () => "または",
	x = () => "lub",
	z = () => "или",
	F = () => "або",
	G = () => "hoặc",
	O = (e = {}, t = {}) => {
		const r = t.locale ?? n();
		return r === "en"
			? j()
			: r === "pt"
				? k()
				: r === "ch"
					? C()
					: r === "de"
						? P()
						: r === "es"
							? v()
							: r === "fr"
								? b()
								: r === "it"
									? g()
									: r === "jp"
										? m()
										: r === "pl"
											? x()
											: r === "ru"
												? z()
												: r === "uk"
													? F()
													: G();
	},
	K = () => "Price",
	L = () => "Preço",
	M = () => "价格",
	q = () => "Preis",
	w = () => "Precio",
	y = () => "Prix",
	A = () => "Prezzo",
	B = () => "価格",
	D = () => "Cena",
	E = () => "Цена",
	H = () => "Ціна",
	I = () => "Giá",
	Q = (e = {}, t = {}) => {
		const r = t.locale ?? n();
		return r === "en"
			? K()
			: r === "pt"
				? L()
				: r === "ch"
					? M()
					: r === "de"
						? q()
						: r === "es"
							? w()
							: r === "fr"
								? y()
								: r === "it"
									? A()
									: r === "jp"
										? B()
										: r === "pl"
											? D()
											: r === "ru"
												? E()
												: r === "uk"
													? H()
													: I();
	};
export { N as c, O as o, Q as p };
