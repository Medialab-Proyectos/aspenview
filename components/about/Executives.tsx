"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Leadership.module.css";

const A = "/assets/about";
const ease = [0, 0, 0.58, 1] as const;

type Leader = { name: string; role: string; img: string; linkedin: string; bio: string[] };

/* Card leaders (1905:16811…) → ON_CLICK "+" opens "Overlay - Bio leaders" (2730:45649…), DISSOLVE */
const LEADERS: Leader[] = [
  {
    name: "Eric Berg",
    role: "CEO",
    img: "leader-eric.jpg",
    linkedin: "https://www.linkedin.com/in/ericberg44",
    bio: [
      "Eric focuses on serving AspenView clients, drawing on his technology-enabled performance improvement experience. Eric has vast IT services experience, including leading a nearshore provider with nearly 1,000 employees in LatAm and Eastern Europe, creating an 800-person development center in India, and building a 600-person development center in China. Throughout his career, Eric has led successful efforts to grow revenue and market share, transform operations, and execute major program management efforts. AspenView clients benefit from Eric’s strategic insights, drawing on his experiences as CEO, President, COO, CIO, and Chief Administrative Officer of leading companies such as Goodyear, NCR, Pepsico’s Frito-Lay, SunGard, International Game Technology, The Ohio State University, and seven years with McKinsey & Company.",
      "Eric holds an MBA from Harvard Business School and a BS in Industrial Engineering with honors from the University of Illinois Urbana-Champaign.",
    ],
  },
  {
    name: "Dan Edwards",
    role: "Chief Financial Officer",
    img: "leader-dan.jpg",
    linkedin: "https://www.linkedin.com/in/jdanedwards",
    bio: [
      "Dan Edwards is Chief Financial Officer of AspenView Technology Partners. He brings nearly two decades of finance leadership in global IT and network services. Before AspenView, he spent 19 years with Virtela Technology Services and NTT Global Networks, holding progressively senior finance roles and serving most recently as Head of Finance. In that role, he led FP&A, treasury, audit, and finance transformation across the US, India, and the Philippines. He is known for building diligence-ready finance functions, modernizing ERP and reporting, and partnering with executive teams on growth strategy. Dan holds an MS in Accounting from Regis University and a BS from Colorado State University.",
    ],
  },
  {
    name: "Brian Valeyko",
    role: "Chief Solution Architect",
    img: "leader-brian.jpg",
    linkedin: "https://www.linkedin.com/in/brianvaleyko",
    bio: [
      "Combining his considerable technical expertise and business experience, Brian advises AspenView clients on the best technology solutions adapted to their needs. He has over 25 years of experience in business application management, business intelligence, and data engineering. Brian grew an offshore engineering consulting team from 100 to 350 professionals while serving as the executive engagement manager for U.S.-based clients. For a Fortune 500 company, NCR Corporation, Brian created the security program for their global lab network (both physical and logical labs) which he implemented on 50K+ virtual machines and 100K+ devices in 70 countries and 150+ locations.",
      "Brian holds an MS in Engineering Management from The George Washington University and a BA in Economics from the University of Virginia.",
    ],
  },
  {
    name: "John Jacobs",
    role: "Chief Delivery Officer",
    img: "leader-john.png",
    linkedin: "https://www.linkedin.com/in/john-l-jacobs",
    bio: [
      "John delivers results for AspenView clients, drawing from his 30-year career including senior leadership roles ranging from the Fortune 500 to the U.S. Marines. Specializing in operations and service delivery, John brings a results-oriented approach to build high-performing teams that consistently deliver exceptional outcomes. AspenView clients benefit from his perspective and judgment earned as a global project manager, application developer, and service delivery executive who managed a global workforce of 750 employees at Genworth Financial. John served with distinction in the U.S. Marines for 22 years.",
      "John holds an MBA from William & Mary – Raymond A. Mason School of Business, an MA in Crisis/Emergency/Disaster Management from the American Military University, and a BA in political Science from Oregon State University.",
    ],
  },
  {
    name: "Michael Durham",
    role: "Chief Commercial Officer",
    img: "leader-michael.jpg",
    linkedin: "https://www.linkedin.com/in/michael-r-durham",
    bio: [
      "Michael leads AspenView’s commercial strategy and growth initiatives, leveraging extensive leadership experience in world-class organizations and entrepreneurial ventures. He held senior leadership positions at Procter & Gamble, a $30 billion consumer goods leader, and Burlington Industries, a $3 billion global textile powerhouse. Michael later co-founded and served as CEO of Burlington Technologies, scaling it to $50 million in annual sales. As founder of Sedgefield Advisors, Michael has advised global clients across diverse industries, delivering strategies that drive growth, operational efficiency, and transformative outcomes.",
      "Michael holds an MBA from Harvard Business School and a BS in Industrial Engineering from North Carolina State University.",
    ],
  },
  {
    name: "Matthijs Baaten",
    role: "Country President - Colombia",
    img: "leader-matthijs.jpg",
    linkedin: "https://co.linkedin.com/in/matthijsbaaten",
    bio: [
      "Matt heads all operations in Colombia for AspenView, and he partners with clients to ensure success as they engage with their AspenView technical teams. He is a trilingual (Dutch, English, and Spanish) global technology leader with 20 years of experience as a delivery executive for nearshore outsourcing firms in Latam and as a manager of large-scale IT and digital modernization programs for Accenture’s global clients. Matt preceded his 10-year residency in Bogotá, Colombia with a 2-year assignment in Bengaluru, India where he was responsible for the delivery success of a $25M IT Transformation program with 200 engineers. Matt’s AspenView clients benefit from his capacity to drive successful outcomes in cross-cultural engagements.",
      "Matt holds an MBA in International Management from Radboud University and a BS in Computer Science from Fontys University of Applied Sciences.",
    ],
  },
  {
    name: "Joe Kishkill",
    role: "Country President - Argentina",
    img: "leader-joe.jpg",
    linkedin: "https://ar.linkedin.com/in/joe-kishkill-9829aa7",
    bio: [
      "Joe leads all aspects of AspenView’s operations in Argentina, tapping an exceptional pool of engineering talent for clients in North America. Joe’s operating philosophy draws from his professional experience as CEO or President of international operations for leading manufacturing and services companies such as First Solar, Enron, and Exterran. Joe has led various international organizations with revenues in excess of $500 million annually. A resident of Buenos Aires, Argentina for 15 years, Joe’s clients benefit from his expertise in driving successful cross-border business outcomes.",
      "Joe holds an MBA from Harvard Business School and a BS in Electrical Engineering from Brown University.",
    ],
  },
  {
    name: "Tim Potten",
    role: "Chief People Officer",
    img: "leader-tim.jpg",
    linkedin: "https://www.linkedin.com/in/timpotten",
    bio: [
      "Tim is the driving force behind AspenView’s unique culture where AspenView clients benefit from their collaboration with technical resources that are positioned to do the best work of their professional careers. Leading all people and talent acquisition initiatives for AspenView, Tim has built global, high-performing, and sustainable cultures and talent infrastructures at numerous Fortune 200 companies, including UPS, Emerson, and Danaher. He has also held the highest HR leader position for multiple private equity-backed growth organizations. Most recently, Tim has been a trusted HR consulting and executive search partner for technology and engineering-focused companies.",
      "Tim holds a bachelor’s degree in International Business from Greenville University as well as a Senior Professional in Human Resources (SPHR) certification.",
    ],
  },
];

