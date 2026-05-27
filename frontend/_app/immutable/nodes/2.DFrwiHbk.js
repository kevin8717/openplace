import "../chunks/Cz-os3rt.js";
import { o as Y, s as q } from "../chunks/B__H0ny_.js";
import { p as B, e as C, g as F, h as G, a as H, b as h, c as J, i as t, j as e, t as v, $ as Q, f as g, d as i, s as y, r, u as U } from "../chunks/C_uavZQJ.js";
import { s as T } from "../chunks/DMUmq8Bg.js";
import { i as V } from "../chunks/ChKIMXcl.js";
import { k as X } from "../chunks/O257F026.js";
import { e as Z, i as aa } from "../chunks/BlcvAwpm.js";
import { h as ea } from "../chunks/a0sn6oCU.js";
import { c as sa, s as ra, a as oa } from "../chunks/CiokZgy7.js";
import { t as D } from "../chunks/Dlg0uBxh.js";
import { g as ta } from "../chunks/t2OUuDdW.js";
import { p as L } from "../chunks/tViILsSn.js";
import { P as d } from "../chunks/BTC_NzsW.js";
import { u as s } from "../chunks/Crl10T8F.js";
import { L as ia } from "../chunks/DfPiLG8b.js";
import "../chunks/BERb6pDx.js";
import { a as da } from "../chunks/n6-0Ik7T.js";
import { a as na } from "../chunks/DEaKpOrn.js";
import { a as la } from "../chunks/CDzTruN_.js";
import { b as ma } from "../chunks/Bji4jC-1.js";
import { d as M } from "../chunks/BKF_h2yB.js";
import { p as fa } from "../chunks/DugztGm9.js";
import { s as ba } from "../chunks/B-_ptPFG.js";
import { s as pa } from "../chunks/_hf8KUpT.js";
import { t as ha } from "../chunks/Dn8C7DBQ.js";
import { u as ua } from "../chunks/fVIbB8ft.js";
import { f as R } from "../chunks/BqtkZhOb.js";
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
      v3._sentryDebugIds[v4] = "48d73932-bbc0-42f8-9940-9c8d6a9a9968";
      v3._sentryDebugIdIdentifier = "sentry-dbid-48d73932-bbc0-42f8-9940-9c8d6a9a9968";
    }
  })();
} catch {}
var vG = g("<a data-sveltekit-prefetch=\"\"> </a>");
var vG2 = g("<div class=\"flex min-h-0 flex-1 flex-col\"><!></div>");
var vG3 = g("<div class=\"bg-base-200 flex min-h-screen flex-col\"><header class=\"bg-base-100 border-base-300 sticky top-0 z-20 border-b\"><div class=\"mx-auto flex max-w-7xl items-center justify-between px-4 py-3\"><a class=\"flex items-center gap-2\" href=\"/\"><!> <span class=\"text-base-content/80 text-lg font-semibold\"> </span></a></div> <nav class=\"mx-auto max-w-7xl px-4\"><div class=\"tabs tabs-border flex items-center gap-2 overflow-auto\"></div></nav></header> <main class=\"flex min-h-0 flex-1\"><div class=\"mx-auto flex min-h-0 max-w-7xl flex-1 flex-col px-4 py-4\"><!></div></main></div>");
function f2(p2, p3) {
  B(p3, true);
  const vU = U(() => L.url.pathname);
  let vC = C(F([]));
  function f3(p4) {
    return e(vU) === p4 || e(vU).startsWith(p4 + "/");
  }
  Y(async () => {
    if (!s.data) {
      await s.refresh();
    }
    if (s.hasAnyPermission(d.dashboard.summary)) {
      t(vC, [...e(vC), {
        label: pa(),
        href: "/dashboard/summary",
        key: "dashboard"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.team)) {
      t(vC, [...e(vC), {
        label: ha(),
        href: "/dashboard/team/leaderboard-tickets",
        key: "mods"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.banAppeals)) {
      t(vC, [...e(vC), {
        label: na(),
        href: "/dashboard/ban-appeals",
        key: "ban-appeals"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.kpi)) {
      t(vC, [...e(vC), {
        label: "KPI",
        href: "/dashboard/kpi/tickets",
        key: "kpi"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.users)) {
      t(vC, [...e(vC), {
        label: ua(),
        href: "/dashboard/users",
        key: "users"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.permissions)) {
      t(vC, [...e(vC), {
        label: fa(),
        href: "/dashboard/permissions",
        key: "permissions"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.alliances)) {
      t(vC, [...e(vC), {
        label: da(),
        href: "/dashboard/alliances",
        key: "alliances"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.auditLogs)) {
      t(vC, [...e(vC), {
        label: la(),
        href: "/dashboard/audit-logs",
        key: "audit-logs"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.banWaves)) {
      t(vC, [...e(vC), {
        label: ma(),
        href: "/dashboard/ban-waves",
        key: "ban-waves"
      }], true);
    }
    if (s.hasAnyPermission(d.dashboard.storeManager)) {
      t(vC, [...e(vC), {
        label: ba(),
        href: "/dashboard/store-manager",
        key: "store-manager"
      }], true);
    }
    if (e(vC).length === 0) {
      ta("/404");
    }
  });
  var vG4 = G();
  ea("2agd5u", p5 => {
    v(p6 => {
      Q.title = `Wplace - ${p6 ?? ""}`;
    }, [() => M()], undefined, undefined, true);
  });
  var vH = H(vG4);
  {
    var vF = p7 => {
      var vVG3 = vG3();
      var vI = i(vVG3);
      var vI2 = i(vI);
      var vI3 = i(vI2);
      var vI4 = i(vI3);
      ia(vI4, {
        class: "h-7 w-auto"
      });
      var vY = y(vI4, 2);
      var vI5 = i(vY, true);
      r(vY);
      r(vI3);
      r(vI2);
      var vY2 = y(vI2, 2);
      var vI6 = i(vY2);
      Z(vI6, 21, () => e(vC), aa, (p8, p9) => {
        var vVG = vG();
        var vI7 = i(vVG, true);
        r(vVG);
        v(p10 => {
          ra(vVG, "href", e(p9).href);
          oa(vVG, 1, p10);
          T(vI7, e(p9).label);
        }, [() => sa({
          tab: true,
          "font-semibold": true,
          "tab-active": f3(e(p9).href)
        })]);
        h(p8, vVG);
      });
      r(vI6);
      r(vY2);
      r(vI);
      var vY3 = y(vI, 2);
      var vI8 = i(vY3);
      var vI9 = i(vI8);
      X(vI9, () => L.url.pathname, p11 => {
        var vVG2 = vG2();
        var vI10 = i(vVG2);
        q(vI10, () => p3.children);
        r(vVG2);
        D(1, vVG2, () => R, () => ({
          duration: 120
        }));
        D(2, vVG2, () => R, () => ({
          duration: 80
        }));
        h(p11, vVG2);
      });
      r(vI8);
      r(vY3);
      r(vVG3);
      v(p12 => T(vI5, p12), [() => M()]);
      h(p7, vVG3);
    };
    V(vH, p13 => {
      if (e(vC).length > 0) {
        p13(vF);
      }
    });
  }
  h(p2, vG4);
  J();
}
export { f2 as component };