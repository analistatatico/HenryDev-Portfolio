import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { Timeline } from '../components/Timeline';
import { useLanguage } from '../hooks/useLanguage';
import { courses, education, work } from '../data/experience';

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <div>
      <Seo
        title={t.seo.experience.title}
        description={t.seo.experience.description}
        path="#/experience"
      />

      <PageHero
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        lead={t.experience.lead}
      />

      {/* ===================== ATUAÇÃO PROFISSIONAL ===================== */}
      <section className="section pt-4">
        <div className="shell">
          <Reveal>
            <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                <Briefcase size={16} aria-hidden="true" />
              </span>
              {t.experience.workTitle}
            </h2>
          </Reveal>

          <Reveal className="mt-8">
            <Timeline entries={work} />
          </Reveal>
        </div>
      </section>

      {/* ======================== FORMAÇÃO ======================== */}
      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                <GraduationCap size={16} aria-hidden="true" />
              </span>
              {t.experience.educationTitle}
            </h2>
          </Reveal>

          <Reveal className="mt-8">
            <Timeline entries={education} />
          </Reveal>
        </div>
      </section>

      {/* ===================== CURSOS COMPLEMENTARES ===================== */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                <Award size={16} aria-hidden="true" />
              </span>
              {t.experience.coursesTitle}
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Reveal key={course.id} delay={index * 60} as="li" className="h-full">
                <div className="card-interactive flex h-full flex-col p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-surface-soft text-brand">
                    <Award size={15} aria-hidden="true" />
                  </span>

                  <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink">
                    {course.title[language]}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    <span className="sr-only">{t.experience.issuedBy}: </span>
                    {course.organization}
                  </p>

                  {course.tags && course.tags.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {course.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
