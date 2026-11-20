import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import styles from "./AiBand.module.css";

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
          <h2 className={styles.title}>
            AI <span className={styles.light}>as the</span> Delivery Core
          </h2>
        </div>
        <p className={styles.text}>{text}</p>
        <Link href={cta.href} className={styles.button}>
          <span>{cta.label}</span>
          <img alt="" src="/assets/icons/arrow-right-blue.svg" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
}
