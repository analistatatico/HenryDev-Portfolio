import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';
import { profile } from '../data/profile';

interface SeoProps {
  title: string;
  description: string;
  /** Caminho com hash da rota atual, ex.: `#/projects`. */
  path?: string;
}

/**
 * Metadados por página. Título, descrição, idioma e URL canônica
 * acompanham a rota e o idioma selecionado.
 */
export function Seo({ title, description, path = '' }: SeoProps) {
  const { t } = useLanguage();
  const url = `${profile.links.website}${path}`;
  const image = `${profile.links.website}images/og-image.png`;

  return (
    <Helmet>
      <html lang={t.meta.langAttr} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={t.meta.locale.replace('-', '_')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
