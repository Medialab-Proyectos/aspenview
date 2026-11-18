import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./About.module.css";

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
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  /* photo background with the dark left-to-right veil (Who we are) instead of the glow */
  bg?: string;
  /* card on the right of the hero copy (Who we are) */
  aside?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      {bg ? (
        <>
          <img alt="" src={bg} className={styles.heroBg} />
          <span className={styles.heroVeil} aria-hidden />
        </>
      ) : (
        <span className={styles.heroGlow} aria-hidden>
          <img alt="" src={`${A}/hero-glow.svg`} />
        </span>
      )}
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroTop}>
          <div className={styles.heroCopy}>
            <Eyebrow tone="white">{eyebrow}</Eyebrow>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={`${styles.heroText} ${aside ? styles.heroTextNarrow : ""}`}>{text}</p>
          </div>
          {aside}
        </div>
        <nav className={styles.heroNav} aria-label="About AspenView">
          <img alt="" src={`${A}/hero-line.svg`} className={styles.heroLine} />
          <ul>
            {ABOUT_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
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
}: {
  title: ReactNode;
  text: ReactNode;
  cta: string;
  textWidth?: number;
  /* 64px main title (Leadership / Who we are) instead of the 48px one */
  large?: boolean;
}) {
  return (
    <section className={styles.cta}>
      <div className={`wrap ${styles.ctaInner}`}>
        <div className={styles.ctaCopy}>
          <span className={styles.ctaGlow} aria-hidden>
            <img alt="" src={`${A}/cta-glow.svg`} />
          </span>
          <h2 className={`${styles.ctaTitle} ${large ? styles.ctaTitleLarge : ""}`}>{title}</h2>
          <p className={styles.ctaText} style={textWidth ? { maxWidth: textWidth } : undefined}>
            {text}
          </p>
        </div>
        <div className={styles.ctaBtn}>
          <PrimaryButton href={ROUTES.contact} arrow>
            {cta}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
