import {
  $ as le,
  A as Ae,
  Aa as ge,
  B as Le,
  Ba as Qt,
  Ca as Re,
  D as ut,
  Da as gt,
  Ea as pe,
  Fa as O,
  Ha as ve,
  I as tt,
  Ia as fe,
  Ja as me,
  K as ie,
  Ka as K,
  La as Ee,
  Q as se,
  S as l,
  V as X,
  W as qt,
  X as rt,
  Y as j,
  Z as Ot,
  aa as ye,
  b as _,
  ca as Wt,
  d as ne,
  e as zt,
  g as Ge,
  ga as at,
  h as ue,
  ha as ce,
  i as q,
  ia as P,
  j as oe,
  ja as be,
  k as Bt,
  ka as Z,
  l as z,
  la as Ht,
  m as w,
  n as Ue,
  p as Se,
  q as e,
  qa as Yt,
  r as F,
  ra as Xt,
  s as pt,
  sa as ht,
  t as Qe,
  u as Y,
  v as c,
  va as he,
  w as Ze,
  wa as Jt,
  x as ae,
  y as $e,
  ya as Kt,
  z as et,
} from "./chunk-OWXM3JD5.mjs";
import { a as yt } from "./chunk-FXSQLVM4.mjs";
import "./chunk-HZL4YIMB.mjs";
import { b as A, c as v } from "./chunk-A3IIQ6X3.mjs";
var Zt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Mr = {
    ...Zt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  xt = {
    onClick: { type: l.EventHandler },
    onMouseEnter: { type: l.EventHandler },
    onMouseLeave: { type: l.EventHandler },
  },
  Rr = {
    type: l.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Vr = {
    font: {
      type: l.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: l.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: l.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
function bt(t, r) {
  return $t(!0, t, r);
}
function wt(t, r) {
  return $t(!1, t, r);
}
function $t(t, r, o = !0) {
  let a = rt();
  q(() => {
    o && a === t && r();
  }, [a]);
}
var _r = () => {
    if (typeof A < "u") {
      let t = A.userAgent.toLowerCase();
      return (
        (t.indexOf("safari") > -1 ||
          t.indexOf("framermobile") > -1 ||
          t.indexOf("framerx") > -1) &&
        t.indexOf("chrome") < 0
      );
    } else return !1;
  },
  vt = () => z(() => _r(), []);
function Ct() {
  return z(() => se.current(), []);
}
function It() {
  return z(() => se.current() === se.canvas, []);
}
function Ft(t) {
  let {
    borderRadius: r,
    isMixedBorderRadius: o,
    topLeftRadius: a,
    topRightRadius: n,
    bottomRightRadius: d,
    bottomLeftRadius: f,
  } = t;
  return z(
    () => (o ? `${a}px ${n}px ${d}px ${f}px` : `${r}px`),
    [r, o, a, n, d, f]
  );
}
var kt = {
  borderRadius: {
    title: "Radius",
    type: l.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var Er = {
  padding: {
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var tr;
(function (t) {
  (t.Fill = "fill"),
    (t.Contain = "contain"),
    (t.Cover = "cover"),
    (t.None = "none"),
    (t.ScaleDown = "scale-down");
})(tr || (tr = {}));
var rr;
(function (t) {
  (t.Video = "Upload"), (t.Url = "URL");
})(rr || (rr = {}));
var Tr = "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm";
function Dr(t) {
  let {
    width: r,
    height: o,
    topLeft: a,
    topRight: n,
    bottomRight: d,
    bottomLeft: f,
    id: i,
    children: h,
    ...g
  } = t;
  return g;
}
function $(t) {
  let r = Dr(t);
  return e(jr, { ...r });
}
function Nr(t) {
  let r = rt(),
    o = w(!1),
    a = w(!1),
    n = Ge((i) => {
      if (!t.current) return;
      let h = (i === 1 ? 0.999 : i) * t.current.duration,
        g = Math.abs(t.current.currentTime - h) < 0.1;
      t.current.duration > 0 && !g && (t.current.currentTime = h);
    }, []),
    d = Ge(() => {
      let i = t.current;
      if (!i) return;
      (i.preload = "auto"),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !o.current &&
          r &&
          ((o.current = !0),
          (a.current = !0),
          i
            .play()
            .catch((g) => {})
            .finally(() => (o.current = !1)));
    }, []),
    f = Ge(() => {
      !t.current || o.current || (t.current.pause(), (a.current = !1));
    }, []);
  return { play: d, pause: f, setProgress: n, isPlaying: a };
}
function Pr({
  playingProp: t,
  muted: r,
  loop: o,
  playsinline: a,
  controls: n,
}) {
  let [d] = Ue(() => t),
    [f, i] = Ue(!1);
  t !== d && !f && i(!0);
  let h = d && r && o && a && !n && !f,
    g;
  return (
    h ? (g = "on-viewport") : d ? (g = "on-mount") : (g = "no-autoplay"), g
  );
}
var jr = zt(function (r) {
  let {
      srcType: o = "URL",
      srcUrl: a,
      srcFile: n = "",
      posterEnabled: d = !1,
      controls: f = !1,
      playing: i = !0,
      loop: h = !0,
      muted: g = !0,
      playsinline: I = !0,
      restartOnEnter: L = !1,
      objectFit: C = "cover",
      backgroundColor: x = "rgba(0,0,0,0)",
      radius: p = 0,
      volume: J = 25,
      startTime: S = 0,
      poster: y,
      playing: N,
      progress: M,
      onSeeked: E,
      onPause: R,
      onPlay: s,
      onEnd: b,
      onClick: u,
      onMouseEnter: m,
      onMouseLeave: k,
      onMouseDown: W,
      onMouseUp: T,
    } = r,
    U = w(),
    H = vt(),
    G = w(null),
    B = w(null),
    V = It(),
    ee = Ct(),
    Q = V || ee === se.export,
    xe = Ft(r),
    te = Q
      ? "no-autoplay"
      : Pr({ playingProp: N, muted: g, loop: h, playsinline: I, controls: f }),
    Ce = Q ? !0 : Le(U),
    we = Q ? !1 : Le(U, { margin: "10%", once: !0 }),
    Ie = S === 100 ? 99.9 : S,
    { play: je, pause: ft, setProgress: mt, isPlaying: dt } = Nr(U);
  q(() => {
    Q || (te !== "on-viewport" && (N ? je() : ft()));
  }, [te, N]),
    q(() => {
      Q ||
        (Ce && N && te !== "no-autoplay" && je(), te === "on-viewport" && ft());
    }, [te, Ce, N]),
    q(() => {
      !V || y || d || Ie || !U.current || (U.current.currentTime = 0.01);
    }, [d, y, Ie]);
  let Gt = w(!1);
  q(() => {
    if (!Gt.current) {
      Gt.current = !0;
      return;
    }
    let re = Qe(M) ? M.get() : (M ?? 0) * 0.01;
    mt((re ?? 0) || (Ie ?? 0) / 100);
  }, [Ie, n, a, M]),
    q(() => {
      if (Qe(M)) return M.on("change", (re) => mt(re));
    }, [M]),
    bt(() => {
      G.current !== null && U.current && ((!B && h) || !G.current) && je();
    }),
    wt(() => {
      U.current &&
        ((B.current = U.current.ended), (G.current = U.current.paused), ft());
    });
  let Fr = z(() => {
    let re = "";
    if (o === "URL") return a + re;
    if (o === "Upload") return n + re;
  }, [o, n, a, Ie]);
  q(() => {
    H && U.current && te === "on-mount" && setTimeout(() => je(), 50);
  }, []),
    q(() => {
      U.current && !g && (U.current.volume = (J ?? 0) / 100);
    }, [J]);
  let kr = () => {
    let re = U.current;
    re &&
      (re.currentTime < 0.3 && Ie > 0 && mt((Ie ?? 0) * 0.01),
      (dt.current || te === "on-mount" || (N && te === "on-viewport" && Ce)) &&
        je());
  };
  return e("video", {
    onClick: u,
    onMouseEnter: m,
    onMouseLeave: k,
    onMouseDown: W,
    onMouseUp: T,
    src: Fr,
    loop: h,
    ref: U,
    onSeeked: (re) => E?.(re),
    onPause: (re) => R?.(re),
    onPlay: (re) => s?.(re),
    onEnded: (re) => b?.(re),
    autoPlay:
      dt.current || te === "on-mount" || (N && te === "on-viewport" && Ce),
    preload: dt.current
      ? "auto"
      : Q && !y
      ? "metadata"
      : te !== "on-mount" && !we
      ? "none"
      : "metadata",
    poster:
      d && !n && a === Tr
        ? "./images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg"
        : d && y
        ? y
        : void 0,
    onLoadedData: kr,
    controls: f,
    muted: Q ? !0 : g,
    playsInline: I,
    style: {
      cursor: u ? "pointer" : "auto",
      width: "100%",
      height: "100%",
      borderRadius: xe,
      display: "block",
      objectFit: C,
      backgroundColor: x,
      objectPosition: "50% 50%",
    },
  });
});
$.displayName = "Video";
function Gr(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function zr(t) {
  return (t.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(Gr)
    .join(" ");
}
var ar = ["cover", "fill", "contain", "scale-down", "none"];
X($, {
  srcType: {
    type: l.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: l.String,
    title: "URL",
    defaultValue: "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
    hidden(t) {
      return t.srcType === "Upload";
    },
  },
  srcFile: {
    type: l.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(t) {
      return t.srcType === "URL";
    },
  },
  playing: {
    type: l.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  ...kt,
  posterEnabled: {
    type: l.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: {
    type: l.Image,
    title: "Image",
    hidden: ({ posterEnabled: t }) => !t,
    description:
      "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).",
  },
  backgroundColor: {
    type: l.Color,
    title: "Background",
    defaultValue: "rgba(0,0,0,0)",
  },
  startTime: {
    title: "Start Time",
    type: l.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: l.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: l.Enum,
    title: "Fit",
    options: ar,
    optionTitles: ar.map(zr),
  },
  controls: {
    type: l.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: !1,
  },
  muted: {
    type: l.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: l.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: t }) => t,
    defaultValue: 25,
  },
  onEnd: { type: l.EventHandler },
  onSeeked: { type: l.EventHandler },
  onPause: { type: l.EventHandler },
  onPlay: { type: l.EventHandler },
  ...xt,
});
var nr = { left: 0, top: 0, center: 0.5, right: 1, bottom: 1 };
function ze(t) {
  let {
      smoothing: r,
      enabled: o,
      horizontalAlignment: a,
      verticalAlignment: n,
      transition: d,
    } = t,
    f = se.current() === se.canvas,
    i = Br(),
    h = { damping: 100, stiffness: qr(r, 0, 100, 2e3, 50) },
    g = $e(0),
    I = $e(0),
    L = et(g, h),
    C = et(I, h),
    x = w(null),
    p = w(null),
    J = w(null),
    S = w(null),
    y = w(r !== 0),
    N = w(null),
    M = w(null),
    E = w(null),
    R = w(!1),
    s = w(0),
    b = w(0),
    u = w(1),
    m = w(0);
  return (
    q(() => {
      y.current = r !== 0;
    }, [r]),
    q(() => {
      let k,
        W = () => {
          if (f || ((k = requestAnimationFrame(W)), !p.current || !S.current))
            return;
          let T = (y.current ? L.get() : g.get()).toFixed(3),
            U = (y.current ? C.get() : I.get()).toFixed(3),
            H = v.getComputedStyle(p.current),
            G = Or(p.current, H, T, U, N.current, M.current, E.current),
            B = m.current * u.current;
          (J.current = G),
            (S.current.textContent = `
				[data-followcursor="${i}"] { 
					transform: ${G} !important;
					${B < 0.995 ? `opacity: ${B} !important;` : ""}
				}
			`),
            (N.current = T),
            (M.current = U),
            (E.current = p.current.style.transform);
        };
      if (x.current) {
        let T = x.current.parentElement;
        if (T) {
          let U = T.parentElement;
          U && ((p.current = U), U.setAttribute("data-followcursor", i));
        }
      }
      return (
        W(),
        () => {
          k && cancelAnimationFrame(k);
        }
      );
    }, []),
    q(() => {
      let k = (T) => {
          if (!p.current) return;
          let U = !1;
          R.current ||
            ((R.current = !0),
            Ae(m.current, o ? 1 : 0, {
              ...d,
              onUpdate: (we) => {
                m.current = we;
              },
            }),
            (U = !0));
          let H = v.getComputedStyle(p.current),
            G = new DOMMatrix(H.transform),
            B = p.current.getBoundingClientRect(),
            V = B.left - G.m41,
            ee = B.top - G.m42,
            Q = v.pageXOffset || document.documentElement.scrollLeft,
            xe = v.pageYOffset || document.documentElement.scrollTop;
          (s.current = Q), (b.current = xe);
          let te = T.clientX + Q - (V + Q) - nr[a] * B.width,
            Ce = T.clientY + xe - (ee + xe) - nr[n] * B.height;
          g.set(te), I.set(Ce), U && (L.jump(te), C.jump(Ce));
        },
        W = () => {
          if (!p.current || !R.current) return;
          let T =
              v.scrollX || v.pageXOffset || document.documentElement.scrollLeft,
            U =
              v.scrollY || v.pageYOffset || document.documentElement.scrollTop,
            H = T - s.current,
            G = U - b.current;
          (s.current = T),
            (b.current = U),
            g.set(g.get() + H),
            I.set(I.get() + G);
        };
      return (
        v.addEventListener("mousemove", k),
        v.addEventListener("scroll", W),
        () => {
          v.removeEventListener("mousemove", k),
            v.removeEventListener("scroll", W);
        }
      );
    }, [o]),
    q(() => {
      if (!S.current || !p.current) return;
      let k = v.getComputedStyle(p.current);
      (u.current = parseFloat(k.opacity) || 1),
        Ae(m.current, o && R.current ? 1 : 0, {
          ...d,
          onUpdate: (W) => {
            m.current = W;
          },
        });
    }, [o, d]),
    e("div", {
      ref: x,
      style: { ...t.style },
      children: e("style", { ref: S }),
    })
  );
}
ze.displayName = "Follow Cursor";
X(ze, {
  enabled: { type: l.Boolean, defaultValue: !0 },
  smoothing: { type: l.Number, defaultValue: 0, min: 0, max: 100, step: 1 },
  horizontalAlignment: {
    type: l.Enum,
    defaultValue: "center",
    options: ["left", "center", "right"],
    optionTitles: ["Left", "Center", "Right"],
    displaySegmentedControl: !0,
    title: "Alignment",
  },
  verticalAlignment: {
    type: l.Enum,
    defaultValue: "center",
    options: ["top", "center", "bottom"],
    optionTitles: ["Top", "Center", "Bottom"],
    displaySegmentedControl: !0,
    title: " ",
  },
  transition: {
    type: l.Transition,
    defaultValue: { type: "spring", duration: 0.2, bounce: 0 },
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var or = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  Br = () =>
    z(() => {
      let r = "";
      for (let o = 0; o < 13; o++)
        r += or.charAt(Math.floor(Math.random() * or.length));
      return r;
    }, []);
function qr(t, r, o, a, n) {
  if (r === o) return a;
  let d = (t - r) / (o - r);
  return a + d * (n - a);
}
function Or(t, r, o, a, n, d, f) {
  (o = o || 0), (a = a || 0), (n = n || 0), (d = d || 0);
  let i = r.transform,
    h = t.style.transform,
    g = o - n,
    I = a - d,
    L = `translate(${g}px, ${I}px)`,
    C = L;
  return (
    h &&
      h !== "none" &&
      (f && f !== "none" ? (C = `${L} ${Wr(f)} ${h}`) : (C = `${L} ${h}`)),
    i && i !== "none" ? `${C} ${i}` : C
  );
}
function Wr(t) {
  return (t.match(/\w+\([^)]+\)/g) || [])
    .reverse()
    .map((a) => {
      let [n, d] = a.match(/(\w+)\(([^)]+)\)/).slice(1),
        f = d.split(",").map((h) => h.trim()),
        i = (h) => {
          let [g, I, L, C] = h.match(/^(-?)(\d*\.?\d+)(\D*)$/);
          return `${I ? "" : "-"}${L}${C}`;
        };
      switch (n.toLowerCase()) {
        case "translate":
        case "translate3d":
        case "translatex":
        case "translatey":
        case "translatez":
          return `${n}(${f.map(i).join(", ")})`;
        case "scale":
        case "scale3d":
          return `${n}(${f.map((g) => 1 / parseFloat(g)).join(", ")})`;
        case "scalex":
        case "scaley":
        case "scalez":
          return `${n}(${1 / parseFloat(f[0])})`;
        case "rotate":
        case "rotatex":
        case "rotatey":
        case "rotatez":
          return `${n}(${i(f[0])})`;
        case "rotate3d":
          let h = f.map(parseFloat);
          return `${n}(${h[0]}, ${h[1]}, ${h[2]}, ${i(f[3])})`;
        case "skew":
        case "skewx":
        case "skewy":
          return `${n}(${f.map(i).join(", ")})`;
        case "matrix":
        case "matrix3d":
          return (
            console.warn(
              `Inverting ${n} is not supported. Returning original.`
            ),
            a
          );
        default:
          return (
            console.warn(
              `Unknown transform function: ${n}. Returning original.`
            ),
            a
          );
      }
    })
    .join(" ");
}
var Hr = pt(0.7, 0, 0.7, 1),
  Ut;
(function (t) {
  (t.Grid = "grid"),
    (t.Checkerboard = "checkerboard"),
    (t.HorizontalLines = "horizontalLines"),
    (t.VerticalLines = "verticalLines"),
    (t.DiagonalLines = "diagonalLines"),
    (t.Dots = "dots"),
    (t.Triangles = "triangles"),
    (t.Custom = "custom");
})(Ut || (Ut = {}));
var Yr = { fill: "cover", fit: "contain", stretch: "100% 100%" },
  ir = {
    topLeft: "0 0",
    topCenter: "50% 0",
    topRight: "100% 0",
    left: "0 50%",
    center: "50% 50%",
    right: "100% 50%",
    bottomLeft: "0 100%",
    bottomCenter: "50% 100%",
    bottomRight: "100% 100%",
  };
function Te({
  color: t,
  hoverColor: r,
  hoverSize: o,
  hoverShape: a,
  patternPreset: n,
  flip: d,
  lineWidth: f,
  customPatternImage: i,
  customPatternSizing: h,
  tileSize: g,
  customPatternMode: I,
  customPatternPosition: L,
  dotSize: C,
  radius: x,
  smoothing: p,
  style: J,
}) {
  let S = se.current() === se.canvas,
    y = n === "custom",
    N = y && h !== "stretch" ? ir[L] : ir.center,
    M = "",
    E = `${g}px ${g}px`,
    R = "repeat";
  switch (n) {
    case "grid":
      M = `repeating-conic-gradient(at ${f}px ${f}px, [color] 0deg 90deg, transparent 90deg 180deg, [color] 180deg 360deg)`;
      break;
    case "checkerboard":
      M = d
        ? "repeating-conic-gradient([color] 0% 25%, transparent 0% 50%)"
        : "repeating-conic-gradient(transparent 0% 25%, [color] 0% 50%)";
      break;
    case "horizontalLines":
      M = `linear-gradient(to top, [color] ${f}px, transparent ${f}px)`;
      break;
    case "verticalLines":
      M = `linear-gradient(to left, [color] ${f}px, transparent ${f}px)`;
      break;
    case "diagonalLines":
      let u = f / 2,
        m = Xr(g * 2);
      (M = `linear-gradient(to top ${
        d ? "left" : "right"
      }, [color] ${u}px, transparent ${u}px, transparent calc(50% - ${u}px), [color] calc(50% - ${u}px), [color] calc(50% + ${u}px), transparent calc(50% + ${u}px), transparent calc(100% - ${u}px), [color] calc(100% - ${u}px), [color] 100%)`),
        (E = `${m}px ${m}px`);
      break;
    case "dots":
      M = `radial-gradient([color] ${C / 2 - 0.4}px, transparent ${
        C / 2 + 0.4
      }px)`;
      break;
    case "triangles":
      M = `linear-gradient(${
        d ? -45 : 45
      }deg, transparent calc(50% - 0.1px), [color] calc(50% + 0.1px))`;
      break;
    case "custom":
      (M = `url("${i?.src}")`),
        h !== "tile" && ((R = "no-repeat"), (E = Yr[h]));
      break;
  }
  let s = {},
    b = o;
  if (a === "glow") {
    let u = [];
    for (let m = 0; m < 15; m++) {
      let k = sr(m, 0, 14, 0, 1);
      u.push(`rgba(255, 255, 255, ${Hr(1 - k)}) ${sr(m, 0, 14, 0, 100)}%`);
    }
    (s = { maskImage: `radial-gradient(closest-side, ${u.join(", ")})` }),
      (b = o * 2);
  } else a === "circle" && (s = { borderRadius: "50%" });
  return F("div", {
    style: {
      position: "relative",
      borderRadius: x,
      overflow: "hidden",
      backgroundImage: y ? "" : M.replace(/\[color\]/g, t),
      backgroundSize: E,
      backgroundPosition: N,
      backgroundRepeat: R,
      ...J,
    },
    children: [
      y &&
        e("div", {
          style: {
            position: "absolute",
            inset: 0,
            backgroundColor: t,
            maskImage: M,
            maskSize: E,
            maskPosition: N,
            maskRepeat: R,
            maskMode: I,
          },
        }),
      e("div", {
        style: {
          position: "absolute",
          inset: 0,
          maskImage: y ? M : M.replace(/\[color\]/g, "white"),
          maskSize: E,
          maskPosition: N,
          maskRepeat: R,
          maskMode: y ? I : void 0,
          WebkitMaskImage: y ? M : M.replace(/\[color\]/g, "white"),
          WebkitMaskSize: E,
          WebkitMaskPosition: N,
          WebkitMaskRepeat: R,
          WebkitMaskMode: y ? I : void 0,
        },
        children: e("div", {
          style: {
            position: "absolute",
            top: S ? "50%" : 0,
            left: S ? "50%" : 0,
            transform: S ? "translate(-50%, -50%)" : void 0,
            width: b,
            height: b,
            backgroundColor: r,
            ...s,
          },
          children: e("div", {
            style: { display: "contents" },
            children: e(ze, {
              enabled: !0,
              smoothing: p,
              horizontalAlignment: "center",
              verticalAlignment: "center",
            }),
          }),
        }),
      }),
    ],
  });
}
Te.displayName = "Shimmer Grid";
X(Te, {
  color: { type: l.Color, defaultValue: "rgba(153, 153, 153, 0.5)" },
  hoverColor: { type: l.Color, defaultValue: "#FFF" },
  hoverSize: { type: l.Number, defaultValue: 400, min: 1, max: 2e3, step: 1 },
  hoverShape: {
    type: l.Enum,
    defaultValue: "glow",
    options: ["glow", "circle"],
    optionTitles: ["Glow", "Circle"],
    displaySegmentedControl: !0,
    title: "Shape",
  },
  patternPreset: {
    type: l.Enum,
    defaultValue: "grid",
    options: Object.values(Ut),
    optionTitles: [
      "Grid",
      "Checkerboard",
      "Horizontal Lines",
      "Vertical Lines",
      "Diagonal Lines",
      "Dots",
      "Triangles",
      "Custom",
    ],
    title: "Pattern",
  },
  customPatternImage: {
    type: l.ResponsiveImage,
    title: "Image",
    hidden: (t) => t.patternPreset !== "custom",
  },
  customPatternSizing: {
    type: l.Enum,
    defaultValue: "tile",
    options: ["fill", "fit", "stretch", "tile"],
    optionTitles: ["Fill", "Fit", "Stretch", "Tile"],
    title: "Sizing",
    hidden: (t) => t.patternPreset !== "custom",
  },
  flip: {
    type: l.Boolean,
    defaultValue: !1,
    hidden: (t) =>
      t.patternPreset !== "checkerboard" &&
      t.patternPreset !== "triangles" &&
      t.patternPreset !== "diagonalLines",
  },
  lineWidth: {
    type: l.Number,
    defaultValue: 2,
    min: 1,
    step: 1,
    displayStepper: !0,
    hidden: (t) =>
      t.patternPreset !== "horizontalLines" &&
      t.patternPreset !== "verticalLines" &&
      t.patternPreset !== "diagonalLines" &&
      t.patternPreset !== "grid",
  },
  tileSize: {
    type: l.Number,
    defaultValue: 50,
    min: 1,
    step: 1,
    hidden: (t) =>
      t.patternPreset === "custom" && t.customPatternSizing !== "tile",
  },
  dotSize: {
    type: l.Number,
    defaultValue: 10,
    min: 1,
    step: 1,
    displayStepper: !0,
    hidden: (t) => t.patternPreset !== "dots",
  },
  customPatternPosition: {
    type: l.Enum,
    defaultValue: "center",
    options: [
      "topLeft",
      "topCenter",
      "topRight",
      "left",
      "center",
      "right",
      "bottomLeft",
      "bottomCenter",
      "bottomRight",
    ],
    optionTitles: [
      "Top Left",
      "Top Center",
      "Top Right",
      "Left",
      "Center",
      "Right",
      "Bottom Left",
      "Bottom Center",
      "Bottom Right",
    ],
    title: "Position",
    hidden: (t) =>
      t.patternPreset !== "custom" || t.customPatternSizing === "stretch",
  },
  customPatternMode: {
    type: l.Enum,
    defaultValue: "alpha",
    options: ["alpha", "luminance"],
    optionTitles: ["Alpha", "Luminance"],
    title: "Mode",
    hidden: (t) => t.patternPreset !== "custom",
  },
  smoothing: { type: l.Number, defaultValue: 0, min: 0, max: 100, step: 1 },
  radius: {
    type: l.BorderRadius,
    defaultValue: "0px",
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
function Xr(t) {
  if (typeof t != "number" || isNaN(t) || t <= 0) return t;
  let r = Math.sqrt(Math.pow(t, 2) / 2);
  return Number(r.toFixed(2));
}
function sr(t, r, o, a, n) {
  if (r === o) return a;
  let d = (t - r) / (o - r);
  return a + d * (n - a);
}
var Jr = K($),
  lr = qt($),
  Kr = ["bDpomOJGS", "q62Az_SO5"],
  Qr = "framer-BZ2fU",
  Zr = { bDpomOJGS: "framer-v-kk9nmp", q62Az_SO5: "framer-v-gl9ui0" };
function cr(t, ...r) {
  let o = {};
  return r?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var $r = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ea = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  ta = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  ra = c.create(_),
  aa = { Active: "q62Az_SO5", Default: "bDpomOJGS" },
  na = ({
    height: t,
    icon: r,
    id: o,
    subtext: a,
    title: n,
    video: d,
    width: f,
    ...i
  }) => ({
    ...i,
    NM0wvYidN: a ?? i.NM0wvYidN ?? "Lorem ipsum type text in this space ",
    qZ5Zribb9: d ?? i.qZ5Zribb9,
    TM0lGsHsb: n ?? i.TM0lGsHsb ?? "Intuitive Insights",
    variant: aa[i.variant] ?? i.variant ?? "bDpomOJGS",
    VVlXExPFO: r ??
      i.VVlXExPFO ?? {
        alt: "",
        pixelHeight: 32,
        pixelWidth: 32,
        src: "./images/rCkyE8ZdhJADb245OOPixuhbRHA.svg",
      },
  }),
  oa = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  ia = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      {
        style: h,
        className: g,
        layoutId: I,
        variant: L,
        VVlXExPFO: C,
        TM0lGsHsb: x,
        NM0wvYidN: p,
        qZ5Zribb9: J,
        ...S
      } = na(t),
      {
        baseVariant: y,
        classNames: N,
        clearLoadingGesture: M,
        gestureHandlers: E,
        gestureVariant: R,
        isLoading: s,
        setGestureState: b,
        setVariant: u,
        variants: m,
      } = ge({
        cycleOrder: Kr,
        defaultVariant: "bDpomOJGS",
        ref: a,
        variant: L,
        variantClassNames: Zr,
      }),
      k = oa(t, m),
      T = j(Qr, ...[]);
    return e(ae, {
      id: I ?? n,
      children: e(ra, {
        animate: m,
        initial: !1,
        children: e(ta, {
          value: $r,
          children: F(c.div, {
            ...S,
            ...E,
            className: j(T, "framer-kk9nmp", g, N),
            "data-border": !0,
            "data-framer-name": "Default",
            layoutDependency: k,
            layoutId: "bDpomOJGS",
            ref: a,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.12)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgb(0, 0, 0)",
              ...h,
            },
            ...cr({ q62Az_SO5: { "data-framer-name": "Active" } }, y, R),
            children: [
              e(pe, {
                background: {
                  alt: "",
                  fit: "fit",
                  loading: fe(
                    (i?.y || 0) +
                      24 +
                      (((i?.height || 349.5) - 48 - 404.5) / 2 + 0 + 0)
                  ),
                  sizes: "32px",
                  ...ea(C),
                  positionX: "center",
                  positionY: "center",
                },
                className: "framer-1529253",
                "data-framer-name": "icon",
                layoutDependency: k,
                layoutId: "zmHiUXTAd",
              }),
              e(O, {
                __fromCanvasComponent: !0,
                children: e(_, {
                  children: e(c.p, {
                    style: {
                      "--font-selector": "R0Y7R2Vpc3QgTW9uby01MDA=",
                      "--framer-font-family": '"Geist Mono", monospace',
                      "--framer-font-size": "18px",
                      "--framer-font-weight": "500",
                      "--framer-letter-spacing": "0.01em",
                      "--framer-line-height": "125%",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: "Intuitive Insights",
                  }),
                }),
                className: "framer-13cclhf",
                "data-framer-name": "Title",
                fonts: ["GF;Geist Mono-500"],
                layoutDependency: k,
                layoutId: "xnYHva5X1",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-paragraph-spacing": "0px",
                },
                text: x,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              e(O, {
                __fromCanvasComponent: !0,
                children: e(_, {
                  children: e(c.p, {
                    style: {
                      "--font-selector": "R0Y7R2Vpc3QtcmVndWxhcg==",
                      "--framer-font-family":
                        '"Geist", "Geist Placeholder", sans-serif',
                      "--framer-letter-spacing": "0.01em",
                      "--framer-line-height": "125%",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.64))",
                    },
                    children: "Lorem ipsum type text in this space ",
                  }),
                }),
                className: "framer-1so8haf",
                "data-framer-name": "Sub-text",
                fonts: ["GF;Geist-regular"],
                layoutDependency: k,
                layoutId: "nOISWZ_4o",
                style: {
                  "--extracted-r6o4lv": "rgba(255, 255, 255, 0.64)",
                  "--framer-paragraph-spacing": "0px",
                },
                text: p,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              e(P, {
                children: e(Z, {
                  className: "framer-1y3xn2d-container",
                  isAuthoredByUser: !0,
                  isModuleExternal: !0,
                  layoutDependency: k,
                  layoutId: "phDtYBH34-container",
                  nodeId: "phDtYBH34",
                  rendersWithMotion: !0,
                  scopeId: "bqUgQgHNn",
                  children: e($, {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: 0,
                    bottomLeftRadius: 0,
                    bottomRightRadius: 0,
                    controls: !1,
                    height: "100%",
                    id: "phDtYBH34",
                    isMixedBorderRadius: !1,
                    layoutId: "phDtYBH34",
                    loop: !0,
                    muted: !0,
                    objectFit: "cover",
                    playing: !1,
                    posterEnabled: !0,
                    srcFile: J,
                    srcType: "Upload",
                    srcUrl: "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                    startTime: 0,
                    style: { height: "100%", width: "100%" },
                    topLeftRadius: 0,
                    topRightRadius: 0,
                    volume: 25,
                    width: "100%",
                    ...cr({ q62Az_SO5: { playing: !0 } }, y, R),
                  }),
                }),
              }),
              e(c.div, {
                className: "framer-11z1s8f",
                "data-framer-name": "Blur",
                layoutDependency: k,
                layoutId: "Yh1tKZ2oA",
                style: {
                  background:
                    "linear-gradient(180.00000000000085deg, rgb(205, 255, 82) 0%, rgba(0, 0, 0, 0) 100%)",
                  borderBottomLeftRadius: "100%",
                  borderBottomRightRadius: "100%",
                  borderTopLeftRadius: "100%",
                  borderTopRightRadius: "100%",
                  filter: "blur(100px)",
                  opacity: 0,
                  WebkitFilter: "blur(100px)",
                },
                variants: { q62Az_SO5: { opacity: 1 } },
              }),
              e(ve, {
                className: "framer-1pzv6m0",
                "data-framer-name": "TR",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: k,
                layoutId: "ID7PqVTfm",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16V0H-8.9407e-08" stroke="#CDFF52"/>
</svg>
`,
                variants: { q62Az_SO5: { opacity: 1 } },
                withExternalLayout: !0,
              }),
              e(ve, {
                className: "framer-1nks854",
                "data-framer-name": "BR",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: k,
                layoutId: "mfvOw0Uz2",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 -3.8743e-07V16H-8.9407e-08" stroke="#CDFF52"/>
</svg>
`,
                variants: { q62Az_SO5: { opacity: 1 } },
                withExternalLayout: !0,
              }),
              e(ve, {
                className: "framer-p0bvi1",
                "data-framer-name": "TL",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: k,
                layoutId: "MgTb61MbE",
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16V0H16" stroke="#CDFF52"/>
</svg>
`,
                withExternalLayout: !0,
              }),
              e(ve, {
                className: "framer-qpk6ev",
                "data-framer-name": "BL",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: k,
                layoutId: "OImz_TJdr",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 -3.8743e-07V16H16" stroke="#CDFF52"/>
</svg>
`,
                variants: { q62Az_SO5: { opacity: 1 } },
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  sa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-BZ2fU.framer-ymg1a2, .framer-BZ2fU .framer-ymg1a2 { display: block; }",
    ".framer-BZ2fU.framer-kk9nmp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 16px 24px 16px; position: relative; width: 350px; }",
    ".framer-BZ2fU .framer-1529253 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; z-index: 3; }",
    ".framer-BZ2fU .framer-13cclhf, .framer-BZ2fU .framer-1so8haf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 3; }",
    ".framer-BZ2fU .framer-1y3xn2d-container { aspect-ratio: 1.7857142857142858 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 179px); position: relative; width: 100%; }",
    ".framer-BZ2fU .framer-11z1s8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 110px; justify-content: center; left: -18px; padding: 0px; position: absolute; right: -19px; top: -22px; z-index: 1; }",
    ".framer-BZ2fU .framer-1pzv6m0 { flex: none; height: 18px; position: absolute; right: -8px; top: -7px; width: 18px; z-index: 1; }",
    ".framer-BZ2fU .framer-1nks854 { bottom: -7px; flex: none; height: 18px; position: absolute; right: -8px; width: 18px; z-index: 1; }",
    ".framer-BZ2fU .framer-p0bvi1 { flex: none; height: 18px; left: -8px; position: absolute; top: -7px; width: 18px; z-index: 1; }",
    ".framer-BZ2fU .framer-qpk6ev { bottom: -7px; flex: none; height: 18px; left: -8px; position: absolute; width: 18px; z-index: 1; }",
    ".framer-BZ2fU.framer-v-gl9ui0 .framer-1pzv6m0 { right: 0px; top: 0px; }",
    ".framer-BZ2fU.framer-v-gl9ui0 .framer-1nks854 { bottom: 0px; right: 0px; }",
    ".framer-BZ2fU.framer-v-gl9ui0 .framer-p0bvi1 { left: 0px; top: 0px; }",
    ".framer-BZ2fU.framer-v-gl9ui0 .framer-qpk6ev { bottom: 0px; left: 0px; }",
    '.framer-BZ2fU[data-border="true"]::after, .framer-BZ2fU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Be = le(ia, sa, "framer-BZ2fU"),
  St = Be;
Be.displayName = "Phone Tab";
Be.defaultProps = { height: 349.5, width: 350 };
X(Be, {
  variant: {
    options: ["bDpomOJGS", "q62Az_SO5"],
    optionTitles: ["Default", "Active"],
    title: "Variant",
    type: l.Enum,
  },
  VVlXExPFO: {
    __defaultAssetReference:
      "data:framer/asset-reference,rCkyE8ZdhJADb245OOPixuhbRHA.svg?originalFilename=insights.svg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,rCkyE8ZdhJADb245OOPixuhbRHA.svg?originalFilename=insights.svg&preferredSize=auto",
    },
    title: "Icon",
    type: l.ResponsiveImage,
  },
  TM0lGsHsb: {
    defaultValue: "Intuitive Insights",
    displayTextArea: !0,
    title: "Title",
    type: l.String,
  },
  NM0wvYidN: {
    defaultValue: "Lorem ipsum type text in this space ",
    displayTextArea: !0,
    title: "Subtext",
    type: l.String,
  },
  qZ5Zribb9: lr?.srcFile && {
    ...lr.srcFile,
    __defaultAssetReference: "",
    description: void 0,
    hidden: void 0,
    title: "Video",
  },
});
me(
  Be,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Geist Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geistmono/v3/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2",
          weight: "500",
        },
        {
          family: "Geist",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2",
          weight: "400",
        },
      ],
    },
    ...Jr,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ve = 0,
  De = 1,
  Ne = 2;
function ke(t) {
  var r;
  let {
      from: o,
      scrambledLetters: a,
      text: n,
      scrambledColor: d,
      animation: f,
      speed: i,
    } = t,
    h = se.current() === se.canvas,
    g = t.tag,
    I = w(null),
    L = w(fr(t)),
    [C, x] = Ue(0),
    [p, J] = Ue(null),
    S = w(null),
    y = Le(I, { once: !t.animation.replay, amount: "some" }),
    N = _e(i, 1, 100, 0.2, 0.002),
    M = z(
      () =>
        o === "random"
          ? Array.from({ length: n.length }, (b, u) => u).sort(
              () => Math.random() - 0.5
            )
          : [],
      [n, o]
    ),
    E = () => {
      h ||
        (p && p.stop(),
        S.current && clearInterval(S.current),
        setTimeout(() => {
          (S.current = setInterval(() => {
            L.current = fr(t);
          }, N * 1e3)),
            J(
              Ae(0, 1, {
                type: "ease",
                ease: "linear",
                duration: N * (n.length + a),
                onUpdate: x,
                onComplete: () => {
                  S.current && clearInterval(S.current);
                },
              })
            );
        }, f.delay * 1e3));
    };
  q(
    () => (
      f.trigger == "appear" && E(),
      () => {
        S.current && clearInterval(S.current);
      }
    ),
    []
  ),
    q(() => {
      f.trigger == "layerInView" &&
        (y
          ? E()
          : p && (p.stop(), x(0), S.current && clearInterval(S.current)));
    }, [y]);
  let R = [];
  switch (o) {
    case "left": {
      let s = _e(C, 0, 1, -a, n.length),
        b = _e(C, 0, 1, 0, n.length + a);
      R.push(
        [n.substring(0, de(s, 0, n.length)), Ne],
        [L.current.substring(de(s, 0, n.length), de(b, 0, n.length)), De],
        [n.substring(de(b, 0, n.length)), Ve]
      );
      break;
    }
    case "center": {
      let s = Math.ceil(n.length / 2),
        b = Math.max(Math.floor(a / 2), 1),
        u = _e(C, 0, 1, s, -b),
        m = _e(C, 0, 1, s + b, 0);
      R.push(
        [n.substring(0, de(u, 0, n.length)), Ve],
        [L.current.substring(de(u, 0, s), de(m, 0, s)), De],
        [n.substring(de(m, 0, s), de(n.length - m, s, n.length)), Ne],
        [
          L.current.substring(
            de(n.length - u, s, n.length),
            de(n.length - m, s, n.length)
          ),
          De,
        ],
        [n.substring(de(n.length - u, 0, n.length), n.length), Ve]
      );
      break;
    }
    case "right": {
      let s = _e(C, 0, 1, n.length, -a),
        b = _e(C, 0, 1, n.length + a, 0);
      R.push(
        [n.substring(0, de(s, 0, n.length)), Ve],
        [L.current.substring(de(s, 0, n.length), de(b, 0, n.length)), De],
        [n.substring(de(b, 0, n.length), n.length), Ne]
      );
      break;
    }
    case "random": {
      if (C === 0) R.push([n, Ve]);
      else if (C >= 1) R.push([n, Ne]);
      else
        for (let s = 0; s < n.length; s++) {
          let b = M.indexOf(s),
            u = a / n.length,
            m = (b / n.length) * (1 - u),
            k = m + u;
          C >= k
            ? R.push([n[s], Ne])
            : C >= m
            ? R.push([L.current[s], De])
            : R.push([n[s], Ve]);
        }
      break;
    }
  }
  return e(g, {
    ref: I,
    style: {
      color: t.color,
      userSelect: "none",
      pointerEvents: "none",
      margin: 0,
      whiteSpace:
        !((r = t.style) === null || r === void 0) && r.width
          ? void 0
          : "nowrap",
      ...t.font,
      ...t.style,
    },
    children: h
      ? n
      : la(R).map(([s, b], u) => {
          switch (b) {
            case Ve:
              return e("span", { style: { opacity: 0 }, children: s }, u);
            case De:
              return d ? e("span", { style: { color: d }, children: s }, u) : s;
            case Ne:
              return s;
          }
        }),
  });
}
ke.displayName = "Scramble Appear";
X(ke, {
  text: {
    type: l.String,
    defaultValue: "Learn Framer With Framer University",
    displayTextArea: !0,
  },
  characters: {
    type: l.String,
    defaultValue:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?~",
    displayTextArea: !0,
  },
  from: {
    type: l.Enum,
    defaultValue: "left",
    options: ["left", "center", "right", "random"],
    optionTitles: ["Left", "Center", "Right", "Random"],
  },
  font: {
    type: "font",
    controls: "extended",
    defaultFontType: "monospace",
    defaultValue: { fontSize: 24, lineHeight: 1.4 },
  },
  color: { type: l.Color, defaultValue: "#000" },
  scrambledColor: { type: l.Color, optional: !0, title: "Scrambled" },
  speed: {
    type: l.Number,
    defaultValue: 75,
    min: 1,
    max: 100,
    step: 1,
    unit: "%",
  },
  scrambledLetters: {
    type: l.Number,
    defaultValue: 10,
    min: 1,
    step: 1,
    displayStepper: !0,
    title: "Letters",
  },
  animation: {
    type: l.Object,
    icon: "effect",
    controls: {
      trigger: {
        type: l.Enum,
        defaultValue: "layerInView",
        options: ["appear", "layerInView"],
        optionTitles: ["Appear", "Layer in View"],
        displaySegmentedControl: !0,
        segmentedControlDirection: "vertical",
      },
      replay: {
        type: l.Boolean,
        defaultValue: !0,
        hidden: (t) => t.trigger !== "layerInView",
      },
      delay: { type: l.Number, defaultValue: 0, min: 0, step: 0.01 },
    },
  },
  options: {
    type: l.Object,
    buttonTitle: "Options",
    controls: {
      matchCase: { type: l.Boolean, defaultValue: !0 },
      keepSpaces: {
        type: l.Boolean,
        defaultValue: !1,
        title: "Spaces",
        enabledTitle: "Keep",
        disabledTitle: "Replace",
        description: "",
      },
    },
  },
  userSelect: { type: l.Boolean, defaultValue: !0 },
  tag: {
    type: l.Enum,
    title: "Tag",
    defaultValue: "p",
    displaySegmentedControl: !0,
    options: ["h1", "h2", "h3", "p"],
    optionTitles: ["H1", "H2", "H3", "P"],
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var fr = (t) => {
  let r = t.text.length,
    o = t.characters,
    a = t.text,
    n = t.options.matchCase,
    d = t.options.keepSpaces;
  if (r <= 0) return "";
  let f = "",
    i = "";
  for (let h = 0; h < r; h++) {
    let g = a[h];
    if (d && (g === " " || g === "	")) {
      f += g;
      continue;
    }
    let I;
    do
      (I = o[Math.floor(Math.random() * o.length)]),
        n &&
          g &&
          (I = g === g.toUpperCase() ? I.toUpperCase() : I.toLowerCase());
    while (I === i && o.length >= 8);
    (f += I), (i = I);
  }
  return f;
};
function _e(t, r, o, a, n) {
  if (r === o) return a;
  let d = (t - r) / (o - r);
  return a + d * (n - a);
}
function de(t, r, o) {
  return Math.max(r, Math.min(t, o));
}
function la(t) {
  return t
    .filter(([r]) => r.length > 0)
    .reduce(
      (r, o) => (
        r.length === 0 || r[r.length - 1][1] !== o[1]
          ? r.push(o)
          : (r[r.length - 1][0] += o[0]),
        r
      ),
      []
    );
}
Re.loadFonts(["GF;Geist Mono-500", "GF;Geist Mono-700"]);
var nt = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Geist Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geistmono/v1/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2",
          weight: "500",
        },
        {
          family: "Geist Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geistmono/v1/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2",
          weight: "700",
        },
      ],
    },
  ],
  ot = [
    '.framer-7EnqA .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-7EnqA .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #707070; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-7EnqA .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-7EnqA .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #707070; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-7EnqA .framer-styles-preset-1wjjzog:not(.rich-text-wrapper), .framer-7EnqA .framer-styles-preset-1wjjzog.rich-text-wrapper p { --framer-font-family: "Geist Mono", monospace; --framer-font-family-bold: "Geist Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0px; --framer-line-height: 1.6em; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: #707070; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  it = "framer-7EnqA";
Re.loadFonts([
  "GF;Mohave-600",
  "Inter-Black",
  "Inter-BlackItalic",
  "Inter-BoldItalic",
]);
var dr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mohave",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mohave/v12/7cH0v4ksjJunKqMVAOPIMOeSmiojdqf4HvWQopLSvBk.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/X5hj6qzcHUYv7h1390c8Rhm6550.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/cugnVhSraaRyANCaUtI5FV17wk.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/5HcVoGak8k5agFJSaKa4floXVu0.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/jn4BtSPLlS0NDp1KiFAtFKiiY0o.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/P2Bw01CtL0b9wqygO0sSVogWbo.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/3ZmXbBKToJifDV9gwcifVd1tEY.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/g0c8vEViiXNlKAgI4Ymmk3Ig.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2",
          weight: "900",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
          weight: "700",
        },
      ],
    },
  ],
  pr = [
    '.framer-USCqI .framer-styles-preset-9vrj1b:not(.rich-text-wrapper), .framer-USCqI .framer-styles-preset-9vrj1b.rich-text-wrapper h1 { --framer-font-family: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0px; --framer-line-height: 125%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  ur = "framer-USCqI";
Re.loadFonts(["GF;Mohave-600", "GF;Mohave-600italic"]);
var hr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mohave",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mohave/v12/7cH0v4ksjJunKqMVAOPIMOeSmiojdqf4HvWQopLSvBk.woff2",
          weight: "600",
        },
        {
          family: "Mohave",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/mohave/v12/7cH2v4ksjJunKqM_CdE36I75AIQkY7G8KLSao7DXrBlSVw.woff2",
          weight: "600",
        },
      ],
    },
  ],
  gr = [
    '.framer-GmLpq .framer-styles-preset-3z8xb3:not(.rich-text-wrapper), .framer-GmLpq .framer-styles-preset-3z8xb3.rich-text-wrapper h1 { --framer-font-family: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-family-italic: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 125%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-GmLpq .framer-styles-preset-3z8xb3:not(.rich-text-wrapper), .framer-GmLpq .framer-styles-preset-3z8xb3.rich-text-wrapper h1 { --framer-font-family: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-family-italic: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 125%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-GmLpq .framer-styles-preset-3z8xb3:not(.rich-text-wrapper), .framer-GmLpq .framer-styles-preset-3z8xb3.rich-text-wrapper h1 { --framer-font-family: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-family-italic: "Mohave", "Mohave Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-italic: 600; --framer-letter-spacing: 0px; --framer-line-height: 125%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  yr = "framer-GmLpq";
var ma = { aDvY4wLGi: { hover: !0 } },
  da = ["aDvY4wLGi", "SxEUd1_97"],
  pa = "framer-Iljqk",
  ua = { aDvY4wLGi: "framer-v-8ns3xm", SxEUd1_97: "framer-v-1l28z92" };
function ha(t, ...r) {
  let o = {};
  return r?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var ga = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ya = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  xa = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  ba = c.create(_),
  wa = { Active: "SxEUd1_97", Default: "aDvY4wLGi" },
  va = ({
    featureCardIcon: t,
    featureTabTitle: r,
    height: o,
    id: a,
    tap: n,
    width: d,
    ...f
  }) => ({
    ...f,
    e7kyg_Geb: t ?? f.e7kyg_Geb,
    fonL8k5c8: r ?? f.fonL8k5c8 ?? "text",
    pGOTRaaQt: n ?? f.pGOTRaaQt,
    variant: wa[f.variant] ?? f.variant ?? "aDvY4wLGi",
  }),
  Ca = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Ia = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      {
        style: h,
        className: g,
        layoutId: I,
        variant: L,
        pGOTRaaQt: C,
        fonL8k5c8: x,
        e7kyg_Geb: p,
        ...J
      } = va(t),
      {
        baseVariant: S,
        classNames: y,
        clearLoadingGesture: N,
        gestureHandlers: M,
        gestureVariant: E,
        isLoading: R,
        setGestureState: s,
        setVariant: b,
        variants: u,
      } = ge({
        cycleOrder: da,
        defaultVariant: "aDvY4wLGi",
        enabledGestures: ma,
        ref: a,
        variant: L,
        variantClassNames: ua,
      }),
      m = Ca(t, u),
      { activeVariantCallback: k, delay: W } = he(S),
      T = k(async (...G) => {
        if ((s({ isPressed: !1 }), C && (await C(...G)) === !1)) return !1;
      }),
      H = j(pa, ...[]);
    return e(ae, {
      id: I ?? n,
      children: e(ba, {
        animate: u,
        initial: !1,
        children: e(xa, {
          value: ga,
          children: F(c.div, {
            ...J,
            ...M,
            className: j(H, "framer-8ns3xm", g, y),
            "data-border": !0,
            "data-framer-name": "Default",
            "data-highlight": !0,
            layoutDependency: m,
            layoutId: "aDvY4wLGi",
            onTap: T,
            ref: a,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(255, 255, 255, 0.12)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgb(0, 0, 0)",
              ...h,
            },
            ...ha(
              {
                "aDvY4wLGi-hover": { "data-framer-name": void 0 },
                SxEUd1_97: { "data-framer-name": "Active" },
              },
              S,
              E
            ),
            children: [
              e(pe, {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: fe(
                    (i?.y || 0) +
                      16 +
                      (((i?.height || 102.5) - 32 - 160.5) / 2 + 0 + 0)
                  ),
                  sizes: "32px",
                  ...ya(p),
                },
                className: "framer-1mlgdq5",
                "data-framer-name": "icon",
                layoutDependency: m,
                layoutId: "osVP0aElu",
              }),
              e(O, {
                __fromCanvasComponent: !0,
                children: e(_, {
                  children: e(c.p, {
                    style: {
                      "--font-selector": "R0Y7R2Vpc3QgTW9uby01MDA=",
                      "--framer-font-family": '"Geist Mono", monospace',
                      "--framer-font-size": "18px",
                      "--framer-font-weight": "500",
                      "--framer-letter-spacing": "0.01em",
                      "--framer-line-height": "125%",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: "Feature #1",
                  }),
                }),
                className: "framer-qexovl",
                "data-framer-name": "Title",
                fonts: ["GF;Geist Mono-500"],
                layoutDependency: m,
                layoutId: "u_iFkpyI2",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-paragraph-spacing": "0px",
                },
                text: x,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              e(c.div, {
                className: "framer-euwsjt",
                "data-framer-name": "Blur",
                layoutDependency: m,
                layoutId: "ThwmGDfsp",
                style: {
                  background:
                    "linear-gradient(180.00000000000085deg, rgb(205, 255, 82) 0%, rgba(0, 0, 0, 0) 100%)",
                  borderBottomLeftRadius: "100%",
                  borderBottomRightRadius: "100%",
                  borderTopLeftRadius: "100%",
                  borderTopRightRadius: "100%",
                  filter: "blur(100px)",
                  opacity: 0,
                  WebkitFilter: "blur(100px)",
                },
                variants: { SxEUd1_97: { opacity: 1 } },
              }),
              e(ve, {
                className: "framer-cyzbhi",
                "data-framer-name": "TR",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: m,
                layoutId: "VrPr7vJ_m",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16V0H-8.9407e-08" stroke="#CDFF52"/>
</svg>
`,
                variants: {
                  "aDvY4wLGi-hover": { opacity: 1 },
                  SxEUd1_97: { opacity: 1 },
                },
                withExternalLayout: !0,
              }),
              e(ve, {
                className: "framer-1ucht3l",
                "data-framer-name": "BR",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: m,
                layoutId: "FYR59mggH",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 -3.8743e-07V16H-8.9407e-08" stroke="#CDFF52"/>
</svg>
`,
                variants: {
                  "aDvY4wLGi-hover": { opacity: 1 },
                  SxEUd1_97: { opacity: 1 },
                },
                withExternalLayout: !0,
              }),
              e(ve, {
                className: "framer-thknt5",
                "data-framer-name": "TL",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: m,
                layoutId: "ppf_uMGge",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16V0H16" stroke="#CDFF52"/>
</svg>
`,
                variants: {
                  "aDvY4wLGi-hover": { opacity: 1 },
                  SxEUd1_97: { opacity: 1 },
                },
                withExternalLayout: !0,
              }),
              e(ve, {
                className: "framer-1arnp74",
                "data-framer-name": "BL",
                fill: "rgb(205, 255, 82)",
                intrinsicHeight: 18,
                intrinsicWidth: 18,
                layoutDependency: m,
                layoutId: "mgHXiF639",
                style: { opacity: 0 },
                svg: `<svg width="18" height="18" viewBox="-1 -1 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 -3.8743e-07V16H16" stroke="#CDFF52"/>
</svg>
`,
                variants: {
                  "aDvY4wLGi-hover": { opacity: 1 },
                  SxEUd1_97: { opacity: 1 },
                },
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Fa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Iljqk.framer-1iyglwl, .framer-Iljqk .framer-1iyglwl { display: block; }",
    ".framer-Iljqk.framer-8ns3xm { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 24px 16px 24px; position: relative; width: min-content; }",
    ".framer-Iljqk .framer-1mlgdq5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }",
    ".framer-Iljqk .framer-qexovl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 232px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Iljqk .framer-euwsjt { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 110px; justify-content: center; left: -18px; padding: 0px; position: absolute; right: -19px; top: -22px; user-select: none; z-index: 1; }",
    ".framer-Iljqk .framer-cyzbhi { flex: none; height: 18px; position: absolute; right: -8px; top: -7px; width: 18px; z-index: 1; }",
    ".framer-Iljqk .framer-1ucht3l { bottom: -7px; flex: none; height: 18px; position: absolute; right: -8px; width: 18px; z-index: 1; }",
    ".framer-Iljqk .framer-thknt5 { flex: none; height: 18px; left: -8px; position: absolute; top: -7px; width: 18px; z-index: 1; }",
    ".framer-Iljqk .framer-1arnp74 { bottom: -7px; flex: none; height: 18px; left: -8px; position: absolute; width: 18px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Iljqk.framer-8ns3xm, .framer-Iljqk .framer-euwsjt { gap: 0px; } .framer-Iljqk.framer-8ns3xm > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Iljqk.framer-8ns3xm > :first-child { margin-top: 0px; } .framer-Iljqk.framer-8ns3xm > :last-child { margin-bottom: 0px; } .framer-Iljqk .framer-euwsjt > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Iljqk .framer-euwsjt > :first-child { margin-left: 0px; } .framer-Iljqk .framer-euwsjt > :last-child { margin-right: 0px; } }",
    ".framer-Iljqk.framer-v-1l28z92 .framer-euwsjt { top: -72px; }",
    ".framer-Iljqk.framer-v-1l28z92 .framer-cyzbhi { right: 0px; top: 1px; }",
    ".framer-Iljqk.framer-v-1l28z92 .framer-1ucht3l { bottom: 0px; right: 0px; }",
    ".framer-Iljqk.framer-v-1l28z92 .framer-thknt5 { left: 0px; top: 1px; }",
    ".framer-Iljqk.framer-v-1l28z92 .framer-1arnp74 { bottom: 0px; left: 0px; }",
    ".framer-Iljqk.framer-v-8ns3xm.hover.framer-8ns3xm { overflow: visible; }",
    '.framer-Iljqk[data-border="true"]::after, .framer-Iljqk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  qe = le(Ia, Fa, "framer-Iljqk"),
  Oe = qe;
qe.displayName = "Tab";
qe.defaultProps = { height: 102.5, width: 280 };
X(qe, {
  variant: {
    options: ["aDvY4wLGi", "SxEUd1_97"],
    optionTitles: ["Default", "Active"],
    title: "Variant",
    type: l.Enum,
  },
  pGOTRaaQt: { title: "Tap", type: l.EventHandler },
  fonL8k5c8: {
    defaultValue: "text",
    displayTextArea: !1,
    title: "feature-tab-title",
    type: l.String,
  },
  e7kyg_Geb: { title: "feature-card-icon", type: l.ResponsiveImage },
});
me(
  qe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Geist Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geistmono/v1/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeEPKJ5W7ihaO_CS.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ka = K($),
  Mt = Wt(at(c.div)),
  Ua = K(ke),
  Sa = K(Oe),
  Ma = ["XvPAhcLJk", "E5TbXiMML", "FnYnGcxdA", "FKc1NbhTT"],
  Ra = "framer-fGLof",
  Va = {
    E5TbXiMML: "framer-v-7h16pb",
    FKc1NbhTT: "framer-v-ap2k5x",
    FnYnGcxdA: "framer-v-1fcore5",
    XvPAhcLJk: "framer-v-x7idro",
  };
function Me(t, ...r) {
  let o = {};
  return r?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var _a = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Aa = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Rt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Aa,
    x: 0,
    y: 0,
  },
  Vt = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Et = {
    filter: "blur(10px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  Tt = { bounce: 0, delay: 0.05, duration: 0.4, type: "spring" },
  _t = {
    effect: Et,
    startDelay: 0,
    tokenization: "word",
    transition: Tt,
    trigger: "onMount",
    type: "appear",
  },
  La = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  Ea = { bounce: 0, delay: 0.075, duration: 0.4, type: "spring" },
  At = {
    effect: La,
    startDelay: 0.5,
    tokenization: "line",
    transition: Ea,
    trigger: "onInView",
    type: "appear",
  },
  Ta = {
    effect: Et,
    startDelay: 2,
    tokenization: "line",
    transition: Tt,
    trigger: "onInView",
    type: "appear",
  },
  Da = {
    effect: Et,
    startDelay: 0.5,
    tokenization: "line",
    transition: Tt,
    trigger: "onInView",
    type: "appear",
  },
  Lt = (t, r) => {
    if (!(!t || typeof t != "object")) return { ...t, alt: r };
  },
  Na = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  Pa = c.create(_),
  ja = {
    "Engineered for Scale": "FnYnGcxdA",
    "Instant setup": "FKc1NbhTT",
    Home: "XvPAhcLJk",
    Insights: "E5TbXiMML",
  },
  Ga = ({ height: t, id: r, width: o, ...a }) => ({
    ...a,
    variant: ja[a.variant] ?? a.variant ?? "XvPAhcLJk",
  }),
  za = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Ba = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      { style: h, className: g, layoutId: I, variant: L, ...C } = Ga(t),
      {
        baseVariant: x,
        classNames: p,
        clearLoadingGesture: J,
        gestureHandlers: S,
        gestureVariant: y,
        isLoading: N,
        setGestureState: M,
        setVariant: E,
        variants: R,
      } = ge({
        cycleOrder: Ma,
        defaultVariant: "XvPAhcLJk",
        ref: a,
        variant: L,
        variantClassNames: Va,
      }),
      s = za(t, R),
      { activeVariantCallback: b, delay: u } = he(x),
      m = b(async (...xe) => {
        E("XvPAhcLJk");
      }),
      k = b(async (...xe) => {
        E("E5TbXiMML");
      }),
      W = b(async (...xe) => {
        E("XvPAhcLJk");
      }),
      T = b(async (...xe) => {
        E("FnYnGcxdA");
      }),
      U = b(async (...xe) => {
        E("FKc1NbhTT");
      }),
      G = j(Ra, ...[ur, it, yr]),
      B = () => !["E5TbXiMML", "FnYnGcxdA", "FKc1NbhTT"].includes(x),
      V = () => x === "E5TbXiMML",
      ee = () => x === "FnYnGcxdA",
      Q = () => x === "FKc1NbhTT";
    return e(ae, {
      id: I ?? n,
      children: e(Pa, {
        animate: R,
        initial: !1,
        children: e(Na, {
          value: _a,
          children: F(c.div, {
            ...C,
            ...S,
            className: j(G, "framer-x7idro", g, p),
            "data-framer-name": "Home",
            layoutDependency: s,
            layoutId: "XvPAhcLJk",
            ref: a,
            style: { ...h },
            ...Me(
              {
                E5TbXiMML: { "data-framer-name": "Insights" },
                FKc1NbhTT: { "data-framer-name": "Instant setup" },
                FnYnGcxdA: { "data-framer-name": "Engineered for Scale" },
              },
              x,
              y
            ),
            children: [
              e(c.div, {
                className: "framer-cpga1z",
                "data-framer-name": "Logo",
                layoutDependency: s,
                layoutId: "SER7FUSV1",
                children: e(pe, {
                  background: {
                    alt: "",
                    fit: "fit",
                    loading: fe((i?.y || 0) + 0 + 0 + 0 + 0),
                    pixelHeight: 256,
                    pixelWidth: 951,
                    positionX: "center",
                    positionY: "center",
                    sizes: "172px",
                    src: "./images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg",
                    srcSet:
                      "./images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg?scale-down-to=512 512w,./images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg 951w",
                  },
                  className: "framer-1lumduy",
                  "data-framer-name": "Logo",
                  "data-highlight": !0,
                  layoutDependency: s,
                  layoutId: "PM89F8tWr",
                  onTap: m,
                }),
              }),
              F(c.div, {
                className: "framer-n2rvus",
                "data-framer-name": "Image Container",
                "data-highlight": !0,
                layoutDependency: s,
                layoutId: "naOU1rq4X",
                onTap: m,
                children: [
                  B() &&
                    e(c.div, {
                      className: "framer-1n4jr3g",
                      layoutDependency: s,
                      layoutId: "FdJctJbA0",
                    }),
                  V() &&
                    F(Mt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Rt,
                      className: "framer-1i98e3m",
                      "data-framer-appear-id": "1i98e3m",
                      "data-framer-name": "Intuitive Insights",
                      initial: Vt,
                      layoutDependency: s,
                      layoutId: "d1I9NZJZ3",
                      optimized: !0,
                      children: [
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.h1, {
                              className: "framer-styles-preset-9vrj1b",
                              "data-styles-preset": "mj2idnG7U",
                              children:
                                "Insights that matter without overwhelming you. ",
                            }),
                          }),
                          className: "framer-w2fxp3",
                          effect: _t,
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "Nw0oIIM_b",
                          style: { "--framer-paragraph-spacing": "0px" },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.p, {
                              className: "framer-styles-preset-1wjjzog",
                              "data-styles-preset": "HgKWRU5cM",
                              children:
                                "> From smallest method to entire ecosystem of services",
                            }),
                          }),
                          className: "framer-sdfe65",
                          effect: At,
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "abz1Pailb",
                          style: { "--framer-paragraph-spacing": "0px" },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(c.div, {
                          className: "framer-6s2zje",
                          layoutDependency: s,
                          layoutId: "SHlkvywwZ",
                          children: e(P, {
                            children: e(Z, {
                              className: "framer-1ayjonm-container",
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: s,
                              layoutId: "ohoLhKwma-container",
                              nodeId: "ohoLhKwma",
                              rendersWithMotion: !0,
                              scopeId: "JP0Tx07bc",
                              children: e($, {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 8,
                                bottomLeftRadius: 8,
                                bottomRightRadius: 8,
                                controls: !1,
                                height: "100%",
                                id: "ohoLhKwma",
                                isMixedBorderRadius: !1,
                                layoutId: "ohoLhKwma",
                                loop: !0,
                                muted: !0,
                                objectFit: "cover",
                                playing: !0,
                                posterEnabled: !1,
                                srcFile:
                                  "./assets/videos/UnawoFfqpLqUuViyR8AZKXzgQ7I.webm",
                                srcType: "Upload",
                                srcUrl:
                                  "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                                startTime: 0,
                                style: { height: "100%", width: "100%" },
                                topLeftRadius: 8,
                                topRightRadius: 8,
                                volume: 25,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ee() &&
                    F(Mt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Rt,
                      className: "framer-1xjfedw",
                      "data-framer-appear-id": "1xjfedw",
                      "data-framer-name": "Engineered For Scale",
                      initial: Vt,
                      layoutDependency: s,
                      layoutId: "pae2Syve5",
                      optimized: !0,
                      children: [
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.h1, {
                              className: "framer-styles-preset-9vrj1b",
                              "data-styles-preset": "mj2idnG7U",
                              children: "eBPF-based instrumentation.",
                            }),
                          }),
                          className: "framer-zd90lh",
                          effect: _t,
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "AJ76cDbVN",
                          style: { "--framer-paragraph-spacing": "0px" },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.p, {
                              className: "framer-styles-preset-1wjjzog",
                              "data-styles-preset": "HgKWRU5cM",
                              children:
                                "> less than 1% performance impact, 20x faster than manual instrumentation.",
                            }),
                          }),
                          className: "framer-fg6z1c",
                          effect: At,
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "hZJ1zPBrk",
                          style: { "--framer-paragraph-spacing": "0px" },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(c.div, {
                          className: "framer-1qffkip",
                          layoutDependency: s,
                          layoutId: "GXfI1YAHn",
                          children: e(P, {
                            children: e(Z, {
                              className: "framer-1wkiibw-container",
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: s,
                              layoutId: "jolSGrxQq-container",
                              nodeId: "jolSGrxQq",
                              rendersWithMotion: !0,
                              scopeId: "JP0Tx07bc",
                              children: e($, {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 8,
                                bottomLeftRadius: 8,
                                bottomRightRadius: 8,
                                controls: !1,
                                height: "100%",
                                id: "jolSGrxQq",
                                isMixedBorderRadius: !1,
                                layoutId: "jolSGrxQq",
                                loop: !0,
                                muted: !0,
                                objectFit: "cover",
                                playing: !0,
                                posterEnabled: !0,
                                srcFile:
                                  "./assets/videos/pi5MbdglEgXsYO9g81Vn0wE.webm",
                                srcType: "Upload",
                                srcUrl:
                                  "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                                startTime: 0,
                                style: { height: "100%", width: "100%" },
                                topLeftRadius: 8,
                                topRightRadius: 8,
                                volume: 25,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  Q() &&
                    F(Mt, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Rt,
                      className: "framer-1jb1pvl",
                      "data-framer-appear-id": "1jb1pvl",
                      "data-framer-name": "Instant Setup",
                      initial: Vt,
                      layoutDependency: s,
                      layoutId: "P8uf4wsmO",
                      optimized: !0,
                      children: [
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.h1, {
                              className: "framer-styles-preset-9vrj1b",
                              "data-styles-preset": "mj2idnG7U",
                              children: "No code change, no config change.",
                            }),
                          }),
                          className: "framer-wv7pvl",
                          effect: _t,
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "klSFhg2hj",
                          style: { "--framer-paragraph-spacing": "0px" },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.p, {
                              className: "framer-styles-preset-1wjjzog",
                              "data-styles-preset": "HgKWRU5cM",
                              children: "> Configure on K8S directly.",
                            }),
                          }),
                          className: "framer-1xxc9ik",
                          effect: At,
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "wy31O8yqC",
                          style: { "--framer-paragraph-spacing": "0px" },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(c.div, {
                          className: "framer-y4xi41",
                          layoutDependency: s,
                          layoutId: "zBZxEW9PM",
                          children: e(P, {
                            children: e(Z, {
                              className: "framer-189kzd9-container",
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: s,
                              layoutId: "F2Whty6i0-container",
                              nodeId: "F2Whty6i0",
                              rendersWithMotion: !0,
                              scopeId: "JP0Tx07bc",
                              children: e($, {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 8,
                                bottomLeftRadius: 8,
                                bottomRightRadius: 8,
                                controls: !1,
                                height: "100%",
                                id: "F2Whty6i0",
                                isMixedBorderRadius: !1,
                                layoutId: "F2Whty6i0",
                                loop: !0,
                                muted: !0,
                                objectFit: "cover",
                                playing: !0,
                                posterEnabled: !1,
                                srcFile:
                                  "./assets/videos/dNtXJ9CFlTyt3ygEbbMqdkM4fQ.webm",
                                srcType: "Upload",
                                srcUrl:
                                  "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                                startTime: 0,
                                style: { height: "100%", width: "100%" },
                                topLeftRadius: 8,
                                topRightRadius: 8,
                                volume: 25,
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  F(c.div, {
                    className: "framer-1ylrifp",
                    "data-framer-name": "Main",
                    layoutDependency: s,
                    layoutId: "D8TEFPRSt",
                    style: { opacity: 1 },
                    variants: {
                      E5TbXiMML: { opacity: 0 },
                      FKc1NbhTT: { opacity: 0 },
                      FnYnGcxdA: { opacity: 0 },
                    },
                    children: [
                      F(c.div, {
                        className: "framer-526rdn",
                        layoutDependency: s,
                        layoutId: "MIbFbfZx1",
                        children: [
                          e(O, {
                            __fromCanvasComponent: !0,
                            children: e(_, {
                              children: e(c.h1, {
                                className: "framer-styles-preset-3z8xb3",
                                "data-styles-preset": "WP6eAjcnm",
                                children: "We show how your code ",
                              }),
                            }),
                            className: "framer-1fr8r8h",
                            fonts: ["Inter"],
                            layoutDependency: s,
                            layoutId: "CVOqJUuJg",
                            style: { "--framer-paragraph-spacing": "0px" },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(P, {
                            children: e(Z, {
                              className: "framer-1ulkr29-container",
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: s,
                              layoutId: "L45xlBbyt-container",
                              nodeId: "L45xlBbyt",
                              rendersWithMotion: !0,
                              scopeId: "JP0Tx07bc",
                              children: e(ke, {
                                animation: {
                                  delay: 0.2,
                                  replay: !1,
                                  trigger: "layerInView",
                                },
                                characters:
                                  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?~",
                                color: "rgb(255, 255, 255)",
                                font: {
                                  fontFamily:
                                    '"Mohave", "Mohave Placeholder", sans-serif',
                                  fontSize: "64px",
                                  fontStyle: "normal",
                                  fontWeight: 600,
                                  letterSpacing: "0em",
                                  lineHeight: "125%",
                                  textAlign: "left",
                                },
                                from: "left",
                                height: "100%",
                                id: "L45xlBbyt",
                                layoutId: "L45xlBbyt",
                                options: { keepSpaces: !0, matchCase: !0 },
                                scrambledColor:
                                  "var(--token-82b5832e-a0cf-4abf-84b4-daf77b132a71, rgb(81, 86, 90))",
                                scrambledLetters: 6,
                                speed: 80,
                                style: { width: "100%" },
                                tag: "p",
                                text: "actually works in production.",
                                userSelect: !0,
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(O, {
                        __fromCanvasComponent: !0,
                        children: e(_, {
                          children: e(c.p, {
                            className: "framer-styles-preset-1wjjzog",
                            "data-styles-preset": "HgKWRU5cM",
                            children: "> Less guessing. More building.",
                          }),
                        }),
                        className: "framer-12eshkf",
                        effect: Ta,
                        fonts: ["Inter"],
                        layoutDependency: s,
                        layoutId: "bhS3K3pMk",
                        style: { "--framer-paragraph-spacing": "0px" },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...Me({ FKc1NbhTT: { effect: Da } }, x, y),
                      }),
                    ],
                  }),
                ],
              }),
              F(c.div, {
                className: "framer-eiwmci",
                "data-framer-name": "Tabs",
                layoutDependency: s,
                layoutId: "yblTVB4ME",
                children: [
                  e(P, {
                    height: 102,
                    width: `max((${i?.width || "100vw"} - 48px) / 3, 1px)`,
                    y:
                      (i?.y || 0) +
                      0 +
                      (0 +
                        (48 +
                          Math.max(0, ((i?.height || 608) - 0 - 262) / 1) * 1) +
                        112) +
                      0,
                    ...Me(
                      {
                        E5TbXiMML: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                        FKc1NbhTT: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                        FnYnGcxdA: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                      },
                      x,
                      y
                    ),
                    children: e(Z, {
                      className: "framer-1kl6ihq-container",
                      layoutDependency: s,
                      layoutId: "S9JOaj42Y-container",
                      nodeId: "S9JOaj42Y",
                      rendersWithMotion: !0,
                      scopeId: "JP0Tx07bc",
                      children: e(Oe, {
                        e7kyg_Geb: Lt(
                          {
                            pixelHeight: 32,
                            pixelWidth: 32,
                            src: "./images/rCkyE8ZdhJADb245OOPixuhbRHA.svg",
                          },
                          ""
                        ),
                        fonL8k5c8: "Intuitive Insights",
                        height: "100%",
                        id: "S9JOaj42Y",
                        layoutId: "S9JOaj42Y",
                        pGOTRaaQt: k,
                        style: { width: "100%" },
                        variant: "aDvY4wLGi",
                        width: "100%",
                        ...Me(
                          { E5TbXiMML: { pGOTRaaQt: W, variant: "SxEUd1_97" } },
                          x,
                          y
                        ),
                      }),
                    }),
                  }),
                  e(P, {
                    height: 102,
                    width: `max((${i?.width || "100vw"} - 48px) / 3, 1px)`,
                    y:
                      (i?.y || 0) +
                      0 +
                      (0 +
                        (48 +
                          Math.max(0, ((i?.height || 608) - 0 - 262) / 1) * 1) +
                        112) +
                      0,
                    ...Me(
                      {
                        E5TbXiMML: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                        FKc1NbhTT: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                        FnYnGcxdA: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                      },
                      x,
                      y
                    ),
                    children: e(Z, {
                      className: "framer-1sq0ykm-container",
                      layoutDependency: s,
                      layoutId: "yOm_tH8XY-container",
                      nodeId: "yOm_tH8XY",
                      rendersWithMotion: !0,
                      scopeId: "JP0Tx07bc",
                      children: e(Oe, {
                        e7kyg_Geb: Lt(
                          {
                            pixelHeight: 32,
                            pixelWidth: 32,
                            src: "./images/kcnF5QwiHxUqBokSO24MQFAGQY.svg",
                          },
                          ""
                        ),
                        fonL8k5c8: "Engineered for Scale",
                        height: "100%",
                        id: "yOm_tH8XY",
                        layoutId: "yOm_tH8XY",
                        pGOTRaaQt: T,
                        style: { width: "100%" },
                        variant: "aDvY4wLGi",
                        width: "100%",
                        ...Me(
                          { FnYnGcxdA: { pGOTRaaQt: W, variant: "SxEUd1_97" } },
                          x,
                          y
                        ),
                      }),
                    }),
                  }),
                  e(P, {
                    height: 102,
                    width: `max((${i?.width || "100vw"} - 48px) / 3, 1px)`,
                    y:
                      (i?.y || 0) +
                      0 +
                      (0 +
                        (48 +
                          Math.max(0, ((i?.height || 608) - 0 - 262) / 1) * 1) +
                        112) +
                      0,
                    ...Me(
                      {
                        E5TbXiMML: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                        FKc1NbhTT: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                        FnYnGcxdA: {
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 +
                              (48 +
                                Math.max(
                                  0,
                                  ((i?.height || 608) - 0 - 230) / 1
                                ) *
                                  1) +
                              80) +
                            0,
                        },
                      },
                      x,
                      y
                    ),
                    children: e(Z, {
                      className: "framer-oir3sy-container",
                      layoutDependency: s,
                      layoutId: "Un_r8RI5s-container",
                      nodeId: "Un_r8RI5s",
                      rendersWithMotion: !0,
                      scopeId: "JP0Tx07bc",
                      children: e(Oe, {
                        e7kyg_Geb: Lt(
                          {
                            pixelHeight: 32,
                            pixelWidth: 32,
                            src: "./images/j91s1EXpv5ZCwPhsBfWqeu4dxow.svg",
                          },
                          ""
                        ),
                        fonL8k5c8: "Instant Setup",
                        height: "100%",
                        id: "Un_r8RI5s",
                        layoutId: "Un_r8RI5s",
                        pGOTRaaQt: U,
                        style: { width: "100%" },
                        variant: "aDvY4wLGi",
                        width: "100%",
                        ...Me(
                          { FKc1NbhTT: { pGOTRaaQt: W, variant: "SxEUd1_97" } },
                          x,
                          y
                        ),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  qa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-fGLof.framer-zpbl72, .framer-fGLof .framer-zpbl72 { display: block; }",
    ".framer-fGLof.framer-x7idro { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: 608px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 888px; }",
    ".framer-fGLof .framer-cpga1z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1lumduy { cursor: pointer; flex: none; height: 48px; overflow: hidden; position: relative; width: 172px; }",
    ".framer-fGLof .framer-n2rvus { align-content: center; align-items: center; cursor: default; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1n4jr3g { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-end; overflow: visible; padding: 0px 100px 0px 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1i98e3m, .framer-fGLof .framer-1jb1pvl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-w2fxp3, .framer-fGLof .framer-sdfe65, .framer-fGLof .framer-zd90lh, .framer-fGLof .framer-fg6z1c, .framer-fGLof .framer-wv7pvl, .framer-fGLof .framer-1xxc9ik, .framer-fGLof .framer-1fr8r8h, .framer-fGLof .framer-12eshkf { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-fGLof .framer-6s2zje { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 20px 56px 0px 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1ayjonm-container { aspect-ratio: 1.78 / 1; flex: 1 0 0px; height: 1px; position: relative; width: var(--framer-aspect-ratio-supported, 356px); }",
    ".framer-fGLof .framer-1xjfedw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1qffkip { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-end; overflow: visible; padding: 20px 56px 0px 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1wkiibw-container { aspect-ratio: 1.784 / 1; flex: 1 0 0px; height: 1px; position: relative; width: var(--framer-aspect-ratio-supported, 357px); }",
    ".framer-fGLof .framer-y4xi41 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 10px; height: 1px; justify-content: flex-end; overflow: visible; padding: 20px 56px 0px 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-189kzd9-container { aspect-ratio: 1.78 / 1; flex: none; height: 100%; position: relative; width: var(--framer-aspect-ratio-supported, 356px); }",
    ".framer-fGLof .framer-1ylrifp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }",
    ".framer-fGLof .framer-526rdn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1ulkr29-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-fGLof .framer-eiwmci { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-fGLof .framer-1kl6ihq-container, .framer-fGLof .framer-1sq0ykm-container, .framer-fGLof .framer-oir3sy-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-fGLof.framer-v-7h16pb.framer-x7idro, .framer-fGLof.framer-v-1fcore5.framer-x7idro, .framer-fGLof.framer-v-ap2k5x.framer-x7idro { gap: 40px; }",
    ".framer-fGLof.framer-v-7h16pb .framer-1i98e3m, .framer-fGLof.framer-v-7h16pb .framer-sdfe65 { order: 1; }",
    ".framer-fGLof.framer-v-7h16pb .framer-w2fxp3 { order: 0; }",
    ".framer-fGLof.framer-v-7h16pb .framer-6s2zje, .framer-fGLof.framer-v-ap2k5x .framer-1jb1pvl { order: 2; }",
    ".framer-fGLof.framer-v-7h16pb .framer-1ayjonm-container, .framer-fGLof.framer-v-ap2k5x .framer-189kzd9-container { order: 0; width: var(--framer-aspect-ratio-supported, 468px); }",
    ".framer-fGLof.framer-v-7h16pb .framer-1ylrifp, .framer-fGLof.framer-v-ap2k5x .framer-1ylrifp { order: 3; }",
    ".framer-fGLof.framer-v-1fcore5 .framer-1qffkip { flex-direction: row; }",
    ".framer-fGLof.framer-v-1fcore5 .framer-1wkiibw-container { flex: none; height: 100%; order: 0; width: var(--framer-aspect-ratio-supported, 469px); }",
    ".framer-fGLof.framer-v-ap2k5x .framer-n2rvus { image-rendering: auto; }",
    ...pr,
    ...ot,
    ...gr,
  ],
  We = le(Ba, qa, "framer-fGLof"),
  Dt = We;
We.displayName = "Nested Component";
We.defaultProps = { height: 608, width: 888 };
X(We, {
  variant: {
    options: ["XvPAhcLJk", "E5TbXiMML", "FnYnGcxdA", "FKc1NbhTT"],
    optionTitles: ["Home", "Insights", "Engineered for Scale", "Instant setup"],
    title: "Variant",
    type: l.Enum,
  },
});
me(
  We,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Mohave",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mohave/v12/7cH0v4ksjJunKqMVAOPIMOeSmiojdqf4HvWQopLSvBk.woff2",
          weight: "600",
        },
      ],
    },
    ...ka,
    ...Ua,
    ...Sa,
    ...Ee(dr),
    ...Ee(nt),
    ...Ee(hr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Oa = at(c.div),
  Wa = { qHauoI6M4: { hover: !0, pressed: !0 } },
  Ha = ["qHauoI6M4", "E4SXGy60Q", "C2uqGgvCz", "X20K5Wj7p", "Lfs9jQUAt"],
  Ya = "framer-gMsbS",
  Xa = {
    C2uqGgvCz: "framer-v-16fgc0e",
    E4SXGy60Q: "framer-v-1084mtu",
    Lfs9jQUAt: "framer-v-1miiial",
    qHauoI6M4: "framer-v-1v49svl",
    X20K5Wj7p: "framer-v-1iut76k",
  };
function xr(t, ...r) {
  let o = {};
  return r?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var Ja = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ka = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  Qa = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Za = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  $a = c.create(_),
  en = {
    Default: "qHauoI6M4",
    Disabled: "C2uqGgvCz",
    Error: "Lfs9jQUAt",
    Loading: "E4SXGy60Q",
    Success: "X20K5Wj7p",
  },
  tn = ({ click: t, height: r, id: o, width: a, ...n }) => ({
    ...n,
    gbc_yc02_: t ?? n.gbc_yc02_,
    variant: en[n.variant] ?? n.variant ?? "qHauoI6M4",
  }),
  rn = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  an = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      {
        style: h,
        className: g,
        layoutId: I,
        variant: L,
        gbc_yc02_: C,
        ...x
      } = tn(t),
      {
        baseVariant: p,
        classNames: J,
        clearLoadingGesture: S,
        gestureHandlers: y,
        gestureVariant: N,
        isLoading: M,
        setGestureState: E,
        setVariant: R,
        variants: s,
      } = ge({
        cycleOrder: Ha,
        defaultVariant: "qHauoI6M4",
        enabledGestures: Wa,
        ref: a,
        variant: L,
        variantClassNames: Xa,
      }),
      b = rn(t, s),
      { activeVariantCallback: u, delay: m } = he(p),
      k = u(async (...B) => {
        if ((E({ isPressed: !1 }), C && (await C(...B)) === !1)) return !1;
      }),
      T = j(Ya, ...[]),
      U = () => !["E4SXGy60Q", "X20K5Wj7p"].includes(p),
      H = () => p === "E4SXGy60Q",
      G = () => p === "X20K5Wj7p";
    return e(ae, {
      id: I ?? n,
      children: e($a, {
        animate: s,
        initial: !1,
        children: e(Za, {
          value: Ja,
          children: F(c.button, {
            ...x,
            ...y,
            className: j(T, "framer-1v49svl", g, J),
            "data-framer-name": "Default",
            "data-highlight": !0,
            "data-reset": "button",
            layoutDependency: b,
            layoutId: "qHauoI6M4",
            onTap: k,
            ref: a,
            style: { backgroundColor: "rgb(255, 255, 255)", opacity: 1, ...h },
            variants: {
              "qHauoI6M4-hover": {
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                opacity: 1,
              },
              "qHauoI6M4-pressed": { opacity: 1 },
              C2uqGgvCz: { opacity: 0.5 },
              Lfs9jQUAt: {
                backgroundColor: "rgba(255, 34, 68, 0.15)",
                opacity: 1,
              },
              X20K5Wj7p: { opacity: 1 },
            },
            ...xr(
              {
                "qHauoI6M4-hover": { "data-framer-name": void 0 },
                "qHauoI6M4-pressed": { "data-framer-name": void 0 },
                C2uqGgvCz: { "data-framer-name": "Disabled" },
                E4SXGy60Q: { "data-framer-name": "Loading" },
                Lfs9jQUAt: { "data-framer-name": "Error" },
                X20K5Wj7p: { "data-framer-name": "Success" },
              },
              p,
              N
            ),
            children: [
              U() &&
                e(pe, {
                  background: {
                    alt: "",
                    fit: "fill",
                    loading: fe(
                      (i?.y || 0) + (0 + ((i?.height || 56) - 0 - 32) / 2)
                    ),
                    pixelHeight: 32,
                    pixelWidth: 32,
                    src: "./images/bUbaJLw9V6yZ1zNojVUGzO83SCc.svg",
                  },
                  className: "framer-1osxdva",
                  layoutDependency: b,
                  layoutId: "NWw7XZm31",
                }),
              H() &&
                e(Oa, {
                  __framer__loop: Qa,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopPauseOffscreen: !0,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: Ka,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: "framer-x9n9zu",
                  "data-framer-name": "Spinner",
                  layoutDependency: b,
                  layoutId: "WZPiCBVfM",
                  style: {
                    background:
                      "conic-gradient(from 0deg at 50% 50%, rgba(227, 18, 18, 0) 7.208614864864882deg, rgb(0, 0, 0) 342deg)",
                    mask: "url('./images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                    WebkitMask:
                      "url('./images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add",
                  },
                }),
              G() &&
                e(pe, {
                  background: {
                    alt: "",
                    fit: "fill",
                    pixelHeight: 32,
                    pixelWidth: 32,
                    src: "./images/5Bgf3oAHQoVORJvfJSby5iETV48.svg",
                  },
                  className: "framer-1fabbdr",
                  "data-framer-name": "Check",
                  layoutDependency: b,
                  layoutId: "eMTRp2dy5",
                  ...xr(
                    {
                      X20K5Wj7p: {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: fe(
                            (i?.y || 0) + (0 + ((i?.height || 56) - 0 - 24) / 2)
                          ),
                          pixelHeight: 32,
                          pixelWidth: 32,
                          src: "./images/5Bgf3oAHQoVORJvfJSby5iETV48.svg",
                        },
                      },
                    },
                    p,
                    N
                  ),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  nn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gMsbS.framer-5j2sz7, .framer-gMsbS .framer-5j2sz7 { display: block; }",
    ".framer-gMsbS.framer-1v49svl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 56px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 56px; }",
    ".framer-gMsbS .framer-1osxdva { flex: none; height: 32px; position: relative; width: 32px; }",
    ".framer-gMsbS .framer-x9n9zu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 32px; }",
    ".framer-gMsbS .framer-1fabbdr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); mix-blend-mode: exclusion; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gMsbS.framer-1v49svl { gap: 0px; } .framer-gMsbS.framer-1v49svl > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-gMsbS.framer-1v49svl > :first-child { margin-left: 0px; } .framer-gMsbS.framer-1v49svl > :last-child { margin-right: 0px; } }",
    ".framer-gMsbS.framer-v-1084mtu .framer-x9n9zu { height: var(--framer-aspect-ratio-supported, 32px); order: 1; }",
    ".framer-gMsbS.framer-v-1iut76k.framer-1v49svl { gap: 6px; padding: 0px 20px 0px 20px; width: min-content; }",
    ".framer-gMsbS.framer-v-1iut76k .framer-1fabbdr { order: 3; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gMsbS.framer-v-1iut76k.framer-1v49svl { gap: 0px; } .framer-gMsbS.framer-v-1iut76k.framer-1v49svl > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-gMsbS.framer-v-1iut76k.framer-1v49svl > :first-child { margin-left: 0px; } .framer-gMsbS.framer-v-1iut76k.framer-1v49svl > :last-child { margin-right: 0px; } }",
  ],
  He = le(an, nn, "framer-gMsbS"),
  Ye = He;
He.displayName = "Button";
He.defaultProps = { height: 56, width: 56 };
X(He, {
  variant: {
    options: ["qHauoI6M4", "E4SXGy60Q", "C2uqGgvCz", "X20K5Wj7p", "Lfs9jQUAt"],
    optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"],
    title: "Variant",
    type: l.Enum,
  },
  gbc_yc02_: { title: "Click", type: l.EventHandler },
});
me(He, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var on = K(Ye),
  sn = { SUaYUMl3w: { hover: !0 } },
  ln = ["SUaYUMl3w", "ecPAtJaH4", "eS6pcqpBN"],
  cn = "framer-qvMjb",
  fn = {
    ecPAtJaH4: "framer-v-180zef6",
    eS6pcqpBN: "framer-v-1j1xm4v",
    SUaYUMl3w: "framer-v-1k8q0d0",
  };
function Pe(t, ...r) {
  let o = {};
  return r?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var mn = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: "tween" },
  dn = { duration: 0, type: "tween" },
  br = (t, r, o) => {
    switch (t.state) {
      case "success":
        return r.success ?? o;
      case "pending":
        return r.pending ?? o;
      case "error":
        return r.error ?? o;
      case "incomplete":
        return r.incomplete ?? o;
    }
  },
  pn = (t, r) => `translate(-50%, -50%) ${r}`,
  un = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  hn = c.create(_),
  gn = {
    "Variant 1": "SUaYUMl3w",
    "Variant 2": "ecPAtJaH4",
    "Variant 3": "eS6pcqpBN",
  },
  yn = ({ height: t, id: r, width: o, ...a }) => ({
    ...a,
    variant: gn[a.variant] ?? a.variant ?? "SUaYUMl3w",
  }),
  xn = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  bn = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      { style: h, className: g, layoutId: I, variant: L, ...C } = yn(t),
      {
        baseVariant: x,
        classNames: p,
        clearLoadingGesture: J,
        gestureHandlers: S,
        gestureVariant: y,
        isLoading: N,
        setGestureState: M,
        setVariant: E,
        variants: R,
      } = ge({
        cycleOrder: ln,
        defaultVariant: "SUaYUMl3w",
        enabledGestures: sn,
        ref: a,
        variant: L,
        variantClassNames: fn,
      }),
      s = xn(t, R),
      { activeVariantCallback: b, delay: u } = he(x),
      m = b(async (...B) => {
        M({ isPressed: !1 }), E("ecPAtJaH4");
      }),
      W = j(cn, ...[]),
      T = () => x !== "ecPAtJaH4",
      U = () => x === "eS6pcqpBN",
      H = () => x === "ecPAtJaH4",
      G = () => y === "SUaYUMl3w-hover";
    return e(ae, {
      id: I ?? n,
      children: e(hn, {
        animate: R,
        initial: !1,
        children: e(un, {
          value: mn,
          ...Pe({ eS6pcqpBN: { value: dn } }, x, y),
          children: F(c.div, {
            ...C,
            ...S,
            className: j(W, "framer-1k8q0d0", g, p),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: s,
            layoutId: "SUaYUMl3w",
            onTap: m,
            ref: a,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgb(205, 255, 82)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgb(0, 0, 0)",
              ...h,
            },
            variants: {
              "SUaYUMl3w-hover": { backgroundColor: "rgb(31, 31, 31)" },
            },
            ...Pe(
              {
                "SUaYUMl3w-hover": { "data-framer-name": void 0 },
                ecPAtJaH4: { "data-framer-name": "Variant 2" },
                eS6pcqpBN: {
                  "data-framer-name": "Variant 3",
                  "data-highlight": void 0,
                  onTap: void 0,
                },
              },
              x,
              y
            ),
            children: [
              T() &&
                e(ht, {
                  className: "framer-q3tpkq",
                  layoutDependency: s,
                  layoutId: "qfWbwsrgk",
                  nodeId: "qfWbwsrgk",
                  children: (B) =>
                    F(Se, {
                      children: [
                        e(c.label, {
                          className: "framer-1lduq26",
                          layoutDependency: s,
                          layoutId: "JjQ4B45Pz",
                          children: e(gt, {
                            className: "framer-if0lps",
                            inputName: "Email",
                            layoutDependency: s,
                            layoutId: "fK0bRmIid",
                            placeholder: "Enter your work email",
                            style: {
                              "--framer-input-background":
                                "rgba(187, 187, 187, 0.15)",
                              "--framer-input-border-bottom-width": "1px",
                              "--framer-input-border-color":
                                "rgba(136, 136, 136, 0.1)",
                              "--framer-input-border-left-width": "1px",
                              "--framer-input-border-right-width": "1px",
                              "--framer-input-border-style": "solid",
                              "--framer-input-border-top-width": "1px",
                              "--framer-input-font-color": "rgb(153, 153, 153)",
                              "--framer-input-icon-color": "rgb(153, 153, 153)",
                              "--framer-input-placeholder-color":
                                "rgb(153, 153, 153)",
                            },
                            type: "email",
                          }),
                        }),
                        e(P, {
                          height: 80,
                          width: "80px",
                          y:
                            (i?.y || 0) +
                            0 +
                            (0 + ((i?.height || 56) - 0 - 0 - 80) / 2),
                          children: e(Z, {
                            className: "framer-1ys9yxn-container",
                            layoutDependency: s,
                            layoutId: "kOkcRH_XA-container",
                            nodeId: "kOkcRH_XA",
                            rendersWithMotion: !0,
                            scopeId: "tqcWNEDHh",
                            children: e(Ye, {
                              height: "100%",
                              id: "kOkcRH_XA",
                              layoutId: "kOkcRH_XA",
                              style: { height: "100%", width: "100%" },
                              type: "submit",
                              variant: br(
                                B,
                                { pending: "E4SXGy60Q", success: "X20K5Wj7p" },
                                "qHauoI6M4"
                              ),
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                }),
              T() &&
                e(c.div, {
                  className: "framer-8jmdaz",
                  "data-framer-name": "Barrier",
                  "data-highlight": !0,
                  layoutDependency: s,
                  layoutId: "ATKqjZxQ6",
                  style: { backgroundColor: "rgb(0, 0, 0)" },
                  variants: {
                    "SUaYUMl3w-hover": { backgroundColor: "rgb(28, 28, 28)" },
                  },
                }),
              F(c.div, {
                className: "framer-1o3jdtt",
                "data-framer-name": "Confirm",
                layoutDependency: s,
                layoutId: "FsI7kgkPU",
                transformTemplate: pn,
                children: [
                  T() &&
                    e(O, {
                      __fromCanvasComponent: !0,
                      children: e(_, {
                        children: e(c.p, {
                          style: {
                            "--font-selector": "R0Y7R2Vpc3QtNjAw",
                            "--framer-font-family":
                              '"Geist", "Geist Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "0.01em",
                            "--framer-line-height": "125%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "Join the Waitlist",
                        }),
                      }),
                      className: "framer-v0csgc",
                      "data-framer-name": "Join the waitlist",
                      fonts: ["GF;Geist-600"],
                      layoutDependency: s,
                      layoutId: "e7aeEaGl_",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      variants: {
                        "SUaYUMl3w-hover": {
                          "--extracted-r6o4lv": "rgb(205, 255, 82)",
                        },
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...Pe(
                        {
                          "SUaYUMl3w-hover": {
                            children: e(_, {
                              children: e(c.p, {
                                style: {
                                  "--font-selector": "R0Y7R2Vpc3QtNjAw",
                                  "--framer-font-family":
                                    '"Geist", "Geist Placeholder", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "0.01em",
                                  "--framer-line-height": "125%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(205, 255, 82))",
                                },
                                children: "Join the Waitlist",
                              }),
                            }),
                          },
                          eS6pcqpBN: {
                            children: e(_, {
                              children: e(c.p, {
                                style: {
                                  "--font-selector": "R0Y7R2Vpc3QtNjAw",
                                  "--framer-font-family":
                                    '"Geist", "Geist Placeholder", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "0.01em",
                                  "--framer-line-height": "125%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "You've joined the waitlist",
                              }),
                            }),
                          },
                        },
                        x,
                        y
                      ),
                    }),
                  U() &&
                    e(pe, {
                      background: {
                        alt: "",
                        fit: "fill",
                        pixelHeight: 32,
                        pixelWidth: 32,
                        src: "./images/5Bgf3oAHQoVORJvfJSby5iETV48.svg",
                      },
                      className: "framer-4q5r21",
                      layoutDependency: s,
                      layoutId: "nSx78k4AJ",
                      ...Pe(
                        {
                          eS6pcqpBN: {
                            background: {
                              alt: "",
                              fit: "fill",
                              loading: fe(
                                (i?.y || 0) +
                                  ((i?.height || 56) * 0.5000000000000002 -
                                    56.25) +
                                  44.25
                              ),
                              pixelHeight: 32,
                              pixelWidth: 32,
                              src: "./images/5Bgf3oAHQoVORJvfJSby5iETV48.svg",
                            },
                          },
                        },
                        x,
                        y
                      ),
                    }),
                ],
              }),
              H() &&
                e(ht, {
                  action: "/api/subscribe",
                  className: "framer-b1yxje",
                  layoutDependency: s,
                  layoutId: "yq5uTRYwX",
                  nodeId: "yq5uTRYwX",
                  children: (B) =>
                    e(Se, {
                      children: F(c.label, {
                        className: "framer-1yl6w4w",
                        layoutDependency: s,
                        layoutId: "gYPzT6C0U",
                        children: [
                          e(gt, {
                            className: "framer-16vdile",
                            inputName: "Email",
                            layoutDependency: s,
                            layoutId: "lH7EKsXHh",
                            placeholder: "Enter your work email",
                            required: !0,
                            style: {
                              "--framer-input-background": "rgb(0, 0, 0)",
                              "--framer-input-border-bottom-width": "1px",
                              "--framer-input-border-color":
                                "rgba(136, 136, 136, 0.1)",
                              "--framer-input-border-left-width": "1px",
                              "--framer-input-border-right-width": "1px",
                              "--framer-input-border-style": "solid",
                              "--framer-input-border-top-width": "1px",
                              "--framer-input-font-color": "rgb(153, 153, 153)",
                              "--framer-input-icon-color": "rgb(153, 153, 153)",
                              "--framer-input-placeholder-color":
                                "rgb(153, 153, 153)",
                            },
                            type: "email",
                          }),
                          e(P, {
                            height: 56,
                            ...Pe(
                              {
                                ecPAtJaH4: {
                                  y:
                                    (i?.y || 0) +
                                    0 +
                                    (0 +
                                      ((i?.height || 56) -
                                        0 -
                                        0 -
                                        ((i?.height || 56) - 0 - 0) * 1) /
                                        2) +
                                    0,
                                },
                              },
                              x,
                              y
                            ),
                            children: e(Z, {
                              className: "framer-k7v8he-container",
                              layoutDependency: s,
                              layoutId: "qrsywkbV1-container",
                              nodeId: "qrsywkbV1",
                              rendersWithMotion: !0,
                              scopeId: "tqcWNEDHh",
                              children: e(Ye, {
                                height: "100%",
                                id: "qrsywkbV1",
                                layoutId: "qrsywkbV1",
                                type: "submit",
                                variant: br(
                                  B,
                                  {
                                    pending: "E4SXGy60Q",
                                    success: "X20K5Wj7p",
                                  },
                                  "qHauoI6M4"
                                ),
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                }),
              G() &&
                e(P, {
                  ...Pe(
                    {
                      "SUaYUMl3w-hover": {
                        height: (i?.height || 56) - 0,
                        width: "56px",
                        y: (i?.y || 0) + 0,
                      },
                    },
                    x,
                    y
                  ),
                  children: e(Z, {
                    className: "framer-m3l9f0-container",
                    layoutDependency: s,
                    layoutId: "a5KItCNK0-container",
                    nodeId: "a5KItCNK0",
                    rendersWithMotion: !0,
                    scopeId: "tqcWNEDHh",
                    children: e(Ye, {
                      height: "100%",
                      id: "a5KItCNK0",
                      layoutId: "a5KItCNK0",
                      style: { height: "100%", width: "100%" },
                      variant: "qHauoI6M4",
                      width: "100%",
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  wn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-qvMjb.framer-1b4wr4k, .framer-qvMjb .framer-1b4wr4k { display: block; }",
    ".framer-qvMjb.framer-1k8q0d0 { cursor: pointer; gap: 0px; height: 56px; overflow: hidden; position: relative; width: 480px; }",
    ".framer-qvMjb .framer-q3tpkq, .framer-qvMjb .framer-b1yxje { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-qvMjb .framer-1lduq26 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }",
    '.framer-qvMjb .framer-if0lps { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 24px; --framer-input-font-weight: 400; --framer-input-padding: 24px; flex: 1 0 0px; height: 1px; position: relative; width: 100%; }',
    ".framer-qvMjb .framer-1ys9yxn-container { flex: none; height: 80px; position: relative; width: 80px; }",
    ".framer-qvMjb .framer-8jmdaz { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-qvMjb .framer-1o3jdtt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: 100%; }",
    ".framer-qvMjb .framer-v0csgc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 324px; word-break: break-word; word-wrap: break-word; }",
    ".framer-qvMjb .framer-4q5r21 { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-qvMjb .framer-1yl6w4w { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }",
    '.framer-qvMjb .framer-16vdile { --framer-input-focused-background: #000000; --framer-input-focused-border-color: #cdff53; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 18px; --framer-input-font-weight: 400; --framer-input-padding: 24px; flex: 1 0 0px; height: 100%; position: relative; width: 1px; }',
    ".framer-qvMjb .framer-k7v8he-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-qvMjb .framer-m3l9f0-container { bottom: 0px; flex: none; position: absolute; right: -60px; top: 0px; width: 56px; }",
    ".framer-qvMjb.framer-v-180zef6 .framer-1o3jdtt { min-height: 23px; }",
    ".framer-qvMjb.framer-v-180zef6 .framer-1yl6w4w { order: 0; }",
    ".framer-qvMjb.framer-v-1j1xm4v.framer-1k8q0d0 { cursor: unset; }",
    ".framer-qvMjb.framer-v-1j1xm4v .framer-1o3jdtt { width: 53%; }",
    ".framer-qvMjb.framer-v-1j1xm4v .framer-v0csgc { order: 0; width: 220px; }",
    ".framer-qvMjb.framer-v-1j1xm4v .framer-4q5r21 { order: 1; }",
    '.framer-qvMjb[data-border="true"]::after, .framer-qvMjb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Xe = le(bn, wn, "framer-qvMjb"),
  st = Xe;
Xe.displayName = "Join the waitlist";
Xe.defaultProps = { height: 56, width: 480 };
X(Xe, {
  variant: {
    options: ["SUaYUMl3w", "ecPAtJaH4", "eS6pcqpBN"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: l.Enum,
  },
});
me(
  Xe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Geist",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2",
          weight: "600",
        },
      ],
    },
    ...on,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var vn = K($),
  Cn = ["L00xX31_9", "qJ1_alDRa", "SLPd0gz6o"],
  In = "framer-zrGDD",
  Fn = {
    L00xX31_9: "framer-v-i82x2w",
    qJ1_alDRa: "framer-v-1tukcq2",
    SLPd0gz6o: "framer-v-17mxygf",
  };
function wr(t, ...r) {
  let o = {};
  return r?.forEach((a) => a && Object.assign(o, t[a])), o;
}
var kn = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Un = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  Sn = c.create(_),
  Mn = {
    "Variant 2": "qJ1_alDRa",
    "Variant 3": "SLPd0gz6o",
    Default: "L00xX31_9",
  },
  Rn = ({ click: t, height: r, id: o, link: a, title: n, width: d, ...f }) => ({
    ...f,
    lIFY_wbXS: n ?? f.lIFY_wbXS ?? "Watch Video",
    OCh1HwCJI: t ?? f.OCh1HwCJI,
    variant: Mn[f.variant] ?? f.variant ?? "L00xX31_9",
    xhHEvNf62: a ?? f.xhHEvNf62,
  }),
  Vn = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  _n = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      {
        style: h,
        className: g,
        layoutId: I,
        variant: L,
        lIFY_wbXS: C,
        xhHEvNf62: x,
        OCh1HwCJI: p,
        ...J
      } = Rn(t),
      {
        baseVariant: S,
        classNames: y,
        clearLoadingGesture: N,
        gestureHandlers: M,
        gestureVariant: E,
        isLoading: R,
        setGestureState: s,
        setVariant: b,
        variants: u,
      } = ge({
        cycleOrder: Cn,
        defaultVariant: "L00xX31_9",
        ref: a,
        variant: L,
        variantClassNames: Fn,
      }),
      m = Vn(t, u),
      { activeVariantCallback: k, delay: W } = he(S),
      T = k(async (...we) => {
        if ((s({ isPressed: !1 }), p && (await p(...we)) === !1)) return !1;
      }),
      U = k(async (...we) => {
        s({ isHovered: !0 }), b("SLPd0gz6o");
      }),
      H = k(async (...we) => {
        if ((s({ isPressed: !1 }), p && (await p(...we)) === !1)) return !1;
        b("qJ1_alDRa");
      }),
      G = k(async (...we) => {
        s({ isHovered: !1 }), b("SLPd0gz6o");
      }),
      B = k(async (...we) => {
        s({ isHovered: !1 }), b("L00xX31_9");
      }),
      V = k(async (...we) => {
        b("L00xX31_9");
      }),
      Q = j(In, ...[]),
      xe = () => S === "qJ1_alDRa",
      te = () => S !== "qJ1_alDRa",
      Ce = () => !!["qJ1_alDRa", "SLPd0gz6o"].includes(S);
    return e(ae, {
      id: I ?? n,
      children: e(Sn, {
        animate: u,
        initial: !1,
        children: e(Un, {
          value: kn,
          children: e(Xt, {
            href: x,
            motionChild: !0,
            nodeId: "L00xX31_9",
            scopeId: "VmckxyI3K",
            smoothScroll: !0,
            children: F(c.a, {
              ...J,
              ...M,
              className: `${j(Q, "framer-i82x2w", g, y)} framer-1ylkexg`,
              "data-framer-name": "Default",
              "data-highlight": !0,
              layoutDependency: m,
              layoutId: "L00xX31_9",
              onMouseEnter: U,
              onTap: T,
              ref: a,
              style: {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                ...h,
              },
              ...wr(
                {
                  qJ1_alDRa: {
                    "data-framer-name": "Variant 2",
                    onMouseLeave: G,
                    onTap: H,
                  },
                  SLPd0gz6o: {
                    "data-framer-name": "Variant 3",
                    onMouseLeave: B,
                  },
                },
                S,
                E
              ),
              children: [
                xe() &&
                  e(c.div, {
                    className: "framer-em8q0u",
                    "data-framer-name": "Button",
                    layoutDependency: m,
                    layoutId: "UCAqynLZ_",
                    style: { backgroundColor: "rgb(205, 255, 82)" },
                    children: e(O, {
                      __fromCanvasComponent: !0,
                      children: e(_, {
                        children: e(c.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-88270a27-b998-4d64-94e7-850fa71e2842, rgb(39, 43, 45)))",
                          },
                          children: "Watch Video",
                        }),
                      }),
                      className: "framer-en7y7o",
                      fonts: ["Inter-SemiBold"],
                      layoutDependency: m,
                      layoutId: "tUDhE2GAm",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-88270a27-b998-4d64-94e7-850fa71e2842, rgb(39, 43, 45))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: C,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                te() &&
                  e(c.div, {
                    className: "framer-1vlp3ei",
                    "data-framer-name": "BG",
                    layoutDependency: m,
                    layoutId: "K5NFLwYSE",
                    style: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    ...wr(
                      { SLPd0gz6o: { "data-highlight": !0, onMouseLeave: V } },
                      S,
                      E
                    ),
                    children: e(P, {
                      children: e(Z, {
                        className: "framer-1jxsarl-container",
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: m,
                        layoutId: "kzgX2Mo1k-container",
                        nodeId: "kzgX2Mo1k",
                        rendersWithMotion: !0,
                        scopeId: "VmckxyI3K",
                        children: e($, {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: 14,
                          bottomLeftRadius: 14,
                          bottomRightRadius: 14,
                          controls: !1,
                          height: "100%",
                          id: "kzgX2Mo1k",
                          isMixedBorderRadius: !1,
                          layoutId: "kzgX2Mo1k",
                          loop: !0,
                          muted: !0,
                          objectFit: "cover",
                          playing: !0,
                          posterEnabled: !0,
                          srcFile:
                            "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                          srcType: "Upload",
                          srcUrl:
                            "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                          startTime: 0,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 14,
                          topRightRadius: 14,
                          volume: 50,
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                te() &&
                  e(c.div, {
                    className: "framer-s32pfk",
                    "data-framer-name": "Button",
                    layoutDependency: m,
                    layoutId: "XFzm1rSA2",
                    style: { backgroundColor: "rgb(205, 255, 82)" },
                    children: e(O, {
                      __fromCanvasComponent: !0,
                      children: e(_, {
                        children: e(c.p, {
                          style: {
                            "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                            "--framer-font-family":
                              '"Inter", "Inter Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "-0.01em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-88270a27-b998-4d64-94e7-850fa71e2842, rgb(39, 43, 45)))",
                          },
                          children: "Watch Video",
                        }),
                      }),
                      className: "framer-1nuh47v",
                      fonts: ["Inter-SemiBold"],
                      layoutDependency: m,
                      layoutId: "WUCqCJOvG",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-88270a27-b998-4d64-94e7-850fa71e2842, rgb(39, 43, 45))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: C,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                Ce() &&
                  e(c.div, {
                    className: "framer-13f5lj2",
                    "data-border": !0,
                    "data-framer-name": "BG",
                    layoutDependency: m,
                    layoutId: "suVQhr_Pl",
                    style: {
                      "--border-bottom-width": "1px",
                      "--border-color": "rgb(205, 255, 82)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      background:
                        "linear-gradient(180deg, rgb(0, 0, 0) -16%, rgb(205, 255, 82) 70.50373029279278%)",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    children: e(P, {
                      children: e(Z, {
                        className: "framer-1dsvt7t-container",
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: m,
                        layoutId: "kKt2pSxpv-container",
                        nodeId: "kKt2pSxpv",
                        rendersWithMotion: !0,
                        scopeId: "VmckxyI3K",
                        children: e($, {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: 14,
                          bottomLeftRadius: 14,
                          bottomRightRadius: 14,
                          controls: !1,
                          height: "100%",
                          id: "kKt2pSxpv",
                          isMixedBorderRadius: !1,
                          layoutId: "kKt2pSxpv",
                          loop: !0,
                          muted: !0,
                          objectFit: "cover",
                          playing: !0,
                          posterEnabled: !0,
                          srcFile:
                            "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                          srcType: "Upload",
                          srcUrl:
                            "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                          startTime: 0,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 14,
                          topRightRadius: 14,
                          volume: 50,
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  An = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-zrGDD.framer-1ylkexg, .framer-zrGDD .framer-1ylkexg { display: block; }",
    ".framer-zrGDD.framer-i82x2w { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 480px; }",
    ".framer-zrGDD .framer-em8q0u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; z-index: 3; }",
    ".framer-zrGDD .framer-en7y7o, .framer-zrGDD .framer-1nuh47v { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }",
    ".framer-zrGDD .framer-1vlp3ei { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; overflow: hidden; padding: 8px 8px 0px 8px; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-zrGDD .framer-1jxsarl-container { aspect-ratio: 1.7857142857142858 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 261px); position: relative; width: 100%; }",
    ".framer-zrGDD .framer-s32pfk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 56px; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; z-index: 3; }",
    ".framer-zrGDD .framer-13f5lj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 255px; justify-content: flex-start; left: 0px; overflow: hidden; padding: 8px 8px 0px 8px; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-zrGDD .framer-1dsvt7t-container { flex: none; height: 241px; position: relative; width: 100%; }",
    ".framer-zrGDD.framer-v-1tukcq2.framer-i82x2w, .framer-zrGDD.framer-v-17mxygf.framer-i82x2w { height: 311px; }",
    ".framer-zrGDD.framer-v-1tukcq2 .framer-em8q0u { order: 1; }",
    ".framer-zrGDD.framer-v-1tukcq2 .framer-13f5lj2 { order: 0; }",
    '.framer-zrGDD[data-border="true"]::after, .framer-zrGDD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Je = le(_n, An, "framer-zrGDD"),
  Nt = Je;
Je.displayName = "Primary Button";
Je.defaultProps = { height: 56, width: 480 };
X(Je, {
  variant: {
    options: ["L00xX31_9", "qJ1_alDRa", "SLPd0gz6o"],
    optionTitles: ["Default", "Variant 2", "Variant 3"],
    title: "Variant",
    type: l.Enum,
  },
  lIFY_wbXS: {
    defaultValue: "Watch Video",
    displayTextArea: !1,
    title: "Title",
    type: l.String,
  },
  xhHEvNf62: { title: "Link", type: l.Link },
  OCh1HwCJI: { title: "Click", type: l.EventHandler },
});
me(
  Je,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
      ],
    },
    ...vn,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ln = K(ke),
  En = "framer-Ad7z3",
  Tn = { jhcnSP5Vg: "framer-v-1a11qg9" };
var Dn = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Nn = {
    filter: "blur(10px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  Pn = { bounce: 0, delay: 0.05, duration: 0.4, type: "spring" },
  jn = {
    effect: Nn,
    startDelay: 2,
    tokenization: "line",
    transition: Pn,
    trigger: "onInView",
    type: "appear",
  },
  Gn = ({ value: t, children: r }) => {
    let o = ue(Y),
      a = t ?? o.transition,
      n = z(() => ({ ...o, transition: a }), [JSON.stringify(a)]);
    return e(Y.Provider, { value: n, children: r });
  },
  zn = c.create(_),
  Bn = ({ click2: t, click6: r, height: o, id: a, width: n, ...d }) => ({
    ...d,
    BVKHdB75v: t ?? d.BVKHdB75v,
    XL1bywPDe: r ?? d.XL1bywPDe,
  }),
  qn = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  On = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      {
        style: h,
        className: g,
        layoutId: I,
        variant: L,
        BVKHdB75v: C,
        XL1bywPDe: x,
        ...p
      } = Bn(t),
      {
        baseVariant: J,
        classNames: S,
        clearLoadingGesture: y,
        gestureHandlers: N,
        gestureVariant: M,
        isLoading: E,
        setGestureState: R,
        setVariant: s,
        variants: b,
      } = ge({
        defaultVariant: "jhcnSP5Vg",
        ref: a,
        variant: L,
        variantClassNames: Tn,
      }),
      u = qn(t, b),
      { activeVariantCallback: m, delay: k } = he(J),
      W = m(async (...G) => {
        if ((R({ isPressed: !1 }), x && (await x(...G)) === !1)) return !1;
      }),
      T = m(async (...G) => {
        if (C && (await C(...G)) === !1) return !1;
      }),
      H = j(En, ...[it]);
    return e(ae, {
      id: I ?? n,
      children: e(zn, {
        animate: b,
        initial: !1,
        children: e(Gn, {
          value: Dn,
          children: F(c.div, {
            ...p,
            ...N,
            className: j(H, "framer-1a11qg9", g, S),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: u,
            layoutId: "jhcnSP5Vg",
            onTap: W,
            ref: a,
            style: { ...h },
            children: [
              e(c.div, {
                className: "framer-1x2a14f",
                "data-framer-name": "Image Container",
                "data-highlight": !0,
                layoutDependency: u,
                layoutId: "bwXm7Bnmr",
                onTap: T,
                children: F(c.div, {
                  className: "framer-wx00ta",
                  "data-framer-name": "Main",
                  layoutDependency: u,
                  layoutId: "wS4g1puwx",
                  children: [
                    F(c.div, {
                      className: "framer-ipw8uw",
                      layoutDependency: u,
                      layoutId: "VguMq8Wne",
                      children: [
                        e(O, {
                          __fromCanvasComponent: !0,
                          children: e(_, {
                            children: e(c.h1, {
                              style: {
                                "--font-selector": "R0Y7TW9oYXZlLTYwMA==",
                                "--framer-font-family":
                                  '"Mohave", "Mohave Placeholder", sans-serif',
                                "--framer-font-size": "32px",
                                "--framer-font-weight": "600",
                                "--framer-letter-spacing": "-0.2px",
                                "--framer-line-height": "125%",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-gdpscs, rgb(255, 255, 255))",
                              },
                              children: "We show how your code ",
                            }),
                          }),
                          className: "framer-1gbvkei",
                          fonts: ["GF;Mohave-600"],
                          layoutDependency: u,
                          layoutId: "NmIe2kT_x",
                          style: {
                            "--extracted-gdpscs": "rgb(255, 255, 255)",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(P, {
                          children: e(Z, {
                            className: "framer-19pblxm-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: u,
                            layoutId: "Hh8mJhAZ3-container",
                            nodeId: "Hh8mJhAZ3",
                            rendersWithMotion: !0,
                            scopeId: "YyURdl1F2",
                            children: e(ke, {
                              animation: {
                                delay: 0.2,
                                replay: !1,
                                trigger: "layerInView",
                              },
                              characters: "#^*()_+[]{}|;:,.<>?",
                              color: "rgb(255, 255, 255)",
                              font: {
                                fontFamily:
                                  '"Mohave", "Mohave Placeholder", sans-serif',
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                letterSpacing: "-0.02em",
                                lineHeight: "125%",
                                textAlign: "left",
                              },
                              from: "left",
                              height: "100%",
                              id: "Hh8mJhAZ3",
                              layoutId: "Hh8mJhAZ3",
                              options: { keepSpaces: !0, matchCase: !0 },
                              scrambledColor:
                                "var(--token-82b5832e-a0cf-4abf-84b4-daf77b132a71, rgb(81, 86, 90))",
                              scrambledLetters: 3,
                              speed: 80,
                              style: { width: "100%" },
                              tag: "p",
                              text: "actually works in production.",
                              userSelect: !0,
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(O, {
                      __fromCanvasComponent: !0,
                      children: e(_, {
                        children: e(c.p, {
                          className: "framer-styles-preset-1wjjzog",
                          "data-styles-preset": "HgKWRU5cM",
                          children: "> Less guessing. More building.",
                        }),
                      }),
                      className: "framer-1ezefg1",
                      effect: jn,
                      fonts: ["Inter"],
                      layoutDependency: u,
                      layoutId: "y2ATlGMqH",
                      style: { "--framer-paragraph-spacing": "0px" },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
              e(pe, {
                background: {
                  alt: "",
                  fit: "fill",
                  loading: fe(
                    (i?.y || 0) +
                      0 +
                      (((i?.height || 387) - 0 - 662) / 2 + 396 + 56)
                  ),
                  pixelHeight: 3240,
                  pixelWidth: 5760,
                  sizes: i?.width || "100vw",
                  src: "./images/wT3vghWo7akgC3W9WZQBRq6nlkk.png",
                  srcSet:
                    "./images/wT3vghWo7akgC3W9WZQBRq6nlkk.png?scale-down-to=512 512w,./images/wT3vghWo7akgC3W9WZQBRq6nlkk.png?scale-down-to=1024 1024w,./images/wT3vghWo7akgC3W9WZQBRq6nlkk.png?scale-down-to=2048 2048w,./images/wT3vghWo7akgC3W9WZQBRq6nlkk.png?scale-down-to=4096 4096w,./images/wT3vghWo7akgC3W9WZQBRq6nlkk.png 5760w",
                },
                className: "framer-1er501h",
                layoutDependency: u,
                layoutId: "OHj69SAmX",
                style: {
                  boxShadow:
                    "0.24087492070975713px 0.48174984141951427px 2.6930634839094445px -1.25px rgba(187, 237, 71, 0.4), 0.9154133212973828px 1.8308266425947657px 10.23463206964902px -2.5px rgba(187, 237, 71, 0.35), 4px 8px 44.721359549995796px -3.75px rgba(187, 237, 71, 0.14)",
                },
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Wn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Ad7z3.framer-p9xpsx, .framer-Ad7z3 .framer-p9xpsx { display: block; }",
    ".framer-Ad7z3.framer-1a11qg9 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 390px; }",
    ".framer-Ad7z3 .framer-1x2a14f { align-content: center; align-items: center; cursor: default; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Ad7z3 .framer-wx00ta { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Ad7z3 .framer-ipw8uw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Ad7z3 .framer-1gbvkei, .framer-Ad7z3 .framer-1ezefg1 { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Ad7z3 .framer-19pblxm-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-Ad7z3 .framer-1er501h { align-content: center; align-items: center; aspect-ratio: 1.8571428571428572 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 210px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ...ot,
  ],
  Ke = le(On, Wn, "framer-Ad7z3"),
  Pt = Ke;
Ke.displayName = "Phone Hero";
Ke.defaultProps = { height: 387, width: 390 };
X(Ke, {
  BVKHdB75v: { title: "Click 2", type: l.EventHandler },
  XL1bywPDe: { title: "Click 6", type: l.EventHandler },
});
me(
  Ke,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mohave",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mohave/v12/7cH0v4ksjJunKqMVAOPIMOeSmiojdqf4HvWQopLSvBk.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "./assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "./assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "./assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "./assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "./assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "./assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "./assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Ln,
    ...Ee(nt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Hn = K(Te),
  Yn = K(Dt),
  Xn = K(Nt),
  Jn = K($),
  Kn = K(st),
  Qn = K(Pt),
  Zn = K(St),
  jt = Qt(St),
  $n = {
    BK5OaEWGo: "(min-width: 810px) and (max-width: 1279px)",
    DTAlLK16c: "(min-width: 1280px)",
    wrpxCIIuN: "(max-width: 809px)",
  },
  vr = () => typeof document < "u",
  eo = "framer-6oC15",
  to = {
    BK5OaEWGo: "framer-v-17vqnwa",
    DTAlLK16c: "framer-v-r2c1h1",
    wrpxCIIuN: "framer-v-1tlm28c",
  },
  Cr = () =>
    document.querySelector("#template-overlay") ??
    document.querySelector("#overlay") ??
    document.body,
  Ir = ({ children: t, blockDocumentScrolling: r, enabled: o = !0 }) => {
    let [a, n] = Kt({ blockDocumentScrolling: r });
    return t({
      hide: () => n(!1),
      show: () => n(!0),
      toggle: () => n(!a),
      visible: o && a,
    });
  },
  lt = (t, r) => {
    if (!(!t || typeof t != "object")) return { ...t, alt: r };
  },
  ro = ({ value: t }) =>
    Yt()
      ? null
      : e("style", {
          dangerouslySetInnerHTML: { __html: t },
          "data-framer-html-style": "",
        }),
  ao = { Desktop: "DTAlLK16c", Phone: "wrpxCIIuN", Tablet: "BK5OaEWGo" },
  no = ({ height: t, id: r, width: o, ...a }) => ({
    ...a,
    variant: ao[a.variant] ?? a.variant ?? "DTAlLK16c",
  }),
  oo = ne(function (t, r) {
    let o = w(null),
      a = r ?? o,
      n = oe(),
      { activeLocale: d, setLocale: f } = ie(),
      i = ce(),
      {
        style: h,
        className: g,
        layoutId: I,
        variant: L,
        Sf3LYC5x7: C,
        ...x
      } = no(t);
    q(() => {
      let V = yt(void 0, d);
      if (V.robots) {
        let ee = document.querySelector('meta[name="robots"]');
        ee
          ? ee.setAttribute("content", V.robots)
          : ((ee = document.createElement("meta")),
            ee.setAttribute("name", "robots"),
            ee.setAttribute("content", V.robots),
            document.head.appendChild(ee));
      }
    }, [void 0, d]),
      Bt(() => {
        let V = yt(void 0, d);
        (document.title = V.title || ""),
          V.viewport &&
            document
              .querySelector('meta[name="viewport"]')
              ?.setAttribute("content", V.viewport);
      }, [void 0, d]);
    let [p, J] = Jt(L, $n, !1),
      S = void 0,
      { activeVariantCallback: y, delay: N } = he(void 0),
      M = ({ overlay: V, loadMore: ee }) =>
        y(async (...Q) => {
          V.toggle();
        }),
      E = ({ overlay: V, loadMore: ee }) =>
        y(async (...Q) => {
          await N(() => V.hide(), 300);
        }),
      R = ({ overlay: V, loadMore: ee }) =>
        y(async (...Q) => {
          V.toggle();
        }),
      s = ({ overlay: V, loadMore: ee }) =>
        y(async (...Q) => {
          V.hide();
        }),
      u = j(eo, ...[]),
      m = () => !!(!vr() || ["BK5OaEWGo", "wrpxCIIuN"].includes(p)),
      k = () => (vr() ? !["BK5OaEWGo", "wrpxCIIuN"].includes(p) : !0),
      W = tt("ovvhHEfiI"),
      T = w(null),
      U = w(null),
      H = w(null),
      G = tt("G_FTxURqq"),
      B = tt("C3_iPWkpl");
    return (
      Ht({}),
      e(Ot.Provider, {
        value: { primaryVariantId: "DTAlLK16c", variantClassNames: to },
        children: F(ae, {
          id: I ?? n,
          children: [
            e(ro, { value: "html body { background: rgb(0, 0, 0); }" }),
            F(c.div, {
              ...x,
              className: j(u, "framer-r2c1h1", g),
              ref: a,
              style: { ...h },
              children: [
                e(P, {
                  children: e(be, {
                    className: "framer-8gejnz-container",
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    layoutScroll: !0,
                    nodeId: "v1xK4EF7q",
                    scopeId: "F9GduwabV",
                    children: e(Te, {
                      color: "rgb(0, 0, 0)",
                      customPatternMode: "alpha",
                      customPatternPosition: "center",
                      customPatternSizing: "tile",
                      dotSize: 1,
                      flip: !1,
                      height: "100%",
                      hoverColor: "rgb(205, 255, 82)",
                      hoverShape: "glow",
                      hoverSize: 400,
                      id: "v1xK4EF7q",
                      layoutId: "v1xK4EF7q",
                      lineWidth: 1,
                      patternPreset: "dots",
                      radius: "0px",
                      smoothing: 12,
                      style: { height: "100%", width: "100%" },
                      tileSize: 12,
                      width: "100%",
                    }),
                  }),
                }),
                m() &&
                  e("div", {
                    className: "framer-1xa82as hidden-r2c1h1",
                    "data-framer-name": "Logo",
                    children: e(ye, {
                      breakpoint: p,
                      overrides: {
                        BK5OaEWGo: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: fe(40),
                            pixelHeight: 256,
                            pixelWidth: 951,
                            positionX: "center",
                            positionY: "center",
                            sizes: "172px",
                            src: "../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg",
                            srcSet:
                              "../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg?scale-down-to=512 512w,../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg 951w",
                          },
                        },
                        wrpxCIIuN: {
                          background: {
                            alt: "",
                            fit: "fit",
                            loading: fe(40),
                            pixelHeight: 256,
                            pixelWidth: 951,
                            positionX: "center",
                            positionY: "center",
                            sizes: "172px",
                            src: "../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg",
                            srcSet:
                              "../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg?scale-down-to=512 512w,../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg 951w",
                          },
                        },
                      },
                      children: e(pe, {
                        background: {
                          alt: "",
                          fit: "fit",
                          pixelHeight: 256,
                          pixelWidth: 951,
                          positionX: "center",
                          positionY: "center",
                          sizes: "172px",
                          src: "../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg",
                          srcSet:
                            "../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg?scale-down-to=512 512w,../../images/G8ENqU6ejtiB0ySoUn8AfW4OU0.svg 951w",
                        },
                        className: "framer-l4jppn",
                        "data-framer-name": "Logo",
                      }),
                    }),
                  }),
                k() &&
                  e("header", {
                    className: "framer-af5o62 hidden-17vqnwa hidden-1tlm28c",
                    "data-framer-name": "Desktop",
                    children: F("div", {
                      className: "framer-1bd6ykm",
                      children: [
                        e(P, {
                          height: 920,
                          width: `max((${
                            i?.width || "100vw"
                          } - 104px) / 2, 1px)`,
                          y: (i?.y || 0) + 0 + 0 + 40 + 0 + 0,
                          children: e(be, {
                            className: "framer-1dnoicb-container",
                            nodeId: "PNalpuEVs",
                            scopeId: "F9GduwabV",
                            children: e(Dt, {
                              height: "100%",
                              id: "PNalpuEVs",
                              layoutId: "PNalpuEVs",
                              style: { height: "100%", width: "100%" },
                              variant: "XvPAhcLJk",
                              width: "100%",
                            }),
                          }),
                        }),
                        e("div", {
                          className: "framer-r277g0",
                          "data-framer-name": "Buttons",
                          children: F("div", {
                            className: "framer-tctsu6",
                            "data-framer-name": "Buttons",
                            children: [
                              e(Ir, {
                                children: (V) =>
                                  e(Se, {
                                    children: e(P, {
                                      height: 56,
                                      width: `max(min(max((${
                                        i?.width || "100vw"
                                      } - 104px) / 2, 1px), 320px), 1px)`,
                                      y:
                                        (i?.y || 0) +
                                        0 +
                                        0 +
                                        40 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        808,
                                      children: F(be, {
                                        className: "framer-1fzn3vq-container",
                                        "data-framer-name": "Button",
                                        id: "1fzn3vq",
                                        name: "Button",
                                        nodeId: "b4ddVREk_",
                                        scopeId: "F9GduwabV",
                                        children: [
                                          e(Nt, {
                                            height: "100%",
                                            id: "b4ddVREk_",
                                            layoutId: "b4ddVREk_",
                                            lIFY_wbXS: "Watch Video",
                                            name: "Button",
                                            OCh1HwCJI: M({ overlay: V }),
                                            style: { width: "100%" },
                                            variant: (V.visible, "L00xX31_9"),
                                            width: "100%",
                                          }),
                                          e(Ze, {
                                            children:
                                              V.visible &&
                                              e(Se, {
                                                children: ut(
                                                  F(_, {
                                                    children: [
                                                      e(
                                                        c.div,
                                                        {
                                                          animate: {
                                                            opacity: 1,
                                                            transition: {
                                                              delay: 0.4,
                                                              duration: 0.9,
                                                              ease: [
                                                                1, 0.01, 0.88,
                                                                0.77,
                                                              ],
                                                              type: "tween",
                                                            },
                                                          },
                                                          className: j(
                                                            u,
                                                            "framer-nuha8z"
                                                          ),
                                                          "data-framer-portal-id":
                                                            "1fzn3vq",
                                                          exit: {
                                                            opacity: 0,
                                                            transition: {
                                                              delay: 0,
                                                              duration: 0,
                                                              ease: [
                                                                0.08, 0.23,
                                                                0.03, 1,
                                                              ],
                                                              type: "tween",
                                                            },
                                                          },
                                                          initial: {
                                                            opacity: 0,
                                                          },
                                                          onTap: () => V.hide(),
                                                        },
                                                        "YWimJF1y1"
                                                      ),
                                                      F(c.div, {
                                                        className: j(
                                                          u,
                                                          "framer-zz4fmy"
                                                        ),
                                                        "data-framer-portal-id":
                                                          "1fzn3vq",
                                                        children: [
                                                          e(P, {
                                                            children: e(be, {
                                                              className:
                                                                "framer-163iq9h-container",
                                                              inComponentSlot:
                                                                !0,
                                                              isAuthoredByUser:
                                                                !0,
                                                              isModuleExternal:
                                                                !0,
                                                              nodeId:
                                                                "Tn_JhPIe3",
                                                              rendersWithMotion:
                                                                !0,
                                                              scopeId:
                                                                "F9GduwabV",
                                                              children: e($, {
                                                                backgroundColor:
                                                                  "rgba(0, 0, 0, 0)",
                                                                borderRadius: 8,
                                                                bottomLeftRadius: 8,
                                                                bottomRightRadius: 8,
                                                                controls: !0,
                                                                height: "100%",
                                                                id: "Tn_JhPIe3",
                                                                isMixedBorderRadius:
                                                                  !1,
                                                                layoutId:
                                                                  "Tn_JhPIe3",
                                                                loop: !0,
                                                                muted: !1,
                                                                objectFit:
                                                                  "cover",
                                                                playing: !0,
                                                                posterEnabled:
                                                                  !0,
                                                                srcFile:
                                                                  "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                                                                srcType:
                                                                  "Upload",
                                                                srcUrl:
                                                                  "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                                                                startTime: 0,
                                                                style: {
                                                                  width: "100%",
                                                                },
                                                                topLeftRadius: 8,
                                                                topRightRadius: 8,
                                                                volume: 50,
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                          e(c.div, {
                                                            className:
                                                              "framer-m3ujeq",
                                                            "data-framer-name":
                                                              "Outside Click",
                                                            onTap: E({
                                                              overlay: V,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  Cr()
                                                ),
                                              }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                              }),
                              e(P, {
                                height: 56,
                                width: `max(min(max((${
                                  i?.width || "100vw"
                                } - 104px) / 2, 1px), 320px), 1px)`,
                                y:
                                  (i?.y || 0) +
                                  0 +
                                  0 +
                                  40 +
                                  0 +
                                  0 +
                                  0 +
                                  0 +
                                  0 +
                                  864,
                                children: e(be, {
                                  className: "framer-xwzkfj-container",
                                  nodeId: "RWgZ2kniU",
                                  scopeId: "F9GduwabV",
                                  children: e(st, {
                                    height: "100%",
                                    id: "RWgZ2kniU",
                                    layoutId: "RWgZ2kniU",
                                    style: { width: "100%" },
                                    variant: "SUaYUMl3w",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                m() &&
                  e("div", {
                    className: "framer-1wr1qp7 hidden-r2c1h1",
                    children:
                      m() &&
                      e(ye, {
                        breakpoint: p,
                        overrides: {
                          BK5OaEWGo: {
                            height: 56,
                            width: "max(100vw - 80px, 1px)",
                            y: 924,
                          },
                          wrpxCIIuN: {
                            height: 56,
                            width: "max(100vw - 40px, 1px)",
                            y: 924,
                          },
                        },
                        children: e(P, {
                          children: e(be, {
                            className: "framer-7ny0y3-container hidden-r2c1h1",
                            nodeId: "m_LRcpXqb",
                            scopeId: "F9GduwabV",
                            children: e(st, {
                              height: "100%",
                              id: "m_LRcpXqb",
                              layoutId: "m_LRcpXqb",
                              style: { width: "100%" },
                              variant: "ecPAtJaH4",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                  }),
                m() &&
                  F("div", {
                    className: "framer-t58wkv hidden-r2c1h1",
                    "data-framer-name": "Phone",
                    children: [
                      e(Ir, {
                        children: (V) =>
                          e(Se, {
                            children: e(ye, {
                              breakpoint: p,
                              overrides: {
                                BK5OaEWGo: {
                                  width: `calc(${i?.width || "100vw"} - 80px)`,
                                  y: (i?.y || 0) + 0 + 0 + 120 + 0,
                                },
                                wrpxCIIuN: {
                                  width: `calc(${i?.width || "100vw"} - 40px)`,
                                  y: (i?.y || 0) + 0 + 0 + 120 + 0,
                                },
                              },
                              children: e(P, {
                                height: 387,
                                children: F(be, {
                                  className: "framer-aq0xkt-container",
                                  id: "aq0xkt",
                                  nodeId: "KbCz15pWp",
                                  scopeId: "F9GduwabV",
                                  children: [
                                    e(Pt, {
                                      height: "100%",
                                      id: "KbCz15pWp",
                                      layoutId: "KbCz15pWp",
                                      style: { width: "100%" },
                                      width: "100%",
                                      XL1bywPDe: R({ overlay: V }),
                                    }),
                                    e(Ze, {
                                      children:
                                        V.visible &&
                                        e(Se, {
                                          children: ut(
                                            F(_, {
                                              children: [
                                                e(
                                                  c.div,
                                                  {
                                                    animate: {
                                                      opacity: 1,
                                                      transition: {
                                                        delay: 0,
                                                        duration: 0,
                                                        ease: [
                                                          0.5, 0, 0.88, 0.77,
                                                        ],
                                                        type: "tween",
                                                      },
                                                    },
                                                    className: j(
                                                      u,
                                                      "framer-1dbefe9"
                                                    ),
                                                    "data-framer-portal-id":
                                                      "aq0xkt",
                                                    exit: {
                                                      opacity: 0,
                                                      transition: {
                                                        delay: 0,
                                                        duration: 0,
                                                        ease: [
                                                          0.12, 0.23, 0.5, 1,
                                                        ],
                                                        type: "tween",
                                                      },
                                                    },
                                                    initial: { opacity: 0 },
                                                    onTap: () => V.hide(),
                                                  },
                                                  "XnKwKe_SC"
                                                ),
                                                e(ye, {
                                                  breakpoint: p,
                                                  overrides: {
                                                    BK5OaEWGo: {
                                                      onTap: void 0,
                                                    },
                                                    wrpxCIIuN: {
                                                      onTap: void 0,
                                                    },
                                                  },
                                                  children: F(c.div, {
                                                    className: j(
                                                      u,
                                                      "framer-gnss09"
                                                    ),
                                                    "data-framer-portal-id":
                                                      "aq0xkt",
                                                    onTap: s({ overlay: V }),
                                                    children: [
                                                      m() &&
                                                        e(P, {
                                                          children: e(be, {
                                                            className:
                                                              "framer-yllg98-container hidden-r2c1h1",
                                                            inComponentSlot: !0,
                                                            isAuthoredByUser:
                                                              !0,
                                                            isModuleExternal:
                                                              !0,
                                                            nodeId: "eezaBMSfr",
                                                            rendersWithMotion:
                                                              !0,
                                                            scopeId:
                                                              "F9GduwabV",
                                                            children: e(ye, {
                                                              breakpoint: p,
                                                              overrides: {
                                                                BK5OaEWGo: {
                                                                  controls: !0,
                                                                  muted: !1,
                                                                  srcFile:
                                                                    "https://www.youtube.com/embed/WS2Q3cb6oJw?si=NhAJTpef2sPFFh2x",
                                                                  // "./assets/videos/XaRnztmHYWG9cfRMZMkkDSIhIDM.mp4",
                                                                  srcType:
                                                                    "Upload",
                                                                  volume: 75,
                                                                },
                                                                wrpxCIIuN: {
                                                                  controls: !0,
                                                                  muted: !1,
                                                                  poster:
                                                                    "https://www.youtube.com/embed/WS2Q3cb6oJw?si=NhAJTpef2sPFFh2x",
                                                                  // "https://framerusercontent.com/images/B4IrI1T50c9eGddWnJAOcMYSY.png",
                                                                  srcFile:
                                                                    "https://www.youtube.com/embed/WS2Q3cb6oJw?si=NhAJTpef2sPFFh2x",
                                                                  // "./assets/videos/XaRnztmHYWG9cfRMZMkkDSIhIDM.mp4",
                                                                  srcType:
                                                                    "Upload",
                                                                  volume: 75,
                                                                },
                                                              },
                                                              children: e($, {
                                                                backgroundColor:
                                                                  "rgba(0, 0, 0, 0)",
                                                                borderRadius: 0,
                                                                bottomLeftRadius: 0,
                                                                bottomRightRadius: 0,
                                                                controls: !1,
                                                                height: "100%",
                                                                id: "eezaBMSfr",
                                                                isMixedBorderRadius:
                                                                  !1,
                                                                layoutId:
                                                                  "eezaBMSfr",
                                                                loop: !0,
                                                                muted: !0,
                                                                objectFit:
                                                                  "cover",
                                                                playing: !0,
                                                                posterEnabled:
                                                                  !0,
                                                                srcType: "URL",
                                                                srcUrl:
                                                                  "./assets/videos/WcFn7G8rY1LiT8czdLIjnAjl1s.webm",
                                                                startTime: 0,
                                                                style: {
                                                                  height:
                                                                    "100%",
                                                                  width: "100%",
                                                                },
                                                                topLeftRadius: 0,
                                                                topRightRadius: 0,
                                                                volume: 25,
                                                                width: "100%",
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      e(ye, {
                                                        breakpoint: p,
                                                        overrides: {
                                                          BK5OaEWGo: {
                                                            onTap: s({
                                                              overlay: V,
                                                            }),
                                                          },
                                                          wrpxCIIuN: {
                                                            onTap: s({
                                                              overlay: V,
                                                            }),
                                                          },
                                                        },
                                                        children: e(c.div, {
                                                          className:
                                                            "framer-1d4959d",
                                                          "data-framer-name":
                                                            "Outside Overlay",
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                            Cr()
                                          ),
                                        }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                      }),
                      F("div", {
                        className: "framer-15lnj5g",
                        "data-framer-name": "Tabs",
                        children: [
                          e(ye, {
                            breakpoint: p,
                            overrides: {
                              BK5OaEWGo: {
                                width: `calc(${i?.width || "100vw"} - 80px)`,
                                y: (i?.y || 0) + 0 + 0 + 120 + 411 + 0 + 0,
                              },
                              wrpxCIIuN: {
                                width: `calc(${i?.width || "100vw"} - 40px)`,
                                y: (i?.y || 0) + 0 + 0 + 120 + 411 + 0 + 0,
                              },
                            },
                            children: e(P, {
                              height: 349,
                              children: e(be, {
                                className: "framer-1u7e3ju-container",
                                id: W,
                                nodeId: "ovvhHEfiI",
                                ref: T,
                                rendersWithMotion: !0,
                                scopeId: "F9GduwabV",
                                children: e(ye, {
                                  breakpoint: p,
                                  overrides: {
                                    BK5OaEWGo: {
                                      NM0wvYidN:
                                        "Insights that matter without overwhelming you",
                                      qZ5Zribb9:
                                        "./assets/videos/UnawoFfqpLqUuViyR8AZKXzgQ7I.webm",
                                    },
                                    wrpxCIIuN: {
                                      NM0wvYidN:
                                        "Insights that matter without overwhelming you",
                                    },
                                  },
                                  children: e(jt, {
                                    __framer__animateOnce: !1,
                                    __framer__targets: [
                                      { ref: T, target: "q62Az_SO5" },
                                      { ref: U, target: "bDpomOJGS" },
                                      { ref: H, target: "bDpomOJGS" },
                                    ],
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    height: "100%",
                                    id: "ovvhHEfiI",
                                    layoutId: "ovvhHEfiI",
                                    NM0wvYidN:
                                      "Lorem ipsum type text in this space ",
                                    qZ5Zribb9:
                                      "./assets/videos/6QGvtNArcCKxo8mvuAE1HNQhI.mp4",
                                    style: { width: "100%" },
                                    TM0lGsHsb: "Intuitive Insights",
                                    variant: "bDpomOJGS",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                          e(ye, {
                            breakpoint: p,
                            overrides: {
                              BK5OaEWGo: {
                                width: `calc(${i?.width || "100vw"} - 80px)`,
                                y: (i?.y || 0) + 0 + 0 + 120 + 411 + 0 + 373,
                              },
                              wrpxCIIuN: {
                                width: `calc(${i?.width || "100vw"} - 40px)`,
                                y: (i?.y || 0) + 0 + 0 + 120 + 411 + 0 + 373,
                              },
                            },
                            children: e(P, {
                              height: 349,
                              children: e(be, {
                                className: "framer-1iy7nx5-container",
                                id: G,
                                nodeId: "G_FTxURqq",
                                ref: U,
                                rendersWithMotion: !0,
                                scopeId: "F9GduwabV",
                                children: e(ye, {
                                  breakpoint: p,
                                  overrides: {
                                    BK5OaEWGo: {
                                      NM0wvYidN: "eBPF-based instrumentation",
                                      qZ5Zribb9:
                                        "./assets/videos/pi5MbdglEgXsYO9g81Vn0wE.webm",
                                      VVlXExPFO: lt(
                                        {
                                          pixelHeight: 32,
                                          pixelWidth: 32,
                                          src: "../../images/kcnF5QwiHxUqBokSO24MQFAGQY.svg",
                                        },
                                        ""
                                      ),
                                    },
                                    wrpxCIIuN: {
                                      NM0wvYidN: "eBPF-based instrumentation",
                                      qZ5Zribb9:
                                        "./assets/videos/pi5MbdglEgXsYO9g81Vn0wE.webm",
                                      TM0lGsHsb: "Engineered for Scale",
                                      VVlXExPFO: lt(
                                        {
                                          pixelHeight: 32,
                                          pixelWidth: 32,
                                          src: "../../images/kcnF5QwiHxUqBokSO24MQFAGQY.svg",
                                        },
                                        ""
                                      ),
                                    },
                                  },
                                  children: e(jt, {
                                    __framer__animateOnce: !1,
                                    __framer__targets: [
                                      { ref: T, target: "bDpomOJGS" },
                                      { ref: U, target: "q62Az_SO5" },
                                      { ref: H, target: "bDpomOJGS" },
                                    ],
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    height: "100%",
                                    id: "G_FTxURqq",
                                    layoutId: "G_FTxURqq",
                                    NM0wvYidN:
                                      "Lorem ipsum type text in this space ",
                                    style: { width: "100%" },
                                    TM0lGsHsb: "Intuitive Insights",
                                    variant: "bDpomOJGS",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                          e(ye, {
                            breakpoint: p,
                            overrides: {
                              BK5OaEWGo: {
                                width: `calc(${i?.width || "100vw"} - 80px)`,
                                y: (i?.y || 0) + 0 + 0 + 120 + 411 + 0 + 746,
                              },
                              wrpxCIIuN: {
                                width: `calc(${i?.width || "100vw"} - 40px)`,
                                y: (i?.y || 0) + 0 + 0 + 120 + 411 + 0 + 746,
                              },
                            },
                            children: e(P, {
                              height: 349,
                              children: e(be, {
                                className: "framer-mpomyj-container",
                                id: B,
                                nodeId: "C3_iPWkpl",
                                ref: H,
                                rendersWithMotion: !0,
                                scopeId: "F9GduwabV",
                                children: e(ye, {
                                  breakpoint: p,
                                  overrides: {
                                    BK5OaEWGo: {
                                      NM0wvYidN:
                                        "No code change, No config change",
                                      qZ5Zribb9:
                                        "./assets/videos/dNtXJ9CFlTyt3ygEbbMqdkM4fQ.webm",
                                      TM0lGsHsb: "Instant Setup",
                                      VVlXExPFO: lt(
                                        {
                                          pixelHeight: 32,
                                          pixelWidth: 32,
                                          src: "../../images/j91s1EXpv5ZCwPhsBfWqeu4dxow.svg",
                                        },
                                        ""
                                      ),
                                    },
                                    wrpxCIIuN: {
                                      NM0wvYidN:
                                        "No code change, No config change",
                                      qZ5Zribb9:
                                        "./assets/videos/dNtXJ9CFlTyt3ygEbbMqdkM4fQ.webm",
                                      TM0lGsHsb: "Instant Setup",
                                      VVlXExPFO: lt(
                                        {
                                          pixelHeight: 32,
                                          pixelWidth: 32,
                                          src: "../../images/j91s1EXpv5ZCwPhsBfWqeu4dxow.svg",
                                        },
                                        ""
                                      ),
                                    },
                                  },
                                  children: e(jt, {
                                    __framer__animateOnce: !1,
                                    __framer__targets: [
                                      { ref: T, target: "bDpomOJGS" },
                                      { ref: U, target: "bDpomOJGS" },
                                      { ref: H, target: "q62Az_SO5" },
                                    ],
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    height: "100%",
                                    id: "C3_iPWkpl",
                                    layoutId: "C3_iPWkpl",
                                    NM0wvYidN:
                                      "Lorem ipsum type text in this space ",
                                    qZ5Zribb9:
                                      "./assets/videos/XpZIvI9PqSF3rTYdfd9NaMLJfpI.mp4",
                                    style: { width: "100%" },
                                    TM0lGsHsb: "Intuitive Insights",
                                    variant: "bDpomOJGS",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-ixb136",
                        "data-framer-name": "Quote",
                        children: e(O, {
                          __fromCanvasComponent: !0,
                          children: F(_, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7R2Vpc3QtNjAw",
                                  "--framer-font-family":
                                    '"Geist", "Geist Placeholder", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Code that knows ",
                              }),
                              F("p", {
                                style: {
                                  "--font-selector": "R0Y7R2Vpc3QtNjAw",
                                  "--framer-font-family":
                                    '"Geist", "Geist Placeholder", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: [
                                  "its karma",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "rgb(205, 255, 82)",
                                    },
                                    children: ".",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          className: "framer-2bfiv",
                          fonts: ["GF;Geist-600"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            e("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  io = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-6oC15.framer-kh1rj8, .framer-6oC15 .framer-kh1rj8 { display: block; }",
    ".framer-6oC15.framer-r2c1h1 { align-content: flex-start; align-items: flex-start; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }",
    ".framer-6oC15 .framer-8gejnz-container { flex: none; height: 100vh; left: 0px; position: fixed; right: 0px; top: calc(50.00000000000002% - 100vh / 2); z-index: 1; }",
    ".framer-6oC15 .framer-1xa82as { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; left: 50%; overflow: hidden; padding: 40px 20px 0px 16px; position: fixed; top: 0px; transform: translateX(-50%); width: 390px; z-index: 8; }",
    ".framer-6oC15 .framer-l4jppn { cursor: pointer; flex: none; height: 48px; overflow: hidden; position: relative; width: 172px; }",
    ".framer-6oC15 .framer-af5o62 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 100vh; justify-content: flex-start; overflow: visible; padding: 40px; position: sticky; top: 0px; width: 100%; z-index: 2; }",
    ".framer-6oC15 .framer-1bd6ykm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-6oC15 .framer-1dnoicb-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    ".framer-6oC15 .framer-r277g0 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: flex-end; max-width: 320px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-6oC15 .framer-tctsu6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-6oC15 .framer-1fzn3vq-container, .framer-6oC15 .framer-xwzkfj-container, .framer-6oC15 .framer-aq0xkt-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-6oC15.framer-nuha8z { background-color: rgba(0, 0, 0, 0.65); inset: 0px; position: fixed; user-select: none; z-index: 10; }",
    ".framer-6oC15.framer-zz4fmy { -webkit-backdrop-filter: blur(9px); align-content: center; align-items: center; backdrop-filter: blur(9px); background-color: rgba(0, 0, 0, 0.65); bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 220px; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-6oC15 .framer-163iq9h-container { flex: none; height: auto; position: relative; width: 1080px; z-index: 10; }",
    ".framer-6oC15 .framer-m3ujeq { background-color: #ffffff; cursor: pointer; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0; overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-6oC15 .framer-1wr1qp7 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; min-height: 116px; overflow: hidden; padding: 20px; position: fixed; transform: translateX(-50%); width: 100%; z-index: 8; }",
    ".framer-6oC15 .framer-7ny0y3-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-6oC15 .framer-t58wkv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 120px 20px 116px 20px; position: relative; width: 100%; z-index: 2; }",
    ".framer-6oC15.framer-1dbefe9 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }",
    ".framer-6oC15.framer-gnss09 { -webkit-backdrop-filter: blur(9px); align-content: center; align-items: center; backdrop-filter: blur(9px); background-color: rgba(0, 0, 0, 0.65); bottom: 0px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: fixed; right: 0px; top: 0px; }",
    ".framer-6oC15 .framer-yllg98-container { flex: none; height: 112px; position: relative; width: 200px; }",
    ".framer-6oC15 .framer-1d4959d { background-color: #ffffff; flex: none; height: 100%; opacity: 0; overflow: hidden; position: relative; width: 100%; }",
    ".framer-6oC15 .framer-15lnj5g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-6oC15 .framer-1u7e3ju-container { flex: none; height: auto; position: sticky; top: 100px; width: 100%; z-index: 1; }",
    ".framer-6oC15 .framer-1iy7nx5-container { flex: none; height: auto; position: sticky; top: 130px; width: 100%; z-index: 1; }",
    ".framer-6oC15 .framer-mpomyj-container { flex: none; height: auto; position: sticky; top: 160px; width: 100%; z-index: 1; }",
    ".framer-6oC15 .framer-ixb136 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 100%; }",
    ".framer-6oC15 .framer-2bfiv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@media (min-width: 810px) and (max-width: 1279px) { .framer-6oC15.framer-r2c1h1 { width: 810px; } .framer-6oC15 .framer-1xa82as { padding: 40px 40px 0px 32px; width: 100%; } .framer-6oC15 .framer-1wr1qp7 { min-height: unset; padding: 20px 40px 20px 40px; } .framer-6oC15 .framer-t58wkv { padding: 120px 40px 88px 40px; } .framer-6oC15.framer-1dbefe9 { z-index: 10; } .framer-6oC15.framer-gnss09 { cursor: unset; padding: 32px; z-index: 10; } .framer-6oC15 .framer-yllg98-container { aspect-ratio: 1.7857142857142858 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 112px); order: 0; width: 1px; z-index: 5; } .framer-6oC15 .framer-1d4959d { cursor: pointer; left: calc(50.00000000000002% - 100% / 2); order: 1; position: absolute; top: calc(50.00000000000002% - 100% / 2); z-index: 1; }}",
    "@media (max-width: 809px) { .framer-6oC15.framer-r2c1h1 { width: 390px; } .framer-6oC15 .framer-8gejnz-container { order: 0; } .framer-6oC15 .framer-1xa82as { background-color: #000000; order: 1; padding: 40px 20px 8px 16px; width: 100%; } .framer-6oC15 .framer-1wr1qp7 { -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); min-height: unset; order: 4; } .framer-6oC15 .framer-t58wkv { order: 3; } .framer-6oC15.framer-1dbefe9 { background-color: rgba(0, 0, 0, 0.6); z-index: 10; } .framer-6oC15.framer-gnss09 { background-color: rgba(0, 0, 0, 0.72); cursor: unset; padding: 20px; z-index: 10; } .framer-6oC15 .framer-yllg98-container { aspect-ratio: 1.7857142857142858 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 112px); width: 1px; z-index: 5; } .framer-6oC15 .framer-1d4959d { cursor: pointer; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); z-index: 1; } .framer-6oC15 .framer-ixb136 { flex-direction: column; } .framer-6oC15 .framer-2bfiv { flex: none; width: 100%; }}",
  ],
  ct = le(oo, io, "framer-6oC15"),
  jf = ct;
ct.displayName = "Home";
ct.defaultProps = { height: 800, width: 1280 };
me(
  ct,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Geist",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2",
          weight: "600",
        },
      ],
    },
    ...Hn,
    ...Yn,
    ...Xn,
    ...Jn,
    ...Kn,
    ...Qn,
    ...Zn,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Gf = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerF9GduwabV",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BK5OaEWGo":{"layout":["fixed","auto"]},"wrpxCIIuN":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerIntrinsicWidth: "1280",
        framerAcceptsLayoutTemplate: "true",
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "800",
        framerAutoSizeImages: "true",
        framerColorSyntax: "true",
        framerImmutableVariables: "true",
        framerScrollSections:
          '{"ovvhHEfiI":{"pattern":":ovvhHEfiI","name":"card-1"},"G_FTxURqq":{"pattern":":G_FTxURqq","name":"card-2"},"C3_iPWkpl":{"pattern":":C3_iPWkpl","name":"card-3"}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Gf as __FramerMetadata__, jf as default };
//# sourceMappingURL=-FqPHjUF25T5L7HiWJQJsidD6R3Tz418nB8UizmSgs8.OFKBFR4N.mjs.map
