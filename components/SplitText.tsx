"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType } from "react";

export type Segment = { text: string; gradient?: boolean };

const container: Variants = {
  hidden: {},
  show: { transition: {} },
};

const child: Variants = {
  hidden: { y: "120%", opacity: 0, rotateZ: 4 },
  show: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Animates text so each word (or char) rises out of a clip mask with a stagger.
 * `segments` lets part of the string carry the gradient treatment.
 */
export default function SplitText({
  segments,
  as = "span",
  className,
  per = "word",
  trigger = "inView",
  delay = 0,
  stagger = 0.05,
}: {
  segments: Segment[];
  as?: ElementType;
  className?: string;
  per?: "word" | "char";
  trigger?: "inView" | "mount";
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  if (reduce) {
    return (
      <MotionTag className={className}>
        {segments.map((s, i) =>
          s.gradient ? (
            <span key={i} className="gradient-text">
              {s.text}
            </span>
          ) : (
            <Fragment key={i}>{s.text}</Fragment>
          )
        )}
      </MotionTag>
    );
  }

  const words: { text: string; gradient?: boolean }[] = [];
  segments.forEach((seg) => {
    seg.text
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => words.push({ text: w, gradient: seg.gradient }));
  });

  const animateProps =
    trigger === "mount"
      ? { animate: "show" as const }
      : { whileInView: "show" as const, viewport: { once: true, amount: 0.35 } };

  // Keep the transform on `.split-inner` and the gradient clip on a separate
  // nested span. Combining `background-clip: text` with an animated transform on
  // the SAME element makes Chrome drop the clipped fill mid-animation (the text
  // flashes dark while loading), so we decouple the two.
  const glyph = (c: string, gradient?: boolean) =>
    gradient ? <span className="gradient-text">{c}</span> : c;

  const maskWord = (text: string, gradient?: boolean) => {
    if (per === "char") {
      return (
        <span className="split-word">
          {text.split("").map((c, i) => (
            <span className="split-mask" key={i}>
              <motion.span className="split-inner" variants={child}>
                {glyph(c, gradient)}
              </motion.span>
            </span>
          ))}
        </span>
      );
    }
    return (
      <span className="split-mask">
        <motion.span className="split-inner" variants={child}>
          {glyph(text, gradient)}
        </motion.span>
      </span>
    );
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      {...animateProps}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          {maskWord(w.text, w.gradient)}
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </MotionTag>
  );
}
