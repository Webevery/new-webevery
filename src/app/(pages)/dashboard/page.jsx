import { auth } from "@/lib/auth";
// import DashboardLoginSection from "@/sections/dashboardLoginSection/DashboardLoginSection"
// import { Suspense } from "react"
import styles from './page.module.scss';


const DashboardPage = async () => {
    const session = await auth();

    return (
        <>
            {session?.user && <h2 className={styles.welcome}>{session.user.name}, Welcome to the Dashboard !</h2>}
        </>
        // <Suspense>
        //     <DashboardLoginSection />
        // </Suspense>
    )
}

export default DashboardPage