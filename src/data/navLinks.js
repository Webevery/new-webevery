import { v4 } from "uuid";

export const navLinks = [
  { id: v4(), href: "/", title: "Home" },
  {
    id: v4(),
    href: "/services",
    title: "Services",
    subMenu: [
      {
        id: v4(),
        href: "/businessCardWebsite",
        title: "Business card website",
      },
      {
        id: v4(),
        href: "/corporateWebsite",
        title: "Corporate Website",
      },
      { id: v4(), href: "/graphicDesign", title: "Graphic Design" },
      { id: v4(), href: "/individualProject", title: "Individual Project" },
      { id: v4(), href: "/landing", title: "Landing" },
      { id: v4(), href: "/logo", title: "Logo" },
      { id: v4(), href: "/qrCodeMenu", title: "QR Code Menu" },
      { id: v4(), href: "/siteCatalog", title: "Site Catalog" },
      { id: v4(), href: "/webDesign", title: "Web Design" },
      { id: v4(), href: "/websiteTesting", title: "Website Testing" },
    ],
  },
  { id: v4(), href: "/ourProjects", title: "Our projects" },
  { id: v4(), href: "/team", title: "Team" },
  { id: v4(), href: "/contacts", title: "Contacts" },
  { id: v4(), href: "/blog", title: "Blog" },
  { id: v4(), href: "/faq", title: "FAQ" },
];
