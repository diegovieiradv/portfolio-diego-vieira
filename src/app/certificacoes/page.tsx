import type { Metadata } from "next";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/Container";
import { CertificationCard } from "@/components/ui/CertificationCard";

export const metadata: Metadata = {
  title: "Certificações",
  description:
    "Cursos e certificações que apoiam o desenvolvimento de Diego Vieira de Souza como desenvolvedor.",
  alternates: { canonical: "/certificacoes" },
};

export default function CertificacoesPage() {
  return (
    <>
      <section
        aria-labelledby="titulo-certificacoes"
        className="border-b border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Certificações
          </p>
          <h1
            id="titulo-certificacoes"
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Cursos e certificações
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Formações que complementam meus estudos e reforçam minhas bases em desenvolvimento
            back-end e full stack.
          </p>
        </Container>
      </section>

      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={`${certification.title}-${index}`}
                certification={certification}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
