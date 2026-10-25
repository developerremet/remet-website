// Building blocks for /delete-account, ported from DeleteAccount.dc.html.
// Retention and legal text: no motion anywhere on this page.
import type { ReactNode } from "react";
import { Card, IconTile } from "@/components/ui";
import { showReviewNotes } from "@/lib/review";
import { cn } from "@/lib/utils";

/** A page section below the notice card: hairline rule on top, 26px above, 20px inside. */
export function Section({ id, labelledBy, children }: { id?: string; labelledBy: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="mt-[26px] scroll-mt-4 border-t border-hairline pt-5">
      {children}
    </section>
  );
}

/** Fraunces 22px/1.15 section title ("Delete it in the app", "No longer have the app?"). */
export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="m-0 font-serif text-[22px] font-medium leading-[1.15] text-ink">
      {children}
    </h2>
  );
}

/** 13.5px/1.55 body paragraph (page intro and section intros). Capped at md+ to about 76 characters a line. */
export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("m-0 font-sans text-[13.5px] leading-[1.55] text-body md:max-w-[500px]", className)}>{children}</p>
  );
}

/** At md+ the 12.5px text inside full-width cards stops at about 75-80 characters a line; the card stays full width. */
const cardMeasure = "md:max-w-[460px]";

/**
 * The "30 days to change your mind" notice: the app's raised (#F1EBE1) card with RAISE-SM and an orchid eyebrow.
 * Built locally because the shared TintCard notice uses the larger RAISE shadow, 15px padding and a <p> title.
 */
export function NoticeCard({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-[18px] rounded-card bg-raised px-[15px] py-4 shadow-raise-sm">
      <h2
        id={id}
        className="m-0 font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-orchid-deep"
      >
        {title}
      </h2>
      <p className={cn("m-0 mt-2 font-sans text-[12.5px] leading-[1.5] text-body", cardMeasure)}>{children}</p>
    </section>
  );
}

/** One pressed row of the "Erased permanently" list, led by a short oxblood dash. */
export function ErasedItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-[11px] rounded-[14px] bg-surface px-[15px] py-[13px] shadow-inset-sm">
      <span aria-hidden="true" className="h-[2px] w-[15px] flex-none rounded-[2px] bg-ox" />
      <span className="font-sans text-[12.5px] leading-[1.4] text-body">{children}</span>
    </li>
  );
}

/** Pressed read-only well ("Payment receipts, and any safety report..."). */
export function InsetWell({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 rounded-[14px] bg-surface px-[15px] py-[14px] shadow-inset-sm">
      <p className={cn("m-0 font-sans text-[12.5px] leading-[1.5] text-muted", cardMeasure)}>{children}</p>
    </div>
  );
}

/** A numbered step card: pressed number tile (Fraunces, orchid), title and description. */
export function Step({ n, title, children }: { n: number; title: ReactNode; children: ReactNode }) {
  return (
    <Card as="li" className="flex items-center gap-[14px] px-[15px] py-[14px]">
      <IconTile size={40} color="#6B4483" className="font-serif text-[18px] font-medium leading-[normal]">
        {n}
      </IconTile>
      <div className="min-w-0 flex-1">
        <h3 className="m-0 font-sans text-[16.5px] font-semibold leading-[normal] text-ink">{title}</h3>
        <p className={cn("m-0 mt-[3px] font-sans text-[12.5px] leading-[1.45] text-body", cardMeasure)}>{children}</p>
      </div>
    </Card>
  );
}

const mockRows = [
  { label: "Legal & privacy", danger: false },
  { label: "Help & complaints", danger: false },
  { label: "Sign out", danger: false },
  { label: "Delete my account", danger: true },
];

/**
 * The drawn phone showing the end of Settings in the app. Decorative inside; the figure carries the description.
 * Its caption ("Prototype screen, ...") is a review note, so it only shows where review notes do.
 */
export function SettingsMock() {
  const label = showReviewNotes
    ? "Prototype screen: the end of Settings in the app, where Delete my account is the last row under Legal & help."
    : "The end of Settings in the app, where Delete my account is the last row under Legal & help.";
  return (
    <figure className="m-0 mt-5 p-0">
      <div role="img" aria-label={label} className="mx-auto w-[264px]">
        <div aria-hidden="true" className="rounded-[40px] bg-[#15110B] p-2 shadow-[5px_6px_12px_rgba(176,162,138,0.55)]">
          <div className="relative overflow-hidden rounded-[32px] bg-bg px-[14px] pb-[14px] pt-9">
            <div className="absolute left-1/2 top-0 -ml-[42px] h-[19px] w-[84px] rounded-b-[12px] bg-[#15110B]" />
            <div className="flex items-center gap-[9px]">
              <span className="flex size-[30px] flex-none items-center justify-center rounded-full bg-surface font-sans text-[13px] font-semibold leading-[normal] text-body shadow-[-2px_-2px_6px_rgba(255,255,255,0.92),3px_3px_7px_rgba(176,162,138,0.55)]">
                &#8249;
              </span>
              <span className="font-serif text-[19px] font-medium leading-[normal] text-ink">Settings</span>
            </div>
            <div className="mt-4 font-sans text-[9px] font-medium uppercase leading-[normal] tracking-[1px] text-muted">
              Legal &amp; help
            </div>
            <div className="mt-[7px] flex flex-col gap-[6px]">
              {mockRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-[9px] rounded-[11px] bg-surface p-[11px] shadow-[-2px_-2px_6px_rgba(255,255,255,0.92),3px_3px_7px_rgba(176,162,138,0.55)]"
                >
                  <span
                    className={cn(
                      "flex-1 font-sans text-[12px] font-semibold leading-[normal]",
                      row.danger ? "text-ox-deep" : "text-ink",
                    )}
                  >
                    {row.label}
                  </span>
                  <span className="flex-none font-sans text-[12px] leading-[normal] text-muted">&#8250;</span>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-[18px] h-1 w-[88px] rounded-[2px] bg-[#B0A28A]" />
          </div>
        </div>
      </div>
      {showReviewNotes ? (
        <figcaption className="mt-[9px] text-center font-sans text-[11.5px] leading-[1.4] text-muted">
          Prototype screen, shortened to the last group in Settings
        </figcaption>
      ) : null}
    </figure>
  );
}
