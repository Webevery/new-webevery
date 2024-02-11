"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SliderOfServices.module.scss";
import { serviceData } from "@/data";
import { useState,useEffect } from "react";
import OrderBtn from "../Buttons/OrderBtn/OrderBtn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

export const SliderOfServices=()=>{
  const [slidesPerView, setSlidesPerView] = useState(5); // Default value for slidesPerView

  // Function to update slidesPerView based on viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 500) {
      setSlidesPerView(1); // Adjust this value for smaller screens
    } else if (window.innerWidth < 700) {
      setSlidesPerView(2); // Adjust this value for medium-sized screens
    } else if (window.innerWidth < 900) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1400) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1700) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5); // Default value for larger screens
    }
  };

   // Initial setup
  useEffect(() => {
    updateSlidesPerView();

    // Add an event listener to update slidesPerView when the window is resized
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

    return <ul className={styles.serviceList}>
      <Swiper
          slidesPerView={slidesPerView}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2400,
            pauseOnMouseEnter: true,
          }}
          effect="slide"
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Pagination, Navigation, Keyboard, Autoplay]}
          className="HomeSliderSwiper"
        >
    {serviceData.map(({id,title,desc,price})=>{
      return <SwiperSlide key={id}>
        <li  className={styles.serviceItem}>
        <h3>{title}</h3>
        <ul>
        {desc && desc.map(({id,text})=>{
          return <li key={id} className={styles.descItem}>{text}</li>
        })}
        <p className={styles.price}>{price}</p>
        <OrderBtn/>
        </ul>
      </li></SwiperSlide>
    })}
    </Swiper>
    </ul>
}