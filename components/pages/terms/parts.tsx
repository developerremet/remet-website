// Building blocks for /terms, ported from Terms.dc.html. Legal page: no motion.
import type { ReactNode } from "react";
import { CounselSlot, SmartLink } from "@/components/ui";
import { cn } from "@/lib/utils";

/** A page section below the contents: hairline rule on top, 26px above, 20px inside. */
export function Section({ id, labelledBy, children }: { id?: string; labelledBy: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="mt-[26px] scroll-mt-4 border-t border-hairline pt-5">
      {children}
    </section>
  );
}

/** Fraunces 22px section title ("Plain-language summary", "Full terms"). */
export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="m-0 font-serif text-[22px] font-medium leading-[1.15] text-ink">
      {children}
    </h2>
  );
}

/** Fraunces 17px heading (summary topics and full-terms clauses). */
export function ClauseHead({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("m-0 font-serif text-[17px] font-medium leading-[normal] text-ink", className)}>{children}</h3>;
}

/**
 * 13.5px/1.6 body paragraph of the summary (16px below, as in the design's block flow).
 * From 768px up it caps at 58ch, about 75 characters a line; the full 720px column runs ~115.
 */
export function SummaryBody({ children }: { children: ReactNode }) {
  return <p className="m-0 mb-4 font-sans text-[13.5px] leading-[1.6] text-body md:max-w-[58ch]">{children}</p>;
}

/**
 * Pressed surface note ("This is the plain-language summary..."). From 768px the text stops at 62ch
 * (about 75 characters a line) while the well stays full width; at 390px the cap is wider than the well.
 */
export function InsetNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-row bg-surface px-[15px] py-[14px] shadow-inset-sm", className)}>
      <p className="m-0 font-sans text-[12.5px] leading-[1.5] text-muted md:max-w-[62ch]">{children}</p>
    </div>
  );
}

/** One entry of the "On this page" list: 44px row, 14px semibold label, chevron turned to point down. */
export function TocLink({ href, children, first = false }: { href: string; children: ReactNode; first?: boolean }) {
  return (
    <li className={first ? undefined : "border-t border-[rgba(140,132,114,0.22)]"}>
      <a href={href} className="flex min-h-11 items-center gap-3 no-underline">
        <span className="min-w-0 flex-1 font-sans text-[14px] font-semibold leading-[normal] text-ink">{children}</span>
        <span aria-hidden="true" className="flex-none rotate-90 font-sans text-[16px] leading-[normal] text-muted-deco">
          &#8250;
        </span>
      </a>
    </li>
  );
}

/**
 * A full-terms clause: Fraunces heading, then counsel's slot (hidden on production).
 * The id is the "On this page" anchor target, so it stays on the clause wrapper.
 */
export function Clause({
  id,
  title,
  slot,
  first = false,
  children,
}: {
  id: string;
  title: string;
  slot: ReactNode;
  first?: boolean;
  children?: ReactNode;
}) {
  return (
    <div id={id} className={cn("scroll-mt-4", first ? "mt-[18px]" : "mt-6")}>
      <ClauseHead>{title}</ClauseHead>
      {/* The design sets the label at normal line height and the bracketed text at 1.5. */}
      <CounselSlot label="Counsel to draft" className="mt-3 [&>p:first-child]:leading-[normal] [&>p:last-child]:leading-[1.5]">
        {slot}
      </CounselSlot>
      {children}
    </div>
  );
}

/**
 * Legal list row as in the app's Legal & privacy screen: top-aligned, 15px padding, chevron 2px down.
 * (The shared Row centres its chevron and uses 13px vertical padding.)
 */
export function LegalRow({ href, title, subtitle, className }: { href: string; title: string; subtitle: string; className?: string }) {
  return (
    <SmartLink
      href={href}
      className={cn("flex items-start gap-3 rounded-row bg-surface p-[15px] no-underline shadow-raise-sm", className)}
    >
      <span className="block min-w-0 flex-1">
        <span className="block font-sans text-[16.5px] font-semibold leading-[normal] text-ink">{title}</span>
        <span className="mt-[3px] block font-sans text-[12.5px] leading-[1.45] text-muted">{subtitle}</span>
      </span>
      <span aria-hidden="true" className="mt-[2px] flex-none font-sans text-[16px] leading-[normal] text-muted-deco">
        &#8250;
      </span>
    </SmartLink>
  );
}
