import Link from 'next/link';
import styles from './DashboardEditAndDelete.module.scss';


const DashboardEditAndDelete = ({ slug, pathname }) => {

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
                    console.log(`Delete card of ${slug}`)
                    // product.photos.map((item) =>
                    //     handleDeleteImgFromCloudinary(item)
                    // );

                    // handleDeleteProductFromDB(product._id, product.article);
                }}
            >
                <use href="/sprite.svg#icon-delete" />
            </svg>
        </div>
    )
}

export default DashboardEditAndDelete




// <div className = { styles.btnsWrapper } >
//         <Link
//             className={styles.editLink}
//             href={`/dashboard/${product._id}`}
//         >
//             <svg className={styles.editIcon}>
//                 <use href="/sprite.svg#icon-edit" />
//             </svg>
//         </Link>

//         <svg
//             className={styles.deleteIcon}
//             onClick={() => {
//                 product.photos.map((item) =>
//                     handleDeleteImgFromCloudinary(item)
//                 );

//                 handleDeleteProductFromDB(product._id, product.article);
//             }}
//         >
//             <use href="/sprite.svg#icon-delete" />
//         </svg>
//     </div >