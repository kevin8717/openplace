import "../chunks/Bzak7iHL.js";
import { o as gc, a as mc } from "../chunks/DMoMXVXI.js";
import {
	k as xc,
	p as $c,
	e as v,
	g as bn,
	I as Ca,
	i as r,
	q as Ic,
	f as jt,
	a as D,
	b as zc,
	u as U,
	h as _,
	j as jc,
	c as X,
	$ as Cc,
	d as u,
	r as l,
	s as b,
	n as Sc,
	t as M,
	l as j,
	v as Sa,
} from "../chunks/Dbe4PVAU.js";
import { s as h } from "../chunks/C_mo-lyU.js";
import { i as K } from "../chunks/Icl9dwnj.js";
import { e as Tc } from "../chunks/sR4NyGSS.js";
import { h as Dc } from "../chunks/ClbV77Km.js";
import {
	r as ue,
	g as Ec,
	s as Y,
	a as Ct,
	b as St,
	f as Pc,
} from "../chunks/B7_gUtXa.js";
import { b as Se, a as Xc } from "../chunks/C1Rrr0ww.js";
import { b as pn } from "../chunks/DPEu3dBb.js";
import { b as Ta } from "../chunks/BVz9wMiQ.js";
import { g as Da, a as Yc } from "../chunks/C6d2kgDd.js";
import { p as Tt } from "../chunks/DzNOOKXC.js";
import { e as Ac } from "../chunks/yew7vgrr.js";
import {
	a as ce,
	P as Mc,
	u as rr,
	t as O,
	B as Lc,
	C as Ea,
	b as Fc,
} from "../chunks/DU-2YUMG.js";
import { P as Pa } from "../chunks/JKnWQwH6.js";
import { g as y } from "../chunks/BhCkpOlh.js";
import { c as Nc } from "../chunks/jEDRT1k8.js";
import { l as qc } from "../chunks/Cme64dX3.js";
import { n as Bc } from "../chunks/-AhnqyAZ.js";
import { r as Uc } from "../chunks/BAR6D20Q.js";
const Rc = (e) => `Alliance ${e.allianceId}`,
	Wc = (e) => `Aliança ${e.allianceId}`,
	Zc = (e) => `联盟 ${e.allianceId}`,
	Hc = (e) => `Allianz ${e.allianceId}`,
	Vc = (e) => `Alianza ${e.allianceId}`,
	Kc = (e) => `Alliance ${e.allianceId}`,
	Oc = (e) => `Alleanza ${e.allianceId}`,
	Gc = (e) => `同盟 ${e.allianceId}`,
	Qc = (e) => `Sojusz ${e.allianceId}`,
	Jc = (e) => `Альянс ${e.allianceId}`,
	es = (e) => `Альянс ${e.allianceId}`,
	ts = (e) => `Liên minh ${e.allianceId}`,
	rs = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Rc(e)
			: t === "pt"
				? Wc(e)
				: t === "ch"
					? Zc(e)
					: t === "de"
						? Hc(e)
						: t === "es"
							? Vc(e)
							: t === "fr"
								? Kc(e)
								: t === "it"
									? Oc(e)
									: t === "jp"
										? Gc(e)
										: t === "pl"
											? Qc(e)
											: t === "ru"
												? Jc(e)
												: t === "uk"
													? es(e)
													: ts(e);
	},
	ns = (e) => `Alliance ID ${e.allianceId} copied`,
	as = (e) => `ID da aliança ${e.allianceId} copiado`,
	is = (e) => `联盟ID ${e.allianceId} 已复制`,
	cs = (e) => `Allianz-ID ${e.allianceId} kopiert`,
	ss = (e) => `ID de la alianza ${e.allianceId} copiado`,
	os = (e) => `ID de l'alliance ${e.allianceId} copié`,
	_s = (e) => `ID dell'alleanza ${e.allianceId} copiato`,
	ls = (e) => `アライアンスID ${e.allianceId} がコピーされました`,
	us = (e) => `ID sojuszu ${e.allianceId} skopiowano`,
	ds = (e) => `ID альянса ${e.allianceId} скопирован`,
	fs = (e) => `Ідентифікатор альянсу ${e.allianceId} скопійовано`,
	bs = (e) => `ID liên minh ${e.allianceId} đã sao chép`,
	ps = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? ns(e)
			: t === "pt"
				? as(e)
				: t === "ch"
					? is(e)
					: t === "de"
						? cs(e)
						: t === "es"
							? ss(e)
							: t === "fr"
								? os(e)
								: t === "it"
									? _s(e)
									: t === "jp"
										? ls(e)
										: t === "pl"
											? us(e)
											: t === "ru"
												? ds(e)
												: t === "uk"
													? fs(e)
													: bs(e);
	},
	ys = () => "Alliance IDs",
	ks = () => "IDs de aliança",
	hs = () => "联盟 ID",
	ws = () => "Allianz-IDs",
	vs = () => "IDs de alianza",
	gs = () => "IDs d'alliance",
	ms = () => "ID alleanza",
	xs = () => "同盟ID",
	$s = () => "ID sojuszy",
	Is = () => "ID альянсов",
	zs = () => "ID альянсів",
	js = () => "ID liên minh",
	Cs = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? ys()
			: t === "pt"
				? ks()
				: t === "ch"
					? hs()
					: t === "de"
						? ws()
						: t === "es"
							? vs()
							: t === "fr"
								? gs()
								: t === "it"
									? ms()
									: t === "jp"
										? xs()
										: t === "pl"
											? $s()
											: t === "ru"
												? Is()
												: t === "uk"
													? zs()
													: js();
	},
	Ss = (e) => `Area ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ts = (e) => `Área ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ds = (e) => `区域 ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Es = (e) => `Bereich ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ps = (e) => `Área ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Xs = (e) => `Zone ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ys = (e) => `Area ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	As = (e) => `エリア ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ms = (e) => `Obszar ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ls = (e) => `Область ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Fs = (e) => `Область ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	Ns = (e) => `Khu vực ${e.x0},${e.y0} - ${e.x1},${e.y1}`,
	qs = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Ss(e)
			: t === "pt"
				? Ts(e)
				: t === "ch"
					? Ds(e)
					: t === "de"
						? Es(e)
						: t === "es"
							? Ps(e)
							: t === "fr"
								? Xs(e)
								: t === "it"
									? Ys(e)
									: t === "jp"
										? As(e)
										: t === "pl"
											? Ms(e)
											: t === "ru"
												? Ls(e)
												: t === "uk"
													? Fs(e)
													: Ns(e);
	},
	Bs = () => "Base",
	Us = () => "Base",
	Rs = () => "基础",
	Ws = () => "Basis",
	Zs = () => "Base",
	Hs = () => "Base",
	Vs = () => "Base",
	Ks = () => "ベース",
	Os = () => "Baza",
	Gs = () => "База",
	Qs = () => "База",
	Js = () => "Cơ sở",
	eo = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Bs()
			: t === "pt"
				? Us()
				: t === "ch"
					? Rs()
					: t === "de"
						? Ws()
						: t === "es"
							? Zs()
							: t === "fr"
								? Hs()
								: t === "it"
									? Vs()
									: t === "jp"
										? Ks()
										: t === "pl"
											? Os()
											: t === "ru"
												? Gs()
												: t === "uk"
													? Qs()
													: Js();
	},
	to = () => "Canvas Preview",
	ro = () => "Prévia do Canvas",
	no = () => "画布预览",
	ao = () => "Canvas-Vorschau",
	io = () => "Vista previa del Canvas",
	co = () => "Aperçu du Canvas",
	so = () => "Anteprima del Canvas",
	oo = () => "キャンバスプレビュー",
	_o = () => "Podgląd Canvasu",
	lo = () => "Предварительный просмотр холста",
	uo = () => "Попередній перегляд Канвасу",
	fo = () => "Xem trước Canvas",
	bo = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? to()
			: t === "pt"
				? ro()
				: t === "ch"
					? no()
					: t === "de"
						? ao()
						: t === "es"
							? io()
							: t === "fr"
								? co()
								: t === "it"
									? so()
									: t === "jp"
										? oo()
										: t === "pl"
											? _o()
											: t === "ru"
												? lo()
												: t === "uk"
													? uo()
													: fo();
	},
	po = () => "Clear filters",
	yo = () => "Limpar filtros",
	ko = () => "清除筛选",
	ho = () => "Filter zurücksetzen",
	wo = () => "Borrar filtros",
	vo = () => "Effacer les filtres",
	go = () => "Cancella filtri",
	mo = () => "フィルターをクリア",
	xo = () => "Wyczyść filtry",
	$o = () => "Очистить фильтры",
	Io = () => "Очистити фільтри",
	zo = () => "Xóa bộ lọc",
	jo = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? po()
			: t === "pt"
				? yo()
				: t === "ch"
					? ko()
					: t === "de"
						? ho()
						: t === "es"
							? wo()
							: t === "fr"
								? vo()
								: t === "it"
									? go()
									: t === "jp"
										? mo()
										: t === "pl"
											? xo()
											: t === "ru"
												? $o()
												: t === "uk"
													? Io()
													: zo();
	},
	Co = () => "Clear highlights",
	So = () => "Limpar destaques",
	To = () => "清除高亮",
	Do = () => "Hervorhebungen löschen",
	Eo = () => "Borrar destacados",
	Po = () => "Effacer les surlignages",
	Xo = () => "Cancella evidenziazioni",
	Yo = () => "ハイライトをクリア",
	Ao = () => "Wyczyść podświetlenia",
	Mo = () => "Очистить выделения",
	Lo = () => "Очистити виділення",
	Fo = () => "Xóa đánh dấu",
	No = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Co()
			: t === "pt"
				? So()
				: t === "ch"
					? To()
					: t === "de"
						? Do()
						: t === "es"
							? Eo()
							: t === "fr"
								? Po()
								: t === "it"
									? Xo()
									: t === "jp"
										? Yo()
										: t === "pl"
											? Ao()
											: t === "ru"
												? Mo()
												: t === "uk"
													? Lo()
													: Fo();
	},
	qo = (e) => `Clear (${e.count})`,
	Bo = (e) => `Limpar (${e.count})`,
	Uo = (e) => `清除 (${e.count})`,
	Ro = (e) => `Reinigen (${e.count})`,
	Wo = (e) => `Limpiar (${e.count})`,
	Zo = (e) => `Effacer (${e.count})`,
	Ho = (e) => `Pulire (${e.count})`,
	Vo = (e) => `クリア (${e.count})`,
	Ko = (e) => `Wyczyść (${e.count})`,
	Oo = (e) => `Очистить (${e.count})`,
	Go = (e) => `Очистити (${e.count})`,
	Qo = (e) => `Xóa (${e.count})`,
	Jo = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? qo(e)
			: t === "pt"
				? Bo(e)
				: t === "ch"
					? Uo(e)
					: t === "de"
						? Ro(e)
						: t === "es"
							? Wo(e)
							: t === "fr"
								? Zo(e)
								: t === "it"
									? Ho(e)
									: t === "jp"
										? Vo(e)
										: t === "pl"
											? Ko(e)
											: t === "ru"
												? Oo(e)
												: t === "uk"
													? Go(e)
													: Qo(e);
	},
	e_ = () => "Click on a pixel to inspect",
	t_ = () => "Clique em um pixel para inspecionar",
	r_ = () => "点击一个像素以检查",
	n_ = () => "Klicken Sie auf ein Pixel zur Inspektion",
	a_ = () => "Haz clic en un píxel para inspeccionar",
	i_ = () => "Cliquez sur un pixel pour inspecter",
	c_ = () => "Clicca su un pixel per ispezionare",
	s_ = () => "ピクセルをクリックして検査",
	o_ = () => "Kliknij piksel, aby sprawdzić",
	__ = () => "Нажмите на пиксель, чтобы проверить",
	l_ = () => "Натисніть на піксель, щоб перевірити",
	u_ = () => "Nhấp vào một pixel để kiểm tra",
	d_ = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? e_()
			: t === "pt"
				? t_()
				: t === "ch"
					? r_()
					: t === "de"
						? n_()
						: t === "es"
							? a_()
							: t === "fr"
								? i_()
								: t === "it"
									? c_()
									: t === "jp"
										? s_()
										: t === "pl"
											? o_()
											: t === "ru"
												? __()
												: t === "uk"
													? l_()
													: u_();
	},
	f_ = () => "Click to copy",
	b_ = () => "Clique para copiar",
	p_ = () => "点击复制",
	y_ = () => "Zum Kopieren anklicken",
	k_ = () => "Haz clic para copiar",
	h_ = () => "Cliquez pour copier",
	w_ = () => "Clicca per copiare",
	v_ = () => "クリックしてコピー",
	g_ = () => "Kliknij, aby skopiować",
	m_ = () => "Нажмите, чтобы скопировать",
	x_ = () => "Натисніть, щоб скопіювати",
	$_ = () => "Nhấp để sao chép",
	Xa = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? f_()
			: t === "pt"
				? b_()
				: t === "ch"
					? p_()
					: t === "de"
						? y_()
						: t === "es"
							? k_()
							: t === "fr"
								? h_()
								: t === "it"
									? w_()
									: t === "jp"
										? v_()
										: t === "pl"
											? g_()
											: t === "ru"
												? m_()
												: t === "uk"
													? x_()
													: $_();
	},
	I_ = () => "Drag on the preview to filter by area",
	z_ = () => "Arraste na prévia para filtrar por área",
	j_ = () => "在预览上拖动以按区域筛选",
	C_ = () => "Ziehen Sie in der Vorschau, um nach Bereich zu filtern",
	S_ = () => "Arrastra en la vista previa para filtrar por área",
	T_ = () => "Faites glisser sur l'aperçu pour filtrer par zone",
	D_ = () => "Trascina sull'anteprima per filtrare per area",
	E_ = () => "プレビュー上をドラッグしてエリアでフィルタ",
	P_ = () => "Przeciągnij na podglądzie, aby filtrować po obszarze",
	X_ = () => "Перетащите по предпросмотру, чтобы фильтровать по области",
	Y_ = () =>
		"Перетягніть на попередньому перегляді, щоб фільтрувати за областю",
	A_ = () => "Kéo trên bản xem trước để lọc theo khu vực",
	M_ = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? I_()
			: t === "pt"
				? z_()
				: t === "ch"
					? j_()
					: t === "de"
						? C_()
						: t === "es"
							? S_()
							: t === "fr"
								? T_()
								: t === "it"
									? D_()
									: t === "jp"
										? E_()
										: t === "pl"
											? P_()
											: t === "ru"
												? X_()
												: t === "uk"
													? Y_()
													: A_();
	},
	L_ = (e) => `Duration: ${e.duration}`,
	F_ = (e) => `Duração: ${e.duration}`,
	N_ = (e) => `时长：${e.duration}`,
	q_ = (e) => `Dauer: ${e.duration}`,
	B_ = (e) => `Duración: ${e.duration}`,
	U_ = (e) => `Durée : ${e.duration}`,
	R_ = (e) => `Durata: ${e.duration}`,
	W_ = (e) => `期間: ${e.duration}`,
	Z_ = (e) => `Czas trwania: ${e.duration}`,
	H_ = (e) => `Длительность: ${e.duration}`,
	V_ = (e) => `Тривалість: ${e.duration}`,
	K_ = (e) => `Thời lượng: ${e.duration}`,
	O_ = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? L_(e)
			: t === "pt"
				? F_(e)
				: t === "ch"
					? N_(e)
					: t === "de"
						? q_(e)
						: t === "es"
							? B_(e)
							: t === "fr"
								? U_(e)
								: t === "it"
									? R_(e)
									: t === "jp"
										? W_(e)
										: t === "pl"
											? Z_(e)
											: t === "ru"
												? H_(e)
												: t === "uk"
													? V_(e)
													: K_(e);
	},
	G_ = () => "This event has no pixels to focus on",
	Q_ = () => "Este evento não tem pixels para focar",
	J_ = () => "此事件没有可供聚焦的像素",
	el = () => "Dieses Event hat keine Pixel zum Fokussieren",
	tl = () => "Este evento no tiene píxeles para enfocar",
	rl = () => "Cet événement n'a pas de pixels à cibler",
	nl = () => "Questo evento non ha pixel su cui focalizzarsi",
	al = () => "このイベントにはフォーカスするピクセルがありません",
	il = () => "To wydarzenie nie ma pikseli do targetowania.",
	cl = () => "У этого события нет пикселей для фокусировки",
	sl = () => "Ця подія не має пікселів для фокусування",
	ol = () => "Sự kiện này không có pixel để nhắm mục tiêu.",
	_l = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? G_()
			: t === "pt"
				? Q_()
				: t === "ch"
					? J_()
					: t === "de"
						? el()
						: t === "es"
							? tl()
							: t === "fr"
								? rl()
								: t === "it"
									? nl()
									: t === "jp"
										? al()
										: t === "pl"
											? il()
											: t === "ru"
												? cl()
												: t === "uk"
													? sl()
													: ol();
	},
	ll = (e) => `Events: ${e.count}`,
	ul = (e) => `Eventos: ${e.count}`,
	dl = (e) => `活动: ${e.count}`,
	fl = (e) => `Ereignisse: ${e.count}`,
	bl = (e) => `Eventos: ${e.count}`,
	pl = (e) => `Événements : ${e.count}`,
	yl = (e) => `Eventi: ${e.count}`,
	kl = (e) => `イベント数：${e.count}`,
	hl = (e) => `Wydarzenia: ${e.count}`,
	wl = (e) => `События: ${e.count}`,
	vl = (e) => `Події: ${e.count}`,
	gl = (e) => `Sự kiện: ${e.count}`,
	ml = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? ll(e)
			: t === "pt"
				? ul(e)
				: t === "ch"
					? dl(e)
					: t === "de"
						? fl(e)
						: t === "es"
							? bl(e)
							: t === "fr"
								? pl(e)
								: t === "it"
									? yl(e)
									: t === "jp"
										? kl(e)
										: t === "pl"
											? hl(e)
											: t === "ru"
												? wl(e)
												: t === "uk"
													? vl(e)
													: gl(e);
	},
	xl = () => "Events",
	$l = () => "Eventos",
	Il = () => "活动",
	zl = () => "Veranstaltungen",
	jl = () => "Eventos",
	Cl = () => "Événements",
	Sl = () => "Eventi",
	Tl = () => "イベント",
	Dl = () => "Wydarzenia",
	El = () => "События",
	Pl = () => "Події",
	Xl = () => "Sự kiện",
	Yl = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? xl()
			: t === "pt"
				? $l()
				: t === "ch"
					? Il()
					: t === "de"
						? zl()
						: t === "es"
							? jl()
							: t === "fr"
								? Cl()
								: t === "it"
									? Sl()
									: t === "jp"
										? Tl()
										: t === "pl"
											? Dl()
											: t === "ru"
												? El()
												: t === "uk"
													? Pl()
													: Xl();
	},
	Al = () => "Failed to load tile image",
	Ml = () => "Falha ao carregar a imagem do tile",
	Ll = () => "加载瓦片图像失败",
	Fl = () => "Fehler beim Laden des Kachelbilds",
	Nl = () => "Fallo al cargar la imagen del mosaico",
	ql = () => "Échec du chargement de l'image de la tuile",
	Bl = () => "Impossibile caricare l'immagine del tile",
	Ul = () => "タイル画像の読み込みに失敗しました",
	Rl = () => "Nie udało się załadować obrazu kafelka",
	Wl = () => "Не удалось загрузить изображение плитки",
	Zl = () => "Не вдалося завантажити зображення плитки",
	Hl = () => "Không thể tải ảnh ô xếp",
	Vl = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Al()
			: t === "pt"
				? Ml()
				: t === "ch"
					? Ll()
					: t === "de"
						? Fl()
						: t === "es"
							? Nl()
							: t === "fr"
								? ql()
								: t === "it"
									? Bl()
									: t === "jp"
										? Ul()
										: t === "pl"
											? Rl()
											: t === "ru"
												? Wl()
												: t === "uk"
													? Zl()
													: Hl();
	},
	Kl = () => "Search",
	Ol = () => "Buscar",
	Gl = () => "搜索",
	Ql = () => "Suchen",
	Jl = () => "Buscar",
	eu = () => "Rechercher",
	tu = () => "Cercare",
	ru = () => "検索",
	nu = () => "Szukaj",
	au = () => "Поиск",
	iu = () => "Шукати",
	cu = () => "Tìm kiếm",
	su = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Kl()
			: t === "pt"
				? Ol()
				: t === "ch"
					? Gl()
					: t === "de"
						? Ql()
						: t === "es"
							? Jl()
							: t === "fr"
								? eu()
								: t === "it"
									? tu()
									: t === "jp"
										? ru()
										: t === "pl"
											? nu()
											: t === "ru"
												? au()
												: t === "uk"
													? iu()
													: cu();
	},
	ou = () => "From",
	_u = () => "De",
	lu = () => "从",
	uu = () => "Von",
	du = () => "Desde",
	fu = () => "De",
	bu = () => "Da",
	pu = () => "開始",
	yu = () => "Od",
	ku = () => "С",
	hu = () => "Від",
	wu = () => "Từ",
	vu = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? ou()
			: t === "pt"
				? _u()
				: t === "ch"
					? lu()
					: t === "de"
						? uu()
						: t === "es"
							? du()
							: t === "fr"
								? fu()
								: t === "it"
									? bu()
									: t === "jp"
										? pu()
										: t === "pl"
											? yu()
											: t === "ru"
												? ku()
												: t === "uk"
													? hu()
													: wu();
	},
	gu = () => "Go to this event",
	mu = () => "Ir para este evento",
	xu = () => "前往此活动",
	$u = () => "Gehe zu diesem Event",
	Iu = () => "Ir a este evento",
	zu = () => "Aller à cet événement",
	ju = () => "Vai a questo evento",
	Cu = () => "このイベントへ行く",
	Su = () => "Przejdź do tego wydarzenia",
	Tu = () => "Перейти к этому событию",
	Du = () => "Перейти до цієї події",
	Eu = () => "Đi đến sự kiện này",
	Pu = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? gu()
			: t === "pt"
				? mu()
				: t === "ch"
					? xu()
					: t === "de"
						? $u()
						: t === "es"
							? Iu()
							: t === "fr"
								? zu()
								: t === "it"
									? ju()
									: t === "jp"
										? Cu()
										: t === "pl"
											? Su()
											: t === "ru"
												? Tu()
												: t === "uk"
													? Du()
													: Eu();
	},
	Xu = () => "Highlight this event",
	Yu = () => "Destacar este evento",
	Au = () => "突出此活动",
	Mu = () => "Diese Veranstaltung hervorheben",
	Lu = () => "Destacar este evento",
	Fu = () => "Mettre en avant cet événement",
	Nu = () => "Evidenziare questo evento",
	qu = () => "このイベントをハイライトする",
	Bu = () => "Wyróżnij to wydarzenie",
	Uu = () => "Выделить это событие",
	Ru = () => "Виділити цю подію",
	Wu = () => "Làm nổi bật sự kiện này",
	Zu = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Xu()
			: t === "pt"
				? Yu()
				: t === "ch"
					? Au()
					: t === "de"
						? Mu()
						: t === "es"
							? Lu()
							: t === "fr"
								? Fu()
								: t === "it"
									? Nu()
									: t === "jp"
										? qu()
										: t === "pl"
											? Bu()
											: t === "ru"
												? Uu()
												: t === "uk"
													? Ru()
													: Wu();
	},
	Hu = () => "Highlight all loaded pixels from this user",
	Vu = () => "Destacar todos os pixels carregados deste usuário",
	Ku = () => "高亮显示该用户的所有已加载像素",
	Ou = () => "Alle geladenen Pixel dieses Benutzers hervorheben",
	Gu = () => "Destacar todos los píxeles cargados de este usuario",
	Qu = () => "Mettre en évidence tous les pixels chargés de cet utilisateur",
	Ju = () => "Evidenzia tutti i pixel caricati di questo utente",
	ed = () => "このユーザーから読み込まれたすべてのピクセルをハイライト",
	td = () => "Wyróżnij wszystkie załadowane piksele tego użytkownika",
	rd = () => "Выделить все загруженные пиксели этого пользователя",
	nd = () => "Виділити всі завантажені пікселі цього користувача",
	ad = () => "Làm nổi bật tất cả pixel đã tải của người dùng này",
	id = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Hu()
			: t === "pt"
				? Vu()
				: t === "ch"
					? Ku()
					: t === "de"
						? Ou()
						: t === "es"
							? Gu()
							: t === "fr"
								? Qu()
								: t === "it"
									? Ju()
									: t === "jp"
										? ed()
										: t === "pl"
											? td()
											: t === "ru"
												? rd()
												: t === "uk"
													? nd()
													: ad();
	},
	cd = () => "Highlight users",
	sd = () => "Destacar usuários",
	od = () => "高亮用户",
	_d = () => "Benutzer hervorheben",
	ld = () => "Destacar usuarios",
	ud = () => "Mettre en évidence les utilisateurs",
	dd = () => "Evidenzia utenti",
	fd = () => "ユーザーをハイライト",
	bd = () => "Wyróżnij użytkowników",
	pd = () => "Выделить пользователей",
	yd = () => "Виділити користувачів",
	kd = () => "Làm nổi bật người dùng",
	hd = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? cd()
			: t === "pt"
				? sd()
				: t === "ch"
					? od()
					: t === "de"
						? _d()
						: t === "es"
							? ld()
							: t === "fr"
								? ud()
								: t === "it"
									? dd()
									: t === "jp"
										? fd()
										: t === "pl"
											? bd()
											: t === "ru"
												? pd()
												: t === "uk"
													? yd()
													: kd();
	},
	wd = (e) => `Highlighted ${e.count} user events`,
	vd = (e) => `${e.count} eventos do usuário destacados`,
	gd = (e) => `已高亮 ${e.count} 个用户事件`,
	md = (e) => `${e.count} Benutzerereignisse hervorgehoben`,
	xd = (e) => `${e.count} eventos de usuario destacados`,
	$d = (e) => `${e.count} événements utilisateur mis en évidence`,
	Id = (e) => `${e.count} eventi utente evidenziati`,
	zd = (e) => `${e.count}件のユーザーイベントをハイライトしました`,
	jd = (e) => `Wyróżniono ${e.count} wydarzeń użytkownika`,
	Cd = (e) => `Выделено ${e.count} событий пользователя`,
	Sd = (e) => `Виділено ${e.count} подій користувача`,
	Td = (e) => `Đã làm nổi bật ${e.count} sự kiện người dùng`,
	Dd = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? wd(e)
			: t === "pt"
				? vd(e)
				: t === "ch"
					? gd(e)
					: t === "de"
						? md(e)
						: t === "es"
							? xd(e)
							: t === "fr"
								? $d(e)
								: t === "it"
									? Id(e)
									: t === "jp"
										? zd(e)
										: t === "pl"
											? jd(e)
											: t === "ru"
												? Cd(e)
												: t === "uk"
													? Sd(e)
													: Td(e);
	},
	Ed = (e) => `Highlights: ${e.count}`,
	Pd = (e) => `Destaques: ${e.count}`,
	Xd = (e) => `亮点：${e.count}`,
	Yd = (e) => `Höhepunkte: ${e.count}`,
	Ad = (e) => `Destacados: ${e.count}`,
	Md = (e) => `Points forts : ${e.count}`,
	Ld = (e) => `In evidenza: ${e.count}`,
	Fd = (e) => `ハイライト: ${e.count}`,
	Nd = (e) => `Wyróżnione: ${e.count}`,
	qd = (e) => `Основные моменты: ${e.count}`,
	Bd = (e) => `Актуальне: ${e.count}`,
	Ud = (e) => `Điểm nổi bật: ${e.count}`,
	Rd = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Ed(e)
			: t === "pt"
				? Pd(e)
				: t === "ch"
					? Xd(e)
					: t === "de"
						? Yd(e)
						: t === "es"
							? Ad(e)
							: t === "fr"
								? Md(e)
								: t === "it"
									? Ld(e)
									: t === "jp"
										? Fd(e)
										: t === "pl"
											? Nd(e)
											: t === "ru"
												? qd(e)
												: t === "uk"
													? Bd(e)
													: Ud(e);
	},
	Wd = () => "Load events to enable timeline navigation.",
	Zd = () => "Carregue eventos para habilitar a navegação da linha do tempo.",
	Hd = () => "加载事件以启用时间线导航。",
	Vd = () =>
		"Laden Sie Ereignisse, um die Zeitleisten-Navigation zu ermöglichen.",
	Kd = () =>
		"Cargue eventos para habilitar la navegación de la línea de tiempo.",
	Od = () =>
		"Chargez des événements pour activer la navigation sur la ligne du temps.",
	Gd = () =>
		"Carica eventi per abilitare la navigazione della linea temporale.",
	Qd = () =>
		"タイムラインのナビゲーションを有効にするには、イベントを読み込んでください。",
	Jd = () => "Wczytaj wydarzenia, aby włączyć nawigację po osi czasu.",
	ef = () => "Загрузите события, чтобы включить навигацию по временной шкале.",
	tf = () => "Завантажте події, щоб увімкнути навігацію по шкалі часу.",
	rf = () => "Tải các sự kiện để bật tính năng điều hướng dòng thời gian.",
	nf = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Wd()
			: t === "pt"
				? Zd()
				: t === "ch"
					? Hd()
					: t === "de"
						? Vd()
						: t === "es"
							? Kd()
							: t === "fr"
								? Od()
								: t === "it"
									? Gd()
									: t === "jp"
										? Qd()
										: t === "pl"
											? Jd()
											: t === "ru"
												? ef()
												: t === "uk"
													? tf()
													: rf();
	},
	af = (e) => `Loaded: ${e.count}`,
	cf = (e) => `Carregados: ${e.count}`,
	sf = (e) => `已加载：${e.count}`,
	of = (e) => `Geladen: ${e.count}`,
	_f = (e) => `Cargados: ${e.count}`,
	lf = (e) => `Chargés : ${e.count}`,
	uf = (e) => `Caricati: ${e.count}`,
	df = (e) => `読み込み済み: ${e.count}`,
	ff = (e) => `Załadowano: ${e.count}`,
	bf = (e) => `Загружено: ${e.count}`,
	pf = (e) => `Завантажено: ${e.count}`,
	yf = (e) => `Đã tải: ${e.count}`,
	kf = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? af(e)
			: t === "pt"
				? cf(e)
				: t === "ch"
					? sf(e)
					: t === "de"
						? of(e)
						: t === "es"
							? _f(e)
							: t === "fr"
								? lf(e)
								: t === "it"
									? uf(e)
									: t === "jp"
										? df(e)
										: t === "pl"
											? ff(e)
											: t === "ru"
												? bf(e)
												: t === "uk"
													? pf(e)
													: yf(e);
	},
	hf = (e) => `Loaded ${e.count} events (page 1)`,
	wf = (e) => `Carregados ${e.count} eventos (página 1)`,
	vf = (e) => `已加载 ${e.count} 个事件 (第 1 页)`,
	gf = (e) => `Geladen ${e.count} Ereignisse (Seite 1)`,
	mf = (e) => `Cargados ${e.count} eventos (página 1)`,
	xf = (e) => `Chargés ${e.count} événements (page 1)`,
	$f = (e) => `Caricati ${e.count} eventi (pagina 1)`,
	If = (e) => `${e.count} イベントが読み込まれました (ページ1)`,
	zf = (e) => `Załadowano ${e.count} wydarzeń (strona 1)`,
	jf = (e) => `Загружено ${e.count} событий (страница 1)`,
	Cf = (e) => `Завантажено ${e.count} подій (сторінка 1)`,
	Sf = (e) => `Đã tải ${e.count} sự kiện (trang 1)`,
	Tf = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? hf(e)
			: t === "pt"
				? wf(e)
				: t === "ch"
					? vf(e)
					: t === "de"
						? gf(e)
						: t === "es"
							? mf(e)
							: t === "fr"
								? xf(e)
								: t === "it"
									? $f(e)
									: t === "jp"
										? If(e)
										: t === "pl"
											? zf(e)
											: t === "ru"
												? jf(e)
												: t === "uk"
													? Cf(e)
													: Sf(e);
	},
	Df = (e) => `Loaded +${e.newCount} events (total ${e.totalCount})`,
	Ef = (e) => `Carregados +${e.newCount} eventos (total ${e.totalCount})`,
	Pf = (e) => `加载了 +${e.newCount} 个事件 (共 ${e.totalCount} 个)`,
	Xf = (e) => `Geladen +${e.newCount} Ereignisse (gesamt ${e.totalCount})`,
	Yf = (e) => `Cargados +${e.newCount} eventos (total ${e.totalCount})`,
	Af = (e) => `Chargés +${e.newCount} événements (total ${e.totalCount})`,
	Mf = (e) => `Caricati +${e.newCount} eventi (totale ${e.totalCount})`,
	Lf = (e) =>
		`読み込みました +${e.newCount}件のイベント (合計 ${e.totalCount}件)`,
	Ff = (e) => `Załadowano +${e.newCount} zdarzeń (łącznie ${e.totalCount})`,
	Nf = (e) => `Загружено +${e.newCount} событий (всего ${e.totalCount})`,
	qf = (e) => `Завантажено +${e.newCount} подій (всього ${e.totalCount})`,
	Bf = (e) => `Đã tải +${e.newCount} sự kiện (tổng cộng ${e.totalCount})`,
	Uf = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Df(e)
			: t === "pt"
				? Ef(e)
				: t === "ch"
					? Pf(e)
					: t === "de"
						? Xf(e)
						: t === "es"
							? Yf(e)
							: t === "fr"
								? Af(e)
								: t === "it"
									? Mf(e)
									: t === "jp"
										? Lf(e)
										: t === "pl"
											? Ff(e)
											: t === "ru"
												? Nf(e)
												: t === "uk"
													? qf(e)
													: Bf(e);
	},
	Rf = () => "Loading users",
	Wf = () => "Carregando usuários",
	Zf = () => "正在加载用户",
	Hf = () => "Benutzer werden geladen",
	Vf = () => "Cargando usuarios",
	Kf = () => "Chargement des utilisateurs",
	Of = () => "Caricamento utenti",
	Gf = () => "ユーザーを読み込み中",
	Qf = () => "Ładowanie użytkowników",
	Jf = () => "Загрузка пользователей",
	eb = () => "Завантаження користувачів",
	tb = () => "Đang tải người dùng",
	rb = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Rf()
			: t === "pt"
				? Wf()
				: t === "ch"
					? Zf()
					: t === "de"
						? Hf()
						: t === "es"
							? Vf()
							: t === "fr"
								? Kf()
								: t === "it"
									? Of()
									: t === "jp"
										? Gf()
										: t === "pl"
											? Qf()
											: t === "ru"
												? Jf()
												: t === "uk"
													? eb()
													: tb();
	},
	nb = () => "Time Machine",
	ab = () => "Máquina do Tempo",
	ib = () => "时间机器",
	cb = () => "Zeitmaschine",
	sb = () => "Máquina del Tiempo",
	ob = () => "Machine à voyager dans le temps",
	_b = () => "Macchina del Tempo",
	lb = () => "タイムマシン",
	ub = () => "Maszyna Czasu",
	db = () => "Машина времени",
	fb = () => "Машина часу",
	bb = () => "Cỗ máy thời gian",
	Ya = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? nb()
			: t === "pt"
				? ab()
				: t === "ch"
					? ib()
					: t === "de"
						? cb()
						: t === "es"
							? sb()
							: t === "fr"
								? ob()
								: t === "it"
									? _b()
									: t === "jp"
										? lb()
										: t === "pl"
											? ub()
											: t === "ru"
												? db()
												: t === "uk"
													? fb()
													: bb();
	},
	pb = () => "Next event",
	yb = () => "Próximo evento",
	kb = () => "下个活动",
	hb = () => "Nächstes Ereignis",
	wb = () => "Próximo evento",
	vb = () => "Prochain événement",
	gb = () => "Prossimo evento",
	mb = () => "次のイベント",
	xb = () => "Następne wydarzenie",
	$b = () => "Следующее событие",
	Ib = () => "Наступна подія",
	zb = () => "Sự kiện tiếp theo",
	jb = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? pb()
			: t === "pt"
				? yb()
				: t === "ch"
					? kb()
					: t === "de"
						? hb()
						: t === "es"
							? wb()
							: t === "fr"
								? vb()
								: t === "it"
									? gb()
									: t === "jp"
										? mb()
										: t === "pl"
											? xb()
											: t === "ru"
												? $b()
												: t === "uk"
													? Ib()
													: zb();
	},
	Cb = () =>
		'No event loaded. Set the tile coordinates and the timestamp, then click "Search".',
	Sb = () =>
		'Nenhum evento carregado. Defina as coordenadas do tile e o timestamp, depois clique em "Buscar".',
	Tb = () => "未加载事件。定义瓦片坐标和时间戳，然后点击“搜索”。",
	Db = () =>
		'Keine Ereignisse geladen. Definieren Sie die Kachelkoordinaten und den Zeitstempel und klicken Sie dann auf "Suchen".',
	Eb = () =>
		'Ningún evento cargado. Defina las coordenadas del tile y el timestamp, luego haga clic en "Buscar".',
	Pb = () =>
		`Aucun événement chargé. Définissez les coordonnées de la tuile et l'horodatage, puis cliquez sur "Rechercher".`,
	Xb = () =>
		'Nessun evento caricato. Imposta le coordinate del tile e il timestamp, poi clicca su "Cerca".',
	Yb = () =>
		"イベントが読み込まれていません。タイルの座標とタイムスタンプを設定し、その後「検索」をクリックしてください。",
	Ab = () =>
		'Brak załadowanych zdarzeń. Zdefiniuj współrzędne kafelka i znacznik czasu, następnie kliknij "Szukaj".',
	Mb = () =>
		'Событий не загружено. Определите координаты тайла и временную метку, затем нажмите "Найти".',
	Lb = () =>
		'Жодних подій не завантажено. Встановіть координати тайла та часову мітку, потім натисніть "Пошук".',
	Fb = () =>
		'Chưa tải sự kiện nào. Thiết lập tọa độ ô và dấu thời gian, sau đó nhấp vào "Tìm kiếm".',
	Nb = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Cb()
			: t === "pt"
				? Sb()
				: t === "ch"
					? Tb()
					: t === "de"
						? Db()
						: t === "es"
							? Eb()
							: t === "fr"
								? Pb()
								: t === "it"
									? Xb()
									: t === "jp"
										? Yb()
										: t === "pl"
											? Ab()
											: t === "ru"
												? Mb()
												: t === "uk"
													? Lb()
													: Fb();
	},
	qb = () => "No loaded events match the filters.",
	Bb = () => "Nenhum evento carregado corresponde aos filtros.",
	Ub = () => "没有已加载的事件匹配筛选条件。",
	Rb = () => "Keine geladenen Ereignisse entsprechen den Filtern.",
	Wb = () => "Ningún evento cargado coincide con los filtros.",
	Zb = () => "Aucun événement chargé ne correspond aux filtres.",
	Hb = () => "Nessun evento caricato corrisponde ai filtri.",
	Vb = () => "フィルターに一致する読み込み済みイベントはありません。",
	Kb = () => "Żadne załadowane wydarzenia nie pasują do filtrów.",
	Ob = () => "Нет загруженных событий, соответствующих фильтрам.",
	Gb = () => "Жодна із завантажених подій не відповідає фільтрам.",
	Qb = () => "Không có sự kiện đã tải nào khớp với bộ lọc.",
	Jb = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? qb()
			: t === "pt"
				? Bb()
				: t === "ch"
					? Ub()
					: t === "de"
						? Rb()
						: t === "es"
							? Wb()
							: t === "fr"
								? Zb()
								: t === "it"
									? Hb()
									: t === "jp"
										? Vb()
										: t === "pl"
											? Kb()
											: t === "ru"
												? Ob()
												: t === "uk"
													? Gb()
													: Qb();
	},
	ep = () => "There are no more events in this range.",
	tp = () => "Não há mais eventos neste intervalo.",
	rp = () => "此范围内没有更多事件了。",
	np = () => "Es gibt keine weiteren Veranstaltungen in diesem Zeitraum.",
	ap = () => "No hay más eventos en este intervalo.",
	ip = () => "Il n'y a plus d'événements dans cet intervalle.",
	cp = () => "Non ci sono più eventi in questo intervallo.",
	sp = () => "この期間にはもうイベントがありません。",
	op = () => "Nie ma już więcej wydarzeń w tym przedziale.",
	_p = () => "Больше нет событий в этом интервале.",
	lp = () => "Більше немає подій у цьому діапазоні.",
	up = () => "Không có sự kiện nào khác trong khoảng thời gian này.",
	dp = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? ep()
			: t === "pt"
				? tp()
				: t === "ch"
					? rp()
					: t === "de"
						? np()
						: t === "es"
							? ap()
							: t === "fr"
								? ip()
								: t === "it"
									? cp()
									: t === "jp"
										? sp()
										: t === "pl"
											? op()
											: t === "ru"
												? _p()
												: t === "uk"
													? lp()
													: up();
	},
	fp = () => "No pixels found for these users.",
	bp = () => "Nenhum pixel encontrado para estes usuários.",
	pp = () => "未找到这些用户的像素。",
	yp = () => "Für diese Benutzer wurden keine Pixel gefunden.",
	kp = () => "No se encontraron píxeles para estos usuarios.",
	hp = () => "Aucun pixel trouvé pour ces utilisateurs.",
	wp = () => "Nessun pixel trovato per questi utenti.",
	vp = () => "これらのユーザーのピクセルは見つかりませんでした。",
	gp = () => "Nie znaleziono pikseli dla tych użytkowników.",
	mp = () => "Пиксели для этих пользователей не найдены.",
	xp = () => "Для цих користувачів не знайдено пікселів.",
	$p = () => "Không tìm thấy pixel nào cho những người dùng này.",
	Ip = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? fp()
			: t === "pt"
				? bp()
				: t === "ch"
					? pp()
					: t === "de"
						? yp()
						: t === "es"
							? kp()
							: t === "fr"
								? hp()
								: t === "it"
									? wp()
									: t === "jp"
										? vp()
										: t === "pl"
											? gp()
											: t === "ru"
												? mp()
												: t === "uk"
													? xp()
													: $p();
	},
	zp = (e) => `Pixel ${e.x}, ${e.y}`,
	jp = (e) => `Pixel ${e.x}, ${e.y}`,
	Cp = (e) => `像素 ${e.x}, ${e.y}`,
	Sp = (e) => `Pixel ${e.x}, ${e.y}`,
	Tp = (e) => `Píxel ${e.x}, ${e.y}`,
	Dp = (e) => `Pixel ${e.x}, ${e.y}`,
	Ep = (e) => `Pixel ${e.x}, ${e.y}`,
	Pp = (e) => `ピクセル ${e.x}、${e.y}`,
	Xp = (e) => `Piksel ${e.x}, ${e.y}`,
	Yp = (e) => `Пиксель ${e.x}, ${e.y}`,
	Ap = (e) => `Піксель ${e.x}, ${e.y}`,
	Mp = (e) => `Pixel ${e.x}, ${e.y}`,
	Lp = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? zp(e)
			: t === "pt"
				? jp(e)
				: t === "ch"
					? Cp(e)
					: t === "de"
						? Sp(e)
						: t === "es"
							? Tp(e)
							: t === "fr"
								? Dp(e)
								: t === "it"
									? Ep(e)
									: t === "jp"
										? Pp(e)
										: t === "pl"
											? Xp(e)
											: t === "ru"
												? Yp(e)
												: t === "uk"
													? Ap(e)
													: Mp(e);
	},
	Fp = (e) => `Pixels: ${e.count}`,
	Np = (e) => `Pixels: ${e.count}`,
	qp = (e) => `像素：${e.count}`,
	Bp = (e) => `Pixel: ${e.count}`,
	Up = (e) => `Píxeles: ${e.count}`,
	Rp = (e) => `Pixels : ${e.count}`,
	Wp = (e) => `Pixel: ${e.count}`,
	Zp = (e) => `ピクセル: ${e.count}`,
	Hp = (e) => `Piksele: ${e.count}`,
	Vp = (e) => `Пиксели: ${e.count}`,
	Kp = (e) => `Пікселі: ${e.count}`,
	Op = (e) => `Pixel: ${e.count}`,
	Gp = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Fp(e)
			: t === "pt"
				? Np(e)
				: t === "ch"
					? qp(e)
					: t === "de"
						? Bp(e)
						: t === "es"
							? Up(e)
							: t === "fr"
								? Rp(e)
								: t === "it"
									? Wp(e)
									: t === "jp"
										? Zp(e)
										: t === "pl"
											? Hp(e)
											: t === "ru"
												? Vp(e)
												: t === "uk"
													? Kp(e)
													: Op(e);
	},
	Qp = (e) => `${e.count} pixels`,
	Jp = (e) => `${e.count} pixels`,
	ey = (e) => `${e.count} 像素`,
	ty = (e) => `${e.count} Pixel`,
	ry = (e) => `${e.count} píxeles`,
	ny = (e) => `${e.count} pixels`,
	ay = (e) => `${e.count} pixel`,
	iy = (e) => `${e.count} ピクセル`,
	cy = (e) => `${e.count} pikseli`,
	sy = (e) => `${e.count} пикселей`,
	oy = (e) => `${e.count} пікселів`,
	_y = (e) => `${e.count} pixel`,
	ly = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Qp(e)
			: t === "pt"
				? Jp(e)
				: t === "ch"
					? ey(e)
					: t === "de"
						? ty(e)
						: t === "es"
							? ry(e)
							: t === "fr"
								? ny(e)
								: t === "it"
									? ay(e)
									: t === "jp"
										? iy(e)
										: t === "pl"
											? cy(e)
											: t === "ru"
												? sy(e)
												: t === "uk"
													? oy(e)
													: _y(e);
	},
	uy = () => "Play backward",
	dy = () => "Reproduzir para trás",
	fy = () => "倒放",
	by = () => "Rückwärts abspielen",
	py = () => "Reproducir hacia atrás",
	yy = () => "Lire à l'envers",
	ky = () => "Riprodurre all'indietro",
	hy = () => "逆再生",
	wy = () => "Odtwórz wstecz",
	vy = () => "Воспроизвести назад",
	gy = () => "Відтворити назад",
	my = () => "Phát ngược",
	xy = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? uy()
			: t === "pt"
				? dy()
				: t === "ch"
					? fy()
					: t === "de"
						? by()
						: t === "es"
							? py()
							: t === "fr"
								? yy()
								: t === "it"
									? ky()
									: t === "jp"
										? hy()
										: t === "pl"
											? wy()
											: t === "ru"
												? vy()
												: t === "uk"
													? gy()
													: my();
	},
	$y = () => "Fast forward",
	Iy = () => "Reproduzir para frente",
	zy = () => "快进",
	jy = () => "Vorspulen",
	Cy = () => "Avanzar",
	Sy = () => "Lire en avant",
	Ty = () => "Riproduci in avanti",
	Dy = () => "早送り",
	Ey = () => "Odtwórz do przodu",
	Py = () => "Воспроизвести вперед",
	Xy = () => "Відтворити вперед",
	Yy = () => "Tua tới",
	Ay = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? $y()
			: t === "pt"
				? Iy()
				: t === "ch"
					? zy()
					: t === "de"
						? jy()
						: t === "es"
							? Cy()
							: t === "fr"
								? Sy()
								: t === "it"
									? Ty()
									: t === "jp"
										? Dy()
										: t === "pl"
											? Ey()
											: t === "ru"
												? Py()
												: t === "uk"
													? Xy()
													: Yy();
	},
	My = () => "End",
	Ly = () => "Fim",
	Fy = () => "结束",
	Ny = () => "Ende",
	qy = () => "Fin",
	By = () => "Fin",
	Uy = () => "Fine",
	Ry = () => "終了",
	Wy = () => "Koniec",
	Zy = () => "Конец",
	Hy = () => "Кінець",
	Vy = () => "Kết thúc",
	Ky = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? My()
			: t === "pt"
				? Ly()
				: t === "ch"
					? Fy()
					: t === "de"
						? Ny()
						: t === "es"
							? qy()
							: t === "fr"
								? By()
								: t === "it"
									? Uy()
									: t === "jp"
										? Ry()
										: t === "pl"
											? Wy()
											: t === "ru"
												? Zy()
												: t === "uk"
													? Hy()
													: Vy();
	},
	Oy = () => "Home",
	Gy = () => "Início",
	Qy = () => "首页",
	Jy = () => "Start",
	ek = () => "Inicio",
	tk = () => "Accueil",
	rk = () => "Inizio",
	nk = () => "ホーム",
	ak = () => "Strona główna",
	ik = () => "Главная",
	ck = () => "Головна",
	sk = () => "Trang chủ",
	ok = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Oy()
			: t === "pt"
				? Gy()
				: t === "ch"
					? Qy()
					: t === "de"
						? Jy()
						: t === "es"
							? ek()
							: t === "fr"
								? tk()
								: t === "it"
									? rk()
									: t === "jp"
										? nk()
										: t === "pl"
											? ak()
											: t === "ru"
												? ik()
												: t === "uk"
													? ck()
													: sk();
	},
	_k = () => "Previous event",
	lk = () => "Evento anterior",
	uk = () => "上一个活动",
	dk = () => "Vorheriges Ereignis",
	fk = () => "Evento anterior",
	bk = () => "Événement précédent",
	pk = () => "Evento precedente",
	yk = () => "前のイベント",
	kk = () => "Poprzednie wydarzenie",
	hk = () => "Предыдущее событие",
	wk = () => "Попередня подія",
	vk = () => "Sự kiện trước đó",
	gk = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? _k()
			: t === "pt"
				? lk()
				: t === "ch"
					? uk()
					: t === "de"
						? dk()
						: t === "es"
							? fk()
							: t === "fr"
								? bk()
								: t === "it"
									? pk()
									: t === "jp"
										? yk()
										: t === "pl"
											? kk()
											: t === "ru"
												? hk()
												: t === "uk"
													? wk()
													: vk();
	},
	mk = () => "Scroll to zoom, drag to move, click to highlight",
	xk = () => "Role para dar zoom, arraste para mover, clique para destacar",
	$k = () => "滚动缩放，拖拽移动，点击突出显示",
	Ik = () => "Zum Zoomen scrollen, zum Bewegen ziehen, zum Hervorheben klicken",
	zk = () =>
		"Desplázate para hacer zoom, arrastra para mover, haz clic para destacar",
	jk = () =>
		"Faites défiler pour zoomer, faites glisser pour déplacer, cliquez pour mettre en évidence",
	Ck = () =>
		"Scorri per zoomare, trascina per spostare, clicca per evidenziare",
	Sk = () => "スクロールでズーム、ドラッグで移動、クリックでハイライト",
	Tk = () =>
		"Przewiń, aby przybliżyć, przeciągnij, aby przesunąć, kliknij, aby wyróżnić",
	Dk = () =>
		"Прокрутите для масштабирования, перетащите для перемещения, щелкните для выделения",
	Ek = () =>
		"Прокрутіть, щоб збільшити, перетягніть, щоб перемістити, натисніть, щоб виділити",
	Pk = () => "Cuộn để thu phóng, kéo để di chuyển, nhấp để làm nổi bật",
	Xk = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? mk()
			: t === "pt"
				? xk()
				: t === "ch"
					? $k()
					: t === "de"
						? Ik()
						: t === "es"
							? zk()
							: t === "fr"
								? jk()
								: t === "it"
									? Ck()
									: t === "jp"
										? Sk()
										: t === "pl"
											? Tk()
											: t === "ru"
												? Dk()
												: t === "uk"
													? Ek()
													: Pk();
	},
	Yk = () => "Search",
	Ak = () => "Buscar",
	Mk = () => "搜索",
	Lk = () => "Suchen",
	Fk = () => "Buscar",
	Nk = () => "Rechercher",
	qk = () => "Cerca",
	Bk = () => "検索",
	Uk = () => "Szukaj",
	Rk = () => "Поиск",
	Wk = () => "Пошук",
	Zk = () => "Tìm kiếm",
	Hk = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Yk()
			: t === "pt"
				? Ak()
				: t === "ch"
					? Mk()
					: t === "de"
						? Lk()
						: t === "es"
							? Fk()
							: t === "fr"
								? Nk()
								: t === "it"
									? qk()
									: t === "jp"
										? Bk()
										: t === "pl"
											? Uk()
											: t === "ru"
												? Rk()
												: t === "uk"
													? Wk()
													: Zk();
	},
	Vk = () => "User, alliance, pixels, date",
	Kk = () => "Usuário, aliança, pixels, data",
	Ok = () => "用户、联盟、像素、日期",
	Gk = () => "Benutzer, Allianz, Pixel, Datum",
	Qk = () => "Usuario, alianza, píxeles, fecha",
	Jk = () => "Utilisateur, alliance, pixels, date",
	eh = () => "Utente, alleanza, pixel, data",
	th = () => "ユーザー、同盟、ピクセル、日付",
	rh = () => "Użytkownik, sojusz, piksele, data",
	nh = () => "Пользователь, альянс, пиксели, дата",
	ah = () => "Користувач, альянс, пікселі, дата",
	ih = () => "Người dùng, liên minh, pixel, ngày",
	ch = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Vk()
			: t === "pt"
				? Kk()
				: t === "ch"
					? Ok()
					: t === "de"
						? Gk()
						: t === "es"
							? Qk()
							: t === "fr"
								? Jk()
								: t === "it"
									? eh()
									: t === "jp"
										? th()
										: t === "pl"
											? rh()
											: t === "ru"
												? nh()
												: t === "uk"
													? ah()
													: ih();
	},
	sh = () => "Select area",
	oh = () => "Selecionar área",
	_h = () => "选择区域",
	lh = () => "Bereich auswählen",
	uh = () => "Seleccionar área",
	dh = () => "Sélectionner une zone",
	fh = () => "Seleziona area",
	bh = () => "エリアを選択",
	ph = () => "Wybierz obszar",
	yh = () => "Выбрать область",
	kh = () => "Вибрати область",
	hh = () => "Chọn khu vực",
	wh = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? sh()
			: t === "pt"
				? oh()
				: t === "ch"
					? _h()
					: t === "de"
						? lh()
						: t === "es"
							? uh()
							: t === "fr"
								? dh()
								: t === "it"
									? fh()
									: t === "jp"
										? bh()
										: t === "pl"
											? ph()
											: t === "ru"
												? yh()
												: t === "uk"
													? kh()
													: hh();
	},
	vh = () => "Tile X",
	gh = () => "Tile X",
	mh = () => "图块 X",
	xh = () => "Kachel X",
	$h = () => "Mosaico X",
	Ih = () => "Tuile X",
	zh = () => "Tessera X",
	jh = () => "タイルX",
	Ch = () => "Płytka X",
	Sh = () => "Плитка X",
	Th = () => "Плитка X",
	Dh = () => "Ô X",
	Eh = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? vh()
			: t === "pt"
				? gh()
				: t === "ch"
					? mh()
					: t === "de"
						? xh()
						: t === "es"
							? $h()
							: t === "fr"
								? Ih()
								: t === "it"
									? zh()
									: t === "jp"
										? jh()
										: t === "pl"
											? Ch()
											: t === "ru"
												? Sh()
												: t === "uk"
													? Th()
													: Dh();
	},
	Ph = () => "Tile X and Y are required",
	Xh = () => "Tile X e Y são obrigatórios",
	Yh = () => "Tile X 和 Y 是必填项。",
	Ah = () => "Kachel X und Y sind erforderlich",
	Mh = () => "Tile X y Y son obligatorios",
	Lh = () => "Les tuiles X et Y sont obligatoires",
	Fh = () => "Tile X e Y sono obbligatori",
	Nh = () => "タイルXとYは必須です。",
	qh = () => "Kafelki X i Y są obowiązkowe",
	Bh = () => "Плитка X и Y обязательны",
	Uh = () => "Плитка X і Y обов'язкові",
	Rh = () => "Ô X và Y là bắt buộc",
	Wh = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Ph()
			: t === "pt"
				? Xh()
				: t === "ch"
					? Yh()
					: t === "de"
						? Ah()
						: t === "es"
							? Mh()
							: t === "fr"
								? Lh()
								: t === "it"
									? Fh()
									: t === "jp"
										? Nh()
										: t === "pl"
											? qh()
											: t === "ru"
												? Bh()
												: t === "uk"
													? Uh()
													: Rh();
	},
	Zh = () => "Tile Y",
	Hh = () => "Tile Y",
	Vh = () => "磁贴 Y",
	Kh = () => "Kachel Y",
	Oh = () => "Tesela Y",
	Gh = () => "Tuile Y",
	Qh = () => "Tessera Y",
	Jh = () => "タイル Y",
	ew = () => "Kafelek Y",
	tw = () => "Плитка Y",
	rw = () => "Плитка Y",
	nw = () => "Ô Y",
	aw = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Zh()
			: t === "pt"
				? Hh()
				: t === "ch"
					? Vh()
					: t === "de"
						? Kh()
						: t === "es"
							? Oh()
							: t === "fr"
								? Gh()
								: t === "it"
									? Qh()
									: t === "jp"
										? Jh()
										: t === "pl"
											? ew()
											: t === "ru"
												? tw()
												: t === "uk"
													? rw()
													: nw();
	},
	iw = () => "Timeline",
	cw = () => "Linha do tempo",
	sw = () => "时间线",
	ow = () => "Zeitachse",
	_w = () => "Línea de tiempo",
	lw = () => "Chronologie",
	uw = () => "Cronologia",
	dw = () => "タイムライン",
	fw = () => "Oś czasu",
	bw = () => "Хронология",
	pw = () => "Хронологія",
	yw = () => "Dòng thời gian",
	kw = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? iw()
			: t === "pt"
				? cw()
				: t === "ch"
					? sw()
					: t === "de"
						? ow()
						: t === "es"
							? _w()
							: t === "fr"
								? lw()
								: t === "it"
									? uw()
									: t === "jp"
										? dw()
										: t === "pl"
											? fw()
											: t === "ru"
												? bw()
												: t === "uk"
													? pw()
													: yw();
	},
	hw = () => "Timestamp",
	ww = () => "Timestamp",
	vw = () => "时间戳",
	gw = () => "Zeitstempel",
	mw = () => "Marca de tiempo",
	xw = () => "Horodatage",
	$w = () => "Marca temporale",
	Iw = () => "タイムスタンプ",
	zw = () => "znacznik czasu",
	jw = () => "Метка времени",
	Cw = () => "Мітка часу",
	Sw = () => "Dấu thời gian",
	Tw = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? hw()
			: t === "pt"
				? ww()
				: t === "ch"
					? vw()
					: t === "de"
						? gw()
						: t === "es"
							? mw()
							: t === "fr"
								? xw()
								: t === "it"
									? $w()
									: t === "jp"
										? Iw()
										: t === "pl"
											? zw()
											: t === "ru"
												? jw()
												: t === "uk"
													? Cw()
													: Sw();
	},
	Dw = () => "Timestamp is required",
	Ew = () => "Timestamp é obrigatório",
	Pw = () => "时间戳是必填的",
	Xw = () => "Zeitstempel ist obligatorisch",
	Yw = () => "La marca de tiempo es obligatoria",
	Aw = () => "Le timestamp est obligatoire.",
	Mw = () => "Timestamp è obbligatorio",
	Lw = () => "タイムスタンプは必須です",
	Fw = () => "Znacznik czasu jest wymagany",
	Nw = () => "Таймстамп обязателен",
	qw = () => "Мітка часу є обов'язковою",
	Bw = () => "Thời gian là bắt buộc",
	Uw = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Dw()
			: t === "pt"
				? Ew()
				: t === "ch"
					? Pw()
					: t === "de"
						? Xw()
						: t === "es"
							? Yw()
							: t === "fr"
								? Aw()
								: t === "it"
									? Mw()
									: t === "jp"
										? Lw()
										: t === "pl"
											? Fw()
											: t === "ru"
												? Nw()
												: t === "uk"
													? qw()
													: Bw();
	},
	Rw = () => "To",
	Ww = () => "Até",
	Zw = () => "到",
	Hw = () => "Bis",
	Vw = () => "Hasta",
	Kw = () => "À",
	Ow = () => "A",
	Gw = () => "終了",
	Qw = () => "Do",
	Jw = () => "По",
	ev = () => "До",
	tv = () => "Đến",
	rv = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Rw()
			: t === "pt"
				? Ww()
				: t === "ch"
					? Zw()
					: t === "de"
						? Hw()
						: t === "es"
							? Vw()
							: t === "fr"
								? Kw()
								: t === "it"
									? Ow()
									: t === "jp"
										? Gw()
										: t === "pl"
											? Qw()
											: t === "ru"
												? Jw()
												: t === "uk"
													? ev()
													: tv();
	},
	nv = () => "Unknown user",
	av = () => "Usuário desconhecido",
	iv = () => "未知用户",
	cv = () => "Unbekannter Benutzer",
	sv = () => "Usuario desconocido",
	ov = () => "Utilisateur inconnu",
	_v = () => "Utente sconosciuto",
	lv = () => "不明なユーザー",
	uv = () => "Nieznany użytkownik",
	dv = () => "Неизвестный пользователь",
	fv = () => "Невідомий користувач",
	bv = () => "Người dùng không xác định",
	pv = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? nv()
			: t === "pt"
				? av()
				: t === "ch"
					? iv()
					: t === "de"
						? cv()
						: t === "es"
							? sv()
							: t === "fr"
								? ov()
								: t === "it"
									? _v()
									: t === "jp"
										? lv()
										: t === "pl"
											? uv()
											: t === "ru"
												? dv()
												: t === "uk"
													? fv()
													: bv();
	},
	yv = (e) => `User ID #${e.userId} copied`,
	kv = (e) => `ID do usuário #${e.userId} copiado`,
	hv = (e) => `用户ID #${e.userId} 已复制`,
	wv = (e) => `Benutzer-ID #${e.userId} kopiert`,
	vv = (e) => `ID de usuario #${e.userId} copiado`,
	gv = (e) => `ID utilisateur #${e.userId} copié`,
	mv = (e) => `ID utente #${e.userId} copiato`,
	xv = (e) => `ユーザーID #${e.userId} がコピーされました`,
	$v = (e) => `ID użytkownika #${e.userId} skopiowany`,
	Iv = (e) => `ID пользователя #${e.userId} скопирован`,
	zv = (e) => `ID користувача #${e.userId} скопійовано`,
	jv = (e) => `ID người dùng #${e.userId} đã sao chép`,
	Cv = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? yv(e)
			: t === "pt"
				? kv(e)
				: t === "ch"
					? hv(e)
					: t === "de"
						? wv(e)
						: t === "es"
							? vv(e)
							: t === "fr"
								? gv(e)
								: t === "it"
									? mv(e)
									: t === "jp"
										? xv(e)
										: t === "pl"
											? $v(e)
											: t === "ru"
												? Iv(e)
												: t === "uk"
													? zv(e)
													: jv(e);
	},
	Sv = () => "User IDs",
	Tv = () => "IDs de usuário",
	Dv = () => "用户 ID",
	Ev = () => "Benutzer-IDs",
	Pv = () => "IDs de usuario",
	Xv = () => "IDs utilisateur",
	Yv = () => "ID utente",
	Av = () => "ユーザーID",
	Mv = () => "ID użytkowników",
	Lv = () => "ID пользователей",
	Fv = () => "ID користувачів",
	Nv = () => "ID người dùng",
	qv = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Sv()
			: t === "pt"
				? Tv()
				: t === "ch"
					? Dv()
					: t === "de"
						? Ev()
						: t === "es"
							? Pv()
							: t === "fr"
								? Xv()
								: t === "it"
									? Yv()
									: t === "jp"
										? Av()
										: t === "pl"
											? Mv()
											: t === "ru"
												? Lv()
												: t === "uk"
													? Fv()
													: Nv();
	},
	Bv = (e) => `User #${e.userId}`,
	Uv = (e) => `Usuário #${e.userId}`,
	Rv = (e) => `用户 #${e.userId}`,
	Wv = (e) => `Benutzer #${e.userId}`,
	Zv = (e) => `Usuario #${e.userId}`,
	Hv = (e) => `Utilisateur #${e.userId}`,
	Vv = (e) => `Utente #${e.userId}`,
	Kv = (e) => `ユーザー#${e.userId}`,
	Ov = (e) => `Użytkownik #${e.userId}`,
	Gv = (e) => `Пользователь #${e.userId}`,
	Qv = (e) => `Користувач #${e.userId}`,
	Jv = (e) => `Người dùng #${e.userId}`,
	eg = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? Bv(e)
			: t === "pt"
				? Uv(e)
				: t === "ch"
					? Rv(e)
					: t === "de"
						? Wv(e)
						: t === "es"
							? Zv(e)
							: t === "fr"
								? Hv(e)
								: t === "it"
									? Vv(e)
									: t === "jp"
										? Kv(e)
										: t === "pl"
											? Ov(e)
											: t === "ru"
												? Gv(e)
												: t === "uk"
													? Qv(e)
													: Jv(e);
	},
	tg = (e) => `Zoom ${e.zoom}x`,
	rg = (e) => `Zoom ${e.zoom}x`,
	ng = (e) => `缩放 ${e.zoom} 倍`,
	ag = (e) => `Zoom ${e.zoom}x`,
	ig = (e) => `Zoom ${e.zoom}x`,
	cg = (e) => `Zoom ${e.zoom}x`,
	sg = (e) => `Zoom ${e.zoom}x`,
	og = (e) => `ズーム ${e.zoom}x`,
	_g = (e) => `Zoom ${e.zoom}x`,
	lg = (e) => `Увеличение ${e.zoom}x`,
	ug = (e) => `Зум ${e.zoom}x`,
	dg = (e) => `Zoom ${e.zoom}x`,
	fg = (e, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? tg(e)
			: t === "pt"
				? rg(e)
				: t === "ch"
					? ng(e)
					: t === "de"
						? ag(e)
						: t === "es"
							? ig(e)
							: t === "fr"
								? cg(e)
								: t === "it"
									? sg(e)
									: t === "jp"
										? og(e)
										: t === "pl"
											? _g(e)
											: t === "ru"
												? lg(e)
												: t === "uk"
													? ug(e)
													: dg(e);
	},
	bg = () => "Adjust zoom to the pixels of this event",
	pg = () => "Ajustar zoom para os pixels deste evento",
	yg = () => "将缩放调整至此事件的像素",
	kg = () => "Zoom auf die Pixel dieses Ereignisses anpassen",
	hg = () => "Ajustar zoom a los píxeles de este evento",
	wg = () => "Ajuster le zoom aux pixels de cet événement",
	vg = () => "Adatta lo zoom ai pixel di questo evento",
	gg = () => "このイベントのピクセルにズームを合わせる",
	mg = () => "Dopasuj powiększenie do pikseli tego wydarzenia",
	xg = () => "Масштабировать до пикселей этого события",
	$g = () => "Підігнати масштаб під пікселі цієї події",
	Ig = () => "Thu phóng đến pixel của sự kiện này",
	zg = (e = {}, s = {}) => {
		const t = s.locale ?? y();
		return t === "en"
			? bg()
			: t === "pt"
				? pg()
				: t === "ch"
					? yg()
					: t === "de"
						? kg()
						: t === "es"
							? hg()
							: t === "fr"
								? wg()
								: t === "it"
									? vg()
									: t === "jp"
										? gg()
										: t === "pl"
											? mg()
											: t === "ru"
												? xg()
												: t === "uk"
													? $g()
													: Ig();
	};
