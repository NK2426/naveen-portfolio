"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";
import CoreGem from "./CoreGem";

const ORBIT = [
  { label: "Next.js", style: { top: "8%", left: "-2%" } },
  { label: "NestJS", style: { top: "22%", right: "-4%" } },
  { label: "PostgreSQL", style: { bottom: "20%", left: "-6%" } },
  { label: "LLM · OCR", style: { bottom: "6%", right: "4%" } },
];

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
          {"// synthesis complete · 5.5+ yrs runtime"}
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          {first}
          <span>{rest.join(" ")}</span>
        </motion.h1>
        <motion.p className="hero-role" {...rise(0.7)}>
          {profile.title} · <b>{profile.subtitle}</b>
        </motion.p>
        <motion.p className="hero-sum" {...rise(0.85)}>
          Enterprise web applications across Healthcare, FinTech, ERP, E-Commerce &amp; Raffle platforms — reasoned in
          code, powered by AI automation and calm, scalable architecture.
        </motion.p>
        <motion.div className="ctas" {...rise(1)}>
          <Magnetic href="#projects" className="btn btn-primary">
            View the work →
          </Magnetic>
          <Magnetic href="#contact" className="btn btn-ghost">
            Open a channel
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
          <span key={o.label} className="orbit-tag" style={o.style}>
            {o.label}
          </span>
        ))}
      </motion.div>
    </header>
  );
}
