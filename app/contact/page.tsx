import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { CounselSlot, MunshiSlot, PageColumn, Row, SectionLabel } from "@/components/ui";
import { mailto, site } from "@/lib/site";
import { GroupNote, OfficeAddress, OfficerCard, UnsafeNow } from "@/components/pages/contact/parts";

export const metadata: Metadata = {
  title: "Contact and grievance",
  description: `Write to Remet support or reach the Grievance Officer. We acknowledge a grievance within ${site.acknowledgeWithin} and resolve it within ${site.resolveWithin}.`,
  alternates: { canonical: "/contact" },
};

const label = "leading-[normal]";
// Row's title inherits line-height; the design's rows use the font shorthand (line-height: normal).
const row = "leading-[normal]";

export default function ContactPage() {
  return (
    <>
      <InnerHeader title="Contact and grievance" />
      <PageColumn>
        <p className="m-0 mt-1 font-sans text-[13.5px] leading-[1.55] text-body">Write to us, or reach the Grievance Officer.</p>

        <UnsafeNow />

        <section aria-labelledby="write-title">
          <SectionLabel id="write-title" className={`mt-4 ${label}`}>
            Write to us
          </SectionLabel>
          <ul className="m-0 mt-[9px] flex list-none flex-col gap-2 p-0">
            <li>
              <Row
                href={mailto("Remet · Something is broken")}
                title="Something is broken"
                subtitle="Bugs, payments, a screen that won’t load"
                className={row}
              />
            </li>
            <li>
              <Row
                href={mailto(site.grievanceSubject)}
                title="A complaint about Remet"
                subtitle="Goes to the Grievance Officer below"
                className={row}
              />
            </li>
            <li>
              <Row
                href={mailto("Remet · Data request")}
                title="Ask about your data"
                subtitle="Access, correction or erasure"
                className={row}
              />
            </li>
          </ul>
          <GroupNote>Each one opens an email to {site.email} with the subject filled in.</GroupNote>
        </section>

        <section aria-labelledby="officer-title">
          <SectionLabel id="officer-title" className={`mt-[18px] ${label}`}>
            Grievance Officer
          </SectionLabel>
          <OfficerCard />
          <GroupNote>
            Write to {site.email} with the subject &quot;{site.grievanceSubject}&quot;. We acknowledge within {site.acknowledgeWithin} and
            resolve within {site.resolveWithin}.
          </GroupNote>

          <MunshiSlot
            pose="papers"
            className="mt-[14px] md:max-w-[440px]"
            quote={<>&quot;Every complaint lands on my desk. Not a form that goes nowhere. Say it plainly and I&apos;ll answer.&quot;</>}
          />
        </section>

        <section aria-labelledby="office-title" className="mt-[22px] border-t border-hairline pt-5">
          <SectionLabel id="office-title" className={label}>
            Registered office
          </SectionLabel>
          <OfficeAddress />
          {/* The design sets the label at line-height normal and the body at 1.5. */}
          <CounselSlot label="Counsel to draft" className="mt-3 [&>p:first-child]:leading-[normal] [&>p:last-child]:leading-[1.5]">
            Anything else the law requires this page to publish, in counsel&apos;s wording
          </CounselSlot>
        </section>
      </PageColumn>
      <SiteFooter />
    </>
  );
}
