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

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/ai/ai-transformation", {
    title: "AI Transformation | AspenView",
    description: "Move beyond isolated AI tools to AI-native ways of working, combining people, processes, data and agentic technology.",
  });
}

export default function AiTransformationPage() {
  return (
    <>
      <AiHero
        eyebrow="AI TRANSFORMATION"
        title={<T>{"Don't Just Adopt AI."}</T>}
        accent={<T>{"Redesign What's Possible With It."}</T>}
        text={<T>{"Move beyond isolated AI tools to AI-native ways of working; combining people, processes, data and agentic technology to create measurable business advantage."}</T>}
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
        title={<T>{"What Could AI Change for Your Business?"}</T>}
        text={
          <><T>{"Let's identify where AI can create meaningful advantage"}</T><br /><T>{"and what it will take to get there."}</T></>
        }
        cta="Talk to our team"
      />
    </>
  );
}
