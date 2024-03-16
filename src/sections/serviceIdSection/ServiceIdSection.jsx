"use client";

import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "react-i18next";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import { currentLanguages } from "@/data/languages";
import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";
import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";
import NotFound from "@/components/NotFound/NotFound";
import Loading from "@/components/Loading/Loading";

import styles from "./ServiceIdSection.module.scss";

const ServiceIdSection = ({ params }) => {
    const { slug } = params;
    const pathname = usePathname();
    const { data, error, isLoading } = GetIdDataFromSection("services", slug);
    const isPathExist = useCheckPathname(pathname);
    const { i18n, t } = useTranslation();

    const dataId = data && !isLoading ? data : error;

    let changedData;

    if (!isLoading) {
        changedData = {
            _id: dataId._id,
            title: dataId.title,
            titleEn: dataId.titleEn,
            titleGradient: dataId.titleGradient,
            titleGradientEn: dataId.titleGradientEn,
            mockup: dataId.mockup,
            description: dataId.description,
            descriptionEn: dataId.descriptionEn,
            price: dataId.price,
            priceEn: dataId.priceEn,
            directions: dataId.directions,
            directionsEn: dataId.directionsEn,
            slug: dataId.slug,
        };

        if (changedData && typeof (changedData.directions) === "string" && typeof (changedData.directionsEn) === "string") {
            const directionsArray = changedData.directions.split(' | ');
            const directionsEnArray = changedData.directionsEn.split(' | ');
            changedData.directions = directionsArray;
            changedData.directionsEn = directionsEnArray;
        }
    }


    return (
        <>
            {isLoading && <Loading className={styles.loading} />}
            {!isLoading && !isPathExist && (
                <NotFound
                    title={t('NotFoundPage.NotFoundTitle')}
                    buttonTitle={t('ServiceIdPage.BackToServicesBtn')}
                    href='/services'
                />
            )}
            {!isLoading && isPathExist && (
                <section className={styles.servicesId}>
                    <div className={`container ${styles.servicesIdContainer}`}>
                        <h1 className={styles.servicesIdTitle}>
                            <span>{i18n.language === currentLanguages.EN ? dataId?.titleGradientEn : dataId?.titleGradient}</span>
                            &nbsp;
                            {i18n.language === currentLanguages.EN ? dataId?.titleEn : dataId?.title}
                        </h1>
                        <div className={styles.servicesIdContent}>
                            <div className={styles.servicesIdImgContainer}>
                                <CldImage
                                    src={dataId?.mockup}
                                    alt={dataId?.title}
                                    fill='true'
                                    className={styles.cartImg}
                                    sizes='30vw'
                                />
                            </div>

                            <div className={styles.servicesIdDescContainer}>
                                <p className={styles.servicesIdDesc}>
                                    {i18n.language === currentLanguages.EN
                                        ? dataId?.descriptionEn
                                        : dataId?.description}
                                </p>
                                <p className={styles.servicesIdPrice}>
                                    {i18n.language === currentLanguages.EN
                                        ? dataId?.priceEn
                                        : dataId?.price}
                                </p>
                                <OrderBtn
                                    id={styles.serviceOrderBtn}
                                    title={t('Buttons.OrderBtn')}
                                />
                            </div>
                        </div>

                        <div
                            className={`container ${styles.servicesIdSliderContainer}`}
                        >
                            <h3 className={styles.servicesIdSliderTitle}>
                                {t('ServiceIdPage.SubTitle1')} <span>{t('ServiceIdPage.SubTitle2')}</span> {t('ServiceIdPage.SubTitle3')}
                            </h3>
                            <SliderOfServices />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ServiceIdSection;
