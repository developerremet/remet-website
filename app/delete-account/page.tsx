import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { Button, MunshiSlot, PageColumn, ReviewNote, SectionLabel } from "@/components/ui";
import { mailto, site } from "@/lib/site";
import {
  ErasedItem,
  InsetWell,
  Lede,
  NoticeCard,
  Section,
  SectionTitle,
  SettingsMock,
  Step,
} from "@/components/pages/delete-account/parts";

export const metadata: Metadata = {
  title: "Delete account",
  description: "You'll disappear from the map the moment you confirm.",
  alternates: { canonical: "/delete-account" },
};

const label = "leading-[normal]";

export default function DeleteAccountPage() {
  return (
    <>
      <InnerHeader title="Delete account" />
      <PageColumn>
        <Lede className="mt-1">
          You&apos;ll disappear from the map the moment you confirm. Nobody can see you or wave at you again.
        </Lede>

        <NoticeCard id="grace-label" title="30 days to change your mind">
          Sign in any time in the next 30 days and everything comes back. After that it&apos;s erased for good, and even I
          can&apos;t undo it.
        </NoticeCard>

        <Section labelledBy="erased-label">
          <SectionLabel id="erased-label" variant="content" className={label}>
            Erased permanently
          </SectionLabel>
          <ul role="list" className="m-0 mt-3 flex list-none flex-col gap-[9px] p-0">
            <ErasedItem>Your handle, photo and interests</ErasedItem>
            <ErasedItem>Every chat, wave and open door</ErasedItem>
            <ErasedItem>Your place on the map, and your reach</ErasedItem>
            <ErasedItem>Everything Munshi noted about you</ErasedItem>
          </ul>
        </Section>

        <Section labelledBy="kept-label">
          <SectionLabel id="kept-label" variant="content" className={label}>
            Kept, because the law says so
          </SectionLabel>
          <InsetWell>
            Payment receipts, and any safety report filed about you. Your Aadhaar number was never stored, so there&apos;s
            nothing there to erase.
          </InsetWell>
          <ReviewNote className="leading-[1.4]">counsel to confirm what is kept, and the Aadhaar statement above.</ReviewNote>

          <MunshiSlot
            pose="melancholy"
            className="mt-6 gap-[13px] md:max-w-[440px] [&>blockquote]:mb-[6px] [&>blockquote]:text-pretty"
            quote={
              <>
                &quot;I&apos;ll leave your page in the ledger open for a month. After that I close it, and I&nbsp;don&apos;t
                reopen closed pages.&quot;
              </>
            }
          />
        </Section>

        <Section id="in-the-app" labelledBy="app-title">
          <SectionTitle id="app-title">Delete it in the app</SectionTitle>
          <Lede className="mt-[9px]">
            Settings &#8594; Delete my account. The app shows you everything above before you confirm.
          </Lede>
          <ol role="list" className="m-0 mt-4 flex list-none flex-col gap-[10px] p-0">
            <Step n={1} title="Open Settings">
              On the map, tap the gear at the top of the screen.
            </Step>
            <Step n={2} title={<>Tap &#8220;Delete my account&#8221;</>}>
              It&apos;s the last row in Settings, under Legal &amp; help.
            </Step>
            <Step n={3} title="Confirm">
              Read what&apos;s erased and what&apos;s kept, then tap &#8220;Delete my account&#8221;.
              &#8220;Keep&nbsp;my&nbsp;account&#8221; takes you back.
            </Step>
          </ol>
          <SettingsMock />
        </Section>

        <Section id="no-app" labelledBy="email-title">
          <SectionTitle id="email-title">No longer have the app?</SectionTitle>
          <Lede className="mt-[9px]">
            Write to <strong className="font-semibold text-ink">{site.email}</strong> with the subject
            &#8220;Delete&nbsp;my&nbsp;account&#8221;.
          </Lede>
          <Button
            variant="surface"
            href={mailto("Delete my account")}
            className="mt-4 h-[50px] min-h-[50px] text-[14.5px] leading-[normal] text-body md:max-w-[360px]"
          >
            Write to {site.email}
          </Button>
          <ReviewNote className="mt-[10px] leading-[1.4]">how we verify it&apos;s you.</ReviewNote>
        </Section>
      </PageColumn>
      <SiteFooter />
    </>
  );
}
