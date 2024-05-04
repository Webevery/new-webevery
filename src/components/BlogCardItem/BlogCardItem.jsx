'use client';

import { CldImage } from 'next-cloudinary';
import { currentLanguages, t } from '@/data/languages';
import { useTranslation } from 'react-i18next';
import styles from './BlogCardItem.module.scss';
import ReadMore from '../Buttons/ReadMore/ReadMore';
import { formatDate } from '@/utils/dateUtils';
import Link from 'next/link';

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

  const formattedDate = formatDate(updatedAt);

  return (
    <li className={styles.cartItem}>
      <Link href={`/blog/${slug}`} className={styles.cartImgContainer}>
        <CldImage
          src={mainImage}
          alt={title}
          fill="true"
          as="image"
          priority={true}
          className={styles.cartImg}
          sizes="(max-width: 768px) 329px, (max-width: 1440px) 320px"
        />
      </Link>

      <h3 className={styles.cartTitle}>
        {i18n.language === currentLanguages.EN ? titleEn : title}
      </h3>
      <p className={styles.cartDesc}>
        {i18n.language === currentLanguages.EN ? mainTextEn : mainText}
      </p>
      <div className={styles.bottomContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <ReadMore href="blog" slug={slug} />
      </div>
    </li>
  );
};

export default BlogCardItem;
