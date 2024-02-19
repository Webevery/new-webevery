"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SliderOfTeam.module.scss";
import { team } from "@/data/team";
import { CldImage } from "next-cloudinary";
import "./SliderOfTeam.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

export const SliderOfTeam = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination]}
      className="ServiceSwiper"
    >
      <ul className={styles.cartContainer}>
        {team.map(({ id, img, alt, name, jobTitle }) => {
          return (
            <SwiperSlide key={id} className="slideContentWrapper">
              <li key={id} className={styles.cartItem}>
                <div className={styles.cartImgContainer}>
                  <CldImage
                    src={img}
                    alt={alt}
                    fill="true"
                    className={styles.cartImg}
                  />
                </div>

                <h3 className={styles.cartName}>{name}</h3>
                <p className={styles.cartJobTitle}>{jobTitle}</p>
              </li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
};
