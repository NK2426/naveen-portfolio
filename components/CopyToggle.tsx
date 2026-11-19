"use client";

import { useEffect, useState } from "react";

const KEY = "nk-copy";
type Mode = "plain" | "themed";

/** Switches site wording between plain (default) and the themed "synthezoid" copy. */
export default function CopyToggle() {
  const [mode, setMode] = useState<Mode>("plain");

  useEffect(() => {
    setMode(document.documentElement.dataset.copy === "themed" ? "themed" : "plain");
  }, []);

  const toggle = () => {
    const next: Mode = mode === "plain" ? "themed" : "plain";
    setMode(next);
    document.documentElement.dataset.copy = next;
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  };

  const themed = mode === "themed";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={themed}
      className="copy-toggle"
      onClick={toggle}
      title={themed ? "Switch to plain wording" : "Switch to themed wording"}
    >
      <span className="copy-toggle-track" aria-hidden="true">
        <span className="copy-toggle-knob" />
      </span>
      <span className="copy-toggle-label">{themed ? "Themed" : "Plain"}</span>
    </button>
  );
}
