"use client";

import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";

import styles from "./DashboardProjectItem.module.scss";

const DashboardProjectItem = ({ data }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("projects");

    return (
        <div className={styles.container}>
            <div className={styles.signature}>
                <p>{data.editor}</p>
                <p className={`${styles.titleEng} ${styles.ukrainian}`}>{data.updatedAt?.slice(0, 10)}</p>
            </div>

            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
            <p className={styles.titleEng}>
                {data.titleEn}{" "}
                <span className='titleGradient'>{data.titleGradientEn}</span>
            </p>
            <p className={styles.titleUkr}>
                {data.title}{" "}
                <span className='titleGradient'>{data.titleGradient}</span>
            </p>
            <div className={styles.imgWrapper}>
                <CldImage
                    width={280}
                    height={200}
                    src={data.heroImage}
                    sizes='50vw'
                    alt={`Hero photo of ${data.slug}`}
                />
                {!isList && (
                    <svg
                        className={styles.deleteIcon}
                        onClick={async () => {
                            console.log(`Delete photo ${data.heroImage}`);
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
            <p>
                <span className={styles.titlesBold}>Problem</span>
                {data.problemEn}
            </p>
            <p className={styles.ukrainian}>
                <span className={styles.titlesBold}>Проблема</span>
                {data.problem}
            </p>
            <p>
                <span className={styles.titlesBold}>Solution</span>
                {data.solutionEn}
            </p>
            <p className={styles.ukrainian}>
                <span className={styles.titlesBold}>Рішення</span>
                {data.solution}
            </p>
            <p>
                <span className={styles.titlesBold}>
                    How it`s help business
                </span>
                {data.helpEn}
            </p>
            <p className={styles.ukrainian}>
                <span className={styles.titlesBold}>
                    Як це допоможе бізнесу
                </span>
                {data.help}
            </p>
            <div className={styles.imgWrapper}>
                <CldImage
                    width={280}
                    height={200}
                    src={data.screensImage}
                    sizes='50vw'
                    alt={`Screens of ${data.slug}`}
                />
                {!isList && (
                    <svg
                        className={styles.deleteIcon}
                        onClick={async () => {
                            console.log(`Delete photo ${data.screensImage}`);
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
            <p>
                <span className={styles.titlesBold}>Mobile adaptation</span>
                {data.adaptationEn}
            </p>
            <p className={styles.ukrainian}>
                <span className={styles.titlesBold}>Мобільна адаптація</span>
                {data.adaptation}
            </p>
            <div
                className={
                    isList
                        ? `${styles.imagesWrapper}`
                        : `${styles.imagesWrapper} ${styles.column}`
                }
            >
                {data.mobileImages.map((item, index) => {
                    return (
                        <div key={index} className={styles.imgWrapper}>
                            <CldImage
                                width={100}
                                height={170}
                                src={item}
                                sizes='20vw'
                                alt={`Phone adaptation of ${data.slug}`}
                            />
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

            {isList && (
                <DashboardEditAndDelete slug={data.slug} pathname={pathname} />
            )}
        </div>
    );
};

export default DashboardProjectItem;
