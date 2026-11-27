import { useState } from 'react';
import { profile } from '../data/profile';
import { asset } from '../lib/asset';

interface ProfilePhotoProps {
  alt: string;
  /** Diâmetro em pixels usado como largura intrínseca da imagem. */
  size?: number;
  className?: string;
  /** Exibe a identificação (nome + cargo) abaixo da fotografia. */
  showCaption?: boolean;
  priority?: boolean;
}

/**
 * Fotografia profissional em recorte circular.
 * Enquanto `public/images/profile.jpg` não existir, exibe um
 * placeholder elegante com as iniciais — nunca uma imagem genérica de pessoa.
 */
export function ProfilePhoto({
  alt,
  size = 320,
  className = '',
  showCaption = false,
  priority = false,
}: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`flex flex-col items-center ${className}`.trim()}>
      <div
        className="photo-halo group relative isolate"
        style={{ width: size, height: size, maxWidth: '100%' }}
      >
        <span aria-hidden="true" className="photo-ring" />

        <div className="relative h-full w-full overflow-hidden rounded-full border border-brand/35 bg-surface-soft shadow-glow transition-all duration-500 group-hover:border-brand/70 group-hover:shadow-[0_0_0_1px_rgba(0,230,160,0.45),0_28px_80px_-24px_rgba(0,230,160,0.55)]">
          {failed ? (
            <div
              className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-soft to-surface-card"
              role="img"
              aria-label={alt}
            >
              <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">
                {profile.initials}
              </span>
            </div>
          ) : (
            <img
              src={asset(profile.photo)}
              alt={alt}
              width={size}
              height={size}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          )}

          {/* Iluminação verde discreta sobre a fotografia */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(0,230,160,0.18),transparent_55%)] mix-blend-screen"
          />
        </div>
      </div>

      {showCaption ? (
        <figcaption className="mt-6 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-ink">
            Abraão Henrique
          </p>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
            Full Stack Developer
          </p>
        </figcaption>
      ) : null}
    </figure>
  );
}
