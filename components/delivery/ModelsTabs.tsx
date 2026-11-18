"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Models.module.css";

const A = "/assets/delivery";
const ease = [0, 0, 0.58, 1] as const;

type Model = {
  name: string;
  short: string;
  title: string;
  video: string;
  body: React.ReactNode;
  best: string;
};

const MODELS: Model[] = [
  {
    name: "ADNT™",
    short: "Dedicated Nearshore Talent",
    title: "AspenView Dedicated Nearshore Talent",
    video: "/videos/05-model-adnt.webm",
    body: (
      <>
        <p>
          Skilled IT professionals seamlessly integrated into your teams. What we provide: Dedicated LatAm talent to
          augment your teams.
        </p>
        <p>Key benefits</p>
        <ul>
          <li>Highly skilled professionals tailored to your project needs</li>
          <li>Faster hiring and onboarding</li>
          <li>Lower turnover and higher employee satisfaction</li>
        </ul>
      </>
    ),
    best: "Best for: Expanding internal IT teams with expert resources.",
  },
  {
    name: "AFMS™",
    short: "Functional Managed Services",
    title: "AspenView Functional Managed Services",
    video: "/videos/06-model-afms.webm",
    body: (
      <>
        <p>Specialized managed services to optimize specific IT or data processes.</p>
        <p>What we provide: Focused support for functions such as Quality Assurance or Data Management.</p>
      </>
    ),
    best: "Best for: Organizations looking to optimize specific technology and data functions.",
  },
  {
    name: "ALMS™",
    short: "Lifecycle Managed Services",
    title: "AspenView Lifecycle Managed Services",
    video: "/videos/07-model-alms.webm",
    body: (
      <>
        <p>Comprehensive lifecycle managed services for end-to-end digital transformation.</p>
        <p>
          What we provide: Expert solutions across the technology and data lifecycle to drive efficiency, reduce costs and
          accelerate innovation.
        </p>
      </>
    ),
    best: "Best for: Organizations pursuing end-to-end digital transformation.",
  },
];

/* Componente our service delivery models (2807:25679) — click a tab, SMART_ANIMATE 0.3s */
export default function ModelsTabs() {
  const [active, setActive] = useState(0);
  const m = MODELS[active];
  return (
    <div className={styles.models}>
      <div className={styles.tabs} role="tablist">
        {MODELS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabName}>{t.name}</span>
            <span className={styles.tabText}>{t.short}</span>
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        <div className={styles.panelMedia}>
          <div className={styles.panelVideo}>
            <AnimatePresence initial={false}>
              <motion.video
                key={m.video}
                src={m.video}
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
        <img alt="" src={`${A}/models-divider.svg`} width={20} height={435} className={styles.panelDivider} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={m.name}
            className={styles.panelCopy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease }}
          >
            <h3 className={styles.panelTitle}>{m.title}</h3>
            <div className={styles.panelBody}>{m.body}</div>
            <img alt="" src={`${A}/models-line.svg`} className={styles.panelLine} />
            <p className={styles.panelBest}>{m.best}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
