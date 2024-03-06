import { useState, useEffect } from "react";
import { GetSlugArrayFromData } from "@/helpers/slugArraysFromData";

export function useCheckPathname(path) {
    const [isPathExist, setPathExist] = useState(false);

    const servicesSlugArray = GetSlugArrayFromData("services");
    const blogSlugArray = GetSlugArrayFromData("blogs");
    const ourProjectsSlugArray = GetSlugArrayFromData("ourProjects");

    const existServicesPage = servicesSlugArray?.some(
        (item) => `/services/${item}` === path
    );

    const existBlogPage = blogSlugArray?.some(
        (item) => `/blog/${item}` === path
    );

    const existOurProjectsPage = ourProjectsSlugArray?.some(
        (item) => `/ourProjects/${item}` === path
    );

    useEffect(() => {
        if (
            path === "/" ||
            path === "/faq" ||
            path === "/team" ||
            path === "/blog" ||
            path === "/services" ||
            path === "/ourProjects" ||
            existBlogPage ||
            existOurProjectsPage ||
            existServicesPage
        ) {
            setPathExist(true)
        } else {
            setPathExist(false)
        }
    }, [
        path,
        isPathExist,
        existServicesPage,
        existBlogPage,
        existOurProjectsPage,
    ]);

    return isPathExist;

}