import { Eyebrow, LinkButton, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./SalesforceBottom.module.css";

import { T } from "@/components/i18n/T";

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
            <Eyebrow tone="white"><T>{"How We Deliver"}</T></Eyebrow>
            <span className={styles.titleLight}><T>{"From Strategy to Production. "}</T><strong><T>{"Faster."}</T></strong>
            </span>
          </h2>
          <p className={styles.leadLight}><T>{"Go from defined use case to production-ready execution in as little as 10 days."}</T></p>
        </div>
        <div className={styles.pill}>
          <img alt="" src="/assets/salesforce/energy.svg" width={24} height={24} />
          <span><T>{"AI-native at every step, not just the finished product"}</T></span>
        </div>
        <div className={styles.deliver}>
          <div className={styles.phases}>
            {PHASES.map((p, i) => (
              <div key={p.title} className={styles.phase}>
                <div className={styles.phaseHead}>
                  <p className={styles.phaseNum}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={styles.phaseTitle}><T>{p.title}</T></h3>
                </div>
                <div className={styles.phaseCopy}>
                  <p className={styles.phaseText}><T>{p.text}</T></p>
                  <p className={styles.phaseAi}><T>{p.ai}</T></p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.timelineWrap}>
            <div className={styles.timeline}>
              <div className={styles.week1}>
                <p className={styles.weekLabel}><T>{"WEEK 1"}</T></p>
                <p><T>{"Discover · Design · Build"}</T></p>
              </div>
              <div className={styles.week2}>
                <p className={styles.weekLabel}><T>{"WEEK 2"}</T></p>
                <p><T>{"Build · Deploy"}</T></p>
              </div>
              <div className={styles.ongoing}>
                <p className={styles.weekLabel}><T>{"ONGOING"}</T></p>
                <p><T>{"Optimize"}</T></p>
              </div>
            </div>
            <p className={styles.timelineNote}><T>{"Illustrative timeline for a single-agent quick start; actual pacing depends on scope."}</T></p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Use cases (2405:29188) ---------- */
const USES = [
  { icon: "uc-course-up", title: "Grow", cta: "Accelerate Growth", items: ["Sales qualification", "Pipeline intelligence", "Account research", "Next-best action"] },
  { icon: "uc-chat-line", title: "Serve", cta: "Elevate Experience", items: ["Customer support", "Case resolution", "Employee support", "Voice agents"] },
  { icon: "uc-plain", title: "Run", cta: "Optimize Operations", items: ["Workflow automation", "Approvals", "Operations", "Document processing"] },
  { icon: "uc-hourglass", title: "Enable", cta: "Empower Teams", items: ["Knowledge assistants", "Productivity", "Internal support"] },
  { icon: "uc-shield", title: "Protect", cta: "Strengthen Resilience", items: ["Compliance", "Monitoring", "Finance", "Risk"] },
];

export function SfUseCases() {
  return (
    <section className={styles.white} id="use-cases">
      <div className={`wrap ${styles.section} ${styles.center}`}>
        <h2 className={styles.heading}>
          <Eyebrow><T>{"Use Cases"}</T></Eyebrow>
          <span className={styles.title}><T>{"AI Agents, Built Around the Business."}</T></span>
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
              <h3 className={styles.useTitle}><T>{u.title}</T></h3>
              <ul className={styles.useList}>
                {u.items.map((it) => (
                  <li key={it}><T>{it}</T></li>
                ))}
              </ul>
              <LinkButton href={`${ROUTES.contact}?tab=partner&need=${u.title.toLowerCase()}`} className={styles.useCta}>
                <T>{u.cta}</T>
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
            <Eyebrow><T>{"Quick Starts"}</T></Eyebrow>
            <span className={styles.title}><T>{"Agents, Ready to Deploy"}</T></span>
          </h2>
          <p className={`${styles.lead} ${styles.leadFull}`}><T>{"Three production-ready Agentforce quick starts: fixed scope, fixed timeline. Live in your Salesforce org in 10 days."}</T></p>
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
                    <p className={styles.qsEyebrow}><T>{"QUICK START "}</T>{String(i + 1).padStart(2, "0")}</p>
                    <h3><T>{q.name}</T></h3>
                  </div>
                </div>
                <img alt="" src="/assets/salesforce/qs-line.svg" className={styles.qsLine} />
                <div className={styles.qsBody}>
                  <p className={styles.qsText}><T>{q.text}</T></p>
                  <ul className={styles.qsList}>
                    {q.items.map((it) => (
                      <li key={it}><T>{it}</T></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.qsFoot}>
                <img alt="" src="/assets/salesforce/qs-line.svg" className={styles.qsLine} />
                <div className={styles.qsFootRow}>
                  <div>
                    <p className={styles.qsTimelineLabel}><T>{"TIMELINE"}</T></p>
                    <p className={styles.qsTimeline}><T>{"10 Days"}</T></p>
                  </div>
                  <PrimaryButton href={`${ROUTES.contact}?tab=partner`} arrow className={styles.qsCta}>
                    <T>{q.cta}</T>
                  </PrimaryButton>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.note}>
          <img alt="" src="/assets/salesforce/info-circle.svg" width={24} height={24} />
          <p><T>{"All quick starts deploy on top of your existing Salesforce org: fixed scope, fixed timeline, production-ready. Data 360 add-ons available."}</T></p>
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
          <Eyebrow tone="white"><T>{"Why clients accelerate with AspenView"}</T></Eyebrow>
          <h2 className={styles.ctaTitle}><T>{"Ready to Build Your AI Workforce?"}</T></h2>
          <p className={styles.ctaText}><T>{"Enterprise AI isn't just about choosing the right platform; it's about choosing the right implementation partner."}</T></p>
        </div>
        <div className={styles.ctaBtn}>
          <PrimaryButton href={`${ROUTES.contact}?tab=partner`}><T>{"Talk to Our Salesforce Experts"}</T></PrimaryButton>
        </div>
        <p className={styles.ctaFoot}><T>{"Faster to production. Built for enterprise. Designed to scale."}</T></p>
      </div>
    </section>
  );
}
