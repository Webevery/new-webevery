"use client";

import { useEffect, useState } from "react";
import { usePathname, notFound } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import { currentLanguages } from "@/data/languages";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import stylescBtn from "../../components/Buttons/Btns.module.scss";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";

import styles from "./OurProjectIdSection.module.scss";

const OurProjectIdSection = ({ params }) => {
    const { slug } = params;
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const { data, error, isLoading } = GetIdDataFromSection(
        "ourProjects",
        slug
    );

    const dataId = data && !isLoading ? data : error;
    const { i18n } = useTranslation();
    const pathname = usePathname();

    const isPathExist = useCheckPathname(pathname);

    if (!isLoading && !isPathExist) {
        notFound();
    }

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section>
            <BackgroundAnimation />
            {!isLoading && (
                <div className={`container ${styles.ourProjectContainer}`}>
                    <h1 className={styles.ourProjectsTitle}>
                        {dataId?.titleEn === "Site for" ? (
                            <>
                                <span
                                    className={styles.ourProjectsTitleGradient}
                                >
                                    {i18n.language === currentLanguages.EN
                                        ? data?.titleEn
                                        : data?.title}
                                </span>{" "}
                                {i18n.language === currentLanguages.EN
                                    ? data?.titleGradientEn
                                    : data?.titleGradient}
                            </>
                        ) : (
                            <>
                                {i18n.language === currentLanguages.EN
                                    ? data?.titleGradientEn
                                    : data?.titleGradient}{" "}
                                <span
                                    className={styles.ourProjectsTitleGradient}
                                >
                                    {i18n.language === currentLanguages.EN
                                        ? data?.titleEn
                                        : data?.title}
                                </span>
                            </>
                        )}{" "}
                        {dataId?.titleGradientEn === "ICE CREAM" && (
                            <span className={styles.ourProjectsTitleGradient}>
                                cafe
                            </span>
                        )}
                    </h1>
                    {isSmallScreen && (
                        <div
                            className={
                                stylescBtn.btnWrapper + " " + styles.btnWrapper
                            }
                        >
                            <a
                                href={dataId?.siteLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={dataId?.titleGradientEn}
                                className={
                                    stylescBtn.btn + " " + styles.openSite
                                }
                            >
                                Open site
                            </a>
                        </div>
                    )}

                    <figure className={styles.imgContainer}>
                        {!isLoading ? (
                            <CldImage
                                src={dataId?.heroImage}
                                alt='головна сторінка сайту'
                                fill={true}
                                sizes='100vw'
                                priority={true}
                                className={styles.imageLoader}
                            />
                        ) : (
                            <div className={styles.imageLoader} />
                        )}
                    </figure>
                    <ul className={styles.contentWraper}>
                        <li className={styles.contentItem}>
                            <h3 className={styles.contentTitle}>Problem</h3>
                            <p className={styles.contentDesc}>
                                {i18n.language === currentLanguages.EN
                                    ? data?.problemEn
                                    : data?.problem}
                            </p>
                        </li>
                        <li className={styles.contentItem}>
                            <h3 className={styles.contentTitle}>Solution</h3>
                            <p className={styles.contentDesc}>
                                {i18n.language === currentLanguages.EN
                                    ? data?.solutionEn
                                    : data?.solution}
                            </p>
                        </li>
                        <li className={styles.contentItem}>
                            <h3 className={styles.contentTitle}>
                                How it`s help for business
                            </h3>
                            <p className={styles.contentDesc}>
                                {i18n.language === currentLanguages.EN
                                    ? data?.helpEn
                                    : data?.help}
                            </p>
                        </li>
                    </ul>
                    <figure className={styles.imgScreensContainer}>
                        {!isLoading ? (
                            <CldImage
                                src={dataId?.screensImage}
                                alt='фото сайту'
                                fill={true}
                                loading='lazy'
                                sizes='100vw'
                            />
                        ) : (
                            <div className={styles.imageLoader} />
                        )}
                    </figure>
                    <div className={styles.mobileContainer}>
                        <h3 className={styles.mobileTitle}>Mobile adapted</h3>
                        <p className={styles.mobileDesc}>
                            {i18n.language === currentLanguages.EN
                                ? data?.adaptationEn
                                : data?.adaptation}
                        </p>
                    </div>
                    <ul className={styles.mobileImgContainer}>
                        {dataId?.mobileImages.map((img) => (
                            <li key={v4()} className={styles.mobileItem}>
                                <figure className={styles.mobileImgItem}>
                                    <CldImage
                                        src={img}
                                        alt='мобільна версія сайту'
                                        fill={true}
                                        loading='lazy'
                                        sizes='25vw'
                                    />
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default OurProjectIdSection;
