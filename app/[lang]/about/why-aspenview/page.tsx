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

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/about/why-aspenview", {
    title: "Why AspenView | AspenView",
    description: "Technology resources are easy to find, the right partner isn't. Speed, quality and measurable business impact.",
  });
}

export default function WhyAspenviewPage() {
  return (
    <>
      <AboutHero
        eyebrow="WHY ASPENVIEW"
        title={<T>{"Technology Resources Are Easy to Find, the Right Partner Isn’t"}</T>}
        text={<T>{"The challenge isn't simply finding technology capability. It's finding the right expertise, at the right time, with a partner that understands what you're trying to achieve, and can deliver against it."}</T>}
      />
      <WhyPillars />
      <WhyLeadership />
      <WhyAiNative />
      <WhyTalent />
      <WhySpeed />
      <WhyEconomics />
      <AboutCta
        title={<T>{"No two technology challenges are exactly alike. Your engagement model should be just as unique."}</T>}
        text={<T>{"Tell us about the outcome you need. We'll bring the leadership, the talent and the accountability to get you there."}</T>}
        cta="Talk to AspenView"
      />
    </>
  );
}
