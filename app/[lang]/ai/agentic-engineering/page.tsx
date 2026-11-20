import type { Metadata } from "next";
import { AiHero, AiGridCta } from "@/components/ai/Transformation";
import { AeShift, AeRoad, AeValue, AeAdvantage } from "@/components/ai/Agentic";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/ai/agentic-engineering", {
    title: "Agentic Engineering | AspenView",
    description: "Engineered by people. Powered by agents. Intelligent agents across the development lifecycle, governed by your engineers.",
  });
}

export default function AgenticEngineeringPage() {
  return (
    <>
      <AiHero
        eyebrow="Agentic Engineering"
        title={<T>{"Build Software Differently."}</T>}
        accent={<T>{"Engineered by People. Powered by Agents."}</T>}
        text={<T>{"Move beyond AI-assisted coding to an engineering model where intelligent agents work across the development lifecycle; while your engineers govern quality, security and outcomes."}</T>}
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
          <><T>{"Ready to Rethink "}</T><strong><T>{"How Software Gets Built?"}</T></strong>
          </>
        }
        cta="Talk to our team"
        spaced
      />
    </>
  );
}
