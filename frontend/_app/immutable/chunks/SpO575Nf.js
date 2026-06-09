import { g as e } from "./BhCkpOlh.js";
const n = () => "Export CSV",
	o = () => "Exportar CSV",
	s = () => "导出 CSV",
	c = () => "CSV exportieren",
	u = () => "Exportar CSV",
	p = () => "Exporter en CSV",
	_ = () => "Esporta CSV",
	x = () => "CSVとしてエクスポート",
	i = () => "Eksportuj CSV",
	f = () => "Экспорт CSV",
	v = () => "Експорт CSV",
	C = () => "Xuất CSV",
	a = (S = {}, t = {}) => {
		const r = t.locale ?? e();
		return r === "en"
			? n()
			: r === "pt"
				? o()
				: r === "ch"
					? s()
					: r === "de"
						? c()
						: r === "es"
							? u()
							: r === "fr"
								? p()
								: r === "it"
									? _()
									: r === "jp"
										? x()
										: r === "pl"
											? i()
											: r === "ru"
												? f()
												: r === "uk"
													? v()
													: C();
	};
export { a as e };
