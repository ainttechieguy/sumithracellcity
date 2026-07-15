import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  faqData?: FAQItem[];
  serviceSchema?: any;
}

export default function SEO({ title, description, path, faqData, serviceSchema }: SEOProps) {
  const domain = "https://sumithracellcity.com";
  // The path always starts with /, so if path is '/', url should be domain + '/' to match canonical rule
  const url = path === '/' ? `${domain}/` : `${domain}${path}`;
  const defaultImage = `${domain}/logo.png`;

  // Base Schema Array
  const schemaArray: any[] = [];

  // =======================================================================
  // HOMEPAGE ENTITIES (MobilePhoneStore, Organization, WebSite)
  // These core entities are injected only on the root page to prevent
  // disconnected duplicates across the site.
  // =======================================================================
  if (path === '/') {
    // 1. MobilePhoneStore Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MobilePhoneStore",
      "@id": `${domain}/#business`,
      "name": "Sumithra Cell City",
      "url": domain,
      "image": [
        `${domain}/logo.png`
      ],
      "logo": `${domain}/logo.png`,
      "telephone": "+91 99623 33311",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24, Rajiv Gandhi Salai, Near Karur Vysya Bank",
        "addressLocality": "Sholinganallur",
        "addressRegion": "Chennai, Tamil Nadu",
        "postalCode": "600119",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.9010",
        "longitude": "80.2270"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "21:30"
        }
      ],
      "founder": "Venkatesan Annamalai",
      "foundingDate": "2005",
      "description": "Professional smartphone repair, Apple device servicing, accessories, and genuine replacement parts.",
      // DEVELOPER NOTE: The rating and review count must exactly match the public Google rating 
      // and the numbers visibly displayed on the website. Update these values manually if the Google rating changes.
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "75"
      },
      "knowsAbout": "Specialist in Apple Product Services"
    };

    // 2. Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      "name": "Sumithra Cell City",
      "url": domain,
      "logo": `${domain}/logo.png`,
      "founder": {
        "@type": "Person",
        "name": "Venkatesan Annamalai"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99623-33311",
        "contactType": "customer service"
      }
    };

    // 3. WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "url": domain,
      "name": "Sumithra Cell City",
      "publisher": {
        "@id": `${domain}/#organization`
      }
    };

    schemaArray.push(localBusinessSchema, organizationSchema, websiteSchema);
  }

  // =======================================================================
  // INNER PAGE ENTITIES (WebPage, BreadcrumbList)
  // Injected only on inner routes, properly linking back to the root entities.
  // =======================================================================
  if (path !== '/') {
    // WebPage Schema pointing back to main business
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      "url": url,
      "name": title,
      "description": description,
      "about": {
        "@id": `${domain}/#business`
      },
      "publisher": {
        "@id": `${domain}/#organization`
      }
    };
    schemaArray.push(webPageSchema);

    // 4. BreadcrumbList Schema
    // Breadcrumbs strictly start from Home = 1. Only applied to inner pages.
    const pathParts = path.split('/').filter(p => p !== '');
    if (pathParts.length > 0) {
      const breadcrumbList: any = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${domain}/`
          }
        ]
      };

      let currentPath = '';
      pathParts.forEach((part, index) => {
        currentPath += `/${part}`;
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": part.charAt(0).toUpperCase() + part.slice(1),
          "item": `${domain}${currentPath}`
        });
      });
      schemaArray.push(breadcrumbList);
    }
  }

  // =======================================================================
  // CONDITIONAL ENTITIES (FAQPage)
  // DEVELOPER NOTE: Google generally limits FAQ rich-result visibility 
  // to authoritative government and health websites. The markup remains valid
  // but may not produce a visible FAQ result for this commercial website.
  // =======================================================================
  if (faqData && faqData.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
    schemaArray.push(faqSchema);
  }

  // =======================================================================
  // CONDITIONAL ENTITIES (Service)
  // =======================================================================
  if (serviceSchema) {
    schemaArray.push(serviceSchema);
  }

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={defaultImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaArray)}
      </script>
    </Helmet>
  );
}
