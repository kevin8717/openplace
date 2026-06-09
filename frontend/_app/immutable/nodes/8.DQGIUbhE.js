import "../chunks/Bzak7iHL.js";
import {
	k as sn,
	p as on,
	e as L,
	g as Jr,
	I as wr,
	i as r,
	h as i,
	a as b,
	b as ln,
	j as cn,
	c as k,
	$ as un,
	d as n,
	s as o,
	r as t,
	t as x,
	v as dn,
	l as w,
	u as N,
	q as _n,
	f as yr,
	n as sr,
	bp as Ir,
} from "../chunks/Dbe4PVAU.js";
import { s as c } from "../chunks/C_mo-lyU.js";
import { i as H } from "../chunks/Icl9dwnj.js";
import { k as mn } from "../chunks/ryCN0oNh.js";
import { e as jr } from "../chunks/sR4NyGSS.js";
import { t as Xr } from "../chunks/B1IGqgUU.js";
import { h as vn } from "../chunks/ClbV77Km.js";
import { r as $r, s as zr, f as fn, a as Ar } from "../chunks/B7_gUtXa.js";
import { b as Dr } from "../chunks/C1Rrr0ww.js";
import { g as bn } from "../chunks/C6d2kgDd.js";
import { p as Pr } from "../chunks/DzNOOKXC.js";
import {
	u as W,
	a as se,
	t as K,
	i as pn,
	h as hn,
	e as gn,
	f as xn,
	g as kn,
} from "../chunks/DU-2YUMG.js";
import { P as X } from "../chunks/JKnWQwH6.js";
import { L as wn, s as Yr, g as yn } from "../chunks/CbfqdBEM.js";
import { P as et } from "../chunks/BFlSXuix.js";
import { p as Cr, S as rt, d as In, L as tt } from "../chunks/C-cxnuKD.js";
import { S as nt } from "../chunks/xlnJ43Nf.js";
import { R as jn } from "../chunks/CbUCGNiK.js";
import { g as R } from "../chunks/BhCkpOlh.js";
import { a as $n } from "../chunks/XS4kEunf.js";
import { a as zn } from "../chunks/BdCqcZGB.js";
import { c as Lr } from "../chunks/D6_ahSxh.js";
import { c as An } from "../chunks/jEDRT1k8.js";
import { c as Dn } from "../chunks/BZcJYfQJ.js";
import { s as Pn, a as Cn, v as at, l as Ln } from "../chunks/C9bY2KxP.js";
import { l as Nn } from "../chunks/Cme64dX3.js";
import { l as st } from "../chunks/Cp-hTSeP.js";
import { m as Sn, p as Mn } from "../chunks/BvTqCSUg.js";
import { o as Bn } from "../chunks/L80GiOtt.js";
import { r as Rn } from "../chunks/DBS6HGbD.js";
import { r as qn } from "../chunks/C4Z8R_7N.js";
import { r as Fn } from "../chunks/C5ukCcxH.js";
import { s as ot } from "../chunks/WCizg6Ng.js";
import { t as Tn } from "../chunks/mOmV0vnx.js";
import { g as ve, a as it } from "../chunks/DLrplejM.js";
import { f as lt } from "../chunks/BI5KFv7B.js";
const Kn = () => "Actions",
	En = () => "Ações",
	Hn = () => "操作",
	On = () => "Aktionen",
	Qn = () => "Acciones",
	Un = () => "Actions",
	Zn = () => "Azioni",
	Wn = () => "アクション",
	Vn = () => "Akcje",
	Gn = () => "Действия",
	Jn = () => "Дії",
	Xn = () => "Các hành động",
	Yn = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Kn()
			: e === "pt"
				? En()
				: e === "ch"
					? Hn()
					: e === "de"
						? On()
						: e === "es"
							? Qn()
							: e === "fr"
								? Un()
								: e === "it"
									? Zn()
									: e === "jp"
										? Wn()
										: e === "pl"
											? Vn()
											: e === "ru"
												? Gn()
												: e === "uk"
													? Jn()
													: Xn();
	},
	ea = () => "Ban all members",
	ra = () => "Banir todos os membros",
	ta = () => "封禁所有成员",
	na = () => "Alle Mitglieder bannen",
	aa = () => "Banear a todos los miembros",
	sa = () => "Bannir tous les membres",
	oa = () => "Banna tutti i membri",
	ia = () => "全メンバーをBAN",
	la = () => "Zbanuj wszystkich członków",
	ca = () => "Забанить всех участников",
	ua = () => "Забанити всіх учасників",
	da = () => "Cấm tất cả thành viên",
	ct = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? ea()
			: e === "pt"
				? ra()
				: e === "ch"
					? ta()
					: e === "de"
						? na()
						: e === "es"
							? aa()
							: e === "fr"
								? sa()
								: e === "it"
									? oa()
									: e === "jp"
										? ia()
										: e === "pl"
											? la()
											: e === "ru"
												? ca()
												: e === "uk"
													? ua()
													: da();
	},
	_a = () => "Change leader",
	ma = () => "Alterar líder",
	va = () => "更换盟主",
	fa = () => "Anführer ändern",
	ba = () => "Cambiar líder",
	pa = () => "Changer de chef",
	ha = () => "Cambia leader",
	ga = () => "リーダーを変更",
	xa = () => "Zmień lidera",
	ka = () => "Сменить лидера",
	wa = () => "Змінити лідера",
	ya = () => "Thay đổi thủ lĩnh",
	ut = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? _a()
			: e === "pt"
				? ma()
				: e === "ch"
					? va()
					: e === "de"
						? fa()
						: e === "es"
							? ba()
							: e === "fr"
								? pa()
								: e === "it"
									? ha()
									: e === "jp"
										? ga()
										: e === "pl"
											? xa()
											: e === "ru"
												? ka()
												: e === "uk"
													? wa()
													: ya();
	},
	Ia = () => "Change name",
	ja = () => "Alterar nome",
	$a = () => "修改名称",
	za = () => "Namen ändern",
	Aa = () => "Cambiar nombre",
	Da = () => "Changer de nom",
	Pa = () => "Cambia nome",
	Ca = () => "名前を変更",
	La = () => "Zmień nazwę",
	Na = () => "Изменить имя",
	Sa = () => "Змінити ім’я",
	Ma = () => "Đổi tên",
	Ba = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Ia()
			: e === "pt"
				? ja()
				: e === "ch"
					? $a()
					: e === "de"
						? za()
						: e === "es"
							? Aa()
							: e === "fr"
								? Da()
								: e === "it"
									? Pa()
									: e === "jp"
										? Ca()
										: e === "pl"
											? La()
											: e === "ru"
												? Na()
												: e === "uk"
													? Sa()
													: Ma();
	},
	Ra = () =>
		"Are you sure you want to ban all members of this alliance? This action cannot be undone.",
	qa = () =>
		"Tem certeza que deseja banir todos os membros desta aliança? Esta ação não pode ser desfeita.",
	Fa = () => "你确定要封禁该联盟的所有成员吗？此操作无法撤销。",
	Ta = () =>
		"Möchtest du wirklich alle Mitglieder dieser Allianz bannen? Diese Aktion kann nicht rückgängig gemacht werden.",
	Ka = () =>
		"¿Seguro que quieres banear a todos los miembros de esta alianza? Esta acción no se puede deshacer.",
	Ea = () =>
		"Êtes-vous sûr de vouloir bannir tous les membres de cette alliance ? Cette action est irréversible.",
	Ha = () =>
		"Sei sicuro di voler bannare tutti i membri di questa alleanza? Questa azione non può essere annullata.",
	Oa = () =>
		"このアライアンスの全メンバーをBANしてもよろしいですか？この操作は取り消せません。",
	Qa = () =>
		"Czy na pewno chcesz zbanować wszystkich członków tego sojuszu? Tej akcji nie można cofnąć.",
	Ua = () =>
		"Вы уверены, что хотите забанить всех участников этого альянса? Это действие нельзя отменить.",
	Za = () =>
		"Ви впевнені, що хочете забанити всіх учасників цього альянсу? Цю дію не можна буде скасувати.",
	Wa = () =>
		"Bạn có chắc chắn muốn cấm tất cả thành viên của liên minh này? Hành động này không thể hoàn tác.",
	Va = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Ra()
			: e === "pt"
				? qa()
				: e === "ch"
					? Fa()
					: e === "de"
						? Ta()
						: e === "es"
							? Ka()
							: e === "fr"
								? Ea()
								: e === "it"
									? Ha()
									: e === "jp"
										? Oa()
										: e === "pl"
											? Qa()
											: e === "ru"
												? Ua()
												: e === "uk"
													? Za()
													: Wa();
	},
	Ga = () => "Creator (leader)",
	Ja = () => "Proprietário (líder)",
	Xa = () => "创建者（盟主）",
	Ya = () => "Ersteller (Anführer)",
	es = () => "Creador (líder)",
	rs = () => "Créateur (chef)",
	ts = () => "Proprietario (leader)",
	ns = () => "作成者（リーダー）",
	as = () => "Twórca (lider)",
	ss = () => "Создатель (лидер)",
	os = () => "Творець (лідер)",
	is = () => "Người tạo (thủ lĩnh)",
	ls = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Ga()
			: e === "pt"
				? Ja()
				: e === "ch"
					? Xa()
					: e === "de"
						? Ya()
						: e === "es"
							? es()
							: e === "fr"
								? rs()
								: e === "it"
									? ts()
									: e === "jp"
										? ns()
										: e === "pl"
											? as()
											: e === "ru"
												? ss()
												: e === "uk"
													? os()
													: is();
	},
	cs = () => "Inform the ID of the new leader",
	us = () => "Informe o ID do novo líder",
	ds = () => "请输入新盟主的 ID",
	_s = () => "ID des neuen Anführers angeben",
	ms = () => "Indica el ID del nuevo líder",
	vs = () => "Indiquez l’ID du nouveau chef",
	fs = () => "Inserisci l'ID del nuovo leader",
	bs = () => "新しいリーダーのIDを入力してください。",
	ps = () => "Podaj ID nowego lidera",
	hs = () => "Укажите ID нового лидера",
	gs = () => "Вкажіть ID нового лідера",
	xs = () => "Nhập ID của thủ lĩnh mới",
	dt = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? cs()
			: e === "pt"
				? us()
				: e === "ch"
					? ds()
					: e === "de"
						? _s()
						: e === "es"
							? ms()
							: e === "fr"
								? vs()
								: e === "it"
									? fs()
									: e === "jp"
										? bs()
										: e === "pl"
											? ps()
											: e === "ru"
												? hs()
												: e === "uk"
													? gs()
													: xs();
	},
	ks = () => "Lat",
	ws = () => "Lat",
	ys = () => "纬度",
	Is = () => "Breite",
	js = () => "Lat",
	$s = () => "Lat",
	zs = () => "Lat",
	As = () => "緯度",
	Ds = () => "Szer.",
	Ps = () => "Широта",
	Cs = () => "Шир.",
	Ls = () => "Vĩ độ",
	Ns = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? ks()
			: e === "pt"
				? ws()
				: e === "ch"
					? ys()
					: e === "de"
						? Is()
						: e === "es"
							? js()
							: e === "fr"
								? $s()
								: e === "it"
									? zs()
									: e === "jp"
										? As()
										: e === "pl"
											? Ds()
											: e === "ru"
												? Ps()
												: e === "uk"
													? Cs()
													: Ls();
	},
	Ss = () => "Lng",
	Ms = () => "Lng",
	Bs = () => "经度",
	Rs = () => "Länge",
	qs = () => "Lng",
	Fs = () => "Lng",
	Ts = () => "Lng",
	Ks = () => "経度",
	Es = () => "Dług.",
	Hs = () => "Долгота",
	Os = () => "Довг.",
	Qs = () => "Kinh độ",
	Us = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Ss()
			: e === "pt"
				? Ms()
				: e === "ch"
					? Bs()
					: e === "de"
						? Rs()
						: e === "es"
							? qs()
							: e === "fr"
								? Fs()
								: e === "it"
									? Ts()
									: e === "jp"
										? Ks()
										: e === "pl"
											? Es()
											: e === "ru"
												? Hs()
												: e === "uk"
													? Os()
													: Qs();
	},
	Zs = () => "Member",
	Ws = () => "Membro",
	Vs = () => "成员",
	Gs = () => "Mitglied",
	Js = () => "Miembro",
	Xs = () => "Membre",
	Ys = () => "Membro",
	eo = () => "メンバー",
	ro = () => "Członek",
	to = () => "Участник",
	no = () => "Учасник",
	ao = () => "Thành viên",
	so = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Zs()
			: e === "pt"
				? Ws()
				: e === "ch"
					? Vs()
					: e === "de"
						? Gs()
						: e === "es"
							? Js()
							: e === "fr"
								? Xs()
								: e === "it"
									? Ys()
									: e === "jp"
										? eo()
										: e === "pl"
											? ro()
											: e === "ru"
												? to()
												: e === "uk"
													? no()
													: ao();
	},
	oo = () => "No alliance found",
	io = () => "Nenhuma aliança encontrada",
	lo = () => "未找到联盟",
	co = () => "Keine Allianz gefunden",
	uo = () => "No se encontró ninguna alianza",
	_o = () => "Aucune alliance trouvée",
	mo = () => "Nessuna alleanza trovata",
	vo = () => "アライアンスが見つかりませんでした。",
	fo = () => "Nie znaleziono sojuszu",
	bo = () => "Альянсы не найдены",
	po = () => "Альянси не знайдено",
	ho = () => "Không tìm thấy liên minh nào",
	go = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? oo()
			: e === "pt"
				? io()
				: e === "ch"
					? lo()
					: e === "de"
						? co()
						: e === "es"
							? uo()
							: e === "fr"
								? _o()
								: e === "it"
									? mo()
									: e === "jp"
										? vo()
										: e === "pl"
											? fo()
											: e === "ru"
												? bo()
												: e === "uk"
													? po()
													: ho();
	},
	xo = () => "No alliance selected",
	ko = () => "Nenhuma aliança selecionada",
	wo = () => "未选择联盟",
	yo = () => "Keine Allianz ausgewählt",
	Io = () => "Ninguna alianza seleccionada",
	jo = () => "Aucune alliance sélectionnée",
	$o = () => "Nessuna alleanza selezionata",
	zo = () => "アライアンスが選択されていません。",
	Ao = () => "Nie wybrano sojuszu",
	Do = () => "Альянс не выбран",
	Po = () => "Альянс не вибрано",
	Co = () => "Chưa chọn liên minh",
	Lo = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? xo()
			: e === "pt"
				? ko()
				: e === "ch"
					? wo()
					: e === "de"
						? yo()
						: e === "es"
							? Io()
							: e === "fr"
								? jo()
								: e === "it"
									? $o()
									: e === "jp"
										? zo()
										: e === "pl"
											? Ao()
											: e === "ru"
												? Do()
												: e === "uk"
													? Po()
													: Co();
	},
	No = () => "No coordinates",
	So = () => "Sem coordenadas",
	Mo = () => "无坐标",
	Bo = () => "Keine Koordinaten",
	Ro = () => "Sin coordenadas",
	qo = () => "Aucune coordonnée",
	Fo = () => "Nessuna coordinata",
	To = () => "座標なし",
	Ko = () => "Brak współrzędnych",
	Eo = () => "Нет координат",
	Ho = () => "Немає координат",
	Oo = () => "Không có tọa độ",
	Qo = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? No()
			: e === "pt"
				? So()
				: e === "ch"
					? Mo()
					: e === "de"
						? Bo()
						: e === "es"
							? Ro()
							: e === "fr"
								? qo()
								: e === "it"
									? Fo()
									: e === "jp"
										? To()
										: e === "pl"
											? Ko()
											: e === "ru"
												? Eo()
												: e === "uk"
													? Ho()
													: Oo();
	},
	Uo = () => "No members",
	Zo = () => "Sem membros",
	Wo = () => "无成员",
	Vo = () => "Keine Mitglieder",
	Go = () => "Sin miembros",
	Jo = () => "Aucun membre",
	Xo = () => "Nessun membro",
	Yo = () => "メンバーがいません。",
	ei = () => "Brak członków",
	ri = () => "Нет участников",
	ti = () => "Немає учасників",
	ni = () => "Không có thành viên",
	ai = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Uo()
			: e === "pt"
				? Zo()
				: e === "ch"
					? Wo()
					: e === "de"
						? Vo()
						: e === "es"
							? Go()
							: e === "fr"
								? Jo()
								: e === "it"
									? Xo()
									: e === "jp"
										? Yo()
										: e === "pl"
											? ei()
											: e === "ru"
												? ri()
												: e === "uk"
													? ti()
													: ni();
	},
	si = () => "Rename alliance",
	oi = () => "Alterar nome da aliança",
	ii = () => "重命名联盟",
	li = () => "Allianznamen ändern",
	ci = () => "Renombrar alianza",
	ui = () => "Renommer l’alliance",
	di = () => "Cambia nome dell'alleanza",
	_i = () => "アライアンス名を変更",
	mi = () => "Zmień nazwę sojuszu",
	vi = () => "Переименовать альянс",
	fi = () => "Перейменувати альянс",
	bi = () => "Đổi tên liên minh",
	pi = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? si()
			: e === "pt"
				? oi()
				: e === "ch"
					? ii()
					: e === "de"
						? li()
						: e === "es"
							? ci()
							: e === "fr"
								? ui()
								: e === "it"
									? di()
									: e === "jp"
										? _i()
										: e === "pl"
											? mi()
											: e === "ru"
												? vi()
												: e === "uk"
													? fi()
													: bi();
	},
	hi = () => "Results",
	gi = () => "Resultados",
	xi = () => "结果",
	ki = () => "Ergebnisse",
	wi = () => "Resultados",
	yi = () => "Résultats",
	Ii = () => "Risultati",
	ji = () => "結果",
	$i = () => "Wyniki",
	zi = () => "Результаты",
	Ai = () => "Результати",
	Di = () => "Kết quả",
	Pi = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? hi()
			: e === "pt"
				? gi()
				: e === "ch"
					? xi()
					: e === "de"
						? ki()
						: e === "es"
							? wi()
							: e === "fr"
								? yi()
								: e === "it"
									? Ii()
									: e === "jp"
										? ji()
										: e === "pl"
											? $i()
											: e === "ru"
												? zi()
												: e === "uk"
													? Ai()
													: Di();
	},
	Ci = () => "Search alliance (name or ID)",
	Li = () => "Buscar aliança (nome ou ID)",
	Ni = () => "搜索联盟（名称或 ID）",
	Si = () => "Allianz suchen (Name oder ID)",
	Mi = () => "Buscar alianza (nombre o ID)",
	Bi = () => "Rechercher une alliance (nom ou ID)",
	Ri = () => "Cerca alleanza (nome o ID)",
	qi = () => "アライアンスを検索（名前またはID）",
	Fi = () => "Szukaj sojuszu (nazwa lub ID)",
	Ti = () => "Поиск альянса (название или ID)",
	Ki = () => "Пошук альянсу (назва або ID)",
	Ei = () => "Tìm liên minh (tên hoặc ID)",
	Hi = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Ci()
			: e === "pt"
				? Li()
				: e === "ch"
					? Ni()
					: e === "de"
						? Si()
						: e === "es"
							? Mi()
							: e === "fr"
								? Bi()
								: e === "it"
									? Ri()
									: e === "jp"
										? qi()
										: e === "pl"
											? Fi()
											: e === "ru"
												? Ti()
												: e === "uk"
													? Ki()
													: Ei();
	},
	Oi = () => "Partial name or numeric ID",
	Qi = () => "Nome parcial ou ID numérico",
	Ui = () => "部分名称或数字 ID",
	Zi = () => "Teilname oder numerische ID",
	Wi = () => "Nombre parcial o ID numérico",
	Vi = () => "Nom partiel ou ID numérique",
	Gi = () => "Nome parziale o ID numerico",
	Ji = () => "名前の一部または数値ID",
	Xi = () => "Fragment nazwy lub ID numeryczne",
	Yi = () => "Часть названия или числовой ID",
	el = () => "Частина назви або числовий ID",
	rl = () => "Tên một phần hoặc ID dạng số",
	tl = (S = {}, d = {}) => {
		const e = d.locale ?? R();
		return e === "en"
			? Oi()
			: e === "pt"
				? Qi()
				: e === "ch"
					? Ui()
					: e === "de"
						? Zi()
						: e === "es"
							? Wi()
							: e === "fr"
								? Vi()
								: e === "it"
									? Gi()
									: e === "jp"
										? Ji()
										: e === "pl"
											? Xi()
											: e === "ru"
												? Yi()
												: e === "uk"
													? el()
													: rl();
	};
