import type { Metadata } from "next";
import { technologyCategories } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnologyCard } from "@/components/ui/TechnologyCard";

export const metadata: Metadata = {
  title: "Tecnologias",
  description:
    "Tecnologias que utilizo no desenvolvimento back-end e full stack, organizadas por categoria.",
};

export default function TecnologiasPage() {
  return (
    <>
      <section
        aria-labelledby="titulo-tecnologias"
        className="border-b border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Tecnologias
          </p>
          <h1
            id="titulo-tecnologias"
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Tecnologias que utilizo
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Organizadas por categoria, com os níveis que melhor refletem minha experiência e o
            contexto em que cada uma é utilizada.
          </p>
        </Container>
      </section>

      <div className="py-16 sm:py-20">
        <Container>
          <div className="space-y-16">
            {technologyCategories.map((category) => (
              <section key={category.category} aria-label={`Categoria ${category.category}`}>
                <SectionHeader title={category.category} />
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((technology) => (
                    <li key={technology.name}>
                      <TechnologyCard technology={technology} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
