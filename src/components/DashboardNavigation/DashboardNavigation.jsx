"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { dashboardPages } from '@/data/dashboardPages';
import styles from './DashboardNavigation.module.scss';


const DashboardNavigation = ({ handleLogout, session }) => {
    const pathName = usePathname();

    return (
        <div className={styles.container}>
            {session?.user.isAdmin && (dashboardPages.map((item) => {
                return (<Link key={item.title} className={pathName === item.path ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href={item.path}>{item.title}</Link>)
            }))}
            {session?.user.email === process.env.NEXT_PUBLIC_OWNER && (<Link className={pathName === "/dashboard/users" ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href="/dashboard/users">Users</Link>)}
            {session?.user && <LogoutBtn handleLogout={handleLogout} />}
        </div >
    )
}


export default DashboardNavigation