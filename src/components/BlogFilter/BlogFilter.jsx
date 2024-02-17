'use client';

import { useContext, useState } from 'react';
import { SiteContext } from '@/context/siteContext';
import BlogFilterItem from './BlogFilterItem/BlogFilterItem';
import styles from './BlogFilter.module.scss';

const BlogFilter = ({ filter, title }) => {
  const {
    blogFilterShown,
    // setBlogFilterShown,
    blogSorterShown,
    // setBlogSorterShown,
  } = useContext(SiteContext);

  const isFilterShown =
    blogFilterShown || blogSorterShown
      ? `${styles.blogShow} ${styles.blogShowOpen}`
      : `${styles.blogShow} ${styles.blogShowClose}`;

  return (
    <div className={isFilterShown}>
      <h3 className={styles.blogShowTitle}>{title}</h3>
      <ul className={styles.blogShowList}>
        {filter.map(({ id, title }) => (
          <li key={id} className={styles.blogShowItem}>
            <BlogFilterItem title={title} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogFilter;
