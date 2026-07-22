import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionHead num="01" title={[{ text: "About " }, { text: "Me", gradient: true }]} />

      <div className="about-grid">
        <Reveal className="about-text" variant="left">
          <p className="lead">
            I build <strong>scalable, production-grade systems</strong> that enterprises rely on every day.
          </p>
          <p>
            Over the last 6+ years I&apos;ve architected backend systems, led development teams, and shipped software
            across Healthcare, FinTech, ERP, E-Commerce and Raffle domains. My core is a strong backend foundation —
            microservices, REST APIs, database design and performance tuning — paired with polished, modern frontends in
            Angular, React and Next.js.
          </p>
          <p>
            Lately I&apos;ve been fusing <strong>AI &amp; LLMs</strong> into real products: OCR-driven invoice
            validation, intelligent forms for automated data extraction, and prompt-engineered automation that removes
            manual work at scale. I care about clean architecture, measurable performance wins, and mentoring the people
            I work with.
          </p>
          <div className="about-facts">
            <div className="fact">
              <span className="fact-k">Role</span>
              <span className="fact-v">Senior Full Stack Developer</span>
            </div>
            <div className="fact">
              <span className="fact-k">Focus</span>
              <span className="fact-v">AI-Enabled Backend Engineering</span>
            </div>
            <div className="fact">
              <span className="fact-k">Method</span>
              <span className="fact-v">Agile · Scrum</span>
            </div>
            <div className="fact">
              <span className="fact-k">Education</span>
              <span className="fact-v">B.E. Computer Science &amp; Engineering</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-card" delay={0.15} variant="right">
          <TiltCard className="about-card-inner">
            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">naveen@dev ~ profile</span>
              </div>
              <pre className="terminal-body">
                <code>
                  <span className="c-key">const</span> <span className="c-var">naveen</span> = {"{"}
                  {"\n  "}
                  <span className="c-prop">title</span>: <span className="c-str">&quot;Senior Full Stack Developer&quot;</span>,
                  {"\n  "}
                  <span className="c-prop">experience</span>: <span className="c-num">6</span>,
                  {"\n  "}
                  <span className="c-prop">stack</span>: [<span className="c-str">&quot;Next.js&quot;</span>,{" "}
                  <span className="c-str">&quot;NestJS&quot;</span>, <span className="c-str">&quot;React&quot;</span>],
                  {"\n  "}
                  <span className="c-prop">databases</span>: [<span className="c-str">&quot;PostgreSQL&quot;</span>,{" "}
                  <span className="c-str">&quot;MongoDB&quot;</span>],
                  {"\n  "}
                  <span className="c-prop">superpower</span>: <span className="c-str">&quot;AI + OCR automation&quot;</span>,
                  {"\n  "}
                  <span className="c-prop">shipsFast</span>: <span className="c-key">true</span>,
                  {"\n  "}
                  <span className="c-prop">mentors</span>: <span className="c-fn">buildTeams</span>(
                  <span className="c-num">5</span>)
                  {"\n};"}
                </code>
              </pre>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
