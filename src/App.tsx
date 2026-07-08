import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Award,
  ChevronUp,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Music2,
  Phone,
  Play,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollableGallery } from "@/components/ui/scrollable-gallery";
import { PreviewImage } from "@/components/ui/preview-image";
import {
  certifications,
  danceBirthDate,
  danceIntro,
  danceShowcases,
  danceStartDate,
  danceTimeline,
  durationBetween,
  experience,
  formatDuration,
  heroImages,
  navItems,
  profile,
  projects,
  skills,
  socialGallery,
  type Project,
} from "@/src/content/portfolio";
import { cn } from "@/lib/utils";

type DataState<T> =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "error"; message: string }
  | { status: "ready"; data: T };

const projectState: DataState<Project[]> = { status: "ready", data: projects };

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

function Chip({
  children,
  coral = false,
}: {
  children: React.ReactNode;
  coral?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        coral
          ? "border-coral/15 bg-coral-soft text-coral-deep"
          : "border-ocean/15 bg-ocean-soft text-ocean-deep",
      )}
    >
      {children}
    </span>
  );
}

function SectionIntro({
  chip,
  title,
  copy,
}: {
  chip: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Chip>{chip}</Chip>
      <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-slate-600">{copy}</p>
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());

  // Keep dance experience and age counters live as time passes.
  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  const danceStart = new Date(danceStartDate);
  const birthDate = new Date(danceBirthDate);
  const danceExperience = formatDuration(durationBetween(danceStart, now));

  return (
    <main className="overflow-x-hidden bg-paper">
      <header className="fixed inset-x-0 top-0 z-50">
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
                {profile.shortName}<span className="text-ocean">.</span>Tsai
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
              <Button asChild className="rounded-xl bg-ocean px-4 text-white hover:bg-ocean/90">
                <a href="#contact">Say hi</a>
              </Button>
            </div>

            <Button
              variant="secondary"
              size="icon"
              className="rounded-xl bg-ocean-soft text-ocean md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
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
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="rounded-xl bg-ocean text-white">
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Say hi
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section id="top" className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="absolute -right-24 -top-20 size-[28rem] rounded-full bg-ocean/20 blur-3xl" />
        <div className="absolute -left-24 top-40 size-[22rem] rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--ocean-soft)),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <motion.div
              className="md:col-span-7"
              variants={reveal}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 soft-shadow">
                <span className="size-2 rounded-full bg-ocean" />
                {profile.heroStatus} · {profile.location}
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] md:text-7xl">
                I build <span className="grad-ocean">interfaces</span>
                <br />
                and cloud <span className="grad-coral">systems</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Hi, I&apos;m <strong className="text-slate-900">{profile.name}</strong>,
                {" "}{profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="rounded-2xl bg-ocean text-white hover:bg-ocean/90">
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
              <div className="mt-9 flex items-center gap-3">
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
                    target={label === "GitHub" && profile.githubUrl.startsWith("#") ? undefined : "_blank"}
                    rel={label === "GitHub" && profile.githubUrl.startsWith("#") ? undefined : "noreferrer"}
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
            </motion.div>

            <motion.div
              className="md:col-span-5"
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-ocean/30 to-coral/20 opacity-60 blur-2xl" />
                <div className="relative rounded-[2rem] border border-white bg-white p-5 soft-shadow">
                  <PreviewImage
                    src={heroImages.primary}
                    alt={heroImages.primaryAlt}
                    title={heroImages.primaryAlt}
                    className="aspect-square rounded-[1.5rem]"
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
                    className="mt-3 h-24 rounded-[1.25rem] md:h-28"
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
            </motion.div>
          </div>

          <div className="mt-16 overflow-hidden border-y border-slate-100 py-4">
            <div className="marquee-track flex w-max gap-10 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              {skills
                .concat(skills)
                .map((item, index) => (
                  <span key={`${item}-${index}`}>{item}</span>
                ))}
            </div>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-20 w-full fill-ocean-soft">
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
      </svg>

      <section id="experience" className="bg-ocean-soft py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionIntro
              chip="01 - Career"
              title={
                <>
                  Where I&apos;ve <span className="text-ocean">shipped</span>{" "}
                  things
                </>
              }
              copy="A timeline of teams and projects where I helped make hard product surfaces easier to use."
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:underline"
            >
              Full resume <ExternalLink size={16} />
            </a>
          </div>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-ocean/20 md:left-1/2 md:-translate-x-1/2" />
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="relative mb-10 grid gap-6 md:grid-cols-2"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
              >
                <div
                  className={cn(
                    "pl-12 md:pl-0",
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12",
                  )}
                >
                  <Chip>{item.period}</Chip>
                </div>
                <div className="absolute left-4 top-2 size-3 rounded-full bg-ocean ring-4 ring-ocean-soft md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={cn(
                    "pl-12",
                    index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pl-0 md:pr-12",
                  )}
                >
                  <div className="rounded-2xl border border-white bg-white p-6 transition hover:-translate-y-1 soft-shadow">
                    <div className="flex items-center gap-3">
                      <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-100 bg-white text-sm font-bold text-ocean">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="h-full w-full object-contain p-1.5"
                          />
                        ) : (
                          item.mark
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{item.role}</h3>
                        <div className="text-sm text-slate-500">
                          {item.company} · {item.employmentType}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-400">
                          {item.location} · {item.locationType}
                        </div>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-ocean">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {item.skills && item.skills.length > 0 ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <Chip key={`${item.company}-${skill}`}>{skill}</Chip>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionIntro
            chip="02 - Selected work"
            title={
              <>
                Product surfaces with a little <span className="text-ocean">spark</span>
              </>
            }
            copy="A few focused examples of engineering, product thinking, and interface craft working together."
          />
          <ProjectGrid state={projectState} />
        </div>
      </section>

      <section
        id="social"
        className="relative overflow-hidden bg-gradient-to-b from-sand to-coral-soft py-24"
      >
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <motion.div
              className="md:col-span-7"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Chip coral>03 - Social</Chip>
              <h2 className="mt-4 text-5xl font-extrabold leading-[0.98] md:text-7xl">
                A few <span className="grad-coral">moments</span>
                <br />
                beyond the code.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-slate-700">
                I keep this portfolio professional, but still human: Symphony3
                team snapshots, workshop memories, and a small window into my
                Instagram presence.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <Button asChild className="rounded-2xl bg-coral text-white hover:bg-coral/90">
                <a href={profile.instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram size={18} /> Follow {profile.instagramHandle}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-coral hover:text-coral"
              >
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  View LinkedIn <Play size={16} />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["S3", "Symphony3"],
              ["AWS", "cloud learning"],
              ["RMIT", "education"],
              ["IG", profile.instagramHandle],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white bg-white p-5 soft-shadow-coral"
              >
                <div className="text-3xl font-extrabold text-coral">{value}</div>
                <div className="mt-1 text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
            {socialGallery.map((item, index) => (
              <motion.div
                key={item.title}
                className={cn("min-h-0", item.className)}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <PreviewImage
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  href={item.href}
                  className="h-full rounded-3xl soft-shadow-coral"
                  overlay={<Chip coral>{item.title}</Chip>}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="dance"
        className="relative overflow-hidden bg-gradient-to-b from-coral-soft to-paper py-24"
      >
        <div className="absolute -left-20 top-16 size-72 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute -right-16 bottom-10 size-64 rounded-full bg-ocean/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionIntro
              chip={danceIntro.chip}
              title={
                <>
                  Street <span className="grad-coral">dance</span> is my
                  <br className="hidden md:block" /> other language
                </>
              }
              copy={danceIntro.copy}
            />
            <motion.div
              className="rounded-3xl border border-white bg-white px-6 py-5 text-center soft-shadow-coral"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Dancing for
              </div>
              <div className="mt-1 text-3xl font-extrabold text-coral md:text-4xl">
                {danceExperience}
              </div>
              <div className="mt-1 text-xs text-slate-500">since September 2017</div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {danceIntro.styles.map((style) => (
              <Chip key={style} coral>
                <Music2 size={12} /> {style}
              </Chip>
            ))}
          </div>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-coral/25 md:left-1/2 md:-translate-x-1/2" />
            {danceTimeline.map((milestone, index) => {
              const milestoneDate = milestone.current ? now : new Date(milestone.date);
              const experience = formatDuration(
                durationBetween(danceStart, milestoneDate),
              );
              const age = formatDuration(durationBetween(birthDate, milestoneDate));
              return (
                <motion.article
                  key={`${milestone.title}-${milestone.date}`}
                  className="relative mb-10 grid gap-6 md:grid-cols-2"
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-70px" }}
                >
                  <div
                    className={cn(
                      "pl-12 md:pl-0",
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12",
                    )}
                  >
                    <Chip coral>{milestone.label}</Chip>
                  </div>
                  <div
                    className={cn(
                      "absolute left-4 top-2 size-3 rounded-full ring-4 ring-coral-soft md:left-1/2 md:-translate-x-1/2",
                      milestone.current ? "bg-ocean" : "bg-coral",
                    )}
                  />
                  <div
                    className={cn(
                      "pl-12",
                      index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pl-0 md:pr-12",
                    )}
                  >
                    <div className="rounded-2xl border border-white bg-white p-6 transition hover:-translate-y-1 soft-shadow">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-coral-soft text-xl">
                          {milestone.emoji}
                        </span>
                        <h3 className="text-lg font-bold">{milestone.title}</h3>
                      </div>
                      {milestone.description ? (
                        <p className="mt-3 text-sm text-slate-600">
                          {milestone.description}
                        </p>
                      ) : null}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Chip>Dance experience: {experience}</Chip>
                        <Chip coral>Age: {age}</Chip>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-16 space-y-10">
            {danceShowcases.map((showcase) => (
              <motion.div
                key={showcase.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-extrabold md:text-3xl">
                    {showcase.title}
                  </h3>
                  {showcase.year ? <Chip coral>{showcase.year}</Chip> : null}
                </div>
                <p className="mt-2 max-w-2xl text-slate-600">{showcase.blurb}</p>
                <div className="mt-6">
                  <ScrollableGallery images={showcase.images} label={showcase.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionIntro
            chip="05 - Certifications"
            title={
              <>
                Cloud foundations with <span className="text-ocean">proof</span>{" "}
                behind them
              </>
            }
            copy="AWS credentials that support the engineering work I am growing into: operations, architecture, and practical cloud fluency."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                    Part of my ongoing AWS learning path for building and operating
                    reliable cloud-backed software.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="bg-gradient-to-b from-transparent to-ocean-soft/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
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
                  {[
                    "DevOps",
                    "Full-stack",
                    "AWS DevOps Pro",
                    "AI-assisted work",
                  ].map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:col-span-7 md:grid-cols-3">
                {[
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
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-ocean-soft/60 p-5"
                  >
                    <div className="mb-4 grid size-10 place-items-center rounded-xl bg-white text-ocean">
                      <BadgeCheck size={18} />
                    </div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-ink pb-10 pt-24 text-white">
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
              <Button asChild size="lg" className="mt-6 rounded-2xl bg-ocean text-white hover:bg-ocean/90">
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
                    href={[profile.githubUrl, profile.linkedinUrl, profile.instagramUrl][index]}
                    aria-label={["GitHub", "LinkedIn", "Instagram"][index]}
                    target={index === 0 && profile.githubUrl.startsWith("#") ? undefined : "_blank"}
                    rel={index === 0 && profile.githubUrl.startsWith("#") ? undefined : "noreferrer"}
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
            <div>© 2026 {profile.name}. Built with React, TypeScript, and care.</div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400" />
              {profile.availability}
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-2xl bg-ocean text-white shadow-lg shadow-ocean/30 transition hover:-translate-y-1 hover:bg-ocean-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-4"
      >
        <ChevronUp size={22} />
      </a>

    </main>
  );
}

function ProjectGrid({ state }: { state: DataState<Project[]> }) {
  if (state.status === "loading") {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-3" aria-label="Loading projects">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-96 animate-pulse rounded-3xl bg-slate-100" />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="mt-12 rounded-3xl border border-coral/20 bg-coral-soft p-8 text-coral-deep">
        <h3 className="font-bold">Projects could not load</h3>
        <p className="mt-2 text-sm">{state.message}</p>
      </div>
    );
  }

  if (state.status === "empty") {
    return (
      <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-8 text-slate-600 soft-shadow">
        <h3 className="font-bold text-ink">Projects are being curated</h3>
        <p className="mt-2 text-sm">
          Check back soon for case studies with context, outcomes, and source
          links.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {state.data.map((project, index) => (
        <motion.article
          key={project.title}
          className="group overflow-hidden rounded-3xl border border-slate-100 bg-white soft-shadow"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          transition={{ delay: index * 0.08 }}
        >
          <PreviewImage
            src={project.image}
            alt={`${project.title} project preview`}
            title={project.title}
            className="aspect-[4/3]"
            overlay={
              <Chip coral={project.accent === "coral"}>
                <Sparkles size={12} /> Case study
              </Chip>
            }
          />
          <div className="p-6">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Chip key={tag} coral={project.accent === "coral"}>
                  <BadgeCheck size={12} /> {tag}
                </Chip>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default App;
