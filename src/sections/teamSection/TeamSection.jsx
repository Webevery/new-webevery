"use client";

import styles from "./TeamSection.module.scss";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import { shuffleArray } from "@/helpers/shuffleArray";
import { CldImage } from "next-cloudinary";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data/languages";

const TeamSection = () => {
  const { data, isLoading, error } = GetDataFromSection("team");
  const { i18n, t } = useTranslation();

  let newData = [];
  if (!isLoading) {
    newData = [...data];
  }

  newData = shuffleArray(newData);

  return (
    <section className={styles.team}>
      <div className="container">
        <div className={styles.titleTeamContainer}>
          {!isLoading && <><h1 className={styles.titleTeam}>
            <span>{t('TeamPage.Title')}</span>
          </h1>
            <h2 className={styles.descTeam}>
              {t('TeamPage.SubTitle')}
            </h2></>}
        </div>
        <ul className={styles.cartContainer}>
          {newData?.map((item) => (
            <li key={item.slug} className={styles.cartItem}>
              <div className={styles.cartImgContainer}>
                <CldImage
                  src={item.photo}
                  alt={item.name}
                  fill="true"
                  className={styles.cartImg}
                  sizes="50vw"
                />
              </div>

              <h3 className={styles.cartName}>
                {i18n.language === currentLanguages.EN
                  ? item.nameEn
                  : item.name}
              </h3>
              <p className={styles.cartJobTitle}>
                {i18n.language === currentLanguages.EN
                  ? item.positionEn
                  : item.position}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
