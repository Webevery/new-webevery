"use client";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { toast } from "sonner";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { handleDeleteImageFromMongoDB } from "@/utils/handleDeleteImageFromMongoDB";
import styles from "./DashboardProjectItem.module.scss";

const DashboardProjectItem = ({ data, mutate }) => {
  const pathname = usePathname();
  const isList = pathname.endsWith("ourProjects");

  return (
    <div className={styles.container}>
      <div className={styles.signature}>
        <p>{data.editor}</p>
        <p className={`${styles.titleEng} ${styles.ukrainian}`}>
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
      <p className={styles.titleEng}>
        {data.titleEn}{" "}
        <span className="titleGradient">{data.titleGradientEn}</span>
      </p>
      <p className={styles.titleUkr}>
        {data.title} <span className="titleGradient">{data.titleGradient}</span>
      </p>
      <div className={styles.imgWrapper}>
        <CldImage
          className={styles.heroImg}
          width={280}
          height={200}
          src={data.heroImage}
          sizes="100vw"
          alt={`Hero photo of ${data.slug}`}
        />
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
        <span className={styles.titlesBold}>How it`s help business</span>
        {data.helpEn}
      </p>
      <p className={styles.ukrainian}>
        <span className={styles.titlesBold}>Як це допоможе бізнесу</span>
        {data.help}
      </p>
      <div className={styles.imgWrapper}>
        <CldImage
          className={styles.screenImg}
          width={280}
          height={200}
          src={data.screensImage}
          sizes="100vw"
          alt={`Screens of ${data.slug}`}
        />
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
            <div key={index} className={styles.mobileImgWrapper}>
              <CldImage
                className={styles.mobileImg}
                width={100}
                height={170}
                src={item}
                sizes="33vw"
                alt={`Phone adaptation of ${data.slug}`}
              />
              {!isList && (
                <svg
                  className={styles.deleteIcon}
                  onClick={async () => {
                    if (confirm("Ви впевнені, що хочете видалити це фото?")) {
                      handleDeleteImgFromCloudinary(item);
                      toast.success("Фото видалено з Cloudinary.");
                      handleDeleteImageFromMongoDB(data, item);
                      toast.success("Фото видалено з БД.");
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

export default DashboardProjectItem;
