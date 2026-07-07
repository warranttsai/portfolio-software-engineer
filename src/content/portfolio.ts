import cloudOpsCertificate from "@/src/assets/aws/aws-certified-cloudops-engineer-associate-certificate.png";
import cloudPractitionerCertificate from "@/src/assets/aws/aws-certified-cloud-practitioner-certificate.png";
import solutionsArchitectCertificate from "@/src/assets/aws/aws-certified-solutions-architect-associate-certificate.png";
import instagramScreenshot from "@/src/assets/social-media/warrant-mr-kaeru-ins-main-page-ss.png";
import symphonyAwsWorkshop from "@/src/assets/symphony3/aws-citadel-ws.jpg";
import symphonyTeamPhoto from "@/src/assets/symphony3/group-photo-1.jpg";

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
  location: string;
  mark: string;
  bullets: string[];
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
  emailHref: "https://www.linkedin.com/in/warrant-tsai-9211223b8/",
  contactLabel: "Connect on LinkedIn",
  githubUrl: "#projects",
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
    period: "Current",
    role: "Associate Engineer",
    company: "Symphony3",
    location: "Melbourne",
    mark: "S3",
    bullets: [
      "Contributing to digital and integration solutions for client-facing platforms.",
      "Building practical engineering habits across React, TypeScript, AWS, and delivery workflows.",
      "Learning from senior engineers while turning business problems into reliable software.",
    ],
  },
  {
    period: "Education",
    role: "Software engineering graduate",
    company: "RMIT University",
    location: "Melbourne",
    mark: "RU",
    bullets: [
      "Developed a foundation in software design, web development, databases, and cloud concepts.",
      "Built project experience through research, collaboration, and applied engineering coursework.",
    ],
  },
  {
    period: "Ongoing",
    role: "Cloud and software learner",
    company: "Independent practice",
    location: "Australia",
    mark: "AWS",
    bullets: [
      "Earned AWS credentials across practitioner, CloudOps, and solutions architecture pathways.",
      "Keep a portfolio mindset: document, refine, and turn small experiments into reusable work.",
    ],
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
