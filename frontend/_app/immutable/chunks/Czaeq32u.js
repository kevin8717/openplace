import { g as e } from "./BhCkpOlh.js";
const n = () => "Filter by",
	i = () => "Filtre por",
	u = () => "按条件筛选",
	f = () => "Filtern nach",
	l = () => "Filtrar por",
	_ = () => "Filtrer par",
	o = () => "Filtra per",
	c = () => "絞り込み",
	s = () => "Filtruj według",
	b = () => "Фильтр по",
	y = () => "Фільтрувати за",
	p = () => "Lọc theo",
	h = (a = {}, t = {}) => {
		const r = t.locale ?? e();
		return r === "en"
			? n()
			: r === "pt"
				? i()
				: r === "ch"
					? u()
					: r === "de"
						? f()
						: r === "es"
							? l()
							: r === "fr"
								? _()
								: r === "it"
									? o()
									: r === "jp"
										? c()
										: r === "pl"
											? s()
											: r === "ru"
												? b()
												: r === "uk"
													? y()
													: p();
	};
export { h as f };
