import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import { SiteFooter } from "@/src/components/portfolio/site-footer";
import { SiteHeader } from "@/src/components/portfolio/site-header";
import { SmoothScroll } from "@/src/components/ui/smooth-scroll";
import { CertificationsSection } from "@/src/components/sections/certifications-section";
import { DanceSection } from "@/src/components/sections/dance-section";
import { ExperienceSection } from "@/src/components/sections/experience-section";
import { FocusSection } from "@/src/components/sections/focus-section";
import { HeroSection } from "@/src/components/sections/hero-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { SocialSection } from "@/src/components/sections/social-section";
import {
  danceStartDate,
  durationBetween,
  formatDuration,
} from "@/src/content/portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({});

  // Keep dance experience and age counters live as time passes.
  useEffect(() => {
    const interval = window.setInterval(
      () => setNow(new Date()),
      60 * 60 * 1000,
    );
    return () => window.clearInterval(interval);
  }, []);

  const danceStart = new Date(danceStartDate);
  const danceExperience = formatDuration(durationBetween(danceStart, now));

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((current) => ({
      ...current,
      [sectionId]: !current[sectionId],
    }));
  };

  return (
    <SmoothScroll>
      <main className="overflow-x-hidden bg-paper">
        <SiteHeader
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
          onCloseMenu={() => setMenuOpen(false)}
        />
        <HeroSection />
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-20 w-full fill-ocean-soft"
        >
          <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
        </svg>
        <ExperienceSection
          collapsed={Boolean(collapsedSections.experience)}
          onToggle={() => toggleSection("experience")}
        />
        <ProjectsSection
          collapsed={Boolean(collapsedSections.projects)}
          onToggle={() => toggleSection("projects")}
        />
        <SocialSection
          collapsed={Boolean(collapsedSections.social)}
          onToggle={() => toggleSection("social")}
        />
        <DanceSection
          collapsed={Boolean(collapsedSections.dance)}
          onToggle={() => toggleSection("dance")}
          now={now}
          danceStart={danceStart}
          danceExperience={danceExperience}
        />
        <CertificationsSection
          collapsed={Boolean(collapsedSections.certifications)}
          onToggle={() => toggleSection("certifications")}
        />
        <FocusSection
          collapsed={Boolean(collapsedSections.focus)}
          onToggle={() => toggleSection("focus")}
        />
        <SiteFooter />
        <a
          href="#top"
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-2xl bg-ocean text-white shadow-lg shadow-ocean/30 transition hover:-translate-y-1 hover:bg-ocean-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
        >
          <ChevronUp size={22} />
        </a>
      </main>
    </SmoothScroll>
  );
}

export default App;
