import Link from "@/components/i18n/LocaleLink";
import Logo from "./Logo";
import { ROUTES } from "@/lib/routes";
import styles from "./Footer.module.css";

import { T } from "@/components/i18n/T";

const CITIES = ["Denver", "Bogotá", "Medellín", "Buenos Aires"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.glowRight} aria-hidden>
        <img alt="" src="/assets/footer/ellipse-3.svg" />
      </span>
      <span className={styles.glowLeft} aria-hidden>
        <img alt="" src="/assets/footer/ellipse-4.svg" />
      </span>

      <div className={styles.inner}>
        <div className={styles.pageLinks}>
          <div className={styles.logos}>
            <span className={styles.logoSpacer} />
            <Link href={ROUTES.home} aria-label="AspenView home">
              <Logo variant="white" className={styles.logo} />
            </Link>
          </div>
          <div className={styles.right}>
            <nav className={styles.links} aria-label="Footer">
              <Link href={ROUTES.careers}><T>{"Careers"}</T></Link>
              <Link href={ROUTES.privacy}><T>{"Privacy"}</T></Link>
              <Link href={ROUTES.terms}><T>{"Terms"}</T></Link>
            </nav>
            <ul className={styles.cities}>
              {CITIES.map((c) => (
                <li key={c}><T>{c}</T></li>
              ))}
            </ul>
          </div>
        </div>
        <img alt="" src="/assets/footer/divider.svg" className={styles.divider} />
        <p className={styles.rights}><T>{"@ 2026 AspenView Technology Partners. All rights reserved."}</T></p>
      </div>
    </footer>
  );
}
