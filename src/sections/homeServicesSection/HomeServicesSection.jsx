"use client"
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeServicesSection.module.scss";

import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const HomeServicesSection = () => {

  const { t } = useTranslation();

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => setIsLoad(false), []);

  return <section className={styles.section}>
    {/* <div className={`container ${styles.con}`}> */}
    {/* <div className={`container ${styles.container}`}> */}
    <div className="container">
      {!isLoad && <><h2 className={styles.title}>{t("MainPage.OurServicesTitle")}</h2>
        <p className={`titleGradient ${styles.subTitleLaptop}`}>{t("MainPage.OurServicesSubTitle")}</p></>}
      <div className={styles.btnNavContainer}>
        {!isLoad && <NavigationBtn
          id={styles.btnNav}
          title={t("Buttons.ServicesDetailsBtn")}
          href="/services" />}</div>
      <SliderOfServices />
    </div>
  </section >;
};


export default HomeServicesSection;
