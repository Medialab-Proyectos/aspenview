import type { ReactNode } from "react";
import { Eyebrow, LinkButton, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import { EnableDimensions, ResponsibleAi } from "./AiInteractive";
import styles from "./Transformation.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/ai";

/* ---------- Shared AI hero: centered copy + masked transparent video (1946:12755) ---------- */
export function AiHero({
  eyebrow,
  title,
  accent,
  text,
  cta,
  ctaHref,
  video,
  ratio = "2178 / 964",
  masked = true,
  textWidth,
}: {
  eyebrow: string;
  title: ReactNode;
  accent: ReactNode;
  text: ReactNode;
  cta: string;
  ctaHref: string;
  video: string;
  ratio?: string;
  /* the transformation hero fades the transparent webm out at the bottom (luminance mask) */
  masked?: boolean;
  textWidth?: number;
}) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <Eyebrow size="sm"><T>{eyebrow}</T></Eyebrow>
          <h1 className={styles.heroTitle}>
            <span><T>{title}</T></span>
            <strong><T>{accent}</T></strong>
          </h1>
          <p className={styles.heroText} style={textWidth ? { maxWidth: textWidth } : undefined}>
            <T>{text}</T>
          </p>
        </div>
        <PrimaryButton href={ctaHref} arrow>
          <T>{cta}</T>
        </PrimaryButton>
        <div className={styles.heroMedia}>
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            className={masked ? styles.heroMasked : undefined}
            style={{ aspectRatio: ratio }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- How we enable AI transformation (2061:33325) ---------- */
export function AitEnable() {
  return (
    <section className={`${styles.dark} ${styles.gap}`} id="how-we-enable">
      <span className={styles.enableGlow} aria-hidden>
        <img alt="" src={`${A}/enable-glow.svg`} />
      </span>
      <div className={`wrap ${styles.section}`}>
        <EnableDimensions>
          <div className={styles.header}>
              <h2 className={styles.heading}>
                <Eyebrow tone="white" size="sm"><T>{"How We Enable AI Transformation"}</T></Eyebrow>
                <span className={`${styles.title} ${styles.titleLight}`}><T>{"Transformation Goes "}</T><strong><T>{"Beyond Technology."}</T></strong>
                </span>
              </h2>
            <p className={styles.leadLarge}><T>{"We bring together five dimensions to move AI from experimentation into the way your business operates."}</T></p>
          </div>
        </EnableDimensions>
      </div>
    </section>
  );
}

/* ---------- AI transformation in action (1946:12789) ---------- */
const ACTION = [
  {
    eyebrow: "Agentic Engineering",
    video: "/videos/ait-action-1.webm",
    ratio: "1514 / 486",
    maxW: 514,
    title: "Rethink How Software Gets Built.",
    text: "Integrate agents across the engineering lifecycle to accelerate planning, development, testing and delivery, with engineers governing the outcomes.",
    cta: "Explore Agentic engineering",
    href: ROUTES.agenticEngineering,
  },
  {
    eyebrow: "Agentic Process Automation",
    video: "/videos/ait-action-2.webm",
    ratio: "1490 / 548",
    maxW: 449,
    title: "Rethink How Work Gets Done.",
    text: "Extend automation beyond fixed rules with intelligent agents that can reason, adapt and act across complex business processes.",
    cta: "Explore Agentic process automation",
    href: ROUTES.agenticAutomation,
  },
];

export function AitAction() {
  return (
    <section className={`${styles.white} ${styles.gap}`}>
      <div className={`wrap ${styles.section}`}>
        <h2 className={styles.heading}>
          <Eyebrow size="sm"><T>{"AI Transformation in Action"}</T></Eyebrow>
          <span className={styles.title}><T>{"Transform How You Build."}</T><br />
            <strong><T>{"Transform How You Operate."}</T></strong>
          </span>
        </h2>
        <div className={styles.actions}>
          {ACTION.map((a) => (
            <article key={a.eyebrow} className={styles.action}>
              <p className={styles.actionEyebrow}><T>{a.eyebrow}</T></p>
              <div className={styles.actionMedia} style={{ aspectRatio: a.ratio, maxWidth: a.maxW }}>
                <video src={a.video} autoPlay muted loop playsInline preload="metadata" aria-hidden />
              </div>
              <div className={styles.actionBody}>
                <div className={styles.actionCopy}>
                  <h3 className={styles.actionTitle}><T>{a.title}</T></h3>
                  <p className={styles.actionText}><T>{a.text}</T></p>
                </div>
                <LinkButton href={a.href}><T>{a.cta}</T></LinkButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Responsible AI (2044:20986) ---------- */
export function AitResponsible() {
  return (
    <section className={`${styles.dark} ${styles.gap}`}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow tone="white" size="sm"><T>{"Responsible AI"}</T></Eyebrow>
            <span className={`${styles.title} ${styles.titleLight}`}><T>{"Move Faster."}</T><br />
              <strong><T>{"Keep People in Control."}</T></strong>
            </span>
          </h2>
          <p className={styles.leadLarge}><T>{"Governance shouldn't come after AI. It should be designed into it."}</T><br /><T>{"We build human oversight, security, transparency and continuous evaluation into how AI operates."}</T></p>
        </div>
        <ResponsibleAi />
        <p className={styles.governor}><T>{"Human as governor. In the control room, not on the assembly line."}</T></p>
      </div>
    </section>
  );
}

/* ---------- Business outcomes (2058:33078) ---------- */
const OUTCOMES = [
  { title: "Faster Execution", ratio: "928 / 180", body: "Move from idea to outcome faster." },
  { title: "Greater Productivity", ratio: "492 / 214", body: "Shift people toward higher-value work." },
  { title: "Lower Cost to Deliver", ratio: "428 / 296", body: "Create more without scaling at the same rate." },
  { title: "Better Quality", ratio: "404 / 136", body: "Build consistency and governance into execution." },
  { title: "Greater Adaptability", ratio: "474 / 194", body: "Respond faster as priorities change." },
];

export function AitOutcomes() {
  return (
    <section className={`${styles.white} ${styles.gap}`}>
      <div className={`wrap ${styles.section}`}>
        <Eyebrow size="sm"><T>{"Business outcomes"}</T></Eyebrow>
        <div className={styles.header}>
          <h2 className={styles.title}><T>{"Beyond Efficiency."}</T><br />
            <strong><T>{"Unlocking New Value."}</T></strong>
          </h2>
          <p className={`${styles.leadLarge} ${styles.leadMuted}`}><T>{"When AI is embedded into how a business operates, the opportunity goes beyond incremental improvements to unlock new capabilities, growth, and scalable value creation."}</T></p>
        </div>
        <div className={styles.outcomes}>
          {OUTCOMES.map((o, i) => (
            <article key={o.title} className={`${styles.outcome} reveal-card`} tabIndex={0}>
              <div className={styles.outcomeMedia} style={{ aspectRatio: o.ratio }}>
                <video
                  src={`/videos/ait-results-${i + 1}.webm`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                />
              </div>
              <div className={styles.outcomeCopy}>
                <h3 className={styles.outcomeTitle}><T>{o.title}</T></h3>
                <div className="reveal-body">
                  <p className={styles.outcomeBody}><T>{o.body}</T></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AspenView AI advantage (2058:33169) ---------- */
export function AitAdvantage() {
  return (
    <section className={`${styles.dark} ${styles.gap}`}>
      <div className={`wrap ${styles.advantage}`}>
        <img alt="" src={`${A}/advantage.png`} className={styles.advantageImg} />
        <div className={styles.advantageCopy}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              <Eyebrow tone="white" size="sm"><T>{"AspenView AI Advantage"}</T></Eyebrow>
              <span className={`${styles.title} ${styles.titleLight}`}><T>{"We Don't Just Advise on AI."}</T><br />
                <strong><T>{"We're Living It."}</T></strong>
              </span>
            </h2>
            <div className={styles.advantageText}>
              <p><T>{"We're applying AI-native thinking across our own business, combining people, processes and agentic technology to change how we engineer, deliver and operate."}</T></p>
              <p><T>{"That experience shapes how we help our clients do the same."}</T></p>
            </div>
          </div>
          <PrimaryButton href={ROUTES.aiNative} arrow className={styles.advantageBtn}><T>{"Explore AI-Native at AspenView"}</T></PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA with grid + rings (1946:12801) ---------- */
export function AiGridCta({
  title,
  text,
  cta,
  ctaHref = ROUTES.contact,
  spaced = false,
}: {
  title: ReactNode;
  text?: ReactNode;
  cta: string;
  ctaHref?: string;
  /* true when the CTA sits in the page stack (64px gap above) instead of sharing a frame with the previous band */
  spaced?: boolean;
}) {
  return (
    <section className={`${styles.cta} ${spaced ? styles.gap : ""}`}>
      <span className={styles.ctaGrid} aria-hidden>
        <img alt="" src={`${A}/cta-grid.svg`} />
      </span>
      <div className={styles.ctaCopy}>
        <span className={styles.ctaGlow} aria-hidden>
          <img alt="" src={`${A}/cta-glow.svg`} />
        </span>
        <img alt="" src={`${A}/cta-ring-sm.svg`} className={styles.ctaRingSm} aria-hidden />
        <img alt="" src={`${A}/cta-ring-lg.svg`} className={styles.ctaRingLg} aria-hidden />
        <h2 className={styles.ctaTitle}><T>{title}</T></h2>
        {text && <p className={styles.ctaText}><T>{text}</T></p>}
      </div>
      <div className={styles.ctaBtn}>
        <PrimaryButton href={ctaHref} arrow>
          <T>{cta}</T>
        </PrimaryButton>
      </div>
    </section>
  );
}
