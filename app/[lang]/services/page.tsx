import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AiBand from "@/components/sections/AiBand";
import ShaderCta from "@/components/sections/ShaderCta";
import ServiceCards from "@/components/services/ServiceCards";
import { ROUTES } from "@/lib/routes";
import styles from "./page.module.css";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/services", {
    title: "Service offerings — AspenView Technology Partners",
    description: "AspenView combines specialized expertise, nearshore execution and agentic AI to help organizations build, modernize and operate faster.",
  });
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<T>{"Technology Services, Re‑engineered for"}</T>}
        highlight={<T>{"the Agentic Era."}</T>}
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
                <span className={styles.tagText}><T>{"Services"}</T></span>
              </span>
              <span className={styles.title}><T>{"Built Around the Priorities Businesses Are Facing Now."}</T></span>
            </h2>
            <p className={styles.lead}><T>{"Specialized expertise and agentic AI applied where each business is under the most pressure."}</T></p>
          </div>
          <ServiceCards />
        </div>
      </section>

      <ShaderCta
        title={<T>{"Your Next Technology Initiative Deserves the Right Execution."}</T>}
        text={<T>{"Delivering client service excellence is our singular obsession. Talk to our team about an engineering assessment for your next initiative."}</T>}
        cta={{ label: "Talk to Our Team", href: ROUTES.contact }}
      />
    </>
  );
}
