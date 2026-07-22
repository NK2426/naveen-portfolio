import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-inner">
        <Reveal>
          <span className="section-num center">06</span>
        </Reveal>
        <SplitText
          as="h2"
          className="contact-title"
          stagger={0.05}
          segments={[{ text: "Let's build something " }, { text: "exceptional", gradient: true }, { text: "." }]}
        />
        <Reveal delay={0.1}>
        <p className="contact-sub">
          Open to senior full stack &amp; AI-backend roles, freelance builds and high-impact collaborations. Let&apos;s
          talk.
        </p>

        <div className="contact-actions">
          <Magnetic href={`mailto:${profile.email}`} className="btn btn-primary">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 6l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>{profile.email}</span>
          </Magnetic>
          <Magnetic href={`tel:${profile.phoneRaw}`} className="btn btn-ghost">
            <span>{profile.phone}</span>
          </Magnetic>
        </div>

        <div className="contact-cards">
          <a href={`mailto:${profile.workEmail}`} className="contact-card">
            <span className="cc-icon">✉</span>
            <span className="cc-k">Work Email</span>
            <span className="cc-v">{profile.workEmail}</span>
          </a>
          <div className="contact-card">
            <span className="cc-icon">📍</span>
            <span className="cc-k">Location</span>
            <span className="cc-v">{profile.location}</span>
          </div>
          <div className="contact-card">
            <span className="cc-icon">🎓</span>
            <span className="cc-k">Education</span>
            <span className="cc-v">{profile.education}</span>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
