import { g as e } from "./BhCkpOlh.js";
const u = () => "Date",
	o = () => "Data",
	s = () => "日期",
	c = () => "Datum",
	a = () => "Fecha",
	i = () => "Date",
	f = () => "Data",
	_ = () => "日付",
	d = () => "Data",
	p = () => "Дата",
	l = () => "Дата",
	N = () => "Ngày",
	b = (n = {}, r = {}) => {
		const t = r.locale ?? e();
		return t === "en"
			? u()
			: t === "pt"
				? o()
				: t === "ch"
					? s()
					: t === "de"
						? c()
						: t === "es"
							? a()
							: t === "fr"
								? i()
								: t === "it"
									? f()
									: t === "jp"
										? _()
										: t === "pl"
											? d()
											: t === "ru"
												? p()
												: t === "uk"
													? l()
													: N();
	},
	h = () => "Notes",
	D = () => "Notas",
	k = () => "备注",
	j = () => "Notizen",
	g = () => "Notas",
	m = () => "Notes",
	v = () => "Note",
	x = () => "メモ",
	y = () => "Notatki",
	z = () => "Заметки",
	F = () => "Примітки",
	G = () => "Ghi chú",
	q = (n = {}, r = {}) => {
		const t = r.locale ?? e();
		return t === "en"
			? h()
			: t === "pt"
				? D()
				: t === "ch"
					? k()
					: t === "de"
						? j()
						: t === "es"
							? g()
							: t === "fr"
								? m()
								: t === "it"
									? v()
									: t === "jp"
										? x()
										: t === "pl"
											? y()
											: t === "ru"
												? z()
												: t === "uk"
													? F()
													: G();
	};
export { b as d, q as n };
