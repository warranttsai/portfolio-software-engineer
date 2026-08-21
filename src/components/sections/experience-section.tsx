import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Chip } from "@/src/components/ui/chip";
import { SectionIntro } from "@/src/components/ui/section-intro";
import { reveal } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { experience } from "@/src/content/portfolio";
import { SectionToggleButton } from "@/src/components/sections/section-toggle-button";

type SectionProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export function ExperienceSection({ collapsed, onToggle }: SectionProps) {
    return (
        <section id="experience" className="bg-ocean-soft py-24">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mb-8">
                    <SectionIntro
                        chip="01 - Career"
                        title={
                            <>
                                Where I&apos;ve <span className="text-ocean">shipped</span> things
                            </>
                        }
                        copy="A timeline of teams and projects where I helped make hard product surfaces easier to use."
                        action={
                            <SectionToggleButton
                                title="Where I've shipped things"
                                collapsed={collapsed}
                                onToggle={onToggle}
                            />
                        }
                    />
                </div>
                {!collapsed ? (
                    <>
                        <div className="mb-6 flex flex-wrap items-center justify-end gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:underline"
                            >
                                Full resume <ExternalLink size={16} />
                            </a>
                        </div>
                        <div className="relative mt-4">
                            <div className="absolute bottom-0 left-4 top-0 w-px bg-ocean/20 md:left-1/2 md:-translate-x-1/2" />
                            {experience.map((item, index) => (
                                <motion.article
                                    key={`${item.company}-${item.period}`}
                                    className="relative mb-10 grid gap-6 md:grid-cols-2"
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-70px" }}
                                >
                                    <div
                                        className={cn(
                                            "pl-12 md:pl-0",
                                            index % 2 === 0
                                                ? "md:pr-12 md:text-right"
                                                : "md:order-2 md:pl-12",
                                        )}
                                    >
                                        <Chip>{item.period}</Chip>
                                    </div>
                                    <div className="absolute left-4 top-2 size-3 rounded-full bg-ocean ring-4 ring-ocean-soft md:left-1/2 md:-translate-x-1/2" />
                                    <div
                                        className={cn(
                                            "pl-12",
                                            index % 2 === 0
                                                ? "md:pl-12"
                                                : "md:order-1 md:pl-0 md:pr-12",
                                        )}
                                    >
                                        <div className="rounded-2xl border border-white bg-white p-6 transition hover:-translate-y-1 soft-shadow">
                                            <div className="flex items-center gap-3">
                                                <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-100 bg-white text-sm font-bold text-ocean">
                                                    {item.logo ? (
                                                        <img
                                                            src={item.logo}
                                                            alt={`${item.company} logo`}
                                                            className="h-full w-full object-contain p-1.5"
                                                        />
                                                    ) : (
                                                        item.mark
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold">{item.role}</h3>
                                                    <div className="text-sm text-slate-500">
                                                        {item.company} · {item.employmentType}
                                                    </div>
                                                    <div className="mt-0.5 text-xs text-slate-400">
                                                        {item.location} · {item.locationType}
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                                {item.bullets.map((bullet, bulletIndex) => (
                                                    <li key={`${item.company}-${bulletIndex}`} className="flex gap-2">
                                                        <span className="text-ocean">▸</span>
                                                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                                                    </li>
                                                ))}
                                            </ul>
                                            {item.skills && item.skills.length > 0 ? (
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {item.skills.map((skill) => (
                                                        <Chip key={`${item.company}-${skill}`}>
                                                            {skill}
                                                        </Chip>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
}
