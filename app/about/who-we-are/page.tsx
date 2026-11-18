import type { Metadata } from "next";
import { AboutHero, AboutCta } from "@/components/about/AboutShared";
import { WhoHeroCard, WhoGrove, WhoBelief, WhoWhatWeDo, WhoValues } from "@/components/about/WhoWeAre";

export const metadata: Metadata = {
  title: "Who We Are | AspenView",
  description:
    "Connected by belief. Built for more. AspenView brings the right people, expertise and ideas together so technology delivers more.",
};

export default function WhoWeArePage() {
  return (
    <>
      <AboutHero
        eyebrow="WHO WE ARE"
        title={
          <>
            Connected by belief.
            <br />
            Built for more.
          </>
        }
        text="AspenView was built around a belief that technology delivers more when the right people, expertise and ideas come together."
        bg="/assets/about/who-hero.jpg"
        aside={<WhoHeroCard />}
      />
      <WhoGrove />
      <WhoBelief />
      <WhoWhatWeDo />
      <WhoValues />
      <AboutCta
        large
        title="Let's build more, together"
        text="Discover why organizations across North America choose AspenView, and meet the people behind the grove."
        textWidth={562}
        cta="Talk to AspenView"
      />
    </>
  );
}
