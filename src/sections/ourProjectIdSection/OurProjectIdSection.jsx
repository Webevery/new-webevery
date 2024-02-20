'use client';

import styles from './OurProjectIdSection.module.scss';
import stylescBtn from '../../components/Buttons/Btns.module.scss'
import { CldImage } from 'next-cloudinary';
import { v4 } from 'uuid';
import { GetIdDataFromSection, GetProject } from '@/fetch/ClientFetch';
import { useEffect, useState } from 'react';

const OurProjectIdSection = ({ params }) => {
  const { slug } = params;
  // const { data, error, isLoading } = GetProject(slug);
  const { data, error, isLoading } = GetIdDataFromSection('ourProjects', slug);

  const dataId = data && !isLoading ? data : error;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`container ${styles.ourProjectContainer}`}>
      <h1 className={styles.ourProjectsTitle}>
        {dataId?.titleEn === 'Site for' ? (
          <>
            <span className={styles.ourProjectsTitleGradient}>
              {dataId?.titleEn}
            </span>{' '}
            {dataId?.titleGradientEn}
          </>
        ) : (
          <>
            {dataId?.titleGradientEn}{' '}
            <span className={styles.ourProjectsTitleGradient}>
              {dataId?.titleEn}
            </span>
          </>
        )}{' '}
        {dataId?.titleGradientEn === 'ICE CREAM' && (
          <span className={styles.ourProjectsTitleGradient}>cafe</span>
        )}
      </h1>
      {isSmallScreen && (
        <div className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}>
          <a
            href={dataId?.siteLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dataId?.titleGradientEn}
            className={stylescBtn.btn + ' ' + styles.openSite}
          >
            Open site
          </a>
        </div>
      )}

      <figure className={styles.imgContainer}>
        {!isLoading ? (
          <CldImage
            src={dataId?.heroImage}
            alt="головна сторінка сайту"
            fill={true}
            sizes="100vw"
            priority={true}
            className={styles.imageLoader}
          />
        ) : (
          <div className={styles.imageLoader} />
        )}
      </figure>
      <ul className={styles.contentWraper}>
        <li className={styles.contentItem}>
          <h3 className={styles.contentTitle}>Problem</h3>
          <p className={styles.contentDesc}>{dataId?.problemEn}</p>
        </li>
        <li className={styles.contentItem}>
          <h3 className={styles.contentTitle}>Solution</h3>
          <p className={styles.contentDesc}>{dataId?.solutionEn}</p>
        </li>
        <li className={styles.contentItem}>
          <h3 className={styles.contentTitle}>How it`s help for business</h3>
          <p className={styles.contentDesc}>{dataId?.helpEn}</p>
        </li>
      </ul>
      <figure className={styles.imgScreensContainer}>
        {!isLoading ? (
          <CldImage
            src={dataId?.screensImage}
            alt="фото сайту"
            fill={true}
            loading="lazy"
            sizes="100vw"
          />
        ) : (
          <div className={styles.imageLoader} />
        )}
      </figure>
      <div className={styles.mobileContainer}>
        <h3 className={styles.mobileTitle}>Mobile adapted</h3>
        <p className={styles.mobileDesc}>{dataId?.adaptationEn}</p>
      </div>
      <ul className={styles.mobileImgContainer}>
        {dataId?.mobileImages.map((img) => (
          <li key={v4()} className={styles.mobileItem}>
            <figure className={styles.mobileImgItem}>
              <CldImage
                src={img}
                alt="мобільна версія сайту"
                fill={true}
                loading="lazy"
                sizes="25vw"
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurProjectIdSection;
