import { ourContactsData } from "@/data/ourContactsData";

export const socialLinksAndMail = ourContactsData.filter(({ name }) => name !== "phone");

export const socialLinks = ourContactsData.filter(({ name }) => name !== "phone" && name !== "mail");


