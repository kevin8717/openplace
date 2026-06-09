import { g as n } from "./BhCkpOlh.js";
const u = () => "Open",
	o = () => "Aberto",
	c = () => "打开",
	i = () => "Offen",
	s = () => "Abrir",
	p = () => "Ouvrir",
	f = () => "Aperto",
	_ = () => "開く",
	v = () => "Otwórz",
	d = () => "Открыть",
	l = () => "Відкрити",
	a = () => "Mở",
	M = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? u()
			: r === "pt"
				? o()
				: r === "ch"
					? c()
					: r === "de"
						? i()
						: r === "es"
							? s()
							: r === "fr"
								? p()
								: r === "it"
									? f()
									: r === "jp"
										? _()
										: r === "pl"
											? v()
											: r === "ru"
												? d()
												: r === "uk"
													? l()
													: a();
	},
	h = () => "Overturned",
	O = () => "Revertido",
	j = () => "已撤销",
	k = () => "revertiert",
	A = () => "revertido",
	b = () => "annulé",
	g = () => "revertito",
	m = () => "元に戻されました",
	w = () => "cofnięty",
	x = () => "отменено",
	y = () => "скасовано",
	z = () => "đã hoàn tác",
	R = (t = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? h()
			: r === "pt"
				? O()
				: r === "ch"
					? j()
					: r === "de"
						? k()
						: r === "es"
							? A()
							: r === "fr"
								? b()
								: r === "it"
									? g()
									: r === "jp"
										? m()
										: r === "pl"
											? w()
											: r === "ru"
												? x()
												: r === "uk"
													? y()
													: z();
	};
export { R as a, M as o };
