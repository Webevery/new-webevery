'use client';

import { CldImage } from 'next-cloudinary';
import { format } from 'date-fns';
import { currentLanguages, t } from '@/data/languages';
import { useTranslation } from 'react-i18next';
import styles from './BlogCardItem.module.scss';
import ReadMore from '../Buttons/ReadMore/ReadMore';

const BlogCardItem = ({
  slug,
  mainImage,
  titleEn,
  title,
  mainTextEn,
  mainText,
  updatedAt,
}) => {
  const { i18n, t } = useTranslation();
  return (
    <li className={styles.cartItem}>
      <div className={styles.cartImgContainer}>
        <CldImage
          src={mainImage}
          alt="img blog"
          fill="true"
          priority={true}
          className={styles.cartImg}
          sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
        />
      </div>

      <h3 className={styles.cartTitle}>
        {i18n.language === currentLanguages.EN ? titleEn : title}
      </h3>
      <p className={styles.cartDesc}>
        {i18n.language === currentLanguages.EN ? mainTextEn : mainText}
      </p>
      <div className={styles.bottomContainer}>
        <p className={styles.date}>
          {format(new Date(updatedAt), 'dd.MM.yyyy')}
        </p>
        <ReadMore href="blog" slug={slug} />
      </div>
    </li>
  );
};

export default BlogCardItem;
