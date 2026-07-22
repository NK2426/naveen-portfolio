"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHead from "./SectionHead";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 55%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="section experience" id="experience">
      <SectionHead
        num="03"
        title={[{ text: "Career " }, { text: "Timeline", gradient: true }]}
        sub="5.5+ years of building, leading and shipping."
      />

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line">
          <motion.div className="timeline-fill" style={{ scaleY }} />
        </div>

        {experience.map((job, i) => (
          <TimelineItem key={job.company + i} job={job} progress={scrollYProgress} index={i} total={experience.length} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({
  job,
  progress,
  index,
  total,
}: {
  job: (typeof import("@/lib/data").experience)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const threshold = index / Math.max(total - 1, 1);
  const scale = useTransform(progress, [threshold - 0.05, threshold + 0.02], [1, 1.35]);
  const shadow = useTransform(
    progress,
    [threshold - 0.05, threshold + 0.02],
    ["0 0 0 6px rgba(124,92,255,0.05), 0 0 0 rgba(124,92,255,0)", "0 0 0 6px rgba(124,92,255,0.2), 0 0 18px rgba(124,92,255,0.7)"]
  );

  return (
    <Reveal className="tl-item" as="div">
      <motion.div className="tl-node" style={{ scale, boxShadow: shadow }} />
      <TiltCard className="tl-card" max={5}>
        <span className="tl-date">{job.date}</span>
        <h3 className="tl-role">{job.role}</h3>
        <span className="tl-company">{job.company}</span>
        <ul className="tl-points">
          {job.points.map((p, j) => (
            <li key={j}>{p}</li>
          ))}
        </ul>
        <div className="tl-tags">
          {job.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </TiltCard>
    </Reveal>
  );
}
