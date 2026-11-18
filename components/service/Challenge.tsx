import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./Challenge.module.css";

type Graphic = { src: string; inset?: string; opacity?: number };

export type ChallengeData = {
  title: ReactNode;
  text: ReactNode;
  main: { image: Graphic; title: ReactNode; text: string; tags: string[] };
  side: { label: string; image: Graphic; title: string; text: string }[];
};

function GraphicImg({ g }: { g: Graphic }) {
  return (
    <span className={styles.graphicImg} style={{ inset: g.inset ?? "0", opacity: g.opacity }}>
      <img alt="" src={g.src} />
    </span>
  );
}

/** "The challenge" section + "Componente - The challenge" (Figma 1552:10968). */
export default function Challenge({ data }: { data: ChallengeData }) {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <SectionHeader eyebrow="The challenge" title={data.title} text={data.text} />
        <div className={styles.cards}>
          <article className={styles.mainCard}>
            <div className={styles.mainMedia}>
              <div className={styles.mainGraphic}>
                <GraphicImg g={data.main.image} />
              </div>
            </div>
            <div className={styles.mainBody}>
              <h3 className={styles.mainTitle}>{data.main.title}</h3>
              <p className={styles.mainText}>{data.main.text}</p>
              <ul className={styles.tags}>
                {data.main.tags.map((t) => (
                  <li key={t} className={styles.tag}>
                    <img alt="" src="/assets/icons/dot-bright.svg" width={6} height={6} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          {data.side.map((s) => (
            <article key={s.title} className={styles.sideCard}>
              <div className={styles.sideMedia}>
                <div className={styles.sideGraphic}>
                  <GraphicImg g={s.image} />
                </div>
                <p className={styles.sideLabel}>{s.label}</p>
              </div>
              <div className={styles.sideBody}>
                <h3 className={styles.sideTitle}>{s.title}</h3>
                <p className={styles.sideText}>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
