import { PrimaryButton } from "../ui";
import { JOBS_URL } from "@/lib/routes";
import { EvpCards, ValueCards } from "./CareersInteractive";
import styles from "./Careers.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/careers";

/* ---------- Hero (1048:5658) ---------- */
export function CareersHero() {
  return (
    <section className={styles.hero}>
      <img alt="" src={`${A}/hero.jpg`} className={styles.bgImg} />
      <span className={styles.heroShade} aria-hidden />
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroSpacer} />
        <div className={styles.heroCopy}>
          <div className={styles.heroBrand}>
            <img alt="Rooted in people. Powered by connection" src={`${A}/rooted-logo.png`} className={styles.heroLogo} />
            <div>
              <h1 className={styles.heroTitle}><T>{"The AspenView Experience"}</T></h1>
              <p className={styles.heroText}><T>{"A modern workplace. Accelerated career growth. Global impact"}</T></p>
            </div>
          </div>
          <PrimaryButton href={JOBS_URL} external className={styles.heroBtn}><T>{"Explore opportunities"}</T></PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Our culture (1048:5671) ---------- */
export function CareersCulture() {
  return (
    <section className={`${styles.white} ${styles.gap}`}>
      <div className={`wrap ${styles.culture}`}>
        <div className={styles.cultureCopy}>
          <div className={styles.cultureIntro}>
            <div className={styles.cultureHead}>
              <h2 className={styles.mainTitle}><T>{"Our Culture"}</T></h2>
              <span className={styles.pillOutline}><T>{"Rooted in people"}</T></span>
            </div>
            <p className={styles.muted16}><T>{"Our culture is built on trust, ambition, and long-term growth. We combine global standards with respect for local culture, creating an environment where talent thrives."}</T></p>
          </div>
          <div className={styles.cultureSub}>
            <h3 className={styles.sub24}><T>{"A Modern Workplace"}</T></h3>
            <div className={`${styles.muted16} ${styles.paras}`}>
              <p><T>{"At AspenView, we blend the discipline and performance of U.S. business culture with the depth, adaptability, and richness of Latin American talent, creating a global, high-performing workplace built on collaboration, trust, and inclusivity."}</T></p>
              <p><T>{"We intentionally create an environment where individuals feel supported, empowered, and positioned to succeed. Our culture is grounded in mutual respect, and a shared commitment to growth, both for our clients and for one another."}</T></p>
            </div>
          </div>
        </div>
        <div className={styles.cultureMedia}>
          <img alt="" src={`${A}/culture.jpg`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Grow faster band + Employee value promise (1198:3606) ---------- */
export function CareersGrowth() {
  return (
    <section className={styles.gap}>
      <div className={styles.blueBand}>
        <span className={styles.pillFloating}><T>{"Powered by connection"}</T></span>
        <div className={`wrap ${styles.grow}`}>
          <h2 className={styles.growTitle}>
            <span><T>{"Grow Faster."}</T></span>
            <span><T>{"Go Further."}</T></span>
          </h2>
          <p className={styles.growText}><T>{"When our people grow, AspenView grows with them. That’s why we foster an environment where"}</T>{" "}
            <strong><T>{"talent accelerates with purpose"}</T></strong><T>{", equipping our teams with the tools, guidance, and momentum to unlock their full potential and drive meaningful impact."}</T></p>
        </div>
      </div>
      <div className={`wrap ${styles.evp}`}>
        <div className={styles.evpHead}>
          <h2 className={styles.evpHeading}><T>{"The AspenView Employee Value Promise"}</T></h2>
          <div className={styles.evpIntro}>
            <p><T>{"At AspenView, we believe exceptional talent deserves an exceptional environment."}</T></p>
            <p><T>{"Our Employee Value Promise defines how we attract, develop, engage, and retain our team, creating a workplace where individuals can accelerate their growth, contribute meaningfully, and build impactful, enduring careers. When our people grow, "}</T><span><T>{"AspenView grows with them."}</T></span>
            </p>
          </div>
        </div>
        <EvpCards />
      </div>
    </section>
  );
}

/* ---------- Quote, professional horizon and values (1048:5730) ---------- */
export function CareersValues() {
  return (
    <section className={styles.gap}>
      <div className={styles.quoteBand}>
        <p className={`wrap ${styles.quote}`}><T>{"“We accelerate success by connecting clients, talent, and technology.”"}</T></p>
      </div>
      <div className={styles.horizon}>
        <img alt="" src={`${A}/horizon.jpg`} className={styles.bgImg} />
        <span className={styles.horizonShade} aria-hidden />
        <div className={`wrap ${styles.horizonInner}`}>
          <div className={styles.horizonCopy}>
            <h2 className={`${styles.mainTitle} ${styles.light}`}><T>{"Expand Your Professional Horizon"}</T></h2>
            <div className={styles.horizonText}>
              <p><T>{"We partner with leading U.S. enterprises and bring together leadership with deep global experience."}</T></p>
              <p><T>{"For our team, that means continuous learning, high standards, and the opportunity to grow by solving real-world challenges at scale."}</T></p>
            </div>
          </div>
        </div>
      </div>
      <div className={`wrap ${styles.whyHead}`}>
        <span className={styles.pillSolid}><T>{"Why AspenView"}</T></span>
        <h2 className={styles.whyTitle}><T>{"At AspenView Technology Partners, we live our values each day. They guide how we engage with clients, partners, and each other."}</T></h2>
      </div>
      <div className="wrap">
        <ValueCards />
      </div>
    </section>
  );
}

/* ---------- Our people in their words (1048:5757) ---------- */
const QUOTES = [
  {
    text: "“AspenView has been built on the importance of culture, its an innovative company but it’s also a community where I can bring my authentic self, knowing that my family and our company successes are supported with equal heart.”",
    name: "-Alicia Burgess",
  },
  {
    text: "“A year ago I joined Aspenview not knowing quite what to expect. Today, I can say it’s more than a company to me; it’s a place where my ideas are heard, my growth is supported, and the people around me feel like a real team. I’m grateful to be here.”",
    name: "-Camilo Paez",
  },
  {
    text: "“Working with AspenView has made me figure out you already make your partners feeling valued and recognized, and whenever there is a drift between clients and contractors, you are always willing to help us out.”",
    name: "-Ryan Villamarin",
  },
];

export function CareersTestimonials() {
  return (
    <section className={`${styles.testimonials} ${styles.gap}`}>
      <div className={`wrap ${styles.testimonialsInner}`}>
        <div className={styles.testimonialsCopy}>
          <h2 className={`${styles.mainTitle} ${styles.light}`}><T>{"Our People in"}</T><br /><T>{"Their Words"}</T></h2>
          <div className={styles.quotes}>
            {QUOTES.map((q) => (
              <blockquote key={q.name} className={styles.quoteItem}>
                <p><T>{q.text}</T></p>
                <cite><T>{q.name}</T></cite>
              </blockquote>
            ))}
          </div>
        </div>
        <div className={styles.testimonialsMedia}>
          <img alt="" src={`${A}/people.jpg`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Hiring process (1048:5775) ---------- */
const STEPS = [
  { title: "Application Review", text: "Our team carefully reviews your experience, skills, and alignment with AspenView opportunities." },
  { title: "Talent Screening", text: "Initial conversation with our People team to understand your goals, expertise, and career fit." },
  { title: "Technical & Role Interviews", text: "Collaborative interviews focused on technical capability, communication, and role-specific strengths." },
  { title: "Final Match & Offer", text: "Successful candidates receive final client alignment and a competitive offer to join our network." },
];
const FLAGS = [
  { w: 51, alt: "Colombia" },
  { w: 54, alt: "Argentina" },
  { w: 51, alt: "Panama" },
  { w: 59, alt: "Mexico" },
  { w: 57, alt: "Costa Rica" },
  { w: 51, alt: "Puerto Rico" },
];

export function CareersHiring() {
  return (
    <section className={`${styles.white} ${styles.gap}`}>
      <div className={`wrap ${styles.hiring}`}>
        <div className={styles.hiringCopy}>
          <p className={styles.hiringEyebrow}><T>{"Hiring process overview"}</T></p>
          <div className={styles.hiringBlock}>
            <h2 className={styles.title40}><T>{"What to Expect"}</T><br /><T>{"When You Apply"}</T></h2>
            <p className={styles.muted20}><T>{"Our hiring process is designed to be transparent, efficient, and candidate-centered, ensuring every step reflects our commitment to people, excellence, and opportunity."}</T></p>
          </div>
          <img alt="" src={`${A}/hire-line.svg`} className={styles.hireLine} />
          <div className={styles.hiringBlock}>
            <h2 className={styles.title40}><T>{"Where We Hire"}</T></h2>
            <p className={styles.muted20}><T>{"We hire across Latin America’s strongest talent hubs, connecting exceptional professionals with global opportunities in engineering, delivery, operations, and beyond."}</T></p>
            <div className={styles.flags}>
              {FLAGS.map((f, i) => (
                <img key={f.alt} alt={f.alt} src={`${A}/flag-${i + 1}.png`} width={f.w} height={34} />
              ))}
            </div>
          </div>
        </div>
        <ol className={styles.steps}>
          {STEPS.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <div className={styles.stepCopy}>
                <h3 className={styles.sub24}><T>{s.title}</T></h3>
                <p className={styles.muted20}><T>{s.text}</T></p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Meet our people team (1198:3608) ---------- */
/* card team (652:4856): Default photo → Hovered blue panel with name, role, bio and LinkedIn */
const TEAM = [
  {
    img: "team-1.jpg",
    href: "https://www.linkedin.com/in/danielaossa/",
    name: "Daniela Ossa",
    role: "Director, People",
    bio: "Daniela connects exceptional tech talent with exciting career opportunities at AspenView, bringing 13+ years of global recruitment experience and a passion for helping people and teams grow.",
  },
  {
    img: "team-2.png",
    href: "https://www.linkedin.com/in/adolfojgarcia/",
    name: "Adolfo Garcia",
    role: "People Operations Partner",
    bio: "Adolfo helps create a workplace where people feel supported, connected, and empowered to grow, bringing 7+ years of experience in talent management, employee engagement, and building teams across global markets.",
  },
  {
    img: "team-3.jpg",
    href: "https://www.linkedin.com/in/ivanhr/",
    name: "Ivan Gomez",
    role: "Senior Manager, Talent Operations",
    bio: "Ivan helps bring great talent and opportunities together at AspenView, drawing on 15+ years of experience building and growing teams across North America, LATAM, and EMEA.",
  },
];

export function CareersTeam() {
  return (
    <section className={`${styles.white} ${styles.gap}`}>
      <div className={styles.blueBandFlat}>
        <div className={`wrap ${styles.teamHead}`}>
          <h2 className={styles.teamTitle}><T>{"Meet Our People Team"}</T></h2>
          <p className={styles.teamText}><T>{"Our team is dedicated to connecting great talent with the right opportunities while creating positive experiences for candidates and partners."}</T></p>
        </div>
      </div>
      <div className={`wrap ${styles.team}`}>
        {TEAM.map((m) => (
          <article key={m.href} className={styles.teamCard} tabIndex={0}>
            <img alt={m.name} src={`${A}/${m.img}`} />
            <div className={styles.teamPanel}>
              <div className={styles.teamInfo}>
                <div>
                  <h3 className={styles.teamName}><T>{m.name}</T></h3>
                  <p className={styles.teamRole}><T>{m.role}</T></p>
                </div>
                <p className={styles.teamBio}><T>{m.bio}</T></p>
              </div>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.teamLinkedIn}
                aria-label={`${m.name} on LinkedIn`}
              >
                <img alt="" src={`${A}/linkedin.svg`} width={36} height={36} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Join the team + AspenCrew CTA (1048:5841) ---------- */
export function CareersJoin() {
  return (
    <section className={styles.gap}>
      <div className={styles.join}>
        <span className={styles.joinPill} aria-hidden />
        <div className={styles.joinBand}>
          <h2 className={`wrap ${styles.joinTitle}`}><T>{"Join the Team Shaping the Future of Technology in LatAm"}</T></h2>
        </div>
      </div>
      <div className={styles.crew}>
        <img alt="" src={`${A}/crew.jpg`} className={styles.bgImg} />
        <span className={styles.crewShade} aria-hidden />
        <div className={`wrap ${styles.crewInner}`}>
          <div className={styles.crewCopy}>
            <div className={styles.crewText}>
              <h2 className={`${styles.mainTitle} ${styles.light}`}><T>{"Become Part of the AspenCrew"}</T></h2>
              <p><T>{"At AspenView, we believe people and technology drive transformative change. Join a team that values your expertise, fosters your growth, and empowers you to make a lasting impact."}</T></p>
            </div>
            <PrimaryButton href={JOBS_URL} external><T>{"View AspenView open positions"}</T></PrimaryButton>
          </div>
          <div className={styles.crewSpacer} />
        </div>
      </div>
    </section>
  );
}
