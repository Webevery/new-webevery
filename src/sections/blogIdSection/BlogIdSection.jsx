'use client';

import { useRouter, usePathname } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { GetIdDataFromSection } from '@/fetch/ClientFetch';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { currentLanguages } from '@/data/languages';
import NotFound from '@/components/NotFound/NotFound';
import Loading from '@/components/Loading/Loading';

import styles from './BlogIdSection.module.scss';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import BlogIdSlider from '@/components/BlogIdSlider/BlogIdSlider';
import { useEffect, useState } from 'react';

const BlogIdSection = ({ params }) => {
  const { slug } = params;

  const { data, error, isLoading } = GetIdDataFromSection('blogs', slug);

  console.log(data);

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
          (
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
                  <span className={styles.publishedDate}>
                    {' '}
                    {format(new Date(data.updatedAt), 'dd.MM.yyyy')}
                  </span>
                </h4>
                <p className={styles.publishedAutor}>
                  by: <span className={styles.publishedDate}>Webevery</span>
                </p>
              </div>
              <figure className={styles.ImgContainer}>
                <CldImage
                  src={data?.mainImage}
                  alt="картинка для блогу"
                  fill={true}
                  className={styles.img}
                />
              </figure>
              <ul className={styles.blogIdDescContainer}>
                {data?.blocks.map(
                  ({ subTitle, subTitleEn, text, textEn, image }, index) => (
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
                            alt="картинка для блогу"
                            fill={true}
                            className={styles.img}
                          />
                        </figure>
                      )}
                    </li>
                  )
                )}
              </ul>
              <p className={styles.blogIdEpilogue}>
                {i18n.language === currentLanguages.EN
                  ? data?.pilogueEn
                  : data?.epilogue}
              </p>
              <h3 className={styles.interestingBlogs}>
                Також вам буде цікаво:
              </h3>
              {!isSmallScreen && <BlogIdSlider slug={data?.slug} />}
            </div>
            {isSmallScreen && <BlogIdSlider slug={data?.slug} />}
          </div>
          )
        </section>
      )}
    </>
  );
};

export default BlogIdSection;
