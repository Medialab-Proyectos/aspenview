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

export const metadata: Metadata = {
  title: "Careers | AspenView",
  description: "Rooted in people. Powered by connection. A modern workplace, accelerated career growth and global impact.",
};

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
