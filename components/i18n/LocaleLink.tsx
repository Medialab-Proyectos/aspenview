"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizeHref } from "@/lib/i18n";
import { useLang } from "./LangProvider";

/** next/link that keeps the visitor in their language (/es prefix on Spanish pages). */
export default function Link({ href, ...rest }: ComponentProps<typeof NextLink>) {
  const lang = useLang();
  const to = typeof href === "string" ? localizeHref(lang, href) : href;
  return <NextLink href={to} {...rest} />;
}
