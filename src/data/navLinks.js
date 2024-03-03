import { v4 } from "uuid";

export const navLinks = [
  { id: v4(), href: "/", titleEN: "Home", title:"Головна" },
  {
    id: v4(),
    href: "/services",
    titleEN: "Services",
    title: "Послуги",
    subMenu: [],
  },
  { id: v4(), href: "/ourProjects", titleEN: "Our projects", title:"Роботи" },
  { id: v4(), href: "/team", titleEN: "Team", title:"Команда" },
  { id: v4(), href: "/contacts", titleEN: "Contacts", title:"Контакти"},
  { id: v4(), href: "/blog", titleEN: "Blog", title:"Блог"},
  { id: v4(), href: "/faq", titleEN: "FAQ", title:"FAQ"},
];
