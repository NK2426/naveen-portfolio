"use client";

import { useEffect, useState } from "react";
import { themes, themeToVars, STORAGE_KEY, THEME_EVENT } from "@/lib/themes";

function apply(index: number) {
  const t = themes[index];
  const root = document.documentElement;
  const vars = themeToVars(t);
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.dataset.theme = t.id;
  try {
    localStorage.setItem(STORAGE_KEY, t.id);
  } catch {}
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: t.id }));
}

export default function ThemeSwitcher() {
  const [index, setIndex] = useState(0);

  // On mount, restore saved theme.
  useEffect(() => {
    let saved = 0;
    try {
      const id = localStorage.getItem(STORAGE_KEY);
      const found = themes.findIndex((t) => t.id === id);
      if (found >= 0) saved = found;
    } catch {}
    setIndex(saved);
    apply(saved);
  }, []);

  const cycle = () => {
    const next = (index + 1) % themes.length;
    setIndex(next);
    apply(next);
  };

  const theme = themes[index];

  return (
    <button
      className="theme-switch"
      onClick={cycle}
      aria-label={`Switch theme (current: ${theme.name})`}
      title="Click to change theme"
    >
      <span className="theme-swatches" aria-hidden="true">
        {theme.accents.slice(0, 3).map((c, i) => (
          <span key={i} className="theme-swatch" style={{ background: c }} />
        ))}
      </span>
      <span className="theme-name">{theme.name}</span>
    </button>
  );
}
