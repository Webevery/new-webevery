"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import FooterWithForm from "./FooterWithForm";
import FooterWithoutForm from "./FooterWithoutForm";
import FooterContactsSection from "./FooterContactsSection";

const Footer = () => {
    const [isFooterForm, setFooterForm] = useState(false);
    const [isContactsSection, setContactsSection] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/" || pathname.startsWith("/services")) {
            setFooterForm(false);
        } else if (pathname === "/contacts") {
            setFooterForm(false);
            setContactsSection(true);
        } else {
            setFooterForm(true);
            setContactsSection(false);
        }
    }, [pathname, isFooterForm]);

    return (() => {
        if (isFooterForm) {
            return <FooterWithForm />;
        } else if (isContactsSection) {
            return <FooterContactsSection />;
        } else {
            return <FooterWithoutForm />;
        }
    })();
};

export default Footer;
