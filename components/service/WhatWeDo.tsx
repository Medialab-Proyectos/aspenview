import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./WhatWeDo.module.css";

import { T } from "@/components/i18n/T";

export type WhatWeDoData = {
  title: ReactNode;
  text: ReactNode;
  photo: { src: string; label: string };
  cards: { icon: string; title: string; text: string }[];
  /** "numbered": 3 tall numbered cards (Software). "grid": 2×3 compact cards (Data). */
  layout?: "numbered" | "grid";
};

/** "What we do" dark section (Figma 1565:9794 / 1819:20324). */
export default function WhatWeDo({ data }: { data: WhatWeDoData }) {
  const grid = data.layout === "grid";
  const photo = (
    <div className={grid ? styles.photoGrid : styles.photo}>
      <img alt="" src={data.photo.src} />
      <span className={styles.photoTag} style={grid ? { width: 300 } : undefined}>
        <img alt="" src="/assets/icons/dot-bright.svg" width={6} height={6} />
        <T>{data.photo.label}</T>
      </span>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <SectionHeader eyebrow="What we do" title={data.title} text={data.text} tone="dark" gap={grid ? "title" : "gutter"} />
        {grid ? (
          <div className={styles.rowGrid}>
            {photo}
            <div className={styles.grid}>
              {[data.cards.slice(0, 3), data.cards.slice(3, 6)].map((row, r) => (
                <div key={r} className={styles.gridRow}>
                  {row.map((c) => (
                    <article key={c.title} className={styles.gridCard}>
                      <span className={styles.ring}>
                        <img alt="" src={c.icon} width={32} height={32} />
                      </span>
                      <div className={styles.cardCopy}>
                        <h3 className={styles.gridTitle}><T>{c.title}</T></h3>
                        <p className={styles.cardText}><T>{c.text}</T></p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.row}>
            {photo}
            <div className={styles.cards}>
              {data.cards.map((c, i) => (
                <article key={c.title} className={styles.card}>
                  <div className={styles.cardTop}>
                    <p className={styles.num}>{String(i + 1).padStart(2, "0")}</p>
                    <span className={styles.ring}>
                      <img alt="" src={c.icon} width={32} height={32} />
                    </span>
                  </div>
                  <div className={styles.cardCopy}>
                    <h3 className={styles.cardTitle}><T>{c.title}</T></h3>
                    <p className={styles.cardText}><T>{c.text}</T></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
