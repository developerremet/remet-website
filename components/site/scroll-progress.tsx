"use client";

import { useEffect, useRef } from "react";

/** 3px Orchid reading-progress bar along the top edge. Decorative; hidden on pages too short to scroll. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.documentElement;
      const range = el.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${range > 0 ? Math.min(1, window.scrollY / range) : 0})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return (
    <div
      ref={bar}
      aria-hidden="true"
      style={{ transform: "scaleX(0)", transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-50 h-[3px] rounded-r-[2px] bg-orchid transition-transform duration-100 ease-out"
    />
  );
}
