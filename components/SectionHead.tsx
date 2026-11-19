import Reveal from "./Reveal";
import SplitText, { type Segment } from "./SplitText";
import Copy from "./Copy";

export type HeadCopy = { label: string; title: Segment[]; sub?: string };

/** Section heading with plain + themed wording (one is shown via data-copy on <html>). */
export default function SectionHead({ num, plain, themed }: { num: string; plain: HeadCopy; themed: HeadCopy }) {
  return (
    <div className="section-head">
      <div>
        <Reveal>
          <span className="kicker">
            {num} · <Copy plain={plain.label} themed={themed.label} />
          </span>
        </Reveal>
        <SplitText as="h2" className="section-title copy-plain" segments={plain.title} stagger={0.06} />
        <SplitText as="h2" className="section-title copy-themed" segments={themed.title} stagger={0.06} />
      </div>
      {(plain.sub || themed.sub) && (
        <Reveal delay={0.12}>
          <p className="section-sub">
            <Copy plain={plain.sub} themed={themed.sub} />
          </p>
        </Reveal>
      )}
    </div>
  );
}
