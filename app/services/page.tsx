import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AiBand from "@/components/sections/AiBand";
import ShaderCta from "@/components/sections/ShaderCta";
import ServiceCards from "@/components/services/ServiceCards";
import { ROUTES } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Service offerings — AspenView Technology Partners",
  description:
    "AspenView combines specialized expertise, nearshore execution and agentic AI to help organizations build, modernize and operate faster.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Technology Services, Re‑engineered for"
        highlight="the Agentic Era."
        cta={{ label: "Schedule your assessment", href: ROUTES.contact }}
        media={{ video: "/videos/01-service-offerings.webm", label: "Service offerings animation" }}
      />

      <AiBand />

      <section className={styles.services}>
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              <span className={styles.tag}>
                <span className={styles.tagLine} />
                <span className={styles.tagText}>Services</span>
              </span>
              <span className={styles.title}>Built Around the Priorities Businesses Are Facing Now.</span>
            </h2>
            <p className={styles.lead}>
              Specialized expertise and agentic AI applied where each business is under the most pressure.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      <ShaderCta
        title="Your Next Technology Initiative Deserves the Right Execution."
        text="Delivering client service excellence is our singular obsession. Talk to our team about an engineering assessment for your next initiative."
        cta={{ label: "Talk to Our Team", href: ROUTES.contact }}
      />
    </>
  );
}
