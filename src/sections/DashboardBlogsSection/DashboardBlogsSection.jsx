import DashboardBlogCreateForm from '@/components/DashboardBlogCreateForm/DashboardBlogCreateForm'
import DashboardBlogItem from '@/components/DashboardBlogItem/DashboardBlogItem'
import styles from './DashboardBlogsSection.module.scss'
import { getData } from '@/fetch/ServerFetch'


const DashboardBlogsSection = async () => {
    const data = await getData('blogs')

    return (
        <div className={styles.container}>
            <div className={styles.cardsList}>
                {data.map((item, index) => {
                    return (<DashboardBlogItem key={index} data={item} />)
                })}
            </div>

            <DashboardBlogCreateForm />
        </div>
    )
}


export default DashboardBlogsSection