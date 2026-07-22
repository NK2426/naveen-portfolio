export const profile = {
  name: "Naveen Kumar N",
  title: "Senior Full Stack Developer",
  subtitle: "AI-Enabled Backend Engineer",
  roles: [
    "Senior Full Stack Developer",
    "AI-Enabled Backend Engineer",
    "System Design & Microservices",
    "Next.js · NestJS · PostgreSQL",
    "Team Lead & Mentor",
  ],
  email: "naveen2426kumar@gmail.com",
  workEmail: "naveen@raffle-tech.com",
  phone: "+91 96002 65620",
  phoneRaw: "+919600265620",
  location: "Tamil Nadu, India",
  education: "B.E. Computer Science & Engineering — Erode Sengunthar Engineering College",
  resume: "/Naveen_Kumar_N_Resume.pdf",
  summary:
    "Senior Full Stack Developer with 5.5+ years designing and delivering enterprise web applications across Healthcare, FinTech, ERP, E-Commerce & Raffle platforms — powered by AI automation, scalable architecture & obsessive performance.",
};

export const competencies = [
  "Full Stack Development",
  "System Design",
  "Microservices",
  "AI & LLM Integration",
  "Multi-Tenant SaaS",
  "OCR Automation",
  "Performance Optimization",
  "Team Leadership",
];

export type SkillGroup = { icon: string; title: string; tags: string[] };

export const skills: SkillGroup[] = [
  {
    icon: "◈",
    title: "Frontend",
    tags: ["Angular", "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Bootstrap"],
  },
  { icon: "⬡", title: "Backend", tags: ["Node.js", "Express.js", "NestJS", "TypeORM", "Sequelize"] },
  { icon: "⬢", title: "Database", tags: ["PostgreSQL", "MongoDB", "MySQL"] },
  { icon: "☁", title: "Cloud & DevOps", tags: ["AWS EC2", "Git", "CI/CD", "Nginx", "PM2", "Docker"] },
  {
    icon: "✦",
    title: "AI & Automation",
    tags: ["OpenAI", "Codex", "Claude", "Gemini", "Prompt Engineering", "OCR", "Tesseract"],
  },
  {
    icon: "◇",
    title: "Architecture",
    tags: ["Microservices", "REST APIs", "Multi-Tenant SaaS", "System Design", "Performance"],
  },
];

