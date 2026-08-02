import type { Metadata } from "next";
import { GraduationCap, HeartHandshake, Lightbulb, Rocket, Sparkles, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a trajetória de Diego Vieira de Souza, desenvolvedor em transição de carreira.",
  alternates: { canonical: "/sobre" },
};

const journeyTimeline = [
  {
    title: "Primeiros passos na programação",
    description:
      "Início dos estudos em lógica de programação e fundamentos do desenvolvimento de software.",
    date: "[ANO]",
  },
  {
    title: "Formação em Análise e Desenvolvimento de Sistemas",
    description: "Ingresso no curso para estruturar o aprendizado de forma acadêmica.",
    date: "[ANO]",
  },
  {
    title: "Foco em Java e Spring Boot",
    description:
      "Dedicação ao ecossistema Java, com APIs REST, Spring Data e banco de dados relacionais.",
    date: "[ANO]",
  },
  {
    title: "Projetos práticos",
    description:
      "Desenvolvimento de projetos de back-end e full stack para consolidar o conhecimento.",
    date: "[PERÍODO]",
  },
  {
    title: "Transição de carreira",
    description:
      "Busca ativa por oportunidades na área de tecnologia, aplicando o aprendizado em projetos reais.",
    date: "Em andamento",
  },
];

const goals = [
  "Consolidar meus conhecimentos em Java e no ecossistema Spring.",
  "Atuar como desenvolvedor back-end e evoluir para o full stack.",
  "Aprofundar boas práticas, testes automatizados e arquitetura de software.",
  "Contribuir em projetos em equipe, aprendendo e compartilhando conhecimento.",
];

const workValues = [
  {
    title: "Organização",
    description: "Planejo e estruturo meu trabalho para manter consistência e qualidade.",
  },
  {
    title: "Responsabilidade",
    description: "Comprometimento com prazos, entregas e com o resultado do time.",
  },
  {
    title: "Comunicação",
    description: "Busco comunicar ideias e dificuldades de forma clara e objetiva.",
  },
  {
    title: "Resolução de problemas",
    description: "Encaro desafios técnicos como oportunidades de aprendizado.",
  },
  {
    title: "Trabalho em equipe",
    description: "Gosto de colaborar, revisar código e crescer junto com o grupo.",
  },
  {
    title: "Aprendizado contínuo",
    description: "Estudo diariamente para acompanhar a evolução da tecnologia.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section
        aria-labelledby="titulo-sobre"
        className="border-b border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Sobre mim
          </p>
          <h1
            id="titulo-sobre"
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Uma trajetória em transição para o desenvolvimento de software
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            {personal.location}. Desenvolvedor com foco em Java e back-end, construindo experiência
            prática por meio de projetos e aprendizado contínuo.
          </p>
        </Container>
      </section>

      <section aria-label="Apresentação pessoal" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Apresentação"
              title="Quem eu sou"
              description="Uma visão geral sobre minha história e o que me move."
            />
            <div className="space-y-5 text-base leading-relaxed text-secondary">
              <p>
                Sou <span className="font-semibold text-foreground">{personal.name}</span>,
                desenvolvedor em transição de carreira para a área de tecnologia. Estou cursando
                Análise e Desenvolvimento de Sistemas e tenho focado meus estudos em Java e Spring
                Boot, com interesse em desenvolvimento back-end e full stack.
              </p>
              <p>
                Valorizo boas práticas de código, organização e trabalho em equipe, e busco evoluir
                de forma constante por meio de projetos práticos e aprendizado contínuo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-label="Minha trajetória"
        className="border-y border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Trajetória"
                title="Como cheguei até aqui"
                description="Uma linha do tempo dos principais marcos da minha caminhada."
              />

              <div className="mt-10 space-y-8">
                <div>
                  <h2 className="flex items-center gap-2 font-semibold text-foreground">
                    <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                    Como comecei na programação
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-secondary">
                    Comecei a estudar programação por curiosidade e interesse em tecnologia. Aos
                    poucos, fui me aprofundando em lógica, estrutura de dados e fundamentos do
                    desenvolvimento até decidir estruturar esse aprendizado em uma formação
                    acadêmica.
                  </p>
                </div>

                <div>
                  <h2 className="flex items-center gap-2 font-semibold text-foreground">
                    <HeartHandshake className="h-5 w-5 text-primary" aria-hidden="true" />
                    Transição de carreira
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-secondary">
                    Estou em transição de carreira e trago da minha trajetória anterior competências
                    como organização, responsabilidade, comunicação, resolução de problemas e
                    trabalho em equipe — habilidades igualmente importantes no desenvolvimento de
                    software.
                  </p>
                </div>

                <div>
                  <h2 className="flex items-center gap-2 font-semibold text-foreground">
                    <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                    Formação atual
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-secondary">
                    Estou cursando Análise e Desenvolvimento de Sistemas, com contato com
                    programação, banco de dados, engenharia de software e práticas de
                    desenvolvimento utilizadas no mercado.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-6">
              <Timeline items={journeyTimeline} />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Objetivos profissionais" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Objetivos"
              title="O que busco profissionalmente"
              description="Minhas metas de desenvolvimento e contribuição."
            />
            <ul className="space-y-3">
              {goals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-base leading-relaxed text-secondary">{goal}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-label="Forma de trabalho e valores"
        className="border-t border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Valores"
              title="Como trabalho"
              description="Princípios que orientam minha atuação e minha evolução na área."
            />
            <Sparkles className="hidden h-8 w-8 text-primary sm:block" aria-hidden="true" />
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workValues.map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-card p-5">
                <Rocket className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
