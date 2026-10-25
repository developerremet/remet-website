// Line icons copied from the Safety artboard (24px grid, drawn at 22px, currentColor).
import type { ReactNode } from "react";

function Icon({ strokeWidth = 1.7, children }: { strokeWidth?: number; children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const ShieldIcon = () => (
  <Icon strokeWidth={1.8}>
    <path d="M12 3.2l6.4 2.4v5.2c0 4.2-2.7 7.4-6.4 8.6-3.7-1.2-6.4-4.4-6.4-8.6V5.6z" />
    <path d="M12 8.6v3.6" />
    <path d="M12 15.1v.1" />
  </Icon>
);

export const PinIcon = () => (
  <Icon>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </Icon>
);

export const SendIcon = () => (
  <Icon strokeWidth={1.8}>
    <path d="M4.4 11.6L20 5l-6.6 15.6-2.1-6.9z" />
    <path d="M11.3 13.7L20 5" />
  </Icon>
);

export const PersonCheckIcon = () => (
  <Icon>
    <circle cx="11" cy="8" r="3.2" />
    <path d="M4.5 19a6.6 6.6 0 0 1 11.5-3" />
    <path d="M15 13.8l2 2 3.5-3.6" />
  </Icon>
);

export const BlockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="8" />
    <line x1="6.5" y1="6.5" x2="17.5" y2="17.5" />
  </Icon>
);

export const HeartIcon = () => (
  <Icon>
    <path d="M12 20S4 15 4 9.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.2C20 15 12 20 12 20z" />
  </Icon>
);

export const HandIcon = () => (
  <Icon>
    <path d="M7 14V8.6a1.25 1.25 0 0 1 2.5 0" />
    <path d="M9.5 9.6V6a1.25 1.25 0 0 1 2.5 0v3.6" />
    <path d="M12 9.6V6.6a1.25 1.25 0 0 1 2.5 0V13a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 4 14l-.6-1.2a1.25 1.25 0 0 1 2.2-1.2L7 13" />
  </Icon>
);

export const BillIcon = () => (
  <Icon>
    <path d="M4 9h9v10H4z" />
    <path d="M9 5h9v10" />
    <line x1="6.5" y1="12.5" x2="10.5" y2="12.5" />
    <line x1="6.5" y1="15.5" x2="9.5" y2="15.5" />
  </Icon>
);
