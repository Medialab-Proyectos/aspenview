import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact | AspenView",
  description: "How can we help you? Discuss a project, find talent or explore a Salesforce / AI agents partnership with AspenView.",
};

export default function ContactPage() {
  return <ContactHero />;
}
