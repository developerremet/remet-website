import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";
import { WaitlistForm } from "@/components/site/waitlist-form";
import { IconTile, MunshiSlot, ReviewNote, Row } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BanIcon, BooksIcon, BrushIcon, CinemaIcon, ComedyIcon, CupIcon, GamingIcon, MusicIcon, PickleballIcon, PinIcon, ShieldIcon } from "./icons";
import { Body, Eyebrow, Quote, SectionTitle, frame } from "./shared";

/** Sections that go two columns from 1024px (each column is then 452px or wider; below that they stay one column). */
const twoCol = "pt-14 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:pt-24";

const checks = [
  { title: "Aadhaar, through DigiLocker.", body: "Proves you are you, and 18 or over. The number itself is never stored." },
  { title: "A liveness check.", body: "A real person, live, before anyone can see you." },
  { title: "A pseudonym on top.", body: "Others see a handle and an initial. Your photo stays hidden until you both agree to meet." },
];

/** "Verified, privately". From 1024px: heading and Munshi on the left, the verdigris card beside them. */
export function Verified() {
  return (
    <section className={cn(frame, twoCol, "lg:grid-rows-[auto_1fr]")}>
      <Reveal className="lg:col-start-1 lg:row-start-1">
        <Eyebrow>Verified, privately</Eyebrow>
        <SectionTitle>Everyone is checked. No one is exposed.</SectionTitle>
      </Reveal>
      <Reveal className="mt-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <ul className="m-0 list-none rounded-well bg-tint-verified p-[15px] shadow-inset-sm">
          {checks.map((c, i) => (
            <li key={c.title} className={i ? "mt-3.5 border-t border-[rgba(140,132,114,0.18)] pt-3.5" : undefined}>
              <p className="m-0 flex items-center gap-[9px] font-sans text-[12.5px] font-semibold leading-[normal] text-verd-text">
                <span aria-hidden="true" className="flex size-5 flex-none items-center justify-center rounded-full bg-verd text-[10px] text-white">
                  ✓
                </span>
                {c.title}
              </p>
              <p className="m-0 mt-[9px] max-w-[440px] font-sans text-[12.5px] leading-[1.5] text-body">{c.body}</p>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="mt-[18px] lg:col-start-1 lg:row-start-2">
        <MunshiSlot pose="judging" quote={<Quote>“A new name. Cute. The ledger has your real one.”</Quote>} />
      </Reveal>
    </section>
  );
}

const places: { label: string; icon: ReactNode }[] = [
  { label: "Cafés", icon: <CupIcon /> },
  { label: "Cinemas", icon: <CinemaIcon /> },
  { label: "Gaming zones", icon: <GamingIcon /> },
  { label: "Comedy clubs", icon: <ComedyIcon /> },
  { label: "Live music", icon: <MusicIcon /> },
  { label: "Art studios", icon: <BrushIcon /> },
  { label: "Bookstores", icon: <BooksIcon /> },
  { label: "Pickleball", icon: <PickleballIcon /> },
];

/** "Places worth meeting at": 2 columns, 4 on desktop, 1 below 360px (where a 2-column card is too narrow for "Bookstores"). */
export function Places() {
  return (
    <section className={cn(frame, "pt-14 md:pt-16 lg:pt-24")}>
      <Reveal>
        <Eyebrow>Places worth meeting at</Eyebrow>
        <SectionTitle>Public places Remet has visited. Never an address.</SectionTitle>
      </Reveal>
      <Reveal className="mt-5">
        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 max-[359px]:grid-cols-1 lg:grid-cols-4">
          {places.map((p) => (
            <li key={p.label} className="flex items-center gap-3.5 rounded-card bg-surface px-[15px] py-3.5 shadow-raise-sm">
              <IconTile>{p.icon}</IconTile>
              <span className="min-w-0 flex-1 font-sans text-[13px] font-medium leading-[1.25] text-body">{p.label}</span>
            </li>
          ))}
        </ul>
        <Body className="mt-[18px]">The app picks the overlap of where you both want to go, the fairest by travel time, and sets an arrival window.</Body>
      </Reveal>
    </section>
  );
}

const ledger = [
  { entry: "Tue · one café, two strangers", met: true },
  { entry: "Thu · chess, lost graciously", met: true },
  { entry: "Fri · chatted for hours", met: false },
];

/** "Meet Munshi". From 1024px: heading and explanation on the left, the ledger and Munshi beside them. */
export function MeetMunshi() {
  return (
    <section className={cn(frame, twoCol, "lg:grid-rows-[auto_1fr_auto]")}>
      <Reveal className="lg:col-start-1 lg:row-start-1">
        <Eyebrow>Meet Munshi</Eyebrow>
        <SectionTitle>He keeps the ledger. Only meetings count.</SectionTitle>
      </Reveal>
      <Reveal className="mt-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <ol aria-label="Munshi's ledger" className="m-0 list-none rounded-card bg-surface px-[15px] py-[3px] shadow-raise-sm">
          {ledger.map((l, i) => (
            <li key={l.entry} className={cn("flex items-center justify-between gap-2.5 py-[13px]", i && "border-t border-[rgba(140,132,114,0.22)]")}>
              <span className={cn("min-w-0 font-serif text-[15px] italic leading-[1.3]", l.met ? "text-ink" : "text-muted")}>{l.entry}</span>
              {l.met ? (
                <span className="inline-flex flex-none items-center gap-[7px] font-sans text-[12.5px] font-semibold leading-[normal] text-verd-text">
                  <span aria-hidden="true" className="size-[7px] rounded-full bg-verd" />
                  Met
                </span>
              ) : (
                <span className="flex-none font-sans text-[12.5px] font-semibold leading-[normal] text-muted line-through decoration-orchid decoration-2">
                  Didn&apos;t count
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal className="lg:col-start-1 lg:row-span-2 lg:row-start-2">
        <Body className="mt-[18px]">No likes, streaks or public scores. A connection on Remet is two phones confirming you were both actually there.</Body>
        <ReviewNote className="leading-[1.4]">ratings stay private.</ReviewNote>
      </Reveal>
      <Reveal className="mt-[18px] lg:col-start-2 lg:row-start-3">
        <MunshiSlot pose="ledger" quote={<Quote tone="orchid">“Conversation is the toll you pay to get past me.”</Quote>} />
      </Reveal>
    </section>
  );
}

const safety: { lead: string; rest: string; icon: ReactNode }[] = [
  { lead: "Report or block from the chat or after a meeting.", rest: " The Remet team reviews reports.", icon: <ShieldIcon /> },
  { lead: "Your location is rounded to a zone", rest: " and cleared every night.", icon: <PinIcon /> },
  { lead: "No calls, no feeds, no paid boosts.", rest: " No sexual content.", icon: <BanIcon /> },
];

/** "Safety, built in." From 1024px: heading and the safety-page link on the left, the list beside them. */
export function Safety() {
  return (
    <section className={cn(frame, twoCol, "lg:grid-rows-[auto_1fr]")}>
      <Reveal className="lg:col-start-1 lg:row-start-1">
        <SectionTitle className="mt-0">Safety, built in.</SectionTitle>
      </Reveal>
      <Reveal className="mt-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
          {safety.map((s) => (
            <li key={s.lead} className="flex items-center gap-3.5 rounded-card bg-surface px-[15px] py-3.5 shadow-raise-sm">
              <IconTile color="#6B4483">{s.icon}</IconTile>
              <span className="min-w-0 flex-1 font-sans text-[13.5px] font-medium leading-[1.35] text-body">
                <strong className="font-semibold text-ink">{s.lead}</strong>
                {s.rest}
              </span>
            </li>
          ))}
        </ul>
        <ReviewNote className="leading-[1.4]">how reports are reviewed.</ReviewNote>
      </Reveal>
      <Reveal className="mt-4 lg:col-start-1 lg:row-start-2 lg:mt-6 lg:max-w-[420px]">
        <Row href="/safety" title="Read the safety page" className="py-4 leading-[normal]" />
      </Reveal>
    </section>
  );
}

/** The waitlist. The working WaitlistForm replaces the artboard's static form; copy around it is the design's. */
export function Join() {
  return (
    <section id="join" className={cn(frame, "pb-14 pt-14 md:pt-16 lg:pb-24 lg:pt-24")}>
      <div className="md:max-w-[480px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-14">
        <Reveal className="lg:max-w-[440px]">
          <div className="flex items-end gap-3">
            <h2 className="m-0 mb-1.5 min-w-0 flex-1 font-serif text-[30px] font-medium leading-[1.1] text-ink lg:text-[36px]">{`Opening in ${site.city}.`}</h2>
            <div aria-hidden="true" className="flex h-[110px] w-24 flex-none items-end justify-center">
              <Image src="/munshi/waving.png" alt="" width={96} height={105} className="block h-auto max-h-full w-auto max-w-full object-contain" />
            </div>
          </div>
          <p className="m-0 mt-2.5 font-sans text-[14px] leading-[1.55] text-body">Leave your WhatsApp number. Munshi will tell you once, when the door opens.</p>
        </Reveal>
        <Reveal className="lg:max-w-[480px]">
          <WaitlistForm source="home" />
          <p className="m-0 mt-2.5 text-center font-sans text-[11.5px] leading-[1.45] text-muted">One message, nothing else. We use your number only for this.</p>
          <ReviewNote className="mt-1.5 text-center leading-[1.4]">waitlist data use.</ReviewNote>
        </Reveal>
      </div>
    </section>
  );
}
