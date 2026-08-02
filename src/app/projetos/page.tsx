import type { Metadata } from "next";
import { projects, getProjectCategories } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos desenvolvidos por Diego Vieira de Souza, com foco em back-end e full stack.",
};

export default function ProjetosPage() {
  const categories = getProjectCategories();

  return (
    <>
      <section
        aria-labelledby="titulo-projetos"
        className="border-b border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Projetos
          </p>
          <h1
            id="titulo-projetos"
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Projetos que desenvolvi
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Aplicações criadas para consolidar conhecimentos em Java, Spring Boot e desenvolvimento
            full stack. Cada projeto apresenta contexto, arquitetura e aprendizados.
          </p>
        </Container>
      </section>

      <div className="py-16 sm:py-20">
        <Container>
          <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-secondary"
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
