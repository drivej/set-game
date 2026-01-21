import { jsxs as ee, jsx as x, Fragment as _r } from "react/jsx-runtime";
import * as we from "react";
import { createContext as rn, useContext as nn, useMemo as Ue, forwardRef as ct, useRef as Ar, useState as ve, useLayoutEffect as Kt, useEffect as ge } from "react";
import on from "@emotion/styled";
import "@emotion/react";
import rt from "classnames";
function sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var He = { exports: {} }, Y = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function an() {
  if (Ht) return Y;
  Ht = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function y(l) {
    if (typeof l == "object" && l !== null) {
      var T = l.$$typeof;
      switch (T) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case c:
                case d:
                case h:
                  return l;
                case i:
                  return l;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return Y.ContextConsumer = i, Y.ContextProvider = a, Y.Element = e, Y.ForwardRef = c, Y.Fragment = r, Y.Lazy = d, Y.Memo = h, Y.Portal = t, Y.Profiler = o, Y.StrictMode = n, Y.Suspense = u, Y.SuspenseList = f, Y.isContextConsumer = function(l) {
    return y(l) === i;
  }, Y.isContextProvider = function(l) {
    return y(l) === a;
  }, Y.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, Y.isForwardRef = function(l) {
    return y(l) === c;
  }, Y.isFragment = function(l) {
    return y(l) === r;
  }, Y.isLazy = function(l) {
    return y(l) === d;
  }, Y.isMemo = function(l) {
    return y(l) === h;
  }, Y.isPortal = function(l) {
    return y(l) === t;
  }, Y.isProfiler = function(l) {
    return y(l) === o;
  }, Y.isStrictMode = function(l) {
    return y(l) === n;
  }, Y.isSuspense = function(l) {
    return y(l) === u;
  }, Y.isSuspenseList = function(l) {
    return y(l) === f;
  }, Y.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === u || l === f || typeof l == "object" && l !== null && (l.$$typeof === d || l.$$typeof === h || l.$$typeof === a || l.$$typeof === i || l.$$typeof === c || l.$$typeof === S || l.getModuleId !== void 0);
  }, Y.typeOf = y, Y;
}
var G = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function cn() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var T = l.$$typeof;
        switch (T) {
          case t:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case h:
              case S:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case u:
                  case m:
                  case d:
                    return l;
                  case a:
                    return l;
                  default:
                    return T;
                }
            }
          case r:
            return T;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    G.ContextConsumer = a, G.ContextProvider = c, G.Element = t, G.ForwardRef = u, G.Fragment = n, G.Lazy = m, G.Memo = d, G.Portal = r, G.Profiler = i, G.StrictMode = o, G.Suspense = f, G.SuspenseList = h, G.isContextConsumer = function(l) {
      return e(l) === a;
    }, G.isContextProvider = function(l) {
      return e(l) === c;
    }, G.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, G.isForwardRef = function(l) {
      return e(l) === u;
    }, G.isFragment = function(l) {
      return e(l) === n;
    }, G.isLazy = function(l) {
      return e(l) === m;
    }, G.isMemo = function(l) {
      return e(l) === d;
    }, G.isPortal = function(l) {
      return e(l) === r;
    }, G.isProfiler = function(l) {
      return e(l) === i;
    }, G.isStrictMode = function(l) {
      return e(l) === o;
    }, G.isSuspense = function(l) {
      return e(l) === f;
    }, G.isSuspenseList = function(l) {
      return e(l) === h;
    }, G.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === h || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === d || l.$$typeof === c || l.$$typeof === a || l.$$typeof === u || l.$$typeof === y || l.getModuleId !== void 0);
    }, G.typeOf = e;
  })()), G;
}
var Qt;
function ln() {
  return Qt || (Qt = 1, process.env.NODE_ENV === "production" ? He.exports = /* @__PURE__ */ an() : He.exports = /* @__PURE__ */ cn()), He.exports;
}
var nt = /* @__PURE__ */ ln();
function Se(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Rr(e) {
  if (/* @__PURE__ */ we.isValidElement(e) || nt.isValidElementType(e) || !Se(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Rr(e[r]);
  }), t;
}
function le(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Se(e) && Se(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ we.isValidElement(t[o]) || nt.isValidElementType(t[o]) ? n[o] = t[o] : Se(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Se(e[o]) ? n[o] = le(e[o], t[o], r) : r.clone ? n[o] = Se(t[o]) ? Rr(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
var Xe = { exports: {} }, Qe = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function un() {
  if (Jt) return W;
  Jt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function O(b) {
    if (typeof b == "object" && b !== null) {
      var F = b.$$typeof;
      switch (F) {
        case t:
          switch (b = b.type, b) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case h:
                case y:
                case S:
                case a:
                  return b;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function $(b) {
    return O(b) === f;
  }
  return W.AsyncMode = u, W.ConcurrentMode = f, W.ContextConsumer = c, W.ContextProvider = a, W.Element = t, W.ForwardRef = h, W.Fragment = n, W.Lazy = y, W.Memo = S, W.Portal = r, W.Profiler = i, W.StrictMode = o, W.Suspense = d, W.isAsyncMode = function(b) {
    return $(b) || O(b) === u;
  }, W.isConcurrentMode = $, W.isContextConsumer = function(b) {
    return O(b) === c;
  }, W.isContextProvider = function(b) {
    return O(b) === a;
  }, W.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, W.isForwardRef = function(b) {
    return O(b) === h;
  }, W.isFragment = function(b) {
    return O(b) === n;
  }, W.isLazy = function(b) {
    return O(b) === y;
  }, W.isMemo = function(b) {
    return O(b) === S;
  }, W.isPortal = function(b) {
    return O(b) === r;
  }, W.isProfiler = function(b) {
    return O(b) === i;
  }, W.isStrictMode = function(b) {
    return O(b) === o;
  }, W.isSuspense = function(b) {
    return O(b) === d;
  }, W.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === d || b === m || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === S || b.$$typeof === a || b.$$typeof === c || b.$$typeof === h || b.$$typeof === T || b.$$typeof === A || b.$$typeof === H || b.$$typeof === l);
  }, W.typeOf = O, W;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function fn() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
    function O(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === f || C === i || C === o || C === d || C === m || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === S || C.$$typeof === a || C.$$typeof === c || C.$$typeof === h || C.$$typeof === T || C.$$typeof === A || C.$$typeof === H || C.$$typeof === l);
    }
    function $(C) {
      if (typeof C == "object" && C !== null) {
        var me = C.$$typeof;
        switch (me) {
          case t:
            var Ke = C.type;
            switch (Ke) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case d:
                return Ke;
              default:
                var qt = Ke && Ke.$$typeof;
                switch (qt) {
                  case c:
                  case h:
                  case y:
                  case S:
                  case a:
                    return qt;
                  default:
                    return me;
                }
            }
          case r:
            return me;
        }
      }
    }
    var b = u, F = f, Q = c, X = a, M = t, s = h, g = n, w = y, _ = S, Z = r, V = i, te = o, oe = d, ye = !1;
    function je(C) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(C) || $(C) === u;
    }
    function v(C) {
      return $(C) === f;
    }
    function E(C) {
      return $(C) === c;
    }
    function I(C) {
      return $(C) === a;
    }
    function P(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function R(C) {
      return $(C) === h;
    }
    function D(C) {
      return $(C) === n;
    }
    function k(C) {
      return $(C) === y;
    }
    function N(C) {
      return $(C) === S;
    }
    function B(C) {
      return $(C) === r;
    }
    function z(C) {
      return $(C) === i;
    }
    function L(C) {
      return $(C) === o;
    }
    function se(C) {
      return $(C) === d;
    }
    U.AsyncMode = b, U.ConcurrentMode = F, U.ContextConsumer = Q, U.ContextProvider = X, U.Element = M, U.ForwardRef = s, U.Fragment = g, U.Lazy = w, U.Memo = _, U.Portal = Z, U.Profiler = V, U.StrictMode = te, U.Suspense = oe, U.isAsyncMode = je, U.isConcurrentMode = v, U.isContextConsumer = E, U.isContextProvider = I, U.isElement = P, U.isForwardRef = R, U.isFragment = D, U.isLazy = k, U.isMemo = N, U.isPortal = B, U.isProfiler = z, U.isStrictMode = L, U.isSuspense = se, U.isValidElementType = O, U.typeOf = $;
  })()), U;
}
var er;
function kr() {
  return er || (er = 1, process.env.NODE_ENV === "production" ? Qe.exports = un() : Qe.exports = fn()), Qe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var St, tr;
function dn() {
  if (tr) return St;
  tr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(h) {
        return a[h];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return St = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), f, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var d in c)
        t.call(c, d) && (u[d] = c[d]);
      if (e) {
        f = e(c);
        for (var m = 0; m < f.length; m++)
          r.call(c, f[m]) && (u[f[m]] = c[f[m]]);
      }
    }
    return u;
  }, St;
}
var Ct, rr;
function Lt() {
  if (rr) return Ct;
  rr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ct = e, Ct;
}
var Et, nr;
function Pr() {
  return nr || (nr = 1, Et = Function.call.bind(Object.prototype.hasOwnProperty)), Et;
}
var Tt, or;
function pn() {
  if (or) return Tt;
  or = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Lt(), r = {}, n = /* @__PURE__ */ Pr();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var d;
          try {
            if (typeof i[h] != "function") {
              var m = Error(
                (u || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = i[h](a, h, u, c, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var S = f ? f() : "";
            e(
              "Failed " + c + " type: " + d.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Tt = o, Tt;
}
var wt, ir;
function mn() {
  if (ir) return wt;
  ir = 1;
  var e = kr(), t = dn(), r = /* @__PURE__ */ Lt(), n = /* @__PURE__ */ Pr(), o = /* @__PURE__ */ pn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return wt = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function d(v) {
      var E = v && (f && v[f] || v[h]);
      if (typeof E == "function")
        return E;
    }
    var m = "<<anonymous>>", S = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: H(),
      arrayOf: O,
      element: $(),
      elementType: b(),
      instanceOf: F,
      node: s(),
      objectOf: X,
      oneOf: Q,
      oneOfType: M,
      shape: w,
      exact: _
    };
    function y(v, E) {
      return v === E ? v !== 0 || 1 / v === 1 / E : v !== v && E !== E;
    }
    function l(v, E) {
      this.message = v, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function T(v) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, I = 0;
      function P(D, k, N, B, z, L, se) {
        if (B = B || m, L = L || N, se !== r) {
          if (u) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = B + ":" + N;
            !E[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[me] = !0, I++);
          }
        }
        return k[N] == null ? D ? k[N] === null ? new l("The " + z + " `" + L + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new l("The " + z + " `" + L + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : v(k, N, B, z, L);
      }
      var R = P.bind(null, !1);
      return R.isRequired = P.bind(null, !0), R;
    }
    function A(v) {
      function E(I, P, R, D, k, N) {
        var B = I[P], z = te(B);
        if (z !== v) {
          var L = oe(B);
          return new l(
            "Invalid " + D + " `" + k + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return T(E);
    }
    function H() {
      return T(a);
    }
    function O(v) {
      function E(I, P, R, D, k) {
        if (typeof v != "function")
          return new l("Property `" + k + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var N = I[P];
        if (!Array.isArray(N)) {
          var B = te(N);
          return new l("Invalid " + D + " `" + k + "` of type " + ("`" + B + "` supplied to `" + R + "`, expected an array."));
        }
        for (var z = 0; z < N.length; z++) {
          var L = v(N, z, R, D, k + "[" + z + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return T(E);
    }
    function $() {
      function v(E, I, P, R, D) {
        var k = E[I];
        if (!c(k)) {
          var N = te(k);
          return new l("Invalid " + R + " `" + D + "` of type " + ("`" + N + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(v);
    }
    function b() {
      function v(E, I, P, R, D) {
        var k = E[I];
        if (!e.isValidElementType(k)) {
          var N = te(k);
          return new l("Invalid " + R + " `" + D + "` of type " + ("`" + N + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(v);
    }
    function F(v) {
      function E(I, P, R, D, k) {
        if (!(I[P] instanceof v)) {
          var N = v.name || m, B = je(I[P]);
          return new l("Invalid " + D + " `" + k + "` of type " + ("`" + B + "` supplied to `" + R + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return T(E);
    }
    function Q(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function E(I, P, R, D, k) {
        for (var N = I[P], B = 0; B < v.length; B++)
          if (y(N, v[B]))
            return null;
        var z = JSON.stringify(v, function(se, C) {
          var me = oe(C);
          return me === "symbol" ? String(C) : C;
        });
        return new l("Invalid " + D + " `" + k + "` of value `" + String(N) + "` " + ("supplied to `" + R + "`, expected one of " + z + "."));
      }
      return T(E);
    }
    function X(v) {
      function E(I, P, R, D, k) {
        if (typeof v != "function")
          return new l("Property `" + k + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var N = I[P], B = te(N);
        if (B !== "object")
          return new l("Invalid " + D + " `" + k + "` of type " + ("`" + B + "` supplied to `" + R + "`, expected an object."));
        for (var z in N)
          if (n(N, z)) {
            var L = v(N, z, R, D, k + "." + z, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return T(E);
    }
    function M(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var E = 0; E < v.length; E++) {
        var I = v[E];
        if (typeof I != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(I) + " at index " + E + "."
          ), a;
      }
      function P(R, D, k, N, B) {
        for (var z = [], L = 0; L < v.length; L++) {
          var se = v[L], C = se(R, D, k, N, B, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && z.push(C.data.expectedType);
        }
        var me = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new l("Invalid " + N + " `" + B + "` supplied to " + ("`" + k + "`" + me + "."));
      }
      return T(P);
    }
    function s() {
      function v(E, I, P, R, D) {
        return Z(E[I]) ? null : new l("Invalid " + R + " `" + D + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return T(v);
    }
    function g(v, E, I, P, R) {
      return new l(
        (v || "React class") + ": " + E + " type `" + I + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function w(v) {
      function E(I, P, R, D, k) {
        var N = I[P], B = te(N);
        if (B !== "object")
          return new l("Invalid " + D + " `" + k + "` of type `" + B + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var z in v) {
          var L = v[z];
          if (typeof L != "function")
            return g(R, D, k, z, oe(L));
          var se = L(N, z, R, D, k + "." + z, r);
          if (se)
            return se;
        }
        return null;
      }
      return T(E);
    }
    function _(v) {
      function E(I, P, R, D, k) {
        var N = I[P], B = te(N);
        if (B !== "object")
          return new l("Invalid " + D + " `" + k + "` of type `" + B + "` " + ("supplied to `" + R + "`, expected `object`."));
        var z = t({}, I[P], v);
        for (var L in z) {
          var se = v[L];
          if (n(v, L) && typeof se != "function")
            return g(R, D, k, L, oe(se));
          if (!se)
            return new l(
              "Invalid " + D + " `" + k + "` key `" + L + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(I[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var C = se(N, L, R, D, k + "." + L, r);
          if (C)
            return C;
        }
        return null;
      }
      return T(E);
    }
    function Z(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(Z);
          if (v === null || c(v))
            return !0;
          var E = d(v);
          if (E) {
            var I = E.call(v), P;
            if (E !== v.entries) {
              for (; !(P = I.next()).done; )
                if (!Z(P.value))
                  return !1;
            } else
              for (; !(P = I.next()).done; ) {
                var R = P.value;
                if (R && !Z(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(v, E) {
      return v === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function te(v) {
      var E = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : V(E, v) ? "symbol" : E;
    }
    function oe(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var E = te(v);
      if (E === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function ye(v) {
      var E = oe(v);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function je(v) {
      return !v.constructor || !v.constructor.name ? m : v.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, wt;
}
var xt, sr;
function hn() {
  if (sr) return xt;
  sr = 1;
  var e = /* @__PURE__ */ Lt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, xt = function() {
    function n(a, c, u, f, h, d) {
      if (d !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, xt;
}
var ar;
function gn() {
  if (ar) return Xe.exports;
  if (ar = 1, process.env.NODE_ENV !== "production") {
    var e = kr(), t = !0;
    Xe.exports = /* @__PURE__ */ mn()(e.isElement, t);
  } else
    Xe.exports = /* @__PURE__ */ hn()();
  return Xe.exports;
}
var yn = /* @__PURE__ */ gn();
const j = /* @__PURE__ */ sn(yn);
function xe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Ir(e, t = "") {
  return e.displayName || e.name || t;
}
function cr(e, t, r) {
  const n = Ir(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function bn(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ir(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case nt.ForwardRef:
          return cr(e, e.render, "ForwardRef");
        case nt.Memo:
          return cr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Re(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : xe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Dt(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const u = c;
              r[o][u] = Dt(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function vn(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (a += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
const lr = (e) => e, Sn = () => {
  let e = lr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = lr;
    }
  };
}, Cn = Sn(), En = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function jt(e, t, r = "Mui") {
  const n = En[t];
  return n ? `${r}-${n}` : `${Cn.generate(e)}-${t}`;
}
function Tn(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = jt(e, o, r);
  }), n;
}
function wn(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Nr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Nr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function xn() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Nr(e)) && (n && (n += " "), n += t);
  return n;
}
function ze(e, t) {
  return t ? le(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Oe = process.env.NODE_ENV !== "production" ? j.oneOfType([j.number, j.string, j.object, j.array]) : {};
function ur(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(n.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function $n(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function On(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : xe(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function _n(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = t(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const lt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, fr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${lt[e]}px)`
}, An = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : lt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ce(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || fr;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || fr;
    return Object.keys(t).reduce((a, c) => {
      if ($n(i.keys, c)) {
        const u = On(n.containerQueries ? n : An, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || lt).includes(c)) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Rn(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function dr(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ut(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ot(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ut(e, r) || n, t && (o = t(o, n, e)), o;
}
function ie(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, f = ut(u, n) || {};
    return Ce(a, c, (d) => {
      let m = ot(f, o, d);
      return d === m && typeof d == "string" && (m = ot(f, o, `${t}${d === "default" ? "" : Re(d)}`, d)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Oe
  } : {}, i.filterProps = [t], i;
}
function kn(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Pn = {
  m: "margin",
  p: "padding"
}, In = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Nn = kn((e) => {
  if (e.length > 2)
    if (pr[e])
      e = pr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Pn[t], o = In[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ft = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], dt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Dn = [...ft, ...dt];
function Ge(e, t, r, n) {
  const o = ut(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ft(e) {
  return Ge(e, "spacing", 8, "spacing");
}
function qe(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Mn(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = qe(t, r), n), {});
}
function Bn(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Nn(r), i = Mn(o, n), a = e[r];
  return Ce(e, a, i);
}
function Dr(e, t) {
  const r = Ft(e.theme);
  return Object.keys(e).map((n) => Bn(e, t, n, r)).reduce(ze, {});
}
function re(e) {
  return Dr(e, ft);
}
re.propTypes = process.env.NODE_ENV !== "production" ? ft.reduce((e, t) => (e[t] = Oe, e), {}) : {};
re.filterProps = ft;
function ne(e) {
  return Dr(e, dt);
}
ne.propTypes = process.env.NODE_ENV !== "production" ? dt.reduce((e, t) => (e[t] = Oe, e), {}) : {};
ne.filterProps = dt;
process.env.NODE_ENV !== "production" && Dn.reduce((e, t) => (e[t] = Oe, e), {});
function pt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? ze(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function pe(e, t) {
  return ie({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ln = pe("border", ue), jn = pe("borderTop", ue), Fn = pe("borderRight", ue), Vn = pe("borderBottom", ue), Wn = pe("borderLeft", ue), Un = pe("borderColor"), zn = pe("borderTopColor"), Yn = pe("borderRightColor"), Gn = pe("borderBottomColor"), qn = pe("borderLeftColor"), Kn = pe("outline", ue), Hn = pe("outlineColor"), mt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ge(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: qe(t, n)
    });
    return Ce(e, e.borderRadius, r);
  }
  return null;
};
mt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Oe
} : {};
mt.filterProps = ["borderRadius"];
pt(Ln, jn, Fn, Vn, Wn, Un, zn, Yn, Gn, qn, mt, Kn, Hn);
const ht = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ge(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: qe(t, n)
    });
    return Ce(e, e.gap, r);
  }
  return null;
};
ht.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Oe
} : {};
ht.filterProps = ["gap"];
const gt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ge(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: qe(t, n)
    });
    return Ce(e, e.columnGap, r);
  }
  return null;
};
gt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Oe
} : {};
gt.filterProps = ["columnGap"];
const yt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ge(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: qe(t, n)
    });
    return Ce(e, e.rowGap, r);
  }
  return null;
};
yt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Oe
} : {};
yt.filterProps = ["rowGap"];
const Xn = ie({
  prop: "gridColumn"
}), Qn = ie({
  prop: "gridRow"
}), Jn = ie({
  prop: "gridAutoFlow"
}), Zn = ie({
  prop: "gridAutoColumns"
}), eo = ie({
  prop: "gridAutoRows"
}), to = ie({
  prop: "gridTemplateColumns"
}), ro = ie({
  prop: "gridTemplateRows"
}), no = ie({
  prop: "gridTemplateAreas"
}), oo = ie({
  prop: "gridArea"
});
pt(ht, gt, yt, Xn, Qn, Jn, Zn, eo, to, ro, no, oo);
function Me(e, t) {
  return t === "grey" ? t : e;
}
const io = ie({
  prop: "color",
  themeKey: "palette",
  transform: Me
}), so = ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Me
}), ao = ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Me
});
pt(io, so, ao);
function ce(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const co = ie({
  prop: "width",
  transform: ce
}), Vt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || lt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ce(r)
      };
    };
    return Ce(e, e.maxWidth, t);
  }
  return null;
};
Vt.filterProps = ["maxWidth"];
const lo = ie({
  prop: "minWidth",
  transform: ce
}), uo = ie({
  prop: "height",
  transform: ce
}), fo = ie({
  prop: "maxHeight",
  transform: ce
}), po = ie({
  prop: "minHeight",
  transform: ce
});
ie({
  prop: "size",
  cssProperty: "width",
  transform: ce
});
ie({
  prop: "size",
  cssProperty: "height",
  transform: ce
});
const mo = ie({
  prop: "boxSizing"
});
pt(co, Vt, lo, uo, fo, po, mo);
const bt = {
  // borders
  border: {
    themeKey: "borders",
    transform: ue
  },
  borderTop: {
    themeKey: "borders",
    transform: ue
  },
  borderRight: {
    themeKey: "borders",
    transform: ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: ue
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: mt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Me
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Me
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Me
  },
  // spacing
  p: {
    style: ne
  },
  pt: {
    style: ne
  },
  pr: {
    style: ne
  },
  pb: {
    style: ne
  },
  pl: {
    style: ne
  },
  px: {
    style: ne
  },
  py: {
    style: ne
  },
  padding: {
    style: ne
  },
  paddingTop: {
    style: ne
  },
  paddingRight: {
    style: ne
  },
  paddingBottom: {
    style: ne
  },
  paddingLeft: {
    style: ne
  },
  paddingX: {
    style: ne
  },
  paddingY: {
    style: ne
  },
  paddingInline: {
    style: ne
  },
  paddingInlineStart: {
    style: ne
  },
  paddingInlineEnd: {
    style: ne
  },
  paddingBlock: {
    style: ne
  },
  paddingBlockStart: {
    style: ne
  },
  paddingBlockEnd: {
    style: ne
  },
  m: {
    style: re
  },
  mt: {
    style: re
  },
  mr: {
    style: re
  },
  mb: {
    style: re
  },
  ml: {
    style: re
  },
  mx: {
    style: re
  },
  my: {
    style: re
  },
  margin: {
    style: re
  },
  marginTop: {
    style: re
  },
  marginRight: {
    style: re
  },
  marginBottom: {
    style: re
  },
  marginLeft: {
    style: re
  },
  marginX: {
    style: re
  },
  marginY: {
    style: re
  },
  marginInline: {
    style: re
  },
  marginInlineStart: {
    style: re
  },
  marginInlineEnd: {
    style: re
  },
  marginBlock: {
    style: re
  },
  marginBlockStart: {
    style: re
  },
  marginBlockEnd: {
    style: re
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ht
  },
  rowGap: {
    style: yt
  },
  columnGap: {
    style: gt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ce
  },
  maxWidth: {
    style: Vt
  },
  minWidth: {
    transform: ce
  },
  height: {
    transform: ce
  },
  maxHeight: {
    transform: ce
  },
  minHeight: {
    transform: ce
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ho(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function go(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yo() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: h,
      style: d
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = ut(o, f) || {};
    return d ? d(a) : Ce(a, n, (y) => {
      let l = ot(m, h, y);
      return y === l && typeof y == "string" && (l = ot(m, h, `${r}${y === "default" ? "" : Re(y)}`, y)), u === !1 ? l : {
        [u]: l
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? bt;
    function c(u) {
      let f = u;
      if (typeof u == "function")
        f = u(o);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const h = Rn(o.breakpoints), d = Object.keys(h);
      let m = h;
      return Object.keys(f).forEach((S) => {
        const y = go(f[S], o);
        if (y != null)
          if (typeof y == "object")
            if (a[S])
              m = ze(m, e(S, y, o, a));
            else {
              const l = Ce({
                theme: o
              }, y, (T) => ({
                [S]: T
              }));
              ho(l, y) ? m[S] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : m = ze(m, l);
            }
          else
            m = ze(m, e(S, y, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": ur(o, dr(d, m))
      } : ur(o, dr(d, m));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const Le = yo();
Le.filterProps = ["sx"];
function bo(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var vo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function So(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Co = /[A-Z]|^ms/g, Eo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mr = function(t) {
  return t.charCodeAt(1) === 45;
}, mr = function(t) {
  return t != null && typeof t != "boolean";
}, $t = /* @__PURE__ */ So(function(e) {
  return Mr(e) ? e : e.replace(Co, "-$&").toLowerCase();
}), hr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Eo, function(n, o, i) {
          return Te = {
            name: o,
            styles: i,
            next: Te
          }, o;
        });
  }
  return vo[t] !== 1 && !Mr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function it(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Te = {
          name: o.name,
          styles: o.styles,
          next: Te
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Te = {
              name: a.name,
              styles: a.styles,
              next: Te
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return To(e, t, r);
    }
  }
  var u = r;
  return u;
}
function To(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += it(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        mr(c) && (n += $t(i) + ":" + hr(i, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var u = 0; u < a.length; u++)
          mr(a[u]) && (n += $t(i) + ":" + hr(i, a[u]) + ";");
      else {
        var f = it(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += $t(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var gr = /label:\s*([^\s;{]+)\s*(;|$)/g, Te;
function wo(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Te = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += it(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += it(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  gr.lastIndex = 0;
  for (var f = "", h; (h = gr.exec(o)) !== null; )
    f += "-" + h[1];
  var d = bo(o) + f;
  return {
    name: d,
    styles: o,
    next: Te
  };
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function xo(e, t) {
  const r = on(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function $o(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const yr = [];
function Ae(e) {
  return yr[0] = e, wo(yr);
}
const Oo = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function _o(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Oo(t), a = Object.keys(i);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function u(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function f(m, S) {
    const y = a.indexOf(S);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : S) - n / 100}${r})`;
  }
  function h(m) {
    return a.indexOf(m) + 1 < a.length ? f(m, a[a.indexOf(m) + 1]) : c(m);
  }
  function d(m) {
    const S = a.indexOf(m);
    return S === 0 ? c(a[1]) : S === a.length - 1 ? u(a[S]) : f(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: f,
    only: h,
    not: d,
    unit: r,
    ...o
  };
}
const Ao = {
  borderRadius: 4
};
function Br(e = 8, t = Ft({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ro(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Lr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = _o(r), u = Br(o);
  let f = le({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Ao,
      ...i
    }
  }, a);
  return f = _n(f), f.applyStyles = Ro, f = t.reduce((h, d) => le(h, d), f), f.unstable_sxConfig = {
    ...bt,
    ...a?.unstable_sxConfig
  }, f.unstable_sx = function(d) {
    return Le({
      sx: d,
      theme: this
    });
  }, f;
}
function jr(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ae(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ae(o.style));
  }), n;
}
const ko = Lr();
function Ot(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function _e(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Po(e) {
  return e ? (t, r) => r[e] : null;
}
function Io(e, t, r) {
  e.theme = Bo(e.theme) ? r : e.theme[t] || e.theme;
}
function tt(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => tt(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? _e(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = r ? _e(Ae(a), r) : a;
    }
    return Fr(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? _e(Ae(n.style), r) : n.style : r ? _e(Ae(n), r) : n;
}
function Fr(e, t, r = [], n = void 0) {
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(o))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && e.ownerState?.[c] !== a.props[c])
          continue e;
    typeof a.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? _e(Ae(a.style(o)), n) : a.style(o))) : r.push(n ? _e(Ae(a.style), n) : a.style);
  }
  return r;
}
function No(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ko,
    rootShouldForwardProp: n = Ot,
    slotShouldForwardProp: o = Ot
  } = e;
  function i(c) {
    Io(c, t, r);
  }
  return (c, u = {}) => {
    $o(c, (F) => F.filter((Q) => Q !== Le));
    const {
      name: f,
      slot: h,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = Po(Vr(h)),
      ...y
    } = u, l = f && f.startsWith("Mui") || h ? "components" : "custom", T = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), A = m || !1;
    let H = Ot;
    h === "Root" || h === "root" ? H = n : h ? H = o : Lo(c) && (H = void 0);
    const O = xo(c, {
      shouldForwardProp: H,
      label: Mo(f, h),
      ...y
    }), $ = (F) => {
      if (F.__emotion_real === F)
        return F;
      if (typeof F == "function")
        return function(X) {
          return tt(X, F, X.theme.modularCssLayers ? l : void 0);
        };
      if (Se(F)) {
        const Q = jr(F);
        return function(M) {
          return Q.variants ? tt(M, Q, M.theme.modularCssLayers ? l : void 0) : M.theme.modularCssLayers ? _e(Q.style, l) : Q.style;
        };
      }
      return F;
    }, b = (...F) => {
      const Q = [], X = F.map($), M = [];
      if (Q.push(i), f && S && M.push(function(_) {
        const V = _.theme.components?.[f]?.styleOverrides;
        if (!V)
          return null;
        const te = {};
        for (const oe in V)
          te[oe] = tt(_, V[oe], _.theme.modularCssLayers ? "theme" : void 0);
        return S(_, te);
      }), f && !T && M.push(function(_) {
        const V = _.theme?.components?.[f]?.variants;
        return V ? Fr(_, V, [], _.theme.modularCssLayers ? "theme" : void 0) : null;
      }), A || M.push(Le), Array.isArray(X[0])) {
        const w = X.shift(), _ = new Array(Q.length).fill(""), Z = new Array(M.length).fill("");
        let V;
        V = [..._, ...w, ...Z], V.raw = [..._, ...w.raw, ...Z], Q.unshift(V);
      }
      const s = [...Q, ...X, ...M], g = O(...s);
      return c.muiName && (g.muiName = c.muiName), process.env.NODE_ENV !== "production" && (g.displayName = Do(f, h, c)), g;
    };
    return O.withConfig && (b.withConfig = O.withConfig), b;
  };
}
function Do(e, t, r) {
  return e ? `${e}${Re(t || "")}` : `Styled(${bn(r)})`;
}
function Mo(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Vr(t || "Root")}`), r;
}
function Bo(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Lo(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Vr(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Wt(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), wn(e, t, r);
}
function jo(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $e(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return $e(jo(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : xe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : xe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Fo = (e) => {
  const t = $e(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ve = (e, t) => {
  try {
    return Fo(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function vt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Wr(e) {
  e = $e(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, h = (f + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), vt({
    type: c,
    values: u
  });
}
function Mt(e) {
  e = $e(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $e(Wr(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function br(e, t) {
  const r = Mt(e), n = Mt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Vo(e, t) {
  return e = $e(e), t = Wt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, vt(e);
}
function Je(e, t, r) {
  try {
    return Vo(e, t);
  } catch {
    return e;
  }
}
function Ut(e, t) {
  if (e = $e(e), t = Wt(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return vt(e);
}
function q(e, t, r) {
  try {
    return Ut(e, t);
  } catch {
    return e;
  }
}
function zt(e, t) {
  if (e = $e(e), t = Wt(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return vt(e);
}
function K(e, t, r) {
  try {
    return zt(e, t);
  } catch {
    return e;
  }
}
function Wo(e, t = 0.15) {
  return Mt(e) > 0.5 ? Ut(e, t) : zt(e, t);
}
function Ze(e, t, r) {
  try {
    return Wo(e, t);
  } catch {
    return e;
  }
}
const Uo = /* @__PURE__ */ we.createContext(void 0);
process.env.NODE_ENV !== "production" && (j.node, j.object);
function zo(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Dt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Dt(o, n) : n;
}
function Yo({
  props: e,
  name: t
}) {
  const r = we.useContext(Uo);
  return zo({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const vr = {
  theme: void 0
};
function Go(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (vr.theme = o.theme, i = jr(e(vr)), t = i, r = o.theme), i;
  };
}
function qo(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Sr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ko = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, Ho = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function _t(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Ko(
    e,
    (c, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const h = `--${r ? `${r}-` : ""}${c.join("-")}`, d = Ho(c, u);
        Object.assign(o, {
          [h]: d
        }), Sr(i, c, `var(${h})`, f), Sr(a, c, `var(${h}, ${d})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Xo(e, t = {}) {
  const {
    getSelector: r = T,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: f,
    css: h,
    varsWithDefaults: d
  } = _t(u, t);
  let m = d;
  const S = {}, {
    [c]: y,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([O, $]) => {
    const {
      vars: b,
      css: F,
      varsWithDefaults: Q
    } = _t($, t);
    m = le(m, Q), S[O] = {
      css: F,
      vars: b
    };
  }), y) {
    const {
      css: O,
      vars: $,
      varsWithDefaults: b
    } = _t(y, t);
    m = le(m, b), S[c] = {
      css: O,
      vars: $
    };
  }
  function T(O, $) {
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), O) {
      if (b === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${i[O]?.palette?.mode || O})`]: {
            ":root": $
          }
        };
      if (b)
        return e.defaultColorScheme === O ? `:root, ${b.replace("%s", String(O))}` : b.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let O = {
        ...f
      };
      return Object.entries(S).forEach(([, {
        vars: $
      }]) => {
        O = le(O, $);
      }), O;
    },
    generateStyleSheets: () => {
      const O = [], $ = e.defaultColorScheme || "light";
      function b(X, M) {
        Object.keys(M).length && O.push(typeof X == "string" ? {
          [X]: {
            ...M
          }
        } : X);
      }
      b(r(void 0, {
        ...h
      }), h);
      const {
        [$]: F,
        ...Q
      } = S;
      if (F) {
        const {
          css: X
        } = F, M = i[$]?.palette?.mode, s = !n && M ? {
          colorScheme: M,
          ...X
        } : {
          ...X
        };
        b(r($, {
          ...s
        }), s);
      }
      return Object.entries(Q).forEach(([X, {
        css: M
      }]) => {
        const s = i[X]?.palette?.mode, g = !n && s ? {
          colorScheme: s,
          ...M
        } : {
          ...M
        };
        b(r(X, {
          ...g
        }), g);
      }), O;
    }
  };
}
function Qo(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ye = {
  black: "#000",
  white: "#fff"
}, Jo = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ke = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Pe = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Fe = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ie = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ne = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, De = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Ur() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ye.white,
      default: Ye.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Zo = Ur();
function zr() {
  return {
    text: {
      primary: Ye.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ye.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Cr = zr();
function Er(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = zt(e.main, o) : t === "dark" && (e.dark = Ut(e.main, i)));
}
function ei(e = "light") {
  return e === "dark" ? {
    main: Ie[200],
    light: Ie[50],
    dark: Ie[400]
  } : {
    main: Ie[700],
    light: Ie[400],
    dark: Ie[800]
  };
}
function ti(e = "light") {
  return e === "dark" ? {
    main: ke[200],
    light: ke[50],
    dark: ke[400]
  } : {
    main: ke[500],
    light: ke[300],
    dark: ke[700]
  };
}
function ri(e = "light") {
  return e === "dark" ? {
    main: Pe[500],
    light: Pe[300],
    dark: Pe[700]
  } : {
    main: Pe[700],
    light: Pe[400],
    dark: Pe[800]
  };
}
function ni(e = "light") {
  return e === "dark" ? {
    main: Ne[400],
    light: Ne[300],
    dark: Ne[700]
  } : {
    main: Ne[700],
    light: Ne[500],
    dark: Ne[900]
  };
}
function oi(e = "light") {
  return e === "dark" ? {
    main: De[400],
    light: De[300],
    dark: De[700]
  } : {
    main: De[800],
    light: De[500],
    dark: De[900]
  };
}
function ii(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fe[500],
    dark: Fe[900]
  };
}
function Yt(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || ei(t), a = e.secondary || ti(t), c = e.error || ri(t), u = e.info || ni(t), f = e.success || oi(t), h = e.warning || ii(t);
  function d(l) {
    const T = br(l, Cr.text.primary) >= r ? Cr.text.primary : Zo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const A = br(l, T);
      A < 3 && console.error([`MUI: The contrast ratio of ${A}:1 for ${T} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const m = ({
    color: l,
    name: T,
    mainShade: A = 500,
    lightShade: H = 300,
    darkShade: O = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[A] && (l.main = l[A]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${A}\` property.` : xe(11, T ? ` (${T})` : "", A));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : xe(12, T ? ` (${T})` : "", JSON.stringify(l.main)));
    return Er(l, "light", H, n), Er(l, "dark", O, n), l.contrastText || (l.contrastText = d(l.main)), l;
  };
  let S;
  return t === "light" ? S = Ur() : t === "dark" && (S = zr()), process.env.NODE_ENV !== "production" && (S || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), le({
    // A collection of common colors.
    common: {
      ...Ye
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Jo,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S
  }, o);
}
function si(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function ai(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ci(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Tr = {
  textTransform: "uppercase"
}, wr = '"Roboto", "Helvetica", "Arial", sans-serif';
function li(e, t) {
  const {
    fontFamily: r = wr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, S = h || ((T) => `${T / u * m}rem`), y = (T, A, H, O, $) => ({
    fontFamily: r,
    fontWeight: T,
    fontSize: S(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: H,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === wr ? {
      letterSpacing: `${ci(O / A)}em`
    } : {},
    ...$,
    ...f
  }), l = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Tr),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, Tr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return le({
    htmlFontSize: u,
    pxToRem: S,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...l
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const ui = 0.2, fi = 0.14, di = 0.12;
function J(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ui})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fi})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${di})`].join(",");
}
const pi = ["none", J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], mi = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, hi = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function xr(e) {
  return `${Math.round(e)}ms`;
}
function gi(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function yi(e) {
  const t = {
    ...mi,
    ...e.easing
  }, r = {
    ...hi,
    ...e.duration
  };
  return {
    getAutoHeightDuration: gi,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (m) => typeof m == "string", d = (m) => !Number.isNaN(parseFloat(m));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !h(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), h(c) || console.error('MUI: Argument "easing" must be a string.'), !d(u) && !h(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof a == "string" ? a : xr(a)} ${c} ${typeof u == "string" ? u : xr(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const bi = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function vi(e) {
  return Se(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Yr(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !vi(c) || a.startsWith("unstable_") ? delete n[a] : Se(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Bt(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : xe(20));
  const h = Yt(i), d = Lr(e);
  let m = le(d, {
    mixins: ai(d.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: pi.slice(),
    typography: li(h, c),
    transitions: yi(a),
    zIndex: {
      ...bi
    }
  });
  if (m = le(m, f), m = t.reduce((S, y) => le(S, y), m), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (l, T) => {
      let A;
      for (A in l) {
        const H = l[A];
        if (S.includes(A) && Object.keys(H).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = jt("", A);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${A}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: H
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[A] = {};
        }
      }
    };
    Object.keys(m.components).forEach((l) => {
      const T = m.components[l].styleOverrides;
      T && l.startsWith("Mui") && y(T, l);
    });
  }
  return m.unstable_sxConfig = {
    ...bt,
    ...f?.unstable_sxConfig
  }, m.unstable_sx = function(y) {
    return Le({
      sx: y,
      theme: this
    });
  }, m.toRuntimeSource = Yr, m;
}
function Si(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ci = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Si(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Gr(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function qr(e) {
  return e === "dark" ? Ci : [];
}
function Ei(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Yt(t);
  return {
    palette: i,
    opacity: {
      ...Gr(i.mode),
      ...r
    },
    overlays: n || qr(i.mode),
    ...o
  };
}
function Ti(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const wi = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xi = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return wi(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function $i(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function p(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function We(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Wr(e);
}
function be(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ve(We(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Oi(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const he = (e) => {
  try {
    return e();
  } catch {
  }
}, _i = (e = "mui") => qo(e);
function At(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Ei({
      ...t,
      palette: {
        mode: o,
        ...t?.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Bt({
    ...r,
    palette: {
      mode: o,
      ...t?.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Gr(o),
      ...t?.opacity
    },
    overlays: t?.overlays || qr(o)
  }, a;
}
function Ai(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Ti,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, h = Object.keys(r)[0], d = n || (r.light && h !== "light" ? "light" : h), m = _i(i), {
    [d]: S,
    light: y,
    dark: l,
    ...T
  } = r, A = {
    ...T
  };
  let H = S;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (H = !0), !H)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : xe(21, d));
  const O = At(A, H, f, d);
  y && !A.light && At(A, y, void 0, "light"), l && !A.dark && At(A, l, void 0, "dark");
  let $ = {
    defaultColorScheme: d,
    ...O,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: m,
    colorSchemes: A,
    font: {
      ...si(O.typography),
      ...O.font
    },
    spacing: Oi(f.spacing)
  };
  Object.keys($.colorSchemes).forEach((M) => {
    const s = $.colorSchemes[M].palette, g = (w) => {
      const _ = w.split("-"), Z = _[1], V = _[2];
      return m(w, s[Z][V]);
    };
    if (s.mode === "light" && (p(s.common, "background", "#fff"), p(s.common, "onBackground", "#000")), s.mode === "dark" && (p(s.common, "background", "#000"), p(s.common, "onBackground", "#fff")), $i(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      p(s.Alert, "errorColor", q(s.error.light, 0.6)), p(s.Alert, "infoColor", q(s.info.light, 0.6)), p(s.Alert, "successColor", q(s.success.light, 0.6)), p(s.Alert, "warningColor", q(s.warning.light, 0.6)), p(s.Alert, "errorFilledBg", g("palette-error-main")), p(s.Alert, "infoFilledBg", g("palette-info-main")), p(s.Alert, "successFilledBg", g("palette-success-main")), p(s.Alert, "warningFilledBg", g("palette-warning-main")), p(s.Alert, "errorFilledColor", he(() => s.getContrastText(s.error.main))), p(s.Alert, "infoFilledColor", he(() => s.getContrastText(s.info.main))), p(s.Alert, "successFilledColor", he(() => s.getContrastText(s.success.main))), p(s.Alert, "warningFilledColor", he(() => s.getContrastText(s.warning.main))), p(s.Alert, "errorStandardBg", K(s.error.light, 0.9)), p(s.Alert, "infoStandardBg", K(s.info.light, 0.9)), p(s.Alert, "successStandardBg", K(s.success.light, 0.9)), p(s.Alert, "warningStandardBg", K(s.warning.light, 0.9)), p(s.Alert, "errorIconColor", g("palette-error-main")), p(s.Alert, "infoIconColor", g("palette-info-main")), p(s.Alert, "successIconColor", g("palette-success-main")), p(s.Alert, "warningIconColor", g("palette-warning-main")), p(s.AppBar, "defaultBg", g("palette-grey-100")), p(s.Avatar, "defaultBg", g("palette-grey-400")), p(s.Button, "inheritContainedBg", g("palette-grey-300")), p(s.Button, "inheritContainedHoverBg", g("palette-grey-A100")), p(s.Chip, "defaultBorder", g("palette-grey-400")), p(s.Chip, "defaultAvatarColor", g("palette-grey-700")), p(s.Chip, "defaultIconColor", g("palette-grey-700")), p(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), p(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), p(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), p(s.LinearProgress, "primaryBg", K(s.primary.main, 0.62)), p(s.LinearProgress, "secondaryBg", K(s.secondary.main, 0.62)), p(s.LinearProgress, "errorBg", K(s.error.main, 0.62)), p(s.LinearProgress, "infoBg", K(s.info.main, 0.62)), p(s.LinearProgress, "successBg", K(s.success.main, 0.62)), p(s.LinearProgress, "warningBg", K(s.warning.main, 0.62)), p(s.Skeleton, "bg", `rgba(${g("palette-text-primaryChannel")} / 0.11)`), p(s.Slider, "primaryTrack", K(s.primary.main, 0.62)), p(s.Slider, "secondaryTrack", K(s.secondary.main, 0.62)), p(s.Slider, "errorTrack", K(s.error.main, 0.62)), p(s.Slider, "infoTrack", K(s.info.main, 0.62)), p(s.Slider, "successTrack", K(s.success.main, 0.62)), p(s.Slider, "warningTrack", K(s.warning.main, 0.62));
      const w = Ze(s.background.default, 0.8);
      p(s.SnackbarContent, "bg", w), p(s.SnackbarContent, "color", he(() => s.getContrastText(w))), p(s.SpeedDialAction, "fabHoverBg", Ze(s.background.paper, 0.15)), p(s.StepConnector, "border", g("palette-grey-400")), p(s.StepContent, "border", g("palette-grey-400")), p(s.Switch, "defaultColor", g("palette-common-white")), p(s.Switch, "defaultDisabledColor", g("palette-grey-100")), p(s.Switch, "primaryDisabledColor", K(s.primary.main, 0.62)), p(s.Switch, "secondaryDisabledColor", K(s.secondary.main, 0.62)), p(s.Switch, "errorDisabledColor", K(s.error.main, 0.62)), p(s.Switch, "infoDisabledColor", K(s.info.main, 0.62)), p(s.Switch, "successDisabledColor", K(s.success.main, 0.62)), p(s.Switch, "warningDisabledColor", K(s.warning.main, 0.62)), p(s.TableCell, "border", K(Je(s.divider, 1), 0.88)), p(s.Tooltip, "bg", Je(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      p(s.Alert, "errorColor", K(s.error.light, 0.6)), p(s.Alert, "infoColor", K(s.info.light, 0.6)), p(s.Alert, "successColor", K(s.success.light, 0.6)), p(s.Alert, "warningColor", K(s.warning.light, 0.6)), p(s.Alert, "errorFilledBg", g("palette-error-dark")), p(s.Alert, "infoFilledBg", g("palette-info-dark")), p(s.Alert, "successFilledBg", g("palette-success-dark")), p(s.Alert, "warningFilledBg", g("palette-warning-dark")), p(s.Alert, "errorFilledColor", he(() => s.getContrastText(s.error.dark))), p(s.Alert, "infoFilledColor", he(() => s.getContrastText(s.info.dark))), p(s.Alert, "successFilledColor", he(() => s.getContrastText(s.success.dark))), p(s.Alert, "warningFilledColor", he(() => s.getContrastText(s.warning.dark))), p(s.Alert, "errorStandardBg", q(s.error.light, 0.9)), p(s.Alert, "infoStandardBg", q(s.info.light, 0.9)), p(s.Alert, "successStandardBg", q(s.success.light, 0.9)), p(s.Alert, "warningStandardBg", q(s.warning.light, 0.9)), p(s.Alert, "errorIconColor", g("palette-error-main")), p(s.Alert, "infoIconColor", g("palette-info-main")), p(s.Alert, "successIconColor", g("palette-success-main")), p(s.Alert, "warningIconColor", g("palette-warning-main")), p(s.AppBar, "defaultBg", g("palette-grey-900")), p(s.AppBar, "darkBg", g("palette-background-paper")), p(s.AppBar, "darkColor", g("palette-text-primary")), p(s.Avatar, "defaultBg", g("palette-grey-600")), p(s.Button, "inheritContainedBg", g("palette-grey-800")), p(s.Button, "inheritContainedHoverBg", g("palette-grey-700")), p(s.Chip, "defaultBorder", g("palette-grey-700")), p(s.Chip, "defaultAvatarColor", g("palette-grey-300")), p(s.Chip, "defaultIconColor", g("palette-grey-300")), p(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), p(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), p(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), p(s.LinearProgress, "primaryBg", q(s.primary.main, 0.5)), p(s.LinearProgress, "secondaryBg", q(s.secondary.main, 0.5)), p(s.LinearProgress, "errorBg", q(s.error.main, 0.5)), p(s.LinearProgress, "infoBg", q(s.info.main, 0.5)), p(s.LinearProgress, "successBg", q(s.success.main, 0.5)), p(s.LinearProgress, "warningBg", q(s.warning.main, 0.5)), p(s.Skeleton, "bg", `rgba(${g("palette-text-primaryChannel")} / 0.13)`), p(s.Slider, "primaryTrack", q(s.primary.main, 0.5)), p(s.Slider, "secondaryTrack", q(s.secondary.main, 0.5)), p(s.Slider, "errorTrack", q(s.error.main, 0.5)), p(s.Slider, "infoTrack", q(s.info.main, 0.5)), p(s.Slider, "successTrack", q(s.success.main, 0.5)), p(s.Slider, "warningTrack", q(s.warning.main, 0.5));
      const w = Ze(s.background.default, 0.98);
      p(s.SnackbarContent, "bg", w), p(s.SnackbarContent, "color", he(() => s.getContrastText(w))), p(s.SpeedDialAction, "fabHoverBg", Ze(s.background.paper, 0.15)), p(s.StepConnector, "border", g("palette-grey-600")), p(s.StepContent, "border", g("palette-grey-600")), p(s.Switch, "defaultColor", g("palette-grey-300")), p(s.Switch, "defaultDisabledColor", g("palette-grey-600")), p(s.Switch, "primaryDisabledColor", q(s.primary.main, 0.55)), p(s.Switch, "secondaryDisabledColor", q(s.secondary.main, 0.55)), p(s.Switch, "errorDisabledColor", q(s.error.main, 0.55)), p(s.Switch, "infoDisabledColor", q(s.info.main, 0.55)), p(s.Switch, "successDisabledColor", q(s.success.main, 0.55)), p(s.Switch, "warningDisabledColor", q(s.warning.main, 0.55)), p(s.TableCell, "border", q(Je(s.divider, 1), 0.68)), p(s.Tooltip, "bg", Je(s.grey[700], 0.92));
    }
    be(s.background, "default"), be(s.background, "paper"), be(s.common, "background"), be(s.common, "onBackground"), be(s, "divider"), Object.keys(s).forEach((w) => {
      const _ = s[w];
      w !== "tonalOffset" && _ && typeof _ == "object" && (_.main && p(s[w], "mainChannel", Ve(We(_.main))), _.light && p(s[w], "lightChannel", Ve(We(_.light))), _.dark && p(s[w], "darkChannel", Ve(We(_.dark))), _.contrastText && p(s[w], "contrastTextChannel", Ve(We(_.contrastText))), w === "text" && (be(s[w], "primary"), be(s[w], "secondary")), w === "action" && (_.active && be(s[w], "active"), _.selected && be(s[w], "selected")));
    });
  }), $ = t.reduce((M, s) => le(M, s), $);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: xi($)
  }, {
    vars: F,
    generateThemeVars: Q,
    generateStyleSheets: X
  } = Xo($, b);
  return $.vars = F, Object.entries($.colorSchemes[$.defaultColorScheme]).forEach(([M, s]) => {
    $[M] = s;
  }), $.generateThemeVars = Q, $.generateStyleSheets = X, $.generateSpacing = function() {
    return Br(f.spacing, Ft(this));
  }, $.getColorSchemeSelector = Qo(c), $.spacing = $.generateSpacing(), $.shouldSkipGeneratingVar = a, $.unstable_sxConfig = {
    ...bt,
    ...f?.unstable_sxConfig
  }, $.unstable_sx = function(s) {
    return Le({
      sx: s,
      theme: this
    });
  }, $.toRuntimeSource = Yr, $;
}
function $r(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Yt({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ri(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r?.mode,
    ...a
  } = e, c = i || "light", u = o?.[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Bt(e, ...t);
    let h = r;
    "palette" in e || f[c] && (f[c] !== !0 ? h = f[c].palette : c === "dark" && (h = {
      mode: "dark"
    }));
    const d = Bt({
      ...e,
      palette: h
    }, ...t);
    return d.defaultColorScheme = c, d.colorSchemes = f, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: d.palette
    }, $r(d, "dark", f.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: d.palette
    }, $r(d, "light", f.light)), d;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), Ai({
    ...a,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ki = Ri(), Pi = "$$material";
function Ii(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ni = (e) => Ii(e) && e !== "classes", Di = No({
  themeId: Pi,
  defaultTheme: ki,
  rootShouldForwardProp: Ni
}), Mi = Go;
process.env.NODE_ENV !== "production" && (j.node, j.object.isRequired);
function Bi(e) {
  return Yo(e);
}
function Li(e) {
  return jt("MuiSvgIcon", e);
}
Tn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ji = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Re(t)}`, `fontSize${Re(r)}`]
  };
  return vn(o, Li, n);
}, Fi = Di("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Re(r.color)}`], t[`fontSize${Re(r.fontSize)}`]];
  }
})(Mi(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), st = /* @__PURE__ */ we.forwardRef(function(t, r) {
  const n = Bi({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: f,
    inheritViewBox: h = !1,
    titleAccess: d,
    viewBox: m = "0 0 24 24",
    ...S
  } = n, y = /* @__PURE__ */ we.isValidElement(o) && o.type === "svg", l = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: m,
    hasSvgAsChild: y
  }, T = {};
  h || (T.viewBox = m);
  const A = ji(l);
  return /* @__PURE__ */ ee(Fi, {
    as: c,
    className: xn(A.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r,
    ...T,
    ...S,
    ...y && o.props,
    ownerState: l,
    children: [y ? o.props.children : o, d ? /* @__PURE__ */ x("title", {
      children: d
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (st.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: j.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: j.object,
  /**
   * @ignore
   */
  className: j.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: j.oneOfType([j.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), j.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: j.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: j.oneOfType([j.oneOf(["inherit", "large", "medium", "small"]), j.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: j.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: j.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: j.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: j.oneOfType([j.arrayOf(j.oneOfType([j.func, j.object, j.bool])), j.func, j.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: j.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: j.string
});
st.muiName = "SvgIcon";
function Vi(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ x(st, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = st.muiName, /* @__PURE__ */ we.memo(/* @__PURE__ */ we.forwardRef(r));
}
const Wi = Vi(/* @__PURE__ */ x("path", {
  d: "M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z"
}), "Shuffle"), Kr = rn({}), Gt = () => nn(Kr);
var ae = /* @__PURE__ */ ((e) => (e.IN_DECK = "in_deck", e.IN_PLAY = "in_play", e.DISCARDED = "discarded", e))(ae || {}), Be = /* @__PURE__ */ ((e) => (e.HATCH = "hatch", e.SOLID = "solid", e.NONE = "none", e))(Be || {}), fe = /* @__PURE__ */ ((e) => (e.GREEN = "green", e.RED = "red", e.PURPLE = "purple", e))(fe || {}), de = /* @__PURE__ */ ((e) => (e.PILL = "pill", e.DIAMOND = "diamond", e.WIGGLE = "wiggle", e))(de || {});
const Ui = () => /* @__PURE__ */ x("div", { style: { position: "fixed", left: "-1000px" }, children: /* @__PURE__ */ ee("svg", { version: "1.1", viewBox: "0 0 300 120", id: "shared", children: [
  /* @__PURE__ */ ee("defs", { children: [
    /* @__PURE__ */ x("pattern", { id: `${fe.GREEN}-hatch`, patternTransform: "rotate(45)", patternUnits: "userSpaceOnUse", width: "20", height: "15", children: /* @__PURE__ */ x("path", { d: "M0,0 l20,0", stroke: fe.GREEN, strokeWidth: 5 }) }),
    /* @__PURE__ */ x("pattern", { id: `${fe.RED}-hatch`, patternTransform: "rotate(45)", patternUnits: "userSpaceOnUse", width: "20", height: "15", children: /* @__PURE__ */ x("path", { d: "M0,0 l20,0", stroke: fe.RED, strokeWidth: 5 }) }),
    /* @__PURE__ */ x("pattern", { id: `${fe.PURPLE}-hatch`, patternTransform: "rotate(45)", patternUnits: "userSpaceOnUse", width: "20", height: "15", children: /* @__PURE__ */ x("path", { d: "M0,0 l20,0", stroke: fe.PURPLE, strokeWidth: 5 }) })
  ] }),
  /* @__PURE__ */ x("rect", { x: "1", y: "1", width: "15", height: "15", fill: "url(#red-hatch)", stroke: "red", strokeWidth: "1", ry: "15", rx: "15" })
] }) }), Hr = ({ color: e, fill: t }) => /* @__PURE__ */ x("svg", { className: "set-shape", "data-color": e, "data-fill": t, version: "1.1", width: "100%", viewBox: "0 0 300 120", children: /* @__PURE__ */ x(
  "rect",
  {
    x: "5",
    y: "5",
    width: "290",
    height: "110",
    fill: "var(--fill)",
    stroke: "var(--color)",
    strokeWidth: "5",
    ry: "60",
    rx: "60"
  }
) }), Xr = ({ color: e, fill: t }) => /* @__PURE__ */ x("svg", { className: "set-shape", "data-color": e, "data-fill": t, version: "1.1", width: "100%", viewBox: "0 0 300 120", children: /* @__PURE__ */ x(
  "polygon",
  {
    points: "150,5 295,60 150,115 5,60",
    fill: "var(--fill)",
    stroke: "var(--color)",
    strokeWidth: "5"
  }
) }), Qr = ({ color: e, fill: t }) => /* @__PURE__ */ x("svg", { className: "set-shape", "data-color": e, "data-fill": t, version: "1.1", width: "100%", viewBox: "-5 -5 250 130", children: /* @__PURE__ */ x(
  "path",
  {
    d: "m10.52305,40.7027c-24.57534,69.88075 4.21503,97.62353 42.38446,64.83997c50.06271,-31.32925 56.91522,14.40751 128.94045,1.44199c76.0061,-22.33226 55.53486,-102.79988 39.37725,-105.26481c-23.17034,-7.01273 -42.61863,54.11753 -115.18615,14.40751c-40.73295,-16.15761 -79.01331,-8.78748 -95.51601,24.57534",
    fill: "var(--fill)",
    stroke: "var(--color)",
    strokeWidth: "5"
  }
) }), zi = {
  id: "",
  className: "",
  isSelected: !1,
  color: fe.GREEN,
  isFaceup: !1,
  number: 1,
  index: 0,
  shading: Be.HATCH,
  shape: de.DIAMOND,
  state: ae.IN_DECK
}, Jr = (e) => {
  const t = Gt(), r = Ue(() => t.cards.find((c) => c.id === e) ?? zi, [e, t.cards]), n = (c) => {
    t.setCards((u) => u.map((f) => ({ ...f, ...f.id === e ? c : {} })));
  };
  return { flip: () => {
    n({ isFaceup: !r?.isFaceup });
  }, toggleIsSelected: () => {
    n({ isSelected: !r?.isSelected });
  }, select: () => {
    n({ isSelected: !0 });
  }, ...r };
}, Yi = {
  [de.DIAMOND]: Xr,
  [de.PILL]: Hr,
  [de.WIGGLE]: Qr
}, Rt = ({ cardId: e, style: t = {} }) => {
  const r = Gt(), n = Jr(e), o = () => {
    n.state === ae.IN_PLAY && n.select();
  }, i = Ar(null), [a, c] = ve({ top: 0, left: 600 }), u = () => {
    if (i.current) {
      const f = i.current.getBoundingClientRect();
      c((h) => {
        const d = f.left - window.scrollX, m = f.top - window.scrollY, S = `rotate(${-5 + Math.random() * 10}deg)`;
        return {
          ...h,
          left: d,
          top: m,
          ...d !== h.left ? { transform: S } : {}
        };
      });
    }
  };
  return Kt(() => {
    u();
  }, [n.state, r.cards]), Kt(() => {
    u();
  }, []), ge(() => {
    const f = new MutationObserver(() => {
      u(), requestAnimationFrame(u);
    });
    return i.current && f.observe(i.current, { attributes: !0 }), () => f.disconnect();
  }, []), ge(() => {
    const f = () => u();
    return window.addEventListener("scroll", f), window.addEventListener("resize", f), () => {
      window.removeEventListener("scroll", f), window.removeEventListener("resize", f);
    };
  }, []), n ? /* @__PURE__ */ ee(_r, { children: [
    /* @__PURE__ */ x(at, { cardId: e, style: { ...t, position: "fixed", ...a, zIndex: n.index }, onClick: o }, e),
    /* @__PURE__ */ x(at, { cardId: e, ref: i, className: "ghost", style: { visibility: "hidden", pointerEvents: "none" } })
  ] }) : null;
}, at = ct(
  ({ cardId: e, ...t }, r) => {
    const n = Jr(e), o = Yi[n.shape];
    return /* @__PURE__ */ ee("div", { ...t, ref: r, className: rt("card", n.className), "data-index": n.index, "data-state": n.state, "data-count": n.number, "data-selected": n.isSelected ? 1 : 0, "data-faceup": n.isFaceup ? 1 : 0, children: [
      /* @__PURE__ */ ee("div", { className: "card-front", children: [
        /* @__PURE__ */ x(o, { color: n.color, fill: n.shading }),
        /* @__PURE__ */ x(o, { color: n.color, fill: n.shading }),
        /* @__PURE__ */ x(o, { color: n.color, fill: n.shading })
      ] }),
      /* @__PURE__ */ x("div", { className: "card-back" })
    ] });
  }
), Zr = () => {
  const e = Object.values(fe), t = Object.values(de), r = Object.values(Be), n = [1, 2, 3], o = [];
  let i = 0;
  for (let a of e)
    for (let c of t)
      for (let u of r)
        for (let f of n)
          o.push({
            id: `card_${i}`,
            className: "",
            state: ae.IN_DECK,
            color: a,
            //
            shape: c,
            shading: u,
            number: f,
            index: i++,
            isFaceup: !1,
            isSelected: !1
          }), i++;
  return o;
}, Or = (e) => {
  for (let t = e.length - 1; t > 0; t--) {
    const r = Math.floor(Math.random() * (t + 1));
    [e[t], e[r]] = [e[r], e[t]];
  }
  return e.forEach((t, r) => {
    t.index = r;
  }), e;
}, Gi = ({ children: e }) => {
  const [t, r] = ve(Zr()), n = () => {
    r((d) => Or(d));
  }, o = (d = 1) => {
    r((m) => {
      const S = [];
      for (var y = 0, l = 0; y < m.length; y++)
        l < d && m[y].state === ae.IN_DECK ? (S.push({ ...m[y], isFaceup: !0, state: ae.IN_PLAY }), l++) : S.push(m[y]);
      return S;
    });
  }, i = () => {
    r((d) => d.map((m) => ({ ...m, isSelected: !1 })));
  }, a = (d) => {
    r(d);
  }, c = (d) => {
    const m = new Set(d);
    r((S) => S.map((y) => ({ ...y, isSelected: m.has(y.id) })));
  }, u = (d, m) => {
    const S = new Set(d);
    r((y) => y.map((l) => ({ ...l, ...S.has(l.id) ? { className: m } : {} })));
  }, f = (d) => {
    const m = new Set(d);
    r((S) => S.map((y) => ({ ...y, state: m.has(y.id) ? ae.DISCARDED : y.state })));
  }, h = () => {
    r((d) => Or(
      d.map((m) => ({
        ...m,
        //
        state: ae.IN_DECK,
        isSelected: !1,
        isFaceup: !1
      }))
    ));
  };
  return /* @__PURE__ */ ee(
    Kr.Provider,
    {
      value: {
        cards: t,
        //
        deal: o,
        setCards: r,
        deselectAll: i,
        discard: f,
        shuffle: n,
        select: c,
        reset: h,
        setClassName: u,
        update: a
      },
      children: [
        /* @__PURE__ */ x(Ui, {}),
        e
      ]
    }
  );
};
function qi(e) {
  if (e == null || isNaN(e)) return "";
  const t = (a) => a.toString().padStart(2, "0"), r = Math.floor(e), n = Math.floor(r / 3600), o = Math.floor(r / 60 - n * 60), i = r % 60;
  return `${n > 0 ? n + ":" : ""}${n > 0 ? t(o) : o}:${t(i)}`;
}
const Ki = () => /* @__PURE__ */ x(Gi, { children: /* @__PURE__ */ x(Hi, {}) }), Hi = () => {
  const e = Gt(), [t, r] = ve([]), [n, o] = ve([]), i = Ue(() => e.cards.filter((g) => g.isSelected), [e.cards]), a = Ue(() => e.cards.filter((g) => g.state === ae.IN_DECK), [e.cards]), c = Ue(() => e.cards.filter((g) => g.state === ae.IN_PLAY), [e.cards]), [u, f] = ve(!1), h = Ar(0), [d, m] = ve(0), [S, y] = ve([]), [l, T] = ve(!1), [A, H] = ve(!1), O = () => {
    u ? e.deal(3) : (f(!0), e.deal(12));
  }, $ = () => {
    e.reset(), r([]), m(0), H(!1), f(!1), o([]), y([]);
  }, b = (g, w, _) => {
    const Z = g.number === w.number && w.number === _.number, V = g.number !== w.number && g.number != _.number && w.number !== _.number, te = g.color === w.color && w.color === _.color, oe = g.color !== w.color && g.color != _.color && _.color !== w.color, ye = g.shading === w.shading && w.shading === _.shading, je = g.shading !== w.shading && g.shading != _.shading && w.shading !== _.shading, v = g.shape === w.shape && w.shape === _.shape, E = g.shape !== w.shape && g.shape != _.shape && w.shape !== _.shape;
    return (Z || V) && (te || oe) && (ye || je) && (v || E);
  }, F = () => {
    const g = c.length, w = [];
    for (let _ = 0; _ < g - 2; _++)
      for (let Z = _ + 1; Z < g - 1; Z++)
        for (let V = Z + 1; V < g; V++) {
          const te = c[_], oe = c[Z], ye = c[V];
          b(te, oe, ye) && w.push([te, oe, ye]);
        }
    y(w);
  }, Q = () => {
    i.length === 3 && (b(i[0], i[1], i[2]) ? (r((g) => [...g, i]), e.deselectAll(), e.discard(i.map((g) => g.id))) : (o((g) => [...g, i]), e.deselectAll()));
  }, X = () => {
    S.length > 0 && e.select(S[0].map((g) => g.id));
  }, M = () => {
    if (S.length > 0) {
      let g = S;
      i.length > 0 && (g = S.filter((V) => {
        const te = V.map((oe) => oe.id);
        return i.every((oe) => te.includes(oe.id));
      }));
      const w = i.map((V) => V.id), _ = g.reduce((V, te) => [...V, ...te.map((oe) => oe.id)], []).filter((V) => !w.includes(V)), Z = _[Math.floor(Math.random() * _.length)];
      e.setClassName([Z], "hint-glow"), setTimeout(() => {
        e.setClassName([Z], "");
      }, 2e3);
    }
  }, s = () => {
    e.update((g) => g.map((w) => ({ ...w, state: ae.DISCARDED })));
  };
  return ge(() => {
    n.length > 0 && (document.body.classList.add("earthquake"), setTimeout(() => document.body.classList.remove("earthquake"), 3e3));
  }, [n]), ge(() => {
    e.shuffle();
  }, []), ge(() => {
    c.length < 12 && a.length > 0 && T(!1);
  }, [c.length, a.length]), ge(() => {
    u && c.length < 12 && a.length > 0 && e.deal(1);
  }, [u, c.length]), ge(() => {
    F();
  }, [c.length, e.cards]), ge(() => {
    i.length === 3 && Q(), !u && i.length > 0 && f(!0);
  }, [i.length]), ge(() => {
    if (u) {
      h.current = Date.now();
      const w = setInterval(() => {
        m((Date.now() - h.current) * 1e-3);
      }, 100);
      return () => {
        clearInterval(w);
      };
    }
  }, [u]), ge(() => {
    a.length === 0 && S.length === 0 && (c.length === 0 && alert("Holy Shit! This was theorestically possible but I did not actually think You would get this far. Congrats!"), f(!1), H(!0));
  }, [a.length, S.length]), /* @__PURE__ */ ee("div", { className: "set-game-container d-flex flex-column animated", style: { minHeight: "100vh" }, children: [
    /* @__PURE__ */ ee("div", { className: "Sp-4 flex-shrink-1 bg-secondary text-light", style: { display: "grid", gridTemplateColumns: "1fr auto 1fr" }, children: [
      /* @__PURE__ */ ee("div", { className: "d-flex gap-1", children: [
        /* @__PURE__ */ ee("button", { className: "btn btn-link text-light text-decoration-none", onClick: () => T((g) => !g), children: [
          "Sets: ",
          S.length
        ] }),
        /* @__PURE__ */ x("button", { className: "btn btn-link text-light text-decoration-none", onClick: () => M(), children: "Hint" }),
        /* @__PURE__ */ x("button", { className: "btn btn-link text-light text-decoration-none", onClick: () => X(), children: "Cheat" }),
        /* @__PURE__ */ x("button", { className: "btn btn-link text-light text-decoration-none d-none", onClick: () => s(), children: "Clear" })
      ] }),
      /* @__PURE__ */ x("div", { children: /* @__PURE__ */ x("button", { className: "btn btn-link text-light text-decoration-none", onClick: () => e.shuffle(), children: /* @__PURE__ */ x(Wi, {}) }) }),
      /* @__PURE__ */ ee("div", { className: "d-flex gap-2 align-items-center justify-content-end", children: [
        /* @__PURE__ */ ee("div", { children: [
          A ? "Finished in " : "",
          /* @__PURE__ */ x("span", { style: { minWidth: "5ch", display: "inline-block" }, children: qi(d) })
        ] }),
        /* @__PURE__ */ x("button", { className: "btn btn-link text-light text-decoration-none", onClick: () => $(), children: "Reset" })
      ] })
    ] }),
    /* @__PURE__ */ ee("div", { className: "flex-grow-1", style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 20, width: "100%", height: "100%" }, children: [
      /* @__PURE__ */ x("div", { style: { padding: 20, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ ee("div", { children: [
        /* @__PURE__ */ ee("div", { className: "card-pile", onClick: O, style: { cursor: "grab" }, children: [
          /* @__PURE__ */ x(at, { cardId: "0", style: { position: "relative", visibility: "hidden" } }),
          e?.cards.filter((g) => g.state === ae.IN_DECK).map((g, w) => /* @__PURE__ */ x(Rt, { cardId: g.id }, g.id))
        ] }),
        /* @__PURE__ */ x("div", { className: "p-3 text-center fs-6", children: a.length > 0 ? `(${a.length})` : null })
      ] }) }),
      /* @__PURE__ */ x("div", { className: "card-grid", children: e?.cards.filter((g) => g.state === ae.IN_PLAY).map((g, w) => /* @__PURE__ */ x(Rt, { cardId: g.id }, g.id)) }),
      /* @__PURE__ */ x("div", { style: { padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ ee("div", { children: [
        /* @__PURE__ */ ee("div", { className: "card-pile", children: [
          /* @__PURE__ */ x(at, { cardId: "0", style: { position: "relative", visibility: "hidden" } }),
          e?.cards.filter((g) => g.state === ae.DISCARDED).map((g, w) => /* @__PURE__ */ x(Rt, { cardId: g.id }, g.id))
        ] }),
        /* @__PURE__ */ x("div", { className: "p-3 text-center fs-6", children: t.length > 0 || n.length > 0 ? /* @__PURE__ */ ee(_r, { children: [
          /* @__PURE__ */ x("b", { children: t.length }),
          " — ",
          /* @__PURE__ */ x("span", { className: "text-danger", children: n.length })
        ] }) : null })
      ] }) })
    ] }),
    /* @__PURE__ */ x("div", { className: "d-flex justify-content-center p-2" })
  ] });
}, ns = ({
  className: e,
  style: t
}) => {
  const r = e ? `set-game ${e}` : "set-game";
  return /* @__PURE__ */ x("div", { className: r, style: t, children: /* @__PURE__ */ x(Ki, {}) });
}, en = {
  [de.DIAMOND]: Xr,
  [de.PILL]: Hr,
  [de.WIGGLE]: Qr
}, Ee = Zr();
typeof window < "u" && (console.log("SetCardStandalone: BaseDeck initialized with", Ee.length, "cards"), console.log("SetCardStandalone: First card:", Ee[0]), console.log("SetCardStandalone: Last card:", Ee[80]));
const Xi = ct(({ cardId: e = 0, style: t, className: r, selected: n = !1, faceUp: o = !0, onClick: i }, a) => {
  const c = (e % Ee.length + Ee.length) % Ee.length, u = Ee[c];
  if (!u)
    return console.error(`SetDeckCard: Invalid card at index ${c}. Deck has ${Ee.length} cards.`), /* @__PURE__ */ x("div", { ref: a, className: rt("card", r), style: t });
  const f = en[u.shape];
  return /* @__PURE__ */ ee(
    "div",
    {
      ref: a,
      className: rt("card", r),
      "data-count": u.number,
      "data-selected": n ? 1 : 0,
      "data-faceup": o ? 1 : 0,
      style: t,
      onClick: i,
      children: [
        /* @__PURE__ */ ee("div", { className: "card-front", children: [
          /* @__PURE__ */ x(f, { color: u.color, fill: u.shading }),
          /* @__PURE__ */ x(f, { color: u.color, fill: u.shading }),
          /* @__PURE__ */ x(f, { color: u.color, fill: u.shading })
        ] }),
        /* @__PURE__ */ x("div", { className: "card-back" })
      ]
    }
  );
});
Xi.displayName = "SetDeckCard";
const tn = ct(({ shape: e, color: t, fill: r, count: n, selected: o = !1, faceUp: i = !0, className: a, style: c, onClick: u }, f) => {
  const h = en[e];
  return /* @__PURE__ */ ee("div", { ref: f, className: rt("card", a), "data-count": n, "data-selected": o ? 1 : 0, "data-faceup": i ? 1 : 0, style: c, onClick: u, children: [
    /* @__PURE__ */ ee("div", { className: "card-front", children: [
      /* @__PURE__ */ x(h, { color: t, fill: r }),
      /* @__PURE__ */ x(h, { color: t, fill: r }),
      /* @__PURE__ */ x(h, { color: t, fill: r })
    ] }),
    /* @__PURE__ */ x("div", { className: "card-back" })
  ] });
});
tn.displayName = "SetCardStandalone";
const kt = [de.DIAMOND, de.PILL, de.WIGGLE], Pt = [fe.RED, fe.GREEN, fe.PURPLE], It = [Be.NONE, Be.HATCH, Be.SOLID], Nt = [1, 2, 3], et = (e) => e[Math.floor(Math.random() * e.length)], Qi = ct(
  ({ seed: e, selected: t, faceUp: r, className: n, style: o, onClick: i }, a) => {
    const c = Ue(() => {
      if (e !== void 0) {
        const u = (f, h) => {
          const d = Math.sin(f * 12.9898 + h * 78.233) * 43758.5453;
          return Math.abs(d - Math.floor(d));
        };
        return {
          shape: kt[Math.floor(u(e, 0) * kt.length)],
          color: Pt[Math.floor(u(e, 1) * Pt.length)],
          fill: It[Math.floor(u(e, 2) * It.length)],
          count: Nt[Math.floor(u(e, 3) * Nt.length)]
        };
      }
      return {
        shape: et(kt),
        color: et(Pt),
        fill: et(It),
        count: et(Nt)
      };
    }, [e]);
    return /* @__PURE__ */ x(
      tn,
      {
        ref: a,
        shape: c.shape,
        color: c.color,
        fill: c.fill,
        count: c.count,
        selected: t,
        faceUp: r,
        className: n,
        style: o,
        onClick: i
      }
    );
  }
);
Qi.displayName = "RandomSetCard";
export {
  ae as CardState,
  Qi as RandomSetCard,
  tn as SetCardStandalone,
  Xi as SetDeckCard,
  Gi as SetDeckProvider,
  Ki as SetGame,
  ns as SetGameReact,
  de as Shape,
  fe as ShapeColor,
  Be as ShapeFill,
  ns as default,
  Gt as useSetDeck
};
//# sourceMappingURL=index.js.map
