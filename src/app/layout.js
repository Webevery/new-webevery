import { Noto_Sans, Exo_2 } from 'next/font/google';
import { Toaster } from 'sonner';
import { SiteProvider } from '@/context/siteContext';
import TranslateProvider from '@/translator/i18Provider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ModalR from '@/components/Modal/Modal';

import './globals.scss';
import ToTopBtn from '@/components/Buttons/ToTopBtn/ToTopBtn';
import BackgroundAnimation from '@/components/BackgroundAnimation/BackgroundAnimation';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import { PaginationProvider } from '@/context/PaginationContext';

const exo = Exo_2({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '400', '500'],
  variable: '--font-exo',
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '500'],
  variable: '--font-noto-sans',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_MAIN_URL),
  title: "Розробка сайту — Webevery",
  description:
    "&#11088; Webevery &#11088; — Розробка сайту &#9989; Ваш надійний партнер у розробці веб-сайту &#9989; Створити сайт під ключ&#10071; Розробка програмного продукту&#9996;",
  keywords: [
    "Розробка сайту",
    "Веб-сайти",
    "Розробка програмного продукту",
    "Створити сайт під ключ",
    "Розробка сайту — Webevery",
    "Webevery",
    "Веб-студія Webevery",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_URL,
  },
  // themeColor: "#000000",
  openGraph: {
    title: "Створення сайту — Webevery. Розробка програмного продукту.",
    url: process.env.NEXT_PUBLIC_MAIN_URL,
    description:
      "Розробка сайту - Webevery &#11088; Розробка програмного продукту &#9996; Створити сайт під ключ&#10071;",
    type: "website",
    siteName: "Webevery",
    images: [
      {
        url: "/seo_images/opengraph-image-400x300.png",
        type: "image/png",
        width: 400,
        height: 300,
        alt: "м",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk-UA">
      <body className={`${exo.variable} ${noto_sans.variable}`}>
        <AuthProvider>
          <BackgroundAnimation />
          <SiteProvider>
            <PaginationProvider>
              <TranslateProvider>
                <Header />
                <main>{children}</main>
                <Footer />
                <ModalR />
                <Toaster richColors />
              </TranslateProvider>
            </PaginationProvider>
          </SiteProvider>
          <ToTopBtn />
        </AuthProvider>
      </body>
    </html>
  );
}
