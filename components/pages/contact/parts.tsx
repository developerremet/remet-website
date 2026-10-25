import type { ReactNode } from "react";
import { SmartLink } from "@/components/ui";
import { mailto, site } from "@/lib/site";

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
        <SmartLink href="/safety#report" className={pill}>
          How to report someone
        </SmartLink>
      </div>
    </section>
  );
}

/**
 * Muted 12.5px note under a group of rows. From 768px the column is 676px wide, so the note is capped
 * at the MunshiSlot's 440px (about 75 characters a line); at 390px it is full width as in the design.
 */
export function GroupNote({ children }: { children: ReactNode }) {
  return <p className="m-0 mt-[9px] font-sans text-[12.5px] leading-[1.45] text-muted md:max-w-[440px]">{children}</p>;
}

/** "24 hours" -> "24h", "15 days" -> "15d", so the card's short figures follow the confirmed facts in lib/site. */
const short = (span: string) => span.replace(/\s*hours?$/i, "h").replace(/\s*days?$/i, "d");

function Figure({ value, children }: { value: string; children: ReactNode }) {
  return (
    <p className="m-0 flex items-baseline gap-1.5">
      <span className="w-[34px] flex-none font-serif text-[18px] font-medium leading-[normal] text-ink">{value}</span>
      <span className="font-sans text-[11.5px] leading-[normal] text-muted">{children}</span>
    </p>
  );
}

/** Raised card: officer name, company, grievance email | acknowledge / resolve figures. */
export function OfficerCard() {
  return (
    <div className="mt-[9px] flex items-center gap-[14px] rounded-[17px] bg-surface px-[15px] py-[13px] shadow-raise-sm">
      <div className="min-w-0 flex-1">
        <p className="m-0 font-serif text-[17px] font-medium leading-[1.2] text-ink">{site.grievanceOfficer}</p>
        <p className="m-0 mt-0.5 font-sans text-[11.5px] leading-[1.35] text-muted">{site.company}</p>
        <a
          href={mailto(site.grievanceSubject)}
          className="-mb-[13px] -mt-2 flex min-h-11 w-max max-w-full items-center font-sans text-[13px] font-semibold leading-[normal] text-orchid-deep no-underline"
        >
          {site.email}
        </a>
      </div>
      <div aria-hidden="true" className="w-px flex-none self-stretch bg-bg" />
      <div className="flex flex-none flex-col gap-2">
        <Figure value={short(site.acknowledgeWithin)}>to acknowledge</Figure>
        <Figure value={short(site.resolveWithin)}>to resolve</Figure>
      </div>
    </div>
  );
}

/** Pressed well with the registered office address. */
export function OfficeAddress() {
  return (
    <address className="mt-[9px] block rounded-row bg-surface p-[15px] not-italic shadow-inset-sm">
      <span className="block font-serif text-[17px] font-medium leading-[1.2] text-ink">{site.company}</span>
      <span className="mt-1.5 block font-sans text-[12.5px] leading-[1.5] text-body">
        {site.addressLines.map((line, i) => (
          <span key={line}>
            {i > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </span>
    </address>
  );
}
