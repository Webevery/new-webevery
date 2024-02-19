import React from "react";
import styles from "./OurProjectId.module.scss";
import OurProjectIdSection from "@/sections/ourProjectIdSection/OurProjectIdSection";

const OurProjectId = ({ params }) => {
  return <div className="screen">
    <OurProjectIdSection params={params} />
  </div>;
};

export default OurProjectId;
