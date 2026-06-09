import { g as r } from "./BhCkpOlh.js";
const e = () => "Ban",
	o = () => "Banir",
	u = () => "封禁",
	a = () => "Bannen",
	_ = () => "Banear",
	c = () => "Bannir",
	s = () => "Bannare",
	i = () => "BAN",
	b = () => "Zbanuj",
	f = () => "Бан",
	p = () => "Забанити",
	l = () => "Cấm",
	m = (B = {}, t = {}) => {
		const n = t.locale ?? r();
		return n === "en"
			? e()
			: n === "pt"
				? o()
				: n === "ch"
					? u()
					: n === "de"
						? a()
						: n === "es"
							? _()
							: n === "fr"
								? c()
								: n === "it"
									? s()
									: n === "jp"
										? i()
										: n === "pl"
											? b()
											: n === "ru"
												? f()
												: n === "uk"
													? p()
													: l();
	};
export { m as t };
