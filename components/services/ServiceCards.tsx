"use client";

import { useState } from "react";
import { MaskIcon, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./ServiceCards.module.css";

// Figma component set "Cards solutions" — MOUSE_ENTER → variant, smart animate 0.3s ease-out
const CARDS = [
  {
    n: "01",
    icon: "pc",
    title: "Software Engineering",
    subtitle: "Build and modernize software at a different speed.",
    text: "Expert engineering and agentic AI come together across the development lifecycle to accelerate delivery while improving quality and control.",
    cta: "Explore Software Engineering",
    href: ROUTES.softwareEngineering,
  },
  {
    n: "02",
    icon: "database",
    title: (
      <>
        Data Engineering,
        <br />
        BI &amp; AI
      </>
    ),
    subtitle: "Build the data foundation AI actually needs.",
    text: "Turn fragmented data into trusted intelligence by connecting data engineering, governance, BI, analytics and AI.",
    cta: "Explore Data, BI & AI",
    href: ROUTES.dataEngineering,
  },
  {
    n: "03",
    icon: "robot",
    title: "Agentic Process Automation",
    subtitle: "Automate the work traditional automation leaves behind.",
    text: "Use intelligent agents to reason, adapt and operate across complex processes — with governance built in.",
    cta: "Explore Agentic",
    href: ROUTES.agenticAutomation,
  },
  {
    n: "04",
    icon: "user",
    title: "Client Success",
    subtitle: "Make Client Success a stronger engine for growth.",
    text: "Combine strategic leadership, nearshore execution and AI-enabled workflows to strengthen adoption, retention and expansion.",
    cta: "Explore Client Success",
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
              <p className={styles.num}>{c.n}</p>
              <span className={styles.ring}>
                <Icon name={c.icon} />
              </span>
            </div>
            <div className={styles.copy}>
              <h3 className={styles.title}>{c.title}</h3>
              <div className={styles.detail} aria-hidden={!open}>
                <div className={styles.detailInner}>
                  <h4 className={styles.subtitle}>{c.subtitle}</h4>
                  <p className={styles.text}>{c.text}</p>
                  <PrimaryButton href={c.href} arrow className={styles.btn}>
                    {c.cta}
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
