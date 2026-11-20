import { Eyebrow } from "../ui";
import Executives from "./Executives";
import a from "./About.module.css";
import styles from "./Leadership.module.css";

const A = "/assets/about";

/* ---------- Who leads AspenView (1894:20358) ---------- */
export function LeadershipWho() {
  return (
    <section className={a.white}>
      <div className={`wrap ${styles.who}`}>
        <div className={styles.whoCopy}>
          <div className={a.headerTight}>
            <h2 className={a.heading}>
              <Eyebrow>WHO LEADS ASPENVIEW</Eyebrow>
              <span className={styles.whoTitle}>
                Our leadership has built businesses, led global teams and driven technology transformation across Fortune
                500 companies and high-growth organizations.
              </span>
            </h2>
            <p className={a.muted16}>
              We understand the pressures, decisions and trade-offs our clients navigate because we&apos;ve navigated many
              of them ourselves.
            </p>
          </div>
          <p className={styles.whoQuote}>
            That experience shapes how AspenView leads, how we solve problems and how we deliver for our clients.
          </p>
        </div>
        <img alt="" src={`${A}/who-leads.png`} className={styles.whoImg} />
      </div>
    </section>
  );
}

/* ---------- Executive leadership (1894:20796) ---------- */
export function LeadershipExecutives() {
  return (
    <section className={a.pale}>
      <div className={`wrap ${a.section} ${a.sectionGutter}`}>
        <div className={a.headerTight}>
          <h2 className={a.heading}>
            <Eyebrow>EXECUTIVE LEADERSHIP</Eyebrow>
            <span className={`${a.title} ${a.max700}`}>The People Accountable for How AspenView Delivers</span>
          </h2>
          <p className={`${a.muted16} ${a.max700}`}>
            Leaders who have built businesses and led technology at scale, now bringing that experience to every client
            engagement.
          </p>
        </div>
        <Executives />
      </div>
    </section>
  );
}

/* ---------- Advisory board (1905:16964) ---------- */
const ADVISORS = [
  "Tony Goland",
  "Bill VanCuren",
  "Mark Lampl",
  "Karen Alter",
  "Ivan Alvarez",
  "Hermes Guarin",
  "Patrick Taylor",
  "Doug Foley",
  "David Ehrlich",
];
const ADVISOR_IMG = ["1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.png", "9.jpg"];

export function LeadershipAdvisors() {
  return (
    <section className={a.white}>
      <div className={`wrap ${a.section} ${a.sectionGutter}`}>
        <div className={a.headerTight}>
          <h2 className={a.heading}>
            <Eyebrow>ADVISORY BOARD</Eyebrow>
            <span className={`${a.title} ${a.max700}`}>
              Perspective That Keeps Us
              <br />
              Looking Forward
            </span>
          </h2>
          <div className={`${a.muted16} ${a.paras} ${a.max700}`}>
            <p>
              Our Advisory Board brings together experienced leaders across technology, business, operations, talent and
              transformation.
            </p>
            <p>
              Their collective perspective challenges our thinking, broadens our view and helps AspenView continue evolving
              around the changing needs of our clients.
            </p>
          </div>
        </div>
        <ul className={styles.advisors}>
          {ADVISORS.map((name, i) => (
            <li key={name} className={styles.advisor}>
              <img
                alt=""
                src={`${A}/advisor-${ADVISOR_IMG[i]}`}
                className={`${styles.advisorImg} ${i === 7 ? styles.advisorBottom : ""}`}
              />
              <div>
                <h3 className={styles.advisorName}>{name}</h3>
                <p className={styles.advisorRole}>Advisor</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
