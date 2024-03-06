"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import FooterWithForm from "./FooterWithForm";
import FooterWithoutForm from "./FooterWithoutForm";
import FooterContactsSection from "./FooterContactsSection";

const Footer = () => {
    const [isFooterWihtForm, setFooterWihtForm] = useState(false);
    const [isFooterWithoutForm, setFooterWithoutForm] = useState(false);
    const [isContactsSection, setContactsSection] = useState(false);

    const pathname = usePathname();
    const isPathExist = useCheckPathname(pathname);

    useEffect(() => {
        if (pathname === "/" || pathname === "/services" || isPathExist) {
            setFooterWihtForm(false);
            setContactsSection(false);
            setFooterWithoutForm(true);
        } else if (pathname === "/contacts") {
            setFooterWihtForm(false);
            setFooterWithoutForm(false);
            setContactsSection(true);
        } else if (
            pathname === "/faq" ||
            pathname === "/team" ||
            pathname === "/blog" ||
            pathname === "/ourProjects" ||
            isPathExist
        ) {
            setFooterWithoutForm(false);
            setContactsSection(false);
            setFooterWihtForm(true);
        } else {
            setFooterWihtForm(false);
            setContactsSection(false);
            setFooterWithoutForm(false);
        }
    }, [pathname, isFooterWihtForm, isPathExist]);

    return (() => {
        if (isFooterWihtForm) {
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
