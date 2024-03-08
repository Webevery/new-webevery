"use client";

import { useState, useEffect, useContext } from "react";
import { SiteContext } from "@/context/siteContext";
import { useTranslation } from "react-i18next";
import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";
import styles from "./HomeHeroSection.module.scss";

const HomeHeroSection = () => {
  const { openModal } = useContext(SiteContext);

  const { t } = useTranslation();

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => setIsLoad(false), []);
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Empowering your success</h1>
          <p className={styles.text}>
            with team <span className={styles.textItem}>Webevery</span>
          </p>
          {!isLoad && (
            <OrderBtn
              onClick={openModal}
              type="submit"
              title={t("Buttons.HeroOrderBtn")}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
