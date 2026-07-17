import { BadgeCheck } from "lucide-react";

import { Chip } from "@/src/components/ui/chip";
import { SectionToggleButton } from "@/src/components/sections/section-toggle-button";

type SectionProps = {
    collapsed: boolean;
    onToggle: () => void;
};

const focusTags = [
    "DevOps",
    "Full-stack",
    "AWS DevOps Pro",
    "AI-assisted work",
];

const focusCards = [
    [
        "DevOps depth",
        "Preparing for the AWS Certified DevOps Engineer - Professional certificate while strengthening CI/CD, monitoring, reliability, and infrastructure habits.",
    ],
    [
        "Full-stack range",
        "Growing across frontend, backend, databases, APIs, and deployment so I can understand and improve the whole delivery path.",
    ],
    [
        "AI leverage",
        "Learning how to use AI tools for research, debugging, automation, documentation, and faster iteration while keeping ownership of the final work.",
    ],
] as const;

export function FocusSection({ collapsed, onToggle }: SectionProps) {
    return (
        <section
            id="focus"
            className="bg-gradient-to-b from-transparent to-ocean-soft/60 py-20"
        >
            <div className="mx-auto max-w-6xl px-5">
                <div className="mb-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                            <Chip>06 - Current focus</Chip>
                            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                                Becoming stronger across DevOps and full-stack delivery.
                            </h2>
                            <p className="mt-3 text-slate-600">
                                I am working toward becoming a dependable DevOps engineer and
                                full-stack developer: someone who can build useful products,
                                operate reliable systems, and use AI thoughtfully to move
                                faster without losing engineering judgment.
                            </p>
                        </div>
                        <SectionToggleButton
                            title="Becoming stronger across DevOps and full-stack delivery"
                            collapsed={collapsed}
                            onToggle={onToggle}
                        />
                    </div>
                </div>
                {!collapsed ? (
                    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 soft-shadow md:p-10">
                        <div className="absolute -right-16 -top-16 size-64 rounded-full bg-ocean/10 blur-2xl" />
                        <div className="relative grid items-center gap-8 md:grid-cols-12">
                            <div className="md:col-span-5">
                                <Chip>06 - Current focus</Chip>
                                <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                                    Becoming stronger across DevOps and full-stack delivery.
                                </h2>
                                <p className="mt-3 text-slate-600">
                                    I am working toward becoming a dependable DevOps engineer and
                                    full-stack developer: someone who can build useful products,
                                    operate reliable systems, and use AI thoughtfully to move
                                    faster without losing engineering judgment.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {focusTags.map((tag) => (
                                        <Chip key={tag}>{tag}</Chip>
                                    ))}
                                </div>
                            </div>
                            <div className="grid gap-3 md:col-span-7 md:grid-cols-3">
                                {focusCards.map(([title, copy]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-slate-100 bg-ocean-soft/60 p-5"
                                    >
                                        <div className="mb-4 grid size-10 place-items-center rounded-xl bg-white text-ocean">
                                            <BadgeCheck size={18} />
                                        </div>
                                        <h3 className="font-bold">{title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {copy}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
