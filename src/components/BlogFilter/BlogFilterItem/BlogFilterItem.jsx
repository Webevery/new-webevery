'use client';

// import { fiterBlog } from '@/data/blog';
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
  filterArr,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    setIsChecked(false);
    setIsFilterClear(false);
    if (!activeIndex) {
      setFilterArr([]);
    }
    // eslint-disable-next-line
  }, [isFilterClear, activeIndex]);

  useEffect(() => {
    isFilterChecked();
    // eslint-disable-next-line
  }, [activeIndex]);

  const isFilterChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleBlogForFilter = () => {
    setFilterArr(
      (filterArr) =>
        isChecked ? filterArr.filter((blog) => blog !== title) : [title]
      // : [...filterArr, title]
    );
  };

  const handleCheckboxChange = () => {
    if (id === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
      toggleBlogForFilter();
    }

    setIsFilterClear(false);
  };

  const IconIsChecked =
    id === activeIndex
      ? styles.checked + ' ' + styles.checkedOn
      : styles.checked + ' ' + styles.checkedOff;

  // const IconIsChecked = isChecked
  //   ? styles.checked + ' ' + styles.checkedOn
  //   : styles.checked + ' ' + styles.checkedOff;

  return (
    <div className={styles.blogShowContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        value={title}
        aria-label={i18n.language === currentLanguages.EN ? titleEn : title}
        // checked={isChecked}
        checked={id === activeIndex}
        // onChange={() => {
        //   setActiveIndex(id),
        //     isFilterChecked(),
        //     toggleBlogForFilter(),
        //     setIsFilterClear(false);
        // }}
        onChange={() => handleCheckboxChange()}
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
