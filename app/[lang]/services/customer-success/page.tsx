import type { Metadata } from "next";
import { CsCapabilities, CsChallenge, CsHero, CsHowItWorks, CsWhatWeDo } from "@/components/cs/CustomerSuccess";
import ShaderCta from "@/components/sections/ShaderCta";
import { ROUTES } from "@/lib/routes";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/services/customer-success", {
    title: "Customer Success — AspenView Technology Partners",
    description: "Scale your Customer Success capabilities with experienced nearshore professionals who help SaaS and technology companies drive adoption, retention and growth.",
  });
}

export default function CustomerSuccessPage() {
  return (
    <>
      <CsHero />
      <CsChallenge />
      <CsWhatWeDo />
      <CsHowItWorks />
      <CsCapabilities />
      <ShaderCta
        mobilePad={160}
        title={<T>{"Stronger Customer Relationships Start With the Right People."}</T>}
        text={<T>{"Let's explore how experienced Customer Success professionals can help you improve retention, scale your capabilities, and create more value from every customer relationship."}</T>}
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
