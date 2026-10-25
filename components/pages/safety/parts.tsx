// Building blocks for /safety, ported from Safety.dc.html.
import type { ReactNode } from "react";
import { Card, IconTile } from "@/components/ui";
import { cn } from "@/lib/utils";
import { showReviewNotes } from "@/lib/review";

const ORCHID_DEEP = "var(--color-orchid-deep)";

/** A page section below the intro: hairline rule on top, 26px above, 20px inside. */
export function Section({ id, labelledBy, children }: { id?: string; labelledBy: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="mt-[26px] border-t border-hairline pt-5">
      {children}
    </section>
  );
}

/** Fraunces 22px section title. */
export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="m-0 font-serif text-[22px] font-medium leading-[1.15] text-ink">
      {children}
    </h2>
  );
}

/** 13.5px body lead under a section title. */
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("m-0 mt-[9px] font-sans text-[13.5px] leading-[1.55] text-body", className)}>{children}</p>;
}

/** Raised card with a pressed icon tile and one line of text (After you report, Golden Rules). */
export function IconLineCard({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <Card as="li" className="flex items-center gap-[14px] px-[15px] py-[14px]">
      <IconTile color={ORCHID_DEEP}>{icon}</IconTile>
      <p className="m-0 font-sans text-[13.5px] font-medium leading-[1.35] text-ink text-balance">{children}</p>
    </Card>
  );
}

/** Raised card with an icon tile, a 16.5px title and a muted-body description (How to report). */
export function IconStepCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <Card as="li" className="flex items-center gap-[14px] px-[15px] py-[14px]">
      <IconTile color={ORCHID_DEEP}>{icon}</IconTile>
      <div className="min-w-0 flex-1">
        <h3 className="m-0 font-sans text-[16.5px] font-semibold leading-[normal] text-ink">{title}</h3>
        <p className="m-0 mt-[3px] font-sans text-[12.5px] leading-[1.45] text-body">{children}</p>
      </div>
    </Card>
  );
}

const pill =
  "inline-flex min-h-[46px] items-center rounded-[14px] bg-surface px-[18px] font-sans text-[13px] font-semibold leading-[normal] text-ox-deep no-underline shadow-raise-sm";

/** The oxblood "Unsafe right now?" well at the top of the page. */
export function UnsafeNow() {
  return (
    <section aria-labelledby="unsafe-title" className="mt-[18px] rounded-well bg-tint-alert p-[15px] shadow-inset-sm">
      <h2 id="unsafe-title" className="m-0 font-sans text-[12.5px] font-semibold leading-[normal] text-ox-deep">
        Unsafe right now?
      </h2>
      <p className="m-0 mt-1.5 font-sans text-[12.5px] leading-[1.5] text-body">
        Don&apos;t wait in a queue. Report the person and they&apos;re blocked instantly.
      </p>
      <div aria-hidden="true" className="mt-[13px] h-px bg-[rgba(140,132,114,0.18)]" />
      <p className="m-0 mt-[13px] font-sans text-[14px] font-semibold leading-[1.4] text-ink">In danger right now? Call 112</p>
      <div className="mt-[11px] flex flex-wrap gap-2.5">
        <a href="tel:112" className={pill}>
          Call 112
        </a>
        <a href="#report" className={pill}>
          How to report
        </a>
      </div>
    </section>
  );
}

const reasons = [
  "Made me uncomfortable",
  "Pushy, wouldn’t take no",
  "Wasn’t who they said they were",
  "Crossed a line physically",
  "Threatening or aggressive",
  "Something else",
];

/** The app's private report screen, drawn in HTML inside a phone-style frame. */
export function ReportMock() {
  return (
    <figure className="m-0 mt-[18px] md:mx-auto md:max-w-[390px]">
      <div className="rounded-[28px] bg-bg px-[15px] py-[22px] shadow-[0_0_0_3px_#15110B,5px_6px_12px_rgba(176,162,138,0.55)]">
        <p className="m-0 font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-ox-deep">Private report</p>
        <h3 className="m-0 mt-3 font-serif text-[22px] font-medium leading-[1.18] text-ink">
          Something felt off.
          <br />
          I&rsquo;m listening.
        </h3>
        <p className="m-0 mt-[9px] font-sans text-[13px] leading-[1.5] text-body">
          They&rsquo;ll never know you told me. And you won&rsquo;t have to see them again, they&rsquo;re blocked the moment you send
          this, and you won&rsquo;t cross paths.
        </p>
        <div className="mt-[22px] border-t border-hairline pt-[18px]">
          <div className="flex items-baseline justify-between gap-2.5">
            <p className="m-0 font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-muted">What happened</p>
            <p className="m-0 font-sans text-[11px] font-medium leading-[normal] text-muted">select any</p>
          </div>
          <ul className="m-0 mt-3 flex list-none flex-col gap-[9px] p-0">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-[11px] rounded-[14px] bg-surface px-[14px] py-[13px] font-sans text-[13px] font-semibold leading-[normal] text-body shadow-raise-sm"
              >
                <span aria-hidden="true" className="size-[19px] flex-none rounded-[6px] border-2 border-muted-deco" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div aria-hidden="true" className="mt-[22px]">
          <div className="flex h-[58px] items-center justify-center rounded-cta bg-destructive-cta font-sans text-[16.5px] font-semibold leading-[normal] text-white shadow-raise">
            Block &amp; send report
          </div>
          <div className="mt-[11px] text-center font-sans text-[12.5px] font-semibold leading-[normal] text-body">Block without reporting</div>
        </div>
      </div>
      <figcaption className="mt-[14px] font-sans text-[11.5px] leading-[1.4] text-muted">
        {showReviewNotes ? "Prototype screen. " : null}Reports are sent from the app, not from this page.
      </figcaption>
    </figure>
  );
}
