"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import ThemeSwitcher from "./ThemeSwitcher";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
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
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#hero" className="brand" onClick={close}>
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path d="M20 3 34 20 20 37 6 20z" fill="#e8b54a" />
            <path d="M20 3v34M6 20h28M13 11.5 27 28.5M27 11.5 13 28.5" stroke="#7a0d24" strokeWidth="1" />
          </svg>
          <span>NKN</span>
        </a>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "active" : undefined} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav-links-resume">
            <a href={profile.resume} download className="btn btn-ghost" onClick={close}>
              Résumé ↓
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <ThemeSwitcher />
          <a href={profile.resume} download className="btn btn-ghost nav-cta">
            Résumé ↓
          </a>
          <button
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
