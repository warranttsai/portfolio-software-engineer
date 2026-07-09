import cloudOpsCertificate from "@/src/assets/aws/aws-certified-cloudops-engineer-associate-certificate.png";
import cloudPractitionerCertificate from "@/src/assets/aws/aws-certified-cloud-practitioner-certificate.png";
import solutionsArchitectCertificate from "@/src/assets/aws/aws-certified-solutions-architect-associate-certificate.png";
import instagramScreenshot from "@/src/assets/social-media/warrant-mr-kaeru-ins-main-page-ss.png";
import symphonyAwsWorkshop from "@/src/assets/symphony3/aws-citadel-ws.jpg";
import symphonyTeamPhoto from "@/src/assets/symphony3/group-photo-1.jpg";
import symphonyTeamPhotoTwo from "@/src/assets/symphony3/group-photo-2.jpg";
import foGuangShanOne from "@/src/assets/volunteering/2026-fo-guang-shan/1.jpg";
import foGuangShanTwo from "@/src/assets/volunteering/2026-fo-guang-shan/2.jpg";
import blackBallLogo from "@/src/assets/career/blackball-logo.jpg";
import cleanstormwaterLogo from "@/src/assets/career/cleanstormwater-logo.jpg";
import filaLogo from "@/src/assets/career/fila-logo.jpg";
import symphony3Logo from "@/src/assets/career/symphony3-logo.png";
import type { Project } from "@/types/portfolio";

export type { Accent, Project } from "@/types/portfolio";

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  employmentType: string;
  location: string;
  locationType: string;
  mark: string;
  logo?: string;
  bullets: string[];
  skills?: string[];
};

export const profile = {
  name: "Warrant Tsai",
  shortName: "Warrant",
  initials: "W",
  role: "Associate Engineer",
  company: "Symphony3",
  location: "Melbourne, Australia",
  timezone: "AEST",
  availability: "Open to learning, collaboration, and selected opportunities",
  tagline: "I build interfaces and cloud-aware systems that connect people.",
  intro:
    "Master of IT graduate from RMIT, now Associate Engineer at Symphony3, growing across software engineering, cloud, integrations, and product-minded delivery. I like practical systems, clean interfaces, and teams that keep learning in public.",
  heroStatus: "Associate Engineer @ Symphony3",
  heroSubtext: "Software engineering, cloud practice, and connected digital experiences",
  linkedinUrl: "https://www.linkedin.com/in/warrant-tsai-9211223b8/",
  instagramUrl: "https://www.instagram.com/warrant_mr_kaeru/",
  instagramHandle: "@warrant_mr_kaeru",
  githubUrl: "https://github.com/warranttsai",
  email: "warrant1997@gmail.com",
  emailHref: "mailto:warrant1997@gmail.com",
  phone: "+61 450 601 208",
  phoneHref: "tel:+61450601208",
  contactLabel: "Email me",
  resumeHref: "https://www.linkedin.com/in/warrant-tsai-9211223b8/",
  citadelWorkshopPostUrl:
    "https://www.linkedin.com/posts/warrant-tsai-9211223b8_truely-appreciate-symphony3-for-the-opportunity-ugcPost-7473128434118909952-kS7f/",
};

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Dance", href: "#dance", coral: true },
  { label: "Certifications", href: "#certifications" },
  { label: "Instagram", href: "#social", coral: true },
];

export const heroImages = {
  primary: symphonyAwsWorkshop,
  primaryAlt: "Warrant Tsai with colleagues at a Symphony3 AWS workshop",
  secondary: symphonyTeamPhoto,
  secondaryAlt: "Symphony3 team group photo",
};

export const skills = [
  "React",
  "TypeScript",
  "AWS",
  "CloudOps",
  "Solutions Architecture",
  "Integrations",
  "Digital Experiences",
  "Master of IT",
  "RMIT University",
  "Symphony3",
  "Community",
];

