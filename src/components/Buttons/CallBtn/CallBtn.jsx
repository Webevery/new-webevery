import React from "react";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ className }) => {
  return (
    <div className={`${styles.callBtn} ${className}`}>
      <a href="tel:+380966058605">Call</a>
    </div>
  );
};

export default CallBtn;
