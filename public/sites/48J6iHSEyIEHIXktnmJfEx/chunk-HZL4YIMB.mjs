var I = Object.create,
  s = Object.defineProperty,
  M = Object.getOwnPropertyDescriptor,
  k = Object.getOwnPropertyNames,
  j = Object.getPrototypeOf,
  q = Object.prototype.hasOwnProperty,
  F = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  u = (e) => {
    throw TypeError(e);
  },
  N = (e, t, r) =>
    t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  C = (e, t) => s(e, "name", { value: t, configurable: !0 }),
  Q = (e, t) =>
    function () {
      return t || (0, e[k(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  R = (e, t) => {
    for (var r in t) s(e, r, { get: t[r], enumerable: !0 });
  },
  G = (e, t, r, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of k(t))
        !q.call(e, a) &&
          a !== r &&
          s(e, a, {
            get: () => t[a],
            enumerable: !(o = M(t, a)) || o.enumerable,
          });
    return e;
  },
  U = (e, t, r) => (
    (r = e != null ? I(j(e)) : {}),
    G(
      t || !e || !e.__esModule
        ? s(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
  V = (e) => [, , , I(e?.[F("metadata")] ?? null)],
  A = [
    "class",
    "method",
    "getter",
    "setter",
    "accessor",
    "field",
    "value",
    "get",
    "set",
  ],
  f = (e) =>
    e !== void 0 && typeof e != "function" ? u("Function expected") : e,
  J = (e, t, r, o, a) => ({
    kind: A[e],
    name: t,
    metadata: o,
    addInitializer: (_) =>
      r._ ? u("Already initialized") : a.push(f(_ || null)),
  }),
  T = (e, t) => N(t, F("metadata"), e[3]),
  X = (e, t, r, o) => {
    for (var a = 0, _ = e[t >> 1], p = _ && _.length; a < p; a++)
      t & 1 ? _[a].call(r) : (o = _[a].call(r, o));
    return o;
  },
  Y = (e, t, r, o, a, _) => {
    var p,
      c,
      g,
      d,
      h,
      i = t & 7,
      O = !!(t & 8),
      l = !!(t & 16),
      y = i > 3 ? e.length + 1 : i ? (O ? 1 : 2) : 0,
      b = A[i + 5],
      z = i > 3 && (e[y - 1] = []),
      D = e[y] || (e[y] = []),
      v =
        i &&
        (!l && !O && (a = a.prototype),
        i < 5 &&
          (i > 3 || !l) &&
          M(
            i < 4
              ? a
              : {
                  get [r]() {
                    return x(this, _);
                  },
                  set [r](n) {
                    return E(this, _, n);
                  },
                },
            r
          ));
    i
      ? l && i < 4 && C(_, (i > 2 ? "set " : i > 1 ? "get " : "") + r)
      : C(a, r);
    for (var P = o.length - 1; P >= 0; P--)
      (d = J(i, r, (g = {}), e[3], D)),
        i &&
          ((d.static = O),
          (d.private = l),
          (h = d.access = { has: l ? (n) => W(a, n) : (n) => r in n }),
          i ^ 3 &&
            (h.get = l
              ? (n) => (i ^ 1 ? x : B)(n, a, i ^ 4 ? _ : v.get)
              : (n) => n[r]),
          i > 2 &&
            (h.set = l
              ? (n, w) => E(n, a, w, i ^ 4 ? _ : v.set)
              : (n, w) => (n[r] = w))),
        (c = (0, o[P])(
          i
            ? i < 4
              ? l
                ? _
                : v[b]
              : i > 4
              ? void 0
              : { get: v.get, set: v.set }
            : a,
          d
        )),
        (g._ = 1),
        i ^ 4 || c === void 0
          ? f(c) &&
            (i > 4 ? z.unshift(c) : i ? (l ? (_ = c) : (v[b] = c)) : (a = c))
          : typeof c != "object" || c === null
          ? u("Object expected")
          : (f((p = c.get)) && (v.get = p),
            f((p = c.set)) && (v.set = p),
            f((p = c.init)) && z.unshift(p));
    return i || T(e, a), v && s(a, r, v), l ? (i ^ 4 ? _ : v) : a;
  },
  Z = (e, t, r) => N(e, typeof t != "symbol" ? t + "" : t, r),
  S = (e, t, r) => t.has(e) || u("Cannot " + r),
  W = (e, t) =>
    Object(t) !== t
      ? u('Cannot use the "in" operator on this value')
      : e.has(t),
  x = (e, t, r) => (
    S(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  $ = (e, t, r) =>
    t.has(e)
      ? u("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, r),
  E = (e, t, r, o) => (
    S(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r
  ),
  B = (e, t, r) => (S(e, t, "access private method"), r);
export {
  Q as a,
  R as b,
  U as c,
  V as d,
  T as e,
  X as f,
  Y as g,
  Z as h,
  x as i,
  $ as j,
  E as k,
  B as l,
};
//# sourceMappingURL=chunk-HZL4YIMB.mjs.map
