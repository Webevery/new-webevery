"use client"
import NotFound from "@/components/NotFound/NotFound";
import { useTranslation } from "react-i18next";
export default function NotFoundPage() {

    const{t}=useTranslation()

    return (
        <NotFound
            title={t('NotFoundPage.NotFoundTitle')}
            buttonTitle={t('NotFoundPage.NotFoundTitleBtn')}
            href='/'
        />
    );
}
