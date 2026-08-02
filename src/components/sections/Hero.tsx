import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Hero() {
  return (
    <section aria-label="Apresentação" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.14),transparent_55%)]" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary-glow blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-8 md:py-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
              Olá, eu sou
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-3 font-mono text-base text-secondary sm:text-lg">{personal.role}</p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
              {personal.summary}
            </p>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-secondary">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {personal.availability}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projetos" size="lg">
                Ver projetos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={personal.resumeUrl} variant="secondary" size="lg" newTab>
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar currículo
              </ButtonLink>
            </div>

            <div className="mt-10">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                Me encontre em
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary to-amber-500 opacity-20 blur-2xl"
            />
            <Image
              src="/images/photo-diego-vieira.png"
              alt={`Foto de ${personal.name}, ${personal.role}`}
              width={640}
              height={640}
              preload
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="relative aspect-square w-full rounded-2xl border border-border object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
