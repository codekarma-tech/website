import {
  C as O,
  D as T,
  E as F,
  F as m,
  G as D,
  H as C,
  J as V,
  K as x,
  L as U,
  M as H,
  Ma as Q,
  N as M,
  O as G,
  P as _,
  R as N,
  T as W,
  c as d,
  e as w,
  f as k,
  g as P,
  i as B,
  m as S,
  ma as z,
  n as L,
  na as A,
  oa as q,
  ta as j,
  xa as J,
} from "./chunk-OWXM3JD5.mjs";
import "./chunk-HZL4YIMB.mjs";
import { b as R, c as t } from "./chunk-A3IIQ6X3.mjs";
var ne = "default" in F ? O : F,
  f = {},
  Z = ne;
f.createRoot = Z.createRoot;
f.hydrateRoot = Z.hydrateRoot;
var K = f.createRoot,
  X = f.hydrateRoot;
var u = {
    F9GduwabV: {
      elements: {
        C3_iPWkpl: "card-3",
        G_FTxURqq: "card-2",
        ovvhHEfiI: "card-1",
      },
      page: m(() =>
        import("./-FqPHjUF25T5L7HiWJQJsidD6R3Tz418nB8UizmSgs8.OFKBFR4N.mjs")
      ),
      path: "/",
    },
  },
  y = [{ code: "en-US", id: "default", name: "English", slug: "" }],
  v = {},
  $ = "ad996a8e1503f279461a9615b6ffec046eeafeeaadbc8ee75439d15e416d6c53";
async function ce({ routeId: o, pathVariables: i, localeId: l }) {
  let e = u[o].page.preload(),
    n = d(j, {
      isWebsite: !0,
      routeId: o,
      pathVariables: i,
      routes: u,
      collectionUtils: v,
      framerSiteId: $,
      notFoundPage: m(() => import("./SitesNotFoundPage.js@1.4-GZXYDHQL.mjs")),
      isReducedMotion: !0,
      localeId: l,
      locales: y,
      preserveQueryParams: void 0,
      siteCanonicalURL: "https://codekarma.tech",
      EditorBar:
        typeof t > "u"
          ? void 0
          : (() => {
              if (
                !/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  R.userAgent
                )
              )
                return m(async () => {
                  let { createEditorBar: r } = await import(
                    "../../init.mjs"
                  );
                  return {
                    default: r({
                      dependencies: {
                        __version: 1,
                        framer: {
                          useCurrentRoute: C,
                          useLocaleInfo: x,
                          useRouter: D,
                        },
                        react: {
                          createElement: d,
                          memo: w,
                          useCallback: P,
                          useEffect: B,
                          useRef: S,
                          useState: L,
                        },
                        "react-dom": { createPortal: T },
                      },
                    }),
                  };
                });
            })(),
    }),
    s = d(A, {
      children: n,
      value: {
        editorBarOnPageEditing: !1,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
      },
    }),
    a = d(z, { children: s }),
    p = d(V, { children: a, value: { routes: {} } });
  return await e, p;
}
var ee = typeof document < "u";
if (ee) {
  (t.__framer_importFromPackage = (i, l) => () =>
    d(N, {
      error: 'Package component not supported: "' + l + '" in "' + i + '"',
    })),
    (t.process = {
      ...t.process,
      env: { ...(t.process ? t.process.env : void 0), NODE_ENV: "production" },
    }),
    (t.__framer_events = t.__framer_events || []),
    W();
  let o = document.getElementById("main");
  "framerHydrateV2" in o.dataset ? Y(!0, o) : Y(!1, o);
}
function ie() {
  ee && t.__framer_events.push(arguments);
}
async function Y(o, i) {
  function l(e, n, s = !0) {
    if (e.caught || t.__framer_hadFatalError) return;
    let a = n?.componentStack;
    if (s) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          a
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        a
      );
    ie(
      s ? "published_site_load_recoverable_error" : "published_site_load_error",
      {
        message: String(e),
        componentStack: a,
        stack: a
          ? void 0
          : e instanceof Error && typeof e.stack == "string"
          ? e.stack
          : null,
      }
    );
  }
  try {
    let e, n, s, a;
    if (o) {
      let r = JSON.parse(i.dataset.framerHydrateV2);
      (e = r.routeId),
        (n = r.localeId),
        (s = r.pathVariables),
        (a = r.breakpoints),
        (e = _(u, e));
    } else {
      _(u, void 0);
      let r = G(u, decodeURIComponent(location.pathname), !0, y);
      (e = r.routeId), (n = r.localeId), (s = r.pathVariables);
    }
    let p = ce({ routeId: e, localeId: n, pathVariables: s });
    typeof t < "u" &&
      (async () => {
        let r = u[e],
          te = "default",
          g = y.find(({ id: c }) => (n ? c === n : c === te)).code,
          E = null;
        if (r?.collectionId && v) {
          let c = await v[r.collectionId]?.(),
            [I] = Object.values(s);
          c &&
            typeof I == "string" &&
            (E = (await c.getRecordIdBySlug(I, g || void 0)) ?? null);
        }
        let b = Intl.DateTimeFormat().resolvedOptions(),
          re = b.timeZone,
          ae = b.locale;
        await new Promise((c) => {
          document.prerendering
            ? document.addEventListener("prerenderingchange", c, { once: !0 })
            : c();
        }),
          t.__framer_events.push([
            "published_site_pageview",
            {
              framerSiteId: $ ?? null,
              routePath: r?.path || "/",
              collectionItemId: E,
              framerLocale: g || null,
              webPageId: r?.abTestingVariantId ?? e,
              abTestId: r?.abTestId,
              referrer: document.referrer || null,
              url: t.location.href,
              hostname: t.location.hostname || null,
              pathname: t.location.pathname || null,
              hash: t.location.hash || null,
              search: t.location.search || null,
              timezone: re,
              locale: ae,
            },
            "eager",
          ]),
          await q(),
          document.dispatchEvent(
            new CustomEvent("framer:pageview", {
              detail: { framerLocale: g || null },
            })
          );
      })();
    let h = await p;
    o
      ? (Q("framer-rewrite-breakpoints", () => {
          J(a), t.__framer_onRewriteBreakpoints?.(a);
        }),
        k(() => {
          M(), H(), U(), X(i, h, { onRecoverableError: l });
        }))
      : K(i, { onRecoverableError: l }).render(h);
  } catch (e) {
    throw (l(e, void 0, !1), e);
  }
}
export { ce as getPageRoot };
//# sourceMappingURL=script_main.EF7LEHMR.mjs.map
