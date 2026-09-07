import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll wraps the entire app and replaces the default browser scroll
 * with a Lenis-powered smooth scroll. Lenis adds momentum and easing so the
 * page glides instead of jumping between sections.
 *
 * Anchored links (#hero, #projects, etc.) and the back-to-top button work
 * out of the box because Lenis preserves native scroll anchoring.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      // Slightly longer duration so transitions feel cinematic without being
      // sluggish. easeFn is a smoothstep-style curve — no hard start/stop.
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };
    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}