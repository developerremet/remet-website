import type { Metadata } from "next";
import { InnerHeader, SiteFooter } from "@/components/site/chrome";
import { Button, MunshiSlot, PageColumn } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <InnerHeader title="Page not found" />
      <PageColumn>
        <p className="m-0 mt-2 font-sans text-[15px] leading-[1.55] text-body">This page does not exist. It may have moved when the site was rebuilt.</p>
        <MunshiSlot pose="question" quote="Nothing here. I checked twice." className="mt-6" />
        <Button href="/" className="mt-6">
          Back to home
        </Button>
      </PageColumn>
      <SiteFooter />
    </>
  );
}
