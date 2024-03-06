"use client";
import DashboardServiceItem from '@/components/DashboardServiceItem/DashboardServiceItem';
import DashboardServiceUpdateForm from '@/components/DashboardServiceUpdateForm/DashboardServiceUpdateForm';
import { GetIdDataFromSection } from '@/fetch/ClientFetch';
import styles from './DashboardServiceIdSection.module.scss';





const DashboardServiceIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection('services', slug);

    return (
        <div className={styles.container}>
            <DashboardServiceItem data={data} isLoading={isLoading} />
            <DashboardServiceUpdateForm />
        </div>
    )
}

export default DashboardServiceIdSection;