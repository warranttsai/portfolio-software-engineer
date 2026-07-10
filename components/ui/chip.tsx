import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  coral?: boolean;
};

/** Small rounded label used for tags, dates, and stats throughout the page. */
export function Chip({ children, coral = false }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        coral
          ? "border-coral/15 bg-coral-soft text-coral-deep"
          : "border-ocean/15 bg-ocean-soft text-ocean-deep",
      )}
    >
      {children}
    </span>
  );
}
