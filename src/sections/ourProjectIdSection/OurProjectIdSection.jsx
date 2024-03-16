"use client";

import { useRouter, usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import { currentLanguages } from "@/data/languages";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import { isMobole, isTablet } from "@/hooks/useWindowResize";
import NotFound from "@/components/NotFound/NotFound";
import Loading from "@/components/Loading/Loading";

import stylescBtn from "@/components/Buttons/Btns.module.scss";
import styles from "./OurProjectIdSection.module.scss";

const OurProjectIdSection = ({ params }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { slug } = params;

    const { data, error, isLoading } = GetIdDataFromSection(
        "ourProjects",
        slug
    );

    const dataId = data && !isLoading ? data : error;
    const { i18n,t } = useTranslation();

    const isPathExist = useCheckPathname(pathname);

    return (
        <>
            {isLoading && <Loading className={styles.loading} />}
            {!isLoading && !isPathExist && (
                <NotFound
                    title={t('OurProjectsPage.NoProjects')}
                    buttonTitle={t('OurProjectsPage.NoProjectsBtn')}
                    href='/ourProjects'
                />
            )}
            <section>
                {!isLoading && isPathExist && (
                    <div className={`container ${styles.ourProjectContainer}`}>
                        <div
                            className={styles.backContainer}
                            onClick={() => router.push("/ourProjects")}
                        >
                            <svg className={styles.backIcon}>
                                <use href='../sprite.svg#icon-arrowReadMore' />
                            </svg>
                            <p>{t('OurProjectsPage.NavLinkText')}</p>
                        </div>
                        <h1 className={styles.ourProjectsTitle}>
                            {dataId?.titleEn === "Site for" ? (
                                <>
                                    <span
                                        className={
                                            styles.ourProjectsTitleGradient
                                        }
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
                                        className={
                                            styles.ourProjectsTitleGradient
                                        }
                                    >
                                        {i18n.language === currentLanguages.EN
                                            ? data?.titleEn
                                            : data?.title}
                                    </span>
                                </>
                            )}{" "}
                            {dataId?.titleGradientEn === "ICE CREAM" && (
                                <span
                                    className={styles.ourProjectsTitleGradient}
                                >
                                    cafe
                                </span>
                            )}
                        </h1>
                        {(isMobole || isTablet) && (
                            <div
                                className={
                                    stylescBtn.btnWrapper +
                                    " " +
                                    styles.btnWrapper
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
                                <h3 className={styles.contentTitle}>{t('OurProjectsPage.TitleProblem')}</h3>
                                <p className={styles.contentDesc}>
                                    {i18n.language === currentLanguages.EN
                                        ? data?.problemEn
                                        : data?.problem}
                                </p>
                            </li>
                            <li className={styles.contentItem}>
                                <h3 className={styles.contentTitle}>
                                {t('OurProjectsPage.TitleSolutions')}
                                </h3>
                                <p className={styles.contentDesc}>
                                    {i18n.language === currentLanguages.EN
                                        ? data?.solutionEn
                                        : data?.solution}
                                </p>
                            </li>
                            <li className={styles.contentItem}>
                                <h3 className={styles.contentTitle}>
                                {t('OurProjectsPage.TitleHelpBussines')}
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
                            <h3 className={styles.mobileTitle}>
                            {t('OurProjectsPage.TitleDesc')}
                            </h3>
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
        </>
    );
};

export default OurProjectIdSection;
