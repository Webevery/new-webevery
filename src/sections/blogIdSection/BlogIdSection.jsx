'use client';
import { useRouter, usePathname } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from 'react-i18next';
import { GetIdDataFromSection } from '@/fetch/ClientFetch';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { currentLanguages } from '@/data/languages';
import NotFound from '@/components/NotFound/NotFound';
import Loading from '@/components/Loading/Loading';

import styles from './BlogIdSection.module.scss';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import BlogIdSlider from '@/components/BlogIdSlider/BlogIdSlider';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/dateUtils';

const BlogIdSection = ({ params }) => {
  const { slug } = params;

  const { data, error, isLoading } = GetIdDataFromSection('blog', slug);

  const pathname = usePathname();
  const isPathExist = useCheckPathname(pathname);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();
  const { i18n, t } = useTranslation();

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

  const formattedDate = formatDate(data?.updatedAt);

  return (
    <>
      {isLoading && <Loading className={styles.loading} />}
      {!isLoading && !isPathExist && (
        <NotFound
          title={t('BlogIdPage.NotFound')}
          buttonTitle={t('BlogIdPage.NotFoundTitleBtn')}
          href="/blog"
        />
      )}
      {!isLoading && isPathExist && (
        <section className={styles.blog}>
          <div className={`container ${styles.blogIdContainer}`}>
            <BreadCrumbs
              onClick={() => router.push('/blog')}
              title={t('BlogIdPage.NavBtn')}
              classNameContainer={styles.backContainer}
              classNameIcon={styles.backIcon}
            />
            <div className={styles.blogIdContent}>
              <h1 className={styles.blogTitle}>
                {i18n.language === currentLanguages.EN
                  ? data?.titleEn
                  : data?.title}
              </h1>
              <div className={styles.publishedContainer}>
                <h4 className={styles.publishedTitle}>
                  Published:{' '}
                  <span className={styles.publishedDate}> {formattedDate}</span>
                </h4>
                <p className={styles.publishedAutor}>
                  by: <span className={styles.publishedDate}>Webevery</span>
                </p>
              </div>
              <figure className={styles.ImgContainer}>
                <CldImage
                  src={data?.mainImage}
                  alt={data?.title}
                  fill={true}
                  as="image"
                  className={styles.img}
                  sizes="(max-width: 768px) 655px, (max-width: 1440px) 777px"
                />
              </figure>
              <p className={styles.blogIdMainText + ' ' + styles.blogIdDesc}>
                {i18n.language === currentLanguages.EN
                  ? data?.mainTextEn
                  : data?.mainText}
              </p>
              <ul className={styles.blogIdDescContainer}>
                {data?.blocks.map(
                  (
                    {
                      subTitle,
                      subTitleEn,
                      text,
                      textEn,
                      image,
                      imageDescription,
                    },
                    index
                  ) => (
                    <li key={index} className={styles.blogIdDescItem}>
                      <h3 className={styles.blogIdSubtitle}>
                        {i18n.language === currentLanguages.EN
                          ? subTitleEn
                          : subTitle}
                      </h3>
                      <p className={styles.blogIdDesc}>
                        {i18n.language === currentLanguages.EN ? textEn : text}
                      </p>
                      {image && (
                        <figure className={styles.ImgContainer}>
                          <CldImage
                            src={image}
                            alt={imageDescription}
                            fill={true}
                            as="image"
                            className={styles.img}
                            sizes="(max-width: 768px) 655px, (max-width: 1440px) 777px"
                          />
                        </figure>
                      )}
                    </li>
                  )
                )}
              </ul>
              <p className={styles.blogIdEpilogue + ' ' + styles.blogIdDesc}>
                {i18n.language === currentLanguages.EN
                  ? data?.epilogueEn
                  : data?.epilogue}
              </p>
              <h4 className={styles.interestingBlogs}>
                {t('BlogIdPage.SubTitle')}
              </h4>
              {!isSmallScreen && <BlogIdSlider slug={data?.slug} />}
            </div>
            {isSmallScreen && <BlogIdSlider slug={data?.slug} />}
          </div>
        </section>
      )}
    </>
  );
};

export default BlogIdSection;
