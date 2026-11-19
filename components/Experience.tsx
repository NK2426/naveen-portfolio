"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { experience, type Job } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section className="section wrap" id="experience">
      <SectionHead
        num="03"
        plain={{
          label: "experience",
          title: [{ text: "Work " }, { text: "experience.", gradient: true }],
          sub: "5.5+ years of building, leading and shipping.",
        }}
        themed={{
          label: "trace log",
          title: [{ text: "The " }, { text: "trace", gradient: true }, { text: "so far." }],
          sub: "5.5+ years of building, leading and shipping — each node lights up as you scroll.",
        }}
      />
      <div className="timeline" ref={ref}>
        <div className="timeline-line">
          <motion.div className="timeline-fill" style={{ scaleY }} />
        </div>
        {experience.map((job, i) => (
          <Item key={job.company + i} job={job} progress={scrollYProgress} index={i} total={experience.length} />
        ))}
      </div>
    </section>
  );
}

function Item({
  job,
  progress,
  index,
  total,
}: {
  job: Job;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const t = index / Math.max(total - 1, 1);
  const lit = useTransform(progress, [t - 0.06, t + 0.01], [0.35, 1]);
  const scale = useTransform(progress, [t - 0.06, t + 0.01], [0.85, 1.1]);

  return (
    <Reveal className="job" as="article">
      <motion.span className="job-node" style={{ opacity: lit, scale, rotate: 45 }} />
      <div className="panel job-card">
        <header>
          <h3>
            {job.role}
            <small>{job.company}</small>
          </h3>
          <span className="kicker">{job.date}</span>
        </header>
        <ul>
          {job.points.map((p, j) => (
            <li key={j}>{p}</li>
          ))}
        </ul>
        <div className="tags">
          {job.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
