"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eyebrow, MaskIcon } from "../ui";
import styles from "./Capabilities.module.css";

import { T } from "@/components/i18n/T";

export type Capability = {
  label: string;
  icon: string;
  tag: string;
  text: string;
  chips: string[];
};

export type CapabilitiesData = {
  title: ReactNode;
  subtitle: string;
  text: string;
  items: Capability[];
};

/** "Componente - capabilities": MOUSE_ENTER on a selector → variant, smart animate 0.3s. */
export default function Capabilities({ data }: { data: CapabilitiesData }) {
  const [active, setActive] = useState(0);
  const item = data.items[active];
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.glow} aria-hidden>
            <img alt="" src="/assets/capabilities/glow.svg" />
          </span>
          <h2 className={styles.heading}>
            <Eyebrow tone="white"><T>{"Capabilities"}</T></Eyebrow>
            <span className={styles.title}><T>{data.title}</T></span>
          </h2>
          <div className={styles.sub}>
            <h3 className={styles.subtitle}><T>{data.subtitle}</T></h3>
            <p className={styles.text}><T>{data.text}</T></p>
          </div>
        </div>

        <div className={styles.body}>
          <ul className={styles.list}>
            {data.items.map((it, i) => (
              <li key={it.label}>
                <h4>
                  <button
                    type="button"
                    className={`${styles.item} ${i === active ? styles.itemActive : ""}`}
                    aria-pressed={i === active}
                    onMouseEnter={() => {
                      if (window.matchMedia("(min-width: 1200px)").matches) setActive(i);
                    }}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <MaskIcon src={it.icon} size={32} />
                    <span className={styles.itemLabel}><T>{it.label}</T></span>
                    <img alt="" src="/assets/icons/arrow-right-white.svg" width={32} height={32} className={styles.arrowDesktop} />
                    <img
                      alt=""
                      src={`/assets/capabilities/arrow-${i === active ? "up" : "down"}.svg`}
                      width={32}
                      height={32}
                      className={styles.arrowAccordion}
                    />
                  </button>
                </h4>
                {i === active && <Detail item={it} active={i} className={styles.cardInline} />}
              </li>
            ))}
          </ul>

          <Detail item={item} active={active} className={styles.cardDesktop} />
        </div>
      </div>
    </section>
  );
}

/** Detail card; on tablet/mobile it opens inline under the active selector (Figma 1638:24070). */
function Detail({ item, active, className }: { item: Capability; active: number; className: string }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <span className={styles.cardGlow} aria-hidden>
        <img alt="" src="/assets/capabilities/card-glow.svg" />
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          className={styles.cardContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
        >
          <div className={styles.cardTop}>
            <span className={styles.ring}>
              <MaskIcon src={item.icon} size={50} />
            </span>
            <p className={styles.tag}><T>{item.tag}</T></p>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardCopy}>
              <p className={styles.cardTitle}><T>{item.label}</T></p>
              <p className={styles.cardText}><T>{item.text}</T></p>
            </div>
            <ul className={styles.chips}>
              {item.chips.map((c, i) => (
                <li key={`${c}-${i}`} className={styles.chip}>
                  <img alt="" src="/assets/icons/dot-bright.svg" width={6} height={6} />
                  <T>{c}</T>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
