"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { dashboardPages } from '@/data/dashboardPages';
import styles from './DashboardNavigation.module.scss';


const DashboardNavigation = ({ handleLogout, session }) => {
    const pathName = usePathname();
    const adminPages = dashboardPages.filter(item => item.access === "admin")
    const ownerPages = dashboardPages.filter(item => item.access === "owner")

    return (
        <div className={styles.container}>
            {session?.user.isAdmin && (adminPages.map((item) => {
                return (<Link key={item.title} className={pathName === item.path ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href={item.path}>{item.title}</Link>)
            }))}

            {session?.user.email === process.env.NEXT_PUBLIC_OWNER && ((ownerPages.map((item) => {
                return (<Link key={item.title} className={pathName === item.path ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href={item.path}>{item.title}</Link>)
            })))}

            {session?.user && <LogoutBtn handleLogout={handleLogout} />}
        </div >
    )
}


export default DashboardNavigation