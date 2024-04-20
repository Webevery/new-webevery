"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./WorkingProcessSlider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { workingProcessData } from "@/data/workingProcessData";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";


const WorkingProcessSlider = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Pagination]}
        className='WorkingProcessSwiper'
      >
        {workingProcessData.map(item => (
          <SwiperSlide key={item.id}>
            <div className="slideContentWrapper">
              <h5 className="titleGradient slideTitle">{i18n.language === currentLanguages.EN
                ? item.titleEn
                : item.title}</h5>
              <p className="slideText">{i18n.language === currentLanguages.EN
                ? item.textEn
                : item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};


export default WorkingProcessSlider;