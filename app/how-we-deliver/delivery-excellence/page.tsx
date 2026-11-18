import type { Metadata } from "next";
import { ExHero, ExOnboarding, ExLaunch, ExPillars, ExQuality, ExSuccess, ExCta } from "@/components/delivery/Excellence";

export const metadata: Metadata = {
  title: "Delivery Excellence | AspenView",
  description: "From a confident start to lasting business impact — onboarding, client launch, quality and continued success.",
};

export default function DeliveryExcellencePage() {
  return (
    <>
      <ExHero />
      <ExOnboarding />
      <ExLaunch />
      <ExPillars />
      <ExQuality />
      <ExSuccess />
      <ExCta />
    </>
  );
}
