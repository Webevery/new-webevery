import Contacts from "@/screens/contacts/Contacts";

export async function generateMetadata({ params, searchParams }, parent) {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Контакти Webevery | Замовити дзвінок",
  description:
    "Хочете сайт - переходьте за посиланням📲 де зможете Замовити дзвінок👆та дізнаєтесь наші Контакти✅ | Соціальні мережі✨",
    openGraph: {
      images: [parent?.images, ...previousImages],
      type: "website",
      title: "Створення сайтів — Webevery🌍. Контакти сайту",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}contacts`,
      description:
        "Створення сайту — Webevery🌍. Розробка програмного продукту👆",
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
          name: "Створити сайт - Webevery. Контакти Webevery",
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
