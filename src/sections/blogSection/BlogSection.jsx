'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fiterBlog } from '@/data/blog';
import { SiteContext } from '@/context/siteContext';
import BlogFilterButton from '@/components/BlogFilterButton/BlogFilterButton';
import BlogFilter from '@/components/BlogFilter/BlogFilter';
import { GetDataFromSection } from '@/fetch/ClientFetch';
import BlogSorter from '@/components/BlogSorter/BlogSorter';

import styles from './BlogSection.module.scss';
import BlogCardItem from '@/components/BlogCardItem/BlogCardItem';

const BlogSection = () => {
  const [loadedCount, setLoadedCount] = useState(9);
  const [showLoading, setShowLoading] = useState(false);
  const [filterArr, setFilterArr] = useState([]);
  const [sorterArr, setSorterArr] = useState('');

  const { i18n, t } = useTranslation();

  const { data, error, isLoading } = GetDataFromSection('blogs');

  const containerRef = useRef();

  const { blogFilterShown, blogSorterShown, searchTerm, searchBlog } =
    useContext(SiteContext);

  const filterBlogArr = data
    ?.filter(({ direction, titleEn, descriptionEn, title, description }) => {
      const combinedText =
        `${titleEn} ${descriptionEn} ${title} ${description}`.toLowerCase();

      const directionCondition = filterArr.every((blogFilter) =>
        direction.includes(blogFilter)
      );

      const searchCondition = searchBlog
        ? combinedText.includes(searchTerm.toLowerCase())
        : true;

      return directionCondition && searchCondition;
    })
    .slice();

  if (sorterArr === 'AZ') {
    filterBlogArr.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
  }

  if (sorterArr === 'ZA') {
    filterBlogArr.sort((a, b) => b.titleEn.localeCompare(a.titleEn));
  }

  if (sorterArr === 'NO') {
    filterBlogArr.sort((a, b) => {
      return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
    });
  }

  if (sorterArr === 'ON') {
    filterBlogArr.sort((a, b) => {
      return Date.parse(a.updatedAt) - Date.parse(b.updatedAt);
    });
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
      : `${styles.cartContainer} `;

  return (
    <section className={styles.blog}>
      <div className={`container ${styles.blogContainer}`}>
        <div className={styles.titleBlogContainer}>
          <h1 className={styles.titleBlog}>
            <span>Webevery</span> {!isLoading && t('BlogPage.GenSubTitle')}
          </h1>
          {
            <h2 className={styles.descBlog}>
              {!isLoading && t('BlogPage.SubTitle')}
            </h2>
          }
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
                updatedAt,
              }) => (
                <BlogCardItem
                  key={slug}
                  slug={slug}
                  images={images}
                  titleEn={titleEn}
                  title={title}
                  descriptionEn={descriptionEn}
                  description={description}
                  updatedAt={updatedAt}
                />
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
