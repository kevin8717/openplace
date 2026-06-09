import { g as e } from "./BhCkpOlh.js";
const u = () => "Begin",
	i = () => "Inicio",
	c = () => "开始",
	o = () => "Start",
	s = () => "Inicio",
	f = () => "Début",
	_ = () => "Inizio",
	d = () => "開始",
	g = () => "Start",
	p = () => "Начать",
	b = () => "Почати",
	l = () => "Bắt đầu",
	z = (t = {}, r = {}) => {
		const n = r.locale ?? e();
		return n === "en"
			? u()
			: n === "pt"
				? i()
				: n === "ch"
					? c()
					: n === "de"
						? o()
						: n === "es"
							? s()
							: n === "fr"
								? f()
								: n === "it"
									? _()
									: n === "jp"
										? d()
										: n === "pl"
											? g()
											: n === "ru"
												? p()
												: n === "uk"
													? b()
													: l();
	},
	a = () => "End",
	h = () => "Fim",
	j = () => "结束",
	k = () => "Ende",
	F = () => "Fin",
	m = () => "Fin",
	I = () => "Fine",
	v = () => "終了",
	B = () => "Koniec",
	E = () => "Конец",
	K = () => "Кінець",
	S = () => "Kết thúc",
	D = (t = {}, r = {}) => {
		const n = r.locale ?? e();
		return n === "en"
			? a()
			: n === "pt"
				? h()
				: n === "ch"
					? j()
					: n === "de"
						? k()
						: n === "es"
							? F()
							: n === "fr"
								? m()
								: n === "it"
									? I()
									: n === "jp"
										? v()
										: n === "pl"
											? B()
											: n === "ru"
												? E()
												: n === "uk"
													? K()
													: S();
	};
export { z as b, D as e };
