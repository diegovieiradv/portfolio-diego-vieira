import type { Technology } from "@/data/technologies";
import { cn } from "@/lib/utils";
import type { TechLevel } from "@/types";

const levelStyles: Record<TechLevel, string> = {
  "foco principal": "bg-primary-subtle text-primary",
  "experiência prática": "bg-surface-secondary text-secondary",
  "conhecimento intermediário": "bg-surface-secondary text-secondary",
  "em aprendizado": "bg-surface-secondary text-muted",
};

type TechnologyCardProps = {
  technology: Technology;
};

export function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-foreground">{technology.name}</h3>
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
            levelStyles[technology.level]
          )}
        >
          {technology.level}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-secondary">{technology.description}</p>
    </div>
  );
}
