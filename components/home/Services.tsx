import { Eyebrow, LinkButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Services.module.css";

const CARDS = [
  {
    n: "01",
    icon: <img alt="" src="/assets/icons/pc-blue.svg" width={32} height={32} />,
    title: "Software Engineering",
    text: "Build, modernize and scale software faster with AI embedded throughout the engineering lifecycle.",
    cta: "Explore Software Engineering",
    href: ROUTES.softwareEngineering,
  },
  {
    n: "02",
    icon: <img alt="" src="/assets/icons/database-blue.svg" width={32} height={32} />,
    title: (
      <>
        Data Engineering, <br />
        BI &amp; AI
      </>
    ),
    text: "Turn fragmented data into trusted intelligence and an AI-ready foundation for better decisions.",
    cta: "Explore Data, BI & AI",
    href: ROUTES.dataEngineering,
  },
  {
    n: "03",
    icon: (
      <span className={styles.robot}>
        <span>
          <img alt="" src="/assets/icons/robot-blue.svg" />
        </span>
      </span>
    ),
    title: "Agentic Process Automation",
    text: "Move beyond traditional automation with intelligent agents that reason, adapt and act across systems.",
    cta: "Explore Agentic Automation",
    href: ROUTES.agenticAutomation,
  },
];

export default function Services() {
  return (
    <section className={`sp64 ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow>Our Services</Eyebrow>
            <span className={styles.title}>Technology Expertise, Agentic by Design</span>
          </h2>
          <p className={styles.lead}>
            AspenView combines specialized expertise, nearshore execution and agentic AI to help organizations build,
            modernize and operate faster, without compromising quality, control or accountability.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.row}>
            {CARDS.map((c) => (
              <article key={c.n} className={styles.card} data-glow>
                <div className={styles.cardTop}>
                  <span className={styles.num}>{c.n}</span>
                  {c.icon}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardCopy}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardText}>{c.text}</p>
                  </div>
                  <LinkButton href={c.href}>{c.cta}</LinkButton>
                </div>
              </article>
            ))}
          </div>

          <article className={`${styles.card} ${styles.wide}`} data-glow>
            <div className={styles.photo}>
              <img alt="Customer success professionals working together" src="/assets/home/customer-success.png" />
            </div>
            <div className={styles.wideMain}>
              <div className={styles.wideHead}>
                <span className={styles.num}>04</span>
                <div className={styles.wideTitleGroup}>
                  <h3 className={`${styles.cardTitle} ${styles.nowrap}`}>Customer Success</h3>
                  <LinkButton href={ROUTES.customerSuccess}>Explore Customer Success</LinkButton>
                </div>
              </div>
              <div className={styles.wideText}>
                <p className={styles.cardText}>
                  Retain more customers. Grow lasting relationships.
                  <br />
                  Scale your Customer Success capabilities with experienced nearshore professionals who help SaaS and
                  technology companies drive product adoption, strengthen retention, and grow customer accounts.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
