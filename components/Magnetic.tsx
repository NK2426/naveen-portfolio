"use client";

import { useRef, type ReactNode } from "react";

export default function Magnetic({
  children,
  className,
  href,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left - r.width / 2;
    const my = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${mx * strength}px, ${my * strength * 1.2}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a ref={ref} href={href} className={className} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </a>
  );
}
