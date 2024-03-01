import FooterWithForm from "@/components/Footer/FooterWithForm";

export default function BlogLayout({ children }) {
    return (
        <>
            {children}
            <FooterWithForm />
        </>
    )
}