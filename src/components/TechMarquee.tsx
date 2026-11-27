import { coreStack } from '../data/skills';

/** Faixa contínua com o stack principal. Parada automaticamente com movimento reduzido. */
export function TechMarquee() {
  const items = [...coreStack, ...coreStack];

  return (
    <div className="marquee-mask relative overflow-hidden border-y border-edge bg-surface-soft/60 py-4">
      <ul className="marquee-track items-center gap-3" aria-hidden="true">
        {items.map((tech, index) => (
          <li
            key={`${tech}-${index}`}
            className="shrink-0 rounded-full border border-edge bg-surface-card px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Lista acessível equivalente, sem animação */}
      <ul className="sr-only">
        {coreStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
