import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section className="section wrap" id="projects">
      <SectionHead
        num="04"
        plain={{
          label: "projects",
          title: [{ text: "Featured " }, { text: "projects.", gradient: true }],
          sub: "A few of the systems I've designed and built.",
        }}
        themed={{
          label: "constructs",
          title: [{ text: "Selected " }, { text: "constructs.", gradient: true }],
          sub: "Systems built to decide fairly, read reliably and report clearly.",
        }}
      />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <TiltCard className="panel project" max={6}>
              <span className="project-glow" aria-hidden="true" />
              <span className="project-no">{p.index}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-metrics">
                {p.metrics.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
