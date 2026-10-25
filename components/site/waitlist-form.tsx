"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { joinWaitlist, normalisePhone } from "@/lib/waitlist";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

async function celebrate() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const confetti = (await import("canvas-confetti")).default;
  confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 }, colors: ["#8E5FA8", "#C79BD8", "#2C92A2", "#5E9E80"], disableForReducedMotion: true });
}

type Status = { status: "idle" | "sending" | "ok" | "error"; message?: string };

/** The waitlist form from the homepage design, wired to the same Supabase logic as the old site. */
export function WaitlistForm({ source = "join" }: { source?: string }) {
  const id = useId();
  const phoneRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const busy = useRef(false);
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [invalid, setInvalid] = useState<"phone" | "consent" | null>(null);
  const [state, setState] = useState<Status>({ status: "idle" });

  // Empty the live region for a frame first, so a repeated message is announced again.
  function show(next: Status) {
    setState({ status: "idle" });
    requestAnimationFrame(() => {
      setState(next);
      requestAnimationFrame(() => statusRef.current?.scrollIntoView({ block: "nearest" }));
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (busy.current) return;
    if (!normalisePhone(phone)) {
      setInvalid("phone");
      phoneRef.current?.focus();
      return show({ status: "error", message: "That does not look like an Indian mobile number." });
    }
    if (!consent) {
      setInvalid("consent");
      consentRef.current?.focus();
      return show({ status: "error", message: "Tick the box so we know we may message you." });
    }
    setInvalid(null);
    busy.current = true;
    setState({ status: "sending", message: "One moment." });
    const res = await joinWaitlist({ phone, consent, source });
    busy.current = false;
    if (res.ok) {
      setPhone("");
      setConsent(false);
      void celebrate();
    }
    show({ status: res.ok ? "ok" : "error", message: res.message });
  }

  const sending = state.status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="m-0">
      <label htmlFor={`${id}-phone`} className="mt-[22px] block font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-muted">
        WhatsApp number
      </label>
      <div className="mt-[9px] flex h-[61px] items-center gap-2.5 rounded-card bg-surface p-1.5 shadow-inset focus-within:shadow-[inset_-4px_-4px_9px_rgba(255,255,255,0.92),inset_4px_4px_10px_rgba(176,162,138,0.55),inset_0_0_0_1.5px_#8E5FA8]">
        <span className="flex h-12 flex-none items-center rounded-[14px] bg-bg px-3.5 font-sans text-[15px] font-semibold text-ink shadow-raise-sm">+91</span>
        <input
          ref={phoneRef}
          id={`${id}-phone`}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          aria-required="true"
          aria-invalid={invalid === "phone" || undefined}
          aria-describedby={`${id}-help ${id}-status`}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (invalid === "phone") setInvalid(null);
          }}
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
          ref={consentRef}
          id={`${id}-consent`}
          type="checkbox"
          aria-required="true"
          aria-invalid={invalid === "consent" || undefined}
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (invalid === "consent") setInvalid(null);
          }}
          className="m-0 size-[22px] flex-none accent-orchid"
        />
        <span className="min-w-0 flex-1 font-sans text-[13px] leading-[1.5] text-body">Message me on WhatsApp when Remet opens in {site.city}.</span>
      </label>
      {/* aria-disabled, not disabled: a disabled button drops keyboard focus to the page body. */}
      <button
        type="submit"
        aria-disabled={sending || undefined}
        className="bg-primary-cta mt-[18px] h-[58px] w-full cursor-pointer rounded-cta border-none font-sans text-[16px] font-semibold text-white shadow-raise aria-disabled:cursor-wait aria-disabled:opacity-80"
      >
        {sending ? "Adding you…" : "Join the waitlist"}
      </button>
      <p
        ref={statusRef}
        id={`${id}-status`}
        role="status"
        aria-live="polite"
        className={cn(
          "m-0 mt-2.5 text-center font-sans text-[13px] font-semibold leading-[1.45] empty:mt-0",
          state.status === "ok" ? "text-verd-text" : state.status === "error" ? "text-ox-deep" : "text-muted",
        )}
      >
        {state.message ?? ""}
      </p>
      <noscript>
        <p className="m-0 mt-2.5 text-center font-sans text-[13px] font-semibold leading-[1.45] text-ox-deep">
          Turn on JavaScript to join the waitlist, or write to {site.email}.
        </p>
      </noscript>
    </form>
  );
}
