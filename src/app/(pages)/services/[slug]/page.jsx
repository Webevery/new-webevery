import ServiceId from '@/screens/serviceId/ServiceId';
import { getMetaBySlug } from "@/fetch/ServerFetch";

export async function generateMetadata({ params, searchParams }, parent) {
  const {slug} = params;
  // fetch data
  const product = await getMetaBySlug('services', slug);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: `${product?.titleGradient} — Webevery. Створити сайт.`,
    description: `${product?.titleGradient} — Webevery. Розробка програмного продукту`,
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: `${product?.titleGradient} — Webevery. Розробка програмного продукту.`,
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}services/${slug}`,
      description:
        "Створення сайту — Webevery. Створити сайт",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}services/${slug}`,
    },
  };
}

const ServiceIdPage = ({ params }) => {
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
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}services`,
          name: "Розробка сайту - Webevery &#11088; Команда Webevery",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}services/${slug}`,
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
            <ServiceId params={params} />
        </>
    );
};

export default ServiceIdPage;
