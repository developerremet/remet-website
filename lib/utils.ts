import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// The theme tokens from app/globals.css, so that e.g. className="rounded-[17px]" replaces a component's rounded-cta
// instead of both classes staying on the element.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      radius: ["row", "card", "cta", "tile", "well", "chip"],
      shadow: ["raise", "raise-sm", "inset", "inset-sm"],
      color: [
        "bg", "surface", "raised", "ink", "body", "muted", "muted-deco", "orchid", "orchid-soft", "orchid-deep",
        "verd", "verd-deep", "verd-text", "ox", "ox-deep", "ember", "live", "live-deep", "g-w", "g-m", "g-n",
        "tint-verified", "tint-alert", "tint-live", "hairline",
      ],
      font: ["serif", "sans"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
