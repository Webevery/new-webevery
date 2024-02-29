import { Saira, Work_Sans } from "next/font/google";
import { Toaster } from 'sonner';
import { SiteProvider } from "@/context/siteContext";
import Header from "@/components/Header/Header";
import ModalR from "@/components/Modal/Modal";

import "./globals.scss";

const saira = Saira({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500"],
  variable: "--font-saira",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500"],
  variable: "--font-work-sans",
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
          <ModalR />
          <Toaster richColors />
        </SiteProvider>
      </body>
    </html>
  );
}
