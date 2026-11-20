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
                  How We Enable AI Transformation
                </Eyebrow>
                <span className={`${styles.title} ${styles.titleLight}`}>
                  Transformation Goes <strong>Beyond Technology.</strong>
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
          <Eyebrow size="sm">AI Transformation in Action</Eyebrow>
          <span className={styles.title}>
            Transform How You Build.
            <br />
            <strong>Transform How You Operate.</strong>
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
              Move Faster.
              <br />
              <strong>Keep People in Control.</strong>
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
        <Eyebrow size="sm">Business outcomes</Eyebrow>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Beyond Efficiency.
            <br />
            <strong>Unlocking New Value.</strong>
          </h2>
          <p className={`${styles.leadLarge} ${styles.leadMuted}`}>
            When AI is embedded into how a business operates, the opportunity goes beyond incremental improvements to
            unlock new capabilities, growth, and scalable value creation.
          </p>
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
                <h3 className={styles.outcomeTitle}>{o.title}</h3>
                <div className="reveal-body">
                  <p className={styles.outcomeBody}>{o.body}</p>
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
              <Eyebrow tone="white" size="sm">
                AspenView AI Advantage
              </Eyebrow>
              <span className={`${styles.title} ${styles.titleLight}`}>
                We Don&apos;t Just Advise on AI.
                <br />
                <strong>We&apos;re Living It.</strong>
              </span>
            </h2>
            <div className={styles.advantageText}>
              <p>
                We&apos;re applying AI-native thinking across our own business, combining people, processes and agentic
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
