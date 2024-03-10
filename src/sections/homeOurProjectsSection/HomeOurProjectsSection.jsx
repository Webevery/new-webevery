"use client"
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeOurProjectsSection.module.scss";
import HomeOurProjectsSlider from "@/components/HomeOurProjectsSlider/HomeOurProjectsSlider";
import { useTranslation } from "react-i18next";
import { GetDataFromSection } from "@/fetch/ClientFetch";


const HomeOurProjectsSection = () => {

  const { data, error, isLoading } = GetDataFromSection('ourProjects')

const {t}=useTranslation();

  return <section className={styles.container}>
    <div className="container">
      {/* <h2 className={styles.title}>Our <span className="titleGradient">projects</span>
      </h2> */}
      {!isLoading && <h2 className={styles.title}>{t("MainPage.OurProjectsTitle")}<span className="titleGradient"> {t("MainPage.OurProjectsSubTitle")}</span>
      </h2>}
      <div className={styles.contentWrapper}>
        <HomeOurProjectsSlider data={data} />

        {/* <NavigationBtn title="To portfolio" href={"/ourProjects"} className={styles.toPortfolioBtn} /> */}
        {!isLoading && <NavigationBtn title={t("Buttons.HomeProjectsBtn")} href={"/ourProjects"} className={styles.toPortfolioBtn} />}
      </div>
    </div>
  </section>;
};

export default HomeOurProjectsSection;
