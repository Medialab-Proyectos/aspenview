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
        title="We've been on the other side of the challenge"
        text="AspenView was built by experienced technology and business leaders who understand what it takes to transform, scale and deliver inside complex organizations."
      />
      <LeadershipWho />
      <LeadershipExecutives />
      <LeadershipAdvisors />
      <AboutCta
        large
        title="Ready to work with a partner who delivers?"
        text="Tell us about the outcome you need. We'll bring the leadership, the talent and the accountability to get you there."
        cta="Talk to AspenView"
      />
    </>
  );
}
