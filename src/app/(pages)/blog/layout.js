import FooterWithForm from "@/components/Footer/FooterWithForm";

export default function BlogLayout({ children }) {
    return (
        <>
            <main>{children}</main>
            <FooterWithForm />
        </>
    )
}