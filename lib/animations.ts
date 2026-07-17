import type { Variants } from "framer-motion";

// Shared scroll/entrance animation used across every section of the
// portfolio page for a consistent "fade up" reveal.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

// A softer hero entrance that lets the water-drop sequence settle before
// the content resolves from transparent to clear.
export const heroReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};
