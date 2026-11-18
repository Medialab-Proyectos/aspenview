import { Eyebrow } from "../ui";
import styles from "./Commitments.module.css";

const COMMITMENTS = [
  { title: "Proven Excellence", text: "Customer satisfaction across delivery engagements.", value: "8.8/10" },
  { title: "Performance at Speed", text: "From need to deployment.", value: "2 Weeks" },
  { title: "Lasting Commitment", text: "Engineer retention for greater continuity and stability.", value: "95%" },
  { title: "Global-Caliber Talent", text: "Vetted engineers ready to support complex delivery needs.", value: "+1,600" },
];

// Logos in the partner marquee (Figma 2139:25522), with their exact frame sizes and inner insets.
const LOGOS = [
  { name: "Salesforce", src: "/assets/logos/salesforce.svg", w: 143, h: 100, inset: "0 0.07% 0 0.03%" },
  { name: "Databricks", src: "/assets/logos/databricks.svg", w: 252, h: 40, inset: "0.09% 0.04% 0.09% 0" },
  { name: "Snowflake", src: "/assets/logos/snowflake.svg", w: 253, h: 60, inset: "0.5% 0 0 0.17%" },
  { name: "UiPath", src: "/assets/logos/uipath.svg", w: 147, h: 48, inset: "0 0 0.13% 0" },
  { name: "Automation Anywhere", src: "/assets/logos/automation-anywhere.svg", w: 190, h: 70, inset: "0" },
  { name: "Techgrit", src: "/assets/logos/techgrit.svg", w: 235, h: 54, inset: "0 -0.49% -11.17% -0.89%" },
  { name: "SSG", src: "/assets/logos/ssg.svg", w: 93, h: 61, inset: "2.01% 0.82% 1.8% 0.65%" },
];

function LogoSet({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={styles.set} aria-hidden={hidden}>
      {LOGOS.map((l) => (
        <li key={l.name} className={styles.logo} style={{ width: l.w, height: l.h }}>
          <span className={styles.logoBox} style={{ inset: l.inset }}>
            <img alt={hidden ? "" : l.name} src={l.src} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Commitments() {
  return (
    <>
      <section className={styles.commitments}>
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              <Eyebrow>Our approach</Eyebrow>
              <span className={styles.title}>
                <span className={styles.titleDark}>Our Four</span>
                <br />
                <span className={styles.titleBlue}>Commitments</span>
              </span>
            </h2>
            <p className={styles.lead}>
              Every technology engagement is shaped by what matters most: delivering measurable results and lasting
              value.
            </p>
          </div>

          <ul className={styles.cards}>
            {COMMITMENTS.map((c) => (
              <li key={c.title} className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardText}>{c.text}</p>
                </div>
                <p className={styles.cardValue}>{c.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.wave} aria-hidden>
          <img alt="" src="/assets/home/wave.png" />
        </div>
        <div className={`wrap ${styles.partnersInner}`}>
          <h2 className={styles.partnersTitle}>Building great technology with great partners</h2>
          <div className={styles.marquee}>
            <div className={styles.track}>
              <LogoSet />
              <LogoSet hidden />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
