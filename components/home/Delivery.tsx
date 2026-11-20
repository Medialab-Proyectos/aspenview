import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Delivery.module.css";

import { T } from "@/components/i18n/T";

const MODELS = [
  {
    icon: "spark-blue",
    title: "We Adapt to Your Needs",
    text: "The right engagement model for your business priorities.",
    pos: styles.cardTop,
  },
  {
    icon: "course-up-blue",
    title: "We Execute With Precision",
    text: "Structured onboarding, seamless integration, and clear accountability.",
    pos: styles.cardMid,
  },
  {
    icon: "compass-big-blue",
    title: "We Ensure Lasting Quality",
    text: "Continuous oversight, measurable performance, and proactive support.",
    pos: styles.cardBottom,
  },
];

export default function Delivery() {
  return (
    <section className={`sp64 ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copyCol}>
          <div className={styles.copy}>
            <h2 className={styles.heading}>
              <Eyebrow><T>{"How We Deliver"}</T></Eyebrow>
              <span className={styles.title}><T>{"Your Priorities. Our Delivery Commitment."}</T></span>
            </h2>
            <div className={styles.textGroup}>
              <p className={styles.lead}><T>{"We work as an extension of your technology teams, bringing the engineering expertise, execution discipline, and commitment needed to make every engagement successful."}</T></p>
              <PrimaryButton href={ROUTES.deliveryExcellence} arrow><T>{"Explore How We Deliver"}</T></PrimaryButton>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <img alt="" src="/assets/home/globe.png" className={styles.globe} />
          {MODELS.map((m) => (
            <div key={m.title} className={`${styles.card} ${m.pos}`}>
              <span className={styles.cardIcon}>
                <img alt="" src={`/assets/icons/${m.icon}.svg`} width={32} height={32} />
              </span>
              <div className={styles.cardCopy}>
                <h3 className={styles.cardTitle}><T>{m.title}</T></h3>
                <p className={styles.cardText}><T>{m.text}</T></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
