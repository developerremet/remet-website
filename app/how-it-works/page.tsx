import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { PageColumn } from "@/components/ui";
import { PartOneIntro, PartOneSteps } from "@/components/pages/how-it-works/part-one";
import { PartTwo } from "@/components/pages/how-it-works/part-two";

export const metadata: Metadata = {
  title: "How it works",
  description: "Remet lets verified adults who are free right now chat for five minutes, then meet in person at a public partner venue.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <InnerHeader title="How it works" />
      <PageColumn className="pb-[34px]">
        <PartOneIntro />
        <PartOneSteps />
        <PartTwo />
      </PageColumn>
      <SiteFooter />
    </>
  );
}
