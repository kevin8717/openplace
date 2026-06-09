import "../chunks/Bzak7iHL.js";
import { o as K } from "../chunks/DMoMXVXI.js";
import {
	p as E,
	a as w,
	b as q,
	m as A,
	c as f,
	i as _,
	h as W,
	$ as S,
	d as o,
	r as c,
	e as V,
	f as B,
	s as h,
	t as v,
} from "../chunks/Dbe4PVAU.js";
import { s as p } from "../chunks/C_mo-lyU.js";
import { i as D } from "../chunks/Icl9dwnj.js";
import { h as k } from "../chunks/RamoUxFG.js";
import { h as H } from "../chunks/ClbV77Km.js";
import { g as I } from "../chunks/C6d2kgDd.js";
import { L as F } from "../chunks/BKUInVTD.js";
import { L as T } from "../chunks/Cskb-8mx.js";
import { g as x } from "../chunks/BhCkpOlh.js";
import { g as b } from "../chunks/DbEN2Ffr.js";
const Z = (t) =>
		`The email ${t.email} already has a Wplace account. Please try to migrate to another account or delete the account before the migration.`,
	N = (t) =>
		`O email (${t.email}) já está associado a uma conta Wplace. Por favor, tente migrar para outra conta ou delete a conta existente antes da migração.`,
	O = (t) =>
		`邮箱 ${t.email} 已经拥有一个 Wplace 账号。请尝试迁移到其他账号，或在迁移前删除现有账号。`,
	R = (t) =>
		`Die E-Mail ${t.email} ist bereits mit einem Wplace-Konto verknüpft. Bitte migriere auf ein anderes Konto oder lösche das bestehende Konto vor der Migration.`,
	U = (t) =>
		`El correo ${t.email} ya está asociado a una cuenta de Wplace. Intenta migrar a otra cuenta o elimina la cuenta antes de migrar.`,
	Y = (t) =>
		`L’e-mail ${t.email} est déjà associé à un compte Wplace. Veuillez migrer vers un autre compte ou supprimer le compte existant avant la migration.`,
	C = (t) =>
		`L'e-mail (${t.email}) è già associata a un account Wplace. Prova a migrare su un altro account o elimina l'account esistente prima della migrazione.`,
	G = (t) =>
		`メールアドレス${t.email}には既にWplaceアカウントがあります。別のアカウントへ移行するか、移行前に既存のアカウントを削除してください。`,
	J = (t) =>
		`Adres e-mail ${t.email} jest już powiązany z kontem Wplace. Spróbuj przenieść na inne konto lub usuń istniejące przed migracją.`,
	Q = (t) =>
		`E-mail ${t.email} уже привязан к аккаунту Wplace. Пожалуйста, мигрируйте в другой аккаунт или удалите текущий перед миграцией.`,
	X = (t) =>
		`Email ${t.email} уже привʼязаний до акаунта Wplace. Будь ласка, спробуйте перенести інший акаунт або видаліть поточний перед міграцією.`,
	tt = (t) =>
		`Email ${t.email} đã có tài khoản Wplace. Hãy di chuyển sang tài khoản khác hoặc xóa tài khoản đó trước khi di chuyển.`,
	et = (t, u = {}) => {
		const e = u.locale ?? x();
		return e === "en"
			? Z(t)
			: e === "pt"
				? N(t)
				: e === "ch"
					? O(t)
					: e === "de"
						? R(t)
						: e === "es"
							? U(t)
							: e === "fr"
								? Y(t)
								: e === "it"
									? C(t)
									: e === "jp"
										? G(t)
										: e === "pl"
											? J(t)
											: e === "ru"
												? Q(t)
												: e === "uk"
													? X(t)
													: tt(t);
	},
	at = (t) =>
		`The Twitch account you tried to migrate has already been migrated to a Wplace account (${t.email}). Please log in normally using this email.`,
	it = (t) =>
		`A conta Twitch que você tentou migrar já foi migrada para uma conta Wplace (${t.email}). Por favor, faça login normalmente usando esse email.`,
	rt = (t) =>
		`你尝试迁移的 Twitch 账号已被迁移到一个 Wplace 账号（${t.email}）。请使用该邮箱正常登录。`,
	nt = (t) =>
		`Das Twitch-Konto, das du migrieren wolltest, wurde bereits mit einem Wplace-Konto (${t.email}) migriert. Bitte logge dich normal mit dieser E-Mail ein.`,
	ot = (t) =>
		`La cuenta de Twitch que intentaste migrar ya fue migrada a una cuenta de Wplace (${t.email}). Inicia sesión normalmente usando ese correo.`,
	ct = (t) =>
		`Le compte Twitch que vous avez essayé de migrer a déjà été migré vers un compte Wplace (${t.email}). Veuillez vous connecter normalement avec cet e-mail.`,
	st = (t) =>
		`L'account Twitch che hai provato a migrare è già stato migrato su un account Wplace (${t.email}). Accedi normalmente usando questa e-mail.`,
	ut = (t) =>
		`移行しようとしたTwitchアカウントは、すでにWplaceアカウント（${t.email}）に移行されています。このメールアドレスで通常どおりログインしてください。`,
	mt = (t) =>
		`Konto Twitch, które próbowałeś przenieść, zostało już powiązane z kontem Wplace (${t.email}). Zaloguj się zwykłym sposobem, używając tego adresu e-mail.`,
	lt = (t) =>
		`Аккаунт Twitch, который вы пытались мигрировать, уже был перенесён в аккаунт Wplace (${t.email}). Пожалуйста, войдите, используя этот e-mail.`,
	_t = (t) =>
		`Акаунт Twitch, який ви намагаєтеся перенести, вже було перенесено в акаунт Wplace (${t.email}). Будь ласка, увійдіть, використовуючи цей email.`,
	ht = (t) =>
		`Tài khoản Twitch bạn cố di chuyển đã được liên kết với tài khoản Wplace (${t.email}). Hãy đăng nhập bằng email này.`,
	gt = (t, u = {}) => {
		const e = u.locale ?? x();
		return e === "en"
			? at(t)
			: e === "pt"
				? it(t)
				: e === "ch"
					? rt(t)
					: e === "de"
						? nt(t)
						: e === "es"
							? ot(t)
							: e === "fr"
								? ct(t)
								: e === "it"
									? st(t)
									: e === "jp"
										? ut(t)
										: e === "pl"
											? mt(t)
											: e === "ru"
												? lt(t)
												: e === "uk"
													? _t(t)
													: ht(t);
	},
	dt = () =>
		"Migration not possible. Your current Twitch account is not associated with a Wplace account.",
	wt = () =>
		"Migração não possível. Sua conta Twitch atual não está associada a uma conta Wplace.",
	pt = () => "无法迁移。你当前的 Twitch 账号未关联任何 Wplace 账号。",
	ft = () =>
		"Migration nicht möglich. Dein aktuelles Twitch-Konto ist keinem Wplace-Konto zugeordnet.",
	vt = () =>
		"No es posible migrar. Tu cuenta actual de Twitch no está asociada a una cuenta de Wplace.",
	xt = () =>
		"Migration impossible. Votre compte Twitch actuel n’est pas associé à un compte Wplace.",
	yt = () =>
		"Migrazione non possibile. Il tuo attuale account Twitch non è associato a un account Wplace.",
	Tt = () =>
		"移行できません。現在のTwitchアカウントはWplaceアカウントに紐づいていません。",
	bt = () =>
		"Migracja niemożliwa. Twoje obecne konto Twitch nie jest powiązane z kontem Wplace.",
	Wt = () =>
		"Миграция невозможна. Ваш текущий аккаунт Twitch не связан с аккаунтом Wplace.",
	kt = () =>
		"Міграція неможлива. Поточний акаунт Twitch не повʼязаний із акаунтом Wplace.",
	zt = () =>
		"Không thể di chuyển. Tài khoản Twitch hiện tại của bạn không được liên kết với tài khoản Wplace.",
	jt = (t = {}, u = {}) => {
		const e = u.locale ?? x();
		return e === "en"
			? dt()
			: e === "pt"
				? wt()
				: e === "ch"
					? pt()
					: e === "de"
						? ft()
						: e === "es"
							? vt()
							: e === "fr"
								? xt()
								: e === "it"
									? yt()
									: e === "jp"
										? Tt()
										: e === "pl"
											? bt()
											: e === "ru"
												? Wt()
												: e === "uk"
													? kt()
													: zt();
	},
	$t = () =>
		"For security reasons, we are moving away from Twitch authentication. Please choose an alternative login method to migrate your account bellow:",
	Lt = () =>
		"Por questões de segurança, estamos desativando o login via Twitch. Por favor selecione um método de login alternativo para migrar sua conta abaixo:",
	Mt = () =>
		"出于安全原因，我们将不再使用 Twitch 登录。请在下方选择其他登录方式来迁移你的账号：",
	Pt = () =>
		"Aus Sicherheitsgründen entfernen wir die Twitch-Authentifizierung. Bitte wähle unten eine alternative Login-Methode, um dein Konto zu migrieren:",
	Kt = () =>
		"Por motivos de seguridad, estamos desactivando el inicio de sesión con Twitch. Elige un método de inicio de sesión alternativo para migrar tu cuenta a continuación:",
	Et = () =>
		"Pour des raisons de sécurité, nous désactivons l’authentification Twitch. Veuillez choisir une méthode de connexion alternative pour migrer votre compte ci-dessous :",
	qt = () =>
		"Per motivi di sicurezza, stiamo disattivando il login tramite Twitch. Seleziona un metodo di accesso alternativo per migrare il tuo account:",
	At = () =>
		"セキュリティ上の理由から、Twitch認証の提供を終了します。以下から別のログイン方法を選択し、アカウントを移行してください。",
	St = () =>
		"Ze względów bezpieczeństwa wycofujemy logowanie przez Twitch. Wybierz alternatywną metodę logowania, aby przenieść konto:",
	Vt = () =>
		"Из соображений безопасности мы отказываемся от авторизации через Twitch. Пожалуйста, выберите альтернативный способ входа, чтобы мигрировать ваш аккаунт:",
	Bt = () =>
		"З міркувань безпеки ми відмовляємося від авторизації через Twitch. Будь ласка, оберіть альтернативний спосіб входу для перенесення акаунта нижче:",
	Dt = () =>
		"Vì lý do bảo mật, chúng tôi đang ngừng hỗ trợ đăng nhập bằng Twitch. Hãy chọn một phương thức đăng nhập khác để di chuyển tài khoản bên dưới:",
	Ht = (t = {}, u = {}) => {
		const e = u.locale ?? x();
		return e === "en"
			? $t()
			: e === "pt"
				? Lt()
				: e === "ch"
					? Mt()
					: e === "de"
						? Pt()
						: e === "es"
							? Kt()
							: e === "fr"
								? Et()
								: e === "it"
									? qt()
									: e === "jp"
										? At()
										: e === "pl"
											? St()
											: e === "ru"
												? Vt()
												: e === "uk"
													? Bt()
													: Dt();
	};
