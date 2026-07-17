import { Award } from "lucide-react";

import { PreviewImage } from "@/components/ui/preview-image";
import { SectionIntro } from "@/components/ui/section-intro";
import { certifications } from "@/src/content/portfolio";
import { SectionToggleButton } from "@/src/components/sections/section-toggle-button";

type SectionProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export function CertificationsSection({
    collapsed,
    onToggle,
}: SectionProps) {
    return (
        <section id="certifications" className="py-24">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mb-8">
                    <SectionIntro
                        chip="05 - Certifications"
                        title={
                            <>
                                Cloud foundations with{" "}
                                <span className="text-ocean">proof</span> behind them
                            </>
                        }
                        copy="AWS credentials that support the engineering work I am growing into: operations, architecture, and practical cloud fluency."
                        action={
                            <SectionToggleButton
                                title="Cloud foundations with proof behind them"
                                collapsed={collapsed}
                                onToggle={onToggle}
                            />
                        }
                    />
                </div>
                {!collapsed ? (
                    <div className="mt-4 grid gap-6 md:grid-cols-3">
                        {certifications.map((certificate) => (
                            <div
                                key={certificate.title}
                                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:-translate-y-1 soft-shadow"
                            >
                                <PreviewImage
                                    src={certificate.image}
                                    alt={certificate.alt}
                                    title={certificate.title}
                                    className="aspect-[4/3] bg-ocean-soft"
                                    imgClassName="object-cover"
                                />
                                <div className="p-6">
                                    <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-ocean-soft text-ocean">
                                        <Award size={22} />
                                    </div>
                                    <h3 className="text-lg font-bold">{certificate.title}</h3>
                                    <p className="mt-3 text-sm text-slate-600">
                                        Part of my ongoing AWS learning path for building and
                                        operating reliable cloud-backed software.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
