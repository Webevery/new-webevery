"use client";
import { CldImage } from "next-cloudinary";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";

import styles from "@/app/not-found.module.scss";

export default function NotFoundServices() {
    return (
        <section className={styles.container}>
            <div className={`container ${styles.contentWrapper}`}>
                {/* <h2 className={styles.title}>Sorry page not found</h2> */}
                <h2 className={styles.title}>Такої сторінки не знайдено</h2>

                <div className={styles.imgWrapper}>
                    <CldImage
                        className={styles.image}
                        fill
                        src='NotFoundPage_dutpey'
                        sizes='(max-width: 1023px) 100vw,  60vw'
                        alt='notFoundPage photo'
                    />
                </div>
                <NavigationBtn
                    id={styles.backToHomeBtn}
                    title='До усіх послуг'
                    href={"/services"}
                />
            </div>
        </section>
    );
}
