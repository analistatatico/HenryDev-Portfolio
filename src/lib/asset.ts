/**
 * Resolve o caminho de um arquivo público respeitando a `base` do Vite.
 *
 * O site funciona tanto na raiz de um domínio (repositório de usuário,
 * `https://usuario.github.io/`) quanto em subpasta (repositório de projeto,
 * `https://usuario.github.io/repositorio/`). Caminhos absolutos escritos à
 * mão — `/images/profile.jpg` — apontariam sempre para a raiz do domínio e
 * dariam 404 no segundo caso. Esta função prefixa `import.meta.env.BASE_URL`,
 * que o Vite substitui em tempo de build.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}
