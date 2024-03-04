"use client"
import { CldImage } from 'next-cloudinary';
import styles from './DashboardCoworkerItem.module.scss';


const DashboardCoworkerItem = ({ data }) => {

    return (
        <div className={styles.container}>
            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p>{data.nameEn}</p>
            <p className={`${styles.ukrainian}`}>{data.name}</p>
            <p>{data.positionEn}</p>
            <p className={`${styles.ukrainian}`}>{data.position}</p>
            <CldImage
                className={styles.img}
                width={200}
                height={200}
                src={data.photo}
                sizes="50vw"
                alt={`Photo of ${data.name}`}
            />
        </div>
    )
}


export default DashboardCoworkerItem