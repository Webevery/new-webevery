"use client";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";
import styles from "./DashboardServiceItem.module.scss";


const DashboardServiceItem = ({ data }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("services");

    return (
        <div className={styles.container}>
            <div className={styles.signature}>
                <p>{data.editor}</p>
                <p className={`${styles.title} ${styles.ukrainian}`}>{data.updatedAt?.slice(0, 10)}</p>
            </div>

            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p className={styles.title}>
                <span className='titleGradient'>{data.titleGradientEn}</span>{" "}
                {data.titleEn}
            </p>
            <p className={styles.title}>
                <span className='titleGradient'>{data.titleGradient}</span>{" "}
                {data.title}
            </p>

            <ul className={styles.directionsList}>
                {data.directionsEn.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <ul className={`${styles.directionsList} ${styles.ukrainian}`}>
                {data.directions.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <p className={styles.price}>{data.priceEn}</p>
            <p className={`${styles.price} ${styles.ukrainian}`}>
                {data.price}
            </p>
            <div className={styles.imgWrapper}>
                <CldImage
                    className={styles.img}
                    width={271}
                    height={161}
                    src={data.mockup}
                    sizes='50vw'
                    alt={`Mockup of ${data.slug}`}
                />
            </div>
            <p className={styles.description}>{data.descriptionEn}</p>
            <p className={`${styles.description} ${styles.ukrainian}`}>
                {data.description}
            </p>

            {isList && (
                <DashboardEditAndDelete slug={data.slug} pathname={pathname} publicId={data.mockup} />
            )}
        </div>
    );
};

export default DashboardServiceItem;
