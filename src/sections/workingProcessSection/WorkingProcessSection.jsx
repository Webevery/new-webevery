import React from 'react'
import styles from "./WorkingProcessSection.module.scss"
// import WorkingProcessSlider from '@/components/WorkingProcessSlider/WorkingProcessSlider'

const WorkingProcessSection = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Working process</h2>
            <h3 className={styles.subTitleMobile}>other details of the development are discussed individually</h3>
            <h3 className={styles.subTitleLaptop}>additional development details are tailored to your specific needs and discussed on an individual basis.</h3>
            {/* <WorkingProcessSlider /> */}
            <ul className={styles.cardsWrapper}>
                <li className={styles.card}>
                    <h4 className={styles.cardTitle}>
                        First call with manager
                    </h4>
                    <p className={styles.cardText}>
                        You call by phone or leave a request for a call in the form, we call you in 1 minute. We discuss the idea of your project.
                    </p>
                </li>
                <li className={styles.card}>
                    <h4 className={styles.cardTitle}>
                        Discussion and preparation of T.A.
                    </h4>


                    <p className={styles.cardText}>
                        We’ll attentively listen to all your preferences and finalize the project’s specifications according to your needs. Your satisfaction is our priority.
                    </p>
                </li>
                <li className={styles.card}>
                    <h4 className={styles.cardTitle}>
                        Design alignment and development process
                    </h4>
                    <p className={styles.cardText}>
                        Once the design is agreed, the team proceeds to develop a complete final product.
                    </p>
                </li>
                <li className={styles.card}>
                    <h4 className={styles.cardTitle}>
                        Final Product and Access Transfer
                    </h4>
                    <p className={styles.cardText}>
                        After completing the project, we provide you with all the necessary files and access passwords.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default WorkingProcessSection