"use client";

import styles from "./ServicesSection.module.scss";
import OurServices from "@/components/OurServices/OurServices";
import { GetOurServices } from "@/fetch/ClientFetch";

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
          <OurServices data={data} />
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
