'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { blogFilter, blogSorter } from '@/data/blog';
import { SiteContext } from '@/context/siteContext';
import BlogFilterButton from '@/components/BlogFilterButton/BlogFilterButton';
import BlogFilter from '@/components/BlogFilter/BlogFilter';
import styles from './BlogSection.module.scss';
import { GetDataFromSection } from '@/fetch/ClientFetch';
import { CldImage } from 'next-cloudinary';

const BlogSection = () => {
  const [loadedCount, setLoadedCount] = useState(9);
  const [showLoading, setShowLoading] = useState(false);
  const [filterArr, setFilterArr] = useState([]);
  const [sorterArr, setSorterArr] = useState(false);

  const { data, error, isLoading } = GetDataFromSection('blogs');

  const containerRef = useRef();

  const { blogFilterShown, blogSorterShown, searchTerm, searchBlog } =
    useContext(SiteContext);

  const filterBlogArr = data?.filter(
    ({ directionEn, titleEn, descriptionEn, title, description }) => {
      const combinedText =
        `${titleEn} ${descriptionEn} ${title} ${description}`.toLowerCase();

      const directionCondition = filterArr.every((blogFilter) =>
        directionEn.includes(blogFilter)
      );

      const searchCondition = searchBlog
        ? combinedText.includes(searchTerm.toLowerCase())
        : true;

      // const sortedData = sorterArr
      //   ? data?.sort((a, b) => a.titleEn.localeCompare(b.titleEn))
      //   : true;
      return directionCondition && searchCondition;
    }
  );
  // .slice()
  // .sort((a, b) => {
  //   if (sorterArr) {
  //     const directionComparison = a.directionEn.localeCompare(b.directionEn);
  //     return directionComparison === 0
  //       ? a.titleEn.localeCompare(b.titleEn)
  //       : directionComparison;
  //   } else {
  //     return 0;
  //   }
  // })
  // .slice();

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
            <span>Webevery</span> Blog
          </h1>
          <h2 className={styles.descBlog}>
            here is you can read useful articles
          </h2>
        </div>
        <BlogFilterButton />

        <ul ref={containerRef} className={cartContainerFilter}>
          {blogSorterShown && (
            <BlogFilter
              filter={blogSorter}
              title="Sorter"
              setFilterArr={setFilterArr}
              sorterArr={sorterArr}
              setSorterArr={setSorterArr}
            />
          )}
          {blogFilterShown && (
            <BlogFilter
              filter={blogFilter}
              title="Filter"
              setFilterArr={setFilterArr}
              sorterArr={sorterArr}
              setSorterArr={setSorterArr}
            />
          )}

          {filterBlogArr
            ?.slice(0, loadedCount)
            .map(({ slug, images, titleEn, descriptionEn }) => (
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

                <h3 className={styles.cartTitle}>{titleEn}</h3>
                {/* <p className={styles.cartDesc}>{truncateText(desc, 41)}</p> */}
                <p className={styles.cartDesc}>{descriptionEn}</p>
                <Link href={`/blog/${slug}`} className={styles.readMore}>
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
              </li>
            ))}
          {!isLoading && filterBlogArr?.length <= 0 && (
            <li className={styles.notFoundTextStyles}>
              <p>Статей не найдено!</p>
            </li>
          )}
        </ul>

        {showLoading && (
          <div className={styles.loading}>
            <h3 className={styles.loadingText}>Loading...</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
