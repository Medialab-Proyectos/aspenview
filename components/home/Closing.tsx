import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Closing.module.css";

export default function Closing() {
  return (
    <>
      {/* Careers — Figma 995:13401 */}
      <section className={styles.careers}>
        <div className={styles.careersBg} aria-hidden>
          <img alt="" src="/assets/home/careers-bg.png" />
          <span className={styles.careersShade} />
        </div>
        <div className={styles.careersInner}>
          <div className={styles.careersCol}>
            <div className={styles.careersTop}>
              <div className={styles.careersHead}>
                <Eyebrow tone="white">Careers</Eyebrow>
                <div className={styles.rooted}>
                  <img alt="Rooted in people, powered by connection" src="/assets/home/rooted-in-people.png" />
                </div>
              </div>
              <p className={styles.careersText}>
                Every engagement we deliver is only as strong as the people behind it. We built a culture where global
                standards meet local connection, where quality talent grows without limits, speed comes from people who
                show up ready, and authenticity is simply how we work, with clients and with each other.
              </p>
            </div>
            <div className={styles.careersCta}>
              <h2 className={styles.careersTitle}>Want to Be Part of the AspenCrew?</h2>
              <PrimaryButton href={ROUTES.careers} arrow>
                Explore Opportunities
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Banner 2 — Figma 995:13415 */}
      <section className={styles.banner}>
        <span className={`${styles.patron} ${styles.patronRight}`} aria-hidden>
          <img alt="" src="/assets/home/patron-dots-2.svg" />
        </span>
        <span className={`${styles.patron} ${styles.patronLeft}`} aria-hidden>
          <img alt="" src="/assets/home/patron-dots.svg" />
        </span>
        <p className={styles.bannerText}>
          Experience the difference of a partner dedicated to your <b className={styles.bright}>long-term success</b>:{" "}
          <b>AspenView Technology Partners</b>,{" "}
          <b className={styles.bright}>ready to scale and evolve alongside your organization</b>.
        </p>
      </section>

      {/* CTA — Figma 995:13423 */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <span className={styles.glow} aria-hidden>
              <img alt="" src="/assets/home/cta-glow.svg" />
            </span>
            <h2 className={styles.ctaTitle}>Build What’s Next With a Team Ready Now.</h2>
            <p className={styles.ctaText}>Tell us where you’re headed. We’ll show you the fastest, clearest path there.</p>
          </div>
          <div className={styles.ctaActions}>
            <PrimaryButton href={ROUTES.contact} arrow>
              Let&apos;s Discuss Your Next Tech Priority
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
