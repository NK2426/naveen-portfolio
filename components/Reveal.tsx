"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type RevealVariant = "up" | "blur" | "scale" | "left" | "right" | "rotate";

const VARIANTS: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(14px)", scale: 1.04 },
    show: { opacity: 1, filter: "blur(0px)", scale: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88, filter: "blur(6px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  rotate: {
    hidden: { opacity: 0, y: 70, rotateX: -32, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
  },
};

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
  variant?: RevealVariant;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      style={variant === "rotate" ? { transformPerspective: 1000 } : undefined}
    >
      {children}
    </MotionTag>
  );
}
