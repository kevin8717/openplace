import { g as e } from "./BhCkpOlh.js";
const a = () => "Total average",
	n = () => "Média total",
	o = () => "总平均值",
	u = () => "Gesamtdurchschnitt",
	l = () => "Media total",
	_ = () => "Moyenne totale",
	c = () => "Media totale",
	i = () => "合計平均",
	s = () => "Średnia całkowita",
	g = () => "Общая средняя",
	v = () => "Середнє значення",
	f = () => "Trung bình tổng",
	h = (p = {}, r = {}) => {
		const t = r.locale ?? e();
		return t === "en"
			? a()
			: t === "pt"
				? n()
				: t === "ch"
					? o()
					: t === "de"
						? u()
						: t === "es"
							? l()
							: t === "fr"
								? _()
								: t === "it"
									? c()
									: t === "jp"
										? i()
										: t === "pl"
											? s()
											: t === "ru"
												? g()
												: t === "uk"
													? v()
													: f();
	};
export { h as t };
