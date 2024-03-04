"use client"
import { CldImage } from 'next-cloudinary';
import styles from './DashboardBlogItem.module.scss';


const DashboardBlogItem = ({ data }) => {

    return (
        <div className={styles.container}>
            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p className={styles.title}>{data.titleEn}</p>
            <p className={`${styles.title} ${styles.ukrainian}`}>{data.title}</p>
            <div className={styles.imgsWrapper}>
                {data.images.map((item, index) => {
                    return (<CldImage key={index}
                        className={styles.img}
                        width={200}
                        height={200}
                        src={item}
                        sizes="25vw"
                        alt={`Photo of ${data.slug}`}
                    />)
                })
                }
            </div>

            <p>{data.descriptionEn}</p>
            <p className={styles.ukrainian}>{data.description}</p>
            <p >{data.directionEn}</p>
            <p className={styles.ukrainian}>{data.direction}</p>
        </div>
    )
}


export default DashboardBlogItem