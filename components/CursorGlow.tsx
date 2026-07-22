"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let gx = window.innerWidth / 2,
      gy = window.innerHeight / 2,
      cx = gx,
      cy = gy,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      gx = e.clientX;
      gy = e.clientY;
      el.style.opacity = "1";
    };
    window.addEventListener("mousemove", onMove);

    const follow = () => {
      cx += (gx - cx) * 0.14;
      cy += (gy - cy) * 0.14;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(follow);
    };
    follow();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}
