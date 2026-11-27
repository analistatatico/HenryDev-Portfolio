import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Database,
  Info,
  Layout,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SkillCard } from '../components/SkillCard';
import { useLanguage } from '../hooks/useLanguage';
import { skillCategories } from '../data/skills';

const LUCIDE_MAP = {
  Code2,
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  Sparkles,
} as const;

export function Skills() {
  const { t } = useLanguage();

  return (
    <div>
      <Seo title={t.seo.skills.title} description={t.seo.skills.description} path="#/skills" />

      <PageHero eyebrow={t.skills.eyebrow} title={t.skills.title} lead={t.skills.lead}>
        <p className="mt-6 inline-flex max-w-xl items-start gap-2 rounded-xl border border-edge bg-surface-soft px-4 py-3 text-xs leading-relaxed text-ink-muted">
          <Info size={14} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
          {t.skills.note}
        </p>
      </PageHero>

      <section className="section pt-4">
        <div className="shell space-y-8">
          {skillCategories.map((category, index) => {
            const Icon = LUCIDE_MAP[category.lucide];

            return (
              <Reveal key={category.id} delay={index * 50}>
                <article className="card p-6 sm:p-7">
                  <header className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-ink">
                          {t.skills.categories[category.id]}
                        </h2>
                        <p className="mt-0.5 text-xs text-ink-muted">
                          {t.skills.categoryDescriptions[category.id]}
                        </p>
                      </div>
                    </div>

                    <span className="chip">
                      {category.skills.length}
                    </span>
                  </header>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.skills.map((skill) => (
                      <li key={`${category.id}-${skill.name}`}>
                        <SkillCard skill={skill} />
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <div className="card flex flex-col items-center gap-5 px-6 py-12 text-center sm:px-12">
              <h2 className="text-2xl font-bold sm:text-3xl">{t.skills.cta.title}</h2>
              <p className="max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                {t.skills.cta.text}
              </p>
              <Link to="/projects" className="btn-primary">
                {t.skills.cta.button}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
