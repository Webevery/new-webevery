"use client"
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./SliderOfServices.module.scss";
import { serviceData } from "@/data";
// import { useState,useEffect } from "react";
import OrderBtn from "../Buttons/OrderBtn/OrderBtn";
import "./SliderOfServices.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

export const SliderOfServices = () => {
  const {data}= GetDataFromSection("services")
    // const [slidesPerView, setSlidesPerView] = useState(5); // Default value for slidesPerView

    // // Function to update slidesPerView based on viewport width
    // const updateSlidesPerView = () => {
    //   if (window.innerWidth < 500) {
    //     setSlidesPerView(1); // Adjust this value for smaller screens
    //   } else if (window.innerWidth < 700) {
    //     setSlidesPerView(2); // Adjust this value for medium-sized screens
    //   } else if (window.innerWidth < 900) {
    //     setSlidesPerView(3);
    //   } else if (window.innerWidth < 1400) {
    //     setSlidesPerView(4);
    //   } else if (window.innerWidth < 1700) {
    //     setSlidesPerView(4);
    //   } else {
    //     setSlidesPerView(5); // Default value for larger screens
    //   }
    // };

    //  // Initial setup
    // useEffect(() => {
    //   updateSlidesPerView();

    //   // Add an event listener to update slidesPerView when the window is resized
    //   window.addEventListener("resize", updateSlidesPerView);

    //   // Clean up the event listener when the component unmounts
    //   return () => {
    //     window.removeEventListener("resize", updateSlidesPerView);
    //   };
    // }, []);

    return <Swiper
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
          <ul className={styles.serviceList}>
    {data?.map(({slug, title, titleGradient, directions, price})=>{
      return <SwiperSlide key={slug}className="slideContentWrapper" >
        <li  className={styles.serviceItem}>
        <div>
        <Link href={`/services/${slug}`} className={styles.readMore}>
                    <span className={styles.readMoreTitle}>Read more</span>
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
                        style={{ fill: "url(#paint0_linear_3004_8704)" }}
                      />
                    </svg>
                  </Link>
          <h3 className={styles.cartTitle}>{titleGradient}{title}</h3>
        <ul>
        {directions.map((item,index)=>{
          return <li key={index}
          className={styles.descItem}
          >{item}</li>
        })}
        
        </ul>
        </div>
        <div>
        <p
         className={styles.price}
         >{price}</p>
        <OrderBtn id={styles.orderBtn} title={"Замовити"}/></div>
      </li></SwiperSlide>
    })}</ul>
    </Swiper>
}