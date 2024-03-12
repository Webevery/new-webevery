import React from "react";
import styles from "./OurProjectId.module.scss";
import OurProjectIdSection from "@/sections/ourProjectIdSection/OurProjectIdSection";

const OurProjectId = ({ params }) => {
  return (
    <>
      <OurProjectIdSection params={params} />
    </>
  );
};

export default OurProjectId;
