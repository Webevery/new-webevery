"use client"
import DashboardServiceItem from '@/components/DashboardServiceItem/DashboardServiceItem';
import DashboardServiceCreateForm from '@/components/DashboardServiceCreateForm/DashboardServiceCreateForm';
import styles from './DashboardServicesSection.module.scss'
import { GetDataFromSection } from '@/fetch/ClientFetch';
import Loading from '@/components/Loading/Loading';


const DashboardServicesSection = () => {
    const { data, isLoading } = GetDataFromSection('services')

    return (<>
        {isLoading ? <Loading /> : <div className={styles.container}>
            <div className={styles.cardsList}>
                {data.map((item, index) => {
                    return (<DashboardServiceItem key={index} data={item} />)
                })}
            </div>

            <DashboardServiceCreateForm />
        </div>}</>
    )
}


export default DashboardServicesSection