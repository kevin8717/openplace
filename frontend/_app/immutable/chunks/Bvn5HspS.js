var vF = p2 => {
  throw TypeError(p2);
};
var vF2 = (p3, p4, p5) => p4.has(p3) || vF("Cannot " + p5);
var vF3 = (p6, p7, p8) => {
  vF2(p6, p7, "read from private field");
  if (p8) {
    return p8.call(p6);
  } else {
    return p7.get(p6);
  }
};
var vF4 = (p9, p10, p11) => p10.has(p9) ? vF("Cannot add the same private member more than once") : p10 instanceof WeakSet ? p10.add(p9) : p10.set(p9, p11);
import { e as s, j as o, i as r, g as p } from "./C_uavZQJ.js";
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
      v3._sentryDebugIds[v4] = "ecb2670c-cadb-41d4-9793-995bb029f727";
      v3._sentryDebugIdIdentifier = "sentry-dbid-ecb2670c-cadb-41d4-9793-995bb029f727";
    }
  })();
} catch {}
const vLSTrue = "false";
const vLSHttpsbackendwplaceli = "/files";
const vLS0x4AAAAAABpHqZ6i7uL0 = "0x4AAAAAABpHqZ-6i7uL0nmG";
const vLSHttpsbackendwplaceli2 = "";
const vLSTheme = "theme";
var v5;
var v6;
var v7;
var v8;
var v9;
var v10;
var v11;
var v12;
class C {
  constructor() {
    vF4(this, v5, s(false));
    vF4(this, v6, s(false));
    vF4(this, v7, s(p(f2())));
    vF4(this, v8, s(false));
    vF4(this, v9, s("custom-winter"));
    vF4(this, v10, s(true));
    vF4(this, v11, s(p(Date.now())));
    vF4(this, v12, s(undefined));
    // TOLOOK
    setInterval(() => {
      r(vF3(this, v11), Date.now(), true);
    }, 500);
    this.theme = localStorage.getItem(vLSTheme);
    if (this.theme !== "dark" && this.theme !== "custom-winter") {
      this.theme = "custom-winter";
    }
  }
  get dropletsDialogOpen() {
    return o(vF3(this, v5));
  }
  set dropletsDialogOpen(p12) {
    r(vF3(this, v5), p12, true);
  }
  get muted() {
    return o(vF3(this, v6));
  }
  set muted(p13) {
    r(vF3(this, v6), p13, true);
  }
  get language() {
    return o(vF3(this, v7));
  }
  set language(p14) {
    r(vF3(this, v7), p14, true);
  }
  get turnstatileLoaded() {
    return o(vF3(this, v8));
  }
  set turnstatileLoaded(p15) {
    r(vF3(this, v8), p15, true);
  }
  get theme() {
    return o(vF3(this, v9));
  }
  set theme(p16) {
    r(vF3(this, v9), p16, true);
    localStorage.setItem(vLSTheme, p16);
    document.documentElement.setAttribute("data-theme", p16);
  }
  get snowflakesEnabled() {
    return o(vF3(this, v10));
  }
  set snowflakesEnabled(p17) {
    r(vF3(this, v10), p17, true);
  }
  get now() {
    return o(vF3(this, v11));
  }
  get captcha() {
    if (v15) {
      return o(vF3(this, v12));
    } else {
      return {
        token: "turnstile-disabled",
        time: Date.now()
      };
    }
  }
  set captcha(p18) {
    r(vF3(this, v12), p18, true);
  }
}
v5 = new WeakMap();
v6 = new WeakMap();
v7 = new WeakMap();
v8 = new WeakMap();
v9 = new WeakMap();
v10 = new WeakMap();
v11 = new WeakMap();
v12 = new WeakMap();
const v13 = new C();
function f2() {
  if (navigator.languages && navigator.languages.length > 0) {
    const v14 = navigator.languages.find(p19 => p19.length === 2);
    if (v14) {
      return v14;
    }
  }
  return (navigator.language || navigator.userLanguage || navigator.browserLanguage || "en").substring(0, 2);
}
const v15 = vLSTrue.toLowerCase() !== "false";
export { vLSHttpsbackendwplaceli2 as P, vLS0x4AAAAAABpHqZ6i7uL0 as a, vLSHttpsbackendwplaceli as b, v13 as g, v15 as t };