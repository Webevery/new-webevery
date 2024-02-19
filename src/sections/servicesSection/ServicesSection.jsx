import styles from "./ServicesSection.module.scss";
import { serviceData } from "@/data/serviceData";
import OrderBtn from "../../components/Buttons/OrderBtn/OrderBtn";
import Link from 'next/link';

// import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const ServicesSection = () => {
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
            {serviceData.map(({ id, title, desc, price }) => (
              <li key={id} className={styles.cartItem}>
                <Link href={`/services/${id}`} className={styles.readMore}>
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
                    style={{ fill: 'url(#paint0_linear_3004_8704)' }}
                  />
                </svg>
              </Link>
                <h3 className={styles.cartTitle}>{title}</h3>
                <ul>
                  {desc &&
                    desc.map(({ id, text }) => {
                      return (
                        <li key={id} className={styles.descItem}>
                          {text}
                        </li>
                      );
                    })}
                </ul>
                <p className={styles.cartPrice}>{price}</p>
                <OrderBtn title={"Замовити"} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
