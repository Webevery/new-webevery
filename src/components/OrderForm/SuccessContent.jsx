"use client";

import OrderBtn from "@/components/Buttons/OrderBtn/OrderBtn";

import styles from "./OrderForm.module.scss";

const SuccessContent = ({ isFooterForm, isSubmited, closeModal }) => {
    return (
        <>
            {isFooterForm ? (
                <div className={styles.containerFooter}>
                    SuccessvContent Footer
                </div>
            ) : (
                <div
                    className={
                        !isSubmited
                            ? `${styles.container} ${styles.containerSuccess}`
                            : styles.container
                    }
                >
                    <div className={styles.bgWrap}>
                        <h2 className={styles.successTitle}>
                            Congratulations! Your message has been sent to the
                            manager.
                        </h2>
                        <OrderBtn
                            type='button'
                            title='Great!'
                            onClick={closeModal}
                            className={styles.submitButton}
                            id={
                                isFooterForm
                                    ? styles.submitFooterId
                                    : styles.submitId
                            }
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default SuccessContent;
