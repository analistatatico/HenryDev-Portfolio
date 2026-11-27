import { useEffect, useState } from 'react';

/**
 * Verifica se um arquivo estático existe de fato antes de habilitar um botão.
 * Evita oferecer downloads quebrados (ex.: currículo ainda não publicado).
 */
export function useAssetAvailable(path: string): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function check() {
      try {
        const response = await fetch(path, { method: 'HEAD', signal: controller.signal });
        const contentType = response.headers.get('content-type') ?? '';

        // O GitHub Pages responde index.html (200 + text/html) para caminhos inexistentes.
        const isRealFile = response.ok && !contentType.includes('text/html');
        if (!cancelled) setAvailable(isRealFile);
      } catch {
        if (!cancelled) setAvailable(false);
      }
    }

    void check();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [path]);

  return available;
}
