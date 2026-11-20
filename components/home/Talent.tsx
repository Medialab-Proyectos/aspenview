"use client";

import { useState } from "react";
import { Eyebrow, LinkButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Talent.module.css";

import { T } from "@/components/i18n/T";

// Figma "Card talent enablement" (2866:49107): Closed → Opened on hover, smart animate 0.3s ease-out
const CARDS = [
  {
    label: "01 / THE FRAMEWORK",
    name: "Aureum",
    highlight: true,
    title: "Anticipating Talent Demand",
    body: "Through Aureum, our proactive talent planning framework, we build qualified, offer-ready pipelines ahead of demand, so the right talent is ready when you need it.",
    video: "/videos/talent-aureum.webm",
    ratio: "640 / 233",
  },
  {
    label: "02 / THE SYSTEM",
    name: "Vantage",
    title: "Matching Talent With Precision",
    body: "Our proprietary AI platform, Vantage, combines intelligent matching, technical validation, and candidate verification to accelerate confident selection.",
    video: "/videos/talent-vantage.webm",
    ratio: "640 / 320",
  },
  {
    label: "03 / THE PROCESS",
    name: "RevMax Agile Delivery",
    title: "Accelerating Delivery Through Agility",
    body: "RevMax Agile Delivery connects Talent Acquisition, Sales, and Delivery through a structured, agile process with daily coordination and quality checkpoints.",
    video: "/videos/talent-process.webm",
    ratio: "640 / 320",
  },
  {
    label: "04 / THE TEAM",
    name: "Experienced Talent Specialists",
    title: "Expertise Behind Every Decision",
    body: "Our engineering-certified Talent Acquisition specialists work alongside technical experts to assess capabilities, validate quality, and ensure the right fit.",
    video: "/videos/talent-specialists.webm",
    ratio: "640 / 320",
  },
];

function TalentCard({ card }: { card: (typeof CARDS)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`${styles.card} ${open ? styles.open : ""}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className={styles.cardTop}>
        <div className={styles.anim}>
          <video
            className={styles.video}
            style={{ aspectRatio: card.ratio }}
            src={card.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
        </div>
        <div className={styles.labels}>
          <p className={styles.label}><T>{card.label}</T></p>
          <h3 className={`${styles.name} ${card.highlight ? styles.nameHighlight : ""}`}><T>{card.name}</T></h3>
        </div>
      </div>
      <div className={styles.titleRow}>
        <h4 className={styles.cardTitle}><T>{card.title}</T></h4>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? `Collapse ${card.name}` : `Expand ${card.name}`}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
        >
          <img alt="" src="/assets/icons/add-white.svg" className={styles.plus} />
          <img alt="" src="/assets/icons/minus-white.svg" className={styles.minus} />
        </button>
      </div>
      <div className={styles.bodyWrap}>
        <p className={styles.body}><T>{card.body}</T></p>
      </div>
    </article>
  );
}

export default function Talent() {
  return (
    <>
      <section className={`sp64 ${styles.banner}`}>
        <span className={`${styles.patron} ${styles.patronRight}`} aria-hidden>
          <img alt="" src="/assets/home/patron-dots.svg" />
        </span>
        <span className={`${styles.patron} ${styles.patronLeft}`} aria-hidden>
          <img alt="" src="/assets/home/patron-dots.svg" />
        </span>
        <p className={styles.bannerText}><T>{"We "}</T><strong><T>{"accelerate success"}</T></strong><T>{" by connecting clients, talent and technology."}</T></p>
      </section>

      <section className={styles.talent}>
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              <Eyebrow><T>{"Talent Enablement"}</T></Eyebrow>
              <span className={styles.title}><T>{"The Right Team, Ready Before You Ask."}</T></span>
            </h2>
            <div className={styles.side}>
              <h3 className={styles.subtitle}><T>{"Four Strengths. One Delivery Advantage."}</T></h3>
              <p className={styles.lead}><T>{"We combine proactive talent planning, AI-powered technology, agile execution, and expert oversight to deliver the engineering talent and technology teams your business needs, faster and with confidence."}</T></p>
              <LinkButton href={ROUTES.talentEnablement}><T>{"Explore Our Talent Enablement"}</T></LinkButton>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.group}>
              <TalentCard card={CARDS[0]} />
              <TalentCard card={CARDS[1]} />
            </div>
            <div className={styles.group}>
              <TalentCard card={CARDS[2]} />
              <TalentCard card={CARDS[3]} />
            </div>
          </div>
        </div>
      </section>

      <section className={`sp64 ${styles.quality}`}>
        <div className={`wrap ${styles.qualityInner}`}>
          <div className={styles.qualityMedia}>
            <video
              src="/videos/quality-a-plus.webm"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A+ Standards: onboarding, leadership and improvement"
            />
          </div>
          <div className={styles.qualityCopy}>
            <h3 className={styles.qualityTitle}><T>{"Quality Continues Beyond Deployment."}</T></h3>
            <p className={styles.qualityText}><T>{"Dedicated Engineering Managers, structured onboarding, and A+ Standards ensure continuous performance, accountability, and improvement throughout every engagement."}</T></p>
          </div>
        </div>
      </section>
    </>
  );
}
