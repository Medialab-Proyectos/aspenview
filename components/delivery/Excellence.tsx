import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Excellence.module.css";

const A = "/assets/delivery";

/* Numbered eyebrow with 4-segment progress (e.g. "01  A STRONG START ━ ─ ─ ─") */
function StepEyebrow({
  num,
  label,
  step,
  tone = "blue",
  center = false,
}: {
  num: string;
  label: string;
  step: 1 | 2 | 3 | 4;
  tone?: "blue" | "pale" | "dark";
  center?: boolean;
}) {
  return (
    <div className={`${styles.stepEyebrow} ${styles[`tone_${tone}`]} ${center ? styles.stepCenter : ""}`}>
      <span className={styles.stepNum}>{num}</span>
      <span className={styles.stepLabel}>{label}</span>
      <img alt="" src={`${A}/progress-${step}.svg`} width={175} height={3} className={styles.progress} />
    </div>
  );
}

function AospNote() {
  return (
    <p className={styles.note}>
      <img alt="" src={`${A}/check-circle.svg`} width={24} height={24} />
      <span>Powered by AspenView’s Onboarding Success Protocol (AOSP).</span>
    </p>
  );
}

/* ---------- Hero (2923:26405) ---------- */
const STAGES = ["Onboarding", "Client Launch", "Quality at Every Step", "Success That Continues"];

