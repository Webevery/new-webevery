import Blog from "@/screens/blog/Blog";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Розробка сайту — Webevery | Блог &#128240;",
  description:
    "Webevery &#9757; — Розробка сайту &#9989; Ваш надійний партнер у розробці веб-сайту &#9996; Замовити сайт&#128190; Створити сайт під ключ&#128273;",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайту — Webevery&#127757;. Створення сайтів.",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}blog`,
      description:
        "Створення сайту — Webevery&#127757;. Корисні статті&#128240;",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}blog`,
    },
  };
}



const BlogPage = () => {
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
    ],
  };
    return (
        <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
            <Blog />
        </>
    );
};

export default BlogPage;
