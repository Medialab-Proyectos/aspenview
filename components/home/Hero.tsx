"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Hero.module.css";

const ShaderBg = dynamic(() => import("../sections/ShaderBg"), { ssr: false });

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  cta: string;
  href: string;
};

// Figma component set "test responsive - Hero section component - 2" (997:14604)
const SLIDES: Slide[] = [
  {
    eyebrow: "Technology Services",
    title: (
      <>
        The AI-Native Technology Partner Built <strong>to Move Fast.</strong>
      </>
    ),
    text: "We help organizations build and scale technology teams faster, combining expert engineering across Latin America with AI-powered delivery.",
    cta: "Accelerate your next move",
    href: ROUTES.aiTransformation,
  },
  {
    eyebrow: "Leadership",
    title: (
      <>
        Fortune 500 Experience. <strong>Focused on Your Growth</strong>.
      </>
    ),
    text: "Work with a technology partner led by executives who’ve helped some of the world’s largest organizations solve complex business challenges.",
    cta: "Discover who we are",
    href: ROUTES.whoWeAre,
  },
  {
    eyebrow: "Talent",
    title: (
      <>
        <span className={styles.line}>The Right Talent. </span>
        <strong className={styles.line}>Ready to Scale Your Business.</strong>
      </>
    ),
    text: "From software engineering to AI and data, we build high-performing nearshore teams that integrate seamlessly with yours.",
    cta: "Discover what our teams can deliver",
    href: ROUTES.serviceOfferings,
  },
];

// Prototype: AFTER_TIMEOUT 3.5s → SMART_ANIMATE ease-out 0.5s
const SLIDE_DELAY = 3500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(next, SLIDE_DELAY);
    return () => window.clearTimeout(t);
  }, [index, paused, next]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ShaderBg className={styles.shader} />

      <div className={styles.inner}>
        <div className={styles.topSpacer} />

        <div className={styles.stack}>
          {SLIDES.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={s.eyebrow}
                className={`${styles.slide} ${active ? styles.slideActive : ""}`}
                aria-hidden={!active}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${SLIDES.length}`}
                inert={!active}
              >
                <div className={styles.copy}>
                  <p className={styles.eyebrow}>{s.eyebrow}</p>
                  {i === 0 ? <h1 className={styles.title}>{s.title}</h1> : <p className={styles.title}>{s.title}</p>}
                  <div className={styles.textWrap}>
                    <p className={styles.text}>{s.text}</p>
                  </div>
                </div>
                <div className={styles.actions}>
                  <PrimaryButton href={s.href}>{s.cta}</PrimaryButton>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.dots} role="tablist" aria-label="Hero slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
