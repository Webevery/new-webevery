import styles from './DashboardCoworkerItem.module.scss';


const DashboardCoworkerItem = ({ data }) => {
    return (
        <div className={styles.container}>{data.name}</div>
    )
}


export default DashboardCoworkerItem