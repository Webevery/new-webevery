import React from 'react';
import BlogId from '@/screens/blogId/BlogId';

import { getMetaBySlug } from "@/fetch/ServerFetch";

export async function generateMetadata({ params, searchParams }, parent) {
  const {slug} = params;
  // fetch data
  const product = await getMetaBySlug('blog', slug);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: `${product?.direction} | Webevery. Створити сайт.`,
    description: `${product?.direction} | Webevery&#9757;. Замовити&#9989; Створити сайт під ключ&#128273; Обирайте найкращу пропозицію для Вашого бізнесу&#127942;`,
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: `${product?.titleGradient} — Webevery&#127757;. Розробка програмного продукту.`,
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}blog/${slug}`,
      description:
        "Створення сайту — Webevery&#9757;. Створити сайт",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}blog/${slug}`,
    },
  };
}


const BlogIdPage = ({ params }) => {
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
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}blog`,
          name: "Розробка сайту - Webevery &#11088; Прочитати Блог",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}blog/${slug}`,
          name: "Розробка сайту - Webevery &#11088; Вам буде цікаво",
        },
      },
    ],
  };
  return(
    <>
    <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogId params={params} />
    </>
  );
};

export default BlogIdPage;
