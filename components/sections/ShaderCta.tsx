"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { PrimaryButton } from "../ui";
import styles from "./ShaderCta.module.css";

const ShaderBg = dynamic(() => import("./ShaderBg"), { ssr: false });

/** Closing CTA with the moving-gradient shader, grid overlay and glow (Figma 1524:20384). */
export default function ShaderCta({
  title,
  text,
  cta,
}: {
  title: ReactNode;
  text: ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <section className={styles.cta}>
      <ShaderBg className={styles.shader} />
      <span className={styles.grid} aria-hidden>
        <img alt="" src="/assets/pagehero/cta-grid.svg" />
      </span>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.glow} aria-hidden>
            <img alt="" src="/assets/home/cta-glow.svg" />
          </span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.actions}>
          <PrimaryButton href={cta.href} arrow>
            {cta.label}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
