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
        title="We're not just talking about AI."
        accent="We're building our business around it."
        text={
          <>
            We&apos;re redesigning how AspenView operates around what
            <br />
            people and AI can accomplish together.
          </>
        }
        cta="Explore our approach"
        ctaHref="#our-approach"
        video="/videos/ai-native-hero.mp4"
        ratio="2296 / 680"
        masked={false}
      />
      <NativeMeaning />
      <NativeOperating />
      <NativeWhy />
      <AiGridCta
        title={
          <>
            Build an organization ready
            <br />
            for <strong>what AI makes possible</strong>
          </>
        }
        cta="Start your AI transformation"
        ctaHref={ROUTES.aiTransformation}
      />
    </>
  );
}
