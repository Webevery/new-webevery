"use client"
import DashboardCoworkerItem from '@/components/DashboardCoworkerItem/DashboardCoworkerItem'
import DashboardCoworkerUpdateForm from '@/components/DashboardCoworkerUpdateForm/DashboardCoworkerUpdateForm'
import styles from './DashboardCoworkerIdSection.module.scss'
import { GetIdDataFromSection } from '@/fetch/ClientFetch';


const DashboardCoworkerIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection('team', slug)

    return (
        <div className={styles.container}>
            <DashboardCoworkerItem data={data} isLoading={isLoading} />
            <DashboardCoworkerUpdateForm />
        </div>
    )
}


export default DashboardCoworkerIdSection