import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";
import { IconTile, SectionLabel } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChatDemo } from "./chat-demo";
import { BubbleIcon, CupIcon, DoorIcon, HeartIcon, MoonIcon, PeopleIcon, SendIcon } from "./icons";
import { Eyebrow, SectionTitle, frame } from "./shared";
import { WaveLine } from "./wave-line";

const insetSelected = "shadow-[inset_-4px_-4px_9px_rgba(255,255,255,0.92),inset_4px_4px_10px_rgba(176,162,138,0.55),inset_0_0_0_1.5px_#8E5FA8]";

/** One numbered moment: top rule, orchid number label, Fraunces 22px title. */
function Moment({ label, title, aside, className, children }: { label: string; title: string; aside?: ReactNode; className?: string; children: ReactNode }) {
  const head = (
    <>
      <SectionLabel as="p" variant="content" tone="orchid" className="leading-[normal]">
        {label}
      </SectionLabel>
      <h3 className="m-0 mt-2 font-serif text-[22px] font-medium leading-[1.15] text-ink">{title}</h3>
    </>
  );
  return (
    <Reveal className={cn("border-t border-hairline pt-5", className)}>
      {aside ? (
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 flex-1">{head}</div>
          {aside}
        </div>
      ) : (
        head
      )}
      {children}
    </Reveal>
  );
}

const intents: { title: string; sub: string; icon: ReactNode; selected?: boolean }[] = [
  { title: "Meet up", sub: "Let’s find a spot and meet", icon: <PeopleIcon /> },
  { title: "Hang out", sub: "Low-key, casual", icon: <CupIcon size={26} />, selected: true },
  { title: "Talk", sub: "Good conversation first", icon: <BubbleIcon /> },
  { title: "Date", sub: "Open to something romantic", icon: <HeartIcon /> },
];

function GoLive() {
  return (
    <>
      <ul className="m-0 mt-[18px] grid list-none auto-rows-fr grid-cols-2 gap-[11px] p-0">
        {intents.map((i) => (
          <li
            key={i.title}
            aria-current={i.selected ? "true" : undefined}
            className={cn("rounded-card bg-surface py-[15px] pl-[15px] pr-[14px]", i.selected ? insetSelected : "shadow-raise-sm")}
          >
            <IconTile raised={i.selected} color={i.selected ? "#6B4483" : "#544B3C"}>
              {i.icon}
            </IconTile>
            <p className="m-0 mt-[11px] font-sans text-[15px] font-semibold leading-[normal] text-ink">{i.title}</p>
            <p className={cn("m-0 mt-[3px] font-sans text-[12px] leading-[1.35]", i.selected ? "text-body" : "text-muted")}>{i.sub}</p>
          </li>
        ))}
      </ul>
      <p className="m-0 mt-4 flex items-center gap-[7px] font-sans text-[12.5px] font-medium leading-[1.4] text-body">
        <span aria-hidden="true" className="size-2 flex-none rounded-full bg-live" />
        Live for tonight. It clears by itself.
      </p>
    </>
  );
}

function Wave() {
  return (
    <>
      <div className="relative mt-4 rounded-well bg-surface px-[15px] pb-[34px] pt-4 shadow-inset">
        <WaveLine text="Chess and filter coffee? I lose graciously" />
        <span className="absolute bottom-[10px] left-[15px] font-sans text-[11px] font-semibold leading-[normal] text-verd-text">✓ good</span>
        <span className="absolute bottom-[10px] right-[15px] font-sans text-[11px] font-semibold leading-[normal] text-muted">42 / 90</span>
      </div>
      <p className="m-0 mt-2 font-sans text-[11.5px] leading-[1.4] text-muted">Three words at least, under 90 characters. No photos of faces.</p>
    </>
  );
}

const Timer = () => (
  <div
    role="img"
    aria-label="4 minutes 12 seconds left"
    className="relative flex h-11 w-[66px] flex-none items-center justify-center overflow-hidden rounded-[15px] bg-surface shadow-inset-sm"
  >
    <span aria-hidden="true" className="absolute bottom-0 left-0 h-[84%] w-full bg-[rgba(142,95,168,0.16)]" />
    <span aria-hidden="true" className="relative font-serif text-[21px] font-bold leading-none tracking-[0.2px] text-orchid-deep">
      4:12
    </span>
  </div>
);

