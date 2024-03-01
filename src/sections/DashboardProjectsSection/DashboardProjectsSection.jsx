import DashboardProjectItem from '@/components/DashboardProjectItem/DashboardProjectItem';
import DashboardProjectCreateForm from '@/components/DashboardProjectCreateForm/DashboardProjectCreateForm';
import styles from './DashboardProjectsSection.module.scss'
import { getData } from '@/fetch/ServerFetch'


const DashboardProjectsSection = async () => {
    const data = await getData('ourProjects')

    return (
        <div className={styles.container}>
            <div className={styles.cardsList}>
                {data.map((item, index) => {
                    return (<DashboardProjectItem key={index} data={item} />)
                })}
            </div>

            <DashboardProjectCreateForm />
        </div>
    )
}


export default DashboardProjectsSection