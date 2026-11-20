import type { Metadata } from "next";
import { ExHero, ExOnboarding, ExLaunch, ExPillars, ExQuality, ExSuccess, ExCta } from "@/components/delivery/Excellence";

import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/how-we-deliver/delivery-excellence", {
    title: "Delivery Excellence | AspenView",
    description: "From a confident start to lasting business impact: onboarding, client launch, quality and continued success.",
  });
}

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
