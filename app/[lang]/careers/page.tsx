import type { Metadata } from "next";
import {
  CareersHero,
  CareersCulture,
  CareersGrowth,
  CareersValues,
  CareersTestimonials,
  CareersHiring,
  CareersTeam,
  CareersJoin,
} from "@/components/careers/Careers";

import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/careers", {
    title: "Careers | AspenView",
    description: "Rooted in people. Powered by connection. A modern workplace, accelerated career growth and global impact.",
  });
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersCulture />
      <CareersGrowth />
      <CareersValues />
      <CareersTestimonials />
      <CareersHiring />
      <CareersTeam />
      <CareersJoin />
    </>
  );
}
