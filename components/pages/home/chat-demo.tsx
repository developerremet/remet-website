"use client";

import { useRef, type ReactNode } from "react";
import { AnimatedList } from "@/components/magicui/animated-list";
import { usePlayOnView } from "./use-play-on-view";

/** The three chat moments from "03 · Five minutes", oldest first, each on its own full-width row. */
const messages: { key: string; node: ReactNode }[] = [
  {
    key: "note",
    node: (
      <div className="flex justify-center">
        <p className="m-0 max-w-[250px] rounded-tile bg-surface px-3.5 py-2 text-center font-sans text-[11.5px] leading-[1.45] text-body shadow-inset-sm">
          Say what you’d say in person.
        </p>
      </div>
    ),
  },
  {
    key: "in",
    node: (
      <div className="flex justify-start">
        <p className="m-0 max-w-[78%] rounded-[18px_18px_18px_5px] bg-surface px-[15px] py-[11px] font-sans text-[14px] leading-[1.4] text-ink shadow-raise-sm">
          Sapna Sangeeta side? I&apos;m near there.
        </p>
      </div>
    ),
  },
  {
    key: "out",
    node: (
      <div className="flex flex-col items-end gap-1.5">
        <p className="bg-primary-cta m-0 max-w-[78%] rounded-[18px_18px_5px_18px] px-[15px] py-[11px] font-sans text-[14px] leading-[1.4] text-white shadow-raise-sm">
          Same. Text me on{" "}
          <span className="inline-block rounded-[6px] bg-[rgba(43,37,25,0.16)] px-[7px] py-px font-semibold">number hidden</span>
        </p>
        <p className="m-0 text-right font-sans text-[11px] font-medium leading-[1.35] text-body">Numbers, handles and emails are hidden for both of you.</p>
      </div>
    ),
  },
];

const StaticChat = ({ className }: { className?: string }) => (
  <div className={`flex flex-col gap-3 ${className ?? ""}`}>
    {messages.map((m) => (
      <div key={m.key}>{m.node}</div>
    ))}
  </div>
);

/**
 * Chat bubbles (Magic UI AnimatedList). The server renders the finished conversation; with motion
 * allowed, the bubbles arrive one by one when the block scrolls into view. AnimatedList renders the
 * newest item first in the DOM; flex-col-reverse shows them oldest-first, stacked from the bottom
 * like a chat. The animated copy is aria-hidden and a screen-reader copy keeps the reading order.
 */
export function ChatDemo({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { phase, height } = usePlayOnView(ref, 0.5);

  return (
    <div ref={ref} className={className} style={height ? { minHeight: height } : undefined}>
      {phase === "static" ? (
        <StaticChat />
      ) : (
        <>
          <StaticChat className="sr-only" />
          <div aria-hidden="true">
            {phase === "play" ? (
              <AnimatedList delay={900} className="flex-col-reverse items-stretch justify-start gap-3" style={height ? { minHeight: height } : undefined}>
                {messages.map((m) => (
                  <div key={m.key}>{m.node}</div>
                ))}
              </AnimatedList>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
