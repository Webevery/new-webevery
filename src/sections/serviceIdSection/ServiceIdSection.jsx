"use client";

import styles from "./ServiceIdSection.module.scss";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import { CldImage } from "next-cloudinary";
import OrderBtn from "../../components/Buttons/OrderBtn/OrderBtn";
import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const ServiceIdSection = ({ params }) => {
  const { slug } = params;
  const { data, error, isLoading } = GetIdDataFromSection("services", slug);

  const dataId = data && !isLoading ? data : error;

  console.log(dataId);

  return (
    <section className={styles.servicesId}>
      <div className={`container ${styles.servicesIdContainer}`}>
        <h1 className={styles.servicesIdTitle}>
          <span>{dataId?.titleGradient}</span>
          &nbsp;
          {dataId?.title}
        </h1>
        <div className={styles.servicesIdContent}>
          <div className={styles.servicesIdImgContainer}>
            <CldImage
              src={dataId?.mockup}
              alt={dataId?.title}
              fill="true"
              className={styles.cartImg}
              sizes="30vw"
            />
          </div>

          <div className={styles.servicesIdDescContainer}>
            <p className={styles.servicesIdDesc}>{dataId?.description}</p>
            <p className={styles.servicesIdPrice}>{dataId?.price}</p>
            <OrderBtn id={styles.serviceOrderBtn} title={"Замовити"} />
          </div>
        </div>

        <div className={`container ${styles.servicesIdSliderContainer}`}>
          <h3 className={styles.servicesIdSliderTitle}>Оберіть <span>найкращу</span> пропозицію для вашого бізнесу:</h3>
          <SliderOfServices />
        </div>
      </div>
    </section>
  );
};

export default ServiceIdSection;
