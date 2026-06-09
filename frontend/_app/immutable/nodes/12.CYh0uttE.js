import "../chunks/Bzak7iHL.js";
import { o as Ui } from "../chunks/DMoMXVXI.js";
import {
	k as Wn,
	p as An,
	e as g,
	g as kr,
	I as hr,
	i as e,
	h as o,
	f as yr,
	s,
	d as a,
	r as i,
	t as T,
	l as A,
	a as I,
	v as Pn,
	b as En,
	q as Ki,
	c as L,
	w as Ni,
	j as Vi,
	$ as Fi,
	u as ne,
} from "../chunks/Dbe4PVAU.js";
import { s as _ } from "../chunks/C_mo-lyU.js";
import { i as J } from "../chunks/Icl9dwnj.js";
import { k as Bi } from "../chunks/ryCN0oNh.js";
import { e as pe, i as me } from "../chunks/sR4NyGSS.js";
import { h as Oi } from "../chunks/ClbV77Km.js";
import {
	r as ie,
	j as Wi,
	s as E,
	a as Xe,
	b as Ze,
	f as br,
} from "../chunks/B7_gUtXa.js";
import { b as Je, a as Ai } from "../chunks/C1Rrr0ww.js";
import { g as gr } from "../chunks/C6d2kgDd.js";
import { p as xr } from "../chunks/DzNOOKXC.js";
import {
	e as Ei,
	i as Hi,
	h as Gi,
	f as Yi,
	g as qi,
	m as Xi,
	a as Zi,
	T as Et,
	u as Ji,
} from "../chunks/DU-2YUMG.js";
import { P as Qi } from "../chunks/JKnWQwH6.js";
import { b as Rn } from "../chunks/BVz9wMiQ.js";
import { p as W } from "../chunks/K9AHFDoV.js";
import { g as R } from "../chunks/BhCkpOlh.js";
import { R as ta } from "../chunks/CbUCGNiK.js";
import { a as Mn } from "../chunks/IWxsS1m0.js";
import { a as ea } from "../chunks/B0JoJohi.js";
import { a as ra } from "../chunks/CD0Nhe1Q.js";
import { b as Cn } from "../chunks/CtsjoaOH.js";
import { b as na, e as ia } from "../chunks/Ch38BS2u.js";
import { e as aa } from "../chunks/kMrz8wtr.js";
import { f as sa } from "../chunks/Czaeq32u.js";
import { i as In } from "../chunks/DbF8UOi7.js";
import { l as oa } from "../chunks/Cp-hTSeP.js";
import { t as ua, a as ca, u as la, m as _a } from "../chunks/NTgY2kck.js";
import { n as Un } from "../chunks/Bvwls8qX.js";
import { o as jn, a as Kn } from "../chunks/DrImJxxA.js";
import { o as da } from "../chunks/L80GiOtt.js";
import { p as va } from "../chunks/CgYJp4GH.js";
import { r as fa } from "../chunks/DBS6HGbD.js";
import { r as pa } from "../chunks/C4Z8R_7N.js";
import { r as Nn } from "../chunks/BUvYSFTd.js";
import { s as ma } from "../chunks/WCizg6Ng.js";
import { t as Vn } from "../chunks/CW0X7odH.js";
import { t as Sn } from "../chunks/BJMWNMzA.js";
import { t as Fn } from "../chunks/mOmV0vnx.js";
import { u as ha } from "../chunks/DKkygPh8.js";
const ba = () => "Alliance ID",
	ga = () => "ID da aliança",
	xa = () => "联盟ID",
	ka = () => "Allianz-ID",
	ya = () => "ID de la alianza",
	wa = () => "ID de l'alliance",
	Ca = () => "ID dell'alleanza",
	Ia = () => "アライアンスID",
	ja = () => "ID sojuszu",
	Sa = () => "ID альянса",
	Pa = () => "ID альянсу",
	La = () => "ID liên minh",
	Ta = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? ba()
			: t === "pt"
				? ga()
				: t === "ch"
					? xa()
					: t === "de"
						? ka()
						: t === "es"
							? ya()
							: t === "fr"
								? wa()
								: t === "it"
									? Ca()
									: t === "jp"
										? Ia()
										: t === "pl"
											? ja()
											: t === "ru"
												? Sa()
												: t === "uk"
													? Pa()
													: La();
	},
	Da = () => "Bars",
	za = () => "Barras",
	$a = () => "条",
	Ra = () => "Stangen",
	Ma = () => "Barras",
	Ua = () => "Barres",
	Ka = () => "Barre",
	Na = () => "バー",
	Va = () => "Paski",
	Fa = () => "Столбцы",
	Ba = () => "Стовпці",
	Oa = () => "Thanh",
	Wa = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Da()
			: t === "pt"
				? za()
				: t === "ch"
					? $a()
					: t === "de"
						? Ra()
						: t === "es"
							? Ma()
							: t === "fr"
								? Ua()
								: t === "it"
									? Ka()
									: t === "jp"
										? Na()
										: t === "pl"
											? Va()
											: t === "ru"
												? Fa()
												: t === "uk"
													? Ba()
													: Oa();
	},
	Aa = () => "Category / reason",
	Ea = () => "Categoria / motivo",
	Ha = () => "类别 / 原因",
	Ga = () => "Kategorie / Grund",
	Ya = () => "Categoría / motivo",
	qa = () => "Catégorie / motif",
	Xa = () => "Categoria / motivo",
	Za = () => "カテゴリ / 理由",
	Ja = () => "Kategoria / powód",
	Qa = () => "Категория / Причина",
	ts = () => "Категорія / Причина",
	es = () => "Danh mục / Lý do",
	rs = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Aa()
			: t === "pt"
				? Ea()
				: t === "ch"
					? Ha()
					: t === "de"
						? Ga()
						: t === "es"
							? Ya()
							: t === "fr"
								? qa()
								: t === "it"
									? Xa()
									: t === "jp"
										? Za()
										: t === "pl"
											? Ja()
											: t === "ru"
												? Qa()
												: t === "uk"
													? ts()
													: es();
	},
	ns = () => "Chart",
	is = () => "Gráfico",
	as = () => "图表",
	ss = () => "Grafik",
	os = () => "Gráfico",
	us = () => "Graphique",
	cs = () => "Grafico",
	ls = () => "グラフ",
	_s = () => "Wykres",
	ds = () => "График",
	vs = () => "Графік",
	fs = () => "Biểu đồ",
	ps = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? ns()
			: t === "pt"
				? is()
				: t === "ch"
					? as()
					: t === "de"
						? ss()
						: t === "es"
							? os()
							: t === "fr"
								? us()
								: t === "it"
									? cs()
									: t === "jp"
										? ls()
										: t === "pl"
											? _s()
											: t === "ru"
												? ds()
												: t === "uk"
													? vs()
													: fs();
	},
	ms = () => "Compare previous period",
	hs = () => "Comparar período anterior",
	bs = () => "比较前期",
	gs = () => "Vorherigen Zeitraum vergleichen",
	xs = () => "Comparar período anterior",
	ks = () => "Comparer la période précédente",
	ys = () => "Confronta periodo precedente",
	ws = () => "前期間と比較",
	Cs = () => "Porównaj poprzedni okres",
	Is = () => "Сравнить предыдущий период",
	js = () => "Порівняти попередній період",
	Ss = () => "So sánh kỳ trước",
	pt = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? ms()
			: t === "pt"
				? hs()
				: t === "ch"
					? bs()
					: t === "de"
						? gs()
						: t === "es"
							? xs()
							: t === "fr"
								? ks()
								: t === "it"
									? ys()
									: t === "jp"
										? ws()
										: t === "pl"
											? Cs()
											: t === "ru"
												? Is()
												: t === "uk"
													? js()
													: Ss();
	},
	Ps = () => "Day",
	Ls = () => "Dia",
	Ts = () => "天",
	Ds = () => "Tag",
	zs = () => "Día",
	$s = () => "Jour",
	Rs = () => "Giorno",
	Ms = () => "日",
	Us = () => "Dzień",
	Ks = () => "День",
	Ns = () => "День",
	Vs = () => "Ngày",
	Fs = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Ps()
			: t === "pt"
				? Ls()
				: t === "ch"
					? Ts()
					: t === "de"
						? Ds()
						: t === "es"
							? zs()
							: t === "fr"
								? $s()
								: t === "it"
									? Rs()
									: t === "jp"
										? Ms()
										: t === "pl"
											? Us()
											: t === "ru"
												? Ks()
												: t === "uk"
													? Ns()
													: Vs();
	},
	Bs = () => "Hour",
	Os = () => "Hora",
	Ws = () => "时间",
	As = () => "Stunde",
	Es = () => "Hora",
	Hs = () => "Heure",
	Gs = () => "Ora",
	Ys = () => "時間",
	qs = () => "Godzina",
	Xs = () => "Час",
	Zs = () => "Година",
	Js = () => "Giờ",
	Qs = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Bs()
			: t === "pt"
				? Os()
				: t === "ch"
					? Ws()
					: t === "de"
						? As()
						: t === "es"
							? Es()
							: t === "fr"
								? Hs()
								: t === "it"
									? Gs()
									: t === "jp"
										? Ys()
										: t === "pl"
											? qs()
											: t === "ru"
												? Xs()
												: t === "uk"
													? Zs()
													: Js();
	},
	to = () => "Invalid date range.",
	eo = () => "Intervalo de datas inválido.",
	ro = () => "日期范围无效",
	no = () => "Ungültiger Datumsbereich.",
	io = () => "Intervalo de fechas inválido.",
	ao = () => "Plage de dates invalide.",
	so = () => "Intervallo di date non valido.",
	oo = () => "日付の範囲が無効です",
	uo = () => "Nieprawidłowy zakres dat",
	co = () => "Неверный диапазон дат.",
	lo = () => "Недійсний діапазон дат.",
	_o = () => "Khoảng ngày không hợp lệ.",
	vo = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? to()
			: t === "pt"
				? eo()
				: t === "ch"
					? ro()
					: t === "de"
						? no()
						: t === "es"
							? io()
							: t === "fr"
								? ao()
								: t === "it"
									? so()
									: t === "jp"
										? oo()
										: t === "pl"
											? uo()
											: t === "ru"
												? co()
												: t === "uk"
													? lo()
													: _o();
	},
	fo = (r) => `Time zone: ${r.timezone}`,
	po = (r) => `Fuso horário: ${r.timezone}`,
	mo = (r) => `时区: ${r.timezone}`,
	ho = (r) => `Zeitzone: ${r.timezone}`,
	bo = (r) => `Huso horario: ${r.timezone}`,
	go = (r) => `Fuseau horaire : ${r.timezone}`,
	xo = (r) => `Fuso orario: ${r.timezone}`,
	ko = (r) => `タイムゾーン: ${r.timezone}`,
	yo = (r) => `Strefa czasowa: ${r.timezone}`,
	wo = (r) => `Часовой пояс: ${r.timezone}`,
	Co = (r) => `Часовий пояс: ${r.timezone}`,
	Io = (r) => `Múi giờ: ${r.timezone}`,
	jo = (r, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? fo(r)
			: t === "pt"
				? po(r)
				: t === "ch"
					? mo(r)
					: t === "de"
						? ho(r)
						: t === "es"
							? bo(r)
							: t === "fr"
								? go(r)
								: t === "it"
									? xo(r)
									: t === "jp"
										? ko(r)
										: t === "pl"
											? yo(r)
											: t === "ru"
												? wo(r)
												: t === "uk"
													? Co(r)
													: Io(r);
	},
	So = (r) => `Wplace - KPI - ${r.section}`,
	Po = (r) => `Wplace - KPI - ${r.section}`,
	Lo = (r) => `Wplace - KPI - ${r.section}`,
	To = (r) => `Wplace - KPI - ${r.section}`,
	Do = (r) => `Wplace - KPI - ${r.section}`,
	zo = (r) => `Wplace - KPI - ${r.section}`,
	$o = (r) => `Wplace - KPI - ${r.section}`,
	Ro = (r) => `Wplace - KPI - ${r.section}`,
	Mo = (r) => `Wplace - KPI - ${r.section}`,
	Uo = (r) => `Wplace - KPI - ${r.section}`,
	Ko = (r) => `Wplace - KPI - ${r.section}`,
	No = (r) => `Wplace - KPI - ${r.section}`,
	Vo = (r, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? So(r)
			: t === "pt"
				? Po(r)
				: t === "ch"
					? Lo(r)
					: t === "de"
						? To(r)
						: t === "es"
							? Do(r)
							: t === "fr"
								? zo(r)
								: t === "it"
									? $o(r)
									: t === "jp"
										? Ro(r)
										: t === "pl"
											? Mo(r)
											: t === "ru"
												? Uo(r)
												: t === "uk"
													? Ko(r)
													: No(r);
	},
	Fo = (r) => `KPI - ${r.section}`,
	Bo = (r) => `KPI - ${r.section}`,
	Oo = (r) => `KPI – ${r.section}`,
	Wo = (r) => `KPI - ${r.section}`,
	Ao = (r) => `KPI - ${r.section}`,
	Eo = (r) => `KPI - ${r.section}`,
	Ho = (r) => `KPI - ${r.section}`,
	Go = (r) => `KPI - ${r.section}`,
	Yo = (r) => `KPI - ${r.section}`,
	qo = (r) => `KPI - ${r.section}`,
	Xo = (r) => `КРІ - ${r.section}`,
	Zo = (r) => `KPI - ${r.section}`,
	Jo = (r, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Fo(r)
			: t === "pt"
				? Bo(r)
				: t === "ch"
					? Oo(r)
					: t === "de"
						? Wo(r)
						: t === "es"
							? Ao(r)
							: t === "fr"
								? Eo(r)
								: t === "it"
									? Ho(r)
									: t === "jp"
										? Go(r)
										: t === "pl"
											? Yo(r)
											: t === "ru"
												? qo(r)
												: t === "uk"
													? Xo(r)
													: Zo(r);
	},
	Qo = () => "Last 15m",
	tu = () => "Últimos 15m",
	eu = () => "最近15分钟",
	ru = () => "Letzte 15 Min.",
	nu = () => "Últimos 15m",
	iu = () => "Derniers 15 min",
	au = () => "Ultimi 15m",
	su = () => "直近15分",
	ou = () => "Ostatnie 15 minut",
	uu = () => "Последние 15 минут",
	cu = () => "Останні 15 хв",
	lu = () => "15 phút qua",
	_u = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Qo()
			: t === "pt"
				? tu()
				: t === "ch"
					? eu()
					: t === "de"
						? ru()
						: t === "es"
							? nu()
							: t === "fr"
								? iu()
								: t === "it"
									? au()
									: t === "jp"
										? su()
										: t === "pl"
											? ou()
											: t === "ru"
												? uu()
												: t === "uk"
													? cu()
													: lu();
	},
	du = () => "Last 1h",
	vu = () => "Última 1h",
	fu = () => "最近1小时",
	pu = () => "Letzte 1 Stunde",
	mu = () => "Última 1h",
	hu = () => "Dernière heure",
	bu = () => "Ultima ora",
	gu = () => "直近1時間",
	xu = () => "Ostatnia godzina",
	ku = () => "Последний час",
	yu = () => "За останню 1 годину",
	wu = () => "1 giờ qua",
	Cu = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? du()
			: t === "pt"
				? vu()
				: t === "ch"
					? fu()
					: t === "de"
						? pu()
						: t === "es"
							? mu()
							: t === "fr"
								? hu()
								: t === "it"
									? bu()
									: t === "jp"
										? gu()
										: t === "pl"
											? xu()
											: t === "ru"
												? ku()
												: t === "uk"
													? yu()
													: wu();
	},
	Iu = () => "Last 24h",
	ju = () => "Últimas 24h",
	Su = () => "过去24小时",
	Pu = () => "Letzte 24h",
	Lu = () => "Últimas 24h",
	Tu = () => "Dernières 24h",
	Du = () => "Ultime 24 ore",
	zu = () => "過去24時間",
	$u = () => "Ostatnie 24 godziny",
	Ru = () => "Последние 24 часа",
	Mu = () => "Останні 24 год",
	Uu = () => "24 giờ qua",
	Ku = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Iu()
			: t === "pt"
				? ju()
				: t === "ch"
					? Su()
					: t === "de"
						? Pu()
						: t === "es"
							? Lu()
							: t === "fr"
								? Tu()
								: t === "it"
									? Du()
									: t === "jp"
										? zu()
										: t === "pl"
											? $u()
											: t === "ru"
												? Ru()
												: t === "uk"
													? Mu()
													: Uu();
	},
	Nu = () => "Last 30 days",
	Vu = () => "Últimos 30d",
	Fu = () => "近30天",
	Bu = () => "Letzte 30d",
	Ou = () => "Últimos 30d",
	Wu = () => "30 derniers jours",
	Au = () => "Ultimi 30 giorni",
	Eu = () => "過去30日間",
	Hu = () => "Ostatnie 30 dni",
	Gu = () => "Последние 30 дней",
	Yu = () => "Останні 30 днів",
	qu = () => "30 ngày qua",
	Xu = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Nu()
			: t === "pt"
				? Vu()
				: t === "ch"
					? Fu()
					: t === "de"
						? Bu()
						: t === "es"
							? Ou()
							: t === "fr"
								? Wu()
								: t === "it"
									? Au()
									: t === "jp"
										? Eu()
										: t === "pl"
											? Hu()
											: t === "ru"
												? Gu()
												: t === "uk"
													? Yu()
													: qu();
	},
	Zu = () => "Last 7d",
	Ju = () => "Últimos 7d",
	Qu = () => "过去7天",
	tc = () => "Letzte 7d",
	ec = () => "Últimos 7 días",
	rc = () => "7 derniers jours",
	nc = () => "Ultimi 7 giorni",
	ic = () => "直近7日間",
	ac = () => "Ostatnie 7 dni",
	sc = () => "Последние 7 дней",
	oc = () => "Останні 7 днів",
	uc = () => "7 ngày qua",
	cc = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Zu()
			: t === "pt"
				? Ju()
				: t === "ch"
					? Qu()
					: t === "de"
						? tc()
						: t === "es"
							? ec()
							: t === "fr"
								? rc()
								: t === "it"
									? nc()
									: t === "jp"
										? ic()
										: t === "pl"
											? ac()
											: t === "ru"
												? sc()
												: t === "uk"
													? oc()
													: uc();
	},
	lc = () => "Lines",
	_c = () => "Linhas",
	dc = () => "行",
	vc = () => "Linien",
	fc = () => "Líneas",
	pc = () => "Lignes",
	mc = () => "Linee",
	hc = () => "線",
	bc = () => "Linie",
	gc = () => "Линии",
	xc = () => "Лінії",
	kc = () => "Dòng",
	yc = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? lc()
			: t === "pt"
				? _c()
				: t === "ch"
					? dc()
					: t === "de"
						? vc()
						: t === "es"
							? fc()
							: t === "fr"
								? pc()
								: t === "it"
									? mc()
									: t === "jp"
										? hc()
										: t === "pl"
											? bc()
											: t === "ru"
												? gc()
												: t === "uk"
													? xc()
													: kc();
	},
	wc = (r) => `${r.value}%`,
	Cc = (r) => `${r.value}%`,
	Ic = (r) => `${r.value}%`,
	jc = (r) => `${r.value}%`,
	Sc = (r) => `${r.value}%`,
	Pc = (r) => `${r.value} %`,
	Lc = (r) => `${r.value}%`,
	Tc = (r) => `${r.value}%`,
	Dc = (r) => `${r.value}%`,
	zc = (r) => `${r.value}%`,
	$c = (r) => `${r.value}%`,
	Rc = (r) => `${r.value}%`,
	Mc = (r, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? wc(r)
			: t === "pt"
				? Cc(r)
				: t === "ch"
					? Ic(r)
					: t === "de"
						? jc(r)
						: t === "es"
							? Sc(r)
							: t === "fr"
								? Pc(r)
								: t === "it"
									? Lc(r)
									: t === "jp"
										? Tc(r)
										: t === "pl"
											? Dc(r)
											: t === "ru"
												? zc(r)
												: t === "uk"
													? $c(r)
													: Rc(r);
	},
	Uc = () => "Type of punishment",
	Kc = () => "Tipo de punição",
	Nc = () => "惩罚类型",
	Vc = () => "Art der Bestrafung",
	Fc = () => "Tipo de sanción",
	Bc = () => "Type de punition",
	Oc = () => "Tipo di punizione",
	Wc = () => "罰の種類",
	Ac = () => "Rodzaj kary",
	Ec = () => "Тип наказания",
	Hc = () => "Тип покарання",
	Gc = () => "Loại hình phạt",
	Yc = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? Uc()
			: t === "pt"
				? Kc()
				: t === "ch"
					? Nc()
					: t === "de"
						? Vc()
						: t === "es"
							? Fc()
							: t === "fr"
								? Bc()
								: t === "it"
									? Oc()
									: t === "jp"
										? Wc()
										: t === "pl"
											? Ac()
											: t === "ru"
												? Ec()
												: t === "uk"
													? Hc()
													: Gc();
	},
	qc = () => "Saved Views",
	Xc = () => "Visões salvas",
	Zc = () => "已保存的视图",
	Jc = () => "Gespeicherte Ansichten",
	Qc = () => "Vistas guardadas",
	tl = () => "Vues enregistrées",
	el = () => "Viste salvate",
	rl = () => "保存済みのビュー",
	nl = () => "Zapisane widoki",
	il = () => "Сохраненные представления",
	al = () => "Збережені перегляди",
	sl = () => "Chế độ xem đã lưu",
	Bn = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? qc()
			: t === "pt"
				? Xc()
				: t === "ch"
					? Zc()
					: t === "de"
						? Jc()
						: t === "es"
							? Qc()
							: t === "fr"
								? tl()
								: t === "it"
									? el()
									: t === "jp"
										? rl()
										: t === "pl"
											? nl()
											: t === "ru"
												? il()
												: t === "uk"
													? al()
													: sl();
	},
	ol = () => "Select view",
	ul = () => "Selecionar visão",
	cl = () => "选择视图",
	ll = () => "Ansicht auswählen",
	_l = () => "Seleccionar vista",
	dl = () => "Sélectionner la vue",
	vl = () => "Seleziona vista",
	fl = () => "ビューを選択",
	pl = () => "Wybierz widok",
	ml = () => "Выбрать вид",
	hl = () => "Оберіть вигляд",
	bl = () => "Chọn chế độ xem",
	gl = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? ol()
			: t === "pt"
				? ul()
				: t === "ch"
					? cl()
					: t === "de"
						? ll()
						: t === "es"
							? _l()
							: t === "fr"
								? dl()
								: t === "it"
									? vl()
									: t === "jp"
										? fl()
										: t === "pl"
											? pl()
											: t === "ru"
												? ml()
												: t === "uk"
													? hl()
													: bl();
	},
	xl = () => "Resolved",
	kl = () => "Resolvidos",
	yl = () => "已解决",
	wl = () => "Gelöst",
	Cl = () => "Resueltos",
	Il = () => "Résolus",
	jl = () => "Risolti",
	Sl = () => "解決済み",
	Pl = () => "Rozwiązane",
	Ll = () => "Решенные",
	Tl = () => "Вирішені",
	Dl = () => "Đã giải quyết",
	On = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? xl()
			: t === "pt"
				? kl()
				: t === "ch"
					? yl()
					: t === "de"
						? wl()
						: t === "es"
							? Cl()
							: t === "fr"
								? Il()
								: t === "it"
									? jl()
									: t === "jp"
										? Sl()
										: t === "pl"
											? Pl()
											: t === "ru"
												? Ll()
												: t === "uk"
													? Tl()
													: Dl();
	},
	zl = () => "UTC",
	$l = () => "UTC",
	Rl = () => "UTC",
	Ml = () => "UTC",
	Ul = () => "UTC",
	Kl = () => "UTC",
	Nl = () => "UTC",
	Vl = () => "UTC",
	Fl = () => "UTC",
	Bl = () => "UTC",
	Ol = () => "UTC",
	Wl = () => "UTC",
	Al = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? zl()
			: t === "pt"
				? $l()
				: t === "ch"
					? Rl()
					: t === "de"
						? Ml()
						: t === "es"
							? Ul()
							: t === "fr"
								? Kl()
								: t === "it"
									? Nl()
									: t === "jp"
										? Vl()
										: t === "pl"
											? Fl()
											: t === "ru"
												? Bl()
												: t === "uk"
													? Ol()
													: Wl();
	},
	El = () => "View name",
	Hl = () => "Nome da visão",
	Gl = () => "视图名称",
	Yl = () => "Name der Ansicht",
	ql = () => "Nombre de la vista",
	Xl = () => "Nom de la vue",
	Zl = () => "Nome della vista",
	Jl = () => "ビュー名",
	Ql = () => "Nazwa widoku",
	t_ = () => "Название вида",
	e_ = () => "Назва подання",
	r_ = () => "Tên khung nhìn",
	n_ = (r = {}, l = {}) => {
		const t = l.locale ?? R();
		return t === "en"
			? El()
			: t === "pt"
				? Hl()
				: t === "ch"
					? Gl()
					: t === "de"
						? Yl()
						: t === "es"
							? ql()
							: t === "fr"
								? Xl()
								: t === "it"
									? Zl()
									: t === "jp"
										? Jl()
										: t === "pl"
											? Ql()
											: t === "ru"
												? t_()
												: t === "uk"
													? e_()
													: r_();
	};
