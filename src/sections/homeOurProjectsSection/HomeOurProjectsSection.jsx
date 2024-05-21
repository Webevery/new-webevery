"use client"
import { useTranslation } from "react-i18next";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import HomeOurProjectsSlider from "@/components/HomeOurProjectsSlider/HomeOurProjectsSlider";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./HomeOurProjectsSection.module.scss";


const HomeOurProjectsSection = () => {

  const { data, error, isLoading } = GetDataFromSection('ourProjects')

  const { t } = useTranslation();

  return <section >
    <div className={`container ${styles.container}`}>
      {!isLoading && <h2 className={styles.title}>{t("MainPage.OurProjectsTitle")} <span className="titleGradient">{t("MainPage.OurProjectsSubTitle")}</span>
      </h2>}
      <div className={styles.contentWrapper}>
        <HomeOurProjectsSlider data={data} />

        {!isLoading && <NavigationBtn title={t("Buttons.HomeProjectsBtn")} href={"/ourProjects"} className={styles.toPortfolioBtn} />}
      </div>
    </div>
  </section>;
};


export default HomeOurProjectsSection;