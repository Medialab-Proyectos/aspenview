"use client";

import { useState, type CSSProperties } from "react";
import styles from "./Careers.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/careers";

/* ---------- Employee value promise cards (card values 653:5107 → 653:5105, ON_CLICK SMART_ANIMATE 0.3s) ----------
   Item lists come from each instance's properties in Figma (1087:4631–4634). */
const EVP: { icon: string; title: string; items: string[] }[] = [
  {
    icon: "evp-aspen",
    title: "The AspenView Experience",
    items: ["Cultural Mix", "Global Exposure", "Fun", "Health & Well-being", "Voice of Employee"],
  },
  {
    icon: "evp-medal",
    title: "Compensation & Benefits",
    items: [
      "Attractive Salary",
      "Performance Bonus",
      "Leave Benefits from Day One",
      "Continuous Learning (Udemy Business Unlimited)",
      "English Language Growth (Families Included)",
      "Home Office Setup Support",
      "Employee Assistance Program",
    ],
  },
  {
    icon: "evp-plant",
    title: "Career Growth & Advancement",
    items: ["Professional Development", "Centers of Excellence", "Mentorship", "Recognition Program", "Career Progression"],
  },
  {
    icon: "evp-users",
    title: "Networking & Community",
    items: [
      "Technology Community Engagement (Tech Meetups, Hackathons)",
      "Internal Collaboration",
      "Aspen Circle Referral Program",
      "Continuous Learning (Udemy Business Unlimited)",
      "English Language Growth (Families Included)",
    ],
  },
];

export function EvpCards() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={styles.evpCards}>
      {EVP.map((c, i) => {
        const isOpen = open === i;
        const expandable = c.items.length > 0;
        const body = (
          <>
            <span className={styles.evpIcon}>
              <img alt="" src={`${A}/${c.icon}.svg`} width={48} height={48} />
            </span>
            <h3 className={styles.evpTitle}><T>{c.title}</T></h3>
            {expandable && (
              <span className={styles.evpReveal}>
                <ul className={styles.evpList}>
                  {c.items.map((it) => (
                    <li key={it}><T>{it}</T></li>
                  ))}
                </ul>
              </span>
            )}
            {expandable && !isOpen && (
              <span className={styles.roundBtn} aria-hidden>
                <img alt="" src={`${A}/add.svg`} width={24} height={24} />
              </span>
            )}
          </>
        );
        /* the whole card is the trigger in the prototype (ON_CLICK on the instance) */
        return expandable ? (
          <button
            key={c.title}
            type="button"
            className={`${styles.evpCard} ${isOpen ? styles.evpOpen : ""}`}
            aria-expanded={isOpen}
            onClick={() => setOpen(isOpen ? null : i)}
          >
            {body}
          </button>
        ) : (
          <div key={c.title} className={styles.evpCard}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Why AspenView value cards (Card 711:7271 → 711:7245, ON_CLICK SMART_ANIMATE) ----------
   Image boxes reproduce each card's crop from Figma; body copy from each instance's "Body text" (1048:5751–5756). */
type Crop = { w: number; inset?: string; img: CSSProperties };
const VALUES: { title: string; img: string; crop: Crop; text: string[] }[] = [
  {
    title: "Integrity",
    img: "value-integrity.jpg",
    crop: { w: 858, img: { inset: 0, width: "100%", height: "100%", objectFit: "cover" } },
    text: [
      "We act with integrity by always doing what is right.",
      "We uphold the highest ethical standards in our actions and take responsibility for our decisions and their impact on others.",
    ],
  },
  {
    title: "Trust & Respect",
    img: "value-trust.jpg",
    crop: { w: 792, img: { left: "17.99%", top: "-0.1%", width: "100%", height: "100%" } },
    text: [
      "We build trust through collaboration, honesty, and consistency.",
      "We cultivate respect by valuing diverse perspectives, treating everyone with dignity, and nurturing an environment where all voices are heard and appreciated.",
    ],
  },
  {
    title: "Reliability",
    img: "value-reliability.jpg",
    crop: { w: 800.443, inset: "-15.45% -15.23% -7.46% -7.36%", img: { left: "13.26%", top: "-1.57%", width: "100%", height: "100%" } },
    text: [
      "We are a dependable partner. We honor our promises and support our clients, employees, and stakeholders by fostering accountability and a culture of resilience.",
    ],
  },
  {
    title: "Excellence",
    img: "value-excellence.jpg",
    crop: { w: 858, img: { left: "26.43%", top: "9.66%", width: "90.43%", height: "90.44%" } },
    text: [
      "We strive for excellence. We set high standards, innovate, and continuously improve to inspire confidence and create lasting, exceptional results.",
    ],
  },
  {
    title: "Client Focus",
    img: "value-client.jpg",
    crop: { w: 792, inset: "-8.7% -8.73%", img: { left: "26.21%", top: "12.7%", width: "87.14%", height: "87.16%" } },
    text: [
      "We place our clients at the center of everything we do. We empower employees to understand client needs, build enduring relationships, and create value that exceeds expectations.",
    ],
  },
];

export function ValueCards() {
  const [open, setOpen] = useState<number | null>(null);
  const card = (v: (typeof VALUES)[number], i: number) => {
    const isOpen = open === i;
    const expandable = v.text.length > 0;
    return (
      <article key={v.title} className={`${styles.value} ${isOpen ? styles.valueOpen : ""}`}>
        <div className={styles.valueImgBox} style={{ width: v.crop.w }} aria-hidden>
          <div className={styles.valueImgInner} style={v.crop.inset ? { inset: v.crop.inset } : undefined}>
            <img alt="" src={`${A}/${v.img}`} style={v.crop.img} />
          </div>
        </div>
        <span className={styles.valueShade} aria-hidden />
        <div className={styles.valueBody}>
          <div className={styles.valueCopy}>
            <span className={styles.valueBar} />
            <h3 className={styles.valueTitle}><T>{v.title}</T></h3>
            {expandable && (
              <div className={styles.valueText} aria-hidden={!isOpen}>
                {v.text.map((p) => (
                  <p key={p}><T>{p}</T></p>
                ))}
              </div>
            )}
          </div>
          {expandable && (
            <button
              type="button"
              className={styles.valueBtn}
              aria-expanded={isOpen}
              aria-label={`${isOpen ? "Hide" : "Read about"} ${v.title}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <img alt="" src={`${A}/${isOpen ? "minus" : "add"}.svg`} width={24} height={24} />
            </button>
          )}
        </div>
      </article>
    );
  };
  return (
    <div className={styles.values}>
      <div className={styles.valuesRow}>{VALUES.slice(0, 3).map((v, i) => card(v, i))}</div>
      <div className={`${styles.valuesRow} ${styles.valuesRowWide}`}>{VALUES.slice(3).map((v, i) => card(v, i + 3))}</div>
    </div>
  );
}
