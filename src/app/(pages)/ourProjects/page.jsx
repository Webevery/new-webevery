import OurProjects from "@/screens/ourProjects/OurProjects";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Розробка сайту — Webevery | Наші роботи&#10024;",
  description:
    "Webevery &#11088; — Розробка сайту &#9989; Відкрити сайт для бізнесу&#127942; Замовити наші сайти&#9996; Створити сайт під ключ&#128273;",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery&#127757;. Створення сайтів.",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects`,
      description:
        "Створення сайту — Webevery&#127757;. Розробка програмного продукту",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects`,
    },
  };
}

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
          name: "Розробка сайту - Webevery &#11088; Наші роботи",
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
