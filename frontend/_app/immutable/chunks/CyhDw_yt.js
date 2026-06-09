import { g as i } from "./BhCkpOlh.js";
const t = () => "User ID copied",
	u = () => "ID do usuário copiado",
	o = () => "已复制用户 ID",
	n = () => "Benutzer-ID kopiert",
	c = () => "ID de usuario copiado",
	s = () => "ID utilisateur copié",
	_ = () => "ID utente copiato",
	d = () => "ユーザーIDをコピーしました。",
	p = () => "ID użytkownika skopiowane",
	f = () => "ID пользователя скопирован",
	a = () => "ID користувача скопійовано",
	D = () => "Đã sao chép ID người dùng",
	k = (I = {}, e = {}) => {
		const r = e.locale ?? i();
		return r === "en"
			? t()
			: r === "pt"
				? u()
				: r === "ch"
					? o()
					: r === "de"
						? n()
						: r === "es"
							? c()
							: r === "fr"
								? s()
								: r === "it"
									? _()
									: r === "jp"
										? d()
										: r === "pl"
											? p()
											: r === "ru"
												? f()
												: r === "uk"
													? a()
													: D();
	};
export { k as u };
