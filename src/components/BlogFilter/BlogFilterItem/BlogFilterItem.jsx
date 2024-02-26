'use client';

import { useEffect, useState } from 'react';
import styles from './BlogFilterItem.module.scss';

const BlogFilterItem = ({
  titleEn,
  title,
  id,
  setFilterArr,
  setActiveIndex,
  activeIndex,
  setIsFilterClear,
  isFilterClear,
  sorterArr,
  setSorterArr,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const isFilterChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  // const toggleBlogForSorter = async (e) => {
  //   const value = e.target.value;

  //   if (isChecked && value === 'Sort from A to Z') {
  //     await setSorterArr(true);
  //   } else {
  //     await setSorterArr(false);
  //   }
  // };

  const toggleBlogForFilter = () => {
    setSorterArr(false);
    if (!isChecked) {
      setFilterArr((filterArr) => [...filterArr, titleEn]);
    } else {
      setFilterArr((filterArr) => filterArr.filter((blog) => blog != titleEn));
    }
  };

  // if (titleEn === 'Sort from A to Z') {
  //   const sortedData = data?.sort((a, b) => a.title.localeCompare(b.title));
  //   setFilterArr(sortedData);
  // }

  useEffect(() => {
    setIsChecked(false);
    setIsFilterClear(false);
    setFilterArr([]);

    // eslint-disable-next-line
  }, [isFilterClear]);

  useEffect(() => {
    isFilterChecked();
    // eslint-disable-next-line
  }, [activeIndex]);

  return (
    <div className={styles.blogShowContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        value={titleEn}
        checked={isChecked}
        onChange={(e) => {
          setActiveIndex(id),
            isFilterChecked(),
            toggleBlogForFilter(),
            // toggleBlogForSorter(e),
            setIsFilterClear(false);
        }}
      />
      <label htmlFor={id} className={styles.blogCheckboxDesc}>
        <svg
          className={
            isChecked
              ? styles.checked + ' ' + styles.checkedOn
              : styles.checked + ' ' + styles.checkedOff
          }
        >
          <use href="sprite.svg#icon-checked" />
        </svg>
        {titleEn}
      </label>
    </div>
  );
};

export default BlogFilterItem;
