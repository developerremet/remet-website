"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { CupIcon } from "./icons";

/**
 * The hand-drawn hero map. The artboard draws it on a 346 x 340 stage (the 390px column); here every
 * position and size is a fraction of the map's own width (cqw), so the drawing scales as one piece
 * at any width and matches the artboard pixel for pixel at 390px.
 */
const STAGE = 346;
const u = (px: number) => `${((px / STAGE) * 100).toFixed(4)}cqw`;

const mapGrid: CSSProperties = {
  background:
    "repeating-linear-gradient(24deg,rgba(140,132,114,0) 0 30px,rgba(140,132,114,.09) 30px 32px),repeating-linear-gradient(116deg,rgba(140,132,114,0) 0 40px,rgba(140,132,114,.07) 40px 42px)",
};
const vignette: CSSProperties = { background: "radial-gradient(125% 95% at 50% 46%,rgba(232,226,214,0) 50%,#E8E2D6 94%)" };

function Zone({ x, y, rgb }: { x: number; y: number; rgb: string }) {
  return (
    <div
      className="absolute rounded-full"
      style={{ left: u(x), top: u(y), width: u(90), height: u(90), background: `radial-gradient(circle,rgba(${rgb},.32),rgba(${rgb},0) 70%)` }}
    />
  );
}

function PersonDisc({ letter, x, y, gradient, discRef }: { letter: string; x: number; y: number; gradient: string; discRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={discRef}
      className="absolute flex items-center justify-center rounded-full font-serif font-semibold leading-[normal] text-[#FDFAF4] shadow-[0_4px_12px_rgba(0,0,0,0.22),inset_0_1.5px_1px_rgba(255,255,255,0.35)]"
      style={{ left: u(x), top: u(y), width: u(48), height: u(48), fontSize: u(17), background: gradient }}
    >
      {letter}
      <span
        className="absolute rounded-full border-solid border-orchid shadow-[0_0_12px_rgba(142,95,168,0.6)]"
        style={{ inset: `calc(${u(6)} * -1)`, borderWidth: u(2.5) }}
      />
      <span
        className="absolute flex items-center justify-center rounded-full bg-verd font-sans font-bold leading-[normal] text-white shadow-[0_0_0_2px_#E8E2D6]"
        style={{ right: `calc(${u(4)} * -1)`, bottom: `calc(${u(4)} * -1)`, width: u(18), height: u(18), fontSize: u(10) }}
      >
        ✓
      </span>
    </div>
  );
}

