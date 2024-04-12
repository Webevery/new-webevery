import DashboardNavigation from "@/components/DashboardNavigation/DashboardNavigation";
import styles from './page.module.scss';
import { handleLogout } from "@/lib/actions";
import { auth } from "@/lib/auth";


export default async function DashboardLayout({ children }) {
    const session = await auth();

    return <div className={styles.layoutContainer}>
        <DashboardNavigation handleLogout={handleLogout} session={session} />
        {children}
    </div>
}