export function ExHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTop}>
        <video
          className={styles.heroVideo}
          src="/videos/delivery-excellence.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <span className={styles.heroShade} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Eyebrow tone="soft">Delivery EXCELLENCE</Eyebrow>
            <h1 className={styles.heroTitle}>
              <span>Excellence</span> at
              <br />
              Every Stage.
            </h1>
            <div className={styles.heroText}>
              <p className={styles.heroSub}>From a confident start to lasting business impact.</p>
              <p>
                We combine structured onboarding, disciplined execution, and continuous oversight to deliver quality and
                measurable results across every IT engagement.
              </p>
            </div>
          </div>
          <PrimaryButton href={ROUTES.contact} className={styles.heroBtn}>
            Contact
          </PrimaryButton>
        </div>
      </div>
      <ol className={styles.stages}>
        {STAGES.map((s, i) => (
          <li key={s} className={styles.stage}>
            <span className={styles.stageNum}>{String(i + 1).padStart(2, "0")}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- 01 Onboarding (2923:26716) ---------- */
const ONBOARD = [
  { icon: "compass", title: "Clear Expectations", text: "Shared goals and responsibilities." },
  { icon: "users", title: "One Connected Team", text: "Coordinated teams and communication." },
  { icon: "course-up", title: "Structured Launch", text: "A clear plan for success." },
];

export function ExOnboarding() {
  return (
    <section className={styles.pale}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepEyebrow num="01" label="A STRONG START" step={1} />
          <h2 className={styles.title}>Onboarding. Aligned from day one.</h2>
          <p className={styles.lead}>
            We align your priorities, teams, and expectations from the start, creating a clear foundation for success.
          </p>
        </div>
        <div className={styles.cards}>
          {ONBOARD.map((c, i) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.ring}>
                  <img alt="" src={`${A}/${c.icon}.svg`} width={32} height={32} />
                </span>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.cardCopy}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardText}>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
        <AospNote />
      </div>
    </section>
  );
}

/* ---------- 02 Client launch (2926:27271 + 2926:27333) ---------- */
export function ExLaunch() {
  return (
    <section className={styles.launch}>
      <img alt="" src={`${A}/launch-bg.png`} className={styles.launchBg} />
      <span className={styles.launchShade} aria-hidden />
      <div className={`wrap ${styles.launchInner}`}>
        <StepEyebrow num="02" label="CLIENT LAUNCH" step={2} tone="pale" center />
        <div className={styles.launchCopy}>
          <h2 className={styles.launchTitle}>A Seamless Client Launch. Built for Continuity.</h2>
          <p className={styles.launchText}>
            From kickoff to operational readiness, our structured Client Launch process aligns teams, technology, and
            responsibilities to ensure a smooth transition and confident delivery from day one.
          </p>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  { title: "Structured Launch Planning", text: "Clear scope, milestones, resources, and responsibilities aligned from the start." },
  { title: "Technical & Team Integration", text: "Teams, workflows, and technical environments ready for execution." },
  { title: "Knowledge Continuity", text: "Structured knowledge transfer to preserve expertise and minimize disruption." },
  { title: "Controlled Transition", text: "Defined handoffs, readiness checkpoints, and a smooth transition into ongoing delivery." },
];

export function ExPillars() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.pillarsSection}`}>
        <div className={styles.pillarsRow}>
          <div className={styles.pillarsMedia}>
            <img alt="" src={`${A}/pillars.png`} className={styles.pillarsImg} />
            <div className={styles.zerod}>
              <span className={styles.zerodIcon}>
                <img alt="" src={`${A}/shield-check.svg`} width={22} height={22} />
              </span>
              <p>ZeroD* supports applicable transitions through structured knowledge transfer and readiness validation.</p>
            </div>
          </div>
          <div className={styles.pillarsCol}>
            <h2 className={styles.pillarsTitle}>Four pillars of a successful launch</h2>
            <ol className={styles.pillars}>
              {PILLARS.map((p, i) => (
                <li key={p.title} className={styles.pillar}>
                  <span className={styles.pillarNum}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.pillarCopy}>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarText}>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <AospNote />
      </div>
    </section>
  );
}

/* ---------- 03 Quality (2926:27339) ---------- */
const QUALITY = [
  { icon: "chart", title: "Measurable Performance", text: "Clear KPIs and regular reviews." },
  { icon: "check-circle-blue", title: "Consistent Quality", text: "Ongoing technical oversight." },
  { icon: "eye", title: "Transparent Governance", text: "Open communication and accountability." },
];

export function ExQuality() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepEyebrow num="03" label="QUALITY AT EVERY STEP" step={3} />
          <h2 className={styles.title}>Quality You Can Measure.</h2>
          <p className={styles.lead}>
            We combine technical oversight, transparent governance, and measurable performance to maintain consistent
            quality.
          </p>
        </div>
        <div className={styles.quality}>
          {QUALITY.map((q, i) => (
            <div key={q.title} className={styles.qualityGroup}>
              {i > 0 && <img alt="" src={`${A}/quality-line.svg`} className={styles.qualityLine} />}
              <div className={styles.qualityRow}>
                <div className={styles.qualityHead}>
                  <span className={styles.ring}>
                    <img alt="" src={`${A}/${q.icon}.svg`} width={32} height={32} />
                  </span>
                  <h3 className={styles.qualityTitle}>{q.title}</h3>
                </div>
                <p className={styles.qualityText}>{q.text}</p>
              </div>
            </div>
          ))}
        </div>
        <AospNote />
      </div>
    </section>
  );
}

/* ---------- 04 Success that continues (2926:27578) ---------- */
const SUCCESS = [
  { icon: "user-check", title: "Responsive Support", text: "Issues resolved with accountability." },
  { icon: "refresh", title: "Continuous Improvement", text: "Feedback turned into action." },
  { icon: "shield-user", title: "Long-Term Partnership", text: "Growing alongside your business." },
];

export function ExSuccess() {
  return (
    <section className={styles.dark}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepEyebrow num="04" label="SUCCESS THAT CONTINUES" step={4} tone="dark" />
          <h2 className={`${styles.title} ${styles.titleLight}`}>Committed Beyond Delivery.</h2>
          <p className={`${styles.lead} ${styles.leadPale}`}>
            We stay connected, anticipate evolving needs, and continuously improve to create lasting value.
          </p>
        </div>
        <div className={styles.success}>
          <article className={styles.successFeature}>
            <img alt="" src={`${A}/success.png`} className={styles.successImg} />
            <span className={styles.successShade} aria-hidden />
            <div className={styles.successTop}>
              <span className={styles.ring}>
                <img alt="" src={`${A}/compass.svg`} width={32} height={32} />
              </span>
              <span className={styles.successNum}>01</span>
            </div>
            <div className={styles.successCopy}>
              <h3 className={styles.successTitle}>Proactive Engagement</h3>
              <p className={styles.successText}>Anticipating what comes next.</p>
            </div>
          </article>
          <div className={styles.successList}>
            {SUCCESS.map((s, i) => (
              <article key={s.title} className={styles.successCard}>
                <div className={styles.successCardMain}>
                  <span className={styles.ringGlass}>
                    <img alt="" src={`${A}/${s.icon}.svg`} width={32} height={32} />
                  </span>
                  <div className={styles.successCardCopy}>
                    <h3 className={styles.successCardTitle}>{s.title}</h3>
                    <p className={styles.successCardText}>{s.text}</p>
                  </div>
                </div>
                <span className={styles.successCardNum}>{String(i + 2).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA (2928:28321) ---------- */
export function ExCta() {
  return (
    <section className={styles.cta}>
      <div className={`wrap ${styles.ctaInner}`}>
        <div className={styles.ctaCopy}>
          <h2 className={styles.ctaTitle}>Ready to make delivery excellence your advantage?</h2>
          <p className={styles.ctaText}>
            Let’s align your teams, protect continuity, and turn disciplined delivery into measurable business impact at
            every stage.
          </p>
        </div>
        <div className={styles.ctaAction}>
          <PrimaryButton href={ROUTES.contact} arrow>
            Let&apos;s talk about your priorities
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
