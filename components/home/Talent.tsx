"use client";

import { useState } from "react";
import { Eyebrow, LinkButton, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Talent.module.css";

// Figma "Card talent enablement" (2866:49107): Closed → Opened on hover, smart animate 0.3s ease-out
const CARDS = [
  {
    label: "01 / THE FRAMEWORK",
    name: "Aureum",
    highlight: true,
    title: "Anticipating talent demand",
    body: "Through Aureum, our proactive talent planning framework, we build qualified, offer-ready pipelines ahead of demand, so the right talent is ready when you need it.",
    video: "/videos/talent-aureum.mp4",
    ratio: "640 / 233",
  },
  {
    label: "02 / THE SYSTEM",
    name: "Vantage",
    title: "Matching talent with precision",
    body: "Our proprietary AI platform, Vantage, combines intelligent matching, technical validation, and candidate verification to accelerate confident selection.",
    video: "/videos/talent-vantage.mp4",
    ratio: "640 / 320",
  },
  {
    label: "03 / THE PROCESS",
    name: "RevMax Agile Delivery",
    title: "Accelerating delivery through agility",
    body: "RevMax Agile Delivery connects Talent Acquisition, Sales, and Delivery through a structured, agile process with daily coordination and quality checkpoints.",
    video: "/videos/talent-process.mp4",
    ratio: "640 / 320",
  },
  {
    label: "04 / THE TEAM",
    name: "Experienced Talent Specialists",
    title: "Expertise behind every decision",
    body: "Our engineering-certified Talent Acquisition specialists work alongside technical experts to assess capabilities, validate quality, and ensure the right fit.",
    video: "/videos/talent-specialists.mp4",
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
          <p className={styles.label}>{card.label}</p>
          <h3 className={`${styles.name} ${card.highlight ? styles.nameHighlight : ""}`}>{card.name}</h3>
        </div>
      </div>
      <div className={styles.titleRow}>
        <h4 className={styles.cardTitle}>{card.title}</h4>
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
        <p className={styles.body}>{card.body}</p>
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
        <p className={styles.bannerText}>
          We <strong>accelerate success</strong> by connecting clients, talent and technology.
        </p>
      </section>

      <section className={styles.talent}>
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              <Eyebrow>Talent Enablement</Eyebrow>
              <span className={styles.title}>The right team, ready before you ask.</span>
            </h2>
            <div className={styles.side}>
              <h3 className={styles.subtitle}>Four strengths. One delivery advantage.</h3>
              <p className={styles.lead}>
                We combine proactive talent planning, AI-powered technology, agile execution, and expert oversight to
                deliver the engineering talent and technology teams your business needs, faster and with confidence.
              </p>
              <LinkButton href={ROUTES.talentEnablement}>Explore Our Talent Enablement</LinkButton>
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
              src="/videos/quality-a-plus.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A+ Standards: onboarding, leadership and improvement"
            />
          </div>
          <div className={styles.qualityCopy}>
            <h3 className={styles.qualityTitle}>Quality continues beyond deployment.</h3>
            <p className={styles.qualityText}>
              Dedicated Engineering Managers, structured onboarding, and A+ Standards ensure continuous performance,
              accountability, and improvement throughout every engagement.
            </p>
            <PrimaryButton href={ROUTES.deliveryExcellence} className={styles.qualityBtn}>
              Explore Our Delivery Approach
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
