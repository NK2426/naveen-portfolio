"use client";

import { useEffect, useRef } from "react";
import { getStoredTheme, themeParticles, themes, THEME_EVENT } from "@/lib/themes";

type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };

export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      dpr = 1,
      particles: P[] = [],
      raf = 0;
    let colors = themeParticles(getStoredTheme());
    const mouse = { x: -9999, y: -9999 };
    const LINK = 130;

    const pickColor = () => colors[(Math.random() * colors.length) | 0];

    const onThemeChange = (e: Event) => {
      const id = (e as CustomEvent).detail as string;
      const t = themes.find((x) => x.id === id);
      if (!t) return;
      colors = themeParticles(t);
      // recolor existing particles so the change is immediate
      particles.forEach((p) => (p.c = pickColor()));
    };
    window.addEventListener(THEME_EVENT, onThemeChange);

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * dpr,
        vy: (Math.random() - 0.5) * 0.35 * dpr,
        r: (Math.random() * 1.8 + 0.6) * dpr,
        c: pickColor(),
      }));
    }

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - mouse.x,
          dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 * dpr && dist > 0) {
          const f = (120 * dpr - dist) / (120 * dpr);
          p.x += (dx / dist) * f * 1.4;
          p.y += (dy / dist) * f * 1.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},0.7)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK * dpr) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${p.c},${0.12 * (1 - d / (LINK * dpr))})`;
            ctx.lineWidth = dpr * 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX * dpr;
      mouse.y = e.clientY * dpr;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    frame();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener(THEME_EVENT, onThemeChange);
    };
  }, []);

  return <canvas id="bg-canvas" ref={ref} aria-hidden="true" />;
}
