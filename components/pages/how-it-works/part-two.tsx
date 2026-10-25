// Part two of /how-it-works, ported from HowItWorksManaged.dc.html: the twelve controls,
// what Remet does not do, who runs Remet, and the closing "Keep reading" rows.
// Its own header and the part one / part two switcher are dropped: it follows part one on the same page.
import Image from "next/image";
import type { ReactNode } from "react";
import { Card, IconTile, MunshiSlot, ReviewNote, Row, SectionLabel } from "@/components/ui";
import { mailto, site } from "@/lib/site";
import { Eyebrow, Lede, SectionTitle, sectionRule } from "./shared";

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

type Control = { n: string; title: string; body: string; icon: ReactNode };

const controls: Control[] = [
  {
    n: "01",
    title: "Identity verification",
    body: "Aadhaar OTP via DigiLocker through Surepass; DOB read for age; Aadhaar number never stored; one identity maps to one account.",
    icon: (
      <Icon>
        <path d="M4 9h9v10H4z" />
        <path d="M9 5h9v10" />
        <line x1="6.5" y1="12.5" x2="10.5" y2="12.5" />
        <line x1="6.5" y1="15.5" x2="9.5" y2="15.5" />
      </Icon>
    ),
  },
  {
    n: "02",
    title: "Age gate, 18 and over",
    body: "From the Aadhaar DOB, not self-declaration; no under-18 mode.",
    icon: "18+",
  },
  {
    n: "03",
    title: "Liveness check",
    body: "HyperVerge SDK; failed accounts stay invisible.",
    icon: (
      <Icon>
        <circle cx="11" cy="8" r="3.2" />
        <path d="M4.5 19a6.6 6.6 0 0 1 11.5-3" />
        <path d="M15 13.8l2 2 3.5-3.6" />
      </Icon>
    ),
  },
  {
    n: "04",
    title: "Pseudonymity and location privacy",
    body: "Legal names never shown; location rounded to a zone server-side; presence clears nightly.",
    icon: (
      <Icon>
        <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" />
      </Icon>
    ),
  },
  {
    n: "05",
    title: "Photo policy and screening",
    body: "No profile photos in discovery; wave photos camera-only, screened in AWS Mumbai, faces and explicit content rejected, metadata stripped.",
    icon: (
      <Icon>
        <path d="M4 8.5h3.2l1.4-2h6.8l1.4 2H20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="13.5" r="3.2" />
      </Icon>
    ),
  },
  {
    n: "06",
    title: "Chat safeguards",
    body: "Text only, five minutes, server-side redaction of phone numbers, handles and emails, visible to both.",
    icon: (
      <Icon>
        <path d="M4 6h16v10H9l-4 3v-3H4z" />
      </Icon>
    ),
  },
  {
    n: "07",
    title: "Preference enforcement",
    body: "Who-can-see-whom decided on the server; dating preference applied when the Date pool is built and cannot be overridden by a modified client.",
    icon: (
      <Icon>
        <path d="M12 20S4 15 4 9.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.2C20 15 12 20 12 20z" />
      </Icon>
    ),
  },
  {
    n: "08",
    title: "Rejection privacy",
    body: "A decline is never shown; outcome, wording and timing identical whether one or both declined.",
    icon: (
      <Icon>
        <path d="M20 14.5A7.5 7.5 0 1 1 10.2 4.2 5.8 5.8 0 0 0 20 14.5z" />
      </Icon>
    ),
  },
  {
    n: "09",
    title: "Reporting, blocking and enforcement",
    body: "Report stores the chat transcript as evidence; every report reviewed by the Remet team and acted on; blocking is immediate and permanent.",
    icon: (
      <Icon>
        <path d="M12 3.2l6.4 2.4v5.2c0 4.2-2.7 7.4-6.4 8.6-3.7-1.2-6.4-4.4-6.4-8.6V5.6z" />
        <path d="M12 8.6v3.6" />
        <path d="M12 15.1v.1" />
      </Icon>
    ),
  },
  {
    n: "10",
    title: "Venues",
    body: "Only partner venues Remet has visited and signed; no custom addresses.",
    icon: (
      <Icon>
        <path d="M4 8.5c0-2.5 1.5-4 4-4h8c2.5 0 4 1.5 4 4" />
        <path d="M4 8.5a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
        <path d="M5.5 10.5v10M18.5 10.5v10M5.5 20.5h13" />
        <path d="M9.5 20.5v-5h5v5" />
      </Icon>
    ),
  },
  {
    n: "11",
    title: "Data handling and deletion",
    body: `Data in AWS Mumbai; Aadhaar numbers never stored; intent and presence clear nightly; account deletion in-app or via ${site.email}, ${site.deletionGraceDays}-day grace.`,
    icon: (
      <Icon>
        <path d="M4 17.5h14v3H4zM5 14h14v3.5H5zM4.5 10.5h13V14h-13z" />
        <path d="M6 7h11v3.5H6z" />
      </Icon>
    ),
  },
  {
    n: "12",
    title: "Support and grievance",
    body: `${site.email}; subject "${site.grievanceSubject}" routes to the Grievance Officer; acknowledge within ${site.acknowledgeWithin}, resolve within ${site.resolveWithin} (IT Rules, 2021).`,
    icon: (
      <Icon>
        <path d="M4.4 11.6L20 5l-6.6 15.6-2.1-6.9z" />
        <path d="M11.3 13.7L20 5" />
      </Icon>
    ),
  },
];

