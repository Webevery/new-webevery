import DashboardServiceItem from "@/components/DashboardServiceItem/DashboardServiceItem"
import DashboardServiceUpdateForm from "@/components/DashboardServiceUpdateForm/DashboardServiceUpdateForm"
import styles from './page.module.scss'


const DashboardPageService = () => {

    return (
        <div className={styles.container}>
            <DashboardServiceItem />
            <DashboardServiceUpdateForm />
        </div>
    )
}


export default DashboardPageService