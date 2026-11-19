"use client";

import { useEffect, useState } from "react";
import { accents, STORAGE_KEY, type Accent } from "@/lib/themes";

function apply(id: Accent["id"]) {
  document.documentElement.dataset.accent = id;
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {}
}

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<Accent["id"]>("crimson");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const found = accents.find((a) => a.id === saved);
      if (found) {
        setCurrent(found.id);
        apply(found.id);
      }
    } catch {}
  }, []);

  return (
    <div className="accent-switch" role="group" aria-label="Accent colour">
      {accents.map((a) => (
        <button
          key={a.id}
          type="button"
          className="accent-dot"
          style={{ background: a.color }}
          aria-pressed={current === a.id}
          aria-label={`${a.name} accent`}
          title={a.name}
          onClick={() => {
            setCurrent(a.id);
            apply(a.id);
          }}
        />
      ))}
    </div>
  );
}