var jg = X(
		'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;display=swap"/>',
	),
	Cg = X('<div class="alert alert-error mb-4"><span> </span></div>'),
	Sg = X('<span class="loading loading-spinner loading-xs"></span>'),
	Tg = X('<span class="badge badge-outline badge-sm"> </span>'),
	Dg = X(
		'<span class="badge badge-outline badge-sm"><span class="loading loading-spinner loading-xs"></span> </span>',
	),
	Eg = X(
		'<span class="badge badge-outline badge-sm"> </span> <button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-sm">close</span> </button>',
		1,
	),
	Pg = X(
		'<div class="border-primary bg-primary/15 pointer-events-none absolute z-10 border-2"></div>',
	),
	Xg = X(
		'<div class="bg-base-100/95 border-base-content/20 pointer-events-none absolute z-20 rounded-md border px-2 py-1 text-xs shadow-sm"><div class="font-mono"> </div> <div class="text-base-content/70"> </div> <div class="text-base-content/70"> </div></div>',
	),
	Yg = X(
		'<input type="range" class="range range-primary w-full"/> <div class="text-base-content/60 mt-2 flex justify-between text-xs"><span> </span> <span class="text-primary font-mono"> </span> <span> </span></div>',
		1,
	),
	Ag = X(
		'<input type="range" class="range range-primary w-full" disabled=""/> <div class="text-base-content/50 mt-2 text-xs"> </div>',
		1,
	),
	Mg = X('<span class="loading loading-spinner loading-xs"></span>'),
	Lg = X('<span class="material-symbols-outlined text-sm">add</span>'),
	Fg = X('<button class="btn btn-xs btn-outline"><!> </button>'),
	Ng = X(
		'<button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-sm">flare</span> <span class="text-xs"> </span></button>',
	),
	qg = X('<div class="text-base-content/60 py-8 text-center"> </div>'),
	Bg = X('<div class="text-base-content/60 py-8 text-center"> </div>'),
	Ug = X(
		'<button class="badge badge-outline badge-sm hover:badge-primary cursor-pointer"><span class="max-w-32 truncate"> </span></button>',
	),
	Rg = X('<span class="text-base-content/40 text-xs"> </span>'),
	Wg = X(
		'<div><div></div> <div class="flex items-start justify-between gap-2"><div class="min-w-0"><div class="w-max font-mono text-sm font-semibold"> </div> <div class="text-base-content/80 mt-0.5 truncate text-xs"> </div> <div class="text-base-content/60 mt-0.5 text-xs"> </div></div> <div class="flex shrink-0 items-center gap-2"><button class="btn btn-xs btn-ghost btn-circle hover:scale-110"><span class="material-symbols-outlined text-sm">history</span></button> <button><span class="material-symbols-outlined text-sm">flare</span></button> <button class="btn btn-xs btn-ghost btn-circle hover:scale-110"><span class="material-symbols-outlined text-sm">group</span></button> <button class="btn btn-xs btn-ghost btn-circle hover:scale-110"><span class="material-symbols-outlined text-sm">zoom_in_map</span></button></div></div> <div class="mt-2 flex flex-wrap items-center gap-2"><button class="badge badge-sm hover:badge-primary cursor-pointer"><span class="max-w-36 truncate"> </span></button> <!></div></div>',
	),
	Zg = X(
		'<div class="smooth-scroll min-h-0 flex-1 overflow-y-auto pr-1"><div class="relative"></div></div>',
	),
	Hg = X(
		`<div class="bg-base-300 h-dvh overflow-hidden p-4"><div class="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col overflow-hidden"><h1 class="mb-4 shrink-0 text-center text-2xl font-bold"> </h1> <!> <div class="bg-base-200 mb-4 shrink-0 rounded-lg px-4 py-3"><div class="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between"><div class="flex flex-wrap items-end gap-3"><div class="form-control flex flex-col"><label class="label py-0.5" for="tileX"><span class="label-text text-xs"> </span></label> <input id="tileX" type="number" class="input input-bordered input-sm w-24"/></div> <div class="form-control flex flex-col"><label class="label py-0.5" for="tileY"><span class="label-text text-xs"> </span></label> <input id="tileY" type="number" class="input input-bordered input-sm w-24"/></div> <div class="form-control flex min-w-56 flex-col"><label class="label py-0.5" for="timestampTs"><span class="label-text text-xs"> </span></label> <input id="timestampTs" type="datetime-local" class="input input-bordered input-sm w-full"/></div> <button class="btn btn-primary btn-sm"><!> </button></div> <div class="flex flex-wrap items-center gap-2"><span class="badge badge-neutral badge-sm"> </span> <!> <span class="badge badge-neutral badge-sm"> </span> <!> <span class="badge badge-outline badge-sm"> </span> <span class="badge badge-outline badge-sm"> </span></div></div> <div class="border-base-content/10 mt-3 border-t pt-3"><div class="grid gap-3 md:grid-cols-2 xl:grid-cols-6"><div class="form-control flex flex-col xl:col-span-2"><label class="label py-0.5" for="eventSearch"><span class="label-text text-xs"> </span></label> <input id="eventSearch" type="search" class="input input-bordered input-sm w-full"/></div> <div class="form-control flex flex-col"><label class="label py-0.5" for="filterStartTs"><span class="label-text text-xs"> </span></label> <input id="filterStartTs" type="datetime-local" class="input input-bordered input-sm w-full"/></div> <div class="form-control flex flex-col"><label class="label py-0.5" for="filterEndTs"><span class="label-text text-xs"> </span></label> <input id="filterEndTs" type="datetime-local" class="input input-bordered input-sm w-full"/></div> <div class="form-control flex flex-col"><label class="label py-0.5" for="filterUserIds"><span class="label-text text-xs"> </span></label> <input id="filterUserIds" type="text" class="input input-bordered input-sm w-full" placeholder="123, 456"/></div> <div class="form-control flex flex-col"><label class="label py-0.5" for="filterAllianceIds"><span class="label-text text-xs"> </span></label> <input id="filterAllianceIds" type="text" class="input input-bordered input-sm w-full" placeholder="10, 20"/></div></div> <div class="mt-3 flex flex-wrap items-center justify-between gap-2"><div class="flex flex-wrap items-center gap-2"><button><span class="material-symbols-outlined text-sm">select</span> </button> <!></div> <div class="flex flex-wrap items-center gap-2"><button class="btn btn-xs btn-outline"><span class="material-symbols-outlined text-sm">group</span> </button> <button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-sm">filter_alt_off</span> </button></div></div></div></div> <div class="grid min-h-0 flex-1 auto-rows-[minmax(0,100%)] gap-6 overflow-x-hidden overflow-y-auto lg:grid-cols-[7fr_3fr] lg:grid-rows-1 lg:overflow-hidden"><div class="bg-base-200 flex min-h-0 flex-col overflow-hidden rounded-lg p-4"><div class="mb-4 flex items-center justify-between"><h2 class="text-lg font-semibold"> </h2> <span class="text-base-content/60 text-xs"> </span></div> <div class="flex min-h-0 flex-1 items-center justify-center"><div class="flex flex-col items-center gap-3"><div class="relative mt-8 overflow-hidden"><canvas></canvas> <!> <!></div> <div class="flex flex-wrap items-center justify-center gap-2"><div class="bg-base-100/90 border-base-content/20 flex items-center gap-2 rounded-md border px-2 py-1 text-xs shadow-sm"><label class="flex cursor-pointer items-center gap-1"><input type="checkbox" class="checkbox checkbox-xs"/> <span> </span></label> <span class="text-base-content/70 font-mono"> </span> <button class="btn btn-xs btn-ghost"> </button></div> <div class="bg-base-100/90 border-base-content/20 flex items-center gap-1 rounded-md border px-2 py-1 shadow-sm"><button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-base">first_page</span></button> <button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-base">chevron_backward</span></button> <button class="btn btn-xs btn-primary"><span class="material-symbols-outlined text-base"> </span></button> <button class="btn btn-xs btn-primary"><span class="material-symbols-outlined text-base"> </span></button> <button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-base">chevron_right</span></button> <button class="btn btn-xs btn-ghost"><span class="material-symbols-outlined text-base">last_page</span></button> <select class="select select-bordered select-xs ml-1"><option>0.25x</option><option>0.5x</option><option>1x</option><option>2x</option><option>5x</option><option>10x</option></select></div></div></div></div> <p class="text-base-content/50 mt-16 text-center text-xs"> </p></div> <div class="bg-base-200 flex min-h-0 flex-col overflow-hidden rounded-lg p-4"><div class="border-base-content/10 mb-4 rounded-lg border p-3"><h2 class="text-base-content/70 mb-2 text-sm font-semibold tracking-wide uppercase"> </h2> <!></div> <div class="mb-4 flex shrink-0 items-center justify-between"><div class="flex items-center gap-2"><h2 class="text-lg font-semibold"> </h2> <span class="badge badge-neutral badge-sm"> </span> <!></div> <!></div> <!></div></div></div></div> <style>.smooth-scroll {
			scroll-behavior: smooth;
		}</style>`,
		1,
	);
