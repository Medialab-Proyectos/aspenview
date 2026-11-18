import type { ReactNode } from "react";
import { Eyebrow, LinkButton, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import { EnableDimensions, ResponsibleAi } from "./AiInteractive";
import styles from "./Transformation.module.css";

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
          <Eyebrow size="sm">{eyebrow}</Eyebrow>
          <h1 className={styles.heroTitle}>
            <span>{title}</span>
            <strong>{accent}</strong>
          </h1>
          <p className={styles.heroText} style={textWidth ? { maxWidth: textWidth } : undefined}>
            {text}
          </p>
        </div>
        <PrimaryButton href={ctaHref} arrow>
          {cta}
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
                <Eyebrow tone="white" size="sm">
                  How we enable AI transformation
                </Eyebrow>
                <span className={`${styles.title} ${styles.titleLight}`}>
                  Transformation goes <strong>beyond technology.</strong>
                </span>
              </h2>
            <p className={styles.leadLarge}>
              We bring together five dimensions to move AI from experimentation into the way your business operates.
            </p>
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
    video: "/videos/ait-action-1.mp4",
    ratio: "1514 / 486",
    maxW: 514,
    title: "Rethink how software gets built.",
    text: "Integrate agents across the engineering lifecycle to accelerate planning, development, testing and delivery — with engineers governing the outcomes.",
    cta: "Explore Agentic engineering",
    href: ROUTES.agenticEngineering,
  },
  {
    eyebrow: "Agentic Process Automation",
    video: "/videos/ait-action-2.mp4",
    ratio: "1490 / 548",
    maxW: 449,
    title: "Rethink how work gets done.",
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
          <Eyebrow size="sm">AI transformation in action</Eyebrow>
          <span className={styles.title}>
            Transform how you build.
            <br />
            <strong>Transform how you operate.</strong>
          </span>
        </h2>
        <div className={styles.actions}>
          {ACTION.map((a) => (
            <article key={a.eyebrow} className={styles.action}>
              <p className={styles.actionEyebrow}>{a.eyebrow}</p>
              <div className={styles.actionMedia} style={{ aspectRatio: a.ratio, maxWidth: a.maxW }}>
                <video src={a.video} autoPlay muted loop playsInline preload="metadata" aria-hidden />
              </div>
              <div className={styles.actionBody}>
                <div className={styles.actionCopy}>
                  <h3 className={styles.actionTitle}>{a.title}</h3>
                  <p className={styles.actionText}>{a.text}</p>
                </div>
                <LinkButton href={a.href}>{a.cta}</LinkButton>
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
            <Eyebrow tone="white" size="sm">
              Responsible AI
            </Eyebrow>
            <span className={`${styles.title} ${styles.titleLight}`}>
              Move faster.
              <br />
              <strong>Keep people in control.</strong>
            </span>
          </h2>
          <p className={styles.leadLarge}>
            Governance shouldn&apos;t come after AI. It should be designed into it.
            <br />
            We build human oversight, security, transparency and continuous evaluation into how AI operates.
          </p>
        </div>
        <ResponsibleAi />
        <p className={styles.governor}>Human as governor. In the control room, not on the assembly line.</p>
      </div>
    </section>
  );
}

/* ---------- Business outcomes (2058:33078) ---------- */
const OUTCOMES = [
  { title: "Faster execution", ratio: "928 / 180" },
  { title: "Greater productivity", ratio: "492 / 214" },
  { title: "Lower cost to deliver", ratio: "428 / 296" },
  { title: "Better quality", ratio: "404 / 136" },
  { title: "Greater adaptability", ratio: "474 / 194" },
];

export function AitOutcomes() {
  return (
    <section className={`${styles.white} ${styles.gap}`}>
      <div className={`wrap ${styles.section}`}>
        <Eyebrow size="sm">Business outcomes</Eyebrow>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Beyond efficiency.
            <br />
            <strong>Unlocking new value.</strong>
          </h2>
          <p className={`${styles.leadLarge} ${styles.leadMuted}`}>
            When AI is embedded into how a business operates, the opportunity goes beyond incremental improvements to
            unlock new capabilities, growth, and scalable value creation.
          </p>
        </div>
        <div className={styles.outcomes}>
          {OUTCOMES.map((o, i) => (
            <article key={o.title} className={styles.outcome}>
              <div className={styles.outcomeMedia} style={{ aspectRatio: o.ratio }}>
                <video
                  src={`/videos/ait-results-${i + 1}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                />
              </div>
              <h3 className={styles.outcomeTitle}>{o.title}</h3>
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
              <Eyebrow tone="white" size="sm">
                AspenView AI advantage
              </Eyebrow>
              <span className={`${styles.title} ${styles.titleLight}`}>
                We don&apos;t just advise on AI.
                <br />
                <strong>We&apos;re living it.</strong>
              </span>
            </h2>
            <div className={styles.advantageText}>
              <p>
                We&apos;re applying AI-native thinking across our own business — combining people, processes and agentic
                technology to change how we engineer, deliver and operate.
              </p>
              <p>That experience shapes how we help our clients do the same.</p>
            </div>
          </div>
          <PrimaryButton href={ROUTES.aiNative} arrow className={styles.advantageBtn}>
            Explore AI-Native at AspenView
          </PrimaryButton>
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
        <h2 className={styles.ctaTitle}>{title}</h2>
        {text && <p className={styles.ctaText}>{text}</p>}
      </div>
      <div className={styles.ctaBtn}>
        <PrimaryButton href={ctaHref} arrow>
          {cta}
        </PrimaryButton>
      </div>
    </section>
  );
}
