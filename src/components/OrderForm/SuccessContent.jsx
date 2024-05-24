"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";
import styles from "./OrderForm.module.scss";


const SuccessContent = ({ isSubmited, closeModal }) => {

    const { t } = useTranslation();

    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => setIsLoad(false), []);

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
                {!isLoad && (
                    <OrderBtn
                        type='button'
                        // title='Great!'
                        title={t('Buttons.SuccessContentBtn')}
                        onClick={closeModal}
                        className={styles.submitButton}
                        // id={isFooterForm ? styles.submitFooterId : styles.submitId}
                        id={styles.submitId}
                    />
                )}
            </div>
        </div>
    );
};

export default SuccessContent;