var It = f('<p class="mb-6 text-center"> </p> <!>', 1),
	Ft = f(
		'<div class="flex flex-col items-center gap-6"><a href="/"><!></a> <p class="text-center text-lg"><!></p> <a class="btn btn-primary btn-lg" href="/"> </a></div>',
	),
	Zt = f(
		'<div class="flex flex-col items-center gap-6"><a href="/"><!></a> <p class="text-center text-lg"><!></p> <a class="btn btn-primary btn-lg" href="/"> </a></div>',
	),
	Nt = f(
		'<div class="flex flex-col items-center gap-6"><a href="/"><!></a> <p class="text-center text-lg"> </p> <a class="btn btn-primary btn-lg" href="/"> </a></div>',
	),
	Ot = f(
		'<div class="mx-auto flex h-full max-w-xl flex-col items-center justify-center px-4"><!></div>',
	);
function re(t, u) {
	E(u, !0);
	let e = V(void 0);
	K(() => {
		if (!_(e)) {
			const r = new URLSearchParams(window.location.search),
				a = r.get("response");
			switch (a) {
				case "choose-account":
				case "new-account":
					W(e, { name: a }, !0);
					break;
				case "already-migrated":
				case "account-exists":
					const i = r.get("email");
					W(e, { name: a, email: i ?? "" }, !0);
					break;
				default:
					I("/");
			}
		}
	});
	var y = Ot();
	H("1i7v6zb", (r) => {
		A(() => {
			S.title = "Wplace - Twitch account migration";
		});
	});
	var z = o(y);
	{
		var j = (r) => {
				var a = It(),
					i = B(a),
					s = o(i, !0);
				c(i);
				var n = h(i, 2);
				(F(n, { showTwitchMigration: !1 }),
					v((l) => p(s, l), [() => Ht()]),
					w(r, a));
			},
			$ = (r) => {
				var a = Ft(),
					i = o(a),
					s = o(i);
				(T(s, { size: "lg", hasText: !0 }), c(i));
				var n = h(i, 2),
					l = o(n);
				(k(l, () =>
					et({ email: `<span class="font-medium">${_(e).email}</span>` }),
				),
					c(n));
				var m = h(n, 2),
					g = o(m, !0);
				(c(m), c(a), v((d) => p(g, d), [() => b()]), w(r, a));
			},
			L = (r) => {
				var a = Zt(),
					i = o(a),
					s = o(i);
				(T(s, { size: "lg", hasText: !0 }), c(i));
				var n = h(i, 2),
					l = o(n);
				(k(l, () =>
					gt({ email: `<span class="font-medium">${_(e).email}</span>` }),
				),
					c(n));
				var m = h(n, 2),
					g = o(m, !0);
				(c(m), c(a), v((d) => p(g, d), [() => b()]), w(r, a));
			},
			M = (r) => {
				var a = Nt(),
					i = o(a),
					s = o(i);
				(T(s, { size: "lg", hasText: !0 }), c(i));
				var n = h(i, 2),
					l = o(n, !0);
				c(n);
				var m = h(n, 2),
					g = o(m, !0);
				(c(m),
					c(a),
					v(
						(d, P) => {
							(p(l, d), p(g, P));
						},
						[() => jt(), () => b()],
					),
					w(r, a));
			};
		D(z, (r) => {
			var a, i, s, n;
			((a = _(e)) == null ? void 0 : a.name) === "choose-account"
				? r(j)
				: ((i = _(e)) == null ? void 0 : i.name) === "account-exists"
					? r($, 1)
					: ((s = _(e)) == null ? void 0 : s.name) === "already-migrated"
						? r(L, 2)
						: ((n = _(e)) == null ? void 0 : n.name) === "new-account" &&
							r(M, 3);
		});
	}
	(c(y), w(t, y), q());
}
export { re as component };
