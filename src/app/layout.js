import { Noto_Sans, Exo_2 } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { SiteProvider } from "@/context/siteContext";
import TranslateProvider from "@/translator/i18Provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ModalR from "@/components/Modal/Modal";

import "./globals.scss";
import dynamic from "next/dynamic";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { PaginationProvider } from "@/context/PaginationContext";

const exo = Exo_2({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500"],
  variable: "--font-exo",
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
});

const DynamicToTopBtn = dynamic(() =>
  import("@/components/Buttons/ToTopBtn/ToTopBtn")
);

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_MAIN_URL),
  title: "Створення сайту — Webevery | Веб студія",
  description:
    "Webevery🌍 — новий сайт 🏆 Лендінг💻 Ваш надійний партнер у розробці веб-сайту 👆 Замовити сайт✅ Створити сайт під ключ🔑",
  keywords: [
    "Створення сайту",
    "Веб-сайти",
    "Розробка програмного продукту",
    "Створити сайт під ключ",
    "Розробка сайту — Webevery",
    "Webevery",
    "Веб-студія Webevery",
    "Графічний дизайн",
    "Замовити",
    "Подзвонити",
    "Веб студія",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_URL,
  },
  openGraph: {
    title:
      "Створення сайту — Webevery🌍. Розробка програмного продукту🏆",
    url: process.env.NEXT_PUBLIC_MAIN_URL,
    description:
      "Webevery 👆 — новий сайт 🏆 Створити сайт під ключ🔑 Розробка програмного продукту ✅",
    siteName: "Webevery",
    type: "website",
    images: [
      {
        url: "/seo_images/opengraph-image-400x300.png",
        type: "image/png",
        width: 400,
        height: 300,
        alt: "Webevery",
      },
      {
        url: "/seo_images/twitter-image-800x600.png",
        type: "image/png",
        width: 800,
        height: 600,
        alt: "Webevery",
      },
      {
        url: "/seo_images/opengraph-image-1200-630.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Webevery",
      },
    ],
    locale: "uk-UA",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC,
  },
  applicationName: "Webevery",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webevery",
    url: process.env.NEXT_PUBLIC_MAIN_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380966058605",
      email: "inbox.webevery@gmail.com",
      contactType: "customer service",
    },
    logo: {
      "@type": "ImageObject",
      url: "/seo_images/twitter-image-800x600.png",
      contentUrl: "/seo_images/twitter-image-800x600.png",
      size: "800x600",
      caption: "Webevery",
      inLanguage: "uk-UA",
    },
    keywords:
      "Розробка сайту. Створити сайт під ключ. Розробка програмного продукту. Розробка сайту — Webevery. Веб-студія Webevery",
  };
  return (
    <html lang="uk-UA">
      <GoogleTagManager gtmId={`${GTM_ID}`} />
      <body className={`${exo.variable} ${noto_sans.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <BackgroundAnimation />
          <SiteProvider>
            <PaginationProvider>
              <TranslateProvider>
                <Header />
                <main>{children}</main>
                <Footer />
                <ModalR />
                <Toaster
                  richColors
                  position="top-right"
                />
              </TranslateProvider>
            </PaginationProvider>
          </SiteProvider>
          <DynamicToTopBtn />
        </AuthProvider>
      </body>
    </html>
  );
}
