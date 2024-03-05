"use client";
import DashboardBlogItem from '@/components/DashboardBlogItem/DashboardBlogItem';
import DashboardBlogUpdateForm from '@/components/DashboardBlogUpdateForm/DashboardBlogUpdateForm';
import styles from './DashboardBlogIdSection.module.scss'
import { GetIdDataFromSection } from '@/fetch/ClientFetch';


const DashboardBlogIdSection = ({ params }) => {
    const { slug } = params;
    const { data } = GetIdDataFromSection('blogs', slug);

    return (
        <div className={styles.container}>
            <DashboardBlogItem data={data} />
            <DashboardBlogUpdateForm />
        </div>
    )
}


export default DashboardBlogIdSection