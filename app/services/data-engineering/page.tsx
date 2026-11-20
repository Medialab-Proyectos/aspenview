import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Challenge from "@/components/service/Challenge";
import WhatWeDo from "@/components/service/WhatWeDo";
import HowItWorks from "@/components/service/HowItWorks";
import Capabilities from "@/components/service/Capabilities";
import ShaderCta from "@/components/sections/ShaderCta";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Data Engineering, BI & AI — AspenView Technology Partners",
  description:
    "Connect data engineering, governance, BI, analytics and AI into one continuous discipline, from raw information to trusted decisions.",
};

const G = "/assets/glyphs";

export default function DataEngineeringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Data Engineering, BI & AI"
        title={
          <>
            Turn Your Data Into Something Your Business and AI
            <br />
          </>
        }
        highlight="Can Trust"
        highlightInline
        text="Connect data engineering, governance, BI, analytics and AI into one continuous discipline, from raw information to trusted decisions."
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
        mediaLabel="Trusted data lifecycle"
        image={{ src: "/assets/data/hero.gif", width: 600, height: 390 }}
      />

      <Challenge
        data={{
          title: (
            <>
              AI Ambitions Are Moving Faster Than <strong>Data Readiness</strong>
            </>
          ),
          text: (
            <p>
              Organizations are investing aggressively in AI, but fragmented systems, inconsistent data quality and
              limited governance continue to hold those initiatives back. Trusted AI starts with trusted data.
            </p>
          ),
          main: {
            image: { src: "/assets/data/challenge-1.gif", inset: "19.23% 0" },
            title: (
              <>
                Connect the <strong>Data Foundation</strong>
              </>
            ),
            text: "Bring fragmented data into one continuous discipline, from raw information to trusted decisions.",
            tags: ["Systems", "Integrations", "Trust"],
            label: "FOUNDATION",
            shortTitle: "Fragmented Systems",
            shortText: "Data lives across disconnected platforms and pipelines.",
          },
          side: [
            {
              label: "READINESS",
              image: { src: "/assets/data/challenge-2.gif", inset: "19.49% 0" },
              title: "Inconsistent Data Quality",
              text: "AI ambitions depend on reliable data.",
              expanded: {
                title: (
                  <>
                    Reliable Data, <strong>Reliable AI</strong>
                  </>
                ),
                text: "AI ambitions depend on reliable data. Inconsistent quality undermines every model, report and decision built on top of it.",
                tags: ["Quality", "Consistency", "Accuracy"],
              },
            },
            {
              label: "GOVERNANCE",
              image: { src: "/assets/data/challenge-3.gif", inset: "12.82% 0" },
              title: "Limited Governance",
              text: "Trust requires lineage, consistency and control.",
              expanded: {
                title: (
                  <>
                    Governance That <strong>Builds Trust</strong>
                  </>
                ),
                text: "Trust requires lineage, consistency and control across every source, pipeline and decision.",
                tags: ["Lineage", "Control", "Compliance"],
              },
            },
          ],
        }}
      />

      <WhatWeDo
        data={{
          layout: "grid",
          title: (
            <>
              One Connected <strong>Data Discipline</strong>
            </>
          ),
          text: (
            <>
              <p>
                AspenView connects the capabilities required to move from fragmented data to trusted intelligence; and
                ultimately to AI that can operate on a reliable foundation.
              </p>
              <p>
                <b>BI is the bedrock. AI is what we build on top of it.</b>
              </p>
            </>
          ),
          photo: { src: "/assets/software/nearshore-squads.png", label: "People behind trusted data" },
          cards: [
            {
              icon: "/assets/data/database.svg",
              title: "Data Engineering & Architecture",
              text: "Build scalable foundations for how data is collected, stored and used.",
            },
            {
              icon: "/assets/data/routing.svg",
              title: "Integration & Pipelines",
              text: "Connect systems and move data reliably across the organization.",
            },
            {
              icon: "/assets/data/shield-check.svg",
              title: "Governance & Quality",
              text: "Improve trust, consistency, lineage and control.",
            },
            {
              icon: "/assets/data/widget-add.svg",
              title: "BI & Visualization",
              text: "Turn governed data into accessible business intelligence.",
            },
            {
              icon: "/assets/data/course-up.svg",
              title: "Advanced Analytics",
              text: "Move beyond reporting to deeper insight and decision support.",
            },
            {
              icon: "/assets/data/pc.svg",
              title: "AI & ML Enablement",
              text: "Build AI and machine learning capabilities on top of trusted, governed data.",
            },
          ],
        }}
      />

      <HowItWorks
        data={{
          title: (
            <>
              From Requirement
              <br />
              <strong>to Production</strong>
            </>
          ),
          text: "AI is integrated across the delivery lifecycle, not added as a separate step.",
          steps: [
            {
              icon: `${G}/database.svg`,
              title: "Source",
              body: "Discover and connect data across internal and external systems.",
              items: "Discovery / Integration",
            },
            {
              icon: `${G}/filter.svg`,
              title: "Clean",
              body: "Improve quality, catalog, classify and govern data.",
              items: "Quality / Governance",
            },
            {
              icon: `${G}/clipboard-list.svg`,
              title: "Model",
              body: "Structure data for consistent analysis and use.",
              items: "Structure / Consistency",
            },
            {
              icon: "/assets/how/clipboard-check.svg",
              title: "Decide",
              body: "Turn trusted data into actionable business intelligence",
              items: "Business intelligence / Decisions",
            },
            {
              icon: `${G}/scale.svg`,
              title: "Scale",
              body: "Move toward increasingly intelligent and agentic data operations.",
              items: "Intelligence / Agentic operations",
            },
          ],
          note: {
            label: "TRUSTED FOUNDATIONS",
            text: "BI is the bedrock. AI is what we build on top of it. Quality, governance and trust connect every stage of the data lifecycle.",
          },
        }}
      />

      <Capabilities
        data={{
          title: "Where We Can Help",
          subtitle: "Six Capability Areas",
          text: "Six recurring data challenges, connected by one continuous discipline, from raw information to trusted decisions.",
          items: [
            {
              label: "Data Cleansing & AI Readiness",
              icon: `${G}/check-circle.svg`,
              tag: "Data / 01",
              text: "Standardize, validate and govern critical data before it becomes the foundation for AI.",
              chips: ["Standardize", "Validate", "Govern"],
            },
            {
              label: "Data Migration",
              icon: `${G}/database.svg`,
              tag: "Data / 02",
              text: "Move data from legacy and on-premise environments to modern cloud platforms with validation built into the process.",
              chips: ["Legacy", "Cloud", "Validation"],
            },
            {
              label: "Pipeline Modernization & DataOps",
              icon: `${G}/lightbulb.svg`,
              tag: "Data / 03",
              text: "Transform legacy ETL into tested, observable and maintainable modern pipelines.",
              chips: ["ETL", "Observability", "Data ops"],
            },
            {
              label: "Data Estate Discovery & Modernization",
              icon: `${G}/routing.svg`,
              tag: "Data / 04",
              text: "Uncover lineage, business rules and dependencies across undocumented data environments.",
              chips: ["Lineage", "Business rules", "Dependencies"],
            },
            {
              label: "BI Modernization",
              icon: `${G}/widget-6.svg`,
              tag: "Data / 05",
              text: "Rationalize fragmented reporting environments and build governed, modern BI foundations.",
              chips: ["Reporting", "Governance", "BI"],
            },
            {
              label: "AI on Governed Data",
              icon: `${G}/book-bookmark.svg`,
              tag: "Data / 06",
              text: "Create the knowledge, data and feature foundations required for analytics and AI to work on information the business can trust.",
              chips: ["Knowledge", "Features", "Trusted AI"],
            },
          ],
        }}
      />

      <ShaderCta
        title={<>Ready to Turn Your Data Into a Stronger Foundation for <strong>Growth and AI?</strong></>}
        text="Let's identify where better data can create the greatest impact."
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