var i_ = L(
		'<div class="chart-hover-tip svelte-1hd60bo"><div class="chart-hover-date svelte-1hd60bo"> </div> <div class="chart-hover-value svelte-1hd60bo"><span class="chart-hover-dot svelte-1hd60bo"></span> <span> </span> <span class="chart-hover-num svelte-1hd60bo"> </span></div></div>',
	),
	a_ = L('<button type="button"> </button>'),
	s_ = L('<div class="join"></div>'),
	o_ = L('<span class="chart-metric-previous svelte-1hd60bo"> </span>'),
	u_ = L(
		'<label class="chart-metric svelte-1hd60bo"><input type="checkbox" class="checkbox checkbox-xs"/> <span class="chart-legend svelte-1hd60bo"></span> <span class="chart-metric-text svelte-1hd60bo"><span> </span> <span class="chart-metric-values svelte-1hd60bo"><span class="chart-metric-current svelte-1hd60bo"> </span> <!></span></span></label>',
	),
	c_ = Ni('<path class="chart-line svelte-1hd60bo"></path>'),
	l_ = L(
		'<div class="chart-lines svelte-1hd60bo"><svg viewBox="0 0 1 1" preserveAspectRatio="none" class="svelte-1hd60bo"></svg></div>',
	),
	__ = L(
		'<div class="chart-hover svelte-1hd60bo"><div class="chart-hover-x svelte-1hd60bo"></div> <div class="chart-hover-y svelte-1hd60bo"></div></div>',
	),
	d_ = L('<div class="chart-bar svelte-1hd60bo"></div>'),
	v_ = L('<div class="chart-bucket svelte-1hd60bo"><!></div>'),
	f_ = L('<!> <div role="presentation"><!> <!></div>', 1),
	p_ = L('<div class="chart-empty svelte-1hd60bo"> </div>'),
	m_ = L(
		'<!> <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><div class="text-sm font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div></div> <div class="flex flex-wrap items-center gap-2"><!> <div class="join"><button type="button"> </button> <button type="button"> </button></div></div></div> <div class="chart-metrics mt-3 svelte-1hd60bo"></div> <div class="chart-surface mt-3 svelte-1hd60bo"><div><div class="chart-inner svelte-1hd60bo"><div class="chart-grid svelte-1hd60bo"></div> <!></div></div></div> <div class="text-base-content/60 mt-2 flex items-center justify-between text-xs"><div> </div> <div class="font-medium"> </div> <div> </div></div>',
		1,
	);
