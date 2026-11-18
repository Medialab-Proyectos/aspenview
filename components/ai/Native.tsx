import { Eyebrow } from "../ui";
import WhyItMatters from "./WhyItMatters";
import t from "./Transformation.module.css";
import styles from "./Native.module.css";

const A = "/assets/ai";

/* ---------- What AI-native means (2061:33411) ---------- */
const MEANING = [
  {
    eyebrow: "THE DESIGN",
    video: "/videos/native-meaning-1.webm",
    height: 192.733,
    title: "AI-Native",
    text: "Processes designed around the combined capabilities of people + AI — rather than simply adding AI to the way work has always been done.",
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
            <Eyebrow size="sm">What AI-native means</Eyebrow>
            <span className={t.title}>
              AI-Native by Design. <strong>Built Around a Smarter Way of Working</strong>
            </span>
          </h2>
          <p className={styles.lead}>
            AI-Native means designing processes around the combined capabilities of people and AI, rather than simply
            adding AI tools to existing ways of working.
          </p>
        </div>
        <div className={styles.meanings}>
          {MEANING.map((m) => (
            <article key={m.title} className={styles.meaning}>
              <p className={styles.meaningEyebrow}>{m.eyebrow}</p>
              <div className={styles.meaningMedia} style={{ height: m.height }}>
                <video src={m.video} autoPlay muted loop playsInline preload="metadata" aria-hidden />
              </div>
              <div className={styles.meaningCopy}>
                <h3 className={styles.meaningTitle}>{m.title}</h3>
                <p className={styles.meaningText}>{m.text}</p>
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
  { title: "Talent", ratio: "1158 / 554", glow: "a" },
  { title: "Readiness", ratio: "1086 / 560", glow: "b" },
  { title: "Engineering", ratio: "1138 / 562", glow: "b" },
  { title: "Delivery", ratio: "1206 / 426", glow: "a" },
  { title: "Quality", ratio: "1028 / 588", glow: "b" },
  { title: "Intelligence", ratio: "1116 / 684", glow: "b" },
];

export function NativeOperating() {
  return (
    <section className={`${t.dark} ${t.gap}`}>
      <div className={`wrap ${t.section}`}>
        <h2 className={t.heading}>
          <Eyebrow tone="white" size="sm">
            AI built into how we work
          </Eyebrow>
          <span className={`${t.title} ${t.titleLight} ${styles.wideTitle}`}>
            Across the AspenView <strong>operating model.</strong>
          </span>
        </h2>
        <div className={styles.ops}>
          {OPS.map((o, i) => (
            <article key={o.title} className={styles.op}>
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
              <h3 className={styles.opTitle}>{o.title}</h3>
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
            <Eyebrow tone="white" size="sm">
              Why it matters
            </Eyebrow>
            <span className={`${t.title} ${t.titleLight}`}>
              Experience that goes
              <br />
              <strong>beyond the theory</strong>
            </span>
          </h2>
          <p className={t.leadLarge}>We face the same questions our clients do.</p>
        </div>
        <WhyItMatters />
        <p className={t.governor}>
          By applying AI to our own operations, we bring practical experience to the transformation we deliver for our
          clients.
        </p>
      </div>
    </section>
  );
}
