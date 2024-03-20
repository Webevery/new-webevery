import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { format } from 'date-fns';
import { currentLanguages, t } from '@/data/languages';
import { useTranslation } from 'react-i18next';
import styles from './BlogCardItem.module.scss';

const BlogCardItem = ({
  slug,
  images,
  titleEn,
  title,
  descriptionEn,
  description,
  updatedAt,
}) => {
  const { i18n, t } = useTranslation();
  return (
    <li className={styles.cartItem}>
      <div className={styles.cartImgContainer}>
        <CldImage
          src={images[0]}
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
        {i18n.language === currentLanguages.EN ? descriptionEn : description}
      </p>
      <div className={styles.bottomContainer}>
        <p className={styles.date}>
          {format(new Date(updatedAt), 'dd.MM.yyyy')}
        </p>
        <Link href={`/blog/${slug}`} className={styles.readMore}>
          <span className={styles.readMoreTitle}>
            {t('Buttons.CardDetailsBtn')}
          </span>
          <svg
            className={styles.readMoreIcon}
            viewBox="0 0 24 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 3.5L19 0.613249L19 6.38675L24 3.5ZM-1.15607e-09 4L19.5 4L19.5 3L1.15607e-09 3L-1.15607e-09 4Z"
              fill="url(#paint0_linear_945_6287)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_945_6287"
                x1="5.16375e-08"
                y1="3.78477"
                x2="11.8197"
                y2="-8.20395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FAFF00" />
                <stop offset="0.466629" stopColor="#00F0FF" />
                <stop offset="1" stopColor="#0400B3" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>
    </li>
  );
};

export default BlogCardItem;
