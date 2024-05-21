"use client";

import { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/siteContext";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import { currentLanguages } from "@/data/languages";
import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";
import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";
import NotFound from "@/components/NotFound/NotFound";
import Loading from "@/components/Loading/Loading";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

import styles from "./ServiceIdSection.module.scss";

const ServiceIdSection = ({ params }) => {
    const { slug } = params;
    const pathname = usePathname();
    const router = useRouter();
    const { data, isLoading } = GetIdDataFromSection("services", slug);
    const isPathExist = useCheckPathname(pathname);
    const { openModal, setComment } = useContext(SiteContext);
    const { i18n, t } = useTranslation();

    let changedData;

    if (!isLoading) {
        changedData = {
            _id: data?._id,
            title: data?.title,
            titleEn: data?.titleEn,
            titleGradient: data?.titleGradient,
            titleGradientEn: data?.titleGradientEn,
            mockup: data?.mockup,
            description: data?.description,
            descriptionEn: data?.descriptionEn,
            price: data?.price,
            priceEn: data?.priceEn,
            directions: data?.directions,
            directionsEn: data?.directionsEn,
            slug: data?.slug,
        };

        if (
            changedData &&
            typeof changedData.directions === "string" &&
            typeof changedData.directionsEn === "string"
        ) {
            const directionsArray = changedData.directions.split(" | ");
            const directionsEnArray = changedData.directionsEn.split(" | ");
            changedData.directions = directionsArray;
            changedData.directionsEn = directionsEnArray;
        }
    }

    return (
        <>
            {isLoading && <Loading className={styles.loading} />}

            {!isLoading && isPathExist && (
                <section className={styles.servicesId}>
                    <div className="container">
                        <BreadCrumbs
                            onClick={() => router.push("/services")}
                            title={t("Buttons.BackPageBtn")}
                            classNameContainer={styles.backContainer}
                            classNameIcon={styles.backIcon}
                        />

                        <h1 className={styles.servicesIdTitle}>
                            <span>
                                {i18n.language === currentLanguages.EN
                                    ? changedData.titleGradientEn
                                    : changedData.titleGradient}
                            </span>
                            &nbsp;
                            {i18n.language === currentLanguages.EN
                                ? changedData.titleEn
                                : changedData.title}
                        </h1>
                        <div className={styles.servicesIdContent}>
                            <div className={styles.servicesIdImgContainer}>
                                <CldImage
                                    src={changedData.mockup}
                                    alt={changedData.title}
                                    fill='true'
                                    className={styles.cartImg}
                                    sizes='30vw'
                                />
                            </div>

                            <div className={styles.servicesIdDescContainer}>
                                <p className={styles.servicesIdDesc}>
                                    {i18n.language === currentLanguages.EN
                                        ? changedData.descriptionEn
                                        : changedData.description}
                                </p>
                                <p className={styles.servicesIdPrice}>
                                    {i18n.language === currentLanguages.EN
                                        ? changedData.priceEn
                                        : changedData.price}
                                </p>
                                <OrderBtn
                                    id={styles.serviceOrderBtn}
                                    title={t("Buttons.OrderBtn")}
                                    onClick={() => {
                                        if (
                                            i18n.language ===
                                            currentLanguages.EN
                                        ) {
                                            setComment(
                                                `${changedData.titleGradientEn} ${changedData.titleEn}`
                                            );
                                        } else {
                                            setComment(
                                                `${changedData.titleGradient} ${changedData.title}`
                                            );
                                        }
                                        openModal();
                                    }}
                                />
                            </div>
                        </div>

                        <h3 className={styles.servicesIdSliderTitle}>
                            {t("ServiceIdPage.SubTitle1")}{" "}
                            <span>{t("ServiceIdPage.SubTitle2")}</span>{" "}
                            {t("ServiceIdPage.SubTitle3")}
                        </h3>
                        <SliderOfServices slug={slug} />
                    </div>
                </section>
            )}

            {!isLoading && !isPathExist && (
                <NotFound
                    title={t("NotFoundPage.NotFoundTitle")}
                    buttonTitle={t("ServiceIdPage.BackToServicesBtn")}
                    href='/services'
                />
            )}
        </>
    );
};

export default ServiceIdSection;
