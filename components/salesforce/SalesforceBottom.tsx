import { Eyebrow, LinkButton, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./SalesforceBottom.module.css";

/* ---------- How we deliver (2398:29026) ---------- */
const PHASES = [
  { title: "Discover", text: "Goals, constraints, and current state.", ai: "AI-assisted discovery & opportunity sizing" },
  { title: "Design", text: "Architecture and agent guardrails.", ai: "AI-generated options, senior-reviewed" },
  { title: "Build", text: "Agents, data models, integrations.", ai: "Agents pair-program alongside our engineers" },
  { title: "Deploy", text: "Release through enterprise quality gates.", ai: "Automated testing & quality gates" },
  { title: "Optimize", text: "Monitor, refine, and expand capabilities.", ai: "Continuous AI-driven monitoring & tuning" },
];

export function SfDeliver() {
  return (
    <section className={styles.dark}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow tone="white">How We Deliver</Eyebrow>
            <span className={styles.titleLight}>
              From Strategy to Production. <strong>Faster.</strong>
            </span>
          </h2>
          <p className={styles.leadLight}>Go from defined use case to production-ready execution in as little as 10 days.</p>
        </div>
        <div className={styles.pill}>
          <img alt="" src="/assets/salesforce/energy.svg" width={24} height={24} />
          <span>AI-native at every step, not just the finished product</span>
        </div>
        <div className={styles.deliver}>
          <div className={styles.phases}>
            {PHASES.map((p, i) => (
              <div key={p.title} className={styles.phase}>
                <div className={styles.phaseHead}>
                  <p className={styles.phaseNum}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={styles.phaseTitle}>{p.title}</h3>
                </div>
                <div className={styles.phaseCopy}>
                  <p className={styles.phaseText}>{p.text}</p>
                  <p className={styles.phaseAi}>{p.ai}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.timelineWrap}>
            <div className={styles.timeline}>
              <div className={styles.week1}>
                <p className={styles.weekLabel}>WEEK 1</p>
                <p>Discover · Design · Build</p>
              </div>
              <div className={styles.week2}>
                <p className={styles.weekLabel}>WEEK 2</p>
                <p>Build · Deploy</p>
              </div>
              <div className={styles.ongoing}>
                <p className={styles.weekLabel}>ONGOING</p>
                <p>Optimize</p>
              </div>
            </div>
            <p className={styles.timelineNote}>
              Illustrative timeline for a single-agent quick start; actual pacing depends on scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Use cases (2405:29188) ---------- */
const USES = [
  { icon: "uc-course-up", title: "Grow", cta: "Accelerate Growth", items: ["Sales qualification", "Pipeline intelligence", "Account research", "Next-best action"] },
  { icon: "uc-chat-line", title: "Serve", cta: "Elevate Customer Experience", items: ["Customer support", "Case resolution", "Employee support", "Voice agents"] },
  { icon: "uc-plain", title: "Run", cta: "Optimize Operations", items: ["Workflow automation", "Approvals", "Operations", "Document processing"] },
  { icon: "uc-hourglass", title: "Enable", cta: "Empower Your Teams", items: ["Knowledge assistants", "Productivity", "Internal support"] },
  { icon: "uc-shield", title: "Protect", cta: "Strengthen Business Resilience", items: ["Compliance", "Monitoring", "Finance", "Risk"] },
];

export function SfUseCases() {
  return (
    <section className={styles.white} id="use-cases">
      <div className={`wrap ${styles.section} ${styles.center}`}>
        <h2 className={styles.heading}>
          <Eyebrow>Use Cases</Eyebrow>
          <span className={styles.title}>AI Agents, Built Around the Business.</span>
        </h2>
        <div className={styles.uses}>
          {USES.map((u, i) => (
            <article key={u.title} className={`${styles.use} hover-blue-text`}>
              <div className={styles.useTop}>
                <span className={styles.useIcon}>
                  <img alt="" src={`/assets/salesforce/${u.icon}.svg`} width={26} height={26} />
                </span>
                <span className={styles.useNum}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.useTitle}>{u.title}</h3>
              <ul className={styles.useList}>
                {u.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <LinkButton href={`${ROUTES.contact}?tab=partner&need=${u.title.toLowerCase()}`} className={styles.useCta}>
                {u.cta}
              </LinkButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Quick starts (2430:29130) ---------- */
const QUICK = [
  {
    icon: "qs-course-up",
    name: "SDR Agent",
    cta: "Get Your SDR Agent",
    text: "Qualifies inbound leads, routes them to the right rep, and never lets a hot opportunity go cold.",
    items: ["Automated lead qualification & scoring", "Smart routing to the right AE", "24/7 first-touch response"],
  },
  {
    icon: "qs-chat-line",
    name: "Customer Service Agent",
    cta: "Get Your Service Agent",
    text: "Categorizes tickets, answers FAQs, and deflects volume so your team can focus on the complex cases.",
    items: ["Automatic case categorization & routing", "Instant FAQ resolution", "Reduced handle time & ticket backlog"],
  },
  {
    icon: "qs-clock",
    name: "Collections Agent",
    cta: "Get Your Collections Agent",
    text: "Recovers overdue receivables through smart, empathetic outreach, at scale.",
    items: ["Automated multi-channel outreach", "Payment plan negotiation", "Higher recovery rates, lower cost"],
  },
];

export function SfQuickStarts() {
  return (
    <section className={styles.pale} id="quick-starts">
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow>Quick Starts</Eyebrow>
            <span className={styles.title}>Agents, Ready to Deploy</span>
          </h2>
          <p className={`${styles.lead} ${styles.leadFull}`}>
            Three production-ready Agentforce quick starts: fixed scope, fixed timeline. Live in your Salesforce org in 10
            days.
          </p>
        </div>
        <div className={styles.quick}>
          {QUICK.map((q, i) => (
            <article key={q.name} className={`${styles.qs} hover-blue-text`}>
              <div className={styles.qsMain}>
                <div className={styles.qsHead}>
                  <span className={styles.qsIcon}>
                    <img alt="" src={`/assets/salesforce/${q.icon}.svg`} width={30} height={30} />
                  </span>
                  <div className={styles.qsName}>
                    <p className={styles.qsEyebrow}>QUICK START {String(i + 1).padStart(2, "0")}</p>
                    <h3>{q.name}</h3>
                  </div>
                </div>
                <img alt="" src="/assets/salesforce/qs-line.svg" className={styles.qsLine} />
                <div className={styles.qsBody}>
                  <p className={styles.qsText}>{q.text}</p>
                  <ul className={styles.qsList}>
                    {q.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.qsFoot}>
                <img alt="" src="/assets/salesforce/qs-line.svg" className={styles.qsLine} />
                <div className={styles.qsFootRow}>
                  <div>
                    <p className={styles.qsTimelineLabel}>TIMELINE</p>
                    <p className={styles.qsTimeline}>10 Days</p>
                  </div>
                  <PrimaryButton href={`${ROUTES.contact}?tab=partner`} arrow className={styles.qsCta}>
                    {q.cta}
                  </PrimaryButton>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.note}>
          <img alt="" src="/assets/salesforce/info-circle.svg" width={24} height={24} />
          <p>
            All quick starts deploy on top of your existing Salesforce org: fixed scope, fixed timeline, production-ready.
            Data 360 add-ons available.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA (2156:30871) — "Traditional vs AspenView" comparison removed (Excel 59) ---------- */

export function SfCta() {
  return (
    <section className={styles.cta}>
      <div className={`wrap ${styles.ctaInner}`}>
        <div className={styles.ctaCopy}>
          <span className={styles.ctaGlow} aria-hidden>
            <img alt="" src="/assets/salesforce/cta-glow.svg" />
          </span>
          <Eyebrow tone="white">Why clients accelerate with AspenView</Eyebrow>
          <h2 className={styles.ctaTitle}>Ready to Build Your AI Workforce?</h2>
          <p className={styles.ctaText}>
            Enterprise AI isn&apos;t just about choosing the right platform; it&apos;s about choosing the right
            implementation partner.
          </p>
        </div>
        <div className={styles.ctaBtn}>
          <PrimaryButton href={`${ROUTES.contact}?tab=partner`}>Talk to Our Salesforce Experts</PrimaryButton>
        </div>
        <p className={styles.ctaFoot}>Faster to production. Built for enterprise. Designed to scale.</p>
      </div>
    </section>
  );
}