function h_(r, l) {
	An(l, !0);
	let t = W(l, "chartMetricKeys", 19, () => []),
		Ht = W(l, "chartDefaultSelected", 19, () => []),
		c = W(l, "currentMetrics", 3, null),
		Q = W(l, "previousMetrics", 3, null),
		ot = W(l, "currentTotalValue", 3, 0),
		dt = W(l, "previousTotalValue", 3, 0),
		S = W(l, "series", 19, () => []),
		yt = W(l, "compare", 3, !1),
		he = W(l, "startLocal", 3, ""),
		be = W(l, "endLocal", 3, ""),
		wt = W(l, "startIso", 3, ""),
		Ct = W(l, "endIso", 3, "");
	(W(l, "previousStartIso", 3, ""), W(l, "previousEndIso", 3, ""));
	let it = W(l, "granularity", 3, "day"),
		Dt = W(l, "noDataLabel", 3, ""),
		It = W(l, "barsLabel", 19, () => Wa()),
		jt = W(l, "lineLabel", 19, () => yc()),
		ge = W(l, "granularityOptions", 19, () => []),
		Gt = W(l, "chartTitle", 3, "Chart"),
		vt = g(kr(new Set())),
		zt = g(!1),
		ut = g(kr([])),
		at = g(kr([])),
		mt = g(0),
		B = g(0),
		X = g("bars"),
		xe = g(0),
		ht = g(null),
		ct = g(null),
		$t = g(!1),
		ae = g(null),
		Qe = g(0),
		tr = g(0),
		tt = g(!1),
		ke = g(0),
		lt = g(0),
		St = g(0),
		Pt = g(0),
		er = g(""),
		se = g(""),
		st = g(null);
	(hr(() => {
		const d = Ht(),
			f = t();
		if (!e(zt) && !(e(vt).size > 0)) {
			if (d.length > 0) {
				o(vt, new Set(d), !0);
				return;
			}
			f.length > 0 && o(vt, new Set([f[0]]), !0);
		}
	}),
		hr(() => {
			(e(X), o(tt, !1), o(st, null));
		}),
		hr(() => {
			const d = e(at).length,
				f = e(ut).length;
			let p = e(X) === "line" ? 16 : 10 + f * 8;
			(p < 16 && (p = 16), o(xe, d > 0 ? Math.ceil(d * p + 16) : 0, !0));
		}),
		hr(() => {
			(S(), c(), Q(), it(), he(), be(), yt(), e(vt), t(), ce());
		}));
	function wr(d) {
		o(zt, !0);
		const f = new Set(e(vt));
		(f.has(d) ? f.delete(d) : f.add(d), o(vt, f, !0), ce());
	}
	function Cr(d) {
		if (e(mt) <= 0) return "0%";
		const f = d * e(B) * 100;
		return !Number.isFinite(f) || f <= 0 ? "0%" : `${f.toFixed(2)}%`;
	}
	function oe(d) {
		if (!Number.isFinite(d)) return "-";
		const f = Math.round(d);
		return Math.abs(d - f) < 0.05 ? String(f) : d.toFixed(1);
	}
	function rr(d, f) {
		if (!d) return "-";
		const b = l.chartMetricValue(d, f);
		return Number.isFinite(b) ? oe(b) : "-";
	}
	function Ir(d) {
		if (!c() || !Q()) return "";
		const f = l.chartMetricValue(c(), d),
			b = l.chartMetricValue(Q(), d);
		if (!Number.isFinite(f) || !Number.isFinite(b)) return "";
		const p = f - b;
		return p === 0 ? "" : ` (${p > 0 ? "+" : "-"}${oe(Math.abs(p))})`;
	}
	function Yt(d) {
		const f = e(at),
			b = f.length;
		if (b === 0 || e(B) <= 0) return "";
		let p = "";
		const x = b;
		for (let w = 0; w < b; w += 1) {
			const C = f[w][d],
				M = (w + 0.5) / x,
				U = 1 - C * e(B);
			Number.isFinite(U) &&
				(p === ""
					? (p = `M${M.toFixed(4)} ${U.toFixed(4)}`)
					: (p += `L${M.toFixed(4)} ${U.toFixed(4)}`));
		}
		return p;
	}
	function jr(d) {
		if (e($t) || !e(ht)) return;
		const f = e(at),
			b = e(ut);
		if (f.length === 0 || b.length === 0 || e(B) <= 0) {
			(o(tt, !1), o(st, null));
			return;
		}
		const p = e(ht).getBoundingClientRect();
		if (p.width <= 0 || p.height <= 0) return;
		const x = getComputedStyle(e(ht)),
			w = parseFloat(x.paddingLeft) || 0,
			C = parseFloat(x.paddingRight) || 0,
			M = parseFloat(x.paddingTop) || 0,
			U = parseFloat(x.paddingBottom) || 0,
			j = p.width - w - C,
			D = p.height - M - U;
		if (j <= 0 || D <= 0) return;
		const z = d.clientX - p.left - w,
			Z = d.clientY - p.top - M;
		if (z < 0 || Z < 0 || z > j || Z > D) {
			(o(tt, !1), o(st, null));
			return;
		}
		const O = f.length,
			$ = e(ht).getElementsByClassName("chart-bucket");
		if ($.length === 0) return;
		const K = $[0].getBoundingClientRect();
		let y = K.width;
		if (!Number.isFinite(y) || y <= 0) return;
		let P = y;
		if (O > 1 && $.length > 1) {
			const Bt = $[1].getBoundingClientRect().left - K.left;
			Bt > 0 && (P = Bt);
		}
		const Y = K.left - p.left - w;
		let k = Math.round((z - (Y + y / 2)) / P);
		(k < 0 && (k = 0), k >= O && (k = O - 1));
		const rt = f[k],
			G = k >= 0 && k < $.length ? $[k] : null;
		let Kt = Y + k * P,
			_t = y;
		if (G) {
			const nt = G.getBoundingClientRect();
			((Kt = nt.left - p.left - w), (_t = nt.width));
		}
		const $r = b.length;
		let Tt = 0,
			Pe = Number.POSITIVE_INFINITY,
			Nt = Number.POSITIVE_INFINITY,
			lr = 0,
			re = D,
			_r = Kt + _t / 2;
		const fe = G ? G.getBoundingClientRect() : null;
		fe && (_r = fe.left - p.left - w + fe.width / 2);
		const Vt =
				e(X) === "bars" && G ? G.getElementsByClassName("chart-bar") : null,
			Rr = Vt ? Vt.length : 0;
		for (let nt = 0; nt < $r; nt += 1) {
			const Ft = rt[nt];
			let Bt = _r,
				xt = D;
			if (Vt && nt < Rr) {
				const At = Vt[nt].getBoundingClientRect();
				((Bt = At.left - p.left - w + At.width / 2), (xt = At.top - p.top - M));
			} else {
				const vr = Ft * e(B) * D;
				xt = D - vr;
			}
			const dr = z - Bt,
				Ot = Z - xt,
				Le = dr * dr,
				Wt = Ot * Ot;
			(Le < Pe || (Le === Pe && Wt < Nt)) &&
				((Pe = Le), (Nt = Wt), (Tt = nt), (re = xt), (lr = Bt));
		}
		(o(ke, lr + w),
			o(lt, re + M),
			o(St, p.left + e(ke)),
			o(Pt, p.top + e(lt)),
			o(st, b[Tt] ?? null, !0),
			o(er, l.bucketLabel ? l.bucketLabel(k) : "-", !0),
			o(se, oe(rt[Tt] ?? 0), !0),
			o(tt, e(st) !== null));
	}
	function Sr() {
		(o(tt, !1), o(st, null));
	}
	function ye(d) {
		e(ct) &&
			((d.pointerType === "mouse" && d.button !== 0) ||
				(o($t, !0),
				o(ae, d.pointerId, !0),
				o(Qe, d.clientX, !0),
				o(tr, e(ct).scrollLeft, !0),
				o(tt, !1),
				o(st, null),
				e(ct).setPointerCapture(d.pointerId)));
	}
	function nr(d) {
		if (!e(ct) || !e($t) || e(ae) !== d.pointerId) return;
		const f = d.clientX - e(Qe);
		f !== 0 && (e(ct).scrollLeft = e(tr) - f);
	}
	function ue(d) {
		e(ct) &&
			(!e($t) ||
				e(ae) !== d.pointerId ||
				(o($t, !1), o(ae, null), e(ct).releasePointerCapture(d.pointerId)));
	}
	function ce() {
		if ((o(tt, !1), o(st, null), !c())) {
			(o(at, [], !0), o(ut, [], !0), o(mt, 0), o(B, 0));
			return;
		}
		const d = [];
		for (let y = 0; y < t().length; y += 1) {
			const P = t()[y];
			e(vt).has(P) && d.push(P);
		}
		if (d.length === 0) {
			(o(at, [], !0), o(ut, [], !0), o(mt, 0), o(B, 0));
			return;
		}
		const f = d.length;
		if (S() && S().length > 0) {
			const y = S().length,
				P = new Array(y);
			let Y = 0;
			for (let k = 0; k < y; k += 1) {
				const rt = new Array(f);
				for (let G = 0; G < f; G += 1) {
					const Kt = l.chartMetricValue(S()[k], d[G]),
						_t = Number.isFinite(Kt) && Kt > 0 ? Kt : 0;
					((rt[G] = _t), _t > Y && (Y = _t));
				}
				P[k] = rt;
			}
			(o(at, P, !0), o(ut, d, !0), o(mt, Y, !0), o(B, Y > 0 ? 1 / Y : 0, !0));
			return;
		}
		if (wt() === "" || Ct() === "") {
			(o(at, [], !0), o(ut, [], !0), o(mt, 0), o(B, 0));
			return;
		}
		const b = Date.parse(wt()),
			p = Date.parse(Ct());
		if (!Number.isFinite(b) || !Number.isFinite(p) || p <= b) {
			(o(at, [], !0), o(ut, [], !0), o(mt, 0), o(B, 0));
			return;
		}
		const x = p - b,
			w = l.granularityBucketMs(it());
		let C = Math.ceil(x / w);
		C < 1 && (C = 1);
		const M = l.granularityMaxBuckets(it());
		C > M && (C = M);
		const U = new Array(C),
			j = ot(),
			D = yt() && Q() ? dt() : j;
		if (C === 1) U[0] = j;
		else {
			const y = D / C,
				P = j / C,
				Y = C - 1;
			for (let k = 0; k < C; k += 1) {
				const rt = k / Y,
					G = y + (P - y) * rt;
				U[k] = G;
			}
		}
		const z = ot(),
			Z = z > 0 ? 1 / z : 0,
			O = new Array(f);
		for (let y = 0; y < f; y += 1) {
			const P = d[y],
				Y = l.chartMetricValue(c(), P);
			O[y] = P === "totalCount" ? 1 : Y * Z;
		}
		const $ = U.length,
			H = new Array($);
		let K = 0;
		for (let y = 0; y < $; y += 1) {
			const P = new Array(f),
				Y = U[y];
			for (let k = 0; k < f; k += 1) {
				const rt = Y * O[k];
				((P[k] = rt), rt > K && (K = rt));
			}
			H[y] = P;
		}
		(o(at, H, !0), o(ut, d, !0), o(mt, K, !0), o(B, K > 0 ? 1 / K : 0, !0));
	}
	var ir = m_(),
		we = yr(ir);
	{
		var Pr = (d) => {
			var f = i_(),
				b = a(f),
				p = a(b, !0);
			i(b);
			var x = s(b, 2),
				w = a(x),
				C = s(w, 2),
				M = a(C, !0);
			i(C);
			var U = s(C, 2),
				j = a(U, !0);
			(i(U),
				i(x),
				i(f),
				T(
					(D) => {
						(Ze(f, `left:${e(St)}px; top:${e(Pt) - 20}px`),
							_(p, e(er)),
							E(w, "data-series", e(st)),
							_(M, D),
							_(j, e(se)));
					},
					[() => l.chartMetricLabel(e(st))],
				),
				I(d, f));
		};
		J(we, (d) => {
			e(tt) && e(st) && d(Pr);
		});
	}
	var qt = s(we, 2),
		Xt = a(qt),
		Zt = a(Xt),
		Lr = a(Zt, !0);
	i(Zt);
	var le = s(Zt, 2),
		_e = a(le);
	(i(le), i(Xt));
	var ar = s(Xt, 2),
		Rt = a(ar);
	{
		var Tr = (d) => {
			var f = s_();
			(pe(f, 21, ge, me, (b, p) => {
				var x = a_();
				let w;
				var C = a(x, !0);
				(i(x),
					T(
						(M) => {
							((w = Xe(x, 1, "btn btn-sm join-item", null, w, {
								"btn-active": it() === e(p),
							})),
								E(x, "aria-pressed", it() === e(p)),
								_(C, M));
						},
						[() => l.granularityLabel(e(p))],
					),
					A("click", x, () => {
						it() !== e(p) && l.onGranularityChange(e(p));
					}),
					I(b, x));
			}),
				i(f),
				I(d, f));
		};
		J(Rt, (d) => {
			ge().length > 0 && d(Tr);
		});
	}
	var de = s(Rt, 2),
		bt = a(de);
	let sr;
	var ve = a(bt, !0);
	i(bt);
	var ft = s(bt, 2);
	let or;
	var Jt = a(ft, !0);
	(i(ft), i(de), i(ar), i(qt));
	var Ce = s(qt, 2);
	(pe(Ce, 21, t, me, (d, f) => {
		var b = u_(),
			p = a(b);
		ie(p);
		var x = s(p, 2),
			w = s(x, 2),
			C = a(w),
			M = a(C, !0);
		i(C);
		var U = s(C, 2),
			j = a(U),
			D = a(j, !0);
		i(j);
		var z = s(j, 2);
		{
			var Z = (O) => {
				var $ = o_(),
					H = a($);
				(i($),
					T(
						(K, y, P) => {
							(E($, "title", K), _(H, `${y ?? ""}${P ?? ""}`));
						},
						[() => pt(), () => rr(Q(), e(f)), () => Ir(e(f))],
					),
					I(O, $));
			};
			J(z, (O) => {
				yt() && Q() && O(Z);
			});
		}
		(i(U),
			i(w),
			i(b),
			T(
				(O, $, H) => {
					(Wi(p, O), E(x, "data-series", e(f)), _(M, $), _(D, H));
				},
				[
					() => e(vt).has(e(f)),
					() => l.chartMetricLabel(e(f)),
					() => rr(c(), e(f)),
				],
			),
			A("change", p, () => wr(e(f))),
			I(d, b));
	}),
		i(Ce));
	var Lt = s(Ce, 2),
		gt = a(Lt);
	let Mt;
	var Ie = a(gt),
		Qt = s(a(Ie), 2);
	{
		var Dr = (d) => {
				var f = f_(),
					b = yr(f);
				{
					var p = (j) => {
						var D = l_(),
							z = a(D);
						(pe(
							z,
							21,
							() => e(ut),
							me,
							(Z, O, $) => {
								var H = c_();
								(T(
									(K) => {
										(E(H, "data-series", e(O)), E(H, "d", K));
									},
									[() => Yt($)],
								),
									I(Z, H));
							},
						),
							i(z),
							i(D),
							I(j, D));
					};
					J(b, (j) => {
						e(X) === "line" && j(p);
					});
				}
				var x = s(b, 2);
				let w;
				var C = a(x);
				{
					var M = (j) => {
						var D = __(),
							z = a(D),
							Z = s(z, 2);
						(i(D),
							T(() => {
								(Ze(z, `left:${e(ke)}px`), Ze(Z, `top:${e(lt)}px`));
							}),
							I(j, D));
					};
					J(C, (j) => {
						e(tt) && e(st) && j(M);
					});
				}
				var U = s(C, 2);
				(pe(
					U,
					17,
					() => e(at),
					me,
					(j, D) => {
						var z = v_(),
							Z = a(z);
						{
							var O = ($) => {
								var H = Ki(),
									K = yr(H);
								(pe(
									K,
									17,
									() => e(D),
									me,
									(y, P, Y) => {
										var k = d_();
										(T(
											(rt) => {
												(E(k, "data-series", e(ut)[Y]), Ze(k, rt));
											},
											[() => `height:${Cr(e(P))}`],
										),
											I(y, k));
									},
								),
									I($, H));
							};
							J(Z, ($) => {
								e(X) === "bars" && $(O);
							});
						}
						(i(z), I(j, z));
					},
				),
					i(x),
					Rn(
						x,
						(j) => o(ht, j),
						() => e(ht),
					),
					T(
						() =>
							(w = Xe(x, 1, "chart-bars svelte-1hd60bo", null, w, {
								"chart-bars-line": e(X) === "line",
							})),
					),
					A("mousemove", x, jr),
					Pn("mouseleave", x, Sr),
					I(d, f));
			},
			te = (d) => {
				var f = p_(),
					b = a(f, !0);
				(i(f), T(() => _(b, Dt())), I(d, f));
			};
		J(Qt, (d) => {
			e(at).length > 0 && e(ut).length > 0 ? d(Dr) : d(te, !1);
		});
	}
	(i(Ie),
		i(gt),
		Rn(
			gt,
			(d) => o(ct, d),
			() => e(ct),
		),
		i(Lt));
	var ur = s(Lt, 2),
		Ut = a(ur),
		zr = a(Ut, !0);
	i(Ut);
	var ee = s(Ut, 2),
		je = a(ee, !0);
	i(ee);
	var cr = s(ee, 2),
		Se = a(cr, !0);
	(i(cr),
		i(ur),
		T(
			(d, f, b, p, x) => {
				(_(Lr, Gt()),
					_(_e, `${d ?? ""} - ${f ?? ""}`),
					(sr = Xe(bt, 1, "btn btn-sm join-item", null, sr, {
						"btn-active": e(X) === "bars",
					})),
					E(bt, "aria-pressed", e(X) === "bars"),
					_(ve, It()),
					(or = Xe(ft, 1, "btn btn-sm join-item", null, or, {
						"btn-active": e(X) === "line",
					})),
					E(ft, "aria-pressed", e(X) === "line"),
					_(Jt, jt()),
					(Mt = Xe(gt, 1, "chart-scroll svelte-1hd60bo", null, Mt, {
						"chart-scroll-dragging": e($t),
					})),
					Ze(Ie, `min-width:${e(xe)}px`),
					_(zr, b),
					_(je, p),
					_(Se, x));
			},
			[
				() => l.formatRangeLabel(he()),
				() => l.formatRangeLabel(be()),
				() => l.formatRangeLabel(he()),
				() => l.granularityLabel(it()),
				() => l.formatRangeLabel(be()),
			],
		),
		A("click", bt, () => {
			e(X) !== "bars" && o(X, "bars");
		}),
		A("click", ft, () => {
			e(X) !== "line" && o(X, "line");
		}),
		A("pointerdown", gt, ye),
		A("pointermove", gt, nr),
		A("pointerup", gt, ue),
		Pn("pointercancel", gt, ue),
		I(r, ir),
		En());
}
Wn(["click", "change", "pointerdown", "pointermove", "pointerup", "mousemove"]);
var b_ = L("<option> </option>"),
	g_ = L(
		'<div class="flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>',
	),
	x_ = L('<div class="text-error"> </div>'),
	k_ = L('<div class="text-base-content/60 mb-2 text-xs"> </div>'),
	y_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	w_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	C_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	I_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	j_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	S_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	P_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	L_ = L('<div class="text-base-content/60 text-xs"> </div>'),
	T_ = L(
		'<!> <div class="grid grid-cols-2 gap-3 sm:grid-cols-4"><div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div> <!></div> <div class="rounded-box border-base-300 bg-base-100 border p-4 shadow-sm"><div class="text-base-content/60 text-xs font-medium tracking-wide uppercase"> </div> <div class="mt-1 text-2xl font-semibold"> </div> <div class="text-base-content/60 text-xs"> </div> <!></div></div> <div class="rounded-box border-base-300 bg-base-100 mt-4 border p-4 shadow-sm"><!></div>',
		1,
	),
	D_ = L('<div class="text-base-content/70"> </div>'),
	z_ = L(
		'<section class="rounded-box border-base-300 bg-base-100 border p-4 shadow"><div><div><h2 class="text-2xl font-semibold tracking-tight text-nowrap"> </h2> <p class="text-base-content/70 mt-1 mb-4 text-sm"> </p></div> <div class="mb-4 flex flex-col gap-4 lg:flex-row lg:justify-between"><form class="rounded-box border-base-300 bg-base-200/60 grid w-full grid-cols-4 items-center justify-between gap-3 border p-3 shadow-sm"><div class="z-10 h-full align-top text-sm text-nowrap"> </div> <div class="col-start-4 flex gap-2 justify-self-end"><button type="submit" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-circle btn-sm"><!></button></div> <label class="form-control col-start-1"><div class="label-text text-sm"> </div> <select class="select select-bordered select-sm min-w-fit"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></label> <label class="form-control"><div class="label-text text-sm"> </div> <input type="datetime-local" class="input input-bordered input-sm min-w-fit"/></label> <label class="form-control"><div class="label-text text-sm"> </div> <input type="datetime-local" class="input input-bordered input-sm min-w-fit"/></label> <label class="form-control col-start-1"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm"/></label> <label class="form-control"><span class="label-text text-sm"> </span> <select class="select select-bordered select-sm"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></label> <label class="form-control"><span class="label-text text-sm"> </span> <select class="select select-bordered select-sm"><option> </option><option> </option><option> </option><option> </option><option> </option></select></label></form></div> <div class="rounded-box border-base-300 bg-base-200/40 mb-4 border p-3"><div class="mb-2 text-sm font-semibold"> </div> <div class="grid grid-cols-1 gap-2 lg:grid-cols-4"><label class="form-control"><span class="label-text text-sm"> </span> <select class="select select-bordered select-sm"><option> </option><!></select></label> <label class="form-control"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm"/></label> <label class="flex items-center gap-2 pt-5 lg:justify-self-center"><input type="checkbox" class="checkbox checkbox-sm"/> <span class="text-sm"> </span></label> <div class="col-start-1 flex items-end gap-2 justify-self-end lg:col-start-4"><button type="button" class="btn btn-primary btn-sm"> </button> <button type="button" class="btn btn-outline btn-sm"> </button></div></div></div> <!></div></section>',
	);
