'use client';

import { GetDataFromSection } from '@/fetch/ClientFetch';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import styles from './OurProjectsSection.module.scss';
import stylescBtn from '../../components/Buttons/Btns.module.scss';
import { useEffect, useState } from 'react';

const OurProjectsSection = () => {
  const { data, error, isLoading } = GetDataFromSection('ourProjects');

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div className={`container ${styles.projectContainer}`}>
        <h1 className={styles.title}>Our Projects</h1>
        <ul className={styles.ourProjectsList}>
          {!isLoading &&
            data?.map(
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
                        <span className={styles.ourProjectsTitleGradient}>
                          cafe
                        </span>
                      )}
                    </h3>

                    <p className={styles.ourProjectsDesc}>{problemEn}</p>
                    <Link
                      href={`/ourProjects/${slug}`}
                      className={styles.readMore}
                    >
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
                    {!isSmallScreen && (
                      <div
                        className={
                          stylescBtn.btnWrapper + ' ' + styles.btnWrapper
                        }
                      >
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
                    )}
                  </div>
                </li>
              )
            )}
          {/* <OurProjects data={data} /> */}
        </ul>
      </div>
    </section>
  );
};

export default OurProjectsSection;
