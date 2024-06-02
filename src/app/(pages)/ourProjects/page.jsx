import OurProjects from "@/screens/ourProjects/OurProjects";

export const metadata = {
  title: "Розробка сайту — Webevery",
  description:
    "Webevery &#11088; — Розробка сайту &#9989; Ваш надійний партнер у розробці веб-сайту &#9989; Розробка програмного продукту&#9996; Створити сайт під ключ&#10071;",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects`,
  },
};

const OurProjectsPage = () => {
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
            <OurProjects />
        </>
    );
};

export default OurProjectsPage;
