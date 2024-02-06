import React from "react";
import styles from "./CallBtn.module.scss";
import s from "../Btns.module.scss";

const CallBtn = ({ className }) => {
  return (
    <div className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
      <a className={s.btn} href="tel:+380966058605">
        Call
      </a>
    </div>
  );
};

export default CallBtn;
