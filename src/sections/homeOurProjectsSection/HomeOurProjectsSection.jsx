"use client";
import { useTranslation } from "react-i18next";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import HomeOurProjectsSlider from "@/components/HomeOurProjectsSlider/HomeOurProjectsSlider";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./HomeOurProjectsSection.module.scss";

const HomeOurProjectsSection = () => {
  const { data, error, isLoading } = GetDataFromSection("ourProjects");

  const { t } = useTranslation();
  let sortedByCreateData = [];

  if (!isLoading) {
    sortedByCreateData = [...data];

    sortedByCreateData.sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  }

  return (
    <section className={styles.section}>
      <div className="container">
        {!isLoading && (
          <h2 className={styles.title}>
            {t("MainPage.OurProjectsTitle")}{" "}
            <span className="titleGradient">
              {t("MainPage.OurProjectsSubTitle")}
            </span>
          </h2>
        )}
        <div className={styles.contentWrapper}>
          <HomeOurProjectsSlider data={sortedByCreateData} />

          {!isLoading && (
            <NavigationBtn
              title={t("Buttons.HomeProjectsBtn")}
              href={"/ourProjects"}
              className={styles.toPortfolioBtn}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeOurProjectsSection;
