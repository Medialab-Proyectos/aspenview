import type { Metadata } from "next";
import { TeHero, TeAdvantage, TeBuildAhead, TeProve, TeLead, TeGuarantee, TeImpact, TeCta } from "@/components/strategy/Talent";

import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/strategy", {
    title: "Talent Enablement | AspenView",
    description: "Proactive talent planning, AI-powered matching and experienced specialists to access, validate and sustain the engineering expertise your business needs.",
  });
}

export default function TalentEnablementPage() {
  return (
    <>
      <TeHero />
      <TeAdvantage />
      <TeBuildAhead />
      <TeProve />
      <TeLead />
      <TeGuarantee />
      <TeImpact />
      <TeCta />
    </>
  );
}
