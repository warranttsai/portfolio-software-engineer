// Shared types for portfolio content (used by src/content/portfolio.ts
// and consumed by components like src/App.tsx).

export type Accent = "ocean" | "coral" | "ink";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  accent: Accent;
};
