import { useContext, useEffect } from 'react';
import { SiteContext } from "@/context/siteContext";

export function useLockBodySkroll() {
    const { isModalOpen } = useContext(SiteContext);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

}