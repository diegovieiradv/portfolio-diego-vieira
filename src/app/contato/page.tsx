import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { ContactCard } from "@/components/ui/ContactCard";
import { LinkedinIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Diego Vieira de Souza por e-mail ou LinkedIn sobre oportunidades na área de desenvolvimento.",
};

export default function ContatoPage() {
  const contacts = [
    {
      icon: Mail,
      title: "E-mail",
      value: personal.email,
      description: "Prefere um contato formal ou direto? Escreva para o meu e-mail profissional.",
      href: `mailto:${personal.email}`,
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn",
      value: "Diego Vieira de Souza",
      description: "Conecte-se para acompanhar minha trajetória e trocar ideias sobre tecnologia.",
      href: personal.linkedin,
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Rio de Janeiro – RJ, Brasil",
      description: "Disponível para oportunidades presenciais no Rio de Janeiro e remotas.",
    },
  ];

  return (
    <>
      <section
        aria-labelledby="titulo-contato"
        className="border-b border-border bg-surface py-16 sm:py-20"
      >
        <Container>
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
            Contato
          </p>
          <h1
            id="titulo-contato"
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Vamos conversar?
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
            Estou aberto a novas oportunidades, parcerias e conversas sobre desenvolvimento. Escolha
            o canal que preferir.
          </p>
        </Container>
      </section>

      <section aria-label="Canais de contato" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <ContactCard key={contact.title} {...contact} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
