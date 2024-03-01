import DashboardServiceItem from '@/components/DashboardServiceItem/DashboardServiceItem';
import DashboardServiceCreateForm from '@/components/DashboardServiceCreateForm/DashboardServiceCreateForm';
import styles from './DashboardServicesSection.module.scss'
import { getData } from '@/fetch/ServerFetch'


const DashboardServicesSection = async () => {
    const data = await getData('services')

    return (
        <div className={styles.container}>
            <div className={styles.cardsList}>
                {data.map((item, index) => {
                    return (<DashboardServiceItem key={index} data={item} />)
                })}
            </div>

            <DashboardServiceCreateForm />
        </div>
    )
}


export default DashboardServicesSection