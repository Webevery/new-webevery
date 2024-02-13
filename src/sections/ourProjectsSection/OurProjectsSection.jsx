import { ourProjectData } from '@/data/ourProjectData';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurProjectsSection.module.scss';
import stylescBtn from '../../components/Buttons/Btns.module.scss';

const OurProjectsSection = () => {
  return (
    <section>
      <div className={`container ${styles.projectContainer}`}>
        <h1 className={styles.title}>Our Projects</h1>
        <ul className={styles.ourProjectsList}>
          {ourProjectData.map(({ id, title, titleGradient, img, desc }) => (
            <li key={id} className={styles.ourProjectsItem}>
              <figure className={styles.ourProjectsImgContainer}>
                <Image
                  src={img}
                  alt="фото сайту"
                  fill={true}
                  className={styles.img}
                />
              </figure>
              <div className={styles.ourProjectsContent}>
                {/* <h3
                  className={
                    title === 'Site for'
                      ? styles.ourProjectsTitle
                      : styles.ourProjectsTitle +
                        ' ' +
                        styles.ourProjectsTitleReverse
                  }
                >
                  <span className={styles.ourProjectsTitleGradient}>
                    {title}
                  </span>
                  <span>{titleGradient}</span>
                  {titleGradient === 'ICE CREAM' && (
                    <span className={styles.ourProjectsTitleGradient}>
                      cafe
                    </span>
                  )}
                </h3> */}
                <h3 className={styles.ourProjectsTitle}>
                  {title === 'Site for' ? (
                    <>
                      <span className={styles.ourProjectsTitleGradient}>
                        {title}
                      </span>{' '}
                      {titleGradient}
                    </>
                  ) : (
                    <>
                      {titleGradient}{' '}
                      <span className={styles.ourProjectsTitleGradient}>
                        {title}
                      </span>
                    </>
                  )}{' '}
                  {titleGradient === 'ICE CREAM' && (
                    <span className={styles.ourProjectsTitleGradient}>
                      cafe
                    </span>
                  )}
                </h3>

                <p className={styles.ourProjectsDesc}>{desc}</p>
                <Link href={`/ourProjects/${id}`} className={styles.readMore}>
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
                <div
                  className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}
                >
                  <a
                    href="#"
                    className={stylescBtn.btn + ' ' + styles.openSite}
                  >
                    Open site
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurProjectsSection;
