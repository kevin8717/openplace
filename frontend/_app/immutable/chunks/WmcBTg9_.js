import { g as e } from "./BhCkpOlh.js";
const n = () => "Reports",
	o = () => "Reportes",
	s = () => "举报",
	u = () => "Meldungen",
	p = () => "Reportes",
	c = () => "Signalements",
	i = () => "Segnalazioni",
	f = () => "通報一覧",
	_ = () => "Zgłoszenia",
	l = () => "Репорты",
	a = () => "Скарги",
	g = () => "Báo cáo",
	R = (d = {}, t = {}) => {
		const r = t.locale ?? e();
		return r === "en"
			? n()
			: r === "pt"
				? o()
				: r === "ch"
					? s()
					: r === "de"
						? u()
						: r === "es"
							? p()
							: r === "fr"
								? c()
								: r === "it"
									? i()
									: r === "jp"
										? f()
										: r === "pl"
											? _()
											: r === "ru"
												? l()
												: r === "uk"
													? a()
													: g();
	};
export { R as r };
