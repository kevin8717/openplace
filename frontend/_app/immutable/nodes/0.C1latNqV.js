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
var vF5 = (p12, p13, p14, p15) => {
  vF2(p12, p13, "write to private field");
  if (p15) {
    p15.call(p12, p14);
  } else {
    p13.set(p12, p14);
  }
  return p14;
};
import "../chunks/Cz-os3rt.js";
import { o as pt, s as st } from "../chunks/B__H0ny_.js";
import { p as de, f as nt, d as it, b as n, r as tt, t as $, c as ue, by as ce, aG as pe, aF as Re, aH as $e, e as F, g as ze, v as _t, i as v, j as e, u as b, y as $t, s as Mt, w as Ve, bi as ht, h as m, a as f, o as tn, q as Ne, A as ne, av as en } from "../chunks/C_uavZQJ.js";
import { c as nn, s as Jt } from "../chunks/DMUmq8Bg.js";
import { i as x } from "../chunks/ChKIMXcl.js";
import { v as an } from "../chunks/DnK_2CpZ.js";
import { g as Fe, P as on } from "../chunks/Bvn5HspS.js";
import { k as G, l as xt, n as sn, o as rn, u as ln, p as cn, q as dn } from "../chunks/Crl10T8F.js";
import { A as un, s as fn, c as vn } from "../chunks/CIGWfnSl.js";
import "../chunks/CFVvlG7S.js";
import "../chunks/BERb6pDx.js";
import { e as Pe } from "../chunks/BlcvAwpm.js";
import { c as It, a as Tt, s as A, d as Ae, f as mn, S as gn } from "../chunks/CiokZgy7.js";
import { b as Ke } from "../chunks/BBg_GkUx.js";
import { p as H, s as Me, r as hn } from "../chunks/C4tLH6MW.js";
import { c as Ot } from "../chunks/Bcq9zt0w.js";
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
      v3._sentryDebugIds[v4] = "6995f34e-086f-4780-9388-ad9243b45ba6";
      v3._sentryDebugIdIdentifier = "sentry-dbid-6995f34e-086f-4780-9388-ad9243b45ba6";
    }
  })();
} catch {}
const v5 = true;
const v6 = Object.freeze(Object.defineProperty({
  __proto__: null,
  prerender: v5
}, Symbol.toStringTag, {
  value: "Module"
}));
const v7 = Array(12).fill(0);
var vNt = nt("<div class=\"sonner-loading-bar\"></div>");
var vNt2 = nt("<div><div class=\"sonner-spinner\"></div></div>");
function f2(p16, p17) {
  de(p17, true);
  var vVNt2 = vNt2();
  var vIt = it(vVNt2);
  Pe(vIt, 23, () => v7, (p18, p19) => `spinner-bar-${p19}`, (p20, p21) => {
    var vVNt = vNt();
    n(p20, vVNt);
  });
  tt(vIt);
  tt(vVNt2);
  $(p22 => {
    Tt(vVNt2, 1, p22);
    A(vVNt2, "data-visible", p17.visible);
  }, [() => It(["sonner-loading-wrapper", p17.class].filter(Boolean).join(" "))]);
  n(p16, vVNt2);
  ue();
}
const v8 = typeof window !== "undefined" ? window : undefined;
function f3(p23) {
  let v9 = p23.activeElement;
  while (v9 != null && v9.shadowRoot) {
    const v10 = v9.shadowRoot.activeElement;
    if (v10 === v9) {
      break;
    }
    v9 = v10;
  }
  return v9;
}
var v11;
var v12;
class C2 {
  constructor(p24 = {}) {
    vF4(this, v11);
    vF4(this, v12);
    const {
      window: c = v8,
      document: M = c == null ? undefined : c.document
    } = p24;
    if (c !== undefined) {
      vF5(this, v11, M);
      vF5(this, v12, nn(p25 => {
        const vCe = ce(c, "focusin", p25);
        const vCe2 = ce(c, "focusout", p25);
        return () => {
          vCe();
          vCe2();
        };
      }));
    }
  }
  get current() {
    var v13;
    if ((v13 = vF3(this, v12)) != null) {
      v13.call(this);
    }
    if (vF3(this, v11)) {
      return f3(vF3(this, v11));
    } else {
      return null;
    }
  }
}
v11 = new WeakMap();
v12 = new WeakMap();
new C2();
var v14;
var v15;
class C3 {
  constructor(p26) {
    vF4(this, v14);
    vF4(this, v15);
    vF5(this, v14, p26);
    vF5(this, v15, Symbol(p26));
  }
  get key() {
    return vF3(this, v15);
  }
  exists() {
    return pe(vF3(this, v15));
  }
  get() {
    const vRe = Re(vF3(this, v15));
    if (vRe === undefined) {
      throw new Error(`Context "${vF3(this, v14)}" not found`);
    }
    return vRe;
  }
  getOr(p27) {
    const vRe2 = Re(vF3(this, v15));
    if (vRe2 === undefined) {
      return p27;
    } else {
      return vRe2;
    }
  }
  set(p28) {
    return $e(vF3(this, v15), p28);
  }
}
v14 = new WeakMap();
v15 = new WeakMap();
const v16 = new C3("<Toaster/>");
function f4(p29) {
  return p29.label !== undefined;
}
function f5() {
  let vF6 = F(ze(typeof document !== "undefined" ? document.hidden : false));
  _t(() => ce(document, "visibilitychange", () => {
    v(vF6, document.hidden, true);
  }));
  return {
    get current() {
      return e(vF6);
    }
  };
}
const vLN4000 = 4000;
const vLN14 = 14;
const vLN45 = 45;
const vLN200 = 200;
const vLN005 = 0.05;
const vO = {
  toast: "",
  title: "",
  description: "",
  loader: "",
  closeButton: "",
  cancelButton: "",
  actionButton: "",
  action: "",
  warning: "",
  error: "",
  success: "",
  default: "",
  info: "",
  loading: ""
};
function f6(p30) {
  const [v17, v18] = p30.split("-");
  const vA = [];
  if (v17) {
    vA.push(v17);
  }
  if (v18) {
    vA.push(v18);
  }
  return vA;
}
function f7(p31) {
  return 1 / (1.5 + Math.abs(p31) / 20);
}
var vNt3 = nt("<div><!></div>");
var vNt4 = nt("<button data-close-button=\"\"><!></button>");
var vNt5 = nt("<div data-icon=\"\"><!> <!></div>");
var vNt6 = nt("<div data-description=\"\"><!></div>");
var vNt7 = nt("<button data-button=\"\" data-cancel=\"\"> </button>");
var vNt8 = nt("<button data-button=\"\"> </button>");
var vNt9 = nt("<!> <div data-content=\"\"><div data-title=\"\"><!></div> <!></div> <!> <!>", 1);
var vNt10 = nt("<li data-sonner-toast=\"\"><!> <!></li>");
function f8(p32, p33) {
  de(p33, true);
  const vF7 = p34 => {
    var vM = m();
    var vF8 = f(vM);
    {
      var vF9 = p35 => {
        var vVNt3 = vNt3();
        var vIt2 = it(vVNt3);
        st(vIt2, () => p33.loadingIcon);
        tt(vVNt3);
        $(p36 => {
          Tt(vVNt3, 1, p36);
          A(vVNt3, "data-visible", e(vB5) === "loading");
        }, [() => {
          var v19;
          var v20;
          var v21;
          return It(xt((v19 = e(vB16)) == null ? undefined : v19.loader, (v21 = (v20 = p33.toast) == null ? undefined : v20.classes) == null ? undefined : v21.loader, "sonner-loader"));
        }]);
        n(p35, vVNt3);
      };
      var vF10 = p37 => {
        {
          let vB = b(() => {
            var v22;
            var v23;
            return xt((v22 = e(vB16)) == null ? undefined : v22.loader, (v23 = p33.toast.classes) == null ? undefined : v23.loader);
          });
          let vB2 = b(() => e(vB5) === "loading");
          f2(p37, {
            get class() {
              return e(vB);
            },
            get visible() {
              return e(vB2);
            }
          });
        }
      };
      x(vF8, p38 => {
        if (p33.loadingIcon) {
          p38(vF9);
        } else {
          p38(vF10, false);
        }
      });
    }
    n(p34, vM);
  };
  let vH = H(p33, "cancelButtonStyle", 3, "");
  let vH2 = H(p33, "actionButtonStyle", 3, "");
  let vH3 = H(p33, "descriptionClass", 3, "");
  let vH4 = H(p33, "unstyled", 3, false);
  let vH5 = H(p33, "defaultRichColors", 3, false);
  const vO2 = {
    ...vO
  };
  let vF11 = F(false);
  let vF12 = F(false);
  let vF13 = F(false);
  let vF14 = F(false);
  let vF15 = F(false);
  let vF16 = F(0);
  let vF17 = F(0);
  let v24 = p33.toast.duration || p33.duration || vLN4000;
  let vF18 = F(undefined);
  let vF19 = F(null);
  let vF20 = F(null);
  const vB3 = b(() => p33.index === 0);
  const vB4 = b(() => p33.index + 1 <= p33.visibleToasts);
  const vB5 = b(() => p33.toast.type);
  const vB6 = b(() => p33.toast.dismissable !== false);
  const vB7 = b(() => p33.toast.class || "");
  const vB8 = b(() => p33.toast.descriptionClass || "");
  const vB9 = b(() => G.heights.findIndex(p39 => p39.toastId === p33.toast.id) || 0);
  const vB10 = b(() => p33.toast.closeButton ?? p33.closeButton);
  const vB11 = b(() => p33.toast.duration ?? p33.duration ?? vLN4000);
  let v25 = null;
  const vB12 = b(() => p33.position.split("-"));
  const vB13 = b(() => G.heights.reduce((p40, p41, p42) => p42 >= e(vB9) ? p40 : p40 + p41.height, 0));
  const vF52 = f5();
  const vB14 = b(() => p33.toast.invert || p33.invert);
  const vB15 = b(() => e(vB5) === "loading");
  const vB16 = b(() => ({
    ...vO2,
    ...p33.classes
  }));
  const vB17 = b(() => p33.toast.title);
  const vB18 = b(() => p33.toast.description);
  let vF21 = F(0);
  let vF22 = F(0);
  const vB19 = b(() => Math.round(e(vB9) * vLN14 + e(vB13)));
  _t(() => {
    e(vB17);
    e(vB18);
    let v26;
    if (p33.expanded || p33.expandByDefault) {
      v26 = 1;
    } else {
      v26 = 1 - p33.index * vLN005;
    }
    const v$t = $t(() => e(vF18));
    if (v$t === undefined) {
      return;
    }
    v$t.style.setProperty("height", "auto");
    const v27 = v$t.offsetHeight;
    const v28 = v$t.getBoundingClientRect().height;
    const v29 = Math.round(v28 / v26 + Number.EPSILON & 100) / 100;
    v$t.style.removeProperty("height");
    let v30;
    if (Math.abs(v29 - v27) < 1) {
      v30 = v29;
    } else {
      v30 = v27;
    }
    v(vF17, v30, true);
    $t(() => {
      G.setHeight({
        toastId: p33.toast.id,
        height: v30
      });
    });
  });
  function f9() {
    v(vF12, true);
    v(vF16, e(vB19), true);
    G.removeHeight(p33.toast.id);
    // TOLOOK
    setTimeout(() => {
      G.remove(p33.toast.id);
    }, vLN200);
  }
  let v31;
  const vB20 = b(() => p33.toast.promise && e(vB5) === "loading" || p33.toast.duration === Number.POSITIVE_INFINITY);
  function f10() {
    v(vF21, new Date().getTime(), true);
    v31 = // TOLOOK
    setTimeout(() => {
      var v32;
      var v33;
      if ((v33 = (v32 = p33.toast).onAutoClose) != null) {
        v33.call(v32, p33.toast);
      }
      f9();
    }, v24);
  }
  function f11() {
    if (e(vF22) < e(vF21)) {
      const v34 = new Date().getTime() - e(vF21);
      v24 = v24 - v34;
    }
    v(vF22, new Date().getTime(), true);
  }
  _t(() => {
    if (p33.toast.updated) {
      clearTimeout(v31);
      v24 = e(vB11);
      f10();
    }
  });
  _t(() => {
    if (!e(vB20)) {
      if (p33.expanded || p33.interacting || vF52.current) {
        f11();
      } else {
        f10();
      }
    }
    return () => clearTimeout(v31);
  });
  pt(() => {
    var v35;
    v(vF11, true);
    const v36 = (v35 = e(vF18)) == null ? undefined : v35.getBoundingClientRect().height;
    v(vF17, v36, true);
    G.setHeight({
      toastId: p33.toast.id,
      height: v36
    });
    return () => {
      G.removeHeight(p33.toast.id);
    };
  });
  _t(() => {
    if (p33.toast.delete) {
      $t(() => {
        var v37;
        var v38;
        f9();
        if ((v38 = (v37 = p33.toast).onDismiss) != null) {
          v38.call(v37, p33.toast);
        }
      });
    }
  });
  const vF23 = p43 => {
    if (e(vB15)) {
      return;
    }
    v(vF16, e(vB19), true);
    const v39 = p43.target;
    v39.setPointerCapture(p43.pointerId);
    if (v39.tagName !== "BUTTON") {
      v(vF13, true);
      v25 = {
        x: p43.clientX,
        y: p43.clientY
      };
    }
  };
  const vF24 = () => {
    var v40;
    var v41;
    var v42;
    var v43;
    var v44;
    var v45;
    if (e(vF14) || !e(vB6)) {
      return;
    }
    v25 = null;
    const vNumber = Number(((v40 = e(vF18)) == null ? undefined : v40.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
    const vNumber2 = Number(((v41 = e(vF18)) == null ? undefined : v41.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
    const v46 = new Date().getTime() - 0;
    const v47 = e(vF19) === "x" ? vNumber : vNumber2;
    const v48 = Math.abs(v47) / v46;
    if (Math.abs(v47) >= vLN45 || v48 > 0.11) {
      v(vF16, e(vB19), true);
      if ((v43 = (v42 = p33.toast).onDismiss) != null) {
        v43.call(v42, p33.toast);
      }
      if (e(vF19) === "x") {
        v(vF20, vNumber > 0 ? "right" : "left", true);
      } else {
        v(vF20, vNumber2 > 0 ? "down" : "up", true);
      }
      f9();
      v(vF14, true);
      return;
    } else {
      if ((v44 = e(vF18)) != null) {
        v44.style.setProperty("--swipe-amount-x", "0px");
      }
      if ((v45 = e(vF18)) != null) {
        v45.style.setProperty("--swipe-amount-y", "0px");
      }
    }
    v(vF15, false);
    v(vF13, false);
    v(vF19, null);
  };
  const vF25 = p44 => {
    var v49;
    var v50;
    var v51;
    if (!v25 || !e(vB6) || (((v49 = window.getSelection()) == null ? undefined : v49.toString().length) ?? -1) > 0) {
      return;
    }
    const v52 = p44.clientY - v25.y;
    const v53 = p44.clientX - v25.x;
    const v54 = p33.swipeDirections ?? f6(p33.position);
    if (!e(vF19) && (Math.abs(v53) > 1 || Math.abs(v52) > 1)) {
      v(vF19, Math.abs(v53) > Math.abs(v52) ? "x" : "y", true);
    }
    let vO3 = {
      x: 0,
      y: 0
    };
    if (e(vF19) === "y") {
      if (v54.includes("top") || v54.includes("bottom")) {
        if (v54.includes("top") && v52 < 0 || v54.includes("bottom") && v52 > 0) {
          vO3.y = v52;
        } else {
          const v55 = v52 * f7(v52);
          vO3.y = Math.abs(v55) < Math.abs(v52) ? v55 : v52;
        }
      }
    } else if (e(vF19) === "x" && (v54.includes("left") || v54.includes("right"))) {
      if (v54.includes("left") && v53 < 0 || v54.includes("right") && v53 > 0) {
        vO3.x = v53;
      } else {
        const v56 = v53 * f7(v53);
        vO3.x = Math.abs(v56) < Math.abs(v53) ? v56 : v53;
      }
    }
    if (Math.abs(vO3.x) > 0 || Math.abs(vO3.y) > 0) {
      v(vF15, true);
    }
    if ((v50 = e(vF18)) != null) {
      v50.style.setProperty("--swipe-amount-x", `${vO3.x}px`);
    }
    if ((v51 = e(vF18)) != null) {
      v51.style.setProperty("--swipe-amount-y", `${vO3.y}px`);
    }
  };
  const vF26 = () => {
    v(vF13, false);
    v(vF19, null);
    v25 = null;
  };
  const vB21 = b(() => p33.toast.icon ? p33.toast.icon : e(vB5) === "success" ? p33.successIcon : e(vB5) === "error" ? p33.errorIcon : e(vB5) === "warning" ? p33.warningIcon : e(vB5) === "info" ? p33.infoIcon : e(vB5) === "loading" ? p33.loadingIcon : null);
  var vVNt10 = vNt10();
  A(vVNt10, "tabindex", 0);
  let v57;
  vVNt10.__pointermove = vF25;
  vVNt10.__pointerup = vF24;
  vVNt10.__pointerdown = vF23;
  var vIt3 = it(vVNt10);
  {
    var vF27 = p45 => {
      var vVNt4 = vNt4();
      vVNt4.__click = () => {
        var v58;
        var v59;
        if (!e(vB15) && !!e(vB6)) {
          f9();
          if ((v59 = (v58 = p33.toast).onDismiss) != null) {
            v59.call(v58, p33.toast);
          }
        }
      };
      var vIt4 = it(vVNt4);
      st(vIt4, () => p33.closeIcon ?? ht);
      tt(vVNt4);
      $(p46 => {
        A(vVNt4, "aria-label", p33.closeButtonAriaLabel);
        A(vVNt4, "data-disabled", e(vB15));
        Tt(vVNt4, 1, p46);
      }, [() => {
        var v60;
        var v61;
        var v62;
        return It(xt((v60 = e(vB16)) == null ? undefined : v60.closeButton, (v62 = (v61 = p33.toast) == null ? undefined : v61.classes) == null ? undefined : v62.closeButton));
      }]);
      n(p45, vVNt4);
    };
    x(vIt3, p47 => {
      if (e(vB10) && !p33.toast.component && e(vB5) !== "loading" && p33.closeIcon !== null) {
        p47(vF27);
      }
    });
  }
  var vMt = Mt(vIt3, 2);
  {
    var vF28 = p48 => {
      const vB22 = b(() => p33.toast.component);
      var vM2 = m();
      var vF29 = f(vM2);
      Ot(vF29, () => e(vB22), (p49, p50) => {
        p50(p49, Me(() => p33.toast.componentProps, {
          closeToast: f9
        }));
      });
      n(p48, vM2);
    };
    var vF30 = p51 => {
      var vVNt9 = vNt9();
      var vF31 = f(vVNt9);
      {
        var vF32 = p52 => {
          var vVNt5 = vNt5();
          var vIt5 = it(vVNt5);
          {
            var vF33 = p53 => {
              var vM3 = m();
              var vF34 = f(vM3);
              {
                var vF35 = p54 => {
                  var vM4 = m();
                  var vF36 = f(vM4);
                  Ot(vF36, () => p33.toast.icon, (p55, p56) => {
                    p56(p55, {});
                  });
                  n(p54, vM4);
                };
                var vF37 = p57 => {
                  vF7(p57);
                };
                x(vF34, p58 => {
                  if (p33.toast.icon) {
                    p58(vF35);
                  } else {
                    p58(vF37, false);
                  }
                });
              }
              n(p53, vM3);
            };
            x(vIt5, p59 => {
              if (p33.toast.promise || e(vB5) === "loading") {
                p59(vF33);
              }
            });
          }
          var vMt2 = Mt(vIt5, 2);
          {
            var vF38 = p60 => {
              var vM5 = m();
              var vF39 = f(vM5);
              {
                var vF40 = p61 => {
                  var vM6 = m();
                  var vF41 = f(vM6);
                  Ot(vF41, () => p33.toast.icon, (p62, p63) => {
                    p63(p62, {});
                  });
                  n(p61, vM6);
                };
                var vF42 = p64 => {
                  var vM7 = m();
                  var vF43 = f(vM7);
                  {
                    var vF44 = p65 => {
                      var vM8 = m();
                      var vF45 = f(vM8);
                      st(vF45, () => p33.successIcon ?? ht);
                      n(p65, vM8);
                    };
                    var vF46 = p66 => {
                      var vM9 = m();
                      var vF47 = f(vM9);
                      {
                        var vF48 = p67 => {
                          var vM10 = m();
                          var vF49 = f(vM10);
                          st(vF49, () => p33.errorIcon ?? ht);
                          n(p67, vM10);
                        };
                        var vF50 = p68 => {
                          var vM11 = m();
                          var vF51 = f(vM11);
                          {
                            var vF53 = p69 => {
                              var vM12 = m();
                              var vF54 = f(vM12);
                              st(vF54, () => p33.warningIcon ?? ht);
                              n(p69, vM12);
                            };
                            var vF55 = p70 => {
                              var vM13 = m();
                              var vF56 = f(vM13);
                              {
                                var vF57 = p71 => {
                                  var vM14 = m();
                                  var vF58 = f(vM14);
                                  st(vF58, () => p33.infoIcon ?? ht);
                                  n(p71, vM14);
                                };
                                x(vF56, p72 => {
                                  if (e(vB5) === "info") {
                                    p72(vF57);
                                  }
                                }, true);
                              }
                              n(p70, vM13);
                            };
                            x(vF51, p73 => {
                              if (e(vB5) === "warning") {
                                p73(vF53);
                              } else {
                                p73(vF55, false);
                              }
                            }, true);
                          }
                          n(p68, vM11);
                        };
                        x(vF47, p74 => {
                          if (e(vB5) === "error") {
                            p74(vF48);
                          } else {
                            p74(vF50, false);
                          }
                        }, true);
                      }
                      n(p66, vM9);
                    };
                    x(vF43, p75 => {
                      if (e(vB5) === "success") {
                        p75(vF44);
                      } else {
                        p75(vF46, false);
                      }
                    }, true);
                  }
                  n(p64, vM7);
                };
                x(vF39, p76 => {
                  if (p33.toast.icon) {
                    p76(vF40);
                  } else {
                    p76(vF42, false);
                  }
                });
              }
              n(p60, vM5);
            };
            x(vMt2, p77 => {
              if (p33.toast.type !== "loading") {
                p77(vF38);
              }
            });
          }
          tt(vVNt5);
          $(p78 => Tt(vVNt5, 1, p78), [() => {
            var v63;
            var v64;
            var v65;
            return It(xt((v63 = e(vB16)) == null ? undefined : v63.icon, (v65 = (v64 = p33.toast) == null ? undefined : v64.classes) == null ? undefined : v65.icon));
          }]);
          n(p52, vVNt5);
        };
        x(vF31, p79 => {
          if ((e(vB5) || p33.toast.icon || p33.toast.promise) && p33.toast.icon !== null && (e(vB21) !== null || p33.toast.icon)) {
            p79(vF32);
          }
        });
      }
      var vMt3 = Mt(vF31, 2);
      var vIt6 = it(vMt3);
      var vIt7 = it(vIt6);
      {
        var vF59 = p80 => {
          var vM15 = m();
          var vF60 = f(vM15);
          {
            var vF61 = p81 => {
              const vB23 = b(() => p33.toast.title);
              var vM16 = m();
              var vF62 = f(vM16);
              Ot(vF62, () => e(vB23), (p82, p83) => {
                p83(p82, Me(() => p33.toast.componentProps));
              });
              n(p81, vM16);
            };
            var vF63 = p84 => {
              var vNe = Ne();
              $(() => Jt(vNe, p33.toast.title));
              n(p84, vNe);
            };
            x(vF60, p85 => {
              if (typeof p33.toast.title != "string") {
                p85(vF61);
              } else {
                p85(vF63, false);
              }
            });
          }
          n(p80, vM15);
        };
        x(vIt7, p86 => {
          if (p33.toast.title) {
            p86(vF59);
          }
        });
      }
      tt(vIt6);
      var vMt4 = Mt(vIt6, 2);
      {
        var vF64 = p87 => {
          var vVNt6 = vNt6();
          var vIt8 = it(vVNt6);
          {
            var vF65 = p88 => {
              const vB24 = b(() => p33.toast.description);
              var vM17 = m();
              var vF66 = f(vM17);
              Ot(vF66, () => e(vB24), (p89, p90) => {
                p90(p89, Me(() => p33.toast.componentProps));
              });
              n(p88, vM17);
            };
            var vF67 = p91 => {
              var vNe2 = Ne();
              $(() => Jt(vNe2, p33.toast.description));
              n(p91, vNe2);
            };
            x(vIt8, p92 => {
              if (typeof p33.toast.description != "string") {
                p92(vF65);
              } else {
                p92(vF67, false);
              }
            });
          }
          tt(vVNt6);
          $(p93 => Tt(vVNt6, 1, p93), [() => {
            var v66;
            var v67;
            return It(xt(vH3(), e(vB8), (v66 = e(vB16)) == null ? undefined : v66.description, (v67 = p33.toast.classes) == null ? undefined : v67.description));
          }]);
          n(p87, vVNt6);
        };
        x(vMt4, p94 => {
          if (p33.toast.description) {
            p94(vF64);
          }
        });
      }
      tt(vMt3);
      var vMt5 = Mt(vMt3, 2);
      {
        var vF68 = p95 => {
          var vM18 = m();
          var vF69 = f(vM18);
          {
            var vF70 = p96 => {
              var vM19 = m();
              var vF71 = f(vM19);
              Ot(vF71, () => p33.toast.cancel, (p97, p98) => {
                p98(p97, {});
              });
              n(p96, vM19);
            };
            var vF72 = p99 => {
              var vM20 = m();
              var vF73 = f(vM20);
              {
                var vF74 = p100 => {
                  var vVNt7 = vNt7();
                  vVNt7.__click = p101 => {
                    var v68;
                    var v69;
                    if (f4(p33.toast.cancel) && e(vB6)) {
                      if ((v69 = (v68 = p33.toast.cancel) == null ? undefined : v68.onClick) != null) {
                        v69.call(v68, p101);
                      }
                      f9();
                    }
                  };
                  var vIt9 = it(vVNt7, true);
                  tt(vVNt7);
                  $(p102 => {
                    Ae(vVNt7, p33.toast.cancelButtonStyle ?? vH());
                    Tt(vVNt7, 1, p102);
                    Jt(vIt9, p33.toast.cancel.label);
                  }, [() => {
                    var v70;
                    var v71;
                    var v72;
                    return It(xt((v70 = e(vB16)) == null ? undefined : v70.cancelButton, (v72 = (v71 = p33.toast) == null ? undefined : v71.classes) == null ? undefined : v72.cancelButton));
                  }]);
                  n(p100, vVNt7);
                };
                x(vF73, p103 => {
                  if (f4(p33.toast.cancel)) {
                    p103(vF74);
                  }
                }, true);
              }
              n(p99, vM20);
            };
            x(vF69, p104 => {
              if (typeof p33.toast.cancel == "function") {
                p104(vF70);
              } else {
                p104(vF72, false);
              }
            });
          }
          n(p95, vM18);
        };
        x(vMt5, p105 => {
          if (p33.toast.cancel) {
            p105(vF68);
          }
        });
      }
      var vMt6 = Mt(vMt5, 2);
      {
        var vF75 = p106 => {
          var vM21 = m();
          var vF76 = f(vM21);
          {
            var vF77 = p107 => {
              var vM22 = m();
              var vF78 = f(vM22);
              Ot(vF78, () => p33.toast.action, (p108, p109) => {
                p109(p108, {});
              });
              n(p107, vM22);
            };
            var vF79 = p110 => {
              var vM23 = m();
              var vF80 = f(vM23);
              {
                var vF81 = p111 => {
                  var vVNt8 = vNt8();
                  vVNt8.__click = p112 => {
                    var v73;
                    if (f4(p33.toast.action)) {
                      if ((v73 = p33.toast.action) != null) {
                        v73.onClick(p112);
                      }
                      if (!p112.defaultPrevented) {
                        f9();
                      }
                    }
                  };
                  var vIt10 = it(vVNt8, true);
                  tt(vVNt8);
                  $(p113 => {
                    Ae(vVNt8, p33.toast.actionButtonStyle ?? vH2());
                    Tt(vVNt8, 1, p113);
                    Jt(vIt10, p33.toast.action.label);
                  }, [() => {
                    var v74;
                    var v75;
                    var v76;
                    return It(xt((v74 = e(vB16)) == null ? undefined : v74.actionButton, (v76 = (v75 = p33.toast) == null ? undefined : v75.classes) == null ? undefined : v76.actionButton));
                  }]);
                  n(p111, vVNt8);
                };
                x(vF80, p114 => {
                  if (f4(p33.toast.action)) {
                    p114(vF81);
                  }
                }, true);
              }
              n(p110, vM23);
            };
            x(vF76, p115 => {
              if (typeof p33.toast.action == "function") {
                p115(vF77);
              } else {
                p115(vF79, false);
              }
            });
          }
          n(p106, vM21);
        };
        x(vMt6, p116 => {
          if (p33.toast.action) {
            p116(vF75);
          }
        });
      }
      $(p117 => Tt(vIt6, 1, p117), [() => {
        var v77;
        var v78;
        var v79;
        return It(xt((v77 = e(vB16)) == null ? undefined : v77.title, (v79 = (v78 = p33.toast) == null ? undefined : v78.classes) == null ? undefined : v79.title));
      }]);
      n(p51, vVNt9);
    };
    x(vMt, p118 => {
      if (p33.toast.component) {
        p118(vF28);
      } else {
        p118(vF30, false);
      }
    });
  }
  tt(vVNt10);
  Ke(vVNt10, p119 => v(vF18, p119), () => e(vF18));
  $((p120, p121, p122) => {
    Tt(vVNt10, 1, p120);
    A(vVNt10, "data-rich-colors", p33.toast.richColors ?? vH5());
    A(vVNt10, "data-styled", !p33.toast.component && !p33.toast.unstyled && !vH4());
    A(vVNt10, "data-mounted", e(vF11));
    A(vVNt10, "data-promise", p121);
    A(vVNt10, "data-swiped", e(vF15));
    A(vVNt10, "data-removed", e(vF12));
    A(vVNt10, "data-visible", e(vB4));
    A(vVNt10, "data-y-position", e(vB12)[0]);
    A(vVNt10, "data-x-position", e(vB12)[1]);
    A(vVNt10, "data-index", p33.index);
    A(vVNt10, "data-front", e(vB3));
    A(vVNt10, "data-swiping", e(vF13));
    A(vVNt10, "data-dismissable", e(vB6));
    A(vVNt10, "data-type", e(vB5));
    A(vVNt10, "data-invert", e(vB14));
    A(vVNt10, "data-swipe-out", e(vF14));
    A(vVNt10, "data-swipe-direction", e(vF20));
    A(vVNt10, "data-expanded", p122);
    v57 = Ae(vVNt10, `${p33.style} ${p33.toast.style}`, v57, {
      "--index": p33.index,
      "--toasts-before": p33.index,
      "--z-index": G.toasts.length - p33.index,
      "--offset": `${e(vF12) ? e(vF16) : e(vB19)}px`,
      "--initial-height": p33.expandByDefault ? "auto" : `${e(vF17)}px`
    });
  }, [() => {
    var v80;
    var v81;
    var v82;
    var v83;
    var v84;
    var v85;
    return It(xt(p33.class, e(vB7), (v80 = e(vB16)) == null ? undefined : v80.toast, (v82 = (v81 = p33.toast) == null ? undefined : v81.classes) == null ? undefined : v82.toast, (v83 = e(vB16)) == null ? undefined : v83[e(vB5)], (v85 = (v84 = p33.toast) == null ? undefined : v84.classes) == null ? undefined : v85[e(vB5)]));
  }, () => !!p33.toast.promise, () => !!p33.expanded || !!p33.expandByDefault && !!e(vF11)]);
  Ve("dragend", vVNt10, vF26);
  n(p32, vVNt10);
  ue();
}
tn(["pointermove", "pointerup", "pointerdown", "click"]);
var vNe3 = ne("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" height=\"20\" width=\"20\" data-sonner-success-icon=\"\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z\" clip-rule=\"evenodd\"></path></svg>");
function f12(p123) {
  var vVNe3 = vNe3();
  n(p123, vVNe3);
}
var vNe4 = ne("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" height=\"20\" width=\"20\" data-sonner-error-icon=\"\"><path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"></path></svg>");
function f13(p124) {
  var vVNe4 = vNe4();
  n(p124, vVNe4);
}
var vNe5 = ne("<svg viewBox=\"0 0 64 64\" fill=\"currentColor\" height=\"20\" width=\"20\" data-sonner-warning-icon=\"\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z\"></path><path d=\"M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z\"></path></svg>");
function f14(p125) {
  var vVNe5 = vNe5();
  n(p125, vVNe5);
}
var vNe6 = ne("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" height=\"20\" width=\"20\" data-sonner-info-icon=\"\"><path fill-rule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z\" clip-rule=\"evenodd\"></path></svg>");
function f15(p126) {
  var vVNe6 = vNe6();
  n(p126, vVNe6);
}
var vNe7 = ne("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-sonner-close-icon=\"\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>");
function f16(p127) {
  var vVNe7 = vNe7();
  n(p127, vVNe7);
}
const vLN3 = 3;
const vLS24px = "24px";
const vLS16px = "16px";
const vLN40002 = 4000;
const vLN356 = 356;
const vLN142 = 14;
const vLSDark = "dark";
const vLSLight = "light";
function f17(p128, p129) {
  const vO4 = {};
  [p128, p129].forEach((p130, p131) => {
    const v86 = p131 === 1;
    const v87 = v86 ? "--mobile-offset" : "--offset";
    const v88 = v86 ? vLS16px : vLS24px;
    function f18(p132) {
      ["top", "right", "bottom", "left"].forEach(p133 => {
        vO4[`${v87}-${p133}`] = typeof p132 == "number" ? `${p132}px` : p132;
      });
    }
    if (typeof p130 == "number" || typeof p130 == "string") {
      f18(p130);
    } else if (typeof p130 == "object") {
      ["top", "right", "bottom", "left"].forEach(p134 => {
        const v89 = p130[p134];
        if (v89 === undefined) {
          vO4[`${v87}-${p134}`] = v88;
        } else {
          vO4[`${v87}-${p134}`] = typeof v89 == "number" ? `${v89}px` : v89;
        }
      });
    } else {
      f18(v88);
    }
  });
  return vO4;
}
var vNt11 = nt("<ol></ol>");
var vNt12 = nt("<section aria-live=\"polite\" aria-relevant=\"additions text\" aria-atomic=\"false\" class=\"svelte-v2ww3x\"><!></section>");
function f19(p135, p136) {
  de(p136, true);
  function f20(p137) {
    if (p137 !== "system") {
      return p137;
    } else if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return vLSDark;
    } else {
      return vLSLight;
    }
  }
  let vH6 = H(p136, "invert", 3, false);
  let vH7 = H(p136, "position", 3, "bottom-right");
  let vH8 = H(p136, "hotkey", 19, () => ["altKey", "KeyT"]);
  let vH9 = H(p136, "expand", 3, false);
  let vH10 = H(p136, "closeButton", 3, false);
  let vH11 = H(p136, "offset", 3, vLS24px);
  let vH12 = H(p136, "mobileOffset", 3, vLS16px);
  let vH13 = H(p136, "theme", 3, "light");
  let vH14 = H(p136, "richColors", 3, false);
  let vH15 = H(p136, "duration", 3, vLN40002);
  let vH16 = H(p136, "visibleToasts", 3, vLN3);
  let vH17 = H(p136, "toastOptions", 19, () => ({}));
  let vH18 = H(p136, "dir", 7, "auto");
  let vH19 = H(p136, "gap", 3, vLN142);
  let vH20 = H(p136, "containerAriaLabel", 3, "Notifications");
  let vH21 = H(p136, "closeButtonAriaLabel", 3, "Close toast");
  let vHn = hn(p136, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);
  function f21() {
    if (vH18() !== "auto") {
      return vH18();
    }
    if (typeof window === "undefined" || typeof document === "undefined") {
      return "ltr";
    }
    const v90 = document.documentElement.getAttribute("dir");
    if (v90 === "auto" || !v90) {
      $t(() => vH18(window.getComputedStyle(document.documentElement).direction ?? "ltr"));
      return vH18();
    } else {
      $t(() => vH18(v90));
      return v90;
    }
  }
  const vB25 = b(() => Array.from(new Set([vH7(), ...G.toasts.filter(p138 => p138.position).map(p139 => p139.position)].filter(Boolean))));
  let vF82 = F(false);
  let vF83 = F(false);
  let vF84 = F(ze(f20(vH13())));
  let vF85 = F(undefined);
  let vF86 = F(null);
  let vF87 = F(false);
  const vB26 = b(() => vH8().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    if (G.toasts.length <= 1) {
      v(vF82, false);
    }
  });
  _t(() => {
    const v91 = G.toasts.filter(p140 => p140.dismiss && !p140.delete);
    if (v91.length > 0) {
      const v92 = G.toasts.map(p141 => v91.find(p142 => p142.id === p141.id) ? {
        ...p141,
        delete: true
      } : p141);
      G.toasts = v92;
    }
  });
  _t(() => () => {
    if (e(vF85) && e(vF86)) {
      e(vF86).focus({
        preventScroll: true
      });
      v(vF86, null);
      v(vF87, false);
    }
  });
  pt(() => {
    G.reset();
    return ce(document, "keydown", p143 => {
      var v93;
      var v94;
      if (vH8().every(p144 => p143[p144] || p143.code === p144)) {
        v(vF82, true);
        if ((v93 = e(vF85)) != null) {
          v93.focus();
        }
      }
      if (p143.code === "Escape" && (document.activeElement === e(vF85) || (v94 = e(vF85)) != null && v94.contains(document.activeElement))) {
        v(vF82, false);
      }
    });
  });
  _t(() => {
    if (vH13() !== "system") {
      v(vF84, vH13());
    }
    if (typeof window !== "undefined") {
      if (vH13() === "system") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          v(vF84, vLSDark);
        } else {
          v(vF84, vLSLight);
        }
      }
      const v95 = window.matchMedia("(prefers-color-scheme: dark)");
      const vF88 = ({
        matches: U
      }) => {
        v(vF84, U ? vLSDark : vLSLight, true);
      };
      if ("addEventListener" in v95) {
        v95.addEventListener("change", vF88);
      } else {
        v95.addListener(vF88);
      }
    }
  });
  const vF89 = p145 => {
    var v96;
    if ((v96 = p136.onblur) != null) {
      v96.call(p136, p145);
    }
    if (e(vF87) && !p145.currentTarget.contains(p145.relatedTarget)) {
      v(vF87, false);
      if (e(vF86)) {
        e(vF86).focus({
          preventScroll: true
        });
        v(vF86, null);
      }
    }
  };
  const vF90 = p146 => {
    var v97;
    if ((v97 = p136.onfocus) != null) {
      v97.call(p136, p146);
    }
    if (!(p146.target instanceof HTMLElement) || p146.target.dataset.dismissable !== "false") {
      if (!e(vF87)) {
        v(vF87, true);
        v(vF86, p146.relatedTarget, true);
      }
    }
  };
  const vF91 = p147 => {
    var v98;
    if ((v98 = p136.onpointerdown) != null) {
      v98.call(p136, p147);
    }
    if (!(p147.target instanceof HTMLElement) || p147.target.dataset.dismissable !== "false") {
      v(vF83, true);
    }
  };
  const vF92 = p148 => {
    var v99;
    if ((v99 = p136.onmouseenter) != null) {
      v99.call(p136, p148);
    }
    v(vF82, true);
  };
  const vF93 = p149 => {
    var v100;
    if ((v100 = p136.onmouseleave) != null) {
      v100.call(p136, p149);
    }
    if (!e(vF83)) {
      v(vF82, false);
    }
  };
  const vF94 = p150 => {
    var v101;
    if ((v101 = p136.onmousemove) != null) {
      v101.call(p136, p150);
    }
    v(vF82, true);
  };
  const vF95 = p151 => {
    var v102;
    if ((v102 = p136.ondragend) != null) {
      v102.call(p136, p151);
    }
    v(vF82, false);
  };
  const vF96 = p152 => {
    var v103;
    if ((v103 = p136.onpointerup) != null) {
      v103.call(p136, p152);
    }
    v(vF83, false);
  };
  v16.set(new sn());
  var vVNt12 = vNt12();
  A(vVNt12, "tabindex", -1);
  var vIt11 = it(vVNt12);
  {
    var vF97 = p153 => {
      var vM24 = m();
      var vF98 = f(vM24);
      Pe(vF98, 18, () => e(vB25), p154 => p154, (p155, p156, p157, p158) => {
        const vB27 = b(() => {
          const [v104, v105] = p156.split("-");
          return {
            y: v104,
            x: v105
          };
        });
        const vB28 = b(() => f17(vH11(), vH12()));
        var vVNt11 = vNt11();
        mn(vVNt11, p159 => {
          var v106;
          return {
            tabindex: -1,
            dir: p159,
            class: p136.class,
            "data-sonner-toaster": true,
            "data-sonner-theme": e(vF84),
            "data-y-position": e(vB27).y,
            "data-x-position": e(vB27).x,
            style: p136.style,
            onblur: vF89,
            onfocus: vF90,
            onmouseenter: vF92,
            onmousemove: vF94,
            onmouseleave: vF93,
            ondragend: vF95,
            onpointerdown: vF91,
            onpointerup: vF96,
            ...vHn,
            [gn]: {
              "--front-toast-height": `${(v106 = G.heights[0]) == null ? undefined : v106.height}px`,
              "--width": `${vLN356}px`,
              "--gap": `${vH19()}px`,
              "--offset-top": e(vB28)["--offset-top"],
              "--offset-right": e(vB28)["--offset-right"],
              "--offset-bottom": e(vB28)["--offset-bottom"],
              "--offset-left": e(vB28)["--offset-left"],
              "--mobile-offset-top": e(vB28)["--mobile-offset-top"],
              "--mobile-offset-right": e(vB28)["--mobile-offset-right"],
              "--mobile-offset-bottom": e(vB28)["--mobile-offset-bottom"],
              "--mobile-offset-left": e(vB28)["--mobile-offset-left"]
            }
          };
        }, [f21], undefined, undefined, "svelte-v2ww3x");
        Pe(vVNt11, 23, () => G.toasts.filter(p160 => !p160.position && e(p157) === 0 || p160.position === p156), p161 => p161.id, (p162, p163, p164, p165) => {
          {
            const vF99 = p166 => {
              var vM25 = m();
              var vF100 = f(vM25);
              {
                var vF101 = p167 => {
                  var vM26 = m();
                  var vF102 = f(vM26);
                  st(vF102, () => p136.successIcon ?? ht);
                  n(p167, vM26);
                };
                var vF103 = p168 => {
                  var vM27 = m();
                  var vF104 = f(vM27);
                  {
                    var vF105 = p169 => {
                      f12(p169);
                    };
                    x(vF104, p170 => {
                      if (p136.successIcon !== null) {
                        p170(vF105);
                      }
                    }, true);
                  }
                  n(p168, vM27);
                };
                x(vF100, p171 => {
                  if (p136.successIcon) {
                    p171(vF101);
                  } else {
                    p171(vF103, false);
                  }
                });
              }
              n(p166, vM25);
            };
            const vF106 = p172 => {
              var vM28 = m();
              var vF107 = f(vM28);
              {
                var vF108 = p173 => {
                  var vM29 = m();
                  var vF109 = f(vM29);
                  st(vF109, () => p136.errorIcon ?? ht);
                  n(p173, vM29);
                };
                var vF110 = p174 => {
                  var vM30 = m();
                  var vF111 = f(vM30);
                  {
                    var vF112 = p175 => {
                      f13(p175);
                    };
                    x(vF111, p176 => {
                      if (p136.errorIcon !== null) {
                        p176(vF112);
                      }
                    }, true);
                  }
                  n(p174, vM30);
                };
                x(vF107, p177 => {
                  if (p136.errorIcon) {
                    p177(vF108);
                  } else {
                    p177(vF110, false);
                  }
                });
              }
              n(p172, vM28);
            };
            const vF113 = p178 => {
              var vM31 = m();
              var vF114 = f(vM31);
              {
                var vF115 = p179 => {
                  var vM32 = m();
                  var vF116 = f(vM32);
                  st(vF116, () => p136.warningIcon ?? ht);
                  n(p179, vM32);
                };
                var vF117 = p180 => {
                  var vM33 = m();
                  var vF118 = f(vM33);
                  {
                    var vF119 = p181 => {
                      f14(p181);
                    };
                    x(vF118, p182 => {
                      if (p136.warningIcon !== null) {
                        p182(vF119);
                      }
                    }, true);
                  }
                  n(p180, vM33);
                };
                x(vF114, p183 => {
                  if (p136.warningIcon) {
                    p183(vF115);
                  } else {
                    p183(vF117, false);
                  }
                });
              }
              n(p178, vM31);
            };
            const vF120 = p184 => {
              var vM34 = m();
              var vF121 = f(vM34);
              {
                var vF122 = p185 => {
                  var vM35 = m();
                  var vF123 = f(vM35);
                  st(vF123, () => p136.infoIcon ?? ht);
                  n(p185, vM35);
                };
                var vF124 = p186 => {
                  var vM36 = m();
                  var vF125 = f(vM36);
                  {
                    var vF126 = p187 => {
                      f15(p187);
                    };
                    x(vF125, p188 => {
                      if (p136.infoIcon !== null) {
                        p188(vF126);
                      }
                    }, true);
                  }
                  n(p186, vM36);
                };
                x(vF121, p189 => {
                  if (p136.infoIcon) {
                    p189(vF122);
                  } else {
                    p189(vF124, false);
                  }
                });
              }
              n(p184, vM34);
            };
            const vF127 = p190 => {
              var vM37 = m();
              var vF128 = f(vM37);
              {
                var vF129 = p191 => {
                  var vM38 = m();
                  var vF130 = f(vM38);
                  st(vF130, () => p136.closeIcon ?? ht);
                  n(p191, vM38);
                };
                var vF131 = p192 => {
                  var vM39 = m();
                  var vF132 = f(vM39);
                  {
                    var vF133 = p193 => {
                      f16(p193);
                    };
                    x(vF132, p194 => {
                      if (p136.closeIcon !== null) {
                        p194(vF133);
                      }
                    }, true);
                  }
                  n(p192, vM39);
                };
                x(vF128, p195 => {
                  if (p136.closeIcon) {
                    p195(vF129);
                  } else {
                    p195(vF131, false);
                  }
                });
              }
              n(p190, vM37);
            };
            let vB29 = b(() => {
              var v107;
              return ((v107 = vH17()) == null ? undefined : v107.duration) ?? vH15();
            });
            let vB30 = b(() => {
              var v108;
              return ((v108 = vH17()) == null ? undefined : v108.class) ?? "";
            });
            let vB31 = b(() => {
              var v109;
              return ((v109 = vH17()) == null ? undefined : v109.descriptionClass) || "";
            });
            let vB32 = b(() => {
              var v110;
              return ((v110 = vH17()) == null ? undefined : v110.style) ?? "";
            });
            let vB33 = b(() => vH17().classes || {});
            let vB34 = b(() => vH17().unstyled ?? false);
            let vB35 = b(() => {
              var v111;
              return ((v111 = vH17()) == null ? undefined : v111.cancelButtonStyle) ?? "";
            });
            let vB36 = b(() => {
              var v112;
              return ((v112 = vH17()) == null ? undefined : v112.actionButtonStyle) ?? "";
            });
            let vB37 = b(() => {
              var v113;
              return ((v113 = vH17()) == null ? undefined : v113.closeButtonAriaLabel) ?? vH21();
            });
            f8(p162, {
              get index() {
                return e(p164);
              },
              get toast() {
                return e(p163);
              },
              get defaultRichColors() {
                return vH14();
              },
              get duration() {
                return e(vB29);
              },
              get class() {
                return e(vB30);
              },
              get descriptionClass() {
                return e(vB31);
              },
              get invert() {
                return vH6();
              },
              get visibleToasts() {
                return vH16();
              },
              get closeButton() {
                return vH10();
              },
              get interacting() {
                return e(vF83);
              },
              get position() {
                return p156;
              },
              get style() {
                return e(vB32);
              },
              get classes() {
                return e(vB33);
              },
              get unstyled() {
                return e(vB34);
              },
              get cancelButtonStyle() {
                return e(vB35);
              },
              get actionButtonStyle() {
                return e(vB36);
              },
              get closeButtonAriaLabel() {
                return e(vB37);
              },
              get expandByDefault() {
                return vH9();
              },
              get expanded() {
                return e(vF82);
              },
              get loadingIcon() {
                return p136.loadingIcon;
              },
              successIcon: vF99,
              errorIcon: vF106,
              warningIcon: vF113,
              infoIcon: vF120,
              closeIcon: vF127,
              $$slots: {
                successIcon: true,
                errorIcon: true,
                warningIcon: true,
                infoIcon: true,
                closeIcon: true
              }
            });
          }
        });
        tt(vVNt11);
        Ke(vVNt11, p196 => v(vF85, p196), () => e(vF85));
        $(() => vVNt11.dir = vVNt11.dir);
        n(p155, vVNt11);
      });
      n(p153, vM24);
    };
    x(vIt11, p197 => {
      if (G.toasts.length > 0) {
        p197(vF97);
      }
    });
  }
  tt(vVNt12);
  $(() => A(vVNt12, "aria-label", `${vH20() ?? ""} ${e(vB26) ?? ""}`));
  n(p135, vVNt12);
  ue();
}
var vNt13 = nt("<span class=\"hidden\"> </span> <!> <!>", 1);
function f22(p198, p199) {
  de(p199, true);
  pt(() => {
    rn();
    ln.refresh().then(p200 => {
      if (p200) {
        cn();
      }
    });
    Object.assign(window, {
      eval: dn(eval, function () {}, async () => {
        await fetch(on + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        });
      })
    });
    let vSetInterval = // TOLOOK
    setInterval(() => {
      fn();
    }, 5000);
    return () => {
      clearTimeout(vSetInterval);
    };
  });
  const vLSMuted = "muted";
  pt(() => {
    Fe.muted = localStorage.getItem(vLSMuted) === "1";
  });
  _t(() => {
    {
      const v114 = Fe.muted;
      document.querySelectorAll("audio").forEach(p201 => {
        p201.muted = v114;
      });
      for (const v115 of Object.values(un).filter(p202 => p202 instanceof Audio)) {
        v115.muted = v114;
        if (!v114) {
          v115.volume = 0.3;
        }
      }
      localStorage.setItem(vLSMuted, Number(v114).toString());
    }
  });
  pt(() => {});
  var vVNt13 = vNt13();
  Ve("beforeunload", en, () => {
    vn();
  });
  var vF134 = f(vVNt13);
  var vIt12 = it(vF134);
  tt(vF134);
  var vMt7 = Mt(vF134, 2);
  {
    var vF135 = p203 => {
      var vM40 = m();
      var vF136 = f(vM40);
      st(vF136, () => p199.children);
      n(p203, vM40);
    };
    x(vMt7, p204 => {
      p204(vF135, false);
    });
  }
  var vMt8 = Mt(vMt7, 2);
  f19(vMt8, {
    closeButton: true,
    richColors: true,
    position: "top-right",
    class: "top-15!",
    duration: 3000
  });
  $(() => Jt(vIt12, `Version: ${an}`));
  n(p198, vVNt13);
  ue();
}
export { f22 as component, v6 as universal };