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

  const isFilterChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleBlogForFilter = () => {
    if (!isChecked) {
      setFilterArr((filterArr) => [...filterArr, titleEn]);
    } else {
      setFilterArr((filterArr) => filterArr.filter((blog) => blog != titleEn));
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
        onChange={() => {
          setActiveIndex(id),
            isFilterChecked(),
            toggleBlogForFilter(),
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

export default BlogFilterItem;
