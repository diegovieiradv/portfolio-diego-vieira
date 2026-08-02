import { ArrowRight } from "lucide-react";
import { technologyCategories } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { TechnologyCard } from "@/components/ui/TechnologyCard";

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
          {mainStack.items.map((technology) => (
            <li key={technology.name}>
              <TechnologyCard technology={technology} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
