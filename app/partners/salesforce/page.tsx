import type { Metadata } from "next";
import { SfHero, SfBuilt, SfWhy, SfProducts } from "@/components/salesforce/SalesforceTop";
import { SfPlatform, SfIndustries } from "@/components/salesforce/SalesforceMid";
import { SfDeliver, SfUseCases, SfQuickStarts, SfCta } from "@/components/salesforce/SalesforceBottom";

export const metadata: Metadata = {
  title: "Salesforce Partner | AspenView",
  description: "From connected data to intelligent agents: Agentforce and Data 360 in as little as 10 days.",
};

export default function SalesforcePage() {
  return (
    <div className="sf-page">
      <SfHero />
      <SfBuilt />
      <SfWhy />
      <SfProducts />
      <SfPlatform />
      <SfIndustries />
      <SfDeliver />
      <SfUseCases />
      <SfQuickStarts />
      <SfCta />
    </div>
  );
}
