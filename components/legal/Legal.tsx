import type { ReactNode } from "react";
import styles from "./Legal.module.css";

import { T } from "@/components/i18n/T";

/* Legal page layout (Figma 2609:22573 Privacy / 2609:23102 Terms):
   64px title + 40px company line, then sections with a 24px heading and 16px muted copy. */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.page}>
      <div className={`wrap ${styles.inner}`}>
        <header className={styles.header}>
          <h1 className={styles.title}><T>{title}</T></h1>
          <p className={styles.company}><T>{"AspenView Technology Partners, Inc."}</T></p>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ id, heading, children }: { id?: string; heading?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      {heading && <h2 className={styles.heading}><T>{heading}</T></h2>}
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
      <h2 className={styles.heading}><T>{"Table of Contents:"}</T></h2>
      <ul>
        {items.map((it) => (
          <li key={it.label}>{it.href ? <a href={it.href}><T>{it.label}</T></a> : <strong><T>{it.label}</T></strong>}</li>
        ))}
      </ul>
    </nav>
  );
}

export function Address() {
  return (
    <address className={styles.address}><T>{"AspenView Technology Partners, Inc."}</T><br /><T>{"999 18th St, Suite 3000"}</T><br /><T>{"Denver, CO 80202"}</T><br /><T>{"United States of America"}</T></address>
  );
}
