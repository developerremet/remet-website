// Inline icons copied from the Main artboard. All decorative (their wrappers are aria-hidden).
import type { ReactNode } from "react";

function Stroke({ size, strokeWidth = 1.7, children }: { size: number | string; strokeWidth?: number; children: ReactNode }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const CupIcon = ({ size = 24 }: { size?: number | string }) => (
  <Stroke size={size}>
    <path d="M5 9h11v3a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
    <path d="M16 10h2.3a2 2 0 0 1 0 4H16" />
    <path d="M8 3.5c0 1-1 1.3-1 2.5M11 3.5c0 1 1 1.3 1 2.5" />
  </Stroke>
);

export const PeopleIcon = () => (
  <Stroke size={26}>
    <circle cx="8" cy="8" r="2.6" />
    <circle cx="16" cy="9" r="2.2" />
    <path d="M3.5 18a4.5 4.5 0 0 1 9 0" />
    <path d="M13.5 18a4 4 0 0 1 7 0" />
  </Stroke>
);

export const BubbleIcon = () => (
  <Stroke size={26}>
    <path d="M4 6h16v10H9l-4 3v-3H4z" />
  </Stroke>
);

export const HeartIcon = () => (
  <Stroke size={26}>
    <path d="M12 20S4 15 4 9.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.2C20 15 12 20 12 20z" />
  </Stroke>
);

export const SendIcon = () => (
  <Stroke size={19} strokeWidth={1.9}>
    <path d="M4.4 11.6L20 5l-6.6 15.6-2.1-6.9z" />
    <path d="M11.3 13.7L20 5" />
  </Stroke>
);

export const MoonIcon = () => (
  <Stroke size={23}>
    <path d="M20 14.5A7.5 7.5 0 1 1 10.2 4.2 5.8 5.8 0 0 0 20 14.5z" />
  </Stroke>
);

export const DoorIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={26} height={26} fill="currentColor">
    <path d="M3.7 1.6H19.5V22.6H18V3.1H5.2V22.6H3.7Z" />
    <rect x="0.9" y="22.6" width="20.8" height="0.95" rx="0.47" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.7 3.7 8.9 5.9V21L17.3 21.7ZM10.3 12.4a.66.66 0 1 0 0 1.32.66.66 0 0 0 0-1.32Z" />
  </svg>
);

/* Places */
export const CinemaIcon = () => (
  <Stroke size={24}>
    <path d="M3.5 6h17v12h-17z" />
    <path d="M10 9.5l5 2.5-5 2.5z" />
  </Stroke>
);

export const GamingIcon = () => (
  <Stroke size={24}>
    <path d="M7 5h2v2h6V5h2v2h2v2h2v6h-2v2h-2v3h-2v-3h-2v3h-2v-3H9v3H7v-3H5v-2H3V9h2V7h2z" />
    <path d="M9 10h2v2H9zM13 10h2v2h-2z" />
  </Stroke>
);

export const ComedyIcon = () => (
  <Stroke size={24}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M8.5 14.2c1 1.7 2.2 2.4 3.5 2.4s2.5-.7 3.5-2.4" />
    <path d="M9.3 9.5v1M13.6 10h2.4" />
  </Stroke>
);

export const MusicIcon = () => (
  <Stroke size={24}>
    <circle cx="7.5" cy="17" r="2.6" />
    <circle cx="17.5" cy="15" r="2.6" />
    <path d="M10.1 17V6.2l10-2.2V15" />
  </Stroke>
);

export const BrushIcon = () => (
  <Stroke size={24}>
    <path d="M19.5 4.5c-3.5 1-6.5 3.7-9 7.5l2 2c3.8-2.5 6.5-5.5 7.5-9z" />
    <path d="M10.5 12c-2.5-.3-4.5 1.5-4.5 4 0 1.5-.8 2.5-2 3 3.8 1 7-1 7.5-4.5z" />
  </Stroke>
);

export const BooksIcon = () => (
  <Stroke size={24}>
    <path d="M4 17.5h14v3H4zM5 14h14v3.5H5zM4.5 10.5h13V14h-13z" />
    <path d="M6 7h11v3.5H6z" />
  </Stroke>
);

export const PickleballIcon = () => (
  <Stroke size={24}>
    <circle cx="12" cy="15" r="5.5" />
    <path d="M8.5 10.5 6 3.5h4l2 5 2-5h4l-2.5 7" />
    <path d="M12 13v4" />
  </Stroke>
);

/* Safety */
export const ShieldIcon = () => (
  <Stroke size={22}>
    <path d="M12 3.2l6.4 2.4v5.2c0 4.2-2.7 7.4-6.4 8.6-3.7-1.2-6.4-4.4-6.4-8.6V5.6z" />
    <path d="M12 8.6v3.6" />
    <path d="M12 15.1v.1" />
  </Stroke>
);

export const PinIcon = () => (
  <Stroke size={22}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </Stroke>
);

export const BanIcon = () => (
  <Stroke size={22}>
    <circle cx="12" cy="12" r="8" />
    <line x1="6.5" y1="6.5" x2="17.5" y2="17.5" />
  </Stroke>
);
