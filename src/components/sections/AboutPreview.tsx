import { ArrowRight, GraduationCap, MapPin, Target } from "lucide-react";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";

const highlights = [
  { icon: MapPin, label: "Localização", value: personal.location },
  { icon: GraduationCap, label: "Formação", value: "Análise e Desenvolvimento de Sistemas" },
  { icon: Target, label: "Foco", value: "Java · Spring Boot · APIs REST" },
];

export function AboutPreview() {
  return (
    <section aria-label="Resumo sobre mim" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Sobre mim"
            title="Em transição para a área de tecnologia"
            description="Uma breve apresentação da minha trajetória."
          />

          <div>
            <p className="text-lg leading-relaxed text-secondary">{personal.summary}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <li key={label} className="rounded-xl border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                </li>
              ))}
            </ul>

            <ButtonLink href="/sobre" variant="secondary" size="sm" className="mt-8">
              Saiba mais sobre mim
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
