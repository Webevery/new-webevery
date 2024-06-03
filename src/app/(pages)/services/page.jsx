import Services from "@/screens/services/Services";

export const metadata = {
  title: "Розробка сайту — Webevery | Послуги &#127942;",
  description:
    "Webevery &#9757; — Розробка сайту &#9989; Ваш надійний партнер у розробці веб-сайту &#9996; Замовити сайт&#128190; Створити сайт під ключ&#128273;",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}services`,
  },
};

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
          name: "Розробка сайту - Webevery &#11088; Наші роботи Webevery",
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
