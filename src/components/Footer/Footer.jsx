"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import FooterWithForm from "./FooterWithForm";
import FooterWithoutForm from "./FooterWithoutForm";
import FooterContactsSection from "./FooterContactsSection";

const Footer = () => {
    const [isFooterWithForm, setFooterWithForm] = useState(false);
    const [isFooterWithoutForm, setFooterWithoutForm] = useState(false);
    const [isContactsSection, setContactsSection] = useState(false);

    const pathname = usePathname();
    const isPathExist = useCheckPathname(pathname);

    useEffect(() => {
        if (
            (pathname === "/" && isPathExist) ||
            (pathname === "/services" && isPathExist)
        ) {
            setFooterWithForm(false);
            setContactsSection(false);
            setFooterWithoutForm(true);
        } else if (pathname === "/contacts") {
            setFooterWithForm(false);
            setFooterWithoutForm(false);
            setContactsSection(true);
        } else if (
            (pathname === "/faq" && isPathExist) ||
            (pathname === "/team" && isPathExist) ||
            (pathname === "/blog" && isPathExist) ||
            (pathname === "/ourProjects" && isPathExist)
        ) {
            setFooterWithoutForm(false);
            setContactsSection(false);
            setFooterWithForm(true);
        } else {
            setFooterWithForm(false);
            setContactsSection(false);
            setFooterWithoutForm(false);
        }
    }, [pathname, isFooterWithForm, isPathExist]);

    return (() => {
        if (isFooterWithForm) {
            return <FooterWithForm />;
        } else if (isFooterWithoutForm) {
            return <FooterWithoutForm />;
        } else if (isContactsSection) {
            return <FooterContactsSection />;
        } else {
            return <footer></footer>;
        }
    })();
};

export default Footer;
