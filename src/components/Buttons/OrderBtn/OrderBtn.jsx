import React from "react";
import styles from "./OrderBtn.module.scss";
import s from "../Btns.module.scss";

const OrderBtn = ({ className }) => {
  return (
    <div className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
      <button type="button" className={s.btn}>
        Order
      </button>
    </div>
  );
};

export default OrderBtn;
