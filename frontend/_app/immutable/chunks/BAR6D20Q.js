import { g as t } from "./BhCkpOlh.js";
const n = () => "Reset",
	s = () => "Redefinir",
	u = () => "重置",
	i = () => "Zurücksetzen",
	c = () => "Restablecer",
	o = () => "Réinitialiser",
	f = () => "Reimposta",
	_ = () => "リセット",
	l = () => "Zresetuj",
	p = () => "Сбросить",
	a = () => "Скинути",
	R = () => "Đặt lại",
	k = (d = {}, r = {}) => {
		const e = r.locale ?? t();
		return e === "en"
			? n()
			: e === "pt"
				? s()
				: e === "ch"
					? u()
					: e === "de"
						? i()
						: e === "es"
							? c()
							: e === "fr"
								? o()
								: e === "it"
									? f()
									: e === "jp"
										? _()
										: e === "pl"
											? l()
											: e === "ru"
												? p()
												: e === "uk"
													? a()
													: R();
	};
export { k as r };
