import React from 'react'
import styles from "./HomeWorkingProcessSection.module.scss"
import WorkingProcessSlider from '@/components/WorkingProcessSlider/WorkingProcessSlider'

const HomeWorkingProcessSection = () => {
    return (
        <section className={styles.container}>
            <div className="container">
                {/* <h3 className={`titleGradient ${styles.title}`}>Working process</h3> */}
                <h3 className={`titleGradient ${styles.title}`}>Робочий процес</h3>

                {/* <h4 className={styles.subTitleMobile}>other details of the development are discussed individually</h4> */}
                <h4 className={styles.subTitleMobile}>додаткові деталі розробки обговорюються індивідуально</h4>
                {/* <h4 className={styles.subTitleLaptop}>additional development details are tailored to your specific needs and discussed on an individual basis</h4> */}
                <h4 className={styles.subTitleLaptop}>додаткові деталі розробки обговорюються в індивідуальному порядку</h4>
                <WorkingProcessSlider />
            </div>
        </section>
    )
}

export default HomeWorkingProcessSection