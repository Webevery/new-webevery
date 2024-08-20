import { Noto_Sans, Exo_2 } from "next/font/google";
import { Toaster } from "sonner";
import { SiteProvider } from "@/context/siteContext";
import TranslateProvider from "@/translator/i18Provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ModalR from "@/components/Modal/Modal";

import "./globals.scss";
import ToTopBtn from "@/components/Buttons/ToTopBtn/ToTopBtn";
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

export const metadata = {
  title: "Webevery",
  description: "Webevery description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
