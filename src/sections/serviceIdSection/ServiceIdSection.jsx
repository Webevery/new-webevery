"use client";

import styles from "./ServiceIdSection.module.scss";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";

const ServiceIdSection = ({ params }) => {
  const { slug } = params;
  const { data, error, isLoading } = GetIdDataFromSection("services", slug);

  const dataId = data && !isLoading ? data : error;

  // console.log(data);

  return (
    <section className={styles.container}>
      <h1>{dataId?.slug}</h1>
    </section>
  );
};

export default ServiceIdSection;
