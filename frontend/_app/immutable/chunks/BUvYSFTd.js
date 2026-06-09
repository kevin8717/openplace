import { g as t } from "./BhCkpOlh.js";
const s = () => "Reported users",
	n = () => "Usuários denunciados",
	u = () => "被举报用户",
	o = () => "Gemeldete Benutzer",
	i = () => "Usuarios reportados",
	_ = () => "Utilisateurs signalés",
	p = () => "Utenti segnalati",
	c = () => "通報されたユーザー",
	d = () => "Zgłoszeni użytkownicy",
	f = () => "Пользователи, на которых пожаловались",
	a = () => "Користувачі, на яких поскаржилися",
	l = () => "Người chơi bị báo cáo",
	h = (g = {}, e = {}) => {
		const r = e.locale ?? t();
		return r === "en"
			? s()
			: r === "pt"
				? n()
				: r === "ch"
					? u()
					: r === "de"
						? o()
						: r === "es"
							? i()
							: r === "fr"
								? _()
								: r === "it"
									? p()
									: r === "jp"
										? c()
										: r === "pl"
											? d()
											: r === "ru"
												? f()
												: r === "uk"
													? a()
													: l();
	};
export { h as r };
