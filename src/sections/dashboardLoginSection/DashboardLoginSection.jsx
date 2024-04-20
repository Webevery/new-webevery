import DashboardLoginForm from "@/components/DashboardLoginForm/DashboardLoginForm";
import styles from './DashboardLoginSection.module.scss';


const DashboardLoginSection = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <DashboardLoginForm />
            </div>
        </div>
    )
}


export default DashboardLoginSection;