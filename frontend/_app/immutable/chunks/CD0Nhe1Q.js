import { g as n } from "./BhCkpOlh.js";
const p = () => "Apply",
	e = () => "Aplicar",
	u = () => "应用",
	l = () => "Anwenden",
	a = () => "Aplicar",
	c = () => "Appliquer",
	o = () => "Applica",
	s = () => "適用",
	i = () => "Zastosuj",
	f = () => "Применить",
	y = () => "Застосувати",
	_ = () => "Áp dụng",
	g = (A = {}, t = {}) => {
		const r = t.locale ?? n();
		return r === "en"
			? p()
			: r === "pt"
				? e()
				: r === "ch"
					? u()
					: r === "de"
						? l()
						: r === "es"
							? a()
							: r === "fr"
								? c()
								: r === "it"
									? o()
									: r === "jp"
										? s()
										: r === "pl"
											? i()
											: r === "ru"
												? f()
												: r === "uk"
													? y()
													: _();
	};
export { g as a };
