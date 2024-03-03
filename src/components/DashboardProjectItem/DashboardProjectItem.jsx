"use client"
import { CldImage } from 'next-cloudinary';
import styles from './DashboardProjectItem.module.scss';


const DashboardProjectItem = ({ data }) => {

    return (
        <div className={styles.container}>
            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p className={styles.titleEng}>{data.titleEn} <span className='titleGradient'>{data.titleGradientEn}</span></p>
            <p className={styles.titleUkr}>{data.title} <span className='titleGradient'>{data.titleGradient}</span></p>
            <CldImage
                className={styles.heroImage}
                width={280}
                height={200}
                src={data.heroImage}
                sizes="50vw"
                alt={`Hero photo of ${data.slug}`}
            />
            <p><span className={styles.titlesBold}>Problem</span>{data.problemEn}</p>
            <p className={styles.ukrainian}><span className={styles.titlesBold}>Проблема</span>{data.problem}</p>
            <p><span className={styles.titlesBold}>Solution</span>{data.solutionEn}</p>
            <p className={styles.ukrainian}><span className={styles.titlesBold}>Рішення</span>{data.solution}</p>
            <p><span className={styles.titlesBold}>How it`s help business</span>{data.helpEn}</p>
            <p className={styles.ukrainian}><span className={styles.titlesBold}>Як це допоможе бізнесу</span>{data.help}</p>
            <CldImage
                className={styles.screensImage}
                width={280}
                height={200}
                src={data.screensImage}
                sizes="50vw"
                alt={`Screens of ${data.slug}`}
            />
            <p><span className={styles.titlesBold}>Mobile adaptation</span>{data.adaptationEn}</p>
            <p className={styles.ukrainian}><span className={styles.titlesBold}>Мобільна адаптація</span>{data.adaptation}</p>
            <div className={styles.imgsWrapper}>
                {data.mobileImages.map((item, index) => {
                    return (<CldImage key={index}
                        width={100}
                        height={170}
                        src={item}
                        sizes="20vw"
                        alt={`Phone adaptation of ${data.slug}`}
                    />)
                })
                }
            </div>
        </div>
    )
}


export default DashboardProjectItem