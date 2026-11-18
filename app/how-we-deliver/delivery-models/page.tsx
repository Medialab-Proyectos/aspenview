import type { Metadata } from "next";
import { MdHero, MdValue, MdModels, MdDifference, MdQuality } from "@/components/delivery/Models";

export const metadata: Metadata = {
  title: "Delivery Models | AspenView",
  description: "Structured to deliver. Agile by design. ADNT™, AFMS™ and ALMS™ nearshore delivery models.",
};

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
