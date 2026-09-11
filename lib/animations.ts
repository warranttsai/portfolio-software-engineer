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

// Section-level reveal applied via <SectionReveal />. Slides the whole
// section up from below with a subtle scale + blur for a cinematic feel.
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Stagger container — children animate in sequence when the parent
// becomes visible. Use inside a section to make headings, cards, and
// bullets cascade into place.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Slightly more pronounced reveal used for the first child of a staggered
// container (headings, titles).
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Reveal for cards / tiles inside a staggered container.
export const revealScale: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};