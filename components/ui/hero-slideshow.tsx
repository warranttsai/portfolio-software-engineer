import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { ImageModal, type ImageModalData } from "./image-modal";

export type HeroSlide = {
  src: string;
  alt: string;
  title?: string;
};

type HeroSlideshowProps = {
  slides: HeroSlide[];
  /** Milliseconds between automatic slide changes. */
  intervalMs?: number;
  /** Classes for the image container (sizing, radius, aspect ratio, etc.). */
  className?: string;
  /** Optional overlay content pinned to the bottom of the image, shown on every slide. */
  overlay?: ReactNode;
};

/**
 * Auto-advancing photo slideshow for the hero section. Crossfades between
 * slides on a timer, pauses while the visitor hovers, and still supports
 * expanding the current photo into the shared full-screen preview modal.
 */
export function HeroSlideshow({
  slides,
  intervalMs = 4000,
  className,
  overlay,
}: HeroSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalImage, setModalImage] = useState<ImageModalData | null>(null);

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [paused, slides.length, intervalMs]);

  if (slides.length === 0) return null;

  const active = slides[index];

  const goToPrev = () =>
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  const goToNext = () => setIndex((current) => (current + 1) % slides.length);

  return (
    <>
      <div
        className={cn("group/preview group relative overflow-hidden", className)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active.src}
            src={active.src}
            alt={active.alt}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Hover veil for contrast behind actions + overlay. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        {/* Full-surface click target opens the preview. */}
        <button
          type="button"
          onClick={() =>
            setModalImage({ src: active.src, alt: active.alt, title: active.title })
          }
          aria-label={`Expand ${active.title ?? active.alt}`}
          className="absolute inset-0 z-[1] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ocean"
        />

        <div className="absolute right-3 top-3 z-[3]">
          <button
            type="button"
            onClick={() =>
              setModalImage({ src: active.src, alt: active.alt, title: active.title })
            }
            aria-label={`Expand ${active.title ?? active.alt} preview`}
            title="Expand preview"
            className="grid size-9 place-items-center rounded-xl bg-white/90 text-ocean shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-2 top-1/2 z-[3] -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow-lg transition hover:bg-white group-hover:opacity-100"
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} className="text-coral" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 top-1/2 z-[3] -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow-lg transition hover:bg-white group-hover:opacity-100"
              aria-label="Next photo"
            >
              <ChevronRight size={20} className="text-coral" />
            </button>

            <div className="absolute inset-x-0 bottom-3 z-[2] flex justify-center gap-1.5">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Show slide ${slideIndex + 1}`}
                  aria-current={slideIndex === index}
                  className={cn(
                    "h-1.5 w-4 rounded-full transition",
                    slideIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/70",
                  )}
                />
              ))}
            </div>
          </>
        ) : null}

        {overlay ? (
          <div className="pointer-events-none absolute inset-x-4 bottom-8 z-[2]">
            {overlay}
          </div>
        ) : null}
      </div>

      <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
    </>
  );
}
