'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { blogSorter } from '@/data/blog';

import { v4 } from 'uuid';

import { SiteContext } from '@/context/siteContext';
import BlogFilterButton from '@/components/BlogFilterButton/BlogFilterButton';
import BlogFilter from '@/components/BlogFilter/BlogFilter';
import { GetDataFromSection } from '@/fetch/ClientFetch';
import BlogSorter from '@/components/BlogSorter/BlogSorter';

import styles from './BlogSection.module.scss';
import BlogCardItem from '@/components/BlogCardItem/BlogCardItem';
import { PaginationContext } from '@/context/PaginationContext';
import PaginationPage from '@/components/PaginationPage/PaginationPage';

const BlogSection = () => {
  const [loadedCount, setLoadedCount] = useState(9);
  const [showLoading, setShowLoading] = useState(false);
  const [filterArr, setFilterArr] = useState([]);
  const [directionArr, setDirectionArr] = useState([]);
  const [sorterArr, setSorterArr] = useState('');

  const { i18n, t } = useTranslation();

  const { data, isLoading } = GetDataFromSection('blog');

  const containerRef = useRef();

  /// fiter ///

  const { blogFilterShown, blogSorterShown, searchTerm, searchBlog } =
    useContext(SiteContext);

      const filteredByIsShownData = data?.filter(
    (item) => item.isShown === true
  );

  const filterBlogArr = filteredByIsShownData
    ?.filter(({ direction, titleEn, mainTextEn, title, mainText }) => {
      const combinedText =
        `${titleEn} ${mainTextEn} ${title} ${mainText}`.toLowerCase();
      const directionCondition = filterArr.every((blogFilter) =>
        direction.includes(blogFilter)
      );

      const searchCondition = searchBlog
        ? combinedText.includes(searchTerm.toLowerCase())
        : true;

      return directionCondition && searchCondition;
    })
    .slice();

  /// sort ///

  if (sorterArr === 'AZ') {
    filterBlogArr.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
  }

  if (sorterArr === 'ZA') {
    filterBlogArr.sort((a, b) => b.titleEn.localeCompare(a.titleEn));
  }

  if (sorterArr === 'NO') {
    filterBlogArr.sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  }

  if (sorterArr === 'ON') {
    filterBlogArr.sort((a, b) => {
      return Date.parse(a.createdAt) - Date.parse(b.createdAt);
    });
  }

  ///

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

  /// uniqueDirections ///

  useEffect(() => {
    if (data) {
      const uniqueDirections = [...new Set(data.map((item) => item.direction))];

      const newDirections = uniqueDirections.map((direction) => {
        const correspondingObject = data.find(
          (item) => item.direction === direction
        );
        const directionEn = correspondingObject
          ? correspondingObject.directionEn
          : '';

        return {
          directionEn: directionEn,
          direction: direction,
          id: v4(),
        };
      });
      setDirectionArr(newDirections);
    }
  }, [data]);

  /// pagination ///

  const { firstIndex, lastIndex, recordsPerPage } =
    useContext(PaginationContext);

  const records = filterBlogArr?.slice(firstIndex, lastIndex);
  const npage = filterBlogArr
    ? Math.ceil(filterBlogArr?.length / recordsPerPage)
    : 0;
  const numbers = [...Array(npage + 1).keys()].slice(1);

  /// Sortfrom new to old ///

  const sortBlogsByDateDescending = (blogs) => {
    if (!blogs) return [];
    return blogs.slice().sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  };

  const sortedBlogs =
    sorterArr !== '' ? records : sortBlogsByDateDescending(records);

  /// animation shown filter/sort ///

  const cartContainerFilter =
    blogFilterShown || blogSorterShown
      ? !isLoading && filterBlogArr?.length <= 0
        ? `${styles.cartContainer} ${styles.cartContainerNotFound}`
        : blogFilterShown && directionArr.length <= 6
          ? `${styles.cartContainer} ${styles.cartContainerOpen}`
          : `${styles.cartContainer} ${styles.cartContainerOpenDirectionMore}`
      : !isLoading && filterBlogArr?.length <= 0
        ? `${styles.cartContainer} ${styles.cartContainerCloseNotFound}`
        : `${styles.cartContainer} `;

  return (
    <section>
      <div className="container">
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
              sorter={blogSorter}
              title="Sorter"
              sorterArr={sorterArr}
              setSorterArr={setSorterArr}
            />
          )}
          {blogFilterShown && (
            <BlogFilter
              filter={directionArr}
              title="Filter"
              setFilterArr={setFilterArr}
              filterArr={filterArr}
            />
          )}

          {sortedBlogs
            ?.slice(0, loadedCount)
            .map(
              ({
                slug,
                mainImage,
                titleEn,
                title,
                mainTextEn,
                mainText,
                createdAt,
              }) => (
                <BlogCardItem
                  key={slug}
                  slug={slug}
                  mainImage={mainImage}
                  titleEn={titleEn}
                  title={title}
                  mainTextEn={mainTextEn}
                  mainText={mainText}
                  createdAt={createdAt}
                />
              )
            )}
          {!isLoading && filterBlogArr?.length <= 0 && (
            <li className={styles.notFoundTextStyles}>
              <p>{t('BlogPage.NoArticles')}</p>
            </li>
          )}
        </ul>
        {filterBlogArr && filterBlogArr.length > recordsPerPage && (
          <PaginationPage numbers={numbers} npage={npage} />
        )}

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
