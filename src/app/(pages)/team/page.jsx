import Team from "@/screens/team/Team";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Давайте познайомимося Webevery | Веб студія",
  description:
    "Команда Webevery працює для Вас та Вашого бізнесу👆 Розробка сайту 🌍 Ваш надійний партнер у розробці веб-сайту 🏆 Замовити дзвінок.",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery🌍 Створення сайтів🏆",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}team`,
      description:
        "Створення сайту — Webevery👆 Розробка програмного продукту✅",
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
          name: "Розробка сайту - Webevery. Команда Webevery",
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
