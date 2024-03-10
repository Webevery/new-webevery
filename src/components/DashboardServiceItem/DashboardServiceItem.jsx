"use client"
import { CldImage } from 'next-cloudinary';
import styles from './DashboardServiceItem.module.scss';
import DashboardEditAndDelete from '../DashboardEditAndDelete/DashboardEditAndDelete';
import { usePathname } from 'next/navigation';
import Loading from '../Loading/Loading';


const DashboardServiceItem = ({ data, isLoading }) => {
    const pathname = usePathname()
    const isList = pathname.endsWith('services');

    return (<>
        {isLoading ? <Loading /> : <div className={styles.container}>
            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p className={styles.title}><span className='titleGradient'>{data.titleGradientEn}</span> {data.titleEn}</p>
            <p className={styles.title}><span className='titleGradient'>{data.titleGradient}</span> {data.title}</p>

            <ul className={styles.directionsList}>
                {data.directionsEn.map((item, index) => {
                    return (<li key={index}>{item}</li>)
                })}
            </ul>
            <ul className={`${styles.directionsList} ${styles.ukrainian}`}>
                {data.directions.map((item, index) => {
                    return (<li key={index}>{item}</li>)
                })}
            </ul>
            <p className={styles.price}>{data.priceEn}</p>
            <p className={`${styles.price} ${styles.ukrainian}`}>{data.price}</p>
            <div className={styles.imgWrapper}>
                <CldImage
                    className={styles.img}
                    width={271}
                    height={161}
                    src={data.mockup}
                    sizes="50vw"
                    alt={`Mockup of ${data.slug}`}
                />
                {!isList && <svg
                    className={styles.deleteIcon}
                    onClick={async () => {
                        console.log(`Delete photo ${data.mockup}`)
                        // handleDeleteImgFromMongoDB(
                        //     data,
                        //     data._id,
                        //     item,
                        //     mutate
                        // );

                        // handleDeleteImgFromCloudinary(item);
                    }}
                >
                    <use href="/sprite.svg#icon-delete" />
                </svg>}
            </div>
            <p className={styles.description}>{data.descriptionEn}</p>
            <p className={`${styles.description} ${styles.ukrainian}`}>{data.description}</p>

            {isList && <DashboardEditAndDelete slug={data.slug} pathname={pathname} />}
        </div >}</>

    )
}


export default DashboardServiceItem