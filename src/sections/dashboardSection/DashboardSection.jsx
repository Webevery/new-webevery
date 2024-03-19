"use client"
import { useSession } from 'next-auth/react';
import styles from './DashboardSection.module.scss';


const DashboardSection = () => {
    const session = useSession();
    console.log('session', session)

    return (
        <section className={styles.container}>
            <h1>DashboardSection</h1>
        </section>
    )
}


export default DashboardSection