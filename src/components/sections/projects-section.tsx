import { ProjectGrid } from "@/src/components/ui/project-grid";
import { SectionIntro } from "@/src/components/ui/section-intro";
import type { DataState } from "@/types/data-state";
import type { Project } from "@/types/portfolio";
import { projects } from "@/src/content/portfolio";
import { SectionToggleButton } from "@/src/components/sections/section-toggle-button";

const projectState: DataState<Project[]> = {
    status: "ready",
    data: projects,
};

type SectionProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export function ProjectsSection({ collapsed, onToggle }: SectionProps) {
    return (
        <section id="projects" className="py-24">
            <div className="mx-auto max-w-6xl px-5">
                <div className="mb-8">
                    <SectionIntro
                        chip="02 - Foundations & practice"
                        title={
                            <>
                                The foundations behind my{" "}
                                <span className="text-ocean">work</span>
                            </>
                        }
                        copy="AWS certifications, engineering practice at Symphony3, and the personal portfolio I built to bring my cloud, software, and interface work together."
                        action={
                            <SectionToggleButton
                                title="The foundations behind my work"
                                collapsed={collapsed}
                                onToggle={onToggle}
                            />
                        }
                    />
                </div>
                {!collapsed ? <ProjectGrid state={projectState} /> : null}
            </div>
        </section>
    );
}
