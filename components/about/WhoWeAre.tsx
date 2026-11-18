import { Eyebrow } from "../ui";
import a from "./About.module.css";
import styles from "./WhoWeAre.module.css";

const A = "/assets/about";

/* ---------- Hero aside card (1869:20983) ---------- */
export function WhoHeroCard() {
  return (
    <aside className={styles.heroCard}>
      <img alt="" src={`${A}/who-spark.svg`} width={60} height={60} />
      <div className={styles.heroCardCopy}>
        <h2 className={styles.heroCardTitle}>An AI-native technology services company</h2>
        <p>
          Bringing together exceptional talent, modern technology and a shared commitment to helping our clients move
          faster and achieve more.
        </p>
      </div>
      <ul className={styles.heroTags}>
        <li>Talent</li>
        <li>Technology</li>
        <li>Commitment</li>
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
              <Eyebrow>THE IDEA BEHIND ASPENVIEW</Eyebrow>
              <span className={`${a.title} ${styles.max560}`}>Stronger together, like an aspen grove</span>
            </h2>
            <div className={`${a.muted16} ${a.paras} ${styles.max600}`}>
              <p>
                Aspen trees are remarkable not because they stand alone, but because of what connects them beneath the
                surface.
              </p>
              <p>
                Their interconnected root systems allow individual trees to grow stronger together — creating resilience,
                adaptability and strength across the entire grove.
              </p>
              <p>That idea reflects how we see technology partnerships.</p>
            </div>
          </div>
          <ul className={styles.pills}>
            {["Resilience", "Adaptability", "Strength"].map((p) => (
              <li key={p}>
                <img alt="" src={`${A}/grove-check.svg`} width={18} height={18} />
                {p}
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
            <p className={styles.beliefQuote}>
              Great outcomes don&apos;t come from isolated capabilities. They come from connecting the right people,
              technology and expertise around a shared goal.
            </p>
            <p className={a.muted16tight}>That belief is at the heart of AspenView.</p>
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
            <Eyebrow tone="white">WHAT WE DO</Eyebrow>
            <span className={`${a.title} ${a.titleLight}`}>Built to make technology deliver more</span>
          </h2>
          <div className={`${a.paras} ${styles.whatText}`}>
            <p>
              We connect high-caliber engineering, data and AI expertise across Latin America with the needs of North
              American organizations — creating teams and solutions built around what our clients need to achieve.
            </p>
            <p>
              From specialized expertise to dedicated teams and managed delivery, we bring the right capabilities together
              to turn technology ambition into execution.
            </p>
          </div>
        </div>
        <figure className={styles.whatFigure}>
          <img
            alt="Latin America talent (engineering, data, AI expertise) connected with North America needs (organizations, ambitions, outcomes)"
            src={`${A}/what-we-do.png`}
          />
          <figcaption>Teams and solutions built around what our clients need to achieve</figcaption>
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
  { icon: "val-heart", title: "Trust & Respect", tag: "Better together.", text: "We value different experiences, perspectives and ideas — challenging each other constructively and succeeding together." },
];

export function WhoValues() {
  return (
    <section className={a.white}>
      <div className={`wrap ${a.section}`}>
        <div className={a.headerTight}>
          <h2 className={a.heading}>
            <Eyebrow>WHAT WE BELIEVE</Eyebrow>
            <span className={`${a.title} ${styles.max850}`}>
              Technology changes quickly. The principles behind great partnerships shouldn&apos;t
            </span>
          </h2>
          <p className={`${a.muted16} ${styles.max750}`}>
            Our values guide how we work with our clients, our teams and each other. Five principles, one way of working.
          </p>
        </div>
        <div className={styles.values}>
          {VALUES.map((v, i) => (
            <article key={v.title} className={styles.value}>
              <div className={styles.valueTop}>
                <span className={styles.valueNum}>{String(i + 1).padStart(2, "0")}</span>
                <img alt="" src={`${A}/${v.icon}.svg`} width={32} height={32} />
              </div>
              <div className={styles.valueBody}>
                <h3 className={a.title32}>{v.title}</h3>
                <div className={styles.valueSub}>
                  <p className={styles.valueTag}>{v.tag}</p>
                  <p className={a.muted16tight}>{v.text}</p>
                </div>
              </div>
            </article>
          ))}
          <div className={`${styles.value} ${styles.valuePhoto}`}>
            <img alt="" src={`${A}/our-teams.jpg`} className={styles.valuePhotoImg} />
            <span className={styles.valuePill}>Our teams</span>
          </div>
        </div>
      </div>
    </section>
  );
}
