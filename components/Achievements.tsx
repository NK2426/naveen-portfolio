import { achievements } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Achievements() {
  return (
    <section className="section wrap" id="impact">
      <SectionHead num="05" label="impact log" title={[{ text: "Measured " }, { text: "impact.", gradient: true }]} />
      <ol className="impact-list">
        {achievements.map((a, i) => (
          <Reveal key={i} as="li" className="panel impact-item" delay={(i % 5) * 0.06}>
            <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
            <span>{a}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
