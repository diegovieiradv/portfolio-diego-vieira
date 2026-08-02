"use client";

import { useEffect, useState } from "react";
import { BookOpen, Heart, Users } from "lucide-react";
import { fetchGitHubUser, type GitHubUser } from "@/services/github";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { GithubIcon } from "@/components/shared/icons";

function formatCount(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(value);
}

const stats = [
  { key: "followers", label: "Seguidores", icon: Users },
  { key: "publicRepos", label: "Repositórios", icon: BookOpen },
  { key: "following", label: "Seguindo", icon: Heart },
] as const;

export function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchGitHubUser().then((result) => {
      if (active) {
        setUser(result);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  if (!loading && !user) {
    return null;
  }

  return (
    <section aria-label="Estatísticas do GitHub" className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="GitHub"
          title="Minha atividade no GitHub"
          description="Um resumo do meu perfil e da minha presença na comunidade de desenvolvimento."
        />

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {user ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={user.avatarUrl}
                  alt={`Avatar de ${user.name ?? user.login}`}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-2xl border border-border"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-semibold text-foreground">
                    {user.name ?? user.login}
                  </h2>
                  <p className="mt-0.5 font-mono text-sm text-primary">@{user.login}</p>
                  {user.bio ? (
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-secondary">
                      {user.bio}
                    </p>
                  ) : null}

                  <dl className="mt-4 grid grid-cols-3 gap-4 sm:max-w-md">
                    {stats.map(({ key, label, icon: Icon }) => (
                      <div
                        key={key}
                        className="rounded-xl border border-border bg-background p-3 text-center"
                      >
                        <Icon className="mx-auto h-4 w-4 text-primary" aria-hidden="true" />
                        <dd className="mt-1.5 font-mono text-lg font-semibold text-foreground">
                          {formatCount(user[key])}
                        </dd>
                        <dt className="mt-0.5 text-xs text-muted">{label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>

                <ButtonLink
                  href={user.htmlUrl}
                  variant="outline"
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                  Ver perfil
                </ButtonLink>
              </>
            ) : (
              <p className="text-sm text-muted">Carregando perfil do GitHub…</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
