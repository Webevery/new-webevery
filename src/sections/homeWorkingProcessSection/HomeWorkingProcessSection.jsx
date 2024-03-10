"use client"
import React from 'react'
import styles from "./HomeWorkingProcessSection.module.scss"
import WorkingProcessSlider from '@/components/WorkingProcessSlider/WorkingProcessSlider'
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HomeWorkingProcessSection = () => {
    const { t } = useTranslation();

    const[isLoad,setIsLoad]=useState(true)

    useEffect(()=>setIsLoad(false),[])

    return (
        <section className={styles.container}>
            <div className="container">
                {!isLoad && <><h3 className={`titleGradient ${styles.title}`}>{t('MainPage.WorkingProcessTitle')}</h3>
                <h4 className={styles.subTitleMobile}>{t('MainPage.WorkingProcessSubTitleMob')}</h4>
                <h4 className={styles.subTitleLaptop}>{t('MainPage.WorkingProcessSubTitleLaptop')}</h4>
                <WorkingProcessSlider /></>}
            </div>
        </section>
    )
}


export default HomeWorkingProcessSection