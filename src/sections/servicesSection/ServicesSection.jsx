"use client";

import { useContext } from "react";
import Link from "next/link";

import { SiteContext } from "@/context/siteContext";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";

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
    changedData.map(item => {
      if (typeof (item.directions) === "string" && typeof (item.directionsEn) === "string") {
        const directionsArray = item.directions.split(" | ");
        const directionsEnArray = item.directionsEn.split(" | ");
        item.directions = directionsArray;
        item.directionsEn = directionsEnArray;
      }
    })
  }

  return (
    <section>
      <section className={styles.services}>
        <div className={`container ${styles.servicesContainer}`}>
          {!isLoading && <div className={styles.titleServicesContainer}>
            <h1 className={styles.titleServices}>
              <span>{t('ServicesPage.Title')}</span>
            </h1>
            <h2 className={styles.descServices}>
              {t('ServicesPage.SubTitle1')} <span>{t('ServicesPage.SubTitle2')}</span> {t('ServicesPage.SubTitle3')}
            </h2>
          </div>}

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
                price,
              }) => {
                const dir =
                  i18n.language === currentLanguages.EN
                    ? directionsEn
                    : directions;
                return (
                  <li key={slug} className={styles.cartItem}>
                    <div>
                      <Link
                        href={`/services/${slug}`}
                        className={styles.readMore}
                      >
                        <span className={styles.readMoreTitle}>{t('Buttons.ServicesDetailsBtn')}</span>
                        <svg className={styles.readMoreIcon}>
                          <linearGradient
                            id="paint0_linear_3004_8704"
                            x1="6.97336e-08"
                            y1="6.28477"
                            x2="11.302"
                            y2="-9.00003"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAFF00" />
                            <stop offset="0.466629" stopColor="#00F0FF" />
                            <stop offset="1" stopColor="#0400B3" />
                          </linearGradient>
                          <use
                            href="sprite.svg#icon-arrowReadMore"
                            style={{
                              fill: "url(#paint0_linear_3004_8704)",
                            }}
                          />
                        </svg>
                      </Link>
                      <h3 className={styles.cartTitle}>
                        {/* <span> */}
                        {i18n.language === currentLanguages.EN
                          ? titleGradientEn
                          : titleGradient}
                        {/* </span>
                      &nbsp; */}
                        {i18n.language === currentLanguages.EN
                          ? titleEn
                          : title}
                      </h3>
                      <ul>
                        {dir.map((item, index) => {
                          return (
                            <li key={index} className={styles.descItem}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className={styles.cartPrice}>{price}</p>
                      <OrderBtn
                        id={styles.serviceOrderBtn}
                        title={t('Buttons.ServiceCardOrderBtn')}
                        onClick={() => {
                          setComment(`${titleGradientEn} ${titleEn}`);
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
    </section>
  );
};

export default ServicesSection;
