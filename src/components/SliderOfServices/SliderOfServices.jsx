"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./SliderOfServices.module.scss";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";
import OrderBtn from "../Buttons/OrderBtn/OrderBtn";
import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";
import ReadMore from "../Buttons/ReadMore/ReadMore";
import "./SliderOfServices.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export const SliderOfServices = ({ slug, id, idSlide }) => {
  const { data, isLoading } = GetDataFromSection("services");
  const { openModal, setComment } = useContext(SiteContext);
  const { i18n, t } = useTranslation();

  let changedData;

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

  // for render on ServiceIdPage
  const filteredData = changedData?.filter((item) => item.slug !== slug);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1500}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      navigation={true}
      modules={[Pagination, Autoplay, Navigation]}
      // className={`ServicesSwiper ${styles.serviceList}`}
      className={`ServicesSwiper`}
      id={id}
    >
      {filteredData?.map(
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
          return (
            <SwiperSlide
              key={slug}
              // className={`SlideContentWrapper ${styles.serviceItem}`}
              // className={`slideContentWrapper`}

              // id={idSlide}
            >
              {/* <div className={styles.slideContent}> */}
              <div>
                <div className={styles.readMore}>
                  <ReadMore href="services" slug={slug} />
                </div>
                <h3 className={styles.cartTitle}>
                  {i18n.language === currentLanguages.EN ? (
                    <>
                      {titleGradientEn}&nbsp;{titleEn}
                    </>
                  ) : (
                    <>
                      {titleGradient}&nbsp;{title}
                    </>
                  )}
                </h3>
                <p className={styles.description}>
                  {i18n.language === currentLanguages.EN
                    ? descriptionEn
                    : description}
                </p>
                {/* <ul>
                  {i18n.language === currentLanguages.EN ? (
                    <>
                      {directionsEn.map((item, index) => {
                        return (
                          <li key={index} className={styles.descItem}>
                            {item}
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {directions.map((item, index) => {
                        return (
                          <li key={index} className={styles.descItem}>
                            {item}
                          </li>
                        );
                      })}
                    </>
                  )}
                </ul> */}
              </div>
              <div>
                <p className={styles.price}>
                  {i18n.language === currentLanguages.EN ? priceEn : price}
                </p>
                {/* розкоментувати після появи політики конфіденційності*/}
                {/* <OrderBtn
                  id={styles.orderBtn}
                  title={t("Buttons.ServiceCardOrderBtn")}
                  onClick={() => {
                    if (i18n.language === currentLanguages.EN) {
                      setComment(`${titleGradientEn} ${titleEn}`);
                    } else {
                      setComment(`${titleGradient} ${title}`);
                    }
                    openModal();
                  }}
                /> */}
              </div>
              {/* </div> */}
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};
