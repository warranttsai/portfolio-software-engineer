import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/src/content/portfolio";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-ink pb-10 pt-24 text-white"
    >
      <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-ocean/30 blur-3xl" />
      <div className="absolute right-10 top-0 size-60 rounded-full bg-coral/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Let&apos;s build something
              <br />
              <span className="grad-ocean">connected and useful.</span>
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              I am always glad to connect with engineers, mentors, teams, and
              people building thoughtful digital products.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-2xl bg-ocean text-white hover:bg-ocean/90"
            >
              <a href={profile.emailHref}>
                {profile.contactLabel} <ArrowRight size={16} />
              </a>
            </Button>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-white/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Find me
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {[Github, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href={
                    [
                      profile.githubUrl,
                      profile.linkedinUrl,
                      profile.instagramUrl,
                    ][index]
                  }
                  aria-label={["GitHub", "LinkedIn", "Instagram"][index]}
                  target={
                    index === 0 && profile.githubUrl.startsWith("#")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    index === 0 && profile.githubUrl.startsWith("#")
                      ? undefined
                      : "noreferrer"
                  }
                  className="grid size-11 place-items-center rounded-xl bg-white/10 transition hover:bg-ocean"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-7 text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <a
                href={profile.emailHref}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-ocean">
                  <Mail size={17} />
                </span>
                <span className="break-all">{profile.email}</span>
              </a>
              <a
                href={profile.phoneHref}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-ocean">
                  <Phone size={17} />
                </span>
                <span>{profile.phone}</span>
              </a>
            </div>
            <p className="mt-5 text-xs text-white/50">
              {profile.location} · {profile.timezone}
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <div>
            © 2026 {profile.name}. Built with React, TypeScript, and care.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </div>
        </div>
      </div>
    </footer>
  );
}
