"use client";

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Impact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#hero" className="nav-logo" onClick={close}>
        <span className="logo-mark">NK</span>
        <span className="logo-text">
          Naveen<span className="accent">.</span>
        </span>
      </a>

      <div className="nav-right">
        <ThemeSwitcher />
        <ul className={`nav-links${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className={`nav-link${active === l.id ? " active" : ""}`} onClick={close}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/Naveen_Kumar_N_Resume.pdf" download className="nav-link nav-resume" onClick={close}>
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path d="M12 3v12M8 11l4 4 4-4M5 21h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Résumé</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link nav-cta" onClick={close}>
            Let&apos;s Talk
          </a>
        </li>
      </ul>

      <button
        className={`nav-toggle${open ? " open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      </div>
    </nav>
  );
}
