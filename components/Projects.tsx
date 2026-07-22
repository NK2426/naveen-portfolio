import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionHead
        num="04"
        title={[{ text: "Featured " }, { text: "Projects", gradient: true }]}
        sub="Systems built to perform at enterprise scale."
      />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.12} variant="rotate">
            <TiltCard className="project-card">
              <div className="project-glow" />
              <div className="project-index">{p.index}</div>
              <div className="project-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
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
