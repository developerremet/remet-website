"use client";

import { useRef } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { usePlayOnView } from "./use-play-on-view";

const Cursor = () => <span aria-hidden="true" className="ml-[2px] inline-block h-[18px] w-[2px] bg-orchid align-[-3px]" />;

/** "02 · Wave": the typed line. Full text in the server HTML; types itself once, on scroll-in. */
export function WaveLine({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { phase, height } = usePlayOnView(ref);

  return (
    <p ref={ref} style={height ? { minHeight: height } : undefined} className="m-0 font-sans text-[16.5px] font-medium leading-[1.5] text-ink">
      {phase === "static" ? (
        text
      ) : (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {phase === "play" ? (
              <TypingAnimation as="span" startOnView={false} showCursor={false} duration={45} delay={200} className="inline leading-[inherit] tracking-normal">
                {text}
              </TypingAnimation>
            ) : null}
          </span>
        </>
      )}
      <Cursor />
    </p>
  );
}
