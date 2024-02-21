
import FooterWithForm from "@/components/Footer/FooterWithForm";

export default function OurProjectsLayout({ children }) {
    return (
        <>
            <main>{children}</main>
            <FooterWithForm />
        </>
    )
}