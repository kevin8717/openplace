import { g as r } from "./BhCkpOlh.js";
const n = () => "Open tickets",
	s = () => "Tickets abertos",
	c = () => "未关闭工单",
	i = () => "Offene Tickets",
	o = () => "Tickets abiertos",
	u = () => "Tickets ouverts",
	_ = () => "Ticket aperti",
	p = () => "未処理のチケット",
	k = () => "Otwarte tickety",
	f = () => "Открытые тикеты",
	a = () => "Відкриті тікети",
	l = () => "Phiếu đang mở",
	h = (T = {}, e = {}) => {
		const t = e.locale ?? r();
		return t === "en"
			? n()
			: t === "pt"
				? s()
				: t === "ch"
					? c()
					: t === "de"
						? i()
						: t === "es"
							? o()
							: t === "fr"
								? u()
								: t === "it"
									? _()
									: t === "jp"
										? p()
										: t === "pl"
											? k()
											: t === "ru"
												? f()
												: t === "uk"
													? a()
													: l();
	};
export { h as o };
