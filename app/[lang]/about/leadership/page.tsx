import type { Metadata } from "next";
import { AboutHero, AboutCta } from "@/components/about/AboutShared";
import { LeadershipWho, LeadershipExecutives, LeadershipAdvisors } from "@/components/about/Leadership";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/about/leadership", {
    title: "Leadership | AspenView",
    description: "AspenView was built by experienced technology and business leaders who understand what it takes to transform, scale and deliver.",
  });
}

export default function LeadershipPage() {
  return (
    <>
      <AboutHero
        eyebrow="Leadership"
        title={<T>{"We've Been on the Other Side of the Challenge"}</T>}
        text={<T>{"AspenView was built by experienced technology and business leaders who understand what it takes to transform, scale and deliver inside complex organizations."}</T>}
        photo="/assets/about/leadership-hero.webp"
      />
      <LeadershipWho />
      <LeadershipExecutives />
      <LeadershipAdvisors />
      <AboutCta
        tabletPad={260}
        large
        title={<T>{"Ready to Work With a Partner Who Delivers?"}</T>}
        text={<T>{"Tell us about the outcome you need. We'll bring the leadership, the talent and the accountability to get you there."}</T>}
        cta="Talk to AspenView"
      />
    </>
  );
}
