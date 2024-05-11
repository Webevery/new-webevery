import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './ReadMore.module.scss';

const ReadMore = ({ href, slug, className, classNameIcon }) => {
  const { i18n, t } = useTranslation();
  return (
    <Link
      href={`/${href}/${slug}`}
      className={styles.readMore + ' ' + className}
    >
      <span className={styles.readMoreTitle}>
        {t('Buttons.CardDetailsBtn')}
      </span>
      <svg
        className={styles.readMoreIcon + ' ' + classNameIcon}
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
            <stop offset="1" stopColor="#0600ff" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};

export default ReadMore;
