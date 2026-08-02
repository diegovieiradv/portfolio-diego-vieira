import type { Metadata } from "next";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/Container";
import { CertificationsList } from "@/components/ui/CertificationsList";

export const metadata: Metadata = {
  title: "Certificações",
  description:
    "Formações, cursos, certificações e graduação de Diego Vieira de Souza na área de desenvolvimento de software.",
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
            Formações e certificações
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Cursos, formações, certificações e graduação que apoiam meu desenvolvimento como
            desenvolvedor back-end e full stack.
          </p>
        </Container>
      </section>

      <div className="py-16 sm:py-20">
        <Container>
          <CertificationsList certifications={certifications} />
        </Container>
      </div>
    </>
  );
}
