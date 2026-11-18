"use client";

import Link from "next/link";
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
  type NavLink,
} from "@/lib/routes";

type MenuId = "services" | "deliver" | "ai" | "about" | "lang";

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
            {l.label}
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
        aria-label={isLang ? "Language" : undefined}
        onClick={() => setOpen(isOpen ? null : id)}
        onFocus={() => setOpen(id)}
      >
        {isLang ? (
          <MaskIcon src="/assets/nav/global.svg" size={20} />
        ) : (
          <>
            <span>{label}</span>
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
          <Link href={ROUTES.home} className={styles.logoLink} aria-label="AspenView home">
            <Logo className={styles.logo} />
          </Link>

          {/* Desktop navigation */}
          <nav className={styles.desktop} aria-label="Main">
            <NavItem id="services" label="Services" open={open} setOpen={setOpen} offsetX={-162}>
              <div className={styles.ddServices}>
                <div className={styles.ddCol}>
                  <Link href={SERVICES_MENU.offerings.href} className={styles.ddHead} onClick={close}>
                    {SERVICES_MENU.offerings.label}
                  </Link>
                  <LinkList links={SERVICES_MENU.offeringLinks} onNavigate={close} />
                </div>
                <div className={styles.ddColFixed}>
                  <span className={styles.ddHead}>{SERVICES_MENU.partners.label}</span>
                  <LinkList links={SERVICES_MENU.partnerLinks} onNavigate={close} />
                </div>
              </div>
            </NavItem>

            <Link href={ROUTES.strategy} className={`${styles.navBtn} ${styles.navBtnWide}`}>
              <span>Strategy</span>
              <MaskIcon src="/assets/nav/arrow-down-2.svg" size={20} className={styles.chev} />
            </Link>

            <NavItem id="deliver" label="How we deliver" open={open} setOpen={setOpen} offsetX={-50}>
              <div className={styles.ddSimple} style={{ width: 224 }}>
                <LinkList links={HOW_WE_DELIVER_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <NavItem id="ai" label="AI for business" open={open} setOpen={setOpen} offsetX={-57} wide>
              <div className={styles.ddSimple}>
                <LinkList links={AI_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <Link href={ROUTES.careers} className={styles.navBtn}>
              <span>Careers</span>
            </Link>

            <NavItem id="about" label="About us" open={open} setOpen={setOpen} offsetX={-50}>
              <div className={styles.ddSimple}>
                <LinkList links={ABOUT_MENU} onNavigate={close} />
              </div>
            </NavItem>

            <NavItem id="lang" open={open} setOpen={setOpen} offsetX={-33}>
              <div className={styles.ddSimple}>
                <ul className={styles.ddList}>
                  <li>
                    <button type="button" className={styles.ddItem} onClick={close}>
                      English
                    </button>
                  </li>
                  <li>
                    <button type="button" className={styles.ddItem} onClick={close}>
                      Español
                    </button>
                  </li>
                </ul>
              </div>
            </NavItem>

            <Link href={ROUTES.contact} className={styles.contact}>
              Contact us
            </Link>
          </nav>

          {/* Tablet / mobile burger */}
          <button
            type="button"
            className={styles.burger}
            aria-label="Open menu"
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
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
            >
              <div className={styles.sbTop}>
                <div className={styles.sbClose}>
                  <button type="button" aria-label="Close menu" onClick={() => setSidebar(false)}>
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
                          <span>{g.label}</span>
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
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link key={g.label} href={g.href!} className={styles.sbLink} onClick={() => setSidebar(false)}>
                        {g.label}
                      </Link>
                    ),
                  )}
                  <button type="button" className={styles.sbLang}>
                    <img alt="" src="/assets/nav/global.svg" width={20} height={20} />
                    <span>EN</span>
                  </button>
                  <Link href={ROUTES.contact} className={styles.sbContact} onClick={() => setSidebar(false)}>
                    Contact us
                  </Link>
                </div>
              </div>
              <div className={styles.sbFooter}>
                <img alt="" src="/assets/nav/sidebar-line.svg" className={styles.sbLine} />
                <p>@ 2026 AspenView Technology Partners. All rights reserved.</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
