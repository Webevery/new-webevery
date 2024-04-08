"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { dashboardPages } from '@/data/dashboardPages';
import styles from './DashboardNavigation.module.scss';


const DashboardNavigation = ({ handleLogout, session }) => {
    const pathName = usePathname();
    console.log("session", session);

    return (
        //  webforevery @gmail.com
        session?.user.email === "peltek1985@gmail.com" && <div className={styles.container}>
            {dashboardPages.map((item) => {
                return (<Link key={item.title} className={pathName === item.path ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href={item.path}>{item.title}</Link>)
            })}
            <LogoutBtn handleLogout={handleLogout} />
        </div >
    )
}


export default DashboardNavigation