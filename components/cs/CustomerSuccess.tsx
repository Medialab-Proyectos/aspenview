"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import SectionHeader from "../service/SectionHeader";
import styles from "./CustomerSuccess.module.css";

const ease = [0, 0, 0.58, 1] as const;
const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease },
};

/* ---------------- Hero (Figma 2366:19158) ---------------- */
export function CsHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.heroGlowA} aria-hidden>
        <img alt="" src="/assets/cs/glow-84.svg" />
      </span>
      <span className={styles.heroGlowB} aria-hidden>
        <img alt="" src="/assets/cs/glow-86.svg" />
      </span>
      <span className={styles.heroGlowC} aria-hidden>
        <img alt="" src="/assets/cs/glow-85.svg" />
      </span>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <span className={styles.heroEyebrow}>
            <span className={styles.heroLine} />
            <span>Customer success</span>
          </span>
          <h1 className={styles.heroTitle}>
            <span>Retain More Customers.</span>
            <strong>Grow Lasting Relationships.</strong>
          </h1>
          <p className={styles.heroText}>
            Scale your Customer Success capabilities with experienced nearshore professionals who help SaaS and
            technology companies drive product adoption, strengthen retention, and grow customer accounts.
          </p>
        </div>
        <PrimaryButton href={ROUTES.contact} arrow className={styles.heroBtn}>
          Talk to our team
        </PrimaryButton>
      </div>
    </section>
  );
}

/* ---------------- The challenge (Card - the challenge: hover → Opened, 0.3s ease-out) ---------------- */
const CHALLENGES = [
  {
    title: "Talent & Scale",
    subtitle: "Scale Expertise, Not Costs.",
    body: "Experienced Customer Success professionals are costly to recruit and retain in North America. Access qualified nearshore talent to scale your team without the cost of equivalent US-based resources.",
  },
  {
    title: "Customer Retention",
    subtitle: (
      <>
        Turn Customer Relationships Into <br />
        Lasting Loyalty.
      </>
    ),
    body: "Limited engagement and inconsistent support can weaken adoption and increase churn. Proactive Customer Success professionals strengthen relationships, drive product adoption, and protect renewals.",
  },
  {
    title: "Account Growth",
    subtitle: "Unlock More Value From Every Customer.",
    body: "Overstretched teams miss opportunities to deepen relationships and expand existing accounts. Dedicated professionals identify customer needs, demonstrate value, and support upselling and cross-selling.",
  },
];

