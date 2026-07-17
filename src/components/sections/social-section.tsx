import { Instagram, Play } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/src/components/ui/button";
import { Chip } from "@/src/components/ui/chip";
import { HeroSlideshow } from "@/src/components/ui/hero-slideshow";
import { PreviewImage } from "@/src/components/ui/preview-image";
import { reveal } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { profile, socialGallery } from "@/src/content/portfolio";
import { SectionToggleButton } from "@/src/components/sections/section-toggle-button";

type SectionProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export function SocialSection({ collapsed, onToggle }: SectionProps) {
    return (
        <section
            id="social"
            className="relative overflow-hidden bg-gradient-to-b from-sand to-coral-soft py-24"
        >
            <div className="relative mx-auto max-w-6xl px-5">
                <div className="mb-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                            <Chip coral>03 - Social</Chip>
                            <h2 className="mt-4 text-5xl font-extrabold leading-[0.98] md:text-7xl">
                                A few <span className="grad-coral">moments</span>
                                <br />
                                beyond the code.
                            </h2>
                            <p className="mt-5 max-w-xl text-lg text-slate-700">
                                I keep this portfolio professional, but still human: Symphony3
                                team snapshots, workshop memories, and a small window into my
                                Instagram presence.
                            </p>
                        </div>
                        <SectionToggleButton
                            title="A few moments beyond the code"
                            collapsed={collapsed}
                            onToggle={onToggle}
                        />
                    </div>
                </div>
                {!collapsed ? (
                    <>
                        <div className="grid items-end gap-8 md:grid-cols-12">
                            <motion.div
                                className="md:col-span-7"
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                                    Social highlights
                                </p>
                            </motion.div>
                            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
                                <Button
                                    asChild
                                    className="rounded-2xl bg-coral text-white hover:bg-coral/90"
                                >
                                    <a
                                        href={profile.instagramUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Instagram size={18} /> Follow {profile.instagramHandle}
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-coral hover:text-coral"
                                >
                                    <a
                                        href={profile.linkedinUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View LinkedIn <Play size={16} />
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                            {[
                                ["S3", "Symphony3"],
                                ["AWS", "cloud learning"],
                                ["RMIT", "education"],
                                ["IG", profile.instagramHandle],
                            ].map(([value, label]) => (
                                <div
                                    key={label}
                                    className="rounded-2xl border border-white bg-white p-5 soft-shadow-coral"
                                >
                                    <div className="text-3xl font-extrabold text-coral">
                                        {value}
                                    </div>
                                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
                            {socialGallery.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className={cn("min-h-0", item.className)}
                                    variants={reveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 }}
                                >
                                    {"images" in item ? (
                                        <HeroSlideshow
                                            slides={item.images ?? []}
                                            className="h-full rounded-3xl soft-shadow-coral"
                                            overlay={<Chip coral>{item.title}</Chip>}
                                        />
                                    ) : (
                                        <PreviewImage
                                            src={item.image}
                                            alt={item.alt}
                                            title={item.title}
                                            href={item.href}
                                            className="h-full rounded-3xl soft-shadow-coral"
                                            overlay={<Chip coral>{item.title}</Chip>}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
}
