'use client';

import { useContext, useState } from 'react';
import { SiteContext } from '@/context/siteContext';
import BlogSorterItem from './BlogSorterItem';
import styles from '../BlogFilter/BlogFilter.module.scss';

const BlogSorter = ({ sorter, title, sorterArr, setSorterArr }) => {
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
        {sorter.map(({ id, title, titleEn }) => (
          <li key={id} className={styles.blogShowItem}>
            <BlogSorterItem
              title={title}
              titleEn={titleEn}
              id={id}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              setIsFilterClear={setIsFilterClear}
              isFilterClear={isFilterClear}
              sorterArr={sorterArr}
              setSorterArr={setSorterArr}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSorter;
