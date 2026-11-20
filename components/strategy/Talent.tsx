import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Talent.module.css";

import { T } from "@/components/i18n/T";

/* Strategy → Talent Enablement. Figma frames 3057:26901 (desktop), 3068:53746 (tablet), 3071:54375 (mobile);
   closing CTA 3057:27124. The frames are named "How we deliver" in Figma. */

const A = "/assets/talent";
const V = "/videos";
const TALENT_CONTACT = `${ROUTES.contact}?tab=talent`;

/* Transparent (VP9 alpha) loops from the Figma annotations */
function Loop({ src, className }: { src: string; className?: string }) {
  return (
    <video className={className} src={`${V}/${src}`} autoPlay muted loop playsInline preload="metadata" aria-hidden />
  );
}

/* "01  THE ADVANTAGE" */
function StepLabel({ num, label, tone = "blue" }: { num: string; label: string; tone?: "blue" | "dark" }) {
  return (
    <p className={`${styles.step} ${tone === "dark" ? styles.stepDark : ""}`}>
      <span className={styles.stepNum}><T>{num}</T></span>
      <span><T>{label}</T></span>
    </p>
  );
}

/* ---------- Hero (3057:26904) ---------- */
const STATS = [
  { value: "1,600+", text: "Vetted engineers" },
  { value: "10 in 10", text: "Qualified candidates in 10 business days for most roles" },
  { value: "2 Weeks", text: "To deliver qualified engineering talent" },
];

