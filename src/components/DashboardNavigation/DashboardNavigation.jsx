"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { dashboardPages } from '@/data/dashboardPages';
import styles from './DashboardNavigation.module.scss';


const DashboardNavigation = () => {
    const pathName = usePathname();

    return (
        <div className={styles.container}>
            {dashboardPages.map((item) => {
                return (<Link key={item.title} className={pathName === item.path ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href={item.path}>{item.title}</Link>)
            })}
        </div >
    )
}


export default DashboardNavigation