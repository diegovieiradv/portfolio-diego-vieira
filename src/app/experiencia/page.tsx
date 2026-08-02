import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Trajetória profissional de Diego Vieira de Souza: cargos, empresas e principais entregas.",
};

export default function ExperienciaPage() {
  return (
    <>
      <section
        aria-labelledby="titulo-experiencia"
        className="border-b border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Experiência
          </p>
          <h1
            id="titulo-experiencia"
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Trajetória profissional
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Cargos, empresas e principais entregas ao longo da minha carreira — antes e durante a
            transição para o desenvolvimento de software.
          </p>
        </Container>
      </section>

      <section aria-label="Linha do tempo de experiências" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
            {experiences.map((experience, index) => (
              <li key={`${experience.role}-${index}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[25px] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background sm:-left-[37px]"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ol>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-border bg-surface p-6">
            <Briefcase className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-base leading-relaxed text-secondary">
              Em transição para o desenvolvimento de software, busco oportunidades para aplicar meus
              conhecimentos em <span className="font-semibold text-foreground">Java</span> e{" "}
              <span className="font-semibold text-foreground">Spring Boot</span> em projetos reais.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
