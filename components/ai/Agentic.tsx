import { Eyebrow } from "../ui";
import RoadToAgentic from "./RoadToAgentic";
import t from "./Transformation.module.css";
import n from "./Native.module.css";
import styles from "./Agentic.module.css";

const A = "/assets/ai";

/* ---------- The shift (2077:31489) ---------- */
export function AeShift() {
  return (
    <section className={`${t.white} ${t.gap}`} id="the-shift">
      <div className={`wrap ${t.section}`}>
        <div className={`${t.header} ${n.meaningHeader}`}>
          <h2 className={t.heading}>
            <Eyebrow size="sm">The Shift</Eyebrow>
            <span className={t.title}>
              Beyond <strong>the Coding Assistant</strong>
            </span>
          </h2>
          <p className={n.lead}>Human in control. Always. An iterative loop, from plan to ship and back.</p>
        </div>
        <div className={n.meanings}>
          <article className={`${n.meaning} ${styles.shiftCard}`}>
            <p className={n.meaningEyebrow}>AI-ASSISTED CODING</p>
            <div className={styles.shiftMedia} style={{ height: 118.524 }}>
              <video src="/videos/ae-shift-1.webm" autoPlay muted loop playsInline preload="metadata" aria-hidden />
            </div>
            <div className={styles.shiftBody}>
              <div className={n.meaningCopy}>
                <h3 className={n.meaningTitle}>One Developer. A Faster Workflow.</h3>
                <p className={n.meaningText}>AI helps a developer write, understand and improve code.</p>
              </div>
              <div className={styles.flow}>
                <span>DEVELOPER</span>
                <span className={styles.flowArrows}>
                  <img alt="" src={`${A}/shift-arrow-left.svg`} width={24} height={24} />
                  <img alt="" src={`${A}/shift-arrow-right.svg`} width={24} height={24} />
                </span>
                <span>ASSISTANT</span>
              </div>
            </div>
          </article>
          <article className={`${n.meaning} ${styles.shiftCard}`}>
            <p className={n.meaningEyebrow}>AGENTIC ENGINEERING</p>
            <div className={styles.shiftMedia} style={{ height: 81.35 }}>
              <video src="/videos/ae-shift-2.webm" autoPlay muted loop playsInline preload="metadata" aria-hidden />
            </div>
            <div className={styles.shiftBody}>
              <div className={n.meaningCopy}>
                <h3 className={n.meaningTitle}>People and Agents. A New Lifecycle.</h3>
                <p className={n.meaningText}>
                  Redesign the engineering lifecycle around people and agents working together.
                </p>
              </div>
              <div className={styles.flow}>
                {["PLAN", "BUILD", "VALIDATE", "SHIP"].map((step, i) => (
                  <span key={step} className={styles.flowStep}>
                    {i > 0 && <img alt="" src={`${A}/shift-arrow-right.svg`} width={24} height={24} />}
                    <span>{step}</span>
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
          <Eyebrow tone="white" size="sm">
            The Road to Agentic Engineering
          </Eyebrow>
          <span className={`${t.title} ${t.titleLight} ${n.wideTitle}`}>
            Transform at the Pace <strong>You’re Ready For</strong>
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
          <Eyebrow size="sm">Where It Creates Value</Eyebrow>
          <span className={`${t.title} ${styles.valueTitle}`}>
            Built for Real <strong>Engineering Challenges</strong>
          </span>
        </h2>
        <div className={t.outcomes}>
          {VALUE.map((v) => (
            <article key={v.title} className={`${t.outcome} ${styles.valueCard} reveal-card hover-blue-text`} tabIndex={0}>
              <img alt="" src={`${A}/${v.icon}.svg`} width={36} height={36} />
              <div className={t.outcomeCopy}>
                <h3 className={t.outcomeTitle}>{v.title}</h3>
                <div className="reveal-body">
                  <p className={t.outcomeBody}>{v.body}</p>
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
            <Eyebrow tone="white" size="sm">
              The AspenView Advantage
            </Eyebrow>
            <span className={`${t.title} ${t.titleLight}`}>
              We Know How to Use
              <br />
              Agents, <strong>Not Just Tools</strong>
            </span>
          </h2>
          <p className={styles.advLead}>
            The value isn’t in running a coding agent.
            <br />
            It’s knowing how to orchestrate agents across the delivery lifecycle.
          </p>
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
                <span className={styles.advTag}>{a.tag}</span>
              </div>
              <div className={styles.advCopy}>
                <h3 className={styles.advTitle}>{a.title}</h3>
                <p className={styles.advText}>{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
