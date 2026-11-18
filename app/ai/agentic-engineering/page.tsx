import type { Metadata } from "next";
import { AiHero, AiGridCta } from "@/components/ai/Transformation";
import { AeShift, AeRoad, AeValue, AeAdvantage } from "@/components/ai/Agentic";

export const metadata: Metadata = {
  title: "Agentic Engineering | AspenView",
  description:
    "Engineered by people. Powered by agents. Intelligent agents across the development lifecycle, governed by your engineers.",
};

export default function AgenticEngineeringPage() {
  return (
    <>
      <AiHero
        eyebrow="Agentic Engineering"
        title="Build software differently."
        accent="Engineered by people. Powered by agents."
        text="Move beyond AI-assisted coding to an engineering model where intelligent agents work across the development lifecycle — while your engineers govern quality, security and outcomes."
        cta="Explore Agentic engineering"
        ctaHref="#the-shift"
        video="/videos/agentic-engineering-hero.webm"
        ratio="2074 / 790"
        masked={false}
        textWidth={839}
      />
      <AeShift />
      <AeRoad />
      <AeValue />
      <AeAdvantage />
      <AiGridCta
        title={
          <>
            Ready to rethink <strong>how software gets built?</strong>
          </>
        }
        cta="Talk to our team"
        spaced
      />
    </>
  );
}
