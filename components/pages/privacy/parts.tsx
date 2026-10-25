// Building blocks for /privacy, ported from Privacy.dc.html. Legal page: no motion.
import type { ReactNode } from "react";
import { Chevron, SmartLink } from "@/components/ui";
import { showReviewNotes } from "@/lib/review";
import { cn } from "@/lib/utils";

/** A page section below the intro: hairline rule on top, 26px above, 20px inside. */
export function Section({ labelledBy, children }: { labelledBy: string; children: ReactNode }) {
  return (
    <section aria-labelledby={labelledBy} className="mt-[26px] border-t border-hairline pt-5">
      {children}
    </section>
  );
}

/** Fraunces 17px heading inside the plain-language summary. */
export function SummaryHead({ children, first = false }: { children: ReactNode; first?: boolean }) {
  return (
    <h3 className={cn("m-0 font-serif text-[17px] font-medium leading-[normal] text-ink", first ? "mt-[14px]" : "mt-4")}>
      {children}
    </h3>
  );
}

/**
 * 13.5px/1.6 body paragraph of the summary. From 768px the column is 676px wide, so prose is capped at
 * 62ch (the measure /how-it-works uses) to stay readable; at 390px the cap is wider than the column.
 */
export function SummaryBody({ children }: { children: ReactNode }) {
  return <p className="m-0 mt-4 font-sans text-[13.5px] leading-[1.6] text-body md:max-w-[62ch]">{children}</p>;
}

/** Pressed surface note ("This is the plain-language summary..."). */
export function InsetNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-row bg-surface px-[15px] py-[14px] shadow-inset-sm", className)}>
      <p className="m-0 font-sans text-[12.5px] leading-[1.5] text-muted">{children}</p>
    </div>
  );
}

/**
 * Legal list row as in the app's Legal & privacy screen: top-aligned, 15px padding, chevron 2px down.
 * (The shared Row centres its chevron and uses 13px vertical padding.)
 */
export function LegalRow({ href, title, subtitle }: { href: string; title: string; subtitle: string }) {
  return (
    <li>
      <SmartLink
        href={href}
        className="flex items-start gap-3 rounded-row bg-surface p-[15px] no-underline shadow-raise-sm"
      >
        <span className="block min-w-0 flex-1">
          <span className="block font-sans text-[16.5px] font-semibold leading-[normal] text-ink">{title}</span>
          <span className="mt-[3px] block font-sans text-[12.5px] leading-[1.45] text-muted">{subtitle}</span>
        </span>
        <span className="mt-[2px] flex leading-[normal]">
          <Chevron />
        </span>
      </SmartLink>
    </li>
  );
}

/**
 * A counsel slot that stands in for a whole legal-list row (title + subtitle + note).
 * The shared CounselSlot only holds a single bracketed line, so this is a local variant.
 * Like CounselSlot it renders nothing on production, list item included.
 */
export function CounselRowSlot({
  label = "Counsel to draft",
  title,
  subtitle,
  children,
}: {
  label?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  if (!showReviewNotes) return null;
  return (
    <li>
      <div className="rounded-[14px] px-[15px] py-4 outline-[1.5px] outline-offset-[-1px] outline-dashed outline-muted">
        <p className="m-0 font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-orchid-deep">{label}</p>
        <p className="m-0 mt-[7px] font-sans text-[16.5px] font-semibold leading-[normal] text-ink">{title}</p>
        <p className="m-0 mt-[3px] font-sans text-[12.5px] leading-[1.45] text-muted">{subtitle}</p>
        <p className="m-0 mt-2 font-sans text-[12.5px] leading-[1.5] text-muted">[{children}]</p>
      </div>
    </li>
  );
}
