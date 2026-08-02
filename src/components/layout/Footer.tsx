import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/shared/icons";

const footerLinks = [
  { href: personal.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: personal.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
  { href: `mailto:${personal.email}`, label: "E-mail", icon: Mail, external: false },
  {
    href: `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(personal.whatsappMessage)}`,
    label: "WhatsApp",
    icon: WhatsAppIcon,
    external: true,
  },
  { href: personal.resumeUrl, label: "Currículo", icon: Download, external: true },
];

const initials = personal.name
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word.charAt(0))
  .join("");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-primary">{initials}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{personal.name}</p>
            <p className="mt-1 text-sm text-muted">{personal.role}</p>
          </div>

          <nav aria-label="Links profissionais">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {footerLinks.map(({ href, label, icon: Icon, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-sm text-secondary transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted">
          <p>
            © {year} {personal.name}. Todos os direitos reservados. Desenvolvido com Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
