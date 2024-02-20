"use client";

import styles from "./ServicesSection.module.scss";
import { GetOurServices } from "@/fetch/ClientFetch";
import OrderBtn from "../../components/Buttons/OrderBtn/OrderBtn";
import Link from "next/link";

const ServicesSection = () => {
  const { data } = GetOurServices();

  return (
    <section>
      <section className={styles.services}>
        <div className={`container ${styles.servicesContainer}`}>
          <div className={styles.titleServicesContainer}>
            <h1 className={styles.titleServices}>
              <span>Services</span>
            </h1>
            <h2 className={styles.descServices}>
              choose <span>the best</span> deal for your business
            </h2>
          </div>

          <ul className={styles.cartContainer}>
            {data?.map(({ slug, title, titleGradient, directions, price }) => (
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
                  <h3 className={styles.cartTitle}>
                    {titleGradient}
                    {title}
                  </h3>
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
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
