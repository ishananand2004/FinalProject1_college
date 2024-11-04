import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Section({ children, ...rest }: SectionProps) {
  return (
    <section {...rest} className={cn("w-full py-10 lg:py-20", rest.className)}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
