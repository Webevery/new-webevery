"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GetSlugArrayFromData } from "@/helpers/slugArraysFromData";
import FooterWithForm from "./FooterWithForm";
import FooterWithoutForm from "./FooterWithoutForm";
import FooterContactsSection from "./FooterContactsSection";

const Footer = () => {
    const [isFooterWihtForm, setFooterWihtForm] = useState(false);
    const [isFooterWithoutForm, setFooterWithoutForm] = useState(false);
    const [isContactsSection, setContactsSection] = useState(false);

    const servicesSlugArray = GetSlugArrayFromData("services");
    const blogSlugArray = GetSlugArrayFromData("blogs");
    const ourProjectsSlugArray = GetSlugArrayFromData("ourProjects");

    const pathname = usePathname();

    const existServicesPage = servicesSlugArray?.some(
        (item) => `/services/${item}` === pathname
    );

    const existBlogPage = blogSlugArray?.some(
        (item) => `/blog/${item}` === pathname
    );

    const existOurProjectsPage = ourProjectsSlugArray?.some(
        (item) => `/ourProjects/${item}` === pathname
    );

    useEffect(() => {
        if (pathname === "/" || pathname === "/services" || existServicesPage) {
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
            existBlogPage ||
            existOurProjectsPage
        ) {
            setFooterWithoutForm(false);
            setContactsSection(false);
            setFooterWihtForm(true);
        } else {
            setFooterWihtForm(false);
            setContactsSection(false);
            setFooterWithoutForm(false);
        }
    }, [
        pathname,
        isFooterWihtForm,
        existServicesPage,
        existBlogPage,
        existOurProjectsPage,
    ]);

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
