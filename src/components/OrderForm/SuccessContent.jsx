"use client";

import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";
import { useTranslation } from "react-i18next";

import styles from "./OrderForm.module.scss";

const SuccessContent = ({ isSubmited, closeModal }) => {

    const {t}=useTranslation();
    
    return (
        <div
            className={
                isSubmited
                    ? `${styles.container} ${styles.containerSuccess}`
                    : styles.container
            }
        >
            <div className={styles.bgWrap}>
                <h2 className={styles.successTitle}>
                    {t('Form.FormSubmitedMsg')}
                </h2>
                <OrderBtn
                    type='button'
                    title='Great!'
                    onClick={closeModal}
                    className={styles.submitButton}
                    // id={isFooterForm ? styles.submitFooterId : styles.submitId}
                    id={styles.submitId}
                />
            </div>
        </div>
    );
};

export default SuccessContent;
