"use client";

import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { YupFormSchema } from "@/schemas/yupFormSchema";
import { SiteContext } from "@/context/siteContext";

import styles from "./OrderForm.module.scss";

const OrderForm = () => {
    const { closeModal, isModalOpen } = useContext(SiteContext);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    const initialValues = {
        defaultValues: {
            userName: "",
            tel: "",
            message: "",
        },
        // resolver: yupResolver(YupFormSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("FormData:", data);
        closeModal();
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className={styles.container}>
            <button onClick={closeModal} className={styles.closeBtn}>
                <svg className={styles.iconBtnClose}>
                    <use href='/sprite.svg#icon-close' />
                </svg>
            </button>
            <div className={styles.titleWrap}>
                <h2 className={styles.title}>We call you very soon</h2>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
            >
                <div className={styles.inputWrap}>
                    <input
                        type='text'
                        className={styles.formInput}
                        id='userName'
                        placeholder=' '
                        maxLength='50'
                        {...register("userName")}
                    />
                    <label htmlFor='userName' className={styles.formLabel}>
                        Ваше ім&#39;я
                    </label>
                    <p className={styles.error}>{errors.userName?.message}</p>
                </div>
                <div className={styles.inputWrap}>
                    <input
                        type='tel'
                        className={styles.formInput}
                        id='tel'
                        placeholder=' '
                        maxLength='13'
                        {...register("tel")}
                    />
                    <label htmlFor='tel' className={styles.formLabel}>
                        Номер телефону
                    </label>
                    <p className={styles.error}>{errors.tel?.message}</p>
                </div>

                <div className={styles.inputWrap}>
                    <textarea
                        className={`${styles.textarea} ${styles.formInput}`}
                        cols='30'
                        rows='2'
                        id='message'
                        placeholder=' '
                        {...register("message")}
                    />
                    <label htmlFor='message' className={styles.formLabel}>
                        Ваше повідомлення
                    </label>
                    <p className={styles.error}>{errors.message?.message}</p>
                </div>
                <div className={`${styles.btnWrapper} ${styles.btnBorder}`}>
                    <button
                        type='submit'
                        className={styles.submitButton}
                        disabled={isErrors || isSubmitting}
                    >
                        Order call from manager
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;