function FiveMinutes() {
  return (
    <>
      <ChatDemo className="mt-[18px]" />
      <div aria-hidden="true" className="mt-4 flex items-center gap-2.5">
        <div className="flex h-12 min-w-0 flex-1 items-center rounded-well bg-surface px-[15px] font-sans text-[14px] leading-[normal] text-muted shadow-inset">
          Say hi back…
        </div>
        <div className="bg-primary-cta flex size-12 flex-none items-center justify-center rounded-[15px] text-white shadow-raise-sm">
          <SendIcon />
        </div>
      </div>
    </>
  );
}

const choices: { title: string; sub: string; icon?: ReactNode; selected?: boolean }[] = [
  { title: "Meet up", sub: "Head somewhere nearby. See what happens.", selected: true },
  { title: "Not this time", sub: "No worries. Someone else is out there.", icon: <MoonIcon /> },
  { title: "Keep Door Open", sub: "Not now, but wave again when we’re close.", icon: <DoorIcon /> },
];

function YourCall() {
  return (
    <ul className="m-0 mt-4 flex list-none flex-col gap-[11px] p-0">
      {choices.map((c) => (
        <li
          key={c.title}
          aria-current={c.selected ? "true" : undefined}
          className={cn(
            "flex items-center gap-3.5 rounded-card p-[15px]",
            c.selected
              ? "bg-[#E1D5D5] shadow-[inset_-4px_-4px_9px_rgba(255,255,255,0.92),inset_4px_4px_10px_rgba(176,162,138,0.55),inset_0_0_0_1.6px_#8E5FA8]"
              : "bg-surface shadow-raise-sm",
          )}
        >
          {c.selected ? (
            <span
              aria-hidden="true"
              className="flex size-11 flex-none items-center justify-center rounded-[14px] bg-[linear-gradient(145deg,#B08FC2,#8E5FA8)] font-sans text-[17px] font-bold leading-none text-[#FDFAF4] shadow-raise-sm"
            >
              ✓
            </span>
          ) : (
            <span aria-hidden="true" className="flex size-11 flex-none items-center justify-center rounded-[14px] bg-bg text-muted-deco shadow-inset-sm">
              {c.icon}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className={cn("m-0 font-sans text-[17px] font-semibold leading-[normal] tracking-[0.2px]", c.selected ? "text-orchid-deep" : "text-ink")}>{c.title}</p>
            <p className="m-0 mt-0.5 font-sans text-[12.5px] leading-[1.4] text-body">{c.sub}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Meet() {
  return (
    <div className="mt-4 flex items-center gap-3 rounded-card bg-surface px-[15px] py-3.5 shadow-raise-sm">
      <div className="min-w-0 flex-1">
        <p className="m-0 font-sans text-[16.5px] font-semibold leading-[normal] text-ink">A partner café</p>
        <p className="m-0 mt-[3px] font-sans text-[12.5px] leading-[1.45] text-muted">Arrive 7:30 to 7:45</p>
      </div>
      <p className="m-0 inline-flex flex-none items-center gap-[7px] font-sans text-[13.5px] font-semibold leading-[normal] text-verd-text">
        <span aria-hidden="true" className="size-2 flex-none rounded-full bg-verd" />
        I&apos;m here
      </p>
    </div>
  );
}

/** "How a meeting happens": five moments. From 1024px: two columns (01-02 | 03-05), reading down each. */
export function Moments() {
  return (
    <section id="how" className={cn(frame, "pt-14 md:pt-16 lg:pt-24")}>
      <Reveal>
        <Eyebrow>How a meeting happens</Eyebrow>
        <SectionTitle>Five moments, from your sofa to a table.</SectionTitle>
      </Reveal>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-14">
        <div>
          <Moment label="01 · Go live" title="Say what you are up for, right now." className="mt-6">
            <GoLive />
          </Moment>
          <Moment label="02 · Wave" title="One short line to someone nearby." className="mt-[26px]">
            <Wave />
          </Moment>
        </div>
        <div>
          <Moment label="03 · Five minutes" title="Text, then it ends." aside={<Timer />} className="mt-[26px] lg:mt-6">
            <FiveMinutes />
          </Moment>
          <Moment label="04 · Your call" title="Decide privately. A no is never shown." className="mt-[26px]">
            <YourCall />
          </Moment>
          <Moment label="05 · Meet" title="Both arrive. The phones confirm it." className="mt-[26px]">
            <Meet />
          </Moment>
        </div>
      </div>
    </section>
  );
}
