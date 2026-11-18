import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Challenge from "@/components/service/Challenge";
import WhatWeDo from "@/components/service/WhatWeDo";
import HowItWorks from "@/components/service/HowItWorks";
import Capabilities from "@/components/service/Capabilities";
import ShaderCta from "@/components/sections/ShaderCta";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Agentic Process Automation — AspenView Technology Partners",
  description:
    "Design intelligent agents that can reason, adapt and act across complex processes—while keeping access, decisions and outcomes governed.",
};

const G = "/assets/glyphs";

export default function AgenticAutomationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Agentic Process Automation"
        title={
          <>
            Automate work
            <br />
            that
          </>
        }
        highlight="rules-based systems can’t"
        text={"Design intelligent agents that can reason, adapt and act across complex \nprocesses—while keeping access, decisions and outcomes governed."}
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
        mediaLabel="Reason. Adapt. Act"
        image={{ src: "/assets/agentic/hero.gif", width: 645, height: 525 }}
        padY={128}
      />

      <Challenge
        data={{
          title: (
            <>
              Automation has
              <br />
              reached <strong>the limits of rules.</strong>
            </>
          ),
          text: (
            <p>
              Traditional automation works well when every process follows a predictable path. But much of enterprise
              work doesn’t.{" "}
              <b>Emails, documents, conversations, exceptions and judgment calls don’t always fit neatly into fixed scripts.</b>
            </p>
          ),
          main: {
            image: { src: "/assets/agentic/challenge-1.gif", inset: "21.49% 0" },
            title: (
              <>
                Make sense of <strong>unstructured work</strong>
              </>
            ),
            text: "Reasoning agents can interpret information that does not fit neatly into fixed instructions.",
            tags: ["Emails", "Documents", "Conversations"],
          },
          side: [
            {
              label: "EXCEPTIONS",
              image: { src: "/assets/agentic/challenge-2.gif", inset: "15.45% 0 16.16% 0" },
              title: "Exceptions & judgement calls",
              text: "Enterprise work rarely follows one predictable path.",
            },
            {
              label: "OPERATIONAL CONTROL",
              image: { src: "/assets/agentic/challenge-3.gif", inset: "17.47% 0 18.18% 0" },
              title: "Governance at every action",
              text: "Intelligent automation needs control beyond policy.",
            },
          ],
        }}
      />

      <WhatWeDo
        data={{
          title: (
            <>
              Intelligent automation
              <br />
              needs <strong>more than an agent</strong>
            </>
          ),
          text: (
            <>
              <p>
                AspenView builds Agentic Process Automation around three principles designed to help automation move
                beyond experimentation and into sustainable operations.
              </p>
              <p>
                Agentic automation introduces reasoning into workflows, extending automation into work traditional
                rules-based systems struggle to handle.
              </p>
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
            <>
              From opportunity to
              <br />
              <strong>governed automation.</strong>
            </>
          ),
          text: "Discover, automate, test, deploy and watch—with control built into every stage.",
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
              body: "Continuously govern identity, access, performance and cost—and identify the next opportunity.",
              items: "Identity & access / Performance & cost",
            },
          ],
          note: {
            label: "ACCOUNTABILITY",
            text: "Permissions are scoped, actions are auditable and agent access can be revoked—creating operational controls rather than relying solely on policy.",
          },
        }}
      />

      <Capabilities
        data={{
          title: "Where we can help",
          subtitle: "Six capability areas",
          text: "Process intelligence, interoperability and governance—connected across the automation lifecycle.",
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
          <>
            Where could intelligent automation make the <strong>biggest difference?</strong>
          </>
        }
        text="Let’s identify the processes where agentic automation can create meaningful, controlled impact."
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
