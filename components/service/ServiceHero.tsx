import type { ReactNode } from "react";
import { PrimaryButton } from "../ui";
import heroStyles from "../sections/PageHero.module.css";
import styles from "./ServiceHero.module.css";

/** Service detail hero (Figma 1746:22143): copy left, labelled animated media right. */
export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  text,
  cta,
  mediaLabel,
  video,
  image,
  padY,
  highlightInline,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight: ReactNode;
  text: ReactNode;
  cta: { label: string; href: string };
  mediaLabel: string;
  video?: string;
  /** Animated image (GIF) media with its Figma frame size, used instead of a video */
  image?: { src: string; width: number; height: number };
  /** Desktop vertical padding (Figma varies it per page so the hero stays 800px tall) */
  padY?: number;
  /** Tablet/mobile: keep the highlight on the same line (Figma breaks before it on most pages) */
  highlightInline?: boolean;
}) {
  return (
    <section className={heroStyles.hero}>
      <span className={heroStyles.maskLeft} aria-hidden>
        <img alt="" src="/assets/pagehero/mask-left.svg" />
      </span>
      <span className={heroStyles.maskRight} aria-hidden>
        <img alt="" src="/assets/pagehero/mask-right.svg" />
      </span>
      <span className={heroStyles.glowTopLeft} aria-hidden>
        <img alt="" src="/assets/pagehero/ellipse-84.svg" />
      </span>
      <span className={`${heroStyles.glowBottom} ${styles.glowBottom}`} aria-hidden>
        <img alt="" src="/assets/pagehero/ellipse-86.svg" />
      </span>
      <span className={heroStyles.glowRight} aria-hidden>
        <img alt="" src="/assets/pagehero/ellipse-85.svg" />
      </span>

      <div className={styles.inner} style={padY ? ({ "--hero-pad-y": `${padY}px` } as React.CSSProperties) : undefined}>
        <div className={styles.copyCol}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>{eyebrow}</span>
            </span>
            <div className={styles.textGroup}>
              <h1 className={styles.title}>
                {title} <strong className={highlightInline ? undefined : styles.highlightBlock}>{highlight}</strong>
              </h1>
              <p className={styles.text}>{text}</p>
            </div>
          </div>
          <div className={styles.actions}>
            <PrimaryButton href={cta.href} arrow>
              {cta.label}
            </PrimaryButton>
          </div>
        </div>

        <div className={styles.mediaCol}>
          <span className={styles.mediaLabel}>
            <img alt="" src="/assets/pagehero/line-soft.svg" className={styles.mediaLine} />
            <span>{mediaLabel}</span>
          </span>
          {image ? (
            <img
              className={styles.mediaImage}
              src={image.src}
              alt={mediaLabel}
              style={{ maxWidth: image.width, aspectRatio: `${image.width} / ${image.height}` }}
            />
          ) : (
            <video
              className={styles.media}
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={mediaLabel}
            />
          )}
        </div>
      </div>
    </section>
  );
}
