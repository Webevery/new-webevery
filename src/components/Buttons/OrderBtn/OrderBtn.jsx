"use client";

import styles from "./OrderBtn.module.scss";
import s from "../Btns.module.scss";

const OrderBtn = ({ className, type, title, onClick, id }) => {
    return (
        <div
            id={id}
            className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}
        >
            <button className={s.btn} type={type} onClick={onClick}>
                {title}
            </button>
        </div>
    );
};

export default OrderBtn;
