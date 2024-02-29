import FooterWithForm from "@/components/Footer/FooterWithForm";

export default function FaqLayout({ children }) {
    return (
        <>
            {children}
            <FooterWithForm />
        </>
    )
}