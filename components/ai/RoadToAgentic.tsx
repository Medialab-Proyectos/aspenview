"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MaskIcon } from "../ui";
import styles from "./Agentic.module.css";

import { T } from "@/components/i18n/T";

const ease = [0, 0, 0.58, 1] as const;

/* Componente - The road to agentic (2081:32355): MOUSE_ENTER on a bar, SMART_ANIMATE 0.3s.
   Bar labels follow the page instance; the panel headline is the matching stage from the component variants. */
const STAGES = [
  { label: "Tools & Approach", headline: "Build the Foundation", icon: "road-chip", height: 120 },
  { label: "Governance and Security Protocols", headline: "Govern Usage, Cost and Performance", icon: "road-code", height: 150 },
  { label: "Assisted Coding", headline: "Pilot AI-Enabled Engineering", icon: "road-routing", height: 200 },
  { label: "Agentic Delivery Lifecycle (ADLC)", headline: "Orchestrate Agents Across the SDLC", icon: "road-bulb", height: 250 },
  { label: "Scaled Adoption", headline: "Expand Across Teams and Workflows", icon: "road-widget", height: 300 },
];

export default function RoadToAgentic() {
  const [active, setActive] = useState(0);
  const s = STAGES[active];
  return (
    <div className={styles.road}>
      <div className={styles.bars} role="tablist" aria-label="Stages to agentic engineering">
        {STAGES.map((st, i) => (
          <button
            key={st.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`${styles.barCol} ${i === active ? styles.barActive : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className={styles.barLabel}><T>{st.label}</T></span>
            <span className={styles.bar} style={{ height: st.height }}>
              <MaskIcon src={`/assets/ai/${st.icon}.svg`} size={40} className={styles.barIcon} />
            </span>
          </button>
        ))}
      </div>
      <img alt="" src="/assets/ai/road-line.svg" className={styles.roadLine} />
      <div className={styles.roadFoot}>
        <span className={styles.roadMeta}><T>{s.label}</T></span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.h3
            key={s.headline}
            className={styles.roadHeadline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease }}
          >
            <T>{s.headline}</T>
          </motion.h3>
        </AnimatePresence>
        <span className={styles.roadMeta}><T>{"Explore each stage"}</T></span>
      </div>
    </div>
  );
}
