import cloudOpsCertificate from "@/src/assets/aws/aws-certified-cloudops-engineer-associate-certificate.png";
import cloudPractitionerCertificate from "@/src/assets/aws/aws-certified-cloud-practitioner-certificate.png";
import solutionsArchitectCertificate from "@/src/assets/aws/aws-certified-solutions-architect-associate-certificate.png";
import instagramScreenshot from "@/src/assets/social-media/warrant-mr-kaeru-ins-main-page-ss.png";
import symphonyAwsWorkshop from "@/src/assets/symphony3/aws-citadel-ws.jpg";
import symphonyTeamPhoto from "@/src/assets/symphony3/group-photo-1.jpg";
import blackBallLogo from "@/src/assets/career/blackball-logo.jpg";
import cleanstormwaterLogo from "@/src/assets/career/cleanstormwater-logo.jpg";
import filaLogo from "@/src/assets/career/fila-logo.jpg";
import symphony3Logo from "@/src/assets/career/symphony3-logo.png";

export type Accent = "ocean" | "coral" | "ink";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  accent: Accent;
};

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
    "an associate engineer at Symphony3, growing across software engineering, cloud, integrations, and product-minded delivery. I like practical systems, clean interfaces, and teams that keep learning in public.",
  heroStatus: "Associate Engineer @ Symphony3",
  heroSubtext: "Software engineering, cloud practice, and connected digital experiences",
  linkedinUrl: "https://www.linkedin.com/in/warrant-tsai-9211223b8/",
  instagramUrl: "https://www.instagram.com/warrant_mr_kaeru/",
  instagramHandle: "@warrant_mr_kaeru",
  githubUrl: "https://github.com/warranttsai",
  emailHref: "https://www.linkedin.com/in/warrant-tsai-9211223b8/",
  contactLabel: "Connect on LinkedIn",
  resumeHref: "https://www.linkedin.com/in/warrant-tsai-9211223b8/",
};

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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

export const socialGallery = [
  {
    title: "Instagram profile",
    image: instagramScreenshot,
    alt: "Screenshot of Warrant Tsai's Instagram profile",
    className: "col-span-2 row-span-2",
  },
  {
    title: "AWS workshop",
    image: symphonyAwsWorkshop,
    alt: "Warrant Tsai at an AWS workshop",
  },
  {
    title: "Symphony3 team",
    image: symphonyTeamPhoto,
    alt: "Symphony3 team group photo",
    className: "col-span-2",
  },
];
