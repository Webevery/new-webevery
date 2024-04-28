import Link from 'next/link';
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary';
import styles from './DashboardEditAndDelete.module.scss';
import { handleDeleteCardFromDB } from '@/utils/handleDeleteCardFromDB';
import { createImagesArrayForDeletingFromCloudinary } from '@/utils/createImagesArrayForDeletingFromCloudinary';


const DashboardEditAndDelete = ({ data, pathname }) => {
    // cut /dashboard/ from pathname
    const slicedPathname = pathname.slice(11);
    const url = `/api/${slicedPathname}/${data.slug}`;

    return (
        <div className={styles.btnsWrapper}>
            <Link
                className={styles.editLink}
                href={`${pathname}/${data.slug}`}
            >
                <svg className={styles.editIcon}>
                    <use href="/sprite.svg#icon-edit" />
                </svg>
            </Link>

            <svg
                className={styles.deleteIcon}
                onClick={() => {
                    const arrForDeleting = createImagesArrayForDeletingFromCloudinary(data);
                    arrForDeleting.map(item => handleDeleteImgFromCloudinary(item));
                    handleDeleteCardFromDB(url);
                }}
            >
                <use href="/sprite.svg#icon-delete" />
            </svg>
        </div>
    )
}


export default DashboardEditAndDelete;