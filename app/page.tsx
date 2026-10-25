import type { Metadata } from "next";
import { HomeHeader, SiteFooter } from "@/components/site/chrome";
import { Hero } from "@/components/pages/home/hero";
import { Moments } from "@/components/pages/home/moments";
import { Join, MeetMunshi, Places, Safety, Verified } from "@/components/pages/home/sections";

export const metadata: Metadata = {
  description: "See who is out and open right now, talk for five minutes, then meet at a public café or studio that is fair to you both.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <Hero />
        <Moments />
        <Verified />
        <Places />
        <MeetMunshi />
        <Safety />
        <Join />
      </main>
      <SiteFooter wide />
    </>
  );
}
