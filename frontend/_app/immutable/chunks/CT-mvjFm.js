import { g as u } from "./BhCkpOlh.js";
const n = () => "Summary",
	e = () => "Resumo",
	s = () => "概要",
	m = () => "Übersicht",
	o = () => "Resumen",
	a = () => "Résumé",
	c = () => "Riepilogo",
	i = () => "サマリー",
	f = () => "Podsumowanie",
	y = () => "Сводка",
	_ = () => "Зведення",
	p = () => "Tổng kết",
	R = (l = {}, t = {}) => {
		const r = t.locale ?? u();
		return r === "en"
			? n()
			: r === "pt"
				? e()
				: r === "ch"
					? s()
					: r === "de"
						? m()
						: r === "es"
							? o()
							: r === "fr"
								? a()
								: r === "it"
									? c()
									: r === "jp"
										? i()
										: r === "pl"
											? f()
											: r === "ru"
												? y()
												: r === "uk"
													? _()
													: p();
	};
export { R as s };
