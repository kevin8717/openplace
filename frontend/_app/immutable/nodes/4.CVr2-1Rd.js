import "../chunks/Cz-os3rt.js";
import { o as T, s as D } from "../chunks/B__H0ny_.js";
import { p as R, e as A, g as M, f as c, b, c as N, t as g, $ as W, i as _, j as r, d, r as s, s as j, u as z } from "../chunks/C_uavZQJ.js";
import { s as L } from "../chunks/DMUmq8Bg.js";
import { k as O } from "../chunks/O257F026.js";
import { e as Y, i as q } from "../chunks/BlcvAwpm.js";
import { h as B } from "../chunks/a0sn6oCU.js";
import { c as C, s as F, a as G } from "../chunks/CiokZgy7.js";
import { t as x } from "../chunks/Dlg0uBxh.js";
import "../chunks/BERb6pDx.js";
import { l as p } from "../chunks/BjI3A1dN.js";
import { r as H } from "../chunks/CA3tdJUq.js";
import { t as J } from "../chunks/Dn8C7DBQ.js";
import { t as K } from "../chunks/wKFHUokP.js";
import { p as w } from "../chunks/tViILsSn.js";
import { f as k } from "../chunks/BqtkZhOb.js";
import { u as f } from "../chunks/Crl10T8F.js";
import { P as I } from "../chunks/BTC_NzsW.js";
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
      v3._sentryDebugIds[v4] = "5596bbc3-924d-4882-8964-c4cc3acb24ee";
      v3._sentryDebugIdIdentifier = "sentry-dbid-5596bbc3-924d-4882-8964-c4cc3acb24ee";
    }
  })();
} catch {}
var vC = c("<a data-sveltekit-prefetch=\"\"> </a>");
var vC2 = c("<div><!></div>");
var vC3 = c("<div class=\"rounded-box bg-base-100 border-base-300 border p-4 shadow\"><header class=\"bg-base-100 border-base-300 sticky top-0 z-30 border-b\"><nav class=\"mx-auto max-w-7xl px-4\"><div class=\"tabs tabs-border flex items-center gap-2 overflow-auto\"></div></nav></header> <main class=\"mx-auto max-w-7xl px-4 py-4\"><!></main></div>");
function f2(p2, p3) {
  R(p3, true);
  const vZ = z(() => w.url.pathname);
  let vA = A(M([]));
  T(async () => {
    if (!f.data) {
      await f.refresh();
    }
    if (f.hasPermission(I.dashboard.team.tickets)) {
      _(vA, [...r(vA), {
        label: `${p()} (${K()})`,
        href: "/dashboard/team/leaderboard-tickets",
        key: p()
      }], true);
    }
    if (f.hasPermission(I.dashboard.team.reports)) {
      _(vA, [...r(vA), {
        label: `${p()} (${H()})`,
        href: "/dashboard/team/leaderboard-reports",
        key: "leaderboard-reports"
      }], true);
    }
  });
  function f3(p4) {
    return r(vZ) === p4 || r(vZ).startsWith(p4 + "/");
  }
  var vVC3 = vC3();
  B("vvnu7m", p5 => {
    g(p6 => {
      W.title = `Wplace - ${p6 ?? ""}`;
    }, [() => J()], undefined, undefined, true);
  });
  var vD = d(vVC3);
  var vD2 = d(vD);
  var vD3 = d(vD2);
  Y(vD3, 21, () => r(vA), q, (p7, p8) => {
    var vVC = vC();
    var vD4 = d(vVC, true);
    s(vVC);
    g(p9 => {
      F(vVC, "href", r(p8).href);
      G(vVC, 1, p9);
      L(vD4, r(p8).label);
    }, [() => C({
      tab: true,
      "font-semibold": true,
      "tab-active": f3(r(p8).href)
    })]);
    b(p7, vVC);
  });
  s(vD3);
  s(vD2);
  s(vD);
  var vJ = j(vD, 2);
  var vD5 = d(vJ);
  O(vD5, () => w.url.pathname, p10 => {
    var vVC2 = vC2();
    var vD6 = d(vVC2);
    D(vD6, () => p3.children);
    s(vVC2);
    x(1, vVC2, () => k, () => ({
      duration: 120
    }));
    x(2, vVC2, () => k, () => ({
      duration: 80
    }));
    b(p10, vVC2);
  });
  s(vJ);
  s(vVC3);
  b(p2, vVC3);
  N();
}
export { f2 as component };