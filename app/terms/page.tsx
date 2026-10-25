import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { PageColumn, ReviewNote, SectionLabel } from "@/components/ui";
import { showReviewNotes } from "@/lib/review";
import { site } from "@/lib/site";
import {
  Clause,
  ClauseHead,
  InsetNote,
  LegalRow,
  Section,
  SectionTitle,
  SummaryBody,
  TocLink,
} from "@/components/pages/terms/parts";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Remet's terms of use in plain language: who can join, what you agree to, when we can remove an account, paying venues, and what we don't promise.",
  alternates: { canonical: "/terms" },
};

// Counsel's full text is not in yet. Its stand-in slots are hidden on production, which would leave
// "Full terms" as bare headings, so production leaves out that section and the "On this page" list
// (which would hold only the summary, the section directly under it) until the text replaces the slots
// below. Then set this to true.
const showFullTerms = showReviewNotes;

const summaryEntry = { href: "#summary", label: "Plain-language summary" };

const fullTermsEntries = [
  { href: "#eligibility", label: "Eligibility" },
  { href: "#using", label: "Using Remet" },
  { href: "#meeting", label: "Meeting in person" },
  { href: "#enforcement", label: "Enforcement and account removal" },
  { href: "#ending", label: "Ending your account" },
  { href: "#content", label: "Our content" },
  { href: "#liability", label: "Liability" },
  { href: "#law", label: "Governing law" },
];

const contents = [summaryEntry, ...fullTermsEntries];

export default function TermsPage() {
  return (
    <>
      <InnerHeader title="Terms of use" />
      <PageColumn className="pb-[34px]">
        <p className="m-0 mt-1 font-sans text-[13.5px] leading-[1.55] text-body">The agreement between you and Remet.</p>

        {showFullTerms && (
          <nav aria-labelledby="toc-title" className="mt-[18px]">
            <SectionLabel id="toc-title" className="leading-[normal]">
              On this page
            </SectionLabel>
            <ul className="m-0 mt-[9px] list-none rounded-row bg-surface px-[15px] py-1 shadow-inset-sm">
              {contents.map((item, i) => (
                <TocLink key={item.href} href={item.href} first={i === 0}>
                  {item.label}
                </TocLink>
              ))}
            </ul>
          </nav>
        )}

        <Section id="summary" labelledBy="summary-title">
          <SectionTitle id="summary-title">Plain-language summary</SectionTitle>
          <p className="m-0 mt-[9px] font-sans text-[13.5px] leading-[1.55] text-body">
            The same summary is in the app, under Settings, Legal &amp; privacy, Terms of use.
          </p>
          <div className="mt-[18px]">
            <ClauseHead className="mb-4">Who can be here</ClauseHead>
            <SummaryBody>
              Adults, eighteen and over, verified once against Aadhaar. One account per person. Accounts cannot be bought,
              sold or shared.
            </SummaryBody>
            <ClauseHead className="mb-4">What you agree to</ClauseHead>
            <SummaryBody>
              Show up when you say you will. Meet in public. Treat the person in front of you like a person. Do not
              impersonate anyone, and do not use Remet to sell, solicit or recruit.
            </SummaryBody>
            <ClauseHead className="mb-4">What we can do</ClauseHead>
            <SummaryBody>
              Reduce your reach, or remove you entirely, if you make people unsafe. Serious cases are permanent, and because
              identity is verified once, a new account will not get you back in.
            </SummaryBody>
            <ClauseHead className="mb-4">Money</ClauseHead>
            <SummaryBody>
              When you pay a venue bill through Remet you are paying that venue for a real-world service. Remet keeps a
              commission from the venue, never a fee added to your bill. Disputes go to the venue first, and to us if that
              fails.
            </SummaryBody>
            <ClauseHead className="mb-4">What we do not promise</ClauseHead>
            <SummaryBody>
              That anyone will wave back, that a meet will go well, or that a venue will have a table. Remet introduces
              people. The rest is yours.
            </SummaryBody>
          </div>
          {/* Production leaves out "Full terms" (showFullTerms), so there the note must not point "below". */}
          <InsetNote className="mt-[6px]">
            {showFullTerms
              ? "This is the plain-language summary. The full legal text below is being finalised by our counsel."
              : "This is the plain-language summary. The full legal text will be published here once our counsel has finalised it."}
          </InsetNote>
          <ReviewNote className="mt-[10px]">
            this summary is copied from the app&apos;s Terms of use screen. Check that ‘reduce your reach’ and permanent
            removal match what the build enforces (control 09), that venue payments through Remet and the commission model
            are live, and that it all matches counsel&apos;s final terms.
          </ReviewNote>
        </Section>

        {/* Preview only until counsel's text replaces the slots (see showFullTerms above). */}
        {showFullTerms && (
          <Section labelledBy="full-title">
            <SectionTitle id="full-title">Full terms</SectionTitle>
            <Clause
              id="eligibility"
              first
              title="Eligibility"
              slot="Who can use Remet: adults 18 and over, one verified identity per account"
            />
            <Clause id="using" title="Using Remet" slot="What you agree to when you use the app and this site" />
            <Clause
              id="meeting"
              title="Meeting in person"
              slot="Terms that apply when you meet someone in person at a partner venue"
            />
            <Clause
              id="enforcement"
              title="Enforcement and account removal"
              slot="How reports are acted on, and when an account can be limited or removed"
            />
            <Clause
              id="ending"
              title="Ending your account"
              slot="How you can close your account, and what happens to it afterwards"
            >
              <LegalRow
                href="/delete-account"
                title="Delete account"
                subtitle="How to do it, and what is kept"
                className="mt-[10px]"
              />
            </Clause>
            <Clause
              id="content"
              title="Our content"
              slot="Ownership and use of the Remet name, Munshi, the artwork and the copy"
            />
            <Clause id="liability" title="Liability" slot="What Remet is and is not liable for" />
            <Clause id="law" title="Governing law" slot={`Governing law and jurisdiction: ${site.city}, Madhya Pradesh`} />
          </Section>
        )}

        <Section labelledBy="related-title">
          <SectionLabel id="related-title" className="leading-[normal]">
            Related
          </SectionLabel>
          <ul className="m-0 mt-[9px] flex list-none flex-col gap-2 p-0">
            <li>
              <LegalRow href="/privacy" title="Privacy policy" subtitle="What we collect, why, and for how long" />
            </li>
            <li>
              <LegalRow href="/safety" title="Safety" subtitle="Reporting, blocking and Munshi's Golden Rules" />
            </li>
            <li>
              <LegalRow href="/contact" title="Contact and grievance" subtitle="Write to us, or reach the Grievance Officer" />
            </li>
          </ul>
        </Section>
      </PageColumn>
      <SiteFooter />
    </>
  );
}
