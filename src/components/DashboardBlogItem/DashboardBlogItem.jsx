"use client";

import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";

import styles from "./DashboardBlogItem.module.scss";

const DashboardBlogItem = ({ data }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("blogs");

    return (
        <div className={styles.container}>
            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p className={styles.title}>{data.titleEn}</p>
            <p className={`${styles.title} ${styles.ukrainian}`}>
                {data.title}
            </p>
            <div className={styles.imagesWrapper}>
                {data.images.map((item, index) => {
                    return (
                        <div key={index} className={styles.imgWrapper}>
                            {data && (
                                <CldImage
                                    className={styles.img}
                                    width={200}
                                    height={200}
                                    src={item}
                                    sizes='25vw'
                                    alt={`Photo of ${data.slug}`}
                                />
                            )}
                            {!isList && (
                                <svg
                                    className={styles.deleteIcon}
                                    onClick={async () => {
                                        console.log(`Delete photo ${item}`);
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
                    );
                })}
            </div>

            <p>{data.descriptionEn}</p>
            <p className={styles.ukrainian}>{data.description}</p>
            <p>{data.directionEn}</p>
            <p className={styles.ukrainian}>{data.direction}</p>

            {isList && (
                <DashboardEditAndDelete slug={data.slug} pathname={pathname} />
            )}
        </div>
    );
};

export default DashboardBlogItem;
