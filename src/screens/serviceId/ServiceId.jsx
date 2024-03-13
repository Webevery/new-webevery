import React from "react";
// import styles from "./ServiceId.module.scss";
import ServiceIdSection from "@/sections/serviceIdSection/ServiceIdSection";

const ServiceId = ({ params }) => {
  return (
    <>
      <ServiceIdSection params={params} />
    </>
  );
};

export default ServiceId;
