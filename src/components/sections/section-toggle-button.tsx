import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/src/components/ui/button";

type SectionToggleButtonProps = {
    title: string;
    collapsed: boolean;
    onToggle: () => void;
};

export function SectionToggleButton({
    title,
    collapsed,
    onToggle,
}: SectionToggleButtonProps) {
    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            className="group h-10 w-10 shrink-0 rounded-full border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-0.5 hover:border-ocean hover:bg-ocean hover:text-white"
            onClick={onToggle}
            aria-label={collapsed ? `Expand ${title}` : `Collapse ${title}`}
        >
            {collapsed ? (
                <ChevronDown size={18} className="transition" />
            ) : (
                <ChevronUp size={18} className="transition" />
            )}
        </Button>
    );
}
