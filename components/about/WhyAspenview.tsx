import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./About.module.css";

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
          <Eyebrow>WHY ASPENVIEW</Eyebrow>
          <span className={styles.title}>
            One Partnership Built for Speed, Quality
            <br />
            and Measurable Business Impact
          </span>
        </h2>
        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <article key={p.title} className={`${styles.pillar} hover-blue`}>
              <div className={styles.pillarTop}>
                <span className={styles.pillarNum}>{String(i + 1).padStart(2, "0")}</span>
                <img alt="" src={`${A}/${p.icon}.svg`} width={p.w} height={32} />
              </div>
              <div className={styles.pillarCopy}>
                <h3 className={styles.title32}>{p.title}</h3>
                <p className={styles.muted16tight}>{p.text}</p>
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
          <span>{c.label}</span>
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
              <Eyebrow>LEADERSHIP</Eyebrow>
              <span className={styles.title}>
                Leadership That Understands
                <br />
                Your World
              </span>
            </h2>
            <div className={`${styles.muted16} ${styles.paras}`}>
              <p>
                Our leaders have built businesses, transformed global organizations and led technology and operations at
                scale. That experience changes the conversation.
              </p>
              <p>We understand that behind every technology initiative there is:</p>
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
          <PrimaryButton href={ROUTES.leadership} arrow className={styles.btn344}>
            Meet our leadership
          </PrimaryButton>
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
            <Eyebrow tone="white">AI-NATIVE BY DESIGN</Eyebrow>
            <span className={`${styles.title} ${styles.titleLight} ${styles.title750}`}>
              AI isn&apos;t a capability we added to our portfolio. It is part of how we operate.
            </span>
          </h2>
          <p className={styles.white16}>
            We combine human expertise with AI across how we plan, build and deliver, helping teams move faster, make
            better-informed decisions and continuously improve execution.
          </p>
        </div>
        <div className={styles.aiCards}>
          <article className={`${styles.aiCard} ${styles.aiOperate}`}>
            <p className={styles.aiEyebrow}>HOW WE OPERATE · HUMAN EXPERTISE + AI</p>
            <div className={styles.aiFlow}>
              {OPERATE.map((o, i) => (
                <div key={o.title} className={styles.aiFlowItem}>
                  {i > 0 && <img alt="" src={`${A}/ai-chevron.svg`} width={24} height={24} className={styles.aiChevron} />}
                  <div className={styles.aiStage}>
                    <span className={styles.aiRing}>
                      <img alt="" src={`${A}/${o.icon}.svg`} width={50} height={50} />
                    </span>
                    <h3 className={styles.aiStageTitle}>{o.title}</h3>
                    <p className={styles.aiStageText}>{o.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.aiNote}>
              <img alt="" src={`${A}/ai-spark.svg`} width={18} height={18} />
              AI embedded across every stage, not bolted on at the end.
            </p>
          </article>
          <article className={`${styles.aiCard} ${styles.aiSolution}`}>
            <p className={styles.aiEyebrow}>WHEN AI IS THE SOLUTION</p>
            <div className={styles.aiSolutionBody}>
              <h3 className={styles.aiSolutionTitle}>From Opportunity to Practical Implementation</h3>
              <ol className={styles.aiSteps}>
                {SOLUTION.map((s) => (
                  <li key={s}>
                    <span className={styles.aiStepRing}>
                      <img alt="" src={`${A}/ai-code-sm.svg`} width={24} height={24} />
                    </span>
                    <span>{s}</span>
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
              <Eyebrow>TALENT</Eyebrow>
              <span className={styles.title}>Exceptional Talent. Closer to You.</span>
            </h2>
            <div className={`${styles.muted16} ${styles.paras}`}>
              <p>
                Great delivery still depends on great people. We connect our clients with high-caliber engineering, data
                and AI talent across Latin America, combining deep technical expertise with geographic proximity,
                timezone alignment and close collaboration with North American teams.
              </p>
              <p>
                The result is access to the capabilities organizations need without compromising how their teams work
                together.
              </p>
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
            <p className={styles.blue14}>SAME WORKING DAY, SHARED HOURS</p>
            <div className={styles.hoursRows}>
              <div className={styles.hoursRow}>
                <span>North America</span>
                <span className={styles.hoursBar}>
                  <span className={styles.hoursFillDark} />
                </span>
              </div>
              <div className={styles.hoursRow}>
                <span>Latin America (GMT-5)</span>
                <span className={styles.hoursBar}>
                  <span className={styles.hoursFillBlue} />
                </span>
              </div>
              <div className={styles.hoursZones}>
                <span>GMT-4</span>
                <span>GMT-5</span>
                <span>GMT-6</span>
                <span>GMT-7</span>
              </div>
            </div>
            <p className={styles.muted14}>
              Overlapping business hours enable real-time collaboration with North American teams.
            </p>
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
            <Eyebrow>SPEED &amp; QUALITY</Eyebrow>
            <span className={styles.title}>Speed Without Sacrificing Quality</span>
          </h2>
          <p className={`${styles.muted16} ${styles.max700}`}>
            Moving faster only matters if what gets delivered works. Our approach combines rigorous talent selection,
            readiness, quality practices and ongoing delivery support to help clients accelerate execution while
            maintaining the standards their business demands.
          </p>
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
                <p className={styles.stepLabel}>STEP {String(i + 1).padStart(2, "0")}</p>
              </div>
              <div className={styles.stepCopy}>
                <h3 className={styles.title24}>{s.title}</h3>
                <p className={styles.muted16tight}>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.equation}>
          Speed + Quality = <strong>Not a trade-off</strong>
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
              <Eyebrow>ECONOMICS</Eyebrow>
              <span className={styles.title}>Economics That Create Room to Do More</span>
            </h2>
            <p className={styles.muted16}>
              Our Latin American delivery model can provide meaningful total cost of employee (TCE) savings compared with
              equivalent U.S.-based capabilities. But we don&apos;t see cost efficiency as the destination.
            </p>
          </div>
          <p className={styles.econStatement}>We see it as the opportunity to do more with the same investment.</p>
          <ul className={styles.benefits}>
            {BENEFITS.map((b) => (
              <li key={b.title} className={`${styles.benefit} hover-blue`}>
                <img alt="" src={`${A}/${b.icon}.svg`} width={26} height={26} />
                <div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.muted14}>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.econCard}>
          <p className={styles.soft14}>SAME WORKING DAY, SHARED HOURS</p>
          <div className={styles.econChart}>
            <div className={styles.econCol}>
              <div className={`${styles.block} ${styles.blockMuted}`} style={{ paddingBlock: 82 }}>
                Core delivery
              </div>
              <div className={styles.econCaption}>
                <p className={styles.econCaptionTitle}>U.S.-Based Capability</p>
                <p>
                  Same investment,
                  <br />
                  one outcome
                </p>
              </div>
            </div>
            <div className={styles.econCol}>
              <div className={styles.blockStack}>
                <div className={`${styles.block} ${styles.blockBlue}`}>Redirected resources</div>
                <div className={`${styles.block} ${styles.blockBlue}`}>Accelerated priorities</div>
                <div className={`${styles.block} ${styles.blockBlue}`}>Expanded capacity</div>
                <div className={`${styles.block} ${styles.blockMuted}`} style={{ paddingBlock: 50 }}>
                  Core delivery
                </div>
              </div>
              <div className={styles.econCaption}>
                <p className={styles.econCaptionTitle}>AspenView Model</p>
                <p>
                  Same investment,
                  <br />
                  room to do more
                </p>
              </div>
            </div>
          </div>
          <p className={styles.muted14}>Illustrative. Actual savings vary by engagement.</p>
        </div>
      </div>
    </section>
  );
}
