'use client';

import styles from './OurProjectId.module.scss';
import stylescBtn from '../Buttons/Btns.module.scss';
import { CldImage } from 'next-cloudinary';
import { v4 } from 'uuid';

const OurProjectId = ({ data }) => {
  console.log(data);
  return (
    <div className={`container ${styles.ourProjectContainer}`}>
      <h1 className={styles.ourProjectsTitle}>
        {data.titleEn === 'Site for' ? (
          <>
            <span className={styles.ourProjectsTitleGradient}>
              {data.titleEn}
            </span>{' '}
            {data.titleGradientEn}
          </>
        ) : (
          <>
            {data.titleGradientEn}{' '}
            <span className={styles.ourProjectsTitleGradient}>
              {data.titleEn}
            </span>
          </>
        )}{' '}
        {data.titleGradientEn === 'ICE CREAM' && (
          <span className={styles.ourProjectsTitleGradient}>cafe</span>
        )}
      </h1>
      <div className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}>
        <a
          href={data.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={data.titleGradientEn}
          className={stylescBtn.btn + ' ' + styles.openSite}
        >
          Open site
        </a>
      </div>
      <figure className={styles.imgContainer}>
        <CldImage src={data.heroImage} alt="фото сайту" fill={true} />
      </figure>
      <ul className={styles.contentWraper}>
        <li className={styles.contentItem}>
          <h3 className={styles.contentTitle}>Problem</h3>
          <p className={styles.contentDesc}>{data.problemTextEn}</p>
        </li>
        <li className={styles.contentItem}>
          <h3 className={styles.contentTitle}>Solution</h3>
          <p className={styles.contentDesc}>{data.solutionTextEn}</p>
        </li>
        <li className={styles.contentItem}>
          <h3 className={styles.contentTitle}>How it`s help for business</h3>
          <p className={styles.contentDesc}>{data.helpTextEn}</p>
        </li>
      </ul>
      <figure className={styles.imgScreensContainer}>
        <CldImage src={data.screensImage} alt="фото сайту" fill={true} />
      </figure>
      <div className={styles.mobileContainer}>
        <h3 className={styles.mobileTitle}>Mobile adapted</h3>
        <p className={styles.mobileDesc}>{data.adaptationTextEn}</p>
      </div>
      <ul className={styles.mobileImgContainer}>
        {data.mobileImages.map((img) => (
          <li key={v4()} className={styles.mobileItem}>
            <figure className={styles.mobileImgItem}>
              <CldImage src={img} alt="мобільна версія сайту" fill={true} />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProjectId;
