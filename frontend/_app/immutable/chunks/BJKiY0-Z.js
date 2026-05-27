import { g as t } from "./BERb6pDx.js";
(function () {
  try {
    var v2 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    v2.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
    };
  } catch {}
})();
try {
  (function () {
    var v3 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var v4 = new v3.Error().stack;
    if (v4) {
      v3._sentryDebugIds = v3._sentryDebugIds || {};
      v3._sentryDebugIds[v4] = "20dfdf6f-0f73-493f-84cd-05378edd38a5";
      v3._sentryDebugIdIdentifier = "sentry-dbid-20dfdf6f-0f73-493f-84cd-05378edd38a5";
    }
  })();
} catch {}
const vF = () => "Action";
const vF2 = () => "Ação";
const vF3 = () => "操作";
const vF4 = () => "Aktion";
const vF5 = () => "Acción";
const vF6 = () => "Action";
const vF7 = () => "Azione";
const vF8 = () => "アクション";
const vF9 = () => "Akcja";
const vF10 = () => "Действие";
const vF11 = () => "Дія";
const vF12 = () => "Hành động";
const vF13 = (p2 = {}, p3 = {}) => {
  const v5 = p3.locale ?? t();
  if (v5 === "en") {
    return vF();
  } else if (v5 === "pt") {
    return vF2();
  } else if (v5 === "ch") {
    return vF3();
  } else if (v5 === "de") {
    return vF4();
  } else if (v5 === "es") {
    return vF5();
  } else if (v5 === "fr") {
    return vF6();
  } else if (v5 === "it") {
    return vF7();
  } else if (v5 === "jp") {
    return vF8();
  } else if (v5 === "pl") {
    return vF9();
  } else if (v5 === "ru") {
    return vF10();
  } else if (v5 === "uk") {
    return vF11();
  } else {
    return vF12();
  }
};
const vF14 = () => "All";
const vF15 = () => "Todos";
const vF16 = () => "全部";
const vF17 = () => "Alle";
const vF18 = () => "Todos";
const vF19 = () => "Tous";
const vF20 = () => "Tutti";
const vF21 = () => "すべて";
const vF22 = () => "Wszystko";
const vF23 = () => "Все";
const vF24 = () => "Усе";
const vF25 = () => "Tất cả";
const vF26 = (p4 = {}, p5 = {}) => {
  const v6 = p5.locale ?? t();
  if (v6 === "en") {
    return vF14();
  } else if (v6 === "pt") {
    return vF15();
  } else if (v6 === "ch") {
    return vF16();
  } else if (v6 === "de") {
    return vF17();
  } else if (v6 === "es") {
    return vF18();
  } else if (v6 === "fr") {
    return vF19();
  } else if (v6 === "it") {
    return vF20();
  } else if (v6 === "jp") {
    return vF21();
  } else if (v6 === "pl") {
    return vF22();
  } else if (v6 === "ru") {
    return vF23();
  } else if (v6 === "uk") {
    return vF24();
  } else {
    return vF25();
  }
};
const vF27 = () => "and/or";
const vF28 = () => "e/ou";
const vF29 = () => "和/或";
const vF30 = () => "und/oder";
const vF31 = () => "y/o";
const vF32 = () => "et/ou";
const vF33 = () => "e/o";
const vF34 = () => "および/または";
const vF35 = () => "i/lub";
const vF36 = () => "и/или";
const vF37 = () => "та/або";
const vF38 = () => "và/hoặc";
const vF39 = (p6 = {}, p7 = {}) => {
  const v7 = p7.locale ?? t();
  if (v7 === "en") {
    return vF27();
  } else if (v7 === "pt") {
    return vF28();
  } else if (v7 === "ch") {
    return vF29();
  } else if (v7 === "de") {
    return vF30();
  } else if (v7 === "es") {
    return vF31();
  } else if (v7 === "fr") {
    return vF32();
  } else if (v7 === "it") {
    return vF33();
  } else if (v7 === "jp") {
    return vF34();
  } else if (v7 === "pl") {
    return vF35();
  } else if (v7 === "ru") {
    return vF36();
  } else if (v7 === "uk") {
    return vF37();
  } else {
    return vF38();
  }
};
const vF40 = () => "Change Droplets";
const vF41 = () => "Alterar gotas";
const vF42 = () => "修改水滴";
const vF43 = () => "Droplets ändern";
const vF44 = () => "Cambiar gotas";
const vF45 = () => "Modifier les droplets";
const vF46 = () => "Modifica gocce";
const vF47 = () => "ドロップレットを変更";
const vF48 = () => "Zmień krople";
const vF49 = () => "Изменить droplets";
const vF50 = () => "Змінити дроплети";
const vF51 = () => "Thay đổi droplets";
const vF52 = (p8 = {}, p9 = {}) => {
  const v8 = p9.locale ?? t();
  if (v8 === "en") {
    return vF40();
  } else if (v8 === "pt") {
    return vF41();
  } else if (v8 === "ch") {
    return vF42();
  } else if (v8 === "de") {
    return vF43();
  } else if (v8 === "es") {
    return vF44();
  } else if (v8 === "fr") {
    return vF45();
  } else if (v8 === "it") {
    return vF46();
  } else if (v8 === "jp") {
    return vF47();
  } else if (v8 === "pl") {
    return vF48();
  } else if (v8 === "ru") {
    return vF49();
  } else if (v8 === "uk") {
    return vF50();
  } else {
    return vF51();
  }
};
const vF53 = () => "Delete all sessions";
const vF54 = () => "Deletar todas as sessões";
const vF55 = () => "删除所有会话";
const vF56 = () => "Alle Sitzungen löschen";
const vF57 = () => "Eliminar todas las sesiones";
const vF58 = () => "Supprimer toutes les sessions";
const vF59 = () => "Elimina tutte le sessioni";
const vF60 = () => "すべてのセッションを削除";
const vF61 = () => "Usuń wszystkie sesje";
const vF62 = () => "Удалить все сеансы";
const vF63 = () => "Видалити всі сеанси";
const vF64 = () => "Xóa tất cả phiên";
const vF65 = (p10 = {}, p11 = {}) => {
  const v9 = p11.locale ?? t();
  if (v9 === "en") {
    return vF53();
  } else if (v9 === "pt") {
    return vF54();
  } else if (v9 === "ch") {
    return vF55();
  } else if (v9 === "de") {
    return vF56();
  } else if (v9 === "es") {
    return vF57();
  } else if (v9 === "fr") {
    return vF58();
  } else if (v9 === "it") {
    return vF59();
  } else if (v9 === "jp") {
    return vF60();
  } else if (v9 === "pl") {
    return vF61();
  } else if (v9 === "ru") {
    return vF62();
  } else if (v9 === "uk") {
    return vF63();
  } else {
    return vF64();
  }
};
const vF66 = () => "Filter by";
const vF67 = () => "Filtre por";
const vF68 = () => "按条件筛选";
const vF69 = () => "Filtern nach";
const vF70 = () => "Filtrar por";
const vF71 = () => "Filtrer par";
const vF72 = () => "Filtra per";
const vF73 = () => "絞り込み";
const vF74 = () => "Filtruj według";
const vF75 = () => "Фильтр по";
const vF76 = () => "Фільтрувати за";
const vF77 = () => "Lọc theo";
const vF78 = (p12 = {}, p13 = {}) => {
  const v10 = p13.locale ?? t();
  if (v10 === "en") {
    return vF66();
  } else if (v10 === "pt") {
    return vF67();
  } else if (v10 === "ch") {
    return vF68();
  } else if (v10 === "de") {
    return vF69();
  } else if (v10 === "es") {
    return vF70();
  } else if (v10 === "fr") {
    return vF71();
  } else if (v10 === "it") {
    return vF72();
  } else if (v10 === "jp") {
    return vF73();
  } else if (v10 === "pl") {
    return vF74();
  } else if (v10 === "ru") {
    return vF75();
  } else if (v10 === "uk") {
    return vF76();
  } else {
    return vF77();
  }
};
const vF79 = () => "Target";
const vF80 = () => "Alvo";
const vF81 = () => "目标";
const vF82 = () => "Ziel";
const vF83 = () => "Objetivo";
const vF84 = () => "Cible";
const vF85 = () => "Bersaglio";
const vF86 = () => "対象";
const vF87 = () => "Cel";
const vF88 = () => "Цель";
const vF89 = () => "Ціль";
const vF90 = () => "Mục tiêu";
const vF91 = (p14 = {}, p15 = {}) => {
  const v11 = p15.locale ?? t();
  if (v11 === "en") {
    return vF79();
  } else if (v11 === "pt") {
    return vF80();
  } else if (v11 === "ch") {
    return vF81();
  } else if (v11 === "de") {
    return vF82();
  } else if (v11 === "es") {
    return vF83();
  } else if (v11 === "fr") {
    return vF84();
  } else if (v11 === "it") {
    return vF85();
  } else if (v11 === "jp") {
    return vF86();
  } else if (v11 === "pl") {
    return vF87();
  } else if (v11 === "ru") {
    return vF88();
  } else if (v11 === "uk") {
    return vF89();
  } else {
    return vF90();
  }
};
const vF92 = () => "Manual suspension";
const vF93 = () => "Suspensão manual";
const vF94 = () => "手动悬挂";
const vF95 = () => "Manuelle Federung";
const vF96 = () => "Suspensión manual";
const vF97 = () => "Suspension manuelle";
const vF98 = () => "Sospensione manuale";
const vF99 = () => "手動停止";
const vF100 = () => "Zawieszenie ręczne";
const vF101 = () => "Ручная подвеска";
const vF102 = () => "Ручне призупинення";
const vF103 = () => "Tạm ngừng thủ công";
const vF104 = (p16 = {}, p17 = {}) => {
  const v12 = p17.locale ?? t();
  if (v12 === "en") {
    return vF92();
  } else if (v12 === "pt") {
    return vF93();
  } else if (v12 === "ch") {
    return vF94();
  } else if (v12 === "de") {
    return vF95();
  } else if (v12 === "es") {
    return vF96();
  } else if (v12 === "fr") {
    return vF97();
  } else if (v12 === "it") {
    return vF98();
  } else if (v12 === "jp") {
    return vF99();
  } else if (v12 === "pl") {
    return vF100();
  } else if (v12 === "ru") {
    return vF101();
  } else if (v12 === "uk") {
    return vF102();
  } else {
    return vF103();
  }
};
const vF105 = () => "Manual ban";
const vF106 = () => "Banimento manual";
const vF107 = () => "手动封禁";
const vF108 = () => "Manuelle Sperre";
const vF109 = () => "Baneo manual";
const vF110 = () => "Bannissement manuel";
const vF111 = () => "Banimento manual";
const vF112 = () => "手動バン";
const vF113 = () => "Ręczne banowanie";
const vF114 = () => "Ручная блокировка";
const vF115 = () => "Ручне блокування";
const vF116 = () => "Cấm thủ công";
const vF117 = (p18 = {}, p19 = {}) => {
  const v13 = p19.locale ?? t();
  if (v13 === "en") {
    return vF105();
  } else if (v13 === "pt") {
    return vF106();
  } else if (v13 === "ch") {
    return vF107();
  } else if (v13 === "de") {
    return vF108();
  } else if (v13 === "es") {
    return vF109();
  } else if (v13 === "fr") {
    return vF110();
  } else if (v13 === "it") {
    return vF111();
  } else if (v13 === "jp") {
    return vF112();
  } else if (v13 === "pl") {
    return vF113();
  } else if (v13 === "ru") {
    return vF114();
  } else if (v13 === "uk") {
    return vF115();
  } else {
    return vF116();
  }
};
const vF118 = () => "Remove manual ban";
const vF119 = () => "Remover banimento manual";
const vF120 = () => "解除手动封禁";
const vF121 = () => "Manuelles Verbot entfernen";
const vF122 = () => "Remover baneo manual";
const vF123 = () => "Supprimer le bannissement manuel";
const vF124 = () => "Rimuovere il ban manuale";
const vF125 = () => "手動BANを解除";
const vF126 = () => "Usuń ręczny ban";
const vF127 = () => "Снять ручной бан";
const vF128 = () => "Зняти ручне блокування";
const vF129 = () => "Gỡ bỏ lệnh cấm thủ công";
const vF130 = (p20 = {}, p21 = {}) => {
  const v14 = p21.locale ?? t();
  if (v14 === "en") {
    return vF118();
  } else if (v14 === "pt") {
    return vF119();
  } else if (v14 === "ch") {
    return vF120();
  } else if (v14 === "de") {
    return vF121();
  } else if (v14 === "es") {
    return vF122();
  } else if (v14 === "fr") {
    return vF123();
  } else if (v14 === "it") {
    return vF124();
  } else if (v14 === "jp") {
    return vF125();
  } else if (v14 === "pl") {
    return vF126();
  } else if (v14 === "ru") {
    return vF127();
  } else if (v14 === "uk") {
    return vF128();
  } else {
    return vF129();
  }
};
const vF131 = () => "Permissions updated";
const vF132 = () => "Permissões atualizadas";
const vF133 = () => "权限已更新";
const vF134 = () => "Berechtigungen aktualisiert";
const vF135 = () => "Permisos actualizados";
const vF136 = () => "Permissions mises à jour";
const vF137 = () => "Permessi aggiornati";
const vF138 = () => "権限が更新されました";
const vF139 = () => "Uprawnienia zaktualizowane";
const vF140 = () => "Разрешения обновлены";
const vF141 = () => "Дозволи оновлено";
const vF142 = () => "Quyền đã được cập nhật";
const vF143 = (p22 = {}, p23 = {}) => {
  const v15 = p23.locale ?? t();
  if (v15 === "en") {
    return vF131();
  } else if (v15 === "pt") {
    return vF132();
  } else if (v15 === "ch") {
    return vF133();
  } else if (v15 === "de") {
    return vF134();
  } else if (v15 === "es") {
    return vF135();
  } else if (v15 === "fr") {
    return vF136();
  } else if (v15 === "it") {
    return vF137();
  } else if (v15 === "jp") {
    return vF138();
  } else if (v15 === "pl") {
    return vF139();
  } else if (v15 === "ru") {
    return vF140();
  } else if (v15 === "uk") {
    return vF141();
  } else {
    return vF142();
  }
};
const vF144 = () => "Name changed";
const vF145 = () => "Nome alterado";
const vF146 = () => "名称已更改";
const vF147 = () => "Name geändert";
const vF148 = () => "Nombre cambiado";
const vF149 = () => "Nom changé";
const vF150 = () => "Nome modificato";
const vF151 = () => "名前が変更されました";
const vF152 = () => "Nazwa zmieniona";
const vF153 = () => "Имя изменено";
const vF154 = () => "Ім'я змінено";
const vF155 = () => "Tên đã được thay đổi";
const vF156 = (p24 = {}, p25 = {}) => {
  const v16 = p25.locale ?? t();
  if (v16 === "en") {
    return vF144();
  } else if (v16 === "pt") {
    return vF145();
  } else if (v16 === "ch") {
    return vF146();
  } else if (v16 === "de") {
    return vF147();
  } else if (v16 === "es") {
    return vF148();
  } else if (v16 === "fr") {
    return vF149();
  } else if (v16 === "it") {
    return vF150();
  } else if (v16 === "jp") {
    return vF151();
  } else if (v16 === "pl") {
    return vF152();
  } else if (v16 === "ru") {
    return vF153();
  } else if (v16 === "uk") {
    return vF154();
  } else {
    return vF155();
  }
};
const vF157 = () => "Ban wave";
const vF158 = () => "Onda de banimento";
const vF159 = () => "封禁浪潮";
const vF160 = () => "Bannwelle";
const vF161 = () => "Ola de baneos";
const vF162 = () => "Vague de bannissement";
const vF163 = () => "Ondata di ban";
const vF164 = () => "BANウェーブ";
const vF165 = () => "Fala banów";
const vF166 = () => "Волна банов";
const vF167 = () => "Хвиля заборон";
const vF168 = () => "Làn sóng cấm";
const vF169 = (p26 = {}, p27 = {}) => {
  const v17 = p27.locale ?? t();
  if (v17 === "en") {
    return vF157();
  } else if (v17 === "pt") {
    return vF158();
  } else if (v17 === "ch") {
    return vF159();
  } else if (v17 === "de") {
    return vF160();
  } else if (v17 === "es") {
    return vF161();
  } else if (v17 === "fr") {
    return vF162();
  } else if (v17 === "it") {
    return vF163();
  } else if (v17 === "jp") {
    return vF164();
  } else if (v17 === "pl") {
    return vF165();
  } else if (v17 === "ru") {
    return vF166();
  } else if (v17 === "uk") {
    return vF167();
  } else {
    return vF168();
  }
};
const vF170 = () => "Appeal accepted";
const vF171 = () => "Apelo aceito";
const vF172 = () => "申诉已接受";
const vF173 = () => "Appell angenommen";
const vF174 = () => "Apelación aceptada";
const vF175 = () => "Appel accepté";
const vF176 = () => "Appello accettato";
const vF177 = () => "訴えが認められました";
const vF178 = () => "Apelacja przyjęta";
const vF179 = () => "Апелляция принята";
const vF180 = () => "Апеляція прийнята";
const vF181 = () => "Yêu cầu được chấp nhận";
const vF182 = (p28 = {}, p29 = {}) => {
  const v18 = p29.locale ?? t();
  if (v18 === "en") {
    return vF170();
  } else if (v18 === "pt") {
    return vF171();
  } else if (v18 === "ch") {
    return vF172();
  } else if (v18 === "de") {
    return vF173();
  } else if (v18 === "es") {
    return vF174();
  } else if (v18 === "fr") {
    return vF175();
  } else if (v18 === "it") {
    return vF176();
  } else if (v18 === "jp") {
    return vF177();
  } else if (v18 === "pl") {
    return vF178();
  } else if (v18 === "ru") {
    return vF179();
  } else if (v18 === "uk") {
    return vF180();
  } else {
    return vF181();
  }
};
const vF183 = () => "Appeal rejected";
const vF184 = () => "Apelo rejeitado";
const vF185 = () => "上诉驳回";
const vF186 = () => "Berufung abgelehnt";
const vF187 = () => "Apelación rechazada";
const vF188 = () => "Appel rejeté";
const vF189 = () => "Appello respinto";
const vF190 = () => "上訴却下";
const vF191 = () => "Odwołanie odrzucone";
const vF192 = () => "Апелляция отклонена";
const vF193 = () => "Апеляцію відхилено";
const vF194 = () => "Kháng cáo bị từ chối";
const vF195 = (p30 = {}, p31 = {}) => {
  const v19 = p31.locale ?? t();
  if (v19 === "en") {
    return vF183();
  } else if (v19 === "pt") {
    return vF184();
  } else if (v19 === "ch") {
    return vF185();
  } else if (v19 === "de") {
    return vF186();
  } else if (v19 === "es") {
    return vF187();
  } else if (v19 === "fr") {
    return vF188();
  } else if (v19 === "it") {
    return vF189();
  } else if (v19 === "jp") {
    return vF190();
  } else if (v19 === "pl") {
    return vF191();
  } else if (v19 === "ru") {
    return vF192();
  } else if (v19 === "uk") {
    return vF193();
  } else {
    return vF194();
  }
};
export { vF13 as a, vF39 as b, vF26 as c, vF117 as d, vF52 as e, vF78 as f, vF130 as g, vF65 as h, vF156 as i, vF169 as j, vF182 as k, vF195 as l, vF104 as m, vF143 as p, vF91 as t };