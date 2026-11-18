"use client";

import { useState, type ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import { MaskIcon } from "../ui";
import styles from "./HowItWorks.module.css";

export type HowItWorksData = {
  title: ReactNode;
  text: ReactNode;
  steps: { icon: string; title: string; body: string; items: string; line?: string }[];
  note: { label: string; text: string };
};

/**
 * "Componente - How it works": each step ("Desplegable - how it works") goes
 * Closed → Opened on hover, smart animate 0.3s ease-out.
 */
export default function HowItWorks({ data }: { data: HowItWorksData }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <SectionHeader eyebrow="How it works" title={data.title} text={data.text} />
        <div className={styles.body}>
          <ol className={styles.steps} onMouseLeave={() => setOpen(null)}>
            {data.steps.map((s, i) => {
              const isOpen = open === i;
              const line = s.line ?? "/assets/how/line.svg";
              return (
                <li
                  key={s.title}
                  className={`${styles.step} ${isOpen ? styles.open : ""}`}
                  onMouseEnter={() => setOpen(i)}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className={styles.stepTop}>
                    <span className={styles.glow} aria-hidden>
                      <img alt="" src="/assets/how/glow.svg" />
                    </span>
                    <img alt="" src={line} className={styles.line} />
                    <span className={styles.iconBox}>
                      <MaskIcon src={s.icon} size={48} />
                    </span>
                    <img alt="" src={line} className={styles.line} />
                  </div>
                  <div className={styles.stepBottom}>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <div className={styles.reveal} aria-hidden={!isOpen}>
                      <div className={styles.revealInner}>
                        <p className={styles.stepBody}>{s.body}</p>
                        <p className={styles.stepItems}>{s.items}</p>
                      </div>
                    </div>
                    <img alt="" src="/assets/how/arrow-right-down.svg" className={styles.arrow} />
                  </div>
                </li>
              );
            })}
          </ol>

          <div className={styles.note}>
            <div className={styles.noteLabel}>
              <img alt="" src="/assets/how/shield-check-white.svg" width={40} height={40} />
              <span>{data.note.label}</span>
            </div>
            <p className={styles.noteText}>{data.note.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
