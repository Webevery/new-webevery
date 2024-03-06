"use client";

import styles from "./ServiceIdSection.module.scss";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import { CldImage } from "next-cloudinary";
import OrderBtn from "../../components/Buttons/OrderBtn/OrderBtn";
import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data/languages";

const ServiceIdSection = ({ params }) => {
  const { slug } = params;
  const { data, error, isLoading } = GetIdDataFromSection("services", slug);

  const dataId = data && !isLoading ? data : error;

  const { i18n } = useTranslation();

  // console.log(dataId);

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
            <p className={styles.servicesIdDesc}>
              {i18n.language === currentLanguages.EN
                ? dataId?.descriptionEn
                : dataId?.description}
            </p>
            <p className={styles.servicesIdPrice}>
              {i18n.language === currentLanguages.EN
                ? dataId?.priceEn
                : dataId?.price}
            </p>
            <OrderBtn id={styles.serviceOrderBtn} title={"Замовити"} />
          </div>
        </div>

        <div className={`container ${styles.servicesIdSliderContainer}`}>
          <h3 className={styles.servicesIdSliderTitle}>
            Оберіть <span>найкращу</span> пропозицію для вашого бізнесу:
          </h3>
          <SliderOfServices />
        </div>
      </div>
    </section>
  );
};

export default ServiceIdSection;
