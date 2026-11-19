import type { Metadata, Viewport } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-jb" });

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
