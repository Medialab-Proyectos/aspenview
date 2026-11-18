"use client";

import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

/* Same "Moving gradient" shader as the Home hero, layered over the photo at 80% (Figma 2557:22509) */
const ShaderBg = dynamic(() => import("../sections/ShaderBg"), { ssr: false });

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden>
        <img alt="" src="/assets/contact/hero.jpg" className={styles.bgImg} />
        <ShaderBg className={styles.shader} />
      </div>
      <div className={`wrap ${styles.inner}`}>
        <h1 className={styles.title}>
          How can we
          <br />
          <strong>help you?</strong>
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
