import type { Metadata } from "next";
import {
  AiHero,
  AitEnable,
  AitAction,
  AitResponsible,
  AitOutcomes,
  AitAdvantage,
  AiGridCta,
} from "@/components/ai/Transformation";

export const metadata: Metadata = {
  title: "AI Transformation | AspenView",
  description:
    "Move beyond isolated AI tools to AI-native ways of working, combining people, processes, data and agentic technology.",
};

export default function AiTransformationPage() {
  return (
    <>
      <AiHero
        eyebrow="AI TRANSFORMATION"
        title="Don't Just Adopt AI."
        accent="Redesign What's Possible With It."
        text="Move beyond isolated AI tools to AI-native ways of working; combining people, processes, data and agentic technology to create measurable business advantage."
        cta="Explore AI transformation"
        ctaHref="#how-we-enable"
        video="/videos/ai-capabilities-hero.webm"
      />
      <AitEnable />
      <AitAction />
      <AitResponsible />
      <AitOutcomes />
      <AitAdvantage />
      <AiGridCta
        title="What Could AI Change for Your Business?"
        text={
          <>
            Let&apos;s identify where AI can create meaningful advantage
            <br />
            and what it will take to get there.
          </>
        }
        cta="Talk to our team"
      />
    </>
  );
}