export function CsChallenge() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.sectionInner} ${styles.center}`}>
        <SectionHeader
          eyebrow="The challenge"
          title="Winning Customers Is Only the Beginning. Retaining Them Drives Growth."
          titleWidth={850}
          text={
            <p>
              For SaaS and technology companies, scaling Customer Success means overcoming three critical challenges:
              talent costs, customer retention, and missed growth opportunities.
            </p>
          }
        />
        <div className={styles.challenge} onMouseLeave={() => setOpen(null)}>
          {CHALLENGES.map((c, i) => (
            <div key={c.title} className={styles.challengeCell}>
              {i > 0 && <img alt="" src="/assets/cs/divider.svg" className={styles.challengeDivider} />}
              <article
                className={`${styles.challengeCard} ${open === i ? styles.challengeOpen : ""}`}
                onMouseEnter={() => setOpen(i)}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className={styles.challengeHead}>
                  <div className={styles.challengeTitleRow}>
                    <h3 className={styles.challengeTitle}>{c.title}</h3>
                    <img alt="" src="/assets/cs/add-dark.svg" width={24} height={24} />
                  </div>
                  <p className={styles.challengeSubtitle}>{c.subtitle}</p>
                </div>
                <div className={styles.reveal} aria-hidden={open !== i}>
                  <p className={styles.challengeBody}>{c.body}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What we do (tabs, ON_CLICK) ---------------- */
const MODELS = [
  {
    label: "Dedicated Talent",
    title: "Dedicated Customer Success Talent",
    text: "Extend your existing team with qualified, bilingual professionals who integrate into your organization, systems, and customer relationships.",
  },
  {
    label: "Managed Teams",
    title: "Managed Customer Success Teams",
    text: "Strengthen your Customer Success operations with dedicated teams, experienced leadership, and structured performance management.",
  },
  {
    label: "Complete Function",
    title: "End-to-End Customer Success Management",
    text: "Build and operate a complete Customer Success function, from defining processes and engagement strategies to managing teams, performance, and continuous improvement.",
  },
];

export function CsWhatWeDo() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const m = MODELS[active];
  return (
    <section className={styles.pale}>
      <div className={`wrap ${styles.sectionInner}`}>
        <div className={styles.headerBlock}>
          <SectionHeader
            eyebrow="What we do"
            title="The Right People. The Expertise to Make Them Successful."
            titleWidth={700}
            text={
              <p>
                AspenView helps technology companies build, strengthen, and scale their Customer Success capabilities
                through experienced nearshore professionals and structured service management.
              </p>
            }
          />
          <div className={styles.expand}>
            <button type="button" className={styles.expandBtn} aria-expanded={expanded} onClick={() => setExpanded((e) => !e)}>
              <span>Support tailored to your team</span>
              <img alt="" src="/assets/cs/add-blue.svg" width={24} height={24} className={expanded ? styles.rotated : ""} />
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.p
                  className={styles.expandText}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                >
                  Whether you need to expand an existing team or establish an entire Customer Success function, we
                  provide the talent, expertise, and operational support to meet your business objectives.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.models}>
          <div className={styles.modelList} role="tablist">
            {MODELS.map((mm, i) => (
              <h3 key={mm.label} className={styles.modelHeading}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`${styles.modelTab} ${i === active ? styles.modelActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.modelLabel}>{mm.label}</span>
                </button>
              </h3>
            ))}
          </div>
          <div className={styles.modelPanel} role="tabpanel">
            <span className={styles.modelGlow} aria-hidden>
              <img alt="" src="/assets/cs/what-glow.svg" />
            </span>
            <video
              className={styles.modelVideo}
              src={`/videos/cs-what-we-do-0${active + 1}.webm`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} className={styles.modelCopy} {...fade}>
                <h4 className={styles.modelTitle}>{m.title}</h4>
                <p className={styles.modelText}>{m.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works (stepper, ON_CLICK) ---------------- */
const STAGES = [
  { label: "Onboard", title: "Onboard", text: "Guide customers through implementation, product education, and initial engagement to accelerate time-to-value." },
  { label: "Drive Adoption", title: "Drive Adoption", text: "Help customers understand and maximize product capabilities, encouraging consistent usage and stronger engagement." },
  { label: "Engage", title: "Engage", text: "Maintain proactive relationships, monitor customer health, address challenges, and demonstrate ongoing value through regular business reviews." },
  { label: "Retain", title: "Retain", text: "Identify potential risks early, strengthen customer satisfaction, and support structured renewal conversations." },
  { label: "Expand", title: "Expand", text: "Recognize opportunities to deliver additional value, support upselling and cross-selling, and strengthen long-term account growth." },
];

export function CsHowItWorks() {
  const [active, setActive] = useState(0);
  const s = STAGES[active];
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.sectionInner} ${styles.center}`}>
        <SectionHeader
          eyebrow="How it works"
          title="Supporting Every Stage of the Customer Relationship."
          titleWidth={556}
          text={
            <p>
              Customer Success requires more than responding to customer needs. It takes proactive engagement throughout
              the customer lifecycle to build lasting relationships and deliver measurable value.
            </p>
          }
        />
        <div className={styles.stages}>
          <div className={styles.stageRow} role="tablist">
            {STAGES.map((st, i) => (
              <h3 key={st.label}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`${styles.stageBtn} ${i === active ? styles.stageActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.stageNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.stageLabel}>{st.label}</span>
                </button>
              </h3>
            ))}
          </div>
          <div className={styles.stageCard} role="tabpanel">
            <video
              className={styles.stageVideo}
              src={`/videos/cs-how-it-works-0${active + 1}.webm`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} className={styles.stageCopy} {...fade}>
                <div className={styles.stageHead}>
                  <p className={styles.stageIndex}>{String(active + 1).padStart(2, "0")}</p>
                  <p className={styles.stageTitle}>{s.title}</p>
                </div>
                <p className={styles.stageText}>{s.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities (pill selectors, ON_CLICK smart animate 0.3s) ---------------- */
const CAPS = [
  { label: "Saas Experience", title: "North American SaaS Experience", text: "Professionals with experience supporting North American SaaS and technology companies, bringing an understanding of their markets, customer expectations, and business environments." },
  { label: "Lifecycle Expertise", title: "Customer Lifecycle Expertise", text: "A comprehensive understanding of the customer journey, from onboarding and adoption to engagement, renewals, and expansion, ensuring proactive support at every stage." },
  { label: "Trained Professionals", title: "Trained Customer Success Professionals", text: "Skilled in Customer Success methodologies, account management processes, customer health monitoring, and the tools required to manage relationships effectively." },
  { label: "Cultural Alignment", title: "Bilingual, Culturally Aligned Talent", text: "English-proficient professionals based in Latin America, working in aligned time zones and equipped to build strong relationships with North American customers." },
  { label: "Service Management", title: "Structured Service Management", text: "Established processes, performance monitoring, and quality assurance practices that support consistent service delivery and accountability." },
  { label: "Scalable Expertise", title: "Scalable Customer Success Expertise", text: "Access to professionals across different experience levels, from Customer Success Managers to senior leaders, with the flexibility to strengthen existing teams or build complete functions." },
];

export function CsCapabilities() {
  const [active, setActive] = useState(0);
  const c = CAPS[active];
  return (
    <section className={styles.dark}>
      <div className={`wrap ${styles.sectionInner} ${styles.center}`}>
        <div className={styles.capsHeader}>
          <span className={styles.capsGlow} aria-hidden>
            <img alt="" src="/assets/capabilities/glow.svg" />
          </span>
          <h2 className={styles.capsHeading}>
            <Eyebrow tone="white">Capabilities</Eyebrow>
            <span className={styles.capsTitle}>Experienced Professionals. Built for Customer Success</span>
          </h2>
          <div className={styles.capsSub}>
            <h3 className={styles.capsSubtitle}>Our Customer Success Expertise</h3>
            <p className={styles.capsText}>
              Our nearshore Customer Success professionals combine industry experience, proven processes, and a deep
              understanding of the customer lifecycle to help SaaS and technology companies strengthen relationships,
              improve retention, and support sustainable growth.
            </p>
          </div>
        </div>
        <div className={styles.capsBody}>
          <div className={styles.pills} role="tablist">
            {CAPS.map((cc, i) => (
              <h4 key={cc.label} className={styles.pillHeading}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`${styles.pill} ${i === active ? styles.pillActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.pillLabel}>{cc.label}</span>
                  <img alt="" src="/assets/icons/arrow-right-white.svg" width={32} height={32} />
                </button>
              </h4>
            ))}
          </div>
          <div className={styles.capCard} role="tabpanel">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} className={styles.capCardInner} {...fade}>
                <img alt="" src={`/assets/cs/capability-${active + 1}.png`} className={styles.capImage} />
                <div className={styles.capCopy}>
                  <h5 className={styles.capTitle}>{c.title}</h5>
                  <p className={styles.capText}>{c.text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
