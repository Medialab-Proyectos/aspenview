import { Eyebrow, LinkButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Services.module.css";

import { T } from "@/components/i18n/T";

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
      <><T>{"Data Engineering, "}</T><br /><T>{"BI & AI"}</T></>
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
            <Eyebrow><T>{"Our Services"}</T></Eyebrow>
            <span className={styles.title}><T>{"Technology Expertise, Agentic by Design"}</T></span>
          </h2>
          <p className={styles.lead}><T>{"AspenView combines specialized expertise, nearshore execution and agentic AI to help organizations build, modernize and operate faster, without compromising quality, control or accountability."}</T></p>
        </div>

        <div className={styles.grid}>
          <div className={styles.row}>
            {CARDS.map((c) => (
              <article key={c.n} className={styles.card} data-glow>
                <div className={styles.cardTop}>
                  <span className={styles.num}><T>{c.n}</T></span>
                  {c.icon}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardCopy}>
                    <h3 className={styles.cardTitle}><T>{c.title}</T></h3>
                    <p className={styles.cardText}><T>{c.text}</T></p>
                  </div>
                  <LinkButton href={c.href}><T>{c.cta}</T></LinkButton>
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
                  <h3 className={`${styles.cardTitle} ${styles.nowrap}`}><T>{"Customer Success"}</T></h3>
                  <LinkButton href={ROUTES.customerSuccess}><T>{"Explore Customer Success"}</T></LinkButton>
                </div>
              </div>
              <div className={styles.wideText}>
                <p className={styles.cardText}><T>{"Retain more customers. Grow lasting relationships."}</T><br /><T>{"Scale your Customer Success capabilities with experienced nearshore professionals who help SaaS and technology companies drive product adoption, strengthen retention, and grow customer accounts."}</T></p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
