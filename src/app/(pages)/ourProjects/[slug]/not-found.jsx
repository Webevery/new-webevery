"use client";
import { CldImage } from "next-cloudinary";
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";

import styles from "@/app/not-found.module.scss";

export default function NotFoundOurProjects() {
    return (
        <section className={styles.container}>
            <div className={`container ${styles.contentWrapper}`}>
                {/* <h2 className={styles.title}>Sorry page not found</h2> */}
                <h2 className={styles.title}>Такого проекту немає</h2>

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
                    title='До усіх проектів'
                    href={"/ourProjects"}
                />
            </div>
        </section>
    );
}
