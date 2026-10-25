// Small pieces both halves of /how-it-works use. Values come from the two HowItWorks artboards.
import type { ReactNode } from "react";
import { showReviewNotes } from "@/lib/review";

/** Section eyebrow ("Part one", "Part two", "The company"): 600 11px, 2px tracking, orchid. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="m-0 font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[2px] text-orchid-deep">{children}</p>;
}

/** Section title: Fraunces 500 26px/1.14. */
export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="m-0 mt-2 font-serif text-[26px] font-medium leading-[1.14] text-ink">
      {children}
    </h2>
  );
}

/**
 * Section intro paragraph: 13.5px/1.55 body. Capped at 62ch so a line stays near 75 characters in the
 * 720px column (768px and wider); at 390px the column is narrower than the cap, so nothing changes there.
 */
export function Lede({ children, className = "mt-[10px]" }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 max-w-[62ch] font-sans text-[13.5px] leading-[1.55] text-body ${className}`}>{children}</p>;
}

/** Top rule between sections, as in the artboards (26px above, 20px below). */
export const sectionRule = "mt-[26px] border-t border-hairline pt-5";

/**
 * "Prototype screen" caption under an app screenshot. It is a review note (the TestFlight captures
 * replace the images before launch), so it follows the same visibility as ReviewNote, but keeps the
 * design's short centred caption instead of the "Confirm before publishing:" sentence.
 */
export function ScreenCaption() {
  if (!showReviewNotes) return null;
  return <figcaption className="mt-[9px] text-center font-sans text-[11.5px] leading-[normal] text-muted">Prototype screen</figcaption>;
}
