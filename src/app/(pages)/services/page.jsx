import Services from "@/screens/services/Services";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Розробка сайту — Webevery | Послуги",
  description:
    "Webevery🌍 — Розробка сайту 🏆 Ваш надійний партнер у розробці веб-сайту 👆 Замовити сайт. Створити сайт під ключ🔑",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery🌍. Створення сайтів🏆",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}services`,
      description:
        "Створення сайту — Webevery👆. Розробка програмного продукту✅",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}services`,
    },
  };
}

const ServicesPage = () => {
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
          name: "Розробка сайту - Webevery. Види послуг",
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
            <Services />
        </>
    );
};

export default ServicesPage;
