import Logo from "../Logo";
import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import styles from "./Salesforce.module.css";

/* ---------- Hero (Figma 2156:30779) ---------- */
export function SfHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden>
        <video src="/videos/03-salesforce.mp4" autoPlay muted loop playsInline preload="metadata" />
        <span className={styles.heroFade} />
      </div>
      <span className={styles.heroGlow} aria-hidden>
        <img alt="" src="/assets/salesforce/hero-glow.svg" />
      </span>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            From connected
            <br />
            data to intelligent agents
          </h1>
          <div className={styles.heroDays}>
            <p className={styles.heroSmall}>in little as:</p>
            <p className={styles.heroBig}>10 days</p>
          </div>
        </div>
        <PrimaryButton href="#quick-starts" arrow>
          Let&apos;s get started
        </PrimaryButton>
        <div className={styles.heroLogos}>
          <Logo variant="white" className={styles.heroLogo} />
          <img alt="" src="/assets/salesforce/divider.svg" className={styles.heroDivider} />
          <span className={styles.sfLogo}>
            <img alt="Salesforce" src="/assets/salesforce/salesforce-logo.svg" />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Built on Salesforce (2156:30807) ---------- */
const STATS = [
  { title: "24/7", text: "AI-powered execution" },
  { title: "AI-native", text: "Built for AI. Not retrofitted." },
  { title: "5", text: "Business areas for AI agents" },
  { title: "LATAM", text: "Regional talent. Enterprise execution." },
];

export function SfBuilt() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.section} ${styles.center}`}>
        <h2 className={styles.heading}>
          <Eyebrow>Built on Salesforce</Eyebrow>
          <span className={styles.title}>
            Enterprise ambition.
            <br />
            Production-ready execution.
          </span>
        </h2>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.title} className={styles.stat}>
              <p className={styles.statTitle}>{s.title}</p>
              <p className={styles.statText}>{s.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.statLinks}>
          <span>Agentforce</span>
          <span>Data 360</span>
          <span>AI implementation</span>
          <span>Enterprise integration</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why (2160:32002) ---------- */
const WHY = [
  { icon: "spark", tag: "WHY AGENTIC AI?", a: "AI that ", b: "does the work", text: "Agents reason, act and execute across workflows — moving AI from answers to measurable business outcomes." },
  { icon: "shield-check", tag: "WHY SALESFORCE?", a: "Enterprise AI ", b: "built on trust", text: "Agentforce + Data 360 connect trusted data, business context and enterprise governance to deploy AI at scale." },
  { icon: "share-circle", tag: "WHY ASPENVIEW?", a: "Built for the ", b: "AI era", text: "AI-native delivery, vetted engineering talent and nearshore execution designed to move from idea to production in as little as 10 days." },
];

export function SfWhy() {
  return (
    <section className={styles.pale}>
      <div className={`wrap ${styles.whyInner}`}>
        {WHY.map((w) => (
          <article key={w.tag} className={styles.whyCard}>
            <div className={styles.whyTop}>
              <span className={styles.ringLg}>
                <img alt="" src={`/assets/salesforce/${w.icon}.svg`} width={32} height={32} />
              </span>
              <p className={styles.whyTag}>{w.tag}</p>
            </div>
            <div className={styles.whyCopy}>
              <h3 className={styles.whyTitle}>
                {w.a}
                <span>{w.b}</span>
              </h3>
              <p className={styles.whyText}>{w.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Products (2385:30426) ---------- */
type Product = { logo: React.ReactNode; title: string; text: string; caps: string[]; cta: string };

const PRODUCTS: Product[] = [
  {
    logo: (
      <span className={styles.logoAgentforce}>
        <img alt="Agentforce" src="/assets/salesforce/agentforce.png" />
      </span>
    ),
    title: "AI agents that take action",
    text: "Design and deploy production-grade AI agents that transform how teams serve, sell and operate — with enterprise-ready orchestration and governance.",
    caps: ["Custom Agent Design", "Prompt Engineering & Guardrails", "Agent Orchestration", "Tool Integration", "Measurable ROI"],
    cta: "Explore Agentforce",
  },
  {
    logo: (
      <span className={styles.logoData}>
        <img alt="Data 360" src="/assets/salesforce/data360.png" />
      </span>
    ),
    title: "Trusted data that powers AI",
    text: "Unify customer and enterprise data into a trusted foundation that gives Agentforce — and your teams — the context to act intelligently.",
    caps: ["Unified Customer View", "Data Integration & Unification", "Identity Resolution", "Real-Time Customer Insights", "AI-Ready Data Foundation"],
    cta: "Explore Data 360",
  },
  {
    logo: (
      <span className={styles.logoSlack}>
        <span className={styles.slack}>
          <img alt="Slack" src="/assets/salesforce/slack.svg" />
        </span>
        <img alt="" src="/assets/salesforce/logo-divider.svg" className={styles.slackDivider} />
        <img alt="Claudeforce" src="/assets/salesforce/claudeforce.svg" className={styles.claude} />
      </span>
    ),
    title: "Bring AI into the flow of work",
    text: "Put Agentforce directly into the tools teams already use, enabling AI-powered conversations, approvals and workflows without leaving the channel.",
    caps: ["AI-Powered Collaboration", "Employee Productivity", "AI-Powered Workflows", "In-Channel Approvals", "Agentforce Integration"],
    cta: "Explore Slack & Claudeforce",
  },
  {
    logo: (
      <span className={styles.logoMule}>
        <img alt="MuleSoft" src="/assets/salesforce/mulesoft-a.svg" className={styles.muleA} />
        <img alt="" src="/assets/salesforce/mulesoft-b.svg" className={styles.muleB} />
        <img alt="" src="/assets/salesforce/mulesoft-c.svg" className={styles.muleC} />
      </span>
    ),
    title: "Connect AI to the systems that run your business",
    text: "Connect Salesforce, Agentforce and Data 360 across enterprise and legacy systems through secure, real-time integrations.",
    caps: ["API-Led Integration", "Agent Orchestration", "Legacy System Connectivity", "Secure Integrations", "Real-Time Data Flow"],
    cta: "Explore Mulesoft",
  },
];

export function SfProducts() {
  return (
    <section className={styles.productsWrap}>
      <div className={styles.dark}>
        <div className={`wrap ${styles.section}`}>
          <div className={styles.products}>
            {[PRODUCTS.slice(0, 2), PRODUCTS.slice(2)].map((pair, i) => (
              <div key={i} className={styles.productPair}>
                {pair.map((p) => (
                  <article key={p.cta} className={styles.product}>
                    <div className={styles.productMain}>
                      <div className={styles.productHead}>
                        {p.logo}
                        <div className={styles.productCopy}>
                          <h3 className={styles.productTitle}>{p.title}</h3>
                          <img alt="" src="/assets/salesforce/card-line.svg" className={styles.productLine} />
                          <p className={styles.productText}>{p.text}</p>
                        </div>
                      </div>
                      <div className={styles.productCaps}>
                        <h4 className={styles.productCapsTitle}>Capabilities</h4>
                        <ul className={styles.capList}>
                          {p.caps.map((c) => (
                            <li key={c}>
                              <span className={styles.check} aria-hidden>
                                <span />
                              </span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.productFoot}>
                      <img alt="" src="/assets/salesforce/card-line.svg" className={styles.productLine} />
                      <PrimaryButton href={`${ROUTES.contact}?topic=salesforce`} className={styles.productBtn}>
                        {p.cta}
                      </PrimaryButton>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.band}>
        <img alt="" src="/assets/salesforce/band.png" />
      </div>
    </section>
  );
}
