import "../chunks/Cz-os3rt.js";
import { o as Pa } from "../chunks/B__H0ny_.js";
import { o as Ra, p as Da, v as Ae, j as e, e as I, i, g as Ua, f as w, a as H, b as u, c as Ba, t as S, $ as Ea, s as l, d as t, r as a, u as ze, h as re, q as Qe } from "../chunks/C_uavZQJ.js";
import { s as d } from "../chunks/DMUmq8Bg.js";
import { i as P } from "../chunks/ChKIMXcl.js";
import { e as Pe, i as Xe } from "../chunks/BlcvAwpm.js";
import { h as La } from "../chunks/a0sn6oCU.js";
import { r as le, s as na, b as oa } from "../chunks/CiokZgy7.js";
import { a as ja, b as Re } from "../chunks/DfigqzjD.js";
import { d as ia, i as da, h as ua, c as va, g as ca, u as q, a as ne, m as za, t as z } from "../chunks/Crl10T8F.js";
import { L as Oe } from "../chunks/DwW9G3DJ.js";
import { R as Oa } from "../chunks/CRTziNLQ.js";
import "../chunks/BERb6pDx.js";
import { a as qa } from "../chunks/DKOAJcLD.js";
import { s as Ma, u as Va, o as Ca, b as Wa, a as qe, t as ma, c as ba, i as Ya, e as Me, d as _a, f as Fa, v as Ga, g as Ha } from "../chunks/C4LXY-pW.js";
import { c as Ja } from "../chunks/BqtdkDfE.js";
import { o as pa, s as Ve, g as oe } from "../chunks/Du2w7VC5.js";
import { l as fa } from "../chunks/eJX2FL_c.js";
import { n as xa } from "../chunks/B4STR-ys.js";
import { o as Ka } from "../chunks/C6b2xQtE.js";
import { s as Qa } from "../chunks/_hf8KUpT.js";
import { u as Xa, a as Za } from "../chunks/BbzZxrpR.js";
import { P as V } from "../chunks/BTC_NzsW.js";
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
      v3._sentryDebugIds[v4] = "9eeea3cf-a93c-4df7-a24e-b8051d3a9e63";
      v3._sentryDebugIdIdentifier = "sentry-dbid-9eeea3cf-a93c-4df7-a24e-b8051d3a9e63";
    }
  })();
} catch {}
var vW = w("<label class=\"flex items-center gap-2\"><input type=\"checkbox\" class=\"checkbox checkbox-sm\"/> <span class=\"text-sm\"> </span></label>");
var vW2 = w("<div class=\"text-base-content/80 flex items-center gap-2\"><span class=\"loading loading-spinner loading-sm\"></span> <span> </span></div>");
var vW3 = w("<div class=\"bg-base-200 border-base-200 rounded-xl border p-3\"><div class=\"text-base-content/70 text-xs\"> </div> <div class=\"text-lg leading-none font-bold\"> </div></div>");
var vW4 = w("<div class=\"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between\"><div class=\"bg-base-200 flex items-baseline gap-3 rounded-lg px-4 py-2\"><div><div class=\"text-base-content/70 text-sm\">Total</div> <div class=\"text-4xl leading-none font-extrabold\"> </div></div> <div class=\"text-base-content/60 text-xs\"> </div></div> <div class=\"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6\"></div></div>");
var vW5 = w("<p class=\"text-base-content/80\"> </p>");
var vW6 = w("<div class=\"rounded-box bg-base-100 border-base-300 border p-4\"><!></div>");
var vW7 = w("<div class=\"text-base-content/80 flex items-center gap-2\"><span class=\"loading loading-spinner loading-sm\"></span> <span> </span></div>");
var vW8 = w("<div class=\"bg-base-200 border-base-200 rounded-xl border p-3\"><div class=\"text-base-content/70 text-xs\"> </div> <div class=\"text-lg leading-none font-bold\"> </div></div>");
var vW9 = w("<div class=\"flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between\"><div class=\"bg-base-200 flex items-baseline gap-3 rounded-lg px-4 py-2\"><div><div class=\"text-base-content/70 text-sm\">Total</div> <div class=\"text-4xl leading-none font-extrabold\"> </div></div> <div class=\"text-base-content/60 text-xs\"> </div></div> <div class=\"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6\"></div></div>");
var vW10 = w("<p class=\"text-base-content/80\"> </p>");
var vW11 = w("<div class=\"rounded-box bg-base-100 border-base-300 mt-4 border p-4\"><div class=\"mb-2\"><h3 class=\"text-lg font-semibold\"> </h3></div> <!></div>");
var vW12 = w("<section class=\"rounded-box bg-base-100 border-base-300 m-3 border p-4 shadow\"><div class=\"mb-3 flex items-center justify-between\"><h2 class=\"text-xl font-semibold\"> </h2> <div class=\"flex items-center gap-2\"><button class=\"btn btn-sm\" title=\"Selecionar tudo\"> </button> <button class=\"btn btn-sm\" title=\"Limpar seleção\"> </button> <button class=\"btn btn-circle btn-sm\" title=\"Atualizar\"><!></button></div></div> <div class=\"mb-4 flex flex-wrap gap-3\"></div> <!> <!></section>");
var vW13 = w("<option> </option>");
var vW14 = w("<span class=\"loading loading-spinner loading-sm\"></span>");
var vW15 = w("<section id=\"ban-users\" class=\"mb-6\"><h3 class=\"text-lg font-semibold\"> </h3> <div class=\"flex flex-col gap-3 sm:flex-row sm:items-start\"><label class=\"form-control w-full max-w-xs\" for=\"user-ids\"><span class=\"label-text text-sm\"> </span> <input id=\"user-ids\" type=\"text\" placeholder=\"12314, 4566544, 7897897\" class=\"input input-bordered w-full\" aria-describedby=\"user-ids-help\" inputmode=\"numeric\"/>  <section class=\"mt-2\"><!></section></label> <section class=\"w-full max-w-xs sm:mt-0\"><label class=\"form-control w-full\" for=\"ban-reason\"><span class=\"label-text text-sm\"> </span> <select id=\"ban-reason\" class=\"select select-bordered\"><option disabled>Select</option><!></select></label></section> <button class=\"btn btn-primary w-full max-w-xs sm:mt-5.5\"><!></button></div></section>");
var vW16 = w("<option> </option>");
var vW17 = w("<span class=\"loading loading-spinner loading-sm\"></span>");
var vW18 = w("<section id=\"timeout-users\" class=\"mb-6\"><h3 class=\"text-lg font-semibold\"> </h3> <div class=\"flex flex-col gap-3 sm:flex-row sm:items-start\"><label class=\"form-control w-full max-w-xs\" for=\"user-ids\"><span class=\"label-text text-sm\"> </span> <input id=\"user-ids\" type=\"text\" placeholder=\"12314, 4566544, 7897897\" class=\"input input-bordered w-full\" aria-describedby=\"user-ids-help\" inputmode=\"numeric\"/> <section class=\"mt-2\"><!></section></label> <section class=\"w-full max-w-xs sm:mt-0\"><label class=\"form-control w-full\" for=\"ban-reason\"><span class=\"label-text text-sm\"> </span> <select id=\"ban-reason\" class=\"select select-bordered\"><option disabled>Select</option><!></select></label></section> <button class=\"btn btn-primary w-full max-w-xs sm:mt-5.5\"><!></button></div></section>");
var vW19 = w("<span class=\"loading loading-spinner loading-sm\"></span>");
var vW20 = w("<section id=\"unban-users\" class=\"mt-6\"><h3 class=\"text-lg font-semibold\"> </h3> <div class=\"flex flex-col gap-3 sm:flex-row sm:items-start\"><label class=\"form-control w-full max-w-xs\" for=\"user-ids\"><span class=\"label-text text-sm\"> </span> <input id=\"user-ids\" type=\"text\" placeholder=\"12314, 4566544, 7897897\" class=\"input input-bordered w-full\" aria-describedby=\"user-ids-help\" inputmode=\"numeric\"/> <section class=\"mt-2\"><!></section></label> <button class=\"btn btn-primary w-full max-w-xs sm:mt-5.5\"><!></button></div></section>");
var vW21 = w("<section id=\"change droplets\"><h3 class=\"text-lg font-semibold\"> </h3> <div class=\"flex flex-col gap-3 sm:flex-row sm:items-start\"><label class=\"form-control w-full max-w-xs\" for=\"user-ids\"><span class=\"label-text text-sm\"> </span> <input id=\"user-ids\" type=\"text\" placeholder=\"12314, 4566544, 7897897\" class=\"input input-bordered w-full\" aria-describedby=\"user-ids-help\" inputmode=\"numeric\"/> <section class=\"mt-2\"><!></section></label> <input class=\"input input-bordered mt-5.5 w-24\" type=\"number\" placeholder=\"+/- valor\"/> <button class=\"btn btn-primary mt-5.5 w-24\"> </button></div></section>");
var vW22 = w("<section class=\"rounded-box bg-base-100 border-base-300 m-3 border p-4 shadow\"><h2 class=\"text-xl font-semibold\"> </h2> <div class=\"rounded-box bg-base-100 border-base-300 mb-4 border p-4\"><!> <!> <!> <!></div></section>");
var vW23 = w("<!> <!>", 1);
function f2(p2, p3) {
  console.log("Dashboard Summary Component Loaded");
  Da(p3, true);
  let vI = I(true);
  let vI2 = I(false);
  let vI3 = I(null);
  let vI4 = I("");
  let vI5 = I("");
  let vI6 = I("");
  let vI7 = I("");
  let vI8 = I("");
  let vI9 = I("");
  let vI10 = I("");
  let vI11 = I("");
  let vI12 = I("");
  let vI13 = I("");
  let vI14 = I("");
  let vI15 = I(null);
  let vI16 = I(null);
  Pa(async () => {
    if (!q.data) {
      await q.refresh();
    }
    await f3();
  });
  async function f3() {
    i(vI, true);
    try {
      const vA = [];
      if (q.hasPermission(V.dashboard.summary.counters.tickets)) {
        vA.push(f6());
      }
      if (q.hasPermission(V.dashboard.summary.counters.reports)) {
        vA.push(f7());
      }
      await Promise.all(vA);
    } finally {
      i(vI, false);
    }
  }
  function f4() {
    return !(e(vI8).length < 5) && e(vI4) != null && e(vI4).trim().length !== 0 && e(vI5).length != 0;
  }
  function f5() {
    return !(e(vI9).length < 5) && e(vI6) != null && e(vI6).trim().length !== 0 && e(vI7).length != 0;
  }
  Ae(() => {
    e(vI4);
    e(vI5);
    e(vI8);
    f4();
  });
  Ae(() => {
    e(vI6);
    e(vI7);
    e(vI9);
    f5();
  });
  let vI17 = I(true);
  let vI18 = I(true);
  Ae(() => {
    i(vI17, !f4());
    i(vI18, !f5());
  });
  const vA2 = [{
    value: "inappropriate-content",
    label: da()
  }, {
    value: "hate-speech",
    label: ua()
  }, {
    value: "doxxing",
    label: ia()
  }, {
    value: "bot",
    label: va()
  }, {
    value: "multi-accounting",
    label: za()
  }, {
    value: "griefing",
    label: ca()
  }, {
    value: "other",
    label: pa()
  }];
  let vI19 = I(null);
  const vA3 = [{
    key: "doxxing",
    label: ia()
  }, {
    key: "inappropriate_content",
    label: da()
  }, {
    key: "hate_speech",
    label: ua()
  }, {
    key: "bot",
    label: va()
  }, {
    key: "other",
    label: pa()
  }, {
    key: "griefing",
    label: ca()
  }];
  let vUa = Ua({
    doxxing: true,
    inappropriate_content: true,
    hate_speech: true,
    bot: true,
    other: true,
    griefing: true
  });
  let vI20 = I(0);
  let vI21 = I(0);
  Ae(() => {
    const vE = e(vI3);
    if (!vE) {
      i(vI20, 0);
      return;
    }
    let vLN0 = 0;
    for (const v5 of vA3) {
      if (vUa[v5.key]) {
        vLN0 += vE[v5.key];
      }
    }
    i(vI20, vLN0, true);
  });
  Ae(() => {
    const vE2 = e(vI19);
    if (!vE2) {
      i(vI21, 0);
      return;
    }
    let vLN02 = 0;
    for (const v6 of vA3) {
      if (vUa[v6.key]) {
        vLN02 += vE2[v6.key];
      }
    }
    i(vI21, vLN02, true);
  });
  async function f6() {
    i(vI3, await ne.getOpenTicketsSummary(), true);
  }
  async function f7() {
    i(vI19, await ne.getOpenReportsSummary(), true);
  }
  function f8(p4) {
    for (const v7 of vA3) {
      vUa[v7.key] = p4;
    }
  }
  async function f9() {
    if (e(vI17) || e(vI2)) {
      return;
    }
    let v8 = e(vI4).split(",").map(p5 => p5.trim()).filter(p6 => p6.length > 0 && !isNaN(Number(p6))).map(p7 => Number(p7));
    try {
      i(vI2, true);
      await ne.banUsers(v8, e(vI5), e(vI8));
      z.success(Xa());
    } catch (e2) {
      z.error((e2 == null ? undefined : e2.message) ?? Me());
    } finally {
      i(vI2, false);
    }
  }
  async function f10() {
    if (e(vI18) || e(vI2)) {
      return;
    }
    let v9 = e(vI6).split(",").map(p8 => p8.trim()).filter(p9 => p9.length > 0 && !isNaN(Number(p9))).map(p10 => Number(p10));
    try {
      i(vI2, true);
      await ne.timeoutUsers(v9, e(vI7), e(vI9));
      z.success(Za());
    } catch (e3) {
      z.error((e3 == null ? undefined : e3.message) ?? Me());
    } finally {
      i(vI2, false);
    }
  }
  async function f11() {
    if (e(vI2)) {
      return;
    }
    if (e(vI13) == null || e(vI13).trim().length === 0) {
      z.error(_a());
      return;
    }
    if (e(vI14).length < 5) {
      z.error(oe());
      return;
    }
    let v10 = e(vI13).split(",").map(p11 => p11.trim()).filter(p12 => p12.length > 0 && !isNaN(Number(p12))).map(p13 => Number(p13));
    try {
      i(vI2, true);
      await ne.postUnbanUsers(v10, e(vI14));
      z.success(Fa());
    } catch (e4) {
      z.error((e4 == null ? undefined : e4.message) ?? Me());
    } finally {
      i(vI2, false);
    }
  }
  async function f12() {
    if (e(vI2)) {
      return;
    }
    const vNumber = Number(e(vI11));
    if (isNaN(vNumber) || vNumber === 0) {
      z.error(Ga());
      return;
    }
    if (e(vI12).length < 5) {
      z.error(oe());
      return;
    }
    let v11 = e(vI10).split(",").map(p14 => p14.trim()).filter(p15 => p15.length > 0 && !isNaN(Number(p15))).map(p16 => Number(p16));
    if (v11.length === 0) {
      z.error(_a());
      return;
    }
    try {
      i(vI2, true);
      await ne.incrementUsersDroplets(v11, vNumber, e(vI12));
      z.success(Ha());
    } catch (e5) {
      z.error((e5 == null ? undefined : e5.message) ?? Me());
    } finally {
      i(vI2, false);
    }
  }
  var vVW23 = vW23();
  La("1bpli80", p17 => {
    S(p18 => {
      Ea.title = `Wplace - ${p18 ?? ""}`;
    }, [() => Qa()], undefined, undefined, true);
  });
  var vH = H(vVW23);
  {
    var vF = p19 => {
      var vVW12 = vW12();
      var vT = t(vVW12);
      var vT2 = t(vT);
      var vT3 = t(vT2, true);
      a(vT2);
      var vL = l(vT2, 2);
      var vT4 = t(vL);
      vT4.__click = () => f8(true);
      var vT5 = t(vT4, true);
      a(vT4);
      var vL2 = l(vT4, 2);
      vL2.__click = () => f8(false);
      var vT6 = t(vL2, true);
      a(vL2);
      var vL3 = l(vL2, 2);
      vL3.__click = f3;
      var vT7 = t(vL3);
      Oa(vT7, {
        class: "size-4"
      });
      a(vL3);
      a(vL);
      a(vT);
      var vL4 = l(vT, 2);
      Pe(vL4, 21, () => vA3, Xe, (p20, p21) => {
        var vVW = vW();
        var vT8 = t(vVW);
        le(vT8);
        var vL5 = l(vT8, 2);
        var vT9 = t(vL5, true);
        a(vL5);
        a(vVW);
        S(() => d(vT9, e(p21).label));
        ja(vT8, () => vUa[e(p21).key], p22 => vUa[e(p21).key] = p22);
        u(p20, vVW);
      });
      a(vL4);
      var vL6 = l(vL4, 2);
      {
        var vF2 = p23 => {
          var vVW6 = vW6();
          var vT10 = t(vVW6);
          {
            var vF3 = p24 => {
              var vVW2 = vW2();
              var vL7 = l(t(vVW2), 2);
              var vT11 = t(vL7, true);
              a(vL7);
              a(vVW2);
              S(p25 => d(vT11, p25), [() => fa()]);
              u(p24, vVW2);
            };
            var vF4 = p26 => {
              var vRe = re();
              var vH2 = H(vRe);
              {
                var vF5 = p27 => {
                  var vRe2 = re();
                  var vH3 = H(vRe2);
                  {
                    var vF6 = p28 => {
                      var vVW4 = vW4();
                      var vT12 = t(vVW4);
                      var vT13 = t(vT12);
                      var vL8 = l(t(vT13), 2);
                      var vT14 = t(vL8, true);
                      a(vL8);
                      a(vT13);
                      var vL9 = l(vT13, 2);
                      var vT15 = t(vL9);
                      a(vL9);
                      a(vT12);
                      var vL10 = l(vT12, 2);
                      Pe(vL10, 21, () => vA3, Xe, (p29, p30) => {
                        var vRe3 = re();
                        var vH4 = H(vRe3);
                        {
                          var vF7 = p31 => {
                            var vVW3 = vW3();
                            var vT16 = t(vVW3);
                            var vT17 = t(vT16, true);
                            a(vT16);
                            var vL11 = l(vT16, 2);
                            var vT18 = t(vL11, true);
                            a(vL11);
                            a(vVW3);
                            S(() => {
                              d(vT17, e(p30).label);
                              d(vT18, e(vI3)[e(p30).key]);
                            });
                            u(p31, vVW3);
                          };
                          P(vH4, p32 => {
                            if (vUa[e(p30).key]) {
                              p32(vF7);
                            }
                          });
                        }
                        u(p29, vRe3);
                      });
                      a(vL10);
                      a(vVW4);
                      S(() => {
                        d(vT14, e(vI20));
                        d(vT15, `Base: ${e(vI3).total_open_tickets ?? ""}`);
                      });
                      u(p28, vVW4);
                    };
                    var vF8 = p33 => {
                      var vVW5 = vW5();
                      var vT19 = t(vVW5, true);
                      a(vVW5);
                      S(p34 => d(vT19, p34), [() => xa()]);
                      u(p33, vVW5);
                    };
                    P(vH3, p35 => {
                      if (e(vI3)) {
                        p35(vF6);
                      } else {
                        p35(vF8, false);
                      }
                    }, true);
                  }
                  u(p27, vRe2);
                };
                P(vH2, p36 => {
                  p36(vF5, false);
                }, true);
              }
              u(p26, vRe);
            };
            P(vT10, p37 => {
              if (e(vI)) {
                p37(vF3);
              } else {
                p37(vF4, false);
              }
            });
          }
          a(vVW6);
          u(p23, vVW6);
        };
        P(vL6, p38 => {
          if (q.hasPermission(V.dashboard.summary.counters.tickets)) {
            p38(vF2);
          }
        });
      }
      var vL12 = l(vL6, 2);
      {
        var vF9 = p39 => {
          var vVW11 = vW11();
          var vT20 = t(vVW11);
          var vT21 = t(vT20);
          var vT22 = t(vT21, true);
          a(vT21);
          a(vT20);
          var vL13 = l(vT20, 2);
          {
            var vF10 = p40 => {
              var vVW7 = vW7();
              var vL14 = l(t(vVW7), 2);
              var vT23 = t(vL14, true);
              a(vL14);
              a(vVW7);
              S(p41 => d(vT23, p41), [() => fa()]);
              u(p40, vVW7);
            };
            var vF11 = p42 => {
              var vRe4 = re();
              var vH5 = H(vRe4);
              {
                var vF12 = p43 => {
                  var vRe5 = re();
                  var vH6 = H(vRe5);
                  {
                    var vF13 = p44 => {
                      var vVW9 = vW9();
                      var vT24 = t(vVW9);
                      var vT25 = t(vT24);
                      var vL15 = l(t(vT25), 2);
                      var vT26 = t(vL15, true);
                      a(vL15);
                      a(vT25);
                      var vL16 = l(vT25, 2);
                      var vT27 = t(vL16);
                      a(vL16);
                      a(vT24);
                      var vL17 = l(vT24, 2);
                      Pe(vL17, 21, () => vA3, Xe, (p45, p46) => {
                        var vRe6 = re();
                        var vH7 = H(vRe6);
                        {
                          var vF14 = p47 => {
                            var vVW8 = vW8();
                            var vT28 = t(vVW8);
                            var vT29 = t(vT28, true);
                            a(vT28);
                            var vL18 = l(vT28, 2);
                            var vT30 = t(vL18, true);
                            a(vL18);
                            a(vVW8);
                            S(() => {
                              d(vT29, e(p46).label);
                              d(vT30, e(vI19)[e(p46).key]);
                            });
                            u(p47, vVW8);
                          };
                          P(vH7, p48 => {
                            if (vUa[e(p46).key]) {
                              p48(vF14);
                            }
                          });
                        }
                        u(p45, vRe6);
                      });
                      a(vL17);
                      a(vVW9);
                      S(() => {
                        d(vT26, e(vI21));
                        d(vT27, `Base: ${e(vI19).total_open_reports ?? ""}`);
                      });
                      u(p44, vVW9);
                    };
                    var vF15 = p49 => {
                      var vVW10 = vW10();
                      var vT31 = t(vVW10, true);
                      a(vVW10);
                      S(p50 => d(vT31, p50), [() => xa()]);
                      u(p49, vVW10);
                    };
                    P(vH6, p51 => {
                      if (e(vI19)) {
                        p51(vF13);
                      } else {
                        p51(vF15, false);
                      }
                    }, true);
                  }
                  u(p43, vRe5);
                };
                P(vH5, p52 => {
                  p52(vF12, false);
                }, true);
              }
              u(p42, vRe4);
            };
            P(vL13, p53 => {
              if (e(vI)) {
                p53(vF10);
              } else {
                p53(vF11, false);
              }
            });
          }
          a(vVW11);
          S(p54 => d(vT22, p54), [() => Ca()]);
          u(p39, vVW11);
        };
        P(vL12, p55 => {
          if (q.hasPermission(V.dashboard.summary.counters.reports)) {
            p55(vF9);
          }
        });
      }
      a(vVW12);
      S((p56, p57, p58) => {
        d(vT3, p56);
        d(vT5, p57);
        d(vT6, p58);
        vL3.disabled = e(vI);
      }, [() => Ka(), () => Ma(), () => Ja()]);
      u(p19, vVW12);
    };
    P(vH, p59 => {
      if (q.hasAnyPermission([V.dashboard.summary.counters.tickets, V.dashboard.summary.counters.reports])) {
        p59(vF);
      }
    });
  }
  var vL19 = l(vH, 2);
  {
    var vF16 = p60 => {
      var vVW22 = vW22();
      var vT32 = t(vVW22);
      var vT33 = t(vT32, true);
      a(vT32);
      var vL20 = l(vT32, 2);
      var vT34 = t(vL20);
      {
        var vF17 = p61 => {
          var vVW15 = vW15();
          var vT35 = t(vVW15);
          var vT36 = t(vT35, true);
          a(vT35);
          var vL21 = l(vT35, 2);
          var vT37 = t(vL21);
          var vT38 = t(vT37);
          var vT39 = t(vT38, true);
          a(vT38);
          var vL22 = l(vT38, 2);
          le(vL22);
          var vL23 = l(vL22, 2);
          var vT40 = t(vL23);
          {
            let vZe = ze(() => oe());
            Oe(vT40, {
              class: "h-24 rounded-lg",
              name: "notes",
              get placeholder() {
                return e(vZe);
              },
              max: 2056,
              min: 5,
              get value() {
                return e(vI8);
              },
              set value(p62) {
                i(vI8, p62, true);
              },
              get validate() {
                return e(vI15);
              },
              set validate(p63) {
                i(vI15, p63, true);
              }
            });
          }
          a(vL23);
          a(vT37);
          var vL24 = l(vT37, 2);
          var vT41 = t(vL24);
          var vT42 = t(vT41);
          var vT43 = t(vT42, true);
          a(vT42);
          var vL25 = l(vT42, 2);
          vL25.__change = () => {
            f4();
          };
          var vT44 = t(vL25);
          vT44.value = vT44.__value = "";
          var vL26 = l(vT44);
          Pe(vL26, 17, () => vA2, p64 => p64.value, (p65, p66) => {
            var vVW13 = vW13();
            var vT45 = t(vVW13, true);
            a(vVW13);
            var vO = {};
            S(() => {
              d(vT45, e(p66).label);
              if (vO !== (vO = e(p66).value)) {
                vVW13.value = (vVW13.__value = e(p66).value) ?? "";
              }
            });
            u(p65, vVW13);
          });
          a(vL25);
          a(vT41);
          a(vL24);
          var vL27 = l(vL24, 2);
          vL27.__click = f9;
          var vT46 = t(vL27);
          {
            var vF18 = p67 => {
              var vVW14 = vW14();
              u(p67, vVW14);
            };
            var vF19 = p68 => {
              var vQe = Qe("Ban users");
              u(p68, vQe);
            };
            P(vT46, p69 => {
              if (e(vI2)) {
                p69(vF18);
              } else {
                p69(vF19, false);
              }
            });
          }
          a(vL27);
          a(vL21);
          a(vVW15);
          S((p70, p71, p72, p73) => {
            d(vT36, p70);
            d(vT39, p71);
            d(vT43, p72);
            na(vL25, "aria-label", p73);
            vL27.disabled = e(vI17) || e(vI2);
          }, [() => Wa(), () => qe(), () => {
            var v12;
            return ((v12 = Ve) == null ? undefined : v12()) ?? "Select the reason";
          }, () => {
            var v13;
            return ((v13 = Ve) == null ? undefined : v13()) ?? "Select the reason";
          }]);
          Re(vL22, () => e(vI4), p74 => i(vI4, p74));
          oa(vL25, () => e(vI5), p75 => i(vI5, p75));
          u(p61, vVW15);
        };
        P(vT34, p76 => {
          if (q.hasPermission(V.dashboard.summary.users.ban)) {
            p76(vF17);
          }
        });
      }
      var vL28 = l(vT34, 2);
      {
        var vF20 = p77 => {
          var vVW18 = vW18();
          var vT47 = t(vVW18);
          var vT48 = t(vT47, true);
          a(vT47);
          var vL29 = l(vT47, 2);
          var vT49 = t(vL29);
          var vT50 = t(vT49);
          var vT51 = t(vT50, true);
          a(vT50);
          var vL30 = l(vT50, 2);
          le(vL30);
          var vL31 = l(vL30, 2);
          var vT52 = t(vL31);
          {
            let vZe2 = ze(() => oe());
            Oe(vT52, {
              class: "h-24 rounded-lg",
              name: "notes",
              get placeholder() {
                return e(vZe2);
              },
              max: 2056,
              min: 5,
              get value() {
                return e(vI9);
              },
              set value(p78) {
                i(vI9, p78, true);
              },
              get validate() {
                return e(vI16);
              },
              set validate(p79) {
                i(vI16, p79, true);
              }
            });
          }
          a(vL31);
          a(vT49);
          var vL32 = l(vT49, 2);
          var vT53 = t(vL32);
          var vT54 = t(vT53);
          var vT55 = t(vT54, true);
          a(vT54);
          var vL33 = l(vT54, 2);
          vL33.__change = () => {
            f5();
          };
          var vT56 = t(vL33);
          vT56.value = vT56.__value = "";
          var vL34 = l(vT56);
          Pe(vL34, 17, () => vA2, p80 => p80.value, (p81, p82) => {
            var vVW16 = vW16();
            var vT57 = t(vVW16, true);
            a(vVW16);
            var vO2 = {};
            S(() => {
              d(vT57, e(p82).label);
              if (vO2 !== (vO2 = e(p82).value)) {
                vVW16.value = (vVW16.__value = e(p82).value) ?? "";
              }
            });
            u(p81, vVW16);
          });
          a(vL33);
          a(vT53);
          a(vL32);
          var vL35 = l(vL32, 2);
          vL35.__click = f10;
          var vT58 = t(vL35);
          {
            var vF21 = p83 => {
              var vVW17 = vW17();
              u(p83, vVW17);
            };
            var vF22 = p84 => {
              var vQe2 = Qe();
              S(p85 => d(vQe2, p85), [() => ma()]);
              u(p84, vQe2);
            };
            P(vT58, p86 => {
              if (e(vI2)) {
                p86(vF21);
              } else {
                p86(vF22, false);
              }
            });
          }
          a(vL35);
          a(vL29);
          a(vVW18);
          S((p87, p88, p89, p90) => {
            d(vT48, p87);
            d(vT51, p88);
            d(vT55, p89);
            na(vL33, "aria-label", p90);
            vL35.disabled = e(vI18) || e(vI2);
          }, [() => ma(), () => qe(), () => {
            var v14;
            return ((v14 = Ve) == null ? undefined : v14()) ?? "Select the reason";
          }, () => {
            var v15;
            return ((v15 = Ve) == null ? undefined : v15()) ?? "Select the reason";
          }]);
          Re(vL30, () => e(vI6), p91 => i(vI6, p91));
          oa(vL33, () => e(vI7), p92 => i(vI7, p92));
          u(p77, vVW18);
        };
        P(vL28, p93 => {
          if (q.hasPermission(V.dashboard.summary.users.timeout)) {
            p93(vF20);
          }
        });
      }
      var vL36 = l(vL28, 2);
      {
        var vF23 = p94 => {
          var vVW20 = vW20();
          var vT59 = t(vVW20);
          var vT60 = t(vT59, true);
          a(vT59);
          var vL37 = l(vT59, 2);
          var vT61 = t(vL37);
          var vT62 = t(vT61);
          var vT63 = t(vT62, true);
          a(vT62);
          var vL38 = l(vT62, 2);
          le(vL38);
          var vL39 = l(vL38, 2);
          var vT64 = t(vL39);
          {
            let vZe3 = ze(() => oe());
            Oe(vT64, {
              class: "h-24 rounded-lg",
              name: "notes",
              get placeholder() {
                return e(vZe3);
              },
              max: 2056,
              min: 5,
              get value() {
                return e(vI14);
              },
              set value(p95) {
                i(vI14, p95, true);
              },
              get validate() {
                return e(vI16);
              },
              set validate(p96) {
                i(vI16, p96, true);
              }
            });
          }
          a(vL39);
          a(vT61);
          var vL40 = l(vT61, 2);
          vL40.__click = f11;
          var vT65 = t(vL40);
          {
            var vF24 = p97 => {
              var vVW19 = vW19();
              u(p97, vVW19);
            };
            var vF25 = p98 => {
              var vQe3 = Qe();
              S(p99 => d(vQe3, p99), [() => ba()]);
              u(p98, vQe3);
            };
            P(vT65, p100 => {
              if (e(vI2)) {
                p100(vF24);
              } else {
                p100(vF25, false);
              }
            });
          }
          a(vL40);
          a(vL37);
          a(vVW20);
          S((p101, p102) => {
            d(vT60, p101);
            d(vT63, p102);
            vL40.disabled = e(vI13) == "" || e(vI14).length < 5 || e(vI2);
          }, [() => ba(), () => qe()]);
          Re(vL38, () => e(vI13), p103 => i(vI13, p103));
          u(p94, vVW20);
        };
        P(vL36, p104 => {
          if (q.hasPermission(V.dashboard.summary.users.unban)) {
            p104(vF23);
          }
        });
      }
      var vL41 = l(vL36, 2);
      {
        var vF26 = p105 => {
          var vVW21 = vW21();
          var vT66 = t(vVW21);
          var vT67 = t(vT66, true);
          a(vT66);
          var vL42 = l(vT66, 2);
          var vT68 = t(vL42);
          var vT69 = t(vT68);
          var vT70 = t(vT69, true);
          a(vT69);
          var vL43 = l(vT69, 2);
          le(vL43);
          var vL44 = l(vL43, 2);
          var vT71 = t(vL44);
          {
            let vZe4 = ze(() => oe());
            Oe(vT71, {
              class: "h-24 rounded-lg",
              name: "notes",
              get placeholder() {
                return e(vZe4);
              },
              max: 2056,
              min: 5,
              get value() {
                return e(vI12);
              },
              set value(p106) {
                i(vI12, p106, true);
              },
              get validate() {
                return e(vI16);
              },
              set validate(p107) {
                i(vI16, p107, true);
              }
            });
          }
          a(vL44);
          a(vT68);
          var vL45 = l(vT68, 2);
          le(vL45);
          vL45.__keydown = p108 => {
            if (p108.key === "Enter") {
              f12();
            }
          };
          var vL46 = l(vL45, 2);
          vL46.__click = f12;
          var vT72 = t(vL46, true);
          a(vL46);
          a(vL42);
          a(vVW21);
          S((p109, p110, p111) => {
            d(vT67, p109);
            d(vT70, p110);
            vL46.disabled = e(vI10) == "" || e(vI12).length < 5 || e(vI11) == "" || e(vI2);
            d(vT72, p111);
          }, [() => Ya(), () => qe(), () => qa()]);
          Re(vL43, () => e(vI10), p112 => i(vI10, p112));
          Re(vL45, () => e(vI11), p113 => i(vI11, p113));
          u(p105, vVW21);
        };
        P(vL41, p114 => {
          if (q.hasPermission(V.dashboard.summary.users.incrementDroplets)) {
            p114(vF26);
          }
        });
      }
      a(vL20);
      a(vVW22);
      S(p115 => d(vT33, p115), [() => Va()]);
      u(p60, vVW22);
    };
    P(vL19, p116 => {
      if (q.hasAnyPermission(V.dashboard.summary.users)) {
        p116(vF16);
      }
    });
  }
  u(p2, vVW23);
  Ba();
}
Ra(["click", "change", "keydown"]);
export { f2 as component };