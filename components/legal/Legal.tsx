import type { ReactNode } from "react";
import styles from "./Legal.module.css";

/* Legal page layout (Figma 2609:22573 Privacy / 2609:23102 Terms):
   64px title + 40px company line, then sections with a 24px heading and 16px muted copy. */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.company}>AspenView Technology Partners, Inc.</p>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ id, heading, children }: { id?: string; heading?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.copy}>{children}</div>
    </section>
  );
}

export function LegalIntro({ children }: { children: ReactNode }) {
  return <div className={styles.intro}>{children}</div>;
}

export function Toc({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <h2 className={styles.heading}>Table of Contents:</h2>
      <ul>
        {items.map((it) => (
          <li key={it.label}>{it.href ? <a href={it.href}>{it.label}</a> : <strong>{it.label}</strong>}</li>
        ))}
      </ul>
    </nav>
  );
}

export function Address() {
  return (
    <address className={styles.address}>
      AspenView Technology Partners, Inc.
      <br />
      999 18th St, Suite 3000
      <br />
      Denver, CO 80202
      <br />
      United States of America
    </address>
  );
}
