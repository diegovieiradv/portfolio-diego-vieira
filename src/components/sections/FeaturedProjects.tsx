import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section aria-label="Projetos em destaque" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Projetos"
            title="Projetos em destaque"
            description="Uma seleção dos projetos que desenvolvi, com foco em back-end e full stack."
          />
          <ButtonLink href="/projetos" variant="outline" size="sm" className="shrink-0">
            Ver todos os projetos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
