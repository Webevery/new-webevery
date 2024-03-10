import { useWindowResize } from "@/hooks/useWindowResize";
import FooterWithForm from "./FooterWithForm";
import FooterWithoutForm from "./FooterWithoutForm";

const FooterContactsSection = () => {
    const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();
    return (() => {
        if (isMobile) {
            return <FooterWithoutForm />;
        } else if (isTablet) {
            return <FooterWithForm />;
        } else if (isLaptop || isDesktop) {
            return <FooterWithoutForm />;
        } else {
            return <div>Loading ...</div>;
        }
    })();
};

export default FooterContactsSection;
