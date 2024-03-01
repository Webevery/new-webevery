import styles from './DashboardProjectItem.module.scss';


const DashboardProjectItem = ({ data }) => {
    return (
        <div className={styles.container}>{data.title} {data.titleGradient}</div>
    )
}


export default DashboardProjectItem