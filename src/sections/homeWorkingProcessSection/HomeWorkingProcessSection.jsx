"use client"
import React from 'react'
import styles from "./HomeWorkingProcessSection.module.scss"
import WorkingProcessSlider from '@/components/WorkingProcessSlider/WorkingProcessSlider'
import { useTranslation } from 'react-i18next';
import { currentLanguages } from '@/data';


const HomeWorkingProcessSection = () => {
    const { i18n } = useTranslation();

    return (
        <section className={styles.container}>
            <div className="container">
                <h3 className={`titleGradient ${styles.title}`}>{i18n.language === currentLanguages.EN
                    ? 'Working process'
                    : 'Робочий процес'}</h3>
                <h4 className={styles.subTitleMobile}>{i18n.language === currentLanguages.EN
                    ? 'other details of the development are discussed individually'
                    : 'додаткові деталі розробки обговорюються індивідуально'}</h4>
                <h4 className={styles.subTitleLaptop}> {i18n.language === currentLanguages.EN
                    ? 'additional development details are tailored to your specific needs and discussed on an individual basis'
                    : 'додаткові деталі розробки обговорюються в індивідуальному порядку'}</h4>
                <WorkingProcessSlider />
            </div>
        </section>
    )
}


export default HomeWorkingProcessSection