function ym(e, s) {
	$c(s, !0);
	const t = Lc.tools.wayback.limit;
	let Dt = v(!1),
		Le = v(!1),
		it = v(null),
		p = v([]),
		ct = v(0),
		nr = v(0),
		Fe = v(null),
		Et = v(!0),
		Pt = v(new Map()),
		ar = v(!1),
		ke = v(!1),
		he = v(void 0),
		we = v(void 0),
		yn = U(() =>
			r(he) === void 0 || r(we) === void 0
				? !1
				: Number.isFinite(r(he)) && Number.isFinite(r(we)),
		),
		Z = v(bn(ce.clampWaybackTimestamp(Date.now()))),
		kn = U(() => Number.isFinite(r(Z)) && r(Z) >= 0),
		st = v(null),
		de = v(null),
		Aa = U(() => !r(Dt) && r(yn) && r(kn)),
		T = v(0),
		ve = v(!1),
		Ne = v(1),
		ir = v(1),
		ee = null,
		Xt = 0,
		qe = 0,
		R = v(void 0),
		C = null,
		m = v(512),
		hn = v(0),
		wn = v(0),
		Be = U(() => {
			const n = Math.floor(r(hn));
			if (!Number.isFinite(n) || n <= 0) return 0;
			const a = Math.floor(r(wn));
			return !Number.isFinite(a) || a <= 0 || n < a ? n : a;
		}),
		G = v(null),
		re = v(null),
		ge = v(null),
		Te = v(!1),
		Yt = !1,
		vn = 0,
		gn = 0,
		mn = U(() => r(ge) ?? r(re)),
		Ma = U(() => hi(r(mn))),
		ot = null,
		De = null,
		At = -1,
		xn = 0,
		$n = 0,
		H = v(1),
		L = v(0),
		F = v(0),
		_t = v(!1),
		cr = 0,
		sr = 0,
		or = !1,
		_r = !1,
		V = v(bn(new Set())),
		lt = v(""),
		ut = v(""),
		Ue = v(""),
		dt = v(""),
		ft = v(""),
		In = U(
			() =>
				r(lt).trim() !== "" ||
				r(ut).trim() !== "" ||
				r(Ue).trim() !== "" ||
				r(dt).trim() !== "" ||
				r(ft).trim() !== "" ||
				r(re) !== null,
		);
	const Ee = 148,
		zn = 10;
	let fe = v(null),
		Mt = v(0),
		lr = v(0),
		W = U(() => yi()),
		La = U(() => {
			let n = 0;
			for (let a = 0; a < r(W).length; a++) n += r(p)[r(W)[a]].pixelsCount;
			return n;
		}),
		jn = U(() => {
			if (r(W).length === 0) return 0;
			const n = Math.floor(r(Mt) / Ee) - zn;
			return n > 0 ? n : 0;
		}),
		Fa = U(() => {
			if (r(W).length === 0) return 0;
			const n = r(lr) > 0 ? r(lr) : Ee,
				a = Math.ceil((r(Mt) + n) / Ee) + zn;
			return a < r(W).length ? a : r(W).length;
		}),
		Na = U(() => r(W).slice(r(jn), r(Fa)));
	const Cn = new Map();
	function Sn(n) {
		let a = Cn.get(n);
		if (!a) {
			const i = Fc.colors[n];
			if (i) {
				const c = i.rgb.length >= 4 ? i.rgb[3] === 0 : n === 0;
				a = { r: i.rgb[0], g: i.rgb[1], b: i.rgb[2], transparent: c };
			} else a = { r: 0, g: 0, b: 0, transparent: !0 };
			Cn.set(n, a);
		}
		return a;
	}
	function Lt(n) {
		let a = 0,
			i = r(p).length - 1,
			c = -1;
		for (; a <= i; ) {
			const o = (a + i) >>> 1;
			r(p)[o].ts <= n ? ((c = o), (i = o - 1)) : (a = o + 1);
		}
		return c;
	}
	function ur(n) {
		let a = 0,
			i = r(p).length - 1,
			c = -1;
		for (; a <= i; ) {
			const o = (a + i) >>> 1;
			r(p)[o].ts > n ? ((c = o), (a = o + 1)) : (i = o - 1);
		}
		return c;
	}
	function qa(n, a) {
		const i = n.length,
			c = a.length,
			o = new Array(i + c);
		for (let d = 0; d < i; d++) o[d] = n[d];
		for (let d = 0; d < c; d++) o[i + d] = a[d];
		return o;
	}
	function Tn(n, a) {
		let i = a ? 0 : r(nr),
			c = a ? Number.POSITIVE_INFINITY : r(me);
		for (let o = 0; o < n.length; o++) {
			const d = n[o];
			((i += d.pixelsCount), d.ts < c && (c = d.ts));
		}
		(_(nr, i, !0), _(me, c, !0));
	}
	function dr(n) {
		if (typeof n == "number")
			return Number.isFinite(n) ? Math.trunc(n) : void 0;
		if (typeof n != "string" || n.trim() === "") return;
		const a = Number(n);
		if (Number.isFinite(a)) return Math.trunc(a);
	}
	function Ba() {
		const n = new URL(Tt.url),
			a = n.searchParams,
			i = ce.clampWaybackTimestamp(Date.now()),
			c = dr(a.get("tileX")),
			o = dr(a.get("tileY")),
			d = dr(a.get("timestamp")),
			w = c !== void 0 && c >= 0,
			$ = o !== void 0 && o >= 0,
			I = d !== void 0 && d >= 0;
		return (
			w ? _(he, c, !0) : (_(he, 0), a.set("tileX", "0")),
			$ ? _(we, o, !0) : (_(we, 0), a.set("tileY", "0")),
			I
				? (_(Z, ce.clampWaybackTimestamp(d), !0),
					r(Z) !== d && a.set("timestamp", String(r(Z))))
				: (_(Z, i, !0), a.set("timestamp", String(r(Z)))),
			n.search !== Tt.url.search && Yc(n, Tt.state),
			w && $ && I
		);
	}
	function Ua(n, a, i) {
		const c = new URLSearchParams(Tt.url.searchParams);
		(c.set("tileX", String(n)),
			c.set("tileY", String(a)),
			c.set("timestamp", String(i)),
			Da(`${Tt.url.pathname}?${c.toString()}`, {
				replaceState: !0,
				keepFocus: !0,
				noScroll: !0,
			}));
	}
	function Dn() {
		r(R) &&
			((r(R).width !== r(m) || r(R).height !== r(m)) &&
				((r(R).width = r(m)), (r(R).height = r(m))),
			(C = r(R).getContext("2d", { alpha: !1 })),
			C && ((C.fillStyle = "#1a1a2e"), C.fillRect(0, 0, r(m), r(m))));
	}
	function En() {
		(typeof OffscreenCanvas < "u"
			? ((ot = new OffscreenCanvas(r(m), r(m))),
				(De = ot.getContext("2d", { alpha: !1 })))
			: ((ot = null), (De = null)),
			(At = -1));
	}
	function Pn() {
		const n = (typeof window < "u" && window.devicePixelRatio) || 1,
			a = Math.floor(r(Be) * n);
		!Number.isFinite(a) ||
			a <= 0 ||
			(a !== r(m) && (_(m, a, !0), Dn(), En(), P()));
	}
	(gc(async () => {
		if (
			((!rr.data || !ce.hasServerTimeEstimate()) && (await rr.refresh()),
			!rr.hasPermission(Pa.tools.wayback))
		) {
			Da("/404");
			return;
		}
		(_(Z, ce.clampWaybackTimestamp(Date.now()), !0), Pn(), Dn(), r(R) && xi());
		const n = Ba();
		(_(T, r(Z), !0), En(), Za(), n && Xn());
	}),
		mc(() => {
			(Ke(), ee && cancelAnimationFrame(ee), Qn());
		}));
	let me = v(bn(Number.POSITIVE_INFINITY)),
		Ft = U(() => (r(p).length === 0 ? r(Z) : r(p)[0].ts));
	function Ra(n, a, i) {
		return new Promise((c) => {
			const o = new Image();
			((o.onload = () => c(o)),
				(o.onerror = () => c(null)),
				(o.src = `${Ac}/s${n}/tiles/${a}/${i}.png`));
		});
	}
	async function Xn() {
		if (!r(yn) || r(he) === void 0 || r(we) === void 0) {
			O.error(Wh());
			return;
		}
		if (!r(kn)) {
			O.error(Uw());
			return;
		}
		const n = {
			timestampTs: ce.clampWaybackTimestamp(r(Z)),
			tileX: Math.trunc(r(he)),
			tileY: Math.trunc(r(we)),
		};
		(_(Z, n.timestampTs, !0),
			Ua(n.tileX, n.tileY, n.timestampTs),
			_(Dt, !0),
			_(it, null),
			_(ve, !1),
			_(G, null),
			Ke());
		try {
			(_(p, []),
				_(ct, 0),
				_(nr, 0),
				_(me, Number.POSITIVE_INFINITY, !0),
				_(ke, !1),
				_(de, null),
				(At = -1),
				_(Fe, null),
				pr(),
				An(),
				_(V, new Set(), !0),
				_(st, n, !0),
				be());
			const a = {
					season: Ea,
					limit: t,
					timestamp: n.timestampTs,
					tileX: n.tileX,
					tileY: n.tileY,
				},
				i = await ce.getWaybackEvents(a);
			if (
				(_(p, i.events ?? []),
				Hn(r(p)),
				_(ct, r(p).length, !0),
				Tn(r(p), !0),
				_(ke, i.hasMore ?? !1, !0),
				_(T, r(p).length > 0 ? r(p)[0].ts : n.timestampTs, !0),
				r(p).length > 0)
			) {
				const c = r(p)[r(p).length - 1];
				_(
					de,
					{
						ts: c.ts,
						userId: c.userId,
						allianceId: c.allianceId,
						pixelsCount: c.pixelsCount,
					},
					!0,
				);
			}
			((te = -1),
				_(Fe, await Ra(a.season, a.tileX, a.tileY), !0),
				r(Fe) || O.error(Vl()),
				O.success(Tf({ count: r(ct) })),
				P());
		} catch (a) {
			(_(it, a.message, !0), O.error(r(it)));
		} finally {
			_(Dt, !1);
		}
	}
	async function fr() {
		if (!r(Le) && r(st) && r(de) && r(ke)) {
			_(Le, !0);
			try {
				const n = {
						season: Ea,
						limit: t,
						timestamp: r(st).timestampTs,
						tileX: r(st).tileX,
						tileY: r(st).tileY,
						cursorTs: r(de).ts,
						cursorUserId: r(de).userId,
						cursorAllianceId: r(de).allianceId,
						cursorPixelsCount: r(de).pixelsCount,
					},
					a = await ce.getWaybackEvents(n),
					i = a.events ?? [];
				if (i.length === 0) {
					(_(ke, !1), _(de, null), O.info(dp()));
					return;
				}
				const c = i[i.length - 1];
				_(
					de,
					{
						ts: c.ts,
						userId: c.userId,
						allianceId: c.allianceId,
						pixelsCount: c.pixelsCount,
					},
					!0,
				);
				const o = r(p).length;
				(Tn(i, !1),
					_(p, qa(r(p), i)),
					Hn(i),
					_(ct, r(p).length, !0),
					_(ke, a.hasMore ?? !1, !0),
					Wa(o),
					O.success(Uf({ newCount: i.length, totalCount: r(ct) })),
					P());
			} catch (n) {
				O.error(n.message);
			} finally {
				_(Le, !1);
			}
		}
	}
	const E = Mc,
		Q = E * 2,
		br = Q * 4,
		Re = 128,
		We = 64,
		Pe = -1,
		Ze = new Int16Array(E * E),
		ne = new Int32Array(E * E);
	(Ze.fill(-1), ne.fill(Pe));
	let te = -1,
		bt = 0,
		pt = null,
		xe = null,
		He = null,
		yt = null,
		Xe = !0,
		kt = null,
		$e = null,
		Ve = null,
		ht = null,
		se = !0;
	function Yn(n, a, i) {
		const c = a,
			o = a + 4,
			d = a + br,
			w = d + 4;
		if (i.transparent) {
			((n[c] = Re),
				(n[c + 1] = Re),
				(n[c + 2] = Re),
				(n[c + 3] = 255),
				(n[o] = We),
				(n[o + 1] = We),
				(n[o + 2] = We),
				(n[o + 3] = 255),
				(n[d] = We),
				(n[d + 1] = We),
				(n[d + 2] = We),
				(n[d + 3] = 255),
				(n[w] = Re),
				(n[w + 1] = Re),
				(n[w + 2] = Re),
				(n[w + 3] = 255));
			return;
		}
		((n[c] = i.r),
			(n[c + 1] = i.g),
			(n[c + 2] = i.b),
			(n[c + 3] = 255),
			(n[o] = i.r),
			(n[o + 1] = i.g),
			(n[o + 2] = i.b),
			(n[o + 3] = 255),
			(n[d] = i.r),
			(n[d + 1] = i.g),
			(n[d + 2] = i.b),
			(n[d + 3] = 255),
			(n[w] = i.r),
			(n[w + 1] = i.g),
			(n[w + 2] = i.b),
			(n[w + 3] = 255));
	}
	function Nt(n, a) {
		return a * E + n;
	}
	function pr() {
		(Ze.fill(-1), ne.fill(Pe), (te = -1), (bt = 0));
	}
	function Wa(n) {
		if (te === -1 || n < 0 || n >= r(p).length) return;
		let a = !1;
		for (let i = n; i < r(p).length; i++) {
			const c = r(p)[i];
			for (let o = 0; o < c.pixelsX.length; o++) {
				const d = Nt(c.pixelsX[o], c.pixelsY[o]);
				ne[d] === Pe &&
					((Ze[d] = c.colors[o]), (ne[d] = i), (bt += 1), (a = !0));
			}
		}
		a && ((Xe = !0), (se = !0));
	}
	function Za() {
		if (typeof OffscreenCanvas < "u")
			((pt = new OffscreenCanvas(Q, Q)),
				(xe = pt.getContext("2d", { alpha: !0 })),
				(kt = new OffscreenCanvas(Q, Q)),
				($e = kt.getContext("2d", { alpha: !0 })));
		else if (typeof document < "u") {
			const n = document.createElement("canvas");
			((n.width = Q),
				(n.height = Q),
				(pt = n),
				(xe = n.getContext("2d", { alpha: !0 })));
			const a = document.createElement("canvas");
			((a.width = Q),
				(a.height = Q),
				(kt = a),
				($e = a.getContext("2d", { alpha: !0 })));
		}
		(xe && ((He = xe.createImageData(Q, Q)), (yt = He.data)),
			$e && ((Ve = $e.createImageData(Q, Q)), (ht = Ve.data)),
			An());
	}
	function An() {
		(yt && He && xe && (yt.fill(0), xe.putImageData(He, 0, 0)),
			ht && Ve && $e && (ht.fill(0), $e.putImageData(Ve, 0, 0)),
			(Xe = !1),
			(se = !1));
	}
	function Ha() {
		if (!yt || !He || !xe) {
			Xe = !1;
			return;
		}
		const n = yt;
		n.fill(0);
		for (let a = 0; a < ne.length; a++) {
			if (ne[a] === Pe) continue;
			const i = Ze[a],
				c = a % E,
				o = (a / E) | 0,
				d = c << 1,
				$ = (o << 1) * br + (d << 2),
				I = Sn(i);
			Yn(n, $, I);
		}
		(xe.putImageData(He, 0, 0), (Xe = !1));
	}
	function Va() {
		if (!ht || !Ve || !$e) {
			se = !1;
			return;
		}
		const n = ht;
		n.fill(0);
		for (const a of r(V)) {
			if (a < 0 || a >= r(p).length || te < 0 || a < te) continue;
			const i = r(p)[a];
			for (let c = 0; c < i.pixelsX.length; c++) {
				const o = i.pixelsX[c],
					d = i.pixelsY[c],
					w = i.colors[c],
					$ = o << 1,
					N = (d << 1) * br + ($ << 2),
					q = Sn(w);
				Yn(n, N, q);
			}
		}
		($e.putImageData(Ve, 0, 0), (se = !1));
	}
	function Mn() {
		if (r(p).length === 0) return;
		const n = Lt(r(T));
		let a = !1;
		if (n < 0) (bt > 0 || te !== -1) && (pr(), (a = !0));
		else if (te === -1 || n > te) {
			pr();
			for (let i = n; i < r(p).length; i++) {
				const c = r(p)[i];
				for (let o = 0; o < c.pixelsX.length; o++) {
					const d = Nt(c.pixelsX[o], c.pixelsY[o]);
					ne[d] === Pe && ((Ze[d] = c.colors[o]), (ne[d] = i), (bt += 1));
				}
			}
			((te = n), (a = !0));
		} else if (n < te) {
			for (let i = te - 1; i >= n; i--) {
				const c = r(p)[i];
				for (let o = 0; o < c.pixelsX.length; o++) {
					const d = Nt(c.pixelsX[o], c.pixelsY[o]);
					(ne[d] === Pe && (bt += 1), (Ze[d] = c.colors[o]), (ne[d] = i));
				}
			}
			((te = n), (a = !0));
		}
		a && ((Xe = !0), (se = !0));
	}
	function P() {
		((_r = !0),
			or ||
				((or = !0),
				requestAnimationFrame(() => {
					((or = !1), _r && ((_r = !1), Ka()));
				})));
	}
	function Ka() {
		if (!C) return;
		(Mn(), (C.fillStyle = "#1a1a2e"), C.fillRect(0, 0, r(m), r(m)));
		const a = (r(m) / E) * r(H),
			i = E * a;
		if (
			(r(Et) &&
				r(Fe) &&
				((C.imageSmoothingEnabled = !1),
				(C.globalAlpha = 0.15),
				De && ot
					? ((At !== r(H) || xn !== r(L) || $n !== r(F)) &&
							((De.fillStyle = "#1a1a2e"),
							De.fillRect(0, 0, r(m), r(m)),
							(De.imageSmoothingEnabled = !1),
							De.drawImage(r(Fe), r(L), r(F), i, i),
							(At = r(H)),
							(xn = r(L)),
							($n = r(F))),
						C.drawImage(ot, 0, 0))
					: C.drawImage(r(Fe), r(L), r(F), i, i),
				(C.globalAlpha = 1)),
			Xe && Ha(),
			pt && ((C.imageSmoothingEnabled = !1), C.drawImage(pt, r(L), r(F), i, i)),
			r(V).size > 0 &&
				(se && Va(),
				(C.fillStyle = "rgba(0, 0, 0, 0.6)"),
				C.fillRect(0, 0, r(m), r(m)),
				kt &&
					((C.imageSmoothingEnabled = !1), C.drawImage(kt, r(L), r(F), i, i))),
			a >= 4)
		) {
			((C.strokeStyle = "rgba(255,255,255,0.1)"),
				(C.lineWidth = 0.5),
				C.beginPath());
			for (let c = 0; c <= E; c++) {
				const o = c * a + r(L),
					d = c * a + r(F);
				(o >= 0 && o <= r(m) && (C.moveTo(o, 0), C.lineTo(o, r(m))),
					d >= 0 && d <= r(m) && (C.moveTo(0, d), C.lineTo(r(m), d)));
			}
			C.stroke();
		}
	}
	function Oa(n) {
		var $;
		n.preventDefault();
		const a = ($ = r(R)) == null ? void 0 : $.getBoundingClientRect();
		if (!a || a.width <= 0 || a.height <= 0) return;
		const i = (n.clientX - a.left) * (r(m) / a.width),
			c = (n.clientY - a.top) * (r(m) / a.height),
			o = r(H),
			d = n.deltaY > 0 ? 0.9 : 1.1;
		_(H, Math.max(0.5, Math.min(20, r(H) * d)), !0);
		const w = r(H) / o;
		(_(L, i - (i - r(L)) * w), _(F, c - (c - r(F)) * w), P());
	}
	let Ln = 0;
	const Ga = 16,
		Fn = 3;
	function Nn(n, a = !0) {
		if (Yt) {
			(r(ge) && (_(re, r(ge), !0), be()), _(ge, null), (Yt = !1), (Ie = !1));
			return;
		}
		(r(_t) && (Un(n), Ie && a && (yr = !0)), _(_t, !1), (Ie = !1));
	}
	let Ie = !1,
		yr = !1,
		qn = 0,
		Bn = 0;
	function Un(n) {
		(Math.abs(n.clientX - qn) > Fn || Math.abs(n.clientY - Bn) > Fn) &&
			(Ie = !0);
	}
	function Qa(n) {
		if (r(Te)) {
			const a = Kn(n);
			if (!a) return;
			(n.preventDefault(),
				(Yt = !0),
				_(_t, !1),
				(vn = a.x),
				(gn = a.y),
				_(ge, Vn(a.x, a.y, a.x, a.y), !0),
				_(G, null),
				(Ie = !1));
			return;
		}
		(_(_t, !0),
			(cr = n.clientX),
			(sr = n.clientY),
			(qn = n.clientX),
			(Bn = n.clientY),
			(Ie = !1));
	}
	function Ja(n) {
		var $;
		if (Yt) {
			const I = Kn(n);
			if (!I) return;
			(_(ge, Vn(vn, gn, I.x, I.y), !0), (Ie = !0));
			return;
		}
		if (!r(_t)) return;
		const a = ($ = r(R)) == null ? void 0 : $.getBoundingClientRect();
		if (!a || a.width <= 0 || a.height <= 0) return;
		Un(n);
		const i = performance.now();
		if (i - Ln < Ga) return;
		Ln = i;
		const c = r(m) / a.width,
			o = r(m) / a.height,
			d = (n.clientX - cr) * c,
			w = (n.clientY - sr) * o;
		(_(L, r(L) + d), _(F, r(F) + w), (cr = n.clientX), (sr = n.clientY), P());
	}
	function ei(n, a) {
		if (r(p).length === 0) return null;
		Mn();
		const i = ne[Nt(n, a)];
		return i === Pe ? null : i;
	}
	function ti(n) {
		var B;
		if (yr) {
			((yr = !1), _(G, null));
			return;
		}
		if (Ie || r(Te)) return;
		_(G, null);
		const a = (B = r(R)) == null ? void 0 : B.getBoundingClientRect();
		if (!a || a.width <= 0 || a.height <= 0) return;
		const i = n.clientX - a.left,
			c = n.clientY - a.top,
			o = i * (r(m) / a.width),
			d = c * (r(m) / a.height),
			$ = (r(m) / E) * r(H),
			I = Math.floor((o - r(L)) / $),
			N = Math.floor((d - r(F)) / $);
		if (I < 0 || I >= E || N < 0 || N >= E) return;
		const q = ei(I, N);
		if (q !== null) {
			const ze = r(p)[q],
				Ge =
					i < 12
						? 12
						: i > a.width - 12
							? Math.round(a.width - 12)
							: Math.round(i),
				Qe =
					c < 56
						? 56
						: c > a.height - 12
							? Math.round(a.height - 12)
							: Math.round(c);
			(_(
				G,
				{
					px: I,
					py: N,
					userId: ze.userId,
					ts: ze.ts,
					screenX: Ge,
					screenY: Qe,
				},
				!0,
			),
				Gn(q),
				ri(q));
		}
	}
	function ri(n) {
		if (r(fe)) {
			const i = r(W).indexOf(n);
			if (i < 0) return;
			const c = i * Ee - r(fe).clientHeight * 0.5;
			(r(fe).scrollTo({ top: c > 0 ? c : 0, behavior: "smooth" }),
				requestAnimationFrame(() => {
					const o = document.getElementById(`event-row-${n}`);
					o && o.scrollIntoView({ behavior: "smooth", block: "center" });
				}));
			return;
		}
		const a = document.getElementById(`event-row-${n}`);
		a && a.scrollIntoView({ behavior: "smooth", block: "center" });
	}
	function ni(n) {
		if (n < 0 || n >= r(p).length) return;
		const a = r(p)[n],
			i = Math.min(a.pixelsX.length, a.pixelsY.length);
		if (i <= 0) {
			O.error(_l());
			return;
		}
		let c = E - 1,
			o = E - 1,
			d = 0,
			w = 0;
		for (let je = 0; je < i; je++) {
			const Ye = a.pixelsX[je],
				Je = a.pixelsY[je];
			(Ye < c && (c = Ye),
				Ye > d && (d = Ye),
				Je < o && (o = Je),
				Je > w && (w = Je));
		}
		if (c > d || o > w) return;
		const $ = d - c + 1,
			I = w - o + 1,
			N = r(m) / E,
			B = Math.max(1, r(m) - 24 * 2),
			ze = Math.min(B / $, B / I),
			Ge = Math.max(0.5, Math.min(20, ze / N));
		_(H, Ge, !0);
		const Qe = N * r(H),
			qt = (c + d + 1) * 0.5,
			vt = (o + w + 1) * 0.5;
		(_(L, r(m) * 0.5 - qt * Qe), _(F, r(m) * 0.5 - vt * Qe), P());
	}
	function ai() {
		(_(H, 1), _(L, 0), _(F, 0), P());
	}
	function Rn(n) {
		r(ve) && r(Ne) === n ? Ke() : ii(n);
	}
	function ii(n) {
		if (r(p).length === 0) return;
		(ee && (cancelAnimationFrame(ee), (ee = null)),
			n === 1 && ur(r(T)) < 0 && (_(T, r(me), !0), P()),
			_(ve, !0),
			_(Ne, n, !0));
		const a = n;
		((Xt = performance.now()), (qe = 0));
		const i = 64;
		function c(o) {
			if (!r(ve) || r(Ne) !== a) return;
			const d = o - Xt;
			((Xt = o), d > 0 && (qe += d));
			const w = Number(r(ir));
			if (!Number.isFinite(w) || w <= 0) {
				ee = requestAnimationFrame(c);
				return;
			}
			const $ = 100 / w;
			let I = !1,
				N = 0;
			for (; qe >= $ && N < i; ) {
				if (((qe -= $), (N += 1), a === 1)) {
					const B = ur(r(T));
					if (B >= 0) {
						(_(T, r(p)[B].ts, !0), (I = !0));
						continue;
					}
					Ke();
					return;
				}
				const q = Lt(r(T) - 1);
				if (q >= 0 && q < r(p).length) {
					(_(T, r(p)[q].ts, !0),
						(I = !0),
						r(p).length - q - 1 < 10 && r(ke) && !r(Le) && fr());
					continue;
				}
				if (r(ke)) {
					((qe = 0),
						fr().then(() => {
							if (!r(ve) || r(Ne) !== a) return;
							const B = Lt(r(T) - 1);
							B >= 0
								? (_(T, r(p)[B].ts, !0),
									P(),
									(Xt = performance.now()),
									(ee = requestAnimationFrame(c)))
								: Ke();
						}),
						I && P());
					return;
				}
				Ke();
				return;
			}
			(I && P(), (ee = requestAnimationFrame(c)));
		}
		ee = requestAnimationFrame(c);
	}
	function Ke() {
		(_(ve, !1), (qe = 0), ee && (cancelAnimationFrame(ee), (ee = null)));
	}
	function ci() {
		(_(T, r(me), !0), (Xe = !0), (se = !0), P());
	}
	function si() {
		(_(T, r(Ft), !0), P());
	}
	function oi() {
		const n = Lt(r(T) - 1);
		n >= 0 && n < r(p).length && (_(T, r(p)[n].ts, !0), P());
	}
	function _i() {
		const n = ur(r(T));
		n >= 0 && (_(T, r(p)[n].ts, !0), P());
	}
	function Oe(n) {
		return new Date(n).toLocaleString();
	}
	function li(n) {
		const a = Math.floor(n / 1e3),
			i = Math.floor(a / 60),
			c = Math.floor(i / 60);
		return c > 0 ? `${c}h ${i % 60}m` : i > 0 ? `${i}m ${a % 60}s` : `${a}s`;
	}
	function ui(n, a) {
		const i = new Date(n).getTime();
		return Number.isFinite(i) ? ce.clampWaybackTimestamp(i) : a;
	}
	function di(n) {
		const a = new Date(n),
			i = a.getFullYear(),
			c = String(a.getMonth() + 1).padStart(2, "0"),
			o = String(a.getDate()).padStart(2, "0"),
			d = String(a.getHours()).padStart(2, "0"),
			w = String(a.getMinutes()).padStart(2, "0");
		return `${i}-${c}-${o}T${d}:${w}`;
	}
	function Wn(n) {
		const a = n.trim();
		if (a === "") return;
		const i = new Date(a).getTime();
		if (Number.isFinite(i)) return i;
	}
	function kr(n) {
		const a = new Set();
		let i = 0,
			c = !1;
		for (let o = 0; o < n.length; o++) {
			const d = n.charCodeAt(o);
			if (d >= 48 && d <= 57) {
				((i = i * 10 + d - 48), (c = !0));
				continue;
			}
			c && (a.add(i), (i = 0), (c = !1));
		}
		return (c && a.add(i), a.size > 0 ? a : null);
	}
	function hr(n) {
		return r(Pt).get(n);
	}
	function Zn(n) {
		var a;
		return ((a = hr(n.userId)) == null ? void 0 : a.name) ?? pv();
	}
	function fi(n) {
		var a;
		return (a = hr(n.userId)) == null ? void 0 : a.allianceName;
	}
	async function Hn(n) {
		const a = new Set();
		for (let o = 0; o < n.length; o++) {
			const d = n[o].userId;
			d > 0 && !r(Pt).has(d) && a.add(d);
		}
		if (a.size === 0) return;
		const i = new Array(a.size);
		let c = 0;
		for (const o of a) ((i[c] = o), (c += 1));
		_(ar, !0);
		try {
			const o = await ce.getMultipleUsersInfoById(i),
				d = new Map(r(Pt));
			for (let w = 0; w < o.users.length; w++) {
				const $ = o.users[w];
				d.set($.id, $);
			}
			_(Pt, d);
		} catch {
		} finally {
			_(ar, !1);
		}
	}
	function bi(n, a) {
		const i = Math.min(n.pixelsX.length, n.pixelsY.length);
		for (let c = 0; c < i; c++) {
			const o = n.pixelsX[c],
				d = n.pixelsY[c];
			if (o >= a.x0 && o <= a.x1 && d >= a.y0 && d <= a.y1) return !0;
		}
		return !1;
	}
	function pi(n, a) {
		if (
			String(n.userId).includes(a) ||
			String(n.allianceId).includes(a) ||
			String(n.pixelsCount).includes(a) ||
			Oe(n.ts).toLowerCase().includes(a)
		)
			return !0;
		const i = hr(n.userId);
		if (!i) return !1;
		if (i.name.toLowerCase().includes(a)) return !0;
		const c = i.allianceName;
		return c !== void 0 && c.toLowerCase().includes(a);
	}
	function yi() {
		if (r(p).length === 0) return [];
		const n = Wn(r(lt)),
			a = Wn(r(ut)),
			i = kr(r(Ue)),
			c = kr(r(dt)),
			o = r(ft).trim().toLowerCase(),
			d = r(re),
			w = [];
		for (let $ = 0; $ < r(p).length; $++) {
			const I = r(p)[$];
			(n !== void 0 && I.ts < n) ||
				(a !== void 0 && I.ts > a) ||
				(i !== null && !i.has(I.userId)) ||
				(c !== null && !c.has(I.allianceId)) ||
				(d !== null && !bi(I, d)) ||
				(o !== "" && !pi(I, o)) ||
				w.push($);
		}
		return w;
	}
	function ki() {
		(_(lt, ""),
			_(ut, ""),
			_(Ue, ""),
			_(dt, ""),
			_(ft, ""),
			_(re, null),
			_(ge, null),
			be());
	}
	function be() {
		(_(Mt, 0), r(fe) && (r(fe).scrollTop = 0));
	}
	function Vn(n, a, i, c) {
		return {
			x0: n < i ? n : i,
			y0: a < c ? a : c,
			x1: n > i ? n : i,
			y1: a > c ? a : c,
		};
	}
	function Kn(n) {
		var I;
		const a = (I = r(R)) == null ? void 0 : I.getBoundingClientRect();
		if (!a || a.width <= 0 || a.height <= 0) return null;
		const i = (n.clientX - a.left) * (r(m) / a.width),
			c = (n.clientY - a.top) * (r(m) / a.height),
			d = (r(m) / E) * r(H),
			w = Math.floor((i - r(L)) / d),
			$ = Math.floor((c - r(F)) / d);
		return w < 0 || w >= E || $ < 0 || $ >= E ? null : { x: w, y: $ };
	}
	function hi(n) {
		if (!n || r(Be) <= 0 || r(m) <= 0) return "";
		const a = r(Be) / r(m),
			c = (r(m) / E) * r(H) * a,
			o = n.x0 * c + r(L) * a,
			d = n.y0 * c + r(F) * a,
			w = (n.x1 - n.x0 + 1) * c,
			$ = (n.y1 - n.y0 + 1) * c;
		return `left:${o}px;top:${d}px;width:${w}px;height:${$}px;`;
	}
	function On(n) {
		if (n.size === 0) return;
		const a = new Set(r(V));
		let i = 0;
		for (let c = 0; c < r(p).length; c++)
			!n.has(r(p)[c].userId) || a.has(c) || (a.add(c), (i += 1));
		if (i === 0) {
			O.info(Ip());
			return;
		}
		(_(V, a, !0), (se = !0), P(), O.success(Dd({ count: i })));
	}
	function wi(n) {
		const a = new Set();
		(a.add(n.userId), On(a));
	}
	function vi() {
		const n = kr(r(Ue)) ?? new Set();
		if (n.size === 0)
			for (let a = 0; a < r(W).length; a++) n.add(r(p)[r(W)[a]].userId);
		On(n);
	}
	function Gn(n) {
		const a = new Set(r(V));
		(a.has(n) ? a.delete(n) : a.add(n), _(V, a, !0), (se = !0), P());
	}
	function gi() {
		r(V).size > 0 && (_(V, new Set(), !0), (se = !0), P());
	}
	function mi() {
		r(fe) && _(Mt, r(fe).scrollTop, !0);
	}
	(Ca(() => {
		(r(Be), Pn());
	}),
		Ca(() => {
			(r(Et), C && r(T) >= 0 && P());
		}));
	let wt = null;
	function xi() {
		r(R) &&
			(Qn(),
			(wt = new AbortController()),
			r(R).addEventListener("wheel", Oa, { passive: !1, signal: wt.signal }));
	}
	function Qn() {
		wt && (wt.abort(), (wt = null));
	}
	var Jn = Ic();
	Dc("1q3tff3", (n) => {
		var a = jg();
		(jc(
			(i) => {
				Cc.title = i ?? "";
			},
			[() => Ya()],
		),
			D(n, a));
	});
	var $i = jt(Jn);
	{
		var Ii = (n) => {
				var a = Hg(),
					i = jt(a),
					c = u(i),
					o = u(c),
					d = u(o, !0);
				l(o);
				var w = b(o, 2);
				{
					var $ = (f) => {
						var k = Cg(),
							g = u(k),
							z = u(g, !0);
						(l(g), l(k), M(() => h(z, r(it))), D(f, k));
					};
					K(w, (f) => {
						r(it) && f($);
					});
				}
				var I = b(w, 2),
					N = u(I),
					q = u(N),
					B = u(q),
					ze = u(B),
					Ge = u(ze),
					Qe = u(Ge, !0);
				(l(Ge), l(ze));
				var qt = b(ze, 2);
				(ue(qt), l(B));
				var vt = b(B, 2),
					je = u(vt),
					Ye = u(je),
					Je = u(Ye, !0);
				(l(Ye), l(je));
				var ea = b(je, 2);
				(ue(ea), l(vt));
				var wr = b(vt, 2),
					vr = u(wr),
					ta = u(vr),
					ji = u(ta, !0);
				(l(ta), l(vr));
				var gr = b(vr, 2);
				(ue(gr), l(wr));
				var Bt = b(wr, 2),
					ra = u(Bt);
				{
					var Ci = (f) => {
						var k = Sg();
						D(f, k);
					};
					K(ra, (f) => {
						r(Dt) && f(Ci);
					});
				}
				var Si = b(ra);
				(l(Bt), l(q));
				var na = b(q, 2),
					mr = u(na),
					Ti = u(mr, !0);
				l(mr);
				var aa = b(mr, 2);
				{
					var Di = (f) => {
						var k = Tg(),
							g = u(k, !0);
						(l(k),
							M((z) => h(g, z), [() => kf({ count: r(p).length })]),
							D(f, k));
					};
					K(aa, (f) => {
						r(In) && f(Di);
					});
				}
				var xr = b(aa, 2),
					Ei = u(xr, !0);
				l(xr);
				var ia = b(xr, 2);
				{
					var Pi = (f) => {
						var k = Dg(),
							g = b(u(k));
						(l(k), M((z) => h(g, ` ${z ?? ""}`), [() => rb()]), D(f, k));
					};
					K(ia, (f) => {
						r(ar) && f(Pi);
					});
				}
				var $r = b(ia, 2),
					Xi = u($r, !0);
				l($r);
				var ca = b($r, 2),
					Yi = u(ca, !0);
				(l(ca), l(na), l(N));
				var sa = b(N, 2),
					Ir = u(sa),
					zr = u(Ir),
					jr = u(zr),
					oa = u(jr),
					Ai = u(oa, !0);
				(l(oa), l(jr));
				var Ut = b(jr, 2);
				(ue(Ut), l(zr));
				var Cr = b(zr, 2),
					Sr = u(Cr),
					_a = u(Sr),
					Mi = u(_a, !0);
				(l(_a), l(Sr));
				var Tr = b(Sr, 2);
				(ue(Tr), l(Cr));
				var Dr = b(Cr, 2),
					Er = u(Dr),
					la = u(Er),
					Li = u(la, !0);
				(l(la), l(Er));
				var Pr = b(Er, 2);
				(ue(Pr), l(Dr));
				var Xr = b(Dr, 2),
					Yr = u(Xr),
					ua = u(Yr),
					Fi = u(ua, !0);
				(l(ua), l(Yr));
				var Ar = b(Yr, 2);
				(ue(Ar), l(Xr));
				var da = b(Xr, 2),
					Mr = u(da),
					fa = u(Mr),
					Ni = u(fa, !0);
				(l(fa), l(Mr));
				var Lr = b(Mr, 2);
				(ue(Lr), l(da), l(Ir));
				var ba = b(Ir, 2),
					Fr = u(ba),
					et = u(Fr),
					qi = b(u(et));
				l(et);
				var Bi = b(et, 2);
				{
					var Ui = (f) => {
						var k = Eg(),
							g = jt(k),
							z = u(g, !0);
						l(g);
						var S = b(g, 2),
							J = b(u(S));
						(l(S),
							M(
								(x, A) => {
									(h(z, x), h(J, ` ${A ?? ""}`));
								},
								[
									() =>
										qs({
											x0: r(re).x0,
											y0: r(re).y0,
											x1: r(re).x1,
											y1: r(re).y1,
										}),
									() => Nc(),
								],
							),
							j("click", S, () => {
								(_(re, null), _(ge, null), be());
							}),
							D(f, k));
					};
					K(Bi, (f) => {
						r(re) && f(Ui);
					});
				}
				l(Fr);
				var pa = b(Fr, 2),
					gt = u(pa),
					Ri = b(u(gt));
				l(gt);
				var Rt = b(gt, 2),
					Wi = b(u(Rt));
				(l(Rt), l(pa), l(ba), l(sa), l(I));
				var ya = b(I, 2),
					Nr = u(ya),
					qr = u(Nr),
					Br = u(qr),
					Zi = u(Br, !0);
				l(Br);
				var ka = b(Br, 2),
					Hi = u(ka, !0);
				(l(ka), l(qr));
				var mt = b(qr, 2),
					ha = u(mt),
					Wt = u(ha),
					oe = u(Wt);
				Ta(
					oe,
					(f) => _(R, f),
					() => r(R),
				);
				var wa = b(oe, 2);
				{
					var Vi = (f) => {
						var k = Pg();
						(M(() => St(k, r(Ma))), D(f, k));
					};
					K(wa, (f) => {
						r(mn) && f(Vi);
					});
				}
				var Ki = b(wa, 2);
				{
					var Oi = (f) => {
						var k = Xg(),
							g = u(k),
							z = u(g, !0);
						l(g);
						var S = b(g, 2),
							J = u(S, !0);
						l(S);
						var x = b(S, 2),
							A = u(x, !0);
						(l(x),
							l(k),
							M(
								(pe, ye, ae) => {
									(St(
										k,
										`left:${r(G).screenX}px;top:${r(G).screenY}px;transform:translate(-50%, -120%);`,
									),
										h(z, pe),
										h(J, ye),
										h(A, ae));
								},
								[
									() => Lp({ x: r(G).px, y: r(G).py }),
									() => eg({ userId: r(G).userId }),
									() => Oe(r(G).ts),
								],
							),
							D(f, k));
					};
					K(Ki, (f) => {
						r(G) && f(Oi);
					});
				}
				l(Wt);
				var va = b(Wt, 2),
					Ur = u(va),
					Rr = u(Ur),
					Wr = u(Rr);
				ue(Wr);
				var ga = b(Wr, 2),
					Gi = u(ga, !0);
				(l(ga), l(Rr));
				var Zr = b(Rr, 2),
					Qi = u(Zr, !0);
				l(Zr);
				var Hr = b(Zr, 2),
					Ji = u(Hr, !0);
				(l(Hr), l(Ur));
				var ma = b(Ur, 2),
					Zt = u(ma),
					Ht = b(Zt, 2),
					tt = b(Ht, 2),
					xa = u(tt),
					ec = u(xa, !0);
				(l(xa), l(tt));
				var rt = b(tt, 2),
					$a = u(rt),
					tc = u($a, !0);
				(l($a), l(rt));
				var Vt = b(rt, 2),
					Kt = b(Vt, 2),
					Ot = b(Kt, 2),
					Vr = u(Ot);
				Vr.value = Vr.__value = 0.25;
				var Kr = b(Vr);
				Kr.value = Kr.__value = 0.5;
				var Or = b(Kr);
				Or.value = Or.__value = 1;
				var Gr = b(Or);
				Gr.value = Gr.__value = 2;
				var Qr = b(Gr);
				Qr.value = Qr.__value = 5;
				var Ia = b(Qr);
				((Ia.value = Ia.__value = 10), l(Ot), l(ma), l(va), l(ha), l(mt));
				var za = b(mt, 2),
					rc = u(za, !0);
				(l(za), l(Nr));
				var ja = b(Nr, 2),
					Jr = u(ja),
					en = u(Jr),
					nc = u(en, !0);
				l(en);
				var ac = b(en, 2);
				{
					var ic = (f) => {
							var k = Yg(),
								g = jt(k);
							(ue(g), Y(g, "step", 1));
							var z = b(g, 2),
								S = u(z),
								J = u(S, !0);
							l(S);
							var x = b(S, 2),
								A = u(x, !0);
							l(x);
							var pe = b(x, 2),
								ye = u(pe, !0);
							(l(pe),
								l(z),
								M(
									(ae, Ae, xt) => {
										(Y(g, "min", r(me)),
											Y(g, "max", r(Ft)),
											h(J, ae),
											h(A, Ae),
											h(ye, xt));
									},
									[() => Oe(r(me)), () => Oe(r(T)), () => Oe(r(Ft))],
								),
								j("input", g, () => P()),
								Se(
									g,
									() => r(T),
									(ae) => _(T, ae),
								),
								D(f, k));
						},
						cc = (f) => {
							var k = Ag(),
								g = b(jt(k), 2),
								z = u(g, !0);
							(l(g), M((S) => h(z, S), [() => nf()]), D(f, k));
						};
					K(ac, (f) => {
						r(p).length > 0 ? f(ic) : f(cc, !1);
					});
				}
				l(Jr);
				var tn = b(Jr, 2),
					rn = u(tn),
					nn = u(rn),
					sc = u(nn, !0);
				l(nn);
				var an = b(nn, 2),
					oc = u(an, !0);
				l(an);
				var _c = b(an, 2);
				{
					var lc = (f) => {
						var k = Fg(),
							g = u(k);
						{
							var z = (x) => {
									var A = Mg();
									D(x, A);
								},
								S = (x) => {
									var A = Lg();
									D(x, A);
								};
							K(g, (x) => {
								r(Le) ? x(z) : x(S, !1);
							});
						}
						var J = b(g);
						(l(k),
							M(
								(x) => {
									((k.disabled = r(Le)), h(J, ` ${x ?? ""}`));
								},
								[() => qc()],
							),
							j("click", k, fr),
							D(f, k));
					};
					K(_c, (f) => {
						r(ke) && f(lc);
					});
				}
				l(rn);
				var uc = b(rn, 2);
				{
					var dc = (f) => {
						var k = Ng(),
							g = b(u(k), 2),
							z = u(g, !0);
						(l(g),
							l(k),
							M(
								(S, J) => {
									(Y(k, "title", S), h(z, J));
								},
								[() => No(), () => Jo({ count: r(V).size })],
							),
							j("click", k, gi),
							D(f, k));
					};
					K(uc, (f) => {
						r(V).size > 0 && f(dc);
					});
				}
				l(tn);
				var fc = b(tn, 2);
				{
					var bc = (f) => {
							var k = qg(),
								g = u(k, !0);
							(l(k), M((z) => h(g, z), [() => Nb()]), D(f, k));
						},
						pc = (f) => {
							var k = Bg(),
								g = u(k, !0);
							(l(k), M((z) => h(g, z), [() => Jb()]), D(f, k));
						},
						yc = (f) => {
							var k = Zg(),
								g = u(k);
							(Tc(
								g,
								22,
								() => r(Na),
								(z) => z,
								(z, S, J) => {
									const x = U(() => r(p)[S]);
									var A = Wg(),
										pe = u(A),
										ye = b(pe, 2),
										ae = u(ye),
										Ae = u(ae),
										xt = u(Ae, !0);
									l(Ae);
									var $t = b(Ae, 2),
										cn = u($t);
									l($t);
									var Gt = b($t, 2),
										sn = u(Gt, !0);
									(l(Gt), l(ae));
									var Qt = b(ae, 2),
										It = u(Qt),
										nt = b(It, 2),
										zt = b(nt, 2),
										Jt = b(zt, 2);
									(l(Qt), l(ye));
									var er = b(ye, 2),
										Me = u(er),
										tr = u(Me),
										on = u(tr);
									(l(tr), l(Me));
									var _n = b(Me, 2);
									{
										var ln = (_e) => {
												const le = U(() => fi(r(x)));
												var ie = Ug(),
													Ce = u(ie),
													dn = u(Ce, !0);
												(l(Ce),
													l(ie),
													M(
														(at, fn) => {
															(Y(ie, "title", at), h(dn, fn));
														},
														[
															() => Xa(),
															() =>
																r(le)
																	? `${r(le)} #${r(x).allianceId}`
																	: rs({ allianceId: r(x).allianceId }),
														],
													),
													j("click", ie, async () => {
														try {
															(await navigator.clipboard.writeText(
																r(x).allianceId.toString(),
															),
																O.success(ps({ allianceId: r(x).allianceId })));
														} catch (at) {
															(O.error(
																`Failed to copy alliance ID to clipboard. Error: ${at}`,
															),
																console.error("Clipboard copy failed", at));
														}
													}),
													D(_e, ie));
											},
											un = (_e) => {
												var le = Rg(),
													ie = u(le, !0);
												(l(le), M((Ce) => h(ie, Ce), [() => Bc()]), D(_e, le));
											};
										K(_n, (_e) => {
											r(x).allianceId > 0 ? _e(ln) : _e(un, !1);
										});
									}
									(l(er),
										l(A),
										M(
											(_e, le, ie, Ce, dn, at, fn, kc, hc, wc, vc) => {
												(Y(A, "id", `event-row-${S ?? ""}`),
													Ct(
														A,
														1,
														`border-base-content/10 absolute right-0 left-0 overflow-hidden rounded-lg border p-3 ${r(x).ts === r(T) ? "ring-primary/40 bg-primary/10 ring-1" : "bg-base-100/60"} ${_e ?? ""} ${r(x).ts > r(T) ? "opacity-45" : ""}`,
													),
													St(
														A,
														`top:${(r(jn) + r(J)) * Ee}px;height:${Ee - 8}px;`,
													),
													Ct(
														pe,
														1,
														`bg-primary absolute top-0 bottom-0 left-0 w-1 rounded-l-lg ${r(x).ts === r(T) ? "opacity-100" : "opacity-0"}`,
													),
													h(xt, le),
													h(cn, `${ie ?? ""} #${r(x).userId ?? ""}`),
													h(sn, Ce),
													Y(It, "title", dn),
													Ct(
														nt,
														1,
														`btn btn-xs btn-circle hover:scale-110 ${at ?? ""}`,
													),
													Y(nt, "title", fn),
													Y(zt, "title", kc),
													Y(Jt, "title", hc),
													Y(Me, "title", wc),
													h(on, `${vc ?? ""} #${r(x).userId ?? ""}`));
											},
											[
												() =>
													r(V).has(S)
														? "ring-warning/40 bg-warning/10 ring-1"
														: "",
												() => Oe(r(x).ts),
												() => Zn(r(x)),
												() => ly({ count: r(x).pixelsCount }),
												() => Pu(),
												() => (r(V).has(S) ? "btn-warning" : "btn-ghost"),
												() => Zu(),
												() => id(),
												() => zg(),
												() => Xa(),
												() => Zn(r(x)),
											],
										),
										j("click", It, () => {
											(_(T, r(x).ts, !0), P());
										}),
										j("click", nt, () => Gn(S)),
										j("click", zt, () => wi(r(x))),
										j("click", Jt, () => ni(S)),
										j("click", Me, () => {
											(navigator.clipboard.writeText(r(x).userId.toString()),
												O.success(Cv({ userId: r(x).userId })));
										}),
										D(z, A));
								},
							),
								l(g),
								l(k),
								Ta(
									k,
									(z) => _(fe, z),
									() => r(fe),
								),
								M(() => St(g, `height:${r(W).length * Ee}px;`)),
								Sa("scroll", k, mi),
								pn(k, "clientHeight", (z) => _(lr, z)),
								D(f, k));
						};
					K(fc, (f) => {
						r(p).length === 0
							? f(bc)
							: r(W).length === 0
								? f(pc, 1)
								: f(yc, !1);
					});
				}
				(l(ja),
					l(ya),
					l(c),
					l(i),
					Sc(2),
					M(
						(
							f,
							k,
							g,
							z,
							S,
							J,
							x,
							A,
							pe,
							ye,
							ae,
							Ae,
							xt,
							$t,
							cn,
							Gt,
							sn,
							Qt,
							It,
							nt,
							zt,
							Jt,
							er,
							Me,
							tr,
							on,
							_n,
							ln,
							un,
							_e,
							le,
							ie,
							Ce,
						) => {
							(h(d, f),
								h(Qe, k),
								h(Je, g),
								h(ji, z),
								Ec(gr, S),
								(Bt.disabled = !r(Aa)),
								h(Si, ` ${J ?? ""}`),
								h(Ti, x),
								h(Ei, A),
								h(Xi, pe),
								h(Yi, ye),
								h(Ai, ae),
								Y(Ut, "placeholder", Ae),
								h(Mi, xt),
								h(Li, $t),
								h(Fi, cn),
								h(Ni, Gt),
								Ct(
									et,
									1,
									`btn btn-xs ${r(Te) ? "btn-primary" : "btn-outline"}`,
								),
								(et.disabled = r(p).length === 0),
								h(qi, ` ${sn ?? ""}`),
								(gt.disabled = r(W).length === 0),
								h(Ri, ` ${Qt ?? ""}`),
								(Rt.disabled = !r(In)),
								h(Wi, ` ${It ?? ""}`),
								h(Zi, nt),
								h(Hi, zt),
								St(Wt, `width:${r(Be)}px;height:${r(Be)}px;`),
								Y(oe, "width", r(m)),
								Y(oe, "height", r(m)),
								Ct(
									oe,
									1,
									`border-base-content/20 block h-full w-full rounded border ${r(Te) ? "cursor-crosshair" : "cursor-grab active:cursor-grabbing"}`,
								),
								h(Gi, Jt),
								h(Qi, er),
								h(Ji, Me),
								Y(Zt, "title", tr),
								(Zt.disabled = r(p).length === 0),
								Y(Ht, "title", on),
								(Ht.disabled = r(p).length === 0),
								Y(tt, "title", _n),
								(tt.disabled = r(p).length === 0),
								h(ec, r(ve) && r(Ne) === -1 ? "pause" : "fast_rewind"),
								Y(rt, "title", ln),
								(rt.disabled = r(p).length === 0),
								h(tc, r(ve) && r(Ne) === 1 ? "pause" : "play_arrow"),
								Y(Vt, "title", un),
								(Vt.disabled = r(p).length === 0),
								Y(Kt, "title", _e),
								(Kt.disabled = r(p).length === 0),
								(Ot.disabled = r(p).length === 0),
								h(rc, le),
								h(nc, ie),
								h(sc, Ce),
								h(oc, r(W).length));
						},
						[
							() => Ya(),
							() => Eh(),
							() => aw(),
							() => Tw(),
							() => di(r(Z)),
							() => su(),
							() => ml({ count: r(W).length }),
							() => Gp({ count: r(La) }),
							() => O_({ duration: r(p).length > 0 ? li(r(Ft) - r(me)) : "—" }),
							() => Rd({ count: r(V).size }),
							() => Hk(),
							() => ch(),
							() => vu(),
							() => rv(),
							() => qv(),
							() => Cs(),
							() => wh(),
							() => hd(),
							() => jo(),
							() => bo(),
							() => d_(),
							() => eo(),
							() => fg({ zoom: r(H).toFixed(1) }),
							() => Uc(),
							() => ok(),
							() => gk(),
							() => xy(),
							() => Ay(),
							() => jb(),
							() => Ky(),
							() => (r(Te) ? M_() : Xk()),
							() => kw(),
							() => Yl(),
						],
					),
					Se(
						qt,
						() => r(he),
						(f) => _(he, f),
					),
					Se(
						ea,
						() => r(we),
						(f) => _(we, f),
					),
					j("change", gr, (f) => {
						_(
							Z,
							ui(f.currentTarget.value, ce.clampWaybackTimestamp(Date.now())),
							!0,
						);
					}),
					j("click", Bt, Xn),
					j("input", Ut, () => {
						be();
					}),
					Se(
						Ut,
						() => r(ft),
						(f) => _(ft, f),
					),
					j("change", Tr, () => {
						be();
					}),
					Se(
						Tr,
						() => r(lt),
						(f) => _(lt, f),
					),
					j("change", Pr, () => {
						be();
					}),
					Se(
						Pr,
						() => r(ut),
						(f) => _(ut, f),
					),
					j("input", Ar, () => {
						be();
					}),
					Se(
						Ar,
						() => r(Ue),
						(f) => _(Ue, f),
					),
					j("input", Lr, () => {
						be();
					}),
					Se(
						Lr,
						() => r(dt),
						(f) => _(dt, f),
					),
					j("click", et, () => {
						(_(Te, !r(Te)), _(G, null));
					}),
					j("click", gt, vi),
					j("click", Rt, ki),
					j("mousedown", oe, Qa),
					j("mousemove", oe, Ja),
					j("mouseup", oe, Nn),
					Sa("mouseleave", oe, (f) => Nn(f, !1)),
					j("click", oe, ti),
					Xc(
						Wr,
						() => r(Et),
						(f) => _(Et, f),
					),
					j("click", Hr, ai),
					j("click", Zt, ci),
					j("click", Ht, oi),
					j("click", tt, () => Rn(-1)),
					j("click", rt, () => Rn(1)),
					j("click", Vt, _i),
					j("click", Kt, si),
					Pc(
						Ot,
						() => r(ir),
						(f) => _(ir, f),
					),
					pn(mt, "clientWidth", (f) => _(hn, f)),
					pn(mt, "clientHeight", (f) => _(wn, f)),
					D(n, a));
			},
			zi = U(() => rr.hasPermission(Pa.tools.wayback));
		K($i, (n) => {
			r(zi) && n(Ii);
		});
	}
	(D(e, Jn), zc());
}
xc(["change", "click", "input", "mousedown", "mousemove", "mouseup"]);
export { ym as component };
