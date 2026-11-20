"use client";

import { useState } from "react";
import { MaskIcon, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./ServiceCards.module.css";

import { T } from "@/components/i18n/T";

// Figma component set "Cards solutions" — MOUSE_ENTER → variant, smart animate 0.3s ease-out
const CARDS = [
  {
    n: "01",
    icon: "pc",
    title: "Software Engineering",
    subtitle: "Build and Modernize Software at a Different Speed.",
    text: "Expert engineering and agentic AI come together across the development lifecycle to accelerate delivery while improving quality and control.",
    cta: "Explore Software Engineering",
    href: ROUTES.softwareEngineering,
  },
  {
    n: "02",
    icon: "database",
    title: (
      <><T>{"Data Engineering,"}</T><br /><T>{"BI & AI"}</T></>
    ),
    subtitle: "Build the Data Foundation AI Actually Needs.",
    text: "Turn fragmented data into trusted intelligence by connecting data engineering, governance, BI, analytics and AI.",
    cta: "Explore Data, BI & AI",
    href: ROUTES.dataEngineering,
  },
  {
    n: "03",
    icon: "robot",
    title: "Agentic Process Automation",
    subtitle: "Automate the Work Traditional Automation Leaves Behind.",
    text: "Use intelligent agents to reason, adapt and operate across complex processes, with governance built in.",
    cta: "Explore Agentic",
    href: ROUTES.agenticAutomation,
  },
  {
    n: "04",
    icon: "user",
    title: "Customer Success",
    subtitle: "Make Customer Success a Stronger Engine for Growth.",
    text: "Combine strategic leadership, nearshore execution and AI-enabled workflows to strengthen adoption, retention and expansion.",
    cta: "Explore Customer Success",
    href: ROUTES.customerSuccess,
  },
];

function Icon({ name }: { name: string }) {
  if (name === "robot") {
    return (
      <span className={styles.robot}>
        <span className={styles.robotA}>
          <MaskIcon src="/assets/services/robot-v1.svg" size={0} className={styles.fill} />
        </span>
        <span className={styles.robotB}>
          <MaskIcon src="/assets/services/robot-v2.svg" size={0} className={styles.fill} />
        </span>
      </span>
    );
  }
  const src =
    name === "pc"
      ? "/assets/icons/pc-blue.svg"
      : name === "database"
        ? "/assets/services/database-blue.svg"
        : "/assets/services/user-check-blue.svg";
  return <MaskIcon src={src} size={32} />;
}

export default function ServiceCards() {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.cards}>
      {CARDS.map((c, i) => {
        const open = i === active;
        return (
          <article
            key={c.n}
            className={`${styles.card} ${open ? styles.open : ""}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <div className={styles.top}>
              <p className={styles.num}><T>{c.n}</T></p>
              <span className={styles.ring}>
                <Icon name={c.icon} />
              </span>
            </div>
            <div className={styles.copy}>
              <h3 className={styles.title}><T>{c.title}</T></h3>
              <div className={styles.detail} aria-hidden={!open}>
                <div className={styles.detailInner}>
                  <h4 className={styles.subtitle}><T>{c.subtitle}</T></h4>
                  <p className={styles.text}><T>{c.text}</T></p>
                  <PrimaryButton href={c.href} arrow className={styles.btn}>
                    <T>{c.cta}</T>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
