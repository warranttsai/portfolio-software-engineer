import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/src/components/ui/button";

type SectionToggleBarProps = {
  title: string;
  collapsed: boolean;
  onToggle: () => void;
};

export function SectionToggleBar({
  title,
  collapsed,
  onToggle,
}: SectionToggleBarProps) {
  return (
    <div className="mb-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 backdrop-blur soft-shadow">
      <h2 className="flex-1 text-lg font-semibold text-slate-900">{title}</h2>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="shrink-0 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        onClick={onToggle}
        aria-label={collapsed ? `Expand ${title}` : `Collapse ${title}`}
      >
        {collapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </Button>
    </div>
  );
}
