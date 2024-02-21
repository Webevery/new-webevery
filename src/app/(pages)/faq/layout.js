import FooterWithForm from "@/components/Footer/FooterWithForm";

export default function FaqLayout({ children }) {
    return (
        <>
            <main>{children}</main>
            <FooterWithForm />
        </>
    )
}