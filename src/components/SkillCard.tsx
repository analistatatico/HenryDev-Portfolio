import { useState } from 'react';
import type { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
}

/**
 * Card de tecnologia com ícone oficial (Simple Icons via CDN).
 * Se o ícone não carregar, o card cai para um monograma com a cor da marca —
 * a interface nunca quebra por falha de recurso externo.
 */
export function SkillCard({ skill }: SkillCardProps) {
  const [iconFailed, setIconFailed] = useState(false);
  const [iconLoaded, setIconLoaded] = useState(false);
  const hex = skill.color.replace('#', '');
  const showIcon = Boolean(skill.icon) && !iconFailed;
  const monogram = skill.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();

  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noreferrer noopener"
      className="card-interactive group flex items-center gap-3.5 px-4 py-3.5"
      style={{ ['--skill-color' as string]: skill.color }}
    >
      <span
        aria-hidden="true"
        className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-edge bg-surface-soft transition-colors duration-300 group-hover:border-[var(--skill-color)]/45"
      >
        {/* Monograma sempre presente: evita um quadrado vazio enquanto o
            ícone externo carrega e serve de fallback definitivo se ele falhar. */}
        <span
          className={[
            'font-display text-sm font-bold transition-opacity duration-300',
            iconLoaded ? 'opacity-0' : 'opacity-100',
          ].join(' ')}
          style={{ color: skill.color }}
        >
          {monogram}
        </span>

        {showIcon ? (
          <img
            src={`https://cdn.simpleicons.org/${skill.icon}/${hex}`}
            alt=""
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
            onLoad={() => setIconLoaded(true)}
            onError={() => setIconFailed(true)}
            className={[
              'absolute inset-0 m-auto h-5 w-5 transition-opacity duration-300',
              iconLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        ) : null}
      </span>

      <span className="min-w-0">
        <span className="block truncate text-sm font-medium text-ink transition-colors group-hover:text-brand">
          {skill.name}
        </span>
      </span>
    </a>
  );
}
