import type { Metadata } from "next";
import { AiHero, AiGridCta } from "@/components/ai/Transformation";
import { NativeMeaning, NativeOperating, NativeWhy } from "@/components/ai/Native";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "AI-Native at AspenView | AspenView",
  description:
    "We're redesigning how AspenView operates around what people and AI can accomplish together.",
};

export default function AiNativePage() {
  return (
    <>
      <AiHero
        eyebrow="AI-Native at AspenView"
        title="We're Not Just Talking About AI."
        accent="We're Building Our Business Around It."
        text={
          <>
            We&apos;re redesigning how AspenView operates around what
            <br />
            people and AI can accomplish together.
          </>
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
          <>
            Build an Organization Ready
            <br />
            for <strong>What AI Makes Possible</strong>
          </>
        }
        cta="Start your AI transformation"
        ctaHref={ROUTES.aiTransformation}
      />
    </>
  );
}
