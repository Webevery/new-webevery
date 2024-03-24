"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useSession } from 'next-auth/react';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { dashboardPages } from '@/data/dashboardPages';
import styles from './DashboardNavigation.module.scss';


const DashboardNavigation = () => {
    const pathName = usePathname();
    const session = useSession();

    return (
        session.status === "authenticated" && <div className={styles.container}>
            {dashboardPages.map((item) => {
                return (<Link key={item.title} className={pathName === item.path ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href={item.path}>{item.title}</Link>)
            })}
            <LogoutBtn />
        </div >
    )
}


export default DashboardNavigation