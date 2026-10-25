// Part one of /how-it-works, ported from HowItWorks.dc.html: the intro, the fact chips,
// the jump links and the twelve app steps.
import Image from "next/image";
import Link from "next/link";
import { MunshiSlot, ReviewNote, SectionLabel } from "@/components/ui";
import { site } from "@/lib/site";
import { Eyebrow, Lede, ScreenCaption, SectionTitle, sectionRule } from "./shared";

const facts: { label: string; verified: boolean }[] = [
  { label: "18+ checked against Aadhaar", verified: true },
  { label: "Every account identity-verified", verified: true },
  { label: "Text-only chat", verified: false },
  { label: "Meetings at public partner venues", verified: false },
  { label: `Operated by ${site.company}`, verified: false },
];

const jumpLinks: { href: string; label: string; chevron: boolean }[] = [
  { href: "#steps", label: "Part one", chevron: false },
  { href: "#managed", label: "Part two", chevron: true },
  { href: "#who", label: "Who runs Remet", chevron: true },
];

type Step = { n: string; title: string; you: string; remet: string; src: string; alt: string };

const steps: Step[] = [
  {
    n: "01",
    title: "Identity and age check",
    you: "Verify Aadhaar through DigiLocker; enter the OTP sent to the Aadhaar-linked mobile.",
    remet:
      "Receives the verified identity through a licensed KYC provider, reads the DOB, refuses anyone under 18. One identity, one account. Aadhaar number discarded, never stored.",
    src: "/screens/05-why.png",
    alt: "Identity screen: Everyone here is Real, with the DigiLocker consent",
  },
  {
    n: "02",
    title: "Liveness check",
    you: "Centre your face in the circle and hold still.",
    remet: "Confirms a real, live person; no account is visible to others until this passes.",
    src: "/screens/11-liveness.png",
    alt: "Liveness screen: Centre your face. Hold still.",
  },
  {
    n: "03",
    title: "Pseudonym and one photo",
    you: "Pick a handle (suggested ones you can't be found by) and add one photo.",
    remet: "Legal name kept private. Photo hidden until both agree to meet. Others only see the pseudonym and initial.",
    src: "/screens/14-pseudonym.png",
    alt: "Profile screen: Build the public you, with one photo slot and a handle",
  },
  {
    n: "04",
    title: "Dating preference",
    you: "Choose whether men, women or both appear under the Date intent.",
    remet: "Applies only to Date, never shown on the profile, enforced on the server. Date itself is optional.",
    src: "/screens/19-orientation.png",
    alt: "Preference screen: For dates, show me Men or Women",
  },
  {
    n: "05",
    title: "Intent for right now",
    you: "Pick Meet up / Hang out / Talk / Date, optional status line and time window, go live.",
    remet: "A moment clears the same night. Date is a separate pool.",
    src: "/screens/25-moment.png",
    alt: "Moment screen: What are you open to right now, with the four intents",
  },
  {
    n: "06",
    title: "Who is around now",
    you: "See people nearby who are open right now, map or list.",
    remet: "Initial on a disc, never a photo. Positions rounded to a zone. No feed, no swiping.",
    src: "/screens/27-map.png",
    alt: "Map screen: 2 people near you, shown as initials on discs",
  },
  {
    n: "07",
    title: "Wave",
    you: "Short typed line (3+ words, under 90 chars). Optional camera photo of where you are, not your face.",
    remet: "Line required, waves capped per day. Photos screened on the server: faces and explicit content rejected, metadata stripped.",
    src: "/screens/29-request.png",
    alt: "Wave screen: a typed line and an optional camera photo",
  },
  {
    n: "08",
    title: "Five-minute chat",
    you: "If accepted, five minutes of text chat. Leave any time.",
    remet: "Text only, no calls. Phone numbers, handles and emails redacted before delivery, visibly. Shield button opens report and block.",
    src: "/screens/33-chat.png",
    alt: "Chat screen: the 5:00 clock, the shield button and a text box",
  },
  {
    n: "09",
    title: "Your call",
    you: "Within 60 seconds, privately pick Meet up / Not this time / Keep door open.",
    remet: 'Meeting only if both choose Meet up. A "no" is never shown. Photos revealed only after both agree.',
    src: "/screens/34-decision.png",
    alt: "Decision screen: Your call, with Meet up, Not this time and Keep Door Open",
  },
  {
    n: "10",
    title: "Pick a spot",
    you: "Each keeps three venues from a short stack: swipe right to keep, left to pass.",
    remet: "Only curated public partner venues. App takes the overlap, picks the fairest by travel time, sets an arrival window.",
    src: "/screens/36-pickSpot.png",
    alt: "Venue screen: Choose 3 you'd meet at, a stack of venue cards",
  },
  {
    n: "11",
    title: "Check-in at the venue",
    you: 'Follow the route, tap "I\'m here" on arrival. "Can\'t make it" available.',
    remet:
      "Check-in locked until inside the geofence; meeting confirmed between the two phones. The only thing Remet counts as a connection.",
    src: "/screens/40-arrived.png",
    alt: "Arrival screen: You showed up, with the arrival window",
  },
  {
    n: "12",
    title: "Afterwards",
    you: 'Three private sliders, cross-paths-again choice, "Something felt unsafe" link.',
    remet:
      'Ratings private. "Something felt unsafe" opens the report flow; a person reviews it. Blocked people never appear to each other again.',
    src: "/screens/43-review.png",
    alt: "Review screen: Munshi's private ledger with three sliders",
  },
];

