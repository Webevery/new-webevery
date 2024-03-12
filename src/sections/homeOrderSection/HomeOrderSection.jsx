"use client";

import { useWindowResize } from "@/hooks/useWindowResize";
import OrderForm from "@/components/OrderForm/OrderForm";
import styles from "./HomeOrderSection.module.scss";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";

const HomeOrderSection = () => {
    const { isMobile } = useWindowResize();
    
    const {t}= useTranslation();
    const [isLoad,setIsLoad]=useState(true);
    useEffect(()=>setIsLoad(false),[])
    
    return (
        // <div className='container'>
        <section className={`container ${styles.section}`}>
            {/* <section className={styles.section}> */}
            <div className={styles.contentWrap}>
                {!isLoad && <>{isMobile ? (
                    <div className={styles.titleWrap}>
                        <h2 className={styles.title}>{t('MainPage.OrderSectionTitleMob')}</h2>
                        <h2 className={`titleGradient ${styles.title}`}>
                            {t('MainPage.OrderSectionSubTitle')}
                        </h2>
                    </div>
                ) : (
                    <div className={styles.titleWrap}>
                        <h2 className={styles.title}>{t('MainPage.OrderSectionTitleTab')}</h2>
                        <h2 className={`titleGradient ${styles.title}`}>
                        {t('MainPage.OrderSectionSubTitle')}
                        </h2>
                    </div>
                )}

                <OrderForm /></>}
            </div>
        </section>
        // </div>
    );
};

export default HomeOrderSection;
