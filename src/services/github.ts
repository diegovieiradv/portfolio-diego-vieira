import { personal } from "@/data/personal";

const GITHUB_API_BASE = "https://api.github.com";

export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
};

export type GitHubRepo = {
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
};

type GitHubUserResponse = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepoResponse = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
};

function getGitHubUsername(): string | null {
  const value = personal.github.trim();
  if (!value || value.startsWith("[ADICIONAR")) {
    return null;
  }

  const username = value
    .replace(/^https?:\/\/(www\.)?github\.com\//, "")
    .replace(/\/+$/, "")
    .replace(/^@/, "");

  return username || null;
}

async function request<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function mapUser(user: GitHubUserResponse): GitHubUser {
  return {
    login: user.login,
    name: user.name,
    bio: user.bio,
    avatarUrl: user.avatar_url,
    htmlUrl: user.html_url,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
  };
}

function mapRepo(repo: GitHubRepoResponse): GitHubRepo {
  return {
    name: repo.name,
    description: repo.description,
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    topics: repo.topics ?? [],
  };
}

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  const username = getGitHubUsername();
  if (!username) {
    return null;
  }

  const user = await request<GitHubUserResponse>(`/users/${username}`);
  return user ? mapUser(user) : null;
}

export async function fetchFeaturedGitHubRepos(limit = 6): Promise<GitHubRepo[] | null> {
  const username = getGitHubUsername();
  if (!username) {
    return null;
  }

  const repos = await request<GitHubRepoResponse[]>(
    `/users/${username}/repos?sort=updated&per_page=${limit}`
  );

  if (!repos) {
    return null;
  }

  return repos
    .filter((repo) => !repo.fork)
    .slice(0, limit)
    .map(mapRepo);
}
