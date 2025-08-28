"use client";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { toast } from "sonner";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";
import { handleDeleteBlockOfBlogFromDB } from "@/utils/handleDeleteBlockOfBlogFromDB";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import styles from "./DashboardBlogItem.module.scss";

const DashboardBlogItem = ({ data, mutate }) => {
  const pathname = usePathname();
  const isList = pathname.endsWith("blog");

  return (
    <div className={styles.container}>
      <div className={styles.signature}>
        <p>{data.editor}</p>
        <p className={`${styles.title} ${styles.ukrainian}`}>
          {data.updatedAt?.slice(0, 10)}
        </p>
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

      <p className={styles.title}>{data.titleEn}</p>
      <p className={`${styles.title} ${styles.ukrainian}`}>{data.title}</p>

      <CldImage
        className={styles.img}
        width={200}
        height={200}
        src={data.mainImage}
        sizes="25vw"
        alt={`Photo of ${data.slug}`}
      />

      <p>{data.mainTextEn}</p>
      <p className={styles.ukrainian}>{data.mainText}</p>

      <div className={styles.blocksWrapper}>
        {data.blocks.map((item, index) => {
          return (
            <div key={index} className={styles.blockWrapper}>
              <div className={styles.contentWrapper}>
                <p className={`${styles.title} ${styles.blockNumber}`}>
                  Block: {index}
                </p>
                <p className={styles.title}>{item.subTitleEn}</p>
                <p className={`${styles.title} ${styles.ukrainian}`}>
                  {item.subTitle}
                </p>
                <p>{item.textEn}</p>
                <p className={styles.ukrainian}>{item.text}</p>
                {item.image && (
                  <CldImage
                    className={styles.img}
                    width={200}
                    height={200}
                    src={item.image}
                    sizes="25vw"
                    alt={item.imageDescription}
                  />
                )}
                {item.image && <p>{item.imageDescription}</p>}
              </div>
              {!isList && (
                <svg
                  className={styles.deleteIcon}
                  onClick={async () => {
                    if (confirm("Ви впевнені, що хочете видалити цей блок?")) {
                      handleDeleteImgFromCloudinary(item.image);
                      toast.success("Фото видалено з Cloudinary.");
                      handleDeleteBlockOfBlogFromDB(data, index);
                      toast.success(`Блок "${index}" видалений з картки.`);
                      toast.warning("Обновіть сторінку.");
                    }
                  }}
                >
                  <use href="/sprite.svg#icon-delete" />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      <p>{data.epilogueEn}</p>
      <p className={`${styles.title} ${styles.ukrainian}`}>{data.epilogue}</p>

      <p>{data.directionEn}</p>
      <p className={styles.ukrainian}>{data.direction}</p>

      {isList && (
        <DashboardEditAndDelete
          data={data}
          pathname={pathname}
          mutate={mutate}
        />
      )}
    </div>
  );
};

export default DashboardBlogItem;
