import FooterWithForm from "@/components/Footer/FooterWithForm";

export default function TeamLayout({ children }) {
    return (
        <>
            <main>{children}</main>
            <FooterWithForm />
        </>
    )
}