import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { personal } from "@/data/personal";
import { Container } from "@/components/ui/Container";
import { ContactCard } from "@/components/ui/ContactCard";
import { ButtonLink } from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Diego Vieira de Souza por e-mail, WhatsApp ou LinkedIn sobre oportunidades na área de desenvolvimento.",
};

function getWhatsAppUrl(): string {
  const number = personal.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(personal.whatsappMessage);
  return number ? `https://wa.me/${number}?text=${text}` : personal.whatsapp;
}

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

          <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl border border-primary/30 bg-primary-subtle p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Prefere WhatsApp?</h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-secondary">
                  Abra uma conversa direta com a mensagem: “{personal.whatsappMessage}”
                </p>
              </div>
            </div>
            <ButtonLink
              href={getWhatsAppUrl()}
              variant="primary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              Chamar no WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
