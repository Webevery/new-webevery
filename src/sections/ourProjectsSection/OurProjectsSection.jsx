"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data/languages";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./OurProjectsSection.module.scss";
import stylescBtn from "../../components/Buttons/Btns.module.scss";
import ReadMore from "@/components/Buttons/ReadMore/ReadMore";

const OurProjectsSection = () => {
  const { data, isLoading } = GetDataFromSection("ourProjects");

  let sortedByCreateData = [];

  if (!isLoading) {
    sortedByCreateData = [...data];

    sortedByCreateData.sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  }

  const filteredByIsShownData = sortedByCreateData.filter(
    (item) => item.isShown === true
  );

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.projects}>
      <div className={`container ${styles.projectContainer}`}>
        {!isLoading && (
          <h1 className={styles.title}>{t("OurProjectsPage.Title")}</h1>
        )}
        <ul className={styles.ourProjectsList}>
          {!isLoading &&
            filteredByIsShownData?.map(
              ({
                slug,
                titleEn,
                title,
                titleGradientEn,
                titleGradient,
                heroImage,
                solutionEn,
                solution,
                siteLink,
              }) => (
                <li key={slug} className={styles.ourProjectsItem}>
                  <Link
                    href={`/ourProjects/${slug}`}
                    className={styles.ourProjectsImgContainer}
                  >
                    <CldImage
                      src={heroImage}
                      alt="фото сайту"
                      fill={true}
                      priority={true}
                      className={styles.img}
                      sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
                    />
                  </Link>
                  <div className={styles.ourProjectsContent}>
                    <h3 className={styles.ourProjectsTitle}>
                      {i18n.language === currentLanguages.EN ? titleEn : title}
                      <span className={!isSmallScreen ? "titleGradient" : ""}>
                        {" "}
                        {i18n.language === currentLanguages.EN
                          ? titleGradientEn
                          : titleGradient}
                      </span>
                    </h3>
                    <p className={styles.ourProjectsDesc}>
                      {i18n.language === currentLanguages.EN
                        ? solutionEn
                        : solution}
                    </p>

                    <ReadMore
                      href="ourProjects"
                      slug={slug}
                      className={styles.readMore}
                      classNameIcon={styles.readMoreIcon}
                    />

                    {!isSmallScreen && (
                      <div
                        className={
                          stylescBtn.btnWrapper + " " + styles.btnWrapper
                        }
                      >
                        <a
                          href={siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={titleGradientEn}
                          className={stylescBtn.btn + " " + styles.openSite}
                        >
                          {t("Buttons.ProjectOpenSiteBtn")}
                        </a>
                      </div>
                    )}
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </section>
  );
};

export default OurProjectsSection;
