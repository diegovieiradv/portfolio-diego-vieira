import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

const steps = [
  {
    title: "Primeiros passos",
    description:
      "Comecei a estudar programação movido pelo interesse em entender como as aplicações funcionam.",
  },
  {
    title: "Formação acadêmica",
    description:
      "Ingressei no curso de Análise e Desenvolvimento de Sistemas para estruturar os conhecimentos.",
  },
  {
    title: "Foco em back-end",
    description:
      "Direcionei os estudos para Java e Spring Boot, APIs REST e banco de dados relacionais.",
  },
  {
    title: "Transição de carreira",
    description: "Consolidando a mudança de área com projetos práticos e aprendizado contínuo.",
  },
];

export function TrajectoryPreview() {
  return (
    <section aria-label="Resumo da trajetória" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Trajetória"
            title="Minha caminhada até a tecnologia"
            description="De uma nova área de atuação até o desenvolvimento de software, um passo de cada vez."
          />
          <ButtonLink href="/experiencia" variant="outline" size="sm" className="shrink-0">
            Ver trajetória completa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-xl border border-border bg-card p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-subtle font-mono text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
