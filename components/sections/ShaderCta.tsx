"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { PrimaryButton } from "../ui";
import styles from "./ShaderCta.module.css";

import { T } from "@/components/i18n/T";

const ShaderBg = dynamic(() => import("./ShaderBg"), { ssr: false });

/** Closing CTA with the moving-gradient shader, grid overlay and glow (Figma 1524:20384). */
export default function ShaderCta({
  title,
  text,
  cta,
  mobilePad,
}: {
  title: ReactNode;
  text: ReactNode;
  cta: { label: string; href: string };
  /* mobile vertical padding (Figma: 80 on most pages, 160 on Customer Success) */
  mobilePad?: number;
}) {
  return (
    <section className={styles.cta}>
      <ShaderBg className={styles.shader} />
      <span className={styles.grid} aria-hidden>
        <img alt="" src="/assets/pagehero/cta-grid.svg" />
      </span>
      <div
        className={styles.inner}
        style={mobilePad ? ({ "--cta-pad-m": `${mobilePad}px` } as React.CSSProperties) : undefined}
      >
        <div className={styles.copy}>
          <span className={styles.glow} aria-hidden>
            <img alt="" src="/assets/home/cta-glow.svg" />
          </span>
          <h2 className={styles.title}><T>{title}</T></h2>
          <p className={styles.text}><T>{text}</T></p>
        </div>
        <div className={styles.actions}>
          <PrimaryButton href={cta.href} arrow>
            <T>{cta.label}</T>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