export const experience: ExperienceItem[] = [
  {
    period: "May 2024 - Present",
    role: "Associate Engineer",
    company: "Symphony3",
    employmentType: "Full-time",
    location: "Melbourne, Victoria, Australia",
    locationType: "Hybrid",
    mark: "S3",
    logo: symphony3Logo,
    bullets: [
      "Developed and maintained end-to-end applications with React and JavaScript frontends plus Java, Python, and C# backend services.",
      "Managed infrastructure maintenance and deployment workflows across AWS, Upsun, and cPanel to support reliable code delivery.",
      "Analyzed cloud resource usage, identified inefficiencies, and right-sized environments to reduce operational overhead.",
      "Led technical integration work connecting platforms and services into unified, high-performance workflows.",
    ],
    skills: ["React", "JavaScript", "Java", "Python", "C#", "AWS", "Upsun", "cPanel", "Systems Integration"],
  },
  {
    period: "Jan 2023 - Dec 2025",
    role: "Customer Service Assistant",
    company: "FILA",
    employmentType: "Contract",
    location: "Melbourne, Victoria, Australia",
    locationType: "On-site",
    mark: "FI",
    logo: filaLogo,
    bullets: [
      "Supported customers at Melbourne DFO South Wharf in a high-traffic retail environment.",
      "Handled multilingual communication, cashiering, product queries, and store-floor support with care and consistency.",
      "Built strong service habits around communication, prioritisation, and calm problem-solving under pressure.",
    ],
    skills: ["Customer Service", "Multilingual Communication", "Cashiering", "Retail Operations"],
  },
  {
    period: "Jun 2022 - May 2024",
    role: "Software Intern",
    company: "Cleanstormwater",
    employmentType: "Freelance",
    location: "Melbourne, Victoria, Australia",
    locationType: "Hybrid",
    mark: "CS",
    logo: cleanstormwaterLogo,
    bullets: [
      "Developed and maintained full-stack features using React, Python, and PostgreSQL.",
      "Managed AWS cloud infrastructure components and deployment workflows while building hands-on cloud experience.",
      "Supported Agile delivery by facilitating daily stand-ups and tracking sprint progress in Jira and Bitbucket.",
      "Streamlined DevOps operations through repository management, issue tracking, and cross-platform delivery coordination.",
    ],
    skills: ["React", "Python", "PostgreSQL", "AWS", "Jira", "Bitbucket", "Agile", "HTML5"],
  },
  {
    period: "Mar 2021 - May 2022",
    role: "Customer Service Representative",
    company: "BlackBall Chinatown",
    employmentType: "Part-time",
    location: "Melbourne, Victoria, Australia",
    locationType: "On-site",
    mark: "BB",
    logo: blackBallLogo,
    bullets: [
      "Maintained quality and speed in a fast-paced service environment during peak traffic periods.",
      "Followed detailed recipes, food safety protocols, and standard operating procedures to keep product quality consistent.",
      "Monitored stock levels and coordinated replenishment to prevent downtime in shop operations.",
      "Assisted with basic troubleshooting for POS systems and digital payment terminals.",
    ],
    skills: ["Operations", "SOPs", "Inventory Coordination", "POS Troubleshooting", "Customer Service"],
  },
];

export const projects: Project[] = [
  {
    title: "AWS Learning Path",
    description:
      "A focused certification journey across cloud fundamentals, operations, and solution design.",
    tags: ["AWS", "CloudOps", "Architecture"],
    image: solutionsArchitectCertificate,
    accent: "ocean",
  },
  {
    title: "Symphony3 Engineering Practice",
    description:
      "Real-world associate engineering experience in digital solutions, integrations, and client delivery.",
    tags: ["Engineering", "Delivery", "Integrations"],
    image: symphonyTeamPhoto,
    accent: "ink",
  },
  {
    title: "Personal Web Portfolio",
    description:
      "A React and Tailwind portfolio built to collect experience, certifications, photos, and social presence.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: instagramScreenshot,
    accent: "coral",
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: cloudPractitionerCertificate,
    alt: "AWS Certified Cloud Practitioner certificate",
  },
  {
    title: "AWS Certified CloudOps Engineer - Associate",
    image: cloudOpsCertificate,
    alt: "AWS Certified CloudOps Engineer Associate certificate",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    image: solutionsArchitectCertificate,
    alt: "AWS Certified Solutions Architect Associate certificate",
  },
];

export const education = [
  {
    title: "Master of Information Technology",
    institution: "RMIT University",
    period: "2021 - 2022",
    location: "Melbourne, Australia",
    description: "Graduate degree focused on software engineering, cloud systems, and modern development practices.",
  },
];


export const socialGallery = [
  {
    title: "Instagram profile",
    image: instagramScreenshot,
    alt: "Screenshot of Warrant Tsai's Instagram profile",
    href: profile.instagramUrl,
    className: "col-span-2 row-span-2",
  },
  {
    title: "AWS workshop",
    image: symphonyAwsWorkshop,
    alt: "Warrant Tsai at an AWS workshop",
    href: profile.citadelWorkshopPostUrl,
  },
  {
    title: "Symphony3 team",
    image: symphonyTeamPhoto,
    alt: "Symphony3 team group photo",
    href: profile.linkedinUrl,
    className: "col-span-2",
  },
  {
    title: "Symphony3 crew",
    image: symphonyTeamPhotoTwo,
    alt: "Warrant Tsai with the Symphony3 team",
    href: profile.linkedinUrl,
  },
  {
    title: "Volunteering",
    image: foGuangShanOne,
    alt: "Warrant Tsai volunteering at Fo Guang Shan in 2026",
    href: profile.instagramUrl,
  },
  {
    title: "Community day",
    image: foGuangShanTwo,
    alt: "Warrant Tsai giving back at a Fo Guang Shan community event",
    href: profile.instagramUrl,
  },
];

