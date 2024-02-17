'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blog, blogFilter, blogSorter } from '@/data/blog';
import { SiteContext } from '@/context/siteContext';
import BlogFilterButton from '@/components/BlogFilterButton/BlogFilterButton';
import BlogFilter from '@/components/BlogFilter/BlogFilter';
import styles from './BlogSection.module.scss';

const BlogSection = () => {
  const [loadedCount, setLoadedCount] = useState(9);
  const [showLoading, setShowLoading] = useState(false);

  const containerRef = useRef();

  const { blogFilterShown, blogSorterShown } = useContext(SiteContext);

  // function truncateText(text, maxLength) {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength - 9) + '...';
  //   } else {
  //     return text;
  //   }
  // }

  const handleScroll = () => {
    const container = containerRef.current;

    if (!showLoading && blog?.length && container) {
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bottomOffset = containerHeight - scrollY - windowHeight;

      if (bottomOffset < 50 && loadedCount < blog.length) {
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
  }, [blog, loadedCount]);

  const cartContainerFilter =
    blogFilterShown || blogSorterShown
      ? `${styles.cartContainer} ${styles.cartContainerOpen}`
      : `${styles.cartContainer}`;

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
          {blogSorterShown && <BlogFilter filter={blogSorter} title="Sorter" />}
          {blogFilterShown && <BlogFilter filter={blogFilter} title="Filter" />}

          {blog.slice(0, loadedCount).map(({ id, img, title, desc }) => (
            <li key={id} className={styles.cartItem}>
              <div className={styles.cartImgContainer}>
                <Image
                  src={img}
                  alt="img blog"
                  fill="true"
                  className={styles.cartImg}
                  sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
                />
              </div>

              <h3 className={styles.cartTitle}>{title}</h3>
              {/* <p className={styles.cartDesc}>{truncateText(desc, 41)}</p> */}
              <p className={styles.cartDesc}>{desc}</p>
              <Link href={`/blog/${id}`} className={styles.readMore}>
                <span className={styles.readMoreTitle}>Read more</span>
                <svg className={styles.readMoreIcon}>
                  <linearGradient
                    id="paint0_linear_3004_8704"
                    x1="6.97336e-08"
                    y1="6.28477"
                    x2="11.302"
                    y2="-9.00003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FAFF00" />
                    <stop offset="0.466629" stopColor="#00F0FF" />
                    <stop offset="1" stopColor="#0400B3" />
                  </linearGradient>
                  <use
                    href="sprite.svg#icon-arrowReadMore"
                    style={{ fill: 'url(#paint0_linear_3004_8704)' }}
                  />
                </svg>
              </Link>
            </li>
          ))}
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
