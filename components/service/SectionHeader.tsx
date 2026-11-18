import type { ReactNode } from "react";
import { Eyebrow } from "../ui";
import styles from "./SectionHeader.module.css";

/** Eyebrow + 48px light title (with bold highlight) + body, used across service pages. */
export default function SectionHeader({
  eyebrow,
  title,
  text,
  tone = "light",
  titleWidth,
  gap = "title",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  tone?: "light" | "dark";
  titleWidth?: number;
  gap?: "title" | "gutter";
}) {
  return (
    <div className={`${styles.header} ${tone === "dark" ? styles.dark : ""}`}>
      <h2 className={styles.heading}>
        <Eyebrow tone={tone === "dark" ? "white" : "blue"}>{eyebrow}</Eyebrow>
        <span className={styles.title} style={titleWidth ? { maxWidth: titleWidth } : undefined}>
          {title}
        </span>
      </h2>
      {text && (
        <div className={styles.text} style={{ marginTop: gap === "gutter" ? "calc(var(--gutter) - var(--gap-subtitle-to-texts))" : undefined }}>
          {text}
        </div>
      )}
    </div>
  );
}
