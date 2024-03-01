'use client';

import { useEffect, useState } from 'react';
import styles from '../BlogFilter/BlogFilterItem/BlogFilterItem.module.scss';

const BlogSorterItem = ({
  titleEn,
  title,
  id,
  setActiveIndex,
  activeIndex,
  setIsFilterClear,
  isFilterClear,
  sorterArr,
  setSorterArr,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
    setIsFilterClear(false);

    // eslint-disable-next-line
  }, [isFilterClear]);

  useEffect(() => {
    isFilterChecked();
    // eslint-disable-next-line
  }, [activeIndex]);

  const isFilterChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleBlogForSorter = (e) => {
    const value = e.target.value;

    if (!isChecked && value === 'Sort from A to Z') {
      setSorterArr('AZ');
    } else if (!isChecked && value === 'Sort from Z to A') {
      setSorterArr('ZA');
    } else {
      setSorterArr('');
    }
  };

  const IconIsChecked = isChecked
    ? styles.checked + ' ' + styles.checkedOn
    : styles.checked + ' ' + styles.checkedOff;

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
            toggleBlogForSorter(e),
            setIsFilterClear(false);
        }}
      />
      <label htmlFor={id} className={styles.blogCheckboxDesc}>
        <svg className={IconIsChecked}>
          <use href="sprite.svg#icon-checked" />
        </svg>
        {titleEn}
      </label>
    </div>
  );
};

export default BlogSorterItem;
