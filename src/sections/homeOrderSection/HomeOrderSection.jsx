"use client";

import { useState, useEffect, useCallback } from "react";
import OrderForm from "@/components/OrderForm/OrderForm";
import styles from "./HomeOrderSection.module.scss";

const HomeOrderSection = () => {
    const [isTablet, setTablet] = useState(true);

    const handleResizeTablet = useCallback(() => {
        if (window.innerWidth >= 768) {
            setTablet(false);
        } else {
            setTablet(true);
        }
    }, [setTablet]);

    useEffect(() => {
        window.addEventListener("resize", handleResizeTablet);
        handleResizeTablet();
        return () => {
            window.removeEventListener("resize", handleResizeTablet);
        };
    }, [handleResizeTablet]);

    return (
        // <div className='container'>
        <section className={`container ${styles.section}`}>
            {/* <section className={styles.section}> */}
            <div className={styles.contentWrap}>
                {!isTablet ? (
                    <div className={styles.titleWrap}>
                        <h2 className={styles.title}>Let`s talk about</h2>
                        <h2 className={`titleGradient ${styles.title}`}>
                            your new site!
                        </h2>
                    </div>
                ) : (
                    <div className={styles.titleWrap}>
                        <h2 className={styles.title}>To talk about</h2>
                        <h2 className={`titleGradient ${styles.title}`}>
                            your new site!
                        </h2>
                    </div>
                )}

                <OrderForm />
            </div>
        </section>
        // </div>
    );
};

export default HomeOrderSection;
