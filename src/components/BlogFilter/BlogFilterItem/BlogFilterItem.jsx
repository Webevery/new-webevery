'use client';

import { useState } from 'react';
import styles from './BlogFilterItem.module.scss';

const BlogFilterItem = ({ title, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.blogShowContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
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
        {title}
      </label>
    </div>
  );
};

export default BlogFilterItem;
