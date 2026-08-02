import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

const socialLinks = [
  { href: personal.github, label: "GitHub", icon: GithubIcon },
  { href: personal.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  {
    href: `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(personal.whatsappMessage)}`,
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
];

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-border bg-card text-secondary transition-colors hover:border-primary hover:text-primary",
              showLabels ? "px-4 py-2 text-sm" : "h-11 w-11 justify-center"
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {showLabels ? label : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
