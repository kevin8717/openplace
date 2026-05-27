var v2 = Object.defineProperty;
var vF = p2 => {
  throw TypeError(p2);
};
var vF2 = (p3, p4, p5) => p4 in p3 ? v2(p3, p4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: p5
}) : p3[p4] = p5;
var vF3 = (p6, p7, p8) => vF2(p6, typeof p7 != "symbol" ? p7 + "" : p7, p8);
var vF4 = (p9, p10, p11) => p10.has(p9) || vF("Cannot " + p11);
var vF5 = (p12, p13, p14) => {
  vF4(p12, p13, "read from private field");
  if (p14) {
    return p14.call(p12);
  } else {
    return p13.get(p12);
  }
};
var vF6 = (p15, p16, p17) => p16.has(p15) ? vF("Cannot add the same private member more than once") : p16 instanceof WeakSet ? p16.add(p15) : p16.set(p15, p17);
import { g as _ } from "./BERb6pDx.js";
import { e as E, g as ie, j as y, i as v, y as ue, u as I } from "./C_uavZQJ.js";
import { P as ge, g as De } from "./Bvn5HspS.js";
import { s as Me, c as Be } from "./5eoM9duW.js";
(function () {
  try {
    var v3 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    v3.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
    };
  } catch {}
})();
try {
  (function () {
    var v4 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var v5 = new v4.Error().stack;
    if (v5) {
      v4._sentryDebugIds = v4._sentryDebugIds || {};
      v4._sentryDebugIds[v5] = "7ffb92fe-fd24-4f29-939f-a4544ebfc31c";
      v4._sentryDebugIdIdentifier = "sentry-dbid-7ffb92fe-fd24-4f29-939f-a4544ebfc31c";
    }
  })();
} catch {}
function f2(...n) {
  return n.filter(Boolean).join(" ");
}
const v6 = typeof document !== "undefined";
let vLN0 = 0;
var v7;
var v8;
var v9;
class C2 {
  constructor() {
    vF6(this, v7, E(ie([])));
    vF6(this, v8, E(ie([])));
    vF6(this, v9, p18 => {
      const v10 = this.toasts.findIndex(p19 => p19.id === p18);
      if (v10 === -1) {
        return null;
      } else {
        return v10;
      }
    });
    vF3(this, "addToast", p20 => {
      if (v6) {
        this.toasts.unshift(p20);
      }
    });
    vF3(this, "updateToast", ({
      id: t,
      data: e,
      type: r,
      message: a
    }) => {
      const v11 = this.toasts.findIndex(p21 => p21.id === t);
      const v12 = this.toasts[v11];
      this.toasts[v11] = {
        ...v12,
        ...e,
        id: t,
        title: a,
        type: r,
        updated: true
      };
    });
    vF3(this, "create", p22 => {
      var v13;
      const {
        message: e,
        ...r
      } = p22;
      const v14 = typeof (p22 == null ? undefined : p22.id) == "number" || p22.id && ((v13 = p22.id) == null ? undefined : v13.length) > 0 ? p22.id : vLN0++;
      const v15 = p22.dismissable === undefined ? true : p22.dismissable;
      const v16 = p22.type === undefined ? "default" : p22.type;
      ue(() => {
        if (this.toasts.find(p23 => p23.id === v14)) {
          this.updateToast({
            id: v14,
            data: p22,
            type: v16,
            message: e,
            dismissable: v15
          });
        } else {
          this.addToast({
            ...r,
            id: v14,
            title: e,
            dismissable: v15,
            type: v16
          });
        }
      });
      return v14;
    });
    vF3(this, "dismiss", p24 => {
      ue(() => {
        if (p24 === undefined) {
          this.toasts = this.toasts.map(p25 => ({
            ...p25,
            dismiss: true
          }));
          return;
        }
        const v17 = this.toasts.findIndex(p26 => p26.id === p24);
        this.toasts[v17] &&= {
          ...this.toasts[v17],
          dismiss: true
        };
      });
      return p24;
    });
    vF3(this, "remove", p27 => {
      if (p27 === undefined) {
        this.toasts = [];
        return;
      }
      const v18 = vF5(this, v9).call(this, p27);
      if (v18 !== null) {
        this.toasts.splice(v18, 1);
        return p27;
      }
    });
    vF3(this, "message", (p28, p29) => this.create({
      ...p29,
      type: "default",
      message: p28
    }));
    vF3(this, "error", (p30, p31) => this.create({
      ...p31,
      type: "error",
      message: p30
    }));
    vF3(this, "success", (p32, p33) => this.create({
      ...p33,
      type: "success",
      message: p32
    }));
    vF3(this, "info", (p34, p35) => this.create({
      ...p35,
      type: "info",
      message: p34
    }));
    vF3(this, "warning", (p36, p37) => this.create({
      ...p37,
      type: "warning",
      message: p36
    }));
    vF3(this, "loading", (p38, p39) => this.create({
      ...p39,
      type: "loading",
      message: p38
    }));
    vF3(this, "promise", (p40, p41) => {
      if (!p41) {
        return;
      }
      let v19;
      if (p41.loading !== undefined) {
        v19 = this.create({
          ...p41,
          promise: p40,
          type: "loading",
          message: typeof p41.loading == "string" ? p41.loading : p41.loading()
        });
      }
      const v20 = p40 instanceof Promise ? p40 : p40();
      let v21 = v19 !== undefined;
      v20.then(p42 => {
        if (typeof p42 == "object" && p42 && "ok" in p42 && typeof p42.ok == "boolean" && !p42.ok) {
          v21 = false;
          const vUe = f3(p42);
          this.create({
            id: v19,
            type: "error",
            message: vUe
          });
        } else if (p41.success !== undefined) {
          v21 = false;
          const v22 = typeof p41.success == "function" ? p41.success(p42) : p41.success;
          this.create({
            id: v19,
            type: "success",
            message: v22
          });
        }
      }).catch(p43 => {
        if (p41.error !== undefined) {
          v21 = false;
          const v23 = typeof p41.error == "function" ? p41.error(p43) : p41.error;
          this.create({
            id: v19,
            type: "error",
            message: v23
          });
        }
      }).finally(() => {
        var v24;
        if (v21) {
          this.dismiss(v19);
          v19 = undefined;
        }
        if ((v24 = p41.finally) != null) {
          v24.call(p41);
        }
      });
      return v19;
    });
    vF3(this, "custom", (p44, p45) => {
      const v25 = (p45 == null ? undefined : p45.id) || vLN0++;
      this.create({
        component: p44,
        id: v25,
        ...p45
      });
      return v25;
    });
    vF3(this, "removeHeight", p46 => {
      this.heights = this.heights.filter(p47 => p47.toastId !== p46);
    });
    vF3(this, "setHeight", p48 => {
      const v26 = vF5(this, v9).call(this, p48.toastId);
      if (v26 === null) {
        this.heights.push(p48);
        return;
      }
      this.heights[v26] = p48;
    });
    vF3(this, "reset", () => {
      this.toasts = [];
      this.heights = [];
    });
  }
  get toasts() {
    return y(vF5(this, v7));
  }
  set toasts(p49) {
    v(vF5(this, v7), p49, true);
  }
  get heights() {
    return y(vF5(this, v8));
  }
  set heights(p50) {
    v(vF5(this, v8), p50, true);
  }
}
v7 = new WeakMap();
v8 = new WeakMap();
v9 = new WeakMap();
function f3(p51) {
  if (p51 && typeof p51 == "object" && "status" in p51) {
    return `HTTP error! Status: ${p51.status}`;
  } else {
    return `Error! ${p51}`;
  }
}
const v27 = new C2();
function f4(p52, p53) {
  return v27.create({
    message: p52,
    ...p53
  });
}
var v28;
class C3 {
  constructor() {
    vF6(this, v28, I(() => v27.toasts.filter(p54 => !p54.dismiss)));
  }
  get toasts() {
    return y(vF5(this, v28));
  }
}
v28 = new WeakMap();
const vF42 = f4;
const v29 = Object.assign(vF42, {
  success: v27.success,
  info: v27.info,
  warning: v27.warning,
  error: v27.error,
  custom: v27.custom,
  message: v27.message,
  promise: v27.promise,
  dismiss: v27.dismiss,
  loading: v27.loading,
  getActiveToasts: () => v27.toasts.filter(p55 => !p55.dismiss)
});
let vE = E(undefined);
const vF7 = () => y(vE);
const vF8 = p56 => {
  const v30 = new URL(p56, ge);
  const vVF7 = vF7();
  if (vVF7) {
    v30.searchParams.set("override", vVF7.token);
  }
  return v30.toString();
};
function f5() {
  try {
    f6();
  } catch (e2) {
    console.error("failed to load override", e2);
  }
}
function f6() {
  const v31 = new URL(location.href).searchParams.get("override");
  if (!v31) {
    return;
  }
  const v32 = v31.split(".");
  if (v32.length !== 2) {
    throw new Error("override token wrong amount of parts");
  }
  const [v33] = v32;
  const v34 = JSON.parse(atob(v33));
  if (Date.now() / 1000 > v34.expiresAt) {
    throw new Error("override token expired");
  }
  v29.info(`Currently using the ${v34.id} override. Bugs may occur, go back to ${location.protocol}//${location.host} to clear this override.`, {
    duration: 60000
  });
  v(vE, {
    token: v31,
    payload: v34
  }, true);
}
const v35 = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href;
const vF9 = () => "Your account has been suspended for breaking the rules";
const vF10 = () => "Sua conta foi suspensa por quebrar as regras";
const vF11 = () => "您的账号因违反规则已被暂停";
const vF12 = () => "Dein Konto wurde wegen Regelverstößen gesperrt";
const vF13 = () => "Tu cuenta ha sido suspendida por infringir las regras";
const vF14 = () => "Votre compte a été suspendu pour avoir enfreint les règles";
const vF15 = () => "Il tuo account è stato sospeso per aver infranto le regole";
const vF16 = () => "ルール違反により、あなたのアカウントは一時停止されています。";
const vF17 = () => "Twoje konto zostało zawieszone za łamanie zasad";
const vF18 = () => "Ваш аккаунт был временно заблокирован за нарушение правил";
const vF19 = () => "Ваш обліковий запис було призупинено за порушення правил";
const vF20 = () => "Tài khoản của bạn đã bị tạm đình chỉ vì vi phạm luật";
const vF21 = (p57 = {}, p58 = {}) => {
  const v36 = p58.locale ?? _();
  if (v36 === "en") {
    return vF9();
  } else if (v36 === "pt") {
    return vF10();
  } else if (v36 === "ch") {
    return vF11();
  } else if (v36 === "de") {
    return vF12();
  } else if (v36 === "es") {
    return vF13();
  } else if (v36 === "fr") {
    return vF14();
  } else if (v36 === "it") {
    return vF15();
  } else if (v36 === "jp") {
    return vF16();
  } else if (v36 === "pl") {
    return vF17();
  } else if (v36 === "ru") {
    return vF18();
  } else if (v36 === "uk") {
    return vF19();
  } else {
    return vF20();
  }
};
const vF22 = () => "Alliance name already taken";
const vF23 = () => "Já possui uma aliança com esse nome";
const vF24 = () => "该联盟名称已被占用";
const vF25 = () => "Der Allianzname ist bereits vergeben";
const vF26 = () => "Ese nombre de alianza ya está en uso";
const vF27 = () => "Ce nom d’alliance est déjà pris";
const vF28 = () => "Esiste già un'alleanza con questo nome";
const vF29 = () => "このアライアンス名は既に使用されています。";
const vF30 = () => "Nazwa sojuszu jest już zajęta";
const vF31 = () => "Такое название альянса уже используется";
const vF32 = () => "Назва альянсу вже зайнята";
const vF33 = () => "Tên liên minh đã được sử dụng";
const vF34 = (p59 = {}, p60 = {}) => {
  const v37 = p60.locale ?? _();
  if (v37 === "en") {
    return vF22();
  } else if (v37 === "pt") {
    return vF23();
  } else if (v37 === "ch") {
    return vF24();
  } else if (v37 === "de") {
    return vF25();
  } else if (v37 === "es") {
    return vF26();
  } else if (v37 === "fr") {
    return vF27();
  } else if (v37 === "it") {
    return vF28();
  } else if (v37 === "jp") {
    return vF29();
  } else if (v37 === "pl") {
    return vF30();
  } else if (v37 === "ru") {
    return vF31();
  } else if (v37 === "uk") {
    return vF32();
  } else {
    return vF33();
  }
};
const vF35 = () => "Alliance name exceeded the maximum number of characters";
const vF36 = () => "O nome da aliança excedeu o número máximo de caracteres";
const vF37 = () => "联盟名称超过最大字符数限制";
const vF38 = () => "Der Allianzname überschreitet die maximale Zeichenanzahl";
const vF39 = () => "El nombre de la alianza superó el número máximo de caracteres";
const vF40 = () => "Le nom de l’alliance a dépassé le nombre maximal de caractères";
const vF41 = () => "Il nome dell'alleanza ha superato il numero massimo di caratteri";
const vF43 = () => "アライアンス名が最大文字数を超えています。";
const vF44 = () => "Nazwa sojuszu przekroczyła maksymalną liczbę znaków";
const vF45 = () => "Название альянса превышает максимальную длину";
const vF46 = () => "Назва альянсу перевищує максимально допустиму кількість символів";
const vF47 = () => "Tên liên minh vượt quá số ký tự cho phép";
const vF48 = (p61 = {}, p62 = {}) => {
  const v38 = p62.locale ?? _();
  if (v38 === "en") {
    return vF35();
  } else if (v38 === "pt") {
    return vF36();
  } else if (v38 === "ch") {
    return vF37();
  } else if (v38 === "de") {
    return vF38();
  } else if (v38 === "es") {
    return vF39();
  } else if (v38 === "fr") {
    return vF40();
  } else if (v38 === "it") {
    return vF41();
  } else if (v38 === "jp") {
    return vF43();
  } else if (v38 === "pl") {
    return vF44();
  } else if (v38 === "ru") {
    return vF45();
  } else if (v38 === "uk") {
    return vF46();
  } else {
    return vF47();
  }
};
const vF49 = () => "Alliance with empty name";
const vF50 = () => "Aliança com nome vazio";
const vF51 = () => "名称为空的联盟";
const vF52 = () => "Allianz mit leerem Namen";
const vF53 = () => "Alianza con nombre vacío";
const vF54 = () => "Alliance avec nom vide";
const vF55 = () => "Alleanza con nome vuoto";
const vF56 = () => "名前が空のアライアンスです。";
const vF57 = () => "Sojusz z pustą nazwą";
const vF58 = () => "Альянс с пустым названием";
const vF59 = () => "Альянс із порожньою назвою";
const vF60 = () => "Liên minh không có tên";
const vF61 = (p63 = {}, p64 = {}) => {
  const v39 = p64.locale ?? _();
  if (v39 === "en") {
    return vF49();
  } else if (v39 === "pt") {
    return vF50();
  } else if (v39 === "ch") {
    return vF51();
  } else if (v39 === "de") {
    return vF52();
  } else if (v39 === "es") {
    return vF53();
  } else if (v39 === "fr") {
    return vF54();
  } else if (v39 === "it") {
    return vF55();
  } else if (v39 === "jp") {
    return vF56();
  } else if (v39 === "pl") {
    return vF57();
  } else if (v39 === "ru") {
    return vF58();
  } else if (v39 === "uk") {
    return vF59();
  } else {
    return vF60();
  }
};
const vF62 = () => "Botting";
const vF63 = () => "Uso de bots";
const vF64 = () => "脚本";
const vF65 = () => "Bot-Nutzung";
const vF66 = () => "Botting";
const vF67 = () => "Bots";
const vF68 = () => "Uso di bot";
const vF69 = () => "ボット使用";
const vF70 = () => "Botting";
const vF71 = () => "Боттинг";
const vF72 = () => "Боти";
const vF73 = () => "Botting";
const vF74 = (p65 = {}, p66 = {}) => {
  const v40 = p66.locale ?? _();
  if (v40 === "en") {
    return vF62();
  } else if (v40 === "pt") {
    return vF63();
  } else if (v40 === "ch") {
    return vF64();
  } else if (v40 === "de") {
    return vF65();
  } else if (v40 === "es") {
    return vF66();
  } else if (v40 === "fr") {
    return vF67();
  } else if (v40 === "it") {
    return vF68();
  } else if (v40 === "jp") {
    return vF69();
  } else if (v40 === "pl") {
    return vF70();
  } else if (v40 === "ru") {
    return vF71();
  } else if (v40 === "uk") {
    return vF72();
  } else {
    return vF73();
  }
};
const vF75 = () => "Breaking the rules";
const vF76 = () => "Quebrar as regras";
const vF77 = () => "违反规则";
const vF78 = () => "Regeln brechen";
const vF79 = () => "Romper las reglas";
const vF80 = () => "Violation des règles";
const vF81 = () => "Violazione delle regole";
const vF82 = () => "ルール違反";
const vF83 = () => "Łamanie zasad";
const vF84 = () => "Нарушение правил";
const vF85 = () => "Порушення правил";
const vF86 = () => "Vi phạm luật";
const vF87 = (p67 = {}, p68 = {}) => {
  const v41 = p68.locale ?? _();
  if (v41 === "en") {
    return vF75();
  } else if (v41 === "pt") {
    return vF76();
  } else if (v41 === "ch") {
    return vF77();
  } else if (v41 === "de") {
    return vF78();
  } else if (v41 === "es") {
    return vF79();
  } else if (v41 === "fr") {
    return vF80();
  } else if (v41 === "it") {
    return vF81();
  } else if (v41 === "jp") {
    return vF82();
  } else if (v41 === "pl") {
    return vF83();
  } else if (v41 === "ru") {
    return vF84();
  } else if (v41 === "uk") {
    return vF85();
  } else {
    return vF86();
  }
};
const vF88 = () => "You cannot paint over event pixels";
const vF89 = () => "Você não pode pintar sobre pixels de eventos";
const vF90 = () => "你不能覆盖活动像素";
const vF91 = () => "Du kannst nicht über Event-Pixel malen";
const vF92 = () => "No puedes pintar sobre píxeles de evento";
const vF93 = () => "Vous ne pouvez pas peindre sur des pixels d’événement";
const vF94 = () => "Non puoi dipingere sopra i pixel dell'evento";
const vF95 = () => "イベント用のピクセルの上には塗れません。";
const vF96 = () => "Nie możesz malować po pikselach wydarzenia";
const vF97 = () => "Вы не можете рисовать по пикселям события";
const vF98 = () => "Ви не можете малювати поверх пікселів події";
const vF99 = () => "Bạn không thể tô lên pixel sự kiện";
const vF100 = (p69 = {}, p70 = {}) => {
  const v42 = p70.locale ?? _();
  if (v42 === "en") {
    return vF88();
  } else if (v42 === "pt") {
    return vF89();
  } else if (v42 === "ch") {
    return vF90();
  } else if (v42 === "de") {
    return vF91();
  } else if (v42 === "es") {
    return vF92();
  } else if (v42 === "fr") {
    return vF93();
  } else if (v42 === "it") {
    return vF94();
  } else if (v42 === "jp") {
    return vF95();
  } else if (v42 === "pl") {
    return vF96();
  } else if (v42 === "ru") {
    return vF97();
  } else if (v42 === "uk") {
    return vF98();
  } else {
    return vF99();
  }
};
const vF101 = () => "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later";
const vF102 = () => "Não é possível acessar o servidor. Talvez você esteja sem conexão com a internet ou o servidor esteja fora do ar. Tente novamente mais tarde.";
const vF103 = () => "无法连接到服务器。可能是你没有网络，或服务器已离线。请稍后重试。";
const vF104 = () => "Server nicht erreichbar. Vielleicht hast du keine Internetverbindung oder der Server ist offline. Versuche es später erneut.";
const vF105 = () => "No se puede conectar con el servidor. Puede que estés sin internet o el servidor esté caído. Inténtalo de nuevo más tarde.";
const vF106 = () => "Impossible d’atteindre le serveur. Vous n’êtes peut-être pas connecté à Internet ou le serveur est hors ligne. Réessayez plus tard.";
const vF107 = () => "Impossibile contattare il server. Forse sei senza connessione o il server è offline. Riprova più tardi.";
const vF108 = () => "サーバーに接続できません。インターネットに接続されていないか、サーバーが停止している可能性があります。しばらくしてからもう一度お試しください。";
const vF109 = () => "Nie można połączyć się z serwerem. Być może nie masz internetu lub serwer nie działa. Spróbuj ponownie później.";
const vF110 = () => "Не удаётся подключиться к серверу. Возможно, у вас нет доступа к интернету или сервер недоступен. Попробуйте позже.";
const vF111 = () => "Не вдається підключитися до сервера. Можливо, у вас немає інтернет-зʼєднання або сервер недоступний. Спробуйте пізніше.";
const vF112 = () => "Không thể kết nối tới máy chủ. Có thể bạn đang mất kết nối mạng hoặc máy chủ đang tạm ngưng. Hãy thử lại sau";
const vF113 = (p71 = {}, p72 = {}) => {
  const v43 = p72.locale ?? _();
  if (v43 === "en") {
    return vF101();
  } else if (v43 === "pt") {
    return vF102();
  } else if (v43 === "ch") {
    return vF103();
  } else if (v43 === "de") {
    return vF104();
  } else if (v43 === "es") {
    return vF105();
  } else if (v43 === "fr") {
    return vF106();
  } else if (v43 === "it") {
    return vF107();
  } else if (v43 === "jp") {
    return vF108();
  } else if (v43 === "pl") {
    return vF109();
  } else if (v43 === "ru") {
    return vF110();
  } else if (v43 === "uk") {
    return vF111();
  } else {
    return vF112();
  }
};
const vF114 = () => "Couldn't complete the purchase. This item does not exist.";
const vF115 = () => "Não foi possível concluir a compra. Este item não existe.";
const vF116 = () => "无法完成购买。该物品不存在。";
const vF117 = () => "Kauf konnte nicht abgeschlossen werden. Dieses Item existiert nicht.";
const vF118 = () => "No se pudo completar la compra. Este ítem no existe.";
const vF119 = () => "Achat impossible. Cet objet n’existe pas.";
const vF120 = () => "Impossibile completare l'acquisto. Questo oggetto non esiste.";
const vF121 = () => "購入を完了できませんでした。このアイテムは存在しません。";
const vF122 = () => "Nie udało się dokończyć zakupu. Ten przedmiot nie istnieje.";
const vF123 = () => "Не удалось завершить покупку. Этот предмет не существует.";
const vF124 = () => "Не вдалося завершити покупку. Цей предмет не існує.";
const vF125 = () => "Không thể hoàn tất giao dịch. Vật phẩm này không tồn tại.";
const vF126 = (p73 = {}, p74 = {}) => {
  const v44 = p74.locale ?? _();
  if (v44 === "en") {
    return vF114();
  } else if (v44 === "pt") {
    return vF115();
  } else if (v44 === "ch") {
    return vF116();
  } else if (v44 === "de") {
    return vF117();
  } else if (v44 === "es") {
    return vF118();
  } else if (v44 === "fr") {
    return vF119();
  } else if (v44 === "it") {
    return vF120();
  } else if (v44 === "jp") {
    return vF121();
  } else if (v44 === "pl") {
    return vF122();
  } else if (v44 === "ru") {
    return vF123();
  } else if (v44 === "uk") {
    return vF124();
  } else {
    return vF125();
  }
};
const vF127 = () => "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.";
const vF128 = () => "Estamos enfrentando um volume alto de acessos no momento. Algumas solicitações podem não ser processadas agora — por favor, tente novamente mais tarde. Agradecemos a sua compreensão.";
const vF129 = () => "我们当前正遭遇高流量。一些请求可能无法立即处理——请稍后再试。感谢你的耐心。";
const vF130 = () => "Wir haben gerade sehr viel Traffic. Einige Anfragen können momentan nicht verarbeitet werden – bitte versuche es später erneut. Danke für deine Geduld.";
const vF131 = () => "Actualmente estamos recibiendo mucho tráfico. Es posible que algunas solicitudes no se procesen en este momento; inténtalo de nuevo más tarde. Gracias por tu paciencia.";
const vF132 = () => "Nous subissons actuellement un trafic élevé. Certaines requêtes peuvent ne pas être traitées pour le moment — veuillez réessayer plus tard. Merci pour votre patience.";
const vF133 = () => "Stiamo affrontando un elevato volume di accessi in questo momento. Alcune richieste potrebbero non essere elaborate ora — riprova più tardi. Grazie per la comprensione.";
const vF134 = () => "現在アクセスが集中しています。一部のリクエストが処理されない場合があります。しばらくしてからもう一度お試しください。ご理解ありがとうございます。";
const vF135 = () => "Obecnie doświadczamy dużego ruchu. Niektóre żądania mogą nie zostać teraz przetworzone — spróbuj ponownie później. Dziękujemy za cierpliwość.";
const vF136 = () => "Сейчас мы испытываем очень высокую нагрузку. Некоторые запросы могут не обрабатываться — попробуйте позже. Спасибо за ваше терпение.";
const vF137 = () => "Зараз ми отримуємо великий обсяг трафіку. Деякі запити можуть тимчасово не оброблятися — будь ласка, спробуйте пізніше. Дякуємо за розуміння.";
const vF138 = () => "Hiện chúng tôi đang chịu lượng truy cập rất cao. Một số yêu cầu có thể không được xử lý ngay bây giờ — hãy thử lại sau. Cảm ơn bạn đã thông cảm.";
const vF139 = (p75 = {}, p76 = {}) => {
  const v45 = p76.locale ?? _();
  if (v45 === "en") {
    return vF127();
  } else if (v45 === "pt") {
    return vF128();
  } else if (v45 === "ch") {
    return vF129();
  } else if (v45 === "de") {
    return vF130();
  } else if (v45 === "es") {
    return vF131();
  } else if (v45 === "fr") {
    return vF132();
  } else if (v45 === "it") {
    return vF133();
  } else if (v45 === "jp") {
    return vF134();
  } else if (v45 === "pl") {
    return vF135();
  } else if (v45 === "ru") {
    return vF136();
  } else if (v45 === "uk") {
    return vF137();
  } else {
    return vF138();
  }
};
const vF140 = () => "Doxxing";
const vF141 = () => "Doxxing";
const vF142 = () => "人肉搜索";
const vF143 = () => "Doxxing";
const vF144 = () => "Doxxing";
const vF145 = () => "Doxxing";
const vF146 = () => "Doxxing";
const vF147 = () => "ドックス（Doxxing）";
const vF148 = () => "Doxxing";
const vF149 = () => "Докcинг";
const vF150 = () => "Докcинг";
const vF151 = () => "Doxxing";
const vF152 = (p77 = {}, p78 = {}) => {
  const v46 = p78.locale ?? _();
  if (v46 === "en") {
    return vF140();
  } else if (v46 === "pt") {
    return vF141();
  } else if (v46 === "ch") {
    return vF142();
  } else if (v46 === "de") {
    return vF143();
  } else if (v46 === "es") {
    return vF144();
  } else if (v46 === "fr") {
    return vF145();
  } else if (v46 === "it") {
    return vF146();
  } else if (v46 === "jp") {
    return vF147();
  } else if (v46 === "pl") {
    return vF148();
  } else if (v46 === "ru") {
    return vF149();
  } else if (v46 === "uk") {
    return vF150();
  } else {
    return vF151();
  }
};
const vF153 = p79 => `Error while painting: ${p79.err}`;
const vF154 = p80 => `Erro enquanto pinta: ${p80.err}`;
const vF155 = p81 => `绘制时出错：${p81.err}`;
const vF156 = p82 => `Fehler beim Malen: ${p82.err}`;
const vF157 = p83 => `Error al pintar: ${p83.err}`;
const vF158 = p84 => `Erreur lors de la peinture : ${p84.err}`;
const vF159 = p85 => `Errore durante la pittura: ${p85.err}`;
const vF160 = p86 => `ペイント中にエラーが発生しました: ${p86.err}`;
const vF161 = p87 => `Błąd podczas malowania: ${p87.err}`;
const vF162 = p88 => `Ошибка при рисовании: ${p88.err}`;
const vF163 = p89 => `Помилка під час малювання: ${p89.err}`;
const vF164 = p90 => `Lỗi khi tô: ${p90.err}`;
const vF165 = (p91, p92 = {}) => {
  const v47 = p92.locale ?? _();
  if (v47 === "en") {
    return vF153(p91);
  } else if (v47 === "pt") {
    return vF154(p91);
  } else if (v47 === "ch") {
    return vF155(p91);
  } else if (v47 === "de") {
    return vF156(p91);
  } else if (v47 === "es") {
    return vF157(p91);
  } else if (v47 === "fr") {
    return vF158(p91);
  } else if (v47 === "it") {
    return vF159(p91);
  } else if (v47 === "jp") {
    return vF160(p91);
  } else if (v47 === "pl") {
    return vF161(p91);
  } else if (v47 === "ru") {
    return vF162(p91);
  } else if (v47 === "uk") {
    return vF163(p91);
  } else {
    return vF164(p91);
  }
};
const vF166 = () => "Griefing";
const vF167 = () => "Griefing";
const vF168 = () => "破坏行为";
const vF169 = () => "Griefing";
const vF170 = () => "Griefing";
const vF171 = () => "Griefing";
const vF172 = () => "Griefing";
const vF173 = () => "グリーフィング";
const vF174 = () => "Griefing";
const vF175 = () => "Гриферство";
const vF176 = () => "Гріфінг";
const vF177 = () => "Griefing";
const vF178 = (p93 = {}, p94 = {}) => {
  const v48 = p94.locale ?? _();
  if (v48 === "en") {
    return vF166();
  } else if (v48 === "pt") {
    return vF167();
  } else if (v48 === "ch") {
    return vF168();
  } else if (v48 === "de") {
    return vF169();
  } else if (v48 === "es") {
    return vF170();
  } else if (v48 === "fr") {
    return vF171();
  } else if (v48 === "it") {
    return vF172();
  } else if (v48 === "jp") {
    return vF173();
  } else if (v48 === "pl") {
    return vF174();
  } else if (v48 === "ru") {
    return vF175();
  } else if (v48 === "uk") {
    return vF176();
  } else {
    return vF177();
  }
};
const vF179 = () => "Hate speech";
const vF180 = () => "Discurso de Ódio";
const vF181 = () => "仇恨言论";
const vF182 = () => "Hassrede";
const vF183 = () => "Discurso de odio";
const vF184 = () => "Discours haineux";
const vF185 = () => "Discorso d'odio";
const vF186 = () => "ヘイトスピーチ";
const vF187 = () => "Mowa nienawiści";
const vF188 = () => "Речь ненависти";
const vF189 = () => "Мова ворожнечі";
const vF190 = () => "Ngôn từ thù hằn";
const vF191 = (p95 = {}, p96 = {}) => {
  const v49 = p96.locale ?? _();
  if (v49 === "en") {
    return vF179();
  } else if (v49 === "pt") {
    return vF180();
  } else if (v49 === "ch") {
    return vF181();
  } else if (v49 === "de") {
    return vF182();
  } else if (v49 === "es") {
    return vF183();
  } else if (v49 === "fr") {
    return vF184();
  } else if (v49 === "it") {
    return vF185();
  } else if (v49 === "jp") {
    return vF186();
  } else if (v49 === "pl") {
    return vF187();
  } else if (v49 === "ru") {
    return vF188();
  } else if (v49 === "uk") {
    return vF189();
  } else {
    return vF190();
  }
};
const vF192 = () => "Inappropriate content";
const vF193 = () => "Conteúdo inapropriado";
const vF194 = () => "不当内容";
const vF195 = () => "Unangemessene Inhalte";
const vF196 = () => "Contenido inapropiado";
const vF197 = () => "Contenu inapproprié";
const vF198 = () => "Contenuto inappropriato";
const vF199 = () => "不適切なコンテンツ";
const vF200 = () => "Nieodpowiednie treści";
const vF201 = () => "Неприемлемый контент";
const vF202 = () => "Неприйнятний вміст";
const vF203 = () => "Nội dung không phù hợp";
const vF204 = (p97 = {}, p98 = {}) => {
  const v50 = p98.locale ?? _();
  if (v50 === "en") {
    return vF192();
  } else if (v50 === "pt") {
    return vF193();
  } else if (v50 === "ch") {
    return vF194();
  } else if (v50 === "de") {
    return vF195();
  } else if (v50 === "es") {
    return vF196();
  } else if (v50 === "fr") {
    return vF197();
  } else if (v50 === "it") {
    return vF198();
  } else if (v50 === "jp") {
    return vF199();
  } else if (v50 === "pl") {
    return vF200();
  } else if (v50 === "ru") {
    return vF201();
  } else if (v50 === "uk") {
    return vF202();
  } else {
    return vF203();
  }
};
const vF205 = () => "Invalid code";
const vF206 = () => "Código inválido";
const vF207 = () => "验证码无效";
const vF208 = () => "Ungültiger Code";
const vF209 = () => "Código inválido";
const vF210 = () => "Code invalide";
const vF211 = () => "Codice non valido";
const vF212 = () => "無効なコードです。";
const vF213 = () => "Nieprawidłowy kod";
const vF214 = () => "Неверный код";
const vF215 = () => "Невірний код";
const vF216 = () => "Mã không hợp lệ";
const vF217 = (p99 = {}, p100 = {}) => {
  const v51 = p100.locale ?? _();
  if (v51 === "en") {
    return vF205();
  } else if (v51 === "pt") {
    return vF206();
  } else if (v51 === "ch") {
    return vF207();
  } else if (v51 === "de") {
    return vF208();
  } else if (v51 === "es") {
    return vF209();
  } else if (v51 === "fr") {
    return vF210();
  } else if (v51 === "it") {
    return vF211();
  } else if (v51 === "jp") {
    return vF212();
  } else if (v51 === "pl") {
    return vF213();
  } else if (v51 === "ru") {
    return vF214();
  } else if (v51 === "uk") {
    return vF215();
  } else {
    return vF216();
  }
};
const vF218 = () => "Invalid discord.";
const vF219 = () => "Discord inválido.";
const vF220 = () => "无效的 Discord。";
const vF221 = () => "Ungültiger Discord.";
const vF222 = () => "Discord inválido.";
const vF223 = () => "Discord invalide.";
const vF224 = () => "Discord non valido.";
const vF225 = () => "無効なDiscordアカウントです。";
const vF226 = () => "Nieprawidłowy Discord.";
const vF227 = () => "Неверный Discord.";
const vF228 = () => "Некоректний Discord.";
const vF229 = () => "Discord không hợp lệ.";
const vF230 = (p101 = {}, p102 = {}) => {
  const v52 = p102.locale ?? _();
  if (v52 === "en") {
    return vF218();
  } else if (v52 === "pt") {
    return vF219();
  } else if (v52 === "ch") {
    return vF220();
  } else if (v52 === "de") {
    return vF221();
  } else if (v52 === "es") {
    return vF222();
  } else if (v52 === "fr") {
    return vF223();
  } else if (v52 === "it") {
    return vF224();
  } else if (v52 === "jp") {
    return vF225();
  } else if (v52 === "pl") {
    return vF226();
  } else if (v52 === "ru") {
    return vF227();
  } else if (v52 === "uk") {
    return vF228();
  } else {
    return vF229();
  }
};
const vF231 = () => "The name contains disallowed characters or words. Please choose a different name.";
const vF232 = () => "O nome contém caracteres ou palavras não permitidas. Por favor, escolha outro nome.";
const vF233 = () => "名称包含禁止的字符或词语，请选择其他名称。";
const vF234 = () => "Der Name enthält nicht erlaubte Zeichen oder Wörter. Bitte wähle einen anderen Namen.";
const vF235 = () => "El nombre contiene caracteres o palabras no permitidas. Elige otro nombre.";
const vF236 = () => "Le nom contient des caractères ou des mots non autorisés. Veuillez choisir un autre nom.";
const vF237 = () => "Il nome contiene caratteri o parole non consentiti. Scegli un altro nome.";
const vF238 = () => "この名前には使用できない文字または単語が含まれています。別の名前を選んでください。";
const vF239 = () => "Nazwa zawiera niedozwolone znaki lub słowa. Wybierz inną nazwę.";
const vF240 = () => "Имя содержит запрещённые символы или слова. Пожалуйста, выберите другое имя.";
const vF241 = () => "Імʼя містить заборонені символи або слова. Оберіть інше імʼя.";
const vF242 = () => "Tên chứa ký tự hoặc từ không được phép. Hãy chọn tên khác.";
const vF243 = (p103 = {}, p104 = {}) => {
  const v53 = p104.locale ?? _();
  if (v53 === "en") {
    return vF231();
  } else if (v53 === "pt") {
    return vF232();
  } else if (v53 === "ch") {
    return vF233();
  } else if (v53 === "de") {
    return vF234();
  } else if (v53 === "es") {
    return vF235();
  } else if (v53 === "fr") {
    return vF236();
  } else if (v53 === "it") {
    return vF237();
  } else if (v53 === "jp") {
    return vF238();
  } else if (v53 === "pl") {
    return vF239();
  } else if (v53 === "ru") {
    return vF240();
  } else if (v53 === "uk") {
    return vF241();
  } else {
    return vF242();
  }
};
const vF244 = () => "Invalid phone number";
const vF245 = () => "Número de telefone inválido";
const vF246 = () => "无效的电话号码";
const vF247 = () => "Ungültige Telefonnummer";
const vF248 = () => "Número de teléfono inválido";
const vF249 = () => "Numéro de téléphone invalide";
const vF250 = () => "Numero di telefono non valido";
const vF251 = () => "無効な電話番号です。";
const vF252 = () => "Nieprawidłowy numer telefonu";
const vF253 = () => "Неверный номер телефона";
const vF254 = () => "Некоректний номер телефону";
const vF255 = () => "Số điện thoại không hợp lệ";
const vF256 = (p105 = {}, p106 = {}) => {
  const v54 = p106.locale ?? _();
  if (v54 === "en") {
    return vF244();
  } else if (v54 === "pt") {
    return vF245();
  } else if (v54 === "ch") {
    return vF246();
  } else if (v54 === "de") {
    return vF247();
  } else if (v54 === "es") {
    return vF248();
  } else if (v54 === "fr") {
    return vF249();
  } else if (v54 === "it") {
    return vF250();
  } else if (v54 === "jp") {
    return vF251();
  } else if (v54 === "pl") {
    return vF252();
  } else if (v54 === "ru") {
    return vF253();
  } else if (v54 === "uk") {
    return vF254();
  } else {
    return vF255();
  }
};
const vF257 = () => "The new leader must be a member of the alliance";
const vF258 = () => "O novo líder deve ser um membro da aliança";
const vF259 = () => "新盟主必须是联盟成员";
const vF260 = () => "Der neue Anführer muss Mitglied der Allianz sein";
const vF261 = () => "El nuevo líder debe ser miembro de la alianza";
const vF262 = () => "Le nouveau chef doit être membre de l’alliance";
const vF263 = () => "Il nuovo leader deve essere un membro dell'alleanza";
const vF264 = () => "新しいリーダーはアライアンスのメンバーである必要があります。";
const vF265 = () => "Nowy lider musi być członkiem sojuszu";
const vF266 = () => "Новый лидер должен быть участником альянса";
const vF267 = () => "Новий лідер має бути учасником альянсу";
const vF268 = () => "Thủ lĩnh mới phải là thành viên của liên minh";
const vF269 = (p107 = {}, p108 = {}) => {
  const v55 = p108.locale ?? _();
  if (v55 === "en") {
    return vF257();
  } else if (v55 === "pt") {
    return vF258();
  } else if (v55 === "ch") {
    return vF259();
  } else if (v55 === "de") {
    return vF260();
  } else if (v55 === "es") {
    return vF261();
  } else if (v55 === "fr") {
    return vF262();
  } else if (v55 === "it") {
    return vF263();
  } else if (v55 === "jp") {
    return vF264();
  } else if (v55 === "pl") {
    return vF265();
  } else if (v55 === "ru") {
    return vF266();
  } else if (v55 === "uk") {
    return vF267();
  } else {
    return vF268();
  }
};
const vF270 = () => "Leaderboard is temporarily disabled";
const vF271 = () => "O ranking está temporariamente desativado";
const vF272 = () => "排行榜已暂时停用";
const vF273 = () => "Die Bestenliste ist vorübergehend deaktiviert";
const vF274 = () => "La clasificación está deshabilitada temporalmente";
const vF275 = () => "Le classement est temporairement désactivé";
const vF276 = () => "La classifica è temporaneamente disattivata";
const vF277 = () => "ランキングは一時的に無効になっています。";
const vF278 = () => "Ranking jest tymczasowo wyłączony";
const vF279 = () => "Таблица лидеров временно отключена";
const vF280 = () => "Таблиця лідерів тимчасово вимкнена";
const vF281 = () => "Bảng xếp hạng tạm thời bị vô hiệu hóa";
const vF282 = (p109 = {}, p110 = {}) => {
  const v56 = p110.locale ?? _();
  if (v56 === "en") {
    return vF270();
  } else if (v56 === "pt") {
    return vF271();
  } else if (v56 === "ch") {
    return vF272();
  } else if (v56 === "de") {
    return vF273();
  } else if (v56 === "es") {
    return vF274();
  } else if (v56 === "fr") {
    return vF275();
  } else if (v56 === "it") {
    return vF276();
  } else if (v56 === "jp") {
    return vF277();
  } else if (v56 === "pl") {
    return vF278();
  } else if (v56 === "ru") {
    return vF279();
  } else if (v56 === "uk") {
    return vF280();
  } else {
    return vF281();
  }
};
const vF283 = () => "Location name is too big (max. 128 characters)";
const vF284 = () => "Nome da localização é grande demais (max. 128 caracteres)";
const vF285 = () => "位置名称过长（最大 128 个字符）";
const vF286 = () => "Ortsname ist zu lang (max. 128 Zeichen)";
const vF287 = () => "El nombre de la ubicación es demasiado largo (máx. 128 caracteres)";
const vF288 = () => "Le nom de l’emplacement est trop long (max. 128 caractères)";
const vF289 = () => "Il nome della località è troppo lungo (max. 128 caratteri)";
const vF290 = () => "場所の名前が長すぎます（最大128文字）。";
const vF291 = () => "Nazwa lokalizacji jest za długa (maks. 128 znaków)";
const vF292 = () => "Название локации слишком длинное (макс. 128 символов)";
const vF293 = () => "Назва локації надто довга (макс. 128 символів)";
const vF294 = () => "Tên vị trí quá dài (tối đa 128 ký tự)";
const vF295 = (p111 = {}, p112 = {}) => {
  const v57 = p112.locale ?? _();
  if (v57 === "en") {
    return vF283();
  } else if (v57 === "pt") {
    return vF284();
  } else if (v57 === "ch") {
    return vF285();
  } else if (v57 === "de") {
    return vF286();
  } else if (v57 === "es") {
    return vF287();
  } else if (v57 === "fr") {
    return vF288();
  } else if (v57 === "it") {
    return vF289();
  } else if (v57 === "jp") {
    return vF290();
  } else if (v57 === "pl") {
    return vF291();
  } else if (v57 === "ru") {
    return vF292();
  } else if (v57 === "uk") {
    return vF293();
  } else {
    return vF294();
  }
};
const vF296 = () => "Multi-accounting";
const vF297 = () => "Múltiplas contas";
const vF298 = () => "多账号";
const vF299 = () => "Multi-Accounting";
const vF300 = () => "Multi-cuentas";
const vF301 = () => "Multi-comptes";
const vF302 = () => "Multi-account";
const vF303 = () => "複数アカウント使用";
const vF304 = () => "Multi-konta";
const vF305 = () => "Мультиаккаунт";
const vF306 = () => "Мультиакаунтинг";
const vF307 = () => "Nhiều tài khoản";
const vF308 = (p113 = {}, p114 = {}) => {
  const v58 = p114.locale ?? _();
  if (v58 === "en") {
    return vF296();
  } else if (v58 === "pt") {
    return vF297();
  } else if (v58 === "ch") {
    return vF298();
  } else if (v58 === "de") {
    return vF299();
  } else if (v58 === "es") {
    return vF300();
  } else if (v58 === "fr") {
    return vF301();
  } else if (v58 === "it") {
    return vF302();
  } else if (v58 === "jp") {
    return vF303();
  } else if (v58 === "pl") {
    return vF304();
  } else if (v58 === "ru") {
    return vF305();
  } else if (v58 === "uk") {
    return vF306();
  } else {
    return vF307();
  }
};
const vF309 = p115 => `You can change your name again in ${p115.days} days`;
const vF310 = p116 => `Você pode alterar seu nome novamente em ${p116.days} dias.`;
const vF311 = p117 => `你可以在 ${p117.days} 天后再次修改名称`;
const vF312 = p118 => `Du kannst deinen Namen in ${p118.days} Tagen erneut ändern`;
const vF313 = p119 => `Podrás cambiar tu nombre de nuevo en ${p119.days} días`;
const vF314 = p120 => `Vous pourrez changer votre nom à nouveau dans ${p120.days} jours`;
const vF315 = p121 => `Potrai cambiare di nuovo il tuo nome tra ${p121.days} giorni.`;
const vF316 = p122 => `${p122.days}日後に再び名前を変更できます。`;
const vF317 = p123 => `Następną zmianę nazwy możesz wykonać za ${p123.days} dni`;
const vF318 = p124 => `Вы сможете изменить имя снова через ${p124.days} дн.`;
const vF319 = p125 => `Ви зможете змінити імʼя знову через ${p125.days} днів`;
const vF320 = p126 => `Bạn có thể đổi tên lại sau ${p126.days} ngày`;
const vF321 = (p127, p128 = {}) => {
  const v59 = p128.locale ?? _();
  if (v59 === "en") {
    return vF309(p127);
  } else if (v59 === "pt") {
    return vF310(p127);
  } else if (v59 === "ch") {
    return vF311(p127);
  } else if (v59 === "de") {
    return vF312(p127);
  } else if (v59 === "es") {
    return vF313(p127);
  } else if (v59 === "fr") {
    return vF314(p127);
  } else if (v59 === "it") {
    return vF315(p127);
  } else if (v59 === "jp") {
    return vF316(p127);
  } else if (v59 === "pl") {
    return vF317(p127);
  } else if (v59 === "ru") {
    return vF318(p127);
  } else if (v59 === "uk") {
    return vF319(p127);
  } else {
    return vF320(p127);
  }
};
const vF322 = () => "No internet access or the servers are offline. Try again later.";
const vF323 = () => "Sem acesso à internet ou os servidores estão fora do ar. Tente novamente mais tarde.";
const vF324 = () => "没有网络连接或服务器已离线。请稍后重试。";
const vF325 = () => "Keine Internetverbindung oder Server offline. Versuche es später erneut.";
const vF326 = () => "Sin acceso a internet o los servidores están fuera de línea. Inténtalo de nuevo más tarde.";
const vF327 = () => "Pas d’accès à Internet ou serveurs hors ligne. Réessayez plus tard.";
const vF328 = () => "Nessun accesso a internet o server offline. Riprova più tardi.";
const vF329 = () => "インターネットに接続されていないか、サーバーがオフラインです。しばらくしてから再度お試しください。";
const vF330 = () => "Brak dostępu do internetu lub serwery są offline. Spróbuj ponownie później.";
const vF331 = () => "Нет доступа к интернету или серверы недоступны. Попробуйте позже.";
const vF332 = () => "Немає доступу до інтернету або сервери недоступні. Спробуйте пізніше.";
const vF333 = () => "Không có kết nối internet hoặc máy chủ đang ngoại tuyến. Hãy thử lại sau.";
const vF334 = (p129 = {}, p130 = {}) => {
  const v60 = p130.locale ?? _();
  if (v60 === "en") {
    return vF322();
  } else if (v60 === "pt") {
    return vF323();
  } else if (v60 === "ch") {
    return vF324();
  } else if (v60 === "de") {
    return vF325();
  } else if (v60 === "es") {
    return vF326();
  } else if (v60 === "fr") {
    return vF327();
  } else if (v60 === "it") {
    return vF328();
  } else if (v60 === "jp") {
    return vF329();
  } else if (v60 === "pl") {
    return vF330();
  } else if (v60 === "ru") {
    return vF331();
  } else if (v60 === "uk") {
    return vF332();
  } else {
    return vF333();
  }
};
const vF335 = () => "Operation not allowed. Maybe you have too many favorite locations.";
const vF336 = () => "Operação não permitida. Talvez você tenha muitos locais favoritos.";
const vF337 = () => "操作不被允许。你的收藏位置可能过多。";
const vF338 = () => "Aktion nicht erlaubt. Vielleicht hast du zu viele Lieblingsorte.";
const vF339 = () => "Operación no permitida. Puede que tengas demasiadas ubicaciones favoritas.";
const vF340 = () => "Opération non autorisée. Vous avez peut-être trop d’emplacements favoris.";
const vF341 = () => "Operazione non consentita. Forse hai troppi luoghi preferiti.";
const vF342 = () => "この操作は許可されていません。お気に入りの場所が多すぎる可能性があります。";
const vF343 = () => "Operacja niedozwolona. Możliwe, że masz zbyt wiele ulubionych lokalizacji.";
const vF344 = () => "Операция запрещена. Возможно, у вас слишком много избранных локаций.";
const vF345 = () => "Операцію заборонено. Можливо, у вас забагато вибраних локацій.";
const vF346 = () => "Thao tác không được phép. Có thể bạn đã có quá nhiều vị trí yêu thích.";
const vF347 = (p131 = {}, p132 = {}) => {
  const v61 = p132.locale ?? _();
  if (v61 === "en") {
    return vF335();
  } else if (v61 === "pt") {
    return vF336();
  } else if (v61 === "ch") {
    return vF337();
  } else if (v61 === "de") {
    return vF338();
  } else if (v61 === "es") {
    return vF339();
  } else if (v61 === "fr") {
    return vF340();
  } else if (v61 === "it") {
    return vF341();
  } else if (v61 === "jp") {
    return vF342();
  } else if (v61 === "pl") {
    return vF343();
  } else if (v61 === "ru") {
    return vF344();
  } else if (v61 === "uk") {
    return vF345();
  } else {
    return vF346();
  }
};
const vF348 = () => "You are trying to paint with a color you do not own";
const vF349 = () => "Você está tentando pintar com uma cor que não possui";
const vF350 = () => "你正在尝试使用尚未拥有的颜色进行绘制";
const vF351 = () => "Du versuchst mit einer Farbe zu malen, die du nicht besitzt";
const vF352 = () => "Estás intentando pintar con un color que no posees";
const vF353 = () => "Vous essayez de peindre avec une couleur que vous ne possédez pas";
const vF354 = () => "Stai cercando di dipingere con un colore che non possiedi";
const vF355 = () => "所持していない色で塗ろうとしています。";
const vF356 = () => "Próbujesz malować kolorem, którego nie posiadasz";
const vF357 = () => "Вы пытаетесь рисовать цветом, которого у вас нет";
const vF358 = () => "Ви намагаєтеся малювати кольором, якого не маєте";
const vF359 = () => "Bạn đang cố tô bằng một màu bạn không sở hữu";
const vF360 = (p133 = {}, p134 = {}) => {
  const v62 = p134.locale ?? _();
  if (v62 === "en") {
    return vF348();
  } else if (v62 === "pt") {
    return vF349();
  } else if (v62 === "ch") {
    return vF350();
  } else if (v62 === "de") {
    return vF351();
  } else if (v62 === "es") {
    return vF352();
  } else if (v62 === "fr") {
    return vF353();
  } else if (v62 === "it") {
    return vF354();
  } else if (v62 === "jp") {
    return vF355();
  } else if (v62 === "pl") {
    return vF356();
  } else if (v62 === "ru") {
    return vF357();
  } else if (v62 === "uk") {
    return vF358();
  } else {
    return vF359();
  }
};
const vF361 = () => "Phone already used";
const vF362 = () => "Telefone já usado";
const vF363 = () => "电话号码已被使用";
const vF364 = () => "Telefonnummer bereits verwendet";
const vF365 = () => "Teléfono ya utilizado";
const vF366 = () => "Téléphone déjà utilisé";
const vF367 = () => "Telefono già utilizzato";
const vF368 = () => "この電話番号は既に使用されています。";
const vF369 = () => "Numer telefonu jest już używany";
const vF370 = () => "Телефон уже используется";
const vF371 = () => "Номер телефону вже використовується";
const vF372 = () => "Số điện thoại đã được sử dụng";
const vF373 = (p135 = {}, p136 = {}) => {
  const v63 = p136.locale ?? _();
  if (v63 === "en") {
    return vF361();
  } else if (v63 === "pt") {
    return vF362();
  } else if (v63 === "ch") {
    return vF363();
  } else if (v63 === "de") {
    return vF364();
  } else if (v63 === "es") {
    return vF365();
  } else if (v63 === "fr") {
    return vF366();
  } else if (v63 === "it") {
    return vF367();
  } else if (v63 === "jp") {
    return vF368();
  } else if (v63 === "pl") {
    return vF369();
  } else if (v63 === "ru") {
    return vF370();
  } else if (v63 === "uk") {
    return vF371();
  } else {
    return vF372();
  }
};
const vF374 = () => "Refresh your page to get the latest update";
const vF375 = () => "Recarregue sua página para obter as últimas atualizações";
const vF376 = () => "刷新页面以获取最新更新";
const vF377 = () => "Aktualisiere die Seite, um die neuesten Updates zu erhalten";
const vF378 = () => "Actualiza la página para obtener la última versión";
const vF379 = () => "Actualisez la page pour obtenir les dernières mises à jour";
const vF380 = () => "Ricarica la pagina per ottenere gli ultimi aggiornamenti";
const vF381 = () => "最新の状態にするにはページを再読み込みしてください。";
const vF382 = () => "Odśwież stronę, aby zobaczyć najnowszą aktualizację";
const vF383 = () => "Обновите страницу, чтобы получить последние изменения";
const vF384 = () => "Оновіть сторінку, щоб отримати останні оновлення";
const vF385 = () => "Hãy làm mới trang để nhận được cập nhật mới nhất";
const vF386 = (p137 = {}, p138 = {}) => {
  const v64 = p138.locale ?? _();
  if (v64 === "en") {
    return vF374();
  } else if (v64 === "pt") {
    return vF375();
  } else if (v64 === "ch") {
    return vF376();
  } else if (v64 === "de") {
    return vF377();
  } else if (v64 === "es") {
    return vF378();
  } else if (v64 === "fr") {
    return vF379();
  } else if (v64 === "it") {
    return vF380();
  } else if (v64 === "jp") {
    return vF381();
  } else if (v64 === "pl") {
    return vF382();
  } else if (v64 === "ru") {
    return vF383();
  } else if (v64 === "uk") {
    return vF384();
  } else {
    return vF385();
  }
};
const vF387 = () => "The typed username does not match your current username.";
const vF388 = () => "O nome de usuário digitado não corresponde ao seu nome de usuário atual.";
const vF389 = () => "输入的用户名与当前用户名不匹配。";
const vF390 = () => "Der eingegebene Benutzername stimmt nicht mit deinem aktuellen Benutzernamen überein.";
const vF391 = () => "El nombre de usuario ingresado no coincide con tu nombre de usuario actual.";
const vF392 = () => "Le nom d’utilisateur saisi ne correspond pas à votre nom d’utilisateur actuel.";
const vF393 = () => "Il nome utente inserito non corrisponde al tuo nome utente attuale.";
const vF394 = () => "入力されたユーザー名が、現在のユーザー名と一致しません。";
const vF395 = () => "Wpisana nazwa użytkownika nie zgadza się z obecną nazwą.";
const vF396 = () => "Введённое имя пользователя не совпадает с текущим.";
const vF397 = () => "Введене імʼя користувача не збігається з поточним.";
const vF398 = () => "Tên người dùng nhập vào không trùng với tên hiện tại.";
const vF399 = (p139 = {}, p140 = {}) => {
  const v65 = p140.locale ?? _();
  if (v65 === "en") {
    return vF387();
  } else if (v65 === "pt") {
    return vF388();
  } else if (v65 === "ch") {
    return vF389();
  } else if (v65 === "de") {
    return vF390();
  } else if (v65 === "es") {
    return vF391();
  } else if (v65 === "fr") {
    return vF392();
  } else if (v65 === "it") {
    return vF393();
  } else if (v65 === "jp") {
    return vF394();
  } else if (v65 === "pl") {
    return vF395();
  } else if (v65 === "ru") {
    return vF396();
  } else if (v65 === "uk") {
    return vF397();
  } else {
    return vF398();
  }
};
const vF400 = () => "Unexpected server error. Try again later.";
const vF401 = () => "Erro inesperado do servidor. Tente novamente mais tarde.";
const vF402 = () => "服务器出现意外错误。请稍后再试。";
const vF403 = () => "Unerwarteter Serverfehler. Versuche es später erneut.";
const vF404 = () => "Error inesperado del servidor. Inténtalo de nuevo más tarde.";
const vF405 = () => "Erreur serveur inattendue. Réessayez plus tard.";
const vF406 = () => "Errore imprevisto del server. Riprova più tardi.";
const vF407 = () => "予期しないサーバーエラーが発生しました。時間をおいて再度お試しください。";
const vF408 = () => "Nieoczekiwany błąd serwera. Spróbuj ponownie później.";
const vF409 = () => "Непредвиденная ошибка сервера. Попробуйте позже.";
const vF410 = () => "Неочікувана помилка сервера. Спробуйте пізніше.";
const vF411 = () => "Lỗi máy chủ không mong muốn. Hãy thử lại sau.";
const vF412 = (p141 = {}, p142 = {}) => {
  const v66 = p142.locale ?? _();
  if (v66 === "en") {
    return vF400();
  } else if (v66 === "pt") {
    return vF401();
  } else if (v66 === "ch") {
    return vF402();
  } else if (v66 === "de") {
    return vF403();
  } else if (v66 === "es") {
    return vF404();
  } else if (v66 === "fr") {
    return vF405();
  } else if (v66 === "it") {
    return vF406();
  } else if (v66 === "jp") {
    return vF407();
  } else if (v66 === "pl") {
    return vF408();
  } else if (v66 === "ru") {
    return vF409();
  } else if (v66 === "uk") {
    return vF410();
  } else {
    return vF411();
  }
};
const vF413 = () => "Failed to load WebAssembly module. Try to use another browser.";
const vF414 = () => "Erro ao carregar módulo WebAssembly. Tente usar outro navegador.";
const vF415 = () => "WebAssembly 模块加载失败。请尝试使用其他浏览器。";
const vF416 = () => "Fehler beim Laden des WebAssembly-Moduls. Versuche, einen anderen Browser zu verwenden.";
const vF417 = () => "Error al cargar el módulo WebAssembly. Intenta usar otro navegador.";
const vF418 = () => "Erreur lors du chargement du module WebAssembly. Essayez d’utiliser un autre navigateur.";
const vF419 = () => "Errore nel caricamento del modulo WebAssembly. Prova a usare un altro browser.";
const vF420 = () => "WebAssembly モジュールの読み込みに失敗しました。別のブラウザをお試しください。";
const vF421 = () => "Nie udało się załadować modułu WebAssembly. Spróbuj użyć innej przeglądarki.";
const vF422 = () => "Ошибка при загрузке модуля WebAssembly. Попробуйте использовать другой браузер.";
const vF423 = () => "Не вдалося завантажити модуль WebAssembly. Спробуйте інший браузер.";
const vF424 = () => "Lỗi tải mô-đun WebAssembly. Hãy thử dùng trình duyệt khác.";
const vF425 = (p143 = {}, p144 = {}) => {
  const v67 = p144.locale ?? _();
  if (v67 === "en") {
    return vF413();
  } else if (v67 === "pt") {
    return vF414();
  } else if (v67 === "ch") {
    return vF415();
  } else if (v67 === "de") {
    return vF416();
  } else if (v67 === "es") {
    return vF417();
  } else if (v67 === "fr") {
    return vF418();
  } else if (v67 === "it") {
    return vF419();
  } else if (v67 === "jp") {
    return vF420();
  } else if (v67 === "pl") {
    return vF421();
  } else if (v67 === "ru") {
    return vF422();
  } else if (v67 === "uk") {
    return vF423();
  } else {
    return vF424();
  }
};
const vF426 = () => "You already have this item. Please refresh the page.";
const vF427 = () => "Você já possui este item. Atualize a página.";
const vF428 = () => "你已经拥有此物品。请刷新页面。";
const vF429 = () => "Du besitzt dieses Item bereits. Bitte aktualisiere die Seite.";
const vF430 = () => "Ya tienes este ítem. Actualiza la página.";
const vF431 = () => "Vous possédez déjà cet objet. Actualisez la page.";
const vF432 = () => "Possiedi già questo oggetto. Aggiorna la pagina.";
const vF433 = () => "このアイテムはすでに所持しています。ページを更新してください。";
const vF434 = () => "Masz już ten przedmiot. Odśwież stronę.";
const vF435 = () => "У вас уже есть этот предмет. Обновите страницу.";
const vF436 = () => "У вас уже є цей предмет. Оновіть сторінку.";
const vF437 = () => "Bạn đã sở hữu vật phẩm này. Hãy tải lại trang.";
const vF438 = (p145 = {}, p146 = {}) => {
  const v68 = p146.locale ?? _();
  if (v68 === "en") {
    return vF426();
  } else if (v68 === "pt") {
    return vF427();
  } else if (v68 === "ch") {
    return vF428();
  } else if (v68 === "de") {
    return vF429();
  } else if (v68 === "es") {
    return vF430();
  } else if (v68 === "fr") {
    return vF431();
  } else if (v68 === "it") {
    return vF432();
  } else if (v68 === "jp") {
    return vF433();
  } else if (v68 === "pl") {
    return vF434();
  } else if (v68 === "ru") {
    return vF435();
  } else if (v68 === "uk") {
    return vF436();
  } else {
    return vF437();
  }
};
const vF439 = () => "You are already in an alliance";
const vF440 = () => "Você já está em uma aliança";
const vF441 = () => "你已经在一个联盟中";
const vF442 = () => "Du bist bereits in einer Allianz";
const vF443 = () => "Ya estás en una alianza";
const vF444 = () => "Vous êtes déjà dans une alliance";
const vF445 = () => "Sei già in un'alleanza";
const vF446 = () => "すでにアライアンスに所属しています。";
const vF447 = () => "Jesteś już w sojuszu";
const vF448 = () => "Вы уже состоите в альянсе";
const vF449 = () => "Ви вже перебуваєте в альянсі";
const vF450 = () => "Bạn đã ở trong một liên minh";
const vF451 = (p147 = {}, p148 = {}) => {
  const v69 = p148.locale ?? _();
  if (v69 === "en") {
    return vF439();
  } else if (v69 === "pt") {
    return vF440();
  } else if (v69 === "ch") {
    return vF441();
  } else if (v69 === "de") {
    return vF442();
  } else if (v69 === "es") {
    return vF443();
  } else if (v69 === "fr") {
    return vF444();
  } else if (v69 === "it") {
    return vF445();
  } else if (v69 === "jp") {
    return vF446();
  } else if (v69 === "pl") {
    return vF447();
  } else if (v69 === "ru") {
    return vF448();
  } else if (v69 === "uk") {
    return vF449();
  } else {
    return vF450();
  }
};
const vF452 = () => "You are not allowed to do this";
const vF453 = () => "Você não tem permissão para fazer isso";
const vF454 = () => "你无权执行此操作";
const vF455 = () => "Du bist dazu nicht berechtigt";
const vF456 = () => "No tienes permiso para hacer esto";
const vF457 = () => "Vous n’êtes pas autorisé à faire cela";
const vF458 = () => "Non hai il permesso di farlo";
const vF459 = () => "この操作を行う権限がありません。";
const vF460 = () => "Nie masz uprawnień, aby to zrobić";
const vF461 = () => "У вас нет прав для этого действия";
const vF462 = () => "Ви не маєте права це робити";
const vF463 = () => "Bạn không có quyền làm việc này";
const vF464 = (p149 = {}, p150 = {}) => {
  const v70 = p150.locale ?? _();
  if (v70 === "en") {
    return vF452();
  } else if (v70 === "pt") {
    return vF453();
  } else if (v70 === "ch") {
    return vF454();
  } else if (v70 === "de") {
    return vF455();
  } else if (v70 === "es") {
    return vF456();
  } else if (v70 === "fr") {
    return vF457();
  } else if (v70 === "it") {
    return vF458();
  } else if (v70 === "jp") {
    return vF459();
  } else if (v70 === "pl") {
    return vF460();
  } else if (v70 === "ru") {
    return vF461();
  } else if (v70 === "uk") {
    return vF462();
  } else {
    return vF463();
  }
};
const vF465 = () => "You do not have enough Droplets to buy this item.";
const vF466 = () => "Você não tem gotas suficientes para comprar este item.";
const vF467 = () => "你的水滴不足，无法购买此物品。";
const vF468 = () => "Du hast nicht genug Droplets, um dieses Item zu kaufen.";
const vF469 = () => "No tienes suficientes gotas para comprar este ítem.";
const vF470 = () => "Vous n’avez pas assez de droplets pour acheter cet objet.";
const vF471 = () => "Non hai abbastanza gocce per acquistare questo oggetto.";
const vF472 = () => "このアイテムを購入するのに十分なドロップレットがありません。";
const vF473 = () => "Nie masz wystarczającej liczby kropli, aby kupić ten przedmiot.";
const vF474 = () => "У вас недостаточно droplets для покупки этого предмета.";
const vF475 = () => "У вас недостатньо дроплетів, щоб купити цей предмет.";
const vF476 = () => "Bạn không có đủ droplets để mua vật phẩm này.";
const vF477 = (p151 = {}, p152 = {}) => {
  const v71 = p152.locale ?? _();
  if (v71 === "en") {
    return vF465();
  } else if (v71 === "pt") {
    return vF466();
  } else if (v71 === "ch") {
    return vF467();
  } else if (v71 === "de") {
    return vF468();
  } else if (v71 === "es") {
    return vF469();
  } else if (v71 === "fr") {
    return vF470();
  } else if (v71 === "it") {
    return vF471();
  } else if (v71 === "jp") {
    return vF472();
  } else if (v71 === "pl") {
    return vF473();
  } else if (v71 === "ru") {
    return vF474();
  } else if (v71 === "uk") {
    return vF475();
  } else {
    return vF476();
  }
};
const vF478 = () => "You have to wait to resend a code";
const vF479 = () => "Você tem de esperar para reenviar um código";
const vF480 = () => "你需要等待一段时间才能重新发送验证码";
const vF481 = () => "Du musst warten, bevor du einen Code erneut senden kannst";
const vF482 = () => "Tienes que esperar para reenviar un código";
const vF483 = () => "Vous devez attendre avant de renvoyer un code";
const vF484 = () => "Devi aspettare per reinviare un codice";
const vF485 = () => "コードを再送信するまでしばらくお待ちください。";
const vF486 = () => "Musisz poczekać, zanim wyślesz kod ponownie";
const vF487 = () => "Вам нужно подождать, прежде чем отправить код ещё раз";
const vF488 = () => "Перш ніж повторно надіслати код, потрібно почекати";
const vF489 = () => "Bạn phải chờ trước khi gửi lại mã";
const vF490 = (p153 = {}, p154 = {}) => {
  const v72 = p154.locale ?? _();
  if (v72 === "en") {
    return vF478();
  } else if (v72 === "pt") {
    return vF479();
  } else if (v72 === "ch") {
    return vF480();
  } else if (v72 === "de") {
    return vF481();
  } else if (v72 === "es") {
    return vF482();
  } else if (v72 === "fr") {
    return vF483();
  } else if (v72 === "it") {
    return vF484();
  } else if (v72 === "jp") {
    return vF485();
  } else if (v72 === "pl") {
    return vF486();
  } else if (v72 === "ru") {
    return vF487();
  } else if (v72 === "uk") {
    return vF488();
  } else {
    return vF489();
  }
};
const vF491 = () => "You need to be logged in to paint";
const vF492 = () => "Você precisa estar conectado para pintar";
const vF493 = () => "你需要登录才能进行绘制";
const vF494 = () => "Du musst eingeloggt sein, um zu malen";
const vF495 = () => "Debes iniciar sesión para pintar";
const vF496 = () => "Vous devez être connecté pour peindre";
const vF497 = () => "Devi avere effettuato l'accesso per dipingere";
const vF498 = () => "ペイントするにはログインが必要です。";
const vF499 = () => "Musisz być zalogowany, aby malować";
const vF500 = () => "Чтобы рисовать, нужно войти в аккаунт";
const vF501 = () => "Щоб малювати, необхідно увійти в акаунт";
const vF502 = () => "Bạn cần đăng nhập để tô";
const vF503 = (p155 = {}, p156 = {}) => {
  const v73 = p156.locale ?? _();
  if (v73 === "en") {
    return vF491();
  } else if (v73 === "pt") {
    return vF492();
  } else if (v73 === "ch") {
    return vF493();
  } else if (v73 === "de") {
    return vF494();
  } else if (v73 === "es") {
    return vF495();
  } else if (v73 === "fr") {
    return vF496();
  } else if (v73 === "it") {
    return vF497();
  } else if (v73 === "jp") {
    return vF498();
  } else if (v73 === "pl") {
    return vF499();
  } else if (v73 === "ru") {
    return vF500();
  } else if (v73 === "uk") {
    return vF501();
  } else {
    return vF502();
  }
};
const vF504 = () => "You or someone in your network is making a lot of requests to the server. Try again later.";
const vF505 = () => "Você ou alguém na sua rede está fazendo muitas solicitações ao servidor. Tente novamente mais tarde.";
const vF506 = () => "你或与你同一网络中的某人向服务器发出了大量请求。请稍后再试。";
const vF507 = () => "Du oder jemand in deinem Netzwerk sendet sehr viele Anfragen an den Server. Versuche es später erneut.";
const vF508 = () => "Tú o alguien en tu red está realizando demasiadas solicitudes al servidor. Inténtalo de nuevo más tarde.";
const vF509 = () => "Vous ou quelqu’un sur votre réseau envoie beaucoup de requêtes au serveur. Réessayez plus tard.";
const vF510 = () => "Tu o qualcuno nella tua rete state facendo troppe richieste al server. Riprova più tardi.";
const vF511 = () => "あなた、または同じネットワーク上の誰かがサーバーへ大量のリクエストを送信しています。しばらくしてから再度お試しください。";
const vF512 = () => "Ty lub ktoś w Twojej sieci wysyła zbyt wiele żądań do serwera. Spróbuj ponownie później.";
const vF513 = () => "Вы или кто-то в вашей сети делает слишком много запросов к серверу. Попробуйте позже.";
const vF514 = () => "Ви або хтось у вашій мережі надсилає надто багато запитів до сервера. Спробуйте пізніше.";
const vF515 = () => "Bạn hoặc ai đó trong mạng của bạn đang gửi quá nhiều yêu cầu đến máy chủ. Hãy thử lại sau.";
const vF516 = (p157 = {}, p158 = {}) => {
  const v74 = p158.locale ?? _();
  if (v74 === "en") {
    return vF504();
  } else if (v74 === "pt") {
    return vF505();
  } else if (v74 === "ch") {
    return vF506();
  } else if (v74 === "de") {
    return vF507();
  } else if (v74 === "es") {
    return vF508();
  } else if (v74 === "fr") {
    return vF509();
  } else if (v74 === "it") {
    return vF510();
  } else if (v74 === "jp") {
    return vF511();
  } else if (v74 === "pl") {
    return vF512();
  } else if (v74 === "ru") {
    return vF513();
  } else if (v74 === "uk") {
    return vF514();
  } else {
    return vF515();
  }
};
const vF517 = p159 => `Your account has been suspended out until ${p159.until}`;
const vF518 = p160 => `A sua conta está suspensa até ${p160.until}`;
const vF519 = p161 => `你的账号已被暂停至 ${p161.until}`;
const vF520 = p162 => `Dein Konto ist gesperrt bis ${p162.until}`;
const vF521 = p163 => `Tu cuenta ha sido suspendida hasta ${p163.until}`;
const vF522 = p164 => `Votre compte est suspendu jusqu’au ${p164.until}`;
const vF523 = p165 => `Il tuo account è sospeso fino al ${p165.until}`;
const vF524 = p166 => `あなたのアカウントは${p166.until}まで一時停止されています。`;
const vF525 = p167 => `Twoje konto zostało zawieszone do ${p167.until}`;
const vF526 = p168 => `Ваш аккаунт заблокирован до ${p168.until}`;
const vF527 = p169 => `Ваш акаунт призупинено до ${p169.until}`;
const vF528 = p170 => `Tài khoản của bạn đã bị đình chỉ đến ${p170.until}`;
const vF529 = (p171, p172 = {}) => {
  const v75 = p172.locale ?? _();
  if (v75 === "en") {
    return vF517(p171);
  } else if (v75 === "pt") {
    return vF518(p171);
  } else if (v75 === "ch") {
    return vF519(p171);
  } else if (v75 === "de") {
    return vF520(p171);
  } else if (v75 === "es") {
    return vF521(p171);
  } else if (v75 === "fr") {
    return vF522(p171);
  } else if (v75 === "it") {
    return vF523(p171);
  } else if (v75 === "jp") {
    return vF524(p171);
  } else if (v75 === "pl") {
    return vF525(p171);
  } else if (v75 === "ru") {
    return vF526(p171);
  } else if (v75 === "uk") {
    return vF527(p171);
  } else {
    return vF528(p171);
  }
};
const vF530 = () => "Exceeded maximum number of characters";
const vF531 = () => "Excedeu o número máximo de caracteres permitidos";
const vF532 = () => "超出最大字符数";
const vF533 = () => "Maximale Zeichenanzahl überschritten";
const vF534 = () => "Se excedió el número máximo de caracteres";
const vF535 = () => "Nombre maximal de caractères dépassé";
const vF536 = () => "Numero massimo di caratteri superato";
const vF537 = () => "最大文字数を超過しました";
const vF538 = () => "Przekroczono maksymalną liczbę znaków";
const vF539 = () => "Превышено максимальное количество символов";
const vF540 = () => "Перевищено максимальну кількість символів";
const vF541 = () => "Đã vượt quá số ký tự tối đa";
const vF542 = (p173 = {}, p174 = {}) => {
  const v76 = p174.locale ?? _();
  if (v76 === "en") {
    return vF530();
  } else if (v76 === "pt") {
    return vF531();
  } else if (v76 === "ch") {
    return vF532();
  } else if (v76 === "de") {
    return vF533();
  } else if (v76 === "es") {
    return vF534();
  } else if (v76 === "fr") {
    return vF535();
  } else if (v76 === "it") {
    return vF536();
  } else if (v76 === "jp") {
    return vF537();
  } else if (v76 === "pl") {
    return vF538();
  } else if (v76 === "ru") {
    return vF539();
  } else if (v76 === "uk") {
    return vF540();
  } else {
    return vF541();
  }
};
let v77;
function f7(p175) {
  const v78 = v77.__externref_table_alloc();
  v77.__wbindgen_export_2.set(v78, p175);
  return v78;
}
function f8(p176, p177) {
  try {
    return p176.apply(this, p177);
  } catch (e3) {
    const vF710 = f7(e3);
    v77.__wbindgen_exn_store(vF710);
  }
}
const v79 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true
}) : {
  decode: () => {
    throw Error("TextDecoder not available");
  }
};
if (typeof TextDecoder !== "undefined") {
  v79.decode();
}
let v80 = null;
function f9() {
  if (v80 === null || v80.byteLength === 0) {
    v80 = new Uint8Array(v77.memory.buffer);
  }
  return v80;
}
function f10(p178, p179) {
  p178 = p178 >>> 0;
  return v79.decode(f9().subarray(p178, p178 + p179));
}
function f11(p180) {
  return p180 == null;
}
function f12(p181) {
  v77.set_user_id(p181);
}
let vLN02 = 0;
const v81 = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : {
  encode: () => {
    throw Error("TextEncoder not available");
  }
};
const v82 = typeof v81.encodeInto == "function" ? function (p182, p183) {
  return v81.encodeInto(p182, p183);
} : function (p184, p185) {
  const v83 = v81.encode(p184);
  p185.set(v83);
  return {
    read: p184.length,
    written: v83.length
  };
};
function f13(p186, p187, p188) {
  if (p188 === undefined) {
    const v84 = v81.encode(p186);
    const v85 = p187(v84.length, 1) >>> 0;
    f9().subarray(v85, v85 + v84.length).set(v84);
    vLN02 = v84.length;
    return v85;
  }
  let v86 = p186.length;
  let v87 = p187(v86, 1) >>> 0;
  const vF910 = f9();
  let vLN03 = 0;
  for (; vLN03 < v86; vLN03++) {
    const v88 = p186.charCodeAt(vLN03);
    if (v88 > 127) {
      break;
    }
    vF910[v87 + vLN03] = v88;
  }
  if (vLN03 !== v86) {
    if (vLN03 !== 0) {
      p186 = p186.slice(vLN03);
    }
    v87 = p188(v87, v86, v86 = vLN03 + p186.length * 3, 1) >>> 0;
    const v89 = f9().subarray(v87 + vLN03, v87 + v86);
    const vV82 = v82(p186, v89);
    vLN03 += vV82.written;
    v87 = p188(v87, v86, vLN03, 1) >>> 0;
  }
  vLN02 = vLN03;
  return v87;
}
function f14(p189) {
  const vF1310 = f13(p189, v77.__wbindgen_malloc, v77.__wbindgen_realloc);
  const vVLN02 = vLN02;
  v77.request_url(vF1310, vVLN02);
}
function f15() {
  let v90;
  let v91;
  try {
    const v92 = v77.get_load_payload();
    v90 = v92[0];
    v91 = v92[1];
    return f10(v92[0], v92[1]);
  } finally {
    v77.__wbindgen_free(v90, v91, 1);
  }
}
function f16(p190) {
  let v93;
  let v94;
  try {
    const vF1311 = f13(p190, v77.__wbindgen_malloc, v77.__wbindgen_realloc);
    const vVLN022 = vLN02;
    const v95 = v77.get_pawtected_endpoint_payload(vF1311, vVLN022);
    v93 = v95[0];
    v94 = v95[1];
    return f10(v95[0], v95[1]);
  } finally {
    v77.__wbindgen_free(v93, v94, 1);
  }
}
async function f17(p191, p192) {
  if (typeof Response == "function" && p191 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") {
      try {
        return await WebAssembly.instantiateStreaming(p191, p192);
      } catch (e4) {
        if (p191.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e4);
        } else {
          throw e4;
        }
      }
    }
    const v96 = await p191.arrayBuffer();
    return await WebAssembly.instantiate(v96, p192);
  } else {
    const v97 = await WebAssembly.instantiate(p191, p192);
    if (v97 instanceof WebAssembly.Instance) {
      return {
        instance: v97,
        module: p191
      };
    } else {
      return v97;
    }
  }
}
function f18() {
  const vO = {
    wbg: {}
  };
  vO.wbg.__wbg_buffer_609cc3eee51ed158 = function (p193) {
    return p193.buffer;
  };
  vO.wbg.__wbg_call_672a4d21634d4a24 = function () {
    return f8(function (p194, p195) {
      return p194.call(p195);
    }, arguments);
  };
  vO.wbg.__wbg_call_7cccdd69e0791ae2 = function () {
    return f8(function (p196, p197, p198) {
      return p196.call(p197, p198);
    }, arguments);
  };
  vO.wbg.__wbg_crypto_574e78ad8b13b65f = function (p199) {
    return p199.crypto;
  };
  vO.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function () {
    return f8(function (p200, p201) {
      p200.getRandomValues(p201);
    }, arguments);
  };
  vO.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function (p202) {
    return p202.msCrypto;
  };
  vO.wbg.__wbg_new_a12002a7f91c75be = function (p203) {
    return new Uint8Array(p203);
  };
  vO.wbg.__wbg_newnoargs_105ed471475aaf50 = function (p204, p205) {
    return new Function(f10(p204, p205));
  };
  vO.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function (p206, p207, p208) {
    return new Uint8Array(p206, p207 >>> 0, p208 >>> 0);
  };
  vO.wbg.__wbg_newwithlength_a381634e90c276d4 = function (p209) {
    return new Uint8Array(p209 >>> 0);
  };
  vO.wbg.__wbg_node_905d3e251edff8a2 = function (p210) {
    return p210.node;
  };
  vO.wbg.__wbg_process_dc0fbacc7c1c06f7 = function (p211) {
    return p211.process;
  };
  vO.wbg.__wbg_randomFillSync_ac0988aba3254290 = function () {
    return f8(function (p212, p213) {
      p212.randomFillSync(p213);
    }, arguments);
  };
  vO.wbg.__wbg_require_60cc747a6bc5215a = function () {
    return f8(function () {
      return module.require;
    }, arguments);
  };
  vO.wbg.__wbg_set_65595bdd868b3009 = function (p214, p215, p216) {
    p214.set(p215, p216 >>> 0);
  };
  vO.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function () {
    const v98 = typeof global === "undefined" ? null : global;
    if (f11(v98)) {
      return 0;
    } else {
      return f7(v98);
    }
  };
  vO.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function () {
    const v99 = typeof globalThis === "undefined" ? null : globalThis;
    if (f11(v99)) {
      return 0;
    } else {
      return f7(v99);
    }
  };
  vO.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function () {
    const v100 = typeof self === "undefined" ? null : self;
    if (f11(v100)) {
      return 0;
    } else {
      return f7(v100);
    }
  };
  vO.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function () {
    const v101 = typeof window === "undefined" ? null : window;
    if (f11(v101)) {
      return 0;
    } else {
      return f7(v101);
    }
  };
  vO.wbg.__wbg_subarray_aa9065fa9dc5df96 = function (p217, p218, p219) {
    return p217.subarray(p218 >>> 0, p219 >>> 0);
  };
  vO.wbg.__wbg_versions_c01dfd4722a88165 = function (p220) {
    return p220.versions;
  };
  vO.wbg.__wbindgen_init_externref_table = function () {
    const v102 = v77.__wbindgen_export_2;
    const v103 = v102.grow(4);
    v102.set(0, undefined);
    v102.set(v103 + 0, undefined);
    v102.set(v103 + 1, null);
    v102.set(v103 + 2, true);
    v102.set(v103 + 3, false);
  };
  vO.wbg.__wbindgen_is_function = function (p221) {
    return typeof p221 == "function";
  };
  vO.wbg.__wbindgen_is_object = function (p222) {
    const vP222 = p222;
    return typeof vP222 == "object" && vP222 !== null;
  };
  vO.wbg.__wbindgen_is_string = function (p223) {
    return typeof p223 == "string";
  };
  vO.wbg.__wbindgen_is_undefined = function (p224) {
    return p224 === undefined;
  };
  vO.wbg.__wbindgen_memory = function () {
    return v77.memory;
  };
  vO.wbg.__wbindgen_string_new = function (p225, p226) {
    return f10(p225, p226);
  };
  vO.wbg.__wbindgen_throw = function (p227, p228) {
    throw new Error(f10(p227, p228));
  };
  return vO;
}
function f19(p229, p230) {
  v77 = p229.exports;
  f20.__wbindgen_wasm_module = p230;
  v80 = null;
  v77.__wbindgen_start();
  return v77;
}
async function f20(p231) {
  if (v77 !== undefined) {
    return v77;
  }
  if (typeof p231 !== "undefined") {
    if (Object.getPrototypeOf(p231) === Object.prototype) {
      ({
        module_or_path: p231
      } = p231);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (typeof p231 === "undefined") {
    p231 = new URL("pawtect_wasm_bg.wasm", import.meta.url);
  }
  const vF1810 = f18();
  if (typeof p231 == "string" || typeof Request == "function" && p231 instanceof Request || typeof URL == "function" && p231 instanceof URL) {
    p231 = fetch(p231);
  }
  const {
    instance: e,
    module: r
  } = await f17(await p231, vF1810);
  return f19(e, r);
}
function f21(p232, p233) {
  if (p232 == null || !p232.length) {
    return false;
  }
  for (const v104 of p232) {
    if (v104 === p233) {
      return true;
    }
  }
  return false;
}
function f22(p234, p235) {
  for (const v105 of p235) {
    if (f21(p234, v105)) {
      return true;
    }
  }
  return false;
}
function f23(p236) {
  const vAtob = atob(p236);
  const v106 = new Uint8Array(vAtob.length);
  for (let vLN04 = 0; vLN04 < vAtob.length; vLN04++) {
    v106[vLN04] = vAtob.charCodeAt(vLN04);
  }
  return v106;
}
class C4 {
  constructor(p237) {
    vF3(this, "bytes");
    this.bytes = p237 ?? new Uint8Array();
  }
  set(p238, p239) {
    const v107 = Math.floor(p238 / 8);
    const v108 = p238 % 8;
    if (v107 >= this.bytes.length) {
      const v109 = new Uint8Array(v107 + 1);
      const v110 = v109.length - this.bytes.length;
      for (let vLN05 = 0; vLN05 < this.bytes.length; vLN05++) {
        v109[vLN05 + v110] = this.bytes[vLN05];
      }
      this.bytes = v109;
    }
    const v111 = this.bytes.length - 1 - v107;
    if (p239) {
      this.bytes[v111] = this.bytes[v111] | 1 << v108;
    } else {
      this.bytes[v111] = this.bytes[v111] & ~(1 << v108);
    }
  }
  get(p240) {
    const v112 = Math.floor(p240 / 8);
    const v113 = p240 % 8;
    const v114 = this.bytes.length;
    if (v112 > v114) {
      return false;
    } else {
      return (this.bytes[v114 - 1 - v112] & 1 << v113) !== 0;
    }
  }
}
function f24(p241) {
  return new Promise((p242, p243) => {
    const v115 = new FileReader();
    v115.onload = () => {
      const v116 = v115.result;
      if (!v116 || typeof v116 != "string") {
        p243(new Error("Could not read blob as data URL"));
        return;
      }
      p242(v116.substring(v116.indexOf(",") + 1));
    };
    v115.readAsDataURL(p241);
  });
}
var v117;
var v118;
var v119;
var v120;
var v121;
var v122;
var v123;
var v124;
class C5 {
  constructor() {
    vF3(this, "channel", new BroadcastChannel("user-channel"));
    vF6(this, v117, E());
    vF6(this, v118, E(true));
    vF6(this, v119, E());
    vF6(this, v120, E(Date.now()));
    vF6(this, v121, I(() => {
      if (!this.data) {
        return;
      }
      const v125 = this.data.charges;
      if (v125.count > v125.max) {
        return v125.count;
      }
      const v126 = v125.count + Math.max((De.now - this.lastFetch) / v125.cooldownMs, 0);
      return Math.min(v125.max, v126);
    }));
    vF6(this, v122, I(() => this.charges !== undefined && this.data ? (1 - this.charges % 1) * this.data.charges.cooldownMs : undefined));
    vF6(this, v123, I(() => {
      var v127;
      return new C4(f23(((v127 = this.data) == null ? undefined : v127.flagsBitmap) ?? "AA=="));
    }));
    vF6(this, v124, I(() => {
      var v128;
      if ((v128 = this.data) == null || !v128.timeoutUntil) {
        return;
      }
      const v129 = new Date(this.data.timeoutUntil);
      if (!(v129.getTime() < Date.now())) {
        return v129;
      }
    }));
    this.channel.onmessage = p244 => {
      const v130 = JSON.parse(p244.data);
      if (v130.type === "refresh") {
        this.data = v130.data;
        this.lastFetch = Date.now();
      } else if (v130.type === "logout") {
        this.data = undefined;
      }
    };
  }
  get data() {
    return y(vF5(this, v117));
  }
  set data(p245) {
    v(vF5(this, v117), p245, true);
  }
  get loading() {
    return y(vF5(this, v118));
  }
  set loading(p246) {
    v(vF5(this, v118), p246, true);
  }
  get notificiationCount() {
    return y(vF5(this, v119));
  }
  set notificiationCount(p247) {
    v(vF5(this, v119), p247, true);
  }
  get lastFetch() {
    return y(vF5(this, v120));
  }
  set lastFetch(p248) {
    v(vF5(this, v120), p248);
  }
  get charges() {
    return y(vF5(this, v121));
  }
  set charges(p249) {
    v(vF5(this, v121), p249);
  }
  get cooldown() {
    return y(vF5(this, v122));
  }
  set cooldown(p250) {
    v(vF5(this, v122), p250);
  }
  get flagsBitmap() {
    return y(vF5(this, v123));
  }
  set flagsBitmap(p251) {
    v(vF5(this, v123), p251);
  }
  get timeoutUntil() {
    return y(vF5(this, v124));
  }
  set timeoutUntil(p252) {
    v(vF5(this, v124), p252);
  }
  async refresh() {
    var v131;
    try {
      this.loading = true;
      this.data = await v380.me();
      this.lastFetch = Date.now();
      this.channel.postMessage(JSON.stringify({
        type: "refresh",
        data: this.data
      }));
      if (this.data && this.notificiationCount === undefined) {
        v380.getNotificationCount().then(p253 => {
          this.notificiationCount = p253;
        });
      }
      if ((v131 = this.data) != null && v131.id) {
        Me("userId", {
          id: this.data.id
        });
      }
      return !!this.data;
    } catch (e5) {
      console.error(e5);
      v29.warning(vF334(), {
        duration: 10000
      });
      return false;
    } finally {
      this.loading = false;
    }
  }
  async logout() {
    await v380.logout();
    this.channel.postMessage(JSON.stringify({
      type: "logout"
    }));
    this.data = undefined;
  }
  hasColor(p254) {
    var v132;
    if (p254 < 32) {
      return true;
    } else {
      return ((((v132 = this.data) == null ? undefined : v132.extraColorsBitmap) ?? 0) & 1 << p254 - 32) !== 0;
    }
  }
  hasPermission(p255) {
    var v133;
    return f21((v133 = this.data) == null ? undefined : v133.permissions, p255);
  }
  hasAnyPermission(p256) {
    var v134;
    return f22((v134 = this.data) == null ? undefined : v134.permissions, p256);
  }
}
v117 = new WeakMap();
v118 = new WeakMap();
v119 = new WeakMap();
v120 = new WeakMap();
v121 = new WeakMap();
v122 = new WeakMap();
v123 = new WeakMap();
v124 = new WeakMap();
const v135 = new C5();
function f25(p257) {
  if (v135.data) {
    return v135.data.experiments[p257] ?? null;
  } else {
    return null;
  }
}
function f26(p258) {
  var v136;
  var v137;
  return ((v137 = (v136 = v135.data) == null ? undefined : v136.experiments[p258]) == null ? undefined : v137.enabled) ?? true;
}
const vO2 = {
  griefing: vF178(),
  "multi-accounting": vF308(),
  "hate-speech": vF191(),
  bot: vF74(),
  doxxing: vF152(),
  "inappropriate-content": vF204(),
  other: vF87()
};
const vO3 = {
  doxxing: "text-red-600",
  "hate-speech": "text-red-400",
  "inappropriate-content": "text-amber-500",
  "multi-accounting": "text-amber-300",
  bot: "text-amber-600",
  griefing: "text-amber-200",
  other: "text-cyan-600"
};
const vO4 = {
  doxxing: 0,
  "hate-speech": 1,
  "inappropriate-content": 2,
  bot: 3,
  "multi-accounting": 4,
  other: 5,
  griefing: 6
};
const vA = [{
  tileSize: 1000,
  zoom: 11
}];
const vLN4 = 4;
const vLN6000 = 6000;
const vA2 = [{
  name: "Transparent",
  rgb: [0, 0, 0]
}, {
  name: "Black",
  rgb: [0, 0, 0]
}, {
  name: "Dark Gray",
  rgb: [60, 60, 60]
}, {
  name: "Gray",
  rgb: [120, 120, 120]
}, {
  name: "Light Gray",
  rgb: [210, 210, 210]
}, {
  name: "White",
  rgb: [255, 255, 255]
}, {
  name: "Deep Red",
  rgb: [96, 0, 24]
}, {
  name: "Red",
  rgb: [237, 28, 36]
}, {
  name: "Orange",
  rgb: [255, 127, 39]
}, {
  name: "Gold",
  rgb: [246, 170, 9]
}, {
  name: "Yellow",
  rgb: [249, 221, 59]
}, {
  name: "Light Yellow",
  rgb: [255, 250, 188]
}, {
  name: "Dark Green",
  rgb: [14, 185, 104]
}, {
  name: "Green",
  rgb: [19, 230, 123]
}, {
  name: "Light Green",
  rgb: [135, 255, 94]
}, {
  name: "Dark Teal",
  rgb: [12, 129, 110]
}, {
  name: "Teal",
  rgb: [16, 174, 166]
}, {
  name: "Light Teal",
  rgb: [19, 225, 190]
}, {
  name: "Dark Blue",
  rgb: [40, 80, 158]
}, {
  name: "Blue",
  rgb: [64, 147, 228]
}, {
  name: "Cyan",
  rgb: [96, 247, 242]
}, {
  name: "Indigo",
  rgb: [107, 80, 246]
}, {
  name: "Light Indigo",
  rgb: [153, 177, 251]
}, {
  name: "Dark Purple",
  rgb: [120, 12, 153]
}, {
  name: "Purple",
  rgb: [170, 56, 185]
}, {
  name: "Light Purple",
  rgb: [224, 159, 249]
}, {
  name: "Dark Pink",
  rgb: [203, 0, 122]
}, {
  name: "Pink",
  rgb: [236, 31, 128]
}, {
  name: "Light Pink",
  rgb: [243, 141, 169]
}, {
  name: "Dark Brown",
  rgb: [104, 70, 52]
}, {
  name: "Brown",
  rgb: [149, 104, 42]
}, {
  name: "Beige",
  rgb: [248, 178, 119]
}, {
  name: "Medium Gray",
  rgb: [170, 170, 170]
}, {
  name: "Dark Red",
  rgb: [165, 14, 30]
}, {
  name: "Light Red",
  rgb: [250, 128, 114]
}, {
  name: "Dark Orange",
  rgb: [228, 92, 26]
}, {
  name: "Light Tan",
  rgb: [214, 181, 148]
}, {
  name: "Dark Goldenrod",
  rgb: [156, 132, 49]
}, {
  name: "Goldenrod",
  rgb: [197, 173, 49]
}, {
  name: "Light Goldenrod",
  rgb: [232, 212, 95]
}, {
  name: "Dark Olive",
  rgb: [74, 107, 58]
}, {
  name: "Olive",
  rgb: [90, 148, 74]
}, {
  name: "Light Olive",
  rgb: [132, 197, 115]
}, {
  name: "Dark Cyan",
  rgb: [15, 121, 159]
}, {
  name: "Light Cyan",
  rgb: [187, 250, 242]
}, {
  name: "Light Blue",
  rgb: [125, 199, 255]
}, {
  name: "Dark Indigo",
  rgb: [77, 49, 184]
}, {
  name: "Dark Slate Blue",
  rgb: [74, 66, 132]
}, {
  name: "Slate Blue",
  rgb: [122, 113, 196]
}, {
  name: "Light Slate Blue",
  rgb: [181, 174, 241]
}, {
  name: "Light Brown",
  rgb: [219, 164, 99]
}, {
  name: "Dark Beige",
  rgb: [209, 128, 81]
}, {
  name: "Light Beige",
  rgb: [255, 197, 165]
}, {
  name: "Dark Peach",
  rgb: [155, 82, 73]
}, {
  name: "Peach",
  rgb: [209, 128, 120]
}, {
  name: "Light Peach",
  rgb: [250, 182, 164]
}, {
  name: "Dark Tan",
  rgb: [123, 99, 82]
}, {
  name: "Tan",
  rgb: [156, 132, 107]
}, {
  name: "Dark Slate",
  rgb: [51, 57, 65]
}, {
  name: "Slate",
  rgb: [109, 117, 141]
}, {
  name: "Light Slate",
  rgb: [179, 185, 209]
}, {
  name: "Dark Stone",
  rgb: [109, 100, 63]
}, {
  name: "Stone",
  rgb: [148, 140, 107]
}, {
  name: "Light Stone",
  rgb: [205, 197, 158]
}];
const vO5 = {
  needsPhoneVerification: "needs_phone_verification"
};
const vO6 = {
  Droplet: {},
  "Max. Charge": {},
  "Paint Charge": {},
  Color: {},
  Flag: {},
  "Profile Picture": {},
  FRAME: {},
  "Custom Name Font": {},
  "Custom Name Style": {}
};
const vO7 = {
  10: {
    name: "25,000 Droplets",
    price: 500,
    isDollar: true,
    lookupKey: "droplets_5",
    items: [{
      name: "Droplet",
      amount: 25000
    }]
  },
  20: {
    name: "78,750 Droplets",
    price: 1500,
    isDollar: true,
    lookupKey: "droplets_15",
    items: [{
      name: "Droplet",
      amount: 76750
    }]
  },
  30: {
    name: "165,000 Droplets",
    price: 3000,
    isDollar: true,
    lookupKey: "droplets_30",
    items: [{
      name: "Droplet",
      amount: 165000
    }]
  },
  40: {
    name: "287,500 Droplets",
    price: 5000,
    isDollar: true,
    lookupKey: "droplets_50",
    items: [{
      name: "Droplet",
      amount: 287500
    }]
  },
  50: {
    name: "450,000 Droplets",
    price: 7500,
    isDollar: true,
    lookupKey: "droplets_75",
    items: [{
      name: "Droplet",
      amount: 450000
    }]
  },
  60: {
    name: "625,000 Droplets",
    price: 10000,
    isDollar: true,
    lookupKey: "droplets_100",
    items: [{
      name: "Droplet",
      amount: 625000
    }]
  },
  70: {
    name: "+5 Max. Charges",
    price: 500,
    isDollar: false,
    items: [{
      name: "Max. Charge",
      amount: 5
    }]
  },
  80: {
    name: "+30 Paint Charges",
    price: 500,
    isDollar: false,
    items: [{
      name: "Paint Charge",
      amount: 30
    }]
  },
  100: {
    name: "Unlock Color",
    price: 2000,
    isDollar: false,
    items: [{
      name: "Color",
      amount: 1
    }]
  },
  110: {
    name: "Flag",
    price: 20000,
    isDollar: false,
    items: [{
      name: "Flag",
      amount: 1
    }]
  },
  120: {
    name: "Profile Picture",
    price: 20000,
    isDollar: false,
    items: [{
      name: "Profile Picture",
      amount: 1
    }]
  },
  130: {
    name: "FRAME",
    isDollar: false,
    items: [{
      name: "FRAME",
      amount: 1
    }]
  },
  140: {
    name: "Custom Name Font",
    isDollar: false,
    items: [{
      name: "Custom Name Font",
      amount: 1
    }]
  },
  150: {
    name: "Custom Name Style",
    isDollar: false,
    items: [{
      name: "Custom Name Style",
      amount: 1
    }]
  }
};
const v138 = JSON.parse(`[{"id":1,"name":"Afghanistan","code":"AF","flag":"🇦🇫"},{"id":2,"name":"Albania","code":"AL","flag":"🇦🇱"},{"id":3,"name":"Algeria","code":"DZ","flag":"🇩🇿"},{"id":4,"name":"American Samoa","code":"AS","flag":"🇦🇸"},{"id":5,"name":"Andorra","code":"AD","flag":"🇦🇩"},{"id":6,"name":"Angola","code":"AO","flag":"🇦🇴"},{"id":7,"name":"Anguilla","code":"AI","flag":"🇦🇮"},{"id":8,"name":"Antarctica","code":"AQ","flag":"🇦🇶"},{"id":9,"name":"Antigua and Barbuda","code":"AG","flag":"🇦🇬"},{"id":10,"name":"Argentina","code":"AR","flag":"🇦🇷"},{"id":11,"name":"Armenia","code":"AM","flag":"🇦🇲"},{"id":12,"name":"Aruba","code":"AW","flag":"🇦🇼"},{"id":13,"name":"Australia","code":"AU","flag":"🇦🇺"},{"id":14,"name":"Austria","code":"AT","flag":"🇦🇹"},{"id":15,"name":"Azerbaijan","code":"AZ","flag":"🇦🇿"},{"id":16,"name":"Bahamas","code":"BS","flag":"🇧🇸"},{"id":17,"name":"Bahrain","code":"BH","flag":"🇧🇭"},{"id":18,"name":"Bangladesh","code":"BD","flag":"🇧🇩"},{"id":19,"name":"Barbados","code":"BB","flag":"🇧🇧"},{"id":20,"name":"Belarus","code":"BY","flag":"🇧🇾"},{"id":21,"name":"Belgium","code":"BE","flag":"🇧🇪"},{"id":22,"name":"Belize","code":"BZ","flag":"🇧🇿"},{"id":23,"name":"Benin","code":"BJ","flag":"🇧🇯"},{"id":24,"name":"Bermuda","code":"BM","flag":"🇧🇲"},{"id":25,"name":"Bhutan","code":"BT","flag":"🇧🇹"},{"id":26,"name":"Bolivia","code":"BO","flag":"🇧🇴"},{"id":27,"name":"Bonaire","code":"BQ","flag":"🇧🇶"},{"id":28,"name":"Bosnia and Herzegovina","code":"BA","flag":"🇧🇦"},{"id":29,"name":"Botswana","code":"BW","flag":"🇧🇼"},{"id":30,"name":"Bouvet Island","code":"BV","flag":"🇧🇻"},{"id":31,"name":"Brazil","code":"BR","flag":"🇧🇷"},{"id":32,"name":"British Indian Ocean Territory","code":"IO","flag":"🇮🇴"},{"id":33,"name":"Brunei Darussalam","code":"BN","flag":"🇧🇳"},{"id":34,"name":"Bulgaria","code":"BG","flag":"🇧🇬"},{"id":35,"name":"Burkina Faso","code":"BF","flag":"🇧🇫"},{"id":36,"name":"Burundi","code":"BI","flag":"🇧🇮"},{"id":37,"name":"Cabo Verde","code":"CV","flag":"🇨🇻"},{"id":38,"name":"Cambodia","code":"KH","flag":"🇰🇭"},{"id":39,"name":"Cameroon","code":"CM","flag":"🇨🇲"},{"id":40,"name":"Canada","code":"CA","flag":"🇨🇦"},{"id":41,"name":"Cayman Islands","code":"KY","flag":"🇰🇾"},{"id":42,"name":"Central African Republic","code":"CF","flag":"🇨🇫"},{"id":43,"name":"Chad","code":"TD","flag":"🇹🇩"},{"id":44,"name":"Chile","code":"CL","flag":"🇨🇱"},{"id":45,"name":"China","code":"CN","flag":"🇨🇳"},{"id":46,"name":"Christmas Island","code":"CX","flag":"🇨🇽"},{"id":47,"name":"Cocos (Keeling) Islands","code":"CC","flag":"🇨🇨"},{"id":48,"name":"Colombia","code":"CO","flag":"🇨🇴"},{"id":49,"name":"Comoros","code":"KM","flag":"🇰🇲"},{"id":50,"name":"Congo","code":"CG","flag":"🇨🇬"},{"id":51,"name":"Cook Islands","code":"CK","flag":"🇨🇰"},{"id":52,"name":"Costa Rica","code":"CR","flag":"🇨🇷"},{"id":53,"name":"Croatia","code":"HR","flag":"🇭🇷"},{"id":54,"name":"Cuba","code":"CU","flag":"🇨🇺"},{"id":55,"name":"Curaçao","code":"CW","flag":"🇨🇼"},{"id":56,"name":"Cyprus","code":"CY","flag":"🇨🇾"},{"id":57,"name":"Czechia","code":"CZ","flag":"🇨🇿"},{"id":58,"name":"Côte d'Ivoire","code":"CI","flag":"🇨🇮"},{"id":59,"name":"Denmark","code":"DK","flag":"🇩🇰"},{"id":60,"name":"Djibouti","code":"DJ","flag":"🇩🇯"},{"id":61,"name":"Dominica","code":"DM","flag":"🇩🇲"},{"id":62,"name":"Dominican Republic","code":"DO","flag":"🇩🇴"},{"id":63,"name":"Ecuador","code":"EC","flag":"🇪🇨"},{"id":64,"name":"Egypt","code":"EG","flag":"🇪🇬"},{"id":65,"name":"El Salvador","code":"SV","flag":"🇸🇻"},{"id":66,"name":"Equatorial Guinea","code":"GQ","flag":"🇬🇶"},{"id":67,"name":"Eritrea","code":"ER","flag":"🇪🇷"},{"id":68,"name":"Estonia","code":"EE","flag":"🇪🇪"},{"id":69,"name":"Eswatini","code":"SZ","flag":"🇸🇿"},{"id":70,"name":"Ethiopia","code":"ET","flag":"🇪🇹"},{"id":71,"name":"Falkland Islands (Malvinas)","code":"FK","flag":"🇫🇰"},{"id":72,"name":"Faroe Islands","code":"FO","flag":"🇫🇴"},{"id":73,"name":"Fiji","code":"FJ","flag":"🇫🇯"},{"id":74,"name":"Finland","code":"FI","flag":"🇫🇮"},{"id":75,"name":"France","code":"FR","flag":"🇫🇷"},{"id":76,"name":"French Guiana","code":"GF","flag":"🇬🇫"},{"id":77,"name":"French Polynesia","code":"PF","flag":"🇵🇫"},{"id":78,"name":"French Southern Territories","code":"TF","flag":"🇹🇫"},{"id":79,"name":"Gabon","code":"GA","flag":"🇬🇦"},{"id":80,"name":"Gambia","code":"GM","flag":"🇬🇲"},{"id":81,"name":"Georgia","code":"GE","flag":"🇬🇪"},{"id":82,"name":"Germany","code":"DE","flag":"🇩🇪"},{"id":83,"name":"Ghana","code":"GH","flag":"🇬🇭"},{"id":84,"name":"Gibraltar","code":"GI","flag":"🇬🇮"},{"id":85,"name":"Greece","code":"GR","flag":"🇬🇷"},{"id":86,"name":"Greenland","code":"GL","flag":"🇬🇱"},{"id":87,"name":"Grenada","code":"GD","flag":"🇬🇩"},{"id":88,"name":"Guadeloupe","code":"GP","flag":"🇬🇵"},{"id":89,"name":"Guam","code":"GU","flag":"🇬🇺"},{"id":90,"name":"Guatemala","code":"GT","flag":"🇬🇹"},{"id":91,"name":"Guernsey","code":"GG","flag":"🇬🇬"},{"id":92,"name":"Guinea","code":"GN","flag":"🇬🇳"},{"id":93,"name":"Guinea-Bissau","code":"GW","flag":"🇬🇼"},{"id":94,"name":"Guyana","code":"GY","flag":"🇬🇾"},{"id":95,"name":"Haiti","code":"HT","flag":"🇭🇹"},{"id":96,"name":"Heard Island and McDonald Islands","code":"HM","flag":"🇭🇲"},{"id":97,"name":"Honduras","code":"HN","flag":"🇭🇳"},{"id":98,"name":"Hong Kong","code":"HK","flag":"🇭🇰"},{"id":99,"name":"Hungary","code":"HU","flag":"🇭🇺"},{"id":100,"name":"Iceland","code":"IS","flag":"🇮🇸"},{"id":101,"name":"India","code":"IN","flag":"🇮🇳"},{"id":102,"name":"Indonesia","code":"ID","flag":"🇮🇩"},{"id":103,"name":"Iran","code":"IR","flag":"🇮🇷"},{"id":104,"name":"Iraq","code":"IQ","flag":"🇮🇶"},{"id":105,"name":"Ireland","code":"IE","flag":"🇮🇪"},{"id":106,"name":"Isle of Man","code":"IM","flag":"🇮🇲"},{"id":107,"name":"Israel","code":"IL","flag":"🇮🇱"},{"id":108,"name":"Italy","code":"IT","flag":"🇮🇹"},{"id":109,"name":"Jamaica","code":"JM","flag":"🇯🇲"},{"id":110,"name":"Japan","code":"JP","flag":"🇯🇵"},{"id":111,"name":"Jersey","code":"JE","flag":"🇯🇪"},{"id":112,"name":"Jordan","code":"JO","flag":"🇯🇴"},{"id":113,"name":"Kazakhstan","code":"KZ","flag":"🇰🇿"},{"id":114,"name":"Kenya","code":"KE","flag":"🇰🇪"},{"id":115,"name":"Kiribati","code":"KI","flag":"🇰🇮"},{"id":116,"name":"Kosovo","code":"XK","flag":"🇽🇰"},{"id":117,"name":"Kuwait","code":"KW","flag":"🇰🇼"},{"id":118,"name":"Kyrgyzstan","code":"KG","flag":"🇰🇬"},{"id":119,"name":"Laos","code":"LA","flag":"🇱🇦"},{"id":120,"name":"Latvia","code":"LV","flag":"🇱🇻"},{"id":121,"name":"Lebanon","code":"LB","flag":"🇱🇧"},{"id":122,"name":"Lesotho","code":"LS","flag":"🇱🇸"},{"id":123,"name":"Liberia","code":"LR","flag":"🇱🇷"},{"id":124,"name":"Libya","code":"LY","flag":"🇱🇾"},{"id":125,"name":"Liechtenstein","code":"LI","flag":"🇱🇮"},{"id":126,"name":"Lithuania","code":"LT","flag":"🇱🇹"},{"id":127,"name":"Luxembourg","code":"LU","flag":"🇱🇺"},{"id":128,"name":"Macao","code":"MO","flag":"🇲🇴"},{"id":129,"name":"Madagascar","code":"MG","flag":"🇲🇬"},{"id":130,"name":"Malawi","code":"MW","flag":"🇲🇼"},{"id":131,"name":"Malaysia","code":"MY","flag":"🇲🇾"},{"id":132,"name":"Maldives","code":"MV","flag":"🇲🇻"},{"id":133,"name":"Mali","code":"ML","flag":"🇲🇱"},{"id":134,"name":"Malta","code":"MT","flag":"🇲🇹"},{"id":135,"name":"Marshall Islands","code":"MH","flag":"🇲🇭"},{"id":136,"name":"Martinique","code":"MQ","flag":"🇲🇶"},{"id":137,"name":"Mauritania","code":"MR","flag":"🇲🇷"},{"id":138,"name":"Mauritius","code":"MU","flag":"🇲🇺"},{"id":139,"name":"Mayotte","code":"YT","flag":"🇾🇹"},{"id":140,"name":"Mexico","code":"MX","flag":"🇲🇽"},{"id":141,"name":"Micronesia","code":"FM","flag":"🇫🇲"},{"id":142,"name":"Moldova","code":"MD","flag":"🇲🇩"},{"id":143,"name":"Monaco","code":"MC","flag":"🇲🇨"},{"id":144,"name":"Mongolia","code":"MN","flag":"🇲🇳"},{"id":145,"name":"Montenegro","code":"ME","flag":"🇲🇪"},{"id":146,"name":"Montserrat","code":"MS","flag":"🇲🇸"},{"id":147,"name":"Morocco","code":"MA","flag":"🇲🇦"},{"id":148,"name":"Mozambique","code":"MZ","flag":"🇲🇿"},{"id":149,"name":"Myanmar","code":"MM","flag":"🇲🇲"},{"id":150,"name":"Namibia","code":"NA","flag":"🇳🇦"},{"id":151,"name":"Nauru","code":"NR","flag":"🇳🇷"},{"id":152,"name":"Nepal","code":"NP","flag":"🇳🇵"},{"id":153,"name":"Netherlands","code":"NL","flag":"🇳🇱"},{"id":154,"name":"New Caledonia","code":"NC","flag":"🇳🇨"},{"id":155,"name":"New Zealand","code":"NZ","flag":"🇳🇿"},{"id":156,"name":"Nicaragua","code":"NI","flag":"🇳🇮"},{"id":157,"name":"Niger","code":"NE","flag":"🇳🇪"},{"id":158,"name":"Nigeria","code":"NG","flag":"🇳🇬"},{"id":159,"name":"Niue","code":"NU","flag":"🇳🇺"},{"id":160,"name":"Norfolk Island","code":"NF","flag":"🇳🇫"},{"id":161,"name":"North Korea","code":"KP","flag":"🇰🇵"},{"id":162,"name":"North Macedonia","code":"MK","flag":"🇲🇰"},{"id":163,"name":"Northern Mariana Islands","code":"MP","flag":"🇲🇵"},{"id":164,"name":"Norway","code":"NO","flag":"🇳🇴"},{"id":165,"name":"Oman","code":"OM","flag":"🇴🇲"},{"id":166,"name":"Pakistan","code":"PK","flag":"🇵🇰"},{"id":167,"name":"Palau","code":"PW","flag":"🇵🇼"},{"id":168,"name":"Palestine","code":"PS","flag":"🇵🇸"},{"id":169,"name":"Panama","code":"PA","flag":"🇵🇦"},{"id":170,"name":"Papua New Guinea","code":"PG","flag":"🇵🇬"},{"id":171,"name":"Paraguay","code":"PY","flag":"🇵🇾"},{"id":172,"name":"Peru","code":"PE","flag":"🇵🇪"},{"id":173,"name":"Philippines","code":"PH","flag":"🇵🇭"},{"id":174,"name":"Pitcairn","code":"PN","flag":"🇵🇳"},{"id":175,"name":"Poland","code":"PL","flag":"🇵🇱"},{"id":176,"name":"Portugal","code":"PT","flag":"🇵🇹"},{"id":177,"name":"Puerto Rico","code":"PR","flag":"🇵🇷"},{"id":178,"name":"Qatar","code":"QA","flag":"🇶🇦"},{"id":179,"name":"Republic of the Congo","code":"CD","flag":"🇨🇩"},{"id":180,"name":"Romania","code":"RO","flag":"🇷🇴"},{"id":181,"name":"Russia","code":"RU","flag":"🇷🇺"},{"id":182,"name":"Rwanda","code":"RW","flag":"🇷🇼"},{"id":183,"name":"Réunion","code":"RE","flag":"🇷🇪"},{"id":184,"name":"Saint Barthélemy","code":"BL","flag":"🇧🇱"},{"id":185,"name":"Saint Helena","code":"SH","flag":"🇸🇭"},{"id":186,"name":"Saint Kitts and Nevis","code":"KN","flag":"🇰🇳"},{"id":187,"name":"Saint Lucia","code":"LC","flag":"🇱🇨"},{"id":188,"name":"Saint Martin (French part)","code":"MF","flag":"🇲🇫"},{"id":189,"name":"Saint Pierre and Miquelon","code":"PM","flag":"🇵🇲"},{"id":190,"name":"Saint Vincent and the Grenadines","code":"VC","flag":"🇻🇨"},{"id":191,"name":"Samoa","code":"WS","flag":"🇼🇸"},{"id":192,"name":"San Marino","code":"SM","flag":"🇸🇲"},{"id":193,"name":"Sao Tome and Principe","code":"ST","flag":"🇸🇹"},{"id":194,"name":"Saudi Arabia","code":"SA","flag":"🇸🇦"},{"id":195,"name":"Senegal","code":"SN","flag":"🇸🇳"},{"id":196,"name":"Serbia","code":"RS","flag":"🇷🇸"},{"id":197,"name":"Seychelles","code":"SC","flag":"🇸🇨"},{"id":198,"name":"Sierra Leone","code":"SL","flag":"🇸🇱"},{"id":199,"name":"Singapore","code":"SG","flag":"🇸🇬"},{"id":200,"name":"Sint Maarten (Dutch part)","code":"SX","flag":"🇸🇽"},{"id":201,"name":"Slovakia","code":"SK","flag":"🇸🇰"},{"id":202,"name":"Slovenia","code":"SI","flag":"🇸🇮"},{"id":203,"name":"Solomon Islands","code":"SB","flag":"🇸🇧"},{"id":204,"name":"Somalia","code":"SO","flag":"🇸🇴"},{"id":205,"name":"South Africa","code":"ZA","flag":"🇿🇦"},{"id":206,"name":"South Georgia and the South Sandwich Islands","code":"GS","flag":"🇬🇸"},{"id":207,"name":"South Korea","code":"KR","flag":"🇰🇷"},{"id":208,"name":"South Sudan","code":"SS","flag":"🇸🇸"},{"id":209,"name":"Spain","code":"ES","flag":"🇪🇸"},{"id":210,"name":"Sri Lanka","code":"LK","flag":"🇱🇰"},{"id":211,"name":"Sudan","code":"SD","flag":"🇸🇩"},{"id":212,"name":"Suriname","code":"SR","flag":"🇸🇷"},{"id":213,"name":"Svalbard and Jan Mayen","code":"SJ","flag":"🇸🇯"},{"id":214,"name":"Sweden","code":"SE","flag":"🇸🇪"},{"id":215,"name":"Switzerland","code":"CH","flag":"🇨🇭"},{"id":216,"name":"Syrian Arab Republic","code":"SY","flag":"🇸🇾"},{"id":217,"name":"Taiwan","code":"TW","flag":"🇨🇳"},{"id":218,"name":"Tajikistan","code":"TJ","flag":"🇹🇯"},{"id":219,"name":"Tanzania","code":"TZ","flag":"🇹🇿"},{"id":220,"name":"Thailand","code":"TH","flag":"🇹🇭"},{"id":221,"name":"Timor-Leste","code":"TL","flag":"🇹🇱"},{"id":222,"name":"Togo","code":"TG","flag":"🇹🇬"},{"id":223,"name":"Tokelau","code":"TK","flag":"🇹🇰"},{"id":224,"name":"Tonga","code":"TO","flag":"🇹🇴"},{"id":225,"name":"Trinidad and Tobago","code":"TT","flag":"🇹🇹"},{"id":226,"name":"Tunisia","code":"TN","flag":"🇹🇳"},{"id":227,"name":"Turkmenistan","code":"TM","flag":"🇹🇲"},{"id":228,"name":"Turks and Caicos Islands","code":"TC","flag":"🇹🇨"},{"id":229,"name":"Tuvalu","code":"TV","flag":"🇹🇻"},{"id":230,"name":"Türkiye","code":"TR","flag":"🇹🇷"},{"id":231,"name":"Uganda","code":"UG","flag":"🇺🇬"},{"id":232,"name":"Ukraine","code":"UA","flag":"🇺🇦"},{"id":233,"name":"United Arab Emirates","code":"AE","flag":"🇦🇪"},{"id":234,"name":"United Kingdom","code":"GB","flag":"🇬🇧"},{"id":235,"name":"United States","code":"US","flag":"🇺🇸"},{"id":236,"name":"United States Minor Outlying Islands","code":"UM","flag":"🇺🇲"},{"id":237,"name":"Uruguay","code":"UY","flag":"🇺🇾"},{"id":238,"name":"Uzbekistan","code":"UZ","flag":"🇺🇿"},{"id":239,"name":"Vanuatu","code":"VU","flag":"🇻🇺"},{"id":240,"name":"Vatican City","code":"VA","flag":"🇻🇦"},{"id":241,"name":"Venezuela","code":"VE","flag":"🇻🇪"},{"id":242,"name":"Viet Nam","code":"VN","flag":"🇻🇳"},{"id":243,"name":"Virgin Islands","code":"VG","flag":"🇻🇬"},{"id":244,"name":"Virgin Islands","code":"VI","flag":"🇻🇮"},{"id":245,"name":"Wallis and Futuna","code":"WF","flag":"🇼🇫"},{"id":246,"name":"Western Sahara","code":"EH","flag":"🇪🇭"},{"id":247,"name":"Yemen","code":"YE","flag":"🇾🇪"},{"id":248,"name":"Zambia","code":"ZM","flag":"🇿🇲"},{"id":249,"name":"Zimbabwe","code":"ZW","flag":"🇿🇼"},{"id":250,"name":"Åland Islands","code":"AX","flag":"🇦🇽"},{"id":251,"name":"Canary Islands","code":"IC","flag":"🇮🇨"}]`);
const vO8 = {
  dashboard: {
    summary: {
      counters: {
        tickets: "staff.dashboard.summary.counters.tickets",
        reports: "staff.dashboard.summary.counters.reports"
      },
      events: {
        status: "staff.dashboard.summary.events.status",
        start: "staff.dashboard.summary.events.start",
        stop: "staff.dashboard.summary.events.stop",
        anchors: "staff.dashboard.summary.events.anchors"
      },
      users: {
        ban: "staff.dashboard.summary.users.ban",
        timeout: "staff.dashboard.summary.users.timeout",
        unban: "staff.dashboard.summary.users.unban",
        incrementDroplets: "staff.dashboard.summary.users.increment_droplets"
      }
    },
    team: {
      tickets: "staff.dashboard.team.tickets",
      reports: "staff.dashboard.team.reports"
    },
    users: {
      info: "staff.dashboard.users.info",
      rename: "staff.dashboard.users.rename",
      notesGet: "staff.dashboard.users.notes_get",
      notesSet: "staff.dashboard.users.notes_set",
      purchases: "staff.dashboard.users.purchases",
      ticketsHistory: "staff.dashboard.users.tickets_history",
      ticketsStats: "staff.dashboard.users.tickets_stats",
      timeout: "staff.dashboard.users.timeout",
      removeTimeout: "staff.dashboard.users.remove_timeout",
      ban: "staff.dashboard.users.ban",
      removeBan: "staff.dashboard.users.remove_ban",
      personalInformation: "staff.dashboard.users.personal_information",
      disconnect: "staff.dashboard.users.disconnect",
      setDroplets: "staff.dashboard.users.set_droplets"
    },
    permissions: {
      get: "staff.dashboard.permissions.get",
      set: "staff.dashboard.permissions.set"
    },
    alliances: {
      search: "staff.dashboard.alliances.search",
      details: "staff.dashboard.alliances.details",
      members: "staff.dashboard.alliances.members",
      rename: "staff.dashboard.alliances.rename",
      leader: "staff.dashboard.alliances.leader",
      banAll: "staff.dashboard.alliances.ban_all",
      role: "staff.dashboard.alliances.role",
      removeMember: "staff.dashboard.alliances.remove_member"
    },
    auditLogs: {
      see: "staff.dashboard.audit_logs.see"
    },
    banWaves: {
      see: "staff.dashboard.ban_waves.see",
      execute: "staff.dashboard.ban_waves.execute"
    },
    banAppeals: {
      see: "staff.dashboard.ban_appeals.see"
    },
    kpi: {
      tickets: "staff.dashboard.kpi.tickets"
    },
    storeManager: {
      frames: "staff.dashboard.store_manager.frames",
      fonts: "staff.dashboard.store_manager.fonts",
      styles: "staff.dashboard.store_manager.styles",
      badges: "staff.dashboard.store_manager.badges"
    }
  },
  tickets: {
    assign: "staff.tickets.assign",
    closedToday: "staff.tickets.closed_today",
    openCount: "staff.tickets.open_count",
    translate: "staff.tickets.translate",
    setStatus: "staff.tickets.set_status",
    ignoreAll: "staff.tickets.ignore_all"
  },
  appeals: {
    assign: "staff.appeals.assign",
    openCount: "staff.appeals.open_count",
    ticketsHistory: "staff.appeals.tickets_history",
    notes_get: "staff.appeals.notes_get",
    notes_set: "staff.appeals.notes_set",
    translate: "staff.appeals.translate",
    solve: "staff.appeals.solve"
  },
  tools: {
    selectArea: {
      timeout: "staff.tools.select_area.timeout",
      ban: "staff.tools.select_area.ban",
      clear: "staff.tools.select_area.clear",
      info: "staff.tools.select_area.info"
    },
    selectPixel: {
      timeout: "staff.tools.select_pixel.timeout",
      ban: "staff.tools.select_pixel.ban",
      seeRole: "staff.tools.select_pixel.see_role",
      seePunishment: "staff.tools.select_pixel.see_punishment",
      archive: "staff.tools.select_pixel.archive"
    },
    autoPainter: "staff.tools.auto_painter.paint",
    wayback: {
      wayback: "staff.tools.wayback.wayback"
    }
  },
  ui: {
    themeDarkMode: "staff.ui.theme.dark_mode",
    tooglePixelArt: "staff.ui.toggle_pixel_art"
  },
  cosmetics: {
    viewCosmetics: "staff.cosmetics.view_cosmetics",
    manageCosmetics: "staff.cosmetics.manage_cosmetics",
    assignCosmetics: "staff.cosmetics.assign_cosmetics"
  }
};
const vO9 = {
  seasons: vA,
  regionSize: vLN4,
  refreshIntervalMs: vLN6000,
  colors: vA2,
  errors: vO5,
  items: vO6,
  products: vO7,
  countries: v138,
  permissions: vO8
};
const vVO9 = vO9;
const v139 = vO9.seasons.length - 1;
const v140 = vO9.seasons[v139].zoom;
const v141 = vO9.seasons[v139].tileSize;
const v142 = vO9.permissions;
function f27(p259) {
  return vVO9.countries[p259 - 1];
}
class C6 extends Error {
  constructor(p260, p261) {
    super(p260);
    this.message = p260;
    this.status = p261;
  }
}
function f28(p262, p263) {
  const vO10 = {};
  for (const v143 of p262) {
    const vP263 = p263(v143);
    let v144 = vO10[vP263];
    if (v144) {
      v144.push(v143);
    } else {
      vO10[vP263] = [v143];
    }
  }
  return vO10;
}
function f29(p264, p265) {
  const vO11 = {};
  for (const v145 of p264) {
    const vP265 = p265(v145);
    vO11[vP265] = v145;
  }
  return vO11;
}
var v146;
class C7 {
  constructor(p266) {
    vF6(this, v146, E(true));
    this.url = p266;
  }
  get online() {
    return y(vF5(this, v146));
  }
  set online(p267) {
    v(vF5(this, v146), p267, true);
  }
  async paint(p268, p269) {
    return this.sendPaintRequests(p268, p269, (p270, p271, p272) => `/s${p270}/pixel/${p271}/${p272}`);
  }
  async selectAreaClear(p273, p274) {
    return this.sendPaintRequests(p273, p274, (p275, p276, p277) => `/staff/tools/select-area/clear/s${p275}/pixel/${p276}/${p277}`);
  }
  async sendPaintRequests(p278, p279, p280) {
    const vF2810 = f28(p278, p281 => `t=(${p281.tile[0]},${p281.tile[1]}),s=${p281.season}`);
    const vF2510 = f25("2025-09_pawtect");
    if (!vF2510) {
      throw new Error("paint request while pawtect experiment not found");
    }
    const v147 = (await Promise.all(Object.values(vF2810).map(p282 => {
      const [v148, v149] = p282[0].tile;
      const v150 = p282[0].season;
      const vO12 = {
        colors: p282.map(p283 => p283.colorIdx),
        coords: p282.flatMap(p284 => p284.pixel),
        fp: p279
      };
      const v151 = JSON.stringify(vO12);
      const vP280 = p280(v150, v148, v149);
      return this.request(vP280, {
        method: "POST",
        body: v151,
        headers: {
          "x-pawtect-token": vF2510.variant !== "disabled" ? f35(v151) : "",
          "x-pawtect-variant": vF2510.variant
        },
        credentials: "include"
      });
    }))).filter(p285 => p285.status !== 200);
    if (v147.length) {
      const v152 = v147[0];
      if (v152.status === 401) {
        throw new Error(vF503());
      }
      if (v152.status === 403) {
        if (v152.headers.get("cf-mitigated") === "challenge") {
          throw new Error(vF139());
        }
        const v153 = await v152.json();
        if ((v153 == null ? undefined : v153.error) === "timeout") {
          const v154 = new Date(Date.now() + ((v153 == null ? undefined : v153.durationMs) ?? 0));
          throw new Error(vF529({
            until: v154.toLocaleString()
          }));
        }
        if ((v153 == null ? undefined : v153.error) === "refresh") {
          throw new Error(vF386());
        }
        if ((v153 == null ? undefined : v153.error) === "color-not-owned") {
          throw new Error(vF360());
        }
        if ((v153 == null ? undefined : v153.error) === "event-pixel-present") {
          throw new Error(vF100());
        }
        v135.refresh();
      } else {
        throw new Error(vF412());
      }
    }
  }
  async adminAutoPainterPaint(p286, p287, p288) {
    const vEl = f30(p286);
    const v155 = await f31(vEl);
    const v156 = new FormData();
    v156.append("fingerprint", p287);
    v156.append("season", vEl.season.toString());
    v156.append("px0", vEl.offsetX.toString());
    v156.append("py0", vEl.offsetY.toString());
    v156.append("width", vEl.width.toString());
    v156.append("height", vEl.height.toString());
    v156.append("pixels", p286.length.toString());
    v156.append("bitmap", v155, "auto-painter.png");
    v156.append("userId", p288.toString());
    const v157 = await this.request("/staff/tools/auto-painter/paint", {
      method: "POST",
      body: v156,
      credentials: "include"
    });
    if (v157.status === 403) {
      throw new Error("Auto painter is restricted to administrators.");
    }
    if (v157.status !== 200) {
      throw new Error(vF412());
    }
    return v157.json();
  }
  async getPixelInfo({
    season: t,
    tile: [v158, v159],
    pixel: [v160, v161],
    role: c,
    christmasTreeId: i
  }) {
    const v162 = new URLSearchParams();
    v162.set("x", String(v160));
    v162.set("y", String(v161));
    if (i !== undefined) {
      v162.set("christmasTreeId", String(i));
    }
    const v163 = await this.request(`/s${t}/pixel/${v158}/${v159}?${v162.toString()}`, {
      credentials: "include"
    });
    if (v163.status !== 200) {
      const v164 = await v163.text();
      throw new Error(vF165({
        err: v164
      }));
    }
    return v163.json();
  }
  async getPixelAreaInfo({
    season: t,
    tile: [v165, v166],
    p0: [v167, v168],
    p1: [v169, v170]
  }) {
    const v171 = await this.request(`/staff/tools/select-area/s${t}/${v165}/${v166}?x0=${v167}&y0=${v168}&x1=${v169}&y1=${v170}`, {
      credentials: "include"
    });
    if (v171.status !== 200) {
      const v172 = await v171.text();
      console.error("Error while fetching pixel area info", v172);
      throw new Error(vF412());
    }
    const v173 = await v171.arrayBuffer();
    const v174 = new DataView(v173);
    return {
      paintedBy: Array.from({
        length: v173.byteLength / 4
      }, (p289, p290) => v174.getUint32(p290 * 4, true))
    };
  }
  async me() {
    const v175 = await this.request("/me", {
      credentials: "include"
    });
    if (v175.status === 200) {
      return await v175.json();
    }
  }
  async logout() {
    const v176 = await this.request("/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (v176.status !== 200) {
      throw new Error(await v176.text());
    }
    return await v176.json();
  }
  async refreshPaymentSession(p291) {
    return (await this.request(`/payment/refresh-session/${encodeURIComponent(p291)}`, {
      method: "POST",
      credentials: "include"
    })).status === 200;
  }
  async getOtpCooldown() {
    const v177 = await this.request("/otp/cooldown", {
      credentials: "include"
    });
    if (v177.status !== 200) {
      throw new Error(vF412());
    }
    return await v177.json();
  }
  async sendOtp(p292) {
    const v178 = await this.request("/otp/send", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        phone: p292
      })
    });
    if (v178.status === 400) {
      throw new Error(vF256());
    }
    if (v178.status === 403) {
      throw new Error(vF373());
    }
    if (v178.status === 429) {
      throw new Error(vF490());
    }
    if (v178.status !== 200) {
      throw new Error(vF412());
    }
    return await v178.json();
  }
  async verifyOtp(p293) {
    const v179 = await this.request("/otp/verify", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        code: p293
      })
    });
    if (v179.status === 400) {
      throw new Error(vF217());
    }
    if (v179.status !== 200) {
      throw new Error(vF412());
    }
    return await v179.json();
  }
  async updateMe(p294) {
    const v180 = await this.request("/me/update", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p294)
    });
    if (v180.status === 400) {
      const v181 = await v180.json();
      const v182 = (v181 == null ? undefined : v181.error) ?? "";
      if (v182 === "invalid_name") {
        throw new Error(vF243());
      }
      if (v182 === "invalid_discord") {
        throw new Error(vF230());
      }
      if (typeof v182 == "string" && v182.startsWith("name_change_cooldown:")) {
        const vParseInt = parseInt(v182.split(":")[1] ?? "0", 10);
        throw new Error(vF321({
          days: vParseInt
        }));
      }
      throw new Error(v181 == null ? undefined : v181.error);
    } else if (v180.status !== 200) {
      throw new Error(vF412());
    }
  }
  async deleteMe(p295) {
    const v183 = await this.request("/me", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        confirmText: p295
      })
    });
    if (v183.status === 400) {
      throw new Error(vF399());
    }
    if (v183.status !== 200) {
      throw new Error(vF412());
    }
  }
  async favoriteLocation(p296) {
    const v184 = await this.request("/favorite-location", {
      method: "POST",
      body: JSON.stringify({
        latitude: p296[0],
        longitude: p296[1]
      }),
      credentials: "include"
    });
    if (v184.status === 403) {
      throw new Error(vF347());
    }
    if (v184.status !== 200) {
      throw new Error(vF412());
    }
  }
  async deleteFavoriteLocation(p297) {
    if ((await this.request("/favorite-location/delete", {
      method: "POST",
      body: JSON.stringify({
        id: p297
      }),
      credentials: "include"
    })).status !== 200) {
      throw new Error(vF412());
    }
  }
  async updateFavoriteLocation(p298, p299) {
    const v185 = await this.request("/favorite-location/update", {
      method: "POST",
      body: JSON.stringify({
        id: p298,
        name: p299
      }),
      credentials: "include"
    });
    if (v185.status === 400) {
      throw new Error(vF295());
    }
    if (v185.status !== 200) {
      throw new Error(vF412());
    }
  }
  async leaderboardPlayers(p300) {
    const v186 = await this.request(`/leaderboard/player/${p300}`);
    if (v186.status !== 200) {
      throw new Error(vF282());
    }
    return v186.json();
  }
  async leaderboardAlliances(p301) {
    const v187 = await this.request(`/leaderboard/alliance/${p301}`);
    if (v187.status !== 200) {
      throw new Error(vF282());
    }
    return v187.json();
  }
  async leaderboardRegions(p302, p303 = 0) {
    const v188 = await this.request(`/leaderboard/region/${p302}/${p303}`);
    if (v188.status === 200) {
      return v188.json();
    }
    throw new Error(vF282());
  }
  async leaderboardRegionPlayers(p304, p305) {
    const v189 = await this.request(`/leaderboard/region/players/${p304}/${p305}`);
    if (v189.status === 200) {
      return v189.json();
    }
    throw new Error(vF282());
  }
  async leaderboardRegionAlliances(p306, p307) {
    const v190 = await this.request(`/leaderboard/region/alliances/${p306}/${p307}`);
    if (v190.status === 200) {
      return v190.json();
    }
    throw new Error(vF282());
  }
  async leaderboardCountries(p308) {
    const v191 = await this.request(`/leaderboard/country/${p308}`, {
      credentials: "include"
    });
    if (v191.status === 200) {
      return v191.json();
    }
    throw new Error(vF282());
  }
  async getRandomTile(p309) {
    const v192 = await this.request(`/s${p309}/tile/random`);
    if (v192.status !== 200) {
      throw new Error(vF412());
    }
    return v192.json();
  }
  async purchase(p310) {
    const v193 = await this.request("/purchase", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        product: p310
      })
    });
    if (v193.status !== 200) {
      throw v193.status === 404 ? new Error(vF126()) : v193.status === 403 ? new Error(vF477()) : v193.status === 409 ? new Error(vF438()) : new Error(vF412());
    }
  }
  async getAlliance() {
    const v194 = await this.request("/alliance", {
      credentials: "include"
    });
    if (v194.status === 200) {
      return v194.json();
    }
    if (v194.status === 404) {
      return;
    }
    throw new Error(vF412());
  }
  async createAlliance(p311) {
    const v195 = await this.request("/alliance", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: p311
      })
    });
    if (v195.status === 200) {
      return v195.json();
    }
    if (v195.status === 400) {
      const v196 = await v195.json();
      throw v196.error === "max_characters" ? new Error(vF48()) : v196.error === "name_taken" ? new Error(vF34()) : v196.error == "empty_name" ? new Error(vF61()) : new Error(vF412());
    } else {
      throw v195.status === 403 ? new Error(vF451()) : new Error(vF412());
    }
  }
  async leaveAlliance() {
    if ((await this.request("/alliance/leave", {
      method: "POST",
      credentials: "include"
    })).status !== 200) {
      throw new Error(vF412());
    }
  }
  async updateAllianceDescription(p312) {
    const v197 = await this.request("/alliance/update-description", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        description: p312
      })
    });
    if (v197.status !== 200) {
      throw v197.status === 403 ? new Error(vF464()) : v197.status === 400 ? new Error(vF542()) : new Error(vF412());
    }
  }
  async updateAllianceHeadquarters(p313, p314) {
    const v198 = await this.request("/alliance/update-headquarters", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        latitude: p313,
        longitude: p314
      })
    });
    if (v198.status !== 200) {
      throw v198.status === 403 ? new Error(vF464()) : new Error(vF412());
    }
  }
  async allianceLeaderboard(p315) {
    const v199 = await this.request(`/alliance/leaderboard/${p315}`, {
      credentials: "include"
    });
    if (v199.status === 200) {
      return v199.json();
    }
    throw v199.status === 403 ? new Error(vF464()) : new Error(vF282());
  }
  async getAllianceInvites() {
    const v200 = await this.request("/alliance/invites", {
      credentials: "include"
    });
    if (v200.status === 200) {
      return v200.json();
    }
    throw v200.status === 403 ? new Error(vF464()) : new Error(vF412());
  }
  async joinAlliance(p316) {
    switch ((await this.request(`/alliance/join/${p316}`, {
      credentials: "include"
    })).status) {
      case 200:
        return "success";
      case 208:
        return "in-another-alliance";
      case 401:
        return "not-logged-in";
      case 403:
        return "banned";
      case 400:
      case 404:
        return "invalid-invite";
      default:
        return "error";
    }
  }
  async getAllianceMembers(p317) {
    const v201 = await this.request(`/alliance/members/${p317}`, {
      credentials: "include"
    });
    if (v201.status === 200) {
      return v201.json();
    }
    throw new Error(vF412());
  }
  async getAllianceBannedMembers(p318) {
    const v202 = await this.request(`/alliance/members/banned/${p318}`, {
      credentials: "include"
    });
    if (v202.status === 200) {
      return v202.json();
    }
    throw new Error(vF412());
  }
  async getAllianceById(p319) {
    const v203 = await this.request(`/staff/dashboard/alliances/${p319}`, {
      method: "GET",
      credentials: "include"
    });
    if (v203.status === 404) {
      return;
    }
    if (v203.status !== 200) {
      throw new C6(vF412(), v203.status);
    }
    const v204 = await v203.json();
    return {
      id: Number(v204.id),
      name: String(v204.name),
      pixelsPainted: Number((v204 == null ? undefined : v204.pixels_painted) ?? 0)
    };
  }
  async searchAlliance(p320) {
    const v205 = new URLSearchParams({
      q: p320
    });
    const v206 = await this.request(`/staff/dashboard/alliances/search?${v205.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v206.status !== 200) {
      throw new C6(vF412(), v206.status);
    }
    const v207 = await v206.json();
    return (Array.isArray(v207) ? v207 : []).map(p321 => ({
      id: Number(p321.id),
      name: String(p321.name ?? ""),
      pixelsPainted: Number((p321 == null ? undefined : p321.pixels_painted) ?? 0)
    }));
  }
  async searchAlliances(p322) {
    return this.searchAlliance(p322);
  }
  async getAllianceFull(p323) {
    const v208 = await this.request(`/staff/dashboard/alliances/${p323}/full`, {
      method: "GET",
      credentials: "include"
    });
    if (v208.status === 404) {
      return null;
    }
    if (v208.status !== 200) {
      throw new C6(vF412(), v208.status);
    }
    const v209 = await v208.json();
    const v210 = Array.isArray(v209 == null ? undefined : v209.members) ? v209.members : [];
    return {
      id: Number(v209 == null ? undefined : v209.id),
      name: String((v209 == null ? undefined : v209.name) ?? ""),
      description: (v209 == null ? undefined : v209.description) ?? null,
      ownerId: Number((v209 == null ? undefined : v209.ownerId) ?? (v209 == null ? undefined : v209.created_by)),
      ownerName: (v209 == null ? undefined : v209.ownerName) ?? null,
      hqName: (v209 == null ? undefined : v209.hqName) ?? null,
      hqLatitude: (v209 == null ? undefined : v209.hqLatitude) ?? (v209 == null ? undefined : v209.hq_latitude) ?? null,
      hqLongitude: (v209 == null ? undefined : v209.hqLongitude) ?? (v209 == null ? undefined : v209.hq_longitude) ?? null,
      pixelsPainted: Number((v209 == null ? undefined : v209.pixelsPainted) ?? (v209 == null ? undefined : v209.pixels_painted) ?? 0),
      membersCount: Number((v209 == null ? undefined : v209.membersCount) ?? v210.length),
      members: v210.map(p324 => ({
        id: Number(p324 == null ? undefined : p324.id),
        name: String((p324 == null ? undefined : p324.name) ?? `#${p324 == null ? undefined : p324.id}`),
        picture: (p324 == null ? undefined : p324.picture) ?? null,
        pixelsPainted: Number((p324 == null ? undefined : p324.pixelsPainted) ?? (p324 == null ? undefined : p324.pixels_painted) ?? 0),
        lastPixelLatitude: (p324 == null ? undefined : p324.lastPixelLatitude) ?? null,
        lastPixelLongitude: (p324 == null ? undefined : p324.lastPixelLongitude) ?? null,
        role: (p324 == null ? undefined : p324.alliance_role) === "admin" || (p324 == null ? undefined : p324.role) === "admin" ? "admin" : "member"
      }))
    };
  }
  async getAdminAllianceMembers(p325, p326) {
    const v211 = new URLSearchParams({
      page: String(p326.page),
      pageSize: String(p326.pageSize)
    });
    const v212 = await this.request(`/staff/dashboard/alliances/${p325}/members?${v211.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v212.status === 404) {
      return {
        members: [],
        total: 0
      };
    }
    if (v212.status !== 200) {
      throw new C6(vF412(), v212.status);
    }
    const v213 = await v212.json();
    const v214 = Array.isArray(v213 == null ? undefined : v213.members) ? v213.members : [];
    return {
      members: v214.map(p327 => ({
        id: Number(p327 == null ? undefined : p327.id),
        name: String((p327 == null ? undefined : p327.name) ?? `#${p327 == null ? undefined : p327.id}`),
        picture: (p327 == null ? undefined : p327.picture) ?? null,
        pixelsPainted: Number((p327 == null ? undefined : p327.pixelsPainted) ?? (p327 == null ? undefined : p327.pixels_painted) ?? 0),
        lastPixelLatitude: (p327 == null ? undefined : p327.lastPixelLatitude) ?? null,
        lastPixelLongitude: (p327 == null ? undefined : p327.lastPixelLongitude) ?? null,
        role: (p327 == null ? undefined : p327.alliance_role) === "admin" || (p327 == null ? undefined : p327.role) === "admin" ? "admin" : "member"
      })),
      total: Number((v213 == null ? undefined : v213.total) ?? v214.length)
    };
  }
  async renameAlliance(p328, p329) {
    const v215 = await this.request(`/staff/dashboard/alliances/${p328}/rename`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: p329
      })
    });
    if (v215.status === 400) {
      const v216 = await v215.json().catch(() => ({}));
      throw new Error((v216 == null ? undefined : v216.error) ?? vF412());
    } else if (v215.status !== 200) {
      throw new C6(vF412(), v215.status);
    }
  }
  async changeAllianceLeader(p330, p331) {
    const v217 = await this.request(`/staff/dashboard/alliances/${p330}/leader`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        newLeaderUserId: p331
      })
    });
    if (v217.status === 400) {
      const v218 = await v217.json();
      throw (v218 == null ? undefined : v218.error) === "user_not_in_alliance" ? new Error(vF269()) : new Error(vF412());
    } else if (v217.status !== 200) {
      throw new C6(vF412(), v217.status);
    }
  }
  async banAllAllianceMembers(p332, p333, p334) {
    const v219 = await this.request(`/staff/dashboard/alliances/${p332}/ban-all`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        reason: p333,
        notes: p334
      })
    });
    if (v219.status !== 200) {
      throw new C6(vF412(), v219.status);
    }
  }
  async setAllianceMemberRole(p335, p336, p337) {
    const v220 = await this.request(`/staff/dashboard/alliances/${p335}/members/${p336}/role`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        role: p337
      })
    });
    if (v220.status !== 200) {
      throw new C6(vF412(), v220.status);
    }
  }
  async removeAllianceMember(p338, p339) {
    const v221 = await this.request(`/staff/dashboard/alliances/${p338}/members/${p339}/remove`, {
      method: "POST",
      credentials: "include"
    });
    if (v221.status !== 200) {
      throw new C6(vF412(), v221.status);
    }
  }
  async giveAllianceAdmin(p340) {
    const v222 = await this.request("/alliance/give-admin", {
      body: JSON.stringify({
        promotedUserId: p340
      }),
      method: "POST",
      credentials: "include"
    });
    if (v222.status !== 200) {
      throw v222.status === 403 ? new Error(vF464()) : new Error(vF412());
    }
  }
  async banAllianceUser(p341) {
    const v223 = await this.request("/alliance/ban", {
      body: JSON.stringify({
        bannedUserId: p341
      }),
      method: "POST",
      credentials: "include"
    });
    if (v223.status !== 200) {
      throw v223.status === 403 ? new Error(vF464()) : new Error(vF412());
    }
  }
  async equipFlag(p342) {
    if ((await this.request(`/flag/equip/${p342}`, {
      method: "POST",
      credentials: "include"
    })).status !== 200) {
      throw new Error(vF412());
    }
  }
  async getMyProfilePictures() {
    const v224 = await this.request("/me/profile-pictures", {
      credentials: "include"
    });
    if (v224.status !== 200) {
      throw new Error(vF412());
    }
    return v224.json();
  }
  async changeProfilePicture(p343) {
    if ((await this.request("/me/profile-picture/change", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pictureId: p343
      })
    })).status !== 200) {
      throw new Error(vF412());
    }
  }
  async unbanAllianceUser(p344) {
    const v225 = await this.request("/alliance/unban", {
      body: JSON.stringify({
        unbannedUserId: p344
      }),
      method: "POST",
      credentials: "include"
    });
    if (v225.status !== 200) {
      throw v225.status === 403 ? new Error(vF464()) : new Error(vF412());
    }
  }
  async health() {
    return (await this.request("/health")).json();
  }
  async generatePixQrCode(p345) {
    const v226 = await this.request(`/payment/abacatepay/create/pix/${p345}`, {
      method: "POST",
      credentials: "include"
    });
    if (v226.status === 400) {
      const v227 = await v226.json();
      throw new Error(v227 == null ? undefined : v227.error);
    } else {
      if (v226.status === 451) {
        throw new Error(vF21());
      }
      if (v226.status !== 200) {
        throw new Error(vF412());
      }
    }
    return await v226.json();
  }
  async refreshPixPayment(p346) {
    const v228 = await this.request(`/payment/abacatepay/refresh/pix/${p346}`, {
      method: "POST",
      credentials: "include"
    });
    if (v228.status === 400) {
      const v229 = await v228.json();
      throw new Error(v229 == null ? undefined : v229.error);
    } else if (v228.status !== 200) {
      throw new Error("Unexpected error on the server. Try again later");
    }
    return v228.json();
  }
  async getPixStatus(p347) {
    const v230 = await this.request(`/payment/abacatepay/status/pix/${p347}`, {
      method: "GET",
      credentials: "include"
    });
    if (v230.status !== 200) {
      throw new Error("Erro inesperado. Tente atualizar a página.");
    }
    return v230.json();
  }
  async getModeratorTickets() {
    const v231 = await this.request("/staff/tickets/get", {
      method: "GET",
      credentials: "include"
    });
    if (v231.status !== 200) {
      throw new C6(vF412(), v231.status);
    }
    const v232 = await v231.json();
    for (const v233 of v232.tickets) {
      v233.reports.sort((p348, p349) => vO4[p348.reason] - vO4[p349.reason]);
    }
    return v232;
  }
  async countMyTicketsClosedToday() {
    const v234 = await this.request("/staff/tickets/closed-today", {
      method: "GET",
      credentials: "include"
    });
    if (v234.status !== 200) {
      throw new C6(vF412(), v234.status);
    }
    return v234.json();
  }
  async getNonPaidUserOpenTicketsCount() {
    const v235 = await this.request("/staff/tickets/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (v235.status !== 200) {
      throw new C6(vF412(), v235.status);
    }
    const {
      tickets: e
    } = await v235.json();
    return e;
  }
  async assignNewTickets() {
    const v236 = await this.request("/staff/tickets/assign", {
      method: "POST",
      credentials: "include"
    });
    if (v236.status !== 200) {
      throw new C6(vF412(), v236.status);
    }
    return v236.json();
  }
  async setTicketStatus(p350, p351, p352, p353) {
    const v237 = await this.request("/staff/tickets/set-status", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        ticketId: p350,
        status: p351,
        selectedReportId: p352,
        assignedReason: p353
      })
    });
    if (v237.status !== 200 && v237.status !== 400) {
      throw new C6(vF412(), v237.status);
    }
  }
  async request(p354, p355) {
    let v238;
    const vVF72 = vF7();
    if (vVF72) {
      const v239 = new Headers(p355 == null ? undefined : p355.headers);
      v239.set("x-alien-override", vVF72.token);
      p355 = {
        ...(p355 ?? {}),
        headers: v239
      };
    }
    try {
      v238 = await fetch(`${this.url}${p354}`, p355);
      this.online = true;
    } catch (e6) {
      console.error("Fetch error:", e6);
      this.online = false;
      throw new Error(vF113(), {
        cause: e6
      });
    }
    if (v238.status === 429) {
      throw new Error(vF516());
    }
    if (v238.status === 503 || v238.status === 408) {
      throw new Error(vF516());
    }
    return v238;
  }
  async getOpenTicketsSummary() {
    const v240 = await this.request("/staff/dashboard/summary/counters/tickets", {
      method: "GET",
      credentials: "include"
    });
    if (v240.status !== 200) {
      throw new C6(vF412(), v240.status);
    }
    return v240.json();
  }
  async getOpenReportsSummary() {
    const v241 = await this.request("/staff/dashboard/summary/counters/reports", {
      method: "GET",
      credentials: "include"
    });
    if (v241.status !== 200) {
      throw new C6(vF412(), v241.status);
    }
    return v241.json();
  }
  async getBanAppealStats(p356, p357) {
    const v242 = await this.request(`/staff/dashboard/ban-appeals/see?start=${encodeURIComponent(p356)}&end=${encodeURIComponent(p357)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v242.status !== 200) {
      throw new C6(vF412(), v242.status);
    }
    const v243 = await v242.json();
    return {
      items: v243.items ?? [],
      globals: v243.globals
    };
  }
  async getClosedTicketsByMod(p358, p359) {
    const v244 = await this.request(`/staff/dashboard/team/closed-tickets?start=${encodeURIComponent(p358)}&end=${encodeURIComponent(p359)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v244.status !== 200) {
      throw new C6(vF412(), v244.status);
    }
    return (await v244.json()).items.map(p360 => ({
      ...p360,
      suspensionRate: (p360.ban + p360.timeout) / p360.total
    }));
  }
  async getClosedReportsByMod(p361, p362) {
    const v245 = await this.request(`/staff/dashboard/team/closed-reports?start=${encodeURIComponent(p361)}&end=${encodeURIComponent(p362)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v245.status !== 200) {
      throw new C6(vF412(), v245.status);
    }
    return (await v245.json()).items.map(p363 => ({
      ...p363,
      suspensionRate: (p363.ban + p363.timeout) / p363.total
    }));
  }
  async getMultipleUsersInfoById(p364) {
    const v246 = await this.request("/staff/tools/select-area/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: p364
      })
    });
    if (v246.status !== 200) {
      throw new C6(vF412(), v246.status);
    }
    return v246.json();
  }
  async getUserInfoFull(p365) {
    const v247 = await this.request(`/staff/dashboard/users/info?id=${encodeURIComponent(p365)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v247.status !== 404) {
      if (v247.status !== 200) {
        throw new C6(vF412(), v247.status);
      }
      return v247.json();
    }
  }
  async getUserInfoByEmail(p366) {
    const v248 = await this.request(`/staff/dashboard/users/info-by-email?email=${encodeURIComponent(p366)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v248.status !== 404) {
      if (v248.status !== 200) {
        throw new C6(vF412(), v248.status);
      }
      return v248.json();
    }
  }
  async removePunishment(p367, p368) {
    const v249 = p368 ? "/staff/dashboard/users/remove-ban" : "/staff/dashboard/users/remove-timeout";
    const v250 = await this.request(v249, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: p367
      })
    });
    if (v250.status !== 200) {
      throw new C6(vF412(), v250.status);
    }
  }
  async getUserNotes(p369, p370) {
    const v251 = p370 == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(p369)}` : `/staff/appeals/notes?userId=${encodeURIComponent(p369)}`;
    const v252 = await this.request(v251, {
      method: "GET",
      credentials: "include"
    });
    if (v252.status !== 200) {
      throw new C6(vF412(), v252.status);
    }
    return v252.json();
  }
  async addUserNote(p371, p372, p373) {
    const v253 = p373 == "dashboard" ? `/staff/dashboard/users/notes?userId=${encodeURIComponent(p371)}` : `/staff/appeals/notes?userId=${encodeURIComponent(p371)}`;
    const v254 = await this.request(v253, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: p371,
        note: p372
      })
    });
    if (v254.status !== 200) {
      throw new C6(vF412(), v254.status);
    }
  }
  async getUserPermissions(p374) {
    const v255 = await this.request(`/staff/dashboard/permissions/get?userId=${encodeURIComponent(p374)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v255.status !== 200) {
      throw new C6(vF412(), v255.status);
    }
    return v255.json();
  }
  async setUserPermissions(p375, p376) {
    const v256 = await this.request("/staff/dashboard/permissions/set", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: p375,
        permissions: Array.from(p376)
      })
    });
    if (v256.status !== 200) {
      throw new C6(vF412(), v256.status);
    }
    const v257 = await v256.json();
    if (Array.isArray(v257 == null ? undefined : v257.permissions)) {
      return v257.permissions;
    } else {
      return [];
    }
  }
  async getUserPurchases(p377) {
    const v258 = await this.request(`/staff/dashboard/users/purchases?userId=${encodeURIComponent(p377)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v258.status !== 200) {
      throw new C6(vF412(), v258.status);
    }
    const v259 = await v258.json();
    return (Array.isArray(v259 == null ? undefined : v259.purchases) ? v259.purchases : []).map(p378 => {
      const v260 = p378.is_dollar ?? p378.isDollar ?? p378.currency ?? p378.Currency ?? 0;
      let v261;
      if (typeof v260 == "string") {
        const v262 = v260.toLowerCase();
        v261 = v262 === "usd" || v262 === "dollar" || v262 === "true";
      } else if (typeof v260 == "number") {
        v261 = v260 !== 0;
      } else {
        v261 = !!v260;
      }
      const v263 = typeof p378.createdAt == "string" ? p378.createdAt : p378.CreatedAt ? new Date(p378.CreatedAt).toISOString() : "";
      return {
        product_name: String(p378.productName ?? p378.product_name ?? ""),
        amount: Number(p378.amount ?? 0),
        price: Number(p378.price ?? 0),
        is_dollar: v261,
        created_at: v263,
        product_variant: Number(p378.product_variant ?? p378.productVariant ?? 0)
      };
    });
  }
  async postSetUserDroplets(p379, p380) {
    const v264 = await this.request("/staff/dashboard/users/set-user-droplets", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: p379,
        droplets: p380
      })
    });
    if (v264.status !== 200) {
      throw new C6(vF412(), v264.status);
    }
  }
  async postAdminRenameUser(p381, p382, p383) {
    const v265 = await this.request("/staff/dashboard/users/rename", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: p381,
        newName: p382,
        oldName: p383
      })
    });
    if (v265.status === 400) {
      const v266 = await v265.json();
      const v267 = (v266 == null ? undefined : v266.error) ?? "";
      throw v267 === "invalid_name" ? new C6(vF243(), 400) : new C6(typeof v267 == "string" && v267 ? v267 : vF412(), 400);
    }
    if (v265.status !== 200) {
      throw new C6(vF412(), v265.status);
    }
  }
  async getUserTickets(p384, p385) {
    if (p385 === "appeals" && (p384.appealId ?? 0) <= 0) {
      throw new Error("Appeal id is required.");
    }
    const v268 = new URLSearchParams();
    v268.set("userId", String(p384.userId));
    v268.set("kind", String(p384.kind));
    v268.set("page", String(p384.page ?? 0));
    v268.set("pageSize", String(p384.pageSize ?? 20));
    if (p385 === "appeals") {
      v268.set("appealId", String(p384.appealId));
    }
    const v269 = p385 === "appeals" ? `/staff/appeals/tickets?${v268.toString()}` : `/staff/dashboard/users/tickets?${v268.toString()}`;
    const v270 = await this.request(v269, {
      method: "GET",
      credentials: "include"
    });
    if (v270.status !== 200) {
      throw new C6(vF412(), v270.status);
    }
    const v271 = await v270.json();
    const v272 = Array.isArray(v271 == null ? undefined : v271.tickets) ? v271.tickets : [];
    v272.sort((p386, p387) => new Date(p387.createdAt).getTime() - new Date(p386.createdAt).getTime());
    return v272;
  }
  async getModerationTranslate(p388, p389) {
    const v273 = p389 == "tickets" ? "/staff/tickets/translate" : "/staff/appeals/translate";
    const v274 = await this.request(v273, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        text: p388
      })
    });
    if (v274.status !== 200) {
      throw new C6(vF412(), v274.status);
    }
    const v275 = await v274.json();
    if (v275 == null) {
      return undefined;
    } else {
      return v275.translation;
    }
  }
  mapTicketsToReportRows(p390, p391) {
    var v276;
    var v277;
    var v278;
    var v279;
    var v280;
    const vA3 = [];
    for (const v281 of p390) {
      const v282 = v281.status ?? "open";
      if (p391 === "received") {
        for (const v283 of v281.reports) {
          vA3.push({
            id: String(v283.id),
            ticketId: String(v281.id),
            createdAt: v283.createdAt ?? v281.createdAt,
            byUser: {
              id: Number(v283.reportedBy),
              name: String(v283.reportedByName ?? v283.reportedBy),
              picture: v283.reportedByPicture ?? null
            },
            reason: String(v283.reason),
            status: v282
          });
        }
        continue;
      }
      if (p391 === "sent") {
        for (const v284 of v281.reports) {
          vA3.push({
            id: String(v284.id),
            ticketId: String(v281.id),
            createdAt: v284.createdAt ?? v281.createdAt,
            toUser: {
              id: Number(v281.reportedUser.id),
              name: String(v281.reportedUser.name),
              picture: v281.reportedUser.picture ?? null
            },
            reason: String(v284.reason),
            status: v282
          });
        }
        continue;
      }
      vA3.push({
        id: String(v281.id),
        ticketId: String(v281.id),
        createdAt: v281.createdAt,
        handledBy: v281.status && v281.status !== "open" ? {
          id: ((v276 = v281.handledBy) == null ? undefined : v276.id) ?? 0,
          name: ((v277 = v281.handledBy) == null ? undefined : v277.name) ?? "Moderator",
          picture: ((v278 = v281.handledBy) == null ? undefined : v278.picture) ?? null
        } : {
          id: 0,
          name: "—",
          picture: null
        },
        reason: String(((v280 = (v279 = v281.reports) == null ? undefined : v279[0]) == null ? undefined : v280.reason) ?? "other"),
        status: v282
      });
    }
    vA3.sort((p392, p393) => new Date(p393.createdAt).getTime() - new Date(p392.createdAt).getTime());
    return vA3;
  }
  async getModeratorClosedTicketStats(p394) {
    const v285 = new URLSearchParams({
      id: String(p394)
    }).toString();
    const v286 = await this.request(`/staff/dashboard/users/tickets/stats?${v285}`, {
      method: "GET",
      credentials: "include"
    });
    if (v286.status !== 200) {
      throw new C6(vF412(), v286.status);
    }
    return v286.json();
  }
  async postPawtectLoad() {
    const v287 = await this.request("/pawtect/load", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        pawtectMe: f15(),
        "paint-the": "world",
        "but-not": "using-bots",
        security: "/.well-known/security.txt"
      })
    });
    if (v287.status !== 204) {
      throw new C6(vF412(), v287.status);
    }
  }
  async unlinkDiscord() {
    const v288 = await this.request("/discord/unlink", {
      method: "POST",
      credentials: "include"
    });
    if (v288.status !== 204) {
      throw new C6(vF412(), v288.status);
    }
  }
  async deleteSessions() {
    const v289 = await this.request("/me/sessions", {
      method: "DELETE",
      credentials: "include"
    });
    if (v289.status !== 200) {
      throw new C6(vF412(), v289.status);
    }
  }
  async deleteAllUserSessions(p395) {
    const v290 = await this.request(`/staff/dashboard/users/${p395}/sessions`, {
      method: "DELETE",
      credentials: "include"
    });
    if (v290.status !== 200) {
      throw new C6(vF412(), v290.status);
    }
  }
  async banUsers(p396, p397, p398) {
    const v291 = await this.request("/staff/dashboard/summary/users/ban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: p396,
        reason: p397,
        notes: p398
      })
    });
    if (v291.status !== 200) {
      throw new C6(vF412(), v291.status);
    }
  }
  async timeoutUsers(p399, p400, p401) {
    const v292 = await this.request("/staff/dashboard/summary/users/timeout", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: p399,
        reason: p400,
        notes: p401
      })
    });
    if (v292.status !== 200) {
      throw new C6(vF412(), v292.status);
    }
  }
  async incrementUsersDroplets(p402, p403, p404) {
    const v293 = await this.request("/staff/dashboard/summary/users/increment-droplet", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: p402,
        delta: p403,
        notes: p404
      })
    });
    if (v293.status !== 200) {
      throw new C6(vF412(), v293.status);
    }
  }
  async postUnbanUsers(p405, p406) {
    const v294 = await this.request("/staff/dashboard/summary/users/unban", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userIds: p405,
        notes: p406
      })
    });
    if (v294.status !== 200) {
      throw new C6(vF412(), v294.status);
    }
  }
  async getAuditLogs(p407) {
    const v295 = new URLSearchParams();
    if (p407.actorUserId !== undefined) {
      v295.set("actorUserId", String(p407.actorUserId));
    }
    if (p407.targetUserId !== undefined) {
      v295.set("targetUserId", String(p407.targetUserId));
    }
    if (p407.action) {
      v295.set("action", p407.action);
    }
    if (p407.sortKey) {
      v295.set("sortKey", p407.sortKey);
    }
    if (p407.sortDir) {
      v295.set("sortDir", p407.sortDir);
    }
    v295.set("limit", String(p407.limit));
    v295.set("offset", String(p407.offset));
    const v296 = await this.request(`/staff/dashboard/audit-logs/see?${v295.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v296.status !== 200) {
      throw new C6(vF412(), v296.status);
    }
    return v296.json();
  }
  async postUsersSuspend(p408, p409, p410) {
    let v297;
    switch (p409) {
      case "dashboard":
        v297 = `/staff/dashboard/users/${p410}`;
        break;
      case "select-area":
        v297 = `/staff/tools/select-area/${p410}`;
        break;
      case "select-pixel":
      default:
        v297 = `/staff/tools/select-pixel/${p410}`;
        break;
    }
    if ((await this.request(v297, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p408)
    })).status !== 200) {
      throw new Error(vF412());
    }
  }
  async postReportUserName(p411) {
    const v298 = await this.request("/report/user/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        userId: p411
      })
    });
    if (v298.status !== 200) {
      throw new C6(vF412(), v298.status);
    }
  }
  async postReportAllianceName(p412) {
    const v299 = await this.request("/report/alliance/name", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        allianceId: p412
      })
    });
    if (v299.status !== 200) {
      throw new C6(vF412(), v299.status);
    }
    return v299.json();
  }
  async submitBanAppeal(p413) {
    const v300 = await this.request("/report/appeal", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        message: p413
      })
    });
    if (v300.status !== 200 && v300.status !== 208) {
      throw new C6(vF412(), v300.status);
    }
    return v300.status;
  }
  async getOpenAppeals() {
    const v301 = await this.request("/staff/appeals/get", {
      method: "GET",
      credentials: "include"
    });
    if (v301.status !== 200) {
      throw new C6(vF412(), v301.status);
    }
    return v301.json();
  }
  async postSolveAppeal(p414, p415) {
    const v302 = await this.request(`/staff/appeals/${p414}/handle`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        approved: p415
      })
    });
    if (v302.status !== 200) {
      throw new C6(vF412(), v302.status);
    }
    return await v302.json();
  }
  async getUserLastAppeal() {
    const v303 = await this.request("/me/last-appeal", {
      method: "GET",
      credentials: "include"
    });
    if (v303.status !== 200) {
      throw new C6(vF412(), v303.status);
    }
    const v304 = await v303.json();
    return (v304 == null ? undefined : v304.appealDate) ?? null;
  }
  async assignAppeals() {
    const v305 = await this.request("/staff/appeals/assign", {
      method: "POST",
      credentials: "include"
    });
    if (v305.status !== 200) {
      throw new C6(vF412(), v305.status);
    }
    return await v305.json();
  }
  async getNotificationCount() {
    const v306 = await this.request("/notification/count", {
      credentials: "include"
    });
    if (v306.status !== 200) {
      throw new C6(vF412(), v306.status);
    }
    const {
      count: e
    } = await v306.json();
    return e;
  }
  async getNotificationPage(p416) {
    const v307 = `/notification/page${p416 !== undefined ? `?cursor=${encodeURIComponent(p416)}` : ""}`;
    const v308 = await this.request(v307, {
      credentials: "include"
    });
    if (v308.status !== 200) {
      throw new C6(vF412(), v308.status);
    }
    return v308.json();
  }
  async postNotificationMarkRead(p417) {
    const v309 = await this.request("/notification/mark-read", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        notificationIds: p417
      })
    });
    if (v309.status !== 200) {
      throw new C6(vF412(), v309.status);
    }
    return v309.json();
  }
  async postNotificationMarkReadAll() {
    const v310 = await this.request("/notification/mark-read/all", {
      method: "POST",
      credentials: "include"
    });
    if (v310.status !== 200) {
      throw new C6(vF412(), v310.status);
    }
    return v310.json();
  }
  async getAdminBanWave() {
    const v311 = await this.request("/staff/dashboard/ban-waves/see", {
      method: "GET",
      credentials: "include"
    });
    if (v311.status !== 200) {
      throw new C6(vF412(), v311.status);
    }
    return v311.json();
  }
  async postAdminBanWave() {
    const v312 = await this.request("/staff/dashboard/ban-waves/execute", {
      method: "POST",
      credentials: "include"
    });
    if (v312.status !== 200) {
      throw new C6(vF412(), v312.status);
    }
    return v312.json();
  }
  async getPendingAppealsCount() {
    const v313 = await this.request("/staff/appeals/open_count", {
      method: "GET",
      credentials: "include"
    });
    if (v313.status !== 200) {
      throw new C6(vF412(), v313.status);
    }
    const v314 = await v313.json();
    return (v314 == null ? undefined : v314.appeals) ?? 0;
  }
  async claimEventPixel(p418) {
    const v315 = await this.request(`/event/christmas/claim/${p418}`, {
      method: "POST",
      credentials: "include"
    });
    if (v315.status !== 200) {
      throw new C6(vF412(), v315.status);
    }
    return v315.json();
  }
  async getEventStatus() {
    const v316 = await this.request("/staff/dashboard/summary/events/status", {
      method: "GET",
      credentials: "include"
    });
    if (v316.status !== 200) {
      throw new C6(vF412(), v316.status);
    }
    return v316.json();
  }
  async postEventStart(p419, p420, p421, p422) {
    const v317 = await this.request("/staff/dashboard/summary/events/start", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        eventName: p419,
        quantity: p420,
        startEventDate: p421,
        endEventDate: p422
      })
    });
    if (v317.status !== 200) {
      throw new C6(vF412(), v317.status);
    }
    return v317.json();
  }
  async postEventStop(p423) {
    const v318 = await this.request("/staff/dashboard/summary/events/stop", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        event: p423
      })
    });
    if (v318.status !== 200) {
      throw new C6(vF412(), v318.status);
    }
    return v318.json();
  }
  async getEventAnchors(p424) {
    const v319 = await this.request(`/staff/dashboard/summary/events/anchors?event=${encodeURIComponent(p424)}`, {
      method: "GET",
      credentials: "include"
    });
    if (v319.status !== 200) {
      throw new Error("Falha ao buscar anchors do evento");
    }
    return v319.json();
  }
  async getChristmasCase() {
    const v320 = await this.request("/event/christmas/presents", {
      method: "GET",
      credentials: "include"
    });
    if (v320.status === 401) {
      throw new Error(vF503());
    }
    if (v320.status !== 200) {
      throw new Error(vF412());
    }
    return v320.json();
  }
  async postChristmasCaseOpen() {
    const v321 = await this.request("/event/christmas/open-case", {
      method: "POST",
      credentials: "include"
    });
    if (v321.status === 400) {
      const v322 = await v321.json().catch(() => ({}));
      throw ((v322 == null ? undefined : v322.error) ?? "") === "no-presents" ? new Error("Você não tem presentes de Natal disponíveis.") : new Error((v322 == null ? undefined : v322.error) ?? vF412());
    } else {
      if (v321.status === 401) {
        throw new Error(vF503());
      }
      if (v321.status === 451) {
        throw new Error(vF21());
      }
      if (v321.status === 404) {
        return {
          rewardItemId: 5,
          remainingPresents: 2
        };
      }
      if (v321.status !== 200) {
        throw new Error(vF412());
      }
    }
    return v321.json();
  }
  async getUserPixelsPaintedToday() {
    const v323 = await this.request("/me/pixels-painted-today", {
      method: "GET",
      credentials: "include"
    });
    if (v323.status !== 200) {
      throw new C6(vF412(), v323.status);
    }
    const v324 = await v323.json();
    return (v324 == null ? undefined : v324.paintedToday) ?? 0;
  }
  async getUserFrames() {
    const v325 = await this.request("/me/frames", {
      method: "GET",
      credentials: "include"
    });
    if (v325.status !== 200) {
      throw new C6(vF412(), v325.status);
    }
    return v325.json();
  }
  async postEquipUserFrame(p425) {
    const v326 = await this.request(`/me/frames/equip/${p425}`, {
      method: "POST",
      credentials: "include"
    });
    if (v326.status !== 200) {
      throw new C6(vF412(), v326.status);
    }
  }
  async getUserBadges() {
    const v327 = await this.request("/me/badges", {
      method: "GET",
      credentials: "include"
    });
    if (v327.status !== 200) {
      throw new C6(vF412(), v327.status);
    }
    return v327.json();
  }
  async postEquipUserBadge(p426) {
    const v328 = await this.request("/me/badges/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p426)
    });
    if (v328.status !== 200) {
      throw new C6(vF412(), v328.status);
    }
  }
  async getWaybackEvents(p427) {
    const v329 = new URLSearchParams({
      from_ts: String(p427.fromTs),
      to_ts: String(p427.toTs)
    });
    this.setOptionalNumberParam(v329, "tile_x", p427.tileX);
    this.setOptionalNumberParam(v329, "tile_y", p427.tileY);
    this.setOptionalNumberParam(v329, "x0", p427.x0);
    this.setOptionalNumberParam(v329, "y0", p427.y0);
    this.setOptionalNumberParam(v329, "x1", p427.x1);
    this.setOptionalNumberParam(v329, "y1", p427.y1);
    this.setOptionalNumberParam(v329, "user_id", p427.userId);
    this.setOptionalNumberParam(v329, "alliance_id", p427.allianceId);
    this.setOptionalNumberParam(v329, "region_id", p427.regionId);
    this.setOptionalNumberParam(v329, "limit", p427.limit);
    const v330 = await this.request(`/staff/tools/wayback/s${p427.season}?${v329.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v330.status === 403) {
      throw new Error("Access denied");
    }
    if (v330.status !== 200) {
      throw new Error("Failed to fetch wayback events");
    }
    return v330.json();
  }
  setOptionalNumberParam(p428, p429, p430) {
    if (p430 !== undefined && typeof p430 == "number") {
      if (!!Number.isFinite(p430) && !Number.isNaN(p430)) {
        p428.set(p429, String(Math.trunc(p430)));
      }
    }
  }
  async getWaybackWithSnapshot(p431) {
    const v331 = new URLSearchParams({
      from_ts: String(p431.fromTs),
      to_ts: String(p431.toTs)
    });
    this.setOptionalNumberParam(v331, "tile_x", p431.tileX);
    this.setOptionalNumberParam(v331, "tile_y", p431.tileY);
    this.setOptionalNumberParam(v331, "x0", p431.x0);
    this.setOptionalNumberParam(v331, "y0", p431.y0);
    this.setOptionalNumberParam(v331, "x1", p431.x1);
    this.setOptionalNumberParam(v331, "y1", p431.y1);
    this.setOptionalNumberParam(v331, "user_id", p431.userId);
    this.setOptionalNumberParam(v331, "alliance_id", p431.allianceId);
    this.setOptionalNumberParam(v331, "region_id", p431.regionId);
    this.setOptionalNumberParam(v331, "limit", p431.limit);
    const v332 = await this.request(`/staff/tools/wayback/s${p431.season}/snapshot?${v331.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v332.status === 403) {
      throw new Error("Access denied");
    }
    if (v332.status !== 200) {
      throw new Error("Failed to fetch wayback events with snapshot");
    }
    return v332.json();
  }
  async getWaybackVideo(p432, p433) {
    const v333 = await this.request(`/staff/tools/wayback/s${p432}/video?${p433}`, {
      method: "GET",
      credentials: "include"
    });
    if (v333.status === 403) {
      throw new Error("Access denied");
    }
    if (v333.status !== 200) {
      throw new Error("Failed to fetch wayback video");
    }
    return v333;
  }
  async postWaybackReconstruct(p434, p435) {
    const v334 = await this.request(`/staff/tools/wayback/s${p434}/reconstruct`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p435)
    });
    if (v334.status === 403) {
      throw new Error("Access denied");
    }
    if (v334.status !== 200) {
      throw new Error("Failed to reconstruct wayback data");
    }
    return v334;
  }
  async getWaybackReconstructImage(p436) {
    const v335 = new URLSearchParams({
      from_ts: String(p436.fromTs),
      to_ts: String(p436.toTs),
      tile_x: String(p436.tileX),
      tile_y: String(p436.tileY)
    });
    const v336 = await this.request(`/staff/tools/wayback/s${p436.season}/reconstruct?${v335.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v336.status === 403) {
      throw new Error("Access denied");
    }
    if (v336.status !== 200) {
      throw new Error("Failed to fetch wayback reconstruct image");
    }
    return v336.blob();
  }
  async getStoreFrames() {
    const v337 = await this.request("/store/frames", {
      method: "GET",
      credentials: "include"
    });
    if (v337.status !== 200) {
      throw new C6(vF412(), v337.status);
    }
    return v337.json();
  }
  async postBuyUserFrame(p437) {
    const v338 = await this.request(`/store/frames/buy/${p437}`, {
      method: "POST",
      credentials: "include"
    });
    if (v338.status === 404) {
      throw new Error(vF126());
    }
    if (v338.status === 403) {
      throw new Error(vF477());
    }
    if (v338.status === 409) {
      throw new Error(vF438());
    }
    if (v338.status !== 200) {
      throw new Error(vF412());
    }
  }
  async postEquipCosmetics(p438) {
    const v339 = await this.request("/me/cosmetic/equip", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p438)
    });
    if (v339.status !== 200) {
      throw new C6(vF412(), v339.status);
    }
  }
  async getStoreNameCosmetics() {
    const v340 = await this.request("/store/name", {
      method: "GET",
      credentials: "include"
    });
    if (v340.status !== 200) {
      throw new C6(vF412(), v340.status);
    }
    return await v340.json();
  }
  async postBuyCosmetic(p439) {
    const v341 = await this.request(`/store/name/buy/${p439}`, {
      method: "POST",
      credentials: "include"
    });
    if (v341.status !== 200) {
      throw new C6(vF412(), v341.status);
    }
  }
  async getMyNameCosmetics() {
    const v342 = await this.request("/me/cosmetics/name", {
      method: "GET",
      credentials: "include"
    });
    if (v342.status !== 200) {
      throw new C6(vF412(), v342.status);
    }
    return await v342.json();
  }
  async getTicketsKpi(p440) {
    const v343 = new URLSearchParams();
    v343.set("start", p440.startIso);
    v343.set("end", p440.endIso);
    if (p440.compare) {
      v343.set("compare", "1");
    }
    if (p440.userId != null) {
      v343.set("userId", String(p440.userId));
    }
    if (p440.allianceId != null) {
      v343.set("allianceId", String(p440.allianceId));
    }
    if (p440.reason != null) {
      v343.set("reason", p440.reason);
    }
    if (p440.punishment != null) {
      v343.set("punishment", p440.punishment);
    }
    if (p440.granularity != null) {
      v343.set("granularity", p440.granularity);
    }
    const v344 = await this.request(`/staff/dashboard/kpi/tickets?${v343.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v344.status !== 200) {
      throw new C6(vF412(), v344.status);
    }
    return v344.json();
  }
  async postCreateFrame(p441) {
    const v345 = new FormData();
    v345.append("name", p441.name);
    v345.append("image", p441.image);
    v345.append("description", p441.description);
    v345.append("value", p441.value.toString());
    v345.append("rarity", p441.rarity);
    v345.append("purchasable", p441.purchasable.toString());
    const v346 = await this.request("/staff/store-manager/frames", {
      method: "POST",
      credentials: "include",
      body: v345
    });
    if (v346.status !== 200) {
      throw new C6(vF412(), v346.status);
    }
  }
  async postCreateFont(p442) {
    const v347 = await this.request("/staff/store-manager/fonts", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p442)
    });
    if (v347.status !== 200) {
      throw new C6(vF412(), v347.status);
    }
  }
  async postCreateStyle(p443) {
    const v348 = await this.request("/staff/store-manager/styles", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p443)
    });
    if (v348.status !== 200) {
      throw new C6(vF412(), v348.status);
    }
  }
  async postCreateBadge(p444) {
    const v349 = await this.request("/staff/dashboard/store-manager/badges", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(p444)
    });
    if (v349.status !== 200) {
      throw new C6(vF412(), v349.status);
    }
  }
  async getR2Images(p445) {
    const v350 = new URLSearchParams({
      page: String(p445.page),
      pageSize: String(p445.pageSize)
    });
    const v351 = await this.request(`/staff/store-manager/images?${v350.toString()}`, {
      method: "GET",
      credentials: "include"
    });
    if (v351.status !== 200) {
      throw new C6(vF412(), v351.status);
    }
    return v351.json();
  }
  async postUploadR2Image(p446) {
    const v352 = new FormData();
    if (p446.name) {
      v352.append("name", p446.name);
    }
    v352.append("image", p446.image);
    const v353 = await this.request("/staff/store-manager/images", {
      method: "POST",
      credentials: "include",
      body: v352
    });
    if (v353.status !== 200) {
      throw new C6(vF412(), v353.status);
    }
    return v353.json();
  }
  async deleteR2Image(p447) {
    const v354 = await this.request(`/staff/store-manager/images/${p447}`, {
      method: "DELETE",
      credentials: "include"
    });
    if (v354.status !== 200) {
      throw new C6(vF412(), v354.status);
    }
  }
}
v146 = new WeakMap();
function f30(p448) {
  var v355;
  var v356;
  if (!p448.length) {
    throw new Error("Auto painter request does not contain any pixels.");
  }
  const v357 = p448[0].season;
  for (const v358 of p448) {
    if (v358.season !== v357) {
      throw new Error("Auto painter requests cannot mix seasons.");
    }
  }
  const v359 = (v355 = vVO9.seasons) == null ? undefined : v355[v357];
  if (!v359) {
    throw new Error("Invalid season selected for auto painter request.");
  }
  const v360 = v359.tileSize;
  let v361 = Number.POSITIVE_INFINITY;
  let v362 = Number.POSITIVE_INFINITY;
  let v363 = Number.NEGATIVE_INFINITY;
  let v364 = Number.NEGATIVE_INFINITY;
  const v365 = p448.map(p449 => {
    const v366 = Math.round(p449.tile[0] * v360 + p449.pixel[0]);
    const v367 = Math.round(p449.tile[1] * v360 + p449.pixel[1]);
    if (v366 < v361) {
      v361 = v366;
    }
    if (v367 < v362) {
      v362 = v367;
    }
    if (v366 > v363) {
      v363 = v366;
    }
    if (v367 > v364) {
      v364 = v367;
    }
    return {
      x: v366,
      y: v367,
      colorIdx: p449.colorIdx
    };
  });
  const v368 = v363 - v361 + 1;
  const v369 = v364 - v362 + 1;
  if (!Number.isFinite(v368) || !Number.isFinite(v369) || v368 <= 0 || v369 <= 0) {
    throw new Error("Failed to compute image bounds for auto painter payload.");
  }
  const v370 = new Uint8ClampedArray(v368 * v369 * 4);
  for (const {
    x: S,
    y: k,
    colorIdx: x
  } of v365) {
    const v371 = (v356 = vVO9.colors) == null ? undefined : v356[x];
    if (!v371) {
      throw new Error(`Unknown palette color index: ${x}`);
    }
    const v372 = S - v361;
    const v373 = ((k - v362) * v368 + v372) * 4;
    const [v374, v375, v376] = v371.rgb;
    v370[v373] = v374;
    v370[v373 + 1] = v375;
    v370[v373 + 2] = v376;
    v370[v373 + 3] = x === 0 ? 1 : 255;
  }
  return {
    data: v370,
    width: v368,
    height: v369,
    offsetX: v361,
    offsetY: v362,
    season: v357
  };
}
async function f31(p450) {
  const vRl = f32(p450.width, p450.height);
  const v377 = vRl.getContext("2d");
  if (!v377) {
    throw new Error("Canvas API is not available to encode auto painter bitmap.");
  }
  const v378 = v377.createImageData(p450.width, p450.height);
  v378.data.set(p450.data);
  v377.putImageData(v378, 0, 0);
  if ("convertToBlob" in vRl) {
    return vRl.convertToBlob({
      type: "image/png"
    });
  } else {
    return new Promise((p451, p452) => {
      vRl.toBlob(p453 => {
        if (!p453) {
          p452(new Error("Failed to encode auto painter bitmap."));
          return;
        }
        p451(p453);
      }, "image/png");
    });
  }
}
function f32(p454, p455) {
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(p454, p455);
  }
  if (typeof document !== "undefined") {
    const v379 = document.createElement("canvas");
    v379.width = p454;
    v379.height = p455;
    return v379;
  }
  throw new Error("Canvas API is not available in the current environment.");
}
let v380 = new C7(ge);
let v381 = false;
let v382;
function f33() {
  const vF2511 = f25("2025-09_pawtect");
  if (!vF2511) {
    throw new Error("pawtect experiment not found on load");
  }
  if (vF2511.variant !== "disabled") {
    if (!v381) {
      if (v135.data) {
        f20(v35).then(f34).catch(p456 => {
          v382 = p456;
          Be(p456);
        });
      }
    }
  }
}
function f34() {
  f12(v135.data.id);
  v380.postPawtectLoad();
  const vFetch = fetch;
  Object.assign(window, {
    fetch: f36((p457, p458) => {
      let v383 = null;
      if (p457 instanceof Request) {
        v383 = p457.url;
      } else {
        v383 = p457;
      }
      if (!v383.startsWith("/")) {
        f14(v383);
      }
      return vFetch.call(window, p457, p458);
    })
  });
  v381 = true;
}
function f35(p459) {
  if (v382) {
    throw new Error(vF425());
  }
  if (!v381) {
    throw new Error("Try again in a few seconds or reload the page.");
  }
  return f16(p459);
}
function f36(p460) {
  return p460.bind().bind();
}
function f37(p461, p462, p463) {
  const v384 = {
    [p461.name](...a) {
      p463(...a);
      return p462(...a);
    }
  }[p461.name];
  return f36(v384);
}
export { vF490 as $, vF113 as A, vF126 as B, v139 as C, vF139 as D, vF165 as E, vF542 as F, vF217 as G, vF230 as H, vF243 as I, vF256 as J, vF269 as K, vF282 as L, vF295 as M, vF321 as N, vF334 as O, v141 as P, vF347 as Q, vF360 as R, v142 as S, vF373 as T, vF386 as U, vF399 as V, vF425 as W, vF438 as X, vF451 as Y, vF464 as Z, vF477 as _, v380 as a, vF503 as a0, vF516 as a1, vF529 as a2, f27 as a3, f26 as a4, vF8 as a5, f29 as a6, v140 as a7, vO2 as b, vF74 as c, vF152 as d, vF412 as e, vVO9 as f, vF178 as g, vF191 as h, vF204 as i, f24 as j, v27 as k, f2 as l, vF308 as m, C3 as n, f5 as o, f33 as p, f37 as q, vF21 as r, vO3 as s, v29 as t, v135 as u, vF34 as v, vF48 as w, vF61 as x, vF87 as y, vF100 as z };