export function HeroMap({ className }: { className?: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const lRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);
  const cafeRef = useRef<HTMLDivElement>(null);
  // Beams are motion only: the drawn lines below are always there; the light pulse is added on top.
  const [beams, setBeams] = useState(false);
  const [k, setK] = useState(1);

  useEffect(() => {
    const el = mapRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ro = new ResizeObserver(() => setK(el.getBoundingClientRect().width / STAGE));
    ro.observe(el);
    setBeams(true);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={mapRef}
      role="img"
      aria-label="A hand-drawn map of a neighbourhood: two verified people, L and B, each linked by a line of light to a café between them."
      className={`relative aspect-[346/340] w-full overflow-hidden rounded-[24px] bg-bg shadow-inset [container-type:inline-size] ${className ?? ""}`}
    >
      <div aria-hidden="true" className="absolute inset-0" style={mapGrid} />
      <svg
        aria-hidden="true"
        viewBox="0 0 346 340"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="home-beamL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C79BD8" stopOpacity="0" />
            <stop offset=".55" stopColor="#C79BD8" />
            <stop offset="1" stopColor="#8E5FA8" />
          </linearGradient>
          <linearGradient id="home-beamB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C79BD8" stopOpacity="0" />
            <stop offset=".55" stopColor="#C79BD8" />
            <stop offset="1" stopColor="#8E5FA8" />
          </linearGradient>
        </defs>
        <path d="M232 -12 c 32 30, 74 40, 126 32 l 0 92 c -46 12, -92 -4, -126 -34 z" fill="rgba(94,158,128,.15)" stroke="none" />
        <path d="M-12 262 c 36 -12, 74 -6, 100 14 c 20 16, 16 46, -10 62 l -90 10 z" fill="rgba(94,158,128,.12)" stroke="none" />
        <path d="M-12 125.5 C 60 113.5, 140 137.5, 220 121.5 S 330 103.5, 358 109.5" stroke="rgba(176,162,138,.42)" strokeWidth="19" />
        <path d="M-12 124 C 60 112, 140 136, 220 120 S 330 102, 358 108" stroke="#EDE7DC" strokeWidth="16" />
        <path d="M153.5 -12 C 145.5 70, 165.5 150, 151.5 230 S 143.5 320, 155.5 352" stroke="rgba(176,162,138,.42)" strokeWidth="17" />
        <path d="M152 -12 C 144 70, 164 150, 150 230 S 142 320, 154 352" stroke="#EDE7DC" strokeWidth="14" />
        <path d="M-12 293.5 C 80 283.5, 200 309.5, 358 289.5" stroke="rgba(176,162,138,.42)" strokeWidth="13" />
        <path d="M-12 292 C 80 282, 200 308, 358 288" stroke="#EDE7DC" strokeWidth="10" />
        <path d="M273.5 120 C 269.5 190, 285.5 250, 277.5 352" stroke="rgba(176,162,138,.42)" strokeWidth="11" />
        <path d="M272 120 C 268 190, 284 250, 276 352" stroke="#EDE7DC" strokeWidth="8" />
        <path d="M90 100 C 118 132, 140 164, 150 190" stroke="url(#home-beamL)" strokeWidth="3" />
        <path d="M256 184 C 228 188, 206 196, 186 204" stroke="url(#home-beamB)" strokeWidth="3" />
        <circle cx="166" cy="212" r="34" stroke="rgba(142,95,168,.18)" strokeWidth="1.5" />
        <circle cx="166" cy="212" r="52" stroke="rgba(142,95,168,.13)" strokeWidth="1.5" />
      </svg>
      <div aria-hidden="true" className="absolute inset-0" style={vignette} />

      {beams ? (
        <div aria-hidden="true" className="absolute inset-0">
          {/* Magic UI AnimatedBeam: a light pulse along each drawn line, person disc -> café. */}
          <AnimatedBeam
            containerRef={mapRef}
            fromRef={lRef}
            toRef={cafeRef}
            startXOffset={18 * k}
            startYOffset={22 * k}
            endXOffset={-16 * k}
            endYOffset={-22 * k}
            curvature={-49.5 * k}
            pathOpacity={0}
            pathWidth={3 * k}
            gradientStartColor="#FFFFFF"
            gradientStopColor="#C79BD8"
            duration={3.4}
            delay={0.8}
            repeatDelay={1.6}
          />
          <AnimatedBeam
            containerRef={mapRef}
            fromRef={bRef}
            toRef={cafeRef}
            reverse
            startXOffset={-26 * k}
            startYOffset={2 * k}
            endXOffset={20 * k}
            endYOffset={-8 * k}
            curvature={-7 * k}
            pathOpacity={0}
            pathWidth={3 * k}
            gradientStartColor="#FFFFFF"
            gradientStopColor="#C79BD8"
            duration={3.4}
            delay={1.3}
            repeatDelay={1.6}
          />
        </div>
      ) : null}

      <div aria-hidden="true">
        <Zone x={27} y={33} rgb="179,102,112" />
        <Zone x={237} y={137} rgb="27,143,165" />
        <PersonDisc letter="L" x={48} y={54} gradient="linear-gradient(145deg,#CA949B,#B36670)" discRef={lRef} />
        <PersonDisc letter="B" x={258} y={158} gradient="linear-gradient(145deg,#5FB1C0,#1B8FA5)" discRef={bRef} />
        <div
          ref={cafeRef}
          className="absolute flex items-center justify-center rounded-full bg-raised text-orchid-deep shadow-raise-sm"
          style={{ left: u(146), top: u(192), width: u(40), height: u(40) }}
        >
          <span className="block" style={{ width: u(22), height: u(22) }}>
            <CupIcon size="100%" />
          </span>
        </div>
        <div
          className="absolute flex -translate-x-1/2 items-center whitespace-nowrap bg-raised shadow-raise-sm"
          style={{ left: u(166), top: u(250), gap: u(8), padding: `${u(9)} ${u(13)}`, borderRadius: u(14) }}
        >
          <span className="font-sans font-semibold uppercase leading-[normal] text-muted" style={{ fontSize: u(10), letterSpacing: u(1.5) }}>
            Meet at
          </span>
          <span className="font-sans font-semibold leading-[normal] text-ink" style={{ fontSize: u(13) }}>
            a partner café
          </span>
        </div>
        <div className="absolute flex items-end justify-center" style={{ right: u(12), bottom: u(8), width: u(62), height: u(72) }}>
          <Image src="/munshi/side-eye.png" alt="" width={60} height={72} className="block h-auto max-h-full w-auto max-w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
