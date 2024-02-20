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
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

export const SliderOfTeam = () => {
  const { data, isLoading, error } = GetDataFromSection("team");

  let newData = [];
  if (!isLoading) {
    newData = [...data];
  }

  newData = shuffleArray(newData);
  return (
    <>
      {!isLoading && (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
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
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectCoverflow]}
          className="teamSwiper"
        >
          <ul className={styles.cartContainer}>
            {newData?.map((item) => {
              return (
                <SwiperSlide key={item.slug} className="slideContentWrapper">
                  <li key={item.slug} className={styles.cartItem}>
                    <div className={styles.cartImgContainer}>
                      <CldImage
                        src={item.photo}
                        alt={item.nameEn}
                        fill="true"
                        className={styles.cartImg}
                        sizes="30vw"
                      />
                    </div>

                    <h3 className={styles.cartName}>{item.nameEn}</h3>
                    <p className={styles.cartJobTitle}>{item.positionEn}</p>
                  </li>
                </SwiperSlide>
              );
            })}
          </ul>
        </Swiper>
      )}
    </>
  );
};
