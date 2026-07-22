import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" });
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
  themeColor: "#06060b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
