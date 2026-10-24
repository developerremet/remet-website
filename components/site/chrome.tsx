import Image from "next/image";
import Link from "next/link";
import { site, mailto } from "@/lib/site";
import { Chevron, ScreenHeader } from "@/components/ui";
import { ScrollProgress } from "./scroll-progress";

const wordmark = (h: number) => (
  <Image src="/brand/wordmark-ink.png" alt="Remet" width={Math.round((h * 1480) / 454)} height={h} priority />
);

/** Homepage header: ink wordmark + a raised "How it works" link, as in the design. */
export function HomeHeader() {
  return (
    <>
      <ScrollProgress />
      <header className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-[22px] pt-[18px]">
        <Link href="/" aria-label="Remet home" className="-ml-[3px] flex min-h-11 items-center">
          {wordmark(24)}
        </Link>
        <nav aria-label="Main">
          <Link
            href="/how-it-works"
            className="flex h-11 items-center rounded-[14px] bg-surface px-4 font-sans text-[13.5px] font-semibold text-body no-underline shadow-raise-sm"
          >
            How it works
          </Link>
        </nav>
      </header>
    </>
  );
}

/** Inner pages: progress bar + the app's back-disc header. */
export function InnerHeader({ title }: { title: string }) {
  return (
    <>
      <ScrollProgress />
      <ScreenHeader title={title} />
    </>
  );
}

const footerLink = "flex min-h-11 items-center font-sans text-[15px] font-semibold text-ink no-underline";

/** Shared footer, ported from the Footer artboard. */
export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-bg">
      <div className="mx-auto flex w-full max-w-[720px] flex-col px-[22px] pb-[14px] pt-[26px]">
        <Link href="/" aria-label="Remet home" className="flex w-max">
          {wordmark(24)}
        </Link>
        <nav aria-label="Footer" className="mt-[22px] grid grid-cols-2 gap-x-3.5">
          <div>
            <h2 className="m-0 font-sans text-[11px] font-medium uppercase tracking-[1.2px] text-muted">About</h2>
            <ul className="m-0 mt-1 list-none p-0">
              <li><Link href="/how-it-works" className={footerLink}>How it works</Link></li>
              <li><Link href="/safety" className={footerLink}>Safety</Link></li>
              <li><Link href="/contact" className={footerLink}>Contact and grievance</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="m-0 font-sans text-[11px] font-medium uppercase tracking-[1.2px] text-muted">Legal &amp; privacy</h2>
            <ul className="m-0 mt-1 list-none p-0">
              <li><Link href="/privacy" className={footerLink}>Privacy</Link></li>
              <li><Link href="/terms" className={footerLink}>Terms</Link></li>
              <li><Link href="/delete-account" className={footerLink}>Delete account</Link></li>
            </ul>
          </div>
        </nav>
        <a
          href={mailto("Remet · Venue partner")}
          className="mt-3.5 flex items-center gap-3 rounded-row bg-surface px-[15px] py-[13px] no-underline shadow-raise-sm"
        >
          <span className="block min-w-0 flex-1">
            <span className="block font-sans text-[16.5px] font-semibold text-ink">Get on the map</span>
            <span className="mt-[3px] block font-sans text-[12.5px] text-muted">Run a café, gaming zone or studio in Indore?</span>
          </span>
          <Chevron />
        </a>
        <div className="mt-4 flex flex-col border-t border-hairline pt-4">
          <div className="flex items-baseline gap-2">
            <span className="flex-none font-serif text-[18px] font-medium text-ink">18+</span>
            <p className="m-0 font-sans text-[12.5px] leading-[1.45] text-body">Remet is only for adults aged 18 and over.</p>
          </div>
          <p className="m-0 mt-3 font-sans text-[12.5px] leading-[1.6] text-muted">
            {site.company}
            <br />
            {site.addressLines.join(", ")}
          </p>
          <a href={mailto()} className="-mt-2 flex min-h-11 w-max items-center font-sans text-[13px] font-semibold text-orchid-deep no-underline">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
