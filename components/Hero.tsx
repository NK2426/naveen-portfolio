"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";
import CoreGem from "./CoreGem";
import Copy from "./Copy";

/** Tech tags evenly spaced around the core; `extra` ones are hidden on small screens. */
const ORBIT_TAGS: { label: string; extra?: boolean }[] = [
  { label: "Next.js" },
  { label: "React" },
  { label: "NestJS" },
  { label: "Node.js", extra: true },
  { label: "PostgreSQL" },
  { label: "LLM · OCR" },
  { label: "AWS", extra: true },
  { label: "Docker", extra: true },
  { label: "TypeScript" },
  { label: "Angular", extra: true },
];
/** Point on a circle around the core centre, as % of the core box. */
const ring = (i: number, n: number, r: number) => {
  const a = ((-90 + (360 / n) * i) * Math.PI) / 180;
  return [`${(50 + r * Math.cos(a)).toFixed(2)}%`, `${(50 + r * Math.sin(a)).toFixed(2)}%`];
};
const CORE_COUNT = ORBIT_TAGS.filter((t) => !t.extra).length;
let coreIndex = 0;
// Desktop: all tags evenly spaced. Small screens: only the core tags, re-spaced evenly (CSS picks --mx/--my).
const ORBIT = ORBIT_TAGS.map((t, i) => {
  const [x, y] = ring(i, ORBIT_TAGS.length, 47);
  const [mx, my] = t.extra ? [x, y] : ring(coreIndex++, CORE_COUNT, 50);
  return { ...t, style: { "--x": x, "--y": y, "--mx": mx, "--my": my } as React.CSSProperties };
});

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const coreX = useTransform(mx, [-0.5, 0.5], [-14, 14]);
  const coreY = useTransform(my, [-0.5, 0.5], [-10, 10]);

  const onMouse = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const [first, ...rest] = profile.name.split(" ");

  return (
    <header className="hero wrap" id="hero" ref={ref} onMouseMove={onMouse}>
      <motion.div className="hero-copy" style={{ y: contentY, opacity: fade }}>
        <motion.div className="kicker" {...rise(0)}>
          <Copy plain="Portfolio · 5.5+ years experience" themed="// synthesis complete · 5.5+ yrs runtime" />
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          {first} <span>{rest.join(" ")}</span>
        </motion.h1>
        <motion.p className="hero-role" {...rise(0.7)}>
          {profile.title} · <b>{profile.subtitle}</b>
        </motion.p>
        <motion.p className="hero-sum" {...rise(0.85)}>
          <Copy
            plain="I design and build enterprise web applications across Healthcare, FinTech, ERP, E-Commerce & Raffle platforms — with AI automation, scalable architecture and a strong focus on performance."
            themed="Enterprise web applications across Healthcare, FinTech, ERP, E-Commerce & Raffle platforms — reasoned in code, powered by AI automation and calm, scalable architecture."
          />
        </motion.p>
        <motion.div className="ctas" {...rise(1)}>
          <Magnetic href="#projects" className="btn btn-primary">
            <Copy plain="View my work →" themed="View the work →" />
          </Magnetic>
          <Magnetic href="#contact" className="btn btn-ghost">
            <Copy plain="Get in touch" themed="Open a channel" />
          </Magnetic>
          <a href={profile.resume} download className="btn btn-ghost">
            Download CV ↓
          </a>
        </motion.div>
        <motion.div className="hero-status" {...rise(1.15)}>
          <span>
            <i className="live-dot" />
            Available for senior roles
          </span>
          <span>{profile.location}</span>
          <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="core"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        style={{ x: coreX, y: coreY }}
      >
        <CoreGem />
        {ORBIT.map((o) => (
          <span key={o.label} className={`orbit-tag${o.extra ? " orbit-extra" : ""}`} style={o.style}>
            {o.label}
          </span>
        ))}
      </motion.div>
    </header>
  );
}
