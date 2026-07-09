import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { X } from "lucide-react";

export type ImageModalData = {
  src: string;
  alt: string;
  title?: string;
};

type ImageModalProps = {
  image: ImageModalData | null;
  onClose: () => void;
};

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-preview-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white p-3 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-2 pb-3">
              {image.title && (
                <h3
                  id="image-preview-title"
                  className="text-base font-bold text-ink md:text-lg"
                >
                  {image.title}
                </h3>
              )}
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="rounded-xl ml-auto"
                aria-label="Close image preview"
                onClick={onClose}
              >
                <X size={20} />
              </Button>
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
