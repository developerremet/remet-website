import { TextAnimate } from "@/components/magicui/text-animate";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { HeroMap } from "./hero-map";
import { Eyebrow, frame } from "./shared";

/** Hero: eyebrow, headline, lede, the two CTAs and the hand-drawn map. Text left / map right from 1024px. */
export function Hero() {
  return (
    <section className={cn(frame, "pt-[34px] md:pt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-16")}>
      <div>
        <Reveal>
          <Eyebrow>Opening in Indore</Eyebrow>
        </Reveal>
        <div data-reveal-text="">
          <TextAnimate
            as="h1"
            by="word"
            animation="blurIn"
            once
            segmentClassName="inline whitespace-normal"
            className="m-0 mt-[10px] font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.5px] text-ink lg:text-[54px]"
          >
            Verified people nearby. A real place to meet.
          </TextAnimate>
        </div>
        <Reveal delay={0.2}>
          <p className="m-0 mt-3.5 max-w-[480px] font-sans text-[14px] leading-[1.55] text-body lg:text-[15.5px]">
            See who is out and open right now, talk for five minutes, then meet at a public café or studio that is fair to you both.
          </p>
          <div className="mt-[22px] flex gap-[11px] lg:max-w-[440px]">
            <Button href="#join" className="h-[54px] min-h-0 w-auto flex-[1.3] rounded-[17px] px-0 text-[15px]">
              Join the waitlist
            </Button>
            <Button href="/how-it-works" variant="surface" className="h-[54px] min-h-0 w-auto flex-1 rounded-[17px] px-0 text-[14.5px] text-body">
              How it works
            </Button>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.3} className="mt-[26px] lg:mt-0">
        <HeroMap />
      </Reveal>
    </section>
  );
}
