/* Site languages. English is served without a prefix (/services), Spanish under /es (/es/services).
   Copy stays in English in the components; <T> / translate() look each string up in the
   Spanish dictionary (lib/i18n/es.json, keyed by the English text) and fall back to English. */

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export type Dict = Record<string, string>;

export const isLang = (v: unknown): v is Lang => typeof v === "string" && (LANGS as readonly string[]).includes(v);

/* Dictionary keys are the English text with whitespace collapsed and straight quotes (’ ‘ ´ → ', “ ” → ") */
export const norm = (s: string) =>
  s
    .replace(/[’‘´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();

export function translate(dict: Dict | null | undefined, s: string): string {
  if (!dict || !s) return s;
  const key = norm(s);
  if (!key) return s;
  const hit = dict[key];
  if (hit === undefined) return s;
  /* keep the leading/trailing spaces of the source (JSX text next to <strong>, <br/>…) */
  const lead = /^\s/.test(s) ? " " : "";
  const trail = /\s$/.test(s) ? " " : "";
  return lead + hit + trail;
}

const SKIP = /^\/(api|_next|assets|videos|fonts)(\/|$)/;

/** Adds the /es prefix to an internal path (keeps hashes, queries, external and asset URLs untouched). */
export function localizeHref(lang: Lang, href: string): string {
  if (lang === DEFAULT_LANG || !href.startsWith("/") || href.startsWith("//") || SKIP.test(href)) return href;
  if (href === "/es" || href.startsWith("/es/") || href.startsWith("/es?") || href.startsWith("/es#")) return href;
  return href === "/" ? "/es" : `/es${href}`;
}

/** Strips the language prefix: /es/services → /services */
export function stripLang(path: string): string {
  if (path === "/es") return "/";
  return path.startsWith("/es/") ? path.slice(3) : path;
}
