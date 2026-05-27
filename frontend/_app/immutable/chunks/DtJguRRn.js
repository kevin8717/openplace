import "./Cz-os3rt.js";
import { B as ae, y as re, R as ne, z as ie, bj as le, p as Q, i as q, e as V, h as ce, a as W, j as I, b as C, c as X, f as R, t as N, u as Z, A as se, g as de, d as o, r as f, s as u, n as H } from "./C_uavZQJ.js";
import { s as g } from "./DMUmq8Bg.js";
import { i as D } from "./ChKIMXcl.js";
import { a as p, c as $, f as oe, s as O } from "./CiokZgy7.js";
import { p as d, r as fe } from "./C4tLH6MW.js";
import { g as Y, t as J, P as ue, a as ve } from "./Bvn5HspS.js";
import { t as me } from "./BsUFGgBR.js";
import { o as be } from "./B__H0ny_.js";
import "./BERb6pDx.js";
import { b as _e, t as ge, p as he, a as xe, c as ye, l as we, d as ke, m as Ie } from "./BZ0fGzZe.js";
import { L as Ce } from "./DfPiLG8b.js";
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
      v3._sentryDebugIds[v4] = "c6c822a3-a005-4b32-b234-ffb39d8d9ecc";
      v3._sentryDebugIdIdentifier = "sentry-dbid-c6c822a3-a005-4b32-b234-ffb39d8d9ecc";
    }
  })();
} catch {}
function f2(p2, p3, p4) {
  ae(() => {
    var vRe = re(() => p3(p2, p4 == null ? undefined : p4()) || {});
    if (p4 && vRe != null && vRe.update) {
      var v5 = false;
      var vO = {};
      ne(() => {
        var vP4 = p4();
        ie(vP4);
        if (v5 && le(vO, vP4)) {
          vO = vP4;
          vRe.update(vP4);
        }
      });
      v5 = true;
    }
    if (vRe != null && vRe.destroy) {
      return () => vRe.destroy();
    }
  });
}
var vR = R("<div></div>");
function f3(p5, p6) {
  Q(p6, true);
  let vD = d(p6, "widgetId", 15);
  let vD2 = d(p6, "appearance", 3, "always");
  let vD3 = d(p6, "language", 3, "auto");
  let vD4 = d(p6, "execution", 3, "render");
  let vD5 = d(p6, "retryInterval", 3, 8000);
  let vD6 = d(p6, "retry", 3, "auto");
  let vD7 = d(p6, "refreshExpired", 3, "auto");
  let vD8 = d(p6, "theme", 3, "auto");
  let vD9 = d(p6, "size", 3, "normal");
  let vD10 = d(p6, "tabIndex", 3, 0);
  d(p6, "reset", 15)(() => {
    var v6;
    if (vD()) {
      if ((v6 = window == null ? undefined : window.turnstile) != null) {
        v6.reset(vD());
      }
    }
  });
  const vZ = Z(() => ({
    sitekey: p6.siteKey,
    callback: (p7, p8) => {
      var v7;
      if ((v7 = p6.callback) != null) {
        v7.call(p6, p7, p8);
      }
    },
    "error-callback": p9 => {
      var v8;
      if ((v8 = p6.errorCallback) != null) {
        v8.call(p6, p9);
      }
    },
    "timeout-callback": () => {
      var v9;
      if ((v9 = p6.timeoutCallback) != null) {
        v9.call(p6);
      }
    },
    "expired-callback": () => {
      var v10;
      if ((v10 = p6.expiredCallback) != null) {
        v10.call(p6);
      }
    },
    "before-interactive-callback": () => {
      var v11;
      if ((v11 = p6.beforeInteractiveCallback) != null) {
        v11.call(p6);
      }
    },
    "after-interactive-callback": () => {
      var v12;
      if ((v12 = p6.afterInteractiveCallback) != null) {
        v12.call(p6);
      }
    },
    "unsupported-callback": () => {
      var v13;
      if ((v13 = p6.unsupportedCallback) == null) {
        return undefined;
      } else {
        return v13.call(p6);
      }
    },
    "response-field-name": p6.responseFieldName ?? p6.formsField ?? "cf-turnstile-response",
    "response-field": p6.responseField ?? p6.forms ?? true,
    "refresh-expired": vD7(),
    "retry-interval": vD5(),
    tabindex: vD10(),
    appearance: vD2(),
    execution: vD4(),
    language: vD3(),
    action: p6.action,
    retry: vD6(),
    theme: vD8(),
    cData: p6.cData,
    size: vD9()
  }));
  const vF = (p10, p11) => {
    let v14 = window.turnstile.render(p10, p11);
    vD(v14);
    return {
      destroy() {
        window.turnstile.remove(v14);
      },
      update(p12) {
        window.turnstile.remove(v14);
        v14 = window.turnstile.render(p10, p12);
        vD(v14);
      }
    };
  };
  let vV = V(false);
  be(() => {
    q(vV, true);
    if (!Y.turnstatileLoaded) {
      const v15 = document.createElement("script");
      v15.type = "text/javascript";
      v15.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      v15.async = true;
      v15.addEventListener("load", () => Y.turnstatileLoaded = true, {
        once: true
      });
      document.head.appendChild(v15);
    }
    return () => {
      q(vV, false);
    };
  });
  var vCe = ce();
  var vW = W(vCe);
  {
    var vF2 = p13 => {
      var vVR = vR();
      let v16;
      f2(vVR, (p14, p15) => vF == null ? undefined : vF(p14, p15), () => I(vZ));
      N(() => v16 = p(vVR, 1, $(p6.class), "svelte-1lm836y", v16, {
        flexible: vD9() == "flexible"
      }));
      C(p13, vVR);
    };
    D(vW, p16 => {
      if (Y.turnstatileLoaded && I(vV)) {
        p16(vF2);
      }
    });
  }
  C(p5, vCe);
  X();
}
var vSe = se("<svg><path d=\"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\" fill=\"#4285F4\"></path><path d=\"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\" fill=\"#34A853\"></path><path d=\"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\" fill=\"#FBBC05\"></path><path d=\"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\" fill=\"#EB4335\"></path></svg>");
function f4(p17, p18) {
  let vFe = fe(p18, ["$$slots", "$$events", "$$legacy"]);
  var vVSe = vSe();
  oe(vVSe, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...vFe
  }));
  C(p17, vVSe);
}
var vR2 = R("<a><!> </a> <div class=\"mt-2 flex flex-col items-center gap-1\"><!> <!></div>", 1);
var vR3 = R("<p class=\"text-base-content/60 mt-8 text-center text-xs\"> <a class=\"font-medium\"> </a>.</p>");
var vR4 = R("<div><div class=\"flex justify-center py-4\"><!></div> <div class=\"flex flex-col items-center gap-2 pt-6\"><!></div> <p class=\"text-base-content/60 mt-2 text-center text-xs\"> <a class=\"font-medium\" target=\"_blank\"> </a>, <a class=\"font-medium\" href=\"/terms/privacy\" target=\"_blank\"> </a> <a class=\"font-medium\" href=\"/terms/code-of-conduct\" target=\"_blank\"> </a>.</p> <!></div>");
function f5(p19, p20) {
  Q(p20, true);
  let vD11 = d(p20, "showTwitchMigration", 3, true);
  let vV2 = V(de(J ? "" : "turnstile-disabled"));
  function f6(p21, p22) {
    return `${ue}/login${p20.redirect ? `r=${p20.redirect}` : ""}`;
  }
  var vVR4 = vR4();
  var vO2 = o(vVR4);
  var vO3 = o(vO2);
  Ce(vO3, {
    hasText: true
  });
  f(vO2);
  var vU = u(vO2, 2);
  var vO4 = o(vU);
  {
    var vF3 = p23 => {
      var vVR2 = vR2();
      var vW2 = W(vVR2);
      var vO5 = o(vW2);
      f4(vO5, {
        class: "mr-1 size-5"
      });
      var vU2 = u(vO5);
      f(vW2);
      var vU3 = u(vW2, 2);
      var vO6 = o(vU3);
      {
        var vF4 = p24 => {
          {
            let vZ2 = Z(() => ve.trim());
            f3(p24, {
              get siteKey() {
                return I(vZ2);
              },
              callback: p25 => {
                q(vV2, p25, true);
              }
            });
          }
        };
        D(vO6, p26 => {
          if (J) {
            p26(vF4);
          }
        });
      }
      var vU4 = u(vO6, 2);
      D(vU4, p27 => {});
      f(vU3);
      N((p28, p29) => {
        p(vW2, 1, $({
          "btn btn-lg bg-base-100 w-full text-base": true,
          "bg-base-content/10 pointer-events-none": !I(vV2)
        }));
        O(vW2, "href", p28);
        g(vU2, ` ${p29 ?? ""}`);
      }, [() => I(vV2) ? f6("google", I(vV2)) : "#", () => we({
        name: "Google"
      })]);
      C(p23, vVR2);
    };
    D(vO4, p30 => {
      p30(vF3, false);
    });
  }
  f(vU);
  var vU5 = u(vU, 2);
  var vO7 = o(vU5);
  var vU6 = u(vO7);
  var vO8 = o(vU6, true);
  f(vU6);
  var vU7 = u(vU6, 2);
  var vO9 = o(vU7, true);
  f(vU7);
  var vU8 = u(vU7);
  var vU9 = u(vU8);
  var vO10 = o(vU9, true);
  f(vU9);
  H();
  f(vU5);
  var vU10 = u(vU5, 2);
  {
    var vF5 = p31 => {
      var vVR3 = vR3();
      var vO11 = o(vVR3);
      var vU11 = u(vO11);
      var vO12 = o(vU11, true);
      f(vU11);
      H();
      f(vVR3);
      N((p32, p33, p34) => {
        g(vO11, `${p32 ?? ""} `);
        O(vU11, "href", p33);
        g(vO12, p34);
      }, [() => ke(), () => f6("twitch", ""), () => Ie()]);
      C(p31, vVR3);
    };
    D(vU10, p35 => {
      if (vD11()) {
        p35(vF5);
      }
    });
  }
  f(vVR4);
  N((p36, p37, p38, p39, p40, p41) => {
    g(vO7, `${p36 ?? ""} `);
    O(vU6, "href", p37);
    g(vO8, p38);
    g(vO9, p39);
    g(vU8, ` ${p40 ?? ""} `);
    g(vO10, p41);
  }, [() => _e(), me, () => ge(), () => he(), () => xe(), () => ye()]);
  C(p19, vVR4);
  X();
}
export { f5 as L };