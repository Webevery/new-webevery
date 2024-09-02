"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SliderOfTeam.module.scss";

import { GetDataFromSection } from "@/fetch/ClientFetch";
import { shuffleArray } from "@/helpers/shuffleArray";
import { CldImage } from "next-cloudinary";
import "./SliderOfTeam.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data/languages";

export const SliderOfTeam = () => {
  const { data, isLoading } = GetDataFromSection("team");
  const { i18n } = useTranslation();

  let newData = [];
  if (!isLoading) {
    newData = [...data];
  }

  newData = shuffleArray(newData);
  return (
    <>
      {isLoading ? (
        <Loading className={styles.loader} />
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          speed={1500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          coverflowEffect={{
            rotate: -20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}

          className="teamSwiper"
        >
          <div className={styles.cartContainer}>
            {newData?.map((item) => {
              return (
                <SwiperSlide
                  key={item.slug}
                // className="slideContentWrapper"
                >
                  <div key={item.slug} className={styles.cartItem}>
                    <div className={styles.cartImgContainer}>
                      <CldImage
                        src={item.photo}
                        alt={item.name}
                        fill="true"
                        className={styles.cartImg}
                        sizes="30vw"
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
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      )}
    </>
  );
};
