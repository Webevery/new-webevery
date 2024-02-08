"use client";

import styles from "./OrderBtn.module.scss";
import s from "../Btns.module.scss";

const OrderBtn = ({ className, type, onClick, title }) => {
  return (
    <div className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
      <button type={type} className={s.btn} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default OrderBtn;
