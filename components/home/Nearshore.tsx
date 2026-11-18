import { Eyebrow } from "../ui";
import styles from "./Nearshore.module.css";

const BENEFITS = [
  [
    { icon: "users-group-blue", label: "High-Caliber Talent" },
    { icon: "clock-circle-blue", label: "Time Zone Alignment" },
    { icon: "chat-money-blue", label: "Cost-Effectiveness" },
  ],
  [
    { icon: "global-blue", label: "Geographic Proximity" },
    { icon: "user-speak-blue", label: "English Proficiency" },
    { icon: "box-blue", label: "Faster Onboarding and Deployment" },
  ],
];

export default function Nearshore() {
  return (
    <section className={`sp64 ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.row}>
          <div className={styles.copy}>
            <Eyebrow>How we deliver</Eyebrow>
            <div className={styles.body}>
              <div className={styles.titleGroup}>
                <h2 className={styles.title}>Nearshore talent. Fully integrated with your team.</h2>
                <p className={styles.lead}>
                  Our engineers work across Colombia, Argentina, Mexico, Brazil, Peru, and Puerto Rico—led in-country,
                  aligned to your working hours, and integrated into your teams.
                </p>
              </div>
              <div className={styles.benefits}>
                <h3 className={styles.benefitsTitle}>Benefits:</h3>
                <ul className={styles.benefitsRow}>
                  {BENEFITS.map((col, i) => (
                    <li key={i} className={styles.benefitsCol}>
                      <ul className={styles.benefitsList}>
                        {col.map((b) => (
                          <li key={b.label} className={styles.benefit}>
                            <span className={styles.benefitIcon}>
                              <img alt="" src={`/assets/icons/${b.icon}.svg`} width={20} height={20} />
                            </span>
                            <span className={styles.benefitLabel}>{b.label}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.media}>
            <video
              src="/videos/nearshore-colombia.webm"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Medellín, Colombia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
