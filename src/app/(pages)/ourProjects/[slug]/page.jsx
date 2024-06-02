import OurProjectId from '@/screens/ourProjectId/OurProjectId';
import React from 'react';
import { getMetaBySlug } from "@/fetch/ServerFetch";

export async function generateMetadata({ params, searchParams }, parent) {
  const {slug} = params;
  // fetch data
  const product = await getMetaBySlug('ourProjects', slug);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Створення сайту — Webevery. Розробка програмного продукту.`,
    description: `${product?.title} ${product?.titleGradient}. Створити сайт.`,
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery. Створення сайтів.",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects/${slug}`,
      description:
        "Створення сайту — Webevery. Розробка програмного продукту",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects/${slug}`,
    },
  };
}

const OurProjectsIdPage = ({ params }) => {
  const {slug} = params;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": process.env.NEXT_PUBLIC_MAIN_URL,
          name: "Створення сайту — Webevery. Розробка програмного продукту.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects`,
          name: "Розробка сайту - Webevery &#11088; Команда Webevery",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects/${slug}`,
          name: "Розробка сайту - Webevery &#11088; Веб-студія Webevery",
        },
      },
    ],
  };
  return (
      <>
      <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <OurProjectId params={params} />
      </>
    );
};

export default OurProjectsIdPage;
