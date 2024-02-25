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
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const isAmenityChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleAmenityForFilter = () => {
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
  }, [isFilterClear]);

  useEffect(() => {
    isAmenityChecked();
  }, [activeIndex]);

  return (
    <div className={styles.blogShowContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => {
          setActiveIndex(id),
            isAmenityChecked(),
            toggleAmenityForFilter(),
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
