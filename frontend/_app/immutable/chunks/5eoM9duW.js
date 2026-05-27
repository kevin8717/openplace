(function () {
  try {
    var v2 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    v2.SENTRY_RELEASE = {
      id: ""
    };
  } catch {}
})();
try {
  (function () {
    var v3 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    var v4 = new v3.Error().stack;
    if (v4) {
      v3._sentryDebugIds = v3._sentryDebugIds || {};
      v3._sentryDebugIds[v4] = "a67559b4-4753-4319-aa2a-450e38f60b38";
      v3._sentryDebugIdIdentifier = "sentry-dbid-a67559b4-4753-4319-aa2a-450e38f60b38";
    }
  })();
} catch {}
const v5 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const vGlobalThis = globalThis;
const vLS10250 = "10.25.0";
function f2() {
  f3(vGlobalThis);
  return vGlobalThis;
}
function f3(p2) {
  const v6 = p2.__SENTRY__ = p2.__SENTRY__ || {};
  v6.version = v6.version || vLS10250;
  return v6[vLS10250] = v6[vLS10250] || {};
}
function f4(p3, p4, p5 = vGlobalThis) {
  const v7 = p5.__SENTRY__ = p5.__SENTRY__ || {};
  const v8 = v7[vLS10250] = v7[vLS10250] || {};
  return v8[p3] ||= p4();
}
const vA = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const vLSSentryLogger = "Sentry Logger ";
const vO = {};
function f5(p6) {
  if (!("console" in vGlobalThis)) {
    return p6();
  }
  const v9 = vGlobalThis.console;
  const vO2 = {};
  const v10 = Object.keys(vO);
  v10.forEach(p7 => {
    const v11 = vO[p7];
    vO2[p7] = v9[p7];
    v9[p7] = v11;
  });
  try {
    return p6();
  } finally {
    v10.forEach(p8 => {
      v9[p8] = vO2[p8];
    });
  }
}
function f6() {
  f13().enabled = true;
}
function f7() {
  f13().enabled = false;
}
function f8() {
  return f13().enabled;
}
function f9(...t) {
  f12("log", ...t);
}
function f10(...t) {
  f12("warn", ...t);
}
function f11(...t) {
  f12("error", ...t);
}
function f12(p9, ...e) {
  if (v5 && f8()) {
    f5(() => {
      vGlobalThis.console[p9](`${vLSSentryLogger}[${p9}]:`, ...e);
    });
  }
}
function f13() {
  if (v5) {
    return f4("loggerSettings", () => ({
      enabled: false
    }));
  } else {
    return {
      enabled: false
    };
  }
}
const vO3 = {
  enable: f6,
  disable: f7,
  isEnabled: f8,
  log: f9,
  warn: f10,
  error: f11
};
const vLN50 = 50;
const vLS = "?";
const v12 = /\(error: (.*)\)/;
const v13 = /captureMessage|captureException/;
function f14(...t) {
  const v14 = t.sort((p10, p11) => p10[0] - p11[0]).map(p12 => p12[1]);
  return (p13, p14 = 0, p15 = 0) => {
    const vA2 = [];
    const v15 = p13.split(`
`);
    for (let vP14 = p14; vP14 < v15.length; vP14++) {
      let v16 = v15[vP14];
      if (v16.length > 1024) {
        v16 = v16.slice(0, 1024);
      }
      const v17 = v12.test(v16) ? v16.replace(v12, "$1") : v16;
      if (!v17.match(/\S*Error: /)) {
        for (const v18 of v14) {
          const vV18 = v18(v17);
          if (vV18) {
            vA2.push(vV18);
            break;
          }
        }
        if (vA2.length >= vLN50 + p15) {
          break;
        }
      }
    }
    return f16(vA2.slice(p15));
  };
}
function f15(p16) {
  if (Array.isArray(p16)) {
    return f14(...p16);
  } else {
    return p16;
  }
}
function f16(p17) {
  if (!p17.length) {
    return [];
  }
  const v19 = Array.from(p17);
  if (/sentryWrapped/.test(f17(v19).function || "")) {
    v19.pop();
  }
  v19.reverse();
  if (v13.test(f17(v19).function || "")) {
    v19.pop();
    if (v13.test(f17(v19).function || "")) {
      v19.pop();
    }
  }
  return v19.slice(0, vLN50).map(p18 => ({
    ...p18,
    filename: p18.filename || f17(v19).filename,
    function: p18.function || vLS
  }));
}
function f17(p19) {
  return p19[p19.length - 1] || {};
}
const vLSanonymous = "<anonymous>";
function f18(p20) {
  try {
    if (!p20 || typeof p20 != "function") {
      return vLSanonymous;
    } else {
      return p20.name || vLSanonymous;
    }
  } catch {
    return vLSanonymous;
  }
}
function f19(p21) {
  const v20 = p21.exception;
  if (v20) {
    const vA3 = [];
    try {
      v20.values.forEach(p22 => {
        if (p22.stacktrace.frames) {
          vA3.push(...p22.stacktrace.frames);
        }
      });
      return vA3;
    } catch {
      return;
    }
  }
}
const v21 = Object.prototype.toString;
function f20(p23) {
  switch (v21.call(p23)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return f34(p23, Error);
  }
}
function f21(p24, p25) {
  return v21.call(p24) === `[object ${p25}]`;
}
function f22(p26) {
  return f21(p26, "ErrorEvent");
}
function f23(p27) {
  return f21(p27, "DOMError");
}
function f24(p28) {
  return f21(p28, "DOMException");
}
function f25(p29) {
  return f21(p29, "String");
}
function f26(p30) {
  return typeof p30 == "object" && p30 !== null && "__sentry_template_string__" in p30 && "__sentry_template_values__" in p30;
}
function f27(p31) {
  return p31 === null || f26(p31) || typeof p31 != "object" && typeof p31 != "function";
}
function f28(p32) {
  return f21(p32, "Object");
}
function f29(p33) {
  return typeof Event !== "undefined" && f34(p33, Event);
}
function f30(p34) {
  return typeof Element !== "undefined" && f34(p34, Element);
}
function f31(p35) {
  return f21(p35, "RegExp");
}
function f32(p36) {
  return p36 != null && !!p36.then && typeof p36.then == "function";
}
function f33(p37) {
  return f28(p37) && "nativeEvent" in p37 && "preventDefault" in p37 && "stopPropagation" in p37;
}
function f34(p38, p39) {
  try {
    return p38 instanceof p39;
  } catch {
    return false;
  }
}
function f35(p40) {
  return typeof p40 == "object" && p40 !== null && (!!p40.__isVue || !!p40._isVue);
}
function f36(p41) {
  return typeof Request !== "undefined" && f34(p41, Request);
}
const vVGlobalThis = vGlobalThis;
const vLN80 = 80;
function f37(p42, p43 = {}) {
  if (!p42) {
    return "<unknown>";
  }
  try {
    let vP42 = p42;
    const vLN5 = 5;
    const vA4 = [];
    let vLN0 = 0;
    let vLN02 = 0;
    const vLS2 = " > ";
    const v22 = vLS2.length;
    let v23;
    const v24 = Array.isArray(p43) ? p43 : p43.keyAttrs;
    const v25 = !Array.isArray(p43) && p43.maxStringLength || vLN80;
    while (vP42 && vLN0++ < vLN5 && (v23 = f38(vP42, v24), v23 !== "html" && (!(vLN0 > 1) || !(vLN02 + vA4.length * v22 + v23.length >= v25)))) {
      vA4.push(v23);
      vLN02 += v23.length;
      vP42 = vP42.parentNode;
    }
    return vA4.reverse().join(vLS2);
  } catch {
    return "<unknown>";
  }
}
function f38(p44, p45) {
  const vP44 = p44;
  const vA5 = [];
  if (vP44 == null || !vP44.tagName) {
    return "";
  }
  if (vVGlobalThis.HTMLElement && vP44 instanceof HTMLElement && vP44.dataset) {
    if (vP44.dataset.sentryComponent) {
      return vP44.dataset.sentryComponent;
    }
    if (vP44.dataset.sentryElement) {
      return vP44.dataset.sentryElement;
    }
  }
  vA5.push(vP44.tagName.toLowerCase());
  const v26 = p45 != null && p45.length ? p45.filter(p46 => vP44.getAttribute(p46)).map(p47 => [p47, vP44.getAttribute(p47)]) : null;
  if (v26 != null && v26.length) {
    v26.forEach(p48 => {
      vA5.push(`[${p48[0]}="${p48[1]}"]`);
    });
  } else {
    if (vP44.id) {
      vA5.push(`#${vP44.id}`);
    }
    const v27 = vP44.className;
    if (v27 && f25(v27)) {
      const v28 = v27.split(/\s+/);
      for (const v29 of v28) {
        vA5.push(`.${v29}`);
      }
    }
  }
  const vA6 = ["aria-label", "type", "name", "title", "alt"];
  for (const v30 of vA6) {
    const v31 = vP44.getAttribute(v30);
    if (v31) {
      vA5.push(`[${v30}="${v31}"]`);
    }
  }
  return vA5.join("");
}
function f39() {
  try {
    return vVGlobalThis.document.location.href;
  } catch {
    return "";
  }
}
function f40(p49) {
  if (!vVGlobalThis.HTMLElement) {
    return null;
  }
  let vP49 = p49;
  const vLN52 = 5;
  for (let vLN03 = 0; vLN03 < vLN52; vLN03++) {
    if (!vP49) {
      return null;
    }
    if (vP49 instanceof HTMLElement) {
      if (vP49.dataset.sentryComponent) {
        return vP49.dataset.sentryComponent;
      }
      if (vP49.dataset.sentryElement) {
        return vP49.dataset.sentryElement;
      }
    }
    vP49 = vP49.parentNode;
  }
  return null;
}
function f41(p50, p51, p52) {
  if (!(p51 in p50)) {
    return;
  }
  const v32 = p50[p51];
  if (typeof v32 != "function") {
    return;
  }
  const vP52 = p52(v32);
  if (typeof vP52 == "function") {
    f43(vP52, v32);
  }
  try {
    p50[p51] = vP52;
  } catch {
    if (v5) {
      vO3.log(`Failed to replace method "${p51}" in object`, p50);
    }
  }
}
function f42(p53, p54, p55) {
  try {
    Object.defineProperty(p53, p54, {
      value: p55,
      writable: true,
      configurable: true
    });
  } catch {
    if (v5) {
      vO3.log(`Failed to add non-enumerable property "${p54}" to object`, p53);
    }
  }
}
function f43(p56, p57) {
  try {
    const v33 = p57.prototype || {};
    p56.prototype = p57.prototype = v33;
    f42(p56, "__sentry_original__", p57);
  } catch {}
}
function f44(p58) {
  return p58.__sentry_original__;
}
function f45(p59) {
  if (f20(p59)) {
    return {
      message: p59.message,
      name: p59.name,
      stack: p59.stack,
      ...f47(p59)
    };
  }
  if (f29(p59)) {
    const vO4 = {
      type: p59.type,
      target: f46(p59.target),
      currentTarget: f46(p59.currentTarget),
      ...f47(p59)
    };
    if (typeof CustomEvent !== "undefined" && f34(p59, CustomEvent)) {
      vO4.detail = p59.detail;
    }
    return vO4;
  } else {
    return p59;
  }
}
function f46(p60) {
  try {
    if (f30(p60)) {
      return f37(p60);
    } else {
      return Object.prototype.toString.call(p60);
    }
  } catch {
    return "<unknown>";
  }
}
function f47(p61) {
  if (typeof p61 == "object" && p61 !== null) {
    const vO5 = {};
    for (const v34 in p61) {
      if (Object.prototype.hasOwnProperty.call(p61, v34)) {
        vO5[v34] = p61[v34];
      }
    }
    return vO5;
  } else {
    return {};
  }
}
function f48(p62) {
  const v35 = Object.keys(f45(p62));
  v35.sort();
  if (v35[0]) {
    return v35.join(", ");
  } else {
    return "[object has no keys]";
  }
}
function f49(p63, p64 = 0) {
  if (typeof p63 != "string" || p64 === 0 || p63.length <= p64) {
    return p63;
  } else {
    return `${p63.slice(0, p64)}...`;
  }
}
function f50(p65, p66) {
  if (!Array.isArray(p65)) {
    return "";
  }
  const vA7 = [];
  for (let vLN04 = 0; vLN04 < p65.length; vLN04++) {
    const v36 = p65[vLN04];
    try {
      if (f35(v36)) {
        vA7.push("[VueViewModel]");
      } else {
        vA7.push(String(v36));
      }
    } catch {
      vA7.push("[value cannot be serialized]");
    }
  }
  return vA7.join(p66);
}
function f51(p67, p68, p69 = false) {
  if (f25(p67)) {
    if (f31(p68)) {
      return p68.test(p67);
    } else if (f25(p68)) {
      if (p69) {
        return p67 === p68;
      } else {
        return p67.includes(p68);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function f52(p70, p71 = [], p72 = false) {
  return p71.some(p73 => f51(p70, p73, p72));
}
function f53() {
  const vVGlobalThis2 = vGlobalThis;
  return vVGlobalThis2.crypto || vVGlobalThis2.msCrypto;
}
let v37;
function f54() {
  return Math.random() * 16;
}
function f55(p74 = f53()) {
  try {
    if (p74 != null && p74.randomUUID) {
      return p74.randomUUID().replace(/-/g, "");
    }
  } catch {}
  v37 ||= "10000000100040008000100000000000";
  return v37.replace(/[018]/g, p75 => (p75 ^ (f54() & 15) >> p75 / 4).toString(16));
}
function f56(p76) {
  var v38;
  var v39;
  if ((v39 = (v38 = p76.exception) == null ? undefined : v38.values) == null) {
    return undefined;
  } else {
    return v39[0];
  }
}
function f57(p77) {
  const {
    message: e,
    event_id: n
  } = p77;
  if (e) {
    return e;
  }
  const vF56 = f56(p77);
  if (vF56) {
    if (vF56.type && vF56.value) {
      return `${vF56.type}: ${vF56.value}`;
    } else {
      return vF56.type || vF56.value || n || "<unknown>";
    }
  } else {
    return n || "<unknown>";
  }
}
function f58(p78, p79, p80) {
  const v40 = p78.exception = p78.exception || {};
  const v41 = v40.values = v40.values || [];
  const v42 = v41[0] = v41[0] || {};
  v42.value ||= p79 || "";
  v42.type ||= "Error";
}
function f59(p81, p82) {
  const vF562 = f56(p81);
  if (!vF562) {
    return;
  }
  const vO6 = {
    type: "generic",
    handled: true
  };
  const v43 = vF562.mechanism;
  vF562.mechanism = {
    ...vO6,
    ...v43,
    ...p82
  };
  if (p82 && "data" in p82) {
    const vO7 = {
      ...(v43 == null ? undefined : v43.data),
      ...p82.data
    };
    vF562.mechanism.data = vO7;
  }
}
function f60(p83) {
  if (f61(p83)) {
    return true;
  }
  try {
    f42(p83, "__sentry_captured__", true);
  } catch {}
  return false;
}
function f61(p84) {
  try {
    return p84.__sentry_captured__;
  } catch {}
}
const vLN1000 = 1000;
function f62() {
  return Date.now() / vLN1000;
}
function f63() {
  const {
    performance: t
  } = vGlobalThis;
  if (t == null || !t.now || !t.timeOrigin) {
    return f62;
  }
  const v44 = t.timeOrigin;
  return () => (v44 + t.now()) / vLN1000;
}
let v45;
function f64() {
  return (v45 ??= f63())();
}
let v46;
function f65() {
  var v47;
  const {
    performance: t
  } = vGlobalThis;
  if (t == null || !t.now) {
    return [undefined, "none"];
  }
  const vLN3600000 = 3600000;
  const v48 = t.now();
  const v49 = Date.now();
  const v50 = t.timeOrigin ? Math.abs(t.timeOrigin + v48 - v49) : vLN3600000;
  const v51 = v50 < vLN3600000;
  const v52 = (v47 = t.timing) == null ? undefined : v47.navigationStart;
  const v53 = typeof v52 == "number" ? Math.abs(v52 + v48 - v49) : vLN3600000;
  const v54 = v53 < vLN3600000;
  if (v51 || v54) {
    if (v50 <= v53) {
      return [t.timeOrigin, "timeOrigin"];
    } else {
      return [v52, "navigationStart"];
    }
  } else {
    return [v49, "dateNow"];
  }
}
function f66() {
  v46 ||= f65();
  return v46[0];
}
function f67(p85) {
  const vF64 = f64();
  const vO8 = {
    sid: f55(),
    init: true,
    timestamp: vF64,
    started: vF64,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => f70(vO8)
  };
  if (p85) {
    f68(vO8, p85);
  }
  return vO8;
}
function f68(p86, p87 = {}) {
  if (p87.user) {
    if (!p86.ipAddress && p87.user.ip_address) {
      p86.ipAddress = p87.user.ip_address;
    }
    if (!p86.did && !p87.did) {
      p86.did = p87.user.id || p87.user.email || p87.user.username;
    }
  }
  p86.timestamp = p87.timestamp || f64();
  if (p87.abnormal_mechanism) {
    p86.abnormal_mechanism = p87.abnormal_mechanism;
  }
  if (p87.ignoreDuration) {
    p86.ignoreDuration = p87.ignoreDuration;
  }
  if (p87.sid) {
    p86.sid = p87.sid.length === 32 ? p87.sid : f55();
  }
  if (p87.init !== undefined) {
    p86.init = p87.init;
  }
  if (!p86.did && p87.did) {
    p86.did = `${p87.did}`;
  }
  if (typeof p87.started == "number") {
    p86.started = p87.started;
  }
  if (p86.ignoreDuration) {
    p86.duration = undefined;
  } else if (typeof p87.duration == "number") {
    p86.duration = p87.duration;
  } else {
    const v55 = p86.timestamp - p86.started;
    p86.duration = v55 >= 0 ? v55 : 0;
  }
  if (p87.release) {
    p86.release = p87.release;
  }
  if (p87.environment) {
    p86.environment = p87.environment;
  }
  if (!p86.ipAddress && p87.ipAddress) {
    p86.ipAddress = p87.ipAddress;
  }
  if (!p86.userAgent && p87.userAgent) {
    p86.userAgent = p87.userAgent;
  }
  if (typeof p87.errors == "number") {
    p86.errors = p87.errors;
  }
  if (p87.status) {
    p86.status = p87.status;
  }
}
function f69(p88, p89) {
  let vO9 = {};
  if (p88.status === "ok") {
    vO9 = {
      status: "exited"
    };
  }
  f68(p88, vO9);
}
function f70(p90) {
  return {
    sid: `${p90.sid}`,
    init: p90.init,
    started: new Date(p90.started * 1000).toISOString(),
    timestamp: new Date(p90.timestamp * 1000).toISOString(),
    status: p90.status,
    errors: p90.errors,
    did: typeof p90.did == "number" || typeof p90.did == "string" ? `${p90.did}` : undefined,
    duration: p90.duration,
    abnormal_mechanism: p90.abnormal_mechanism,
    attrs: {
      release: p90.release,
      environment: p90.environment,
      ip_address: p90.ipAddress,
      user_agent: p90.userAgent
    }
  };
}
function f71(p91, p92, p93 = 2) {
  if (!p92 || typeof p92 != "object" || p93 <= 0) {
    return p92;
  }
  if (p91 && Object.keys(p92).length === 0) {
    return p91;
  }
  const vO10 = {
    ...p91
  };
  for (const v56 in p92) {
    if (Object.prototype.hasOwnProperty.call(p92, v56)) {
      vO10[v56] = f71(vO10[v56], p92[v56], p93 - 1);
    }
  }
  return vO10;
}
function f72() {
  return f55();
}
function f73() {
  return f55().substring(16);
}
const vLS_sentrySpan = "_sentrySpan";
function f74(p94, p95) {
  if (p95) {
    f42(p94, vLS_sentrySpan, p95);
  } else {
    delete p94[vLS_sentrySpan];
  }
}
function f75(p96) {
  return p96[vLS_sentrySpan];
}
const vLN100 = 100;
class C2 {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: f72(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const v57 = new C2();
    v57._breadcrumbs = [...this._breadcrumbs];
    v57._tags = {
      ...this._tags
    };
    v57._extra = {
      ...this._extra
    };
    v57._contexts = {
      ...this._contexts
    };
    if (this._contexts.flags) {
      v57._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    v57._user = this._user;
    v57._level = this._level;
    v57._session = this._session;
    v57._transactionName = this._transactionName;
    v57._fingerprint = this._fingerprint;
    v57._eventProcessors = [...this._eventProcessors];
    v57._attachments = [...this._attachments];
    v57._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    };
    v57._propagationContext = {
      ...this._propagationContext
    };
    v57._client = this._client;
    v57._lastEventId = this._lastEventId;
    f74(v57, f75(this));
    return v57;
  }
  setClient(p97) {
    this._client = p97;
  }
  setLastEventId(p98) {
    this._lastEventId = p98;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(p99) {
    this._scopeListeners.push(p99);
  }
  addEventProcessor(p100) {
    this._eventProcessors.push(p100);
    return this;
  }
  setUser(p101) {
    this._user = p101 || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined
    };
    if (this._session) {
      f68(this._session, {
        user: p101
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setTags(p102) {
    this._tags = {
      ...this._tags,
      ...p102
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(p103, p104) {
    this._tags = {
      ...this._tags,
      [p103]: p104
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtras(p105) {
    this._extra = {
      ...this._extra,
      ...p105
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(p106, p107) {
    this._extra = {
      ...this._extra,
      [p106]: p107
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(p108) {
    this._fingerprint = p108;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(p109) {
    this._level = p109;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(p110) {
    this._transactionName = p110;
    this._notifyScopeListeners();
    return this;
  }
  setContext(p111, p112) {
    if (p112 === null) {
      delete this._contexts[p111];
    } else {
      this._contexts[p111] = p112;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSession(p113) {
    if (p113) {
      this._session = p113;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(p114) {
    if (!p114) {
      return this;
    }
    const v58 = typeof p114 == "function" ? p114(this) : p114;
    const v59 = v58 instanceof C2 ? v58.getScopeData() : f28(v58) ? p114 : undefined;
    const {
      tags: s,
      extra: i,
      user: o,
      contexts: c,
      level: a,
      fingerprint: u = [],
      propagationContext: f
    } = v59 || {};
    this._tags = {
      ...this._tags,
      ...s
    };
    this._extra = {
      ...this._extra,
      ...i
    };
    this._contexts = {
      ...this._contexts,
      ...c
    };
    if (o && Object.keys(o).length) {
      this._user = o;
    }
    if (a) {
      this._level = a;
    }
    if (u.length) {
      this._fingerprint = u;
    }
    if (f) {
      this._propagationContext = f;
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._session = undefined;
    f74(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: f72(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(p115, p116) {
    var v60;
    const v61 = typeof p116 == "number" ? p116 : vLN100;
    if (v61 <= 0) {
      return this;
    }
    const vO11 = {
      timestamp: f62(),
      ...p115,
      message: p115.message ? f49(p115.message, 2048) : p115.message
    };
    this._breadcrumbs.push(vO11);
    if (this._breadcrumbs.length > v61) {
      this._breadcrumbs = this._breadcrumbs.slice(-v61);
      if ((v60 = this._client) != null) {
        v60.recordDroppedEvent("buffer_overflow", "log_item");
      }
    }
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(p117) {
    this._attachments.push(p117);
    return this;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: f75(this)
    };
  }
  setSDKProcessingMetadata(p118) {
    this._sdkProcessingMetadata = f71(this._sdkProcessingMetadata, p118, 2);
    return this;
  }
  setPropagationContext(p119) {
    this._propagationContext = p119;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(p120, p121) {
    const v62 = (p121 == null ? undefined : p121.event_id) || f55();
    if (!this._client) {
      if (v5) {
        vO3.warn("No client configured on scope - will not capture exception!");
      }
      return v62;
    }
    const v63 = new Error("Sentry syntheticException");
    this._client.captureException(p120, {
      originalException: p120,
      syntheticException: v63,
      ...p121,
      event_id: v62
    }, this);
    return v62;
  }
  captureMessage(p122, p123, p124) {
    const v64 = (p124 == null ? undefined : p124.event_id) || f55();
    if (!this._client) {
      if (v5) {
        vO3.warn("No client configured on scope - will not capture message!");
      }
      return v64;
    }
    const v65 = new Error(p122);
    this._client.captureMessage(p122, p123, {
      originalException: p122,
      syntheticException: v65,
      ...p124,
      event_id: v64
    }, this);
    return v64;
  }
  captureEvent(p125, p126) {
    const v66 = (p126 == null ? undefined : p126.event_id) || f55();
    if (this._client) {
      this._client.captureEvent(p125, {
        ...p126,
        event_id: v66
      }, this);
      return v66;
    } else {
      if (v5) {
        vO3.warn("No client configured on scope - will not capture event!");
      }
      return v66;
    }
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(p127 => {
        p127(this);
      });
      this._notifyingListeners = false;
    }
  }
}
function f76() {
  return f4("defaultCurrentScope", () => new C2());
}
function f77() {
  return f4("defaultIsolationScope", () => new C2());
}
class C3 {
  constructor(p128, p129) {
    let v67;
    if (p128) {
      v67 = p128;
    } else {
      v67 = new C2();
    }
    let v68;
    if (p129) {
      v68 = p129;
    } else {
      v68 = new C2();
    }
    this._stack = [{
      scope: v67
    }];
    this._isolationScope = v68;
  }
  withScope(p130) {
    const v69 = this._pushScope();
    let v70;
    try {
      v70 = p130(v69);
    } catch (e2) {
      this._popScope();
      throw e2;
    }
    if (f32(v70)) {
      return v70.then(p131 => {
        this._popScope();
        return p131;
      }, p132 => {
        this._popScope();
        throw p132;
      });
    } else {
      this._popScope();
      return v70;
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const v71 = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: v71
    });
    return v71;
  }
  _popScope() {
    if (this._stack.length <= 1) {
      return false;
    } else {
      return !!this._stack.pop();
    }
  }
}
function f78() {
  const vF2 = f2();
  const vF3 = f3(vF2);
  return vF3.stack = vF3.stack || new C3(f76(), f77());
}
function f79(p133) {
  return f78().withScope(p133);
}
function f80(p134, p135) {
  const vF78 = f78();
  return vF78.withScope(() => {
    vF78.getStackTop().scope = p134;
    return p135(p134);
  });
}
function f81(p136) {
  return f78().withScope(() => p136(f78().getIsolationScope()));
}
function f82() {
  return {
    withIsolationScope: f81,
    withScope: f79,
    withSetScope: f80,
    withSetIsolationScope: (p137, p138) => f81(p138),
    getCurrentScope: () => f78().getScope(),
    getIsolationScope: () => f78().getIsolationScope()
  };
}
function f83(p139) {
  const vF32 = f3(p139);
  if (vF32.acs) {
    return vF32.acs;
  } else {
    return f82();
  }
}
function f84() {
  const vF22 = f2();
  return f83(vF22).getCurrentScope();
}
function f85() {
  const vF23 = f2();
  return f83(vF23).getIsolationScope();
}
function f86() {
  return f4("globalScope", () => new C2());
}
function f87(...t) {
  const vF24 = f2();
  const vF83 = f83(vF24);
  if (t.length === 2) {
    const [v72, v73] = t;
    if (v72) {
      return vF83.withSetScope(v72, v73);
    } else {
      return vF83.withScope(v73);
    }
  }
  return vF83.withScope(t[0]);
}
function f88() {
  return f84().getClient();
}
function f89(p140) {
  const v74 = p140.getPropagationContext();
  const {
    traceId: n,
    parentSpanId: r,
    propagationSpanId: s
  } = v74;
  const vO12 = {
    trace_id: n,
    span_id: s || f73()
  };
  if (r) {
    vO12.parent_span_id = r;
  }
  return vO12;
}
const vLSSentrysource = "sentry.source";
const vLSSentrysample_rate = "sentry.sample_rate";
const vLSSentryprevious_trace = "sentry.previous_trace_sample_rate";
const vLSSentryop = "sentry.op";
const vLSSentryorigin = "sentry.origin";
const vLSSentryidle_span_fini = "sentry.idle_span_finish_reason";
const vLSSentrymeasurement_un = "sentry.measurement_unit";
const vLSSentrymeasurement_va = "sentry.measurement_value";
const vLSSentrycustom_span_na = "sentry.custom_span_name";
const vLSSentryprofile_id = "sentry.profile_id";
const vLSSentryexclusive_time = "sentry.exclusive_time";
const vLSSentrylinktype = "sentry.link.type";
const vLN05 = 0;
const vLN1 = 1;
const vLN2 = 2;
function f90(p141) {
  if (p141 < 400 && p141 >= 100) {
    return {
      code: vLN1
    };
  }
  if (p141 >= 400 && p141 < 500) {
    switch (p141) {
      case 401:
        return {
          code: vLN2,
          message: "unauthenticated"
        };
      case 403:
        return {
          code: vLN2,
          message: "permission_denied"
        };
      case 404:
        return {
          code: vLN2,
          message: "not_found"
        };
      case 409:
        return {
          code: vLN2,
          message: "already_exists"
        };
      case 413:
        return {
          code: vLN2,
          message: "failed_precondition"
        };
      case 429:
        return {
          code: vLN2,
          message: "resource_exhausted"
        };
      case 499:
        return {
          code: vLN2,
          message: "cancelled"
        };
      default:
        return {
          code: vLN2,
          message: "invalid_argument"
        };
    }
  }
  if (p141 >= 500 && p141 < 600) {
    switch (p141) {
      case 501:
        return {
          code: vLN2,
          message: "unimplemented"
        };
      case 503:
        return {
          code: vLN2,
          message: "unavailable"
        };
      case 504:
        return {
          code: vLN2,
          message: "deadline_exceeded"
        };
      default:
        return {
          code: vLN2,
          message: "internal_error"
        };
    }
  }
  return {
    code: vLN2,
    message: "internal_error"
  };
}
function f91(p142, p143) {
  p142.setAttribute("http.response.status_code", p143);
  const vF90 = f90(p143);
  if (vF90.message !== "unknown_error") {
    p142.setStatus(vF90);
  }
}
const vLS_sentryScope = "_sentryScope";
const vLS_sentryIsolationScop = "_sentryIsolationScope";
function f92(p144) {
  try {
    const v75 = vGlobalThis.WeakRef;
    if (typeof v75 == "function") {
      return new v75(p144);
    }
  } catch {}
  return p144;
}
function f93(p145) {
  if (p145) {
    if (typeof p145 == "object" && "deref" in p145 && typeof p145.deref == "function") {
      try {
        return p145.deref();
      } catch {
        return;
      }
    }
    return p145;
  }
}
function f94(p146, p147, p148) {
  if (p146) {
    f42(p146, vLS_sentryIsolationScop, f92(p148));
    f42(p146, vLS_sentryScope, p147);
  }
}
function f95(p149) {
  const vP149 = p149;
  return {
    scope: vP149[vLS_sentryScope],
    isolationScope: f93(vP149[vLS_sentryIsolationScop])
  };
}
const vLSSentry = "sentry-";
const v76 = /^sentry-/;
const vLN8192 = 8192;
function f96(p150) {
  const vVe = f98(p150);
  if (!vVe) {
    return;
  }
  const v77 = Object.entries(vVe).reduce((p151, [v78, v79]) => {
    if (v78.match(v76)) {
      const v80 = v78.slice(vLSSentry.length);
      p151[v80] = v79;
    }
    return p151;
  }, {});
  if (Object.keys(v77).length > 0) {
    return v77;
  }
}
function f97(p152) {
  if (!p152) {
    return;
  }
  const v81 = Object.entries(p152).reduce((p153, [v82, v83]) => {
    if (v83) {
      p153[`${vLSSentry}${v82}`] = v83;
    }
    return p153;
  }, {});
  return f100(v81);
}
function f98(p154) {
  if (!!p154 && (!!f25(p154) || !!Array.isArray(p154))) {
    if (Array.isArray(p154)) {
      return p154.reduce((p155, p156) => {
        const vYt = f99(p156);
        Object.entries(vYt).forEach(([v84, v85]) => {
          p155[v84] = v85;
        });
        return p155;
      }, {});
    } else {
      return f99(p154);
    }
  }
}
function f99(p157) {
  return p157.split(",").map(p158 => {
    const v86 = p158.indexOf("=");
    if (v86 === -1) {
      return [];
    }
    const v87 = p158.slice(0, v86);
    const v88 = p158.slice(v86 + 1);
    return [v87, v88].map(p159 => {
      try {
        return decodeURIComponent(p159.trim());
      } catch {
        return;
      }
    });
  }).reduce((p160, [v89, v90]) => {
    if (v89 && v90) {
      p160[v89] = v90;
    }
    return p160;
  }, {});
}
function f100(p161) {
  if (Object.keys(p161).length !== 0) {
    return Object.entries(p161).reduce((p162, [v91, v92], p163) => {
      const v93 = `${encodeURIComponent(v91)}=${encodeURIComponent(v92)}`;
      const v94 = p163 === 0 ? v93 : `${p162},${v93}`;
      if (v94.length > vLN8192) {
        if (v5) {
          vO3.warn(`Not adding key: ${v91} with val: ${v92} to baggage header due to exceeding baggage size limits.`);
        }
        return p162;
      } else {
        return v94;
      }
    }, "");
  }
}
const v95 = /^o(\d+)\./;
const v96 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function f101(p164) {
  return p164 === "http" || p164 === "https";
}
function f102(p165, p166 = false) {
  const {
    host: n,
    path: r,
    pass: s,
    port: i,
    projectId: o,
    protocol: c,
    publicKey: a
  } = p165;
  return `${c}://${a}${p166 && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${o}`;
}
function f103(p167) {
  const v97 = v96.exec(p167);
  if (!v97) {
    f5(() => {
      console.error(`Invalid Sentry Dsn: ${p167}`);
    });
    return;
  }
  const [v98, v99, s = "", i = "", o = "", c = ""] = v97.slice(1);
  let vLS3 = "";
  let vC = c;
  const v100 = vC.split("/");
  if (v100.length > 1) {
    vLS3 = v100.slice(0, -1).join("/");
    vC = v100.pop();
  }
  if (vC) {
    const v101 = vC.match(/^\d+/);
    if (v101) {
      vC = v101[0];
    }
  }
  return f104({
    host: i,
    pass: s,
    path: vLS3,
    projectId: vC,
    port: o,
    protocol: v98,
    publicKey: v99
  });
}
function f104(p168) {
  return {
    protocol: p168.protocol,
    publicKey: p168.publicKey || "",
    pass: p168.pass || "",
    host: p168.host,
    port: p168.port || "",
    path: p168.path || "",
    projectId: p168.projectId
  };
}
function f105(p169) {
  if (!v5) {
    return true;
  }
  const {
    port: e,
    projectId: n,
    protocol: r
  } = p169;
  if (["protocol", "publicKey", "host", "projectId"].find(p170 => p169[p170] ? false : (vO3.error(`Invalid Sentry Dsn: ${p170} missing`), true))) {
    return false;
  } else if (n.match(/^\d+$/)) {
    if (f101(r)) {
      if (e && isNaN(parseInt(e, 10))) {
        vO3.error(`Invalid Sentry Dsn: Invalid port ${e}`);
        return false;
      } else {
        return true;
      }
    } else {
      vO3.error(`Invalid Sentry Dsn: Invalid protocol ${r}`);
      return false;
    }
  } else {
    vO3.error(`Invalid Sentry Dsn: Invalid projectId ${n}`);
    return false;
  }
}
function f106(p171) {
  const v102 = p171.match(v95);
  if (v102 == null) {
    return undefined;
  } else {
    return v102[1];
  }
}
function f107(p172) {
  const v103 = p172.getOptions();
  const {
    host: n
  } = p172.getDsn() || {};
  let v104;
  if (v103.orgId) {
    v104 = String(v103.orgId);
  } else if (n) {
    v104 = f106(n);
  }
  return v104;
}
function f108(p173) {
  const v105 = typeof p173 == "string" ? f103(p173) : f104(p173);
  if (!!v105 && !!f105(v105)) {
    return v105;
  }
}
function f109(p174) {
  if (typeof p174 == "boolean") {
    return Number(p174);
  }
  const v106 = typeof p174 == "string" ? parseFloat(p174) : p174;
  if (typeof v106 == "number" && !isNaN(v106) && !(v106 < 0) && !(v106 > 1)) {
    return v106;
  }
}
const v107 = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function f110(p175) {
  if (!p175) {
    return;
  }
  const v108 = p175.match(v107);
  if (!v108) {
    return;
  }
  let v109;
  if (v108[3] === "1") {
    v109 = true;
  } else if (v108[3] === "0") {
    v109 = false;
  }
  return {
    traceId: v108[1],
    parentSampled: v109,
    parentSpanId: v108[2]
  };
}
function f111(p176, p177) {
  const vF110 = f110(p176);
  const vF96 = f96(p177);
  if (vF110 == null || !vF110.traceId) {
    return {
      traceId: f72(),
      sampleRand: Math.random()
    };
  }
  const vAn = f114(vF110, vF96);
  if (vF96) {
    vF96.sample_rand = vAn.toString();
  }
  const {
    traceId: i,
    parentSpanId: o,
    parentSampled: c
  } = vF110;
  return {
    traceId: i,
    parentSpanId: o,
    sampled: c,
    dsc: vF96 || {},
    sampleRand: vAn
  };
}
function f112(p178 = f72(), p179 = f73(), p180) {
  let vLS4 = "";
  if (p180 !== undefined) {
    vLS4 = p180 ? "-1" : "-0";
  }
  return `${p178}-${p179}${vLS4}`;
}
function f113(p181 = f72(), p182 = f73(), p183) {
  return `00-${p181}-${p182}-${p183 ? "01" : "00"}`;
}
function f114(p184, p185) {
  const vF109 = f109(p185 == null ? undefined : p185.sample_rand);
  if (vF109 !== undefined) {
    return vF109;
  }
  const vF1092 = f109(p185 == null ? undefined : p185.sample_rate);
  if (vF1092 && (p184 == null ? undefined : p184.parentSampled) !== undefined) {
    if (p184.parentSampled) {
      return Math.random() * vF1092;
    } else {
      return vF1092 + Math.random() * (1 - vF1092);
    }
  } else {
    return Math.random();
  }
}
const vLN06 = 0;
const vLN12 = 1;
let v110 = false;
function f115(p186) {
  const {
    spanId: e,
    traceId: n
  } = p186.spanContext();
  const {
    data: r,
    op: s,
    parent_span_id: i,
    status: o,
    origin: c,
    links: a
  } = f122(p186);
  return {
    parent_span_id: i,
    span_id: e,
    trace_id: n,
    data: r,
    op: s,
    status: o,
    origin: c,
    links: a
  };
}
function f116(p187) {
  const {
    spanId: e,
    traceId: n,
    isRemote: r
  } = p187.spanContext();
  const v111 = r ? e : f122(p187).parent_span_id;
  const v112 = f95(p187).scope;
  const v113 = r ? (v112 == null ? undefined : v112.getPropagationContext().propagationSpanId) || f73() : e;
  return {
    parent_span_id: v111,
    span_id: v113,
    trace_id: n
  };
}
function f117(p188) {
  const {
    traceId: e,
    spanId: n
  } = p188.spanContext();
  const vV = f125(p188);
  return f112(e, n, vV);
}
function f118(p189) {
  const {
    traceId: e,
    spanId: n
  } = p189.spanContext();
  const vV2 = f125(p189);
  return f113(e, n, vV2);
}
function f119(p190) {
  if (p190 && p190.length > 0) {
    return p190.map(({
      context: {
        spanId: e,
        traceId: n,
        traceFlags: r,
        ...s
      },
      attributes: i
    }) => ({
      span_id: e,
      trace_id: n,
      sampled: r === vLN12,
      attributes: i,
      ...s
    }));
  }
}
function f120(p191) {
  if (typeof p191 == "number") {
    return f121(p191);
  } else if (Array.isArray(p191)) {
    return p191[0] + p191[1] / 1000000000;
  } else if (p191 instanceof Date) {
    return f121(p191.getTime());
  } else {
    return f64();
  }
}
function f121(p192) {
  if (p192 > 9999999999) {
    return p192 / 1000;
  } else {
    return p192;
  }
}
function f122(p193) {
  var v114;
  if (f124(p193)) {
    return p193.getSpanJSON();
  }
  const {
    spanId: e,
    traceId: n
  } = p193.spanContext();
  if (f123(p193)) {
    const {
      attributes: s,
      startTime: i,
      name: o,
      endTime: c,
      status: a,
      links: u
    } = p193;
    const v115 = "parentSpanId" in p193 ? p193.parentSpanId : "parentSpanContext" in p193 ? (v114 = p193.parentSpanContext) == null ? undefined : v114.spanId : undefined;
    return {
      span_id: e,
      trace_id: n,
      data: s,
      description: o,
      parent_span_id: v115,
      start_timestamp: f120(i),
      timestamp: f120(c) || undefined,
      status: f126(a),
      op: s[vLSSentryop],
      origin: s[vLSSentryorigin],
      links: f119(u)
    };
  }
  return {
    span_id: e,
    trace_id: n,
    start_timestamp: 0,
    data: {}
  };
}
function f123(p194) {
  const vP194 = p194;
  return !!vP194.attributes && !!vP194.startTime && !!vP194.name && !!vP194.endTime && !!vP194.status;
}
function f124(p195) {
  return typeof p195.getSpanJSON == "function";
}
function f125(p196) {
  const {
    traceFlags: e
  } = p196.spanContext();
  return e === vLN12;
}
function f126(p197) {
  if (!!p197 && p197.code !== vLN05) {
    if (p197.code === vLN1) {
      return "ok";
    } else {
      return p197.message || "internal_error";
    }
  }
}
const vLS_sentryChildSpans = "_sentryChildSpans";
const vLS_sentryRootSpan = "_sentryRootSpan";
function f127(p198, p199) {
  const v116 = p198[vLS_sentryRootSpan] || p198;
  f42(p199, vLS_sentryRootSpan, v116);
  if (p198[vLS_sentryChildSpans]) {
    p198[vLS_sentryChildSpans].add(p199);
  } else {
    f42(p198, vLS_sentryChildSpans, new Set([p199]));
  }
}
function f128(p200, p201) {
  if (p200[vLS_sentryChildSpans]) {
    p200[vLS_sentryChildSpans].delete(p201);
  }
}
function f129(p202) {
  const v117 = new Set();
  function f130(p203) {
    if (!v117.has(p203) && f125(p203)) {
      v117.add(p203);
      const v118 = p203[vLS_sentryChildSpans] ? Array.from(p203[vLS_sentryChildSpans]) : [];
      for (const v119 of v118) {
        f130(v119);
      }
    }
  }
  f130(p202);
  return Array.from(v117);
}
function f131(p204) {
  return p204[vLS_sentryRootSpan] || p204;
}
function f132() {
  const vF25 = f2();
  const vF832 = f83(vF25);
  if (vF832.getActiveSpan) {
    return vF832.getActiveSpan();
  } else {
    return f75(f84());
  }
}
function f133() {
  if (!v110) {
    f5(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    v110 = true;
  }
}
function f134(p205) {
  var v120;
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const v121 = p205 || ((v120 = f88()) == null ? undefined : v120.getOptions());
  return !!v121 && (v121.tracesSampleRate != null || !!v121.tracesSampler);
}
const vLSProduction = "production";
const vLS_frozenDsc = "_frozenDsc";
function f135(p206, p207) {
  f42(p206, vLS_frozenDsc, p207);
}
function f136(p208, p209) {
  const v122 = p209.getOptions();
  const {
    publicKey: r
  } = p209.getDsn() || {};
  const vO13 = {
    environment: v122.environment || vLSProduction,
    release: v122.release,
    public_key: r,
    trace_id: p208,
    org_id: f107(p209)
  };
  p209.emit("createDsc", vO13);
  return vO13;
}
function f137(p210, p211) {
  const v123 = p211.getPropagationContext();
  return v123.dsc || f136(v123.traceId, p210);
}
function f138(p212) {
  var v124;
  const vF88 = f88();
  if (!vF88) {
    return {};
  }
  const vF131 = f131(p212);
  const vF122 = f122(vF131);
  const v125 = vF122.data;
  const v126 = vF131.spanContext().traceState;
  const v127 = (v126 == null ? undefined : v126.get("sentry.sample_rate")) ?? v125[vLSSentrysample_rate] ?? v125[vLSSentryprevious_trace];
  function f139(p213) {
    if (typeof v127 == "number" || typeof v127 == "string") {
      p213.sample_rate = `${v127}`;
    }
    return p213;
  }
  const v128 = vF131[vLS_frozenDsc];
  if (v128) {
    return f139(v128);
  }
  const v129 = v126 == null ? undefined : v126.get("sentry.dsc");
  const v130 = v129 && f96(v129);
  if (v130) {
    return f139(v130);
  }
  const vF136 = f136(p212.spanContext().traceId, vF88);
  const v131 = v125[vLSSentrysource];
  const v132 = vF122.description;
  if (v131 !== "url" && v132) {
    vF136.transaction = v132;
  }
  if (f134()) {
    vF136.sampled = String(f125(vF131));
    vF136.sample_rand = (v126 == null ? undefined : v126.get("sentry.sample_rand")) ?? ((v124 = f95(vF131).scope) == null ? undefined : v124.getPropagationContext().sampleRand.toString());
  }
  f139(vF136);
  vF88.emit("createDsc", vF136, vF131);
  return vF136;
}
function f140(p214, p215 = 100, p216 = Infinity) {
  try {
    return f142("", p214, p215, p216);
  } catch (e3) {
    return {
      ERROR: `**non-serializable** (${e3})`
    };
  }
}
function f141(p217, p218 = 3, p219 = 102400) {
  const vF140 = f140(p217, p218);
  if (f146(vF140) > p219) {
    return f141(p217, p218 - 1, p219);
  } else {
    return vF140;
  }
}
function f142(p220, p221, p222 = Infinity, p223 = Infinity, p224 = f147()) {
  const [v133, v134] = p224;
  if (p221 == null || ["boolean", "string"].includes(typeof p221) || typeof p221 == "number" && Number.isFinite(p221)) {
    return p221;
  }
  const vHn = f143(p220, p221);
  if (!vHn.startsWith("[object ")) {
    return vHn;
  }
  if (p221.__sentry_skip_normalization__) {
    return p221;
  }
  const v135 = typeof p221.__sentry_override_normalization_depth__ == "number" ? p221.__sentry_override_normalization_depth__ : p222;
  if (v135 === 0) {
    return vHn.replace("object ", "");
  }
  if (v133(p221)) {
    return "[Circular ~]";
  }
  const vP221 = p221;
  if (vP221 && typeof vP221.toJSON == "function") {
    try {
      const v136 = vP221.toJSON();
      return f142("", v136, v135 - 1, p223, p224);
    } catch {}
  }
  const v137 = Array.isArray(p221) ? [] : {};
  let vLN07 = 0;
  const vF45 = f45(p221);
  for (const v138 in vF45) {
    if (!Object.prototype.hasOwnProperty.call(vF45, v138)) {
      continue;
    }
    if (vLN07 >= p223) {
      v137[v138] = "[MaxProperties ~]";
      break;
    }
    const v139 = vF45[v138];
    v137[v138] = f142(v138, v139, v135 - 1, p223, p224);
    vLN07++;
  }
  v134(p221);
  return v137;
}
function f143(p225, p226) {
  try {
    if (p225 === "domain" && p226 && typeof p226 == "object" && p226._events) {
      return "[Domain]";
    }
    if (p225 === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && p226 === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && p226 === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && p226 === document) {
      return "[Document]";
    }
    if (f35(p226)) {
      return "[VueViewModel]";
    }
    if (f33(p226)) {
      return "[SyntheticEvent]";
    }
    if (typeof p226 == "number" && !Number.isFinite(p226)) {
      return `[${p226}]`;
    }
    if (typeof p226 == "function") {
      return `[Function: ${f18(p226)}]`;
    }
    if (typeof p226 == "symbol") {
      return `[${String(p226)}]`;
    }
    if (typeof p226 == "bigint") {
      return `[BigInt: ${String(p226)}]`;
    }
    const vMn = f144(p226);
    if (/^HTML(\w*)Element$/.test(vMn)) {
      return `[HTMLElement: ${vMn}]`;
    } else {
      return `[object ${vMn}]`;
    }
  } catch (e4) {
    return `**non-serializable** (${e4})`;
  }
}
function f144(p227) {
  const v140 = Object.getPrototypeOf(p227);
  if (v140 != null && v140.constructor) {
    return v140.constructor.name;
  } else {
    return "null prototype";
  }
}
function f145(p228) {
  return ~-encodeURI(p228).split(/%..|./).length;
}
function f146(p229) {
  return f145(JSON.stringify(p229));
}
function f147() {
  const v141 = new WeakSet();
  function f148(p230) {
    if (v141.has(p230)) {
      return true;
    } else {
      v141.add(p230);
      return false;
    }
  }
  function f149(p231) {
    v141.delete(p231);
  }
  return [f148, f149];
}
const vLN08 = 0;
const vLN13 = 1;
const vLN22 = 2;
function f150(p232) {
  return new C4(p233 => {
    p233(p232);
  });
}
function f151(p234) {
  return new C4((p235, p236) => {
    p236(p234);
  });
}
class C4 {
  constructor(p237) {
    this._state = vLN08;
    this._handlers = [];
    this._runExecutor(p237);
  }
  then(p238, p239) {
    return new C4((p240, p241) => {
      this._handlers.push([false, p242 => {
        if (!p238) {
          p240(p242);
        } else {
          try {
            p240(p238(p242));
          } catch (e5) {
            p241(e5);
          }
        }
      }, p243 => {
        if (!p239) {
          p241(p243);
        } else {
          try {
            p240(p239(p243));
          } catch (e6) {
            p241(e6);
          }
        }
      }]);
      this._executeHandlers();
    });
  }
  catch(p244) {
    return this.then(p245 => p245, p244);
  }
  finally(p246) {
    return new C4((p247, p248) => {
      let v142;
      let v143;
      return this.then(p249 => {
        v143 = false;
        v142 = p249;
        if (p246) {
          p246();
        }
      }, p250 => {
        v143 = true;
        v142 = p250;
        if (p246) {
          p246();
        }
      }).then(() => {
        if (v143) {
          p248(v142);
          return;
        }
        p247(v142);
      });
    });
  }
  _executeHandlers() {
    if (this._state === vLN08) {
      return;
    }
    const v144 = this._handlers.slice();
    this._handlers = [];
    v144.forEach(p251 => {
      if (!p251[0]) {
        if (this._state === vLN13) {
          p251[1](this._value);
        }
        if (this._state === vLN22) {
          p251[2](this._value);
        }
        p251[0] = true;
      }
    });
  }
  _runExecutor(p252) {
    const vF = (p253, p254) => {
      if (this._state === vLN08) {
        if (f32(p254)) {
          p254.then(vF4, vF5);
          return;
        }
        this._state = p253;
        this._value = p254;
        this._executeHandlers();
      }
    };
    const vF4 = p255 => {
      vF(vLN13, p255);
    };
    const vF5 = p256 => {
      vF(vLN22, p256);
    };
    try {
      p252(vF4, vF5);
    } catch (e7) {
      vF5(e7);
    }
  }
}
function f152(p257, p258, p259, p260 = 0) {
  try {
    const vRt = f153(p258, p259, p257, p260);
    if (f32(vRt)) {
      return vRt;
    } else {
      return f150(vRt);
    }
  } catch (e8) {
    return f151(e8);
  }
}
function f153(p261, p262, p263, p264) {
  const v145 = p263[p264];
  if (!p261 || !v145) {
    return p261;
  }
  const vV145 = v145({
    ...p261
  }, p262);
  if (v5 && vV145 === null) {
    vO3.log(`Event processor "${v145.id || "?"}" dropped event`);
  }
  if (f32(vV145)) {
    return vV145.then(p265 => f153(p265, p262, p263, p264 + 1));
  } else {
    return f153(vV145, p262, p263, p264 + 1);
  }
}
function f154(p266, p267) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i
  } = p267;
  f157(p266, p267);
  if (r) {
    f160(p266, r);
  }
  f161(p266, n);
  f158(p266, s);
  f159(p266, i);
}
function f155(p268, p269) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: o,
    sdkProcessingMetadata: c,
    breadcrumbs: a,
    fingerprint: u,
    eventProcessors: f,
    attachments: d,
    propagationContext: l,
    transactionName: p,
    span: g
  } = p269;
  f156(p268, "extra", n);
  f156(p268, "tags", r);
  f156(p268, "user", s);
  f156(p268, "contexts", i);
  p268.sdkProcessingMetadata = f71(p268.sdkProcessingMetadata, c, 2);
  if (o) {
    p268.level = o;
  }
  if (p) {
    p268.transactionName = p;
  }
  if (g) {
    p268.span = g;
  }
  if (a.length) {
    p268.breadcrumbs = [...p268.breadcrumbs, ...a];
  }
  if (u.length) {
    p268.fingerprint = [...p268.fingerprint, ...u];
  }
  if (f.length) {
    p268.eventProcessors = [...p268.eventProcessors, ...f];
  }
  if (d.length) {
    p268.attachments = [...p268.attachments, ...d];
  }
  p268.propagationContext = {
    ...p268.propagationContext,
    ...l
  };
}
function f156(p270, p271, p272) {
  p270[p271] = f71(p270[p271], p272, 1);
}
function f157(p273, p274) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: o,
    transactionName: c
  } = p274;
  if (Object.keys(n).length) {
    p273.extra = {
      ...n,
      ...p273.extra
    };
  }
  if (Object.keys(r).length) {
    p273.tags = {
      ...r,
      ...p273.tags
    };
  }
  if (Object.keys(s).length) {
    p273.user = {
      ...s,
      ...p273.user
    };
  }
  if (Object.keys(i).length) {
    p273.contexts = {
      ...i,
      ...p273.contexts
    };
  }
  if (o) {
    p273.level = o;
  }
  if (c && p273.type !== "transaction") {
    p273.transaction = c;
  }
}
function f158(p275, p276) {
  const vA8 = [...(p275.breadcrumbs || []), ...p276];
  p275.breadcrumbs = vA8.length ? vA8 : undefined;
}
function f159(p277, p278) {
  p277.sdkProcessingMetadata = {
    ...p277.sdkProcessingMetadata,
    ...p278
  };
}
function f160(p279, p280) {
  p279.contexts = {
    trace: f116(p280),
    ...p279.contexts
  };
  p279.sdkProcessingMetadata = {
    dynamicSamplingContext: f138(p280),
    ...p279.sdkProcessingMetadata
  };
  const vF1312 = f131(p280);
  const v146 = f122(vF1312).description;
  if (v146 && !p279.transaction && p279.type === "transaction") {
    p279.transaction = v146;
  }
}
function f161(p281, p282) {
  p281.fingerprint = p281.fingerprint ? Array.isArray(p281.fingerprint) ? p281.fingerprint : [p281.fingerprint] : [];
  if (p282) {
    p281.fingerprint = p281.fingerprint.concat(p282);
  }
  if (!p281.fingerprint.length) {
    delete p281.fingerprint;
  }
}
let v147;
let v148;
let v149;
let v150;
function f162(p283) {
  const v151 = vGlobalThis._sentryDebugIds;
  const v152 = vGlobalThis._debugIds;
  if (!v151 && !v152) {
    return {};
  }
  const v153 = v151 ? Object.keys(v151) : [];
  const v154 = v152 ? Object.keys(v152) : [];
  if (v150 && v153.length === v148 && v154.length === v149) {
    return v150;
  }
  v148 = v153.length;
  v149 = v154.length;
  v150 = {};
  v147 ||= {};
  const vF6 = (p284, p285) => {
    for (const v155 of p284) {
      const v156 = p285[v155];
      const v157 = v147 == null ? undefined : v147[v155];
      if (v157 && v150 && v156) {
        v150[v157[0]] = v156;
        if (v147) {
          v147[v155] = [v157[0], v156];
        }
      } else if (v156) {
        const vP283 = p283(v155);
        for (let v158 = vP283.length - 1; v158 >= 0; v158--) {
          const v159 = vP283[v158];
          const v160 = v159 == null ? undefined : v159.filename;
          if (v160 && v150 && v147) {
            v150[v160] = v156;
            v147[v155] = [v160, v156];
            break;
          }
        }
      }
    }
  };
  if (v151) {
    vF6(v153, v151);
  }
  if (v152) {
    vF6(v154, v152);
  }
  return v150;
}
function f163(p286, p287, p288, p289, p290, p291) {
  const {
    normalizeDepth: o = 3,
    normalizeMaxBreadth: c = 1000
  } = p286;
  const vO14 = {
    ...p287,
    event_id: p287.event_id || p288.event_id || f55(),
    timestamp: p287.timestamp || f62()
  };
  const v161 = p288.integrations || p286.integrations.map(p292 => p292.name);
  f164(vO14, p286);
  f167(vO14, v161);
  if (p290) {
    p290.emit("applyFrameMetadata", p287);
  }
  if (p287.type === undefined) {
    f165(vO14, p286.stackParser);
  }
  const vFn = f169(p289, p288.captureContext);
  if (p288.mechanism) {
    f59(vO14, p288.mechanism);
  }
  const v162 = p290 ? p290.getEventProcessors() : [];
  const v163 = f86().getScopeData();
  if (p291) {
    const v164 = p291.getScopeData();
    f155(v163, v164);
  }
  if (vFn) {
    const v165 = vFn.getScopeData();
    f155(v163, v165);
  }
  const vA9 = [...(p288.attachments || []), ...v163.attachments];
  if (vA9.length) {
    p288.attachments = vA9;
  }
  f154(vO14, v163);
  const vA10 = [...v162, ...v163.eventProcessors];
  return f152(vA10, vO14, p288).then(p293 => {
    if (p293) {
      f166(p293);
    }
    if (typeof o == "number" && o > 0) {
      return f168(p293, o, c);
    } else {
      return p293;
    }
  });
}
function f164(p294, p295) {
  const {
    environment: n,
    release: r,
    dist: s,
    maxValueLength: i
  } = p295;
  p294.environment = p294.environment || n || vLSProduction;
  if (!p294.release && r) {
    p294.release = r;
  }
  if (!p294.dist && s) {
    p294.dist = s;
  }
  const v166 = p294.request;
  if (v166 != null && v166.url) {
    v166.url = i ? f49(v166.url, i) : v166.url;
  }
}
function f165(p296, p297) {
  var v167;
  var v168;
  const vF162 = f162(p297);
  if ((v168 = (v167 = p296.exception) == null ? undefined : v167.values) != null) {
    v168.forEach(p298 => {
      var v169;
      var v170;
      if ((v170 = (v169 = p298.stacktrace) == null ? undefined : v169.frames) != null) {
        v170.forEach(p299 => {
          if (p299.filename) {
            p299.debug_id = vF162[p299.filename];
          }
        });
      }
    });
  }
}
function f166(p300) {
  var v171;
  var v172;
  const vO15 = {};
  if ((v172 = (v171 = p300.exception) == null ? undefined : v171.values) != null) {
    v172.forEach(p301 => {
      var v173;
      var v174;
      if ((v174 = (v173 = p301.stacktrace) == null ? undefined : v173.frames) != null) {
        v174.forEach(p302 => {
          if (p302.debug_id) {
            if (p302.abs_path) {
              vO15[p302.abs_path] = p302.debug_id;
            } else if (p302.filename) {
              vO15[p302.filename] = p302.debug_id;
            }
            delete p302.debug_id;
          }
        });
      }
    });
  }
  if (Object.keys(vO15).length === 0) {
    return;
  }
  p300.debug_meta = p300.debug_meta || {};
  p300.debug_meta.images = p300.debug_meta.images || [];
  const v175 = p300.debug_meta.images;
  Object.entries(vO15).forEach(([v176, v177]) => {
    v175.push({
      type: "sourcemap",
      code_file: v176,
      debug_id: v177
    });
  });
}
function f167(p303, p304) {
  if (p304.length > 0) {
    p303.sdk = p303.sdk || {};
    p303.sdk.integrations = [...(p303.sdk.integrations || []), ...p304];
  }
}
function f168(p305, p306, p307) {
  var v178;
  var v179;
  if (!p305) {
    return null;
  }
  const vO16 = {
    ...p305,
    ...(p305.breadcrumbs && {
      breadcrumbs: p305.breadcrumbs.map(p308 => ({
        ...p308,
        ...(p308.data && {
          data: f140(p308.data, p306, p307)
        })
      }))
    }),
    ...(p305.user && {
      user: f140(p305.user, p306, p307)
    }),
    ...(p305.contexts && {
      contexts: f140(p305.contexts, p306, p307)
    }),
    ...(p305.extra && {
      extra: f140(p305.extra, p306, p307)
    })
  };
  if ((v178 = p305.contexts) != null && v178.trace && vO16.contexts) {
    vO16.contexts.trace = p305.contexts.trace;
    if (p305.contexts.trace.data) {
      vO16.contexts.trace.data = f140(p305.contexts.trace.data, p306, p307);
    }
  }
  if (p305.spans) {
    vO16.spans = p305.spans.map(p309 => ({
      ...p309,
      ...(p309.data && {
        data: f140(p309.data, p306, p307)
      })
    }));
  }
  if ((v179 = p305.contexts) != null && v179.flags && vO16.contexts) {
    vO16.contexts.flags = f140(p305.contexts.flags, 3, p307);
  }
  return vO16;
}
function f169(p310, p311) {
  if (!p311) {
    return p310;
  }
  const v180 = p310 ? p310.clone() : new C2();
  v180.update(p311);
  return v180;
}
function f170(p312) {
  if (p312) {
    if (f171(p312)) {
      return {
        captureContext: p312
      };
    } else if (f172(p312)) {
      return {
        captureContext: p312
      };
    } else {
      return p312;
    }
  }
}
function f171(p313) {
  return p313 instanceof C2 || typeof p313 == "function";
}
const vA11 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
function f172(p314) {
  return Object.keys(p314).some(p315 => vA11.includes(p315));
}
function f173(p316, p317) {
  return f84().captureException(p316, f170(p317));
}
function f174(p318, p319) {
  return f84().captureEvent(p318, p319);
}
function f175(p320, p321) {
  f85().setContext(p320, p321);
}
function f176() {
  const vF882 = f88();
  return (vF882 == null ? undefined : vF882.getOptions().enabled) !== false && vF882 != null && !!vF882.getTransport();
}
function f177(p322) {
  const vF85 = f85();
  const vF84 = f84();
  const {
    userAgent: r
  } = vGlobalThis.navigator || {};
  const vF67 = f67({
    user: vF84.getUser() || vF85.getUser(),
    ...(r && {
      userAgent: r
    }),
    ...p322
  });
  const v181 = vF85.getSession();
  if ((v181 == null ? undefined : v181.status) === "ok") {
    f68(v181, {
      status: "exited"
    });
  }
  f178();
  vF85.setSession(vF67);
  return vF67;
}
function f178() {
  const vF852 = f85();
  const v182 = f84().getSession() || vF852.getSession();
  if (v182) {
    f69(v182);
  }
  f179();
  vF852.setSession();
}
function f179() {
  const vF853 = f85();
  const vF883 = f88();
  const v183 = vF853.getSession();
  if (v183 && vF883) {
    vF883.captureSession(v183);
  }
}
function f180(p323 = false) {
  if (p323) {
    f178();
    return;
  }
  f179();
}
export { f4 as $, vLSSentryexclusive_time as A, vLSSentryprofile_id as B, f88 as C, v5 as D, f95 as E, f84 as F, vGlobalThis as G, f129 as H, vLSSentrycustom_span_na as I, f115 as J, f32 as K, f134 as L, f109 as M, f87 as N, f2 as O, f83 as P, f75 as Q, f135 as R, vLN2 as S, vLN06 as T, f85 as U, f127 as V, f94 as W, vLSSentrysample_rate as X, vLSSentryidle_span_fini as Y, f128 as Z, f74 as _, f132 as a, f62 as a0, f108 as a1, f55 as a2, f60 as a3, f27 as a4, f68 as a5, vLSProduction as a6, f163 as a7, f89 as a8, f137 as a9, f42 as aA, f39 as aB, f43 as aC, f58 as aD, f59 as aE, f22 as aF, f23 as aG, f24 as aH, f29 as aI, f141 as aJ, f48 as aK, f66 as aL, f37 as aM, f40 as aN, f25 as aO, f14 as aP, vLS as aQ, f50 as aR, f177 as aS, f180 as aT, f174 as aU, f15 as aV, vLSSentryprevious_trace as aW, vLSSentrylinktype as aX, f111 as aY, f151 as aa, f26 as ab, f71 as ac, f28 as ad, f5 as ae, f150 as af, vLS10250 as ag, f176 as ah, f117 as ai, f97 as aj, v107 as ak, f118 as al, f112 as am, f113 as an, f44 as ao, f57 as ap, f52 as aq, f34 as ar, vA as as, f41 as at, vO as au, f19 as av, f91 as aw, f36 as ax, vLSSentry as ay, f20 as az, f131 as b, f173 as c, vO3 as d, f72 as e, f73 as f, f18 as g, f3 as h, f51 as i, f102 as j, f138 as k, f122 as l, f133 as m, f140 as n, f125 as o, vLSSentrymeasurement_un as p, vLSSentrymeasurement_va as q, vLSSentryop as r, f175 as s, f64 as t, vLSSentryorigin as u, vLN12 as v, f120 as w, vLSSentrysource as x, f119 as y, f126 as z };