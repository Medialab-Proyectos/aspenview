"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import styles from "./Contact.module.css";

const A = "/assets/contact";

/* Componente form (2579:23748): the three tabs swap the heading, intro and the dropdown (Dropdown form 1/2/3) */
const TABS = [
  {
    key: "project",
    label: "Discuss a project",
    title: "Let's Talk About Your Project",
    intro: "Tell us what you're working on and we'll connect you with the right experts.",
    question: "What are you looking to solve?",
    options: ["Software Engineering", "Data Engineering BI & AI", "Agentic Process Automation", "Customer Success", "Other"],
  },
  {
    key: "talent",
    label: "Find talent",
    title: "Build Your Team",
    intro: "Find the expertise and delivery capacity you need.",
    question: "What kind of support are you looking for?",
    options: ["Data Platforms", "Microsoft Ecosystem", "Modern Development Stacks", "Cybersecurity", "Customer Experience"],
  },
  {
    key: "partner",
    label: "Salesforce solutions",
    title: "Let's Explore a Partnership",
    intro: "Discover opportunities to collaborate and grow together.",
    question: "What would you like your AI agent to help you achieve?",
    /* Figma "Dropdown form 3" (2577:22818), updated 20/11 */
    options: ["Agentforce", "Data 360", "MuleSoft", "Slack", "I’m not sure yet"],
    /* Figma "Dropdown country" (3067:52833), only on this tab */
    countries: ["Colombia", "Mexico", "Brazil", "Chile", "Peru", "Argentina", "Other"],
  },
] as const;

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "company" | "country" | "topic" | "consent", string>>;

function Label({ htmlFor, children, required }: { htmlFor?: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
      {required && <span className={styles.req}> *</span>}
    </label>
  );
}

