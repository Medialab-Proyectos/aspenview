import type { Metadata } from "next";
import { AboutHero, AboutCta } from "@/components/about/AboutShared";
import {
  WhyPillars,
  WhyLeadership,
  WhyAiNative,
  WhyTalent,
  WhySpeed,
  WhyEconomics,
} from "@/components/about/WhyAspenview";

export const metadata: Metadata = {
  title: "Why AspenView | AspenView",
  description: "Technology resources are easy to find, the right partner isn't. Speed, quality and measurable business impact.",
};

export default function WhyAspenviewPage() {
  return (
    <>
      <AboutHero
        eyebrow="WHY ASPENVIEW"
        title="Technology resources are easy to find, the right partner isn’t"
        text="The challenge isn't simply finding technology capability. It's finding the right expertise, at the right time, with a partner that understands what you're trying to achieve — and can deliver against it."
      />
      <WhyPillars />
      <WhyLeadership />
      <WhyAiNative />
      <WhyTalent />
      <WhySpeed />
      <WhyEconomics />
      <AboutCta
        title="No two technology challenges are exactly alike. Your engagement model should be just as unique."
        text="Tell us about the outcome you need. We'll bring the leadership, the talent and the accountability to get you there."
        cta="Talk to AspenView"
      />
    </>
  );
}
