import Reveal from "./Reveal";
import SplitText, { type Segment } from "./SplitText";

export default function SectionHead({
  num,
  label,
  title,
  sub,
}: {
  num: string;
  label: string;
  title: Segment[];
  sub?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <Reveal>
          <span className="kicker">
            {num} · {label}
          </span>
        </Reveal>
        <SplitText as="h2" className="section-title" segments={title} stagger={0.06} />
      </div>
      {sub && (
        <Reveal delay={0.12}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
