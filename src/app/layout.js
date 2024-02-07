import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/siteContext";
import ModalR from "@/components/Modal/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webevery",
  description: "Webevery description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
