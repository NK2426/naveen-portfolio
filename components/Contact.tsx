import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

export default function Contact() {
  return (
    <section className="section wrap contact" id="contact">
      <Reveal>
        <span className="kicker">06 · open channel</span>
      </Reveal>
      <SplitText
        as="h2"
        className="contact-title"
        stagger={0.05}
        segments={[{ text: "Let's build something " }, { text: "worthy.", gradient: true }]}
      />
      <Reveal delay={0.1}>
        <p className="contact-sub">
          Open to senior full stack &amp; AI-backend roles, freelance builds and high-impact collaborations.
        </p>
        <div className="ctas center">
          <Magnetic href={`mailto:${profile.email}`} className="btn btn-primary">
            ✉ {profile.email}
          </Magnetic>
          <Magnetic href={`tel:${profile.phoneRaw}`} className="btn btn-ghost">
            {profile.phone}
          </Magnetic>
        </div>
        <div className="contact-cards">
          <a href={profile.whatsapp} className="panel" target="_blank" rel="noopener noreferrer">
            <span className="kicker">WhatsApp</span>
            {profile.phone}
          </a>
          <div className="panel">
            <span className="kicker">Location</span>
            {profile.location}
          </div>
          <div className="panel">
            <span className="kicker">Education</span>
            {profile.education}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
