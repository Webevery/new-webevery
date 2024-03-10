import DashboardNavigation from "@/components/DashboardNavigation/DashboardNavigation";
import styles from './page.module.scss';


export default function DashboardLayout({ children }) {

    return <div className={styles.layoutContainer}>
        <DashboardNavigation />
        {children}
    </div>
}