// -- Street dance ---------------------------------------------------------

// Eagerly import every showcase image so the gallery stays data-driven.
const deepSlymeVol1Images = import.meta.glob(
  "../assets/social-media/deep-slyme-vol1-showcase/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true, import: "default" },
) as Record<string, string>;
const deepSlymeImages = import.meta.glob(
  "../assets/social-media/deep-slyme-vol2-showcase/*.{png,jpg,jpeg}",
  { eager: true, import: "default" },
) as Record<string, string>;
const emotionShowcaseImages = import.meta.glob(
  "../assets/social-media/emotion-dance-studio-2026-guest-showcase/*.{png,jpg,jpeg}",
  { eager: true, import: "default" },
) as Record<string, string>;
const hhiImages = import.meta.glob(
  "../assets/social-media/hhi-2025/*.{png,jpg,jpeg}",
  { eager: true, import: "default" },
) as Record<string, string>;
const indigoBlueNanakaImages = import.meta.glob(
  "../assets/social-media/indigo-blue-nanaka-team-showcase/*.{png,jpg,jpeg}",
  { eager: true, import: "default" },
) as Record<string, string>;
const ixagOpenStyleBattleImages = import.meta.glob(
  "../assets/social-media/ixag-open-style-battle/*.{png,jpg,jpeg}",
  { eager: true, import: "default" },
) as Record<string, string>;

function sortedImages(record: Record<string, string>): string[] {
  return Object.keys(record)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => record[key]);
}

export type DanceShowcase = {
  title: string;
  year?: string;
  blurb: string;
  images: { src: string; alt: string }[];
};

export type DanceMilestone = {
  /** ISO date used to compute dance experience and age dynamically. */
  date: string;
  label: string;
  emoji: string;
  title: string;
  description?: string;
  current?: boolean;
  /** "battle" entries render with category/result/location instead of a description. */
  kind?: "milestone" | "battle";
  category?: string;
  result?: string;
  location?: string;
};

// Anchor dates that drive every dynamic duration on the page.
export const danceStartDate = "2017-09-24";
export const danceBirthDate = "1997-08-24";

export const danceIntro = {
  chip: "04 - Street dance",
  copy:
    "Away from the keyboard I have been dancing since 2017. Starting with Popping, I've grown through House, Hip-hop, and Locking styles while performing across Australia. Street dance keeps me sharp, expressive, and connected to a community that keeps pushing each other to grow.",
  styles: ["Popping", "House", "Hip-hop", "Locking", "Freestyle", "Showcase"],
};

