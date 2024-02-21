"use client"
import { CldImage } from 'next-cloudinary';
import styles from './not-found.module.scss';
import NavigationBtn from '@/components/Buttons/NavigationBtn/NavigationBtn';


export default function NotFound() {
    return <section className={styles.container}>
        <div className={`container ${styles.contentWrapper}`}>
            <h2 className={styles.title}>Sorry page not found</h2>
            <div className={styles.imgWrapper}>
                <CldImage
                    className={styles.image}
                    fill
                    src='NotFoundPage_dutpey'
                    sizes="(max-width: 1023px) 100vw,  60vw"
                    alt="notFoundPage photo"
                />
            </div>
            <NavigationBtn title="Back to home page" href={"/"} />
        </div>

    </section>
}