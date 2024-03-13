"use client";

import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { YupOrderFormSchema } from "@/yupShemas/orderFormShema";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useWindowResize } from "@/hooks/useWindowResize";
import { sendToTelegram } from "@/helpers/sendToTelegram";
import { SiteContext } from "@/context/siteContext";
import OrderBtn from "../Buttons/OrderBtn/OrderBtn";
import SuccessContent from "./SuccessContent";

import styles from "./OrderForm.module.scss";

const OrderForm = ({
    isFooterForm = false,
    comment = "",
    className,
    titleClassName,
}) => {
    const { closeModal, isModalOpen } = useContext(SiteContext);
    const [isSubmited, setSubmited] = useState(false);

    const { isMobile, isTablet } = useWindowResize();

    const initialValues = {
        defaultValues: {
            userName: "",
            tel: "",
            message: comment,
        },
        resolver: yupResolver(YupOrderFormSchema),
        mode: "onChange",
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting, dirtyFields } =
        formState;

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data) => {
        setSubmited(true);
        // sendToTelegram(data);
        if (!isModalOpen) toast.success("Your message has been sent!");
        console.log("data", data);

        setTimeout(() => {
            if (isModalOpen) closeModal();
            setSubmited(false);
        }, 3000);
    };

    useLockBodyScroll(isModalOpen);

    return (
        <>
            {isSubmited && isModalOpen && !isFooterForm ? (
                <SuccessContent
                    isSubmited={isSubmited}
                    closeModal={closeModal}
                />
            ) : (
                <div
                    className={
                        isFooterForm
                            ? `${styles.container} ${styles.containerFooter}`
                            : `${styles.container} ${className}`
                    }
                >
                    {isModalOpen && (
                        <button
                            onClick={closeModal}
                            className={styles.closeBtn}
                        >
                            <svg className={styles.iconBtnClose}>
                                <use href='/sprite.svg#icon-close' />
                            </svg>
                        </button>
                    )}
                    {!isFooterForm && (
                        <div
                            className={`${styles.titleWrap} ${titleClassName}`}
                        >
                            {isMobile || isTablet ? (
                                <h2 className={`${styles.title} `}>
                                    We call you very soon
                                </h2>
                            ) : (
                                <h2 className={styles.title}>
                                    Fill out the form and we call you very soon
                                </h2>
                            )}
                        </div>
                    )}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={
                            isFooterForm
                                ? `${styles.form} ${styles.formFooter} `
                                : styles.form
                        }
                        noValidate
                    >
                        <div
                            className={
                                isFooterForm
                                    ? styles.inputHolderFooter
                                    : styles.inputHolder
                            }
                        >
                            <div className={styles.inputWrap}>
                                <p className={styles.error}>
                                    {errors.userName?.message}
                                </p>
                                {(() => {
                                    if (errors.userName) {
                                        return (
                                            <svg className={styles.icon}>
                                                <use href='/sprite.svg#icon-exclamation' />
                                            </svg>
                                        );
                                    } else if (
                                        !errors.userName &&
                                        dirtyFields.userName
                                    ) {
                                        return (
                                            <svg className={styles.icon}>
                                                <use href='/sprite.svg#icon-check-mark' />
                                            </svg>
                                        );
                                    } else {
                                        return (
                                            <svg className={styles.icon}>
                                                <use href='/sprite.svg#icon-snowflake' />
                                            </svg>
                                        );
                                    }
                                })()}

                                <input
                                    type='text'
                                    id='userName'
                                    {...register("userName")}
                                    placeholder='Name'
                                    maxLength='30'
                                    className={(() => {
                                        if (errors.userName) {
                                            return `${styles.input} ${styles.inputError}`;
                                        } else if (
                                            !errors.userName &&
                                            dirtyFields.userName
                                        ) {
                                            return `${styles.input} ${styles.inputSuccess}`;
                                        } else {
                                            return `${styles.input}`;
                                        }
                                    })()}
                                />
                            </div>
                            <div className={styles.inputWrap}>
                                {(() => {
                                    if (errors.tel) {
                                        return (
                                            <svg className={styles.icon}>
                                                <use href='/sprite.svg#icon-exclamation' />
                                            </svg>
                                        );
                                    } else if (!errors.tel && dirtyFields.tel) {
                                        return (
                                            <svg className={styles.icon}>
                                                <use href='/sprite.svg#icon-check-mark' />
                                            </svg>
                                        );
                                    } else {
                                        return (
                                            <svg className={styles.icon}>
                                                <use href='/sprite.svg#icon-snowflake' />
                                            </svg>
                                        );
                                    }
                                })()}
                                <input
                                    type='tel'
                                    id='tel'
                                    {...register("tel")}
                                    placeholder='Phone'
                                    maxLength='13'
                                    className={(() => {
                                        if (errors.tel) {
                                            return `${styles.input} ${styles.inputError}`;
                                        } else if (
                                            !errors.tel &&
                                            dirtyFields.tel
                                        ) {
                                            return `${styles.input} ${styles.inputSuccess}`;
                                        } else {
                                            return `${styles.input}`;
                                        }
                                    })()}
                                />
                                <p className={styles.error}>
                                    {errors.tel?.message}
                                </p>
                            </div>
                        </div>
                        <div className={styles.inputWrap}>
                            <textarea
                                className={
                                    isFooterForm
                                        ? `${styles.input} ${styles.textarea} ${styles.textareaFooter}`
                                        : `${styles.input} ${styles.textarea}`
                                }
                                cols='30'
                                rows='2'
                                id='message'
                                placeholder='Briefly describe your wish'
                                {...register("message")}
                            />
                            <p className={styles.error}>
                                {errors.message?.message}
                            </p>
                        </div>
                        <OrderBtn
                            type='submit'
                            title=' Order call from manager'
                            disabled={isErrors || isSubmitting}
                            className={styles.submitButton}
                            id={
                                isFooterForm
                                    ? styles.submitFooterId
                                    : styles.submitId
                            }
                        />
                    </form>
                </div>
            )}
        </>
    );
};

export default OrderForm;
