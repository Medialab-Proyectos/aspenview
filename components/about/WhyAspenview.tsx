import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./About.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/about";

/* ---------- One partnership (1877:15054) ---------- */
const PILLARS = [
  { icon: "pillar-energy", w: 63, title: "Speed", text: "Senior teams that start fast, decide fast and ship in weeks, not quarters." },
  { icon: "pillar-spark", w: 32, title: "Quality", text: "Engineering rigor and craft that hold up under real business pressure." },
  { icon: "pillar-diagram", w: 32, title: "Business Impact", text: "Every engagement tied to an outcome someone is accountable for." },
];

export function WhyPillars() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.section}`}>
        <h2 className={styles.heading}>
          <Eyebrow><T>{"WHY ASPENVIEW"}</T></Eyebrow>
          <span className={styles.title}><T>{"One Partnership Built for Speed, Quality"}</T><br /><T>{"and Measurable Business Impact"}</T></span>
        </h2>
        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <article key={p.title} className={styles.pillar}>
              <div className={styles.pillarTop}>
                <span className={styles.pillarNum}>{String(i + 1).padStart(2, "0")}</span>
                <img alt="" src={`${A}/${p.icon}.svg`} width={p.w} height={32} />
              </div>
              <div className={styles.pillarCopy}>
                <h3 className={styles.title32}><T>{p.title}</T></h3>
                <p className={styles.muted16tight}><T>{p.text}</T></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Chip grid used by Leadership + Talent blocks ---------- */
function Chips({ items, iconSize }: { items: { icon: string; label: string }[]; iconSize: number }) {
  return (
    <ul className={styles.chips}>
      {items.map((c) => (
        <li key={c.label} className={styles.chip}>
          <img alt="" src={`${A}/${c.icon}.svg`} width={iconSize} height={iconSize} />
          <span><T>{c.label}</T></span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Leadership that understands your world (1877:15210) ---------- */
export function WhyLeadership() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.leadRow}`}>
        <img
          alt="We don’t start with what we can sell. We start with what you need to achieve: how we open every conversation."
          src={`${A}/leadership-globe.png`}
          className={styles.globe}
        />
        <div className={styles.leadCopy}>
          <div className={styles.headerTight}>
            <h2 className={styles.heading}>
              <Eyebrow><T>{"LEADERSHIP"}</T></Eyebrow>
              <span className={styles.title}><T>{"Leadership That Understands"}</T><br /><T>{"Your World"}</T></span>
            </h2>
            <div className={`${styles.muted16} ${styles.paras}`}>
              <p><T>{"Our leaders have built businesses, transformed global organizations and led technology and operations at scale. That experience changes the conversation."}</T></p>
              <p><T>{"We understand that behind every technology initiative there is:"}</T></p>
            </div>
          </div>
          <Chips
            iconSize={18}
            items={[
              { icon: "lead-flag", label: "A business objective" },
              { icon: "lead-calendar", label: "A timeline" },
              { icon: "lead-money", label: "A budget" },
              { icon: "lead-user-check", label: "An outcome someone is accountable for" },
            ]}
          />
          <PrimaryButton href={ROUTES.leadership} arrow className={styles.btn344}><T>{"Meet our leadership"}</T></PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- AI-native by design (1877:15103) ---------- */
const OPERATE = [
  { icon: "ai-compass", title: "Plan", text: "Better-informed decisions" },
  { icon: "ai-code", title: "Build", text: "Teams move faster" },
  { icon: "ai-plain", title: "Deliver", text: "Continuously improve execution" },
];
const SOLUTION = ["01 Strategy", "02 Data foundations", "03 Intelligent agents", "04 Engineering"];

