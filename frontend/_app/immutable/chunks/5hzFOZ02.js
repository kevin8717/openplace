import { g as r } from "./BhCkpOlh.js";
const o = () => "Remove timeout",
	n = () => "Remover suspensão",
	u = () => "解除禁言",
	i = () => "Timeout entfernen",
	m = () => "Eliminar suspensión",
	s = () => "Retirer la suspension",
	_ = () => "Rimuovi sospensione",
	c = () => "タイムアウトを解除",
	v = () => "Usuń zawieszenie",
	f = () => "Снять тайм-аут",
	p = () => "Зняти тайм-аут",
	a = () => "Gỡ tạm khóa",
	h = (l = {}, t = {}) => {
		const e = t.locale ?? r();
		return e === "en"
			? o()
			: e === "pt"
				? n()
				: e === "ch"
					? u()
					: e === "de"
						? i()
						: e === "es"
							? m()
							: e === "fr"
								? s()
								: e === "it"
									? _()
									: e === "jp"
										? c()
										: e === "pl"
											? v()
											: e === "ru"
												? f()
												: e === "uk"
													? p()
													: a();
	};
export { h as r };