var nl = k(
		'<div class="flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>',
	),
	al = k('<div class="text-error"> </div>'),
	sl = k('<div class="text-base-content/70 text-sm"> </div>'),
	ol = k(
		'<button class="bg-base-100 hover:bg-base-200 rounded-box border p-3 text-left transition"><div class="flex items-center justify-between"><span> </span> <span class="text-base-content/70 text-xs"> </span></div> <div class="text-base-content/80 text-sm"> <b> </b></div></button>',
	),
	il = k(
		'<div class="flex max-h-[360px] flex-col gap-2 overflow-auto pr-1"></div>',
	),
	ll = k(
		'<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><form class="flex flex-col gap-2"><label class="form-control"><span class="label-text text-sm"> </span> <input class="input input-bordered input-sm"/></label> <div class="flex gap-2"><button class="btn btn-primary btn-sm"> </button> <button class="btn btn-outline btn-sm" type="button"> </button></div></form> <div class="mt-3"><div class="text-base-content/70 mb-1 text-sm"> </div> <!></div></div>',
	),
	cl = k(
		'<div class="flex items-center gap-2"><span class="loading loading-spinner loading-sm"></span> <span> </span></div>',
	),
	ul = k('<div class="text-error"> </div>'),
	dl = k('<div class="text-base-content/70"> </div>'),
	_l = k('<button class="btn btn-outline btn-sm"> </button>'),
	ml = k('<button class="btn btn-outline btn-sm"> </button>'),
	vl = k('<button class="btn btn-error btn-sm"> </button>'),
	fl = k(
		'<div class="text-base-content/80 font-mono"><div class="flex justify-between"><span class="font-semibold"> </span> <span class="text-right"> </span></div> <div class="flex justify-between"><span class="font-semibold"> </span> <span class="text-right"> </span></div></div> <button class="btn btn-sm mt-2 w-full"><!> </button>',
		1,
	),
	bl = k('<div class="text-base-content/70 text-sm"> </div>'),
	pl = k('<th class="text-center"> </th>'),
	hl = k(' <span class="text-base-content/70"> </span>', 1),
	gl = k('<button class="btn btn-error btn-xs"> </button>'),
	xl = k(
		'<tr><td class="text-center max-sm:hidden"><!></td><td><!></td><td class="text-center"> </td><td class="text-center"><button class="btn btn-ghost btn-xs"><!> </button></td><td class="text-center"><div class="join join-horizontal"><button> </button> <button> </button></div></td><td class="text-center"><!></td></tr>',
	),
	kl = k(
		'<tr><td colspan="6" class="text-base-content/70 text-center"> </td></tr>',
	),
	wl = k(
		'<div class="mt-2 flex justify-end"><button class="btn btn-sm"> </button></div>',
	),
	yl = k(
		'<div class="rounded-box border px-7 py-3"><div class="mb-2 flex items-center justify-between"><div><h3 class="text-lg font-semibold"> </h3> <div class="text-base-content/70 text-sm"><b> </b> </div></div> <div class="flex items-center gap-2"><button class="btn btn-sm"><!> </button></div></div> <div class="max-h-[520px] overflow-auto"><table class="table-sm table"><thead><tr><th class="max-sm:hidden"></th><th><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><th class="text-center"> </th><th class="text-center"><button class="btn btn-ghost btn-xs"> </button></th><!></tr></thead><tbody><!><!></tbody></table></div> <!></div>',
	),
	Il = k(
		'<div class="flex flex-col gap-4"><div class="flex flex-col justify-between gap-3 md:flex-row"><div class="flex items-center gap-2"><!> <!></div> <div class="flex flex-wrap gap-2"><!> <!> <!></div></div> <div class="rounded-box border px-7 py-3"><div class="text-lg font-semibold"> </div> <div class="text-base-content/80 whitespace-pre-wrap"> </div></div> <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><div class="rounded-box border px-7 py-3"><div class="text-lg font-semibold"> </div> <div class="text-base-content/80 mt-1 flex items-center gap-2"><!> <!></div></div> <div class="rounded-box border px-7 py-3"><div class="text-lg font-semibold">HQ</div> <div class="mt-1"><!></div></div> <div class="rounded-box border px-7 py-3"><div class="text-lg font-semibold"> </div> <div class="text-base-content/80"><span> </span></div></div></div> <!></div>',
	),
	jl = k(
		'<div class="rounded-box bg-base-100 border-base-300 border p-4 shadow"><!></div>',
	),
	$l = k(
		'<div class="modal modal-open"><div class="modal-box"><h3 class="text-lg font-bold"> </h3> <div class="mt-3"><input class="input input-bordered w-full" placeholder="Novo nome"/></div> <div class="modal-action"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div> <button type="button" class="modal-backdrop" aria-label="Close dialog"></button></div>',
	),
	zl = k(
		'<div class="modal modal-open"><div class="modal-box"><h3 class="text-lg font-bold"> </h3> <p class="text-base-content/70 text-sm"> </p> <div class="mt-3"><input class="input input-bordered w-full" type="number" min="1"/></div> <div class="modal-action"><button class="btn"> </button> <button class="btn btn-primary"> </button></div></div> <button type="button" class="modal-backdrop" aria-label="Close dialog"></button></div>',
	),
	Al = k("<option> </option>"),
	Dl = k(
		'<div class="modal modal-open"><div class="modal-box max-w-xl"><h3 class="text-error text-lg font-bold"> </h3> <p class="mt-2"> </p> <section class="mt-4"><label class="form-control w-full"><span class="label-text text-sm"> </span> <select class="select select-bordered"><option disabled="" selected="">Select</option><!></select></label></section> <section class="mt-4"><!></section> <div class="modal-action"><button class="btn"> </button> <button class="btn btn-error"> </button></div></div> <button type="button" class="modal-backdrop" aria-label="Close dialog"></button></div>',
	),
	Pl = k(
		'<section class="flex flex-col gap-4 p-4"><div class="grid gap-4 md:grid-cols-[360px_1fr]"><!> <!></div> <!> <!> <!></section>',
	);
