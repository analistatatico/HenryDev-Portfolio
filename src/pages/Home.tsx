import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  FileWarning,
  Github,
  Linkedin,
  MapPin,
  MousePointerClick,
  Send,
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { Terminal, DeveloperSnippet } from '../components/Terminal';
import { TechMarquee } from '../components/TechMarquee';
import { ProjectCard } from '../components/ProjectCard';
import { Timeline } from '../components/Timeline';
import { GithubStats } from '../components/GithubStats';
import { useLanguage } from '../hooks/useLanguage';
import { useTypewriter } from '../hooks/useTypewriter';
import { useAssetAvailable } from '../hooks/useAssetAvailable';
import { profile } from '../data/profile';
import { asset } from '../lib/asset';
import { featuredProjects } from '../data/projects';
import { work } from '../data/experience';

export function Home() {
  const { t } = useLanguage();

  // Memoizado para não reiniciar a digitação a cada render.
  const roles = useMemo(() => t.home.typedRoles, [t.home.typedRoles]);
  const { text: typedText, isStatic } = useTypewriter(roles);

  const resumePath = asset(profile.resumePath);
  const resumeAvailable = useAssetAvailable(resumePath);

  return (
    <div>
      <Seo title={t.seo.home.title} description={t.seo.home.description} path="#/home" />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
        <div aria-hidden="true" className="absolute inset-0 bg-tech-grid opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-10 h-[520px] w-[520px] glow-soft"
        />

        <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Coluna de texto — no mobile aparece depois da fotografia */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="chip-brand">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand"
                />
                {t.home.available}
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                {t.home.greeting}
                <span className="mt-3 block text-gradient">{t.home.headline}</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p
                className={`mt-6 font-mono text-base text-brand sm:text-lg ${isStatic ? '' : 'type-caret'}`}
                aria-live="off"
              >
                {typedText || ' '}
              </p>
              <span className="sr-only">{t.home.role}</span>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
                {t.home.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-ink-muted">
                <MapPin size={15} className="text-brand" aria-hidden="true" />
                {t.home.location}
              </p>
            </Reveal>

            {/* Ações */}
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn-primary">
                  {t.home.ctaProjects}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link to="/about" className="btn-ghost">
                  {t.home.ctaAbout}
                </Link>

                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  {t.home.ctaLinkedin}
                  <span className="sr-only">({t.common.externalLink})</span>
                </a>

                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost"
                  aria-label={`GitHub (${t.common.externalLink})`}
                >
                  <Github size={16} aria-hidden="true" />
                </a>

                {/* O download só existe quando o PDF real está publicado. */}
                {resumeAvailable ? (
                  <a href={resumePath} download className="btn-ghost">
                    <Download size={16} aria-hidden="true" />
                    {t.home.ctaResume}
                  </a>
                ) : (
                  <span
                    className="btn-ghost cursor-not-allowed opacity-45"
                    title={t.home.resumeUnavailableHint}
                    aria-disabled="true"
                  >
                    <FileWarning size={16} aria-hidden="true" />
                    {t.home.resumeUnavailable}
                  </span>
                )}
              </div>
            </Reveal>
          </div>

          {/* Coluna da fotografia */}
          <Reveal delay={120} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <ProfilePhoto
              alt={t.home.photoAlt}
              size={340}
              showCaption
              priority
              className="w-full max-w-[340px]"
            />
          </Reveal>
        </div>

        {/* Terminal */}
        <div className="shell relative mt-14">
          <Reveal delay={80}>
            <Terminal title={t.home.terminalTitle} className="mx-auto max-w-2xl">
              <DeveloperSnippet />
            </Terminal>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted">
              <MousePointerClick size={13} className="text-brand" aria-hidden="true" />
              {t.home.scrollHint}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================= RESUMO PROFISSIONAL ======================= */}
      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.home.summary.eyebrow}
              title={t.home.summary.title}
              description={t.home.summary.body}
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.summary.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 70} as="li">
                <div className="card-interactive h-full p-5">
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-brand"
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================= TECNOLOGIAS ========================= */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.home.stack.eyebrow}
              title={t.home.stack.title}
              action={
                <Link to="/skills" className="btn-link">
                  {t.home.stack.link}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              }
            />
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <TechMarquee />
        </Reveal>
      </section>

      {/* ====================== PROJETOS SELECIONADOS ====================== */}
      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.home.projects.eyebrow}
              title={t.home.projects.title}
              action={
                <Link to="/projects" className="btn-link">
                  {t.home.projects.link}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              }
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80} as="li" className="h-full">
                <ProjectCard project={project} compact />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================== EXPERIÊNCIA ======================== */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.home.experience.eyebrow}
              title={t.home.experience.title}
              action={
                <Link to="/experience" className="btn-link">
                  {t.home.experience.link}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              }
            />
          </Reveal>

          <Reveal className="mt-10">
            <Timeline entries={work} />
          </Reveal>
        </div>
      </section>

      {/* ===================== ESTATÍSTICAS GITHUB =====================
          Exibida apenas quando `profile.showGithubActivity` for true.
          Mantida desligada enquanto o username do GitHub não for confirmado,
          para não apresentar dados públicos de outra conta. */}
      {profile.showGithubActivity ? (
      <section className="section border-t border-edge bg-surface-soft/40">
        <div className="shell">
          <Reveal>
            <SectionTitle
              eyebrow={t.home.github.eyebrow}
              title={t.home.github.title}
              action={
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                >
                  {t.home.github.link}
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              }
            />
          </Reveal>

          <Reveal className="mt-10">
            <GithubStats />
          </Reveal>
        </div>
      </section>
      ) : null}

      {/* ====================== CHAMADA PARA CONTATO ====================== */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="card relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-[260px] w-[520px] -translate-x-1/2 glow-soft"
              />

              <div className="relative">
                <p className="eyebrow">{t.home.cta.eyebrow}</p>
                <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {t.home.cta.title}
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                  {t.home.cta.text}
                </p>

                <Link to="/contact" className="btn-primary mt-8">
                  <Send size={16} aria-hidden="true" />
                  {t.home.cta.button}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
