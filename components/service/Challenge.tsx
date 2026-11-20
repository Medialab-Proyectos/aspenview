"use client";

import { useState, type ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./Challenge.module.css";

import { T } from "@/components/i18n/T";

type Graphic = { src: string; inset?: string; opacity?: number };

type Expanded = { title: ReactNode; text: string; tags: string[] };

export type ChallengeData = {
  title: ReactNode;
  text: ReactNode;
  /** First card — open by default. `label`/`shortTitle`/`shortText` are its collapsed state. */
  main: { image: Graphic; title: ReactNode; text: string; tags: string[]; label: string; shortTitle: string; shortText: string };
  /** Other cards — collapsed by default; `expanded` is what they show once hovered / tapped. */
  side: { label: string; image: Graphic; title: string; text: string; expanded: Expanded }[];
};

type Card = { label: string; image: Graphic; short: { title: string; text: string }; open: Expanded };

function GraphicImg({ g }: { g: Graphic }) {
  return (
    <span className={styles.graphicImg} style={{ inset: g.inset ?? "0", opacity: g.opacity }}>
      <img alt="" src={g.src} />
    </span>
  );
}

/**
 * "The challenge" section + "Componente - The challenge" (Figma set 1748:10350, mobile 1793:10760).
 * Prototype: MOUSE_ENTER on a card → that card becomes the open one (SMART_ANIMATE ease-out 0.3s);
 * on touch the same change happens ON_CLICK.
 */
export default function Challenge({ data }: { data: ChallengeData }) {
  const [active, setActive] = useState(0);

  const cards: Card[] = [
    {
      label: data.main.label,
      image: data.main.image,
      short: { title: data.main.shortTitle, text: data.main.shortText },
      open: { title: data.main.title, text: data.main.text, tags: data.main.tags },
    },
    ...data.side.map((s) => ({ label: s.label, image: s.image, short: { title: s.title, text: s.text }, open: s.expanded })),
  ];

  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <SectionHeader eyebrow="The challenge" title={data.title} text={data.text} />
        <div className={styles.cards}>
          {cards.map((c, i) => {
            const isOpen = i === active;
            return (
              <article
                key={c.label}
                className={`${styles.card} ${isOpen ? styles.open : ""}`}
                onMouseEnter={() => {
                  // hover only for real pointers; touch devices use the tap below
                  if (window.matchMedia("(hover: hover)").matches) setActive(i);
                }}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                aria-expanded={isOpen}
              >
                <div className={styles.media}>
                  <div className={styles.graphic}>
                    <GraphicImg g={c.image} />
                  </div>
                  <p className={styles.label} aria-hidden={isOpen}>
                    <T>{c.label}</T>
                  </p>
                </div>
                <div className={styles.body}>
                  {isOpen ? (
                    <div key="open" className={styles.bodyIn}>
                      <h3 className={styles.openTitle}><T>{c.open.title}</T></h3>
                      <p className={styles.openText}><T>{c.open.text}</T></p>
                      {/* Figma only defines tags for the first card's open state */}
                      {c.open.tags.length > 0 && (
                        <ul className={styles.tags}>
                          {c.open.tags.map((t) => (
                            <li key={t} className={styles.tag}>
                              <img alt="" src="/assets/icons/dot-bright.svg" width={6} height={6} />
                              <T>{t}</T>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div key="short" className={styles.bodyIn}>
                      <h3 className={styles.shortTitle}><T>{c.short.title}</T></h3>
                      <p className={styles.shortText}><T>{c.short.text}</T></p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
