import { g as t } from "./BhCkpOlh.js";
const n = () => "Presets",
	s = () => "Predefinições",
	u = () => "预设",
	p = () => "Voreinstellungen",
	o = () => "Preajustes",
	i = () => "Préréglages",
	c = () => "Preset",
	f = () => "プリセット",
	_ = () => "Presety",
	l = () => "Пресеты",
	a = () => "Пресети",
	P = () => "Cài đặt sẵn",
	j = (g = {}, r = {}) => {
		const e = r.locale ?? t();
		return e === "en"
			? n()
			: e === "pt"
				? s()
				: e === "ch"
					? u()
					: e === "de"
						? p()
						: e === "es"
							? o()
							: e === "fr"
								? i()
								: e === "it"
									? c()
									: e === "jp"
										? f()
										: e === "pl"
											? _()
											: e === "ru"
												? l()
												: e === "uk"
													? a()
													: P();
	};
export { j as p };
