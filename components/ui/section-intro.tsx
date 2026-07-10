import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { reveal } from "@/lib/animations";
import { Chip } from "./chip";

type SectionIntroProps = {
  chip: string;
  title: ReactNode;
  copy: string;
};

/** Consistent "chip + heading + copy" intro used at the top of every section. */
export function SectionIntro({ chip, title, copy }: SectionIntroProps) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Chip>{chip}</Chip>
      <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-slate-600">{copy}</p>
    </motion.div>
  );
}