const dtCls = "font-sans text-[11px] font-semibold uppercase leading-[normal] tracking-[1.5px]";
const ddCls = "m-0 mt-1.5 font-sans text-[12.5px] leading-[1.45] text-body";

function StepItem({ step }: { step: Step }) {
  return (
    <li className="flex flex-col border-t border-[rgba(140,132,114,0.22)] py-3 first:border-t-0">
      <div className="flex items-center gap-3">
        <span className="flex size-11 flex-none items-center justify-center rounded-[14px] bg-bg font-serif text-[20px] font-bold leading-none text-orchid-deep shadow-inset-sm">
          {step.n}
        </span>
        <h3 className="m-0 min-w-0 flex-1 font-sans text-[16.5px] font-semibold leading-[1.2] text-ink">{step.title}</h3>
      </div>
      <div className="mt-3 flex items-start gap-[14px]">
        <dl className="m-0 min-w-0 flex-1">
          <div>
            <dt className={`${dtCls} text-muted`}>You</dt>
            <dd className={ddCls}>{step.you}</dd>
          </div>
          <div className="mt-3 rounded-[14px] bg-surface px-[15px] py-[14px] shadow-inset-sm">
            <dt className={`${dtCls} text-orchid-deep`}>Remet</dt>
            <dd className={ddCls}>{step.remet}</dd>
          </div>
        </dl>
        <figure className="m-0 w-[122px] flex-none">
          <Image
            src={step.src}
            alt={step.alt}
            width={392}
            height={850}
            sizes="116px"
            // Step 01's screen is above the fold and is the page's Largest Contentful Paint, so it loads eagerly.
            loading={step.n === "01" ? "eager" : undefined}
            className="m-[3px] block h-[252px] w-[116px] rounded-[16px] object-cover shadow-[0_0_0_3px_#15110B,5px_6px_12px_rgba(176,162,138,0.55)]"
          />
          <ScreenCaption />
        </figure>
      </div>
    </li>
  );
}

export function PartOneIntro() {
  return (
    <section aria-label="About Remet">
      <Lede className="mt-1">
        Remet lets verified adults who are free right now chat for five minutes, then meet in person at a public partner venue.
      </Lede>
      <ul aria-label="Key facts" className="m-0 mt-4 flex list-none flex-wrap gap-[9px] p-0">
        {facts.map((f) => (
          <li
            key={f.label}
            className="inline-flex items-center gap-[7px] rounded-[11px] bg-bg px-3 py-2 font-sans text-[12px] font-semibold leading-[normal] text-body shadow-inset-sm"
          >
            <span aria-hidden="true" className={`size-[7px] flex-none rounded-full ${f.verified ? "bg-verd" : "bg-muted-deco"}`} />
            {f.label}
          </li>
        ))}
      </ul>
      <nav aria-labelledby="otp-label" className="mt-[22px]">
        <SectionLabel id="otp-label" className="leading-[normal]">
          In this guide
        </SectionLabel>
        <ul className="m-0 mt-[9px] flex list-none flex-wrap gap-[9px] p-0">
          {jumpLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex min-h-11 items-center rounded-chip bg-surface px-4 font-sans text-[13px] font-semibold leading-[normal] text-body no-underline shadow-raise-sm"
              >
                {l.label}
                {l.chevron ? (
                  <span aria-hidden="true" className="ml-2 text-[16px] text-muted-deco">
                    &#8250;
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export function PartOneSteps() {
  return (
    <section id="steps" aria-labelledby="steps-title" className={sectionRule}>
      <Eyebrow>Part one</Eyebrow>
      <SectionTitle id="steps-title">The app, step by step</SectionTitle>
      <Lede>Twelve steps, from the identity check to after you meet. Each one shows what you do, and what Remet does.</Lede>
      <ReviewNote className="leading-[1.4]">swap each prototype screen for the matching TestFlight capture.</ReviewNote>
      <ol className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
        {steps.map((s) => (
          <StepItem key={s.n} step={s} />
        ))}
      </ol>
      <MunshiSlot
        pose="content"
        className="mt-[18px] items-center [&_blockquote]:mb-0 [&_blockquote]:leading-[1.45]"
        quote={"\"Found each other. Now put the phone down, even I know that's the point.\""}
      />
    </section>
  );
}
