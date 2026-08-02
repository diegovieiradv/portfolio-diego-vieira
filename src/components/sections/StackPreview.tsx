import { ArrowRight } from "lucide-react";
import { technologyCategories } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { TechLevel } from "@/types";

const levelStyles: Record<TechLevel, string> = {
  "foco principal": "bg-primary-subtle text-primary",
  "experiência prática": "bg-surface-secondary text-secondary",
  "conhecimento intermediário": "bg-surface-secondary text-secondary",
  "em aprendizado": "bg-surface-secondary text-muted",
};

export function StackPreview() {
  const mainStack = technologyCategories[0];

  return (
    <section
      aria-label="Stack principal"
      className="border-y border-border bg-surface py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Stack principal"
            title="Tecnologias que fazem parte do meu dia a dia"
            description="Foco em Java e no ecossistema de back-end, com base em boas práticas de desenvolvimento."
          />
          <ButtonLink href="/tecnologias" variant="outline" size="sm" className="shrink-0">
            Ver todas as tecnologias
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mainStack.items.map((tech) => (
            <li
              key={tech.name}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-foreground">{tech.name}</p>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
                    levelStyles[tech.level]
                  )}
                >
                  {tech.level}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{tech.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
