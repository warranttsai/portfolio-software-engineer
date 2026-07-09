// Shared type for team/developer showcase data (used by
// components/ui/team-showcase.tsx and any consumers of that component).

export type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  themeColor: string;
};
