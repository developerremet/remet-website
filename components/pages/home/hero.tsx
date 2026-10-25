import { Fragment } from "react";
import { Button } from "@/components/ui";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HeroMap } from "./hero-map";
import { Eyebrow, frame, rise, riseAt } from "./shared";

const headline = "Verified people nearby. A real place to meet.".split(" ");

/**
 * Entrance in reading order: the eyebrow first, then the headline word by word (40ms apart), then the lede,
 * CTAs and map, 60ms apart.
 */
const WORD = 40;
const STEP = 60;
const wordsAt = STEP;
const afterWords = wordsAt + headline.length * WORD;
/** When the hero's last block (the map) starts rising; the next block on the page follows from here. */
export const heroMapAt = afterWords + 3 * STEP;

/** Hero: eyebrow, headline, lede, the two CTAs and the hand-drawn map. Text left / map right from 1024px. */
export function Hero() {
  return (
    <section className={cn(frame, "pt-[34px] md:pt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-16")}>
      <div>
        <div className={rise} style={riseAt(0)}>
          <Eyebrow>{`Opening in ${site.city}`}</Eyebrow>
        </div>
        {/* One span per word, with the spaces as plain text between them: wrapping and the read-out sentence stay as written. */}
        <h1 className="m-0 mt-[10px] font-serif text-[40px] font-medium leading-[1.05] tracking-[-0.5px] text-ink lg:text-[54px]">
          {headline.map((word, i) => (
            <Fragment key={i}>
              {i ? " " : null}
              <span className={cn("inline-block", rise)} style={riseAt(wordsAt + i * WORD)}>
                {word}
              </span>
            </Fragment>
          ))}
        </h1>
        <p className={cn("m-0 mt-3.5 max-w-[480px] font-sans text-[14px] leading-[1.55] text-body lg:text-[15.5px]", rise)} style={riseAt(afterWords + STEP)}>
          See who is out and open right now, talk for five minutes, then meet at a public café or studio that is fair to you both.
        </p>
        <div className={cn("mt-[22px] flex gap-[11px] lg:max-w-[440px]", rise)} style={riseAt(afterWords + 2 * STEP)}>
          <Button href="#join" className="h-[54px] min-h-0 w-auto flex-[1.3] rounded-[17px] px-0 text-[15px]">
            Join the waitlist
          </Button>
          <Button href="/how-it-works" variant="surface" className="h-[54px] min-h-0 w-auto flex-1 rounded-[17px] px-0 text-[14.5px] text-body">
            How it works
          </Button>
        </div>
      </div>
      <div className={cn("mt-[26px] lg:mt-0", rise)} style={riseAt(heroMapAt)}>
        <HeroMap />
      </div>
    </section>
  );
}
