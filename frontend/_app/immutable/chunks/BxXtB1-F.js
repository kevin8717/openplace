import { g as n } from "./BhCkpOlh.js";
const s = () => "Permission manager",
	i = () => "Gerenciador de permissões",
	t = () => "权限管理器",
	o = () => "Berechtigungs-Manager",
	a = () => "Gestor de permisos",
	u = () => "Gestionnaire de permissions",
	m = () => "Gestore delle autorizzazioni",
	p = () => "権限マネージャー",
	_ = () => "Menedżer uprawnień",
	c = () => "Менеджер прав",
	g = () => "Менеджер дозволів",
	f = () => "Trình quản lý quyền",
	h = (l = {}, e = {}) => {
		const r = e.locale ?? n();
		return r === "en"
			? s()
			: r === "pt"
				? i()
				: r === "ch"
					? t()
					: r === "de"
						? o()
						: r === "es"
							? a()
							: r === "fr"
								? u()
								: r === "it"
									? m()
									: r === "jp"
										? p()
										: r === "pl"
											? _()
											: r === "ru"
												? c()
												: r === "uk"
													? g()
													: f();
	};
export { h as p };
