import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import { LangProvider } from "@/components/i18n/LangProvider";
import { LANGS } from "@/lib/i18n";
import { dictFor, langFrom, pageMeta } from "@/lib/i18n/meta";
import "../globals.css";

// Roboto variable (latin, wght 300–700) self-hosted so builds never depend on Google Fonts at build time
const roboto = localFont({
  src: "../fonts/roboto-latin-variable.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-roboto",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

/* Both languages are pre-rendered; any other prefix is a 404 */
export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang, "/", {
    title: "AspenView Technology Partners — The AI-native technology partner",
    description:
      "We help organizations build and scale technology teams faster, combining expert engineering across Latin America with AI-powered delivery.",
  });
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1a28",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = langFrom((await params).lang);
  return (
    <html lang={lang} className={roboto.variable}>
      <body>
        <LangProvider lang={lang} dict={dictFor(lang)}>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <CursorGlow />
        </LangProvider>
      </body>
    </html>
  );
}
