import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section className="section wrap" id="skills">
      <SectionHead
        num="02"
        label="modules"
        title={[{ text: "Cortex " }, { text: "modules.", gradient: true }]}
        sub="Each one integrated, tested in production, and kept sharp."
      />
      <div className="skills-grid">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.08}>
            <TiltCard className="panel module" max={6}>
              <div className="hex-icon">{g.icon}</div>
              <h3>{g.title}</h3>
              <div className="tags">
                {g.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
