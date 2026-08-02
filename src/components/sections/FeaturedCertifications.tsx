import { ArrowRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { CertificationCard } from "@/components/ui/CertificationCard";

export function FeaturedCertifications() {
  const featured = certifications.slice(0, 3);

  return (
    <section
      aria-label="Certificações em destaque"
      className="border-y border-border bg-surface py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Certificações"
            title="Formação e certificações"
            description="Cursos e certificações que apoiam meu desenvolvimento como desenvolvedor."
          />
          <ButtonLink href="/certificacoes" variant="outline" size="sm" className="shrink-0">
            Ver todas as certificações
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((certification) => (
            <CertificationCard key={certification.title} certification={certification} />
          ))}
        </div>
      </Container>
    </section>
  );
}
