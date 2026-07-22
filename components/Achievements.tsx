import { stats, achievements } from "@/lib/data";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHead from "./SectionHead";

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <SectionHead num="05" title={[{ text: "Impact by the " }, { text: "Numbers", gradient: true }]} />

      <div className="stats-grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={(i % 5) * 0.08} variant="scale">
            <div className="stat">
              <div className="stat-num">
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="impact-list">
        {achievements.map((a, i) => (
          <Reveal key={i} className="impact-item" as="div" delay={(i % 5) * 0.06}>
            <span className="impact-mark">✦</span>
            <span>{a}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
