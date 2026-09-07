import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { sectionReveal } from "@/lib/animations";

type SectionRevealProps = {
    children: ReactNode;
    /** Optional id so the section can still be anchor-targeted. */
    id?: string;
    /** Additional Tailwind classes merged onto the wrapper. */
    className?: string;
};

/**
 * Wraps a section so it fades + slides up from below as it enters the
 * viewport. Designed to be the outermost element of every page section —
 * it becomes the motion target without changing the section's existing
 * layout (no fixed height, no ref forwarding needed).
 *
 * Pair with staggered child elements (see `staggerContainer`) for a
 * layered transition between sections.
 */
export function SectionReveal({ children, id, className }: SectionRevealProps) {
    return (
        <motion.section
            id={id}
            className={className}
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
        >
            {children}
        </motion.section>
    );
}