import { ArrowRight, Github, Instagram, Linkedin, Music2 } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { HeroSlideshow } from "@/src/components/ui/hero-slideshow";
import { PreviewImage } from "@/src/components/ui/preview-image";
import { cn } from "@/lib/utils";
import { heroImages, heroSlides, profile, skills } from "@/src/content/portfolio";

export function HeroSection() {
    return (
        <section
            id="top"
            className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40"
        >
            <div className="absolute -right-24 -top-20 size-[28rem] rounded-full bg-ocean/20 blur-3xl" />
            <div className="absolute -left-24 top-40 size-[22rem] rounded-full bg-coral/15 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--ocean-soft)),transparent_55%)]" />
            <div className="relative mx-auto max-w-6xl px-5">
                <div className="hero-banner relative isolate">
                    <div className="hero-water" aria-hidden="true">
                        <svg
                            viewBox="0 0 1000 520"
                            preserveAspectRatio="none"
                            focusable="false"
                        >
                            <defs>
                                <linearGradient
                                    id="hero-water-ocean"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="hsl(216 100% 50%)" />
                                    <stop offset="100%" stopColor="hsl(177 100% 44%)" />
                                </linearGradient>
                                <linearGradient
                                    id="hero-water-coral"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="hsl(11 100% 65%)" />
                                    <stop offset="100%" stopColor="hsl(28 100% 68%)" />
                                </linearGradient>
                                <filter id="hero-water-blur">
                                    <feGaussianBlur stdDeviation="16" />
                                </filter>
                            </defs>
                            <ellipse
                                className="hero-water-glow"
                                cx="500"
                                cy="315"
                                rx="270"
                                ry="100"
                            />
                            <ellipse
                                className="hero-water-impact"
                                cx="500"
                                cy="310"
                                rx="34"
                                ry="7"
                            />
                            <g className="hero-water-drop">
                                <path
                                    className="hero-water-drop-shape"
                                    d="M500 46 C500 46 478 76 478 91 C478 105 488 115 500 115 C512 115 522 105 522 91 C522 76 500 46 500 46Z"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="relative z-10 grid items-center gap-10 md:grid-cols-12">
                        <div className="md:col-span-7">
                            <span className="hero-late-status inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 soft-shadow">
                                <span className="size-2 rounded-full bg-ocean" />
                                {profile.heroStatus} · {profile.location}
                            </span>
                            <div className="hero-copy relative isolate mt-6">
                                <h1 className="relative z-10 text-5xl font-extrabold leading-[1.02] md:text-7xl">
                                    <span className="hero-headline-mask">
                                        <span className="hero-headline-line">
                                            I build <span className="grad-ocean">interfaces</span>
                                        </span>
                                    </span>
                                    <br />
                                    <span className="hero-headline-mask">
                                        <span className="hero-headline-line hero-headline-line-delayed">
                                            and cloud <span className="grad-coral">systems</span>.
                                        </span>
                                    </span>
                                </h1>
                                <p className="hero-copy-intro relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                                    Hi, I&apos;m{" "}
                                    <strong className="text-slate-900">{profile.name}</strong>,{" "}
                                    {profile.intro}
                                </p>
                            </div>
                            <div className="hero-late-content mt-8 flex flex-wrap items-center gap-3">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-2xl bg-ocean text-white hover:bg-ocean/90"
                                >
                                    <a href="#projects">
                                        See my work <ArrowRight size={18} />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-coral hover:text-coral"
                                >
                                    <a href="#social">
                                        <Music2 size={18} /> See my moments
                                    </a>
                                </Button>
                            </div>
                            <div className="hero-late-social mt-9 flex items-center gap-3">
                                {[
                                    { label: "GitHub", icon: Github },
                                    { label: "LinkedIn", icon: Linkedin },
                                    { label: "Instagram", icon: Instagram, coral: true },
                                ].map(({ label, icon: Icon, coral }) => (
                                    <a
                                        key={label}
                                        href={
                                            label === "LinkedIn"
                                                ? profile.linkedinUrl
                                                : label === "Instagram"
                                                    ? profile.instagramUrl
                                                    : profile.githubUrl
                                        }
                                        aria-label={label}
                                        target={
                                            label === "GitHub" && profile.githubUrl.startsWith("#")
                                                ? undefined
                                                : "_blank"
                                        }
                                        rel={
                                            label === "GitHub" && profile.githubUrl.startsWith("#")
                                                ? undefined
                                                : "noreferrer"
                                        }
                                        className={cn(
                                            "grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:text-white soft-shadow",
                                            coral ? "hover:bg-coral" : "hover:bg-ocean",
                                        )}
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                                <a
                                    href={profile.emailHref}
                                    className="ml-1 text-sm text-slate-500 transition hover:text-ocean"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {profile.contactLabel}
                                </a>
                            </div>
                        </div>
                        <div className="md:col-span-5">
                            <div className="hero-late-gallery relative">
                                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-ocean/30 to-coral/20 opacity-60 blur-2xl" />
                                <div className="relative rounded-[2rem] border border-white bg-white p-5 soft-shadow">
                                    <HeroSlideshow
                                        slides={heroSlides}
                                        className="hero-gallery-top aspect-square rounded-[1.5rem]"
                                        overlay={
                                            <div className="text-white">
                                                <div className="text-xs font-semibold uppercase tracking-widest text-white/80">
                                                    Currently
                                                </div>
                                                <div className="mt-1 text-xl font-bold">
                                                    {profile.role} @ {profile.company}
                                                </div>
                                                <div className="text-sm text-white/85">
                                                    {profile.heroSubtext}
                                                </div>
                                            </div>
                                        }
                                    />
                                    <PreviewImage
                                        src={heroImages.secondary}
                                        alt={heroImages.secondaryAlt}
                                        title={heroImages.secondaryAlt}
                                        className="hero-gallery-bottom mt-3 h-24 rounded-[1.25rem] md:h-28"
                                    />
                                    <div className="absolute -left-4 top-10 rounded-2xl border border-slate-100 bg-white px-4 py-3 soft-shadow">
                                        <div className="text-2xl font-extrabold text-ocean">3x</div>
                                        <div className="text-[11px] font-medium text-slate-500">
                                            AWS certified
                                        </div>
                                    </div>
                                    <div className="absolute -right-3 bottom-24 rounded-2xl border border-slate-100 bg-white px-4 py-3 soft-shadow">
                                        <div className="text-2xl font-extrabold text-coral">S3</div>
                                        <div className="text-[11px] font-medium text-slate-500">
                                            Symphony3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 overflow-hidden border-y border-slate-100 py-4">
                    <div className="marquee-track flex w-max gap-10 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                        {skills.concat(skills).map((item, index) => (
                            <span key={`${item}-${index}`}>{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
