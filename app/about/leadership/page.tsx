import type { Metadata } from "next";
import { AboutHero, AboutCta } from "@/components/about/AboutShared";
import { LeadershipWho, LeadershipExecutives, LeadershipAdvisors } from "@/components/about/Leadership";

export const metadata: Metadata = {
  title: "Leadership | AspenView",
  description:
    "AspenView was built by experienced technology and business leaders who understand what it takes to transform, scale and deliver.",
};

export default function LeadershipPage() {
  return (
    <>
      <AboutHero
        eyebrow="Leadership"
        title="We've Been on the Other Side of the Challenge"
        text="AspenView was built by experienced technology and business leaders who understand what it takes to transform, scale and deliver inside complex organizations."
        photo="/assets/about/leadership-hero.webp"
      />
      <LeadershipWho />
      <LeadershipExecutives />
      <LeadershipAdvisors />
      <AboutCta
        tabletPad={260}
        large
        title="Ready to Work With a Partner Who Delivers?"
        text="Tell us about the outcome you need. We'll bring the leadership, the talent and the accountability to get you there."
        cta="Talk to AspenView"
      />
    </>
  );
}
