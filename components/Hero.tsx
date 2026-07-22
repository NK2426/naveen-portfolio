"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import Magnetic from "./Magnetic";

const CHIPS = ["Angular", "React", "Next.js", "NestJS", "Node.js", "PostgreSQL", "TypeScript", "AI / LLM"];
const CHIP_POS = [
  { top: "16%", left: "8%" },
  { top: "24%", right: "9%" },
  { top: "55%", left: "5%" },
  { bottom: "20%", right: "7%" },
  { top: "38%", left: "12%" },
  { bottom: "28%", left: "14%" },
  { top: "68%", right: "12%" },
  { top: "12%", left: "46%" },
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    let ri = 0,
      ci = 0,
      deleting = false,
      timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 85);
    };
    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return text;
}

const line = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Hero() {
  const typed = useTyping(profile.roles);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // mouse parallax for the floating chips
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const chipsX = useTransform(mx, [-0.5, 0.5], [26, -26]);
  const chipsY = useTransform(my, [-0.5, 0.5], [20, -20]);

  const onMouse = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <header className="hero" id="hero" ref={ref} onMouseMove={onMouse}>
      <div className="hero-orbs" aria-hidden="true">
        <motion.div className="orb orb-1" style={{ y: y1 }} />
        <motion.div className="orb orb-2" style={{ y: y2 }} />
        <motion.div className="orb orb-3" style={{ y: y3 }} />
      </div>

      <motion.div className="hero-chips" aria-hidden="true" style={{ x: chipsX, y: chipsY }}>
        {CHIPS.map((c, i) => (
          <span className="chip" key={c} style={{ ...CHIP_POS[i], animationDelay: `${i * 0.6}s` }}>
            {c}
          </span>
        ))}
      </motion.div>

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div
          className="hero-badge"
          variants={line}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="pulse-dot" /> Available for high-impact work
        </motion.div>

        <motion.p
          className="hero-pre"
          variants={line}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.div
          className="hero-title-wrap"
          initial={{ opacity: 0, y: 24, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="hero-title gradient-text">{profile.name}</h1>
        </motion.div>

        <motion.h2
          className="hero-role"
          variants={line}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>{typed}</span>
          <span className="type-caret">|</span>
        </motion.h2>

        <motion.p
          className="hero-desc"
          variants={line}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Senior Full Stack Developer with <strong>5.5+ years</strong> designing and delivering enterprise web
          applications across Healthcare, FinTech, ERP, E-Commerce &amp; Raffle platforms — powered by{" "}
          <strong>AI automation</strong>, scalable architecture &amp; obsessive performance.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={line}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Magnetic href="#projects" className="btn btn-primary">
            <span>View My Work</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Magnetic>
          <Magnetic href="#contact" className="btn btn-ghost">
            <span>Get In Touch</span>
          </Magnetic>
          <a href={profile.resume} download className="btn btn-outline">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 3v12M8 11l4 4 4-4M5 21h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          variants={line}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 6l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
          <a href={`tel:${profile.phoneRaw}`} className="social-link" aria-label="Phone">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M4 5c0 8 7 15 15 15l2-4-5-2-2 2c-3-1.5-5.5-4-7-7l2-2-2-5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="social-loc">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {profile.location}
          </span>
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse">
          <span className="wheel" />
        </span>
        <span className="scroll-text">Scroll</span>
      </a>
    </header>
  );
}
