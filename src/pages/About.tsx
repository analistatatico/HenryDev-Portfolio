import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Lightbulb,
  Layers,
  Send,
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { Timeline } from '../components/Timeline';
import { useLanguage } from '../hooks/useLanguage';
import { timeline } from '../data/experience';
import { profile } from '../data/profile';

const PRINCIPLE_ICONS = [Code2, Lightbulb, GraduationCap, Layers, BrainCircuit] as const;

export function About() {
  const { t } = useLanguage();

  return (
    <div>
      <Seo title={t.seo.about.title} description={t.seo.about.description} path="#/about" />

      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.lead} />

      {/* ======================= TRAJETÓRIA ======================= */}
      <section className="section pt-4">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <ProfilePhoto alt={t.about.photoAlt} size={300} showCaption />

            <div className="card mt-8 p-5">
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-ink-muted">{t.experience.educationTitle}</dt>
                  <dd className="text-right font-medium text-ink">{profile.university}</dd>
                </div>
                <div className="divider" />
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-ink-muted">{t.experience.workTitle}</dt>
                  <dd className="text-right font-medium text-ink">{profile.company}</dd>
                </div>
                <div className="divider" />
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-ink-muted">{t.contact.location}</dt>
                  <dd className="text-right font-medium text-ink">{t.contact.locationValue}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div className="space-y-8">
            {t.about.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 60}>
                <article className="relative border-l border-edge pl-6 transition-colors hover:border-brand/40">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-brand/60 bg-surface"
                  />
                  <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== LINHA DO TEMPO ======================== */}
      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.about.timeline.eyebrow}
              title={t.about.timeline.title}
              action={
                <Link to="/experience" className="btn-link">
                  {t.home.experience.link}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              }
            />
          </Reveal>

          <Reveal className="mt-10">
            <Timeline entries={timeline} />
          </Reveal>
        </div>
      </section>

      {/* ========================= PRINCÍPIOS ========================= */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.about.principles.eyebrow}
              title={t.about.principles.title}
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.principles.items.map((item, index) => {
              const Icon = PRINCIPLE_ICONS[index] ?? Code2;
              return (
                <Reveal key={item.title} delay={index * 70} as="li" className="h-full">
                  <div className="card-interactive h-full p-5 sm:p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <div className="card flex flex-col items-center gap-6 px-6 py-12 text-center sm:px-12">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">{t.about.cta.title}</h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                  {t.about.cta.text}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/projects" className="btn-primary">
                  {t.about.cta.projects}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  <Send size={16} aria-hidden="true" />
                  {t.about.cta.contact}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