function Select({
  id,
  options,
  value,
  onChange,
  invalid,
}: {
  id: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  invalid: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const listId = `${id}-list`;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const choose = (i: number) => {
    onChange(options[i]);
    setOpen(false);
  };

  return (
    <div className={styles.select} ref={ref}>
      <button
        id={id}
        type="button"
        className={`${styles.field} ${styles.selectBtn} ${invalid ? styles.invalid : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            if (!open) return setOpen(true);
            setActive((a) => (a + (e.key === "ArrowDown" ? 1 : options.length - 1)) % options.length);
          } else if ((e.key === "Enter" || e.key === " ") && open) {
            e.preventDefault();
            choose(active);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      >
        <span className={value ? undefined : styles.placeholderStrong}>{value || "Select an option"}</span>
        <img alt="" src={`${A}/${open ? "arrow-up" : "arrow-down"}.svg`} width={24} height={24} />
      </button>
      {open && (
        <ul id={listId} role="listbox" className={styles.options} aria-labelledby={id}>
          {options.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={o === value}
              className={`${styles.option} ${i === active ? styles.optionActive : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(i)}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Check({
  checked,
  onChange,
  children,
  invalid,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  invalid?: boolean;
}) {
  return (
    <label className={`${styles.check} ${invalid ? styles.checkInvalid : ""}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className={styles.checkBox} aria-hidden>
        <img alt="" src={`${A}/uncheck.svg`} width={24} height={24} />
      </span>
      <span>{children}</span>
    </label>
  );
}

export default function ContactForm() {
  const uid = useId();
  const [tab, setTab] = useState(0);
  const [topic, setTopic] = useState("");
  const [country, setCountry] = useState("");
  const [updates, setUpdates] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = TABS[tab];
  const countries = "countries" in t ? t.countries : null;

  /* Deep links from CTAs elsewhere on the site: /contact?tab=partner&need=agentforce preselects the tab and option */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const i = TABS.findIndex((x) => x.key === q.get("tab"));
    if (i < 0) return;
    setTab(i);
    const need = q.get("need")?.toLowerCase();
    const opt = need && TABS[i].options.find((o) => o.toLowerCase().startsWith(need));
    if (opt) setTopic(opt);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("firstName")) next.firstName = "Please enter your first name.";
    if (!v("lastName")) next.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = "Please enter a valid work email.";
    if (!v("company")) next.company = "Please enter your company.";
    if (countries && !country) next.country = "Please select your country.";
    if (!topic) next.topic = "Please select an option.";
    if (!consent) next.consent = "Please acknowledge the Privacy Policy to continue.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiry: t.label,
          firstName: v("firstName"),
          lastName: v("lastName"),
          email: v("email"),
          company: v("company"),
          country: countries ? country : undefined,
          topic,
          details: v("details"),
          updates,
          consent,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={styles.card}>
        <div className={styles.sent} role="status">
          <h2 className={styles.formTitle}>Thank You!</h2>
          <p className={styles.formIntro}>We received your message and will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={onSubmit} noValidate>
      <div className={styles.cardHead}>
        <p className={styles.cardEyebrow}>How can we help you?</p>
        <div className={styles.tabs} role="tablist" aria-label="Type of inquiry">
          {TABS.map((x, i) => (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={i === tab}
              className={`${styles.tab} ${i === tab ? styles.tabActive : ""}`}
              onClick={() => {
                setTab(i);
                setTopic("");
                setCountry("");
                setErrors((er) => ({ ...er, topic: undefined, country: undefined }));
              }}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>
      <img alt="" src={`${A}/line.svg`} className={styles.divider} />
      <div className={styles.intro}>
        <h2 className={styles.formTitle}>{t.title}</h2>
        <p className={styles.formIntro}>{t.intro}</p>
      </div>

      <div className={styles.fields}>
        <div className={styles.row}>
          <div className={styles.input}>
            <Label htmlFor={`${uid}-fn`} required>
              First name
            </Label>
            <input id={`${uid}-fn`} name="firstName" placeholder="First name" autoComplete="given-name" className={`${styles.field} ${errors.firstName ? styles.invalid : ""}`} aria-invalid={!!errors.firstName} />
            {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
          </div>
          <div className={styles.input}>
            <Label htmlFor={`${uid}-ln`} required>
              Last name
            </Label>
            <input id={`${uid}-ln`} name="lastName" placeholder="Last name" autoComplete="family-name" className={`${styles.field} ${errors.lastName ? styles.invalid : ""}`} aria-invalid={!!errors.lastName} />
            {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
          </div>
        </div>
        <div className={styles.input}>
          <Label htmlFor={`${uid}-em`} required>
            Work email
          </Label>
          <input id={`${uid}-em`} name="email" type="email" placeholder="name@company.com" autoComplete="email" className={`${styles.field} ${errors.email ? styles.invalid : ""}`} aria-invalid={!!errors.email} />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.input}>
          <Label htmlFor={`${uid}-co`} required>
            Company
          </Label>
          <input id={`${uid}-co`} name="company" placeholder="Company name" autoComplete="organization" className={`${styles.field} ${errors.company ? styles.invalid : ""}`} aria-invalid={!!errors.company} />
          {errors.company && <p className={styles.error}>{errors.company}</p>}
        </div>
        {countries && (
          <div className={styles.input}>
            <Label htmlFor={`${uid}-ct`} required>
              Country
            </Label>
            <Select
              id={`${uid}-ct`}
              options={countries}
              value={country}
              invalid={!!errors.country}
              onChange={(val) => {
                setCountry(val);
                setErrors((er) => ({ ...er, country: undefined }));
              }}
            />
            {errors.country && <p className={styles.error}>{errors.country}</p>}
          </div>
        )}
        <div className={styles.input}>
          <Label htmlFor={`${uid}-tp`} required>
            {t.question}
          </Label>
          <Select
            id={`${uid}-tp`}
            options={t.options}
            value={topic}
            invalid={!!errors.topic}
            onChange={(val) => {
              setTopic(val);
              setErrors((er) => ({ ...er, topic: undefined }));
            }}
          />
          {errors.topic && <p className={styles.error}>{errors.topic}</p>}
        </div>
        <div className={styles.input}>
          <Label htmlFor={`${uid}-dt`}>Give us more details</Label>
          <textarea id={`${uid}-dt`} name="details" placeholder="A few words about what you need..." className={styles.textarea} />
        </div>
        <div className={styles.checks}>
          <Check checked={updates} onChange={setUpdates}>
            I&apos;d like to receive insights and updates from AspenView. (Optional)
          </Check>
          <Check
            checked={consent}
            invalid={!!errors.consent}
            onChange={(val) => {
              setConsent(val);
              setErrors((er) => ({ ...er, consent: undefined }));
            }}
          >
            By submitting, you acknowledge AspenView&apos;s <Link href={ROUTES.privacy}>Privacy Policy</Link> and the
            processing of your information to respond to your inquiry. *
          </Check>
          {errors.consent && <p className={styles.error}>{errors.consent}</p>}
        </div>
        {status === "error" && (
          <p className={styles.error} role="alert">
            Something went wrong sending your message. Please try again in a moment.
          </p>
        )}
        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          <span>{status === "sending" ? "Sending…" : "Let’s connect"}</span>
          <img alt="" src="/assets/icons/arrow-right-light.svg" width={24} height={24} />
        </button>
      </div>
    </form>
  );
}
