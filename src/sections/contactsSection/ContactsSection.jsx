"use client";

import { useState, useEffect, useCallback } from "react";
import { socialLinks } from "@/helpers/linkArrays";
import SocialLinksList from "@/components/SocialLinks/SocialLinksList";
import OrderForm from "@/components/OrderForm/OrderForm";
import FooterWithForm from "@/components/Footer/FooterWithForm";
import Footer from "@/components/Footer/Footer";

import styles from "./ContactsSection.module.scss";

const ContactsSection = () => {
    const [isMobile, setMobile] = useState(false);
    const [isLaptop, setLaptop] = useState(false);
    const [isDesktop, setDesktop] = useState(false);

    const handleResizeMobile = useCallback(() => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [setMobile]);

    useEffect(() => {
        window.addEventListener("resize", handleResizeMobile);
        handleResizeMobile();
        return () => {
            window.removeEventListener("resize", handleResizeMobile);
        };
    }, [handleResizeMobile]);

    const handleResizeLaptop = useCallback(() => {
        if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setLaptop(true);
        } else {
            setLaptop(false);
        }
    }, [setLaptop]);

    useEffect(() => {
        window.addEventListener("resize", handleResizeLaptop);
        handleResizeLaptop();
        return () => {
            window.removeEventListener("resize", handleResizeLaptop);
        };
    }, [handleResizeLaptop]);

    const handleResizeDesktop = useCallback(() => {
        if (window.innerWidth >= 1024) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }
    }, [setDesktop]);

    useEffect(() => {
        window.addEventListener("resize", handleResizeDesktop);
        handleResizeDesktop();
        return () => {
            window.removeEventListener("resize", handleResizeDesktop);
        };
    }, [handleResizeDesktop]);
    return (
        <>
            {(() => {
                if (isMobile) {
                    return (
                        <>
                            <section className={styles.contacts}>
                                <div
                                    className={`container ${styles.contactsContainer}`}
                                >
                                    <div className={styles.titleWrap}>
                                        <h2 className={styles.title}>
                                            Contact
                                        </h2>
                                        <h2> </h2>
                                        <h2
                                            className={`titleGradient ${styles.title}`}
                                        >
                                            us
                                        </h2>
                                    </div>
                                    <div className={styles.contentWrap}>
                                        <div className={styles.informBlock}>
                                            isMobile
                                        </div>

                                        <OrderForm />
                                    </div>
                                </div>
                            </section>
                            <Footer />
                        </>
                    );
                } else if (isLaptop) {
                    return (
                        <>
                            <section className={styles.contacts}>
                                <div
                                    className={`container ${styles.contactsContainer}`}
                                >
                                    <div className={styles.contentWrap}>
                                        IsLaptop
                                        {/* <OrderForm /> */}
                                    </div>
                                </div>
                            </section>
                            <FooterWithForm />
                        </>
                    );
                } else if (isDesktop) {
                    return (
                        <>
                            <section className={styles.contacts}>
                                <div
                                    className={`container ${styles.contactsContainer}`}
                                >
                                    <div className={styles.contentWrap}>
                                        isDesktop
                                        <OrderForm />
                                    </div>
                                </div>
                            </section>
                            <Footer />
                        </>
                    );
                } else {
                    return <div>Loading ...</div>;
                }
            })()}
        </>
    );
};

export default ContactsSection;
