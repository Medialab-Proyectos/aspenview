"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Native.module.css";

import { T } from "@/components/i18n/T";

const ease = [0, 0, 0.58, 1] as const;
const A = "/assets/ai";

/* Componente - Why it matters (2074:35779): click opens one question (SMART_ANIMATE 0.3s),
   the card on the right follows; "Closed" shows the first answer. */
const QUESTIONS = [
  {
    icon: "why-widget",
    q: "Where Should AI Act?",
    title: "Give Agents a Clear Scope.",
    text: "Identify work where agents can reason, execute and coordinate within a defined process.",
    video: "/videos/native-meaning-2.webm",
  },
  {
    icon: "why-user",
    q: "Where Should People Decide?",
    title: "Keep Judgment With People.",
    text: "Make the moments for human direction, review and decisions explicit.",
    video: "/videos/native-model-1.webm",
  },
  {
    icon: "why-routing",
    q: "What Needs to Change Around It?",
    title: "Redesign the Way Work Connects.",
    text: "Bring people, processes and information together so AI becomes part of how work gets done.",
    video: "/videos/native-meaning-1.webm",
  },
  {
    icon: "why-shield",
    q: "How Do We Keep It Governed?",
    title: "Build Control Into the Process.",
    text: "Define oversight and validation around the actions agents take.",
    video: "/videos/native-model-5.webm",
  },
];

export default function WhyItMatters() {
  const [open, setOpen] = useState<number | null>(null);
  const shown = QUESTIONS[open ?? 0];
  return (
    <div className={styles.why}>
      <div className={styles.whyList}>
        {QUESTIONS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className={`${styles.whyItem} ${isOpen ? styles.whyItemOpen : ""}`}>
              <h3>
                <button
                  type="button"
                  className={styles.whyRow}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={styles.whyIcon}>
                    <img alt="" src={`${A}/${item.icon}.svg`} width={32} height={32} />
                  </span>
                  <span className={styles.whyQ}><T>{item.q}</T></span>
                  <img alt="" src={`${A}/${isOpen ? "why-minus" : "why-add"}.svg`} width={24} height={24} />
                </button>
              </h3>
              <div className={styles.whyReveal}>
                <div className={styles.whyRevealInner}>
                  <div className={styles.whyAnswer}>
                    <p className={styles.whyAnswerTitle}><T>{item.title}</T></p>
                    <p><T>{item.text}</T></p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.whyCard}>
        <div className={styles.whyCardHead}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={shown.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease }}
            >
              <T>{shown.title}</T>
            </motion.p>
          </AnimatePresence>
        </div>
        <div className={styles.whyCardMedia}>
          <div className={styles.whyVideo}>
            <AnimatePresence initial={false}>
              <motion.video
                key={shown.video}
                src={shown.video}
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
    </div>
  );
}
