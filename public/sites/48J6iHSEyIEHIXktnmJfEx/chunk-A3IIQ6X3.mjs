var e = Object.defineProperty;
var d = (n, t) => {
  for (var o in t) e(n, o, { get: t[o], enumerable: !0 });
};
var f = typeof document < "u" ? globalThis.navigator : void 0,
  r = typeof document < "u" ? globalThis.window : void 0,
  i = typeof document > "u" ? {} : void 0;
if (typeof document > "u") {
  let n = Object.prototype.toString;
  Object.prototype.toString = function (...t) {
    return this === i ? "[object global]" : n.call(this, ...t);
  };
}
export { d as a, f as b, r as c };
//# sourceMappingURL=chunk-A3IIQ6X3.mjs.map
