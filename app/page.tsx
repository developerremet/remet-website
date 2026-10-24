import { HomeHeader, SiteFooter } from "@/components/site/chrome";
import { WaitlistForm } from "@/components/site/waitlist-form";
import { MunshiSlot, Row, TintCard, SectionLabel } from "@/components/ui";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="mx-auto max-w-[720px] px-[22px] py-10">
        <SectionLabel variant="content" tone="orchid">Foundation check</SectionLabel>
        <h1 className="m-0 mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.5px]">Verified people nearby.</h1>
        <div className="mt-6 flex flex-col gap-2"><Row href="/privacy" title="Privacy policy" subtitle="What we collect, why, and for how long" /></div>
        <TintCard tone="verified" title="Your Aadhaar number is not stored" className="mt-4">It was used once, with your consent.</TintCard>
        <MunshiSlot pose="papers" quote="“Every complaint lands on my desk.”" className="mt-4" />
        <WaitlistForm />
      </main>
      <SiteFooter />
    </>
  );
}
