import { g as e } from "./BhCkpOlh.js";
const t = () => "Ignored",
	o = () => "Ignorado",
	i = () => "已忽略",
	u = () => "Ignoriert",
	g = () => "Ignorado",
	c = () => "Ignoré",
	s = () => "Ignorato",
	d = () => "無視済み",
	f = () => "Zignorowano",
	_ = () => "Проигнорировано",
	a = () => "Проігноровано",
	p = () => "Đã bỏ qua",
	h = (l = {}, n = {}) => {
		const r = n.locale ?? e();
		return r === "en"
			? t()
			: r === "pt"
				? o()
				: r === "ch"
					? i()
					: r === "de"
						? u()
						: r === "es"
							? g()
							: r === "fr"
								? c()
								: r === "it"
									? s()
									: r === "jp"
										? d()
										: r === "pl"
											? f()
											: r === "ru"
												? _()
												: r === "uk"
													? a()
													: p();
	};
export { h as i };
