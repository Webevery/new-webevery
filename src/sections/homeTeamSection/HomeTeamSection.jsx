"use client"
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeTeamSection.module.scss";
import { SliderOfTeam } from "@/components/SliderOfTeam/SliderOfTeam";
import { useTranslation } from 'react-i18next';
import { useState, UseEffect, useEffect } from "react";
const HomeTeamSection = () => {

  const [isLoad, setIsLoad] = useState(true);

  const { t } = useTranslation();

  useEffect(() => setIsLoad(false), [])
  return (
    <section className={styles.section}>
      <div className="container">
        {!isLoad && <h2 className={styles.subTitle}>
          <span>{t('MainPage.TeamTitle')}</span> {t('MainPage.TeamSubTitle')}
        </h2>}
        <SliderOfTeam />
        {!isLoad && <NavigationBtn
          id={styles.teamSliderBtn}
          title={t('Buttons.HomeTeamBtn')}
          href={"/team"}
        />}
      </div>
    </section>
  );
};

export default HomeTeamSection;
