import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocations from "@/components/contact/ContactLocations";

export const metadata: Metadata = {
  title: "Contact | AspenView",
  description: "How can we help you? Discuss a project, find talent or explore Salesforce solutions with AspenView.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLocations />
    </>
  );
}
