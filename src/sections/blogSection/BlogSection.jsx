'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { fiterBlog } from '@/data/blog';
import { SiteContext } from '@/context/siteContext';
import BlogFilterButton from '@/components/BlogFilterButton/BlogFilterButton';
import BlogFilter from '@/components/BlogFilter/BlogFilter';
import styles from './BlogSection.module.scss';
import { GetDataFromSection } from '@/fetch/ClientFetch';
import { CldImage } from 'next-cloudinary';

import BlogSorter from '@/components/BlogSorter/BlogSorter';
import { useTranslation } from 'react-i18next';
import { currentLanguages, t } from '@/data/languages';

const BlogSection = () => {
  const [loadedCount, setLoadedCount] = useState(9);
  const [showLoading, setShowLoading] = useState(false);
  const [filterArr, setFilterArr] = useState([]);
  const [sorterArr, setSorterArr] = useState('');

  const { i18n,t } = useTranslation();

  const { data, error, isLoading } = GetDataFromSection('blogs');

  const containerRef = useRef();

  const { blogFilterShown, blogSorterShown, searchTerm, searchBlog } =
    useContext(SiteContext);

  const filterBlogArr = data
    ?.filter(
      ({
        // directionEn,
        direction,
        titleEn,
        descriptionEn,
        title,
        description,
      }) => {
        const combinedText =
          `${titleEn} ${descriptionEn} ${title} ${description}`.toLowerCase();

        const directionCondition = filterArr.every((blogFilter) =>
          direction.includes(blogFilter)
        );

        const searchCondition = searchBlog
          ? combinedText.includes(searchTerm.toLowerCase())
          : true;

        return directionCondition && searchCondition;
      }
    )
    .slice();

  if (sorterArr === 'AZ') {
    filterBlogArr.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
  }

  if (sorterArr === 'ZA') {
    filterBlogArr.sort((a, b) => b.titleEn.localeCompare(a.titleEn));
  }

  const handleScroll = () => {
    const container = containerRef.current;

    if (!showLoading && data?.length && container) {
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bottomOffset = containerHeight - scrollY - windowHeight;

      if (bottomOffset < 50 && loadedCount < data.length) {
        setShowLoading(true);

        setTimeout(() => {
          setLoadedCount(loadedCount + 3);
          setShowLoading(false);
        }, 500);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [data, loadedCount]);

  const cartContainerFilter =
    blogFilterShown || blogSorterShown
      ? !isLoading && filterBlogArr?.length <= 0
        ? `${styles.cartContainer} ${styles.cartContainerNotFound}`
        : `${styles.cartContainer} ${styles.cartContainerOpen}`
      : !isLoading && filterBlogArr?.length <= 0
      ? `${styles.cartContainer} ${styles.cartContainerCloseNotFound}`
      : `${styles.cartContainer}`;

  // function truncateText(text, maxLength) {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength - 9) + '...';
  //   } else {
  //     return text;
  //   }
  // }

  return (
    <section className={styles.blog}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.titleBlogContainer}>
          <h1 className={styles.titleBlog}>
            <span>Webevery</span> {!isLoading && t('BlogPage.GenSubTitle')}
          </h1>
          {<h2 className={styles.descBlog}>
            {!isLoading && t('BlogPage.SubTitle')}
          </h2>}
        </div>
        <BlogFilterButton />

        <ul ref={containerRef} className={cartContainerFilter}>
          {blogSorterShown && (
            <BlogSorter
              sorter={fiterBlog.blogSorter}
              title="Sorter"
              sorterArr={sorterArr}
              setSorterArr={setSorterArr}
            />
          )}
          {blogFilterShown && (
            <BlogFilter
              filter={fiterBlog.blogFilter}
              title="Filter"
              setFilterArr={setFilterArr}
              filterArr={filterArr}
            />
          )}

          {filterBlogArr
            ?.slice(0, loadedCount)
            .map(
              ({
                slug,
                images,
                titleEn,
                title,
                descriptionEn,
                description,
              }) => (
                <li key={slug} className={styles.cartItem}>
                  <div className={styles.cartImgContainer}>
                    <CldImage
                      src={images[0]}
                      alt="img blog"
                      fill="true"
                      className={styles.cartImg}
                      sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
                    />
                  </div>

                  <h3 className={styles.cartTitle}>
                    {i18n.language === currentLanguages.EN ? titleEn : title}
                  </h3>
                  {/* <p className={styles.cartDesc}>{truncateText(desc, 41)}</p> */}
                  <p className={styles.cartDesc}>
                    {i18n.language === currentLanguages.EN
                      ? descriptionEn
                      : description}
                  </p>
                  <div className={styles.bottomContainer}>
                    <p className={styles.date}>11.02.2024</p>
                    <Link href={`/blog/${slug}`} className={styles.readMore}>
                      <span className={styles.readMoreTitle}>{t('Buttons.CardDetailsBtn')}</span>
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
              )
            )}
          {!isLoading && filterBlogArr?.length <= 0 && (
            <li className={styles.notFoundTextStyles}>
              <p>{t('BlogPage.NoArticles')}</p>
            </li>
          )}
        </ul>

        {showLoading && (
          <div className={styles.loading}>
            <h3 className={styles.loadingText}>{t('LoadStatus.Load')}</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
