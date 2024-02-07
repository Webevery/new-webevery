"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./OrderBtn.module.scss";
import s from "../Btns.module.scss";

const OrderBtn = ({ className }) => {
    const { openModal } = useContext(SiteContext);
    return (
        <div className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
            <button type='button' className={s.btn} onClick={openModal}>
                Order
            </button>
        </div>
    );
};

export default OrderBtn;
