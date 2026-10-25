import type { ReactNode } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

/**
 * Scroll reveal (Magic UI BlurFade). The server renders the hidden state, so `[data-reveal]` CSS in
 * globals.css and the layout's <noscript> force the final state under reduced motion and without JS.
 */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div data-reveal="" className={className}>
      <BlurFade inView delay={delay}>
        {children}
      </BlurFade>
    </div>
  );
}
