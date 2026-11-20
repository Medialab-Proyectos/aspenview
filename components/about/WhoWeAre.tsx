import { Eyebrow } from "../ui";
import a from "./About.module.css";
import styles from "./WhoWeAre.module.css";

import { T } from "@/components/i18n/T";

const A = "/assets/about";

/* ---------- Hero aside card (1869:20983) ---------- */
export function WhoHeroCard() {
  return (
    <aside className={styles.heroCard}>
      <img alt="" src={`${A}/who-spark.svg`} width={60} height={60} />
      <div className={styles.heroCardCopy}>
        <h2 className={styles.heroCardTitle}><T>{"An AI-Native Technology Services Company"}</T></h2>
        <p><T>{"Bringing together exceptional talent, modern technology and a shared commitment to helping our clients move faster and achieve more."}</T></p>
      </div>
      <ul className={styles.heroTags}>
        <li><T>{"Talent"}</T></li>
        <li><T>{"Technology"}</T></li>
        <li><T>{"Commitment"}</T></li>
      </ul>
    </aside>
  );
}

/* ---------- The idea behind AspenView (1866:9535) ---------- */
export function WhoGrove() {
  return (
    <section className={a.white}>
      <div className={`wrap ${styles.grove}`}>
        <div className={styles.groveCopy}>
          <div className={a.headerTight}>
            <h2 className={a.heading}>
              <Eyebrow><T>{"THE IDEA BEHIND ASPENVIEW"}</T></Eyebrow>
              <span className={`${a.title} ${styles.max560}`}><T>{"Stronger Together, Like an Aspen Grove"}</T></span>
            </h2>
            <div className={`${a.muted16} ${a.paras} ${styles.max600}`}>
              <p><T>{"Aspen trees are remarkable not because they stand alone, but because of what connects them beneath the surface."}</T></p>
              <p><T>{"Their interconnected root systems allow individual trees to grow stronger together, creating resilience, adaptability and strength across the entire grove."}</T></p>
              <p><T>{"That idea reflects how we see technology partnerships."}</T></p>
            </div>
          </div>
          <ul className={styles.pills}>
            {["Resilience", "Adaptability", "Strength"].map((p) => (
              <li key={p}>
                <img alt="" src={`${A}/grove-check.svg`} width={18} height={18} />
                <T>{p}</T>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.groveMedia}>
          <img alt="Aspen grove in autumn" src={`${A}/grove.webp`} width={544} height={573} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Belief (1872:21144) ---------- */
export function WhoBelief() {
  return (
    <section className={a.white}>
      <div className={`wrap ${styles.beliefWrap}`}>
        <div className={styles.belief}>
          <div className={styles.beliefCopy}>
            <p className={styles.beliefQuote}><T>{"Great outcomes don't come from isolated capabilities. They come from connecting the right people, technology and expertise around a shared goal."}</T></p>
            <p className={a.muted16tight}><T>{"That belief is at the heart of AspenView."}</T></p>
          </div>
          <img
            alt="People, technology and expertise connected around a shared goal"
            src={`${A}/belief.png`}
            className={styles.beliefImg}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- What we do (1866:9545) ---------- */
export function WhoWhatWeDo() {
  return (
    <section className={a.dark}>
      <div className={`wrap ${styles.whatWrap}`}>
        <div className={styles.whatCopy}>
          <h2 className={a.heading}>
            <Eyebrow tone="white"><T>{"WHAT WE DO"}</T></Eyebrow>
            <span className={`${a.title} ${a.titleLight}`}><T>{"Built to Make Technology Deliver More"}</T></span>
          </h2>
          <div className={`${a.paras} ${styles.whatText}`}>
            <p><T>{"We connect high-caliber engineering, data and AI expertise across Latin America with the needs of North American organizations, creating teams and solutions built around what our clients need to achieve."}</T></p>
            <p><T>{"From specialized expertise to dedicated teams and managed delivery, we bring the right capabilities together to turn technology ambition into execution."}</T></p>
          </div>
        </div>
        <figure className={styles.whatFigure}>
          <img
            alt="Latin America talent (engineering, data, AI expertise) connected with North America needs (organizations, ambitions, outcomes)"
            src={`${A}/what-we-do.png`}
          />
          <figcaption><T>{"Teams and solutions built around what our clients need to achieve"}</T></figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- What we believe (1873:21327) ---------- */
const VALUES = [
  { icon: "val-shield", title: "Integrity", tag: "Do what's right.", text: "We act with honesty and transparency, even when the answer isn't the easiest one." },
  { icon: "val-unread", title: "Reliability", tag: "Own the outcome.", text: "We do what we say we'll do, take responsibility for our commitments and show up when it matters." },
  { icon: "val-user", title: "Client Focus", tag: "Start with what matters.", text: "We listen first, understand the bigger picture and stay focused on creating meaningful value." },
  { icon: "val-course", title: "Excellence", tag: "Keep raising the bar.", text: "We bring high standards to our work, stay curious and continuously look for better ways to deliver." },
  { icon: "val-heart", title: "Trust & Respect", tag: "Better together.", text: "We value different experiences, perspectives and ideas, challenging each other constructively and succeeding together." },
];

export function WhoValues() {
  return (
    <section className={a.white}>
      <div className={`wrap ${a.section}`}>
        <div className={a.headerTight}>
          <h2 className={a.heading}>
            <Eyebrow><T>{"WHAT WE BELIEVE"}</T></Eyebrow>
            <span className={`${a.title} ${styles.max850}`}><T>{"Technology Changes Quickly. The Principles Behind Great Partnerships Shouldn't"}</T></span>
          </h2>
          <p className={`${a.muted16} ${styles.max750}`}><T>{"Our values guide how we work with our clients, our teams and each other. Five principles, one way of working."}</T></p>
        </div>
        <div className={styles.values}>
          {VALUES.map((v, i) => (
            <article key={v.title} className={`${styles.value} hover-blue`}>
              <div className={styles.valueTop}>
                <span className={styles.valueNum}>{String(i + 1).padStart(2, "0")}</span>
                <img alt="" src={`${A}/${v.icon}.svg`} width={32} height={32} />
              </div>
              <div className={styles.valueBody}>
                <h3 className={a.title32}><T>{v.title}</T></h3>
                <div className={styles.valueSub}>
                  <p className={styles.valueTag}><T>{v.tag}</T></p>
                  <p className={a.muted16tight}><T>{v.text}</T></p>
                </div>
              </div>
            </article>
          ))}
          <div className={`${styles.value} ${styles.valuePhoto}`}>
            <img alt="" src={`${A}/our-teams.jpg`} className={styles.valuePhotoImg} />
            <span className={styles.valuePill}><T>{"Our teams"}</T></span>
          </div>
        </div>
      </div>
    </section>
  );
}
