import { Eyebrow } from "../ui";
import styles from "./Contact.module.css";

import { T } from "@/components/i18n/T";

/* Excel 61: AspenView office locations */
const OFFICES = [
  { city: "Denver, USA", label: "Corporate Headquarters", address: "1550 Wewatta St, Suite 200, Denver, CO 80202, USA" },
  { city: "Bogotá, Colombia", address: "Carrera 19 #100-45, Piso 8, Bogotá, Colombia" },
  { city: "Medellín, Colombia", address: "Calle 7D #43A-40, Piso 8, Medellín, Colombia" },
  { city: "Buenos Aires, Argentina", address: "Maipú 1210, Piso 8, C1006, Ciudad Autónoma de Buenos Aires, Argentina" },
];

export default function ContactLocations() {
  return (
    <section className={styles.locations}>
      <div className={`wrap ${styles.locationsInner}`}>
        <h2 className={styles.locationsHeading}>
          <Eyebrow><T>{"Our offices"}</T></Eyebrow>
          <span className={styles.locationsTitle}><T>{"AspenView Office Locations"}</T></span>
        </h2>
        <ul className={styles.offices}>
          {OFFICES.map((o) => (
            <li key={o.city} className={`${styles.office} hover-blue`}>
              {o.label && <p className={styles.officeLabel}><T>{o.label}</T></p>}
              <h3 className={styles.officeCity}><T>{o.city}</T></h3>
              <a
                className={styles.officeAddress}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <T>{o.address}</T>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
