import { Saira, Work_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/siteContext";
import ModalR from "@/components/Modal/Modal";

const saira = Saira({
  subsets: ["latin"],
  style: ['normal'],
  weight: ['300', '400', '500'],
  variable: '--font-saira',
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  style: ['normal'],
  weight: ['400', '500'],
  variable: '--font-work-sans',
});

export const metadata = {
  title: "Webevery",
  description: "Webevery description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${work_sans.variable}`}>
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ModalR />
        </SiteProvider>
      </body>
    </html>
  );
}
