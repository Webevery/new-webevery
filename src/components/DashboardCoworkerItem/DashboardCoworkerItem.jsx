"use client";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";
import styles from "./DashboardCoworkerItem.module.scss";


const DashboardCoworkerItem = ({ data, mutate }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("team");


    return (
        <div className={styles.container}>
            <div className={styles.signature}>
                <p>{data.editor}</p>
                <p className={`${styles.title} ${styles.ukrainian}`}>{data.updatedAt?.slice(0, 10)}</p>
            </div>

 <div className={styles.slugAndIsShownWrapper}>
        <p className={`${styles.slug} ${styles.ukrainian}`}>{data.slug}</p>
        <span
          className={
            data.isShown ? styles.isShownProject : styles.unshownProject
          }
        >
          {data.isShown ? "Є НА САЙТІ" : "НЕМАЄ НА САЙТІ"}
        </span>
      </div>

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
            </div>

            {isList && (
                <DashboardEditAndDelete data={data} pathname={pathname} mutate={mutate} />
            )}
        </div>
    );
};

export default DashboardCoworkerItem;