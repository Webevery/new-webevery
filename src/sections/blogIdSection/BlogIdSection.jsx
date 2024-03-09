'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, notFound } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from 'react-i18next';
import { GetIdDataFromSection } from '@/fetch/ClientFetch';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { currentLanguages } from '@/data/languages';

import styles from './BlogIdSection.module.scss';

const BlogIdSection = ({ params }) => {
  const { slug } = params;
  const { data, error, isLoading } = GetIdDataFromSection('blogs', slug);
  const pathname = usePathname();
  const isPathExist = useCheckPathname(pathname);
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!isLoading && !isPathExist) {
      notFound();
    }
  }, [isPathExist, isLoading]);

  return (
    <section className={styles.blog}>
      {!isLoading && (
        <div className={`container ${styles.blogIdContainer}`}>
          <div
            className={styles.backContainer}
            onClick={() => router.push('/blog')}
          >
            <svg className={styles.backIcon}>
              <use href="../sprite.svg#icon-arrowReadMore" />
            </svg>
            <p>To page with all articles</p>
          </div>
          <div className={styles.blogContent}>
            <h1 className={styles.blogTitle}>
              {i18n.language === currentLanguages.EN
                ? data?.titleEn
                : data?.title}
            </h1>

            <figure className={styles.firstImgContainer}>
              <CldImage
                src={data?.images[0]}
                alt="картинка для блогу"
                fill={true}
                className={styles.img}
              />
            </figure>
          </div>
          <div className={styles.blogDescContainer}>
            <p className={styles.blogDesc}>
              {i18n.language === currentLanguages.EN
                ? data?.descriptionEn
                : data?.description}
            </p>
            <p className={styles.blogDesc}>
              {i18n.language === currentLanguages.EN
                ? data?.descriptionEn
                : data?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogIdSection;

// 'use client';

// import { useRouter } from 'next/navigation';
// import { CldImage } from 'next-cloudinary';
// import { useTranslation } from 'react-i18next';
// import { GetIdDataFromSection } from '@/fetch/ClientFetch';
// import styles from './BlogIdSection.module.scss';
// import { currentLanguages } from '@/data/languages';

// const BlogIdSection = ({ params }) => {
//   const router = useRouter();
//   const { slug } = params;
//   const { data, error, isLoading } = GetIdDataFromSection('blogs', slug);

//   const { i18n } = useTranslation();
//   // console.log(data);
//   return (
//     <section className={styles.blog}>
//       {!isLoading && (
//         <div className={`container ${styles.blogIdContainer}`}>
//           <div className={styles.backContainer} onClick={() => router.back()}>
//             <svg className={styles.backIcon}>
//               <use href="../sprite.svg#icon-arrowReadMore" />
//             </svg>
//             <p>To page with all articles</p>
//           </div>
//           <h1 className={styles.blogTitle}>
//             {i18n.language === currentLanguages.EN
//               ? data?.titleEn
//               : data?.title}
//           </h1>
//           <div className={styles.blogContent}>
//             <p className={styles.blogDesc}>
//               {i18n.language === currentLanguages.EN
//                 ? data?.descriptionEn
//                 : data?.description}
//             </p>
//             <figure className={styles.firstImgContainer}>
//               <CldImage
//                 src={data?.images[0]}
//                 alt="картинка для блогу"
//                 fill={true}
//                 className={styles.img}
//               />
//             </figure>
//           </div>
//           <div className={styles.blogContent}>
//             <figure className={styles.lastImgContainer}>
//               <CldImage
//                 src={data?.images[1]}
//                 alt="картинка для блогу"
//                 fill={true}
//                 className={styles.img}
//               />
//             </figure>
//             <p className={styles.blogDesc}>
//               {i18n.language === currentLanguages.EN
//                 ? data?.descriptionEn
//                 : data?.description}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default BlogIdSection;
