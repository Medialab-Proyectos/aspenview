"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Transformation.module.css";

import { T } from "@/components/i18n/T";

const ease = [0, 0, 0.58, 1] as const;

/* ---------- Componente - how we enable AI (2218:39135) — MOUSE_ENTER swaps the card ---------- */
const DIMENSIONS = [
  { label: "Organization", icon: "dim-user", lead: "Prepare people for AI-augmented work.", accent: "People direct. Agents execute" },
  { label: "Process", icon: "dim-routing", lead: "Redesign how work gets done.", accent: "One coordinated workflow." },
  { label: "Technology & Tools", icon: "dim-chip", lead: "Connect the right AI capabilities.", accent: "Capabilities working together." },
  { label: "Data Readiness", icon: "dim-database", lead: "Create trusted, AI-ready context.", accent: "Validated, AI-ready context." },
  { label: "AI Ops", icon: "dim-shield", lead: "Govern security, cost and performance.", accent: "Operations within guardrails." },
];

export function EnableDimensions({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const d = DIMENSIONS[active];
  return (
    <div className={styles.enable}>
      <div className={styles.enableCol}>
        {children}
        <div className={styles.dims} role="tablist" aria-label="AI transformation dimensions">
        {DIMENSIONS.map((dim, i) => (
          <button
            key={dim.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`${styles.dim} ${i === active ? styles.dimActive : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <T>{dim.label}</T>
          </button>
        ))}
        </div>
      </div>
      <div className={styles.dimCard} role="tabpanel">
        <div className={styles.dimHead}>
          <img alt="" src={`/assets/ai/${d.icon}.svg`} width={36} height={36} />
          <div className={styles.dimCopy}>
            <h3 className={styles.dimTitle}><T>{d.label}</T></h3>
            <p className={styles.dimText}>
              <T>{d.lead}</T>
              <br />
              <span><T>{d.accent}</T></span>
            </p>
          </div>
        </div>
        <div className={styles.dimMedia}>
          <AnimatePresence initial={false}>
            <motion.video
              key={active}
              src={`/videos/ait-foundation-${active + 1}.webm`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ---------- Componente - responsable ai (2047:12230) — MOUSE_ENTER, SMART_ANIMATE 0.3s ---------- */
const PRINCIPLES = [
  { title: "Human Governance", text: "People remain accountable for critical decisions." },
  { title: "Security by Design", text: "Access and controls are built in." },
  { title: "Transparent Performance", text: "AI-enabled processes remain observable." },
  { title: "Continuous Evaluation", text: "Performance and guardrails evolve together." },
];

export function ResponsibleAi() {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.resp}>
      <div className={styles.respList} role="tablist" aria-label="Responsible AI principles">
        {PRINCIPLES.map((p, i) => (
          <h3 key={p.title} className={styles.respItemWrap}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`${styles.respItem} ${i === active ? styles.respItemActive : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span><T>{p.title}</T></span>
              <img alt="" src="/assets/icons/arrow-right-light.svg" width={24} height={24} />
            </button>
          </h3>
        ))}
      </div>
      <div className={styles.respCard} role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active}
            className={styles.respText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease }}
          >
            <T>{PRINCIPLES[active].text}</T>
          </motion.p>
        </AnimatePresence>
        <div className={styles.respMedia}>
          <AnimatePresence initial={false}>
            <motion.video
              key={active}
              src={`/videos/ait-responsible-${active + 1}.webm`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
