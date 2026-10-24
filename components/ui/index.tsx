// Shared components that mirror the Remet app's own UI (light theme).
// Values come from the app prototype; see the cookbook notes beside each one.
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { showReviewNotes } from "@/lib/review";

/** Internal routes use next/link; mailto:, tel: and absolute URLs use a plain anchor. */
export function SmartLink({ href, ...rest }: ComponentProps<"a"> & { href: string }) {
  if (href.startsWith("/") || href.startsWith("#")) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}

export const Chevron = () => (
  <span aria-hidden="true" className="flex-none text-[16px] text-muted-deco">
    &#8250;
  </span>
);

/** Inner-page header: the app's 44px back disc + Fraunces 27px utility title. */
export function ScreenHeader({ title, backHref = "/", backLabel = "Back to home" }: { title: string; backHref?: string; backLabel?: string }) {
  return (
    <header className="mx-auto flex w-full max-w-[720px] items-center gap-3 px-[22px] pb-3.5 pt-[22px]">
      <Link
        href={backHref}
        aria-label={backLabel}
        className="flex size-11 flex-none items-center justify-center rounded-full bg-surface font-sans text-[18px] font-semibold text-body no-underline shadow-raise-sm"
      >
        &#8249;
      </Link>
      <h1 className="m-0 font-serif text-[27px] font-medium text-ink">{title}</h1>
    </header>
  );
}