export const danceTimeline: DanceMilestone[] = [
  {
    date: "2017-09-24",
    label: "September 24, 2017",
    emoji: "💃",
    title: "Started dancing with Popping",
    description: "Where the journey began—discovering the groove and isolation of Popping dance.",
  },
  {
    date: "2020-07-01",
    label: "July 2020",
    emoji: "✈️",
    title: "Moved to Melbourne, Australia",
    description: "New city, new scenes. Exposed to House dance, Hip-hop dance, and styles beyond what I knew.",
  },
  {
    date: "2022-01-01",
    label: "2022",
    emoji: "🏆",
    title: "Popping Nation VIC 2022 (Team LUGIA)",
    kind: "battle",
    category: "Team Battle",
    result: "RUNNER-UP",
    location: "Melbourne, VIC",
  },
  {
    date: "2022-01-02",
    label: "2022",
    emoji: "🏆",
    title: "Real Funk Vol.1",
    kind: "battle",
    category: "1v1",
    result: "TOP 16",
    location: "Melbourne, VIC",
  },
  {
    date: "2022-01-03",
    label: "2022",
    emoji: "🏆",
    title: "Real Funk Vol.1.5",
    kind: "battle",
    category: "2v2",
    result: "TOP 8",
    location: "Melbourne, VIC",
  },
  {
    date: "2022-01-04",
    label: "2022",
    emoji: "🏆",
    title: "Uni Session",
    kind: "battle",
    category: "2v2",
    result: "TOP 16",
    location: "Melbourne, VIC",
  },
  {
    date: "2023-06-01",
    label: "June 2023",
    emoji: "🏆",
    title: "House Round Vol.1 2023",
    kind: "battle",
    category: "Battle",
    result: "TOP 10",
    location: "Melbourne, VIC",
  },
  {
    date: "2024-02-01",
    label: "February 2024",
    emoji: "🏆",
    title: "Lunar New Year 1V1 Freestyle Battle",
    kind: "battle",
    category: "1v1 Freestyle",
    result: "TOP 8",
    location: "Melbourne, VIC",
  },
  {
    date: "2024-03-01",
    label: "March 2024",
    emoji: "🔑",
    title: "Started learning Locking dance",
    description: "Adding funk, precision, and the sharp lock movements that define the style.",
  },
  {
    date: "2024-08-01",
    label: "August 2024",
    emoji: "🏆",
    title: "LMPB (Last Minute Popping Battle) Vol. 2",
    kind: "battle",
    category: "2v2 / 1v1",
    result: "WINNER (2v2) / TOP 16 (1v1)",
    location: "Melbourne, VIC",
  },
  {
    date: "2025-03-01",
    label: "March 2025",
    emoji: "🏆",
    title: "Bounce Back Vol. 2",
    kind: "battle",
    category: "Battle",
    result: "TOP 16",
    location: "Melbourne, VIC",
  },
  {
    date: "2025-04-01",
    label: "April 2025",
    emoji: "🥇",
    title: "HHI VIC",
    kind: "battle",
    category: "Hip Hop International",
    result: "Gold Medalist",
    location: "Melbourne, VIC",
  },
  {
    date: "2025-06-01",
    label: "June 2025",
    emoji: "🏆",
    title: "Funk Station Vol. 4",
    kind: "battle",
    category: "Battle",
    result: "TOP 16",
    location: "Melbourne, VIC",
  },
  {
    date: "2026-05-01",
    label: "May 2026",
    emoji: "🏆",
    title: "BTTB Vol. 4 (7 to Smoke)",
    kind: "battle",
    category: "1v1 Battle",
    result: "TOP 7",
    location: "Melbourne, VIC",
  },
  {
    date: danceStartDate,
    label: "Today",
    emoji: "🎭",
    title: "Still dancing, still growing",
    description: "Chasing cleaner grooves, bigger stages, and fresh challenges across styles.",
    current: true,
  },
];

export const danceShowcases: DanceShowcase[] = [
  {
    title: "Emotion Dance Studio Guest Showcase",
    year: "June 2026",
    blurb:
      "Invited as a guest performer for Emotion Dance Studio's 2026 showcase.",
    images: sortedImages(emotionShowcaseImages).map((src, index) => ({
      src,
      alt: `Emotion Dance Studio 2026 guest showcase performance ${index + 1}`,
    })),
  },
  {
    title: "Deep Slyme Vol.2",
    year: "April 2026",
    blurb: "Performance moments from the Deep Slyme Vol.2 showcase.",
    images: sortedImages(deepSlymeImages).map((src, index) => ({
      src,
      alt: `Deep Slyme Vol.2 showcase performance ${index + 1}`,
    })),
  },
  // IXAG Open Style Battle: a small 3-on-3 crew battle. We placed rank 4 out
  // of 5 crews, so there's no award/result to list for this one.
  {
    title: "IXAG Open Style Battle",
    year: "December 2025",
    blurb: "A small 3-on-3 open style crew battle at IXAG.",
    images: sortedImages(ixagOpenStyleBattleImages).map((src, index) => ({
      src,
      alt: `IXAG Open Style Battle performance ${index + 1}`,
    })),
  },
  {
    title: "Deep Slyme Vol.1",
    year: "November 2025",
    blurb: "Performance moments from the Deep Slyme Vol.1 showcase.",
    images: sortedImages(deepSlymeVol1Images).map((src, index) => ({
      src,
      alt: `Deep Slyme Vol.1 showcase performance ${index + 1}`,
    })),
  },
  {
    title: "Hip Hop International",
    year: "April 2025",
    blurb: "On stage for the Hip Hop International 2025 competition.",
    images: sortedImages(hhiImages).map((src, index) => ({
      src,
      alt: `Hip Hop International 2025 performance ${index + 1}`,
    })),
  },
  {
    title: "Indigo Blue x Nanaka Team Showcase",
    year: "January 2025",
    blurb: "Team showcase performance alongside Indigo Blue and Nanaka.",
    images: sortedImages(indigoBlueNanakaImages).map((src, index) => ({
      src,
      alt: `Indigo Blue x Nanaka team showcase performance ${index + 1}`,
    })),
  },
];

export type Duration = { years: number; months: number };

/** Whole years and months between two dates (month precision, day-aware). */
export function durationBetween(from: Date, to: Date): Duration {
  let totalMonths =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) {
    totalMonths -= 1;
  }
  totalMonths = Math.max(totalMonths, 0);
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
}

export function formatDuration({ years, months }: Duration): string {
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  }
  return parts.length > 0 ? parts.join(" ") : "just started";
}
