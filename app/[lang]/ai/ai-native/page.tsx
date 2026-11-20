import type { Metadata } from "next";
import { AiHero, AiGridCta } from "@/components/ai/Transformation";
import { NativeMeaning, NativeOperating, NativeWhy } from "@/components/ai/Native";
import { ROUTES } from "@/lib/routes";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/ai/ai-native", {
    title: "AI-Native at AspenView | AspenView",
    description: "We're redesigning how AspenView operates around what people and AI can accomplish together.",
  });
}

export default function AiNativePage() {
  return (
    <>
      <AiHero
        eyebrow="AI-Native at AspenView"
        title={<T>{"We're Not Just Talking About AI."}</T>}
        accent={<T>{"We're Building Our Business Around It."}</T>}
        text={
          <><T>{"We're redesigning how AspenView operates around what"}</T><br /><T>{"people and AI can accomplish together."}</T></>
        }
        cta="Explore our approach"
        ctaHref="#our-approach"
        video="/videos/ai-native-hero.webm"
        ratio="2296 / 680"
        masked={false}
      />
      <NativeMeaning />
      <NativeOperating />
      <NativeWhy />
      <AiGridCta
        title={
          <><T>{"Build an Organization Ready"}</T><br /><T>{"for "}</T><strong><T>{"What AI Makes Possible"}</T></strong>
          </>
        }
        cta="Start your AI transformation"
        ctaHref={ROUTES.aiTransformation}
      />
    </>
  );
}