function vc(S, d) {
	on(d, !0);
	let e = L(""),
		Be = L(!1),
		ie = L(Jr([])),
		we = L(null),
		h = L(!1),
		fe = L(null),
		ye = L(null),
		s = L(null),
		Ie = L(!1),
		Re = L(""),
		je = L(!1),
		qe = L(""),
		be = L(!1),
		le = L(""),
		Fe = L(""),
		Te = L(null);
	const _t = [
		{ value: "inappropriate-content", label: pn() },
		{ value: "hate-speech", label: hn() },
		{ value: "doxxing", label: gn() },
		{ value: "bot", label: xn() },
		{ value: "griefing", label: kn() },
		{ value: "other", label: Bn() },
	];
	let Ke = L(0);
	const mt = 50;
	let vt = N(() => !!r(s) && r(s).members.length < r(s).membersCount),
		pe = L("pixels"),
		ce = L("desc"),
		Ee = L(Jr([]));
	(wr(() => {
		r(be) || (i(le, ""), i(Fe, ""));
	}),
		wr(() => {
			if (!W.data) return;
			const a = Pr.url.searchParams.get("id"),
				l = a ? Number(a) : null;
			async function u() {
				l !== r(ye) &&
					(i(ye, l, !0),
					a && i(e, a, !0),
					r(ye) != null && !isNaN(r(ye))
						? await He(r(ye), W.hasPermission(X.dashboard.alliances.members))
						: (i(s, null), i(fe, null)));
			}
			u();
		}),
		wr(() => {
			if (!r(s)) {
				i(Ee, [], !0);
				return;
			}
			const a = r(ce) === "asc" ? 1 : -1,
				l = r(s).members.slice();
			(l.sort((u, v) => {
				switch (r(pe)) {
					case "name":
						const Q = u.name,
							M = v.name;
						return Q === M ? (u.id - v.id) * a : (Q < M ? -1 : 1) * a;
					case "role":
						const E = u.role === "admin" ? 0 : 1,
							g = v.role === "admin" ? 0 : 1;
						return E === g ? (u.id - v.id) * a : (E - g) * a;
					default:
						const _ = u.pixelsPainted,
							$ = v.pixelsPainted;
						return _ === $ ? (u.id - v.id) * a : (_ - $) * a;
				}
			}),
				i(Ee, l, !0));
		}));
	async function Nr() {
		try {
			(i(we, null), i(Be, !0));
			const a = r(e).trim();
			if (!a) {
				i(ie, [], !0);
				return;
			}
			const l = Number(a);
			if (Number.isFinite(l))
				try {
					const v = await se.getAllianceById(l);
					if (v) {
						i(
							ie,
							[{ id: v.id, name: v.name, pixelsPainted: v.pixelsPainted ?? 0 }],
							!0,
						);
						return;
					}
				} catch {}
			const u = await se.searchAlliances(a);
			i(ie, u, !0);
		} catch (a) {
			(console.error(a),
				i(we, (a == null ? void 0 : a.message) ?? "Falha na busca", !0),
				i(ie, [], !0));
		} finally {
			i(Be, !1);
		}
	}
	async function He(a, l = !1) {
		try {
			if (
				(i(h, !0), i(fe, null), i(s, await se.getAllianceFull(a), !0), !r(s))
			) {
				(i(s, null), i(fe, "Alliance not found"));
				return;
			}
			l && (i(Ke, 0), ft() && (await Sr(!0)));
		} catch (u) {
			(console.error(u),
				i(
					fe,
					(u == null ? void 0 : u.message) ?? "Failed to load alliance",
					!0,
				),
				i(s, null));
		} finally {
			i(h, !1);
		}
	}
	function ft() {
		return !!r(s) && r(s).members.length < r(s).membersCount;
	}
	async function Sr(a = !1) {
		if (r(s))
			try {
				(i(h, !0), a && i(Ke, 0));
				const l = a ? 0 : r(Ke) + 1,
					u = await se.getAdminAllianceMembers(r(s).id, {
						page: l,
						pageSize: mt,
					}),
					v = l === 0 ? u.members : [...r(s).members, ...u.members];
				(i(
					s,
					{ ...r(s), members: v, membersCount: u.total ?? r(s).membersCount },
					!0,
				),
					i(Ke, l, !0));
			} catch (l) {
				(console.error(l),
					K.error(
						(l == null ? void 0 : l.message) ?? "Falha ao carregar membros",
					));
			} finally {
				i(h, !1);
			}
	}
	function bt() {
		r(s) && (i(Re, r(s).name ?? "", !0), i(Ie, !0));
	}
	async function Mr() {
		if (!r(s)) return;
		const a = r(Re).trim();
		if (!a) {
			K.error("Informe um nome válido");
			return;
		}
		try {
			(i(h, !0),
				await se.renameAlliance(r(s).id, a),
				i(s, { ...r(s), name: a }, !0),
				K.success("Nome alterado"),
				i(Ie, !1));
		} catch (l) {
			K.error((l == null ? void 0 : l.message) ?? "Falha ao alterar nome");
		} finally {
			i(h, !1);
		}
	}
	function pt() {
		r(s) && (i(qe, r(s).ownerId ? String(r(s).ownerId) : "", !0), i(je, !0));
	}
	async function Br() {
		if (!r(s)) return;
		const a = Number(r(qe));
		if (!Number.isFinite(a) || a <= 0) {
			K.error("ID inválido");
			return;
		}
		try {
			(i(h, !0),
				await se.changeAllianceLeader(r(s).id, a),
				He(r(s).id, W.hasPermission(X.dashboard.alliances.members)),
				K.success("Líder alterado"),
				i(je, !1));
		} catch (l) {
			K.error((l == null ? void 0 : l.message) ?? "Falha ao alterar líder");
		} finally {
			i(h, !1);
		}
	}
	function ht() {
		i(be, !0);
	}
	async function gt() {
		if (r(s)) {
			if (!r(le)) {
				K.error(Cn());
				return;
			}
			if (!(r(Te) && !r(Te)()))
				try {
					(i(h, !0),
						await se.banAllAllianceMembers(r(s).id, r(le), r(Fe)),
						K.success("Todos os membros banidos"),
						await He(r(s).id, !0),
						i(be, !1));
				} catch (a) {
					K.error((a == null ? void 0 : a.message) ?? "Falha ao banir membros");
				} finally {
					i(h, !1);
				}
		}
	}
	async function Rr(a, l) {
		if (r(s))
			try {
				(i(h, !0),
					await se.setAllianceMemberRole(r(s).id, a.id, l),
					i(
						s,
						{
							...r(s),
							members: r(s).members.map((u) =>
								u.id === a.id ? { ...u, role: l } : u,
							),
						},
						!0,
					),
					K.success("Cargo atualizado"));
			} catch (u) {
				K.error((u == null ? void 0 : u.message) ?? "Falha ao atualizar cargo");
			} finally {
				i(h, !1);
			}
	}
	async function xt(a) {
		if (r(s)) {
			if (a.id == r(s).ownerId) {
				K.error("Não é possível remover o líder da aliança");
				return;
			}
			try {
				(i(h, !0),
					await se.removeAllianceMember(r(s).id, a.id),
					i(
						s,
						{
							...r(s),
							members: r(s).members.filter((l) => l.id !== a.id),
							membersCount: Math.max(0, r(s).membersCount - 1),
						},
						!0,
					),
					K.success("Membro removido"));
			} catch (l) {
				K.error((l == null ? void 0 : l.message) ?? "Falha ao remover membro");
			} finally {
				i(h, !1);
			}
		}
	}
	function kt(a) {
		if (!a.lastPixelLatitude || !a.lastPixelLongitude) {
			K.error("Sem registro de último pixel");
			return;
		}
		const l = `${Pr.url.origin}/?lat=${a.lastPixelLatitude}&lng=${a.lastPixelLongitude}&select=true`;
		window.open(l, "_blank");
	}
	function wt(a) {
		const { hqLatitude: l, hqLongitude: u } = a;
		if (l == null || u == null) {
			K.error("No coords for HQ");
			return;
		}
		const v = `${Pr.url.origin}/?lat=${l}&lng=${u}&select=true`;
		window.open(v, "_blank");
	}
	function or(a) {
		r(pe) === a
			? i(ce, r(ce) === "asc" ? "desc" : "asc", !0)
			: (i(pe, a, !0), i(ce, a === "pixels" ? "desc" : "asc", !0));
	}
	var ir = Pl();
	vn("vzcstq", (a) => {
		cn(
			(l) => {
				un.title = `Wplace - ${l ?? ""}`;
			},
			[() => zn()],
		);
	});
	var lr = n(ir),
		qr = n(lr);
	{
		var yt = (a) => {
				var l = ll(),
					u = n(l),
					v = n(u),
					Q = n(v),
					M = n(Q, !0);
				t(Q);
				var E = o(Q, 2);
				($r(E), t(v));
				var g = o(v, 2),
					_ = n(g),
					$ = n(_, !0);
				t(_);
				var z = o(_, 2),
					B = n(z, !0);
				(t(z), t(g), t(u));
				var q = o(u, 2),
					F = n(q),
					V = n(F, !0);
				t(F);
				var U = o(F, 2);
				{
					var re = (j) => {
							var D = nl(),
								y = o(n(D), 2),
								P = n(y, !0);
							(t(y), t(D), x((A) => c(P, A), [() => st()]), b(j, D));
						},
						G = (j) => {
							var D = al(),
								y = n(D, !0);
							(t(D), x(() => c(y, r(we))), b(j, D));
						},
						ue = (j) => {
							var D = sl(),
								y = n(D, !0);
							(t(D), x((P) => c(y, P), [() => go()]), b(j, D));
						},
						ee = (j) => {
							var D = il();
							(jr(
								D,
								21,
								() => r(ie),
								(y) => y.id,
								(y, P) => {
									var A = ol(),
										te = n(A),
										Z = n(te),
										de = n(Z, !0);
									t(Z);
									var Oe = o(Z, 2),
										Qe = n(Oe);
									(t(Oe), t(te));
									var Ue = o(te, 2),
										he = n(Ue),
										ge = o(he),
										$e = n(ge, !0);
									(t(ge),
										t(Ue),
										t(A),
										x(
											(cr, Ze, We) => {
												(Ar(Z, 1, `font-semibold ${cr ?? ""}`),
													c(de, r(P).name),
													c(Qe, `#${r(P).id ?? ""}`),
													c(he, `${Ze ?? ""}: `),
													c($e, We));
											},
											[
												() => ve(r(P).id),
												() => Cr(),
												() =>
													r(P).pixelsPainted.toLocaleString(navigator.language),
											],
										),
										w("click", A, () => {
											bn(`/dashboard/alliances?id=${r(P).id}`, {
												replaceState: !0,
											});
										}),
										b(y, A));
								},
							),
								t(D),
								b(j, D));
						};
					H(U, (j) => {
						r(Be)
							? j(re)
							: r(we)
								? j(G, 1)
								: r(ie).length === 0
									? j(ue, 2)
									: j(ee, !1);
					});
				}
				(t(q),
					t(l),
					x(
						(j, D, y, P, A) => {
							(c(M, j),
								zr(E, "placeholder", D),
								(_.disabled = r(Be)),
								c($, y),
								c(B, P),
								c(V, A));
						},
						[() => Hi(), () => tl(), () => Pn(), () => An(), () => Pi()],
					),
					dn("submit", u, (j) => {
						(j.preventDefault(), Nr());
					}),
					Dr(
						E,
						() => r(e),
						(j) => i(e, j),
					),
					w("click", _, Nr),
					w("click", z, () => {
						(i(e, ""), i(ie, [], !0), i(we, null));
					}),
					b(a, l));
			},
			It = N(() => W.hasPermission(X.dashboard.alliances.search));
		H(qr, (a) => {
			r(It) && a(yt);
		});
	}
	var jt = o(qr, 2);
	{
		var $t = (a) => {
				var l = jl(),
					u = n(l);
				{
					var v = (g) => {
							var _ = cl(),
								$ = o(n(_), 2),
								z = n($, !0);
							(t($), t(_), x((B) => c(z, B), [() => st()]), b(g, _));
						},
						Q = (g) => {
							var _ = ul(),
								$ = n(_, !0);
							(t(_), x(() => c($, r(fe))), b(g, _));
						},
						M = (g) => {
							var _ = dl(),
								$ = n(_, !0);
							(t(_), x((z) => c($, z), [() => Lo()]), b(g, _));
						},
						E = (g) => {
							var _ = _n(),
								$ = yr(_);
							(mn(
								$,
								() => r(s).id,
								(z) => {
									var B = Il(),
										q = n(B),
										F = n(q),
										V = n(F);
									{
										let p = N(() => ve(r(s).id)),
											m = N(() => ve(r(s).id));
										rt(V, {
											get allianceId() {
												return r(s).id;
											},
											get linkClass() {
												return `text-lg font-semibold ${r(p) ?? ""}`;
											},
											get textClass() {
												return `text-lg font-semibold ${r(m) ?? ""}`;
											},
											children: (I, C) => {
												sr();
												var J = Ir();
												(x(() => c(J, r(s).name)), b(I, J));
											},
											$$slots: { default: !0 },
										});
									}
									var U = o(V, 2);
									{
										let p = N(() => it(r(s).id)),
											m = N(() => ve(r(s).id)),
											I = N(() => it(r(s).id)),
											C = N(() => ve(r(s).id));
										rt(U, {
											get allianceId() {
												return r(s).id;
											},
											get linkClass() {
												return `badge badge-sm ml-1 border-0 ${r(p) ?? ""} ${r(m) ?? ""}`;
											},
											get textClass() {
												return `badge badge-sm ml-1 border-0 ${r(I) ?? ""} ${r(C) ?? ""}`;
											},
											children: (J, Ve) => {
												sr();
												var oe = Ir();
												(x(() => c(oe, `#${r(s).id ?? ""}`)), b(J, oe));
											},
											$$slots: { default: !0 },
										});
									}
									t(F);
									var re = o(F, 2),
										G = n(re);
									{
										var ue = (p) => {
												var m = _l(),
													I = n(m, !0);
												(t(m),
													x(
														(C) => {
															((m.disabled = r(h)), c(I, C));
														},
														[() => Ba()],
													),
													w("click", m, bt),
													b(p, m));
											},
											ee = N(() =>
												W.hasPermission(X.dashboard.alliances.rename),
											);
										H(G, (p) => {
											r(ee) && p(ue);
										});
									}
									var j = o(G, 2);
									{
										var D = (p) => {
												var m = ml(),
													I = n(m, !0);
												(t(m),
													x(
														(C) => {
															((m.disabled = r(h)), c(I, C));
														},
														[() => ut()],
													),
													w("click", m, pt),
													b(p, m));
											},
											y = N(() =>
												W.hasPermission(X.dashboard.alliances.leader),
											);
										H(j, (p) => {
											r(y) && p(D);
										});
									}
									var P = o(j, 2);
									{
										var A = (p) => {
												var m = vl(),
													I = n(m, !0);
												(t(m),
													x(
														(C) => {
															((m.disabled = r(h)), c(I, C));
														},
														[() => ct()],
													),
													w("click", m, ht),
													b(p, m));
											},
											te = N(() =>
												W.hasPermission(X.dashboard.alliances.banAll),
											);
										H(P, (p) => {
											r(te) && p(A);
										});
									}
									(t(re), t(q));
									var Z = o(q, 2),
										de = n(Z),
										Oe = n(de, !0);
									t(de);
									var Qe = o(de, 2),
										Ue = n(Qe, !0);
									(t(Qe), t(Z));
									var he = o(Z, 2),
										ge = n(he),
										$e = n(ge),
										cr = n($e, !0);
									t($e);
									var Ze = o($e, 2),
										We = n(Ze);
									et(We, {
										class: "size-8 border",
										get userId() {
											return r(s).ownerId;
										},
										pictureUrl: void 0,
									});
									var Lt = o(We, 2);
									(nt(Lt, {
										get userId() {
											return r(s).ownerId;
										},
										mode: "inline",
										linkClass: "link",
										children: (p, m) => {
											sr();
											var I = Ir();
											(x(() => c(I, r(s).ownerName ?? `#${r(s).ownerId}`)),
												b(p, I));
										},
										$$slots: { default: !0 },
									}),
										t(Ze),
										t(ge));
									var ur = o(ge, 2),
										Kr = o(n(ur), 2),
										Nt = n(Kr);
									{
										var St = (p) => {
												var m = fl(),
													I = yr(m),
													C = n(I),
													J = n(C),
													Ve = n(J);
												t(J);
												var oe = o(J, 2),
													ze = n(oe, !0);
												(t(oe), t(C));
												var Ge = o(C, 2),
													Ae = n(Ge),
													Je = n(Ae);
												t(Ae);
												var _e = o(Ae, 2),
													Xe = n(_e, !0);
												(t(_e), t(Ge), t(I));
												var De = o(I, 2),
													xe = n(De);
												tt(xe, { class: "size-4" });
												var Ye = o(xe);
												(t(De),
													x(
														(Pe, er, Ce, Le, _r) => {
															(c(Ve, `${Pe ?? ""}:`),
																c(ze, er),
																c(Je, `${Ce ?? ""}:`),
																c(Xe, Le),
																c(Ye, ` ${_r ?? ""}`));
														},
														[
															() => Ns(),
															() => r(s).hqLatitude.toFixed(5),
															() => Us(),
															() => r(s).hqLongitude.toFixed(5),
															() => at(),
														],
													),
													w("click", De, () => wt(r(s))),
													b(p, m));
											},
											Mt = (p) => {
												var m = bl(),
													I = n(m, !0);
												(t(m), x((C) => c(I, C), [() => Qo()]), b(p, m));
											};
										H(Nt, (p) => {
											r(s).hqLatitude != null && r(s).hqLongitude != null
												? p(St)
												: p(Mt, !1);
										});
									}
									(t(Kr), t(ur));
									var Er = o(ur, 2),
										dr = n(Er),
										Bt = n(dr, !0);
									t(dr);
									var Hr = o(dr, 2),
										Or = n(Hr),
										Rt = n(Or, !0);
									(t(Or), t(Hr), t(Er), t(he));
									var qt = o(he, 2);
									{
										var Ft = (p) => {
												var m = yl(),
													I = n(m),
													C = n(I),
													J = n(C),
													Ve = n(J, !0);
												t(J);
												var oe = o(J, 2),
													ze = n(oe),
													Ge = n(ze);
												t(ze);
												var Ae = o(ze);
												(t(oe), t(C));
												var Je = o(C, 2),
													_e = n(Je),
													Xe = n(_e);
												jn(Xe, { class: "size-4" });
												var De = o(Xe);
												(t(_e), t(Je), t(I));
												var xe = o(I, 2),
													Ye = n(xe),
													Pe = n(Ye),
													er = n(Pe),
													Ce = o(n(er)),
													Le = n(Ce),
													_r = n(Le);
												(t(Le), t(Ce));
												var mr = o(Ce),
													vr = n(mr),
													Kt = n(vr);
												(t(vr), t(mr));
												var fr = o(mr),
													Et = n(fr, !0);
												t(fr);
												var br = o(fr),
													pr = n(br),
													Ht = n(pr);
												(t(pr), t(br));
												var Ot = o(br);
												{
													var Qt = (T) => {
															var f = pl(),
																O = n(f, !0);
															(t(f), x((Y) => c(O, Y), [() => Yn()]), b(T, f));
														},
														Ut = N(() =>
															W.hasPermission(
																X.dashboard.alliances.removeMember,
															),
														);
													H(Ot, (T) => {
														r(Ut) && T(Qt);
													});
												}
												(t(er), t(Pe));
												var Qr = o(Pe),
													Ur = n(Qr);
												jr(
													Ur,
													17,
													() => r(Ee),
													(T) => T.id,
													(T, f) => {
														var O = xl(),
															Y = n(O),
															me = n(Y);
														{
															let ne = N(() => r(f).picture ?? void 0);
															et(me, {
																class: "size-8",
																get userId() {
																	return r(f).id;
																},
																get pictureUrl() {
																	return r(ne);
																},
															});
														}
														t(Y);
														var Ne = o(Y),
															hr = n(Ne);
														{
															let ne = N(() => ve(r(f).id)),
																ae = N(() => ve(r(f).id));
															nt(hr, {
																get userId() {
																	return r(f).id;
																},
																mode: "inline",
																get linkClass() {
																	return `link font-semibold ${r(ne) ?? ""}`;
																},
																get textClass() {
																	return r(ae);
																},
																children: (Me, tr) => {
																	sr();
																	var nr = hl(),
																		ar = yr(nr),
																		Gr = o(ar),
																		an = n(Gr);
																	(t(Gr),
																		x(() => {
																			(c(ar, `${r(f).name ?? ""} `),
																				c(an, `#${r(f).id ?? ""}`));
																		}),
																		b(Me, nr));
																},
																$$slots: { default: !0 },
															});
														}
														t(Ne);
														var gr = o(Ne),
															Jt = n(gr, !0);
														t(gr);
														var xr = o(gr),
															rr = n(xr),
															Zr = n(rr);
														tt(Zr, { class: "size-4" });
														var Xt = o(Zr);
														(t(rr), t(xr));
														var kr = o(xr),
															Wr = n(kr),
															ke = n(Wr),
															Yt = n(ke, !0);
														t(ke);
														var Se = o(ke, 2),
															en = n(Se, !0);
														(t(Se), t(Wr), t(kr));
														var Vr = o(kr),
															rn = n(Vr);
														{
															var tn = (ne) => {
																	var ae = gl(),
																		Me = n(ae, !0);
																	(t(ae),
																		x(
																			(tr) => {
																				((ae.disabled = r(h)), c(Me, tr));
																			},
																			[() => qn()],
																		),
																		w("click", ae, () => xt(r(f))),
																		b(ne, ae));
																},
																nn = N(() =>
																	W.hasPermission(
																		X.dashboard.alliances.removeMember,
																	),
																);
															H(rn, (ne) => {
																r(nn) && ne(tn);
															});
														}
														(t(Vr),
															t(O),
															x(
																(ne, ae, Me, tr, nr, ar) => {
																	(c(Jt, ne),
																		(rr.disabled =
																			!r(f).lastPixelLatitude ||
																			!r(f).lastPixelLongitude),
																		c(Xt, ` ${ae ?? ""}`),
																		Ar(ke, 1, Me),
																		(ke.disabled =
																			r(h) || r(f).role === "member"),
																		c(Yt, tr),
																		Ar(Se, 1, nr),
																		(Se.disabled =
																			r(h) || r(f).role === "admin"),
																		c(en, ar));
																},
																[
																	() =>
																		r(f).pixelsPainted.toLocaleString(
																			navigator.language,
																		),
																	() => at(),
																	() => `btn btn-xs join-item w-16 
																		${r(f).role === "member" ? "btn-primary" : "btn-outline"}
																		${W.hasPermission(X.dashboard.alliances.role) ? "" : "pointer-events-none"}`,
																	() => so(),
																	() => `btn btn-xs join-item w-16 
																		${r(f).role === "admin" ? "btn-primary" : "btn-outline"}
																		${W.hasPermission(X.dashboard.alliances.role) ? "" : "pointer-events-none"}`,
																	() => $n(),
																],
															),
															w("click", rr, () => kt(r(f))),
															w("click", ke, () => Rr(r(f), "member")),
															w("click", Se, () => Rr(r(f), "admin")),
															b(T, O));
													},
												);
												var Zt = o(Ur);
												{
													var Wt = (T) => {
														var f = kl(),
															O = n(f),
															Y = n(O, !0);
														(t(O),
															t(f),
															x((me) => c(Y, me), [() => ai()]),
															b(T, f));
													};
													H(Zt, (T) => {
														r(Ee).length === 0 && T(Wt);
													});
												}
												(t(Qr), t(Ye), t(xe));
												var Vt = o(xe, 2);
												{
													var Gt = (T) => {
														var f = wl(),
															O = n(f),
															Y = n(O, !0);
														(t(O),
															t(f),
															x(
																(me) => {
																	((O.disabled = r(h)), c(Y, me));
																},
																[() => Nn()],
															),
															w("click", O, () => Sr()),
															b(T, f));
													};
													H(Vt, (T) => {
														r(vt) && T(Gt);
													});
												}
												(t(m),
													x(
														(T, f, O, Y, me, Ne, hr) => {
															(c(Ve, T),
																c(Ge, `${f ?? ""}:`),
																c(Ae, ` ${r(s).membersCount ?? ""}`),
																(_e.disabled = r(h)),
																c(De, ` ${O ?? ""}`),
																c(
																	_r,
																	`${Y ?? ""}
															${r(pe) === "name" ? (r(ce) === "asc" ? "▲" : "▼") : ""}`,
																),
																c(
																	Kt,
																	`${me ?? ""}
															${r(pe) === "pixels" ? (r(ce) === "asc" ? "▲" : "▼") : ""}`,
																),
																c(Et, Ne),
																c(
																	Ht,
																	`${hr ?? ""}
															${r(pe) === "role" ? (r(ce) === "asc" ? "▲" : "▼") : ""}`,
																));
														},
														[
															() => Sn(),
															() => Tn(),
															() => Rn(),
															() => Mn(),
															() => Cr(),
															() => Ln(),
															() => Fn(),
														],
													),
													w("click", _e, () => r(s) && He(r(s).id, !0)),
													w("click", Le, () => or("name")),
													w("click", vr, () => or("pixels")),
													w("click", pr, () => or("role")),
													b(p, m));
											},
											Tt = N(() =>
												W.hasPermission(X.dashboard.alliances.members),
											);
										H(qt, (p) => {
											r(Tt) && p(Ft);
										});
									}
									(t(B),
										x(
											(p, m, I, C) => {
												(c(Oe, p),
													c(Ue, r(s).description ?? "—"),
													c(cr, m),
													c(Bt, I),
													c(Rt, C));
											},
											[
												() => In(),
												() => ls(),
												() => Cr(),
												() =>
													r(s).pixelsPainted.toLocaleString(navigator.language),
											],
										),
										Xr(
											1,
											B,
											() => lt,
											() => ({ duration: 120 }),
										),
										Xr(
											2,
											B,
											() => lt,
											() => ({ duration: 80 }),
										),
										b(z, B));
								},
							),
								b(g, _));
						};
					H(u, (g) => {
						r(h) && !r(s) ? g(v) : r(fe) ? g(Q, 1) : r(s) ? g(E, !1) : g(M, 2);
					});
				}
				(t(l), b(a, l));
			},
			zt = N(() => W.hasPermission(X.dashboard.alliances.details));
		H(jt, (a) => {
			r(zt) && a($t);
		});
	}
	t(lr);
	var Fr = o(lr, 2);
	{
		var At = (a) => {
			var l = $l(),
				u = n(l),
				v = n(u),
				Q = n(v, !0);
			t(v);
			var M = o(v, 2),
				E = n(M);
			($r(E), t(M));
			var g = o(M, 2),
				_ = n(g),
				$ = n(_, !0);
			t(_);
			var z = o(_, 2),
				B = n(z, !0);
			(t(z), t(g), t(u));
			var q = o(u, 2);
			(t(l),
				x(
					(F, V, U) => {
						(c(Q, F),
							(_.disabled = r(h)),
							c($, V),
							(z.disabled = r(h)),
							c(B, U));
					},
					[() => pi(), () => Lr(), () => ot()],
				),
				w("keydown", E, (F) => F.key === "Enter" && Mr()),
				Dr(
					E,
					() => r(Re),
					(F) => i(Re, F),
				),
				w("click", _, () => i(Ie, !1)),
				w("click", z, Mr),
				w("click", q, () => i(Ie, !1)),
				b(a, l));
		};
		H(Fr, (a) => {
			r(Ie) && a(At);
		});
	}
	var Tr = o(Fr, 2);
	{
		var Dt = (a) => {
			var l = zl(),
				u = n(l),
				v = n(u),
				Q = n(v, !0);
			t(v);
			var M = o(v, 2),
				E = n(M, !0);
			t(M);
			var g = o(M, 2),
				_ = n(g);
			($r(_), t(g));
			var $ = o(g, 2),
				z = n($),
				B = n(z, !0);
			t(z);
			var q = o(z, 2),
				F = n(q, !0);
			(t(q), t($), t(u));
			var V = o(u, 2);
			(t(l),
				x(
					(U, re, G, ue, ee) => {
						(c(Q, U),
							c(E, re),
							zr(_, "placeholder", G),
							(z.disabled = r(h)),
							c(B, ue),
							(q.disabled = r(h)),
							c(F, ee));
					},
					[() => ut(), () => dt(), () => dt(), () => Lr(), () => ot()],
				),
				w("keydown", _, (U) => U.key === "Enter" && Br()),
				Dr(
					_,
					() => r(qe),
					(U) => i(qe, U),
				),
				w("click", z, () => i(je, !1)),
				w("click", q, Br),
				w("click", V, () => i(je, !1)),
				b(a, l));
		};
		H(Tr, (a) => {
			r(je) && a(Dt);
		});
	}
	var Pt = o(Tr, 2);
	{
		var Ct = (a) => {
			var l = Dl(),
				u = n(l),
				v = n(u),
				Q = n(v, !0);
			t(v);
			var M = o(v, 2),
				E = n(M, !0);
			t(M);
			var g = o(M, 2),
				_ = n(g),
				$ = n(_),
				z = n($, !0);
			t($);
			var B = o($, 2),
				q = n(B);
			q.value = q.__value = "";
			var F = o(q);
			(jr(
				F,
				17,
				() => _t,
				(y) => y.value,
				(y, P) => {
					var A = Al(),
						te = n(A, !0);
					t(A);
					var Z = {};
					(x(() => {
						(c(te, r(P).label),
							Z !== (Z = r(P).value) &&
								(A.value = (A.__value = r(P).value) ?? ""));
					}),
						b(y, A));
				},
			),
				t(B),
				t(_),
				t(g));
			var V = o(g, 2),
				U = n(V);
			{
				let y = N(() => yn()),
					P = N(() => (r(le) === "doxxing" ? 20 : 5));
				wn(U, {
					class: "h-24 rounded-lg",
					name: "notes",
					get placeholder() {
						return r(y);
					},
					max: 2056,
					get min() {
						return r(P);
					},
					get value() {
						return r(Fe);
					},
					set value(A) {
						i(Fe, A, !0);
					},
					get validate() {
						return r(Te);
					},
					set validate(A) {
						i(Te, A, !0);
					},
				});
			}
			t(V);
			var re = o(V, 2),
				G = n(re),
				ue = n(G, !0);
			t(G);
			var ee = o(G, 2),
				j = n(ee, !0);
			(t(ee), t(re), t(u));
			var D = o(u, 2);
			(t(l),
				x(
					(y, P, A, te, Z, de) => {
						(c(Q, y),
							c(E, P),
							c(z, A),
							zr(B, "aria-label", te),
							(G.disabled = r(h)),
							c(ue, Z),
							(ee.disabled = r(h) || !r(le)),
							c(j, de));
					},
					[
						() => ct(),
						() => Va(),
						() => Yr(),
						() => Yr(),
						() => Lr(),
						() => Dn(),
					],
				),
				fn(
					B,
					() => r(le),
					(y) => i(le, y),
				),
				w("click", G, () => i(be, !1)),
				w("click", ee, gt),
				w("click", D, () => i(be, !1)),
				b(a, l));
		};
		H(Pt, (a) => {
			r(be) && a(Ct);
		});
	}
	(t(ir), b(S, ir), ln());
}
sn(["click", "keydown"]);
export { vc as component };
