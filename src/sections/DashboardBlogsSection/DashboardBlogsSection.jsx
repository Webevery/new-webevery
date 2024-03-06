"use client";
import DashboardBlogCreateForm from '@/components/DashboardBlogCreateForm/DashboardBlogCreateForm'
import DashboardBlogItem from '@/components/DashboardBlogItem/DashboardBlogItem'
import styles from './DashboardBlogsSection.module.scss'
import { GetDataFromSection } from '@/fetch/ClientFetch'
import Loading from '@/components/Loading/Loading';


const DashboardBlogsSection = () => {
    const { data, isLoading } = GetDataFromSection('blogs')

    return (
        <>{isLoading ? <Loading /> : <div className={styles.container}>
            <div className={styles.cardsList}>
                {data.map((item, index) => {
                    return (<DashboardBlogItem key={index} data={item} isLoading={isLoading} />)
                })}
            </div>

            <DashboardBlogCreateForm />
        </div>}</>
    )
}


export default DashboardBlogsSection