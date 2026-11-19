import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted variable fonts (Fontsource packages) — no Google Fonts fetch at build time,
// which was failing on Netlify.
const manrope = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const mono = localFont({
  src: "../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Kumar N — Senior Full Stack Developer",
  description:
    "Naveen Kumar N — Senior Full Stack Developer & AI-Enabled Backend Engineer. 5.5+ years building enterprise web applications across Healthcare, FinTech, ERP, E-Commerce and Raffle platforms.",
  keywords: ["Full Stack Developer", "Next.js", "NestJS", "React", "Node.js", "AI", "OCR", "PostgreSQL", "Naveen Kumar"],
  authors: [{ name: "Naveen Kumar N" }],
  openGraph: {
    title: "Naveen Kumar N — Senior Full Stack Developer",
    description: "5.5+ years building enterprise web applications powered by AI automation & scalable architecture.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${mono.variable}`} data-accent="crimson">
      <body>{children}</body>
    </html>
  );
}
