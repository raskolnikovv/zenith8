import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  children?: React.ReactNode;
}

/**
 * Componente para gerenciar metadados de SEO e headers de segurança
 */
const SEOHelmet = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/icons/og-image.png",
  ogType = "website",
  children,
}: SEOProps) => {
  // Obter o domínio base
  const baseDomain = "https://zenith8.com.br";

  // URL canônica completa
  const fullCanonicalUrl = canonicalUrl
    ? `${baseDomain}${canonicalUrl}`
    : baseDomain;

  // Caminho completo para a imagem OG
  const fullOgImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${baseDomain}${ogImage}`;

  return (
    <Helmet>
      {/* SEO básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />

      {/* Headers de segurança */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />
      <meta
        httpEquiv="Permissions-Policy"
        content="camera=(), microphone=(), geolocation=()"
      />

      {/* Metadados adicionais */}
      {children}
    </Helmet>
  );
};

export default SEOHelmet;
