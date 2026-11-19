import { stats, profile } from "@/lib/data";
import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHead from "./SectionHead";
import Copy from "./Copy";

/** Relative fill for each stats bar, in stats order. */
const METER = [78, 50, 30, 62, 70];

export default function About() {
  return (
    <section className="section wrap" id="about">
      <SectionHead
        num="01"
        plain={{
          label: "about",
          title: [{ text: "About " }, { text: "me.", gradient: true }],
          sub: "Backend-first full stack engineer focused on clean architecture, measurable performance and practical AI.",
        }}
        themed={{
          label: "core",
          title: [{ text: "A mind for " }, { text: "systems.", gradient: true }],
          sub: "Calm architecture, measured performance, and AI used where it actually earns its place.",
        }}
      />

      <div className="about-grid">
        <Reveal className="panel quote" variant="left">
          <blockquote>
            <Copy
              plain={
                <>
                  I build <em>scalable, production-grade systems</em> that enterprises rely on every day.
                </>
              }
              themed={
                <>
                  &ldquo;Not built to imitate. Built to <em>understand the system</em> &mdash; then make it faster,
                  fairer and quieter.&rdquo;
                </>
              }
            />
          </blockquote>
          <p>
            Over 5.5+ years I&apos;ve architected backend systems, led development teams and shipped software across
            Healthcare, FinTech, ERP, E-Commerce and Raffle domains &mdash; microservices, REST APIs, database design
            and performance tuning, paired with polished Angular, React and Next.js frontends.
          </p>
          <p>
            Lately I&apos;ve been fusing <strong>AI &amp; LLMs</strong> into real products: OCR-driven invoice
            validation, intelligent forms and prompt-engineered automation that removes manual work at scale.
          </p>
          <div className="facts">
            <div>
              <span className="kicker">Focus</span>
              AI-Enabled Backend Engineering
            </div>
            <div>
              <span className="kicker">Education</span>
              {profile.education.split(" — ")[0]}
            </div>
          </div>
        </Reveal>

        <Reveal className="panel diag" delay={0.12} variant="right">
          <span className="kicker">
            <Copy plain="At a glance" themed="diagnostics" />
          </span>
          {stats.map((s, i) => (
            <div className="diag-row" key={s.label}>
              <span>{s.label}</span>
              <b>
                <Counter target={s.target} suffix={s.suffix} />
              </b>
              <span className="bar" style={{ "--w": `${METER[i] ?? 60}%` } as React.CSSProperties} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
