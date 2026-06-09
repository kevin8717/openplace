import { g as r } from "./BhCkpOlh.js";
const e = () => "No data.",
	a = () => "Sem dados.",
	o = () => "暂无数据。",
	u = () => "Keine Daten.",
	_ = () => "Sin datos.",
	d = () => "Aucune donnée.",
	s = () => "Nessun dato.",
	c = () => "データがありません。",
	i = () => "Brak danych.",
	f = () => "Нет данных.",
	p = () => "Немає даних.",
	l = () => "Không có dữ liệu.",
	k = (h = {}, t = {}) => {
		const n = t.locale ?? r();
		return n === "en"
			? e()
			: n === "pt"
				? a()
				: n === "ch"
					? o()
					: n === "de"
						? u()
						: n === "es"
							? _()
							: n === "fr"
								? d()
								: n === "it"
									? s()
									: n === "jp"
										? c()
										: n === "pl"
											? i()
											: n === "ru"
												? f()
												: n === "uk"
													? p()
													: l();
	};
export { k as n };
