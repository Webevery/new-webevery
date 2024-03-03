import DashboardCoworkerItem from '@/components/DashboardCoworkerItem/DashboardCoworkerItem'
import DashboardCoworkerCreateForm from '@/components/DashboardCoworkerCreateForm/DashboardCoworkerCreateForm'
import styles from './DashboardCoworkersSection.module.scss'
import { getData } from '@/fetch/ServerFetch'


const DashboardCoworkersSection = async () => {
    const data = await getData('team')

    return (
        <div className={styles.container}>
            <div className={styles.cardsList}>
                {data.map((item, index) => {
                    return (<DashboardCoworkerItem key={index} data={item} />)
                })}
            </div>

            <DashboardCoworkerCreateForm />
        </div>
    )
}


export default DashboardCoworkersSection