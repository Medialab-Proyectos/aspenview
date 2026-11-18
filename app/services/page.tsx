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
        title="Technology services, re‑engineered for"
        highlight="the agentic era."
        cta={{ label: "Schedule your assessment", href: ROUTES.contact }}
        media={{ video: "/videos/01-service-offerings.webm", label: "Service offerings animation" }}
      >
        <p>
          <b>AspenView</b> combines specialized expertise, nearshore execution and agentic AI to help organizations
          build, modernize and operate faster — without compromising quality, control or accountability.
        </p>
      </PageHero>

      <AiBand />

      <section className={styles.services}>
        <div className={`wrap ${styles.inner}`}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              <span className={styles.tag}>
                <span className={styles.tagLine} />
                <span className={styles.tagText}>Services</span>
              </span>
              <span className={styles.title}>Built around the priorities businesses are facing now.</span>
            </h2>
            <p className={styles.lead}>
              Specialized expertise and agentic AI applied where each business is under the most pressure.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      <ShaderCta
        title="Talk to our team about an AI assessment for your next initiative"
        text="Delivering client service excellence is our singular obsession. Talk to our team about an engineering assessment for your next initiative."
        cta={{ label: "Schedule your assessment", href: ROUTES.contact }}
      />
    </>
  );
}
