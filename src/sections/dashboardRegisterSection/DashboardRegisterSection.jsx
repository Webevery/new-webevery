import DashboardRegisterForm from "@/components/DashboardRegisterForm/DashboardRegisterForm";
import styles from "./DashboardRegisterSection.module.scss";


const DashboardRegisterSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <DashboardRegisterForm />
            </div>
        </div>
    );
};


export default DashboardRegisterSection;