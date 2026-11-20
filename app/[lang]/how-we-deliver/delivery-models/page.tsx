import type { Metadata } from "next";
import { MdHero, MdValue, MdModels, MdDifference, MdQuality } from "@/components/delivery/Models";

import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/how-we-deliver/delivery-models", {
    title: "Delivery Models | AspenView",
    description: "Structured to deliver. Agile by design. ADNT™, AFMS™ and ALMS™ nearshore delivery models.",
  });
}

export default function DeliveryModelsPage() {
  return (
    <>
      <MdHero />
      <MdValue />
      <MdModels />
      <MdDifference />
      <MdQuality />
    </>
  );
}
