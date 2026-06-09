import { g as t } from "./BhCkpOlh.js";
const o = () => "Approved",
	u = () => "Aprovado",
	c = () => "已批准",
	p = () => "Genehmigt",
	d = () => "Aprobado",
	i = () => "Approuvé",
	s = () => "Approvato",
	a = () => "承認済み",
	f = () => "Zatwierdzono",
	_ = () => "Утверждено",
	j = () => "Затверджено",
	v = () => "Đã duyệt",
	L = (n = {}, e = {}) => {
		const r = e.locale ?? t();
		return r === "en"
			? o()
			: r === "pt"
				? u()
				: r === "ch"
					? c()
					: r === "de"
						? p()
						: r === "es"
							? d()
							: r === "fr"
								? i()
								: r === "it"
									? s()
									: r === "jp"
										? a()
										: r === "pl"
											? f()
											: r === "ru"
												? _()
												: r === "uk"
													? j()
													: v();
	},
	l = () => "Rejected",
	h = () => "Rejeitado",
	A = () => "已拒绝",
	R = () => "Abgelehnt",
	g = () => "Rechazado",
	k = () => "Rejeté",
	m = () => "Rifiutato",
	z = () => "却下されました",
	b = () => "Odrzucony",
	y = () => "Отклонено",
	w = () => "Відхилено",
	x = () => "Đã từ chối",
	O = (n = {}, e = {}) => {
		const r = e.locale ?? t();
		return r === "en"
			? l()
			: r === "pt"
				? h()
				: r === "ch"
					? A()
					: r === "de"
						? R()
						: r === "es"
							? g()
							: r === "fr"
								? k()
								: r === "it"
									? m()
									: r === "jp"
										? z()
										: r === "pl"
											? b()
											: r === "ru"
												? y()
												: r === "uk"
													? w()
													: x();
	};
export { L as a, O as r };
