import OurProjects from "@/screens/ourProjects/OurProjects";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Розробка сайту — Webevery | Наші роботи",
  description:
    "Webevery🌍 — Розробка сайту 👆 Відкрити сайт для бізнесу. Замовити наші сайти💾 Створити сайт під ключ🔑",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery🌍. Створення сайтів🏆",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}ourProjects`,
      description:
        "Створення сайту — Webevery🌍. Розробка програмного продукту👆",
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
          name: "Розробка сайту - Webevery. Наші роботи",
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
