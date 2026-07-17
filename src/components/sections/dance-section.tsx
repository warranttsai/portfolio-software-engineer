import { Music2 } from "lucide-react";
import { motion } from "framer-motion";

import { Chip } from "@/components/ui/chip";
import { ScrollableGallery } from "@/components/ui/scrollable-gallery";
import { SectionIntro } from "@/components/ui/section-intro";
import { reveal } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
    danceIntro,
    danceShowcases,
    danceTimeline,
    durationBetween,
    formatDuration,
} from "@/src/content/portfolio";
import { SectionToggleButton } from "@/src/components/sections/section-toggle-button";

type SectionProps = {
    collapsed: boolean;
    onToggle: () => void;
    now: Date;
    danceStart: Date;
    danceExperience: string;
};

export function DanceSection({
    collapsed,
    onToggle,
    now,
    danceStart,
    danceExperience,
}: SectionProps) {
    return (
        <section
            id="dance"
            className="relative overflow-hidden bg-gradient-to-b from-coral-soft to-paper py-24"
        >
            <div className="absolute -left-20 top-16 size-72 rounded-full bg-coral/15 blur-3xl" />
            <div className="absolute -right-16 bottom-10 size-64 rounded-full bg-ocean/10 blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-5">
                <div className="mb-8">
                    <SectionIntro
                        chip={danceIntro.chip}
                        title={
                            <>
                                Street <span className="grad-coral">dance</span> is my
                                <br className="hidden md:block" /> other language
                            </>
                        }
                        copy={danceIntro.copy}
                        action={
                            <SectionToggleButton
                                title="Street dance is my other language"
                                collapsed={collapsed}
                                onToggle={onToggle}
                            />
                        }
                    />
                </div>
                {!collapsed ? (
                    <>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div />
                            <motion.div
                                className="rounded-3xl border border-white bg-white px-6 py-5 text-center soft-shadow-coral"
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                                    Dancing for
                                </div>
                                <div className="mt-1 text-3xl font-extrabold text-coral md:text-4xl">
                                    {danceExperience}
                                </div>
                                <div className="mt-1 text-xs text-slate-500">
                                    since September 2017
                                </div>
                            </motion.div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                            {danceIntro.styles.map((style) => (
                                <Chip key={style} coral>
                                    <Music2 size={12} /> {style}
                                </Chip>
                            ))}
                        </div>
                        <div className="relative mt-14">
                            <div className="absolute bottom-0 left-4 top-0 w-px bg-coral/25 md:left-1/2 md:-translate-x-1/2" />
                            {danceTimeline.map((milestone, index) => {
                                const milestoneDate = milestone.current
                                    ? now
                                    : new Date(milestone.date);
                                const experience = formatDuration(
                                    durationBetween(danceStart, milestoneDate),
                                );

                                return (
                                    <motion.article
                                        key={`${milestone.title}-${milestone.date}`}
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
                                            <Chip coral>{milestone.label}</Chip>
                                        </div>
                                        <div
                                            className={cn(
                                                "absolute left-4 top-2 size-3 rounded-full ring-4 ring-coral-soft md:left-1/2 md:-translate-x-1/2",
                                                milestone.current ? "bg-ocean" : "bg-coral",
                                            )}
                                        />
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
                                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-coral-soft text-xl">
                                                        {milestone.emoji}
                                                    </span>
                                                    <h3 className="text-lg font-bold">
                                                        {milestone.title}
                                                    </h3>
                                                </div>
                                                {milestone.kind === "battle" ? (
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {milestone.tags?.map((tag) => (
                                                            <Chip key={tag}>{tag}</Chip>
                                                        ))}
                                                        {milestone.result ? (
                                                            <Chip coral>{milestone.result}</Chip>
                                                        ) : null}
                                                        {milestone.location ? (
                                                            <span className="inline-flex items-center text-xs text-slate-400">
                                                                {milestone.location}
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                ) : (
                                                    <>
                                                        {milestone.description ? (
                                                            <p className="mt-3 text-sm text-slate-600">
                                                                {milestone.description}
                                                            </p>
                                                        ) : null}
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                            <Chip>Dance experience: {experience}</Chip>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                        <div className="mt-16 space-y-10">
                            {danceShowcases.map((showcase) => (
                                <motion.div
                                    key={showcase.title}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-70px" }}
                                >
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-2xl font-extrabold md:text-3xl">
                                            {showcase.title}
                                        </h3>
                                        {showcase.year ? (
                                            <Chip coral>{showcase.year}</Chip>
                                        ) : null}
                                    </div>
                                    <p className="mt-2 max-w-2xl text-slate-600">
                                        {showcase.blurb}
                                    </p>
                                    <div className="mt-6">
                                        <ScrollableGallery
                                            images={showcase.images}
                                            label={showcase.title}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
}
