import React from "react";
// import styles from "./ServiceId.module.scss";
import ServiceIdSection from "@/sections/serviceIdSection/ServiceIdSection";

const ServiceId = ({ params }) => {
  return (
    <div className="screen">
      <ServiceIdSection params={params} />
    </div>
  );
};

export default ServiceId;
