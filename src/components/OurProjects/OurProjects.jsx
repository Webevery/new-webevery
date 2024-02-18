'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import stylescBtn from '../Buttons/Btns.module.scss';
import styles from './OurProjects.module.scss';

const OurProjects = ({ data }) => {
  return data?.map(
    ({
      slug,
      titleEn,
      titleGradientEn,
      heroImage,
      problemEn,
      siteLink,
    }) => (
      <li key={slug} className={styles.ourProjectsItem}>
        <figure className={styles.ourProjectsImgContainer}>
          <CldImage
            src={heroImage}
            alt="фото сайту"
            fill={true}
            className={styles.img}
            sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
          />
        </figure>
        <div className={styles.ourProjectsContent}>
          <h3 className={styles.ourProjectsTitle}>
            {titleEn === 'Site for' ? (
              <>
                <span className={styles.ourProjectsTitleGradient}>
                  {titleEn}
                </span>{' '}
                {titleGradientEn}
              </>
            ) : (
              <>
                {titleGradientEn}{' '}
                <span className={styles.ourProjectsTitleGradient}>
                  {titleEn}
                </span>
              </>
            )}{' '}
            {titleGradientEn === 'ICE CREAM' && (
              <span className={styles.ourProjectsTitleGradient}>cafe</span>
            )}
          </h3>

          <p className={styles.ourProjectsDesc}>{problemEn}</p>
          <Link href={`/ourProjects/${slug}`} className={styles.readMore}>
            <span className={styles.readMoreTitle}>Read more</span>
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
          <div className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}>
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={titleGradientEn}
              className={stylescBtn.btn + ' ' + styles.openSite}
            >
              Open site
            </a>
          </div>
        </div>
      </li>
    )
  );
};

export default OurProjects;
