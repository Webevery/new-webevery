"use client";

import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";

import styles from "./DashboardCoworkerItem.module.scss";

const DashboardCoworkerItem = ({ data }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("coworkers");

    return (
        <div className={styles.container}>
            <div className={styles.signature}>
                <p>{data.editor}</p>
                <p className={`${styles.title} ${styles.ukrainian}`}>{data.updatedAt?.slice(0, 10)}</p>
            </div>

            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p>{data.nameEn}</p>
            <p className={`${styles.ukrainian}`}>{data.name}</p>
            <p>{data.positionEn}</p>
            <p className={`${styles.ukrainian}`}>{data.position}</p>
            <div className={styles.imgWrapper}>
                {data && (
                    <CldImage
                        className={styles.img}
                        width={200}
                        height={200}
                        src={data.photo}
                        sizes='50vw'
                        alt={`Photo of ${data.name}`}
                    />
                )}
                {!isList && (
                    <svg
                        className={styles.deleteIcon}
                        onClick={async () => {
                            console.log(`Delete photo of ${data.nameEn}`);
                            // handleDeleteImgFromMongoDB(
                            //     data,
                            //     data._id,
                            //     item,
                            //     mutate
                            // );

                            // handleDeleteImgFromCloudinary(item);
                        }}
                    >
                        <use href='/sprite.svg#icon-delete' />
                    </svg>
                )}
            </div>

            {isList && (
                <DashboardEditAndDelete slug={data.slug} pathname={pathname} />
            )}
        </div>
    );
};

export default DashboardCoworkerItem;
