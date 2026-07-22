"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || done.current) return;
          done.current = true;
          const dur = 1600;
          let start: number | null = null;
          const step = (now: number) => {
            if (start === null) start = now;
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
            else setVal(target);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
