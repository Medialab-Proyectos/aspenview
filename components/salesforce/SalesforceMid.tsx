"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow, MaskIcon } from "../ui";
import styles from "./SalesforceMid.module.css";

import { T } from "@/components/i18n/T";

const ease = [0, 0, 0.58, 1] as const;

/* ---------- The platform (2156:30855) ---------- */
const STEPS = [
  { title: "Enterprise Data", text: "Systems of record, unified" },
  { title: "Data 360", text: "Zero-copy, real time" },
  { title: "Trusted Context", text: "Governed, permissioned" },
  { title: "Agentforce", text: "Reasoning + action" },
  { title: "Intelligent Actions", text: "Executed in your workflows" },
  { title: "Business Outcomes", text: "Measured, not promised" },
];

export function SfPlatform() {
  return (
    <section className={styles.platform}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.platformHeader}>
          <span className={styles.platformGlow} aria-hidden>
            <img alt="" src="/assets/capabilities/glow.svg" />
          </span>
          <h2 className={styles.heading}>
            <Eyebrow tone="white"><T>{"The Platform"}</T></Eyebrow>
            <span className={styles.titleLight}><T>{"Better Together"}</T></span>
          </h2>
          <p className={styles.leadLight}><T>{"Data powers intelligence. Agentforce turns intelligence into action: one enterprise-ready pipeline from system of record to measurable outcome."}</T></p>
        </div>
        <div className={styles.steps}>
          {[STEPS.slice(0, 3), STEPS.slice(3)].map((row, r) => (
            <div key={r} className={styles.stepRow}>
              {row.map((s, i) => (
                <div key={s.title} className={`${styles.step} hover-blue`}>
                  <div className={styles.stepHead}>
                    <div className={styles.stepNum}>
                      <span>{String(r * 3 + i + 1).padStart(2, "0")}</span>
                      <img alt="" src="/assets/salesforce/platform-line.svg" />
                    </div>
                    <h3 className={styles.stepTitle}><T>{s.title}</T></h3>
                  </div>
                  <p className={styles.stepText}><T>{s.text}</T></p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries (2156:30838) — hover: blue footer; click: open agent list ---------- */
type Agent = [label: string, title: string];
const INDUSTRIES: { name: string; icon: string; tags: string; agents: Agent[] }[] = [
  {
    name: "Financial Services",
    icon: "ind-home",
    tags: "Risk · Compliance · Operations",
    agents: [
      ["Grow", "Automatic Lead Qualification"],
      ["Grow", "Renewals and Account Risk"],
      ["Grow", "Pipeline Hygiene"],
      ["Serve", "Service via WhatsApp"],
      ["Serve", "Contact Center Deflection"],
      ["Serve", "Service with Real Banking Execution"],
      ["Run", "Billing and Disputes"],
      ["Enable", "Technology Help Desk"],
      ["Protect", "Compliance Monitoring"],
    ],
  },
  {
    name: "Technology",
    icon: "ind-chip",
    tags: "Revenue · Support · Product ops",
    agents: [
      ["Grow", "Automatic Lead Qualification"],
      ["Grow", "Renewals and Account Risk"],
      ["Grow", "Pipeline Hygiene"],
      ["Serve", "Service via WhatsApp"],
      ["Serve", "Your Customer's Customer Adoption"],
      ["Enable", "Technology Help Desk"],
    ],
  },
  {
    name: "Retail & Consumer",
    icon: "ind-cart",
    tags: "Service · Personalization · Sales",
    agents: [
      ["Grow", "Field Seller Copilot"],
      ["Grow", "Segmentation and Campaigns"],
      ["Grow", "Pipeline Hygiene"],
      ["Serve", "Service via WhatsApp"],
      ["Serve", "Contact Center Deflection"],
      ["Enable", "Technology Help Desk"],
    ],
  },
  {
    name: "Healthcare",
    icon: "ind-heart",
    tags: "Member service · Workflow · Data",
    agents: [
      ["Grow", "Pipeline Hygiene"],
      ["Serve", "Service via WhatsApp"],
      ["Serve", "Your Customer's Customer Adoption"],
      ["Run", "Technical Response and Quoting"],
      ["Enable", "Technology Help Desk"],
      ["Protect", "Compliance Monitoring"],
    ],
  },
  {
    name: "Manufacturing",
    icon: "ind-building",
    tags: "Operations · Service · Supply chain",
    agents: [
      ["Grow", "Automatic Lead Qualification"],
      ["Grow", "Field Seller Copilot"],
      ["Grow", "Pipeline Hygiene"],
      ["Serve", "Service via WhatsApp"],
      ["Run", "Technical Response and Quoting"],
      ["Enable", "Technology Help Desk"],
    ],
  },
  {
    name: "Telecom",
    icon: "ind-phone",
    tags: "Experience · Sales · Service",
    agents: [
      ["Grow", "Segmentation and Campaigns"],
      ["Grow", "Renewals and Account Risk"],
      ["Grow", "Pipeline Hygiene"],
      ["Serve", "Service via WhatsApp"],
      ["Serve", "Contact Center Deflection"],
      ["Run", "Billing and Disputes"],
      ["Enable", "Technology Help Desk"],
    ],
  },
];

export function SfIndustries() {
  const [open, setOpen] = useState<number | null>(null);
  const ind = open === null ? null : INDUSTRIES[open];
  return (
    <section className={styles.pale} id="industries">
      <div className={`wrap ${styles.section}`}>
        <div className={styles.headerBlock}>
          <h2 className={styles.heading}>
            <Eyebrow><T>{"Industries"}</T></Eyebrow>
            <span className={styles.title}><T>{"Enterprise Experience Where"}</T><br /><T>{"AI Matters"}</T></span>
          </h2>
          <p className={styles.lead}><T>{"Our leadership and teams bring experience from complex enterprise environments, combining business understanding with AI-native execution."}</T></p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {ind === null ? (
            <motion.div
              key="grid"
              className={styles.industries}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              {INDUSTRIES.map((it, i) => (
                <button key={it.name} type="button" className={styles.industry} onClick={() => setOpen(i)}>
                  <span className={styles.industryTop}>
                    <span className={styles.industryNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.industryIcon}>
                      <img alt="" src={`/assets/salesforce/${it.icon}.svg`} width={20} height={20} />
                    </span>
                  </span>
                  <span className={styles.industryBody}>
                    <span className={styles.industryCopy}>
                      <span className={styles.industryAgents}>{it.agents.length}<T>{" Agents"}</T></span>
                      <span className={styles.industryName}><T>{it.name}</T></span>
                      <span className={styles.industryTags}><T>{it.tags}</T></span>
                    </span>
                    <img alt="" src="/assets/salesforce/ind-line.svg" className={styles.industryLine} />
                    <span className={styles.seeMore}>
                      <span><T>{"See what it can do"}</T></span>
                      <MaskIcon src="/assets/salesforce/ind-arrow.svg" size={20} />
                    </span>
                  </span>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={ind.name}
              className={styles.openPanel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
            >
              <div className={styles.openHead}>
                <div className={styles.openRow}>
                  <button type="button" className={styles.backBtn} onClick={() => setOpen(null)}>
                    <img alt="" src="/assets/salesforce/arrow-left-white.svg" width={24} height={24} />
                    <span><T>{"All industries"}</T></span>
                  </button>
                  <div className={styles.openTitle}>
                    <h3><T>{ind.name}</T></h3>
                    <p>{ind.agents.length}<T>{" Agents Available"}</T></p>
                  </div>
                </div>
                <img alt="" src="/assets/salesforce/ind-sep.svg" className={styles.openSep} />
              </div>
              <div className={styles.agents}>
                {ind.agents.map(([label, title], i) => (
                  <article key={`${title}-${i}`} className={styles.agent}>
                    <div className={styles.agentTop}>
                      <div className={styles.agentMeta}>
                        <span className={styles.agentNum}>{String(i + 1).padStart(2, "0")}</span>
                        <span className={styles.agentLabel}><T>{label}</T></span>
                      </div>
                      <h4 className={styles.agentTitle}><T>{title}</T></h4>
                    </div>
                    <div className={styles.agentFoot}>
                      <img alt="" src="/assets/salesforce/agent-line.svg" className={styles.industryLine} />
                      <a href="#use-cases" className={styles.seeMore}>
                        <span><T>{"See what it can do"}</T></span>
                        <MaskIcon src="/assets/salesforce/ind-arrow.svg" size={20} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
