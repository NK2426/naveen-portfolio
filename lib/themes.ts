export type Accent = { id: "crimson" | "emerald" | "gold"; name: string; color: string };

/** Accent modes: each swaps which hue leads (buttons, glows, timeline). */
export const accents: Accent[] = [
  { id: "crimson", name: "Crimson", color: "#c2183c" },
  { id: "emerald", name: "Emerald", color: "#1fb58a" },
  { id: "gold", name: "Gold", color: "#e8b54a" },
];

export const STORAGE_KEY = "nk-accent";
