"use client";

import type { ReactNode } from "react";
import { translate } from "@/lib/i18n";
import { useDict } from "./LangProvider";

/** Translatable text: <T>Talk to our team</T> renders the Spanish copy on /es pages.
    Accepts any ReactNode so mixed data (plain string or JSX) can be wrapped; only plain strings are translated. */
export function T({ children }: { children?: ReactNode }) {
  const dict = useDict();
  if (typeof children !== "string") return <>{children ?? null}</>;
  return <>{translate(dict, children)}</>;
}
