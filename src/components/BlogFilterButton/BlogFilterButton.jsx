'use client';

import { useContext } from 'react';
import { SiteContext } from '@/context/siteContext';
import styles from './BlogFilterButton.module.scss';

const BlogFilter = () => {
  const {
    blogFilterShown,
    setBlogFilterShown,
    blogSorterShown,
    setBlogSorterShown,
    searchTerm,
    setSearchTerm,
    setSearchBlog,
  } = useContext(SiteContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.btnRow}>
        <div className={styles.btnWrapper}>
          <button
            className={styles.btnFilter}
            type="button"
            onClick={() => {
              setBlogSorterShown(!blogSorterShown);
              setBlogFilterShown(false);
            }}
          >
            <svg className={styles.filterIcon}>
              <use href="sprite.svg#icon-sorter" />
            </svg>
          </button>
        </div>
        <div className={styles.btnWrapper}>
          <button
            className={styles.btnFilter}
            type="button"
            onClick={() => {
              setBlogFilterShown(!blogFilterShown);
              setBlogSorterShown(false);
            }}
          >
            <svg className={styles.filterIcon}>
              <use href="sprite.svg#icon-filter" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.filterSearchContainer}>
        <input
          type="text"
          placeholder="search"
          className={styles.filterSearch}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className={styles.btnWrapper + ' ' + styles.btnWrapperSearch}>
          <button
            className={styles.btnFilter}
            type="button"
            onClick={() => {
              setSearchBlog(true);
            }}
          >
            <svg className={styles.filterIcon}>
              <use href="sprite.svg#icon-search" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
