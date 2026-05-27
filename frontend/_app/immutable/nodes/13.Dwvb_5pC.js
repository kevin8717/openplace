import "../chunks/Cz-os3rt.js";
import { o as ks } from "../chunks/B__H0ny_.js";
import { o as Oe, p as We, v as Ye, i as h, e as A, f as S, d as a, s as o, r as e, j as s, t as z, b as y, c as Je, u as te, g as Pe, h as Ps, a as Ts, $ as Is, w as Es } from "../chunks/C_uavZQJ.js";
import { s as p } from "../chunks/DMUmq8Bg.js";
import { i as j } from "../chunks/ChKIMXcl.js";
import { e as ce, i as Ve } from "../chunks/BlcvAwpm.js";
import { h as As } from "../chunks/a0sn6oCU.js";
import { r as Ie, d as zs, h as Cs, s as Ee, a as Ns } from "../chunks/CiokZgy7.js";
import { b as Fe } from "../chunks/DfigqzjD.js";
import { u as Te, t as de, a as Ge } from "../chunks/Crl10T8F.js";
import { P as g } from "../chunks/BTC_NzsW.js";
import { R as Us } from "../chunks/C6DP0DV2.js";
import { U as Ls, a as Rs, C as He, S as js } from "../chunks/CkAAqwKn.js";
import { R as qs } from "../chunks/CRTziNLQ.js";
import "../chunks/BERb6pDx.js";
import { a as Ds } from "../chunks/oyXu6nZV.js";
import { a as Ms } from "../chunks/DEaKpOrn.js";
import { a as Bs, g as Vs, b as Fs, c as Gs, r as Hs, d as Os, e as Ws, p as Ys, f as Js, h as Ks, i as Qs, j as Xs, k as Zs, l as $s, m as ea, n as sa, o as aa, q as ta, s as ra, t as na, u as ia, v as oa, w as la, x as da, y as ca } from "../chunks/BXQ_OO9y.js";
import { p as va } from "../chunks/DugztGm9.js";
import { r as pa } from "../chunks/BnPhZ7B2.js";
import { g as fa } from "../chunks/BfDGZb4T.js";
import { b as ma } from "../chunks/BBg_GkUx.js";
import { p as ua } from "../chunks/C4tLH6MW.js";
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
      v3._sentryDebugIds[v4] = "5e04d47e-7da7-4faa-95cb-d5ed1aaa5179";
      v3._sentryDebugIdIdentifier = "sentry-dbid-5e04d47e-7da7-4faa-95cb-d5ed1aaa5179";
    }
  })();
} catch {}
function f2(p2, p3, p4, p5) {
  let v5 = p3.get(p4);
  if (!v5) {
    v5 = {
      id: p5,
      label: p4,
      children: [],
      leaves: []
    };
    p3.set(p4, v5);
    p2.push(v5);
  }
  v5.index ||= new Map();
  return v5;
}
function f3(p6) {
  const vA = [];
  const v6 = new Map();
  for (const v7 of p6) {
    if (!v7) {
      continue;
    }
    const v8 = v7.split(".");
    let vLS = "";
    let vVA = vA;
    let vV6 = v6;
    for (let vLN0 = 0; vLN0 < v8.length; vLN0++) {
      const v9 = v8[vLN0];
      vLS = vLS ? `${vLS}.${v9}` : v9;
      const vF2 = f2(vVA, vV6, v9, vLS);
      vVA = vF2.children;
      vV6 = vF2.index;
      if (vLN0 === v8.length - 1) {
        vF2.permission = v7;
      }
    }
  }
  const vF = p7 => {
    p7.sort((p8, p9) => p8.label.localeCompare(p9.label));
    for (const v10 of p7) {
      vF(v10.children);
      const v11 = new Set();
      if (v10.permission) {
        v11.add(v10.permission);
      }
      for (const v12 of v10.children) {
        for (const v13 of v12.leaves) {
          v11.add(v13);
        }
      }
      v10.leaves = Array.from(v11);
      delete v10.index;
    }
  };
  vF(vA);
  return vA;
}
function f4(p10, p11) {
  var v14;
  const v15 = p11.trim().toLowerCase();
  if (!v15) {
    return p10;
  }
  const vA2 = [];
  for (const v16 of p10) {
    const vF4 = f4(v16.children, v15);
    const v17 = v16.label.toLowerCase().includes(v15);
    const v18 = (v14 = v16.permission) == null ? undefined : v14.toLowerCase().includes(v15);
    if (v17 || v18 || vF4.length) {
      vA2.push({
        ...v16,
        children: vF4
      });
    }
  }
  return vA2;
}
var vS = S("<button class=\"btn btn-ghost btn-square btn-xs\" type=\"button\"><!></button>");
var vS2 = S("<span class=\"inline-block w-7\" aria-hidden=\"true\"></span>");
var vS3 = S("<p class=\"text-base-content/70 truncate text-xs\"> </p>");
var vS4 = S("<div class=\"space-y-2\"></div>");
var vS5 = S("<div class=\"space-y-2\"><div class=\"flex items-center gap-2\"><!> <div class=\"border-base-200/70 bg-base-200/40 flex w-full flex-col gap-1 rounded-lg border px-3 py-2\"><label class=\"flex cursor-pointer items-center gap-2 text-sm\"><input class=\"checkbox checkbox-sm\" type=\"checkbox\"/> <span class=\"font-medium\"> </span> <span class=\"badge badge-ghost badge-sm font-mono text-[10px]\"> </span></label> <!></div></div> <!></div>");
function f5(p12, p13) {
  We(p13, true);
  let vUa = ua(p13, "level", 3, 0);
  let v19 = null;
  let vA3 = A("indeterminate");
  let vA4 = A(false);
  let vA5 = A("");
  const vF3 = (p14, p15) => {
    if (!p14.leaves.length) {
      return "unchecked";
    }
    let vLN02 = 0;
    for (const v20 of p14.leaves) {
      if (p15.has(v20)) {
        vLN02 += 1;
      }
    }
    if (vLN02 === 0) {
      return "unchecked";
    } else if (vLN02 === p14.leaves.length) {
      return "checked";
    } else {
      return "indeterminate";
    }
  };
  Ye(() => {
    h(vA3, vF3(p13.node, p13.selected), true);
    h(vA4, p13.expanded.has(p13.node.id), true);
    if (v19) {
      v19.indeterminate = s(vA3) === "indeterminate";
    }
    h(vA5, `padding-left: ${vUa() * 2.25}rem`);
  });
  var vVS5 = vS5();
  var vA6 = a(vVS5);
  var vA7 = a(vA6);
  {
    var vF5 = p16 => {
      var vVS = vS();
      vVS.__click = () => p13.onExpand(p13.node.id);
      var vA8 = a(vVS);
      {
        var vF6 = p17 => {
          Ls(p17, {
            class: "size-4"
          });
        };
        var vF7 = p18 => {
          Rs(p18, {
            class: "size-4"
          });
        };
        j(vA8, p19 => {
          if (s(vA4)) {
            p19(vF6);
          } else {
            p19(vF7, false);
          }
        });
      }
      e(vVS);
      z(() => {
        Ee(vVS, "aria-label", s(vA4) ? "Collapse branch" : "Expand branch");
        Ee(vVS, "aria-expanded", s(vA4));
      });
      y(p16, vVS);
    };
    var vF8 = p20 => {
      var vVS2 = vS2();
      y(p20, vVS2);
    };
    j(vA7, p21 => {
      if (p13.node.children.length > 0) {
        p21(vF5);
      } else {
        p21(vF8, false);
      }
    });
  }
  var vO = o(vA7, 2);
  var vA9 = a(vO);
  var vA10 = a(vA9);
  Ie(vA10);
  vA10.__change = () => p13.onToggle(p13.node);
  ma(vA10, p22 => v19 = p22, () => v19);
  var vO2 = o(vA10, 2);
  var vA11 = a(vO2, true);
  e(vO2);
  var vO3 = o(vO2, 2);
  var vA12 = a(vO3, true);
  e(vO3);
  e(vA9);
  var vO4 = o(vA9, 2);
  {
    var vF9 = p23 => {
      var vVS3 = vS3();
      var vA13 = a(vVS3, true);
      e(vVS3);
      z(() => p(vA13, p13.node.permission));
      y(p23, vVS3);
    };
    j(vO4, p24 => {
      if (p13.node.permission) {
        p24(vF9);
      }
    });
  }
  e(vO);
  e(vA6);
  var vO5 = o(vA6, 2);
  {
    var vF10 = p25 => {
      var vVS4 = vS4();
      ce(vVS4, 21, () => p13.node.children, p26 => p26.id, (p27, p28) => {
        {
          let vTe = te(() => vUa() + 1);
          f5(p27, {
            get node() {
              return s(p28);
            },
            get level() {
              return s(vTe);
            },
            get selected() {
              return p13.selected;
            },
            get expanded() {
              return p13.expanded;
            },
            get onToggle() {
              return p13.onToggle;
            },
            get onExpand() {
              return p13.onExpand;
            }
          });
        }
      });
      e(vVS4);
      y(p25, vVS4);
    };
    j(vO5, p29 => {
      if (p13.node.children.length > 0 && s(vA4)) {
        p29(vF10);
      }
    });
  }
  e(vVS5);
  z(() => {
    zs(vA6, s(vA5));
    Cs(vA10, s(vA3) === "checked");
    p(vA11, p13.node.label);
    p(vA12, p13.node.leaves.length);
  });
  y(p12, vVS5);
  Je();
}
Oe(["click", "change"]);
var vS6 = S("<div class=\"alert alert-error mt-4\"><!> <span> </span></div>");
var vS7 = S("<span class=\"loading loading-spinner loading-sm\"></span>");
var vS8 = S("<li><button type=\"button\" class=\"flex flex-col items-start gap-1 text-left\"><span class=\"font-medium\"> </span> <span class=\"text-base-content/70 text-xs whitespace-pre-line\"> </span></button></li>");
var vS9 = S("<span class=\"loading loading-spinner loading-sm\"></span>");
var vS10 = S("<p class=\"text-base-content/70 text-sm\"> </p>");
var vS11 = S("<button class=\"btn btn-l\" type=\"button\"> <!></button>");
var vS12 = S("<div class=\"flex flex-wrap gap-2\"></div>");
var vS13 = S("<p class=\"text-base-content/70 text-sm\"> </p>");
var vS14 = S("<div class=\"space-y-2\"></div>");
var vS15 = S("<section class=\"card bg-base-100 min-h-0 flex-1 px-3 shadow\"><div class=\"card-body min-h-0 gap-4\"><div class=\"flex flex-wrap items-center justify-between gap-4\"><div><h2> <!></h2></div> <div class=\"flex flex-wrap gap-2\"><div class=\"dropdown dropdown-end\"><div tabindex=\"0\" role=\"button\" class=\"btn btn-outline btn-secondary\"> </div> <ul class=\"menu dropdown-content rounded-box bg-base-100 z-1 w-72 p-2 shadow\"></ul></div> <button class=\"btn\" type=\"button\"><!></button> <button class=\"btn btn-error\" type=\"button\"> </button> <button class=\"btn btn-primary\" type=\"button\"><!> </button></div></div> <div class=\"grid min-h-0 flex-1 gap-6 lg:grid-cols-[1fr_1fr]\"><div class=\"border-base-200/70 bg-base-200/30 space-y-3 rounded-xl border p-4 max-lg:hidden\"><div class=\"flex items-center justify-between\"><h3 class=\"text-lg font-semibold\"> </h3> <span class=\"text-base-content/60 text-sm\"> </span></div> <!></div> <div class=\"flex min-h-0 flex-col space-y-3\"><div class=\"flex items-start justify-between gap-3\"><h3 class=\"text-lg font-semibold\"> </h3> <span class=\"badge badge-outline\"> </span></div> <input class=\"input input-bordered w-full py-5\"/> <div class=\"border-base-200/70 bg-base-200/30 min-h-0 rounded-xl border p-3\"><!></div></div></div></div></section>");
var vS16 = S("<section class=\"card bg-base-100 min-h-0 flex-1 shadow\"><div class=\"card-body flex flex-1 items-center text-center\"><p class=\"text-base-content/70\"> </p></div></section>");
var vS17 = S("<div class=\"flex flex-1 flex-col space-y-6 pb-6\"><section class=\"card bg-base-100 shadow\"><div class=\"card-body gap-4\"><div><h1 class=\"text-2xl font-semibold\"> </h1> <p class=\"text-base-content/70 text-sm\"> </p></div> <form class=\"flex flex-wrap gap-3\"><label class=\"flex min-w-0 flex-1 items-center gap-2\"><span class=\"text-sm font-medium\"> </span> <input class=\"input input-bordered w-full flex-1\" type=\"number\" min=\"1\" placeholder=\"123\"/></label> <button class=\"btn btn-primary\" type=\"submit\"><!> </button></form></div></section> <!></div>");
function f6(p30, p31) {
  We(p31, true);
  let v21 = Array.from(new Set([...g.dashboard, ...g.tickets, ...g.appeals, ...g.tools, ...g.ui])).sort();
  const vA14 = [{
    id: "admin",
    label: Ds(),
    description: Bs(),
    permissions: g
  }, {
    id: "game_master",
    label: Fs(),
    description: Vs(),
    permissions: [...g.only("tickets"), ...g.tools.only("selectArea", "selectPixel"), ...g.ui]
  }, {
    id: "appeals",
    label: Ms(),
    description: Gs(),
    permissions: g.appeals
  }, {
    id: "reddit",
    label: pa(),
    description: Hs(),
    permissions: [g.dashboard.summary.users.unban]
  }, {
    id: "gm-leader",
    label: Ws(),
    description: Os(),
    permissions: [...g.dashboard.alliances.only("banAll", "details", "members", "role", "search"), ...g.dashboard.summary.counters, ...g.dashboard.team, ...g.dashboard.users.only("ban", "info", "notesGet", "notesSet", "removeBan", "removeTimeout", "ticketsHistory", "ticketsStats", "timeout"), ...g.tickets, ...g.tools, ...g.ui]
  }];
  let vA15 = A(false);
  let vA16 = A(false);
  let vA17 = A("");
  let vA18 = A(null);
  let vA19 = A(Pe([]));
  let vA20 = A(Pe([]));
  let vA21 = A("");
  let vA22 = A(Pe(new Set()));
  let vA23 = A(false);
  const vTe2 = te(() => {
    const v22 = new Set([...v21, ...s(vA20), ...s(vA19)]);
    const v23 = Array.from(v22);
    v23.sort();
    return v23;
  });
  const vTe3 = te(() => f3(s(vTe2)));
  const vTe4 = te(() => f4(s(vTe3), s(vA21)));
  const vTe5 = te(() => new Set(s(vA19)));
  ks(async () => {
    if (!Te.data) {
      await Te.refresh();
    }
  });
  function f7(p32) {
    const v24 = Array.from(new Set(p32));
    v24.sort();
    h(vA19, v24, true);
  }
  function f8(p33) {
    const v25 = p33.length ? Array.from(new Set(p33)) : v21;
    v25.sort();
    h(vA20, v25, true);
  }
  async function f9(p34) {
    try {
      h(vA15, true);
      const v26 = await Ge.getUserPermissions(p34);
      h(vA18, v26.user, true);
      f7(v26.permissions ?? []);
      f8(v26.available ?? v21);
      h(vA21, "");
      h(vA22, new Set(), true);
      h(vA23, false);
    } catch {
      h(vA18, null);
      f7([]);
      f8(v21);
      de.error($s());
    } finally {
      h(vA15, false);
    }
  }
  async function f10() {
    const vNumber = Number(s(vA17));
    f7([]);
    if (!Number.isFinite(vNumber) || vNumber <= 0) {
      de.error(Zs());
      return;
    }
    await f9(vNumber);
  }
  function f11(p35) {
    f7(s(vA19).filter(p36 => p36 !== p35));
  }
  function f12(p37) {
    f7(p37);
  }
  async function f13() {
    if (s(vA18)) {
      try {
        h(vA16, true);
        await Ge.setUserPermissions(s(vA18).id, s(vA19));
        de.success(oa());
        await f9(s(vA18).id);
      } catch {
        de.error(la());
      } finally {
        h(vA16, false);
      }
    }
  }
  async function f14(p38) {
    p38.preventDefault();
    await f10();
  }
  function f15(p39) {
    if (!p39.leaves.length) {
      return;
    }
    const v27 = new Set(s(vA19));
    if (p39.leaves.some(p40 => !v27.has(p40))) {
      for (const v28 of p39.leaves) {
        v27.add(v28);
      }
    } else {
      for (const v29 of p39.leaves) {
        v27.delete(v29);
      }
    }
    f7(Array.from(v27));
  }
  function f16(p41) {
    const v30 = new Set(s(vA22));
    if (v30.has(p41)) {
      v30.delete(p41);
    } else {
      v30.add(p41);
    }
    h(vA22, v30, true);
  }
  Ye(() => {
    if (!s(vA23) && s(vTe3).length > 0) {
      h(vA22, new Set(s(vTe3).map(p42 => p42.id)), true);
      h(vA23, true);
    }
  });
  var vPs = Ps();
  As("1zfw2o", p43 => {
    z(p44 => {
      Is.title = `Wplace - ${p44 ?? ""}`;
    }, [() => Ys()], undefined, undefined, true);
  });
  var vTs = Ts(vPs);
  {
    var vF11 = p45 => {
      var vVS6 = vS6();
      var vA24 = a(vVS6);
      He(vA24, {
        class: "size-5"
      });
      var vO6 = o(vA24, 2);
      var vA25 = a(vO6, true);
      e(vO6);
      e(vVS6);
      z(p46 => p(vA25, p46), [() => Js()]);
      y(p45, vVS6);
    };
    var vF12 = p47 => {
      var vVS17 = vS17();
      var vA26 = a(vVS17);
      var vA27 = a(vA26);
      var vA28 = a(vA27);
      var vA29 = a(vA28);
      var vA30 = a(vA29, true);
      e(vA29);
      var vO7 = o(vA29, 2);
      var vA31 = a(vO7, true);
      e(vO7);
      e(vA28);
      var vO8 = o(vA28, 2);
      var vA32 = a(vO8);
      var vA33 = a(vA32);
      var vA34 = a(vA33, true);
      e(vA33);
      var vO9 = o(vA33, 2);
      Ie(vO9);
      e(vA32);
      var vO10 = o(vA32, 2);
      var vA35 = a(vO10);
      {
        var vF13 = p48 => {
          var vVS7 = vS7();
          y(p48, vVS7);
        };
        var vF14 = p49 => {
          js(p49, {
            class: "size-5"
          });
        };
        j(vA35, p50 => {
          if (s(vA15)) {
            p50(vF13);
          } else {
            p50(vF14, false);
          }
        });
      }
      var vO11 = o(vA35);
      e(vO10);
      e(vO8);
      e(vA27);
      e(vA26);
      var vO12 = o(vA26, 2);
      {
        var vF15 = p51 => {
          var vVS15 = vS15();
          var vA36 = a(vVS15);
          var vA37 = a(vA36);
          var vA38 = a(vA37);
          var vA39 = a(vA38);
          var vA40 = a(vA39);
          var vO13 = o(vA40);
          Us(vO13, {
            get role() {
              return s(vA18).role;
            }
          });
          e(vA39);
          e(vA38);
          var vO14 = o(vA38, 2);
          var vA41 = a(vO14);
          var vA42 = a(vA41);
          var vA43 = a(vA42, true);
          e(vA42);
          var vO15 = o(vA42, 2);
          ce(vO15, 21, () => vA14, Ve, (p52, p53) => {
            var vVS8 = vS8();
            var vA44 = a(vVS8);
            vA44.__click = () => f12(s(p53).permissions);
            var vA45 = a(vA44);
            var vA46 = a(vA45, true);
            e(vA45);
            var vO16 = o(vA45, 2);
            var vA47 = a(vO16, true);
            e(vO16);
            e(vA44);
            e(vVS8);
            z(() => {
              p(vA46, s(p53).label);
              p(vA47, s(p53).description);
            });
            y(p52, vVS8);
          });
          e(vO15);
          e(vA41);
          var vO17 = o(vA41, 2);
          vO17.__click = async () => {
            await f10();
          };
          var vA48 = a(vO17);
          qs(vA48, {
            class: "size-6"
          });
          e(vO17);
          var vO18 = o(vO17, 2);
          vO18.__click = () => {
            f7([]);
          };
          var vA49 = a(vO18, true);
          e(vO18);
          var vO19 = o(vO18, 2);
          vO19.__click = f13;
          var vA50 = a(vO19);
          {
            var vF16 = p54 => {
              var vVS9 = vS9();
              y(p54, vVS9);
            };
            j(vA50, p55 => {
              if (s(vA16)) {
                p55(vF16);
              }
            });
          }
          var vO20 = o(vA50);
          e(vO19);
          e(vO14);
          e(vA37);
          var vO21 = o(vA37, 2);
          var vA51 = a(vO21);
          var vA52 = a(vA51);
          var vA53 = a(vA52);
          var vA54 = a(vA53, true);
          e(vA53);
          var vO22 = o(vA53, 2);
          var vA55 = a(vO22, true);
          e(vO22);
          e(vA52);
          var vO23 = o(vA52, 2);
          {
            var vF17 = p56 => {
              var vVS10 = vS10();
              var vA56 = a(vVS10, true);
              e(vVS10);
              z(p57 => p(vA56, p57), [() => da()]);
              y(p56, vVS10);
            };
            var vF18 = p58 => {
              var vVS12 = vS12();
              ce(vVS12, 21, () => s(vA19), Ve, (p59, p60) => {
                var vVS11 = vS11();
                vVS11.__click = () => f11(s(p60));
                var vA57 = a(vVS11);
                var vO24 = o(vA57);
                He(vO24, {
                  class: "size-3"
                });
                e(vVS11);
                z(() => p(vA57, `${s(p60) ?? ""} `));
                y(p59, vVS11);
              });
              e(vVS12);
              y(p58, vVS12);
            };
            j(vO23, p61 => {
              if (s(vA19).length === 0) {
                p61(vF17);
              } else {
                p61(vF18, false);
              }
            });
          }
          e(vA51);
          var vO25 = o(vA51, 2);
          var vA58 = a(vO25);
          var vA59 = a(vA58);
          var vA60 = a(vA59, true);
          e(vA59);
          var vO26 = o(vA59, 2);
          var vA61 = a(vO26);
          e(vO26);
          e(vA58);
          var vO27 = o(vA58, 2);
          Ie(vO27);
          var vO28 = o(vO27, 2);
          var vA62 = a(vO28);
          {
            var vF19 = p62 => {
              var vVS13 = vS13();
              var vA63 = a(vVS13, true);
              e(vVS13);
              z(p63 => p(vA63, p63), [() => ca()]);
              y(p62, vVS13);
            };
            var vF20 = p64 => {
              var vVS14 = vS14();
              ce(vVS14, 21, () => s(vTe4), p65 => p65.id, (p66, p67) => {
                f5(p66, {
                  get node() {
                    return s(p67);
                  },
                  level: 0,
                  get selected() {
                    return s(vTe5);
                  },
                  get expanded() {
                    return s(vA22);
                  },
                  onToggle: f15,
                  onExpand: f16
                });
              });
              e(vVS14);
              y(p64, vVS14);
            };
            j(vA62, p68 => {
              if (s(vTe4).length === 0) {
                p68(vF19);
              } else {
                p68(vF20, false);
              }
            });
          }
          e(vO28);
          e(vO25);
          e(vO21);
          e(vA36);
          e(vVS15);
          z((p69, p70, p71, p72, p73, p74, p75) => {
            Ns(vA39, 1, `flex items-center gap-2 text-xl font-semibold ${p69 ?? ""}`);
            p(vA40, `${s(vA18).name ?? ""} #${s(vA18).id ?? ""} `);
            p(vA43, p70);
            vO18.disabled = s(vA19).length === 0;
            p(vA49, p71);
            vO19.disabled = s(vA16);
            p(vO20, ` ${p72 ?? ""}`);
            p(vA54, p73);
            p(vA55, s(vA19).length);
            p(vA60, p74);
            p(vA61, `${s(vTe5).size ?? ""} / ${s(vTe2).length ?? ""}`);
            Ee(vO27, "placeholder", p75);
          }, [() => fa(s(vA18).id), () => ea(), () => sa(), () => aa(), () => ta(), () => ra(), () => na()]);
          Fe(vO27, () => s(vA21), p76 => h(vA21, p76));
          y(p51, vVS15);
        };
        var vF21 = p77 => {
          var vVS16 = vS16();
          var vA64 = a(vVS16);
          var vA65 = a(vA64);
          var vA66 = a(vA65, true);
          e(vA65);
          e(vA64);
          e(vVS16);
          z(p78 => p(vA66, p78), [() => ia()]);
          y(p77, vVS16);
        };
        j(vO12, p79 => {
          if (s(vA18)) {
            p79(vF15);
          } else {
            p79(vF21, false);
          }
        });
      }
      e(vVS17);
      z((p80, p81, p82, p83) => {
        p(vA30, p80);
        p(vA31, p81);
        p(vA34, p82);
        vO10.disabled = s(vA15);
        p(vO11, ` ${p83 ?? ""}`);
      }, [() => va(), () => Ks(), () => Qs(), () => Xs()]);
      Es("submit", vO8, f14);
      Fe(vO9, () => s(vA17), p84 => h(vA17, p84));
      y(p47, vVS17);
    };
    j(vTs, p85 => {
      if (Te.hasAnyPermission(g.dashboard.permissions)) {
        p85(vF12, false);
      } else {
        p85(vF11);
      }
    });
  }
  y(p30, vPs);
  Je();
}
Oe(["click"]);
export { f6 as component };