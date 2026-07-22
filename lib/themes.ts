export type Theme = {
  id: string;
  name: string;
  /** [primary, secondary, tertiary, quaternary] accent hexes */
  accents: [string, string, string, string];
};

export const themes: Theme[] = [
  { id: "aurora", name: "Aurora", accents: ["#7c5cff", "#22d3ee", "#f472b6", "#34d399"] },
  { id: "sunset", name: "Sunset", accents: ["#ff6a3d", "#ffb020", "#ff4d8d", "#ffd166"] },
  { id: "emerald", name: "Emerald", accents: ["#34d399", "#22d3ee", "#a3e635", "#10b981"] },
  { id: "ocean", name: "Ocean", accents: ["#3b82f6", "#06b6d4", "#8b5cf6", "#38bdf8"] },
  { id: "crimson", name: "Crimson", accents: ["#f43f5e", "#fb7185", "#a855f7", "#f472b6"] },
  { id: "mono", name: "Mono", accents: ["#cbd5e1", "#94a3b8", "#e2e8f0", "#64748b"] },
];

export const STORAGE_KEY = "nk-theme";
export const THEME_EVENT = "nk-theme-change";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

const rgba = (hex: string, a: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
};

/** CSS custom properties for a theme, applied on <html>. */
export function themeToVars(t: Theme): Record<string, string> {
  const [a1, a2, a3] = t.accents;
  return {
    "--a1": t.accents[0],
    "--a2": t.accents[1],
    "--a3": t.accents[2],
    "--a4": t.accents[3],
    "--grad": `linear-gradient(120deg, ${a1}, ${a2} 55%, ${a3})`,
    "--grad-soft": `linear-gradient(120deg, ${rgba(a1, 0.16)}, ${rgba(a2, 0.14)})`,
    "--glow1": rgba(a1, 0.18),
    "--glow2": rgba(a2, 0.14),
    "--glow3": rgba(a3, 0.12),
  };
}

/** Particle colors as "r,g,b" strings for the canvas background. */
export function themeParticles(t: Theme): string[] {
  return t.accents.map((hex) => {
    const { r, g, b } = hexToRgb(hex);
    return `${r},${g},${b}`;
  });
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return themes[0];
  const id = document.documentElement.dataset.theme || localStorage.getItem(STORAGE_KEY);
  return themes.find((t) => t.id === id) || themes[0];
}
