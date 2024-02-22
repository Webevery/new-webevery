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
    <section className={styles.container}>
      <div className="container">
        <h1>
          <span>{dataId?.titleGradientEn}</span>
          &nbsp;
          {dataId?.titleEn}
        </h1>
        <CldImage
          src={dataId?.mockup}
          alt={dataId?.titleEn}
          //fill="true"
          //className={styles.cartImg}
          sizes="30vw"
          width={300}
          height={300}
        />
        <div>
          <p>{dataId?.descriptionEn}</p>
          <p>{dataId?.price}</p>
          <OrderBtn id={styles.serviceOrderBtn} title={"Замовити"} />
        </div>
      </div>
      <div className="container">
        <SliderOfServices />
      </div>
    </section>
  );
};

export default ServiceIdSection;
