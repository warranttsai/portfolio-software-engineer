import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { reveal } from "@/lib/animations";
import { Chip } from "@/src/components/ui/chip";

type SectionIntroProps = {
  chip: string;
  title: ReactNode;
  copy: string;
  action?: ReactNode;
};

/** Consistent "chip + heading + copy" intro used at the top of every section. */
export function SectionIntro({ chip, title, copy, action }: SectionIntroProps) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Chip>{chip}</Chip>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">{copy}</p>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </motion.div>
  );
}
