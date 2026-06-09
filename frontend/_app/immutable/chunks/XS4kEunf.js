import { g as t } from "./BhCkpOlh.js";
const i = () => "Admin",
	e = () => "Admin",
	u = () => "管理员",
	d = () => "Admin",
	m = () => "Admin",
	o = () => "Admin",
	a = () => "Admin",
	c = () => "管理者",
	s = () => "Admin",
	f = () => "Админ",
	_ = () => "Адмін",
	p = () => "Quản trị viên",
	g = (l = {}, r = {}) => {
		const n = r.locale ?? t();
		return n === "en"
			? i()
			: n === "pt"
				? e()
				: n === "ch"
					? u()
					: n === "de"
						? d()
						: n === "es"
							? m()
							: n === "fr"
								? o()
								: n === "it"
									? a()
									: n === "jp"
										? c()
										: n === "pl"
											? s()
											: n === "ru"
												? f()
												: n === "uk"
													? _()
													: p();
	};
export { g as a };
