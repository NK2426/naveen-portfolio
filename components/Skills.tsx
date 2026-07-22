import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionHead
        num="02"
        title={[{ text: "Technical " }, { text: "Arsenal", gradient: true }]}
        sub="The tools I reach for to design, build and scale."
      />

      <div className="skills-grid">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.1} variant="rotate">
            <TiltCard className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="tags">
                {s.tags.map((t) => (
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
