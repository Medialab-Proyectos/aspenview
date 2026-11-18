export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href?: string; links?: NavLink[] };

export const ROUTES = {
  home: "/",
  serviceOfferings: "/services",
  softwareEngineering: "/services/software-engineering",
  dataEngineering: "/services/data-engineering",
  agenticAutomation: "/services/agentic-process-automation",
  customerSuccess: "/services/customer-success",
  salesforce: "/partners/salesforce",
  strategy: "/strategy",
  talentEnablement: "/strategy",
  deliveryExcellence: "/how-we-deliver/delivery-excellence",
  deliveryModels: "/how-we-deliver/delivery-models",
  aiTransformation: "/ai/ai-transformation",
  aiNative: "/ai/ai-native",
  agenticEngineering: "/ai/agentic-engineering",
  careers: "/careers",
  whyAspenview: "/about/why-aspenview",
  leadership: "/about/leadership",
  whoWeAre: "/about/who-we-are",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

/** Desktop dropdown content (Figma overlays 806:11245, 1227:13260, 806:10896, 1230:13514). */
export const SERVICES_MENU = {
  offerings: { label: "Service offerings", href: ROUTES.serviceOfferings },
  offeringLinks: [
    { label: "Software engineering", href: ROUTES.softwareEngineering },
    { label: "Data engineering BI & AI", href: ROUTES.dataEngineering },
    { label: "Agentic process automation", href: ROUTES.agenticAutomation },
    { label: "Customer success", href: ROUTES.customerSuccess },
  ],
  partners: { label: "Partners" },
  partnerLinks: [{ label: "Salesforce", href: ROUTES.salesforce }],
};

export const HOW_WE_DELIVER_MENU: NavLink[] = [
  { label: "Delivery excellence", href: ROUTES.deliveryExcellence },
  { label: "Delivery models", href: ROUTES.deliveryModels },
];

export const AI_MENU: NavLink[] = [
  { label: "AI Transformation", href: ROUTES.aiTransformation },
  { label: "AI-Native at AspenView", href: ROUTES.aiNative },
  { label: "Agentic engineering", href: ROUTES.agenticEngineering },
];

export const ABOUT_MENU: NavLink[] = [
  { label: "Why AspenView", href: ROUTES.whyAspenview },
  { label: "Leadership", href: ROUTES.leadership },
  { label: "Who we are", href: ROUTES.whoWeAre },
];

export const STRATEGY_MENU: NavLink[] = [{ label: "Talent Enablement", href: ROUTES.talentEnablement }];

/** Sidebar (burger) groups — Figma "Burguer menu sidebar". */
export const SIDEBAR_GROUPS: NavGroup[] = [
  {
    label: "Services",
    links: [
      SERVICES_MENU.offerings,
      ...SERVICES_MENU.offeringLinks,
      ...SERVICES_MENU.partnerLinks,
    ],
  },
  { label: "Strategy", links: STRATEGY_MENU },
  { label: "How we deliver", links: HOW_WE_DELIVER_MENU },
  { label: "AI Capabilities", links: AI_MENU },
  { label: "Careers", href: ROUTES.careers },
  { label: "About us", links: ABOUT_MENU },
];
