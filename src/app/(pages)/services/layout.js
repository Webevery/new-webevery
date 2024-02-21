
import Footer from "@/components/Footer/Footer";

export default function ServicesLayout({ children }) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}