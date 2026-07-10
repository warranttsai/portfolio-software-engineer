import { BadgeCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { reveal } from "@/lib/animations";
import type { DataState } from "@/types/data-state";
import type { Project } from "@/types/portfolio";
import { Chip } from "./chip";
import { PreviewImage } from "./preview-image";

type ProjectGridProps = {
  state: DataState<Project[]>;
};

/** Renders the projects section grid, including loading/empty/error states. */
export function ProjectGrid({ state }: ProjectGridProps) {
  if (state.status === "loading") {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-3" aria-label="Loading projects">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-96 animate-pulse rounded-3xl bg-slate-100" />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="mt-12 rounded-3xl border border-coral/20 bg-coral-soft p-8 text-coral-deep">
        <h3 className="font-bold">Projects could not load</h3>
        <p className="mt-2 text-sm">{state.message}</p>
      </div>
    );
  }

  if (state.status === "empty") {
    return (
      <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-8 text-slate-600 soft-shadow">
        <h3 className="font-bold text-ink">Projects are being curated</h3>
        <p className="mt-2 text-sm">
          Check back soon for case studies with context, outcomes, and source
          links.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {state.data.map((project, index) => (
        <motion.article
          key={project.title}
          className="group overflow-hidden rounded-3xl border border-slate-100 bg-white soft-shadow"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          transition={{ delay: index * 0.08 }}
        >
          <PreviewImage
            src={project.image}
            alt={`${project.title} project preview`}
            title={project.title}
            className="aspect-[4/3]"
            overlay={
              <Chip coral={project.accent === "coral"}>
                <Sparkles size={12} /> Case study
              </Chip>
            }
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Chip key={tag} coral={project.accent === "coral"}>
                  <BadgeCheck size={12} /> {tag}
                </Chip>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
