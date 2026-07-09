import { useState, type ReactNode } from "react";
import { ExternalLink, Maximize2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { ImageModal } from "./image-modal";

type PreviewImageProps = {
  src: string;
  alt: string;
  /** Optional title shown in the expanded preview window. */
  title?: string;
  /** Optional external link surfaced as a secondary action button. */
  href?: string;
  /** Classes for the image container (sizing, radius, aspect ratio, etc.). */
  className?: string;
  /** Extra classes for the underlying <img>. */
  imgClassName?: string;
  /** Optional overlay content pinned to the bottom of the image. */
  overlay?: ReactNode;
};

/**
 * A single, reusable photo surface used across the whole portfolio.
 * Every photo gets a consistent "expand" button that opens the same
 * full-screen preview window (ImageModal).
 */
export function PreviewImage({
  src,
  alt,
  title,
  href,
  className,
  imgClassName,
  overlay,
}: PreviewImageProps) {
  const [open, setOpen] = useState(false);
  const label = title ?? alt;

  return (
    <>
      <div className={cn("group/preview relative overflow-hidden", className)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition duration-700 group-hover/preview:scale-105",
            imgClassName,
          )}
        />

        {/* Hover veil for contrast behind actions + overlay. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition group-hover/preview:opacity-100" />

        {/* Full-surface click target opens the preview. */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Expand ${label}`}
          className="absolute inset-0 z-[1] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ocean"
        />

        {/* Action buttons sit above the full-surface target. */}
        <div className="absolute right-3 top-3 z-[3] flex gap-2">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              aria-label={`Open ${label} link`}
              title="Open link"
              className="grid size-9 place-items-center rounded-xl bg-white/90 text-ocean shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
            >
              <ExternalLink size={16} />
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Expand ${label} preview`}
            title="Expand preview"
            className="grid size-9 place-items-center rounded-xl bg-white/90 text-ocean shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {overlay ? (
          <div className="pointer-events-none absolute inset-x-4 bottom-4 z-[2]">
            {overlay}
          </div>
        ) : null}
      </div>

      <ImageModal
        image={open ? { src, alt, title } : null}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