/* "AspenView" is set in bold bright blue inside the bios */
function Highlight({ text }: { text: string }) {
  const parts = text.split("AspenView");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <strong>AspenView</strong>}
          {p}
        </span>
      ))}
    </>
  );
}

export default function Executives() {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      lastTrigger.current?.focus();
    };
  }, [open]);

  const leader = open === null ? null : LEADERS[open];

  return (
    <>
      <div className={styles.leaders}>
        {LEADERS.map((l, i) => (
          <article key={l.name} className={styles.leader}>
            <img alt="" src={`${A}/leader-bg.jpg`} className={styles.leaderBg} />
            <img alt="" src={`${A}/${l.img}`} className={styles.leaderPhoto} />
            <span className={styles.leaderShade} aria-hidden />
            <div className={styles.leaderCopy}>
              <h3 className={styles.leaderName}>{l.name}</h3>
              <p className={styles.leaderRole}>{l.role}</p>
            </div>
            <button
              type="button"
              className={styles.leaderBtn}
              aria-label={`Read ${l.name}’s bio`}
              aria-haspopup="dialog"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpen(i);
              }}
            >
              <img alt="" src={`${A}/leader-add.svg`} width={20} height={20} />
            </button>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {leader && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            onClick={() => setOpen(null)}
          >
            <div
              className={styles.bio}
              role="dialog"
              aria-modal="true"
              aria-labelledby="leader-bio-name"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.bioCopy}>
                <div className={styles.bioHead}>
                  <h3 id="leader-bio-name" className={styles.bioName}>
                    {leader.name}
                  </h3>
                  <p className={styles.bioRole}>{leader.role}</p>
                </div>
                <div className={styles.bioText}>
                  {leader.bio.map((p) => (
                    <p key={p.slice(0, 24)}>
                      <Highlight text={p} />
                    </p>
                  ))}
                </div>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bioLinkedin}
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <img alt="" src={`${A}/linkedin.svg`} width={26} height={26} />
                </a>
              </div>
              <div className={styles.bioMedia}>
                <img alt="" src={`${A}/${leader.img}`} />
              </div>
              <button
                ref={closeRef}
                type="button"
                className={styles.bioClose}
                aria-label="Close bio"
                onClick={() => setOpen(null)}
              >
                <img alt="" src={`${A}/close.svg`} width={28} height={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
