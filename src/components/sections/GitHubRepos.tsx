"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, FolderGit2, GitFork, Star } from "lucide-react";
import { fetchFeaturedGitHubRepos, type GitHubRepo } from "@/services/github";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

function formatCount(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(value);
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-subtle">
          <FolderGit2 className="h-5 w-5 text-primary" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-muted transition-colors group-hover:text-primary"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-4 font-mono text-base font-semibold text-foreground group-hover:text-primary">
        {repo.name}
      </h3>

      {repo.description ? (
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-secondary">
          {repo.description}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted">
        {repo.language ? (
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {repo.language}
          </span>
        ) : null}
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5" aria-hidden="true" />
          {formatCount(repo.stars)}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
          {formatCount(repo.forks)}
        </span>
      </div>
    </a>
  );
}

export function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchFeaturedGitHubRepos(6).then((result) => {
      if (active) {
        setRepos(result);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  if (!loading && (!repos || repos.length === 0)) {
    return null;
  }

  return (
    <section aria-label="Repositórios em destaque" className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Repositórios"
          title="Projetos no GitHub"
          description="Alguns dos meus repositórios públicos mais recentes."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos?.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>

        {loading ? (
          <p className="mt-10 text-center text-sm text-muted">Carregando repositórios…</p>
        ) : null}
      </Container>
    </section>
  );
}