export function TeHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.heroGlow} aria-hidden>
        <img alt="" src={`${A}/hero-glow.svg`} />
      </span>
      <div className={`wrap ${styles.heroTop}`}>
        <div className={styles.heroCopy}>
          <Eyebrow tone="soft"><T>{"Talent Enablement"}</T></Eyebrow>
          <div className={styles.heroBody}>
            <h1 className={styles.heroTitle}><T>{"Engineering Talent."}</T><br />
              <strong><T>{"Built for What’s Next."}</T></strong>
            </h1>
            <p className={styles.heroText}><T>{"Great engineering starts long before deployment. We combine proactive talent planning, proprietary AI technology, and experienced specialists to help you access, validate, and sustain the expertise your business needs."}</T></p>
          </div>
          <PrimaryButton href={TALENT_CONTACT} arrow className={styles.heroBtn}><T>{"Let’s Talk Talent"}</T></PrimaryButton>
        </div>
        <div className={styles.heroMedia}>
          <Loop src="te-hero.webm" className={styles.fill} />
        </div>
      </div>
      <ul className={`wrap ${styles.stats}`}>
        {STATS.map((s) => (
          <li key={s.value} className={styles.stat}>
            <span className={styles.statValue}><T>{s.value}</T></span>
            <span className={styles.statText}><T>{s.text}</T></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- 01 The advantage (3057:27044, card set 3060:27658: Default → Hover) ---------- */
const ADVANTAGE = [
  { label: "BUILD AHEAD", title: "Anticipate Demand", lower: "Ready Before the Need.", cta: "Explore Build Ahead", href: "#build-ahead", video: "te-adv-1.webm" },
  { label: "PROVE", title: "Validate Expertise", lower: "Precision Behind Every Match.", cta: "Explore Prove", href: "#prove", video: "te-adv-2.webm" },
  { label: "LEAD", title: "Sustain Performance", lower: "Excellence Beyond Day One.", cta: "Explore Lead", href: "#lead", video: "te-adv-3.webm" },
];

export function TeAdvantage() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepLabel num="01" label="The Advantage" />
          <h2 className={styles.title}><T>{"Talent That Moves Business Forward."}</T></h2>
          <p className={styles.lead}><T>{"The right engineering talent takes more than a great match. Our approach connects four strengths: Aureum’s proactive planning, Vantage’s intelligent matching, RevMax’s agile execution, and experienced talent specialists, to turn engineering requirements into sustained delivery performance."}</T><br />
            <br /><T>{"Three connected stages. One talent advantage."}</T></p>
        </div>
        <div className={styles.advScroll}>
          <ul className={styles.advCards}>
            {ADVANTAGE.map((c) => (
              <li key={c.label} className={`${styles.advCard} reveal-card`} tabIndex={0}>
                <div className={styles.advHead}>
                  <span className={styles.advLabel}><T>{c.label}</T></span>
                  <div className={styles.advTitleRow}>
                    <h3 className={styles.advTitle}><T>{c.title}</T></h3>
                    <span className={styles.advIcon} aria-hidden>
                      <img alt="" src={`${A}/add.svg`} width={24} height={24} className={styles.iconAdd} />
                      <img alt="" src={`${A}/minus.svg`} width={24} height={24} className={styles.iconMinus} />
                    </span>
                  </div>
                </div>
                <div className={styles.advMedia}>
                  <Loop src={c.video} className={styles.fill} />
                </div>
                <div className={`${styles.advReveal} reveal-body`}>
                  <div>
                    <div className={styles.advMore}>
                      <img alt="" src={`${A}/card-line.svg`} className={styles.rule} />
                      <p className={styles.advLower}><T>{c.lower}</T></p>
                      <a href={c.href} className={styles.advLink}>
                        <span><T>{c.cta}</T></span>
                        <img alt="" src={`${A}/arrow-right-20.svg`} width={20} height={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 Build ahead (3061:27867) ---------- */
export function TeBuildAhead() {
  return (
    <section className={styles.pale} id="build-ahead">
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepLabel num="02" label="Build Ahead" />
          <h2 className={styles.title}>
            <strong><T>{"Aureum:"}</T></strong><T>{" Role Ready, Offer Ready."}</T><br /><T>{"Ahead of Your Need."}</T></h2>
        </div>
        <div className={styles.aureum}>
          <p className={styles.aureumText}><T>{"AspenView invests ahead of anticipated demand, forecasting talent needs up to 18 months into the future."}</T></p>
          <div className={styles.aureumRow}>
            <div className={styles.aureumMedia}>
              <Loop src="te-aureum.webm" className={styles.fill} />
            </div>
            <p className={`${styles.aureumText} ${styles.aureumNote}`}><T>{"Delivering the right talent exactly when you need it."}</T></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 Prove (3057:27090) ---------- */
const PROVE = [
  { step: "01 IDENTIFY", title: "Relevant Expertise.", video: "te-prove-1.webm" },
  { step: "02 VALIDATE", title: "Proven Capabilities.", video: "te-prove-2.webm" },
  { step: "03 SELECT", title: "Confident Decisions.", video: "te-prove-3.webm" },
];

const PROOF = [
  { value: "15", unit: "SECURITY CHECKS", text: "Identity and fraud verification checks" },
  { value: "10", unit: "DAYS", text: "To present 10 vetted, offer-ready candidates for most roles" },
];

export function TeProve() {
  return (
    <section className={styles.dark} id="prove">
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepLabel num="03" label="Prove" tone="dark" />
          <h2 className={`${styles.title} ${styles.titleLight}`}><T>{"Precision Behind"}</T><br /><T>{"Every Match."}</T></h2>
          <div className={`${styles.lead} ${styles.leadPale}`}>
            <p><T>{"Vantage, our proprietary AI-powered talent intelligence platform, combines intelligent matching with rigorous validation to help you move from identifying relevant expertise to making confident talent decisions."}</T></p>
            <p className={styles.leadStrong}><T>{"From Requirements to Confidence."}</T></p>
          </div>
        </div>
        <div className={styles.proveScroll}>
          <ol className={styles.proveCards}>
            {PROVE.map((p) => (
              <li key={p.step} className={`${styles.proveCard} hover-blue`}>
                <span className={styles.proveStep}><T>{p.step}</T></span>
                <div className={styles.proveMedia}>
                  <Loop src={p.video} className={styles.fill} />
                </div>
                <h3 className={styles.proveTitle}><T>{p.title}</T></h3>
              </li>
            ))}
          </ol>
        </div>
        <ul className={styles.proof}>
          {PROOF.map((p) => (
            <li key={p.unit} className={styles.proofItem}>
              <span className={styles.proofFigure}>
                <span className={styles.proofValue}><T>{p.value}</T></span>
                <span className={styles.proofUnit}><T>{p.unit}</T></span>
              </span>
              <span className={styles.proofText}><T>{p.text}</T></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 04 Lead (3062:28018, card 3066:28087) ---------- */
const LEAD = [
  { title: "ENGINEERING LEADERSHIP", text: "Dedicated oversight and accountability.", video: "te-lead-1.webm" },
  { title: "A+ STANDARDS", text: "Consistent quality and collaboration.", video: "te-lead-2.webm" },
  { title: "CONTINUOUS IMPROVEMENT", text: "Performance that evolves with your needs.", video: "te-lead-3.webm" },
];

export function TeLead() {
  return (
    <section className={styles.white} id="lead">
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepLabel num="04" label="Lead" />
          <h2 className={styles.title}><T>{"Excellence Beyond Day One"}</T></h2>
          <p className={styles.lead}><T>{"Our commitment continues beyond placement. Experienced talent specialists and engineering managers provide the human expertise, accountability, and ongoing performance oversight needed to sustain engineering quality throughout the engagement."}</T></p>
        </div>
        <div className={styles.leadScroll}>
          <ul className={styles.leadCards}>
            {LEAD.map((c) => (
              <li key={c.title} className={`${styles.leadCard} hover-blue-text`}>
                <div className={styles.leadMedia}>
                  <Loop src={c.video} className={styles.fill} />
                </div>
                <div className={styles.leadCopy}>
                  <h3 className={styles.leadTitle}><T>{c.title}</T></h3>
                  <p className={styles.leadText}><T>{c.text}</T></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 60-day guarantee band (3066:28136) ---------- */
export function TeGuarantee() {
  return (
    <section className={styles.guarantee}>
      <div className={styles.guaranteeInner}>
        <div className={styles.badge}>
          <span className={styles.badgeValue}>60</span>
          <span className={styles.badgeText}><T>{"DAY GUARANTEE"}</T></span>
        </div>
        <div className={styles.guaranteeCopy}>
          <h2 className={styles.guaranteeTitle}><T>{"Our Quality Commitment"}</T></h2>
          <p className={styles.guaranteeText}><T>{"If an engineer doesn’t meet A+ Standards within the first 60 days, we provide a vetted replacement."}</T></p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 The impact (3066:28143) ---------- */
const HELP = [
  { title: "Slow or Ineffective Recruiting", text: "Your TA team or vendor can’t keep pace with engineering demand." },
  { title: "Fast Ramp-Up", text: "A new program or migration needs a team in weeks, not quarters." },
  { title: "Attrition Risk", text: "Vetted backups for critical roles turn a resignation into a handover." },
  { title: "Hard-to-Find Skill Combinations", text: "Stack plus industry, such as React engineers with fintech experience." },
  { title: "Cost Pressure, No Quality Loss", text: "Latin American cost, U.S. time-zone overlap, Radford-banded rates." },
  { title: "Vendor Replacement", text: "Move engineers over one for one, with zero knowledge loss (ZeroD™)." },
];

export function TeImpact() {
  return (
    <section className={styles.pale}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <StepLabel num="05" label="The Impact" />
          <h2 className={styles.title}><T>{"Built for Results That Last."}</T></h2>
        </div>
        <div className={styles.impact}>
          <div className={styles.impactMedia}>
            <img alt="" src={`${A}/impact.png`} className={styles.impactImg} />
          </div>
          <div className={styles.impactCol}>
            <div className={styles.helpHead}>
              <h3 className={styles.helpTitle}><T>{"Where We Help"}</T></h3>
              <p className={styles.helpIntro}><T>{"If one of these describes your team, a slow hire is already costing you."}</T></p>
            </div>
            <ul className={styles.help}>
              {HELP.map((h, i) => (
                <li key={h.title} className={styles.helpGroup}>
                  {i > 0 && <img alt="" src={`${A}/divider.svg`} className={styles.rule} />}
                  <div className={`${styles.helpItem} hover-blue-text`}>
                    <span className={styles.helpDot}>
                      <img alt="" src={`${A}/dot.svg`} width={24} height={24} />
                    </span>
                    <div className={styles.helpCopy}>
                      <h4 className={styles.helpItemTitle}><T>{h.title}</T></h4>
                      <p className={styles.helpItemText}><T>{h.text}</T></p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA (3057:27124) ---------- */
export function TeCta() {
  return (
    <section className={styles.cta}>
      <div className={`wrap ${styles.ctaInner}`}>
        <span className={styles.ctaGlow} aria-hidden>
          <img alt="" src={`${A}/cta-glow.svg`} />
        </span>
        <div className={styles.ctaCopy}>
          <h2 className={styles.ctaTitle}><T>{"Your Next Priority. Our Expertise."}</T></h2>
          <p className={styles.ctaText}><T>{"From planning ahead to building high-performing engineering teams, we’re ready to help you move forward."}</T></p>
        </div>
        <PrimaryButton href={TALENT_CONTACT} arrow className={styles.ctaBtn}><T>{"Discuss Your Talent Needs"}</T></PrimaryButton>
      </div>
    </section>
  );
}
