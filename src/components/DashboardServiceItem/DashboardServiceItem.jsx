import styles from './DashboardServiceItem.module.scss';


const DashboardServiceItem = ({ data }) => {
    return (
        <div className={styles.container}>{data.title} {data.titleGradient}</div>
    )
}


export default DashboardServiceItem