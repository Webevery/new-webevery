"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";
import ReadMore from "@/components/Buttons/ReadMore/ReadMore";

import styles from "./ServicesSection.module.scss";

import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data/languages";

const ServicesSection = () => {
  const { data, isLoading } = GetDataFromSection("services");
  const { openModal, setComment } = useContext(SiteContext);
  const { i18n, t } = useTranslation();

  let changedData = [];
  if (!isLoading) {
    changedData = [...data];
    changedData.map((item) => {
      if (
        typeof item.directions === "string" &&
        typeof item.directionsEn === "string"
      ) {
        const directionsArray = item.directions.split(" | ");
        const directionsEnArray = item.directionsEn.split(" | ");
        item.directions = directionsArray;
        item.directionsEn = directionsEnArray;
      }
    });
  }

  return (
    <section>
      <div className="container">
        {!isLoading && (
          <div className={styles.titleServicesContainer}>
            <h1 className={styles.titleServices}>
              <span>{t("ServicesPage.Title")}</span>
            </h1>
            <h2 className={styles.descServices}>
              {t("ServicesPage.SubTitle1")}{" "}
              <span>{t("ServicesPage.SubTitle2")}</span>{" "}
              {t("ServicesPage.SubTitle3")}
            </h2>
          </div>
        )}


        <ul className={styles.cartContainer}>
          {changedData?.map(
            ({
              slug,
              title,
              titleEn,
              titleGradient,
              titleGradientEn,
              directions,
              directionsEn,
              description,
              descriptionEn,
              price,
              priceEn,
            }) => {
              //   const dir =
              //     i18n.language === currentLanguages.EN
              //       ? directionsEn
              //       : directions;
              const dir =
                i18n.language === currentLanguages.EN
                  ? descriptionEn
                  : description;
              return (
                <li key={slug} className={styles.cartItem}>
                  <div>
                    <ReadMore
                      className={styles.readMore}
                      href="services"
                      slug={slug}
                    />
                    <h3 className={styles.cartTitle}>
                      {i18n.language === currentLanguages.EN
                        ? titleGradientEn
                        : titleGradient}
                      &nbsp;
                      {i18n.language === currentLanguages.EN ? titleEn : title}
                    </h3>
                    {/* <ul>
                      {dir.map((item, index) => {
                        return (
                          <li key={index} className={styles.descItem}>
                            {item}
                          </li>
                        );
                      })}
                    </ul> */}
                    <p className={styles.description}>{dir}</p>
                  </div>
                  <div>
                    <p className={styles.cartPrice}>
                      {i18n.language === currentLanguages.EN ? priceEn : price}
                    </p>
                    <OrderBtn
                      id={styles.serviceOrderBtn}
                      title={t("Buttons.ServiceCardOrderBtn")}
                      onClick={() => {
                        if (i18n.language === currentLanguages.EN) {
                          setComment(`${titleGradientEn} ${titleEn}`);
                        } else {
                          setComment(`${titleGradient} ${title}`);

                        }
                        openModal();
                      }}
                    />
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
