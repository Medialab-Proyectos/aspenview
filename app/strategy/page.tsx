import type { Metadata } from "next";
import { TeHero, TeAdvantage, TeBuildAhead, TeProve, TeLead, TeGuarantee, TeImpact, TeCta } from "@/components/strategy/Talent";

export const metadata: Metadata = {
  title: "Talent Enablement | AspenView",
  description:
    "Proactive talent planning, AI-powered matching and experienced specialists to access, validate and sustain the engineering expertise your business needs.",
};

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
