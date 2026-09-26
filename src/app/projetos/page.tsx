import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCatalog } from "@/components/ui/ProjectCatalog";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de desenvolvimento back-end e full stack de Diego Vieira de Souza, com foco em Java e Spring Boot.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
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
            Alguns dos projetos que desenvolvi
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Aplicações criadas para consolidar conhecimentos em Java, Spring Boot, Node.js e desenvolvimento
            full stack. Cada projeto apresenta contexto, arquitetura e aprendizados.
          </p>
        </Container>
      </section>

      <div className="py-16 sm:py-20">
        <Container>
          <ProjectCatalog projects={projects} />
        </Container>
      </div>
    </>
  );
}
