"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./AiJourney.module.css";

import { T } from "@/components/i18n/T";

// Figma component set "Selector ai native" (1345:8324) — 4 variants
const ITEMS = [
  {
    label: "Strategy",
    icon: "/assets/icons/compass-white.svg",
    bigIcon: "/assets/icons/compass-dark.svg",
    tag: "Impact / Novelty",
    text: "AI projects pay off when they’re chosen for impact, not novelty. We align initiatives with measurable business objectives, then build the data and engineering foundation to make them real.",
  },
  {
    label: "Data Foundation",
    icon: "/assets/icons/database-white.svg",
    bigIcon: "/assets/icons/database-dark.svg",
    tag: "Trust / governance",
    text: "AI can only perform as well as the data beneath it. We unify, govern, and structure enterprise data so models can operate with accuracy, context, and trust.",
  },
  {
    label: "Engineering",
    icon: "/assets/icons/chip-white.svg",
    bigIcon: "/assets/icons/chip-dark.svg",
    tag: "Production / scale",
    text: "We build the applications, platforms, and integrations that move AI from prototype to production, securely, reliably, and at enterprise scale.",
  },
  {
    label: "Intelligent Agents",
    icon: "/assets/icons/share-circle-white.svg",
    bigIcon: "/assets/icons/share-circle-dark.svg",
    tag: "Automation / autonomy",
    text: "We design intelligent systems that reason across real workflows, coordinate tools, and remove repetitive work while keeping people in control of consequential decisions.",
  },
];

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: [0, 0, 0.58, 1] as const },
};

function Panel({ item, compact }: { item: (typeof ITEMS)[number]; compact?: boolean }) {
  return (
    <div className={compact ? styles.panelCompact : styles.panelInner}>
      <div className={styles.panelTop}>
        <img alt="" src={item.bigIcon} width={48} height={48} />
        <p className={styles.panelTag}><T>{item.tag}</T></p>
      </div>
      <div className={styles.panelBody}>
        <h5 className={styles.panelTitle}><T>{item.label}</T></h5>
        <p className={styles.panelText}><T>{item.text}</T></p>
      </div>
    </div>
  );
}

export default function AiJourney() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <section className={`sp64 ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow tone="white"><T>{"AI Native"}</T></Eyebrow>
            <span className={styles.title}><T>{"Enterprise "}</T><br className={styles.br} /><T>{"AI Journey"}</T></span>
          </h2>
          <div className={styles.sub}>
            <h3 className={styles.subtitle}><T>{"AI-Native by Design"}</T></h3>
            <p className={styles.lead}><T>{"We help organizations move from AI ambition to operational impact connecting transformation, data, engineering and intelligent automation."}</T></p>
            <PrimaryButton href={ROUTES.aiTransformation} arrow className={styles.cta}><T>{"Put AI to Work"}</T></PrimaryButton>
          </div>
        </div>

        {/* Desktop: selector + detail card */}
        <div className={styles.selector}>
          <div className={styles.list}>
            {ITEMS.map((it, i) => (
              <h4 key={it.label} className={styles.itemHeading}>
                <button
                  type="button"
                  className={`${styles.item} ${i === active ? styles.itemActive : ""}`}
                  aria-expanded={i === active}
                  onClick={() => setActive(i)}
                >
                  <img alt="" src={it.icon} width={32} height={32} />
                  <span className={styles.itemLabel}><T>{it.label}</T></span>
                  <img alt="" src="/assets/icons/arrow-right-white.svg" width={32} height={32} />
                </button>
              </h4>
            ))}
          </div>
          <div className={styles.panel}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} className={styles.panelMotion} {...fade}>
                <Panel item={ITEMS[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet / mobile: accordion ("Selector ai native - Tablet") */}
        <div className={styles.accordion}>
          {ITEMS.map((it, i) => {
            const open = openMobile === i;
            return (
              <div key={it.label} className={styles.accItem}>
                <h4 className={styles.itemHeading}>
                  <button
                    type="button"
                    className={`${styles.accBtn} ${open ? styles.itemActive : ""}`}
                    aria-expanded={open}
                    onClick={() => setOpenMobile(open ? null : i)}
                  >
                    <img alt="" src={it.icon} width={28} height={28} />
                    <span className={styles.itemLabel}><T>{it.label}</T></span>
                    <img
                      alt=""
                      src={open ? "/assets/icons/arrow-up-white.svg" : "/assets/icons/arrow-down-white.svg"}
                      width={32}
                      height={32}
                    />
                  </button>
                </h4>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className={styles.accPanel}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
                    >
                      <Panel item={it} compact />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
