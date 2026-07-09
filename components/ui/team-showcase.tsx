import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/types/team";

interface TeamShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  buttonText?: string;
  members: TeamMember[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const TeamShowcase = React.forwardRef<HTMLDivElement, TeamShowcaseProps>(
  (
    {
      title = "THE MAGIC DEVS YOU'VE BEEN SEARCHING FOR",
      description = "Why waste time on so many platforms searching, interviewing, and finding out it is not a good fit? We do all of this for you. No more back and forth. Get matched today.",
      buttonText = "FIND YOUR DEVELOPER",
      members,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-background px-4 py-16 text-foreground md:px-8",
          className,
        )}
        {...props}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="mb-12 max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-normal md:text-5xl">
              {title}
            </h1>
            <p className="mb-8 text-muted-foreground">{description}</p>
            <Button size="lg">{buttonText}</Button>
          </div>

          <motion.div
            className="flex w-full items-end justify-center -space-x-8 px-4 md:space-x-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="w-full max-w-[200px] md:max-w-[250px]"
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.05, zIndex: 40 }}
                  style={{ zIndex: members.length - index }}
                >
                  <div
                    className={cn(
                      "relative flex h-[280px] flex-col items-center justify-between overflow-hidden rounded-t-[50%] px-4 pb-4 pt-8 text-center md:h-[350px]",
                      member.themeColor,
                    )}
                  >
                    <div className="relative z-10 text-black">
                      <h3 className="text-sm font-bold md:text-base">
                        {member.name}
                      </h3>
                      <p className="text-xs opacity-80 md:text-sm">
                        {member.role}
                      </p>
                    </div>
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="absolute bottom-0 left-0 h-auto w-full object-cover object-bottom"
                      style={{ maxHeight: "85%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  },
);

TeamShowcase.displayName = "TeamShowcase";

export { TeamShowcase };
export type { TeamShowcaseProps };
export type { TeamMember } from "@/types/team";
