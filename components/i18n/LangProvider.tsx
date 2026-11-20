"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { DEFAULT_LANG, translate, type Dict, type Lang } from "@/lib/i18n";

type Ctx = { lang: Lang; dict: Dict | null };
const LangContext = createContext<Ctx>({ lang: DEFAULT_LANG, dict: null });

/** Set once per language in app/[lang]/layout.tsx; Spanish pages receive the dictionary, English ones don't need it. */
export function LangProvider({ lang, dict, children }: { lang: Lang; dict: Dict | null; children: ReactNode }) {
  return <LangContext.Provider value={{ lang, dict }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext).lang;

/** For strings outside JSX text (placeholders, aria-labels, validation messages…) */
export function useT() {
  const { dict } = useContext(LangContext);
  return useCallback((s: string) => translate(dict, s), [dict]);
}

export function useDict() {
  return useContext(LangContext).dict;
}
