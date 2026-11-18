import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import Challenge from "@/components/service/Challenge";
import WhatWeDo from "@/components/service/WhatWeDo";
import HowItWorks from "@/components/service/HowItWorks";
import Capabilities from "@/components/service/Capabilities";
import ShaderCta from "@/components/sections/ShaderCta";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Software Engineering — AspenView Technology Partners",
  description:
    "Expert engineering talent combined with a disciplined, AI-accelerated delivery model to build, modernize and scale software.",
};

export default function SoftwareEngineeringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Software engineering"
        title="Build better software"
        highlight="Move faster with AI"
        text="Expert engineering talent combined with a disciplined, AI-accelerated delivery model to build, modernize and scale software,  without compromising quality, security or human accountability."
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
        mediaLabel="Governed delivery lifecycle"
        video="/videos/01-software-engineering.webm"
      />

      <Challenge
        data={{
          title: (
            <>
              Engineering teams are being asked to deliver more, <strong>with the same resources</strong>
            </>
          ),
          text: (
            <p>
              Backlogs keep growing and specialized skills stay hard to secure. AI can accelerate development
              dramatically, or introduce new risk.{" "}
              <b>The challenge isn&apos;t adopting AI. It&apos;s turning it into reliable engineering performance.</b>
            </p>
          ),
          main: {
            image: { src: "/assets/software/challenge-main.gif", inset: "28.74% 0", opacity: 0.5 },
            title: (
              <>
                More demand, <strong>same capacity</strong>
              </>
            ),
            text: "Delivery expectations keep rising while engineering capacity stays flat.",
            tags: ["Backlog", "Budget", "Velocity"],
          },
          side: [
            {
              label: "AI RISK",
              image: { src: "/assets/software/challenge-ai-risk.gif" },
              title: "AI implementation complexity",
              text: "Adopting AI without controls introduces quality, security and maintainability risk.",
            },
            {
              label: "TALENT",
              image: { src: "/assets/software/challenge-talent.gif" },
              title: "Talent constraints",
              text: "Specialized engineering skills remain difficult to secure and slow to onboard.",
            },
          ],
        }}
      />

      <WhatWeDo
        data={{
          title: (
            <>
              Software engineering, built around people and <strong>accelerated by AI</strong>
            </>
          ),
          text: (
            <>
              <p>
                AspenView brings together experienced engineers and specialized AI agents across the software
                development lifecycle.
              </p>
              <p>
                AI supports requirements, architecture, coding, testing, documentation and monitoring. Experienced
                engineers stay accountable for the decisions that matter.
              </p>
            </>
          ),
          photo: { src: "/assets/software/nearshore-squads.png", label: "Nearshore squads" },
          cards: [
            {
              icon: "/assets/icons/widget4-blue.svg",
              title: "AI embedded throughout",
              text: "AI operates inside the engineering lifecycle — not as a separate tool or workstream.",
            },
            {
              icon: "/assets/icons/user-check-blue.svg",
              title: "Human accountability",
              text: "Critical outputs and decisions are reviewed and validated by experienced engineers.",
            },
            {
              icon: "/assets/icons/shield-check-blue.svg",
              title: "Governed by design",
              text: "Security, quality and oversight are built into the process from the beginning.",
            },
          ],
        }}
      />

      <HowItWorks
        data={{
          title: (
            <>
              From requirement
              <br />
              <strong>to production</strong>
            </>
          ),
          text: "AI is integrated across the delivery lifecycle, not added as a separate step.",
          steps: [
            {
              icon: "/assets/how/document-add.svg",
              title: "Understand",
              body: "AI-assisted requirements and estimation.",
              items: "Requirements / Estimation",
            },
            {
              icon: "/assets/how/widget-add.svg",
              title: "Design",
              body: "AI-informed architecture and technical direction.",
              items: "Architecture / Tech direction",
            },
            {
              icon: "/assets/how/chat-square-code.svg",
              title: "Build",
              body: "AI-powered coding and code review.",
              items: "Coding / Code review",
              line: "/assets/how/line-2.svg",
            },
            {
              icon: "/assets/how/clipboard-check.svg",
              title: "Prove",
              body: "AI-powered QA, testing and validation.",
              items: "Qa & testing / Validation",
            },
            {
              icon: "/assets/how/document-add.svg",
              title: "Sustain",
              body: "AI-informed production monitoring and continuous improvement.",
              items: "Monitoring / Continuous improvement",
            },
          ],
          note: {
            label: "ACCOUNTABILITY",
            text: "At every stage, AI agents can perform defined work while human engineers retain final accountability for critical decisions.",
          },
        }}
      />

      <Capabilities
        data={{
          title: "Where we can help",
          subtitle: "Six capability areas",
          text: "One governed delivery model: engage us for a full lifecycle or a single pressure point.",
          items: [
            {
              label: "End-to-End Software Delivery",
              icon: "/assets/capabilities/pc.svg",
              tag: "Lifecycle  / Ownership",
              text: "Take a platform or backlog from requirements through production and ongoing support.",
              chips: ["Requirements", "Estimation", "Estimation"],
            },
            {
              label: "Product Development",
              icon: "/assets/capabilities/chat-square-code.svg",
              tag: "Speed / Capacity",
              text: "Accelerate new products and features with Al-enabled engineering teams working alongside your organization.",
              chips: ["New products", "Features", "Squads"],
            },
            {
              label: "Prototype to Production",
              icon: "/assets/capabilities/settings.svg",
              tag: "Scale / Hardening",
              text: "Turn Al-built MVPs and prototypes into secure, scalable and maintainable production applications.",
              chips: ["MVP", "Security", "Scalability"],
            },
            {
              label: "Legacy Modernization",
              icon: "/assets/capabilities/graph-new-up.svg",
              tag: "Risk / Continuity",
              text: "Understand, document and modernize complex legacy applications while protecting critical business logic.",
              chips: ["Discovery", "Documentation", "Refactor"],
            },
            {
              label: "Large-Scale Transitions",
              icon: "/assets/capabilities/scale.svg",
              tag: "Knowledge / Handover",
              text: "Take over complex codebases or engineering environments while preserving institutional knowledge.",
              chips: ["Takeover", "Knowledge", "Ramp-up"],
            },
            {
              label: "QA & Test Automation",
              icon: "/assets/capabilities/clipboard-check.svg",
              tag: "Quality / Coverage",
              text: "Improve coverage and quality through Al-powered test generation, automation and defect triage.",
              chips: ["Test generation", "Automation", "Triage"],
            },
          ],
        }}
      />

      <ShaderCta
        title={<>Have a software priority that needs to <strong>move faster?</strong></>}
        text="Bring the engineering expertise and AI-enabled delivery model needed to turn it into execution."
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
