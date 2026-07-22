import Reveal from "./Reveal";
import SplitText, { type Segment } from "./SplitText";

export default function SectionHead({
  num,
  title,
  sub,
}: {
  num: string;
  title: Segment[];
  sub?: string;
}) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="section-num">{num}</span>
      </Reveal>
      <SplitText as="h2" className="section-title" segments={title} stagger={0.06} />
      {sub && (
        <Reveal delay={0.12}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
