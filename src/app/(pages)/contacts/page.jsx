import Contacts from "@/screens/contacts/Contacts";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Контакти Webevery | Замовити дзвінок&#128241;",
  description:
    "Хочете сайт - переходьте за посиланням&#9757; де зможете Замовити дзвінок&#128241; та дізнаєтесь наші Контакти&#128241; | Соціальні мережі&#10024;",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайтів — Webevery&#127757;. Контакти сайту &#127757;",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}contacts`,
      description:
        "Створення сайту — Webevery&#127757;. Розробка програмного продукту",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}contacts`,
    },
  };
}

const ContactsPage = () => {
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
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}contacts`,
          name: "Створити сайт - Webevery &#11088; Контакти Webevery",
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
            <Contacts />
        </>
    );
};

export default ContactsPage;
