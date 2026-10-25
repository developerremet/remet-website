// Small pieces the homepage sections share. Values come from the Main artboard.
import type { CSSProperties, ReactNode } from "react";
import { SectionLabel } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Homepage content frame: 22px gutter on phones, 32px from 768px. From 768px to 1023px the page stays one
 * column, capped at 676px of content and centred (the same column as the shared footer), so the phone layout
 * scales up without stretching the map and cards. From 1024px it widens to 1120px for the two-column layouts.
 */
export const frame = "mx-auto w-full max-w-[1120px] px-[22px] md:max-w-[740px] md:px-8 lg:max-w-[1120px]";

/**
 * Entrance for the first screen: the CSS-only `animate-rise-in` from globals.css. It is in the server HTML and
 * plays on first paint, so the content never waits for JavaScript (and still shows if a chunk never loads).
 * Stagger with `style={riseAt(ms)}`. Under reduced motion the delay is dropped as well, so nothing sits hidden.
 * Sections below the fold keep the scroll Reveal.
 */
export const rise = "animate-rise-in motion-reduce:[animation-delay:0ms]!";
export const riseAt = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

/** Section eyebrow: 600 11px, 2px tracking, orchid. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <SectionLabel as="p" variant="content" tone="orchid" className={cn("leading-[normal] tracking-[2px]", className)}>
      {children}
    </SectionLabel>
  );
}

/** Section title: Fraunces 500 30px/1.1 (36px on desktop). */
export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("m-0 mt-2 font-serif text-[30px] font-medium leading-[1.1] text-ink lg:text-[36px]", className)}>{children}</h2>;
}

/** Body paragraph: 13.5px/1.55, capped at 460px on wide screens (at most about 78 characters a line). */
export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("m-0 max-w-[460px] font-sans text-[13.5px] leading-[1.55] text-body", className)}>{children}</p>;
}

/** Munshi's quote, 13px/1.45 Fraunces italic (MunshiSlot's own quote is 12.5px muted). */
export function Quote({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "orchid" }) {
  return <span className={cn("block text-[13px] leading-[1.45]", tone === "orchid" ? "text-orchid-deep" : "text-muted")}>{children}</span>;
}
