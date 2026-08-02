import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/types/experience";
import { cn } from "@/lib/utils";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const Company = experience.companyLink ? "a" : "span";

  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {experience.period}
        </span>
        {experience.current ? (
          <span className="flex items-center gap-1.5 rounded-full bg-primary-subtle px-2.5 py-0.5 font-mono text-xs font-medium text-primary">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Em andamento
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-xl font-semibold text-foreground">{experience.role}</h3>
      <Company
        className={cn(
          "mt-1 inline-flex items-center gap-1 text-base font-medium text-secondary",
          experience.companyLink && "transition-colors hover:text-primary"
        )}
        {...(experience.companyLink
          ? { href: experience.companyLink, target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {experience.company}
        {experience.companyLink ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
      </Company>

      <p className="mt-4 text-base leading-relaxed text-secondary">{experience.summary}</p>

      <ul className="mt-4 space-y-2">
        {experience.responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className="flex items-start gap-2 text-sm leading-relaxed text-secondary"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {responsibility}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-primary"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
