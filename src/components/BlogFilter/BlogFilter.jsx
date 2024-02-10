import styles from './BlogFilter.module.scss';
import stylescBtn from '../Buttons/Btns.module.scss';

const BlogFilter = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}>
        <button
          className={stylescBtn.btn + ' ' + styles.btnFilter}
          type="button"
        >
          <svg className={styles.filterIcon}>
            <use href="sprite.svg#icon-sorter" />
          </svg>
        </button>
      </div>
      <div className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}>
        <button
          className={stylescBtn.btn + ' ' + styles.btnFilter}
          type="button"
        >
          <svg className={styles.filterIcon}>
            <use href="sprite.svg#icon-filter" />
          </svg>
        </button>
      </div>
      <div className={styles.filterSearchContainer}>
        <input
          type="text"
          placeholder="search"
          className={styles.filterSearch}
        />
        <div className={stylescBtn.btnWrapper + ' ' + styles.btnWrapper}>
          <button
            className={stylescBtn.btn + ' ' + styles.btnFilter}
            type="button"
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
