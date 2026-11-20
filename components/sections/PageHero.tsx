import type { ReactNode } from "react";
import { PrimaryButton } from "../ui";
import styles from "./PageHero.module.css";

import { T } from "@/components/i18n/T";

/**
 * Dark sub-page hero (Figma 1277:7170 and siblings): dotted masks left/right,
 * blue glows, animated media on the left and copy on the right.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  children,
  cta,
  media,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: ReactNode;
  children?: ReactNode;
  cta?: { label: string; href: string };
  media?: { video: string; label?: string };
}) {
  return (
    <section className={styles.hero}>
      <span className={styles.maskLeft} aria-hidden>
        <img alt="" src="/assets/pagehero/mask-left.svg" />
      </span>
      <span className={styles.maskRight} aria-hidden>
        <img alt="" src="/assets/pagehero/mask-right.svg" />
      </span>
      <span className={styles.glowTopLeft} aria-hidden>
        <img alt="" src="/assets/pagehero/ellipse-84.svg" />
      </span>
      <span className={styles.glowBottom} aria-hidden>
        <img alt="" src="/assets/pagehero/ellipse-86.svg" />
      </span>
      <span className={styles.glowRight} aria-hidden>
        <img alt="" src="/assets/pagehero/ellipse-85.svg" />
      </span>

      <div className={styles.inner}>
        {media && (
          <div className={styles.mediaCol}>
            <video
              className={styles.media}
              src={media.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={media.label}
            />
          </div>
        )}
        <div className={styles.copyCol}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}><T>{eyebrow}</T></span>
            </span>
            <div className={styles.textGroup}>
              <h1 className={styles.title}>
                <span className={styles.titleLine}><T>{title}</T></span>
                {highlight && <strong className={styles.highlight}><T>{highlight}</T></strong>}
              </h1>
              {children && <div className={styles.body}>{children}</div>}
            </div>
          </div>
          {cta && (
            <div className={styles.actions}>
              <PrimaryButton href={cta.href}><T>{cta.label}</T></PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
