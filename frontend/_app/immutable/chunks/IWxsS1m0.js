import { g as n } from "./BhCkpOlh.js";
const l = () => "All",
	e = () => "Todos",
	u = () => "全部",
	o = () => "Alle",
	s = () => "Todos",
	c = () => "Tous",
	a = () => "Tutti",
	i = () => "すべて",
	f = () => "Wszystko",
	_ = () => "Все",
	p = () => "Усе",
	T = () => "Tất cả",
	g = (d = {}, t = {}) => {
		const r = t.locale ?? n();
		return r === "en"
			? l()
			: r === "pt"
				? e()
				: r === "ch"
					? u()
					: r === "de"
						? o()
						: r === "es"
							? s()
							: r === "fr"
								? c()
								: r === "it"
									? a()
									: r === "jp"
										? i()
										: r === "pl"
											? f()
											: r === "ru"
												? _()
												: r === "uk"
													? p()
													: T();
	};
export { g as a };
