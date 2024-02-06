import React from 'react'
import styles from "./WorkingProcessSection.module.scss"
import WorkingProcessSlider from '@/components/WorkingProcessSlider/WorkingProcessSlider'

const WorkingProcessSection = () => {
    return (
        <section className={styles.container}>
            <div className="container">
                <h2 className={styles.title}>Working process</h2>
                <h3 className={styles.subTitleMobile}>other details of the development are discussed individually</h3>
                <h3 className={styles.subTitleLaptop}>additional development details are tailored to your specific needs and discussed on an individual basis.</h3>
                <WorkingProcessSlider />
            </div>
        </section>
    )
}

export default WorkingProcessSection