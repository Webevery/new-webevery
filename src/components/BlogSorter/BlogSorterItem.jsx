'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { currentLanguages } from '@/data/languages';
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

  const { i18n } = useTranslation();

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

  const toggleBlogForSorter = (value) => {
    if (value === 'Sort from A to Z') {
      setSorterArr('AZ');
    } else if (value === 'Sort from Z to A') {
      setSorterArr('ZA');
    } else {
      setSorterArr('');
    }
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    if (id === activeIndex) {
      setActiveIndex(null);
      toggleBlogForSorter('');
    } else {
      setActiveIndex(id);
      toggleBlogForSorter(value);
    }

    setIsFilterClear(false);
  };

  const IconIsChecked =
    id === activeIndex
      ? styles.checked + ' ' + styles.checkedOn
      : styles.checked + ' ' + styles.checkedOff;

  return (
    <div className={styles.blogShowContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        value={titleEn}
        aria-label={i18n.language === currentLanguages.EN ? titleEn : title}
        checked={id === activeIndex}
        onChange={(e) => handleCheckboxChange(e)}
      />
      <label htmlFor={id} className={styles.blogCheckboxDesc}>
        <svg className={IconIsChecked}>
          <use href="sprite.svg#icon-checked" />
        </svg>
        {i18n.language === currentLanguages.EN ? titleEn : title}
      </label>
    </div>
  );
};

export default BlogSorterItem;
