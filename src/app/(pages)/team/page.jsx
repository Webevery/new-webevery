import Team from "@/screens/team/Team";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Давайте познайомимося Webevery&#127757; | Веб студія",
  description:
    "Команда Webevery працює для Вас та Вашого бізнесу&#127942; Розробка сайту &#9989; Ваш надійний партнер у розробці веб-сайту &#129309; Замовити дзвінок&#128241;",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery&#127757;. Створення сайтів.",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}team`,
      description:
        "Створення сайту — Webevery&#127757;. Розробка програмного продукту",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}team`,
    },
  };
}

const TeamPage = () => {
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
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}team`,
          name: "Розробка сайту - Webevery&#127757; Команда Webevery",
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
            <Team />
        </>
    );
};

export default TeamPage;
