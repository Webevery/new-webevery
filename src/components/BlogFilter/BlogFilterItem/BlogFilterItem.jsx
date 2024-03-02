'use client';

import { fiterBlog } from '@/data/blog';
import { currentLanguages } from '@/data/languages';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { i18n } = useTranslation();

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
    setFilterArr((filterArr) =>
      isChecked
        ? filterArr.filter((blog) => blog !== title)
        : [...filterArr, title]
    );
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
        aria-label={i18n.language === currentLanguages.EN ? titleEn : title}
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
        {i18n.language === currentLanguages.EN ? titleEn : title}
      </label>
    </div>
  );
};

export default BlogFilterItem;
