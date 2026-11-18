import type { Metadata } from "next";
import { CsCapabilities, CsChallenge, CsHero, CsHowItWorks, CsWhatWeDo } from "@/components/cs/CustomerSuccess";
import ShaderCta from "@/components/sections/ShaderCta";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Customer Success — AspenView Technology Partners",
  description:
    "Scale your Customer Success capabilities with experienced nearshore professionals who help SaaS and technology companies drive adoption, retention and growth.",
};

export default function CustomerSuccessPage() {
  return (
    <>
      <CsHero />
      <CsChallenge />
      <CsWhatWeDo />
      <CsHowItWorks />
      <CsCapabilities />
      <ShaderCta
        title="Stronger customer relationships start with the right people."
        text="Let's explore how experienced Customer Success professionals can help you improve retention, scale your capabilities, and create more value from every customer relationship."
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
