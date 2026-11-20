import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocations from "@/components/contact/ContactLocations";

import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/contact", {
    title: "Contact | AspenView",
    description: "How can we help you? Discuss a project, find talent or explore Salesforce solutions with AspenView.",
  });
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLocations />
    </>
  );
}
