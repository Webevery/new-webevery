import DashboardCoworkerItem from "@/components/DashboardCoworkerItem/DashboardCoworkerItem"
import DashboardCoworkerUpdateForm from "@/components/DashboardCoworkerUpdateForm/DashboardCoworkerUpdateForm"
import styles from './page.module.scss'



const DashboardPageCoworker = () => {
    return (
        <div className={styles.container}>
            <DashboardCoworkerItem />
            <DashboardCoworkerUpdateForm />
        </div>
    )
}


export default DashboardPageCoworker