import Link from "@/components/i18n/LocaleLink";
import type { CSSProperties, ReactNode } from "react";
import styles from "./ui.module.css";

/* ---------- Icon that can be recoloured via CSS (uses the SVG as a mask) ---------- */
export function MaskIcon({ src, size, className }: { src: string; size: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={`${styles.maskIcon} ${className ?? ""}`}
      style={{ width: size, height: size, WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` } as CSSProperties}
    />
  );
}

/* ---------- Eyebrow: 44px rule + uppercase label ---------- */
const EYEBROW_TONE = { blue: "", white: styles.eyebrowWhite, soft: styles.eyebrowSoft };

export function Eyebrow({
  children,
  tone = "blue",
  size = "md",
}: {
  children: ReactNode;
  tone?: "blue" | "white" | "soft";
  /* sm = "Tag sections" component: 36px rule + 16px label */
  size?: "md" | "sm";
}) {
  return (
    <span className={`${styles.eyebrow} ${EYEBROW_TONE[tone]} ${size === "sm" ? styles.eyebrowSm : ""}`}>
      <span className={styles.eyebrowLine} />
      <span className={styles.eyebrowText}>{children}</span>
    </span>
  );
}

/* ---------- Primary pill button ---------- */
export function PrimaryButton({
  href,
  children,
  arrow = false,
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
  /* opens an external site (e.g. the job board) in a new tab */
  external?: boolean;
}) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && <img alt="" src="/assets/icons/arrow-right-light.svg" width={24} height={24} />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.primary} ${className ?? ""}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${styles.primary} ${className ?? ""}`}>
      {content}
    </Link>
  );
}

/* ---------- Text link with right arrow ---------- */
export function LinkButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`${styles.link} ${className ?? ""}`}>
      <span>{children}</span>
      <MaskIcon src="/assets/icons/arrow-right-blue.svg" size={24} />
    </Link>
  );
}
