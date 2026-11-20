import { Eyebrow, PrimaryButton } from "../ui";
import { ROUTES } from "@/lib/routes";
import ModelsTabs from "./ModelsTabs";
import styles from "./Models.module.css";

const A = "/assets/delivery";

/* ---------- Hero (2801:25258) ---------- */
export function MdHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden>
        <video src="/videos/01-hero-service-delivery.webm" autoPlay muted loop playsInline preload="metadata" />
        <span className={styles.heroFade} />
      </div>
      <img alt="" src={`${A}/models-hero-ellipse.svg`} className={styles.heroEllipse} aria-hidden />
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <Eyebrow tone="white">Delivery models</Eyebrow>
          <h1 className={styles.heroTitle}>
            Structured to Deliver.
            <br />
            <strong>Agile by Design.</strong>
          </h1>
          <div className={styles.heroText}>
            <p>
              The AspenView Service Delivery System™ (ASDS) brings technical expertise, data-driven decisions and
              accountability together to help your business scale.
            </p>
            <p>Seamless execution. High-quality results. A strong partnership between your teams and ours.</p>
          </div>
        </div>
        <PrimaryButton href="#delivery-models" className={styles.heroBtn}>Explore our delivery models</PrimaryButton>
      </div>
    </section>
  );
}

/* ---------- How we deliver value (2804:25292) ---------- */
const VALUE = [
  {
    video: "/videos/02-nearshore-expertise.webm",
    caption: "COLOMBIA · ARGENTINA",
    title: "Nearshore IT Expertise",
    text: "Scalable and cost-effective IT teams based in Colombia and Argentina.",
  },
  {
    video: "/videos/03-tailored-engagement.webm",
    caption: "ADNT · AFMS · ALMS",
    title: "Tailored Engagement Models",
    text: "Flexible delivery based on your business needs.",
  },
  {
    video: "/videos/04-delivery-excellence.webm",
    caption: "RELIABILITY · TRANSPARENCY · IMPACT",
    title: "Proven Delivery Excellence",
    text: "A structured approach that ensures reliability, transparency and measurable impact.",
  },
];

export function MdValue() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow>How We Deliver Value</Eyebrow>
            <span className={styles.title}>
              The Expertise You Need.
              <br />
              <strong>The Delivery You Can Trust.</strong>
            </span>
          </h2>
          <p className={styles.lead}>
            A structured yet agile approach to delivering IT services, built around your business.
          </p>
        </div>
        <div className={styles.values}>
          {VALUE.map((v, i) => (
            <article key={v.title} className={`${styles.value} hover-blue-text`}>
              <div className={styles.valueTop}>
                <span className={styles.valueGlow} aria-hidden>
                  <img alt="" src={`${A}/value-glow.svg`} />
                </span>
                <div className={styles.valueVideo}>
                  <video src={v.video} autoPlay muted loop playsInline preload="metadata" aria-hidden />
                </div>
                <p className={styles.valueCaption}>{v.caption}</p>
                <span className={styles.valueNum}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.valueBody}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Our service delivery models (2805:25482) ---------- */
export function MdModels() {
  return (
    <section className={styles.dark} id="delivery-models">
      <span className={styles.modelsGlow} aria-hidden>
        <img alt="" src={`${A}/models-glow.svg`} />
      </span>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow tone="white">Our Service Delivery Models</Eyebrow>
            <span className={`${styles.title} ${styles.titleLight}`}>
              Three Ways to Partner.
              <br />
              <strong>One Commitment to Excellence.</strong>
            </span>
          </h2>
          <div className={`${styles.lead} ${styles.leadPale}`}>
            <p>
              At AspenView, we offer flexible nearshore delivery models, from specialized engineering talent and
              dedicated teams to managed services, helping businesses accelerate growth, improve operational
              performance, and turn technology investments into measurable results.
            </p>
          </div>
        </div>
        <ModelsTabs />
      </div>
    </section>
  );
}

/* ---------- The AspenView difference (2807:25707) ---------- */
const DIFF = [
  { icon: "diagram-up", title: "Data-Driven Decision Making", text: "We use metrics to optimize processes." },
  { icon: "routing", title: "Agility & Flexibility", text: "We adapt to evolving client needs." },
  {
    icon: "diff-shield",
    title: "Security & Compliance",
    text: "Our AspenView CyberShield Security Protocol™ (ACSP) protects your data.",
  },
  {
    icon: "diff-course-up",
    title: "Transparent Performance Management",
    text: "Our KPI-driven approach ensures accountability and success.",
  },
];

export function MdDifference() {
  return (
    <section className={styles.white}>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow>The AspenView Difference</Eyebrow>
            <span className={styles.title}>
              Accountability at Every Step.
              <br />
              <strong>Confidence in Every Outcome.</strong>
            </span>
          </h2>
          <p className={styles.lead}>Our ASDS™ framework is built on the principles that make delivery dependable.</p>
        </div>
        <div className={styles.diffs}>
          {DIFF.map((d) => (
            <article key={d.title} className={`${styles.diff} hover-blue`}>
              <span className={styles.diffRing}>
                <img alt="" src={`${A}/${d.icon}.svg`} width={32} height={32} />
              </span>
              <div className={styles.diffCopy}>
                <h3 className={styles.diffTitle}>{d.title}</h3>
                <p className={styles.diffText}>{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Continuous improvement (2807:25985) ---------- */
const QUALITY = [
  { icon: "q-user", title: "Talent Acquisition & Onboarding Excellence" },
  { icon: "q-chip", title: "Software Development Lifecycle (SDLC) Best Practices" },
  { icon: "q-check", title: "Rigorous Service Delivery Quality Assurance" },
  { icon: "q-course-up", title: "Client Success & Measurable Results" },
];

export function MdQuality() {
  return (
    <section className={styles.dark}>
      <span className={styles.qualityGlow} aria-hidden>
        <img alt="" src={`${A}/models-glow.svg`} />
      </span>
      <div className={`wrap ${styles.section}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Eyebrow tone="white">Continuous Improvement &amp; Quality Assurance</Eyebrow>
            <span className={`${styles.title} ${styles.titleLight}`}>
              Quality Is Built In.
              <br />
              <strong>Improvement Never Stops.</strong>
            </span>
          </h2>
          <p className={`${styles.lead} ${styles.leadPale}`}>
            We believe in constant evolution. Our Total Quality System brings that commitment to every part of delivery.
          </p>
        </div>
        <div className={styles.qualities}>
          {QUALITY.map((q, i) => (
            <article key={q.title} className={`${styles.qualityCard} hover-blue`}>
              <span className={styles.qualityNum}>{String(i + 1).padStart(2, "0")}</span>
              <img alt="" src={`${A}/${q.icon}.svg`} width={40} height={40} />
              <h3 className={styles.qualityTitle}>{q.title}</h3>
            </article>
          ))}
        </div>
        <img alt="" src={`${A}/q-line.svg`} className={styles.qualityLine} />
        <div className={styles.connect}>
          <p className={styles.connectText}>Let’s find the right delivery model for your business.</p>
          <PrimaryButton href={ROUTES.contact} className={styles.connectBtn}>
            Connect with us
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
