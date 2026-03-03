import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  action?: ReactNode;
}

export default function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:bg-accent before:rounded-full">
        {title}
      </h2>
      {action}
    </div>
  );
}
