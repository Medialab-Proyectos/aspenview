import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

// Roboto variable (latin, wght 300–700) self-hosted so builds never depend on Google Fonts at build time
const roboto = localFont({
  src: "./fonts/roboto-latin-variable.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-roboto",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "AspenView Technology Partners — The AI-native technology partner",
  description:
    "We help organizations build and scale technology teams faster, combining expert engineering across Latin America with AI-powered delivery.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1a28",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <CursorGlow />
      </body>
    </html>
  );
}
