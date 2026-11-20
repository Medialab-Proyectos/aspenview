import { Eyebrow } from "../ui";
import RoadToAgentic from "./RoadToAgentic";
import t from "./Transformation.module.css";
import n from "./Native.module.css";
import styles from "./Agentic.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/ai";

/* ---------- The shift (2077:31489) ---------- */
export function AeShift() {
  return (
    <section className={`${t.white} ${t.gap}`} id="the-shift">
      <div className={`wrap ${t.section}`}>
        <div className={`${t.header} ${n.meaningHeader}`}>
          <h2 className={t.heading}>
            <Eyebrow size="sm"><T>{"The Shift"}</T></Eyebrow>
            <span className={t.title}><T>{"Beyond "}</T><strong><T>{"the Coding Assistant"}</T></strong>
            </span>
          </h2>
          <p className={n.lead}><T>{"Human in control. Always. An iterative loop, from plan to ship and back."}</T></p>
        </div>
        <div className={n.meanings}>
          <article className={`${n.meaning} ${styles.shiftCard}`}>
            <p className={n.meaningEyebrow}><T>{"AI-ASSISTED CODING"}</T></p>
            <div className={styles.shiftMedia} style={{ height: 118.524 }}>
              <video src="/videos/ae-shift-1.webm" autoPlay muted loop playsInline preload="metadata" aria-hidden />
            </div>
            <div className={styles.shiftBody}>
              <div className={n.meaningCopy}>
                <h3 className={n.meaningTitle}><T>{"One Developer. A Faster Workflow."}</T></h3>
                <p className={n.meaningText}><T>{"AI helps a developer write, understand and improve code."}</T></p>
              </div>
              <div className={styles.flow}>
                <span><T>{"DEVELOPER"}</T></span>
                <span className={styles.flowArrows}>
                  <img alt="" src={`${A}/shift-arrow-left.svg`} width={24} height={24} />
                  <img alt="" src={`${A}/shift-arrow-right.svg`} width={24} height={24} />
                </span>
                <span><T>{"ASSISTANT"}</T></span>
              </div>
            </div>
          </article>
          <article className={`${n.meaning} ${styles.shiftCard}`}>
            <p className={n.meaningEyebrow}><T>{"AGENTIC ENGINEERING"}</T></p>
            <div className={styles.shiftMedia} style={{ height: 81.35 }}>
              <video src="/videos/ae-shift-2.webm" autoPlay muted loop playsInline preload="metadata" aria-hidden />
            </div>
            <div className={styles.shiftBody}>
              <div className={n.meaningCopy}>
                <h3 className={n.meaningTitle}><T>{"People and Agents. A New Lifecycle."}</T></h3>
                <p className={n.meaningText}><T>{"Redesign the engineering lifecycle around people and agents working together."}</T></p>
              </div>
              <div className={styles.flow}>
                {["PLAN", "BUILD", "VALIDATE", "SHIP"].map((step, i) => (
                  <span key={step} className={styles.flowStep}>
                    {i > 0 && <img alt="" src={`${A}/shift-arrow-right.svg`} width={24} height={24} />}
                    <span><T>{step}</T></span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- The road to Agentic Engineering (2077:31499) ---------- */
export function AeRoad() {
  return (
    <section className={`${t.dark} ${t.gap}`}>
      <div className={`wrap ${t.section}`}>
        <h2 className={t.heading}>
          <Eyebrow tone="white" size="sm"><T>{"The Road to Agentic Engineering"}</T></Eyebrow>
          <span className={`${t.title} ${t.titleLight} ${n.wideTitle}`}><T>{"Transform at the Pace "}</T><strong><T>{"You’re Ready For"}</T></strong>
          </span>
        </h2>
        <RoadToAgentic />
      </div>
    </section>
  );
}

/* ---------- Where it creates value (2113:36177) ---------- */
const VALUE = [
  { icon: "value-pc", title: "Software Engineering", body: "Accelerate feature delivery." },
  { icon: "value-course-up", title: "Data Engineering, BI & AI", body: "Move from idea to working software faster." },
  { icon: "value-routing", title: "Agentic Process Automation", body: "Understand and transform legacy systems." },
  { icon: "value-check", title: "Customer Success", body: "Increase coverage and identify defects earlier." },
];

export function AeValue() {
  return (
    <section className={`${t.white} ${t.gap}`}>
      <div className={`wrap ${t.section}`}>
        <h2 className={t.heading}>
          <Eyebrow size="sm"><T>{"Where It Creates Value"}</T></Eyebrow>
          <span className={`${t.title} ${styles.valueTitle}`}><T>{"Built for Real "}</T><strong><T>{"Engineering Challenges"}</T></strong>
          </span>
        </h2>
        <div className={t.outcomes}>
          {VALUE.map((v) => (
            <article key={v.title} className={`${t.outcome} ${styles.valueCard} reveal-card hover-blue-text`} tabIndex={0}>
              <img alt="" src={`${A}/${v.icon}.svg`} width={36} height={36} />
              <div className={t.outcomeCopy}>
                <h3 className={t.outcomeTitle}><T>{v.title}</T></h3>
                <div className="reveal-body">
                  <p className={t.outcomeBody}><T>{v.body}</T></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- The AspenView advantage (2113:36464) ---------- */
const ADVANTAGE = [
  {
    icon: "adv-chip",
    tag: "AGENT-DRIVEN",
    title: "Work That Moves Together",
    text: "Connect people, process, context and technology across delivery.",
  },
  {
    icon: "adv-user",
    tag: "HUMAN-GOVERNED",
    title: "Direction Stays With People",
    text: "Keep quality, security and outcomes under human control.",
  },
  {
    icon: "adv-routing",
    tag: "BUILT AROUND YOU",
    title: "Grounded in Your Environment",
    text: "Bring your processes, context and technology into the way agents work.",
  },
];

export function AeAdvantage() {
  return (
    <section className={`${t.dark} ${t.gap}`}>
      <span className={styles.advGlow} aria-hidden>
        <img alt="" src={`${A}/adv-glow.svg`} />
      </span>
      <div className={`wrap ${t.section}`}>
        <div className={`${t.header} ${n.meaningHeader}`}>
          <h2 className={t.heading}>
            <Eyebrow tone="white" size="sm"><T>{"The AspenView Advantage"}</T></Eyebrow>
            <span className={`${t.title} ${t.titleLight}`}><T>{"We Know How to Use"}</T><br /><T>{"Agents, "}</T><strong><T>{"Not Just Tools"}</T></strong>
            </span>
          </h2>
          <p className={styles.advLead}><T>{"The value isn’t in running a coding agent."}</T><br /><T>{"It’s knowing how to orchestrate agents across the delivery lifecycle."}</T></p>
        </div>
        <div className={styles.advCards}>
          {ADVANTAGE.map((a) => (
            <article key={a.title} className={`${styles.advCard} hover-blue`}>
              <span className={styles.advCardGlow} aria-hidden>
                <img alt="" src={`${A}/adv-card-glow.svg`} />
              </span>
              <div className={styles.advTop}>
                <span className={styles.advRing}>
                  <img alt="" src={`${A}/${a.icon}.svg`} width={50} height={50} />
                </span>
                <span className={styles.advTag}><T>{a.tag}</T></span>
              </div>
              <div className={styles.advCopy}>
                <h3 className={styles.advTitle}><T>{a.title}</T></h3>
                <p className={styles.advText}><T>{a.text}</T></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
