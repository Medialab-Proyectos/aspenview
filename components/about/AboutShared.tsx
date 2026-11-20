import Link from "@/components/i18n/LocaleLink";
import type { ReactNode } from "react";
import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./About.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/about";

const ABOUT_NAV = [
  { label: "Who we are", href: ROUTES.whoWeAre },
  { label: "Why AspenView", href: ROUTES.whyAspenview },
  { label: "Leadership", href: ROUTES.leadership },
];

/* ---------- About hero with section sub-nav (1877:15019 / 1894:20122 / 1866:9508) ---------- */
export function AboutHero({
  eyebrow,
  title,
  text,
  bg,
  aside,
  photo,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  /* photo background with the dark left-to-right veil (Who we are) instead of the glow */
  bg?: string;
  /* card on the right of the hero copy (Who we are) */
  aside?: ReactNode;
  /* cut-out photo on the right of the copy (Leadership 2331:25071) */
  photo?: string;
}) {
  return (
    <section className={styles.hero}>
      {bg ? (
        <>
          <img alt="" src={bg} className={styles.heroBg} />
          <span className={styles.heroVeil} aria-hidden />
        </>
      ) : (
        <span className={`${styles.heroGlow} ${photo ? styles.heroGlowPhoto : ""}`} aria-hidden>
          <img alt="" src={`${A}/hero-glow.svg`} />
        </span>
      )}
      <div className={`wrap ${styles.heroInner}`}>
        <div className={`${styles.heroTop} ${photo ? styles.heroTopPhoto : ""} ${aside ? styles.heroTopAside : ""}`}>
          <div className={styles.heroCopy}>
            <Eyebrow tone="white"><T>{eyebrow}</T></Eyebrow>
            <h1 className={styles.heroTitle}><T>{title}</T></h1>
            <p className={`${styles.heroText} ${aside ? styles.heroTextNarrow : ""}`}><T>{text}</T></p>
          </div>
          <T>{aside}</T>
          {photo && <img alt="" src={photo} className={styles.heroPhoto} />}
        </div>
        <nav className={styles.heroNav} aria-label="About AspenView">
          <img alt="" src={`${A}/hero-line.svg`} className={styles.heroLine} />
          <ul>
            {ABOUT_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href}><T>{l.label}</T></Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

/* ---------- Closing CTA shared by the About pages (1877:15125) ---------- */
export function AboutCta({
  title,
  text,
  cta,
  large = false,
  textWidth,
  tabletPad,
}: {
  title: ReactNode;
  text: ReactNode;
  cta: string;
  textWidth?: number;
  /* 64px main title (Leadership / Who we are) instead of the 48px one */
  large?: boolean;
  /* tablet vertical padding (Figma: 260 on Leadership, 160 elsewhere) */
  tabletPad?: number;
}) {
  return (
    <section className={styles.cta}>
      <div
        className={`wrap ${styles.ctaInner}`}
        style={tabletPad ? ({ "--cta-pad-t": `${tabletPad}px` } as React.CSSProperties) : undefined}
      >
        <div className={styles.ctaCopy}>
          <span className={styles.ctaGlow} aria-hidden>
            <img alt="" src={`${A}/cta-glow.svg`} />
          </span>
          <h2 className={`${styles.ctaTitle} ${large ? styles.ctaTitleLarge : ""}`}><T>{title}</T></h2>
          <p className={styles.ctaText} style={textWidth ? { maxWidth: textWidth } : undefined}>
            <T>{text}</T>
          </p>
        </div>
        <div className={styles.ctaBtn}>
          <PrimaryButton href={ROUTES.contact} arrow>
            <T>{cta}</T>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
