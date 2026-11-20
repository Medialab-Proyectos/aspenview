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
  return pageMeta((await params).lang, "/services/software-engineering", {
    title: "Software Engineering — AspenView Technology Partners",
    description: "Expert engineering talent combined with a disciplined, AI-accelerated delivery model to build, modernize and scale software.",
  });
}

export default function SoftwareEngineeringPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Software engineering"
        title={<T>{"Build Better Software"}</T>}
        highlight={<T>{"Move Faster With AI"}</T>}
        text={<T>{"Expert engineering talent combined with a disciplined, AI-accelerated delivery model to build, modernize and scale software,  without compromising quality, security or human accountability."}</T>}
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
        mediaLabel="Governed delivery lifecycle"
        video="/videos/01-software-engineering.webm"
      />

      <Challenge
        data={{
          title: (
            <><T>{"Engineering Teams Are Being Asked to Deliver More, "}</T><strong><T>{"With the Same Resources"}</T></strong>
            </>
          ),
          text: (
            <p><T>{"Backlogs keep growing and specialized skills stay hard to secure. AI can accelerate development dramatically, or introduce new risk."}</T>{" "}
              <b><T>{"The challenge isn't adopting AI. It's turning it into reliable engineering performance."}</T></b>
            </p>
          ),
          main: {
            image: { src: "/assets/software/challenge-main.gif", inset: "28.74% 0", opacity: 0.5 },
            title: (
              <><T>{"More Demand, "}</T><strong><T>{"Same Capacity"}</T></strong>
              </>
            ),
            text: "Delivery expectations keep rising while engineering capacity stays flat.",
            tags: ["Backlog", "Budget", "Velocity"],
            label: "BACKLOG",
            shortTitle: "Flat Budgets, Growing Ambition",
            shortText: "Backlogs keep expanding while headcount and budget stay the same.",
          },
          side: [
            {
              label: "AI RISK",
              image: { src: "/assets/software/challenge-ai-risk.gif" },
              title: "AI Implementation Complexity",
              text: "Adopting AI without controls introduces quality, security and maintainability risk.",
              expanded: {
                title: (
                  <><T>{"Reliable Engineering Performance, "}</T><strong><T>{"Not AI Experiments"}</T></strong>
                  </>
                ),
                text: "Used well, AI compresses delivery timelines. Used without controls, it introduces quality, security and maintainability risk.",
                tags: ["Quality", "Security", "Maintainability"],
              },
            },
            {
              label: "TALENT",
              image: { src: "/assets/software/challenge-talent.gif" },
              title: "Talent Constraints",
              text: "Specialized engineering skills remain difficult to secure and slow to onboard.",
              expanded: {
                title: (
                  <><T>{"Specialized Skills, "}</T><strong><T>{"Hard to Secure"}</T></strong>
                  </>
                ),
                text: "Senior engineering profiles stay scarce and slow to onboard, right when delivery pressure peaks.",
                tags: ["Hiring", "Onboarding", "Seniority"],
              },
            },
          ],
        }}
      />

      <WhatWeDo
        data={{
          title: (
            <><T>{"Software Engineering, Built Around People and "}</T><strong><T>{"Accelerated by AI"}</T></strong>
            </>
          ),
          text: (
            <>
              <p><T>{"AspenView brings together experienced engineers and specialized AI agents across the software development lifecycle."}</T></p>
              <p><T>{"AI supports requirements, architecture, coding, testing, documentation and monitoring. Experienced engineers stay accountable for the decisions that matter."}</T></p>
            </>
          ),
          photo: { src: "/assets/software/nearshore-squads.png", label: "Nearshore squads" },
          cards: [
            {
              icon: "/assets/icons/widget4-blue.svg",
              title: "AI Embedded Throughout",
              text: "AI operates inside the engineering lifecycle; not as a separate tool or workstream.",
            },
            {
              icon: "/assets/icons/user-check-blue.svg",
              title: "Human Accountability",
              text: "Critical outputs and decisions are reviewed and validated by experienced engineers.",
            },
            {
              icon: "/assets/icons/shield-check-blue.svg",
              title: "Governed by Design",
              text: "Security, quality and oversight are built into the process from the beginning.",
            },
          ],
        }}
      />

      <HowItWorks
        data={{
          title: (
            <><T>{"From Requirement"}</T><br />
              <strong><T>{"to Production"}</T></strong>
            </>
          ),
          text: <T>{"AI is integrated across the delivery lifecycle, not added as a separate step."}</T>,
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
        }}
      />

      <Capabilities
        data={{
          title: <T>{"Where We Can Help"}</T>,
          subtitle: "Six Capability Areas",
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
        title={<><T>{"Have a Software Priority That Needs to "}</T><strong><T>{"Move Faster?"}</T></strong></>}
        text={<T>{"Bring the engineering expertise and AI-enabled delivery model needed to turn it into execution."}</T>}
        cta={{ label: "Talk to our team", href: ROUTES.contact }}
      />
    </>
  );
}
