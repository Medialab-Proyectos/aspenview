import type { Metadata } from "next";
import ES from "./es.json";
import { isLang, localizeHref, translate, type Dict, type Lang } from "./index";

export const ES_DICT = ES as Dict;

export const dictFor = (lang: Lang): Dict | null => (lang === "es" ? ES_DICT : null);

export const langFrom = (v: string): Lang => (isLang(v) ? v : "en");

/** Translates a page's title/description and adds canonical + hreflang links for both languages. */
export function pageMeta(langParam: string, path: string, meta: { title: string; description?: string }): Metadata {
  const lang = langFrom(langParam);
  const dict = dictFor(lang);
  return {
    title: translate(dict, meta.title),
    description: meta.description ? translate(dict, meta.description) : undefined,
    alternates: {
      canonical: localizeHref(lang, path),
      languages: { en: path, es: localizeHref("es", path), "x-default": path },
    },
    openGraph: { locale: lang === "es" ? "es_ES" : "en_US" },
  };
}
