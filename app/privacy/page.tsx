import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { CounselSlot, PageColumn, ReviewNote, SectionLabel, TintCard, VerifiedTick } from "@/components/ui";
import { mailto, site } from "@/lib/site";
import { showReviewNotes } from "@/lib/review";
import {
  CounselRowSlot,
  InsetNote,
  LegalRow,
  Section,
  SummaryBody,
  SummaryHead,
} from "@/components/pages/privacy/parts";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Remet handles your data: what we hold, what we never hold, location, how long we keep it, and your rights under the DPDP Act 2023.",
  alternates: { canonical: "/privacy" },
};

const label = "leading-[normal]";

export default function PrivacyPage() {
  return (
    <>
      <InnerHeader title="Privacy policy" />
      <PageColumn>
        <p className="m-0 mt-1 font-sans text-[13.5px] leading-[1.55] text-body md:max-w-[62ch]">
          All of it, in plain language, any time you want to read it.
        </p>

        <Section labelledBy="summary-label">
          <SectionLabel id="summary-label" variant="content" className={label}>
            Plain-language summary
          </SectionLabel>

          <SummaryHead first>What we hold</SummaryHead>
          <SummaryBody>
            Your handle, your one photo, your interests, your phone number, and the fact that UIDAI confirmed you are one
            real adult. Your real name, held privately for safety and never shown to another user before you agree to meet.
          </SummaryBody>

          <SummaryHead>What we never hold</SummaryHead>
          <SummaryBody>
            Your Aadhaar number. Photos you attach to a wave are stripped of location data before they are stored.
          </SummaryBody>
          <ReviewNote className="leading-[1.4]">
            the app&apos;s Aadhaar notice says name, date of birth and gender come back from UIDAI and the name is kept;
            counsel to confirm the &apos;What we hold&apos; list against it.
          </ReviewNote>

          <SummaryHead>Location</SummaryHead>
          <SummaryBody>
            Used only while you are live, and only to place you in a coarse area. Other people never see an exact distance
            to you. Stop being live and we stop reading it.
          </SummaryBody>

          <SummaryHead>How long</SummaryHead>
          <SummaryBody>
            Chats and waves clear as the match perishes. Delete your account and everything goes within {site.deletionGraceDays} days, except
            payment receipts and safety reports, which the law requires us to keep.
          </SummaryBody>

          <SummaryHead>Your rights</SummaryHead>
          <SummaryBody>
            Under the Digital Personal Data Protection Act 2023 you can ask for a copy of your data, ask us to correct it, or
            ask us to erase it. Write to{" "}
            <a href={mailto()} className="font-semibold text-orchid-deep no-underline hover:text-ink">
              {site.email}
            </a>{" "}
            and you will hear back within the statutory window.
          </SummaryBody>

          {/* Production leaves out the full-policy section below (see the showReviewNotes guard), so there the
              note must not point "below". When counsel's text lands, keep only the first wording. */}
          <InsetNote className="mt-[22px]">
            {showReviewNotes
              ? "This is the plain-language summary. The full legal text below is being finalised by our counsel."
              : "This is the plain-language summary. The full legal text will be published here once our counsel has finalised it."}
          </InsetNote>
        </Section>

        {/* Holds only counsel's placeholder for now, so production leaves the empty section out entirely.
            When counsel's text lands, replace the CounselSlot with it and drop the showReviewNotes guard. */}
        {showReviewNotes ? (
          <Section labelledBy="full-label">
            <SectionLabel id="full-label" variant="content" className={label}>
              Full privacy policy
            </SectionLabel>
            <CounselSlot label="Counsel to draft" className="mt-3">
              Full privacy policy (counsel&apos;s text replaces this)
            </CounselSlot>
          </Section>
        ) : null}

        <Section labelledBy="legal-label">
          <SectionLabel id="legal-label" variant="content" className={label}>
            Legal &amp; privacy
          </SectionLabel>
          <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
            <LegalRow href="/terms" title="Terms of use" subtitle="The agreement between you and Remet" />
            <CounselRowSlot title="Aadhaar consent notice" subtitle="Exactly what UIDAI was asked, and what came back">
              The notice&apos;s final text, in counsel&apos;s wording
            </CounselRowSlot>
            <LegalRow href="/safety" title="Community standards" subtitle="The rules Munshi actually enforces" />
            <LegalRow href="/contact" title="Request your data" subtitle="Get a copy, or ask us to correct it" />
          </ul>

          <TintCard
            tone="verified"
            className="mt-5"
            icon={<VerifiedTick size={20} />}
            title="Your Aadhaar number is not stored"
          >
            <p className="m-0 md:max-w-[62ch]">
              It was used once, with your consent, to confirm you&apos;re one real adult. UIDAI returned a yes. We kept the
              yes, not the number.
            </p>
          </TintCard>
          <ReviewNote className="leading-[1.4]">counsel to confirm the Aadhaar statements on this page.</ReviewNote>
        </Section>
      </PageColumn>
      <SiteFooter />
    </>
  );
}
