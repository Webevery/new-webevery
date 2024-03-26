'use client';

import { useContext, useState } from 'react';
import { SiteContext } from '@/context/siteContext';
import BlogFilterItem from './BlogFilterItem/BlogFilterItem';
import styles from './BlogFilter.module.scss';

const BlogFilter = ({ filter, title, setFilterArr, filterArr }) => {
  const { blogFilterShown, blogSorterShown } = useContext(SiteContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFilterClear, setIsFilterClear] = useState(false);

  const isFilterShown =
    blogFilterShown || blogSorterShown
      ? `${styles.blogShow} ${styles.blogShowOpen}`
      : `${styles.blogShow} ${styles.blogShowClose}`;

  return (
    <div className={isFilterShown}>
      <h3 className={styles.blogShowTitle}>{title}</h3>
      <ul className={styles.blogShowList}>
        {filter.map(({ id, direction, directionEn }) => (
          <li key={id} className={styles.blogShowItem}>
            <BlogFilterItem
              title={direction}
              titleEn={directionEn}
              id={id}
              setFilterArr={setFilterArr}
              filterArr={filterArr}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              setIsFilterClear={setIsFilterClear}
              isFilterClear={isFilterClear}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogFilter;
