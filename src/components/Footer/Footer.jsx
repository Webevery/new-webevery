"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import FooterWithForm from "./FooterWithForm";
import FooterWithoutForm from "./FooterWithoutForm";

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

    // console.log("pathname:", pathname);
    // console.log("isFooterForm:", isFooterForm);
    // console.log("startsWith:", pathname.startsWith("/services"));
    // console.log("NOTpathname  /", pathname !== "/");

    return (() => {
        if (isFooterForm) {
            return <FooterWithForm />;
        } else if (isContactsSection) {
            return <></>;
        } else {
            return <FooterWithoutForm />;
        }
    })();
};

export default Footer;
