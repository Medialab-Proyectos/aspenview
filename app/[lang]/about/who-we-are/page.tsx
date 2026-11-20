import type { Metadata } from "next";
import { AboutHero, AboutCta } from "@/components/about/AboutShared";
import { WhoHeroCard, WhoGrove, WhoBelief, WhoWhatWeDo, WhoValues } from "@/components/about/WhoWeAre";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/about/who-we-are", {
    title: "Who We Are | AspenView",
    description: "Connected by belief. Built for more. AspenView brings the right people, expertise and ideas together so technology delivers more.",
  });
}

export default function WhoWeArePage() {
  return (
    <>
      <AboutHero
        eyebrow="WHO WE ARE"
        title={
          <><T>{"Connected by Belief."}</T><br /><T>{"Built for More."}</T></>
        }
        text={<T>{"AspenView was built around a belief that technology delivers more when the right people, expertise and ideas come together."}</T>}
        bg="/assets/about/who-hero.jpg"
        aside={<WhoHeroCard />}
      />
      <WhoGrove />
      <WhoBelief />
      <WhoWhatWeDo />
      <WhoValues />
      <AboutCta
        large
        title={<T>{"Let's Build More, Together"}</T>}
        text={<T>{"Discover why organizations across North America choose AspenView, and meet the people behind the grove."}</T>}
        textWidth={562}
        cta="Talk to AspenView"
      />
    </>
  );
}
