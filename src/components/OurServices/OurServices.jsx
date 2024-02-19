"use client";

import styles from "./OurServices.module.scss";
//import { serviceData } from "@/data/serviceData";
import OrderBtn from "../../components/Buttons/OrderBtn/OrderBtn";
import Link from "next/link";

const OurServices = ({ data }) => {
  return (
    <ul className={styles.cartContainer}>
      {data?.map(({ slug, title, directions, price }) => (
        <li key={slug} className={styles.cartItem}>
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
            <h3 className={styles.cartTitle}>{title}</h3>
            <ul>
              {directions.map((item, index) => {
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
            <OrderBtn id={styles.serviceOrderBtn} title={"Замовити"} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OurServices;
