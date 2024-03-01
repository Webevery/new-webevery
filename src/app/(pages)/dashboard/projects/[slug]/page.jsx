import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem"
import DashboardProjectUpdateForm from "@/components/DashboardProjectUpdateForm/DashboardProjectUpdateForm"
import styles from './page.module.scss'


const DashboardPageProject = () => {
    return (
        <div className={styles.container}>
            <DashboardProjectItem />
            <DashboardProjectUpdateForm />
        </div>
    )
}


export default DashboardPageProject