/** Uppercase label. "content" = in-content eyebrow (600 11px, 1.5px); "group" = list group title (500 11px, 1.2px). */
export function SectionLabel({
  children,
  variant = "group",
  tone = "muted",
  as: Tag = "h2",
  className,
  id,
}: {
  children: ReactNode;
  variant?: "content" | "group";
  tone?: "muted" | "orchid" | "ox";
  as?: "h2" | "h3" | "p" | "span";
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "m-0 font-sans text-[11px] uppercase",
        variant === "content" ? "font-semibold tracking-[1.5px]" : "font-medium tracking-[1.2px]",
        tone === "orchid" ? "text-orchid-deep" : tone === "ox" ? "text-ox-deep" : "text-muted",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Raised content card (rule cards, intent cards, profile card): surface + RAISE-SM, 18px radius. */
export function Card({ className, children, as: Tag = "div", ...rest }: { as?: "div" | "li" | "section" | "article" } & ComponentProps<"div">) {
  return (
    <Tag className={cn("rounded-card bg-surface shadow-raise-sm", className)} {...(rest as object)}>
      {children}
    </Tag>
  );
}

/** Full-width list row (Settings, Legal, Support): title, muted subtitle, right hint, chevron. */
export function Row({
  href,
  title,
  subtitle,
  hint,
  leading,
  tone = "ink",
  className,
}: {
  href: string;
  title: ReactNode;
  subtitle?: ReactNode;
  hint?: ReactNode;
  leading?: ReactNode;
  tone?: "ink" | "ox";
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={cn("flex items-center gap-3 rounded-row bg-surface px-[15px] py-[13px] no-underline shadow-raise-sm", className)}
    >
      {leading}
      <span className="block min-w-0 flex-1">
        <span className={cn("block font-sans text-[16.5px] font-semibold", tone === "ox" ? "text-ox-deep" : "text-ink")}>{title}</span>
        {subtitle ? <span className="mt-[3px] block font-sans text-[12.5px] leading-[1.45] text-muted">{subtitle}</span> : null}
      </span>
      {hint ? <span className="flex-none font-sans text-[12.5px] text-muted">{hint}</span> : null}
      <Chevron />
    </SmartLink>
  );
}

/** Tinted info cards: notice (lilac, raised), verified (verdigris, inset), alert (oxblood, inset), live (teal, inset). */
export function TintCard({
  tone,
  title,
  children,
  className,
  icon,
}: {
  tone: "notice" | "verified" | "alert" | "live";
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  const shell = {
    notice: "bg-raised shadow-raise rounded-card",
    verified: "bg-tint-verified shadow-inset-sm rounded-well",
    alert: "bg-tint-alert shadow-inset-sm rounded-well",
    live: "bg-tint-live shadow-inset-sm rounded-well",
  }[tone];
  const titleCls = {
    notice: "font-semibold text-[11px] tracking-[1.5px] uppercase text-orchid-deep",
    verified: "font-semibold text-[12.5px] text-verd-text",
    alert: "font-semibold text-[12.5px] text-ox-deep",
    live: "font-semibold text-[12.5px] text-live-deep",
  }[tone];
  return (
    <div className={cn("px-[15px] py-[15px]", shell, className)}>
      {title ? (
        <p className={cn("m-0 flex items-center gap-2 font-sans", titleCls)}>
          {icon}
          {title}
        </p>
      ) : null}
      {children ? <div className={cn("font-sans text-[12.5px] leading-[1.5] text-body", title ? "mt-[8px]" : "")}>{children}</div> : null}
    </div>
  );
}

/** Square icon tile: pressed (INSET-SM) by default, raised when selected. 40px tile, 12px radius. */
export function IconTile({ children, size = 40, raised = false, className, color }: { children: ReactNode; size?: 34 | 38 | 40; raised?: boolean; className?: string; color?: string }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, color: color ?? "#544B3C" }}
      className={cn(
        "flex flex-none items-center justify-center bg-bg",
        size === 34 ? "rounded-[11px]" : "rounded-tile",
        raised ? "shadow-raise-sm" : "shadow-inset-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The verified tick badge (verdigris disc). */
export const VerifiedTick = ({ size = 22 }: { size?: number }) => (
  <span aria-hidden="true" style={{ width: size, height: size, fontSize: Math.round(size * 0.5) }} className="flex flex-none items-center justify-center rounded-full bg-verd font-sans font-bold text-white">
    &#10003;
  </span>
);

type ButtonVariant = "primary" | "surface" | "ghost" | "ghost-muted" | "destructive";
const buttonCls: Record<ButtonVariant, string> = {
  // Website deviation: one gradient step deeper than the app so white text reads (see globals.css).
  primary: "bg-primary-cta text-white shadow-raise min-h-[58px] rounded-cta text-[16px] font-semibold",
  destructive: "bg-destructive-cta text-white shadow-raise min-h-[56px] rounded-cta text-[16px] font-semibold",
  surface: "bg-surface text-ink shadow-raise-sm min-h-[52px] rounded-[17px] text-[15px] font-semibold",
  ghost: "bg-transparent text-body min-h-[46px] rounded-well text-[14px] font-semibold",
  "ghost-muted": "bg-transparent text-muted min-h-[46px] rounded-well text-[13.5px] font-semibold",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...rest
}: { variant?: ButtonVariant; href?: string; className?: string; children: ReactNode } & Omit<ComponentProps<"button">, "className" | "children">) {
  const cls = cn("inline-flex w-full items-center justify-center px-5 font-sans no-underline transition-transform active:scale-[0.99]", buttonCls[variant], className);
  if (href) return <SmartLink href={href} className={cls}>{children}</SmartLink>;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}

const poses = {
  papers: "Munshi reading a stack of papers",
  ledger: "Munshi writing in his ledger",
  question: "Munshi with a question",
  stern: "Munshi looking stern",
  flat: "Munshi, unimpressed",
  attentive: "Munshi, wide-eyed",
  "side-eye": "Munshi giving side-eye",
  waving: "Munshi waving",
  thinking: "Munshi thinking",
  pondering: "Munshi pondering",
  melancholy: "Munshi looking sad",
  smug: "Munshi looking pleased with himself",
  heart: "Munshi with a heart",
  content: "Munshi smiling",
  calm: "Munshi, eyes closed",
  curious: "Munshi looking up",
  judging: "Munshi judging",
  pleased: "Munshi delighted",
} as const;
export type MunshiPose = keyof typeof poses;

/** Munshi slot: black pose (decorative) + Fraunces italic quote, as on every app screen. */
export function MunshiSlot({ pose, quote, width = 132, height = 150, className }: { pose: MunshiPose; quote: ReactNode; width?: number; height?: number; className?: string }) {
  return (
    <figure className={cn("m-0 flex items-end gap-3", className)}>
      <div aria-hidden="true" style={{ width, height }} className="flex flex-none items-end justify-center">
        <Image src={`/munshi/${pose}.png`} alt="" width={width} height={height} className="h-auto max-h-full w-auto max-w-full object-contain" />
      </div>
      <blockquote className="m-0 mb-3 flex-1 font-serif text-[12.5px] italic leading-[1.42] text-muted">{quote}</blockquote>
    </figure>
  );
}

/** Internal review note. Visible on local and preview builds only; never on production. */
export function ReviewNote({ children, className }: { children: ReactNode; className?: string }) {
  if (!showReviewNotes) return null;
  return <p className={cn("m-0 mt-2 font-sans text-[11.5px] leading-[1.45] text-muted", className)}>Confirm before publishing: {children}</p>;
}

/** Where counsel's text goes. Visible on preview only. */
export function CounselSlot({ label = "Counsel to draft", children, className }: { label?: string; children: ReactNode; className?: string }) {
  if (!showReviewNotes) return null;
  return (
    <div className={cn("rounded-[14px] px-[15px] py-4 outline-[1.5px] outline-offset-[-1px] outline-dashed outline-muted", className)}>
      <p className="m-0 font-sans text-[11px] font-semibold uppercase tracking-[1.5px] text-orchid-deep">{label}</p>
      <p className="m-0 mt-1.5 font-sans text-[12.5px] leading-[1.45] text-muted">[{children}]</p>
    </div>
  );
}

export const Hairline = ({ className }: { className?: string }) => <div aria-hidden="true" className={cn("h-px bg-hairline", className)} />;

/** Inner-page frame: header, a centred reading column (mobile-first, 720px max), then the footer. */
export function PageColumn({ children, className }: { children: ReactNode; className?: string }) {
  return <main className={cn("mx-auto w-full max-w-[720px] px-[22px] pb-11", className)}>{children}</main>;
}
