import DashboardBlogItem from "@/components/DashboardBlogItem/DashboardBlogItem"
import DashboardBlogUpdateForm from "@/components/DashboardBlogUpdateForm/DashboardBlogUpdateForm"
import styles from './page.module.scss'


const DashboardPageBlog = () => {
    return (
        <div className={styles.container}>
            <DashboardBlogItem />
            <DashboardBlogUpdateForm />
        </div>
    )
}


export default DashboardPageBlog