const notDone = [
  "No paid messaging, coins or boosts",
  "No fake, bot or company-run profiles",
  "No photo browsing, feeds or swiping",
  "No sexual content",
  "No private meeting locations",
  "No calls",
];

const groupLabel = "mt-[18px] leading-[normal]";
const rowCls = "py-[14px] leading-[normal]";

function ControlCard({ control }: { control: Control }) {
  const textIcon = typeof control.icon === "string";
  return (
    <Card as="li" className="flex items-start gap-[14px] px-[15px] py-[14px]">
      <IconTile color="var(--color-orchid-deep)" className={textIcon ? "font-serif text-[14px] font-semibold leading-none" : undefined}>
        {control.icon}
      </IconTile>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-[10px]">
          {/* The artboard wraps these titles greedily, not balanced (e.g. "Pseudonymity and location / privacy"). */}
          <h3 className="m-0 font-sans text-[16.5px] font-semibold leading-[1.25] text-wrap text-ink">{control.title}</h3>
          <span aria-hidden="true" className="flex-none font-serif text-[14px] font-semibold leading-none text-orchid-deep">
            {control.n}
          </span>
        </div>
        {/* 62ch keeps the line near 75 characters in the 720px column; at 390px the card is narrower than the cap. */}
        <p className="m-0 mt-1 max-w-[62ch] font-sans text-[12.5px] leading-[1.45] text-body">{control.body}</p>
      </div>
    </Card>
  );
}

