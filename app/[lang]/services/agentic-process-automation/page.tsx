import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Challenge from "@/components/service/Challenge";
import WhatWeDo from "@/components/service/WhatWeDo";
import HowItWorks from "@/components/service/HowItWorks";
import Capabilities from "@/components/service/Capabilities";
import ShaderCta from "@/components/sections/ShaderCta";
import { ROUTES } from "@/lib/routes";

import { T } from "@/components/i18n/T";
import { pageMeta } from "@/lib/i18n/meta";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang, "/services/agentic-process-automation", {
    title: "Agentic Process Automation — AspenView Technology Partners",
    description: "Design intelligent agents that can reason, adapt and act across complex processes, while keeping access, decisions and outcomes governed.",
  });
}

const G = "/assets/glyphs";

export default function AgenticAutomationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Agentic Process Automation"
        title={
          <><T>{"Automate Work"}</T><br /><T>{"That"}</T></>
        }
        highlight={<T>{"Rules-Based Systems Can’t"}</T>}
        text={<T>{"Design intelligent agents that can reason, adapt and act across complex \nprocesses, while keeping access, decisions and outcomes governed."}</T>}
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
        mediaLabel="Reason. Adapt. Act"
        image={{ src: "/assets/agentic/hero.gif", width: 645, height: 525 }}
        padY={128}
      />

      <Challenge
        data={{
          title: (
            <><T>{"Automation Has"}</T><br /><T>{"Reached "}</T><strong><T>{"the Limits of Rules."}</T></strong>
            </>
          ),
          text: (
            <p><T>{"Traditional automation works well when every process follows a predictable path. But much of enterprise work doesn’t."}</T>{" "}
              <b><T>{"Emails, documents, conversations, exceptions and judgment calls don’t always fit neatly into fixed scripts."}</T></b>
            </p>
          ),
          main: {
            image: { src: "/assets/agentic/challenge-1.gif", inset: "21.49% 0" },
            title: (
              <><T>{"Make Sense of "}</T><strong><T>{"Unstructured Work"}</T></strong>
              </>
            ),
            text: "Reasoning agents can interpret information that does not fit neatly into fixed instructions.",
            tags: ["Emails", "Documents", "Conversations"],
            label: "UNSTRUCTURED WORK",
            shortTitle: "Unstructured Information",
            shortText: "Emails, documents and conversations resist fixed scripts.",
          },
          side: [
            {
              label: "EXCEPTIONS",
              image: { src: "/assets/agentic/challenge-2.gif", inset: "15.45% 0 16.16% 0" },
              title: "Exceptions & Judgement Calls",
              text: "Enterprise work rarely follows one predictable path.",
              expanded: {
                title: (
                  <><T>{"Adapt When "}</T><strong><T>{"the Path Changes"}</T></strong>
                  </>
                ),
                text: "Introduce reasoning into workflows that require context, exceptions and judgment.",
                tags: [],
              },
            },
            {
              label: "OPERATIONAL CONTROL",
              image: { src: "/assets/agentic/challenge-3.gif", inset: "17.47% 0 18.18% 0" },
              title: "Governance at Every Action",
              text: "Intelligent automation needs control beyond policy.",
              expanded: {
                title: (
                  <><T>{"Keep Every Action "}</T><strong><T>{"Under Control"}</T></strong>
                  </>
                ),
                text: "Scope permissions, audit actions and revoke access as operational needs change.",
                tags: [],
              },
            },
          ],
        }}
      />

      <WhatWeDo
        data={{
          title: (
            <><T>{"Intelligent Automation"}</T><br /><T>{"Needs "}</T><strong><T>{"More Than an Agent"}</T></strong>
            </>
          ),
          text: (
            <>
              <p><T>{"AspenView builds Agentic Process Automation around three principles designed to help automation move beyond experimentation and into sustainable operations."}</T></p>
              <p><T>{"Agentic automation introduces reasoning into workflows, extending automation into work traditional rules-based systems struggle to handle."}</T></p>
            </>
          ),
          photo: { src: "/assets/software/nearshore-squads.png", label: "Nearshore squads" },
          cards: [
            {
              icon: "/assets/data/routing.svg",
              title: "Interoperable",
              text: "Designed to work across your technology ecosystem. Open standards and cross-platform integration avoid vendor lock-in and new silos.",
            },
            {
              icon: "/assets/how/widget-add.svg",
              title: "Intelligent",
              text: "Grounded in how work actually happens. Process intelligence helps identify, understand and orchestrate real workflows before agents make decisions.",
            },
            {
              icon: "/assets/icons/shield-check-blue.svg",
              title: "Governed",
              text: "Control remains built into every action. Permissions are scoped, actions are auditable and agent access can be revoked.",
            },
          ],
        }}
      />

      <HowItWorks
        data={{
          title: (
            <><T>{"From Opportunity to"}</T><br />
              <strong><T>{"Governed Automation."}</T></strong>
            </>
          ),
          text: <T>{"Discover, automate, test, deploy and watch, with control built into every stage."}</T>,
          steps: [
            {
              icon: `${G}/magnifer-zoom-in.svg`,
              title: "Discover",
              body: "Understand how work actually happens and identify the right automation opportunities.",
              items: "Process intelligence / Opportunities",
            },
            {
              icon: `${G}/robot.svg`,
              title: "Automate",
              body: "Build agents capable of operating across the systems and tools involved.",
              items: "Agents / Interoperability",
            },
            {
              icon: "/assets/icons/shield-check-blue.svg",
              title: "Test",
              body: "Validate security, performance and expected behavior before go-live.",
              items: "Security / Validation",
            },
            {
              icon: "/assets/how/widget-add.svg",
              title: "Deploy",
              body: "Introduce agents into production workflows through controlled rollout.",
              items: "Production / Controlled rollout",
            },
            {
              icon: `${G}/eye.svg`,
              title: "Watch",
              body: "Continuously govern identity, access, performance and cost, and identify the next opportunity.",
              items: "Identity & access / Performance & cost",
            },
          ],
          note: {
            label: "ACCOUNTABILITY",
            text: "Permissions are scoped, actions are auditable and agent access can be revoked, creating operational controls rather than relying solely on policy.",
          },
        }}
      />

      <Capabilities
        data={{
          title: <T>{"Where We Can Help"}</T>,
          subtitle: "Six Capability Areas",
          text: "Process intelligence, interoperability and governance, connected across the automation lifecycle.",
          items: [
            {
              label: "Process Intelligence",
              icon: `${G}/lightbulb.svg`,
              tag: "Automation / 01",
              text: "Standardize, validate and govern critical data before it becomes the foundation for AI.",
              chips: ["Process mining", "Analysis"],
            },
            {
              label: "Intelligent Orchestration",
              icon: `${G}/routing-2.svg`,
              tag: "Automation / 02",
              text: "Coordinate work and decisions across systems and workflows.",
              chips: ["Coordination", "Decisions"],
            },
            {
              label: "Agent Design & Development",
              icon: `${G}/add-story.svg`,
              tag: "Automation / 03",
              text: "Build reasoning agents capable of handling structured and unstructured work.",
              chips: ["Reasoning", "Agent development"],
            },
            {
              label: "Cross-Platform Agent Integration",
              icon: `${G}/transfer-horizontal.svg`,
              tag: "Automation / 04",
              text: "Enable agents and platforms to work together using open interoperability standards.",
              chips: ["Open standards", "Integration"],
            },
            {
              label: "Governance & Decision Controls",
              icon: "/assets/icons/shield-check-blue.svg",
              tag: "Automation / 05",
              text: "Define permissions, decision gates, auditability and operational controls.",
              chips: ["Permissions", "Auditability"],
            },
            {
              label: "Agent Operations",
              icon: `${G}/magnifer-zoom-in.svg`,
              tag: "Automation / 06",
              text: "Monitor access, performance and cost while continuously identifying opportunities for improvement.",
              chips: ["Access", "Performance", "Cost"],
            },
          ],
        }}
      />

      <ShaderCta
        title={
          <><T>{"Where Could Intelligent Automation Make the "}</T><strong><T>{"Biggest Difference?"}</T></strong>
          </>
        }
        text={<T>{"Let’s identify the processes where agentic automation can create meaningful, controlled impact."}</T>}
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