export function WhyAiNative() {
  return (
    <section className={styles.dark}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.headerTight}>
          <h2 className={styles.heading}>
            <Eyebrow tone="white"><T>{"AI-NATIVE BY DESIGN"}</T></Eyebrow>
            <span className={`${styles.title} ${styles.titleLight} ${styles.title750}`}><T>{"AI isn't a capability we added to our portfolio. It is part of how we operate."}</T></span>
          </h2>
          <p className={styles.white16}><T>{"We combine human expertise with AI across how we plan, build and deliver, helping teams move faster, make better-informed decisions and continuously improve execution."}</T></p>
        </div>
        <div className={styles.aiCards}>
          <article className={`${styles.aiCard} ${styles.aiOperate}`}>
            <p className={styles.aiEyebrow}><T>{"HOW WE OPERATE · HUMAN EXPERTISE + AI"}</T></p>
            <div className={styles.aiFlow}>
              {OPERATE.map((o, i) => (
                <div key={o.title} className={styles.aiFlowItem}>
                  {i > 0 && <img alt="" src={`${A}/ai-chevron.svg`} width={24} height={24} className={styles.aiChevron} />}
                  <div className={styles.aiStage}>
                    <span className={styles.aiRing}>
                      <img alt="" src={`${A}/${o.icon}.svg`} width={50} height={50} />
                    </span>
                    <h3 className={styles.aiStageTitle}><T>{o.title}</T></h3>
                    <p className={styles.aiStageText}><T>{o.text}</T></p>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.aiNote}>
              <img alt="" src={`${A}/ai-spark.svg`} width={18} height={18} /><T>{"AI embedded across every stage, not bolted on at the end."}</T></p>
          </article>
          <article className={`${styles.aiCard} ${styles.aiSolution}`}>
            <p className={styles.aiEyebrow}><T>{"WHEN AI IS THE SOLUTION"}</T></p>
            <div className={styles.aiSolutionBody}>
              <h3 className={styles.aiSolutionTitle}><T>{"From Opportunity to Practical Implementation"}</T></h3>
              <ol className={styles.aiSteps}>
                {SOLUTION.map((s) => (
                  <li key={s}>
                    <span className={styles.aiStepRing}>
                      <img alt="" src={`${A}/ai-code-sm.svg`} width={24} height={24} />
                    </span>
                    <span><T>{s}</T></span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Talent (1880:16884) ---------- */
export function WhyTalent() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.talentRow}`}>
        <div className={styles.talentCopy}>
          <div className={styles.headerTight}>
            <h2 className={styles.heading}>
              <Eyebrow><T>{"TALENT"}</T></Eyebrow>
              <span className={styles.title}><T>{"Exceptional Talent. Closer to You."}</T></span>
            </h2>
            <div className={`${styles.muted16} ${styles.paras}`}>
              <p><T>{"Great delivery still depends on great people. We connect our clients with high-caliber engineering, data and AI talent across Latin America, combining deep technical expertise with geographic proximity, timezone alignment and close collaboration with North American teams."}</T></p>
              <p><T>{"The result is access to the capabilities organizations need without compromising how their teams work together."}</T></p>
            </div>
          </div>
          <Chips
            iconSize={24}
            items={[
              { icon: "talent-chip", label: "Deep technical expertise" },
              { icon: "talent-map", label: "Geographic proximity" },
              { icon: "talent-clock", label: "Timezone alignment" },
              { icon: "talent-chat", label: "Close collaboration" },
            ]}
          />
        </div>
        <div className={styles.talentCard}>
          <img alt="" src={`${A}/talent.jpg`} className={styles.talentPhoto} />
          <div className={styles.talentHours}>
            <p className={styles.blue14}><T>{"SAME WORKING DAY, SHARED HOURS"}</T></p>
            <div className={styles.hoursRows}>
              <div className={styles.hoursRow}>
                <span><T>{"North America"}</T></span>
                <span className={styles.hoursBar}>
                  <span className={styles.hoursFillDark} />
                </span>
              </div>
              <div className={styles.hoursRow}>
                <span><T>{"Latin America (GMT-5)"}</T></span>
                <span className={styles.hoursBar}>
                  <span className={styles.hoursFillBlue} />
                </span>
              </div>
              <div className={styles.hoursZones}>
                <span><T>{"GMT-4"}</T></span>
                <span><T>{"GMT-5"}</T></span>
                <span><T>{"GMT-6"}</T></span>
                <span><T>{"GMT-7"}</T></span>
              </div>
            </div>
            <p className={styles.muted14}><T>{"Overlapping business hours enable real-time collaboration with North American teams."}</T></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Speed & quality (1885:17354) ---------- */
const STEPS = [
  { icon: "step-magnifer", title: "Rigorous Talent Selection", text: "We select for depth, not availability." },
  { icon: "step-clipboard", title: "Readiness", text: "Teams arrive prepared to contribute from day one." },
  { icon: "step-shield", title: "Quality Practices", text: "Standards embedded in how we build, test and ship." },
  { icon: "step-help", title: "Ongoing Delivery Support", text: "Continuous support to keep execution on track." },
];

export function WhySpeed() {
  return (
    <section className={styles.pale}>
      <div className={`wrap ${styles.section} ${styles.sectionGutter}`}>
        <div className={styles.headerTight}>
          <h2 className={styles.heading}>
            <Eyebrow><T>{"SPEED & QUALITY"}</T></Eyebrow>
            <span className={styles.title}><T>{"Speed Without Sacrificing Quality"}</T></span>
          </h2>
          <p className={`${styles.muted16} ${styles.max700}`}><T>{"Moving faster only matters if what gets delivered works. Our approach combines rigorous talent selection, readiness, quality practices and ongoing delivery support to help clients accelerate execution while maintaining the standards their business demands."}</T></p>
        </div>
        <ol className={styles.steps}>
          {STEPS.map((s, i) => (
            <li key={s.title} className={`${styles.step} hover-blue-text`}>
              <div className={styles.stepHead}>
                <div className={styles.stepTrack}>
                  <span className={styles.stepRing}>
                    <img alt="" src={`${A}/${s.icon}.svg`} width={22} height={22} />
                  </span>
                  <img alt="" src={`${A}/step-line.svg`} className={styles.stepLine} />
                </div>
                <p className={styles.stepLabel}><T>{"STEP "}</T>{String(i + 1).padStart(2, "0")}</p>
              </div>
              <div className={styles.stepCopy}>
                <h3 className={styles.title24}><T>{s.title}</T></h3>
                <p className={styles.muted16tight}><T>{s.text}</T></p>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.equation}><T>{"Speed + Quality = "}</T><strong><T>{"Not a trade-off"}</T></strong>
        </p>
      </div>
    </section>
  );
}

/* ---------- Economics (1889:17755) ---------- */
const BENEFITS = [
  { icon: "econ-scale", title: "Deep Technical Expertise", text: "Add the people and skills your roadmap needs." },
  { icon: "econ-energy", title: "Accelerate Priorities", text: "Bring critical initiatives forward." },
  { icon: "econ-routing", title: "Redirect Resources", text: "Fund the initiatives that matter most." },
];

export function WhyEconomics() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.econRow}`}>
        <div className={styles.econCopy}>
          <div className={styles.headerTight}>
            <h2 className={styles.heading}>
              <Eyebrow><T>{"ECONOMICS"}</T></Eyebrow>
              <span className={styles.title}><T>{"Economics That Create Room to Do More"}</T></span>
            </h2>
            <p className={styles.muted16}><T>{"Our Latin American delivery model can provide meaningful total cost of employee (TCE) savings compared with equivalent U.S.-based capabilities. But we don't see cost efficiency as the destination."}</T></p>
          </div>
          <p className={styles.econStatement}><T>{"We see it as the opportunity to do more with the same investment."}</T></p>
          <ul className={styles.benefits}>
            {BENEFITS.map((b) => (
              <li key={b.title} className={`${styles.benefit} hover-tint`}>
                <img alt="" src={`${A}/${b.icon}.svg`} width={26} height={26} />
                <div>
                  <h3 className={styles.benefitTitle}><T>{b.title}</T></h3>
                  <p className={styles.muted14}><T>{b.text}</T></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.econCard}>
          <p className={styles.soft14}><T>{"SAME WORKING DAY, SHARED HOURS"}</T></p>
          <div className={styles.econChart}>
            <div className={styles.econCol}>
              <div className={`${styles.block} ${styles.blockMuted}`} style={{ paddingBlock: 82 }}><T>{"Core delivery"}</T></div>
              <div className={styles.econCaption}>
                <p className={styles.econCaptionTitle}><T>{"U.S.-Based Capability"}</T></p>
                <p><T>{"Same investment,"}</T><br /><T>{"one outcome"}</T></p>
              </div>
            </div>
            <div className={styles.econCol}>
              <div className={styles.blockStack}>
                <div className={`${styles.block} ${styles.blockBlue}`}><T>{"Redirected resources"}</T></div>
                <div className={`${styles.block} ${styles.blockBlue}`}><T>{"Accelerated priorities"}</T></div>
                <div className={`${styles.block} ${styles.blockBlue}`}><T>{"Expanded capacity"}</T></div>
                <div className={`${styles.block} ${styles.blockMuted}`} style={{ paddingBlock: 50 }}><T>{"Core delivery"}</T></div>
              </div>
              <div className={styles.econCaption}>
                <p className={styles.econCaptionTitle}><T>{"AspenView Model"}</T></p>
                <p><T>{"Same investment,"}</T><br /><T>{"room to do more"}</T></p>
              </div>
            </div>
          </div>
          <p className={styles.muted14}><T>{"Illustrative. Actual savings vary by engagement."}</T></p>
        </div>
      </div>
    </section>
  );
}
