import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  path?: string;
}

export default function SEO({
  title = "Estúdio Interiores - Design Moderno e Funcional",
  description = "Projetos de interiores que combinam estética, função e tecnologia — sem enrolação.",
  type = "website",
  path = "/",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (ogUrl) ogUrl.setAttribute("content", `https://estudiointeriores.com.br${path}`);
    if (ogType) ogType.setAttribute("content", type);

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');

    if (twitterTitle) twitterTitle.setAttribute("content", title);
    if (twitterDescription) twitterDescription.setAttribute("content", description);
    if (twitterUrl) twitterUrl.setAttribute("content", `https://estudiointeriores.com.br${path}`);
  }, [title, description, type, path]);

  // Schema.org JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Estúdio Interiores",
    description: "Projetos de interiores que combinam estética, função e tecnologia — sem enrolação.",
    url: "https://estudiointeriores.com.br",
    logo: "https://estudiointeriores.com.br/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-99999-9999",
      contactType: "customer service",
      email: "contato@estudiointeriores.com.br",
      availableLanguage: ["pt-BR"],
    },
    sameAs: [
      "https://instagram.com/estudiointeriores",
      "https://linkedin.com/company/estudiointeriores",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior Design",
    provider: {
      "@type": "Organization",
      name: "Estúdio Interiores",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Design de Interiores",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Projeto Residencial",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Projeto Comercial",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultoria de Design",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://estudiointeriores.com.br/",
      },
      ...(path !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: `https://estudiointeriores.com.br${path}`,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
