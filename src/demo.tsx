import { TeamShowcase, type TeamMember } from "@/components/ui/team-showcase";

const developers: TeamMember[] = [
  {
    name: "ANNA DEAN",
    role: "React engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=420&q=80",
    themeColor: "bg-[#F9D4D5]",
  },
  {
    name: "CHRIS MEZY",
    role: "Data engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=420&q=80",
    themeColor: "bg-[#D1E5E6]",
  },
  {
    name: "LESLIE SCHNIDER",
    role: "Backend developer",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=420&q=80",
    themeColor: "bg-[#EAE1DA]",
  },
  {
    name: "JIM BRICKTON",
    role: "AI specialist",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=420&q=80",
    themeColor: "bg-[#FDEACC]",
  },
];

export default function TeamShowcaseDemo() {
  return <TeamShowcase members={developers} />;
}
