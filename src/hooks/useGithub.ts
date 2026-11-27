import { useCallback, useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';

const API_BASE = 'https://api.github.com';
const CACHE_KEY = 'henrydev:github-cache:v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutos

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
}

export interface GithubLanguageShare {
  language: string;
  count: number;
  percentage: number;
}

interface GithubState {
  user: GithubUser | null;
  repos: GithubRepo[];
  languages: GithubLanguageShare[];
  loading: boolean;
  error: boolean;
}

interface CachedPayload {
  savedAt: number;
  user: GithubUser;
  repos: GithubRepo[];
}

function readCache(): CachedPayload | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedPayload;
    if (!parsed?.savedAt || Date.now() - parsed.savedAt > CACHE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(payload: CachedPayload): void {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    /* cache é opcional */
  }
}

/** Distribuição de linguagens a partir da linguagem principal de cada repositório. */
function computeLanguages(repos: GithubRepo[]): GithubLanguageShare[] {
  const counts = new Map<string, number>();

  for (const repo of repos) {
    if (!repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }

  const total = [...counts.values()].reduce((sum, value) => sum + value, 0);
  if (total === 0) return [];

  return [...counts.entries()]
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

/**
 * Consulta a API pública do GitHub.
 * Trata falhas de rede e limite de requisições sem inventar dados:
 * em caso de erro, `error` fica verdadeiro e a interface informa o usuário.
 */
export function useGithub(reposLimit = 6) {
  const [state, setState] = useState<GithubState>({
    user: null,
    repos: [],
    languages: [],
    loading: true,
    error: false,
  });

  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(
    async (options?: { skipCache?: boolean }) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      if (!options?.skipCache) {
        const cached = readCache();
        if (cached) {
          setState({
            user: cached.user,
            repos: cached.repos.slice(0, reposLimit),
            languages: computeLanguages(cached.repos),
            loading: false,
            error: false,
          });
          return;
        }
      }

      setState((previous) => ({ ...previous, loading: true, error: false }));

      try {
        const headers: HeadersInit = { Accept: 'application/vnd.github+json' };

        const [userResponse, reposResponse] = await Promise.all([
          fetch(`${API_BASE}/users/${profile.githubUsername}`, {
            headers,
            signal: controller.signal,
          }),
          fetch(
            `${API_BASE}/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
            { headers, signal: controller.signal },
          ),
        ]);

        if (!userResponse.ok) {
          throw new Error(`GitHub user request failed with status ${userResponse.status}`);
        }

        const user = (await userResponse.json()) as GithubUser;

        let repos: GithubRepo[] = [];
        if (reposResponse.ok) {
          const allRepos = (await reposResponse.json()) as GithubRepo[];
          repos = allRepos
            .filter((repo) => !repo.fork && !repo.archived)
            .sort(
              (a, b) =>
                b.stargazers_count - a.stargazers_count ||
                new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
            );
        }

        writeCache({ savedAt: Date.now(), user, repos });

        setState({
          user,
          repos: repos.slice(0, reposLimit),
          languages: computeLanguages(repos),
          loading: false,
          error: false,
        });
      } catch (error) {
        if (controller.signal.aborted) return;
        if (import.meta.env.DEV) {
          console.warn('[useGithub]', error);
        }
        setState({ user: null, repos: [], languages: [], loading: false, error: true });
      }
    },
    [reposLimit],
  );

  useEffect(() => {
    void load();
    return () => abortRef.current?.abort();
  }, [load]);

  const retry = useCallback(() => {
    void load({ skipCache: true });
  }, [load]);

  return { ...state, retry };
}
