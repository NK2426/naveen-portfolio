import type { ReactNode } from "react";

/**
 * Renders both wordings; CSS on <html data-copy="plain|themed"> shows one.
 * Keeps sections as server components and lets the toggle switch instantly.
 */
export default function Copy({ plain, themed }: { plain: ReactNode; themed: ReactNode }) {
  return (
    <>
      <span className="copy-plain">{plain}</span>
      <span className="copy-themed">{themed}</span>
    </>
  );
}
