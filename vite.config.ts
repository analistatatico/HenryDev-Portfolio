import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `process` sem depender de @types/node — só o que é usado aqui.
declare const process: { env: Record<string, string | undefined> };

/**
 * Descobre o caminho base a partir do repositório em que o build roda.
 *
 * - `usuario/usuario.github.io` (site de usuário) => servido em `/`
 * - `usuario/qualquer-repo`     (site de projeto) => servido em `/qualquer-repo/`
 *
 * O GitHub Actions expõe `GITHUB_REPOSITORY` como "dono/nome", então o mesmo
 * código publica corretamente nos dois tipos de repositório, sem edição manual.
 * Fora do CI (desenvolvimento local), a base é sempre `/`.
 */
function resolveBase(): string {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) return '/';

  const [owner, name] = repository.split('/');
  if (!owner || !name) return '/';

  return name.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '/' : `/${name}/`;
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: { port: 5173, host: true },
  preview: { port: 4173, host: true },
});
