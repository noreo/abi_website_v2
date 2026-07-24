import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
}

export function SEO({
  title,
  description,
  path,
  type = "website",
  image = "https://abigailtherapeute.com/og-image.jpg",
  keywords = [],
}: SEOProps) {
  const siteName =
    "Thérapeute en relation d'aide – Deuil, relations conflictuelles, neurodivergence – Abigaïl Leconte";
  const baseUrl = "https://abigailtherapeute.com";
  const url = `${baseUrl}${path}`;
  const fullTitle = title;

  // Default keywords for all pages
  const defaultKeywords = [
    "thérapeute",
    "relation d'aide",
    "thérapie individuelle",
    "Montréal",
    "thérapie en ligne",
    "ANDC",
    "développement personnel",
  ];

  const allKeywords = [
    ...new Set([...defaultKeywords, ...keywords]),
  ];

  // Generate breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: baseUrl,
      },
    ],
  };

  // Add current page to breadcrumb if not home
  if (path !== "/") {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: title,
      item: url,
    });
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_CA" />

      {/* Twitter */}
      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="Abigaïl Leconte" />
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Montréal" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      {/* Schema.org for Google - Professional Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Abigaïl Leconte - Thérapeute en relation d'aide",
          description:
            "Thérapie individuelle pour adultes à Montréal et en ligne. Accompagnement bienveillant en relation d'aide.",
          url: baseUrl,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Montréal",
            addressRegion: "QC",
            addressCountry: "CA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "45.5017",
            longitude: "-73.5673",
          },
          areaServed: {
            "@type": "Place",
            name: "Montréal, Québec",
          },
          priceRange: "$$",
          image: image,
          sameAs: [],
          serviceType: [
            "Thérapie individuelle",
            "Relation d'aide",
            "Développement personnel",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services de thérapie",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Thérapie individuelle en ligne",
                  description:
                    "Séances de 60 minutes en vidéoconférence",
                },
              },
            ],
          },
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}