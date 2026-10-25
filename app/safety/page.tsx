import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { Chevron, CounselSlot, IconTile, MunshiSlot, PageColumn, ReviewNote, Row, SectionLabel } from "@/components/ui";
import { mailto, site } from "@/lib/site";
import {
  BillIcon,
  BlockIcon,
  HandIcon,
  HeartIcon,
  PersonCheckIcon,
  PinIcon,
  SendIcon,
  ShieldIcon,
} from "@/components/pages/safety/icons";
import {
  IconLineCard,
  IconStepCard,
  Lead,
  ReportMock,
  Section,
  SectionTitle,
  UnsafeNow,
} from "@/components/pages/safety/parts";

export const metadata: Metadata = {
  title: "Safety",
  description: "What to do if you feel unsafe, how to report someone, and the six rules every member agrees to.",
  alternates: { canonical: "/safety" },
};

const listCls = "m-0 mt-4 flex list-none flex-col gap-2.5 p-0";

export default function SafetyPage() {
  return (
    <>
      <InnerHeader title="Safety" />
      <PageColumn className="pb-[34px]">
        <p className="m-0 mt-1 font-sans text-[13.5px] leading-[1.55] text-body">
          What to do if you feel unsafe, how to report someone, and the six rules every member agrees to.
        </p>

        <UnsafeNow />

        <Section id="report" labelledBy="report-title">
          <SectionTitle id="report-title">How to report someone</SectionTitle>
          <Lead>The person you report is never told you said anything.</Lead>
          <ul className={listCls}>
            <IconStepCard icon={<ShieldIcon />} title="During a chat">
              Tap the shield beside the chat clock. It opens report and block. The chat closes the moment you send.
            </IconStepCard>
            <IconStepCard icon={<PinIcon />} title="After a meeting">
              On Munshi&apos;s private ledger, tap &ldquo;Something felt unsafe&rdquo;. It opens the same private report.
            </IconStepCard>
            <li>
              <a
                href={mailto()}
                className="flex items-center gap-[14px] rounded-card bg-surface px-[15px] py-[14px] no-underline shadow-raise-sm"
              >
                <IconTile color="var(--color-orchid-deep)">
                  <SendIcon />
                </IconTile>
                <span className="block min-w-0 flex-1">
                  <span className="block font-sans text-[16.5px] font-semibold leading-[normal] text-ink">Any time, write to us</span>
                  <span className="mt-[3px] block font-sans text-[13px] font-semibold leading-[normal] text-orchid-deep">{site.email}</span>
                </span>
                <Chevron />
              </a>
            </li>
          </ul>
        </Section>

        <Section labelledBy="looks-title">
          <SectionTitle id="looks-title">What reporting looks like</SectionTitle>
          <Lead>This is the private report in the app. Pick what happened, as many as fit, then send.</Lead>
          <ReportMock />
        </Section>

        <Section labelledBy="after-title">
          <SectionTitle id="after-title">After you report</SectionTitle>
          <ul className={listCls}>
            <IconLineCard icon={<PersonCheckIcon />}>A person on the Remet team reviews every report.</IconLineCard>
            <IconLineCard icon={<BlockIcon />}>
              Blocking is immediate and permanent. Blocked people never appear to each other again.
            </IconLineCard>
          </ul>
          <ReviewNote className="mt-[10px] leading-[1.4]">
            check against the current build that a person reviews every report and that blocking is immediate and permanent.
          </ReviewNote>
          <CounselSlot label="Counsel to draft" className="mt-[14px] leading-[normal]">
            What happens after a report: the enforcement steps
          </CounselSlot>
        </Section>

        <Section id="rules" labelledBy="rules-title">
          <SectionLabel as="p" variant="content" tone="orchid" className="leading-[normal] tracking-[2px]">
            Community standards
          </SectionLabel>
          <h2 id="rules-title" className="m-0 mt-2 font-serif text-[28px] font-medium leading-[1.1] text-ink">
            Munshi&apos;s Golden Rules.
          </h2>
          <p className="m-0 mt-[9px] font-sans text-[13.5px] leading-[1.5] text-body">
            Six things every member agrees to. He&nbsp;enforces all six.
          </p>
          <ol className={listCls}>
            <IconLineCard icon={<HeartIcon />}>Treat everyone with respect.</IconLineCard>
            <IconLineCard icon={<PersonCheckIcon />}>Be the real you, the same person as your photos.</IconLineCard>
            <IconLineCard icon={<BlockIcon />}>No harassment, no pressure. Ever.</IconLineCard>
            <IconLineCard icon={<HandIcon />}>When someone says no to anything, it is over.</IconLineCard>
            <IconLineCard icon={<PinIcon />}>First meeting in public, and tell a friend where you will be.</IconLineCard>
            <IconLineCard icon={<BillIcon />}>Split the bill, or take turns. Nobody owes anybody here.</IconLineCard>
          </ol>
          <MunshiSlot
            pose="stern"
            className="mt-3 items-center gap-[13px] [&>blockquote]:mb-0 [&>blockquote]:leading-[1.45]"
            quote={<>&quot;Get banned once and you&apos;re done. I&nbsp;don&apos;t forget a face, or the one behind it.&quot;</>}
          />
          <CounselSlot label="Counsel to draft" className="mt-[14px] leading-[normal]">
            Full community guidelines
          </CounselSlot>
        </Section>

        <Section labelledBy="related-title">
          <SectionLabel id="related-title" className="leading-[normal]">Related</SectionLabel>
          <ul className="m-0 mt-[9px] flex list-none flex-col gap-2 p-0">
            <li>
              <Row className="leading-[normal]" href="/contact" title="Contact and grievance" subtitle="Write to us, or reach the Grievance Officer" />
            </li>
            <li>
              <Row className="leading-[normal]" href="/terms" title="Terms of use" subtitle="The agreement between you and Remet" />
            </li>
          </ul>
        </Section>
      </PageColumn>
      <SiteFooter />
    </>
  );
}
