import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { PreviewImage } from "./preview-image";

type ScrollableGalleryProps = {
  images: { src: string; alt: string; title?: string }[];
  /** Optional label used to build accessible titles for each photo. */
  label?: string;
};

/**
 * Horizontally scrollable photo strip. Each photo uses the shared
 * PreviewImage component, so it carries the same expand-to-preview button
 * as every other photo across the portfolio.
 */
export function ScrollableGallery({ images, label }: ScrollableGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 320;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 250);
  };

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow-lg transition hover:bg-white group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-coral" />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow-lg transition hover:bg-white group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-coral" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="scrollbar-hide overflow-x-auto"
      >
        <div className="flex gap-3 pb-2 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              className="shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              <PreviewImage
                src={image.src}
                alt={image.alt}
                title={image.title ?? label}
                className="aspect-[3/4] w-40 rounded-2xl soft-shadow-coral md:w-52"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
