import "../chunks/Bzak7iHL.js";
import { o as K } from "../chunks/DMoMXVXI.js";
import {
	k as O,
	p as R,
	I as T,
	i as t,
	h as a,
	a as v,
	b as U,
	e as g,
	j as W,
	c as d,
	n as G,
	$ as X,
	d as l,
	r as o,
	u as $,
	f as ee,
	s as N,
	t as A,
	l as ne,
} from "../chunks/Dbe4PVAU.js";
import { s as z } from "../chunks/C_mo-lyU.js";
import { i as D } from "../chunks/Icl9dwnj.js";
import { h as te } from "../chunks/ClbV77Km.js";
import { g as re } from "../chunks/C6d2kgDd.js";
import { p as C } from "../chunks/DzNOOKXC.js";
import { c as ae, a as I, t as ie } from "../chunks/DU-2YUMG.js";
import { L as le } from "../chunks/BKUInVTD.js";
import { L as oe } from "../chunks/Cskb-8mx.js";
import { g as p } from "../chunks/BhCkpOlh.js";
import { g as ue } from "../chunks/DbEN2Ffr.js";
const se = () => "Alliance invite",
	ce = () => "Convite de aliança",
	_e = () => "联盟邀请",
	fe = () => "Allianz-Einladung",
	ve = () => "Invitación de alianza",
	de = () => "Invitation d’alliance",
	pe = () => "Invito all'alleanza",
	he = () => "アライアンス招待",
	me = () => "Zaproszenie do sojuszu",
	ge = () => "Приглашение в альянс",
	be = () => "Запрошення в альянс",
	ze = () => "Lời mời liên minh",
	je = (u = {}, r = {}) => {
		const e = r.locale ?? p();
		return e === "en"
			? se()
			: e === "pt"
				? ce()
				: e === "ch"
					? _e()
					: e === "de"
						? fe()
						: e === "es"
							? ve()
							: e === "fr"
								? de()
								: e === "it"
									? pe()
									: e === "jp"
										? he()
										: e === "pl"
											? me()
											: e === "ru"
												? ge()
												: e === "uk"
													? be()
													: ze();
	},
	xe = () => "You have been banned from this alliance. You cannot join it.",
	ke = () => "Você foi banido desta aliança. Você não pode entrar.",
	ye = () => "你已被该联盟封禁，无法加入。",
	we = () =>
		"Du wurdest aus dieser Allianz gebannt. Du kannst nicht beitreten.",
	Ne = () => "Has sido baneado de esta alianza. No puedes unirte.",
	Ae = () =>
		"Vous avez été banni de cette alliance. Vous ne pouvez pas la rejoindre.",
	Ie = () => "Sei stato bannato da questa alleanza. Non puoi entrarvi.",
	Ve = () => "このアライアンスからBANされています。参加することはできません。",
	Le = () => "Zostałeś zbanowany z tego sojuszu. Nie możesz do niego dołączyć.",
	Be = () =>
		"Вы были забанены в этом альянсе и не можете к нему присоединиться.",
	De = () =>
		"Вас заблоковано в цьому альянсі. Ви не можете до нього приєднатися.",
	Ce = () => "Bạn đã bị cấm khỏi liên minh này. Bạn không thể tham gia.",
	Ee = (u = {}, r = {}) => {
		const e = r.locale ?? p();
		return e === "en"
			? xe()
			: e === "pt"
				? ke()
				: e === "ch"
					? ye()
					: e === "de"
						? we()
						: e === "es"
							? Ne()
							: e === "fr"
								? Ae()
								: e === "it"
									? Ie()
									: e === "jp"
										? Ve()
										: e === "pl"
											? Le()
											: e === "ru"
												? Be()
												: e === "uk"
													? De()
													: Ce();
	},
	Me = () => `You are already in an alliance.
Do you want to leave your current alliance to join?`,
	Pe = () => "Você já está em uma aliança. Deseja sair da sua aliança atual?",
	Se = () => `你已经在一个联盟中。
你想退出当前联盟以加入新的联盟吗？`,
	Ye = () => `Du bist bereits in einer Allianz.
Möchtest du deine aktuelle Allianz verlassen, um beizutreten?`,
	Je = () => `Ya estás en una alianza.
¿Quieres salir de tu alianza actual para unirte?`,
	qe = () => `Vous êtes déjà dans une alliance.
Voulez-vous quitter votre alliance actuelle pour rejoindre celle-ci ?`,
	Qe = () => "Sei già in un'alleanza. Vuoi lasciare la tua alleanza attuale?",
	Ze = () => `すでに別のアライアンスに所属しています。
現在のアライアンスを抜けて参加しますか？`,
	Fe = () => `Jesteś już w sojuszu.
Czy chcesz opuścić obecny sojusz, aby dołączyć?`,
	He = () => `Вы уже состоите в альянсе.
Хотите выйти из текущего альянса, чтобы присоединиться к новому?`,
	Ke = () => `Ви вже перебуваєте в альянсі.
Ви хочете покинути поточний альянс, щоб приєднатися?`,
	Oe = () => `Bạn đã ở trong một liên minh.
Bạn có muốn rời liên minh hiện tại để tham gia liên minh mới không?`,
	Re = (u = {}, r = {}) => {
		const e = r.locale ?? p();
		return e === "en"
			? Me()
			: e === "pt"
				? Pe()
				: e === "ch"
					? Se()
					: e === "de"
						? Ye()
						: e === "es"
							? Je()
							: e === "fr"
								? qe()
								: e === "it"
									? Qe()
									: e === "jp"
										? Ze()
										: e === "pl"
											? Fe()
											: e === "ru"
												? He()
												: e === "uk"
													? Ke()
													: Oe();
	},
	Te = () => "Invalid invite. It might be expired.",
	Ue = () => "Convite inválido. Pode estar expirado.",
	We = () => "无效的邀请链接。可能已过期。",
	Ge = () => "Ungültige Einladung. Möglicherweise ist sie abgelaufen.",
	Xe = () => "Invitación inválida. Puede haber expirado.",
	$e = () => "Invitation invalide. Elle a peut-être expiré.",
	en = () => "Invito non valido. Potrebbe essere scaduto.",
	nn = () => "無効な招待です。期限が切れている可能性があります。",
	tn = () => "Nieprawidłowe zaproszenie. Może być przedawnione.",
	rn = () => "Недействительное приглашение. Возможно, срок его действия истёк.",
	an = () => "Некоректне запрошення. Можливо, воно вже не дійсне.",
	ln = () => "Lời mời không hợp lệ. Có thể đã hết hạn.",
	on = (u = {}, r = {}) => {
		const e = r.locale ?? p();
		return e === "en"
			? Te()
			: e === "pt"
				? Ue()
				: e === "ch"
					? We()
					: e === "de"
						? Ge()
						: e === "es"
							? Xe()
							: e === "fr"
								? $e()
								: e === "it"
									? en()
									: e === "jp"
										? nn()
										: e === "pl"
											? tn()
											: e === "ru"
												? rn()
												: e === "uk"
													? an()
													: ln();
	},
	un = () => "Leave",
	sn = () => "Sair",
	cn = () => "离开",
	_n = () => "Verlassen",
	fn = () => "Salir",
	vn = () => "Quitter",
	dn = () => "Esci",
	pn = () => "退出",
	hn = () => "Opuść",
	mn = () => "Выйти",
	gn = () => "Вийти",
	bn = () => "Rời",
	zn = (u = {}, r = {}) => {
		const e = r.locale ?? p();
		return e === "en"
			? un()
			: e === "pt"
				? sn()
				: e === "ch"
					? cn()
					: e === "de"
						? _n()
						: e === "es"
							? fn()
							: e === "fr"
								? vn()
								: e === "it"
									? dn()
									: e === "jp"
										? pn()
										: e === "pl"
											? hn()
											: e === "ru"
												? mn()
												: e === "uk"
													? gn()
													: bn();
	},
	jn = () => "No",
	xn = () => "Não",
	kn = () => "否",
	yn = () => "Nein",
	wn = () => "No",
	Nn = () => "Non",
	An = () => "No",
	In = () => "いいえ",
	Vn = () => "Nie",
	Ln = () => "Нет",
	Bn = () => "Ні",
	Dn = () => "Không",
	Cn = (u = {}, r = {}) => {
		const e = r.locale ?? p();
		return e === "en"
			? jn()
			: e === "pt"
				? xn()
				: e === "ch"
					? kn()
					: e === "de"
						? yn()
						: e === "es"
							? wn()
							: e === "fr"
								? Nn()
								: e === "it"
									? An()
									: e === "jp"
										? In()
										: e === "pl"
											? Vn()
											: e === "ru"
												? Ln()
												: e === "uk"
													? Bn()
													: Dn();
	};
