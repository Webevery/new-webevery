import FAQ from "@/screens/faq/FAQ";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Розробка сайту — Webevery | FAQ",
  description:
    "Webevery🌍 - Розробка сайту✅ Ваш надійний партнер у розробці веб-сайту ✌️ Замовити сайт💾 Створити сайт під ключ🔑",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery🌍. Створення сайтів.",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}faq`,
      description:
        "Створення сайту — Webevery🌍. Корисні статті👆",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}faq`,
    },
  };
}

const FAQPage = () => {
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
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}faq`,
          name: "Створити сайт - Webevery. Отримати готовий продукт",
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
            <FAQ />
        </>
    );
};

export default FAQPage;