export function PartTwo() {
  return (
    // The "Part two" jump target. A plain wrapper: only the controls below form the "How the system is managed" region.
    <div id="managed">
      <section id="controls" aria-labelledby="controls-title" className={sectionRule}>
        <Eyebrow>Part two</Eyebrow>
        <SectionTitle id="controls-title">How the system is managed</SectionTitle>
        {/* Part two's page intro (it sat above its own switcher in the artboard), kept as the opening line of part two. */}
        <Lede>The twelve controls behind every account, chat and meeting, what Remet does not do, and who runs it.</Lede>
        <Lede>What Remet checks, limits and keeps private, one control at a time.</Lede>
        <ReviewNote className="leading-[1.4]">
          keep or remove the vendor names (Surepass, HyperVerge), confirm the &apos;Aadhaar number never stored&apos; wording in controls 01 and
          11 (counsel has marked it to confirm), and check control 09 against the current build.
        </ReviewNote>

        <ol className="m-0 mt-4 flex list-none flex-col gap-[10px] p-0">
          {controls.map((c) => (
            <ControlCard key={c.n} control={c} />
          ))}
        </ol>

        <div id="not" className={sectionRule}>
          <SectionLabel as="h3" variant="content" className="leading-[normal]">
            What Remet does not do
          </SectionLabel>
          <ul className="m-0 mt-3 flex list-none flex-col gap-[9px] p-0">
            {notDone.map((item) => (
              <li
                key={item}
                className="flex items-center gap-[11px] rounded-[14px] bg-surface px-[15px] py-[14px] font-sans text-[12.5px] leading-[normal] text-body shadow-inset-sm"
              >
                <span aria-hidden="true" className="h-[2px] w-[15px] flex-none rounded-[2px] bg-ox" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <MunshiSlot
          pose="ledger"
          className="mt-[18px] [&_blockquote]:max-w-[62ch]"
          quote={"\"One look. I've screened everyone here the same way, and I'm not making an exception for you.\""}
        />
      </section>

      <section id="who" aria-labelledby="who-title" className={sectionRule}>
        <Eyebrow>The company</Eyebrow>
        <SectionTitle id="who-title">Who runs Remet</SectionTitle>
        <Lede>The company behind Remet, and where to write to it.</Lede>

        <SectionLabel as="h3" className={groupLabel}>
          Company
        </SectionLabel>
        <Card className="mt-[9px] flex items-start gap-[14px] px-[15px] py-[14px]">
          <IconTile>
            <Image src="/brand/mark-ink.png" alt="" width={22} height={19} className="block h-auto w-[22px]" />
          </IconTile>
          <div className="min-w-0 flex-1">
            <p className="m-0 font-sans text-[16.5px] font-semibold leading-[1.25] text-ink">{site.company}</p>
            <p className="m-0 mt-2 font-sans text-[10px] font-semibold uppercase leading-[normal] tracking-[1.5px] text-muted">Registered office</p>
            <p className="m-0 mt-1 font-sans text-[12.5px] leading-[1.45] text-body">
              {site.addressLines[0]}
              <br />
              {site.addressLines[1]}
            </p>
          </div>
        </Card>

        <SectionLabel as="h3" className={groupLabel}>
          Write to us
        </SectionLabel>
        <div className="mt-[9px] flex flex-col gap-2">
          <Row href={mailto()} title="Support" subtitle={site.email} className={rowCls} />
          <Row
            href={mailto(site.grievanceSubject)}
            title="A complaint about Remet"
            subtitle="Goes to the Grievance Officer below"
            className={rowCls}
          />
        </div>

        <SectionLabel as="h3" className={groupLabel}>
          Grievance Officer
        </SectionLabel>
        {/* Below 360px the timelines stack under the officer, so the unbreakable email keeps its own line. */}
        <Card className="mt-[9px] flex items-center gap-[14px] rounded-[17px] px-[15px] py-[14px] max-[360px]:flex-col max-[360px]:items-start">
          <div className="min-w-0 flex-1">
            <p className="m-0 font-serif text-[17px] font-medium leading-[1.2] text-ink">{site.grievanceOfficer}</p>
            <p className="m-0 mt-[2px] font-sans text-[11.5px] leading-[1.35] text-muted">{site.company}</p>
            {/* The 44px hit area overlaps the line above and the card's padding, so the focus ring is drawn
                around the address itself rather than the whole hit box. */}
            <a
              href={mailto(site.grievanceSubject)}
              className="group -mb-[14px] -mt-[7px] flex min-h-11 w-fit items-center font-sans text-[13px] font-semibold leading-[normal] text-orchid-deep no-underline focus-visible:outline-none"
            >
              <span className="rounded-[4px] group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-orchid">
                {site.email}
              </span>
            </a>
          </div>
          <div aria-hidden="true" className="w-px flex-none self-stretch bg-bg max-[360px]:hidden" />
          <div className="flex flex-none flex-col gap-2">
            <p className="m-0 flex items-baseline gap-[6px] leading-[normal]">
              <span className="font-serif text-[18px] font-medium text-ink">{site.acknowledgeShort}</span>
              <span className="font-sans text-[11.5px] text-muted">to acknowledge</span>
            </p>
            <p className="m-0 flex items-baseline gap-[6px] leading-[normal]">
              <span className="font-serif text-[18px] font-medium text-ink">{site.resolveShort}</span>
              <span className="font-sans text-[11.5px] text-muted">to resolve</span>
            </p>
          </div>
        </Card>
        <p className="m-0 mt-[9px] max-w-[62ch] font-sans text-[12.5px] leading-[1.45] text-muted">
          Write to {site.email} with the subject &quot;{site.grievanceSubject}&quot; and it routes to the Grievance Officer. Timelines under the
          IT&nbsp;Rules, 2021.
        </p>

        <MunshiSlot
          pose="papers"
          className="mt-[18px] [&_blockquote]:max-w-[62ch]"
          quote={"\"Every complaint lands on my desk. Not a form that goes nowhere. Say it plainly and I'll answer.\""}
        />
      </section>

      <section aria-labelledby="managed-next-label" className={sectionRule}>
        <SectionLabel id="managed-next-label" className="leading-[normal]">
          Keep reading
        </SectionLabel>
        <div className="mt-[9px] flex flex-col gap-2">
          <Row
            href="#steps"
            title="The app, step by step"
            subtitle="Part one: the twelve steps, from the identity check to after you meet"
            className={rowCls}
          />
          <Row href="/safety" title="Safety" subtitle="Reporting, blocking and Munshi's Golden Rules" className={rowCls} />
          <Row href="/privacy" title="Privacy policy" subtitle="What we collect, why, and for how long" className={rowCls} />
          <Row href="/delete-account" title="Delete account" subtitle={`In the app, or by email, with ${site.deletionGraceDays} days to change your mind`} className={rowCls} />
        </div>
      </section>
    </div>
  );
}