export type Job = {
  date: string;
  role: string;
  company: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    date: "May 2025 — Present",
    role: "Senior Full Stack Developer",
    company: "Raffle Tech LLC",
    points: [
      "Designed & built a scalable Raffle Management platform using Next.js and NestJS.",
      "Engineered secure, high-performance REST APIs — cutting API response times by ~30%.",
      "Built a custom random winner-selection algorithm ensuring fairness, uniqueness & speed at database scale.",
      "Delivered AI-powered invoice validation using OCR + LLM prompt engineering, plus intelligent forms for automated data extraction.",
      "Shipped secure government digital projects for Middle East clients; supported live enterprise onboarding with minimal downtime.",
      "Led architecture discussions, production deployments, code reviews & mentored junior developers.",
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "AI / OCR"],
  },
  {
    date: "Dec 2024 — Feb 2025",
    role: "Senior Software Engineer",
    company: "G2 Technology and Solutions",
    points: [
      "Developed enterprise healthcare dashboards using Angular.",
      "Integrated Next.js applications with scalable backend services.",
      "Built reusable UI components using the Lit Framework.",
      "Improved application performance & overall user experience.",
    ],
    tags: ["Angular", "Next.js", "Lit"],
  },
  {
    date: "Jul 2023 — Dec 2024",
    role: "Associate Full Stack Developer",
    company: "Vishnu Prasad Research Center",
    points: [
      "Built ERP & E-Commerce platforms using React.js and Node.js.",
      "Designed REST APIs and optimized MySQL database performance.",
      "Integrated third-party APIs and payment solutions.",
      "Delivered responsive applications with modern UI/UX.",
    ],
    tags: ["React.js", "Node.js", "MySQL"],
  },
  {
    date: "Sep 2022 — Apr 2023",
    role: "Senior System Engineer",
    company: "Infosys Limited",
    points: [
      "Developed Angular libraries for enterprise banking applications.",
      "Worked on secure US banking projects.",
      "Improved UI performance and application maintainability.",
    ],
    tags: ["Angular", "Banking", "Libraries"],
  },
  {
    date: "Feb 2022 — Aug 2022",
    role: "Associate Full Stack Developer",
    company: "Sparkout Tech Solutions",
    points: [
      "Collaborated with engineers, researchers and data specialists to design advanced, elegant and efficient blockchain-driven systems.",
      "Deployed and managed Node.js applications in the cloud, owning the full deployment lifecycle from build to production.",
      "Integrated blockchain and crypto APIs into production applications for secure, real-time on-chain data access.",
      "Built responsive React dashboards for crypto and Web3 products, delivering clean, data-rich user interfaces.",
      "Crypto Exchange Platform — engineered a real-time cryptocurrency price tracker with live market feeds and interactive charts.",
      "Blockchain-Based Voting System — secured election data end to end using blockchain to guarantee tamper-proof, verifiable results.",
      "Optimized API calls and front-end rendering for smooth, low-latency real-time updates across dashboards.",
    ],
    tags: ["React", "Node.js", "Blockchain", "Crypto API", "Web3", "Cloud"],
  },
  {
    date: "May 2020 — Oct 2021",
    role: "Full Stack Developer",
    company: "IONSTAR India Pvt Ltd",
    points: [
      "Built and shipped MEAN Stack applications end to end, from database design through to production UI.",
      "Developed cross-framework applications using Node.js, Angular and React.js to meet diverse product needs.",
      "Designed interactive consumer-data flows, aggregating multiple systems and exposing RESTful APIs to the UI via a Node.js backend.",
      "Customer Data Platform — unified customer information from multiple sources into a single, actionable dashboard.",
      "E-Commerce Site — built a robust product catalog with search and filtering, plus secure payment gateway integration.",
      "Wrote reusable, maintainable components and modular services to speed up feature delivery across projects.",
      "Partnered with cross-functional teams to translate business requirements into scalable technical solutions.",
    ],
    tags: ["MEAN", "Angular", "React", "Node.js", "MongoDB", "REST APIs"],
  },
];

export type Project = {
  index: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  metrics: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    icon: "🎯",
    title: "Raffle Management Platform",
    description:
      "Multi-tenant raffle platform with coupon validation, a custom winner-selection engine, reporting dashboards and integrated payments — built to draw winners fairly and instantly from massive databases.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Multi-Tenant SaaS"],
    metrics: ["⚡ ~30% faster APIs", "🔒 Enterprise-grade"],
  },
  {
    index: "02",
    icon: "🧾",
    title: "AI Invoice Validation System",
    description:
      "OCR + LLM-powered platform that reads, extracts and verifies invoice data automatically — combining Tesseract OCR with prompt-engineered validation to eliminate manual review.",
    tags: ["OCR", "Tesseract", "OpenAI / LLM", "Prompt Engineering"],
    metrics: ["🤖 Automated verification", "📉 Manual effort ↓"],
  },
  {
    index: "03",
    icon: "🩺",
    title: "Healthcare Dashboard",
    description:
      "Enterprise Angular dashboard with reusable Lit components and real-time analytics — surfacing critical healthcare data with speed and clarity.",
    tags: ["Angular", "Lit", "Real-time Analytics"],
    metrics: ["📊 Real-time data", "♻ Reusable components"],
  },
];

export type Stat = { target: number; suffix: string; label: string };

export const stats: Stat[] = [
  { target: 5.5, suffix: "+", label: "Years of Experience" },
  { target: 50, suffix: "%", label: "Performance Improvement" },
  { target: 30, suffix: "%", label: "Reduced API Latency" },
  { target: 5, suffix: "", label: "Developers Mentored" },
  { target: 5, suffix: "+", label: "Industry Domains" },
];

export const achievements = [
  "Improved application performance by up to 50% through targeted optimization.",
  "Reduced API latency by ~30% in production systems.",
  "Led and mentored a team of 5 developers.",
  "Delivered solutions across Healthcare, ERP, FinTech, Government & E-Commerce.",
  "Built scalable backend systems handling large customer datasets.",
];
