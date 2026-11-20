"use client";

import Link from "@/components/i18n/LocaleLink";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import { MaskIcon } from "./ui";
import styles from "./NavBar.module.css";
import {
  ABOUT_MENU,
  AI_MENU,
  HOW_WE_DELIVER_MENU,
  ROUTES,
  SERVICES_MENU,
  SIDEBAR_GROUPS,
  STRATEGY_MENU,
  type NavLink,
} from "@/lib/routes";

import { T } from "@/components/i18n/T";
import { useLang, useT } from "@/components/i18n/LangProvider";
import { localizeHref, stripLang, type Lang } from "@/lib/i18n";

type MenuId = "services" | "strategy" | "deliver" | "ai" | "about" | "lang";

const dropdownMotion = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.2, ease: [0, 0, 0.58, 1] as const },
};

function LinkList({ links, onNavigate }: { links: NavLink[]; onNavigate: () => void }) {
  return (
    <ul className={styles.ddList}>
      {links.map((l) => (
        <li key={l.label}>
          <Link href={l.href} className={styles.ddItem} onClick={onNavigate}>
            <T>{l.label}</T>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function NavItem({
  id,
  label,
  open,
  setOpen,
  offsetX,
  wide,
  children,
}: {
  id: MenuId;
  label?: ReactNode;
  open: MenuId | null;
  setOpen: (m: MenuId | null) => void;
  offsetX: number;
  wide?: boolean;
  children: ReactNode;
}) {
  const tr = useT();
  const isOpen = open === id;
  const isLang = id === "lang";
  return (
    <div
      className={styles.item}
      onMouseEnter={() => setOpen(id)}
      onMouseLeave={() => setOpen(null)}
    >
      <button
        type="button"
        className={`${isLang ? styles.langBtn : styles.navBtn} ${wide ? styles.navBtnWide : ""} ${isOpen ? styles.active : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isLang ? tr("Language") : undefined}
        onClick={() => setOpen(isOpen ? null : id)}
        onFocus={() => setOpen(id)}
      >
        {isLang ? (
          <MaskIcon src="/assets/nav/global.svg" size={20} />
        ) : (
          <>
            <span><T>{label}</T></span>
            <MaskIcon src="/assets/nav/arrow-down.svg" size={20} className={styles.chev} />
          </>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div className={styles.dropdown} style={{ left: offsetX }} {...dropdownMotion}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState<MenuId | null>(null);
  const [sidebar, setSidebar] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const lang = useLang();
  const tr = useT();
  /* same page in the other language: /services ⇄ /es/services */
  const hrefFor = (l: Lang) => localizeHref(l, stripLang(pathname || "/"));

  // Close menus on route change
  useEffect(() => {
    setOpen(null);
    setSidebar(false);
  }, [pathname]);

  // Lock scroll while sidebar is open; close with Escape
  useEffect(() => {
    document.documentElement.style.overflow = sidebar ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSidebar(false);
        setOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sidebar]);

  const close = () => setOpen(null);

  return (
    <>
      <header className={styles.nav}>
        <div className={styles.bar}>
          <Link href={ROUTES.home} className={styles.logoLink} aria-label={tr("AspenView home")}>
            <Logo className={styles.logo} />
          </Link>

          {/* Desktop navigation */}
          <nav className={styles.desktop} aria-label={tr("Main")}>
            <NavItem id="services" label={<T>{"Services"}</T>} open={open} setOpen={setOpen} offsetX={-162}>
              <div className={styles.ddServices}>
                <div className={styles.ddCol}>
                  <Link href={SERVICES_MENU.offerings.href} className={styles.ddHead} onClick={close}>
                    <T>{SERVICES_MENU.offerings.label}</T>
                  </Link>
                  <LinkList links={SERVICES_MENU.offeringLinks} onNavigate={close} />
                </div>
                <div className={styles.ddColFixed}>
                  <span className={styles.ddHead}><T>{SERVICES_MENU.partners.label}</T></span>
                  <LinkList links={SERVICES_MENU.partnerLinks} onNavigate={close} />
                </div>
              </div>
            </NavItem>

            <NavItem id="strategy" label={<T>{"Strategy"}</T>} open={open} setOpen={setOpen} offsetX={-40} wide>
              <div className={styles.ddSimple} style={{ width: 224 }}>
                <LinkList links={STRATEGY_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <NavItem id="deliver" label={<T>{"How we deliver"}</T>} open={open} setOpen={setOpen} offsetX={-50}>
              <div className={styles.ddSimple} style={{ width: 224 }}>
                <LinkList links={HOW_WE_DELIVER_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <NavItem id="ai" label={<T>{"AI for business"}</T>} open={open} setOpen={setOpen} offsetX={-57} wide>
              <div className={styles.ddSimple}>
                <LinkList links={AI_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <Link href={ROUTES.careers} className={styles.navBtn}>
              <span><T>{"Careers"}</T></span>
            </Link>

            <NavItem id="about" label={<T>{"About us"}</T>} open={open} setOpen={setOpen} offsetX={-50}>
              <div className={styles.ddSimple}>
                <LinkList links={ABOUT_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <NavItem id="lang" open={open} setOpen={setOpen} offsetX={-33}>
              <div className={styles.ddSimple}>
                <ul className={styles.ddList}>
                  {(
                    [
                      ["en", "English"],
                      ["es", "Español"],
                    ] as const
                  ).map(([l, name]) => (
                    <li key={l}>
                      <NextLink
                        href={hrefFor(l)}
                        hrefLang={l}
                        lang={l}
                        className={styles.ddItem}
                        aria-current={l === lang ? "true" : undefined}
                        onClick={close}
                      >
                        {name}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavItem>

            <Link href={ROUTES.contact} className={styles.contact}><T>{"Contact us"}</T></Link>
          </nav>

          {/* Tablet / mobile burger */}
          <button
            type="button"
            className={styles.burger}
            aria-label={tr("Open menu")}
            aria-expanded={sidebar}
            onClick={() => setSidebar(true)}
          >
            <img alt="" src="/assets/nav/hamburger.svg" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {sidebar && (
          <>
            <motion.div
              className={styles.overlay}
              onClick={() => setSidebar(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
            />
            <motion.aside
              className={styles.sidebar}
              role="dialog"
              aria-modal="true"
              aria-label={tr("Menu")}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
            >
              <div className={styles.sbTop}>
                <div className={styles.sbClose}>
                  <button type="button" aria-label={tr("Close menu")} onClick={() => setSidebar(false)}>
                    <img alt="" src="/assets/nav/close.svg" width={20} height={20} />
                  </button>
                </div>
                <div className={styles.sbList}>
                  {SIDEBAR_GROUPS.map((g) =>
                    g.links ? (
                      <div key={g.label} className={styles.sbGroup}>
                        <button
                          type="button"
                          className={`${styles.sbGroupBtn} ${expanded === g.label ? styles.sbGroupOpen : ""}`}
                          aria-expanded={expanded === g.label}
                          onClick={() => setExpanded(expanded === g.label ? null : g.label)}
                        >
                          <span><T>{g.label}</T></span>
                          <MaskIcon src="/assets/nav/arrow-down.svg" size={20} className={styles.sbChev} />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded === g.label && (
                            <motion.ul
                              className={styles.sbSub}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
                            >
                              {g.links.map((l) => (
                                <li key={l.label}>
                                  <Link href={l.href} className={styles.sbSubLink} onClick={() => setSidebar(false)}>
                                    <T>{l.label}</T>
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link key={g.label} href={g.href!} className={styles.sbLink} onClick={() => setSidebar(false)}>
                        <T>{g.label}</T>
                      </Link>
                    ),
                  )}
                  <NextLink
                    href={hrefFor(lang === "es" ? "en" : "es")}
                    hrefLang={lang === "es" ? "en" : "es"}
                    className={styles.sbLang}
                    aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
                    onClick={() => setSidebar(false)}
                  >
                    <img alt="" src="/assets/nav/global.svg" width={20} height={20} />
                    <span>{lang === "es" ? "ES" : "EN"}</span>
                  </NextLink>
                  <Link href={ROUTES.contact} className={styles.sbContact} onClick={() => setSidebar(false)}><T>{"Contact us"}</T></Link>
                </div>
              </div>
              <div className={styles.sbFooter}>
                <img alt="" src="/assets/nav/sidebar-line.svg" className={styles.sbLine} />
                <p><T>{"@ 2026 AspenView Technology Partners. All rights reserved."}</T></p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
