import { g as t } from "./BhCkpOlh.js";
const n = () => "Remove",
	o = () => "Remover",
	u = () => "移除",
	i = () => "Entfernen",
	s = () => "Eliminar",
	c = () => "Retirer",
	m = () => "Rimuovi",
	v = () => "削除",
	f = () => "Usuń",
	_ = () => "Удалить",
	p = () => "Видалити",
	l = () => "Xóa",
	d = (a = {}, e = {}) => {
		const r = e.locale ?? t();
		return r === "en"
			? n()
			: r === "pt"
				? o()
				: r === "ch"
					? u()
					: r === "de"
						? i()
						: r === "es"
							? s()
							: r === "fr"
								? c()
								: r === "it"
									? m()
									: r === "jp"
										? v()
										: r === "pl"
											? f()
											: r === "ru"
												? _()
												: r === "uk"
													? p()
													: l();
	};
export { d as r };
