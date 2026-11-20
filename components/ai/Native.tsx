import { Eyebrow } from "../ui";
import WhyItMatters from "./WhyItMatters";
import t from "./Transformation.module.css";
import styles from "./Native.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/ai";

/* ---------- What AI-native means (2061:33411) ---------- */
const MEANING = [
  {
    eyebrow: "THE DESIGN",
    video: "/videos/native-meaning-1.webm",
    height: 192.733,
    title: "AI-Native",
    text: "Processes designed around the combined capabilities of people + AI, rather than simply adding AI to the way work has always been done.",
  },
  {
    eyebrow: "THE EXECUTION",
    video: "/videos/native-meaning-2.webm",
    height: 135.583,
    title: "Agentic",
    text: "AI agents operating within those processes to reason, execute and coordinate work.",
  },
];

export function NativeMeaning() {
  return (
    <section className={`${t.white} ${t.gap}`} id="our-approach">
      <div className={`wrap ${t.section} ${styles.meaningSection}`}>
        <div className={`${t.header} ${styles.meaningHeader}`}>
          <h2 className={t.heading}>
            <Eyebrow size="sm"><T>{"What AI-Native Means"}</T></Eyebrow>
            <span className={t.title}><T>{"AI-Native by Design. "}</T><strong><T>{"Built Around a Smarter Way of Working"}</T></strong>
            </span>
          </h2>
          <p className={styles.lead}><T>{"AI-Native means designing processes around the combined capabilities of people and AI, rather than simply adding AI tools to existing ways of working."}</T></p>
        </div>
        <div className={styles.meanings}>
          {MEANING.map((m) => (
            <article key={m.title} className={`${styles.meaning} hover-blue-text`}>
              <p className={styles.meaningEyebrow}><T>{m.eyebrow}</T></p>
              <div className={styles.meaningMedia} style={{ height: m.height }}>
                <video src={m.video} autoPlay muted loop playsInline preload="metadata" aria-hidden />
              </div>
              <div className={styles.meaningCopy}>
                <h3 className={styles.meaningTitle}><T>{m.title}</T></h3>
                <p className={styles.meaningText}><T>{m.text}</T></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AI built into how we work (2061:33421) ---------- */
const OPS = [
  { title: "Talent", ratio: "1158 / 554", glow: "a", body: "Smarter talent alignment." },
  { title: "Readiness", ratio: "1086 / 560", glow: "b", body: "Greater visibility and predictability." },
  { title: "Engineering", ratio: "1138 / 562", glow: "b", body: "Agent-driven delivery." },
  { title: "Delivery", ratio: "1206 / 426", glow: "a", body: "More intelligent execution." },
  { title: "Quality", ratio: "1028 / 588", glow: "b", body: "AI-enabled validation." },
  { title: "Intelligence", ratio: "1116 / 684", glow: "b", body: "Better signals for better decisions." },
];

export function NativeOperating() {
  return (
    <section className={`${t.dark} ${t.gap}`}>
      <div className={`wrap ${t.section}`}>
        <h2 className={t.heading}>
          <Eyebrow tone="white" size="sm"><T>{"AI Built Into How We Work"}</T></Eyebrow>
          <span className={`${t.title} ${t.titleLight} ${styles.wideTitle}`}><T>{"Across the AspenView "}</T><strong><T>{"Operating Model."}</T></strong>
          </span>
        </h2>
        <div className={styles.ops}>
          {OPS.map((o, i) => (
            <article key={o.title} className={`${styles.op} reveal-card`} tabIndex={0}>
              <div className={styles.opMedia}>
                <span className={styles.opGlow} aria-hidden>
                  <img alt="" src={`${A}/ops-glow-${o.glow}.svg`} />
                </span>
                <div className={styles.opVideo} style={{ aspectRatio: o.ratio }}>
                  <video
                    src={`/videos/native-model-${i + 1}.webm`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                  />
                </div>
              </div>
              <div className={styles.opCopy}>
                <h3 className={styles.opTitle}><T>{o.title}</T></h3>
                <div className="reveal-body">
                  <p className={styles.opBody}><T>{o.body}</T></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why it matters (2072:34545) ---------- */
export function NativeWhy() {
  return (
    <section className={t.dark}>
      <div className={`wrap ${t.section}`}>
        <div className={t.header}>
          <h2 className={t.heading}>
            <Eyebrow tone="white" size="sm"><T>{"Why It Matters"}</T></Eyebrow>
            <span className={`${t.title} ${t.titleLight}`}><T>{"Experience That Goes"}</T><br />
              <strong><T>{"Beyond the Theory"}</T></strong>
            </span>
          </h2>
          <p className={t.leadLarge}><T>{"We face the same questions our clients do."}</T></p>
        </div>
        <WhyItMatters />
        <p className={t.governor}><T>{"By applying AI to our own operations, we bring practical experience to the transformation we deliver for our clients."}</T></p>
      </div>
    </section>
  );
}
