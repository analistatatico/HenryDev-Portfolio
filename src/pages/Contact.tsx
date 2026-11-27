import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../hooks/useLanguage';
import { profile } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
  const { t } = useLanguage();
  const emailConfigured = profile.email.length > 0;

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [opened, setOpened] = useState(false);

  const update = (field: keyof FormState) => (value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setOpened(false);
  };

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = t.contact.form.required;
    if (!values.email.trim()) next.email = t.contact.form.required;
    else if (!EMAIL_PATTERN.test(values.email.trim())) next.email = t.contact.form.invalidEmail;
    if (!values.subject.trim()) next.subject = t.contact.form.required;
    if (!values.message.trim()) next.message = t.contact.form.required;
    return next;
  }

  /**
   * Sem backend: a mensagem é entregue ao cliente de e-mail do próprio
   * visitante via `mailto:`. Nada é enviado a servidores de terceiros
   * e nenhum envio é simulado.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailConfigured) return;

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const body = [
      form.message.trim(),
      '',
      '—',
      `${t.contact.form.name}: ${form.name.trim()}`,
      `${t.contact.form.email}: ${form.email.trim()}`,
    ].join('\n');

    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject.trim(),
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setOpened(true);
  }

  const channels = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'in/abraao-henrique-17442930a',
      href: profile.links.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: `@${profile.githubUsername}`,
      href: profile.links.github,
      icon: Github,
      external: true,
    },
    {
      id: 'email',
      label: t.contact.emailLabel,
      value: emailConfigured ? profile.email : t.contact.emailPending,
      href: emailConfigured ? `mailto:${profile.email}` : null,
      icon: Mail,
      external: false,
    },
  ];

  const inputClass =
    'w-full rounded-xl border border-edge bg-surface-soft px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-brand/50 focus:outline-none focus-visible:outline-none';

  return (
    <div>
      <Seo title={t.seo.contact.title} description={t.seo.contact.description} path="#/contact" />

      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead}>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 font-mono text-xs text-brand">
          <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
          {t.contact.cta}
        </p>
      </PageHero>

      <section className="section pt-4">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* ===================== CANAIS DIRETOS ===================== */}
          <Reveal className="space-y-4">
            <div className="card p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                {t.contact.channels}
              </h2>

              <ul className="mt-5 space-y-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;

                  const content = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-edge bg-surface-soft text-brand transition-colors group-hover:border-brand/40">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.12em] text-ink-muted">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-medium text-ink transition-colors group-hover:text-brand">
                          {channel.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={channel.id}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          {...(channel.external
                            ? { target: '_blank', rel: 'noreferrer noopener' }
                            : {})}
                          className="card-interactive group flex items-center gap-3.5 p-3.5"
                        >
                          {content}
                          {channel.external ? (
                            <span className="sr-only">({t.common.externalLink})</span>
                          ) : null}
                        </a>
                      ) : (
                        <div
                          className="flex items-center gap-3.5 rounded-2xl border border-dashed border-edge bg-surface-soft/40 p-3.5 opacity-70"
                          title={t.contact.emailPendingHint}
                        >
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {!emailConfigured ? (
                <p className="mt-4 flex items-start gap-2 rounded-xl border border-edge bg-surface-soft px-3.5 py-3 text-xs leading-relaxed text-ink-muted">
                  <Info size={13} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  {t.contact.emailPendingHint}
                </p>
              ) : null}
            </div>

            {/* Localização */}
            <div className="card p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                {t.contact.location}
              </h2>

              <p className="mt-4 flex items-center gap-2.5 text-sm text-ink">
                <MapPin size={16} className="text-brand" aria-hidden="true" />
                {t.contact.locationValue}
              </p>
              <p className="mt-2 text-xs text-ink-muted">{t.contact.locationNote}</p>
            </div>
          </Reveal>

          {/* ===================== FORMULÁRIO ===================== */}
          <Reveal delay={80}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-7">
              <h2 className="font-display text-lg font-semibold text-ink">
                {t.contact.form.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {t.contact.form.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label={t.contact.form.name}
                  placeholder={t.contact.form.namePlaceholder}
                  value={form.name}
                  onChange={update('name')}
                  error={errors.name}
                  disabled={!emailConfigured}
                  className={inputClass}
                  autoComplete="name"
                />

                <Field
                  id="contact-email"
                  type="email"
                  label={t.contact.form.email}
                  placeholder={t.contact.form.emailPlaceholder}
                  value={form.email}
                  onChange={update('email')}
                  error={errors.email}
                  disabled={!emailConfigured}
                  className={inputClass}
                  autoComplete="email"
                />
              </div>

              <div className="mt-4">
                <Field
                  id="contact-subject"
                  label={t.contact.form.subject}
                  placeholder={t.contact.form.subjectPlaceholder}
                  value={form.subject}
                  onChange={update('subject')}
                  error={errors.subject}
                  disabled={!emailConfigured}
                  className={inputClass}
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  value={form.message}
                  disabled={!emailConfigured}
                  onChange={(event) => update('message')(event.target.value)}
                  placeholder={t.contact.form.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`${inputClass} resize-y disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.message ? 'border-[#ff5f57]/60' : ''
                  }`}
                />
                {errors.message ? (
                  <p
                    id="contact-message-error"
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff5f57]"
                  >
                    <AlertCircle size={12} aria-hidden="true" />
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button type="submit" disabled={!emailConfigured} className="btn-primary mt-6 w-full">
                <Send size={16} aria-hidden="true" />
                {emailConfigured ? t.contact.form.submit : t.contact.form.submitDisabled}
              </button>

              <p
                role="status"
                aria-live="polite"
                className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ink-muted"
              >
                {opened ? (
                  <>
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    {t.contact.form.opened}
                  </>
                ) : (
                  <>
                    <Info size={13} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    {t.contact.form.noBackendNote}
                  </>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className: string;
  type?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled,
  className,
  type = 'text',
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${className} disabled:cursor-not-allowed disabled:opacity-50 ${
          error ? 'border-[#ff5f57]/60' : ''
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff5f57]">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
