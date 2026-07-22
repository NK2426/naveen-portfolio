"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  // Show one decimal place for non-integer targets (e.g. 5.5) so the count-up
  // lands cleanly instead of rounding to the nearest whole number.
  const decimals = Number.isInteger(target) ? 0 : 1;
  const factor = Math.pow(10, decimals);

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
            setVal(Math.round(target * eased * factor) / factor);
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
  }, [target, factor]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
