"use client";

import { useState, useEffect, useCallback } from "react";
import { socialLinksAndMail } from "@/helpers/linkArrays";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import SocialLinksList from "../SocialLinks/SocialLinksList";
import OrderForm from "../OrderForm/OrderForm";
import FooterLinks from "./FooterLinks";

import styles from "./Footer.module.scss";

const FooterWithForm = () => {
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
                        <footer className={styles.footer}>
                            <div className={`container ${styles.container}`}>
                                <div className={styles.contentWrap}>
                                    <SocialLinksList
                                        list={socialLinksAndMail}
                                    />
                                    <CallBtn className={styles.callBtn} />
                                </div>
                            </div>
                        </footer>
                    );
                } else if (isLaptop) {
                    return (
                        <footer className={styles.footerLaptop}>
                            <div className={`container ${styles.container}`}>
                                <div className={styles.contentLaptopWrap}>
                                    <OrderForm isFooterForm={true} />
                                    <div>
                                        <SocialLinksList
                                            list={socialLinksAndMail}
                                        />
                                        <CallBtn className={styles.callBtn} />
                                    </div>
                                </div>
                            </div>
                        </footer>
                    );
                } else if (isDesktop) {
                    return (
                        <footer className={styles.footerDesktop}>
                            <div className={`container ${styles.container}`}>
                                <div className={styles.contentDesctopWrap}>
                                    <div className={styles.innerWrap}>
                                        <SocialLinksList
                                            list={socialLinksAndMail}
                                            className={styles.foterSocList}
                                        />
                                        <a
                                            className={styles.phone}
                                            href='tel:+380966058605'
                                        >
                                            +380966058605
                                        </a>
                                        <FooterLinks />
                                    </div>

                                    <div className={styles.logoWrapper}>
                                        <OrderForm isFooterForm={true} />
                                    </div>
                                </div>
                            </div>
                        </footer>
                    );
                } else {
                    return <div>Loading ...</div>;
                }
            })()}
        </>
    );
};

export default FooterWithForm;