var En = d(
		'<meta property="og:title" content="Join the alliance"/> <meta name="twitter:title" content="Join the allince"/> <meta name="robots" content="noindex"/>',
		1,
	),
	Mn = d('<span class="loading loading-xl loading-spinner"></span>'),
	Pn = d(
		'<div class="flex items-center gap-2"><a class="btn w-32" href="/"> </a> <button class="btn btn-warning w-32"> </button></div>',
	),
	Sn = d('<a class="btn btn-primary btn-lg" href="/"> </a>'),
	Yn = d(
		'<div class="flex justify-center"><a href="/"><!></a></div> <p class="my-6 max-w-2xl text-center text-lg whitespace-pre-line"> </p> <!>',
		1,
	),
	Jn = d(
		'<div class="mx-auto flex h-full w-full flex-col items-center justify-center px-4"><!></div>',
	);
function $n(u, r) {
	R(r, !0);
	let e = g(!0),
		i = g(void 0),
		V = g(!1),
		s = g(""),
		j = g(!1);
	const L = $(() => C.url.searchParams.get("id") ?? "");
	(K(async () => {
		try {
			a(i, await I.joinAlliance(t(L)), !0);
		} catch (n) {
			(console.error(n.message), a(s, n.message, !0));
		} finally {
			a(e, !1);
		}
	}),
		T(() => {
			t(i) === "success"
				? re("/?alliance=1")
				: t(i) === "not-logged-in"
					? a(V, !0)
					: t(i) === "banned"
						? a(s, Ee(), !0)
						: t(i) === "in-another-alliance"
							? a(s, Re(), !0)
							: t(i) === "invalid-invite"
								? a(s, on(), !0)
								: t(i) === "error" && a(s, ae(), !0);
		}));
	var x = Jn();
	te("1rdz7hh", (n) => {
		var _ = En();
		(G(4),
			W(
				(h) => {
					X.title = `Wplace - ${h ?? ""}`;
				},
				[() => je()],
			),
			v(n, _));
	});
	var E = l(x);
	{
		var M = (n) => {
				var _ = Mn();
				v(n, _);
			},
			P = (n) => {
				le(n, {
					get redirect() {
						return C.url.pathname;
					},
				});
			},
			S = (n) => {
				var _ = Yn(),
					h = ee(_),
					B = l(h),
					Y = l(B);
				(oe(Y, { size: "lg", hasText: !0 }), o(B), o(h));
				var k = N(h, 2),
					J = l(k, !0);
				o(k);
				var q = N(k, 2);
				{
					var Q = (f) => {
							var c = Pn(),
								m = l(c),
								y = l(m, !0);
							o(m);
							var b = N(m, 2),
								F = l(b, !0);
							(o(b),
								o(c),
								A(
									(w, H) => {
										(z(y, w), (b.disabled = t(j)), z(F, H));
									},
									[() => Cn(), () => zn()],
								),
								ne("click", b, async () => {
									a(j, !0);
									try {
										(await I.leaveAlliance(),
											a(i, await I.joinAlliance(t(L)), !0));
									} catch (w) {
										ie.error(w.message);
									} finally {
										a(j, !1);
									}
								}),
								v(f, c));
						},
						Z = (f) => {
							var c = Sn(),
								m = l(c, !0);
							(o(c), A((y) => z(m, y), [() => ue()]), v(f, c));
						};
					D(q, (f) => {
						t(i) === "in-another-alliance" ? f(Q) : f(Z, !1);
					});
				}
				(A(() => z(J, t(s))), v(n, _));
			};
		D(E, (n) => {
			t(e) ? n(M) : t(V) ? n(P, 1) : t(s) && n(S, 2);
		});
	}
	(o(x), v(u, x), U());
}
O(["click"]);
export { $n as component };
