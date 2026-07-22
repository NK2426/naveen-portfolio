"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { competencies } from "@/lib/data";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default function Marquee() {
  const baseVelocity = -3; // % per second baseline drift
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  // skew the whole strip based on scroll speed — the "wow" bit
  const skew = useTransform(smoothVelocity, [-2000, 2000], [-9, 9], { clamp: true });

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // four copies -> wrap within a quarter of the track
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const items = [...competencies, ...competencies, ...competencies, ...competencies];

  return (
    <div className="marquee">
      <motion.div className="marquee-track" style={{ x, skewX: skew }}>
        {items.map((c, i) => (
          <span key={i} className="marquee-item">
            {c}
            <span className="sep">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
