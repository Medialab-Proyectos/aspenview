import Link from "@/components/i18n/LocaleLink";
import { ROUTES } from "@/lib/routes";
import styles from "./AiBand.module.css";

import { T } from "@/components/i18n/T";

/** Blue "AI as the delivery core" band (Figma 1272:5720). */
export default function AiBand({
  text = "AI is central to our innovation strategy; faster time-to-value, increased agility, and stronger outcomes through smart agents and automated workflows.",
  cta = { label: "AI Transformation", href: ROUTES.aiTransformation },
}: {
  text?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.lead}>
          <span className={styles.iconRing}>
            <img alt="" src="/assets/icons/widget2-blue.svg" width={24} height={24} />
          </span>
          <h2 className={styles.title}><T>{"AI "}</T><span className={styles.light}><T>{"as the"}</T></span><T>{" Delivery Core"}</T></h2>
        </div>
        <p className={styles.text}><T>{text}</T></p>
        <Link href={cta.href} className={styles.button}>
          <span><T>{cta.label}</T></span>
          <img alt="" src="/assets/icons/arrow-right-blue.svg" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
}
