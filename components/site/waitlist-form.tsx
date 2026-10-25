"use client";

import { useId, useState, type FormEvent } from "react";
import { joinWaitlist } from "@/lib/waitlist";
import { cn } from "@/lib/utils";

async function celebrate() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const confetti = (await import("canvas-confetti")).default;
  confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 }, colors: ["#8E5FA8", "#C79BD8", "#2C92A2", "#5E9E80"], disableForReducedMotion: true });
}

/** The waitlist form from the homepage design, wired to the same Supabase logic as the old site. */
export function WaitlistForm({ source = "join" }: { source?: string }) {
  const id = useId();
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<{ status: "idle" | "sending" | "ok" | "error"; message?: string }>({ status: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (state.status === "sending") return;
    setState({ status: "sending" });
    const res = await joinWaitlist({ phone, consent, source });
    setState({ status: res.ok ? "ok" : "error", message: res.message });
    if (res.ok) void celebrate();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="m-0">
      <label htmlFor={`${id}-phone`} className="mt-[22px] block font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-muted">
        WhatsApp number
      </label>
      <div className="mt-[9px] flex h-[61px] items-center gap-2.5 rounded-card bg-surface p-1.5 shadow-inset focus-within:shadow-[inset_-4px_-4px_9px_rgba(255,255,255,0.92),inset_4px_4px_10px_rgba(176,162,138,0.55),inset_0_0_0_1.5px_#8E5FA8]">
        <span className="flex h-12 flex-none items-center rounded-[14px] bg-bg px-3.5 font-sans text-[15px] font-semibold text-ink shadow-raise-sm">+91</span>
        <input
          id={`${id}-phone`}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          aria-describedby={`${id}-help`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-12 min-w-0 flex-1 border-none bg-transparent px-1.5 font-sans text-[17px] font-medium tracking-[1px] text-ink outline-none"
        />
      </div>
      <p id={`${id}-help`} className="m-0 mt-[9px] font-sans text-[11.5px] leading-[1.4] text-muted">
        10 digits, e.g. 98765 43210
      </p>
      <label
        htmlFor={`${id}-consent`}
        className="mt-3.5 flex cursor-pointer items-start gap-3 rounded-well bg-surface p-[15px] shadow-raise-sm"
      >
        <input
          id={`${id}-consent`}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="m-0 size-[22px] flex-none accent-orchid"
        />
        <span className="min-w-0 flex-1 font-sans text-[13px] leading-[1.5] text-body">Message me on WhatsApp when Remet opens in Indore.</span>
      </label>
      <button
        type="submit"
        disabled={state.status === "sending"}
        className="bg-primary-cta mt-[18px] h-[58px] w-full cursor-pointer rounded-cta border-none font-sans text-[16px] font-semibold text-white shadow-raise disabled:cursor-wait disabled:opacity-80"
      >
        {state.status === "sending" ? "Adding you…" : "Join the waitlist"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={cn(
          "m-0 mt-2.5 text-center font-sans text-[13px] font-semibold leading-[1.45] empty:mt-0",
          state.status === "ok" ? "text-verd-text" : "text-ox-deep",
        )}
      >
        {state.message ?? ""}
      </p>
    </form>
  );
}