function gd(r, l) {
	An(l, !0);
	let t = g(!1),
		Ht = g(null),
		c = g(null),
		Q = g("last_24h"),
		ot = g(""),
		dt = g(""),
		S = g(!1),
		yt = g("day");
	const he = [
			"ignoredCount",
			"timeoutCount",
			"banCount",
			"openCount",
			"solvedCount",
			"totalCount",
			"overturnedCount",
			"reportedUsersCount",
		],
		be = ["hour", "day", "month"];
	let wt = g(""),
		Ct = g(""),
		it = g(""),
		Dt = g(""),
		It = g(""),
		jt = g(""),
		ge = g(kr([]));
	const Gt = "tickets_kpi_view:";
	function vt(n) {
		return n.toISOString().slice(0, 16);
	}
	function zt(n) {
		if (!n) return null;
		const u = new Date(n + ":00Z");
		return Number.isNaN(u.getTime()) ? null : u.toISOString();
	}
	function ut() {
		return new Date();
	}
	function at(n) {
		o(Q, n, !0);
		const u = ut();
		let v,
			q = u;
		switch (n) {
			case "last_15m":
				v = new Date(u.getTime() - 15 * Et.minute);
				break;
			case "last_1h":
				v = new Date(u.getTime() - 60 * Et.minute);
				break;
			case "today": {
				v = new Date(
					Date.UTC(
						u.getUTCFullYear(),
						u.getUTCMonth(),
						u.getUTCDate(),
						0,
						0,
						0,
						0,
					),
				);
				break;
			}
			case "last_7d":
				v = new Date(u.getTime() - 7 * Et.day);
				break;
			case "last_30d":
				v = new Date(u.getTime() - 30 * Et.day);
				break;
			case "this_month": {
				v = new Date(
					Date.UTC(u.getUTCFullYear(), u.getUTCMonth(), 1, 0, 0, 0, 0),
				);
				break;
			}
			case "last_24h":
			default:
				v = new Date(u.getTime() - 24 * Et.hour);
				break;
		}
		(o(ot, vt(v), !0), o(dt, vt(q), !0));
	}
	function mt() {
		const n = xr.url.searchParams;
		(o(Q, n.get("preset") ?? "last_24h", !0),
			o(ot, n.get("start") ?? "", !0),
			o(dt, n.get("end") ?? "", !0),
			o(S, n.get("compare") === "1"),
			o(wt, n.get("userId") ?? "", !0),
			o(Ct, n.get("allianceId") ?? "", !0),
			o(it, n.get("reason") ?? "", !0),
			o(Dt, n.get("punishment") ?? "", !0),
			(!e(ot) || !e(dt)) && at(e(Q)));
	}
	function B(n = !0) {
		const u = X();
		gr(`${xr.url.pathname}?${u.toString()}`, { replaceState: n });
	}
	function X() {
		const n = new URLSearchParams(xr.url.searchParams);
		return (
			n.set("preset", e(Q)),
			n.set("start", e(ot)),
			n.set("end", e(dt)),
			e(S) ? n.set("compare", "1") : n.delete("compare"),
			e(wt).trim() !== "" ? n.set("userId", e(wt).trim()) : n.delete("userId"),
			e(Ct).trim() !== ""
				? n.set("allianceId", e(Ct).trim())
				: n.delete("allianceId"),
			e(it).trim() !== "" ? n.set("reason", e(it).trim()) : n.delete("reason"),
			e(Dt).trim() !== ""
				? n.set("punishment", e(Dt).trim())
				: n.delete("punishment"),
			n
		);
	}
	function xe(n) {
		const u = n.trim();
		if (u === "") return;
		const v = Number(u);
		if (!(!Number.isInteger(v) || v <= 0)) return v;
	}
	const ht = [
			"doxxing",
			"inappropriate-content",
			"hate-speech",
			"bot",
			"griefing",
			"multi-accounting",
			"other",
		],
		ct = ["open", "ignore", "timeout", "ban"];
	function $t(n) {
		for (let u = 0; u < ht.length; u += 1) if (ht[u] === n) return ht[u];
	}
	function ae(n) {
		for (let u = 0; u < ct.length; u += 1) if (ct[u] === n) return ct[u];
	}
	function Qe(n) {
		return n === "ignoredCount"
			? In()
			: n === "timeoutCount"
				? Sn()
				: n === "banCount"
					? Cn()
					: n === "openCount"
						? jn()
						: n === "solvedCount"
							? On()
							: n === "totalCount"
								? Fn()
								: n === "overturnedCount"
									? Kn()
									: Nn();
	}
	function tr(n, u) {
		return u === "ignoredCount"
			? n.ignoredCount
			: u === "timeoutCount"
				? n.timeoutCount
				: u === "banCount"
					? n.banCount
					: u === "openCount"
						? n.openCount
						: u === "solvedCount"
							? n.solvedCount
							: u === "totalCount"
								? n.totalCount
								: u === "overturnedCount"
									? n.overturnedCount
									: n.reportedUsersCount;
	}
	function tt(n) {
		return Mc({ value: n.toFixed(1) });
	}
	function ke(n, u) {
		if (u == null || !Number.isFinite(u)) return null;
		const v = n - u;
		return v === 0 ? null : v > 0 ? `+${v}` : String(v);
	}
	function lt(n, u) {
		const v = ke(n, u);
		return v ? `(${v})` : "";
	}
	function St(n, u) {
		if (u == null || !Number.isFinite(u)) return "";
		const v = n - u;
		if (v === 0) return "";
		const q = v > 0 ? "+" : "-",
			et = Math.abs(v);
		return `(${q}${et.toFixed(1)})`;
	}
	async function Pt() {
		const n = zt(e(ot)),
			u = zt(e(dt));
		if (!n || !u) {
			(o(Ht, vo(), !0), o(c, null));
			return;
		}
		try {
			(o(t, !0), o(Ht, null));
			const v = xe(e(wt)),
				q = xe(e(Ct)),
				et = $t(e(it).trim()),
				kt = ae(e(Dt).trim());
			o(
				c,
				await Zi.getTicketsKpi({
					startIso: n,
					endIso: u,
					compare: e(S),
					userId: v,
					allianceId: q,
					reason: et,
					punishment: kt,
					granularity: e(yt),
				}),
				!0,
			);
		} catch (v) {
			if (
				(v == null ? void 0 : v.status) === 403 ||
				(v == null ? void 0 : v.status) === 401
			) {
				gr("/404");
				return;
			}
			(o(Ht, (v == null ? void 0 : v.message) ?? aa(), !0), o(c, null));
		} finally {
			o(t, !1);
		}
	}
	function er(n) {
		(n.preventDefault(), B(!1), Pt());
	}
	function se() {
		if (typeof localStorage > "u") return;
		const n = [];
		for (let u = 0; u < localStorage.length; u += 1) {
			const v = localStorage.key(u);
			v !== null && v.startsWith(Gt) && n.push(v.slice(Gt.length));
		}
		(n.sort((u, v) => u.localeCompare(v)), o(ge, n, !0));
	}
	function st() {
		if (typeof localStorage > "u") return;
		const n = e(It).trim();
		if (n === "") return;
		const u = X();
		(localStorage.setItem(Gt + n, u.toString()),
			o(It, n, !0),
			o(jt, n, !0),
			se());
	}
	async function wr(n) {
		if (typeof localStorage > "u") return;
		const u = n.trim();
		if (u === "") return;
		const v = localStorage.getItem(Gt + u);
		v !== null &&
			(await gr(`${xr.url.pathname}?${v}`, { replaceState: !1 }),
			mt(),
			await Pt());
	}
	function Cr() {
		if (typeof localStorage > "u") return;
		const n = e(jt).trim();
		n !== "" && (localStorage.removeItem(Gt + n), o(jt, ""), se());
	}
	Ui(async () => {
		if (!Ji.hasPermission(Qi.dashboard.kpi.tickets)) {
			gr("/404");
			return;
		}
		(mt(), se(), await Pt());
	});
	function oe(n) {
		return n === "hour" ? Et.hour : n === "day" ? Et.day : 30 * Et.day;
	}
	function rr(n) {
		return n === "hour" ? 72 : n === "day" ? 90 : 36;
	}
	function Ir(n) {
		return n === "hour" ? Qs() : n === "day" ? Fs() : _a();
	}
	function Yt(n) {
		const u = n.trim();
		if (u === "") return "-";
		const v = u.indexOf("T");
		return v === -1 ? u : `${u.slice(0, v)} ${u.slice(v + 1)}`;
	}
	function jr(n) {
		if (!e(c)) return "-";
		const u = e(c).series;
		if (u.length > 0 && n >= 0 && n < u.length) return Yt(u[n].bucketUtc);
		const v = zt(e(ot));
		if (v === null) return "-";
		const q = Date.parse(v);
		if (!Number.isFinite(q)) return "-";
		const et = oe(e(yt)),
			kt = q + n * et;
		return Number.isFinite(kt) ? Yt(new Date(kt).toISOString()) : "-";
	}
	function Sr(n) {
		e(yt) !== n && (o(yt, n, !0), Pt());
	}
	var ye = z_();
	Oi("enw5i8", (n) => {
		Vi(
			(u) => {
				Fi.title = u ?? "";
			},
			[() => Vo({ section: Vn() })],
		);
	});
	var nr = a(ye),
		ue = a(nr),
		ce = a(ue),
		ir = a(ce, !0);
	i(ce);
	var we = s(ce, 2),
		Pr = a(we, !0);
	(i(we), i(ue));
	var qt = s(ue, 2),
		Xt = a(qt),
		Zt = a(Xt),
		Lr = a(Zt, !0);
	i(Zt);
	var le = s(Zt, 2),
		_e = a(le),
		ar = a(_e, !0);
	i(_e);
	var Rt = s(_e, 2),
		Tr = a(Rt);
	(ta(Tr, { class: "size-4" }), i(Rt), i(le));
	var de = s(le, 2),
		bt = a(de),
		sr = a(bt, !0);
	i(bt);
	var ve = s(bt, 2),
		ft = a(ve),
		or = a(ft, !0);
	(i(ft), (ft.value = ft.__value = "last_15m"));
	var Jt = s(ft),
		Ce = a(Jt, !0);
	(i(Jt), (Jt.value = Jt.__value = "last_1h"));
	var Lt = s(Jt),
		gt = a(Lt, !0);
	(i(Lt), (Lt.value = Lt.__value = "last_24h"));
	var Mt = s(Lt),
		Ie = a(Mt, !0);
	(i(Mt), (Mt.value = Mt.__value = "today"));
	var Qt = s(Mt),
		Dr = a(Qt, !0);
	(i(Qt), (Qt.value = Qt.__value = "last_7d"));
	var te = s(Qt),
		ur = a(te, !0);
	(i(te), (te.value = te.__value = "last_30d"));
	var Ut = s(te),
		zr = a(Ut, !0);
	(i(Ut), (Ut.value = Ut.__value = "this_month"), i(ve), i(de));
	var ee = s(de, 2),
		je = a(ee),
		cr = a(je, !0);
	i(je);
	var Se = s(je, 2);
	(ie(Se), i(ee));
	var d = s(ee, 2),
		f = a(d),
		b = a(f, !0);
	i(f);
	var p = s(f, 2);
	(ie(p), i(d));
	var x = s(d, 2),
		w = a(x),
		C = a(w, !0);
	i(w);
	var M = s(w, 2);
	(ie(M), i(x));
	var U = s(x, 2),
		j = a(U),
		D = a(j, !0);
	i(j);
	var z = s(j, 2);
	(ie(z), i(U));
	var Z = s(U, 2),
		O = a(Z),
		$ = a(O, !0);
	i(O);
	var H = s(O, 2),
		K = a(H),
		y = a(K, !0);
	(i(K), (K.value = K.__value = ""));
	var P = s(K),
		Y = a(P, !0);
	(i(P), (P.value = P.__value = "doxxing"));
	var k = s(P),
		rt = a(k, !0);
	(i(k), (k.value = k.__value = "inappropriate-content"));
	var G = s(k),
		Kt = a(G, !0);
	(i(G), (G.value = G.__value = "hate-speech"));
	var _t = s(G),
		$r = a(_t, !0);
	(i(_t), (_t.value = _t.__value = "bot"));
	var Tt = s(_t),
		Pe = a(Tt, !0);
	(i(Tt), (Tt.value = Tt.__value = "griefing"));
	var Nt = s(Tt),
		lr = a(Nt, !0);
	(i(Nt), (Nt.value = Nt.__value = "multi-accounting"));
	var re = s(Nt),
		_r = a(re, !0);
	(i(re), (re.value = re.__value = "other"), i(H), i(Z));
	var fe = s(Z, 2),
		Vt = a(fe),
		Rr = a(Vt, !0);
	i(Vt);
	var nt = s(Vt, 2),
		Ft = a(nt),
		Bt = a(Ft, !0);
	(i(Ft), (Ft.value = Ft.__value = ""));
	var xt = s(Ft),
		dr = a(xt, !0);
	(i(xt), (xt.value = xt.__value = "open"));
	var Ot = s(xt),
		Le = a(Ot, !0);
	(i(Ot), (Ot.value = Ot.__value = "ignore"));
	var Wt = s(Ot),
		vr = a(Wt, !0);
	(i(Wt), (Wt.value = Wt.__value = "timeout"));
	var At = s(Wt),
		Hn = a(At, !0);
	(i(At), (At.value = At.__value = "ban"), i(nt), i(fe), i(Xt), i(qt));
	var Mr = s(qt, 2),
		Ur = a(Mr),
		Gn = a(Ur, !0);
	i(Ur);
	var Ln = s(Ur, 2),
		Kr = a(Ln),
		Nr = a(Kr),
		Yn = a(Nr, !0);
	i(Nr);
	var fr = s(Nr, 2),
		Te = a(fr),
		qn = a(Te, !0);
	(i(Te), (Te.value = Te.__value = ""));
	var Xn = s(Te);
	(pe(
		Xn,
		17,
		() => e(ge),
		me,
		(n, u) => {
			var v = b_(),
				q = a(v, !0);
			i(v);
			var et = {};
			(T(() => {
				(_(q, e(u)),
					et !== (et = e(u)) && (v.value = (v.__value = e(u)) ?? ""));
			}),
				I(n, v));
		},
	),
		i(fr),
		i(Kr));
	var Vr = s(Kr, 2),
		Fr = a(Vr),
		Zn = a(Fr, !0);
	i(Fr);
	var Br = s(Fr, 2);
	(ie(Br), i(Vr));
	var Or = s(Vr, 2),
		Wr = a(Or);
	ie(Wr);
	var Tn = s(Wr, 2),
		Jn = a(Tn, !0);
	(i(Tn), i(Or));
	var Dn = s(Or, 2),
		De = a(Dn),
		Qn = a(De, !0);
	i(De);
	var pr = s(De, 2),
		ti = a(pr, !0);
	(i(pr), i(Dn), i(Ln), i(Mr));
	var ei = s(Mr, 2);
	{
		var ri = (n) => {
				var u = g_(),
					v = s(a(u), 2),
					q = a(v, !0);
				(i(v), i(u), T((et) => _(q, et), [() => oa()]), I(n, u));
			},
			ni = (n) => {
				var u = x_(),
					v = a(u, !0);
				(i(u), T(() => _(v, e(Ht))), I(n, u));
			},
			ii = (n) => {
				var u = T_(),
					v = yr(u);
				{
					var q = (h) => {
						var m = k_(),
							N = a(m);
						(i(m),
							T(
								(V, F, qe) =>
									_(
										N,
										`${V ?? ""}:
					${F ?? ""} - ${qe ?? ""}`,
									),
								[
									() => pt(),
									() => Yt(e(c).prevStartUtc),
									() => Yt(e(c).prevEndUtc),
								],
							),
							I(h, m));
					};
					J(v, (h) => {
						e(S) &&
							e(c).previous &&
							e(c).prevStartUtc &&
							e(c).prevEndUtc &&
							h(q);
					});
				}
				var et = s(v, 2),
					kt = a(et),
					ze = a(kt),
					Ar = a(ze, !0);
				i(ze);
				var $e = s(ze, 2),
					Er = a($e, !0);
				i($e);
				var Hr = s($e, 2);
				{
					var Gr = (h) => {
						var m = y_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.openCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() => lt(e(c).current.openCount, e(c).previous.openCount),
								],
							),
							I(h, m));
					};
					J(Hr, (h) => {
						e(S) && e(c).previous && h(Gr);
					});
				}
				i(kt);
				var Re = s(kt, 2),
					Me = a(Re),
					Yr = a(Me, !0);
				i(Me);
				var Ue = s(Me, 2),
					qr = a(Ue, !0);
				i(Ue);
				var Ke = s(Ue, 2),
					Xr = a(Ke);
				i(Ke);
				var Zr = s(Ke, 2);
				{
					var Jr = (h) => {
						var m = w_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.solvedCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() => lt(e(c).current.solvedCount, e(c).previous.solvedCount),
								],
							),
							I(h, m));
					};
					J(Zr, (h) => {
						e(S) && e(c).previous && h(Jr);
					});
				}
				i(Re);
				var Ne = s(Re, 2),
					Ve = a(Ne),
					Qr = a(Ve, !0);
				i(Ve);
				var Fe = s(Ve, 2),
					tn = a(Fe, !0);
				i(Fe);
				var en = s(Fe, 2);
				{
					var rn = (h) => {
						var m = C_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.totalCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() => lt(e(c).current.totalCount, e(c).previous.totalCount),
								],
							),
							I(h, m));
					};
					J(en, (h) => {
						e(S) && e(c).previous && h(rn);
					});
				}
				i(Ne);
				var Be = s(Ne, 2),
					Oe = a(Be),
					nn = a(Oe, !0);
				i(Oe);
				var We = s(Oe, 2),
					an = a(We, !0);
				i(We);
				var Ae = s(We, 2),
					sn = a(Ae);
				i(Ae);
				var on = s(Ae, 2);
				{
					var un = (h) => {
						var m = I_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.ignoredCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() =>
										lt(e(c).current.ignoredCount, e(c).previous.ignoredCount),
								],
							),
							I(h, m));
					};
					J(on, (h) => {
						e(S) && e(c).previous && h(un);
					});
				}
				i(Be);
				var Ee = s(Be, 2),
					He = a(Ee),
					cn = a(He, !0);
				i(He);
				var Ge = s(He, 2),
					ln = a(Ge, !0);
				i(Ge);
				var Ye = s(Ge, 2),
					si = a(Ye);
				i(Ye);
				var oi = s(Ye, 2);
				{
					var ui = (h) => {
						var m = j_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.timeoutCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() =>
										lt(e(c).current.timeoutCount, e(c).previous.timeoutCount),
								],
							),
							I(h, m));
					};
					J(oi, (h) => {
						e(S) && e(c).previous && h(ui);
					});
				}
				i(Ee);
				var _n = s(Ee, 2),
					dn = a(_n),
					ci = a(dn, !0);
				i(dn);
				var vn = s(dn, 2),
					li = a(vn, !0);
				i(vn);
				var fn = s(vn, 2),
					_i = a(fn);
				i(fn);
				var di = s(fn, 2);
				{
					var vi = (h) => {
						var m = S_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.banCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() => lt(e(c).current.banCount, e(c).previous.banCount),
								],
							),
							I(h, m));
					};
					J(di, (h) => {
						e(S) && e(c).previous && h(vi);
					});
				}
				i(_n);
				var pn = s(_n, 2),
					mn = a(pn),
					fi = a(mn, !0);
				i(mn);
				var hn = s(mn, 2),
					pi = a(hn, !0);
				i(hn);
				var bn = s(hn, 2),
					mi = a(bn);
				i(bn);
				var hi = s(bn, 2);
				{
					var bi = (h) => {
						var m = P_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.overturnedCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() =>
										lt(
											e(c).current.overturnedCount,
											e(c).previous.overturnedCount,
										),
								],
							),
							I(h, m));
					};
					J(hi, (h) => {
						e(S) && e(c).previous && h(bi);
					});
				}
				i(pn);
				var zn = s(pn, 2),
					gn = a(zn),
					gi = a(gn, !0);
				i(gn);
				var xn = s(gn, 2),
					xi = a(xn, !0);
				i(xn);
				var kn = s(xn, 2),
					ki = a(kn);
				i(kn);
				var yi = s(kn, 2);
				{
					var wi = (h) => {
						var m = L_(),
							N = a(m);
						(i(m),
							T(
								(V, F) => {
									(E(m, "title", V),
										_(
											N,
											`${e(c).previous.reportedUsersCount ?? ""}
							${F ?? ""}`,
										));
								},
								[
									() => pt(),
									() =>
										lt(
											e(c).current.reportedUsersCount,
											e(c).previous.reportedUsersCount,
										),
								],
							),
							I(h, m));
					};
					J(yi, (h) => {
						e(S) && e(c).previous && h(wi);
					});
				}
				(i(zn), i(et));
				var $n = s(et, 2),
					Ci = a($n);
				(Bi(
					Ci,
					() => e(c),
					(h) => {
						{
							let m = ne(() => ps()),
								N = ne(() => {
									var mr;
									return (
										((mr = e(c).previous) == null ? void 0 : mr.totalCount) ??
										e(c).current.totalCount
									);
								}),
								V = ne(() => zt(e(ot)) ?? ""),
								F = ne(() => zt(e(dt)) ?? ""),
								qe = ne(() => e(c).prevStartUtc ?? ""),
								yn = ne(() => e(c).prevEndUtc ?? ""),
								wn = ne(() => Un());
							h_(h, {
								get chartTitle() {
									return e(m);
								},
								get chartMetricKeys() {
									return he;
								},
								chartMetricLabel: Qe,
								chartMetricValue: tr,
								chartDefaultSelected: ["totalCount"],
								get currentMetrics() {
									return e(c).current;
								},
								get previousMetrics() {
									return e(c).previous;
								},
								get currentTotalValue() {
									return e(c).current.totalCount;
								},
								get previousTotalValue() {
									return e(N);
								},
								get series() {
									return e(c).series;
								},
								get compare() {
									return e(S);
								},
								get startLocal() {
									return e(ot);
								},
								get endLocal() {
									return e(dt);
								},
								get startIso() {
									return e(V);
								},
								get endIso() {
									return e(F);
								},
								get previousStartIso() {
									return e(qe);
								},
								get previousEndIso() {
									return e(yn);
								},
								get granularity() {
									return e(yt);
								},
								granularityLabel: Ir,
								granularityBucketMs: oe,
								granularityMaxBuckets: rr,
								formatRangeLabel: Yt,
								bucketLabel: jr,
								get noDataLabel() {
									return e(wn);
								},
								get granularityOptions() {
									return be;
								},
								onGranularityChange: Sr,
							});
						}
					},
				),
					i($n),
					T(
						(
							h,
							m,
							N,
							V,
							F,
							qe,
							yn,
							wn,
							mr,
							Ii,
							ji,
							Si,
							Pi,
							Li,
							Ti,
							Di,
							zi,
							$i,
							Ri,
							Mi,
						) => {
							(_(Ar, h),
								_(Er, e(c).current.openCount),
								_(Yr, m),
								_(qr, e(c).current.solvedCount),
								_(
									Xr,
									`${N ?? ""}
						${V ?? ""}`,
								),
								_(Qr, F),
								_(tn, e(c).current.totalCount),
								_(nn, qe),
								_(an, e(c).current.ignoredCount),
								_(
									sn,
									`${yn ?? ""}
						${wn ?? ""}`,
								),
								_(cn, mr),
								_(ln, e(c).current.timeoutCount),
								_(
									si,
									`${Ii ?? ""}
						${ji ?? ""}`,
								),
								_(ci, Si),
								_(li, e(c).current.banCount),
								_(
									_i,
									`${Pi ?? ""}
						${Li ?? ""}`,
								),
								_(fi, Ti),
								_(pi, e(c).current.overturnedCount),
								_(
									mi,
									`${Di ?? ""}
						${zi ?? ""}`,
								),
								_(gi, $i),
								_(xi, e(c).current.reportedUsersCount),
								_(
									ki,
									`${Ri ?? ""}
						${Mi ?? ""}`,
								));
						},
						[
							() => jn(),
							() => On(),
							() => tt(e(c).current.solvedRatePct),
							() =>
								e(S) && e(c).previous
									? ` ${St(e(c).current.solvedRatePct, e(c).previous.solvedRatePct)}`
									: "",
							() => Fn(),
							() => In(),
							() => tt(e(c).current.ignoredRatePct),
							() =>
								e(S) && e(c).previous
									? ` ${St(e(c).current.ignoredRatePct, e(c).previous.ignoredRatePct)}`
									: "",
							() => Sn(),
							() => tt(e(c).current.timeoutRatePct),
							() =>
								e(S) && e(c).previous
									? ` ${St(e(c).current.timeoutRatePct, e(c).previous.timeoutRatePct)}`
									: "",
							() => Cn(),
							() => tt(e(c).current.banRatePct),
							() =>
								e(S) && e(c).previous
									? ` ${St(e(c).current.banRatePct, e(c).previous.banRatePct)}`
									: "",
							() => Kn(),
							() => tt(e(c).current.overturnedRatePct),
							() =>
								e(S) && e(c).previous
									? ` ${St(e(c).current.overturnedRatePct, e(c).previous.overturnedRatePct)}`
									: "",
							() => Nn(),
							() => tt(e(c).current.reportedUsersRatePct),
							() =>
								e(S) && e(c).previous
									? ` ${St(e(c).current.reportedUsersRatePct, e(c).previous.reportedUsersRatePct)}`
									: "",
						],
					),
					I(n, u));
			},
			ai = (n) => {
				var u = D_(),
					v = a(u, !0);
				(i(u), T((q) => _(v, q), [() => Un()]), I(n, u));
			};
		J(ei, (n) => {
			e(t) && !e(c) ? n(ri) : e(Ht) ? n(ni, 1) : e(c) ? n(ii, 2) : n(ai, !1);
		});
	}
	(i(nr),
		i(ye),
		T(
			(
				n,
				u,
				v,
				q,
				et,
				kt,
				ze,
				Ar,
				$e,
				Er,
				Hr,
				Gr,
				Re,
				Me,
				Yr,
				Ue,
				qr,
				Ke,
				Xr,
				Zr,
				Jr,
				Ne,
				Ve,
				Qr,
				Fe,
				tn,
				en,
				rn,
				Be,
				Oe,
				nn,
				We,
				an,
				Ae,
				sn,
				on,
				un,
				Ee,
				He,
				cn,
				Ge,
				ln,
				Ye,
			) => {
				(_(ir, n),
					_(Pr, u),
					_(Lr, v),
					(_e.disabled = e(t)),
					_(ar, q),
					E(Rt, "title", et),
					(Rt.disabled = e(t)),
					_(sr, kt),
					_(or, ze),
					_(Ce, Ar),
					_(gt, $e),
					_(Ie, Er),
					_(Dr, Hr),
					_(ur, Gr),
					_(zr, Re),
					_(cr, Me),
					_(b, Yr),
					_(C, Ue),
					E(M, "placeholder", qr),
					_(D, Ke),
					E(z, "placeholder", Xr),
					_($, Zr),
					_(y, Jr),
					_(Y, Ne),
					_(rt, Ve),
					_(Kt, Qr),
					_($r, Fe),
					_(Pe, tn),
					_(lr, en),
					_(_r, rn),
					_(Rr, Be),
					_(Bt, Oe),
					_(dr, nn),
					_(Le, We),
					_(vr, an),
					_(Hn, Ae),
					_(Gn, sn),
					_(Yn, on),
					_(qn, un),
					_(Zn, Ee),
					_(Jn, He),
					(De.disabled = cn),
					_(Qn, Ge),
					(pr.disabled = ln),
					_(ti, Ye));
			},
			[
				() => Jo({ section: Vn() }),
				() => jo({ timezone: Al() }),
				() => sa(),
				() => ra(),
				() => fa(),
				() => va(),
				() => _u(),
				() => Cu(),
				() => Ku(),
				() => ua(),
				() => cc(),
				() => Xu(),
				() => ca(),
				() => na(),
				() => ia(),
				() => ha(),
				() => la(),
				() => ea(),
				() => Ta(),
				() => rs(),
				() => Mn(),
				() => Ei(),
				() => Hi(),
				() => Gi(),
				() => Yi(),
				() => qi(),
				() => Xi(),
				() => da(),
				() => Yc(),
				() => Mn(),
				() => jn(),
				() => In(),
				() => Sn(),
				() => Cn(),
				() => Bn(),
				() => Bn(),
				() => gl(),
				() => n_(),
				() => pt(),
				() => e(It).trim() === "",
				() => ma(),
				() => e(jt).trim() === "",
				() => pa(),
			],
		),
		Pn("submit", Xt, er),
		A("click", Rt, Pt),
		A("change", ve, () => {
			(at(e(Q)), B(!0), Pt());
		}),
		br(
			ve,
			() => e(Q),
			(n) => o(Q, n),
		),
		A("change", Se, () => {
			(o(Q, "custom"), B(!0));
		}),
		Je(
			Se,
			() => e(ot),
			(n) => o(ot, n),
		),
		A("change", p, () => {
			(o(Q, "custom"), B(!0));
		}),
		Je(
			p,
			() => e(dt),
			(n) => o(dt, n),
		),
		A("change", M, () => B(!0)),
		Je(
			M,
			() => e(wt),
			(n) => o(wt, n),
		),
		A("change", z, () => B(!0)),
		Je(
			z,
			() => e(Ct),
			(n) => o(Ct, n),
		),
		A("change", H, () => B(!0)),
		br(
			H,
			() => e(it),
			(n) => o(it, n),
		),
		A("change", nt, () => B(!0)),
		br(
			nt,
			() => e(Dt),
			(n) => o(Dt, n),
		),
		A("change", fr, async () => {
			await wr(e(jt));
		}),
		br(
			fr,
			() => e(jt),
			(n) => o(jt, n),
		),
		A("change", Br, () => {
			const n = e(It).trim();
			n !== "" && o(It, n, !0);
		}),
		Je(
			Br,
			() => e(It),
			(n) => o(It, n),
		),
		Ai(
			Wr,
			() => e(S),
			(n) => o(S, n),
		),
		A("click", De, st),
		A("click", pr, Cr),
		I(r, ye),
		En());
}
Wn(["click", "change"]);
export { gd as component };
