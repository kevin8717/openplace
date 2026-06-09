import { g as o } from "./BhCkpOlh.js";
const n = () => "Go to map",
	e = () => "Ir para o mapa",
	_ = () => "前往地图",
	a = () => "Zur Karte",
	u = () => "Ir al mapa",
	p = () => "Aller à la carte",
	c = () => "Vai alla mappa",
	m = () => "マップへ移動",
	i = () => "Przejdź do mapy",
	s = () => "Перейти к карте",
	g = () => "Перейти до карти",
	f = () => "Đi tới bản đồ",
	j = (l = {}, t = {}) => {
		const r = t.locale ?? o();
		return r === "en"
			? n()
			: r === "pt"
				? e()
				: r === "ch"
					? _()
					: r === "de"
						? a()
						: r === "es"
							? u()
							: r === "fr"
								? p()
								: r === "it"
									? c()
									: r === "jp"
										? m()
										: r === "pl"
											? i()
											: r === "ru"
												? s()
												: r === "uk"
													? g()
													: f();
	};
export { j as g };
