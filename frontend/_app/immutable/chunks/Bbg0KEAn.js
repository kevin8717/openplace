import { g as n } from "./BhCkpOlh.js";
const s = () => "Average Bans",
	u = () => "Média de Bans",
	a = () => "平均封禁数",
	i = () => "Durchschnittliche Banns",
	o = () => "Media de bans",
	_ = () => "Moyenne de bannissements",
	c = () => "Media dei ban",
	g = () => "平均BAN数",
	f = () => "Średnia liczba banów",
	p = () => "Среднее количество банов",
	v = () => "Середня кількість банів",
	l = () => "Số lệnh cấm trung bình",
	$ = (t = {}, r = {}) => {
		const e = r.locale ?? n();
		return e === "en"
			? s()
			: e === "pt"
				? u()
				: e === "ch"
					? a()
					: e === "de"
						? i()
						: e === "es"
							? o()
							: e === "fr"
								? _()
								: e === "it"
									? c()
									: e === "jp"
										? g()
										: e === "pl"
											? f()
											: e === "ru"
												? p()
												: e === "uk"
													? v()
													: l();
	},
	d = () => "Average Ignores",
	b = () => "Média de Ignores",
	h = () => "平均忽略次数",
	m = () => "Durchschnittliche Ignorierungen",
	M = () => "Media de ignores",
	k = () => "Moyenne des ignorés",
	j = () => "Media degli ignorati",
	z = () => "平均無視数",
	T = () => "Średnia liczba ignorowanych",
	y = () => "Среднее количество игнорирований",
	S = () => "Середня кількість ігнорів",
	A = () => "Số lần bỏ qua trung bình",
	ee = (t = {}, r = {}) => {
		const e = r.locale ?? n();
		return e === "en"
			? d()
			: e === "pt"
				? b()
				: e === "ch"
					? h()
					: e === "de"
						? m()
						: e === "es"
							? M()
							: e === "fr"
								? k()
								: e === "it"
									? j()
									: e === "jp"
										? z()
										: e === "pl"
											? T()
											: e === "ru"
												? y()
												: e === "uk"
													? S()
													: A();
	},
	B = () => "Punishment rate",
	w = () => "Taxa de punição",
	x = () => "惩罚率",
	D = () => "Sperrquote",
	I = () => "Tasa de sanciones",
	q = () => "Taux de sanctions",
	L = () => "Tasso di punizione",
	N = () => "処罰率",
	P = () => "Współczynnik kar",
	W = () => "Процент наказаний",
	C = () => "Рівень покарань",
	E = () => "Tỷ lệ phạt",
	re = (t = {}, r = {}) => {
		const e = r.locale ?? n();
		return e === "en"
			? B()
			: e === "pt"
				? w()
				: e === "ch"
					? x()
					: e === "de"
						? D()
						: e === "es"
							? I()
							: e === "fr"
								? q()
								: e === "it"
									? L()
									: e === "jp"
										? N()
										: e === "pl"
											? P()
											: e === "ru"
												? W()
												: e === "uk"
													? C()
													: E();
	},
	F = () => "Average Timeouts",
	G = () => "Média de Suspensões",
	H = () => "平均禁言数",
	J = () => "Durchschnittliche Timeouts",
	K = () => "Media de suspensiones",
	O = () => "Moyenne de suspensions",
	Q = () => "Media delle sospensioni",
	R = () => "平均タイムアウト数",
	U = () => "Średnia liczba zawieszeń",
	V = () => "Среднее количество тайм-аутов",
	X = () => "Середня кількість тайм-аутів",
	Y = () => "Số lần tạm khóa trung bình",
	ne = (t = {}, r = {}) => {
		const e = r.locale ?? n();
		return e === "en"
			? F()
			: e === "pt"
				? G()
				: e === "ch"
					? H()
					: e === "de"
						? J()
						: e === "es"
							? K()
							: e === "fr"
								? O()
								: e === "it"
									? Q()
									: e === "jp"
										? R()
										: e === "pl"
											? U()
											: e === "ru"
												? V()
												: e === "uk"
													? X()
													: Y();
	};
export { $ as b, ee as i, re as s, ne as t };
