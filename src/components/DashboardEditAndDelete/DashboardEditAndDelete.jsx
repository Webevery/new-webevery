import Link from 'next/link';
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary';
import styles from './DashboardEditAndDelete.module.scss';
import { handleDeleteCardFromDB } from '@/utils/handleDeleteCardFromDB';


const DashboardEditAndDelete = ({ slug, pathname, publicId }) => {
    const url = `/api/team/${slug}`


    return (
        <div className={styles.btnsWrapper}>
            <Link
                className={styles.editLink}
                href={`${pathname}/${slug}`}
            >
                <svg className={styles.editIcon}>
                    <use href="/sprite.svg#icon-edit" />
                </svg>
            </Link>

            <svg
                className={styles.deleteIcon}
                onClick={() => {
                    handleDeleteImgFromCloudinary(publicId);
                    handleDeleteCardFromDB(url);
                }}
            >
                <use href="/sprite.svg#icon-delete" />
            </svg>
        </div>
    )
}


export default DashboardEditAndDelete;