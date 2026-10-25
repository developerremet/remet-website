"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** 3px Orchid reading-progress bar along the top edge. Decorative. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-50 h-[3px] rounded-r-[2px] bg-orchid"
    />
  );
}
