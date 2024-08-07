import { useState, useEffect } from "react";
import { GetValuesArrayFromData } from "@/helpers/valuesArrayFromData";

export function useCheckPathname(path) {
    const [isPathExist, setPathExist] = useState(false);

    const servicesSlugArray = GetValuesArrayFromData("services", "slug");
    const blogSlugArray = GetValuesArrayFromData("blog", "slug");
    const ourProjectsSlugArray = GetValuesArrayFromData("ourProjects", "slug");

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
            path === "/contacts" ||
            path === "/services" ||
            path === "/ourProjects" ||
            (existBlogPage || existBlogPage === undefined) ||
            (existServicesPage || existServicesPage === undefined) ||
            (existOurProjectsPage || existOurProjectsPage === undefined)
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