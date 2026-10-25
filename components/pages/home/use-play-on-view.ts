"use client";

import { useEffect, useState, type RefObject } from "react";

export type PlayPhase = "static" | "armed" | "play";

/**
 * For motion that starts from an empty or partial state (TypingAnimation, AnimatedList).
 * The server and the first client render show the FINAL content ("static"). After mount, and only
 * when the viewer has not asked for reduced motion and the block is still below the fold, the
 * block is "armed" (its final height is kept so nothing below moves) and then "play"s once it
 * scrolls into view. A block already on screen at load stays static, so it never flashes empty.
 */
export function usePlayOnView(ref: RefObject<HTMLElement | null>, threshold = 0.35) {
  const [phase, setPhase] = useState<PlayPhase>("static");
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return;
    setHeight(el.offsetHeight);
    setPhase("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPhase("play");
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  return { phase, height };
}
