import { Menu, X } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, profile } from "@/src/content/portfolio";

type SiteHeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function SiteHeader({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: SiteHeaderProps) {
  return (
    <header className="hero-scheduled-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-5">
        <nav className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/85 px-4 py-3 backdrop-blur-md soft-shadow">
          <a
            href="#top"
            className="flex items-center gap-2 text-lg font-extrabold"
            aria-label={`${profile.name} home`}
          >
            <span className="grid size-8 place-items-center rounded-xl bg-ocean text-sm text-white">
              {profile.initials}
            </span>
            <span>
              {profile.shortName}
              <span className="text-ocean">.</span>Tsai
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-ocean",
                  item.coral && "hover:text-coral",
                )}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="rounded-xl bg-ocean px-4 text-white hover:bg-ocean/90"
            >
              <a href="#contact">Say hi</a>
            </Button>
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="rounded-xl bg-ocean-soft text-ocean md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </nav>

        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-white/70 bg-white p-4 text-sm font-medium text-slate-700 soft-shadow md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn("py-1", item.coral && "text-coral")}
                  onClick={onCloseMenu}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="rounded-xl bg-ocean text-white">
                <a href="#contact" onClick={onCloseMenu}>
                  Say hi
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
